/**
 * AI Thinking state: shimmer bars + optional status text.
 * Status can be updated via setStatus(text) for stream-driven messages.
 */
export function createTypingIndicator(initialStatus = 'Thinking...') {
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-message bot typing-indicator-wrapper msg-enter-bot';

    const avatar = document.createElement('div');
    avatar.className = 'chatbot-message-avatar';
    avatar.innerHTML = `<svg viewBox="0 0 24 24" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;

    const bubble = document.createElement('div');
    bubble.className = 'ai-thinking';
    bubble.setAttribute('role', 'status');
    bubble.setAttribute('aria-live', 'polite');
    bubble.innerHTML = `
        <div class="ai-thinking-bars" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="ai-thinking-content">
            <div class="ai-thinking-shimmer"></div>
            <div class="ai-thinking-status">${escapeHtml(initialStatus)}</div>
        </div>
    `;

    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);

    wrapper.setStatus = (text) => {
        const statusEl = wrapper.querySelector('.ai-thinking-status');
        if (statusEl && text) statusEl.textContent = text;
    };

    return wrapper;
}

/** Legacy three-dot indicator (used if preferred) */
export function createLegacyTypingIndicator() {
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-message bot typing-indicator-wrapper msg-enter-bot';
    const avatar = document.createElement('div');
    avatar.className = 'chatbot-message-avatar';
    avatar.innerHTML = `<svg viewBox="0 0 24 24" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`;
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble typing-indicator';
    bubble.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    wrapper.setStatus = () => {};
    return wrapper;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
