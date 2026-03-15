import * as Widget from '../widget/index.js';

// Initialize a default config based on the panel inputs
let currentConfig = {
    botName: document.getElementById('input-bot-name').value,
    inputPlaceholder: document.getElementById('input-placeholder').value,
    botAvatarUrl: document.getElementById('input-bot-avatar').value,
    welcomeMessage: document.getElementById('input-welcome-message').value,
    welcomeIconUrl: document.getElementById('input-welcome-icon').value,
    primaryColor: document.getElementById('input-primary-color').value,
    backgroundColor: document.getElementById('input-bg-color').value,
    position: document.getElementById('input-position').value,
    theme: document.getElementById('input-theme').value,
    autoDetectProduct: document.getElementById('input-auto-detect').checked,
    presetQuestions: [
        document.getElementById('input-preset-1').value,
        document.getElementById('input-preset-2').value,
        document.getElementById('input-preset-3').value
    ].filter(q => q.trim() !== ''),
    textColor: '#ffffff'
};

const domElements = {
    botName: document.getElementById('input-bot-name'),
    botSubtitle: document.getElementById('input-bot-subtitle'),
    inputPlaceholder: document.getElementById('input-placeholder'),
    addToCartLabel: document.getElementById('input-add-to-cart'),
    launcherIcon: document.getElementById('input-launcher-icon'),
    launcherIconFile: document.getElementById('input-launcher-icon-file'),
    botAvatar: document.getElementById('input-bot-avatar'),
    botAvatarFile: document.getElementById('input-bot-avatar-file'),
    welcomeMessage: document.getElementById('input-welcome-message'),
    welcomeIcon: document.getElementById('input-welcome-icon'),
    welcomeIconFile: document.getElementById('input-welcome-icon-file'),
    primaryColor: document.getElementById('input-primary-color'),
    hexPrimaryColor: document.getElementById('hex-primary-color'),
    bgColor: document.getElementById('input-bg-color'),
    position: document.getElementById('input-position'),
    theme: document.getElementById('input-theme'),
    marginSide: document.getElementById('input-margin-side'),
    marginBottom: document.getElementById('input-margin-bottom'),
    autoDetect: document.getElementById('input-auto-detect'),
    preset1: document.getElementById('input-preset-1'),
    preset2: document.getElementById('input-preset-2'),
    preset3: document.getElementById('input-preset-3'),
    btnApply: document.getElementById('btn-apply'),
    btnCopy: document.getElementById('btn-copy'),
    snippetOutput: document.getElementById('snippet-output'),
    previewContainer: document.querySelector('.preview-browser'),
    previewUrlInput: document.getElementById('input-preview-url'),
    btnLoadUrl: document.getElementById('btn-load-url'),
    previewIframe: document.getElementById('preview-iframe')
};

// Sync color picker with hex text
domElements.primaryColor.addEventListener('input', (e) => {
    domElements.hexPrimaryColor.textContent = e.target.value;
});

// Handle File Upload for Avatar
domElements.botAvatarFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            domElements.botAvatar.value = evt.target.result; // Set base64 into the URL field
            applyChanges(); // Auto apply on upload
        };
        reader.readAsDataURL(file);
    }
});

// Handle File Upload for Welcome Icon
domElements.welcomeIconFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            domElements.welcomeIcon.value = evt.target.result; // Set base64 into the URL field
            applyChanges(); // Auto apply on upload
        };
        reader.readAsDataURL(file);
    }
});

// Handle File Upload for Launcher Icon
domElements.launcherIconFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            domElements.launcherIcon.value = evt.target.result; // Set base64 into the URL field
            applyChanges(); // Auto apply on upload
        };
        reader.readAsDataURL(file);
    }
});

function updateSnippet() {
    const configStr = JSON.stringify(currentConfig, null, 4);

    // Dynamically resolve where this Panel is currently hosted.
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const baseUrl = window.location.origin;

    // Use local Vite module path for dev, and bundled root path for production deployment
    const scriptInclude = isLocalhost
        ? `<script type="module" src="${baseUrl}/src/widget/index.js"></script>`
        : `<script src="${baseUrl}/chatbot.min.js"></script>`;

    const scriptTag = `
<script>
    window.chatbotConfig = ${configStr};
</script>
${scriptInclude}
<script>
    window.addEventListener('DOMContentLoaded', () => {
        if (window.EcomChatbot) {
            window.EcomChatbot.init(window.chatbotConfig);
        }
    });
</script>`.trim();

    domElements.snippetOutput.textContent = scriptTag;
}

function applyChanges() {
    // 1. Update config object
    currentConfig = {
        botName: domElements.botName.value,
        botSubtitle: domElements.botSubtitle.value,
        inputPlaceholder: domElements.inputPlaceholder.value,
        addToCartLabel: domElements.addToCartLabel.value,
        launcherIconUrl: domElements.launcherIcon.value,
        botAvatarUrl: domElements.botAvatar.value,
        welcomeMessage: domElements.welcomeMessage.value,
        welcomeIconUrl: domElements.welcomeIcon.value,
        primaryColor: domElements.primaryColor.value,
        backgroundColor: domElements.bgColor.value,
        position: domElements.position.value,
        theme: domElements.theme.value,
        marginSide: parseInt(domElements.marginSide.value) || 20,
        marginBottom: parseInt(domElements.marginBottom.value) || 20,
        autoDetectProduct: domElements.autoDetect.checked,
        presetQuestions: [
            domElements.preset1.value,
            domElements.preset2.value,
            domElements.preset3.value
        ].filter(q => q.trim() !== ''),
        textColor: domElements.bgColor.value === '#ffffff' ? '#ffffff' : '#ffffff' // keep text white on dark/primary
    };

    // 2. Re-render snippet
    updateSnippet();

    // 3. Instantiate Chatbot widget directly over the preview container
    if (window.EcomChatbot) {
        window.EcomChatbot.init({
            ...currentConfig,
            parentElement: domElements.previewContainer
        });
    }
}

// Load external URL logic
domElements.btnLoadUrl.addEventListener('click', () => {
    let targetUrl = domElements.previewUrlInput.value.trim();
    if (targetUrl) {
        if (!targetUrl.startsWith('http')) {
            targetUrl = 'https://' + targetUrl;
        }
        domElements.previewIframe.src = targetUrl;
    }
});

// Relay ecom-add-to-cart events to the iframe
window.addEventListener('ecom-add-to-cart', (evt) => {
    if (domElements.previewIframe && domElements.previewIframe.contentWindow) {
        domElements.previewIframe.contentWindow.postMessage({ type: 'ECOM_ADD_TO_CART', detail: evt.detail }, '*');
    }
});

// Event Listeners
domElements.btnApply.addEventListener('click', applyChanges);

domElements.btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(domElements.snippetOutput.textContent)
        .then(() => alert('Snippet copied to clipboard!'))
        .catch(err => console.error('Failed to copy', err));
});

// Initial Setup
window.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure widget script is loaded
    setTimeout(() => {
        applyChanges();
    }, 100);
});
