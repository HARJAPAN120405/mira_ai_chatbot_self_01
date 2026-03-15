/** Placeholders cycled in the input (smart placeholder) */
export const DEFAULT_PLACEHOLDERS = [
    'Ask about products...',
    'Find sneakers under $100...',
    'Compare two products...',
    'Show trending items...',
    'What\'s on sale?',
    'Recommend something for me...'
];

/** Suggestion chips shown after bot messages */
export const DEFAULT_SUGGESTION_CHIPS = [
    'Show sneakers under $100',
    'Trending items',
    'Best running shoes',
    'Summer jackets',
    'What\'s on sale?',
    'Add to cart'
];

/** AI thinking status messages (can be overridden by stream) */
export const DEFAULT_THINKING_STATUSES = [
    'Thinking...',
    'Searching products...',
    'Analyzing your request...',
    'Looking for the best options...'
];

export const defaultConfig = {
    // Appearance
    botName: 'Aura AI',
    botSubtitle: 'Shopping Assistant',
    botAvatarUrl: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    position: 'bottom-right', // 'bottom-right' | 'bottom-left'
    marginBottom: 20,
    marginSide: 20,
    primaryColor: '#2b6cb0', // Default Blue
    textColor: '#ffffff',
    backgroundColor: '#ffffff',
    headerStatus: 'Online',

    // Behavior Features
    presetQuestions: ['What kind of products do you sell?', 'Tell me about your store', 'Do you offer free shipping?'],
    autoDetectProduct: true,
    greetingMessage: 'Hi there! How can I help you with your shopping today?',
    inputPlaceholder: 'Type your message',
    placeholders: DEFAULT_PLACEHOLDERS,
    suggestionChips: DEFAULT_SUGGESTION_CHIPS,
    welcomeMessage: 'Need help choosing a product?',
    welcomeIconUrl: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
    addToCartLabel: 'Add to Cart',
    theme: 'dark', // 'dark' | 'glass' | 'default' — next-gen default
    backgroundColor: '#0c0c10',
    thinkingStatuses: DEFAULT_THINKING_STATUSES,
    apiBaseUrl: '', // e.g. 'http://localhost:3000' or 'https://your-api.com'; empty uses default
};

export function mergeConfig(userConfig = {}) {
    return { ...defaultConfig, ...userConfig };
}
