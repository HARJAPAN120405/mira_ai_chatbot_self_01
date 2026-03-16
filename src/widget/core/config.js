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
    // Appearance — Design-Chatbot-Widget (Aura Concierge)
    botName: 'Aura Concierge',
    botSubtitle: 'Always Available',
    botAvatarUrl: '', // empty = use Bot icon in header
    position: 'bottom-right',
    marginBottom: 24,
    marginSide: 24,
    primaryColor: '#2563eb',
    textColor: '#ffffff',
    backgroundColor: '#ffffff',
    headerStatus: 'Always Available',

    // Behavior — 2x2 quick action grid (first message only). Each: { title, desc, message }.
    quickActions: [
        { title: 'Browse Collections', desc: 'View all products', message: 'Show me your collections' },
        { title: 'View Cart', desc: 'See shopping bag', message: 'View my cart' },
        { title: 'Order Status', desc: 'Track orders', message: 'Order status' },
        { title: 'Track My Order', desc: 'Get updates', message: 'Track my order' }
    ],
    autoDetectProduct: true,
    greetingMessage: "Hi! I'm Aura, your shopping assistant. What can I help you with today?",
    inputPlaceholder: 'Ask anything about orders, products...',
    placeholders: DEFAULT_PLACEHOLDERS,
    suggestionChips: DEFAULT_SUGGESTION_CHIPS,
    welcomeMessage: "Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",
    welcomeIconUrl: '',
    addToCartLabel: 'Add to Cart',
    theme: 'default',
    thinkingStatuses: DEFAULT_THINKING_STATUSES,
    apiBaseUrl: '',
};

export function mergeConfig(userConfig = {}) {
    return { ...defaultConfig, ...userConfig };
}
