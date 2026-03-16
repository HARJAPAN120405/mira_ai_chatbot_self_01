(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const lt=["Ask about products...","Find sneakers under $100...","Compare two products...","Show trending items...","What's on sale?","Recommend something for me..."],pt=["Show sneakers under $100","Trending items","Best running shoes","Summer jackets","What's on sale?","Add to cart"],ht=["Thinking...","Searching products...","Analyzing your request...","Looking for the best options..."],mt={botName:"Aura Concierge",botSubtitle:"Always Available",botAvatarUrl:"",position:"bottom-right",marginBottom:24,marginSide:24,primaryColor:"#2563eb",textColor:"#ffffff",backgroundColor:"#ffffff",headerStatus:"Always Available",quickActions:[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],autoDetectProduct:!0,greetingMessage:"Hi! I'm Aura, your shopping assistant. What can I help you with today?",inputPlaceholder:"Ask anything about orders, products...",placeholders:lt,suggestionChips:pt,welcomeMessage:"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",welcomeIconUrl:"",addToCartLabel:"Add to Cart",theme:"default",thinkingStatuses:ht,apiBaseUrl:""};function bt(e={}){return{...mt,...e}}function ut(e){const t=e.position.includes("left"),s=e.primaryColor||"#2563eb",a="#4f46e5",o=`linear-gradient(135deg, ${s}, ${a})`,n=`linear-gradient(135deg, ${s}, ${a})`,r="linear-gradient(180deg, #f8fafc, #eef2ff)",i="0 20px 50px rgba(0,0,0,0.15)",d="0 6px 14px rgba(0,0,0,0.08)",p="#111827",c="#6b7280",l="1px solid #e5e7eb",b="16px",u="#60a5fa",h=`background: #fff; border: ${l};`,m=`
        background: #fff;
        border: ${l};
        border-radius: ${b};
        box-shadow: ${d};
    `;return`
        /* Premium E-Commerce Chatbot — ultra-smooth animations */
        :host {
            --primary-color: ${s};
            --primary-indigo: ${a};
            --text-color: #ffffff;
            --bg-color: #ffffff;
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --shadow-panel: ${i};
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
            ${e.position.includes("bottom")?`bottom: ${e.marginBottom}px;`:`top: ${e.marginBottom}px;`}
            ${t?`left: ${e.marginSide}px;`:`right: ${e.marginSide}px;`}
            z-index: 999999;
            display: flex;
            flex-direction: column;
            align-items: ${t?"flex-start":"flex-end"};
            pointer-events: none; /* Let clicks pass through wrapper */
            max-width: calc(100% - ${e.marginSide*2}px);
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
            background: ${o};
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
            max-width: min(360px, calc(100vw - ${e.marginSide*2+8}px));
            height: 600px;
            max-height: min(600px, calc(100vh - ${e.marginBottom+80}px));
            min-height: 400px;
            background: ${r};
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 18px;
            box-shadow: ${i};
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 24px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(30px) scale(0.95);
            transform-origin: bottom ${t?"left":"right"};
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
                ${t?"left: 20px;":"right: 20px;"}
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
        }

        /* --- INTERNAL COMPONENTS (Design-Chatbot-Widget) --- */
        
        /* Header — 64px, gradient, white text, slideDown on open */
        .chatbot-header {
            height: 64px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${o};
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
            background: ${o};
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
            color: ${s};
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
            max-width: 85%;
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
            max-width: 75%;
            word-break: break-word;
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
            position: relative;
        }
        .chatbot-message.bot .chatbot-bubble {
            border-radius: 20px 20px 20px 6px;
            background: #fff;
            color: ${p};
            box-shadow: ${d};
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
            color: ${c};
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
            color: ${p};
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
            ${m}
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
            color: ${p};
            margin-bottom: 5px;
        }

        .chatbot-product-desc {
            font-size: 11px;
            color: ${c};
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .chatbot-product-header h4 {
            margin: 0;
            font-size: 14px;
            color: ${p};
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
            color: ${c};
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

        .chatbot-product-carousel {
            display: flex;
            overflow-x: auto;
            gap: 12px;
            padding: 10px 15px 15px 15px;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            flex-grow: 1;
        }

        /* Hide Scrollbar for cleaner look */
        .chatbot-product-carousel::-webkit-scrollbar {
            display: none;
        }
        .chatbot-product-carousel {
            -ms-overflow-style: none;
            scrollbar-width: none;
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
            color: ${p};
            transition: all 0.2s;
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
        .carousel-nav-left {
            left: -10px;
        }
        .carousel-nav-right {
            right: -10px;
        }

        .carousel-card {
            min-width: 200px;
            max-width: 200px;
            scroll-snap-align: start;
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: ${d};
            flex-shrink: 0;
            transition: transform 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium);
        }
        .carousel-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .carousel-card:nth-child(1) { animation: card-slideIn 0.35s var(--ease-premium) 0s forwards; }
        .carousel-card:nth-child(2) { animation: card-slideIn 0.35s var(--ease-premium) 0.1s forwards; }
        .carousel-card:nth-child(3) { animation: card-slideIn 0.35s var(--ease-premium) 0.2s forwards; }
        @keyframes card-slideIn {
            from { opacity: 0; transform: translateY(12px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .carousel-card .chatbot-product-img {
            border-radius: 0;
            width: 100%;
            height: 140px;
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
            color: ${p};
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
            outline: 2px solid ${s};
            outline-offset: 0;
        }
        .chatbot-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 14px;
            color: ${p};
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
            background: ${o};
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
            color: ${p};
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
            ${t?"left: 0;":"right: 0;"}
            background: #fff;
            color: ${s};
            padding: 12px 20px;
            border-radius: 16px;
            box-shadow: 0 0 40px rgba(37,99,235,0.25);
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            pointer-events: auto;
            transform-origin: bottom ${t?"left":"right"};
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
            box-shadow: ${d};
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
            padding: 8px 14px;
            border-radius: 9999px;
            font-size: 12px;
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
            color: ${s};
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
            color: ${p};
            line-height: 1.2;
        }

        .quick-action-desc {
            font-size: 11px;
            color: ${c};
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
            color: ${p};
            padding: 10px 12px;
            border-radius: 16px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.25s ease;
            text-align: left;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .preset-pill:hover {
            background: ${o};
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
            box-shadow: ${d};
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
            color: ${p};
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .chatbot-section-card-body {
            padding: 14px 20px;
        }
        .chatbot-cart-empty {
            padding: 16px 0;
            color: ${c};
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
            color: ${p};
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
        .chatbot-cart-total-label { color: ${p}; font-size: 14px; }
        .chatbot-cart-total-value { color: var(--primary-color); font-size: 16px; font-weight: 700; }
        .chatbot-cart-checkout-footer {
            padding: 18px 20px;
            border-top: 1px solid rgba(0,0,0,0.08);
            background: rgba(0,0,0,0.03);
        }
        .chatbot-cart-checkout-prompt {
            margin: 0 0 12px 0;
            font-size: 13px;
            color: ${c};
            font-weight: 500;
        }
        .chatbot-cart-checkout-btn {
            display: block;
            width: 100%;
            padding: 12px 20px;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(135deg, var(--primary-color) 0%, ${u} 100%);
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
            color: ${c};
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
            color: ${p};
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
            color: ${c};
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
            color: ${c};
        }
        .chatbot-order-items {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 8px;
        }
        .chatbot-order-item-line {
            font-size: 12px;
            color: ${p};
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
            color: ${c};
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
            color: ${c};
        }

        .checkout-auth-tab.active {
            background: ${s};
            color: #fff;
        }

        .checkout-form-card {
            background: #fff;
            border-radius: 16px;
            padding: 16px;
            box-shadow: ${d};
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
            color: ${c};
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
            border-color: ${s};
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
            color: ${p};
            background: #fff;
            transition: border-color 0.2s var(--ease-premium), box-shadow 0.2s var(--ease-premium), transform 0.2s var(--ease-premium);
        }
        .otp-box:focus {
            outline: none;
            border-color: ${s};
            box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
            transform: scale(1.05);
        }

        .checkout-primary-btn {
            width: 100%;
            padding: 12px;
            background: ${o};
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
            background: ${s};
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
            color: ${p};
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
            color: ${c};
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
            border-color: ${s};
            color: ${s};
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
            background: ${s};
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
            color: ${p};
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
            color: ${p};
            letter-spacing: 0.08em;
            margin: 0 0 8px 0;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: ${c};
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
            color: ${p};
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

        .success-icon-box svg {
            width: 32px;
            height: 32px;
        }

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

        .order-number-badge b {
            color: #111827;
            font-size: 15px;
        }

        .confirmation-title {
            font-size: 18px;
            font-weight: 800;
            color: #111827;
            margin: 0;
        }

        .confirmation-message {
            font-size: 14px;
            color: #4b5563;
            line-height: 1.6;
            margin: 0;
        }

        .confirmation-products {
            width: 100%;
            text-align: left;
            margin: 8px 0;
            padding-top: 12px;
            border-top: 1px solid #e5e7eb;
        }

        .confirmation-products-title {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #6b7280;
            margin-bottom: 10px;
        }

        .confirmation-product-row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid #f3f4f6;
        }

        .confirmation-product-row:last-child {
            border-bottom: none;
        }

        .confirmation-product-img {
            width: 48px;
            height: 48px;
            object-fit: cover;
            border-radius: 10px;
        }

        .confirmation-product-placeholder {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            background: #f3f4f6;
        }

        .confirmation-product-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .confirmation-product-name {
            font-size: 14px;
            font-weight: 600;
            color: #111827;
        }

        .confirmation-product-meta {
            font-size: 12px;
            color: #6b7280;
        }

        .stock-in { color: #22c55e; font-size: 12px; }
        .stock-out { color: #ef4444; font-size: 12px; }
        .price-original { text-decoration: line-through; color: ${c}; font-size: 12px; margin-left: 6px; }

        /* Inline product card (inside stream) */
        .chatbot-inline-product {
            margin-top: 10px;
            ${h}
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
                max-height: min(520px, calc(100cqb - ${e.marginBottom+98}px));
                min-height: min(320px, calc(100cqb - ${e.marginBottom+98}px));
            }
        }
    `}const gt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>';function ft(e,t={}){const{onClose:s,onCartClick:a,cartCount:o=0}=t,n=document.createElement("header");n.className="chatbot-header";const r=e.botName??"Aura Concierge",i=e.headerStatus??"Always Available",d=document.createElement("div");d.className="chatbot-header-left";const p=document.createElement("div");if(p.className="chatbot-header-avatar",e.botAvatarUrl){const f=document.createElement("img");f.src=e.botAvatarUrl,f.alt=`${r} avatar`,p.appendChild(f)}else p.innerHTML=gt;const c=document.createElement("div");c.className="chatbot-header-info";const l=document.createElement("h3");l.className="chatbot-header-title",l.textContent=r;const b=document.createElement("div");b.className="chatbot-header-row";const u=document.createElement("span");u.className="chatbot-header-status-dot";const h=document.createElement("span");h.className="chatbot-header-status",h.textContent=i,b.appendChild(u),b.appendChild(h),c.appendChild(l),c.appendChild(b),d.appendChild(p),d.appendChild(c),n.appendChild(d);const m=document.createElement("div");if(m.className="chatbot-header-actions",typeof a=="function"){const f=document.createElement("button");if(f.type="button",f.className="chatbot-header-btn",f.setAttribute("aria-label","View cart"),f.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',o>0){const w=document.createElement("span");w.className="chatbot-cart-badge",w.textContent=o>99?"99+":String(o),f.style.position="relative",f.appendChild(w)}f.addEventListener("click",a),m.appendChild(f)}const k=document.createElement("button");return k.type="button",k.className="chatbot-header-btn",k.setAttribute("aria-label","Close"),k.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',k.addEventListener("click",()=>s&&s()),m.appendChild(k),n.appendChild(m),n}function ot(e,t={}){const s=t.strength??.15,a=t.radius??80;if(!e||typeof e.addEventListener!="function")return;let o=null,n=0,r=0,i=0,d=0;const p=(l,b,u)=>l+(b-l)*u,c=()=>{n=p(n,i,.2),r=p(r,d,.2),Math.abs(n-i)<.01&&(n=i),Math.abs(r-d)<.01&&(r=d),e.style.transform=`translate(${n}px, ${r}px)`,Math.abs(n)>.01||Math.abs(r)>.01||i!==0||d!==0?o=requestAnimationFrame(c):(o=null,e.style.willChange="")};return e.addEventListener("mouseenter",()=>{e.style.willChange="transform"}),e.addEventListener("mouseleave",()=>{i=0,d=0,o||(o=requestAnimationFrame(c))}),e.addEventListener("mousemove",l=>{const b=e.getBoundingClientRect(),u=b.left+b.width/2,h=b.top+b.height/2,m=l.clientX-u,k=l.clientY-h,f=Math.sqrt(m*m+k*k);if(f<a){const w=(1-f/a)*s;i=m*w,d=k*w}else i=0,d=0;o||(o=requestAnimationFrame(c))}),()=>{o&&cancelAnimationFrame(o)}}const xt=`
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
`;function vt(){if(typeof document<"u"&&!document.getElementById("messagelist-styles")){const e=document.createElement("style");e.id="messagelist-styles",e.textContent=xt,document.head.appendChild(e)}}vt();function yt(){const e=document.createElement("div");return e.className="chatbot-messages",e.id="chatbot-messages-container",e}function Z(e){if(!e)return"";let t=e;return t=t.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g,(s,a,o)=>{const n=a.split("|").filter(i=>i.trim()).map(i=>`<th>${i.trim()}</th>`).join(""),r=o.trim().split(`
`).filter(i=>i.trim()).map(i=>`<tr>${i.split("|").filter(p=>p.trim()).map(p=>`<td>${p.trim()}</td>`).join("")}</tr>`).join("");return`<div class="md-table-wrap"><table><thead><tr>${n}</tr></thead><tbody>${r}</tbody></table></div>
`}),t=t.replace(/^>\s?(.*)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^###\s+(.+)$/gm,'<h3 class="md-h3">$1</h3>'),t=t.replace(/^##\s+(.+)$/gm,'<h2 class="md-h2">$1</h2>'),t=t.replace(/^#\s+(.+)$/gm,'<h1 class="md-h1">$1</h1>'),t=t.replace(/^---+$/gm,'<hr class="md-hr"/>'),t=t.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm,s=>`<ul class="md-list">${s.trim().split(`
`).map(o=>`<li>${o.replace(/^[ \t]*[-*]\s+/,"")}</li>`).join("")}</ul>
`),t=t.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*\n]+?)\*/g,"<em>$1</em>"),t=t.replace(/`([^`]+)`/g,'<code class="md-code">$1</code>'),t=t.replace(/\n{2,}/g,'</p><p class="md-p">'),t=t.replace(/\n/g,"<br/>"),t=`<p class="md-p">${t}</p>`,t}function wt(){const e=document.createElement("span");e.className="chatbot-timestamp";const t=new Date,s=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");return e.textContent=`${s}:${a}`,e}function H(e,t=!0,s=null,a=null){const o=document.createElement("div");o.className=`chatbot-message ${t?"bot":"user"} ${t?"msg-enter-bot":"msg-enter-user"}`;const n=document.createElement("div");if(n.className="chatbot-bubble",t){const d=s!=null&&s.launcherIconUrl?`<img src="${s.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';o.innerHTML=`
            <div class="chatbot-message-avatar">
                ${d}
            </div>
        `;const p=/\[Action:\s*(.*?)\]/g;let c=[],l=e.replace(p,(b,u)=>(c.push(u),""));if(n.innerHTML=Z(l),o.appendChild(n),c.length>0&&a){const b=document.createElement("div");b.className="chatbot-actions",c.forEach(u=>{const h=document.createElement("button");h.type="button",h.className="action-btn",h.textContent=u,h.onclick=()=>a(u),ot(h,{strength:.1,radius:50}),b.appendChild(h)}),o.appendChild(b)}}else n.innerHTML=Z(e),o.appendChild(n);const r=document.createElement("div");r.className=`chatbot-message-ts-row ${t?"ts-bot":"ts-user"}`;const i=wt();return r.appendChild(i),o.appendChild(r),o}const kt="https://placehold.co/300x200?text=Product";function Ct(e){if(!Array.isArray(e)||e.length===0)return[];const t=a=>a&&a.image!=null&&String(a.image).trim()!=="",s=e.filter(t);return s.length>0?s:e}function nt(e,t,s=null){const a=document.createElement("div");a.className="chatbot-message bot-message msg-enter-product";const o=Ct(e),n=kt,i=`
        <div class="chatbot-message-avatar">
            ${s!=null&&s.launcherIconUrl?`<img src="${s.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>'}
        </div>
    `,d=document.createElement("div");d.style.display="flex",d.style.width="100%",d.innerHTML=i;const p=document.createElement("div");p.className="carousel-container",p.style.flex="1",p.style.minWidth="0",p.style.display="flex",p.style.flexDirection="column",p.style.gap="6px";const c=["Have a look","Choose from these","Here are some picks"],l=c[Math.floor(Math.random()*c.length)],b=document.createElement("div");b.className="carousel-heading",b.textContent=l,p.appendChild(b);const u=document.createElement("div");u.className="carousel-row",u.style.display="flex",u.style.alignItems="center",u.style.position="relative";const h=document.createElement("button");h.className="carousel-nav-btn carousel-nav-left",h.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';const m=document.createElement("button");m.className="carousel-nav-btn carousel-nav-right",m.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';const k=document.createElement("div");k.className="chatbot-product-carousel";const f=232;return h.addEventListener("click",()=>{k.scrollBy({left:-f,behavior:"smooth"})}),m.addEventListener("click",()=>{k.scrollBy({left:f,behavior:"smooth"})}),o.forEach(w=>{const Y=w.image&&String(w.image).trim()?w.image:n,M=document.createElement("div");M.className="carousel-card",M.innerHTML=`
            <img src="${Y}" class="chatbot-product-img" alt="${w.title||"Product Image"}" />
            <div class="chatbot-product-content">
                <div class="chatbot-product-header">
                    <h4>${w.title||"Unknown Product"}</h4>
                    <span class="chatbot-product-price">${w.price||""}</span>
                </div>
            </div>
        `;const $=M.querySelector(".chatbot-product-content");let R=null;if(w.sizes&&Array.isArray(w.sizes)){const _=document.createElement("div");_.className="chatbot-product-sizes";const F=document.createElement("div");F.className="sizes-list",w.sizes.forEach(j=>{const A=document.createElement("button");A.className="size-pill",A.innerText=j,A.addEventListener("click",()=>{F.querySelectorAll(".size-pill").forEach(O=>O.classList.remove("selected")),A.classList.add("selected"),R=j}),F.appendChild(A)}),_.appendChild(F),$.appendChild(_)}const I=document.createElement("div");I.className="chatbot-product-action",I.innerText=(s==null?void 0:s.addToCartLabel)||"Add to Cart",I.addEventListener("click",()=>{if(w.sizes&&!R){alert("Please select a size first!");return}t&&t(w,R)}),$.appendChild(I),$t(M,"carousel-card-3d"),k.appendChild(M)}),u.appendChild(h),u.appendChild(k),u.appendChild(m),p.appendChild(u),d.appendChild(p),a.appendChild(d),a}function $t(e,t="chatbot-product-card-3d"){e&&(e.classList.add(t),e.addEventListener("mousemove",s=>{const a=e.getBoundingClientRect(),o=(s.clientX-a.left)/a.width,r=((s.clientY-a.top)/a.height-.5)*8,i=(o-.5)*-8,d=4;e.style.transform=`perspective(800px) rotateX(${r}deg) rotateY(${i}deg) translateY(-${d}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform=""}))}function St(){const e=document.createElement("div");return e.className="chatbot-message bot msg-enter-bot",e.setAttribute("data-skeleton","true"),e.innerHTML=`
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `,e}function Et(e,t,s){if(!e||e.length===0)return null;const a=document.createElement("div");return a.className="chatbot-suggestion-chips",e.forEach(o=>{const n=document.createElement("button");n.type="button",n.className="suggestion-chip",n.textContent=o,n.addEventListener("click",()=>t(o)),ot(n,{strength:.1,radius:50}),a.appendChild(n)}),a}const Lt='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';function st(e,t={}){if(!e||!e.items||!Array.isArray(e.items))return null;const{items:s,total:a}=e,{onCheckout:o,onAddMore:n,onUpdateQty:r,onRemove:i}=t,d=document.createElement("div");d.className="chatbot-section-card chatbot-cart-card msg-enter-product chatbot-cart-card-premium";const c=`$${(typeof a=="number"?a:parseFloat(String(a).replace(/[^0-9.]/g,""))||0).toFixed(2)}`,l=s.reduce((f,w)=>f+(w.quantity||1),0),b=l===1?"item":"items",u=e.subtotalLabel||`Subtotal (${l} ${b})`;if(s.length===0)return d.innerHTML=`
            <div class="chatbot-cart-card-body">
                <div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>
            </div>
        `,d;const h=document.createElement("div");h.className="chatbot-cart-card-body",s.forEach(f=>{const w=document.createElement("div");w.className="chatbot-cart-item-row";const Y=f.quantity!=null?f.quantity:1,M=f.title||f.name||"Product",$=f.price!=null?typeof f.price=="string"?f.price:`$${Number(f.price).toFixed(2)}`:"$0.00",R=f.image&&String(f.image).trim()?f.image:"https://placehold.co/80x80?text=Product",I=f.badge?`<span class="chatbot-cart-item-badge">${f.badge}</span>`:"";w.innerHTML=`
            <div class="chatbot-cart-item-thumb-wrap">
                <img class="chatbot-cart-item-img" src="${R}" alt="${M.slice(0,40)}" />
                ${I}
            </div>
            <div class="chatbot-cart-item-details">
                <div class="chatbot-cart-item-name">${M}</div>
                <div class="chatbot-cart-item-price">${$}</div>
                <div class="chatbot-cart-item-actions">
                    <div class="chatbot-cart-qty-pill">
                        <button type="button" class="chatbot-cart-qty-btn" data-action="minus" aria-label="Decrease">−</button>
                        <span class="chatbot-cart-qty-num">${Y}</span>
                        <button type="button" class="chatbot-cart-qty-btn" data-action="plus" aria-label="Increase">+</button>
                    </div>
                    <button type="button" class="chatbot-cart-remove-btn" aria-label="Remove">${Lt}</button>
                </div>
            </div>
        `;const _=w.querySelector('[data-action="minus"]'),F=w.querySelector('[data-action="plus"]'),j=w.querySelector(".chatbot-cart-qty-num"),A=w.querySelector(".chatbot-cart-remove-btn");r&&j&&(_==null||_.addEventListener("click",()=>{const O=Math.max(0,(parseInt(j.textContent,10)||1)-1);j.textContent=O,r(f,O),O===0&&A&&A.click()}),F==null||F.addEventListener("click",()=>{const O=(parseInt(j.textContent,10)||1)+1;j.textContent=O,r(f,O)})),i&&A&&A.addEventListener("click",()=>i(f)),h.appendChild(w)});const m=document.createElement("div");m.className="chatbot-cart-summary",m.innerHTML=`
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">${u}</span>
            <span class="chatbot-cart-summary-value">${c}</span>
        </div>
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">Shipping</span>
            <span class="chatbot-cart-shipping-free">FREE</span>
        </div>
        <div class="chatbot-cart-summary-divider"></div>
        <div class="chatbot-cart-summary-row chatbot-cart-summary-total">
            <span class="chatbot-cart-summary-label">Total</span>
            <span class="chatbot-cart-summary-total-value">${c}</span>
        </div>
    `;const k=document.createElement("button");return k.type="button",k.className="chatbot-cart-checkout-btn-premium",k.innerHTML='Proceed to Checkout <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',o&&k.addEventListener("click",()=>o()),h.appendChild(m),h.appendChild(k),d.appendChild(h),d}function it(e){if(!e||!Array.isArray(e))return null;const t=document.createElement("div");t.className="chatbot-section-card chatbot-order-history-card msg-enter-product";const s='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',a=n=>{const r=(n||"").toLowerCase();return r==="delivered"?"order-status-delivered":r==="shipped"?"order-status-shipped":r==="processing"?"order-status-processing":r==="cancelled"?"order-status-cancelled":"order-status-default"};let o=e.length===0?'<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>':e.map(n=>{const r=typeof n.total=="number"?`$${n.total.toFixed(2)}`:n.total!=null?`$${Number(n.total).toFixed(2)}`:"—",i=(n.items||[]).map(d=>`<span class="chatbot-order-item-line">${d.title||"Item"} ${d.price?` · ${d.price}`:""}</span>`).join("");return`
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${n.id||"—"}</span>
                        <span class="chatbot-order-date">${n.date||"—"}</span>
                        <span class="chatbot-order-status ${a(n.status)}">${n.status||"—"}</span>
                    </div>
                    <div class="chatbot-order-items">${i||'<span class="chatbot-order-item-line">No items</span>'}</div>
                    <div class="chatbot-order-total">Total ${r}</div>
                </div>
            `}).join("");return t.innerHTML=`
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${s}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${o}</div>
    `,t}const ct=['<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>'];function zt(e,t={}){const{onAction:s}=t,a=document.createElement("div");return a.className="chatbot-quick-actions-grid",e.forEach((o,n)=>{const r=o.icon!=null?o.icon:ct[n]??ct[0],i=document.createElement("div");i.className="quick-action-card msg-enter-product",i.innerHTML=`
            <div class="quick-action-icon-box">${r}</div>
            <div class="quick-action-info">
                <span class="quick-action-title">${(o.title||"").replace(/</g,"&lt;")}</span>
                <span class="quick-action-desc">${(o.desc||"").replace(/</g,"&lt;")}</span>
            </div>
        `;const d=o.message!=null?o.message:o.title||"";i.onclick=()=>s("quickAction",{...o,message:d}),a.appendChild(i)}),a}function Mt(e,t={}){const{step:s,data:a,state:o}=e,{onAction:n}=t,r=document.createElement("div");r.className="chatbot-checkout-wrapper msg-enter-product";const i='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',d='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',p='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';if(s==="mobile"){r.innerHTML=`
            <div class="checkout-form-card checkout-mobile-card">
                <div class="checkout-field">
                    <label class="checkout-label-uppercase">MOBILE NUMBER</label>
                    <div class="checkout-mobile-input-wrap">
                        <span class="checkout-mobile-icon">${i}</span>
                        <span class="checkout-mobile-prefix">+91</span>
                        <input type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="10" class="checkout-mobile-input" placeholder="9876543210" id="checkout-mobile" value="${(o.mobile||"").replace(/\D/g,"").slice(0,10)}" autocomplete="tel" />
                    </div>
                </div>
                <button type="button" class="checkout-send-otp-btn" id="mobile-submit-btn">
                    Send OTP ${p}
                </button>
                <div class="checkout-secure-note">
                    ${d}
                    <span>Encrypted and secure</span>
                </div>
            </div>
        `;const c=r.querySelector("#checkout-mobile"),l=r.querySelector("#mobile-submit-btn"),b=()=>{const u=(c.value||"").replace(/\D/g,"");l.disabled=u.length!==10};c.addEventListener("input",()=>{c.value=c.value.replace(/\D/g,"").slice(0,10),b()}),b(),l.addEventListener("click",()=>{const u=(c.value||"").replace(/\D/g,"").slice(0,10);u.length===10&&n("submitMobile",{mobile:u})})}else if(s==="otp"){const c=o.mobile?"+91 "+String(o.mobile).replace(/(\d{2})(\d{4})(\d+)/,"$1 $2 $3").trim():"+91 ••••••••••";r.innerHTML=`
            <div class="checkout-form-card checkout-otp-card">
                <div class="checkout-otp-header">
                    <h3 class="checkout-otp-title">ENTER OTP</h3>
                    <button type="button" class="checkout-change-number-link">Change Number</button>
                </div>
                <p class="checkout-otp-sent-to">Sent to ${c}</p>
                <div class="checkout-otp-boxes">
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="1" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="2" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="3" />
                    <input type="text" inputmode="numeric" maxlength="1" class="checkout-otp-box" data-otp="4" />
                </div>
                <button type="button" class="checkout-resend-link">Resend OTP</button>
                <button type="button" class="checkout-verify-btn" id="otp-verify-btn">
                    Verify & Continue ${p}
                </button>
            </div>
        `;const l=r.querySelectorAll(".checkout-otp-box");l.forEach((b,u)=>{b.addEventListener("input",h=>{const m=h.target.value.replace(/\D/g,"").slice(0,1);h.target.value=m,m&&u<3&&l[u+1].focus()}),b.addEventListener("keydown",h=>{h.key==="Backspace"&&!h.target.value&&u>0&&l[u-1].focus()})}),l[0]&&l[0].focus(),r.querySelector("#otp-verify-btn").addEventListener("click",()=>n("verifyOtp")),r.querySelector(".checkout-change-number-link").addEventListener("click",()=>n("changeAuthMode",{mode:"mobile"})),r.querySelector(".checkout-resend-link").addEventListener("click",()=>{})}else if(s==="address"){const c=a.addresses||[],l=o.selectedAddressId,b='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',u='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/></svg>',h='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';let m=c.map(f=>{const w=(f.type||"home").toUpperCase(),Y=(f.type||"home").toLowerCase()==="home";return`
            <div class="checkout-address-card ${f.id===l?"selected":""}" data-id="${f.id}">
                <div class="address-icon-box ${Y?"address-icon-home":""}">${Y?b:u}</div>
                <div class="address-info">
                    <div class="address-header">
                        <span class="address-name">${f.name}</span>
                        <span class="address-type-badge">${w}</span>
                    </div>
                    <div class="address-text">${f.street}</div>
                    <div class="address-text">${f.city}, ${f.state||""} ${f.zip}</div>
                    <div class="address-phone">${h} ${f.phone}</div>
                </div>
                ${f.id===l?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
            </div>`}).join("");r.innerHTML=`
            <div class="checkout-address-step">
                ${m}
                <button type="button" class="checkout-add-address checkout-add-address-dashed">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    + Add New Address
                </button>
                ${l?'<button type="button" class="checkout-primary-btn" id="addr-continue-btn">Continue to Payment '+p+"</button>":""}
            </div>
        `,r.querySelectorAll(".checkout-address-card").forEach(f=>{f.onclick=()=>n("selectAddress",{id:f.dataset.id})});const k=r.querySelector("#addr-continue-btn");k&&(k.onclick=()=>n("continueToPayment"))}else if(s==="payment"){const c=o.paymentMethod,l=Number(a.subtotal)||0,b=l*.1,u=l+b;r.innerHTML=`
            <div class="checkout-payment-step">
                <div class="checkout-method-card ${c==="cod"?"selected":""}" data-method="cod">
                    <div class="method-icon-box method-icon-cod">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M7 15h.01"/><path d="M12 15h.01"/><path d="M17 15h.01"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Cash on Delivery</h4>
                        <p class="method-desc">Pay when you receive</p>
                    </div>
                    ${c==="cod"?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
                </div>
                <div class="checkout-method-card ${c==="prepaid"?"selected":""}" data-method="prepaid">
                    <div class="method-icon-box method-icon-card">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Credit / Debit Card</h4>
                        <p class="method-desc">Secure payment</p>
                    </div>
                    ${c==="prepaid"?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
                </div>
                <div class="checkout-summary-card">
                    <h4 class="summary-title">ORDER SUMMARY</h4>
                    <div class="summary-row"><span>Subtotal</span><span>$${l.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Shipping</span><span class="summary-shipping-free">FREE</span></div>
                    <div class="summary-row"><span>Tax</span><span>$${b.toFixed(2)}</span></div>
                    <div class="summary-divider"></div>
                    <div class="summary-row summary-total"><span>Total</span><span class="total-value">$${u.toFixed(2)}</span></div>
                </div>
                <button class="checkout-place-order-btn" id="place-order-btn" ${c?"":"disabled"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Place Order – $${u.toFixed(2)}
                </button>
            </div>
        `,r.querySelectorAll(".checkout-method-card").forEach(m=>{m.onclick=()=>n("selectPayment",{method:m.dataset.method})});const h=r.querySelector("#place-order-btn");h&&(h.onclick=()=>{c&&n("placeOrder")})}else if(s==="confirmation"){const c=o.orderId||a.orderId||`ORD-${String(Math.floor(Math.random()*1e4)).padStart(4,"0")}`,l=a.orderItems||o.orderItems||[],b=l.length?`<div class="confirmation-products">
                <div class="confirmation-products-title">Products ordered</div>
                ${l.map(u=>{const h=u.quantity||1,m=(u.price||0)*h;return`<div class="confirmation-product-row">
                        ${u.image?`<img src="${u.image}" alt="" class="confirmation-product-img" onerror="this.style.display='none'" />`:'<div class="confirmation-product-placeholder"></div>'}
                        <div class="confirmation-product-info">
                            <span class="confirmation-product-name">${(u.name||"").replace(/</g,"&lt;")}</span>
                            <span class="confirmation-product-meta">Qty: ${h} × $${(u.price||0).toFixed(2)} = $${m.toFixed(2)}</span>
                        </div>
                    </div>`}).join("")}
               </div>`:"";r.innerHTML=`
            <div class="checkout-confirmation">
                <div class="success-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 class="confirmation-title">Order Confirmed!</h3>
                <p class="confirmation-message">Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                ${b}
                <div class="order-number-badge">
                    <span>Order #</span>
                    <b>${c}</b>
                </div>
            </div>
        `}return r}const At='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',It='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';function Tt(e,t){const s=document.createElement("div");s.className="chatbot-input-area",s.setAttribute("data-region","input-bar");const a=t.placeholders&&t.placeholders.length>0?t.placeholders:lt,o=t.inputPlaceholder||"Ask anything about orders, products...",n=document.createElement("div");n.className="chatbot-input-wrap";const r=document.createElement("button");r.type="button",r.className="chatbot-attach-btn",r.setAttribute("aria-label","Attach"),r.innerHTML=At;const i=document.createElement("input");i.type="text",i.placeholder=o,i.className="chatbot-input",i.setAttribute("aria-label","Message input");const d=document.createElement("button");d.type="button",d.className="chatbot-send-btn",d.setAttribute("aria-label","Send message"),d.innerHTML=It;const p=()=>{const h=i.value.trim().length>0;d.classList.toggle("active",h),d.disabled=!h};i.addEventListener("input",p),i.addEventListener("focus",p),i.addEventListener("blur",p),p();let c=0;const b=setInterval(()=>{!i.matches(":focus")&&a.length>1&&(c=(c+1)%a.length,i.placeholder=a[c])},3500);i.addEventListener("focus",()=>{i.placeholder=t.inputPlaceholder||"Ask anything about orders, products..."}),i.addEventListener("blur",()=>{i.placeholder=a[c%a.length]});const u=()=>{const h=i.value.trim();h&&(e(h),i.value="",c=0,i.placeholder=a[0],p())};return i.addEventListener("keypress",h=>{h.key==="Enter"&&u()}),d.addEventListener("click",u),n.appendChild(r),n.appendChild(i),n.appendChild(d),s.appendChild(n),ot(d,{strength:.12,radius:60}),s.destroy=()=>clearInterval(b),s}function Nt(e="Thinking..."){const t=document.createElement("div");t.className="chatbot-message bot typing-indicator-wrapper msg-enter-bot";const s=document.createElement("div");s.className="chatbot-message-avatar",s.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';const a=document.createElement("div");return a.className="message-bubble typing-indicator",a.setAttribute("aria-live","polite"),a.setAttribute("role","status"),a.innerHTML='<span class="dot"></span><span class="dot"></span><span class="dot"></span>',t.appendChild(s),t.appendChild(a),t.setStatus=()=>{},t}const qt="http://localhost:3000";async function Bt(e,t=[],s,a,o,n="default",r=null,i=null,d=null,p=null){const l=`${(p||qt).replace(/\/$/,"")}/api/chat`;try{const b=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,history:t,sessionId:n})});if(!b.ok)throw new Error;const u=b.body.getReader(),h=new TextDecoder;let m="";for(;;){const{value:k,done:f}=await u.read();if(f)break;m+=h.decode(k,{stream:!0});const w=m.split(`
`);m=w.pop();for(const Y of w)if(Y.startsWith("data: ")){const M=Y.replace("data: ","").trim();try{if(M){const $=JSON.parse(M);$.type==="text"&&s&&s($.content),$.type==="carousel"&&a&&a($.content),$.type==="cart"&&i&&i($.content),$.type==="orderHistory"&&d&&d($.content),$.type==="status"&&r&&r($.content),$.type==="done"&&o&&o()}}catch{}}}}catch(b){console.error("AI Service Error:",b),s&&s("My neural network is temporarily offline."),o&&o()}}function Ht(e,t=[],s=4){if(!t||t.length===0)return[];const a=(e||"").toLowerCase(),o=t.map(r=>{const i=r.toLowerCase();let d=0;const p=i.split(/\s+/).filter(c=>c.length>2);for(const c of p)a.includes(c)&&(d+=2),a.includes(c.replace(/[^a-z0-9]/g,""))&&(d+=1);return r.toLowerCase().includes("sneaker")&&(a.includes("sneaker")||a.includes("shoe"))&&(d+=3),r.toLowerCase().includes("trending")&&(a.includes("trending")||a.includes("bestseller")||a.includes("popular"))&&(d+=3),r.toLowerCase().includes("sale")&&(a.includes("sale")||a.includes("price")||a.includes("$"))&&(d+=2),r.toLowerCase().includes("running")&&a.includes("running")&&(d+=3),r.toLowerCase().includes("jacket")&&(a.includes("jacket")||a.includes("apparel"))&&(d+=2),{label:r,score:d}});o.sort((r,i)=>i.score-r.score);const n=o.filter(r=>r.score>0).slice(0,s).map(r=>r.label);return n.length===0&&a.length<500?t.slice(0,Math.min(3,s)):n}function Yt(e){if(!e)return null;const t=document.createElement("div");return t.className="chatbot-toast-host",e.appendChild(t),{showToast:({title:a,message:o,image:n,duration:r=3e3}={})=>{const i=document.createElement("div");i.className="chatbot-toast",i.innerHTML=`
            ${n?`<div class="chatbot-toast-image-wrap"><img src="${n}" alt="" /></div>`:""}
            <div class="chatbot-toast-content">
                ${a?`<div class="chatbot-toast-title">${a}</div>`:""}
                ${o?`<div class="chatbot-toast-message">${o}</div>`:""}
            </div>
        `,t.appendChild(i),requestAnimationFrame(()=>{i.classList.add("chatbot-toast-visible")}),setTimeout(()=>{i.classList.remove("chatbot-toast-visible"),i.addEventListener("transitionend",()=>{i.remove()},{once:!0})},r)}}}function jt(e){const t=bt(e);console.log("Chatbot initialized in Shadow DOM with config:",t);let s=sessionStorage.getItem("ecom-session-id");s||(s="sess_"+Math.random().toString(36).substring(2,9),sessionStorage.setItem("ecom-session-id",s));const a=t.parentElement||document.body,o=a.querySelector("#ecom-chatbot-host");o&&o.remove();const n=document.createElement("div");n.id="ecom-chatbot-host",a.appendChild(n);const r=n.attachShadow({mode:"open"}),i=Yt(r),d=document.createElement("style");d.textContent=ut(t),r.appendChild(d);const p=document.createElement("div");p.className="ecom-chatbot-wrapper";const c=document.createElement("div");c.className="chatbot-window";const l=yt();function b(){l.scrollTo({top:l.scrollHeight,behavior:"smooth"})}function u(){let x=null;Array.from(l.children).filter(g=>g.classList&&!g.hasAttribute("data-skeleton")&&(g.classList.contains("chatbot-message")||g.classList.contains("typing-indicator-wrapper"))).forEach(g=>{const y=g.classList.contains("user"),S=g.classList.contains("bot")||g.classList.contains("typing-indicator-wrapper"),N=y?"user":S?"bot":null;N&&(g.classList.remove("group-same","group-first"),x===N?g.classList.add("group-same"):g.classList.add("group-first"),x=N)})}let h=[];try{const x=sessionStorage.getItem("ecom-chat-history");x&&(h=JSON.parse(x),console.log("Restored chat history from session:",h))}catch(x){console.error("Failed to parse session chat history",x)}let m={step:null,authMode:"login",name:"",email:"",selectedAddressId:null,paymentMethod:"",subtotal:0};const k=[{id:"1",type:"home",name:"John Doe",street:"123 Main Street, Apt 4B",city:"New York",state:"NY",zip:"10001",phone:"+1 (555) 123-4567"}],f=async(x,v)=>{if(x==="changeAuthMode")m.authMode=v.mode,v.mode==="mobile"&&(m.step="mobile"),M();else if(x==="submitMobile")m.mobile=v.mobile,m.step="otp",M();else if(x==="verifyOtp"){i.showToast({title:"Verified successfully!",message:""}),m.isAuthenticated=!0,m.step="address";const g=m.addresses||k;!m.selectedAddressId&&g.length&&(m.selectedAddressId=g[0].id),l.appendChild(H("Continue to address selection",!1,t)),b(),M()}else if(x==="submitAuth"){m.email=v.email,m.name=v.name,i.showToast({title:"Successfully logged in!",message:""}),m.isAuthenticated=!0,m.step="address";const g=m.addresses||k;!m.selectedAddressId&&g.length&&(m.selectedAddressId=g[0].id),l.appendChild(H("Continue to address selection",!1,t)),b(),M()}else x==="selectAddress"?(m.selectedAddressId=v.id,M()):x==="continueToPayment"?(m.step="payment",m.paymentMethod||(m.paymentMethod="cod"),l.appendChild(H("Continue to payment",!1,t)),b(),M()):x==="selectPayment"?(m.paymentMethod=v.method,M()):x==="placeOrder"&&(m.orderItems=cart.map(g=>({name:g.name||g.title,price:g.price,quantity:g.quantity||1,image:g.image})),m.orderId=`ORD-${String(Math.floor(Math.random()*1e4)).padStart(4,"0")}`,m.step="confirmation",l.appendChild(H("Place order",!1,t)),b(),cart=[],R&&R(0),M(),i.showToast({title:"Order Placed",message:"Thank you for your order!"}))},w={mobile:"To complete your order, please login or create an account.",otp:"",address:"Please select a delivery address or add a new one.",payment:"Choose your preferred payment method.",confirmation:"Your order has been placed successfully! You'll receive a confirmation email shortly."};let Y=null;const M=()=>{const x=m.step,v={step:x,data:{addresses:m.addresses||k,subtotal:m.subtotal??cart.reduce((T,B)=>T+(B.price||0)*(B.quantity||1),0),orderItems:m.orderItems||[]},state:m},g=Mt(v,{onAction:f}),y=w[x]||"";if(Y){const B=(Y.querySelector(".chatbot-message-content")||Y).querySelector(".chatbot-checkout-wrapper"),D=Y.querySelector(".chatbot-bubble");if(D&&(D.innerHTML=y?Z(y):""),B){B.replaceWith(g),b();return}}const S=H(y,!0,t),N=document.createElement("div");N.className="chatbot-message-content";const C=S.querySelector(".chatbot-bubble");C.parentNode.insertBefore(N,C),N.appendChild(C),N.appendChild(g),l.appendChild(S),Y=S,b(),u()};let $=0,R=null;const I=async x=>{const v=c.querySelector(".chatbot-presets");v&&v.remove();const g=c.querySelector(".chatbot-quick-actions-grid");g&&g.remove();const y=H(x,!1,t);l.appendChild(y),b();const S=Nt();l.appendChild(S),b();const N=[...h];h.push({role:"user",content:x}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h));let C=null,T="",B=!1,D=null,U=null,W=null;const V=()=>{S.parentNode&&l.removeChild(S),W&&W.parentNode&&l.removeChild(W)},G=()=>{if(J)return;const z=p.querySelector(".chatbot-toggle-btn");if(z&&!z.querySelector(".chatbot-ripple-ring")){const L=document.createElement("span");L.className="chatbot-ripple-ring",z.appendChild(L),setTimeout(()=>L.remove(),1400)}};await Bt(x,N,z=>{V(),B||(B=!0,G()),C||(C=H("",!0,t,I),l.appendChild(C),D=C),T+=z;const L=C.querySelector(".chatbot-bubble");L&&(L.innerHTML=Z(T)),b()},z=>{V(),B||(B=!0,G());const L=["Here's what we have:","Have a look at these.","Here are some picks."],E=L[Math.floor(Math.random()*L.length)];(!C||!T.trim())&&(C=H(E,!0,t,I),l.appendChild(C),T=E);const q=nt(z,F,t);U=z,D=q,l.appendChild(q),h.push({role:"bot",content:"Displayed a product carousel to the user.",carousel:z}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)),u(),b()},()=>{V(),T&&(h.push({role:"bot",content:T}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)));const z=T||(U?(U||[]).map(E=>E.title||"").join(" "):""),L=Ht(z,t.suggestionChips||[],4);if(L.length>0&&D){const E=Et(L,P=>I(P));E.classList.add("chatbot-chips-below");const q=D.querySelector(".chatbot-bubble");if(q){let P=D.querySelector(".chatbot-message-content");P||(P=document.createElement("div"),P.className="chatbot-message-content",q.parentNode.insertBefore(P,q),P.appendChild(q)),P.appendChild(E)}else D.appendChild(E)}u(),b()},s,z=>{S.setStatus&&S.setStatus(z),z&&/searching|product|looking for|options|recommend/i.test(z)&&!W&&(W=St(),l.appendChild(W),b())},z=>{V(),B||(B=!0,G()),C||(C=H("",!0,t,I),l.appendChild(C));const L=C.querySelector(".chatbot-bubble");let E=C.querySelector(".chatbot-message-content");!E&&L&&(E=document.createElement("div"),E.className="chatbot-message-content",L.parentNode.insertBefore(E,L),E.appendChild(L));const q=st(z,{onCheckout:()=>{m.step="mobile",m.subtotal=z.total||0,M()},onAddMore:()=>I("I'd like to add something else")});q&&E?E.appendChild(q):q&&botMsg.appendChild(q);const P=T||"Here’s what’s in your cart:";h.push({role:"bot",content:P,cart:z}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)),u(),b()},z=>{V(),B||(B=!0,G()),C||(C=H("",!0,t,I),l.appendChild(C));const L=C.querySelector(".chatbot-bubble");let E=C.querySelector(".chatbot-message-content");!E&&L&&(E=document.createElement("div"),E.className="chatbot-message-content",L.parentNode.insertBefore(E,L),E.appendChild(L));const q=it(z);q&&E?E.appendChild(q):q&&C.appendChild(q);const P=T||"Here’s your order history.";h.push({role:"bot",content:P,orderHistory:z}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)),u(),b()},t.apiBaseUrl||void 0)},_=Tt(I,t),F=(x,v)=>{const g=v?` (Size: ${v})`:"",y=H(`✅ Added 1x **${x.title}** ${g} to your cart for ${x.price}!`,!0,t);l.appendChild(y),u(),b(),window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:x,selectedSize:v}})),R&&R($+1),i&&x&&i.showToast({title:"Added to cart",message:`${x.title||""} · ${x.price||""}`,image:x.image})};if(h.length>0)h.forEach(x=>{if(x.role==="user")l.appendChild(H(x.content,!1,t));else if(x.role==="bot")if(x.carousel)l.appendChild(nt(x.carousel,F,t));else if(x.cart){const v=H(x.content||"Here’s what’s in your cart:",!0,t),g=v.querySelector(".chatbot-bubble");if(g){const y=document.createElement("div");y.className="chatbot-message-content",g.parentNode.insertBefore(y,g),y.appendChild(g);const S=st(x.cart,{onCheckout:()=>I("I'd like to proceed to checkout"),onAddMore:()=>I("I'd like to add something else")});S&&y.appendChild(S)}l.appendChild(v)}else if(x.orderHistory){const v=H(x.content||"Here’s your order history.",!0,t),g=v.querySelector(".chatbot-bubble");if(g){const y=document.createElement("div");y.className="chatbot-message-content",g.parentNode.insertBefore(y,g),y.appendChild(g);const S=it(x.orderHistory);S&&y.appendChild(S)}l.appendChild(v)}else x.content&&x.content!=="Displayed a product carousel to the user."&&l.appendChild(H(x.content,!0,t))}),u(),b();else{const x=t.welcomeMessage??"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",v=H(x,!0,t);l.appendChild(v);const g=[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],y=t.quickActions&&t.quickActions.length>=4?t.quickActions.slice(0,4):g,S=zt(y,{onAction:(N,C)=>{const T=C.message!=null&&String(C.message).trim()?C.message:C.title;T&&I(T)}});l.appendChild(S),h.push({role:"bot",content:x})}const j=document.createElement("div");j.className="chatbot-orb-wrapper";const A=document.createElement("button");A.type="button",A.className="chatbot-toggle-btn",A.setAttribute("aria-label","Open chat");const O='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';A.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" />`:O,j.appendChild(A);let J=!1;const dt=sessionStorage.getItem("ecom-chatbot-open")==="true",X=document.createElement("div");X.className="welcome-bubble",X.innerHTML='<span style="vertical-align: middle; font-size: 14px; font-weight: 600;">Need help? 👋</span>';function K(){setTimeout(()=>{J?K():(X.classList.remove("hidden"),setTimeout(()=>{X.classList.add("hidden"),K()},5e3))},15e3)}setTimeout(()=>{X.classList.add("hidden"),K()},5e3);const Q=()=>{J=!0,sessionStorage.setItem("ecom-chatbot-open","true"),X.classList.add("hidden"),c.classList.add("is-open"),A.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" />`:O,setTimeout(b,50)},tt=()=>{J=!1,sessionStorage.setItem("ecom-chatbot-open","false"),c.classList.remove("is-open"),A.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" />`:O},at=()=>{X.classList.add("hidden"),J?tt():Q()};A.addEventListener("click",at);const rt=ft(t,{onClose:tt,onCartClick:()=>{Q(),I("View Cart")},cartCount:0});R=x=>{$=Math.max(0,x||0);const v=rt.querySelector('button[aria-label="View cart"]');if(v){let y=v.querySelector(".chatbot-cart-badge");$>0?(y||(y=document.createElement("span"),y.className="chatbot-cart-badge",v.appendChild(y)),y.textContent=$>99?"99+":String($)):y&&y.remove()}let g=A.querySelector(".chatbot-launcher-badge");$>0?(g||(g=document.createElement("span"),g.className="chatbot-launcher-badge",A.appendChild(g)),g.textContent=$>99?"99+":String($),g.classList.remove("cart-badge-pop"),g.offsetWidth,g.classList.add("cart-badge-pop")):g&&g.remove()},c.appendChild(rt),c.appendChild(l),c.appendChild(_);const et=document.createElement("div");et.className="chatbot-footer",et.innerHTML="<p>Powered by Aura AI</p>",c.appendChild(et),window.EcomChatbot&&(window.EcomChatbot.open=Q,window.EcomChatbot.close=tt,window.EcomChatbot.toggle=at,window.EcomChatbot.sendMessage=x=>{Q(),I(x)},window.EcomChatbot.resetAnimation=()=>{}),p.appendChild(c),p.appendChild(X),p.appendChild(j),r.appendChild(p),dt&&Q(),function(){const x=["Hi! I'm Aura, your shopping assistant.","I can help you discover products.","I can track your orders for you.","Looking for the best deals? 🔥","What brings you here today?"],v=r.getElementById("typewriter-bubble");if(!v)return;let g=0,y=0,S=!1,N=!1;const C=68,T=38,B=1800,D=320;v.style.display="inline-block",v.style.minWidth="10px";const U=document.createElement("span");U.textContent="|",U.style.cssText="display:inline-block;margin-left:2px;animation:twCursor 0.8s steps(1) infinite;color:inherit;font-weight:300;opacity:0.7";const W=document.createElement("style");W.textContent="@keyframes twCursor{0%,100%{opacity:1}50%{opacity:0}}",r.appendChild(W),v.appendChild(U);function V(){if(N)return;const G=x[g];if(S){if(y--,v.firstChild&&v.firstChild!==U&&(v.firstChild.textContent=G.slice(0,y)),y===0){S=!1,g=(g+1)%x.length,N=!0,setTimeout(()=>{N=!1,V()},D);return}}else if(y++,v.firstChild&&v.firstChild!==U?v.firstChild.textContent=G.slice(0,y):v.insertBefore(document.createTextNode(G.slice(0,y)),U),y===G.length){N=!0,setTimeout(()=>{N=!1,S=!0,V()},B);return}setTimeout(V,S?T:C)}v.innerHTML="",v.appendChild(document.createTextNode("")),v.appendChild(U),V()}()}window.EcomChatbot={init:e=>{jt(e)}};
