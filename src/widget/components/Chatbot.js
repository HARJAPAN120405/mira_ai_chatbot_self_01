import { mergeConfig } from '../core/config.js';
import { getStyles } from './styles.js';
import { renderHeader } from './Header.js';
import {
    renderMessageList,
    createTextMessage,
    createProductCard,
    createProductCarousel,
    createSkeletonProductRow,
    createSuggestionChips,
    createYourCartCard,
    createOrderHistoryCard,
    createCheckoutFlowCard,
    createQuickActionGrid,
    parseMarkdown,
    parseOrderConfirmationFromText
} from './MessageList.js';
import { renderInputArea } from './InputArea.js';
import { createTypingIndicator } from './TypingIndicator.js';
import { getAIResponse } from '../services/ai.js';
import { checkoutSendOtp, checkoutVerifyOtp, checkoutGetAddresses, checkoutAddAddress, checkoutPlaceOrder, cartGet, cartAdd, cartRemoveOne, cartRemoveAll } from '../services/api.js';
import { applyMagnetic } from '../utils/magnetic.js';
import { getRelevantSuggestionChips } from '../utils/suggestionChips.js';
import { createToastAPI } from '../utils/toast.js';

export function initChatbot(userConfig) {
    const config = mergeConfig(userConfig);
    console.log('Chatbot initialized in Shadow DOM with config:', config);

    // Phase 20: Generate a unique Session ID to track authentication
    let sessionId = sessionStorage.getItem('ecom-session-id');
    if (!sessionId) {
        sessionId = 'sess_' + Math.random().toString(36).substring(2, 9);
        sessionStorage.setItem('ecom-session-id', sessionId);
    }

    // 1. Create the Host Element
    // We attach it to the body or a specified parentElement, but everything else goes inside its shadowRoot
    const targetParent = config.parentElement || document.body;

    // Cleanup previous instance before re-initializing
    const existingHost = targetParent.querySelector('#ecom-chatbot-host');
    if (existingHost) {
        existingHost.remove();
    }

    const hostElement = document.createElement('div');
    hostElement.id = 'ecom-chatbot-host';
    targetParent.appendChild(hostElement);

    // 2. Attach Shadow DOM (open mode so we can inspect it easily for debugging)
    const shadowRoot = hostElement.attachShadow({ mode: 'open' });

    // Toast helper (Sonner-style approximation)
    const toastApi = createToastAPI(shadowRoot);

    // 3. Inject CSS
    const styleElement = document.createElement('style');
    styleElement.textContent = getStyles(config);
    shadowRoot.appendChild(styleElement);

    // 4. Build the UI Structure
    const wrapper = document.createElement('div');
    wrapper.className = 'ecom-chatbot-wrapper';

    // Chat Window
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chatbot-window';

    const messageList = renderMessageList();

    function smoothScrollToBottom() {
        messageList.scrollTo({ top: messageList.scrollHeight, behavior: 'smooth' });
    }

    function applyMessageGrouping() {
        let prevRole = null;
        const nodes = Array.from(messageList.children).filter(
            (n) => n.classList && !n.hasAttribute('data-skeleton') &&
                (n.classList.contains('chatbot-message') || n.classList.contains('typing-indicator-wrapper'))
        );
        nodes.forEach((node) => {
            const isUser = node.classList.contains('user');
            const isBot = node.classList.contains('bot') || node.classList.contains('typing-indicator-wrapper');
            const role = isUser ? 'user' : isBot ? 'bot' : null;
            if (role) {
                node.classList.remove('group-same', 'group-first');
                if (prevRole === role) {
                    node.classList.add('group-same');
                } else {
                    node.classList.add('group-first');
                }
                prevRole = role;
            }
        });
    }

    let chatHistory = []; // Add state to keep track of the LLM agent memory

    // Phase 19: Session Storage & Persistence
    try {
        const storedHistory = sessionStorage.getItem('ecom-chat-history');
        if (storedHistory) {
            chatHistory = JSON.parse(storedHistory);
            console.log("Restored chat history from session:", chatHistory);
        }
    } catch (e) {
        console.error("Failed to parse session chat history", e);
    }

    // Checkout state
    let checkoutState = {
        step: null,
        authMode: 'login',
        name: '',
        email: '',
        selectedAddressId: null,
        paymentMethod: '',
        subtotal: 0
    };

    const mockAddresses = [
        { id: '1', type: 'home', name: 'John Doe', street: '123 Main Street, Apt 4B', city: 'New York', state: 'NY', zip: '10001', phone: '+1 (555) 123-4567' }
    ];

    // Handle checkout actions from the UI
    const handleCheckoutAction = async (action, data) => {
        if (action === 'changeAuthMode') {
            checkoutState.authMode = data.mode;
            if (data.mode === 'mobile') checkoutState.step = 'mobile';
            renderCheckoutMsg();
        } 
        else if (action === 'submitMobile') {
            const mobile = (data.mobile || '').replace(/\D/g, '').slice(-10);
            try {
                const result = await checkoutSendOtp(sessionId, mobile, config.apiBaseUrl);
                if (!result.success) {
                    toastApi.showToast({ title: 'Error', message: result.message || 'Could not send OTP' });
                    return;
                }
                checkoutState.mobile = mobile;
                checkoutState.step = 'otp';
                const code = result.code || '';
                toastApi.showToast({ title: 'OTP Sent', message: code ? `Your OTP: ${code} (see backend console)` : result.message });
            } catch (e) {
                toastApi.showToast({ title: 'Error', message: 'Could not send OTP. Is the backend running?' });
                return;
            }
            renderCheckoutMsg();
        }
        else if (action === 'verifyOtp') {
            const code = (data.code || '').replace(/\D/g, '').slice(0, 4);
            try {
                const result = await checkoutVerifyOtp(sessionId, checkoutState.mobile, code, config.apiBaseUrl);
                if (!result.success) {
                    toastApi.showToast({ title: 'Verification failed', message: result.message || 'Invalid OTP. Use the code from backend.' });
                    return;
                }
                const addrs = await checkoutGetAddresses(sessionId, config.apiBaseUrl);
                checkoutState.addresses = Array.isArray(addrs) ? addrs : [];
                checkoutState.isAuthenticated = true;
            } catch (e) {
                toastApi.showToast({ title: 'Error', message: 'Verification failed. Use the OTP shown in backend console.' });
                return;
            }
            checkoutState.step = 'address';
            const addrs = checkoutState.addresses || mockAddresses;
            if (addrs.length && (checkoutState.selectedAddressId == null || !addrs.some(a => (a.id ?? 0) === checkoutState.selectedAddressId)))
                checkoutState.selectedAddressId = addrs[0]?.id ?? 0;
            messageList.appendChild(createTextMessage('Continue to address selection', false, config));
            smoothScrollToBottom();
            renderCheckoutMsg();
        }
        else if (action === 'submitAuth') {
            checkoutState.email = data.email;
            checkoutState.name = data.name;
            toastApi.showToast({ title: 'Successfully logged in!', message: '' });
            checkoutState.isAuthenticated = true;
            checkoutState.step = 'address';
            const addrs = checkoutState.addresses || mockAddresses;
            if (!checkoutState.selectedAddressId && addrs.length) checkoutState.selectedAddressId = addrs[0].id;
            messageList.appendChild(createTextMessage('Continue to address selection', false, config));
            smoothScrollToBottom();
            renderCheckoutMsg();
        }
        else if (action === 'addAddress') {
            if (data.address && config.apiBaseUrl) {
                try {
                    const result = await checkoutAddAddress(sessionId, data.address, config.apiBaseUrl);
                    if (!result.success) {
                        toastApi.showToast({ title: 'Error', message: result.message || 'Could not add address' });
                        return;
                    }
                    const addrs = await checkoutGetAddresses(sessionId, config.apiBaseUrl);
                    checkoutState.addresses = addrs;
                    checkoutState.selectedAddressId = result.id;
                    toastApi.showToast({ title: 'Address saved', message: '' });
                } catch (e) {
                    toastApi.showToast({ title: 'Error', message: 'Could not add address' });
                    return;
                }
            }
            renderCheckoutMsg();
        }
        else if (action === 'selectAddress') {
            checkoutState.selectedAddressId = data.id;
            renderCheckoutMsg();
        }
        else if (action === 'continueToPayment') {
            checkoutState.step = 'payment';
            if (!checkoutState.paymentMethod) checkoutState.paymentMethod = 'cod';
            messageList.appendChild(createTextMessage('Continue to payment', false, config));
            smoothScrollToBottom();
            renderCheckoutMsg();
        }
        else if (action === 'selectPayment') {
            checkoutState.paymentMethod = data.method;
            renderCheckoutMsg();
        }
        else if (action === 'placeOrder') {
            try {
                const addressId = checkoutState.selectedAddressId != null ? Number(checkoutState.selectedAddressId) : 0;
                const result = await checkoutPlaceOrder(sessionId, addressId, checkoutState.paymentMethod || 'cod', config.apiBaseUrl);
                if (!result.success) {
                    toastApi.showToast({ title: 'Order failed', message: result.message || 'Could not place order' });
                    return;
                }
                checkoutState.orderItems = (result.items || []).map((i) => ({ name: i.title, price: typeof i.price === 'string' ? i.price : `$${Number(i.price).toFixed(2)}`, quantity: 1, image: null }));
                checkoutState.orderId = result.orderId;
                if (setCartCount) setCartCount(0);
            } catch (e) {
                toastApi.showToast({ title: 'Error', message: 'Could not place order. Is the backend running?' });
                return;
            }
            checkoutState.step = 'confirmation';
            messageList.appendChild(createTextMessage('Place order', false, config));
            smoothScrollToBottom();
            renderCheckoutMsg();
            toastApi.showToast({ title: 'Order Placed', message: 'Thank you! Check "Order history" to see it.' });
        }
    };

    const CHECKOUT_STEP_MESSAGES = {
        mobile: "To complete your order, please login or create an account.",
        otp: "",
        address: "Please select a delivery address or add a new one.",
        payment: "Choose your preferred payment method.",
        confirmation: "Your order has been placed successfully! You'll receive a confirmation email shortly."
    };

    let lastCheckoutMsg = null;
    const renderCheckoutMsg = async () => {
        const step = checkoutState.step;
        if (step === 'address' && config.apiBaseUrl && (!checkoutState.addresses || checkoutState.addresses.length === 0)) {
            try {
                checkoutState.addresses = await checkoutGetAddresses(sessionId, config.apiBaseUrl);
            } catch (e) {
                checkoutState.addresses = [];
            }
        }
        const payload = {
            step,
            data: {
                addresses: checkoutState.addresses || mockAddresses,
                subtotal: checkoutState.subtotal ?? cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0),
                orderItems: checkoutState.orderItems || []
            },
            state: checkoutState
        };
        const newCard = createCheckoutFlowCard(payload, { onAction: handleCheckoutAction });
        const stepMessage = CHECKOUT_STEP_MESSAGES[step] || "";

        if (lastCheckoutMsg) {
            const content = lastCheckoutMsg.querySelector('.chatbot-message-content') || lastCheckoutMsg;
            const existingCheckout = content.querySelector('.chatbot-checkout-wrapper');
            const bubble = lastCheckoutMsg.querySelector('.chatbot-bubble');
            if (bubble) bubble.innerHTML = stepMessage ? parseMarkdown(stepMessage) : '';
            if (existingCheckout) {
                existingCheckout.replaceWith(newCard);
                smoothScrollToBottom();
                return;
            }
        }

        const botMsg = createTextMessage(stepMessage, true, config);
        const content = document.createElement('div');
        content.className = 'chatbot-message-content';
        const bubble = botMsg.querySelector('.chatbot-bubble');
        bubble.parentNode.insertBefore(content, bubble);
        content.appendChild(bubble);
        content.appendChild(newCard);

        messageList.appendChild(botMsg);
        lastCheckoutMsg = botMsg;
        smoothScrollToBottom();
        applyMessageGrouping();
    };

    // Cart badge state
    let cartCount = 0;
    let setCartCount = null;

    // Handle sending a message
    const handleSend = async (text) => {
        const presets = chatWindow.querySelector('.chatbot-presets');
        if (presets) presets.remove();
        const quickActionGrid = chatWindow.querySelector('.chatbot-quick-actions-grid');
        if (quickActionGrid) quickActionGrid.remove();

        const userMsg = createTextMessage(text, false, config);
        messageList.appendChild(userMsg);
        smoothScrollToBottom();

        const typingIndicator = createTypingIndicator();
        messageList.appendChild(typingIndicator);
        smoothScrollToBottom();

        const historyContext = [...chatHistory];
        chatHistory.push({ role: 'user', content: text });
        sessionStorage.setItem('ecom-chat-history', JSON.stringify(chatHistory));

        let botTextMsg = null;
        let aiFullText = "";
        let firstResponseReceived = false;
        let lastBotBlock = null;  // carousel or text message — chips added only once in onDone
        let lastCarouselData = null;
        let skeletonRow = null; // only shown when loading products

        const removeIndicatorAndSkeleton = () => {
            if (typingIndicator.parentNode) messageList.removeChild(typingIndicator);
            if (skeletonRow && skeletonRow.parentNode) messageList.removeChild(skeletonRow);
        };

        const triggerOrbRipple = () => {
            if (isOpen) return;
            const orb = wrapper.querySelector('.chatbot-toggle-btn');
            if (orb && !orb.querySelector('.chatbot-ripple-ring')) {
                const ripple = document.createElement('span');
                ripple.className = 'chatbot-ripple-ring';
                orb.appendChild(ripple);
                setTimeout(() => ripple.remove(), 1400);
            }
        };

        const onStatus = (statusText) => {
            if (typingIndicator.setStatus) typingIndicator.setStatus(statusText);
            // Skeleton only when user asked to show products (product-search status)
            const productRelated = statusText && /searching|product|looking for|options|recommend/i.test(statusText);
            if (productRelated && !skeletonRow) {
                skeletonRow = createSkeletonProductRow();
                messageList.appendChild(skeletonRow);
                smoothScrollToBottom();
            }
        };

        const onToken = (token) => {
            removeIndicatorAndSkeleton();
            if (!firstResponseReceived) {
                firstResponseReceived = true;
                triggerOrbRipple();
            }
            if (!botTextMsg) {
                botTextMsg = createTextMessage("", true, config, handleSend);
                messageList.appendChild(botTextMsg);
                lastBotBlock = botTextMsg;
            }
            aiFullText += token;
            const bubble = botTextMsg.querySelector('.chatbot-bubble');
            if (bubble) bubble.innerHTML = parseMarkdown(aiFullText);
            smoothScrollToBottom();
        };

        const onData = (carouselData) => {
            removeIndicatorAndSkeleton();
            if (!firstResponseReceived) {
                firstResponseReceived = true;
                triggerOrbRipple();
            }
            // Ensure intro message appears BEFORE cards (backend may send carousel before streamed text)
            const introLines = ["Here's what we have:", "Have a look at these.", "Here are some picks."];
            const introText = introLines[Math.floor(Math.random() * introLines.length)];
            if (!botTextMsg || !aiFullText.trim()) {
                botTextMsg = createTextMessage(introText, true, config, handleSend);
                messageList.appendChild(botTextMsg);
                aiFullText = introText;
            }
            const carouselMsg = createProductCarousel(carouselData, handleAddToCart, config);
            if (carouselMsg) {
                lastCarouselData = carouselData;
                lastBotBlock = carouselMsg;
                messageList.appendChild(carouselMsg);
                chatHistory.push({ role: 'bot', content: "Displayed a product carousel to the user.", carousel: carouselData });
            } else {
                lastBotBlock = botTextMsg;
            }
            sessionStorage.setItem('ecom-chat-history', JSON.stringify(chatHistory));
            applyMessageGrouping();
            smoothScrollToBottom();
        };

        const onCart = (cartData) => {
            removeIndicatorAndSkeleton();
            if (!firstResponseReceived) {
                firstResponseReceived = true;
                triggerOrbRipple();
            }
            if (!botTextMsg) {
                botTextMsg = createTextMessage("", true, config, handleSend);
                messageList.appendChild(botTextMsg);
            }
            const bubble = botTextMsg.querySelector('.chatbot-bubble');
            let contentCol = botTextMsg.querySelector('.chatbot-message-content');
            if (!contentCol && bubble) {
                contentCol = document.createElement('div');
                contentCol.className = 'chatbot-message-content';
                bubble.parentNode.insertBefore(contentCol, bubble);
                contentCol.appendChild(bubble);
            }
            const getCartCardOptions = (replaceCartCard) => ({
                onCheckout: () => handleSend("Proceed to checkout"),
                onUpdateQty: async (item, newQty) => {
                    const currentQty = item.quantity != null ? item.quantity : 1;
                    const title = item.title || item.name || '';
                    if (newQty <= 0) {
                        await cartRemoveAll(sessionId, title, config.apiBaseUrl);
                    } else if (newQty > currentQty) {
                        for (let i = currentQty; i < newQty; i++) {
                            await cartAdd(sessionId, title, item.size, config.apiBaseUrl);
                        }
                    } else {
                        for (let i = newQty; i < currentQty; i++) {
                            await cartRemoveOne(sessionId, title, config.apiBaseUrl);
                        }
                    }
                    const newData = await cartGet(sessionId, config.apiBaseUrl);
                    replaceCartCard(newData);
                },
                onRemove: async (item) => {
                    const title = item.title || item.name || '';
                    await cartRemoveAll(sessionId, title, config.apiBaseUrl);
                    const newData = await cartGet(sessionId, config.apiBaseUrl);
                    replaceCartCard(newData);
                },
            });
            let replaceCartCard;
            replaceCartCard = (newCartData) => {
                const oldCard = contentCol.querySelector('.chatbot-cart-card');
                if (!oldCard) return;
                const newCard = createYourCartCard(newCartData, getCartCardOptions(replaceCartCard));
                oldCard.replaceWith(newCard);
            };
            const cartCard = createYourCartCard(cartData, getCartCardOptions(replaceCartCard));
            if (cartCard && contentCol) {
                contentCol.appendChild(cartCard);
            } else if (cartCard) {
                botTextMsg.appendChild(cartCard);
            }
            const intro = aiFullText ? aiFullText : "Here’s what’s in your cart:";
            chatHistory.push({ role: 'bot', content: intro, cart: cartData });
            sessionStorage.setItem('ecom-chat-history', JSON.stringify(chatHistory));
            applyMessageGrouping();
            smoothScrollToBottom();
        };

        const onOrderHistory = (orderHistoryData) => {
            removeIndicatorAndSkeleton();
            if (!firstResponseReceived) {
                firstResponseReceived = true;
                triggerOrbRipple();
            }
            if (!botTextMsg) {
                botTextMsg = createTextMessage("", true, config, handleSend);
                messageList.appendChild(botTextMsg);
            }
            const bubble = botTextMsg.querySelector('.chatbot-bubble');
            let contentCol = botTextMsg.querySelector('.chatbot-message-content');
            if (!contentCol && bubble) {
                contentCol = document.createElement('div');
                contentCol.className = 'chatbot-message-content';
                bubble.parentNode.insertBefore(contentCol, bubble);
                contentCol.appendChild(bubble);
            }
            const orderCard = createOrderHistoryCard(orderHistoryData);
            if (orderCard && contentCol) {
                contentCol.appendChild(orderCard);
            } else if (orderCard) {
                botTextMsg.appendChild(orderCard);
            }
            const intro = aiFullText ? aiFullText : "Here’s your order history.";
            chatHistory.push({ role: 'bot', content: intro, orderHistory: orderHistoryData });
            sessionStorage.setItem('ecom-chat-history', JSON.stringify(chatHistory));
            applyMessageGrouping();
            smoothScrollToBottom();
        };

        const onDone = () => {
            removeIndicatorAndSkeleton();
            if (aiFullText) {
                chatHistory.push({ role: 'bot', content: aiFullText });
                sessionStorage.setItem('ecom-chat-history', JSON.stringify(chatHistory));
            }
            // If AI response is the backend checkout-tool confirmation markdown, replace with premium order card
            const parsedConfirmation = parseOrderConfirmationFromText(aiFullText || '');
            if (parsedConfirmation && lastBotBlock) {
                const payload = {
                    step: 'confirmation',
                    data: {
                        orderItems: parsedConfirmation.items,
                        addresses: [{ street: parsedConfirmation.shippingAddress }],
                        subtotal: parsedConfirmation.total
                    },
                    state: {
                        orderId: parsedConfirmation.orderId,
                        paymentMethod: parsedConfirmation.paymentMethod,
                        subtotal: parsedConfirmation.total,
                        orderItems: parsedConfirmation.items,
                        addresses: [{ street: parsedConfirmation.shippingAddress }],
                        selectedAddressId: 0
                    }
                };
                const card = createCheckoutFlowCard(payload, {});
                const contentCol = lastBotBlock.querySelector('.chatbot-message-content');
                const bubble = lastBotBlock.querySelector('.chatbot-bubble');
                if (contentCol) {
                    contentCol.innerHTML = '';
                    contentCol.appendChild(card);
                } else if (bubble) {
                    bubble.replaceWith(card);
                } else {
                    lastBotBlock.innerHTML = '';
                    lastBotBlock.appendChild(card);
                }
                applyMessageGrouping();
                smoothScrollToBottom();
            }
            // Add suggestion chips once, at the end of the response, to the last bot block (carousel or text)
            const isAddToCartSuccess = /added to (your )?(cart|shopping bag|bag)/i.test(aiFullText || '');
            const isPaymentOptionsMessage = /how would you like to pay|COD.*Prepaid|Prepaid.*COD|Cash on Delivery|Online Payment/i.test(aiFullText || '');
            const isOtpMessage = /one-time password|OTP|sent to your phone|enter the.*digit code|verify your identity|for demo purposes.*code/i.test(aiFullText || '');
            const isAddressMessage = /shipping address|saved addresses|add a new one|get your shipping|delivery address/i.test(aiFullText || '');
            let relevantChips;
            let chipSendFn = (label) => handleSend(label);
            if (isOtpMessage || isAddressMessage) {
                relevantChips = [];
            } else if (isAddToCartSuccess) {
                relevantChips = ['Proceed to checkout', 'Browse more products'];
            } else if (isPaymentOptionsMessage) {
                relevantChips = ['COD', 'PREPAID'];
                chipSendFn = (label) => handleSend(label === 'COD' ? 'cod' : label === 'PREPAID' ? 'prepaid' : label);
            } else {
                relevantChips = getRelevantSuggestionChips(aiFullText || (lastCarouselData ? (lastCarouselData || []).map((p) => p.title || '').join(' ') : ''), config.suggestionChips || [], 4);
            }
            if (relevantChips.length > 0 && lastBotBlock) {
                const chipWrap = createSuggestionChips(relevantChips, chipSendFn, config);
                chipWrap.classList.add('chatbot-chips-below');
                const bubble = lastBotBlock.querySelector('.chatbot-bubble');
                if (bubble) {
                    let contentCol = lastBotBlock.querySelector('.chatbot-message-content');
                    if (!contentCol) {
                        contentCol = document.createElement('div');
                        contentCol.className = 'chatbot-message-content';
                        bubble.parentNode.insertBefore(contentCol, bubble);
                        contentCol.appendChild(bubble);
                    }
                    contentCol.appendChild(chipWrap);
                } else {
                    lastBotBlock.appendChild(chipWrap);
                }
            }
            applyMessageGrouping();
            smoothScrollToBottom();
        };

        await getAIResponse(text, historyContext, onToken, onData, onDone, sessionId, onStatus, onCart, onOrderHistory, config.apiBaseUrl || undefined);
    };

    const inputArea = renderInputArea(handleSend, config);

    const handleAddToCart = (product, selectedSize) => {
        const sizeText = selectedSize ? ` (Size: ${selectedSize})` : '';
        const successMsg = createTextMessage(`✅ Added 1x **${product.title}** ${sizeText} to your cart for ${product.price}!`, true, config);
        messageList.appendChild(successMsg);
        applyMessageGrouping();
        smoothScrollToBottom();
        window.dispatchEvent(new CustomEvent('ecom-add-to-cart', { detail: { product, selectedSize } }));
        if (setCartCount) {
            setCartCount(cartCount + 1);
        }
        if (toastApi && product) {
            toastApi.showToast({
                title: 'Added to cart',
                message: `${product.title || ''} · ${product.price || ''}`,
                image: product.image
            });
        }
    };

    if (chatHistory.length > 0) {
        chatHistory.forEach(msg => {
            if (msg.role === 'user') {
                messageList.appendChild(createTextMessage(msg.content, false, config));
            } else if (msg.role === 'bot') {
                if (msg.carousel) {
                    const restoredCarousel = createProductCarousel(msg.carousel, handleAddToCart, config);
                    if (restoredCarousel) messageList.appendChild(restoredCarousel);
                } else if (msg.cart) {
                    const botMsg = createTextMessage(msg.content || "Here’s what’s in your cart:", true, config);
                    const bubble = botMsg.querySelector('.chatbot-bubble');
                    if (bubble) {
                        const contentCol = document.createElement('div');
                        contentCol.className = 'chatbot-message-content';
                        bubble.parentNode.insertBefore(contentCol, bubble);
                        contentCol.appendChild(bubble);
                        const getCartCardOptions = (replaceCartCard) => ({
                            onCheckout: () => handleSend("Proceed to checkout"),
                            onUpdateQty: async (item, newQty) => {
                                const currentQty = item.quantity != null ? item.quantity : 1;
                                const title = item.title || item.name || '';
                                if (newQty <= 0) {
                                    await cartRemoveAll(sessionId, title, config.apiBaseUrl);
                                } else if (newQty > currentQty) {
                                    for (let i = currentQty; i < newQty; i++) {
                                        await cartAdd(sessionId, title, item.size, config.apiBaseUrl);
                                    }
                                } else {
                                    for (let i = newQty; i < currentQty; i++) {
                                        await cartRemoveOne(sessionId, title, config.apiBaseUrl);
                                    }
                                }
                                const newData = await cartGet(sessionId, config.apiBaseUrl);
                                replaceCartCard(newData);
                            },
                            onRemove: async (item) => {
                                const title = item.title || item.name || '';
                                await cartRemoveAll(sessionId, title, config.apiBaseUrl);
                                const newData = await cartGet(sessionId, config.apiBaseUrl);
                                replaceCartCard(newData);
                            },
                        });
                        let replaceCartCard;
                        replaceCartCard = (newCartData) => {
                            const oldCard = contentCol.querySelector('.chatbot-cart-card');
                            if (!oldCard) return;
                            const newCard = createYourCartCard(newCartData, getCartCardOptions(replaceCartCard));
                            oldCard.replaceWith(newCard);
                        };
                        const cartCard = createYourCartCard(msg.cart, getCartCardOptions(replaceCartCard));
                        if (cartCard) contentCol.appendChild(cartCard);
                    }
                    messageList.appendChild(botMsg);
                } else if (msg.orderHistory) {
                    const botMsg = createTextMessage(msg.content || "Here’s your order history.", true, config);
                    const bubble = botMsg.querySelector('.chatbot-bubble');
                    if (bubble) {
                        const contentCol = document.createElement('div');
                        contentCol.className = 'chatbot-message-content';
                        bubble.parentNode.insertBefore(contentCol, bubble);
                        contentCol.appendChild(bubble);
                        const orderCard = createOrderHistoryCard(msg.orderHistory);
                        if (orderCard) contentCol.appendChild(orderCard);
                    }
                    messageList.appendChild(botMsg);
                } else if (msg.content && parseOrderConfirmationFromText(msg.content)) {
                    const parsed = parseOrderConfirmationFromText(msg.content);
                    const payload = {
                        step: 'confirmation',
                        data: { orderItems: parsed.items, addresses: [{ street: parsed.shippingAddress }], subtotal: parsed.total },
                        state: { orderId: parsed.orderId, paymentMethod: parsed.paymentMethod, subtotal: parsed.total, orderItems: parsed.items, addresses: [{ street: parsed.shippingAddress }], selectedAddressId: 0 }
                    };
                    const botMsg = createTextMessage('', true, config, handleSend);
                    const bubble = botMsg.querySelector('.chatbot-bubble');
                    const card = createCheckoutFlowCard(payload, {});
                    if (bubble) bubble.replaceWith(card);
                    else botMsg.appendChild(card);
                    messageList.appendChild(botMsg);
                } else if (msg.content && msg.content !== "Displayed a product carousel to the user.") {
                    messageList.appendChild(createTextMessage(msg.content, true, config));
                }
            }
        });
        applyMessageGrouping();
        smoothScrollToBottom();
    } else {
        const welcomeTxt = config.welcomeMessage ?? "Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?";
        const botMsg = createTextMessage(welcomeTxt, true, config);
        messageList.appendChild(botMsg);
        
        // 2x2 Quick Action Grid — from config.quickActions (customizable in panel)
        const defaultQuickActions = [
            { title: 'Browse Collections', desc: 'View all products', message: 'Show me your collections' },
            { title: 'View Cart', desc: 'See shopping bag', message: 'View my cart' },
            { title: 'Order Status', desc: 'Track orders', message: 'Order status' },
            { title: 'Track My Order', desc: 'Get updates', message: 'Track my order' }
        ];
        const quickActions = (config.quickActions && config.quickActions.length >= 4)
            ? config.quickActions.slice(0, 4)
            : defaultQuickActions;
        const grid = createQuickActionGrid(quickActions, {
            onAction: (_type, data) => {
                const msg = data.message != null && String(data.message).trim() ? data.message : data.title;
                if (msg) handleSend(msg);
            }
        });
        messageList.appendChild(grid);
        
        chatHistory.push({ role: 'bot', content: welcomeTxt });
    }

    // Launcher and open/close state (before header so we can pass closeChat)
    const orbWrapper = document.createElement('div');
    orbWrapper.className = 'chatbot-orb-wrapper';
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'chatbot-toggle-btn';
    toggleBtn.setAttribute('aria-label', 'Open chat');
    const launcherSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
    toggleBtn.innerHTML = config.launcherIconUrl
        ? `<img src="${config.launcherIconUrl}" alt="Chat" />`
        : launcherSvg;
    orbWrapper.appendChild(toggleBtn);

    let isOpen = false;
    let hasOpenedOnce = false;
    const wasOpen = sessionStorage.getItem('ecom-chatbot-open') === 'true';

    const welcomeBubble = document.createElement('div');
    welcomeBubble.className = 'welcome-bubble';
    welcomeBubble.innerHTML = `<span style="vertical-align: middle; font-size: 14px; font-weight: 600;">Need help? 👋</span>`;

    function scheduleWelcomeReappear() {
        setTimeout(() => {
            if (!isOpen) {
                welcomeBubble.classList.remove('hidden');
                setTimeout(() => {
                    welcomeBubble.classList.add('hidden');
                    scheduleWelcomeReappear();
                }, 5000);
            } else {
                scheduleWelcomeReappear();
            }
        }, 15000);
    }
    setTimeout(() => {
        welcomeBubble.classList.add('hidden');
        scheduleWelcomeReappear();
    }, 5000);

    const openChat = () => {
        isOpen = true;
        hasOpenedOnce = true;
        sessionStorage.setItem('ecom-chatbot-open', 'true');
        welcomeBubble.classList.add('hidden');
        chatWindow.classList.add('is-open');
        toggleBtn.innerHTML = config.launcherIconUrl
            ? `<img src="${config.launcherIconUrl}" alt="Chat" />`
            : launcherSvg;
        setTimeout(smoothScrollToBottom, 50);
    };

    const closeChat = () => {
        isOpen = false;
        sessionStorage.setItem('ecom-chatbot-open', 'false');
        chatWindow.classList.remove('is-open');
        toggleBtn.innerHTML = config.launcherIconUrl
            ? `<img src="${config.launcherIconUrl}" alt="Chat" />`
            : launcherSvg;
    };

    const toggleChat = () => {
        welcomeBubble.classList.add('hidden');
        isOpen ? closeChat() : openChat();
    };
    toggleBtn.addEventListener('click', toggleChat);

    const header = renderHeader(config, {
        onClose: closeChat,
        onCartClick: () => {
            openChat();
            handleSend('View Cart');
        },
        cartCount: 0
    });

    // Cart badge updater (header + launcher)
    setCartCount = (nextCount) => {
        cartCount = Math.max(0, nextCount || 0);

        // Header cart badge
        const headerCartBtn = header.querySelector('button[aria-label="View cart"]');
        if (headerCartBtn) {
            let badge = headerCartBtn.querySelector('.chatbot-cart-badge');
            if (cartCount > 0) {
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'chatbot-cart-badge';
                    headerCartBtn.appendChild(badge);
                }
                badge.textContent = cartCount > 99 ? '99+' : String(cartCount);
            } else if (badge) {
                badge.remove();
            }
        }

        // Launcher badge
        let launcherBadge = toggleBtn.querySelector('.chatbot-launcher-badge');
        if (cartCount > 0) {
            if (!launcherBadge) {
                launcherBadge = document.createElement('span');
                launcherBadge.className = 'chatbot-launcher-badge';
                toggleBtn.appendChild(launcherBadge);
            }
            launcherBadge.textContent = cartCount > 99 ? '99+' : String(cartCount);
            launcherBadge.classList.remove('cart-badge-pop');
            // retrigger animation
            void launcherBadge.offsetWidth;
            launcherBadge.classList.add('cart-badge-pop');
        } else if (launcherBadge) {
            launcherBadge.remove();
        }
    };
    chatWindow.appendChild(header);
    chatWindow.appendChild(messageList);

    chatWindow.appendChild(inputArea);

    const footer = document.createElement('div');
    footer.className = 'chatbot-footer';
    footer.innerHTML = '<p>Powered by Aura AI</p>';
    chatWindow.appendChild(footer);

    // Auto-restore open state after DOM is assembled (done below)


    // Expose Public API
    if (window.EcomChatbot) {
        window.EcomChatbot.open = openChat;
        window.EcomChatbot.close = closeChat;
        window.EcomChatbot.toggle = toggleChat;
        window.EcomChatbot.sendMessage = (msg) => {
            openChat();
            handleSend(msg);
        };
        window.EcomChatbot.resetAnimation = () => {};
    }

    // 7. Assemble
    wrapper.appendChild(chatWindow);
    wrapper.appendChild(welcomeBubble);
    wrapper.appendChild(orbWrapper);
    shadowRoot.appendChild(wrapper);

    // 8. Restore open/closed state AFTER assembly so CSS transition works
    if (wasOpen) {
        openChat();
    }

    // 9. Welcome bubble typewriter (runs inside shadow root)
    (function () {
        const messages = [
            "Hi! I'm Aura, your shopping assistant.",
            "I can help you discover products.",
            "I can track your orders for you.",
            "Looking for the best deals? 🔥",
            "What brings you here today?",
        ];

        const el = shadowRoot.getElementById("typewriter-bubble");
        if (!el) return;

        let msgIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isPaused = false;

        const TYPE_SPEED = 68;
        const DELETE_SPEED = 38;
        const PAUSE_AFTER_TYPE = 1800;
        const PAUSE_AFTER_DELETE = 320;

        el.style.display = "inline-block";
        el.style.minWidth = "10px";

        const cursor = document.createElement("span");
        cursor.textContent = "|";
        cursor.style.cssText =
            "display:inline-block;margin-left:2px;animation:twCursor 0.8s steps(1) infinite;color:inherit;font-weight:300;opacity:0.7";

        const style = document.createElement("style");
        style.textContent =
            "@keyframes twCursor{0%,100%{opacity:1}50%{opacity:0}}";
        shadowRoot.appendChild(style);

        el.appendChild(cursor);

        function tick() {
            if (isPaused) return;

            const current = messages[msgIndex];

            if (!isDeleting) {
                charIndex++;
                el.firstChild && el.firstChild !== cursor
                    ? (el.firstChild.textContent = current.slice(0, charIndex))
                    : el.insertBefore(
                            document.createTextNode(current.slice(0, charIndex)),
                            cursor
                        );

                if (charIndex === current.length) {
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        isDeleting = true;
                        tick();
                    }, PAUSE_AFTER_TYPE);
                    return;
                }
            } else {
                charIndex--;
                if (el.firstChild && el.firstChild !== cursor) {
                    el.firstChild.textContent = current.slice(0, charIndex);
                }

                if (charIndex === 0) {
                    isDeleting = false;
                    msgIndex = (msgIndex + 1) % messages.length;
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        tick();
                    }, PAUSE_AFTER_DELETE);
                    return;
                }
            }

            setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
        }

        el.innerHTML = "";
        el.appendChild(document.createTextNode(""));
        el.appendChild(cursor);
        tick();
    })();
}
