export function getStyles(config) {
    const isLeft = config.position.includes('left');
    /* Design-Chatbot-Widget (Aura Concierge) design tokens */
    const primary = config.primaryColor || '#2563eb';
    const primaryIndigo = '#4f46e5';
    const gradientHeader = `linear-gradient(135deg, ${primary}, ${primaryIndigo})`;
    const gradientUser = `linear-gradient(135deg, ${primary}, ${primaryIndigo})`;
    const panelBg = 'linear-gradient(180deg, #f8fafc, #eef2ff)';
    const panelShadow = '0 20px 50px rgba(0,0,0,0.15)';
    const botBubbleShadow = '0 6px 14px rgba(0,0,0,0.08)';
    const colorTextMain = '#111827';
    const colorTextMuted = '#6b7280';
    const borderGray = '1px solid #e5e7eb';
    const cardBorderRadius = '16px';
    const primaryLight = '#60a5fa'; // light variant used in gradients/checkout btn
    const cardDarkGradient = `background: #fff; border: ${borderGray};`; // inline product card base style
    const cardStyle = `
        background: #fff;
        border: ${borderGray};
        border-radius: ${cardBorderRadius};
        box-shadow: ${botBubbleShadow};
    `;

    const easePremium = 'cubic-bezier(0.16, 0.84, 0.44, 1)';

    return `
        /* Premium E-Commerce Chatbot — ultra-smooth animations */
        :host {
            --primary-color: ${primary};
            --primary-indigo: ${primaryIndigo};
            --text-color: #ffffff;
            --bg-color: #ffffff;
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --shadow-panel: ${panelShadow};
            --border-radius: 18px;
            --transition-speed: 0.3s;
            --ease-premium: ${easePremium};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .gpu-accelerated {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
        }

        /* Reset for internal components */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
        }

        /* Main Container layout */
        .ecom-chatbot-wrapper {
            position: fixed;
            ${config.position.includes('bottom') ? `bottom: ${config.marginBottom}px;` : `top: ${config.marginBottom}px;`}
            ${isLeft ? `left: ${config.marginSide}px;` : `right: ${config.marginSide}px;`}
            z-index: 999999;
            display: flex;
            flex-direction: column;
            align-items: ${isLeft ? 'flex-start' : 'flex-end'};
            pointer-events: none; /* Let clicks pass through wrapper */
            max-width: calc(100% - ${config.marginSide * 2}px);
        }

        /* Launcher — Design-Chatbot-Widget: 56px, gradient, shadow */
        .chatbot-orb-wrapper {
            position: relative;
            pointer-events: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .chatbot-toggle-btn {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: ${gradientHeader};
            color: #fff;
            border: none;
            padding: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: 0 8px 24px rgba(37,99,235,0.5);
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
            z-index: 2;
            animation: launcher-float 2s var(--ease-premium) infinite;
            will-change: transform;
        }
        .chatbot-toggle-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 28px rgba(37,99,235,0.55);
        }
        .chatbot-toggle-btn:active {
            transform: scale(0.95);
        }
        .chatbot-toggle-btn .chatbot-ripple-ring {
            position: absolute;
            inset: -8px;
            border-radius: 50%;
            border: 2px solid var(--primary-color);
            opacity: 0.7;
            animation: orb-ripple 1.4s ease-out forwards;
            pointer-events: none;
        }
        @keyframes launcher-float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0); }
        }
        @keyframes orb-ripple {
            0% { transform: scale(0.85); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
        }
        .chatbot-toggle-btn svg,
        .chatbot-toggle-btn img {
            width: 24px;
            height: 24px;
            fill: currentColor;
            position: relative;
            z-index: 1;
        }
        .chatbot-toggle-btn img {
            object-fit: cover;
            border-radius: 50%;
        }
        .chatbot-toggle-btn .chatbot-launcher-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            min-width: 24px;
            height: 24px;
            padding: 0 6px;
            border-radius: 50%;
            background: #ef4444;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            transform-origin: center;
        }
        .chatbot-launcher-badge.cart-badge-pop {
            animation: cart-badge-pop 0.3s var(--ease-premium) forwards;
        }
        @keyframes cart-badge-pop {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        /* Chat Window — 360×600, 18px radius, gradient glass, premium open animation */
        .chatbot-window {
            width: 360px;
            max-width: min(360px, calc(100vw - ${config.marginSide * 2 + 8}px));
            height: 600px;
            max-height: min(600px, calc(100vh - ${config.marginBottom + 80}px));
            min-height: 400px;
            background: ${panelBg};
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 18px;
            box-shadow: ${panelShadow};
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 24px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(30px) scale(0.95);
            transform-origin: bottom ${isLeft ? 'left' : 'right'};
            transition: opacity 0.3s var(--ease-premium),
                        transform 0.3s var(--ease-premium),
                        visibility 0s linear 0.3s;
            visibility: hidden;
        }
        .chatbot-window.is-open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
            transition-delay: 0s;
            visibility: visible;
        }

        /* Responsive */
        @media (max-width: 480px) {
            .chatbot-window {
                width: 100vw;
                height: 100vh;
                max-height: 100vh;
                border-radius: 0;
                margin-bottom: 0;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 999999;
            }
            .ecom-chatbot-wrapper {
                top: 0; left: 0; bottom: 0; right: 0;
                width: 100vw; height: 100vh;
            }
            .chatbot-orb-wrapper,
            .chatbot-toggle-btn {
                position: fixed;
                bottom: 30px;
                ${isLeft ? 'left: 20px;' : 'right: 20px;'}
                z-index: 1000000;
            }
            .chatbot-input-area {
                padding: 18px 20px; /* larger tap targets */
                padding-bottom: env(safe-area-inset-bottom, 18px); /* iOS safe area */
            }
            .chatbot-bubble {
                padding: 16px 20px; /* fatter bubbles for readable mobile text */
                font-size: 15px;
            }
            .product-card {
                flex: 0 0 180px;
            }
            .product-carousel,
            .chatbot-product-carousel {
                gap: 10px;
            }
        }

        /* --- INTERNAL COMPONENTS (Design-Chatbot-Widget) --- */
        
        /* Header — 64px, gradient, white text, slideDown on open */
        .chatbot-header {
            height: 64px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${gradientHeader};
            color: #fff;
            flex-shrink: 0;
            opacity: 0;
        }
        .chatbot-window.is-open .chatbot-header {
            animation: header-slideDown 0.3s var(--ease-premium) 0.1s forwards;
        }
        @keyframes header-slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .chatbot-header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .chatbot-header-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            background: ${gradientHeader};
            box-shadow: 0 0 10px rgba(59,130,246,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .chatbot-header-avatar img,
        .chatbot-header-avatar svg {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .chatbot-header-avatar svg {
            width: 20px;
            height: 20px;
            fill: #fff;
            flex-shrink: 0;
        }
        .chatbot-header-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .chatbot-header-title {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            line-height: 1.2;
        }
        .chatbot-header-row {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .chatbot-header-status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #34d399;
            flex-shrink: 0;
            animation: status-pulse 2s ease-in-out infinite;
        }
        @keyframes status-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .chatbot-header-status {
            font-size: 12px;
            color: rgba(255,255,255,0.9);
        }
        .chatbot-header-actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .chatbot-header-btn {
            position: relative;
            width: 36px;
            height: 36px;
            padding: 8px;
            border: none;
            background: transparent;
            color: #fff;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s var(--ease-premium), transform 0.2s var(--ease-premium);
        }
        .chatbot-header-btn:hover {
            background: rgba(255,255,255,0.1);
            transform: scale(1.1);
        }
        .chatbot-header-btn:active {
            transform: scale(0.9);
        }
        .chatbot-header-btn svg {
            width: 20px;
            height: 20px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
        }
        .chatbot-header-btn .chatbot-cart-badge {
            position: absolute;
            top: -2px;
            right: -2px;
            min-width: 18px;
            height: 18px;
            padding: 0 4px;
            border-radius: 50%;
            background: #fff;
            color: ${primary};
            font-size: 10px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Message List — 16px padding, 12px gap, scrollbar hidden, fadeIn on open */
        .chatbot-messages {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: transparent;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            opacity: 0;
        }
        .chatbot-window.is-open .chatbot-messages {
            animation: messages-fadeIn 0.3s var(--ease-premium) 0.25s forwards;
        }
        @keyframes messages-fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .chatbot-messages::-webkit-scrollbar {
            display: none;
        }
        .chatbot-messages {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .chatbot-messages-inner {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .chatbot-messages > .chatbot-message,
        .chatbot-messages > .typing-indicator-wrapper,
        .chatbot-messages > .chatbot-presets {
            position: relative;
            z-index: 1;
        }

        /* Message entrance animations — 200ms messageIn (Figma) */
        .chatbot-message.msg-enter-user {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
            animation: msg-enter-user 0.2s var(--ease-premium) forwards;
            will-change: transform;
        }
        .chatbot-message.msg-enter-bot {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
            animation: msg-enter-bot 0.2s var(--ease-premium) forwards;
            will-change: transform;
        }
        .chatbot-message.msg-enter-product {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
            animation: msg-enter-product 0.25s var(--ease-premium) forwards;
            will-change: transform;
        }
        @keyframes msg-enter-user {
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes msg-enter-bot {
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes msg-enter-product {
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chatbot-message {
            transition: transform 0.2s var(--ease-premium);
        }
        .chatbot-message:hover {
            transform: translateY(-2px) scale(1);
        }

        /* Message grouping — consecutive same sender */
        .chatbot-message.group-same .chatbot-message-avatar {
            opacity: 0;
            width: 0;
            margin-left: 0 !important;
            margin-right: 0 !important;
            min-width: 0;
        }
        .chatbot-message.group-same .chatbot-message-avatar-placeholder {
            width: 32px;
            min-width: 32px;
        }
        .chatbot-message.group-first { margin-top: 2px; }
        .chatbot-message.group-same { margin-top: 0; }

        /* Individual Messages */
        .chatbot-message {
            display: flex;
            max-width: 92%;
            will-change: transform;
        }

        .chatbot-message.bot {
            align-self: flex-start;
        }
        /* Content column: bubble + chips stacked below (never beside) */
        .chatbot-message-content {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 0;
            align-items: flex-start;
        }

        .chatbot-message.bot-message {
            max-width: 100%;
            flex-direction: column;
            align-items: flex-start;
        }
        .chatbot-message.bot-message .carousel-container {
            width: 100%;
        }

        .chatbot-message.user {
            align-self: flex-end;
            flex-direction: row-reverse;
        }

        /* Design-Chatbot-Widget: no per-message avatar (avatar only in header) */
        .chatbot-message .chatbot-message-avatar {
            display: none;
        }
        .chatbot-message-avatar {
            width: 32px;
            height: 32px;
            min-width: 32px;
            border-radius: 50%;
            background: var(--primary-color);
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            flex-shrink: 0;
        }
        .chatbot-message.user .chatbot-message-avatar {
            margin-right: 0;
            margin-left: 10px;
        }

        /* Message bubbles — bot = white 20px radius, user = gradient, premium shadow transition */
        .chatbot-bubble {
            padding: 14px 16px;
            font-size: 14px;
            line-height: 1.5;
            max-width: 90%;
            word-break: break-word;
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
            position: relative;
        }
        .chatbot-message.bot .chatbot-bubble {
            border-radius: 20px 20px 20px 6px;
            background: #fff;
            color: ${colorTextMain};
            box-shadow: ${botBubbleShadow};
        }
        .chatbot-message.bot .chatbot-bubble:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .chatbot-message.user .chatbot-bubble {
            border-radius: 20px 20px 6px 20px;
            background: ${gradientUser};
            color: #fff;
            box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }
        .chatbot-message.user .chatbot-bubble:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 26px rgba(37,99,235,0.4);
        }
        .chatbot-bubble .md-p {
            margin: 0 0 4px 0;
        }

        .chatbot-bubble .md-p:last-child {
            margin-bottom: 0;
        }

        .chatbot-bubble .md-h1,
        .chatbot-bubble .md-h2,
        .chatbot-bubble .md-h3 {
            font-weight: 700;
            color: var(--primary-color);
            margin: 2px 0 4px 0;
            padding: 0;
            line-height: 1.25;
        }

        .chatbot-bubble .md-h3 { font-size: 13px; }
        .chatbot-bubble .md-h2 { font-size: 14px; }
        .chatbot-bubble .md-h1 { font-size: 15px; }

        .chatbot-bubble blockquote {
            margin: 4px 0;
            padding: 5px 8px;
            border-left: 3px solid var(--primary-color);
            background: rgba(0,0,0,0.04);
            border-radius: 0 6px 6px 0;
            font-size: 13px;
            color: ${colorTextMuted};
        }

        .chatbot-bubble .md-hr {
            border: none;
            border-top: 1px solid rgba(0,0,0,0.1);
            margin: 5px 0;
        }

        .chatbot-bubble .md-list {
            margin: 4px 0;
            padding-left: 16px;
        }

        .chatbot-bubble .md-list li {
            margin-bottom: 2px;
            line-height: 1.4;
        }

        .chatbot-bubble .md-code {
            font-family: monospace;
            background: rgba(0,0,0,0.07);
            padding: 1px 5px;
            border-radius: 4px;
            font-size: 12px;
        }

        /* Markdown Tables */
        .chatbot-bubble .md-table-wrap {
            overflow-x: auto;
            margin: 8px 0;
            border-radius: 8px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        }

        .chatbot-bubble table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12.5px;
            min-width: 200px;
        }

        .chatbot-bubble th {
            background: var(--primary-color);
            color: white;
            text-align: left;
            padding: 7px 10px;
            font-weight: 600;
            white-space: nowrap;
        }

        .chatbot-bubble td {
            padding: 6px 10px;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            background: rgba(255,255,255,0.8);
            white-space: nowrap;
        }

        .chatbot-bubble tr:last-child td {
            border-bottom: none;
        }

        .chatbot-message.bot .chatbot-bubble {
            color: ${colorTextMain};
        }
        .chatbot-message.user .chatbot-bubble {
            color: #fff;
        }

        /* Timestamps — 10px, gray-400, below bubble aligned left/right */
        .chatbot-message-ts-row {
            margin-top: 4px;
            padding: 0 4px;
        }
        .chatbot-message-ts-row.ts-bot {
            text-align: left;
            margin-left: 8px;
        }
        .chatbot-message-ts-row.ts-user {
            text-align: right;
            margin-right: 8px;
        }
        .chatbot-timestamp {
            display: inline-block;
            font-size: 10px;
            color: #9ca3af;
            vertical-align: baseline;
        }
        .chatbot-timestamp.ts-bot {
            opacity: 0.9;
        }
        .chatbot-timestamp.ts-user {
            opacity: 0.9;
        }


        /* Product Card — Design-Chatbot-Widget: white, rounded-2xl, shadow */
        .chatbot-product-card {
            ${cardStyle}
            overflow: hidden;
            width: 240px;
            margin-top: 5px;
        }

        .chatbot-product-image {
            width: 100%;
            height: 140px;
            object-fit: cover;
            background: #f3f4f6;
        }

        .chatbot-product-info {
            padding: 15px;
        }

        .chatbot-product-title {
            font-size: 14px;
            font-weight: 600;
            color: ${colorTextMain};
            margin-bottom: 5px;
        }

        .chatbot-product-desc {
            font-size: 11px;
            color: ${colorTextMuted};
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .chatbot-product-header h4 {
            margin: 0;
            font-size: 14px;
            color: ${colorTextMain};
            line-height: 1.3;
        }

        .chatbot-product-price {
            font-weight: 700;
            color: var(--primary-color);
            margin-top: 4px;
            display: inline-block;
        }

        /* --- Horizontal Product Carousel --- */
        .carousel-container {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin: 5px 0;
            width: 100%;
        }
        .carousel-heading {
            font-size: 12px;
            font-weight: 500;
            color: ${colorTextMuted};
            margin: 0;
            padding: 0 4px;
        }
        .carousel-row {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            min-width: 0;
        }

        /* Horizontal product carousel — smooth scroll, hidden scrollbar */
        .product-carousel,
        .chatbot-product-carousel {
            display: flex;
            flex-direction: row;
            gap: 12px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding: 8px 0;
            margin-top: 12px;
            width: 100%;
            -webkit-overflow-scrolling: touch;
            flex-grow: 1;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .product-carousel::-webkit-scrollbar,
        .chatbot-product-carousel::-webkit-scrollbar {
            display: none;
        }

        .carousel-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255,255,255,0.95);
            border: ${borderGray};
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            color: ${colorTextMain};
            transition: all 0.2s var(--ease-premium);
        }
        .carousel-nav-btn:hover {
            background: #fff;
            color: var(--primary-color);
        }
        .carousel-nav-btn svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
        }
        .carousel-nav-left { left: -10px; }
        .carousel-nav-right { right: -10px; }

        /* Product card — premium design */
        .product-card {
            flex: 0 0 200px;
            scroll-snap-align: start;
            background: #fff;
            border-radius: 16px;
            padding: 12px;
            box-shadow: 0 6px 14px rgba(0,0,0,0.08);
            transition: all 200ms cubic-bezier(0.16, 0.84, 0.44, 1);
            cursor: pointer;
            flex-shrink: 0;
        }
        .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .product-card:nth-child(1) { animation: slideInCard 300ms cubic-bezier(0.16, 0.84, 0.44, 1) 0ms both; }
        .product-card:nth-child(2) { animation: slideInCard 300ms cubic-bezier(0.16, 0.84, 0.44, 1) 100ms both; }
        .product-card:nth-child(3) { animation: slideInCard 300ms cubic-bezier(0.16, 0.84, 0.44, 1) 200ms both; }
        .product-card:nth-child(4) { animation: slideInCard 300ms cubic-bezier(0.16, 0.84, 0.44, 1) 300ms both; }
        .product-card:nth-child(5) { animation: slideInCard 300ms cubic-bezier(0.16, 0.84, 0.44, 1) 400ms both; }
        @keyframes slideInCard {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .product-image-wrap {
            position: relative;
            width: 100%;
            margin-bottom: 8px;
            border-radius: 12px;
            overflow: hidden;
        }

        .product-image {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 12px;
            background: #f3f4f6;
            display: block;
            vertical-align: top;
        }

        /* Badge overlays top-left of image — dark style */
        .product-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            z-index: 1;
            background: #1f2937;
            color: #fff;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 4px 8px;
            border-radius: 8px;
            letter-spacing: 0.3px;
        }

        .product-name {
            font-size: 14px;
            font-weight: 600;
            color: #111827;
            margin: 8px 0;
            line-height: 1.3;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .product-price-container {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 12px;
        }
        .product-price {
            font-size: 16px;
            font-weight: 700;
            color: #111827;
        }
        .product-original-price {
            font-size: 12px;
            color: #9ca3af;
            text-decoration: line-through;
            font-weight: 400;
        }

        .add-to-cart-btn {
            width: 100%;
            padding: 10px;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
            transition: all 200ms cubic-bezier(0.16, 0.84, 0.44, 1);
        }
        .add-to-cart-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .add-to-cart-btn:active {
            transform: scale(0.98);
        }

        /* Legacy carousel-card alias */
        .carousel-card .chatbot-product-img {
            border-radius: 12px;
            width: 100%;
            height: 120px;
            object-fit: cover;
            background: #f3f4f6;
        }
        .carousel-card .chatbot-product-content {
            padding: 12px;
        }

        /* --- Interactive Size Pills --- */
        .chatbot-product-sizes {
            display: flex;
            gap: 6px;
            margin-bottom: 15px;
            flex-wrap: wrap;
        }

        .size-pill {
            padding: 4px 8px;
            font-size: 11px;
            border: ${borderGray};
            border-radius: 4px;
            background: #fff;
            color: ${colorTextMain};
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .size-pill:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        .size-pill.selected {
            background: var(--primary-color);
            color: #fff;
            border-color: var(--primary-color);
            font-weight: 600;
        }

        /* --- Interactive Primary Button --- */
        .chatbot-product-action {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 10px;
            background: var(--primary-color);
            color: #fff;
            border-radius: 6px;
            font-size: 13px;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: opacity 0.2s ease;
        }
        
        .chatbot-product-action:hover {
            opacity: 0.9;
            transform: scale(1.02);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .chatbot-product-action:active {
            transform: scale(0.98);
        }
        .chatbot-product-action {
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium), opacity 0.2s var(--ease-premium);
        }

        .chatbot-product-action:disabled {
            background: #ccc;
            cursor: not-allowed;
        }

        /* Input Area — pill shape, focus ring, slideUp on open */
        .chatbot-input-area {
            display: flex;
            align-items: center;
            gap: 0;
            padding: 16px;
            padding-bottom: calc(16px + env(safe-area-inset-bottom, 0));
            background: transparent;
            opacity: 0;
        }
        .chatbot-window.is-open .chatbot-input-area {
            animation: input-slideUp 0.3s var(--ease-premium) 0.45s forwards;
        }
        @keyframes input-slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .chatbot-input-wrap {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 8px;
            background: #f3f4f6;
            border: none;
            border-radius: 12px;
            padding: 4px 4px 4px 12px;
            transition: background 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium), outline 0.2s var(--ease-premium);
        }
        .chatbot-input-wrap:focus-within {
            background: #fff;
            box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
            outline: 2px solid ${primary};
            outline-offset: 0;
        }
        .chatbot-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 14px;
            color: ${colorTextMain};
            background: transparent;
            padding: 0 8px;
            min-width: 0;
        }
        .chatbot-input::placeholder {
            color: #9ca3af;
        }
        .chatbot-send-btn {
            width: 36px;
            height: 36px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: ${gradientHeader};
            color: #fff;
            flex-shrink: 0;
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium), opacity 0.2s var(--ease-premium);
        }
        .chatbot-send-btn.active {
            opacity: 1;
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .chatbot-send-btn.active:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .chatbot-send-btn:active {
            transform: scale(0.9);
        }
        .chatbot-send-btn:disabled,
        .chatbot-send-btn:not(.active) {
            opacity: 0.5;
            cursor: not-allowed;
            box-shadow: none;
        }
        .chatbot-send-btn:not(.active):hover {
            transform: none;
        }
        .chatbot-send-btn svg {
            width: 18px;
            height: 18px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
        }
        .chatbot-input-area .chatbot-attach-btn {
            width: 32px;
            height: 32px;
            border: none;
            background: transparent;
            color: #9ca3af;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-right: 4px;
        }
        .chatbot-input-area .chatbot-attach-btn:hover {
            color: ${colorTextMain};
        }
        .chatbot-input-area .chatbot-attach-btn svg {
            width: 16px;
            height: 16px;
        }
        /* Footer — "Powered by Aura AI", slideUp on open */
        .chatbot-footer {
            padding: 12px 16px;
            text-align: center;
            flex-shrink: 0;
            opacity: 0;
        }
        .chatbot-window.is-open .chatbot-footer {
            animation: footer-slideUp 0.3s var(--ease-premium) 0.6s forwards;
        }
        @keyframes footer-slideUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .chatbot-footer p {
            margin: 0;
            font-size: 12px;
            color: #6b7280;
        }

        /* Toast notifications — top 24px, toastIn/toastOut (Figma) */
        .chatbot-toast-host {
            position: fixed;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10000;
            pointer-events: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .chatbot-toast {
            min-width: 220px;
            max-width: 320px;
            padding: 12px 16px;
            border-radius: 16px;
            background: #ffffff;
            box-shadow: 0 6px 14px rgba(0,0,0,0.08);
            border: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            gap: 12px;
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
            transition: opacity 0.3s var(--ease-premium), transform 0.3s var(--ease-premium);
        }
        .chatbot-toast-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .chatbot-toast.hiding {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
        }
        .chatbot-toast-image-wrap {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            overflow: hidden;
            flex-shrink: 0;
        }
        .chatbot-toast-image-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .chatbot-toast-content {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .chatbot-toast-title {
            font-size: 13px;
            font-weight: 600;
            color: #111827;
        }
        .chatbot-toast-message {
            font-size: 12px;
            color: #4b5563;
        }

        /* Welcome Bubble — white, blue text, bubbleFloat + fadeInSlide / fadeOutSlide */
        .welcome-bubble {
            position: absolute;
            bottom: 72px;
            ${isLeft ? 'left: 0;' : 'right: 0;'}
            background: #fff;
            color: ${primary};
            padding: 12px 20px;
            border-radius: 16px;
            box-shadow: 0 0 40px rgba(37,99,235,0.25);
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            pointer-events: auto;
            transform-origin: bottom ${isLeft ? 'left' : 'right'};
            animation: welcome-bubbleFloat 2s ease-in-out infinite,
                       welcome-fadeInSlide 0.4s var(--ease-premium) forwards;
        }
        .welcome-bubble.hidden {
            animation: welcome-fadeOutSlide 0.3s var(--ease-premium) forwards;
            opacity: 0;
            pointer-events: none;
        }
        @keyframes welcome-bubbleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
        }
        @keyframes welcome-fadeInSlide {
            from { opacity: 0; transform: translateX(10px) scale(0.9); }
            to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes welcome-fadeOutSlide {
            from { opacity: 1; transform: translateX(0) scale(1); }
            to { opacity: 0; transform: translateX(10px) scale(0.9); }
        }

        /* Typing indicator — 3 dots, bounce, no avatar (Figma) */
        .typing-indicator-wrapper {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            align-self: flex-start;
        }
        .typing-indicator-wrapper .chatbot-message-avatar {
            display: none;
        }
        .message-bubble.typing-indicator {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 14px 16px;
            border-radius: 20px 20px 20px 6px;
            background: #fff;
            box-shadow: ${botBubbleShadow};
        }
        .typing-indicator .dot {
            width: 8px;
            height: 8px;
            background-color: #2563eb;
            border-radius: 50%;
            animation: typing-bounce 1.4s var(--ease-premium) infinite;
        }
        .typing-indicator .dot:nth-child(1) { animation-delay: 0s; }
        .typing-indicator .dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing-bounce {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-8px); }
        }

        /* Skeleton loaders */
        .skeleton-product-row {
            display: flex;
            gap: 12px;
            padding: 10px 0;
            overflow: hidden;
        }
        .skeleton-card {
            flex: 0 0 140px;
            height: 180px;
            border-radius: 12px;
            background: linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 100%);
            background-size: 200% 100%;
            animation: skeleton-shimmer 1.5s ease-in-out infinite;
        }
        .skeleton-card:nth-child(2) { animation-delay: 0.15s; }
        .skeleton-card:nth-child(3) { animation-delay: 0.3s; }
        .skeleton-card:nth-child(4) { animation-delay: 0.45s; }
        @keyframes skeleton-shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        /* Suggestion chips — Design-Chatbot-Widget: white, border, rounded-full */
        .chatbot-suggestion-chips {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
        }
        .chatbot-chips-below {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            width: 100%;
            max-width: 100%;
            margin-top: 8px;
        }
        .chatbot-message.bot-message .chatbot-chips-below {
            padding-left: 0;
            padding-right: 0;
        }
        .suggestion-chip {
            flex-shrink: 0;
            min-width: 140px;
            padding: 10px 20px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
            background: #fff;
            color: #374151;
            border: 1.5px solid #e5e7eb;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            transition: box-shadow 0.2s var(--ease-premium), transform 0.2s var(--ease-premium),
                        background 0.2s var(--ease-premium), color 0.2s var(--ease-premium), border-color 0.2s var(--ease-premium);
            animation: chip-in 0.3s var(--ease-premium) forwards;
        }
        .suggestion-chip:hover {
            background: #2563eb;
            color: #fff;
            border-color: #2563eb;
            box-shadow: 0 4px 12px rgba(37,99,235,0.2);
            transform: translateY(-2px) scale(1.03);
        }
        .suggestion-chip:active {
            transform: translateY(0) scale(0.97);
        }
        @keyframes chip-in {
            from { opacity: 0; transform: translateY(5px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* --- Quick action buttons under messages --- */
        .chatbot-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .action-btn {
            padding: 8px 14px;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 500;
            background: var(--primary-color);
            color: #fff;
            border: none;
            cursor: pointer;
            transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
        }
        .action-btn:hover {
            opacity: 0.95;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px color-mix(in srgb, var(--primary-color) 35%, transparent);
        }
        .action-btn:active {
            transform: translateY(0);
        }

        /* --- Product card 3D hover (driven by JS) --- */
        .chatbot-product-card-3d,
        .carousel-card-3d {
            transition: transform 0.15s ease-out;
            will-change: transform;
        }

        /* --- Comparison table (horizontal scroll) --- */
        .chatbot-bubble .md-table-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 10px 0;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .chatbot-bubble .md-table-wrap table {
            min-width: 280px;
        }

        /* Quick Action Grid (2x2) — premium stagger + hover */
        .chatbot-quick-actions-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 12px;
            width: 100%;
        }

        .quick-action-card {
            background: #fff;
            border-radius: 14px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            cursor: pointer;
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(0, 0, 0, 0.06);
            text-align: left;
        }
        .quick-action-card:nth-child(1) { animation: quickAction-in 0.35s var(--ease-premium) 0s forwards; }
        .quick-action-card:nth-child(2) { animation: quickAction-in 0.35s var(--ease-premium) 0.1s forwards; }
        .quick-action-card:nth-child(3) { animation: quickAction-in 0.35s var(--ease-premium) 0.2s forwards; }
        .quick-action-card:nth-child(4) { animation: quickAction-in 0.35s var(--ease-premium) 0.3s forwards; }
        @keyframes quickAction-in {
            from { opacity: 0; transform: translateY(10px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .quick-action-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        .quick-action-card:active {
            transform: translateY(-2px) scale(0.98);
        }

        .quick-action-icon-box {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(37, 99, 235, 0.06);
            color: ${primary};
        }

        .quick-action-icon-box svg {
            width: 18px;
            height: 18px;
        }

        .quick-action-info {
            display: flex;
            flex-direction: column;
            gap: 1px;
        }

        .quick-action-title {
            font-size: 13px;
            font-weight: 700;
            color: ${colorTextMain};
            line-height: 1.2;
        }

        .quick-action-desc {
            font-size: 11px;
            color: ${colorTextMuted};
            line-height: 1.2;
        }

        /* Preset pills — row, wrap */
        .chatbot-presets {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            padding: 8px 0;
            margin-top: 4px;
            background: transparent;
            border: none;
        }

        .preset-pill {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 6px;
            background: #fff;
            border: 1px solid rgba(209,213,219,0.9);
            color: ${colorTextMain};
            padding: 10px 12px;
            border-radius: 16px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.25s ease;
            text-align: left;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .preset-pill:hover {
            background: ${gradientHeader};
            color: #fff;
            border-color: transparent;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37,99,235,0.35);
        }
        .preset-pill:active {
            transform: translateY(0);
        }

        /* Section card — "Your Cart" / "Product Comparison" style */
        .chatbot-section-card {
            margin-top: 12px;
            background: rgba(255,255,255,0.98);
            border: 1px solid rgba(37,99,235,0.2);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: ${botBubbleShadow};
        }
        .chatbot-cart-card-premium {
            border-radius: 18px;
            box-shadow: 0 6px 14px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        .chatbot-cart-card-premium .chatbot-cart-card-body {
            padding: 16px;
        }
        .chatbot-cart-item-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid #f3f4f6;
        }
        .chatbot-cart-item-row:last-of-type {
            border-bottom: none;
        }
        .chatbot-cart-item-thumb-wrap {
            position: relative;
            flex-shrink: 0;
            width: 64px;
            height: 64px;
            border-radius: 12px;
            overflow: hidden;
        }
        .chatbot-cart-item-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .chatbot-cart-item-badge {
            position: absolute;
            top: 6px;
            left: 6px;
            background: #2563eb;
            color: #fff;
            font-size: 9px;
            font-weight: 700;
            padding: 3px 6px;
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 0.02em;
        }
        .chatbot-cart-item-details {
            flex: 1;
            min-width: 0;
        }
        .chatbot-cart-item-name {
            font-size: 14px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
            line-height: 1.3;
        }
        .chatbot-cart-item-price {
            font-size: 15px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 8px;
        }
        .chatbot-cart-item-actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .chatbot-cart-qty-pill {
            display: inline-flex;
            align-items: center;
            background: #f3f4f6;
            border-radius: 8px;
            overflow: hidden;
        }
        .chatbot-cart-qty-btn {
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: #fff;
            color: #111827;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s var(--ease-premium);
        }
        .chatbot-cart-qty-btn:hover {
            background: #e5e7eb;
        }
        .chatbot-cart-qty-num {
            min-width: 28px;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            color: #111827;
        }
        .chatbot-cart-remove-btn {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: transparent;
            color: #9ca3af;
            cursor: pointer;
            border-radius: 8px;
            transition: color 0.2s var(--ease-premium), background 0.2s var(--ease-premium);
        }
        .chatbot-cart-remove-btn:hover {
            color: #ef4444;
            background: rgba(239,68,68,0.08);
        }
        .chatbot-cart-remove-btn svg {
            width: 18px;
            height: 18px;
        }
        .chatbot-cart-summary {
            padding: 12px 0;
            margin-top: 8px;
        }
        .chatbot-cart-summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #374151;
            margin-bottom: 6px;
        }
        .chatbot-cart-summary-row:last-child {
            margin-bottom: 0;
        }
        .chatbot-cart-summary-label {
            font-weight: 500;
        }
        .chatbot-cart-summary-value {
            font-weight: 600;
            color: #111827;
        }
        .chatbot-cart-shipping-free {
            font-weight: 700;
            color: #34d399;
        }
        .chatbot-cart-summary-divider {
            height: 1px;
            background: #f3f4f6;
            margin: 10px 0;
        }
        .chatbot-cart-summary-total .chatbot-cart-summary-label {
            font-weight: 700;
            color: #111827;
        }
        .chatbot-cart-summary-total-value {
            font-size: 18px;
            font-weight: 700;
            color: #2563eb;
        }
        .chatbot-cart-checkout-btn-premium {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 14px 20px;
            margin-top: 12px;
            font-size: 15px;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .chatbot-cart-checkout-btn-premium:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(37,99,235,0.4);
        }
        .chatbot-cart-checkout-btn-premium:active {
            transform: translateY(0);
        }
        .chatbot-cart-checkout-btn-premium svg {
            flex-shrink: 0;
        }

        .chatbot-cart-card .chatbot-section-card-title {
            padding: 16px 20px;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 0.02em;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .chatbot-section-card-title {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 18px;
            font-size: 14px;
            font-weight: 600;
            color: ${colorTextMain};
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .chatbot-section-card-body {
            padding: 14px 20px;
        }
        .chatbot-cart-empty {
            padding: 16px 0;
            color: ${colorTextMuted};
            font-size: 13px;
            text-align: center;
        }
        .chatbot-section-card-row {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .chatbot-section-card-row:last-child {
            border-bottom: none;
        }
        .chatbot-cart-item {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .chatbot-cart-item-img {
            width: 56px;
            height: 56px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0;
        }
        .chatbot-cart-item-info {
            flex: 1;
            min-width: 0;
        }
        .chatbot-cart-item-title {
            font-size: 13px;
            font-weight: 500;
            color: ${colorTextMain};
            margin-bottom: 4px;
        }
        .chatbot-cart-item-pricing {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 4px;
            margin-bottom: 2px;
        }
        .chatbot-cart-total-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            padding-top: 14px;
            margin-top: 6px;
            border-top: 1px solid rgba(0,0,0,0.08);
        }
        .chatbot-cart-total-label { color: ${colorTextMain}; font-size: 14px; }
        .chatbot-cart-total-value { color: var(--primary-color); font-size: 16px; font-weight: 700; }
        .chatbot-cart-checkout-footer {
            padding: 18px 20px;
            border-top: 1px solid rgba(0,0,0,0.08);
            background: rgba(0,0,0,0.03);
        }
        .chatbot-cart-checkout-prompt {
            margin: 0 0 12px 0;
            font-size: 13px;
            color: ${colorTextMuted};
            font-weight: 500;
        }
        .chatbot-cart-checkout-btn {
            display: block;
            width: 100%;
            padding: 12px 20px;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(135deg, var(--primary-color) 0%, ${primaryLight} 100%);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.15s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 14px rgba(1, 100, 255, 0.35);
        }
        .chatbot-cart-checkout-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(1, 100, 255, 0.45);
        }
        .chatbot-cart-checkout-btn:active {
            transform: translateY(0);
        }
        .chatbot-cart-suggestions {
            padding: 14px 20px 18px;
            border-top: 1px solid rgba(0,0,0,0.06);
        }
        .chatbot-cart-suggestions-text {
            margin: 0 0 10px 0;
            font-size: 12px;
            color: ${colorTextMuted};
            font-weight: 500;
        }
        .chatbot-cart-suggestion-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chatbot-cart-pill {
            padding: 8px 14px;
            font-size: 12px;
            font-weight: 500;
            border-radius: 20px;
            border: 1px solid rgba(1, 100, 255, 0.35);
            background: rgba(0,0,0,0.04);
            color: ${colorTextMain};
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .chatbot-cart-pill:hover {
            background: rgba(1, 100, 255, 0.15);
            border-color: rgba(1, 100, 255, 0.4);
        }
        .chatbot-cart-pill-checkout {
            background: linear-gradient(135deg, var(--primary-color), #0152cc);
            color: #fff;
            border-color: transparent;
        }
        .chatbot-cart-pill-checkout:hover {
            background: linear-gradient(135deg, #0152cc, var(--primary-color));
            box-shadow: 0 4px 12px rgba(1, 100, 255, 0.35);
        }
        /* Order history card — appealing, scannable layout */
        .chatbot-order-history-card .chatbot-section-card-title {
            padding: 16px 20px;
            font-size: 15px;
            font-weight: 600;
        }
        .chatbot-order-history-body {
            padding: 16px 20px;
        }
        .chatbot-order-block {
            padding: 14px 16px;
            margin-bottom: 12px;
            background: rgba(0,0,0,0.04);
            border-radius: 12px;
            border: 1px solid rgba(0,0,0,0.06);
        }
        .chatbot-order-block:last-child {
            margin-bottom: 0;
        }
        .chatbot-order-block-header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px 16px;
            margin-bottom: 10px;
        }
        .chatbot-order-id {
            font-weight: 700;
            font-size: 13px;
            font-family: ui-monospace, monospace;
            color: var(--primary-color);
            letter-spacing: 0.02em;
        }
        .chatbot-order-date {
            font-size: 12px;
            color: ${colorTextMuted};
        }
        .chatbot-order-status {
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            margin-left: auto;
        }
        .order-status-processing {
            background: rgba(245, 158, 11, 0.2);
            color: #f59e0b;
        }
        .order-status-shipped {
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
        }
        .order-status-delivered {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
        }
        .order-status-cancelled {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
        }
        .order-status-default {
            background: rgba(0,0,0,0.08);
            color: ${colorTextMuted};
        }
        .chatbot-order-items {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 8px;
        }
        .chatbot-order-item-line {
            font-size: 12px;
            color: ${colorTextMain};
            opacity: 0.95;
        }
        .chatbot-order-total {
            font-size: 13px;
            font-weight: 600;
            color: var(--primary-color);
            padding-top: 6px;
            border-top: 1px solid rgba(0,0,0,0.06);
        }
        .chatbot-order-history-empty {
            padding: 24px 16px;
            text-align: center;
            color: ${colorTextMuted};
            font-size: 14px;
        }

        /* --- Checkout Flow Styles --- */
        .chatbot-checkout-wrapper {
            width: 100%;
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .checkout-auth-tabs {
            display: flex;
            gap: 4px;
            padding: 4px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .checkout-auth-tab {
            flex: 1;
            padding: 8px;
            border: none;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            background: transparent;
            color: ${colorTextMuted};
        }

        .checkout-auth-tab.active {
            background: ${primary};
            color: #fff;
        }

        .checkout-form-card {
            background: #fff;
            border-radius: 16px;
            padding: 16px;
            box-shadow: ${botBubbleShadow};
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .checkout-field {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .checkout-field label {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: ${colorTextMuted};
        }

        .checkout-label-uppercase {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #374151;
            margin-bottom: 6px;
            display: block;
        }
        .checkout-mobile-card {
            gap: 14px;
        }
        .checkout-mobile-input-wrap {
            display: flex;
            align-items: center;
            gap: 0;
            background: #fff;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            padding: 0 14px;
            min-height: 48px;
            transition: border-color 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
        }
        .checkout-mobile-input-wrap:focus-within {
            border-color: #93c5fd;
            box-shadow: 0 0 0 3px rgba(147,197,253,0.35);
        }
        .checkout-mobile-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #9ca3af;
            margin-right: 8px;
        }
        .checkout-mobile-icon svg {
            width: 18px;
            height: 18px;
        }
        .checkout-mobile-prefix {
            font-size: 14px;
            font-weight: 600;
            color: #6b7280;
            margin-right: 6px;
        }
        .checkout-mobile-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 15px;
            font-weight: 500;
            color: #111827;
            background: transparent;
            min-width: 0;
        }
        .checkout-mobile-input::placeholder {
            color: #9ca3af;
        }
        .checkout-send-otp-btn {
            width: 100%;
            padding: 14px 20px;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
        }
        .checkout-send-otp-btn:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(37,99,235,0.4);
        }
        .checkout-send-otp-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .checkout-send-otp-btn svg {
            width: 18px;
            height: 18px;
        }
        .checkout-secure-note {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 6px;
            font-size: 11px;
            color: #9ca3af;
            font-weight: 500;
        }
        .checkout-secure-note svg {
            flex-shrink: 0;
        }

        .checkout-otp-card {
            gap: 14px;
        }
        .checkout-otp-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        }
        .checkout-otp-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #111827;
            margin: 0;
        }
        .checkout-change-number-link {
            background: none;
            border: none;
            font-size: 13px;
            font-weight: 600;
            color: #2563eb;
            cursor: pointer;
            padding: 0;
        }
        .checkout-change-number-link:hover {
            text-decoration: underline;
        }
        .checkout-otp-sent-to {
            font-size: 13px;
            color: #6b7280;
            margin: 0 0 14px 0;
        }
        .checkout-otp-boxes {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 14px;
        }
        .checkout-otp-box {
            width: 48px;
            height: 52px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            background: #fff;
            outline: none;
            transition: border-color 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
        }
        .checkout-otp-box:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        }
        .checkout-resend-link {
            background: none;
            border: none;
            font-size: 13px;
            font-weight: 600;
            color: #2563eb;
            cursor: pointer;
            padding: 0;
            margin-bottom: 4px;
        }
        .checkout-resend-link:hover {
            text-decoration: underline;
        }
        .checkout-verify-btn {
            width: 100%;
            padding: 14px 20px;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
        }
        .checkout-verify-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(37,99,235,0.4);
        }
        .checkout-verify-btn svg {
            width: 18px;
            height: 18px;
        }

        .checkout-input-wrap {
            position: relative;
            display: flex;
            align-items: center;
        }

        .checkout-input-wrap svg {
            position: absolute;
            left: 12px;
            width: 14px;
            height: 14px;
            color: #9ca3af;
        }

        .checkout-input {
            width: 100%;
            padding: 10px 12px 10px 36px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            font-size: 13px;
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
        }

        .checkout-input:focus {
            border-color: ${primary};
            box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        }

        /* OTP inputs — premium focus ring and scale */
        .otp-inputs {
            display: flex;
            gap: 8px;
            justify-content: center;
            margin: 16px 0;
        }
        .otp-box {
            width: 40px;
            height: 48px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            color: ${colorTextMain};
            background: #fff;
            transition: border-color 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium), transform 0.2s var(--ease-premium);
        }
        .otp-box:focus {
            outline: none;
            border-color: ${primary};
            box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
            transform: scale(1.05);
        }

        .checkout-primary-btn {
            width: 100%;
            padding: 12px;
            background: ${gradientHeader};
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .checkout-primary-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(37,99,235,0.4);
        }

        .checkout-primary-btn svg {
            width: 14px;
            height: 14px;
        }

        .checkout-address-card {
            width: 100%;
            text-align: left;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            padding: 12px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .checkout-address-card.selected {
            border: 2px solid #2563eb;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.15);
        }

        .address-icon-box {
            width: 44px;
            height: 44px;
            min-width: 44px;
            padding: 0;
            border-radius: 50%;
            background: ${primary};
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .address-icon-box.address-icon-home {
            background: #93c5fd;
            color: #fff;
        }

        .address-info {
            flex: 1;
        }

        .selection-check-badge {
            width: 20px;
            height: 20px;
            background: #fff;
            color: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
            border: 1px solid rgba(16, 185, 129, 0.2);
            margin-left: auto;
        }

        .selection-check-badge svg {
            width: 14px;
            height: 14px;
        }

        .address-header {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 2px;
        }

        .address-name {
            font-size: 15px;
            font-weight: 700;
            color: ${colorTextMain};
        }

        .address-type,
        .address-type-badge {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 3px 8px;
            background: #e5e7eb;
            color: #374151;
            border-radius: 6px;
        }

        .address-text {
            font-size: 13px;
            color: ${colorTextMuted};
            line-height: 1.4;
        }

        .address-phone {
            font-size: 12px;
            color: #6b7280;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 6px;
        }

        .checkout-address-step {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .checkout-add-address,
        .checkout-add-address-dashed {
            width: 100%;
            padding: 14px;
            border: 2px dashed #d1d5db;
            border-radius: 16px;
            background: transparent;
            color: #6b7280;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s;
        }

        .checkout-add-address:hover {
            border-color: ${primary};
            color: ${primary};
            background: rgba(37,99,235,0.02);
        }

        .checkout-method-card {
            width: 100%;
            text-align: left;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            padding: 16px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .checkout-method-card.selected {
            border: 2px solid #2563eb;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.15);
        }

        .checkout-payment-step {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .method-icon-box {
            width: 44px;
            height: 44px;
            min-width: 44px;
            padding: 0;
            border-radius: 12px;
            background: ${primary};
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .checkout-method-card:not(.selected) .method-icon-box {
            background: #f3f4f6;
            color: #6b7280;
        }

        .method-title,
        .method-info h4 {
            font-size: 15px;
            font-weight: 700;
            color: ${colorTextMain};
        }

        .method-desc,
        .method-info p {
            font-size: 13px;
            color: #6b7280;
        }

        .checkout-summary-card {
            background: #fff;
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            gap: 10px;
            border: 1px solid #f3f4f6;
        }

        .summary-title {
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            color: ${colorTextMain};
            letter-spacing: 0.08em;
            margin: 0 0 8px 0;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: ${colorTextMuted};
        }

        .summary-shipping-free {
            color: #10b981 !important;
            font-weight: 700;
        }

        .summary-divider {
            height: 1px;
            background: #e5e7eb;
            margin: 4px 0;
        }

        .summary-row.summary-total {
            margin-top: 4px;
            padding-top: 12px;
            border-top: 1px solid #e5e7eb;
            font-weight: 800;
            font-size: 16px;
            color: ${colorTextMain};
        }

        .total-value {
            color: #2563eb;
            font-size: 18px;
            font-weight: 800;
        }

        .checkout-place-order-btn {
            width: 100%;
            padding: 14px 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
        }

        .checkout-place-order-btn:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 6px 18px rgba(16, 185, 129, 0.4);
        }

        .checkout-place-order-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .checkout-place-order-btn svg {
            width: 20px;
            height: 20px;
        }

        /* Premium Order Confirmed card (Stripe / Apple Wallet style) */
        .order-card.checkout-confirmation-premium {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.5;
            padding: 0;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.2);
            background: linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%);
            box-shadow: 0 20px 40px rgba(0,0,0,0.12);
            overflow: hidden;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .order-card.checkout-confirmation-premium:hover {
            transform: translateY(-2px);
            box-shadow: 0 24px 48px rgba(0,0,0,0.14);
        }
        @supports (backdrop-filter: blur(12px)) {
            .order-card.checkout-confirmation-premium {
                background: linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(240,247,255,0.9) 100%);
                backdrop-filter: blur(12px);
            }
        }

        .order-header {
            position: relative;
            padding: 20px 18px 16px;
            text-align: center;
        }
        .order-header-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #2563EB, #4F46E5);
            opacity: 0.9;
        }
        .order-header-badge {
            width: 48px;
            height: 48px;
            margin: 0 auto 10px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            box-shadow: 0 8px 20px rgba(16,185,129,0.35);
        }
        .order-header-title {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
            margin: 0 0 10px;
            letter-spacing: -0.02em;
        }
        .order-header-id {
            display: inline-block;
            background: rgba(0,0,0,0.05);
            border-radius: 999px;
            padding: 4px 10px;
            font-size: 12px;
            font-weight: 600;
            color: #6B7280;
        }

        .order-product {
            padding: 0 18px 16px;
            border-top: 1px solid rgba(0,0,0,0.06);
        }
        .order-product-label {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #6B7280;
            margin-bottom: 10px;
        }
        .order-product-row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .order-product-row:last-child {
            border-bottom: none;
        }
        .order-product-img-wrap {
            flex-shrink: 0;
            width: 56px;
            height: 56px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: transform 0.2s ease;
        }
        .order-product-row:hover .order-product-img-wrap {
            transform: scale(1.05);
        }
        .order-product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .order-product-placeholder {
            width: 100%;
            height: 100%;
            background: #F8FAFC;
        }
        .order-product-info {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .order-product-name {
            font-size: 14px;
            font-weight: 600;
            color: #111827;
        }
        .order-product-meta {
            font-size: 12px;
            color: #6B7280;
        }

        .order-summary {
            padding: 14px 18px;
            background: #F8FAFC;
            border-top: 1px solid rgba(0,0,0,0.06);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px 16px;
        }
        .order-summary-row {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .order-summary-total .order-summary-value {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
        }
        .order-summary-label {
            font-size: 12px;
            color: #6B7280;
        }
        .order-summary-value {
            font-size: 14px;
            color: #111827;
        }
        .order-payment-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 4px 10px;
            background: rgba(37,99,235,0.1);
            color: #2563EB;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
            width: fit-content;
        }

        .order-shipping {
            padding: 14px 18px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .order-shipping-block {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .order-shipping-label {
            font-size: 12px;
            color: #6B7280;
        }
        .order-shipping-value {
            font-size: 14px;
            color: #111827;
        }
        .order-shipping-value-secondary {
            font-size: 13px;
            color: #6B7280;
        }

        .order-status {
            padding: 0 18px 14px;
        }
        .order-status-message {
            margin: 0;
            padding: 10px 12px;
            background: rgba(37,99,235,0.08);
            border-radius: 10px;
            font-size: 14px;
            color: #111827;
            line-height: 1.5;
        }

        .order-progress {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 18px 20px;
            gap: 4px;
            border-top: 1px solid rgba(0,0,0,0.06);
        }
        .order-progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            flex: 0 0 auto;
        }
        .order-progress-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #E5E7EB;
            transition: background 0.2s ease;
        }
        .order-progress-step.order-progress-done .order-progress-dot,
        .order-progress-step.order-progress-active .order-progress-dot {
            background: #2563EB;
            box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
        }
        .order-progress-step.order-progress-active .order-progress-dot {
            background: linear-gradient(135deg, #2563EB, #4F46E5);
        }
        .order-progress-label {
            font-size: 10px;
            font-weight: 600;
            color: #6B7280;
            white-space: nowrap;
        }
        .order-progress-step.order-progress-done .order-progress-label,
        .order-progress-step.order-progress-active .order-progress-label {
            color: #111827;
        }
        .order-progress-line {
            flex: 1;
            height: 2px;
            min-width: 12px;
            background: #E5E7EB;
        }
        .order-progress-line.order-progress-active {
            background: linear-gradient(90deg, #2563EB, #4F46E5);
        }

        .checkout-confirmation {
            text-align: center;
            padding: 24px 16px;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        .success-icon-box {
            width: 64px;
            height: 64px;
            background: #10b981;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(16,185,129,0.3);
            margin-bottom: 8px;
        }
        .success-icon-box svg { width: 32px; height: 32px; }
        .order-number-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 10px 20px;
            background: #f3f4f6;
            border: 1px solid #e5e7eb;
            border-radius: 25px;
            font-size: 13px;
            font-weight: 600;
            color: #6b7280;
        }
        .order-number-badge b { color: #111827; font-size: 15px; }
        .confirmation-title { font-size: 18px; font-weight: 800; color: #111827; margin: 0; }
        .confirmation-message { font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0; }
        .confirmation-products { width: 100%; text-align: left; margin: 8px 0; padding-top: 12px; border-top: 1px solid #e5e7eb; }
        .confirmation-products-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 10px; }
        .confirmation-product-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
        .confirmation-product-row:last-child { border-bottom: none; }
        .confirmation-product-img { width: 48px; height: 48px; object-fit: cover; border-radius: 10px; }
        .confirmation-product-placeholder { width: 48px; height: 48px; border-radius: 10px; background: #f3f4f6; }
        .confirmation-product-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .confirmation-product-name { font-size: 14px; font-weight: 600; color: #111827; }
        .confirmation-product-meta { font-size: 12px; color: #6b7280; }

        .stock-in { color: #22c55e; font-size: 12px; }
        .stock-out { color: #ef4444; font-size: 12px; }
        .price-original { text-decoration: line-through; color: ${colorTextMuted}; font-size: 12px; margin-left: 6px; }

        /* Inline product card (inside stream) */
        .chatbot-inline-product {
            margin-top: 10px;
            ${cardDarkGradient}
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .chatbot-inline-product:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .chatbot-inline-product-actions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            padding: 8px 12px;
            background: rgba(0,0,0,0.03);
        }
        .chatbot-inline-product-actions button {
            padding: 6px 10px;
            font-size: 11px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-weight: 500;
            transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .chatbot-inline-product-actions button:active {
            transform: scale(0.97);
        }

        /* ═══════════════════════════════════════════════
           LauncherFX — animation system styles
           ═══════════════════════════════════════════════ */

        /* Canvas overlay (appended to document.body) */
        /* Note: canvas + flash are styled globally since they live on document.body */

        /* Orbital dots */
        .lfx-orb {
            position: absolute;
            width: 6px; height: 6px;
            border-radius: 50%;
            top: calc(50% - 3px); left: calc(50% - 3px);
            animation: lfx-orb var(--lfx-os) linear infinite;
            pointer-events: none;
            z-index: 0;
        }
        @keyframes lfx-orb {
            from { transform: rotate(0deg) translateX(var(--lfx-or)) rotate(0deg); }
            to   { transform: rotate(360deg) translateX(var(--lfx-or)) rotate(-360deg); }
        }

        /* Radial glow */
        .lfx-glow {
            position: absolute;
            width: 110px; height: 110px;
            top: calc(50% - 55px); left: calc(50% - 55px);
            border-radius: 50%;
            background: radial-gradient(circle, rgba(123,111,255,0.35) 0%, transparent 70%);
            animation: lfx-glowPulse 2s ease-in-out infinite;
            pointer-events: none;
            z-index: 0;
        }
        @keyframes lfx-glowPulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
        }

        /* Hero element */
        .lfx-hero {
            position: fixed;
            width: 64px; height: 64px;
            z-index: 1000001;
            opacity: 0;
            pointer-events: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lfx-hero svg { width: 48px; height: 48px; }

        @keyframes lfx-heroKick {
            0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
            40%  { transform: scale(1.35) rotate(-8deg); opacity: 1; }
            70%  { transform: scale(0.92) rotate(4deg); }
            100% { transform: scale(1) rotate(0); }
        }

        /* SVG Light rays */
        .lfx-rays {
            position: fixed;
            z-index: 999998;
            pointer-events: none;
            opacity: 0;
        }
        @keyframes lfx-raysAnim {
            0%   { transform: scaleY(0.3); opacity: 0.9; }
            100% { transform: scaleY(2.8); opacity: 0; }
        }

        /* Chat window spring open (first-open only) */
        .chatbot-window.lfx-spring {
            animation: lfx-chatSpring 720ms cubic-bezier(0.34, 1.38, 0.64, 1) forwards !important;
            transition: none !important;
        }
        @keyframes lfx-chatSpring {
            0%   { transform: scale(0.04) rotate(8deg); opacity: 0; }
            50%  { transform: scale(1.07) rotate(-1.5deg); opacity: 1; }
            72%  { transform: scale(0.96) rotate(0.8deg); }
            88%  { transform: scale(1.02) rotate(0); }
            100% { transform: scale(1) rotate(0); opacity: 1; }
        }

        /* Shake */
        @keyframes lfx-shake {
            0%   { transform: translate(0, 0); }
            10%  { transform: translate(-5px, -4px); }
            20%  { transform: translate(5px, 4px); }
            30%  { transform: translate(-4px, 5px); }
            40%  { transform: translate(4px, -5px); }
            50%  { transform: translate(-3px, 3px); }
            60%  { transform: translate(3px, -3px); }
            70%  { transform: translate(-2px, 4px); }
            80%  { transform: translate(2px, -2px); }
            90%  { transform: translate(-1px, 1px); }
            100% { transform: translate(0, 0); }
        }

        /* DOM spark elements */
        .lfx-spark {
            position: fixed;
            z-index: 1000002;
            pointer-events: none;
            animation: lfx-sparkFly 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes lfx-sparkFly {
            0%   { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
            100% { opacity: 0; transform: translate(var(--lfx-sx), var(--lfx-sy)) scale(0) rotate(var(--lfx-sr)); }
        }

        /* When inside a sized container (e.g. Botify panel Live Preview), fit full chatbox in view */
        @container chatbot-preview (min-height: 200px) {
            .chatbot-window {
                max-height: min(520px, calc(100cqb - ${config.marginBottom + 98}px));
                min-height: min(320px, calc(100cqb - ${config.marginBottom + 98}px));
            }
        }
    `;
}
