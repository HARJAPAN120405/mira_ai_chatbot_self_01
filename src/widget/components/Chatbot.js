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
    parseMarkdown
} from './MessageList.js';
import { renderInputArea } from './InputArea.js';
import { createTypingIndicator } from './TypingIndicator.js';
import { getAIResponse } from '../services/ai.js';
import { applyMagnetic } from '../utils/magnetic.js';
import { getRelevantSuggestionChips } from '../utils/suggestionChips.js';
import { initLauncherFX } from './LauncherFX.js';
import { DEFAULT_THINKING_STATUSES } from '../core/config.js';

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

    const header = renderHeader(config);
    const messageList = renderMessageList();

    // Particle layer (first child of message list)
    const particlesDiv = document.createElement('div');
    particlesDiv.className = 'chatbot-messages-particles';
    particlesDiv.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 12; i++) {
        const p = document.createElement('span');
        p.className = 'particle-dot';
        p.style.left = `${10 + Math.random() * 80}%`;
        p.style.top = `${5 + Math.random() * 90}%`;
        p.style.animationDelay = `${Math.random() * 5}s`;
        particlesDiv.appendChild(p);
    }
    messageList.insertBefore(particlesDiv, messageList.firstChild);

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

    // Handle sending a message
    const handleSend = async (text) => {
        const presets = chatWindow.querySelector('.chatbot-presets');
        if (presets) presets.remove();

        const userMsg = createTextMessage(text, false, config);
        messageList.appendChild(userMsg);
        smoothScrollToBottom();

        const statuses = config.thinkingStatuses || DEFAULT_THINKING_STATUSES;
        const initialStatus = statuses[0] || 'Thinking...';
        const typingIndicator = createTypingIndicator(initialStatus);
        messageList.appendChild(typingIndicator);

        const skeletonRow = createSkeletonProductRow();
        messageList.appendChild(skeletonRow);
        smoothScrollToBottom();

        const historyContext = [...chatHistory];
        chatHistory.push({ role: 'user', content: text });
        sessionStorage.setItem('ecom-chat-history', JSON.stringify(chatHistory));

        let botTextMsg = null;
        let aiFullText = "";
        let firstResponseReceived = false;
        let lastBotBlock = null;  // carousel or text message — chips added only once in onDone
        let lastCarouselData = null;

        const removeIndicatorAndSkeleton = () => {
            if (typingIndicator.parentNode) messageList.removeChild(typingIndicator);
            if (skeletonRow.parentNode) messageList.removeChild(skeletonRow);
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
            const carouselMsg = createProductCarousel(carouselData, handleAddToCart, config);
            lastCarouselData = carouselData;
            lastBotBlock = carouselMsg;  // chips will be added once in onDone
            messageList.appendChild(carouselMsg);
            chatHistory.push({ role: 'bot', content: "Displayed a product carousel to the user.", carousel: carouselData });
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
            const cartCard = createYourCartCard(cartData, {
                onCheckout: () => handleSend("I'd like to proceed to checkout"),
                onAddMore: () => handleSend("I'd like to add something else"),
            });
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
            // Add suggestion chips once, at the end of the response, to the last bot block (carousel or text)
            const contextForChips = aiFullText || (lastCarouselData ? (lastCarouselData || []).map((p) => p.title || '').join(' ') : '');
            const relevantChips = getRelevantSuggestionChips(contextForChips, config.suggestionChips || [], 4);
            if (relevantChips.length > 0 && lastBotBlock) {
                const chipWrap = createSuggestionChips(relevantChips, (label) => handleSend(label), config);
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
    };

    if (chatHistory.length > 0) {
        chatHistory.forEach(msg => {
            if (msg.role === 'user') {
                messageList.appendChild(createTextMessage(msg.content, false, config));
            } else if (msg.role === 'bot') {
                if (msg.carousel) {
                    messageList.appendChild(createProductCarousel(msg.carousel, handleAddToCart, config));
                } else if (msg.cart) {
                    const botMsg = createTextMessage(msg.content || "Here’s what’s in your cart:", true, config);
                    const bubble = botMsg.querySelector('.chatbot-bubble');
                    if (bubble) {
                        const contentCol = document.createElement('div');
                        contentCol.className = 'chatbot-message-content';
                        bubble.parentNode.insertBefore(contentCol, bubble);
                        contentCol.appendChild(bubble);
                        const cartCard = createYourCartCard(msg.cart, {
                        onCheckout: () => handleSend("I'd like to proceed to checkout"),
                        onAddMore: () => handleSend("I'd like to add something else"),
                    });
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
                } else if (msg.content && msg.content !== "Displayed a product carousel to the user.") {
                    messageList.appendChild(createTextMessage(msg.content, true, config));
                }
            }
        });
        applyMessageGrouping();
        smoothScrollToBottom();
    } else {
        const defaultGreeting = `Hi! I can help you find products or answer questions about this store.`;
        messageList.appendChild(createTextMessage(defaultGreeting, true, config));
    }

    chatWindow.appendChild(header);
    chatWindow.appendChild(messageList);

    // Preset pills inside message list (same layer as chat — no distortion)
    if (config.presetQuestions && config.presetQuestions.length > 0 && chatHistory.length === 0) {
        const presetsContainer = document.createElement('div');
        presetsContainer.className = 'chatbot-presets';

        config.presetQuestions.forEach(question => {
            if (!question.trim()) return;
            const pb = document.createElement('button');
            pb.type = 'button';
            pb.className = 'preset-pill';
            pb.innerText = question;
            pb.addEventListener('click', () => {
                handleSend(question);
                presetsContainer.remove();
            });
            applyMagnetic(pb, { strength: 0.12, radius: 50 });
            presetsContainer.appendChild(pb);
        });

        if (presetsContainer.hasChildNodes()) {
            messageList.appendChild(presetsContainer);
        }
    }

    chatWindow.appendChild(inputArea);

    // Next-gen launcher: rings + orb (Hellorep-style)
    const orbWrapper = document.createElement('div');
    orbWrapper.className = 'chatbot-orb-wrapper';
    const ring1 = document.createElement('div');
    ring1.className = 'chatbot-launcher-ring chatbot-launcher-ring-1';
    const ring2 = document.createElement('div');
    ring2.className = 'chatbot-launcher-ring chatbot-launcher-ring-2';
    const ring3 = document.createElement('div');
    ring3.className = 'chatbot-launcher-ring chatbot-launcher-ring-3';
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'chatbot-toggle-btn';
    toggleBtn.setAttribute('aria-label', 'Open chat');
    toggleBtn.innerHTML = config.launcherIconUrl
        ? `<img src="${config.launcherIconUrl}" alt="Chat" />`
        : `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
    orbWrapper.appendChild(ring3);
    orbWrapper.appendChild(ring2);
    orbWrapper.appendChild(ring1);
    orbWrapper.appendChild(toggleBtn);

    // 5. Interaction Logic
    let isOpen = false;
    let hasOpenedOnce = false;

    // Restore open state from sessionStorage
    const wasOpen = sessionStorage.getItem('ecom-chatbot-open') === 'true';

    // Welcome Bubble (text filled by typewriter script below; id for targeting)
    const welcomeBubble = document.createElement('div');
    welcomeBubble.className = 'welcome-bubble';
    welcomeBubble.innerHTML = `
        <img src="${config.welcomeIconUrl || 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png'}" alt="icon" style="width: 16px; height: 16px; margin-right: 6px; vertical-align: middle; border-radius: 50%; object-fit: cover;" />
        <span id="typewriter-bubble" style="vertical-align: middle; font-size: 13px;"></span>
    `;

    // Auto-hide bubble if not opened in 15 seconds
    setTimeout(() => {
        if (!hasOpenedOnce) welcomeBubble.classList.add('hidden');
    }, 15000);

    const openChat = () => {
        isOpen = true;
        hasOpenedOnce = true;
        sessionStorage.setItem('ecom-chatbot-open', 'true');
        welcomeBubble.classList.add('hidden');
        chatWindow.classList.add('is-open');
        toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
    `;
        setTimeout(smoothScrollToBottom, 50);
    };

    const closeChat = () => {
        isOpen = false;
        sessionStorage.setItem('ecom-chatbot-open', 'false');
        chatWindow.classList.remove('is-open');
        toggleBtn.innerHTML = config.launcherIconUrl
            ? `<img src="${config.launcherIconUrl}" alt="Chat" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`
            : `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
    `;
    };

    let launcherFX = null;

    const toggleChat = () => {
        // Hide welcome bubble as soon as user clicks the launcher
        welcomeBubble.classList.add('hidden');
        // If LauncherFX hasn't played yet, let it handle the first open
        if (!isOpen && launcherFX && !launcherFX.hasPlayed) {
            const handled = launcherFX.trigger();
            if (handled) return; // animation will call openChat via onReady
        }
        isOpen ? closeChat() : openChat();
    };

    toggleBtn.addEventListener('click', toggleChat);

    // Auto-restore open state after DOM is assembled (done below)


    // 6. Expose Public API
    if (window.EcomChatbot) {
        window.EcomChatbot.open = openChat;
        window.EcomChatbot.close = closeChat;
        window.EcomChatbot.toggle = toggleChat;
        window.EcomChatbot.sendMessage = (msg) => {
            openChat();
            handleSend(msg);
        };
        window.EcomChatbot.resetAnimation = () => {
            if (launcherFX) launcherFX.reset();
        };
    }

    // 7. Assemble
    wrapper.appendChild(chatWindow);
    wrapper.appendChild(welcomeBubble);
    wrapper.appendChild(orbWrapper);
    shadowRoot.appendChild(wrapper);

    // 8. Initialize LauncherFX animation system
    // Skip animation if restoring a previously-open session
    launcherFX = initLauncherFX(shadowRoot, wrapper, orbWrapper, chatWindow, () => {
        // Called by LauncherFX when the animation finishes and chat should open
        isOpen = true;
        hasOpenedOnce = true;
        sessionStorage.setItem('ecom-chatbot-open', 'true');
        welcomeBubble.classList.add('hidden');
        // Note: lfx-spring + is-open classes are already added by LauncherFX
        toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>`;
        setTimeout(() => messageList.scrollTo({ top: messageList.scrollHeight, behavior: 'smooth' }), 50);
    });

    // 9. Restore open/closed state AFTER assembly so CSS transition works
    if (wasOpen) {
        openChat();
    }

    // 10. Welcome bubble typewriter (runs inside shadow root)
    (function () {
        const messages = [
            "May I help you? 😊",
            "Need help choosing a product?",
            "Looking for the best deals? 🔥",
            "Free shipping on orders over $50! 🚀",
            "Ask me anything about our store ✨",
            "Find your perfect size in seconds 📏",
            "New arrivals just dropped! 👀",
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
