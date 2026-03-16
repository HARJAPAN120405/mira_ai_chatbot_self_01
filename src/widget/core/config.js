/** Premium UI animation tokens (Figma: cubic-bezier everywhere) */
export const ANIMATIONS = {
    easing: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
    panelDuration: 300,
    hoverDuration: 200,
    messageInDuration: 200,
    typingDelay: 800,
    staggerDelay: 100,
    floatDuration: 2000,
};

/** Quick actions for the 2x2 grid (icon name, label, desc) */
export const QUICK_ACTIONS = [
    { icon: 'sparkles', label: 'Browse Collections', desc: 'View all products' },
    { icon: 'shopping-bag', label: 'View Cart', desc: 'See shopping bag' },
    { icon: 'package', label: 'Order Status', desc: 'Track orders' },
    { icon: 'truck', label: 'Track My Order', desc: 'Get updates' },
];

/** Demo product set for product display (name, price, image, optional badge/originalPrice) */
export const PRODUCTS = [
    { name: 'Essential White Sneaker', price: 150, originalPrice: 180, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', badge: 'New In' },
    { name: 'Derby Leather Shoe', price: 295, originalPrice: 350, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=300&fit=crop', badge: 'Bestseller' },
    { name: 'Nocturne Watch', price: 190, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop' },
];

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
    apiBaseUrl: 'http://localhost:3000',
};

export function mergeConfig(userConfig = {}) {
    return { ...defaultConfig, ...userConfig };
}
