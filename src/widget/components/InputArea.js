import { applyMagnetic } from '../utils/magnetic.js';
import { DEFAULT_PLACEHOLDERS } from '../core/config.js';

const PAPERCLIP_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>';
const SEND_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';

export function renderInputArea(onSend, config) {
    const area = document.createElement('div');
    area.className = 'chatbot-input-area';
    area.setAttribute('data-region', 'input-bar');

    const placeholders = config.placeholders && config.placeholders.length > 0
        ? config.placeholders
        : DEFAULT_PLACEHOLDERS;
    const placeholder = config.inputPlaceholder || placeholders[0];

    const wrap = document.createElement('div');
    wrap.className = 'chatbot-input-wrap';

    const attachBtn = document.createElement('button');
    attachBtn.type = 'button';
    attachBtn.className = 'chatbot-attach-btn';
    attachBtn.setAttribute('aria-label', 'Attach');
    attachBtn.innerHTML = PAPERCLIP_SVG;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.className = 'chatbot-input';
    input.setAttribute('aria-label', 'Message input');

    const sendBtn = document.createElement('button');
    sendBtn.type = 'button';
    sendBtn.className = 'chatbot-send-btn';
    sendBtn.setAttribute('aria-label', 'Send message');
    sendBtn.innerHTML = SEND_SVG;

    const updateSendState = () => {
        if (input.value.trim()) {
            sendBtn.classList.add('active');
        } else {
            sendBtn.classList.remove('active');
        }
    };
    input.addEventListener('input', updateSendState);
    input.addEventListener('focus', updateSendState);
    input.addEventListener('blur', updateSendState);
    updateSendState();

    let placeholderIndex = 0;
    const cyclePlaceholder = () => {
        if (!input.matches(':focus') && placeholders.length > 1) {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            input.placeholder = placeholders[placeholderIndex];
        }
    };
    const placeholderInterval = setInterval(cyclePlaceholder, 3500);
    input.addEventListener('focus', () => {
        input.placeholder = config.inputPlaceholder || 'Ask anything about orders, products...';
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
            updateSendState();
        }
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
    sendBtn.addEventListener('click', handleSend);

    wrap.appendChild(attachBtn);
    wrap.appendChild(input);
    wrap.appendChild(sendBtn);
    area.appendChild(wrap);

    applyMagnetic(sendBtn, { strength: 0.12, radius: 60 });

    area.destroy = () => clearInterval(placeholderInterval);
    return area;
}
