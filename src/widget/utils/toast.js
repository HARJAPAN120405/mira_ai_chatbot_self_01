export function createToastAPI(root) {
    if (!root) return null;

    const host = document.createElement('div');
    host.className = 'chatbot-toast-host';
    root.appendChild(host);

    const showToast = ({ title, message, image, duration = 3000 } = {}) => {
        const toast = document.createElement('div');
        toast.className = 'chatbot-toast';

        toast.innerHTML = `
            ${image ? `<div class="chatbot-toast-image-wrap"><img src="${image}" alt="" /></div>` : ''}
            <div class="chatbot-toast-content">
                ${title ? `<div class="chatbot-toast-title">${title}</div>` : ''}
                ${message ? `<div class="chatbot-toast-message">${message}</div>` : ''}
            </div>
        `;

        host.appendChild(toast);

        // Trigger entrance animation
        requestAnimationFrame(() => {
            toast.classList.add('chatbot-toast-visible');
        });

        const remove = () => {
            toast.classList.remove('chatbot-toast-visible');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            }, { once: true });
        };

        setTimeout(remove, duration);
    };

    return { showToast };
}

