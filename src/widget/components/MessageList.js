import { applyMagnetic } from '../utils/magnetic.js';
import { PRODUCTS, QUICK_ACTIONS, ANIMATIONS } from '../core/config.js';

// Inject keyframe styles once (for addMessage / createMessageList API)
const MESSAGELIST_STYLES = `
@keyframes messageIn {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes quickActionIn {
  from { opacity: 0; transform: translateY(10px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes slideInStagger {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes chipIn {
  from { opacity: 0; transform: translateY(5px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.messages-container::-webkit-scrollbar { display: none; }
.product-scroll::-webkit-scrollbar { display: none; }
`;

function injectMessageListStyles() {
    if (typeof document !== 'undefined' && !document.getElementById('messagelist-styles')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'messagelist-styles';
        styleTag.textContent = MESSAGELIST_STYLES;
        document.head.appendChild(styleTag);
    }
}
injectMessageListStyles();

/** New API: message list container with smooth animations (id="messages-container") */
export function createMessageList() {
    const container = document.createElement('div');
    container.id = 'messages-container';
    container.className = 'messages-container';
    container.style.cssText = `
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        animation: fadeIn 0.3s ${ANIMATIONS.easing} 0.25s both;
        scroll-behavior: smooth;
    `;
    container.style.setProperty('-ms-overflow-style', 'none');
    container.style.setProperty('scrollbar-width', 'none');
    return container;
}

/** New API: add a message (type, content, quickActions, products, cartItems, orders, suggestions) */
export function addMessage(message, onAddToCart, onSuggestionClick, containerOrRoot) {
    const container = containerOrRoot || (typeof document !== 'undefined' ? document.getElementById('messages-container') : null);
    if (!container) return;

    const messageEl = document.createElement('div');
    messageEl.className = `message ${message.type}`;
    messageEl.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: ${message.type === 'user' ? 'flex-end' : 'flex-start'};
        animation: messageIn ${ANIMATIONS.messageInDuration}ms ${ANIMATIONS.easing};
        transition: all ${ANIMATIONS.hoverDuration}ms ${ANIMATIONS.easing};
    `;

    const bubble = createMessageBubble(message);
    messageEl.appendChild(bubble);

    if (message.quickActions) {
        const actions = createQuickActions(message.quickActions, onSuggestionClick);
        messageEl.appendChild(actions);
    }
    if (message.products) {
        const productsEl = createProductsDisplay(message.products, onAddToCart);
        messageEl.appendChild(productsEl);
    }
    if (message.cartItems) {
        const cartEl = createCartDisplay(message.cartItems, message.onUpdateQty || (() => {}), message.onRemove || (() => {}));
        messageEl.appendChild(cartEl);
    }
    if (message.orders) {
        const ordersEl = createOrdersDisplay(message.orders);
        messageEl.appendChild(ordersEl);
    }
    if (message.suggestions && message.suggestions.length > 0) {
        const suggestionsEl = createSuggestions(message.suggestions, onSuggestionClick);
        messageEl.appendChild(suggestionsEl);
    }

    messageEl.addEventListener('mouseenter', () => { messageEl.style.transform = 'translateY(-2px)'; });
    messageEl.addEventListener('mouseleave', () => { messageEl.style.transform = 'translateY(0)'; });

    container.appendChild(messageEl);
    scrollToBottom(container);
}

function createMessageBubble(message) {
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = message.content;

    const isUser = message.type === 'user';
    bubble.style.cssText = `
        padding: 14px 16px;
        max-width: 90%;
        font-size: 14px;
        line-height: 1.5;
        border-radius: ${isUser ? '20px 20px 6px 20px' : '20px 20px 20px 6px'};
        ${isUser
            ? 'background: linear-gradient(135deg, #2563eb, #4f46e5); color: white;'
            : 'background: white; color: #111827; box-shadow: 0 6px 14px rgba(0,0,0,0.08);'}
        transition: box-shadow ${ANIMATIONS.hoverDuration}ms ${ANIMATIONS.easing};
    `;

    bubble.addEventListener('mouseenter', () => {
        bubble.style.boxShadow = isUser ? '0 8px 20px rgba(37,99,235,0.3)' : '0 8px 20px rgba(0,0,0,0.12)';
    });
    bubble.addEventListener('mouseleave', () => {
        bubble.style.boxShadow = isUser ? 'none' : '0 6px 14px rgba(0,0,0,0.08)';
    });
    return bubble;
}

function getIconSVG(iconName, color = 'currentColor') {
    const icons = {
        sparkles: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
        'shopping-bag': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
        package: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
        truck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>`,
    };
    return icons[iconName] || '';
}

function createQuickActions(actions, onSuggestionClick) {
    const list = actions || QUICK_ACTIONS;
    const container = document.createElement('div');
    container.className = 'quick-actions';
    container.style.cssText = `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 12px;
        width: 100%;
    `;

    list.forEach((action, index) => {
        const item = typeof action === 'string' ? { icon: 'sparkles', label: action, desc: '' } : action;
        const card = document.createElement('div');
        card.className = 'quick-action-card';
        card.style.cssText = `
            background: white;
            border-radius: 14px;
            padding: 16px;
            text-align: center;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.06);
            transition: all ${ANIMATIONS.hoverDuration}ms ${ANIMATIONS.easing};
            animation: quickActionIn 0.3s ${ANIMATIONS.easing} ${index * ANIMATIONS.staggerDelay}ms both;
        `;
        const label = item.label || item.title || item;
        const desc = item.desc || '';
        const iconName = item.icon || 'sparkles';
        card.innerHTML = `
            <div style="display:flex;justify-content:center;margin-bottom:8px;">${getIconSVG(iconName, '#2563eb')}</div>
            <div style="font-weight: 600; margin-top: 8px; font-size: 13px; color: #111827;">${label}</div>
            <div style="font-size: 11px; color: #6b7280; margin-top: 4px;">${desc}</div>
        `;
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.06)';
        });
        card.addEventListener('click', () => onSuggestionClick && onSuggestionClick(label));
        container.appendChild(card);
    });
    return container;
}

function createProductsDisplay(products, onAddToCart) {
    const raw = products || PRODUCTS;
    const list = productsWithImageFirst(raw);
    const container = document.createElement('div');
    container.className = 'product-scroll';
    container.style.cssText = `
        display: flex;
        gap: 12px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding: 8px 0;
        margin-top: 12px;
        width: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
    `;
    list.forEach((product, index) => {
        const card = createProductCardBubble(product, index, onAddToCart);
        container.appendChild(card);
    });
    return container;
}

function createProductCardBubble(product, index, onAddToCart) {
    const name = product.name || product.title || 'Product';
    const price = typeof product.price === 'number' ? product.price : parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 0;
    const image = (product.image && String(product.image).trim()) ? product.image : 'https://placehold.co/200x120?text=Product';
    const originalPrice = product.originalPrice != null ? (typeof product.originalPrice === 'number' ? product.originalPrice : parseFloat(String(product.originalPrice).replace(/[^0-9.]/g, ''))) : null;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cssText = `
        flex: 0 0 200px;
        scroll-snap-align: start;
        background: white;
        border-radius: 16px;
        padding: 12px;
        box-shadow: 0 6px 14px rgba(0,0,0,0.08);
        transition: all ${ANIMATIONS.hoverDuration}ms ${ANIMATIONS.easing};
        animation: slideInStagger 0.3s ${ANIMATIONS.easing} ${index * ANIMATIONS.staggerDelay}ms both;
    `;
    card.innerHTML = `
        ${product.badge ? `<div style="background: #2563eb; color: white; font-size: 9px; font-weight: 700; padding: 4px 8px; border-radius: 12px; width: fit-content; margin-bottom: 8px;">${product.badge}</div>` : ''}
        <img src="${image}" alt="${name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 12px; margin-bottom: 8px;">
        <h4 style="font-size: 14px; font-weight: 600; margin: 8px 0; color: #111827;">${name}</h4>
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
            <span style="font-size: 16px; font-weight: 700; color: #111827;">$${price}</span>
            ${originalPrice ? `<span style="font-size: 12px; color: #9ca3af; text-decoration: line-through;">$${originalPrice}</span>` : ''}
        </div>
    `;
    const button = document.createElement('button');
    button.className = 'add-to-cart-btn';
    button.textContent = 'Add to Cart';
    button.style.cssText = `
        width: 100%;
        padding: 10px;
        background: linear-gradient(135deg, #2563eb, #4f46e5);
        color: white;
        border: none;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: all ${ANIMATIONS.hoverDuration}ms ${ANIMATIONS.easing};
    `;
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.02)';
        button.style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
    button.addEventListener('click', () => onAddToCart && onAddToCart(product));
    card.appendChild(button);
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 6px 14px rgba(0,0,0,0.08)';
    });
    return card;
}

function createCartDisplay(cartItems, onUpdateQty, onRemove) {
    const container = document.createElement('div');
    container.className = 'cart-display';
    container.style.cssText = 'margin-top: 12px; width: 100%; background: white; border-radius: 16px; padding: 16px; box-shadow: 0 6px 14px rgba(0,0,0,0.08);';
    const items = Array.isArray(cartItems) ? cartItems : [];
    items.forEach((item) => {
        const name = item.name || item.title || 'Item';
        const price = item.price != null ? (typeof item.price === 'number' ? `$${item.price}` : item.price) : '';
        const image = item.image || 'https://placehold.co/64x64?text=Item';
        const qty = item.quantity != null ? item.quantity : 1;
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f3f4f6;';
        row.innerHTML = `
            <img src="${image}" alt="${name}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 12px;">
            <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; font-size: 14px; color: #111827;">${name}</div>
                <div style="font-size: 13px; color: #2563eb; font-weight: 600;">${price}</div>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                    <button type="button" data-qty="-">−</button>
                    <span data-qty-val>${qty}</span>
                    <button type="button" data-qty="+">+</button>
                </div>
            </div>
            <button type="button" data-remove aria-label="Remove">🗑</button>
        `;
        const minusBtn = row.querySelector('[data-qty="-"]');
        const plusBtn = row.querySelector('[data-qty="+"]');
        const qtyVal = row.querySelector('[data-qty-val]');
        const removeBtn = row.querySelector('[data-remove]');
        if (minusBtn && qtyVal) minusBtn.addEventListener('click', () => { const v = Math.max(1, (parseInt(qtyVal.textContent, 10) || 1) - 1); qtyVal.textContent = v; onUpdateQty(item, v); });
        if (plusBtn && qtyVal) plusBtn.addEventListener('click', () => { const v = (parseInt(qtyVal.textContent, 10) || 1) + 1; qtyVal.textContent = v; onUpdateQty(item, v); });
        if (removeBtn) removeBtn.addEventListener('click', () => onRemove(item));
        container.appendChild(row);
    });
    return container;
}

function createOrdersDisplay(orders) {
    const container = document.createElement('div');
    container.className = 'orders-display';
    container.style.cssText = 'margin-top: 12px; width: 100%; background: white; border-radius: 16px; padding: 16px; box-shadow: 0 6px 14px rgba(0,0,0,0.08);';
    const list = Array.isArray(orders) ? orders : [];
    list.forEach((order) => {
        const id = order.id || order.orderId || '—';
        const date = order.date || '—';
        const status = order.status || '—';
        const total = order.total != null ? (typeof order.total === 'number' ? `$${order.total.toFixed(2)}` : order.total) : '—';
        const row = document.createElement('div');
        row.style.cssText = 'padding: 12px 0; border-bottom: 1px solid #f3f4f6;';
        row.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <span style="font-weight: 700; font-size: 13px; color: #2563eb;">#${id}</span>
                <span style="font-size: 12px; color: #6b7280;">${date}</span>
                <span style="font-size: 11px; font-weight: 600; padding: 4px 8px; border-radius: 12px; background: rgba(34,197,94,0.2); color: #16a34a;">${status}</span>
            </div>
            <div style="font-size: 14px; font-weight: 600; color: #111827; margin-top: 6px;">Total ${total}</div>
        `;
        container.appendChild(row);
    });
    return container;
}

function createSuggestions(suggestions, onSuggestionClick) {
    const container = document.createElement('div');
    container.className = 'suggestions';
    container.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;';
    (suggestions || []).forEach((suggestion) => {
        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        chip.textContent = suggestion;
        chip.style.cssText = `
            min-width: 140px;
            padding: 10px 20px;
            background: white;
            border: 1.5px solid #e5e7eb;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            color: #374151;
            cursor: pointer;
            transition: all ${ANIMATIONS.hoverDuration}ms ${ANIMATIONS.easing};
            animation: chipIn 0.3s ${ANIMATIONS.easing};
        `;
        chip.addEventListener('mouseenter', () => {
            chip.style.background = '#2563eb';
            chip.style.color = 'white';
            chip.style.borderColor = '#2563eb';
            chip.style.transform = 'translateY(-2px) scale(1.03)';
            chip.style.boxShadow = '0 4px 12px rgba(37,99,235,0.2)';
        });
        chip.addEventListener('mouseleave', () => {
            chip.style.background = 'white';
            chip.style.color = '#374151';
            chip.style.borderColor = '#e5e7eb';
            chip.style.transform = 'translateY(0) scale(1)';
            chip.style.boxShadow = 'none';
        });
        chip.addEventListener('click', () => onSuggestionClick && onSuggestionClick(suggestion));
        container.appendChild(chip);
    });
    return container;
}

function scrollToBottom(containerOrRoot) {
    const container = containerOrRoot || (typeof document !== 'undefined' ? document.getElementById('messages-container') : null);
    if (container) {
        setTimeout(() => {
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }, 100);
    }
}

// ---------------------------------------------------------------------------
// Existing API (unchanged) for Chatbot.js
// ---------------------------------------------------------------------------

export function renderMessageList() {
    const list = document.createElement('div');
    list.className = 'chatbot-messages';
    list.id = 'chatbot-messages-container';

    return list;
}

export function parseMarkdown(text) {
    if (!text) return '';
    let html = text;

    // 1. Tables — MUST come before newline conversion, as they depend on \n
    html = html.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g, (match, header, body) => {
        const headers = header.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`).join('');
        const rows = body.trim().split('\n').filter(r => r.trim()).map(row => {
            const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        return `<div class="md-table-wrap"><table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
    });

    // 2. Blockquotes (> text) — before newline conversion
    html = html.replace(/^>\s?(.*)$/gm, '<blockquote>$1</blockquote>');

    // 3. Headings — before newline conversion
    html = html.replace(/^###\s+(.+)$/gm, '<h3 class="md-h3">$1</h3>');
    html = html.replace(/^##\s+(.+)$/gm, '<h2 class="md-h2">$1</h2>');
    html = html.replace(/^#\s+(.+)$/gm, '<h1 class="md-h1">$1</h1>');

    // 4. Horizontal Rules
    html = html.replace(/^---+$/gm, '<hr class="md-hr"/>');

    // 5. Unordered Lists — before newline conversion
    html = html.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm, (block) => {
        const items = block.trim().split('\n').map(line => {
            const content = line.replace(/^[ \t]*[-*]\s+/, '');
            return `<li>${content}</li>`;
        }).join('');
        return `<ul class="md-list">${items}</ul>\n`;
    });

    // 6. Bold and Italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');

    // 7. Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="md-code">$1</code>');

    // 8. Newlines — skip inside block elements by converting remaining \n to <br>
    html = html.replace(/\n{2,}/g, '</p><p class="md-p">');
    html = html.replace(/\n/g, '<br/>');
    html = `<p class="md-p">${html}</p>`;

    return html;
}


function createTimestampSpan() {
    const ts = document.createElement('span');
    ts.className = 'chatbot-timestamp';
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    ts.textContent = `${hh}:${mm}`;
    return ts;
}

export function createTextMessage(text, isBot = true, config = null, onActionClick = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chatbot-message ${isBot ? 'bot' : 'user'} ${isBot ? 'msg-enter-bot' : 'msg-enter-user'}`;

    const bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble';

    if (isBot) {
        const avatarImage = config?.launcherIconUrl ? `<img src="${config.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : `<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
        msgDiv.innerHTML = `
            <div class="chatbot-message-avatar">
                ${avatarImage}
            </div>
        `;
        
        // Phase 4: Quick Actions Detection
        // If text contains something like [Action: Label], we strip it and make a button
        const actionRegex = /\[Action:\s*(.*?)\]/g;
        let actions = [];
        let cleanText = text.replace(actionRegex, (match, label) => {
            actions.push(label);
            return "";
        });

        bubble.innerHTML = parseMarkdown(cleanText);
        msgDiv.appendChild(bubble);

        if (actions.length > 0 && onActionClick) {
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'chatbot-actions';
            actions.forEach(label => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'action-btn';
                btn.textContent = label;
                btn.onclick = () => onActionClick(label);
                applyMagnetic(btn, { strength: 0.1, radius: 50 });
                actionsContainer.appendChild(btn);
            });
            msgDiv.appendChild(actionsContainer);
        }
    } else {
        bubble.innerHTML = parseMarkdown(text);
        msgDiv.appendChild(bubble);
    }

    // Append timestamp row under every message bubble
    const tsRow = document.createElement('div');
    tsRow.className = `chatbot-message-ts-row ${isBot ? 'ts-bot' : 'ts-user'}`;
    const ts = createTimestampSpan();
    tsRow.appendChild(ts);
    msgDiv.appendChild(tsRow);

    return msgDiv;
}

export function createProductCard(productData, onAddToCart, config = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chatbot-message bot msg-enter-product';

    const avatarImage = config?.launcherIconUrl ? `<img src="${config.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : `<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
    const avatarHtml = `
        <div class="chatbot-message-avatar">
            ${avatarImage}
        </div>
    `;

    const imageSrc = productData.image || 'https://placehold.co/300x200?text=Product';

    // Build the dynamic card wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.innerHTML = avatarHtml;

    const cardContent = document.createElement('div');
    cardContent.className = 'chatbot-product-card';

    // State for sizes
    let selectedSize = null;

    let sizesHtml = '';
    if (productData.sizes && productData.sizes.length > 0) {
        sizesHtml = '<div class="chatbot-product-sizes"></div>';
    }

    const cartLabel = config?.addToCartLabel || 'Add to Cart';

    // Static HTML core
    cardContent.innerHTML = `
        <img src="${imageSrc}" alt="${productData.title || 'Product'}" class="chatbot-product-image" />
        <div class="chatbot-product-info">
            <div class="chatbot-product-title">${productData.title || 'Product'}</div>
            <div class="chatbot-product-desc">${productData.description || 'View details for this product.'}</div>
            ${sizesHtml}
            <button class="chatbot-product-action">${productData.price ? cartLabel + ' - ' + productData.price : 'View Product'}</button>
        </div>
    `;

    // Attach Interactive Elements if we have sizes
    if (productData.sizes && productData.sizes.length > 0) {
        const sizesContainer = cardContent.querySelector('.chatbot-product-sizes');

        productData.sizes.forEach(size => {
            const pill = document.createElement('button');
            pill.className = 'size-pill';
            pill.textContent = size;

            pill.addEventListener('click', () => {
                // Remove selected from all
                sizesContainer.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
                // Add to this one
                pill.classList.add('selected');
                selectedSize = size;
            });

            sizesContainer.appendChild(pill);
        });
    }

    // Handle Button Click
    const actionBtn = cardContent.querySelector('.chatbot-product-action');
    actionBtn.addEventListener('click', () => {
        if (productData.sizes && productData.sizes.length > 0 && !selectedSize) {
            actionBtn.textContent = 'Please select a size';
            actionBtn.style.background = '#e53e3e'; // Error red temporarily
            setTimeout(() => {
                const resetLabel = config?.addToCartLabel || 'Add to Cart';
                actionBtn.textContent = productData.price ? resetLabel + ' - ' + productData.price : 'View Product';
                actionBtn.style.background = ''; // reset to var(--primary)
            }, 2000);
            return;
        }

        // Trigger Callback
        if (onAddToCart) {
            onAddToCart(productData, selectedSize);
        } else if (productData.url) {
            window.open(productData.url, '_blank');
        }
    });

    cardWrapper.appendChild(cardContent);
    msgDiv.appendChild(cardWrapper);

    return msgDiv;
}

const PRODUCT_IMAGE_PLACEHOLDER = 'https://placehold.co/300x200?text=Product';

function productsWithImageFirst(products) {
    if (!Array.isArray(products) || products.length === 0) return [];
    const hasImage = (p) => p && (p.image != null && String(p.image).trim() !== '');
    const withImage = products.filter(hasImage);
    return withImage.length > 0 ? withImage : products;
}

export function createProductCarousel(products, onAddToCart, config = null) {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'chatbot-message bot-message msg-enter-product';

    const toShow = productsWithImageFirst(products);
    const placeholder = PRODUCT_IMAGE_PLACEHOLDER;

    const avatarImage = config?.launcherIconUrl ? `<img src="${config.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : `<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
    const avatarHtml = `
        <div class="chatbot-message-avatar">
            ${avatarImage}
        </div>
    `;

    // Wrap the carousel inside a flex row so avatar sits flush left
    const messageRow = document.createElement('div');
    messageRow.style.display = 'flex';
    messageRow.style.width = '100%';
    messageRow.innerHTML = avatarHtml;

    const outerContainer = document.createElement('div');
    outerContainer.className = 'carousel-container';
    outerContainer.style.flex = '1';
    outerContainer.style.minWidth = '0';
    outerContainer.style.display = 'flex';
    outerContainer.style.flexDirection = 'column';
    outerContainer.style.gap = '6px';

    const carouselHeadings = ['Have a look', 'Choose from these', 'Here are some picks'];
    const headingText = carouselHeadings[Math.floor(Math.random() * carouselHeadings.length)];
    const headingEl = document.createElement('div');
    headingEl.className = 'carousel-heading';
    headingEl.textContent = headingText;
    outerContainer.appendChild(headingEl);

    const carouselRow = document.createElement('div');
    carouselRow.className = 'carousel-row';
    carouselRow.style.display = 'flex';
    carouselRow.style.alignItems = 'center';
    carouselRow.style.position = 'relative';

    // Left Button
    const leftBtn = document.createElement('button');
    leftBtn.className = 'carousel-nav-btn carousel-nav-left';
    leftBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';

    // Right Button
    const rightBtn = document.createElement('button');
    rightBtn.className = 'carousel-nav-btn carousel-nav-right';
    rightBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';

    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'chatbot-product-carousel';

    // Scroll Logic
    const SCROLL_AMOUNT = 232; // approx card width + gap
    leftBtn.addEventListener('click', () => {
        carouselWrapper.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
        carouselWrapper.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    });

    toShow.forEach(product => {
        const imgSrc = (product.image && String(product.image).trim()) ? product.image : placeholder;
        // Build individual card
        const card = document.createElement('div');
        card.className = 'carousel-card';

        card.innerHTML = `
            <img src="${imgSrc}" class="chatbot-product-img" alt="${product.title || 'Product Image'}" />
            <div class="chatbot-product-content">
                <div class="chatbot-product-header">
                    <h4>${product.title || 'Unknown Product'}</h4>
                    <span class="chatbot-product-price">${product.price || ''}</span>
                </div>
            </div>
        `;

        const contentDiv = card.querySelector('.chatbot-product-content');

        // Add size selection if available
        let selectedSize = null;
        if (product.sizes && Array.isArray(product.sizes)) {
            const sizesDiv = document.createElement('div');
            sizesDiv.className = 'chatbot-product-sizes';

            const sizesList = document.createElement('div');
            sizesList.className = 'sizes-list';

            product.sizes.forEach(size => {
                const pill = document.createElement('button');
                pill.className = 'size-pill';
                pill.innerText = size;
                pill.addEventListener('click', () => {
                    sizesList.querySelectorAll('.size-pill').forEach(btn => btn.classList.remove('selected'));
                    pill.classList.add('selected');
                    selectedSize = size;
                });
                sizesList.appendChild(pill);
            });
            sizesDiv.appendChild(sizesList);
            contentDiv.appendChild(sizesDiv);
        }

        // Add Call to Action
        const actionBtn = document.createElement('div');
        actionBtn.className = 'chatbot-product-action';
        actionBtn.innerText = config?.addToCartLabel || 'Add to Cart';
        actionBtn.addEventListener('click', () => {
            if (product.sizes && !selectedSize) {
                alert('Please select a size first!');
                return;
            }
            if (onAddToCart) onAddToCart(product, selectedSize);
        });

        contentDiv.appendChild(actionBtn);
        apply3DTilt(card, 'carousel-card-3d');
        carouselWrapper.appendChild(card);
    });

    carouselRow.appendChild(leftBtn);
    carouselRow.appendChild(carouselWrapper);
    carouselRow.appendChild(rightBtn);
    outerContainer.appendChild(carouselRow);

    messageRow.appendChild(outerContainer);
    listWrapper.appendChild(messageRow);

    return listWrapper;
}

/** 3D tilt on hover: rotateX/Y and translateY from mouse position. */
export function apply3DTilt(cardEl, className = 'chatbot-product-card-3d') {
    if (!cardEl) return;
    cardEl.classList.add(className);
    cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * 8;
        const tiltY = (x - 0.5) * -8;
        const lift = 4;
        cardEl.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-${lift}px)`;
    });
    cardEl.addEventListener('mouseleave', () => {
        cardEl.style.transform = '';
    });
}

/** Skeleton row shown while product results are loading (SSE). */
export function createSkeletonProductRow() {
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-message bot msg-enter-bot';
    wrapper.setAttribute('data-skeleton', 'true');
    wrapper.innerHTML = `
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `;
    return wrapper;
}

/** Suggestion chips under a message; clicking sends the chip text. */
export function createSuggestionChips(chips, onSelect, config) {
    if (!chips || chips.length === 0) return null;
    const wrap = document.createElement('div');
    wrap.className = 'chatbot-suggestion-chips';
    chips.forEach((label) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'suggestion-chip';
        chip.textContent = label;
        chip.addEventListener('click', () => onSelect(label));
        applyMagnetic(chip, { strength: 0.1, radius: 50 });
        wrap.appendChild(chip);
    });
    return wrap;
}

/**
 * Inline product card for chat stream: image, title, price, rating placeholder, quick actions.
 * Actions: Add to Cart, View, Save, Compare.
 */
export function createInlineProductCard(product, config, handlers = {}) {
    const { onAddToCart, onView, onSave, onCompare } = handlers;
    const card = document.createElement('div');
    card.className = 'chatbot-inline-product msg-enter-product';
    const rating = product.rating != null ? product.rating : (product.bestseller ? '4.8' : '');
    const ratingHtml = rating ? `<span class="chatbot-inline-rating">★ ${rating}</span>` : '';
    card.innerHTML = `
        <img src="${product.image || 'https://placehold.co/300x200?text=Product'}" alt="${product.title || 'Product'}" style="width:100%;height:120px;object-fit:cover;" />
        <div style="padding:10px 12px;">
            <div class="chatbot-product-title">${product.title || 'Product'}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
                <span class="chatbot-product-price">${product.price || ''}</span>
                ${ratingHtml}
            </div>
            <div class="chatbot-inline-product-actions"></div>
        </div>
    `;
    const actionsContainer = card.querySelector('.chatbot-inline-product-actions');
    const addBtn = document.createElement('button');
    addBtn.textContent = config?.addToCartLabel || 'Add to Cart';
    addBtn.addEventListener('click', () => onAddToCart && onAddToCart(product));
    actionsContainer.appendChild(addBtn);
    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View';
    viewBtn.style.background = 'transparent';
    viewBtn.style.color = 'var(--primary-color)';
    viewBtn.style.border = '1px solid var(--primary-color)';
    viewBtn.addEventListener('click', () => onView ? onView(product) : (product.url && window.open(product.url, '_blank')));
    actionsContainer.appendChild(viewBtn);
    if (onSave) {
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.style.background = 'transparent';
        saveBtn.style.color = 'inherit';
        saveBtn.addEventListener('click', () => onSave(product));
        actionsContainer.appendChild(saveBtn);
    }
    if (onCompare) {
        const compareBtn = document.createElement('button');
        compareBtn.textContent = 'Compare';
        compareBtn.style.background = 'transparent';
        compareBtn.style.color = 'inherit';
        compareBtn.addEventListener('click', () => onCompare(product));
        actionsContainer.appendChild(compareBtn);
    }
    apply3DTilt(card, 'chatbot-product-card-3d');
    return card;
}

const TRASH_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';

/**
 * "Your Cart" card matching premium design: item rows (64px image + badge, name, price, qty controls, remove), summary (Subtotal, Shipping FREE, Total), Proceed to Checkout button.
 * cartPayload: { items: [{ title, image, price, originalPrice?, quantity?, badge? }], total: number, subtotalLabel? }
 * options: { onCheckout?, onAddMore?, onUpdateQty?(item, qty), onRemove?(item) }
 */
export function createYourCartCard(cartPayload, options = {}) {
    if (!cartPayload || !cartPayload.items || !Array.isArray(cartPayload.items)) return null;
    const { items, total } = cartPayload;
    const { onCheckout, onAddMore, onUpdateQty, onRemove } = options;
    const card = document.createElement('div');
    card.className = 'chatbot-section-card chatbot-cart-card msg-enter-product chatbot-cart-card-premium';

    const totalNum = typeof total === 'number' ? total : parseFloat(String(total).replace(/[^0-9.]/g, '')) || 0;
    const totalFormatted = `$${totalNum.toFixed(2)}`;
    const itemCount = items.reduce((sum, i) => sum + (i.quantity || 1), 0);
    const itemLabel = itemCount === 1 ? 'item' : 'items';
    const subtotalLabel = cartPayload.subtotalLabel || `Subtotal (${itemCount} ${itemLabel})`;

    if (items.length === 0) {
        card.innerHTML = `
            <div class="chatbot-cart-card-body">
                <div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>
            </div>
        `;
        return card;
    }

    const body = document.createElement('div');
    body.className = 'chatbot-cart-card-body';

    items.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'chatbot-cart-item-row';
        const qty = item.quantity != null ? item.quantity : 1;
        const title = item.title || item.name || 'Product';
        const priceStr = item.price != null ? (typeof item.price === 'string' ? item.price : `$${Number(item.price).toFixed(2)}`) : '$0.00';
        const imgSrc = (item.image && String(item.image).trim()) ? item.image : 'https://placehold.co/80x80?text=Product';
        const badge = item.badge ? `<span class="chatbot-cart-item-badge">${item.badge}</span>` : '';

        row.innerHTML = `
            <div class="chatbot-cart-item-thumb-wrap">
                <img class="chatbot-cart-item-img" src="${imgSrc}" alt="${title.slice(0, 40)}" />
                ${badge}
            </div>
            <div class="chatbot-cart-item-details">
                <div class="chatbot-cart-item-name">${title}</div>
                <div class="chatbot-cart-item-price">${priceStr}</div>
                <div class="chatbot-cart-item-actions">
                    <div class="chatbot-cart-qty-pill">
                        <button type="button" class="chatbot-cart-qty-btn" data-action="minus" aria-label="Decrease">−</button>
                        <span class="chatbot-cart-qty-num">${qty}</span>
                        <button type="button" class="chatbot-cart-qty-btn" data-action="plus" aria-label="Increase">+</button>
                    </div>
                    <button type="button" class="chatbot-cart-remove-btn" aria-label="Remove">${TRASH_ICON_SVG}</button>
                </div>
            </div>
        `;

        const minusBtn = row.querySelector('[data-action="minus"]');
        const plusBtn = row.querySelector('[data-action="plus"]');
        const qtyNum = row.querySelector('.chatbot-cart-qty-num');
        const removeBtn = row.querySelector('.chatbot-cart-remove-btn');

        if (onUpdateQty && qtyNum) {
            minusBtn?.addEventListener('click', () => {
                const v = Math.max(0, (parseInt(qtyNum.textContent, 10) || 1) - 1);
                qtyNum.textContent = v;
                onUpdateQty(item, v);
                if (v === 0 && removeBtn) removeBtn.click();
            });
            plusBtn?.addEventListener('click', () => {
                const v = (parseInt(qtyNum.textContent, 10) || 1) + 1;
                qtyNum.textContent = v;
                onUpdateQty(item, v);
            });
        }
        if (onRemove && removeBtn) {
            removeBtn.addEventListener('click', () => onRemove(item));
        }

        body.appendChild(row);
    });

    const summary = document.createElement('div');
    summary.className = 'chatbot-cart-summary';
    summary.innerHTML = `
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">${subtotalLabel}</span>
            <span class="chatbot-cart-summary-value">${totalFormatted}</span>
        </div>
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">Shipping</span>
            <span class="chatbot-cart-shipping-free">FREE</span>
        </div>
        <div class="chatbot-cart-summary-divider"></div>
        <div class="chatbot-cart-summary-row chatbot-cart-summary-total">
            <span class="chatbot-cart-summary-label">Total</span>
            <span class="chatbot-cart-summary-total-value">${totalFormatted}</span>
        </div>
    `;

    const checkoutBtn = document.createElement('button');
    checkoutBtn.type = 'button';
    checkoutBtn.className = 'chatbot-cart-checkout-btn-premium';
    checkoutBtn.innerHTML = 'Proceed to Checkout <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
    if (onCheckout) checkoutBtn.addEventListener('click', () => onCheckout());

    body.appendChild(summary);
    body.appendChild(checkoutBtn);
    card.appendChild(body);
    return card;
}

/**
 * Order history card: header + order blocks (ID, date, status badge, items, total). Appealing, scannable layout.
 * orders: [{ id, date, status, items: [{ title, price, size? }], total }]
 */
export function createOrderHistoryCard(orders) {
    if (!orders || !Array.isArray(orders)) return null;
    const card = document.createElement('div');
    card.className = 'chatbot-section-card chatbot-order-history-card msg-enter-product';
    const historyIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    const statusClass = (s) => {
        const v = (s || '').toLowerCase();
        if (v === 'delivered') return 'order-status-delivered';
        if (v === 'shipped') return 'order-status-shipped';
        if (v === 'processing') return 'order-status-processing';
        if (v === 'cancelled') return 'order-status-cancelled';
        return 'order-status-default';
    };
    let bodyHtml = orders.length === 0
        ? '<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>'
        : orders.map((order) => {
            const totalFormatted = typeof order.total === 'number' ? `$${order.total.toFixed(2)}` : (order.total != null ? `$${Number(order.total).toFixed(2)}` : '—');
            const itemsList = (order.items || []).map((i) => `<span class="chatbot-order-item-line">${i.title || 'Item'} ${i.price ? ` · ${i.price}` : ''}</span>`).join('');
            return `
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${order.id || '—'}</span>
                        <span class="chatbot-order-date">${order.date || '—'}</span>
                        <span class="chatbot-order-status ${statusClass(order.status)}">${order.status || '—'}</span>
                    </div>
                    <div class="chatbot-order-items">${itemsList || '<span class="chatbot-order-item-line">No items</span>'}</div>
                    <div class="chatbot-order-total">Total ${totalFormatted}</div>
                </div>
            `;
        }).join('');
    card.innerHTML = `
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${historyIcon}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${bodyHtml}</div>
    `;
    return card;
}

/** Default SVG icons for quick action grid (by index: sparkles, cart, package, truck) */
const QUICK_ACTION_ICONS = [
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>'
];

/**
 * 2x2 Quick Action Grid — first message only.
 * actions: Array<{ icon?: string, title: string, desc?: string, message: string }> (icon optional; uses default by index)
 */
export function createQuickActionGrid(actions, handlers = {}) {
    const { onAction } = handlers;
    const grid = document.createElement('div');
    grid.className = 'chatbot-quick-actions-grid';
    
    actions.forEach((action, i) => {
        const icon = action.icon != null ? action.icon : (QUICK_ACTION_ICONS[i] ?? QUICK_ACTION_ICONS[0]);
        const card = document.createElement('div');
        card.className = 'quick-action-card msg-enter-product';
        card.innerHTML = `
            <div class="quick-action-icon-box">${icon}</div>
            <div class="quick-action-info">
                <span class="quick-action-title">${(action.title || '').replace(/</g, '&lt;')}</span>
                <span class="quick-action-desc">${(action.desc || '').replace(/</g, '&lt;')}</span>
            </div>
        `;
        const message = action.message != null ? action.message : action.title || '';
        card.onclick = () => onAction('quickAction', { ...action, message });
        grid.appendChild(card);
    });
    
    return grid;
}

/**
 * Multi-step checkout flow card: mobile, otp, address, payment, confirmation.
 * payload: { step: 'mobile' | 'otp' | 'address' | 'payment' | 'confirmation', data: Object, state: Object }
 * handlers: { onAction: (action, data) => void }
 */
export function createCheckoutFlowCard(payload, handlers = {}) {
    const { step, data, state } = payload;
    const { onAction } = handlers;
    
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-checkout-wrapper msg-enter-product';

    const phoneIconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
    const lockIconSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
    const arrowRightSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

    if (step === 'mobile') {
        wrapper.innerHTML = `
            <div class="checkout-form-card checkout-mobile-card">
                <div class="checkout-field">
                    <label class="checkout-label-uppercase">MOBILE NUMBER</label>
                    <div class="checkout-mobile-input-wrap">
                        <span class="checkout-mobile-icon">${phoneIconSvg}</span>
                        <span class="checkout-mobile-prefix">+91</span>
                        <input type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="10" class="checkout-mobile-input" placeholder="9876543210" id="checkout-mobile" value="${(state.mobile || '').replace(/\D/g, '').slice(0, 10)}" autocomplete="tel" />
                    </div>
                </div>
                <button type="button" class="checkout-send-otp-btn" id="mobile-submit-btn">
                    Send OTP ${arrowRightSvg}
                </button>
                <div class="checkout-secure-note">
                    ${lockIconSvg}
                    <span>Encrypted and secure</span>
                </div>
            </div>
        `;
        const input = wrapper.querySelector('#checkout-mobile');
        const submitBtn = wrapper.querySelector('#mobile-submit-btn');
        const updateBtn = () => {
            const val = (input.value || '').replace(/\D/g, '');
            submitBtn.disabled = val.length !== 10;
        };
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '').slice(0, 10);
            updateBtn();
        });
        updateBtn();
        submitBtn.addEventListener('click', () => {
            const mobile = (input.value || '').replace(/\D/g, '').slice(0, 10);
            if (mobile.length === 10) onAction('submitMobile', { mobile });
        });
    }
    else if (step === 'otp') {
        const sentTo = state.mobile ? ('+91 ' + String(state.mobile).replace(/(\d{2})(\d{4})(\d+)/, '$1 $2 $3').trim()) : '+91 ••••••••••';
        wrapper.innerHTML = `
            <div class="checkout-form-card checkout-otp-card">
                <div class="checkout-otp-header">
                    <h3 class="checkout-otp-title">ENTER OTP</h3>
                    <button type="button" class="checkout-change-number-link">Change Number</button>
                </div>
                <p class="checkout-otp-sent-to">Sent to ${sentTo}</p>
                <div class="checkout-otp-boxes">
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="1" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="2" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="3" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="4" />
                </div>
                <button type="button" class="checkout-resend-link">Resend OTP</button>
                <button type="button" class="checkout-verify-btn" id="otp-verify-btn">
                    Verify & Continue ${arrowRightSvg}
                </button>
            </div>
        `;
        const inputs = wrapper.querySelectorAll('.checkout-otp-box');
        inputs.forEach((input, i) => {
            input.addEventListener('input', (e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 1);
                e.target.value = v;
                if (v && i < 3) inputs[i + 1].focus();
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && i > 0) inputs[i - 1].focus();
            });
        });
        if (inputs[0]) inputs[0].focus();
        wrapper.querySelector('#otp-verify-btn').addEventListener('click', () => {
            const code = Array.from(wrapper.querySelectorAll('.checkout-otp-box')).map(b => b.value || '').join('').slice(0, 4);
            onAction('verifyOtp', { code });
        });
        wrapper.querySelector('.checkout-change-number-link').addEventListener('click', () => onAction('changeAuthMode', { mode: 'mobile' }));
        wrapper.querySelector('.checkout-resend-link').addEventListener('click', () => onAction('submitMobile', { mobile: state.mobile }));
    }
    else if (step === 'address') {
        const addresses = data.addresses || [];
        const selectedId = state.selectedAddressId;
        
        const homeIconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
        const workIconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/></svg>';
        const phoneSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
        let addressesHtml = addresses.map(addr => {
            const typeUpper = (addr.type || 'home').toUpperCase();
            const isHome = (addr.type || 'home').toLowerCase() === 'home';
            return `
            <div class="checkout-address-card ${addr.id === selectedId ? 'selected' : ''}" data-id="${addr.id}">
                <div class="address-icon-box ${isHome ? 'address-icon-home' : ''}">${isHome ? homeIconSvg : workIconSvg}</div>
                <div class="address-info">
                    <div class="address-header">
                        <span class="address-name">${addr.name}</span>
                        <span class="address-type-badge">${typeUpper}</span>
                    </div>
                    <div class="address-text">${addr.street}</div>
                    <div class="address-text">${addr.city}, ${addr.state || ''} ${addr.zip}</div>
                    <div class="address-phone">${phoneSvg} ${addr.phone}</div>
                </div>
                ${addr.id === selectedId ? '<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>' : ''}
            </div>`;
        }).join('');

        wrapper.innerHTML = `
            <div class="checkout-address-step">
                ${addressesHtml}
                <div class="checkout-add-address-form-wrap" id="add-address-form-wrap" style="display: none;">
                    <div class="checkout-form-card" style="text-align: left;">
                        <label class="checkout-label-uppercase">Full Name</label>
                        <input type="text" class="checkout-input" id="addr-name" placeholder="John Doe" />
                        <label class="checkout-label-uppercase">Street</label>
                        <input type="text" class="checkout-input" id="addr-street" placeholder="123 Main St, Apt 4B" />
                        <label class="checkout-label-uppercase">City</label>
                        <input type="text" class="checkout-input" id="addr-city" placeholder="New York" />
                        <label class="checkout-label-uppercase">State</label>
                        <input type="text" class="checkout-input" id="addr-state" placeholder="NY" />
                        <label class="checkout-label-uppercase">ZIP</label>
                        <input type="text" class="checkout-input" id="addr-zip" placeholder="10001" />
                        <label class="checkout-label-uppercase">Phone</label>
                        <input type="tel" class="checkout-input" id="addr-phone" placeholder="+1 (555) 123-4567" />
                        <div style="display: flex; gap: 8px; margin-top: 12px;">
                            <button type="button" class="checkout-primary-btn" id="addr-save-btn">Save Address</button>
                            <button type="button" class="checkout-add-address-dashed" id="addr-cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
                <button type="button" class="checkout-add-address checkout-add-address-dashed" id="add-address-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    + Add New Address
                </button>
                ${(selectedId != null) ? '<button type="button" class="checkout-primary-btn" id="addr-continue-btn">Continue to Payment ' + arrowRightSvg + '</button>' : ''}
            </div>
        `;
        wrapper.querySelectorAll('.checkout-address-card').forEach(card => {
            card.onclick = () => onAction('selectAddress', { id: card.dataset.id });
        });
        const addBtn = wrapper.querySelector('#add-address-btn');
        const formWrap = wrapper.querySelector('#add-address-form-wrap');
        const cancelBtn = wrapper.querySelector('#addr-cancel-btn');
        const saveBtn = wrapper.querySelector('#addr-save-btn');
        if (addBtn && formWrap) {
            addBtn.addEventListener('click', () => { formWrap.style.display = formWrap.style.display === 'none' ? 'block' : 'none'; });
        }
        if (cancelBtn && formWrap) {
            cancelBtn.addEventListener('click', () => { formWrap.style.display = 'none'; });
        }
        if (saveBtn && formWrap) {
            saveBtn.addEventListener('click', () => {
                const name = (wrapper.querySelector('#addr-name')?.value || '').trim();
                const street = (wrapper.querySelector('#addr-street')?.value || '').trim();
                const city = (wrapper.querySelector('#addr-city')?.value || '').trim();
                const state = (wrapper.querySelector('#addr-state')?.value || '').trim();
                const zip = (wrapper.querySelector('#addr-zip')?.value || '').trim();
                const phone = (wrapper.querySelector('#addr-phone')?.value || '').trim();
                if (!street) return;
                onAction('addAddress', { address: { type: 'home', name, street, city, state, zip, phone } });
                formWrap.style.display = 'none';
            });
        }
        const contBtn = wrapper.querySelector('#addr-continue-btn');
        if (contBtn) contBtn.onclick = () => onAction('continueToPayment');
    }
    else if (step === 'payment') {
        const method = state.paymentMethod;
        const subtotal = Number(data.subtotal) || 0;
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        wrapper.innerHTML = `
            <div class="checkout-payment-step">
                <div class="checkout-method-card ${method === 'cod' ? 'selected' : ''}" data-method="cod">
                    <div class="method-icon-box method-icon-cod">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M7 15h.01"/><path d="M12 15h.01"/><path d="M17 15h.01"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Cash on Delivery</h4>
                        <p class="method-desc">Pay when you receive</p>
                    </div>
                    ${method === 'cod' ? '<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>' : ''}
                </div>
                <div class="checkout-method-card ${method === 'prepaid' ? 'selected' : ''}" data-method="prepaid">
                    <div class="method-icon-box method-icon-card">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Credit / Debit Card</h4>
                        <p class="method-desc">Secure payment</p>
                    </div>
                    ${method === 'prepaid' ? '<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>' : ''}
                </div>
                <div class="checkout-summary-card">
                    <h4 class="summary-title">ORDER SUMMARY</h4>
                    <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Shipping</span><span class="summary-shipping-free">FREE</span></div>
                    <div class="summary-row"><span>Tax</span><span>$${tax.toFixed(2)}</span></div>
                    <div class="summary-divider"></div>
                    <div class="summary-row summary-total"><span>Total</span><span class="total-value">$${total.toFixed(2)}</span></div>
                </div>
                <button class="checkout-place-order-btn" id="place-order-btn" ${method ? '' : 'disabled'}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Place Order – $${total.toFixed(2)}
                </button>
            </div>
        `;
        wrapper.querySelectorAll('.checkout-method-card').forEach(card => {
            card.onclick = () => onAction('selectPayment', { method: card.dataset.method });
        });
        const placeBtn = wrapper.querySelector('#place-order-btn');
        if (placeBtn) placeBtn.onclick = () => { if (method) onAction('placeOrder'); };
    }
    else if (step === 'confirmation') {
        const orderId = state.orderId || data.orderId || `ORD-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
        const orderItems = data.orderItems || state.orderItems || [];
        const productsHtml = orderItems.length
            ? `<div class="confirmation-products">
                <div class="confirmation-products-title">Products ordered</div>
                ${orderItems.map(item => {
                    const qty = item.quantity || 1;
                    const price = (item.price || 0) * qty;
                    const img = item.image ? `<img src="${item.image}" alt="" class="confirmation-product-img" onerror="this.style.display='none'" />` : '<div class="confirmation-product-placeholder"></div>';
                    return `<div class="confirmation-product-row">
                        ${img}
                        <div class="confirmation-product-info">
                            <span class="confirmation-product-name">${(item.name || '').replace(/</g, '&lt;')}</span>
                            <span class="confirmation-product-meta">Qty: ${qty} × $${(item.price || 0).toFixed(2)} = $${price.toFixed(2)}</span>
                        </div>
                    </div>`;
                }).join('')}
               </div>`
            : '';
        wrapper.innerHTML = `
            <div class="checkout-confirmation">
                <div class="success-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 class="confirmation-title">Order Confirmed!</h3>
                <p class="confirmation-message">Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                ${productsHtml}
                <div class="order-number-badge">
                    <span>Order #</span>
                    <b>${orderId}</b>
                </div>
            </div>
        `;
    }

    return wrapper;
}
