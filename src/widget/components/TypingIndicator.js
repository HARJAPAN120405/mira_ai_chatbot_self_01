/**
 * Typing indicator: simple "..." (three dots) only — Clerk-style.
 * No shimmer bars or status text.
 */
export function createTypingIndicator(_initialStatus = 'Thinking...') {
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-message bot typing-indicator-wrapper msg-enter-bot';

    const avatar = document.createElement('div');
    avatar.className = 'chatbot-message-avatar';
    avatar.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble typing-indicator';
    bubble.setAttribute('aria-live', 'polite');
    bubble.setAttribute('role', 'status');
    bubble.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;

    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);

    wrapper.setStatus = () => {}; // no-op: no status text

    return wrapper;
}
