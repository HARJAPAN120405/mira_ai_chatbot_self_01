export function renderHeader(config) {
    const header = document.createElement('div');
    header.className = 'chatbot-header';
    const statusText = config.headerStatus ?? 'Online';
    const subtitleText = config.botSubtitle ?? 'Shopping Assistant';
    header.innerHTML = `
        <div class="chatbot-header-avatar">
            <img src="${config.botAvatarUrl}" alt="${config.botName} Avatar" />
        </div>
        <div class="chatbot-header-info">
            <div class="chatbot-header-row">
                <span class="chatbot-header-title">${config.botName}</span>
                <span class="chatbot-header-status">
                    <span class="chatbot-header-status-dot"></span>
                    ${statusText}
                </span>
            </div>
            <span class="chatbot-header-subtitle">${subtitleText}</span>
        </div>
    `;
    return header;
}
