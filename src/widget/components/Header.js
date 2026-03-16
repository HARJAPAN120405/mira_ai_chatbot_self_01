/**
 * Header — Design-Chatbot-Widget: gradient bar, avatar, "Aura Concierge", "Always Available", cart + close.
 */
const BOT_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>';

export function renderHeader(config, callbacks = {}) {
    const { onClose, onCartClick, cartCount = 0 } = callbacks;
    const header = document.createElement('header');
    header.className = 'chatbot-header';

    const title = config.botName ?? 'Aura Concierge';
    const statusText = config.headerStatus ?? 'Always Available';

    const left = document.createElement('div');
    left.className = 'chatbot-header-left';

    const avatar = document.createElement('div');
    avatar.className = 'chatbot-header-avatar';
    if (config.botAvatarUrl) {
        const img = document.createElement('img');
        img.src = config.botAvatarUrl;
        img.alt = `${title} avatar`;
        avatar.appendChild(img);
    } else {
        avatar.innerHTML = BOT_ICON_SVG;
    }

    const info = document.createElement('div');
    info.className = 'chatbot-header-info';
    const titleEl = document.createElement('h3');
    titleEl.className = 'chatbot-header-title';
    titleEl.textContent = title;
    const row = document.createElement('div');
    row.className = 'chatbot-header-row';
    const dot = document.createElement('span');
    dot.className = 'chatbot-header-status-dot';
    const statusEl = document.createElement('span');
    statusEl.className = 'chatbot-header-status';
    statusEl.textContent = statusText;
    row.appendChild(dot);
    row.appendChild(statusEl);
    info.appendChild(titleEl);
    info.appendChild(row);
    left.appendChild(avatar);
    left.appendChild(info);
    header.appendChild(left);

    const actions = document.createElement('div');
    actions.className = 'chatbot-header-actions';

    if (typeof onCartClick === 'function') {
        const cartBtn = document.createElement('button');
        cartBtn.type = 'button';
        cartBtn.className = 'chatbot-header-btn';
        cartBtn.setAttribute('aria-label', 'View cart');
        cartBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
        if (cartCount > 0) {
            const badge = document.createElement('span');
            badge.className = 'chatbot-cart-badge';
            badge.textContent = cartCount > 99 ? '99+' : String(cartCount);
            cartBtn.style.position = 'relative';
            cartBtn.appendChild(badge);
        }
        cartBtn.addEventListener('click', onCartClick);
        actions.appendChild(cartBtn);
    }

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'chatbot-header-btn';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    closeBtn.addEventListener('click', () => onClose && onClose());
    actions.appendChild(closeBtn);

    header.appendChild(actions);
    return header;
}
