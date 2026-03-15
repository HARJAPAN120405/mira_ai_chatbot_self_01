import { applyMagnetic } from '../utils/magnetic.js';
import { DEFAULT_PLACEHOLDERS } from '../core/config.js';

export function renderInputArea(onSend, config) {
    const area = document.createElement('div');
    area.className = 'chatbot-input-area';

    const input = document.createElement('input');
    input.type = 'text';
    const placeholders = config.placeholders && config.placeholders.length > 0
        ? config.placeholders
        : DEFAULT_PLACEHOLDERS;
    input.placeholder = config.inputPlaceholder || placeholders[0];
    input.className = 'chatbot-input';
    input.setAttribute('aria-label', 'Message input');

    const sendBtn = document.createElement('button');
    sendBtn.type = 'button';
    sendBtn.className = 'chatbot-send-btn';
    sendBtn.setAttribute('aria-label', 'Send message');
    sendBtn.innerHTML = `
        <svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    `;

    // Smart placeholder: cycle through examples every 3.5s
    let placeholderIndex = 0;
    const cyclePlaceholder = () => {
        if (!input.matches(':focus') && placeholders.length > 1) {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            input.placeholder = placeholders[placeholderIndex];
        }
    };
    const placeholderInterval = setInterval(cyclePlaceholder, 3500);
    input.addEventListener('focus', () => {
        input.placeholder = config.inputPlaceholder || 'Type your message';
    });
    input.addEventListener('blur', () => {
        input.placeholder = placeholders[placeholderIndex % placeholders.length];
    });

    const handleSend = () => {
        const text = input.value.trim();
        if (text) {
            onSend(text);
            input.value = '';
            placeholderIndex = 0;
            input.placeholder = placeholders[0];
        }
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
    sendBtn.addEventListener('click', handleSend);

    area.appendChild(input);
    area.appendChild(sendBtn);

    // Magnetic hover on send button (subtle)
    applyMagnetic(sendBtn, { strength: 0.12, radius: 60 });

    area.destroy = () => clearInterval(placeholderInterval);
    return area;
}
