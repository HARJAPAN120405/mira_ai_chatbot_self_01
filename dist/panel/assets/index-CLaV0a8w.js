(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const ye=["Ask about products...","Find sneakers under $100...","Compare two products...","Show trending items...","What's on sale?","Recommend something for me..."],ke=["View All","Filter by Price","Sale Items","Show sneakers under $100","Trending items","Best running shoes","Summer jackets","What's on sale?","Add to cart"],Ce=["Thinking...","Searching products...","Analyzing your request...","Looking for the best options..."],$e={botName:"Aura Concierge",botSubtitle:"Always Available",botAvatarUrl:"",position:"bottom-right",marginBottom:24,marginSide:24,primaryColor:"#2563eb",textColor:"#ffffff",backgroundColor:"#ffffff",headerStatus:"Always Available",quickActions:[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],autoDetectProduct:!0,greetingMessage:"Hi! I'm Aura, your shopping assistant. What can I help you with today?",inputPlaceholder:"Ask anything about orders, products...",placeholders:ye,suggestionChips:ke,welcomeMessage:"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",welcomeIconUrl:"",addToCartLabel:"Add to Cart",theme:"default",thinkingStatuses:Ce,apiBaseUrl:""};function Se(t={}){return{...$e,...t}}function Ee(t){const e=t.position.includes("left"),o=t.primaryColor||"#2563eb",s="#4f46e5",a=`linear-gradient(135deg, ${o}, ${s})`,n=`linear-gradient(135deg, ${o}, ${s})`,r="linear-gradient(180deg, #f8fafc, #eef2ff)",d="0 20px 50px rgba(0,0,0,0.15)",p="0 6px 14px rgba(0,0,0,0.08)",m="#111827",i="#6b7280",l="1px solid #e5e7eb",u="16px",b="#60a5fa",c=`background: #fff; border: ${l};`,w=`
        background: #fff;
        border: ${l};
        border-radius: ${u};
        box-shadow: ${p};
    `;return`
        /* Premium E-Commerce Chatbot — ultra-smooth animations */
        :host {
            --primary-color: ${o};
            --primary-indigo: ${s};
            --text-color: #ffffff;
            --bg-color: #ffffff;
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --shadow-panel: ${d};
            --border-radius: 18px;
            --transition-speed: 0.3s;
            --ease-premium: cubic-bezier(0.16, 0.84, 0.44, 1);
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
            ${t.position.includes("bottom")?`bottom: ${t.marginBottom}px;`:`top: ${t.marginBottom}px;`}
            ${e?`left: ${t.marginSide}px;`:`right: ${t.marginSide}px;`}
            z-index: 999999;
            display: flex;
            flex-direction: column;
            align-items: ${e?"flex-start":"flex-end"};
            pointer-events: none; /* Let clicks pass through wrapper */
            max-width: calc(100% - ${t.marginSide*2}px);
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
            background: ${a};
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
            max-width: min(360px, calc(100vw - ${t.marginSide*2+8}px));
            height: 600px;
            max-height: min(600px, calc(100vh - ${t.marginBottom+80}px));
            min-height: 400px;
            background: ${r};
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 18px;
            box-shadow: ${d};
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 24px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(30px) scale(0.95);
            transform-origin: bottom ${e?"left":"right"};
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
                ${e?"left: 20px;":"right: 20px;"}
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
            background: ${a};
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
            background: ${a};
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
            color: ${o};
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
            color: ${m};
            box-shadow: ${p};
        }
        .chatbot-message.bot .chatbot-bubble:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .chatbot-message.user .chatbot-bubble {
            border-radius: 20px 20px 6px 20px;
            background: ${n};
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
            color: ${i};
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
            color: ${m};
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
            ${w}
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
            color: ${m};
            margin-bottom: 5px;
        }

        .chatbot-product-desc {
            font-size: 11px;
            color: ${i};
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .chatbot-product-header h4 {
            margin: 0;
            font-size: 14px;
            color: ${m};
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
            color: ${i};
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
            border: ${l};
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            color: ${m};
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
            border: ${l};
            border-radius: 4px;
            background: #fff;
            color: ${m};
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
            outline: 2px solid ${o};
            outline-offset: 0;
        }
        .chatbot-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 14px;
            color: ${m};
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
            background: ${a};
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
            color: ${m};
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
            ${e?"left: 0;":"right: 0;"}
            background: #fff;
            color: ${o};
            padding: 12px 20px;
            border-radius: 16px;
            box-shadow: 0 0 40px rgba(37,99,235,0.25);
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            pointer-events: auto;
            transform-origin: bottom ${e?"left":"right"};
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
            box-shadow: ${p};
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
            color: ${o};
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
            color: ${m};
            line-height: 1.2;
        }

        .quick-action-desc {
            font-size: 11px;
            color: ${i};
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
            color: ${m};
            padding: 10px 12px;
            border-radius: 16px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.25s ease;
            text-align: left;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .preset-pill:hover {
            background: ${a};
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
            box-shadow: ${p};
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
            color: ${m};
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .chatbot-section-card-body {
            padding: 14px 20px;
        }
        .chatbot-cart-empty {
            padding: 16px 0;
            color: ${i};
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
            color: ${m};
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
        .chatbot-cart-total-label { color: ${m}; font-size: 14px; }
        .chatbot-cart-total-value { color: var(--primary-color); font-size: 16px; font-weight: 700; }
        .chatbot-cart-checkout-footer {
            padding: 18px 20px;
            border-top: 1px solid rgba(0,0,0,0.08);
            background: rgba(0,0,0,0.03);
        }
        .chatbot-cart-checkout-prompt {
            margin: 0 0 12px 0;
            font-size: 13px;
            color: ${i};
            font-weight: 500;
        }
        .chatbot-cart-checkout-btn {
            display: block;
            width: 100%;
            padding: 12px 20px;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(135deg, var(--primary-color) 0%, ${b} 100%);
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
            color: ${i};
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
            color: ${m};
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
            color: ${i};
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
            color: ${i};
        }
        .chatbot-order-items {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 8px;
        }
        .chatbot-order-item-line {
            font-size: 12px;
            color: ${m};
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
            color: ${i};
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
            color: ${i};
        }

        .checkout-auth-tab.active {
            background: ${o};
            color: #fff;
        }

        .checkout-form-card {
            background: #fff;
            border-radius: 16px;
            padding: 16px;
            box-shadow: ${p};
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
            color: ${i};
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
            border-color: ${o};
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
            color: ${m};
            background: #fff;
            transition: border-color 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium), transform 0.2s var(--ease-premium);
        }
        .otp-box:focus {
            outline: none;
            border-color: ${o};
            box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
            transform: scale(1.05);
        }

        .checkout-primary-btn {
            width: 100%;
            padding: 12px;
            background: ${a};
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
            background: ${o};
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
            color: ${m};
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
            color: ${i};
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
            border-color: ${o};
            color: ${o};
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
            background: ${o};
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
            color: ${m};
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
            color: ${m};
            letter-spacing: 0.08em;
            margin: 0 0 8px 0;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: ${i};
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
            color: ${m};
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
        .price-original { text-decoration: line-through; color: ${i}; font-size: 12px; margin-left: 6px; }

        /* Inline product card (inside stream) */
        .chatbot-inline-product {
            margin-top: 10px;
            ${c}
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
                max-height: min(520px, calc(100cqb - ${t.marginBottom+98}px));
                min-height: min(320px, calc(100cqb - ${t.marginBottom+98}px));
            }
        }
    `}const ze='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>';function Le(t,e={}){const{onClose:o,onCartClick:s,cartCount:a=0}=e,n=document.createElement("header");n.className="chatbot-header";const r=t.botName??"Aura Concierge",d=t.headerStatus??"Always Available",p=document.createElement("div");p.className="chatbot-header-left";const m=document.createElement("div");if(m.className="chatbot-header-avatar",t.botAvatarUrl){const h=document.createElement("img");h.src=t.botAvatarUrl,h.alt=`${r} avatar`,m.appendChild(h)}else m.innerHTML=ze;const i=document.createElement("div");i.className="chatbot-header-info";const l=document.createElement("h3");l.className="chatbot-header-title",l.textContent=r;const u=document.createElement("div");u.className="chatbot-header-row";const b=document.createElement("span");b.className="chatbot-header-status-dot";const c=document.createElement("span");c.className="chatbot-header-status",c.textContent=d,u.appendChild(b),u.appendChild(c),i.appendChild(l),i.appendChild(u),p.appendChild(m),p.appendChild(i),n.appendChild(p);const w=document.createElement("div");if(w.className="chatbot-header-actions",typeof s=="function"){const h=document.createElement("button");if(h.type="button",h.className="chatbot-header-btn",h.setAttribute("aria-label","View cart"),h.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',a>0){const k=document.createElement("span");k.className="chatbot-cart-badge",k.textContent=a>99?"99+":String(a),h.style.position="relative",h.appendChild(k)}h.addEventListener("click",s),w.appendChild(h)}const g=document.createElement("button");return g.type="button",g.className="chatbot-header-btn",g.setAttribute("aria-label","Close"),g.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',g.addEventListener("click",()=>o&&o()),w.appendChild(g),n.appendChild(w),n}function he(t,e={}){const o=e.strength??.15,s=e.radius??80;if(!t||typeof t.addEventListener!="function")return;let a=null,n=0,r=0,d=0,p=0;const m=(l,u,b)=>l+(u-l)*b,i=()=>{n=m(n,d,.2),r=m(r,p,.2),Math.abs(n-d)<.01&&(n=d),Math.abs(r-p)<.01&&(r=p),t.style.transform=`translate(${n}px, ${r}px)`,Math.abs(n)>.01||Math.abs(r)>.01||d!==0||p!==0?a=requestAnimationFrame(i):(a=null,t.style.willChange="")};return t.addEventListener("mouseenter",()=>{t.style.willChange="transform"}),t.addEventListener("mouseleave",()=>{d=0,p=0,a||(a=requestAnimationFrame(i))}),t.addEventListener("mousemove",l=>{const u=t.getBoundingClientRect(),b=u.left+u.width/2,c=u.top+u.height/2,w=l.clientX-b,g=l.clientY-c,h=Math.sqrt(w*w+g*g);if(h<s){const k=(1-h/s)*o;d=w*k,p=g*k}else d=0,p=0;a||(a=requestAnimationFrame(i))}),()=>{a&&cancelAnimationFrame(a)}}const Ae=`
@keyframes messageIn {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes quickActionIn {
  from { opacity: 0; transform: translateY(10px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes slideInStagger {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes chipIn {
  from { opacity: 0; transform: translateY(5px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.messages-container::-webkit-scrollbar { display: none; }
.product-scroll::-webkit-scrollbar { display: none; }
`;function Ie(){if(typeof document<"u"&&!document.getElementById("messagelist-styles")){const t=document.createElement("style");t.id="messagelist-styles",t.textContent=Ae,document.head.appendChild(t)}}Ie();function Me(){const t=document.createElement("div");return t.className="chatbot-messages",t.id="chatbot-messages-container",t}function pe(t){if(!t)return"";let e=t;return e=e.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g,(o,s,a)=>{const n=s.split("|").filter(d=>d.trim()).map(d=>`<th>${d.trim()}</th>`).join(""),r=a.trim().split(`
`).filter(d=>d.trim()).map(d=>`<tr>${d.split("|").filter(m=>m.trim()).map(m=>`<td>${m.trim()}</td>`).join("")}</tr>`).join("");return`<div class="md-table-wrap"><table><thead><tr>${n}</tr></thead><tbody>${r}</tbody></table></div>
`}),e=e.replace(/^>\s?(.*)$/gm,"<blockquote>$1</blockquote>"),e=e.replace(/^###\s+(.+)$/gm,'<h3 class="md-h3">$1</h3>'),e=e.replace(/^##\s+(.+)$/gm,'<h2 class="md-h2">$1</h2>'),e=e.replace(/^#\s+(.+)$/gm,'<h1 class="md-h1">$1</h1>'),e=e.replace(/^---+$/gm,'<hr class="md-hr"/>'),e=e.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm,o=>`<ul class="md-list">${o.trim().split(`
`).map(a=>`<li>${a.replace(/^[ \t]*[-*]\s+/,"")}</li>`).join("")}</ul>
`),e=e.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*\n]+?)\*/g,"<em>$1</em>"),e=e.replace(/`([^`]+)`/g,'<code class="md-code">$1</code>'),e=e.replace(/\n{2,}/g,'</p><p class="md-p">'),e=e.replace(/\n/g,"<br/>"),e=`<p class="md-p">${e}</p>`,e}function Ne(){const t=document.createElement("span");t.className="chatbot-timestamp";const e=new Date,o=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return t.textContent=`${o}:${s}`,t}function J(t,e=!0,o=null,s=null){const a=document.createElement("div");a.className=`chatbot-message ${e?"bot":"user"} ${e?"msg-enter-bot":"msg-enter-user"}`;const n=document.createElement("div");if(n.className="chatbot-bubble",e){const p=o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';a.innerHTML=`
            <div class="chatbot-message-avatar">
                ${p}
            </div>
        `;const m=/\[Action:\s*(.*?)\]/g;let i=[],l=t.replace(m,(u,b)=>(i.push(b),""));if(n.innerHTML=pe(l),a.appendChild(n),i.length>0&&s){const u=document.createElement("div");u.className="chatbot-actions",i.forEach(b=>{const c=document.createElement("button");c.type="button",c.className="action-btn",c.textContent=b,c.onclick=()=>s(b),he(c,{strength:.1,radius:50}),u.appendChild(c)}),a.appendChild(u)}}else n.innerHTML=pe(t),a.appendChild(n);const r=document.createElement("div");r.className=`chatbot-message-ts-row ${e?"ts-bot":"ts-user"}`;const d=Ne();return r.appendChild(d),a.appendChild(r),a}const Te="https://placehold.co/300x200?text=Product";function Be(t){if(!Array.isArray(t)||t.length===0)return[];const e=o=>o&&o.image!=null&&String(o.image).trim()!=="";return t.filter(e)}function qe(t){return t.badge&&String(t.badge).trim()?String(t.badge).trim():t.bestseller?"Bestseller":null}function ue(t,e,o=null){const s=Be(t);if(s.length===0)return null;const a=document.createElement("div");a.className="chatbot-message bot-message msg-enter-product";const n=Te,r=o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>',d=document.createElement("div");d.style.display="flex",d.style.width="100%",d.innerHTML=`
        <div class="chatbot-message-avatar">${r}</div>
    `;const p=document.createElement("div");p.className="carousel-container",p.style.flex="1",p.style.minWidth="0",p.style.display="flex",p.style.flexDirection="column",p.style.gap="6px";const m=["Here are some of our curated products:","Have a look","Choose from these","Here are some picks"],i=document.createElement("div");i.className="carousel-heading",i.textContent=m[Math.floor(Math.random()*m.length)],p.appendChild(i);const l=document.createElement("div");l.className="carousel-row",l.style.display="flex",l.style.alignItems="center",l.style.position="relative";const u=document.createElement("button");u.className="carousel-nav-btn carousel-nav-left",u.setAttribute("type","button"),u.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';const b=document.createElement("button");b.className="carousel-nav-btn carousel-nav-right",b.setAttribute("type","button"),b.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';const c=document.createElement("div");c.className="product-carousel chatbot-product-carousel";const w=212;return u.addEventListener("click",()=>c.scrollBy({left:-w,behavior:"smooth"})),b.addEventListener("click",()=>c.scrollBy({left:w,behavior:"smooth"})),s.forEach((g,h)=>{const k=g.title||g.name||"Product",W=g.image&&String(g.image).trim()?g.image:n,O=g.price!=null?typeof g.price=="string"?g.price:`$${g.price}`:"",$=g.originalPrice!=null?typeof g.originalPrice=="string"?g.originalPrice:`$${g.originalPrice}`:"",P=qe(g);g.badgeColor;const y=document.createElement("div");y.className="product-card",y.dataset.productId=g.id||h,y.style.animationDelay=`${h*100}ms`;const B=document.createElement("div");B.className="product-image-wrap";const z=document.createElement("img");if(z.className="product-image",z.src=W,z.alt=k,z.loading="lazy",z.style.background="#f3f4f6",z.onerror=function(){y.remove()},B.appendChild(z),P){const j=document.createElement("div");j.className="product-badge",j.textContent=P,B.appendChild(j)}y.appendChild(B);const Y=document.createElement("h4");Y.className="product-name",Y.textContent=k,y.appendChild(Y);const F=document.createElement("div");F.className="product-price-container";const U=document.createElement("span");if(U.className="product-price",U.textContent=O,F.appendChild(U),$){const j=document.createElement("span");j.className="product-original-price",j.textContent=$,F.appendChild(j)}y.appendChild(F);let K=null;if(g.sizes&&Array.isArray(g.sizes)){const j=document.createElement("div");j.className="chatbot-product-sizes";const f=document.createElement("div");f.className="sizes-list",g.sizes.forEach(v=>{const x=document.createElement("button");x.type="button",x.className="size-pill",x.innerText=v,x.addEventListener("click",()=>{f.querySelectorAll(".size-pill").forEach(C=>C.classList.remove("selected")),x.classList.add("selected"),K=v}),f.appendChild(x)}),j.appendChild(f),y.appendChild(j)}const Z=document.createElement("button");Z.type="button",Z.className="add-to-cart-btn",Z.textContent=(o==null?void 0:o.addToCartLabel)||"Add to Cart",Z.addEventListener("click",()=>{if(g.sizes&&!K){alert("Please select a size first!");return}e&&e(g,K)}),y.appendChild(Z),He(y,"carousel-card-3d"),c.appendChild(y)}),l.appendChild(u),l.appendChild(c),l.appendChild(b),p.appendChild(l),d.appendChild(p),a.appendChild(d),a}function He(t,e="chatbot-product-card-3d"){t&&(t.classList.add(e),t.addEventListener("mousemove",o=>{const s=t.getBoundingClientRect(),a=(o.clientX-s.left)/s.width,r=((o.clientY-s.top)/s.height-.5)*8,d=(a-.5)*-8,p=4;t.style.transform=`perspective(800px) rotateX(${r}deg) rotateY(${d}deg) translateY(-${p}px)`}),t.addEventListener("mouseleave",()=>{t.style.transform=""}))}function Pe(){const t=document.createElement("div");return t.className="chatbot-message bot msg-enter-bot",t.setAttribute("data-skeleton","true"),t.innerHTML=`
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `,t}function je(t,e,o){if(!t||t.length===0)return null;const s=document.createElement("div");return s.className="chatbot-suggestion-chips",t.forEach(a=>{const n=document.createElement("button");n.type="button",n.className="suggestion-chip",n.textContent=a,n.addEventListener("click",()=>e(a)),he(n,{strength:.1,radius:50}),s.appendChild(n)}),s}const Oe='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';function se(t,e={}){if(!t||!t.items||!Array.isArray(t.items))return null;const{items:o,total:s}=t,{onCheckout:a,onAddMore:n,onUpdateQty:r,onRemove:d}=e,p=document.createElement("div");p.className="chatbot-section-card chatbot-cart-card msg-enter-product chatbot-cart-card-premium";const i=`$${(typeof s=="number"?s:parseFloat(String(s).replace(/[^0-9.]/g,""))||0).toFixed(2)}`,l=o.reduce((h,k)=>h+(k.quantity||1),0),u=l===1?"item":"items",b=t.subtotalLabel||`Subtotal (${l} ${u})`;if(o.length===0)return p.innerHTML=`
            <div class="chatbot-cart-card-body">
                <div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>
            </div>
        `,p;const c=document.createElement("div");c.className="chatbot-cart-card-body",o.forEach(h=>{const k=document.createElement("div");k.className="chatbot-cart-item-row";const W=h.quantity!=null?h.quantity:1,O=h.title||h.name||"Product",$=h.price!=null?typeof h.price=="string"?h.price:`$${Number(h.price).toFixed(2)}`:"$0.00",P=h.image&&String(h.image).trim()?h.image:"https://placehold.co/80x80?text=Product",y=h.badge?`<span class="chatbot-cart-item-badge">${h.badge}</span>`:"";k.innerHTML=`
            <div class="chatbot-cart-item-thumb-wrap">
                <img class="chatbot-cart-item-img" src="${P}" alt="${O.slice(0,40)}" />
                ${y}
            </div>
            <div class="chatbot-cart-item-details">
                <div class="chatbot-cart-item-name">${O}</div>
                <div class="chatbot-cart-item-price">${$}</div>
                <div class="chatbot-cart-item-actions">
                    <div class="chatbot-cart-qty-pill">
                        <button type="button" class="chatbot-cart-qty-btn" data-action="minus" aria-label="Decrease">−</button>
                        <span class="chatbot-cart-qty-num">${W}</span>
                        <button type="button" class="chatbot-cart-qty-btn" data-action="plus" aria-label="Increase">+</button>
                    </div>
                    <button type="button" class="chatbot-cart-remove-btn" aria-label="Remove">${Oe}</button>
                </div>
            </div>
        `;const B=k.querySelector('[data-action="minus"]'),z=k.querySelector('[data-action="plus"]'),Y=k.querySelector(".chatbot-cart-qty-num"),F=k.querySelector(".chatbot-cart-remove-btn");r&&Y&&(B==null||B.addEventListener("click",()=>{const U=Math.max(0,(parseInt(Y.textContent,10)||1)-1);Y.textContent=String(U),r(h,U)}),z==null||z.addEventListener("click",()=>{const U=(parseInt(Y.textContent,10)||1)+1;Y.textContent=U,r(h,U)})),d&&F&&F.addEventListener("click",()=>d(h)),c.appendChild(k)});const w=document.createElement("div");w.className="chatbot-cart-summary",w.innerHTML=`
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">${b}</span>
            <span class="chatbot-cart-summary-value">${i}</span>
        </div>
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">Shipping</span>
            <span class="chatbot-cart-shipping-free">FREE</span>
        </div>
        <div class="chatbot-cart-summary-divider"></div>
        <div class="chatbot-cart-summary-row chatbot-cart-summary-total">
            <span class="chatbot-cart-summary-label">Total</span>
            <span class="chatbot-cart-summary-total-value">${i}</span>
        </div>
    `;const g=document.createElement("button");return g.type="button",g.className="chatbot-cart-checkout-btn-premium",g.innerHTML='Proceed to Checkout <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',a&&g.addEventListener("click",()=>a()),c.appendChild(w),c.appendChild(g),p.appendChild(c),p}function me(t){if(!t||!Array.isArray(t))return null;const e=document.createElement("div");e.className="chatbot-section-card chatbot-order-history-card msg-enter-product";const o='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',s=n=>{const r=(n||"").toLowerCase();return r==="delivered"?"order-status-delivered":r==="shipped"?"order-status-shipped":r==="processing"?"order-status-processing":r==="cancelled"?"order-status-cancelled":"order-status-default"};let a=t.length===0?'<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>':t.map(n=>{const r=typeof n.total=="number"?`$${n.total.toFixed(2)}`:n.total!=null?`$${Number(n.total).toFixed(2)}`:"—",d=(n.items||[]).map(p=>`<span class="chatbot-order-item-line">${p.title||"Item"} ${p.price?` · ${p.price}`:""}</span>`).join("");return`
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${n.id||"—"}</span>
                        <span class="chatbot-order-date">${n.date||"—"}</span>
                        <span class="chatbot-order-status ${s(n.status)}">${n.status||"—"}</span>
                    </div>
                    <div class="chatbot-order-items">${d||'<span class="chatbot-order-item-line">No items</span>'}</div>
                    <div class="chatbot-order-total">Total ${r}</div>
                </div>
            `}).join("");return e.innerHTML=`
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${o}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${a}</div>
    `,e}const be=['<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>'];function Ye(t,e={}){const{onAction:o}=e,s=document.createElement("div");return s.className="chatbot-quick-actions-grid",t.forEach((a,n)=>{const r=a.icon!=null?a.icon:be[n]??be[0],d=document.createElement("div");d.className="quick-action-card msg-enter-product",d.innerHTML=`
            <div class="quick-action-icon-box">${r}</div>
            <div class="quick-action-info">
                <span class="quick-action-title">${(a.title||"").replace(/</g,"&lt;")}</span>
                <span class="quick-action-desc">${(a.desc||"").replace(/</g,"&lt;")}</span>
            </div>
        `;const p=a.message!=null?a.message:a.title||"";d.onclick=()=>o("quickAction",{...a,message:p}),s.appendChild(d)}),s}function le(t){if(!t||typeof t!="string")return null;const e=t;if(!/Order Confirmed!|Order ID:|Ships to:/i.test(e))return null;const o=e.match(/\*\*Order ID:\*\*\s*`?([A-Z0-9-]+)`?/i)||e.match(/Order ID:\s*`?([A-Z0-9-]+)`?/i),s=o?o[1].trim():`ORD-${Math.floor(1e4+Math.random()*9e4)}`,a=e.match(/\*\*Total:\*\*\s*\$?([\d.,]+)/i)||e.match(/Total:\s*\$?([\d.,]+)/i),n=a?parseFloat(a[1].replace(/,/g,"")):0,r=e.match(/\*\*Payment:\*\*\s*[^\n·]*([^\n]+?)(?=\n\n|\n\*\*|$)/i)||e.match(/Payment:\s*[^\n·]*([^\n]+)/i);let d="cod";if(r){const u=r[1].toLowerCase();(u.includes("prepaid")||u.includes("card")||u.includes("online"))&&(d="prepaid")}const p=e.match(/\*\*Ships to:\*\*\s*([^\n]+)/i)||e.match(/Ships to:\s*([^\n]+)/i),m=p?p[1].trim():"—",i=[],l=e.indexOf("| Item | Price | Size |");if(l!==-1){const b=e.slice(l).split(/\r?\n/).filter(c=>c.trim().startsWith("|")&&!c.includes(":---"));for(const c of b){const w=c.split("|").map(g=>g.trim()).filter(Boolean);if(w.length>=2&&w[0]!=="Item"){const g=w[0]||"Item",h=w[1]||"$0",k=parseFloat(h.replace(/[^0-9.]/g,""))||0,W=w[2]||"N/A";i.push({name:g,price:k,size:W,quantity:1,image:null})}}}return i.length===0&&n>0&&i.push({name:"Order items",price:n,quantity:1,image:null}),{orderId:s,items:i,total:n,paymentMethod:d,shippingAddress:m}}function ge(t,e={}){const{step:o,data:s,state:a}=t,{onAction:n}=e,r=document.createElement("div");r.className="chatbot-checkout-wrapper msg-enter-product";const d='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',p='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',m='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';if(o==="mobile"){r.innerHTML=`
            <div class="checkout-form-card checkout-mobile-card">
                <div class="checkout-field">
                    <label class="checkout-label-uppercase">MOBILE NUMBER</label>
                    <div class="checkout-mobile-input-wrap">
                        <span class="checkout-mobile-icon">${d}</span>
                        <span class="checkout-mobile-prefix">+91</span>
                        <input type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="10" class="checkout-mobile-input" placeholder="9876543210" id="checkout-mobile" value="${(a.mobile||"").replace(/\D/g,"").slice(0,10)}" autocomplete="tel" />
                    </div>
                </div>
                <button type="button" class="checkout-send-otp-btn" id="mobile-submit-btn">
                    Send OTP ${m}
                </button>
                <div class="checkout-secure-note">
                    ${p}
                    <span>Encrypted and secure</span>
                </div>
            </div>
        `;const i=r.querySelector("#checkout-mobile"),l=r.querySelector("#mobile-submit-btn"),u=()=>{const b=(i.value||"").replace(/\D/g,"");l.disabled=b.length!==10};i.addEventListener("input",()=>{i.value=i.value.replace(/\D/g,"").slice(0,10),u()}),u(),l.addEventListener("click",()=>{const b=(i.value||"").replace(/\D/g,"").slice(0,10);b.length===10&&n("submitMobile",{mobile:b})})}else if(o==="otp"){const i=a.mobile?"+91 "+String(a.mobile).replace(/(\d{2})(\d{4})(\d+)/,"$1 $2 $3").trim():"+91 ••••••••••";r.innerHTML=`
            <div class="checkout-form-card checkout-otp-card">
                <div class="checkout-otp-header">
                    <h3 class="checkout-otp-title">ENTER OTP</h3>
                    <button type="button" class="checkout-change-number-link">Change Number</button>
                </div>
                <p class="checkout-otp-sent-to">Sent to ${i}</p>
                <div class="checkout-otp-boxes">
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="1" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="2" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="3" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="4" />
                </div>
                <button type="button" class="checkout-resend-link">Resend OTP</button>
                <button type="button" class="checkout-verify-btn" id="otp-verify-btn">
                    Verify & Continue ${m}
                </button>
            </div>
        `;const l=r.querySelectorAll(".checkout-otp-box");l.forEach((u,b)=>{u.addEventListener("input",c=>{const w=c.target.value.replace(/\D/g,"").slice(0,1);c.target.value=w,w&&b<3&&l[b+1].focus()}),u.addEventListener("keydown",c=>{c.key==="Backspace"&&!c.target.value&&b>0&&l[b-1].focus()})}),l[0]&&l[0].focus(),r.querySelector("#otp-verify-btn").addEventListener("click",()=>{const u=Array.from(r.querySelectorAll(".checkout-otp-box")).map(b=>b.value||"").join("").slice(0,4);n("verifyOtp",{code:u})}),r.querySelector(".checkout-change-number-link").addEventListener("click",()=>n("changeAuthMode",{mode:"mobile"})),r.querySelector(".checkout-resend-link").addEventListener("click",()=>n("submitMobile",{mobile:a.mobile}))}else if(o==="address"){const i=s.addresses||[],l=a.selectedAddressId,u='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',b='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/></svg>',c='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';let w=i.map($=>{const P=($.type||"home").toUpperCase(),y=($.type||"home").toLowerCase()==="home";return`
            <div class="checkout-address-card ${$.id===l?"selected":""}" data-id="${$.id}">
                <div class="address-icon-box ${y?"address-icon-home":""}">${y?u:b}</div>
                <div class="address-info">
                    <div class="address-header">
                        <span class="address-name">${$.name}</span>
                        <span class="address-type-badge">${P}</span>
                    </div>
                    <div class="address-text">${$.street}</div>
                    <div class="address-text">${$.city}, ${$.state||""} ${$.zip}</div>
                    <div class="address-phone">${c} ${$.phone}</div>
                </div>
                ${$.id===l?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
            </div>`}).join("");r.innerHTML=`
            <div class="checkout-address-step">
                ${w}
                <div class="checkout-add-address-form-wrap" id="add-address-form-wrap" style="display: none;">
                    <div class="checkout-form-card" style="text-align: left;">
                        <label class="checkout-label-uppercase">Full Name</label>
                        <input type="text" class="checkout-input" id="addr-name" placeholder="John Doe" />
                        <label class="checkout-label-uppercase">Street</label>
                        <input type="text" class="checkout-input" id="addr-street" placeholder="123 Main St, Apt 4B" />
                        <label class="checkout-label-uppercase">City</label>
                        <input type="text" class="checkout-input" id="addr-city" placeholder="New York" />
                        <label class="checkout-label-uppercase">State</label>
                        <input type="text" class="checkout-input" id="addr-state" placeholder="NY" />
                        <label class="checkout-label-uppercase">ZIP</label>
                        <input type="text" class="checkout-input" id="addr-zip" placeholder="10001" />
                        <label class="checkout-label-uppercase">Phone</label>
                        <input type="tel" class="checkout-input" id="addr-phone" placeholder="+1 (555) 123-4567" />
                        <div style="display: flex; gap: 8px; margin-top: 12px;">
                            <button type="button" class="checkout-primary-btn" id="addr-save-btn">Save Address</button>
                            <button type="button" class="checkout-add-address-dashed" id="addr-cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
                <button type="button" class="checkout-add-address checkout-add-address-dashed" id="add-address-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    + Add New Address
                </button>
                ${l!=null?'<button type="button" class="checkout-primary-btn" id="addr-continue-btn">Continue to Payment '+m+"</button>":""}
            </div>
        `,r.querySelectorAll(".checkout-address-card").forEach($=>{$.onclick=()=>n("selectAddress",{id:$.dataset.id})});const g=r.querySelector("#add-address-btn"),h=r.querySelector("#add-address-form-wrap"),k=r.querySelector("#addr-cancel-btn"),W=r.querySelector("#addr-save-btn");g&&h&&g.addEventListener("click",()=>{h.style.display=h.style.display==="none"?"block":"none"}),k&&h&&k.addEventListener("click",()=>{h.style.display="none"}),W&&h&&W.addEventListener("click",()=>{var F,U,K,Z,j,f;const $=(((F=r.querySelector("#addr-name"))==null?void 0:F.value)||"").trim(),P=(((U=r.querySelector("#addr-street"))==null?void 0:U.value)||"").trim(),y=(((K=r.querySelector("#addr-city"))==null?void 0:K.value)||"").trim(),B=(((Z=r.querySelector("#addr-state"))==null?void 0:Z.value)||"").trim(),z=(((j=r.querySelector("#addr-zip"))==null?void 0:j.value)||"").trim(),Y=(((f=r.querySelector("#addr-phone"))==null?void 0:f.value)||"").trim();P&&(n("addAddress",{address:{type:"home",name:$,street:P,city:y,state:B,zip:z,phone:Y}}),h.style.display="none")});const O=r.querySelector("#addr-continue-btn");O&&(O.onclick=()=>n("continueToPayment"))}else if(o==="payment"){const i=a.paymentMethod,l=Number(s.subtotal)||0,u=l*.1,b=l+u;r.innerHTML=`
            <div class="checkout-payment-step">
                <div class="checkout-method-card ${i==="cod"?"selected":""}" data-method="cod">
                    <div class="method-icon-box method-icon-cod">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M7 15h.01"/><path d="M12 15h.01"/><path d="M17 15h.01"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Cash on Delivery</h4>
                        <p class="method-desc">Pay when you receive</p>
                    </div>
                    ${i==="cod"?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
                </div>
                <div class="checkout-method-card ${i==="prepaid"?"selected":""}" data-method="prepaid">
                    <div class="method-icon-box method-icon-card">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Credit / Debit Card</h4>
                        <p class="method-desc">Secure payment</p>
                    </div>
                    ${i==="prepaid"?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
                </div>
                <div class="checkout-summary-card">
                    <h4 class="summary-title">ORDER SUMMARY</h4>
                    <div class="summary-row"><span>Subtotal</span><span>$${l.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Shipping</span><span class="summary-shipping-free">FREE</span></div>
                    <div class="summary-row"><span>Tax</span><span>$${u.toFixed(2)}</span></div>
                    <div class="summary-divider"></div>
                    <div class="summary-row summary-total"><span>Total</span><span class="total-value">$${b.toFixed(2)}</span></div>
                </div>
                <button class="checkout-place-order-btn" id="place-order-btn" ${i?"":"disabled"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Place Order – $${b.toFixed(2)}
                </button>
            </div>
        `,r.querySelectorAll(".checkout-method-card").forEach(w=>{w.onclick=()=>n("selectPayment",{method:w.dataset.method})});const c=r.querySelector("#place-order-btn");c&&(c.onclick=()=>{i&&n("placeOrder")})}else if(o==="confirmation"){const i=a.orderId||s.orderId||`ORD-${String(Math.floor(Math.random()*1e4)).padStart(4,"0")}`,l=s.orderItems||a.orderItems||[],u=a.subtotal!=null?Number(a.subtotal):l.reduce((y,B)=>{const z=typeof B.price=="string"?parseFloat(String(B.price).replace(/[^0-9.]/g,""))||0:Number(B.price)||0;return y+z*(B.quantity||1)},0),b=(a.paymentMethod||"cod").toLowerCase(),c=b==="prepaid"?"Card / Prepaid":"Cash on Delivery",w=b==="prepaid"?"💳":"💵",g=a.selectedAddressId!=null?a.selectedAddressId:0,h=a.addresses||[],k=h.find(y=>(y.id??y)===g)||h[g],W=k?typeof k=="string"?k:[k.street,k.city,k.state,k.zip].filter(Boolean).join(", "):"—",O=k&&typeof k!="string"&&k.city?`${k.city}${k.state?", "+k.state:""} ${k.zip||""}`.trim():"",$=l.length?`<div class="order-product">
                <div class="order-product-label">Products ordered</div>
                ${l.map(y=>{const B=y.quantity||1,z=typeof y.price=="string"?parseFloat(String(y.price).replace(/[^0-9.]/g,""))||0:Number(y.price)||0,Y=z*B;return`<div class="order-product-row">
                        <div class="order-product-img-wrap">${y.image?`<img src="${y.image}" alt="" class="order-product-img" onerror="this.style.display='none'" />`:'<div class="order-product-placeholder"></div>'}</div>
                        <div class="order-product-info">
                            <span class="order-product-name">${(y.name||y.title||"").replace(/</g,"&lt;")}</span>
                            <span class="order-product-meta">Qty: ${B} × $${z.toFixed(2)} = $${Y.toFixed(2)}</span>
                        </div>
                    </div>`}).join("")}
            </div>`:"",P=`
            <div class="order-progress">
                <div class="order-progress-step order-progress-done">
                    <span class="order-progress-dot"></span>
                    <span class="order-progress-label">Order Placed</span>
                </div>
                <div class="order-progress-line order-progress-active"></div>
                <div class="order-progress-step order-progress-active">
                    <span class="order-progress-dot"></span>
                    <span class="order-progress-label">Processing</span>
                </div>
                <div class="order-progress-line"></div>
                <div class="order-progress-step">
                    <span class="order-progress-dot"></span>
                    <span class="order-progress-label">Shipped</span>
                </div>
                <div class="order-progress-line"></div>
                <div class="order-progress-step">
                    <span class="order-progress-dot"></span>
                    <span class="order-progress-label">Delivered</span>
                </div>
            </div>`;r.innerHTML=`
            <div class="order-card checkout-confirmation-premium">
                <div class="order-header">
                    <div class="order-header-glow"></div>
                    <div class="order-header-badge">✅</div>
                    <h3 class="order-header-title">Order Confirmed!</h3>
                    <div class="order-header-id">${i}</div>
                </div>
                ${$}
                <div class="order-summary">
                    <div class="order-summary-row order-summary-total">
                        <span class="order-summary-label">Total</span>
                        <span class="order-summary-value">$${u.toFixed(2)}</span>
                    </div>
                    <div class="order-summary-row order-summary-payment">
                        <span class="order-summary-label">Payment</span>
                        <span class="order-payment-badge">${w} ${c}</span>
                    </div>
                </div>
                <div class="order-shipping">
                    <div class="order-shipping-block">
                        <span class="order-shipping-label">📍 Shipping Address</span>
                        <span class="order-shipping-value">${W}</span>
                        ${O?`<span class="order-shipping-value order-shipping-value-secondary">${O}</span>`:""}
                    </div>
                    <div class="order-shipping-block">
                        <span class="order-shipping-label">🚚 Delivery Status</span>
                        <span class="order-shipping-value">Your order is being processed.</span>
                    </div>
                </div>
                <div class="order-status">
                    <p class="order-status-message">Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                </div>
                ${P}
            </div>
        `}return r}const Fe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',De='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';function Re(t,e){const o=document.createElement("div");o.className="chatbot-input-area",o.setAttribute("data-region","input-bar");const s=e.placeholders&&e.placeholders.length>0?e.placeholders:ye,a=e.inputPlaceholder||"Ask anything about orders, products...",n=document.createElement("div");n.className="chatbot-input-wrap";const r=document.createElement("button");r.type="button",r.className="chatbot-attach-btn",r.setAttribute("aria-label","Attach"),r.innerHTML=Fe;const d=document.createElement("input");d.type="text",d.placeholder=a,d.className="chatbot-input",d.setAttribute("aria-label","Message input");const p=document.createElement("button");p.type="button",p.className="chatbot-send-btn",p.setAttribute("aria-label","Send message"),p.innerHTML=De;const m=()=>{const c=d.value.trim().length>0;p.classList.toggle("active",c),p.disabled=!c};d.addEventListener("input",m),d.addEventListener("focus",m),d.addEventListener("blur",m),m();let i=0;const u=setInterval(()=>{!d.matches(":focus")&&s.length>1&&(i=(i+1)%s.length,d.placeholder=s[i])},3500);d.addEventListener("focus",()=>{d.placeholder=e.inputPlaceholder||"Ask anything about orders, products..."}),d.addEventListener("blur",()=>{d.placeholder=s[i%s.length]});const b=()=>{const c=d.value.trim();c&&(t(c),d.value="",i=0,d.placeholder=s[0],m())};return d.addEventListener("keypress",c=>{c.key==="Enter"&&b()}),p.addEventListener("click",b),n.appendChild(r),n.appendChild(d),n.appendChild(p),o.appendChild(n),he(p,{strength:.12,radius:60}),o.destroy=()=>clearInterval(u),o}function Ue(t="Thinking..."){const e=document.createElement("div");e.className="chatbot-message bot typing-indicator-wrapper msg-enter-bot";const o=document.createElement("div");o.className="chatbot-message-avatar",o.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';const s=document.createElement("div");return s.className="message-bubble typing-indicator",s.setAttribute("aria-live","polite"),s.setAttribute("role","status"),s.innerHTML='<span class="dot"></span><span class="dot"></span><span class="dot"></span>',e.appendChild(o),e.appendChild(s),e.setStatus=()=>{},e}const We="http://localhost:3000";function Ve(){if(typeof window>"u"||!window.location)return!1;const t=window.location.hostname||"";return t==="localhost"||t==="127.0.0.1"}function ve(t){return t!=null&&t!==""?String(t).replace(/\/$/,""):Ve()?We:""}async function _e(t,e=[],o,s,a,n="default",r=null,d=null,p=null,m=null){var u,b;const i=ve(m),l=i?`${i}/api/chat`:"/api/chat";try{const c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,history:e,sessionId:n})});if(!c.ok){const k=await c.text();throw console.error("AI API error",c.status,k),new Error(c.status===503?"Backend not configured (missing API key).":`API ${c.status}`)}const w=c.body.getReader(),g=new TextDecoder;let h="";for(;;){const{value:k,done:W}=await w.read();if(W)break;h+=g.decode(k,{stream:!0});const O=h.split(`
`);h=O.pop();for(const $ of O)if($.startsWith("data: ")){const P=$.replace("data: ","").trim();try{if(P){const y=JSON.parse(P);y.type==="text"&&o&&o(y.content),y.type==="carousel"&&s&&s(y.content),y.type==="cart"&&d&&d(y.content),y.type==="orderHistory"&&p&&p(y.content),y.type==="status"&&r&&r(y.content),y.type==="done"&&a&&a()}}catch{}}}}catch(c){console.error("AI Service Error:",c);const w=(u=c==null?void 0:c.message)!=null&&u.includes("API key")||(b=c==null?void 0:c.message)!=null&&b.includes("503")?"Chat is unavailable. The server needs an API key (check deployment settings).":"My neural network is temporarily offline. Please try again.";o&&o(w),a&&a()}}function ce(t){return ve(t)}async function ne(t,e){const s=await(await fetch(`${ce(e)}/api/cart?sessionId=${encodeURIComponent(t)}`)).json();return{items:s.items||[],total:s.total!=null?s.total:0}}async function fe(t,e,o,s){return(await fetch(`${ce(s)}/api/cart/add`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,title:String(e||"").trim(),size:o||void 0})})).json()}async function xe(t,e,o){return(await fetch(`${ce(o)}/api/cart/remove-one`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,title:String(e||"").trim()})})).json()}async function ie(t,e,o){return(await fetch(`${ce(o)}/api/cart/remove-all`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,title:String(e||"").trim()})})).json()}function Ge(t,e=[],o=4){if(!e||e.length===0)return[];const s=(t||"").toLowerCase(),a=e.map(r=>{const d=r.toLowerCase();let p=0;const m=d.split(/\s+/).filter(i=>i.length>2);for(const i of m)s.includes(i)&&(p+=2),s.includes(i.replace(/[^a-z0-9]/g,""))&&(p+=1);return r.toLowerCase().includes("sneaker")&&(s.includes("sneaker")||s.includes("shoe"))&&(p+=3),r.toLowerCase().includes("trending")&&(s.includes("trending")||s.includes("bestseller")||s.includes("popular"))&&(p+=3),r.toLowerCase().includes("sale")&&(s.includes("sale")||s.includes("price")||s.includes("$"))&&(p+=2),r.toLowerCase().includes("running")&&s.includes("running")&&(p+=3),r.toLowerCase().includes("jacket")&&(s.includes("jacket")||s.includes("apparel"))&&(p+=2),{label:r,score:p}});a.sort((r,d)=>d.score-r.score);const n=a.filter(r=>r.score>0).slice(0,o).map(r=>r.label);return n.length===0&&s.length<500?e.slice(0,Math.min(3,o)):n}function Xe(t){if(!t)return null;const e=document.createElement("div");return e.className="chatbot-toast-host",t.appendChild(e),{showToast:({title:s,message:a,image:n,duration:r=3e3}={})=>{const d=document.createElement("div");d.className="chatbot-toast",d.innerHTML=`
            ${n?`<div class="chatbot-toast-image-wrap"><img src="${n}" alt="" /></div>`:""}
            <div class="chatbot-toast-content">
                ${s?`<div class="chatbot-toast-title">${s}</div>`:""}
                ${a?`<div class="chatbot-toast-message">${a}</div>`:""}
            </div>
        `,e.appendChild(d),requestAnimationFrame(()=>{d.classList.add("chatbot-toast-visible")}),setTimeout(()=>{d.classList.remove("chatbot-toast-visible"),d.addEventListener("transitionend",()=>{d.remove()},{once:!0})},r)}}}function Je(t){const e=Se(t);console.log("Chatbot initialized in Shadow DOM with config:",e);let o=sessionStorage.getItem("ecom-session-id");o||(o="sess_"+Math.random().toString(36).substring(2,9),sessionStorage.setItem("ecom-session-id",o));const s=e.parentElement||document.body,a=s.querySelector("#ecom-chatbot-host");a&&a.remove();const n=document.createElement("div");n.id="ecom-chatbot-host",s.appendChild(n);const r=n.attachShadow({mode:"open"}),d=Xe(r),p=document.createElement("style");p.textContent=Ee(e),r.appendChild(p);const m=document.createElement("div");m.className="ecom-chatbot-wrapper";const i=document.createElement("div");i.className="chatbot-window";const l=Me();function u(){l.scrollTo({top:l.scrollHeight,behavior:"smooth"})}function b(){let f=null;Array.from(l.children).filter(x=>x.classList&&!x.hasAttribute("data-skeleton")&&(x.classList.contains("chatbot-message")||x.classList.contains("typing-indicator-wrapper"))).forEach(x=>{const C=x.classList.contains("user"),L=x.classList.contains("bot")||x.classList.contains("typing-indicator-wrapper"),q=C?"user":L?"bot":null;q&&(x.classList.remove("group-same","group-first"),f===q?x.classList.add("group-same"):x.classList.add("group-first"),f=q)})}let c=[];try{const f=sessionStorage.getItem("ecom-chat-history");f&&(c=JSON.parse(f),console.log("Restored chat history from session:",c))}catch(f){console.error("Failed to parse session chat history",f)}let w=0,g=null;const h=async f=>{const v=i.querySelector(".chatbot-presets");v&&v.remove();const x=i.querySelector(".chatbot-quick-actions-grid");x&&x.remove();const C=J(f,!1,e);l.appendChild(C),u();const L=Ue();l.appendChild(L),u();const q=[...c];c.push({role:"user",content:f}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c));let S=null,A="",M=!1,I=null,D=null,G=null;const X=()=>{L.parentNode&&l.removeChild(L),G&&G.parentNode&&l.removeChild(G)},V=()=>{if(y)return;const E=m.querySelector(".chatbot-toggle-btn");if(E&&!E.querySelector(".chatbot-ripple-ring")){const T=document.createElement("span");T.className="chatbot-ripple-ring",E.appendChild(T),setTimeout(()=>T.remove(),1400)}};await _e(f,q,E=>{X(),M||(M=!0,V()),S||(S=J("",!0,e,h),l.appendChild(S),I=S),A+=E;const T=S.querySelector(".chatbot-bubble");T&&(T.innerHTML=pe(A)),u()},E=>{X(),M||(M=!0,V());const T=["Here's what we have:","Have a look at these.","Here are some picks."],N=T[Math.floor(Math.random()*T.length)];(!S||!A.trim())&&(S=J(N,!0,e,h),l.appendChild(S),A=N);const H=ue(E,W,e);H?(D=E,I=H,l.appendChild(H),c.push({role:"bot",content:"Displayed a product carousel to the user.",carousel:E})):I=S,sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)),b(),u()},()=>{X(),A&&(c.push({role:"bot",content:A}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)));const E=le(A||"");if(E&&I){const H={step:"confirmation",data:{orderItems:E.items,addresses:[{street:E.shippingAddress}],subtotal:E.total},state:{orderId:E.orderId,paymentMethod:E.paymentMethod,subtotal:E.total,orderItems:E.items,addresses:[{street:E.shippingAddress}],selectedAddressId:0}},_=ge(H,{}),R=I.querySelector(".chatbot-message-content"),ae=I.querySelector(".chatbot-bubble");R?(R.innerHTML="",R.appendChild(_)):ae?ae.replaceWith(_):(I.innerHTML="",I.appendChild(_)),b(),u()}const N=/added to (your )?(cart|shopping bag|bag)/i.test(A||"")?["Proceed to checkout","Browse more products"]:Ge(A||(D?(D||[]).map(H=>H.title||"").join(" "):""),e.suggestionChips||[],4);if(N.length>0&&I){const H=je(N,R=>h(R));H.classList.add("chatbot-chips-below");const _=I.querySelector(".chatbot-bubble");if(_){let R=I.querySelector(".chatbot-message-content");R||(R=document.createElement("div"),R.className="chatbot-message-content",_.parentNode.insertBefore(R,_),R.appendChild(_)),R.appendChild(H)}else I.appendChild(H)}b(),u()},o,E=>{L.setStatus&&L.setStatus(E),E&&/searching|product|looking for|options|recommend/i.test(E)&&!G&&(G=Pe(),l.appendChild(G),u())},E=>{X(),M||(M=!0,V()),S||(S=J("",!0,e,h),l.appendChild(S));const T=S.querySelector(".chatbot-bubble");let N=S.querySelector(".chatbot-message-content");!N&&T&&(N=document.createElement("div"),N.className="chatbot-message-content",T.parentNode.insertBefore(N,T),N.appendChild(T));const H=re=>({onCheckout:()=>h("Proceed to checkout"),onUpdateQty:async(Q,ee)=>{const te=Q.quantity!=null?Q.quantity:1,de=Q.title||Q.name||"";if(ee<=0)await ie(o,de,e.apiBaseUrl);else if(ee>te)for(let oe=te;oe<ee;oe++)await fe(o,de,Q.size,e.apiBaseUrl);else for(let oe=ee;oe<te;oe++)await xe(o,de,e.apiBaseUrl);const we=await ne(o,e.apiBaseUrl);re(we)},onRemove:async Q=>{const ee=Q.title||Q.name||"";await ie(o,ee,e.apiBaseUrl);const te=await ne(o,e.apiBaseUrl);re(te)}});let _;_=re=>{const Q=N.querySelector(".chatbot-cart-card");if(!Q)return;const ee=se(re,H(_));Q.replaceWith(ee)};const R=se(E,H(_));R&&N?N.appendChild(R):R&&S.appendChild(R);const ae=A||"Here’s what’s in your cart:";c.push({role:"bot",content:ae,cart:E}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)),b(),u()},E=>{X(),M||(M=!0,V()),S||(S=J("",!0,e,h),l.appendChild(S));const T=S.querySelector(".chatbot-bubble");let N=S.querySelector(".chatbot-message-content");!N&&T&&(N=document.createElement("div"),N.className="chatbot-message-content",T.parentNode.insertBefore(N,T),N.appendChild(T));const H=me(E);H&&N?N.appendChild(H):H&&S.appendChild(H);const _=A||"Here’s your order history.";c.push({role:"bot",content:_,orderHistory:E}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)),b(),u()},e.apiBaseUrl||void 0)},k=Re(h,e),W=(f,v)=>{const x=v?` (Size: ${v})`:"",C=J(`✅ Added 1x **${f.title}** ${x} to your cart for ${f.price}!`,!0,e);l.appendChild(C),b(),u(),window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:f,selectedSize:v}})),g&&g(w+1),d&&f&&d.showToast({title:"Added to cart",message:`${f.title||""} · ${f.price||""}`,image:f.image})};if(c.length>0)c.forEach(f=>{if(f.role==="user")l.appendChild(J(f.content,!1,e));else if(f.role==="bot")if(f.carousel){const v=ue(f.carousel,W,e);v&&l.appendChild(v)}else if(f.cart){const v=J(f.content||"Here’s what’s in your cart:",!0,e),x=v.querySelector(".chatbot-bubble");if(x){const C=document.createElement("div");C.className="chatbot-message-content",x.parentNode.insertBefore(C,x),C.appendChild(x);const L=A=>({onCheckout:()=>h("Proceed to checkout"),onUpdateQty:async(M,I)=>{const D=M.quantity!=null?M.quantity:1,G=M.title||M.name||"";if(I<=0)await ie(o,G,e.apiBaseUrl);else if(I>D)for(let V=D;V<I;V++)await fe(o,G,M.size,e.apiBaseUrl);else for(let V=I;V<D;V++)await xe(o,G,e.apiBaseUrl);const X=await ne(o,e.apiBaseUrl);A(X)},onRemove:async M=>{const I=M.title||M.name||"";await ie(o,I,e.apiBaseUrl);const D=await ne(o,e.apiBaseUrl);A(D)}});let q;q=A=>{const M=C.querySelector(".chatbot-cart-card");if(!M)return;const I=se(A,L(q));M.replaceWith(I)};const S=se(f.cart,L(q));S&&C.appendChild(S)}l.appendChild(v)}else if(f.orderHistory){const v=J(f.content||"Here’s your order history.",!0,e),x=v.querySelector(".chatbot-bubble");if(x){const C=document.createElement("div");C.className="chatbot-message-content",x.parentNode.insertBefore(C,x),C.appendChild(x);const L=me(f.orderHistory);L&&C.appendChild(L)}l.appendChild(v)}else if(f.content&&le(f.content)){const v=le(f.content),x={step:"confirmation",data:{orderItems:v.items,addresses:[{street:v.shippingAddress}],subtotal:v.total},state:{orderId:v.orderId,paymentMethod:v.paymentMethod,subtotal:v.total,orderItems:v.items,addresses:[{street:v.shippingAddress}],selectedAddressId:0}},C=J("",!0,e,h),L=C.querySelector(".chatbot-bubble"),q=ge(x,{});L?L.replaceWith(q):C.appendChild(q),l.appendChild(C)}else f.content&&f.content!=="Displayed a product carousel to the user."&&l.appendChild(J(f.content,!0,e))}),b(),u();else{const f=e.welcomeMessage??"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",v=J(f,!0,e);l.appendChild(v);const x=[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],C=e.quickActions&&e.quickActions.length>=4?e.quickActions.slice(0,4):x,L=Ye(C,{onAction:(q,S)=>{const A=S.message!=null&&String(S.message).trim()?S.message:S.title;A&&h(A)}});l.appendChild(L),c.push({role:"bot",content:f})}const O=document.createElement("div");O.className="chatbot-orb-wrapper";const $=document.createElement("button");$.type="button",$.className="chatbot-toggle-btn",$.setAttribute("aria-label","Open chat");const P='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';$.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:P,O.appendChild($);let y=!1;const B=sessionStorage.getItem("ecom-chatbot-open")==="true",z=document.createElement("div");z.className="welcome-bubble",z.innerHTML='<span style="vertical-align: middle; font-size: 14px; font-weight: 600;">Need help? 👋</span>';function Y(){setTimeout(()=>{y?Y():(z.classList.remove("hidden"),setTimeout(()=>{z.classList.add("hidden"),Y()},5e3))},15e3)}setTimeout(()=>{z.classList.add("hidden"),Y()},5e3);const F=()=>{y=!0,sessionStorage.setItem("ecom-chatbot-open","true"),z.classList.add("hidden"),i.classList.add("is-open"),$.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:P,setTimeout(u,50)},U=()=>{y=!1,sessionStorage.setItem("ecom-chatbot-open","false"),i.classList.remove("is-open"),$.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:P},K=()=>{z.classList.add("hidden"),y?U():F()};$.addEventListener("click",K);const Z=Le(e,{onClose:U,onCartClick:()=>{F(),h("View Cart")},cartCount:0});g=f=>{w=Math.max(0,f||0);const v=Z.querySelector('button[aria-label="View cart"]');if(v){let C=v.querySelector(".chatbot-cart-badge");w>0?(C||(C=document.createElement("span"),C.className="chatbot-cart-badge",v.appendChild(C)),C.textContent=w>99?"99+":String(w)):C&&C.remove()}let x=$.querySelector(".chatbot-launcher-badge");w>0?(x||(x=document.createElement("span"),x.className="chatbot-launcher-badge",$.appendChild(x)),x.textContent=w>99?"99+":String(w),x.classList.remove("cart-badge-pop"),x.offsetWidth,x.classList.add("cart-badge-pop")):x&&x.remove()},i.appendChild(Z),i.appendChild(l),i.appendChild(k);const j=document.createElement("div");j.className="chatbot-footer",j.innerHTML="<p>Powered by Aura AI</p>",i.appendChild(j),window.EcomChatbot&&(window.EcomChatbot.open=F,window.EcomChatbot.close=U,window.EcomChatbot.toggle=K,window.EcomChatbot.sendMessage=f=>{F(),h(f)},window.EcomChatbot.resetAnimation=()=>{}),m.appendChild(i),m.appendChild(z),m.appendChild(O),r.appendChild(m),B&&F(),function(){const f=["Hi! I'm Aura, your shopping assistant.","I can help you discover products.","I can track your orders for you.","Looking for the best deals? 🔥","What brings you here today?"],v=r.getElementById("typewriter-bubble");if(!v)return;let x=0,C=0,L=!1,q=!1;const S=68,A=38,M=1800,I=320;v.style.display="inline-block",v.style.minWidth="10px";const D=document.createElement("span");D.textContent="|",D.style.cssText="display:inline-block;margin-left:2px;animation:twCursor 0.8s steps(1) infinite;color:inherit;font-weight:300;opacity:0.7";const G=document.createElement("style");G.textContent="@keyframes twCursor{0%,100%{opacity:1}50%{opacity:0}}",r.appendChild(G),v.appendChild(D);function X(){if(q)return;const V=f[x];if(L){if(C--,v.firstChild&&v.firstChild!==D&&(v.firstChild.textContent=V.slice(0,C)),C===0){L=!1,x=(x+1)%f.length,q=!0,setTimeout(()=>{q=!1,X()},I);return}}else if(C++,v.firstChild&&v.firstChild!==D?v.firstChild.textContent=V.slice(0,C):v.insertBefore(document.createTextNode(V.slice(0,C)),D),C===V.length){q=!0,setTimeout(()=>{q=!1,L=!0,X()},M);return}setTimeout(X,L?A:S)}v.innerHTML="",v.appendChild(document.createTextNode("")),v.appendChild(D),X()}()}window.EcomChatbot={init:t=>{Je(t)}};
