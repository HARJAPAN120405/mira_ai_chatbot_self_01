(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();const ye=["Ask about products...","Find sneakers under $100...","Compare two products...","Show trending items...","What's on sale?","Recommend something for me..."],ke=["View All","Filter by Price","Sale Items","Show sneakers under $100","Trending items","Best running shoes","Summer jackets","What's on sale?","Add to cart"],Ce=["Thinking...","Searching products...","Analyzing your request...","Looking for the best options..."],$e={botName:"Aura Concierge",botSubtitle:"Always Available",botAvatarUrl:"",position:"bottom-right",marginBottom:24,marginSide:24,primaryColor:"#2563eb",textColor:"#ffffff",backgroundColor:"#ffffff",headerStatus:"Always Available",quickActions:[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],autoDetectProduct:!0,greetingMessage:"Hi! I'm Aura, your shopping assistant. What can I help you with today?",inputPlaceholder:"Ask anything about orders, products...",placeholders:ye,suggestionChips:ke,welcomeMessage:"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",welcomeIconUrl:"",addToCartLabel:"Add to Cart",theme:"default",thinkingStatuses:Ce,apiBaseUrl:""};function Se(t={}){return{...$e,...t}}function Ee(t){const e=t.position.includes("left"),o=t.primaryColor||"#2563eb",s="#4f46e5",r=`linear-gradient(135deg, ${o}, ${s})`,l=`linear-gradient(135deg, ${o}, ${s})`,a="linear-gradient(180deg, #f8fafc, #eef2ff)",n="0 20px 50px rgba(0,0,0,0.15)",p="0 6px 14px rgba(0,0,0,0.08)",h="#111827",i="#6b7280",d="1px solid #e5e7eb",u="16px",b="#60a5fa",c=`background: #fff; border: ${d};`,v=`
        background: #fff;
        border: ${d};
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
            --shadow-panel: ${n};
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
            background: ${r};
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
            background: ${a};
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 18px;
            box-shadow: ${n};
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
            background: ${r};
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
            background: ${r};
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
            color: ${h};
            box-shadow: ${p};
        }
        .chatbot-message.bot .chatbot-bubble:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .chatbot-message.user .chatbot-bubble {
            border-radius: 20px 20px 6px 20px;
            background: ${l};
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
            color: ${h};
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
            ${v}
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
            color: ${h};
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
            color: ${h};
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
            border: ${d};
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            color: ${h};
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
            border: ${d};
            border-radius: 4px;
            background: #fff;
            color: ${h};
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
            color: ${h};
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
            background: ${r};
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
            color: ${h};
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
            color: ${h};
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
            color: ${h};
            padding: 10px 12px;
            border-radius: 16px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.25s ease;
            text-align: left;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .preset-pill:hover {
            background: ${r};
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
            color: ${h};
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
            color: ${h};
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
        .chatbot-cart-total-label { color: ${h}; font-size: 14px; }
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
            color: ${h};
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
            gap: 8px;
            margin-bottom: 8px;
        }
        .chatbot-order-item-row {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .chatbot-order-item-thumb-wrap {
            position: relative;
            flex-shrink: 0;
            width: 64px;
            height: 64px;
            border-radius: 12px;
            overflow: hidden;
        }
        .chatbot-order-item-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .chatbot-order-item-line {
            font-size: 12px;
            color: ${h};
            opacity: 0.95;
            flex: 1;
            min-width: 0;
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
            color: ${h};
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
            background: ${r};
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
            color: ${h};
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
            color: ${h};
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
            color: ${h};
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
            color: ${h};
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
            position: relative;
            flex-shrink: 0;
            width: 64px;
            height: 64px;
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
    `}const ze='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>';function Le(t,e={}){const{onClose:o,onCartClick:s,cartCount:r=0}=e,l=document.createElement("header");l.className="chatbot-header";const a=t.botName??"Aura Concierge",n=t.headerStatus??"Always Available",p=document.createElement("div");p.className="chatbot-header-left";const h=document.createElement("div");if(h.className="chatbot-header-avatar",t.botAvatarUrl){const m=document.createElement("img");m.src=t.botAvatarUrl,m.alt=`${a} avatar`,h.appendChild(m)}else h.innerHTML=ze;const i=document.createElement("div");i.className="chatbot-header-info";const d=document.createElement("h3");d.className="chatbot-header-title",d.textContent=a;const u=document.createElement("div");u.className="chatbot-header-row";const b=document.createElement("span");b.className="chatbot-header-status-dot";const c=document.createElement("span");c.className="chatbot-header-status",c.textContent=n,u.appendChild(b),u.appendChild(c),i.appendChild(d),i.appendChild(u),p.appendChild(h),p.appendChild(i),l.appendChild(p);const v=document.createElement("div");if(v.className="chatbot-header-actions",typeof s=="function"){const m=document.createElement("button");if(m.type="button",m.className="chatbot-header-btn",m.setAttribute("aria-label","View cart"),m.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',r>0){const w=document.createElement("span");w.className="chatbot-cart-badge",w.textContent=r>99?"99+":String(r),m.style.position="relative",m.appendChild(w)}m.addEventListener("click",s),v.appendChild(m)}const g=document.createElement("button");return g.type="button",g.className="chatbot-header-btn",g.setAttribute("aria-label","Close"),g.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',g.addEventListener("click",()=>o&&o()),v.appendChild(g),l.appendChild(v),l}function he(t,e={}){const o=e.strength??.15,s=e.radius??80;if(!t||typeof t.addEventListener!="function")return;let r=null,l=0,a=0,n=0,p=0;const h=(d,u,b)=>d+(u-d)*b,i=()=>{l=h(l,n,.2),a=h(a,p,.2),Math.abs(l-n)<.01&&(l=n),Math.abs(a-p)<.01&&(a=p),t.style.transform=`translate(${l}px, ${a}px)`,Math.abs(l)>.01||Math.abs(a)>.01||n!==0||p!==0?r=requestAnimationFrame(i):(r=null,t.style.willChange="")};return t.addEventListener("mouseenter",()=>{t.style.willChange="transform"}),t.addEventListener("mouseleave",()=>{n=0,p=0,r||(r=requestAnimationFrame(i))}),t.addEventListener("mousemove",d=>{const u=t.getBoundingClientRect(),b=u.left+u.width/2,c=u.top+u.height/2,v=d.clientX-b,g=d.clientY-c,m=Math.sqrt(v*v+g*g);if(m<s){const w=(1-m/s)*o;n=v*w,p=g*w}else n=0,p=0;r||(r=requestAnimationFrame(i))}),()=>{r&&cancelAnimationFrame(r)}}const Ae=`
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
`;function Ie(){if(typeof document<"u"&&!document.getElementById("messagelist-styles")){const t=document.createElement("style");t.id="messagelist-styles",t.textContent=Ae,document.head.appendChild(t)}}Ie();function Me(){const t=document.createElement("div");return t.className="chatbot-messages",t.id="chatbot-messages-container",t}function pe(t){if(!t)return"";let e=t;return e=e.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g,(o,s,r)=>{const l=s.split("|").filter(n=>n.trim()).map(n=>`<th>${n.trim()}</th>`).join(""),a=r.trim().split(`
`).filter(n=>n.trim()).map(n=>`<tr>${n.split("|").filter(h=>h.trim()).map(h=>`<td>${h.trim()}</td>`).join("")}</tr>`).join("");return`<div class="md-table-wrap"><table><thead><tr>${l}</tr></thead><tbody>${a}</tbody></table></div>
`}),e=e.replace(/^>\s?(.*)$/gm,"<blockquote>$1</blockquote>"),e=e.replace(/^###\s+(.+)$/gm,'<h3 class="md-h3">$1</h3>'),e=e.replace(/^##\s+(.+)$/gm,'<h2 class="md-h2">$1</h2>'),e=e.replace(/^#\s+(.+)$/gm,'<h1 class="md-h1">$1</h1>'),e=e.replace(/^---+$/gm,'<hr class="md-hr"/>'),e=e.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm,o=>`<ul class="md-list">${o.trim().split(`
`).map(r=>`<li>${r.replace(/^[ \t]*[-*]\s+/,"")}</li>`).join("")}</ul>
`),e=e.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*\n]+?)\*/g,"<em>$1</em>"),e=e.replace(/`([^`]+)`/g,'<code class="md-code">$1</code>'),e=e.replace(/\n{2,}/g,'</p><p class="md-p">'),e=e.replace(/\n/g,"<br/>"),e=`<p class="md-p">${e}</p>`,e}function Ne(){const t=document.createElement("span");t.className="chatbot-timestamp";const e=new Date,o=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return t.textContent=`${o}:${s}`,t}function Q(t,e=!0,o=null,s=null){const r=document.createElement("div");r.className=`chatbot-message ${e?"bot":"user"} ${e?"msg-enter-bot":"msg-enter-user"}`;const l=document.createElement("div");if(l.className="chatbot-bubble",e){const p=o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';r.innerHTML=`
            <div class="chatbot-message-avatar">
                ${p}
            </div>
        `;const h=/\[Action:\s*(.*?)\]/g;let i=[],d=t.replace(h,(u,b)=>(i.push(b),""));if(l.innerHTML=pe(d),r.appendChild(l),i.length>0&&s){const u=document.createElement("div");u.className="chatbot-actions",i.forEach(b=>{const c=document.createElement("button");c.type="button",c.className="action-btn",c.textContent=b,c.onclick=()=>s(b),he(c,{strength:.1,radius:50}),u.appendChild(c)}),r.appendChild(u)}}else l.innerHTML=pe(t),r.appendChild(l);const a=document.createElement("div");a.className=`chatbot-message-ts-row ${e?"ts-bot":"ts-user"}`;const n=Ne();return a.appendChild(n),r.appendChild(a),r}const Te="https://placehold.co/300x200?text=Product";function Be(t){if(!Array.isArray(t)||t.length===0)return[];const e=o=>o&&o.image!=null&&String(o.image).trim()!=="";return t.filter(e)}function qe(t){return t.badge&&String(t.badge).trim()?String(t.badge).trim():t.bestseller?"Bestseller":null}function me(t,e,o=null){const s=Be(t);if(s.length===0)return null;const r=document.createElement("div");r.className="chatbot-message bot-message msg-enter-product";const l=Te,a=o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>',n=document.createElement("div");n.style.display="flex",n.style.width="100%",n.innerHTML=`
        <div class="chatbot-message-avatar">${a}</div>
    `;const p=document.createElement("div");p.className="carousel-container",p.style.flex="1",p.style.minWidth="0",p.style.display="flex",p.style.flexDirection="column",p.style.gap="6px";const h=["Here are some of our curated products:","Have a look","Choose from these","Here are some picks"],i=document.createElement("div");i.className="carousel-heading",i.textContent=h[Math.floor(Math.random()*h.length)],p.appendChild(i);const d=document.createElement("div");d.className="carousel-row",d.style.display="flex",d.style.alignItems="center",d.style.position="relative";const u=document.createElement("button");u.className="carousel-nav-btn carousel-nav-left",u.setAttribute("type","button"),u.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';const b=document.createElement("button");b.className="carousel-nav-btn carousel-nav-right",b.setAttribute("type","button"),b.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';const c=document.createElement("div");c.className="product-carousel chatbot-product-carousel";const v=212;return u.addEventListener("click",()=>c.scrollBy({left:-v,behavior:"smooth"})),b.addEventListener("click",()=>c.scrollBy({left:v,behavior:"smooth"})),s.forEach((g,m)=>{const w=g.title||g.name||"Product",V=g.image&&String(g.image).trim()?g.image:l,U=g.price!=null?typeof g.price=="string"?g.price:`$${g.price}`:"",$=g.originalPrice!=null?typeof g.originalPrice=="string"?g.originalPrice:`$${g.originalPrice}`:"",j=qe(g);g.badgeColor;const C=document.createElement("div");C.className="product-card",C.dataset.productId=g.id||m,C.style.animationDelay=`${m*100}ms`;const L=document.createElement("div");L.className="product-image-wrap";const E=document.createElement("img");if(E.className="product-image",E.src=V,E.alt=w,E.loading="lazy",E.style.background="#f3f4f6",E.onerror=function(){C.remove()},L.appendChild(E),j){const F=document.createElement("div");F.className="product-badge",F.textContent=j,L.appendChild(F)}C.appendChild(L);const q=document.createElement("h4");q.className="product-name",q.textContent=w,C.appendChild(q);const Y=document.createElement("div");Y.className="product-price-container";const D=document.createElement("span");if(D.className="product-price",D.textContent=U,Y.appendChild(D),$){const F=document.createElement("span");F.className="product-original-price",F.textContent=$,Y.appendChild(F)}C.appendChild(Y);let J=null;if(g.sizes&&Array.isArray(g.sizes)){const F=document.createElement("div");F.className="chatbot-product-sizes";const f=document.createElement("div");f.className="sizes-list",g.sizes.forEach(y=>{const x=document.createElement("button");x.type="button",x.className="size-pill",x.innerText=y,x.addEventListener("click",()=>{f.querySelectorAll(".size-pill").forEach(k=>k.classList.remove("selected")),x.classList.add("selected"),J=y}),f.appendChild(x)}),F.appendChild(f),C.appendChild(F)}const K=document.createElement("button");K.type="button",K.className="add-to-cart-btn",K.textContent=(o==null?void 0:o.addToCartLabel)||"Add to Cart",K.addEventListener("click",()=>{if(g.sizes&&!J){alert("Please select a size first!");return}e&&e(g,J)}),C.appendChild(K),Pe(C,"carousel-card-3d"),c.appendChild(C)}),d.appendChild(u),d.appendChild(c),d.appendChild(b),p.appendChild(d),n.appendChild(p),r.appendChild(n),r}function Pe(t,e="chatbot-product-card-3d"){t&&(t.classList.add(e),t.addEventListener("mousemove",o=>{const s=t.getBoundingClientRect(),r=(o.clientX-s.left)/s.width,a=((o.clientY-s.top)/s.height-.5)*8,n=(r-.5)*-8,p=4;t.style.transform=`perspective(800px) rotateX(${a}deg) rotateY(${n}deg) translateY(-${p}px)`}),t.addEventListener("mouseleave",()=>{t.style.transform=""}))}function Oe(){const t=document.createElement("div");return t.className="chatbot-message bot msg-enter-bot",t.setAttribute("data-skeleton","true"),t.innerHTML=`
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `,t}function He(t,e,o){if(!t||t.length===0)return null;const s=document.createElement("div");return s.className="chatbot-suggestion-chips",t.forEach(r=>{const l=document.createElement("button");l.type="button",l.className="suggestion-chip",l.textContent=r,l.addEventListener("click",()=>e(r)),he(l,{strength:.1,radius:50}),s.appendChild(l)}),s}const je='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';function se(t,e={}){if(!t||!t.items||!Array.isArray(t.items))return null;const{items:o,total:s}=t,{onCheckout:r,onAddMore:l,onUpdateQty:a,onRemove:n}=e,p=document.createElement("div");p.className="chatbot-section-card chatbot-cart-card msg-enter-product chatbot-cart-card-premium";const i=`$${(typeof s=="number"?s:parseFloat(String(s).replace(/[^0-9.]/g,""))||0).toFixed(2)}`,d=o.reduce((m,w)=>m+(w.quantity||1),0),u=d===1?"item":"items",b=t.subtotalLabel||`Subtotal (${d} ${u})`;if(o.length===0)return p.innerHTML=`
            <div class="chatbot-cart-card-body">
                <div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>
            </div>
        `,p;const c=document.createElement("div");c.className="chatbot-cart-card-body",o.forEach(m=>{const w=document.createElement("div");w.className="chatbot-cart-item-row";const V=m.quantity!=null?m.quantity:1,U=m.title||m.name||"Product",$=m.price!=null?typeof m.price=="string"?m.price:`$${Number(m.price).toFixed(2)}`:"$0.00",j=m.image&&String(m.image).trim()?m.image:"https://placehold.co/80x80?text=Product",C=m.badge?`<span class="chatbot-cart-item-badge">${m.badge}</span>`:"";w.innerHTML=`
            <div class="chatbot-cart-item-thumb-wrap">
                <img class="chatbot-cart-item-img" src="${j}" alt="${U.slice(0,40)}" />
                ${C}
            </div>
            <div class="chatbot-cart-item-details">
                <div class="chatbot-cart-item-name">${U}</div>
                <div class="chatbot-cart-item-price">${$}</div>
                <div class="chatbot-cart-item-actions">
                    <div class="chatbot-cart-qty-pill">
                        <button type="button" class="chatbot-cart-qty-btn" data-action="minus" aria-label="Decrease">−</button>
                        <span class="chatbot-cart-qty-num">${V}</span>
                        <button type="button" class="chatbot-cart-qty-btn" data-action="plus" aria-label="Increase">+</button>
                    </div>
                    <button type="button" class="chatbot-cart-remove-btn" aria-label="Remove">${je}</button>
                </div>
            </div>
        `;const L=w.querySelector('[data-action="minus"]'),E=w.querySelector('[data-action="plus"]'),q=w.querySelector(".chatbot-cart-qty-num"),Y=w.querySelector(".chatbot-cart-remove-btn");a&&q&&(L==null||L.addEventListener("click",()=>{const D=Math.max(0,(parseInt(q.textContent,10)||1)-1);q.textContent=String(D),a(m,D)}),E==null||E.addEventListener("click",()=>{const D=(parseInt(q.textContent,10)||1)+1;q.textContent=D,a(m,D)})),n&&Y&&Y.addEventListener("click",()=>n(m)),c.appendChild(w)});const v=document.createElement("div");v.className="chatbot-cart-summary",v.innerHTML=`
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
    `;const g=document.createElement("button");return g.type="button",g.className="chatbot-cart-checkout-btn-premium",g.innerHTML='Proceed to Checkout <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',r&&g.addEventListener("click",()=>r()),c.appendChild(v),c.appendChild(g),p.appendChild(c),p}function ue(t){if(!t||!Array.isArray(t))return null;const e=document.createElement("div");e.className="chatbot-section-card chatbot-order-history-card msg-enter-product";const o='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',s=a=>{const n=(a||"").toLowerCase();return n==="delivered"?"order-status-delivered":n==="shipped"?"order-status-shipped":n==="processing"?"order-status-processing":n==="cancelled"?"order-status-cancelled":"order-status-default"},r="https://placehold.co/80x80?text=Product";let l=t.length===0?'<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>':t.map(a=>{const n=typeof a.total=="number"?`$${a.total.toFixed(2)}`:a.total!=null?`$${Number(a.total).toFixed(2)}`:"—",p=(a.items||[]).length===0?'<span class="chatbot-order-item-line">No items</span>':(a.items||[]).map(h=>{const i=h.image&&String(h.image).trim()?h.image:r,d=(h.title||"Item").replace(/</g,"&lt;"),u=h.price?` · ${h.price}`:"";return`<div class="chatbot-order-item-row">
                        <div class="chatbot-order-item-thumb-wrap">
                            <img src="${i}" alt="${d.slice(0,40)}" class="chatbot-order-item-img" onerror="this.src='${r}';this.onerror=null;" />
                        </div>
                        <span class="chatbot-order-item-line">${d}${u}</span>
                    </div>`}).join("");return`
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${a.id||"—"}</span>
                        <span class="chatbot-order-date">${a.date||"—"}</span>
                        <span class="chatbot-order-status ${s(a.status)}">${a.status||"—"}</span>
                    </div>
                    <div class="chatbot-order-items">${p}</div>
                    <div class="chatbot-order-total">Total ${n}</div>
                </div>
            `}).join("");return e.innerHTML=`
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${o}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${l}</div>
    `,e}const be=['<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>'];function Ye(t,e={}){const{onAction:o}=e,s=document.createElement("div");return s.className="chatbot-quick-actions-grid",t.forEach((r,l)=>{const a=r.icon!=null?r.icon:be[l]??be[0],n=document.createElement("div");n.className="quick-action-card msg-enter-product",n.innerHTML=`
            <div class="quick-action-icon-box">${a}</div>
            <div class="quick-action-info">
                <span class="quick-action-title">${(r.title||"").replace(/</g,"&lt;")}</span>
                <span class="quick-action-desc">${(r.desc||"").replace(/</g,"&lt;")}</span>
            </div>
        `;const p=r.message!=null?r.message:r.title||"";n.onclick=()=>o("quickAction",{...r,message:p}),s.appendChild(n)}),s}function le(t){if(!t||typeof t!="string")return null;const e=t;if(!/Order Confirmed!|Order ID:|Ships to:/i.test(e))return null;const o=e.match(/\*\*Order ID:\*\*\s*`?([A-Z0-9-]+)`?/i)||e.match(/Order ID:\s*`?([A-Z0-9-]+)`?/i),s=o?o[1].trim():`ORD-${Math.floor(1e4+Math.random()*9e4)}`,r=e.match(/\*\*Total:\*\*\s*\$?([\d.,]+)/i)||e.match(/Total:\s*\$?([\d.,]+)/i),l=r?parseFloat(r[1].replace(/,/g,"")):0,a=e.match(/\*\*Payment:\*\*\s*[^\n·]*([^\n]+?)(?=\n\n|\n\*\*|$)/i)||e.match(/Payment:\s*[^\n·]*([^\n]+)/i);let n="cod";if(a){const u=a[1].toLowerCase();(u.includes("prepaid")||u.includes("card")||u.includes("online"))&&(n="prepaid")}const p=e.match(/\*\*Ships to:\*\*\s*([^\n]+)/i)||e.match(/Ships to:\s*([^\n]+)/i),h=p?p[1].trim():"—",i=[],d=e.indexOf("| Item | Price | Size |");if(d!==-1){const b=e.slice(d).split(/\r?\n/).filter(c=>c.trim().startsWith("|")&&!c.includes(":---"));for(const c of b){const v=c.split("|").map(g=>g.trim()).filter(Boolean);if(v.length>=2&&v[0]!=="Item"){const g=v[0]||"Item",m=v[1]||"$0",w=parseFloat(m.replace(/[^0-9.]/g,""))||0,V=v[2]||"N/A";i.push({name:g,price:w,size:V,quantity:1,image:null})}}}return i.length===0&&l>0&&i.push({name:"Order items",price:l,quantity:1,image:null}),{orderId:s,items:i,total:l,paymentMethod:n,shippingAddress:h}}function ge(t,e={}){const{step:o,data:s,state:r}=t,{onAction:l}=e,a=document.createElement("div");a.className="chatbot-checkout-wrapper msg-enter-product";const n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',p='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',h='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';if(o==="mobile"){a.innerHTML=`
            <div class="checkout-form-card checkout-mobile-card">
                <div class="checkout-field">
                    <label class="checkout-label-uppercase">MOBILE NUMBER</label>
                    <div class="checkout-mobile-input-wrap">
                        <span class="checkout-mobile-icon">${n}</span>
                        <span class="checkout-mobile-prefix">+91</span>
                        <input type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="10" class="checkout-mobile-input" placeholder="9876543210" id="checkout-mobile" value="${(r.mobile||"").replace(/\D/g,"").slice(0,10)}" autocomplete="tel" />
                    </div>
                </div>
                <button type="button" class="checkout-send-otp-btn" id="mobile-submit-btn">
                    Send OTP ${h}
                </button>
                <div class="checkout-secure-note">
                    ${p}
                    <span>Encrypted and secure</span>
                </div>
            </div>
        `;const i=a.querySelector("#checkout-mobile"),d=a.querySelector("#mobile-submit-btn"),u=()=>{const b=(i.value||"").replace(/\D/g,"");d.disabled=b.length!==10};i.addEventListener("input",()=>{i.value=i.value.replace(/\D/g,"").slice(0,10),u()}),u(),d.addEventListener("click",()=>{const b=(i.value||"").replace(/\D/g,"").slice(0,10);b.length===10&&l("submitMobile",{mobile:b})})}else if(o==="otp"){const i=r.mobile?"+91 "+String(r.mobile).replace(/(\d{2})(\d{4})(\d+)/,"$1 $2 $3").trim():"+91 ••••••••••";a.innerHTML=`
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
                    Verify & Continue ${h}
                </button>
            </div>
        `;const d=a.querySelectorAll(".checkout-otp-box");d.forEach((u,b)=>{u.addEventListener("input",c=>{const v=c.target.value.replace(/\D/g,"").slice(0,1);c.target.value=v,v&&b<3&&d[b+1].focus()}),u.addEventListener("keydown",c=>{c.key==="Backspace"&&!c.target.value&&b>0&&d[b-1].focus()})}),d[0]&&d[0].focus(),a.querySelector("#otp-verify-btn").addEventListener("click",()=>{const u=Array.from(a.querySelectorAll(".checkout-otp-box")).map(b=>b.value||"").join("").slice(0,4);l("verifyOtp",{code:u})}),a.querySelector(".checkout-change-number-link").addEventListener("click",()=>l("changeAuthMode",{mode:"mobile"})),a.querySelector(".checkout-resend-link").addEventListener("click",()=>l("submitMobile",{mobile:r.mobile}))}else if(o==="address"){const i=s.addresses||[],d=r.selectedAddressId,u='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',b='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/></svg>',c='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';let v=i.map($=>{const j=($.type||"home").toUpperCase(),C=($.type||"home").toLowerCase()==="home";return`
            <div class="checkout-address-card ${$.id===d?"selected":""}" data-id="${$.id}">
                <div class="address-icon-box ${C?"address-icon-home":""}">${C?u:b}</div>
                <div class="address-info">
                    <div class="address-header">
                        <span class="address-name">${$.name}</span>
                        <span class="address-type-badge">${j}</span>
                    </div>
                    <div class="address-text">${$.street}</div>
                    <div class="address-text">${$.city}, ${$.state||""} ${$.zip}</div>
                    <div class="address-phone">${c} ${$.phone}</div>
                </div>
                ${$.id===d?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
            </div>`}).join("");a.innerHTML=`
            <div class="checkout-address-step">
                ${v}
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
                ${d!=null?'<button type="button" class="checkout-primary-btn" id="addr-continue-btn">Continue to Payment '+h+"</button>":""}
            </div>
        `,a.querySelectorAll(".checkout-address-card").forEach($=>{$.onclick=()=>l("selectAddress",{id:$.dataset.id})});const g=a.querySelector("#add-address-btn"),m=a.querySelector("#add-address-form-wrap"),w=a.querySelector("#addr-cancel-btn"),V=a.querySelector("#addr-save-btn");g&&m&&g.addEventListener("click",()=>{m.style.display=m.style.display==="none"?"block":"none"}),w&&m&&w.addEventListener("click",()=>{m.style.display="none"}),V&&m&&V.addEventListener("click",()=>{var Y,D,J,K,F,f;const $=(((Y=a.querySelector("#addr-name"))==null?void 0:Y.value)||"").trim(),j=(((D=a.querySelector("#addr-street"))==null?void 0:D.value)||"").trim(),C=(((J=a.querySelector("#addr-city"))==null?void 0:J.value)||"").trim(),L=(((K=a.querySelector("#addr-state"))==null?void 0:K.value)||"").trim(),E=(((F=a.querySelector("#addr-zip"))==null?void 0:F.value)||"").trim(),q=(((f=a.querySelector("#addr-phone"))==null?void 0:f.value)||"").trim();j&&(l("addAddress",{address:{type:"home",name:$,street:j,city:C,state:L,zip:E,phone:q}}),m.style.display="none")});const U=a.querySelector("#addr-continue-btn");U&&(U.onclick=()=>l("continueToPayment"))}else if(o==="payment"){const i=r.paymentMethod,d=Number(s.subtotal)||0,u=d*.1,b=d+u;a.innerHTML=`
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
                    <div class="summary-row"><span>Subtotal</span><span>$${d.toFixed(2)}</span></div>
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
        `,a.querySelectorAll(".checkout-method-card").forEach(v=>{v.onclick=()=>l("selectPayment",{method:v.dataset.method})});const c=a.querySelector("#place-order-btn");c&&(c.onclick=()=>{i&&l("placeOrder")})}else if(o==="confirmation"){const i=r.orderId||s.orderId||`ORD-${String(Math.floor(Math.random()*1e4)).padStart(4,"0")}`,d=s.orderItems||r.orderItems||[],u=r.subtotal!=null?Number(r.subtotal):d.reduce((L,E)=>{const q=typeof E.price=="string"?parseFloat(String(E.price).replace(/[^0-9.]/g,""))||0:Number(E.price)||0;return L+q*(E.quantity||1)},0),b=(r.paymentMethod||"cod").toLowerCase(),c=b==="prepaid"?"Card / Prepaid":"Cash on Delivery",v=b==="prepaid"?"💳":"💵",g=r.selectedAddressId!=null?r.selectedAddressId:0,m=r.addresses||[],w=m.find(L=>(L.id??L)===g)||m[g],V=w?typeof w=="string"?w:[w.street,w.city,w.state,w.zip].filter(Boolean).join(", "):"—",U=w&&typeof w!="string"&&w.city?`${w.city}${w.state?", "+w.state:""} ${w.zip||""}`.trim():"",$="https://placehold.co/80x80?text=Product",j=d.length?`<div class="order-product">
                <div class="order-product-label">Products ordered</div>
                ${d.map(L=>{const E=L.quantity||1,q=typeof L.price=="string"?parseFloat(String(L.price).replace(/[^0-9.]/g,""))||0:Number(L.price)||0,Y=q*E,D=L.image&&String(L.image).trim()?L.image:$,J=(L.name||L.title||"").replace(/</g,"&lt;");return`<div class="order-product-row">
                        <div class="order-product-img-wrap">
                            <img src="${D}" alt="${J.slice(0,40)}" class="order-product-img" onerror="this.src='${$}';this.onerror=null;" />
                        </div>
                        <div class="order-product-info">
                            <span class="order-product-name">${J}</span>
                            <span class="order-product-meta">Qty: ${E} × $${q.toFixed(2)} = $${Y.toFixed(2)}</span>
                        </div>
                    </div>`}).join("")}
            </div>`:"",C=`
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
            </div>`;a.innerHTML=`
            <div class="order-card checkout-confirmation-premium">
                <div class="order-header">
                    <div class="order-header-glow"></div>
                    <div class="order-header-badge">✅</div>
                    <h3 class="order-header-title">Order Confirmed!</h3>
                    <div class="order-header-id">${i}</div>
                </div>
                ${j}
                <div class="order-summary">
                    <div class="order-summary-row order-summary-total">
                        <span class="order-summary-label">Total</span>
                        <span class="order-summary-value">$${u.toFixed(2)}</span>
                    </div>
                    <div class="order-summary-row order-summary-payment">
                        <span class="order-summary-label">Payment</span>
                        <span class="order-payment-badge">${v} ${c}</span>
                    </div>
                </div>
                <div class="order-shipping">
                    <div class="order-shipping-block">
                        <span class="order-shipping-label">📍 Shipping Address</span>
                        <span class="order-shipping-value">${V}</span>
                        ${U?`<span class="order-shipping-value order-shipping-value-secondary">${U}</span>`:""}
                    </div>
                    <div class="order-shipping-block">
                        <span class="order-shipping-label">🚚 Delivery Status</span>
                        <span class="order-shipping-value">Your order is being processed.</span>
                    </div>
                </div>
                <div class="order-status">
                    <p class="order-status-message">Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                </div>
                ${C}
            </div>
        `}return a}const De='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Fe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';function Re(t,e){const o=document.createElement("div");o.className="chatbot-input-area",o.setAttribute("data-region","input-bar");const s=e.placeholders&&e.placeholders.length>0?e.placeholders:ye,r=e.inputPlaceholder||"Ask anything about orders, products...",l=document.createElement("div");l.className="chatbot-input-wrap";const a=document.createElement("button");a.type="button",a.className="chatbot-attach-btn",a.setAttribute("aria-label","Attach"),a.innerHTML=De;const n=document.createElement("input");n.type="text",n.placeholder=r,n.className="chatbot-input",n.setAttribute("aria-label","Message input");const p=document.createElement("button");p.type="button",p.className="chatbot-send-btn",p.setAttribute("aria-label","Send message"),p.innerHTML=Fe;const h=()=>{const c=n.value.trim().length>0;p.classList.toggle("active",c),p.disabled=!c};n.addEventListener("input",h),n.addEventListener("focus",h),n.addEventListener("blur",h),h();let i=0;const u=setInterval(()=>{!n.matches(":focus")&&s.length>1&&(i=(i+1)%s.length,n.placeholder=s[i])},3500);n.addEventListener("focus",()=>{n.placeholder=e.inputPlaceholder||"Ask anything about orders, products..."}),n.addEventListener("blur",()=>{n.placeholder=s[i%s.length]});const b=()=>{const c=n.value.trim();c&&(t(c),n.value="",i=0,n.placeholder=s[0],h())};return n.addEventListener("keypress",c=>{c.key==="Enter"&&b()}),p.addEventListener("click",b),l.appendChild(a),l.appendChild(n),l.appendChild(p),o.appendChild(l),he(p,{strength:.12,radius:60}),o.destroy=()=>clearInterval(u),o}function Ue(t="Thinking..."){const e=document.createElement("div");e.className="chatbot-message bot typing-indicator-wrapper msg-enter-bot";const o=document.createElement("div");o.className="chatbot-message-avatar",o.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';const s=document.createElement("div");return s.className="message-bubble typing-indicator",s.setAttribute("aria-live","polite"),s.setAttribute("role","status"),s.innerHTML='<span class="dot"></span><span class="dot"></span><span class="dot"></span>',e.appendChild(o),e.appendChild(s),e.setStatus=()=>{},e}const We="http://localhost:3000";function Ve(){if(typeof window>"u"||!window.location)return!1;const t=window.location.hostname||"";return t==="localhost"||t==="127.0.0.1"}function ve(t){return t!=null&&t!==""?String(t).replace(/\/$/,""):Ve()?We:""}async function _e(t,e=[],o,s,r,l="default",a=null,n=null,p=null,h=null){var u,b;const i=ve(h),d=i?`${i}/api/chat`:"/api/chat";try{const c=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,history:e,sessionId:l})});if(!c.ok){const w=await c.text();throw console.error("AI API error",c.status,w),new Error(c.status===503?"Backend not configured (missing API key).":`API ${c.status}`)}const v=c.body.getReader(),g=new TextDecoder;let m="";for(;;){const{value:w,done:V}=await v.read();if(V)break;m+=g.decode(w,{stream:!0});const U=m.split(`
`);m=U.pop();for(const $ of U)if($.startsWith("data: ")){const j=$.replace("data: ","").trim();try{if(j){const C=JSON.parse(j);C.type==="text"&&o&&o(C.content),C.type==="carousel"&&s&&s(C.content),C.type==="cart"&&n&&n(C.content),C.type==="orderHistory"&&p&&p(C.content),C.type==="status"&&a&&a(C.content),C.type==="done"&&r&&r()}}catch{}}}}catch(c){console.error("AI Service Error:",c);const v=(u=c==null?void 0:c.message)!=null&&u.includes("API key")||(b=c==null?void 0:c.message)!=null&&b.includes("503")?"Chat is unavailable. The server needs an API key (check deployment settings).":"My neural network is temporarily offline. Please try again.";o&&o(v),r&&r()}}function ce(t){return ve(t)}async function ne(t,e){const s=await(await fetch(`${ce(e)}/api/cart?sessionId=${encodeURIComponent(t)}`)).json();return{items:s.items||[],total:s.total!=null?s.total:0}}async function fe(t,e,o,s){return(await fetch(`${ce(s)}/api/cart/add`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,title:String(e||"").trim(),size:o||void 0})})).json()}async function xe(t,e,o){return(await fetch(`${ce(o)}/api/cart/remove-one`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,title:String(e||"").trim()})})).json()}async function ie(t,e,o){return(await fetch(`${ce(o)}/api/cart/remove-all`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,title:String(e||"").trim()})})).json()}function Ge(t,e=[],o=4){if(!e||e.length===0)return[];const s=(t||"").toLowerCase(),r=e.map(a=>{const n=a.toLowerCase();let p=0;const h=n.split(/\s+/).filter(i=>i.length>2);for(const i of h)s.includes(i)&&(p+=2),s.includes(i.replace(/[^a-z0-9]/g,""))&&(p+=1);return a.toLowerCase().includes("sneaker")&&(s.includes("sneaker")||s.includes("shoe"))&&(p+=3),a.toLowerCase().includes("trending")&&(s.includes("trending")||s.includes("bestseller")||s.includes("popular"))&&(p+=3),a.toLowerCase().includes("sale")&&(s.includes("sale")||s.includes("price")||s.includes("$"))&&(p+=2),a.toLowerCase().includes("running")&&s.includes("running")&&(p+=3),a.toLowerCase().includes("jacket")&&(s.includes("jacket")||s.includes("apparel"))&&(p+=2),{label:a,score:p}});r.sort((a,n)=>n.score-a.score);const l=r.filter(a=>a.score>0).slice(0,o).map(a=>a.label);return l.length===0&&s.length<500?e.slice(0,Math.min(3,o)):l}function Xe(t){if(!t)return null;const e=document.createElement("div");return e.className="chatbot-toast-host",t.appendChild(e),{showToast:({title:s,message:r,image:l,duration:a=3e3}={})=>{const n=document.createElement("div");n.className="chatbot-toast",n.innerHTML=`
            ${l?`<div class="chatbot-toast-image-wrap"><img src="${l}" alt="" /></div>`:""}
            <div class="chatbot-toast-content">
                ${s?`<div class="chatbot-toast-title">${s}</div>`:""}
                ${r?`<div class="chatbot-toast-message">${r}</div>`:""}
            </div>
        `,e.appendChild(n),requestAnimationFrame(()=>{n.classList.add("chatbot-toast-visible")}),setTimeout(()=>{n.classList.remove("chatbot-toast-visible"),n.addEventListener("transitionend",()=>{n.remove()},{once:!0})},a)}}}function Je(t){const e=Se(t);console.log("Chatbot initialized in Shadow DOM with config:",e);let o=sessionStorage.getItem("ecom-session-id");o||(o="sess_"+Math.random().toString(36).substring(2,9),sessionStorage.setItem("ecom-session-id",o));const s=e.parentElement||document.body,r=s.querySelector("#ecom-chatbot-host");r&&r.remove();const l=document.createElement("div");l.id="ecom-chatbot-host",s.appendChild(l);const a=l.attachShadow({mode:"open"}),n=Xe(a),p=document.createElement("style");p.textContent=Ee(e),a.appendChild(p);const h=document.createElement("div");h.className="ecom-chatbot-wrapper";const i=document.createElement("div");i.className="chatbot-window";const d=Me();function u(){d.scrollTo({top:d.scrollHeight,behavior:"smooth"})}function b(){let f=null;Array.from(d.children).filter(x=>x.classList&&!x.hasAttribute("data-skeleton")&&(x.classList.contains("chatbot-message")||x.classList.contains("typing-indicator-wrapper"))).forEach(x=>{const k=x.classList.contains("user"),I=x.classList.contains("bot")||x.classList.contains("typing-indicator-wrapper"),O=k?"user":I?"bot":null;O&&(x.classList.remove("group-same","group-first"),f===O?x.classList.add("group-same"):x.classList.add("group-first"),f=O)})}let c=[];try{const f=sessionStorage.getItem("ecom-chat-history");f&&(c=JSON.parse(f),console.log("Restored chat history from session:",c))}catch(f){console.error("Failed to parse session chat history",f)}let v=0,g=null;const m=async f=>{const y=i.querySelector(".chatbot-presets");y&&y.remove();const x=i.querySelector(".chatbot-quick-actions-grid");x&&x.remove();const k=Q(f,!1,e);d.appendChild(k),u();const I=Ue();d.appendChild(I),u();const O=[...c];c.push({role:"user",content:f}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c));let S=null,A="",N=!1,M=null,W=null,G=null;const Z=()=>{I.parentNode&&d.removeChild(I),G&&G.parentNode&&d.removeChild(G)},_=()=>{if(C)return;const z=h.querySelector(".chatbot-toggle-btn");if(z&&!z.querySelector(".chatbot-ripple-ring")){const T=document.createElement("span");T.className="chatbot-ripple-ring",z.appendChild(T),setTimeout(()=>T.remove(),1400)}};await _e(f,O,z=>{Z(),N||(N=!0,_()),S||(S=Q("",!0,e,m),d.appendChild(S),M=S),A+=z;const T=S.querySelector(".chatbot-bubble");T&&(T.innerHTML=pe(A)),u()},z=>{Z(),N||(N=!0,_());const T=["Here's what we have:","Have a look at these.","Here are some picks."],B=T[Math.floor(Math.random()*T.length)];(!S||!A.trim())&&(S=Q(B,!0,e,m),d.appendChild(S),A=B);const X=me(z,V,e);X?(W=z,M=X,d.appendChild(X),c.push({role:"bot",content:"Displayed a product carousel to the user.",carousel:z})):M=S,sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)),b(),u()},()=>{Z(),A&&(c.push({role:"bot",content:A}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)));const z=le(A||"");if(z&&M){const R={step:"confirmation",data:{orderItems:z.items,addresses:[{street:z.shippingAddress}],subtotal:z.total},state:{orderId:z.orderId,paymentMethod:z.paymentMethod,subtotal:z.total,orderItems:z.items,addresses:[{street:z.shippingAddress}],selectedAddressId:0}},P=ge(R,{}),H=M.querySelector(".chatbot-message-content"),te=M.querySelector(".chatbot-bubble");H?(H.innerHTML="",H.appendChild(P)):te?te.replaceWith(P):(M.innerHTML="",M.appendChild(P)),b(),u()}const T=/added to (your )?(cart|shopping bag|bag)/i.test(A||""),B=/how would you like to pay|COD.*Prepaid|Prepaid.*COD|Cash on Delivery|Online Payment/i.test(A||""),X=/one-time password|OTP|sent to your phone|enter the.*digit code|verify your identity|for demo purposes.*code/i.test(A||""),oe=/shipping address|saved addresses|add a new one|get your shipping|delivery address/i.test(A||"");let ee,re=R=>m(R);if(X||oe?ee=[]:T?ee=["Proceed to checkout","Browse more products"]:B?(ee=["COD","PREPAID"],re=R=>m(R==="COD"?"cod":R==="PREPAID"?"prepaid":R)):ee=Ge(A||(W?(W||[]).map(R=>R.title||"").join(" "):""),e.suggestionChips||[],4),ee.length>0&&M){const R=He(ee,re);R.classList.add("chatbot-chips-below");const P=M.querySelector(".chatbot-bubble");if(P){let H=M.querySelector(".chatbot-message-content");H||(H=document.createElement("div"),H.className="chatbot-message-content",P.parentNode.insertBefore(H,P),H.appendChild(P)),H.appendChild(R)}else M.appendChild(R)}b(),u()},o,z=>{I.setStatus&&I.setStatus(z),z&&/searching|product|looking for|options|recommend/i.test(z)&&!G&&(G=Oe(),d.appendChild(G),u())},z=>{Z(),N||(N=!0,_()),S||(S=Q("",!0,e,m),d.appendChild(S));const T=S.querySelector(".chatbot-bubble");let B=S.querySelector(".chatbot-message-content");!B&&T&&(B=document.createElement("div"),B.className="chatbot-message-content",T.parentNode.insertBefore(B,T),B.appendChild(T));const X=R=>({onCheckout:()=>m("Proceed to checkout"),onUpdateQty:async(P,H)=>{const te=P.quantity!=null?P.quantity:1,de=P.title||P.name||"";if(H<=0)await ie(o,de,e.apiBaseUrl);else if(H>te)for(let ae=te;ae<H;ae++)await fe(o,de,P.size,e.apiBaseUrl);else for(let ae=H;ae<te;ae++)await xe(o,de,e.apiBaseUrl);const we=await ne(o,e.apiBaseUrl);R(we)},onRemove:async P=>{const H=P.title||P.name||"";await ie(o,H,e.apiBaseUrl);const te=await ne(o,e.apiBaseUrl);R(te)}});let oe;oe=R=>{const P=B.querySelector(".chatbot-cart-card");if(!P)return;const H=se(R,X(oe));P.replaceWith(H)};const ee=se(z,X(oe));ee&&B?B.appendChild(ee):ee&&S.appendChild(ee);const re=A||"Here’s what’s in your cart:";c.push({role:"bot",content:re,cart:z}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)),b(),u()},z=>{Z(),N||(N=!0,_()),S||(S=Q("",!0,e,m),d.appendChild(S));const T=S.querySelector(".chatbot-bubble");let B=S.querySelector(".chatbot-message-content");!B&&T&&(B=document.createElement("div"),B.className="chatbot-message-content",T.parentNode.insertBefore(B,T),B.appendChild(T));const X=ue(z);X&&B?B.appendChild(X):X&&S.appendChild(X);const oe=A||"Here’s your order history.";c.push({role:"bot",content:oe,orderHistory:z}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(c)),b(),u()},e.apiBaseUrl||void 0)},w=Re(m,e),V=(f,y)=>{const x=y?` (Size: ${y})`:"",k=Q(`✅ Added 1x **${f.title}** ${x} to your cart for ${f.price}!`,!0,e);d.appendChild(k),b(),u(),window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:f,selectedSize:y}})),g&&g(v+1),n&&f&&n.showToast({title:"Added to cart",message:`${f.title||""} · ${f.price||""}`,image:f.image})};if(c.length>0)c.forEach(f=>{if(f.role==="user")d.appendChild(Q(f.content,!1,e));else if(f.role==="bot")if(f.carousel){const y=me(f.carousel,V,e);y&&d.appendChild(y)}else if(f.cart){const y=Q(f.content||"Here’s what’s in your cart:",!0,e),x=y.querySelector(".chatbot-bubble");if(x){const k=document.createElement("div");k.className="chatbot-message-content",x.parentNode.insertBefore(k,x),k.appendChild(x);const I=A=>({onCheckout:()=>m("Proceed to checkout"),onUpdateQty:async(N,M)=>{const W=N.quantity!=null?N.quantity:1,G=N.title||N.name||"";if(M<=0)await ie(o,G,e.apiBaseUrl);else if(M>W)for(let _=W;_<M;_++)await fe(o,G,N.size,e.apiBaseUrl);else for(let _=M;_<W;_++)await xe(o,G,e.apiBaseUrl);const Z=await ne(o,e.apiBaseUrl);A(Z)},onRemove:async N=>{const M=N.title||N.name||"";await ie(o,M,e.apiBaseUrl);const W=await ne(o,e.apiBaseUrl);A(W)}});let O;O=A=>{const N=k.querySelector(".chatbot-cart-card");if(!N)return;const M=se(A,I(O));N.replaceWith(M)};const S=se(f.cart,I(O));S&&k.appendChild(S)}d.appendChild(y)}else if(f.orderHistory){const y=Q(f.content||"Here’s your order history.",!0,e),x=y.querySelector(".chatbot-bubble");if(x){const k=document.createElement("div");k.className="chatbot-message-content",x.parentNode.insertBefore(k,x),k.appendChild(x);const I=ue(f.orderHistory);I&&k.appendChild(I)}d.appendChild(y)}else if(f.content&&le(f.content)){const y=le(f.content),x={step:"confirmation",data:{orderItems:y.items,addresses:[{street:y.shippingAddress}],subtotal:y.total},state:{orderId:y.orderId,paymentMethod:y.paymentMethod,subtotal:y.total,orderItems:y.items,addresses:[{street:y.shippingAddress}],selectedAddressId:0}},k=Q("",!0,e,m),I=k.querySelector(".chatbot-bubble"),O=ge(x,{});I?I.replaceWith(O):k.appendChild(O),d.appendChild(k)}else f.content&&f.content!=="Displayed a product carousel to the user."&&d.appendChild(Q(f.content,!0,e))}),b(),u();else{const f=e.welcomeMessage??"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",y=Q(f,!0,e);d.appendChild(y);const x=[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],k=e.quickActions&&e.quickActions.length>=4?e.quickActions.slice(0,4):x,I=Ye(k,{onAction:(O,S)=>{const A=S.message!=null&&String(S.message).trim()?S.message:S.title;A&&m(A)}});d.appendChild(I),c.push({role:"bot",content:f})}const U=document.createElement("div");U.className="chatbot-orb-wrapper";const $=document.createElement("button");$.type="button",$.className="chatbot-toggle-btn",$.setAttribute("aria-label","Open chat");const j='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';$.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:j,U.appendChild($);let C=!1;const L=sessionStorage.getItem("ecom-chatbot-open")==="true",E=document.createElement("div");E.className="welcome-bubble",E.innerHTML='<span style="vertical-align: middle; font-size: 14px; font-weight: 600;">Need help? 👋</span>';function q(){setTimeout(()=>{C?q():(E.classList.remove("hidden"),setTimeout(()=>{E.classList.add("hidden"),q()},5e3))},15e3)}setTimeout(()=>{E.classList.add("hidden"),q()},5e3);const Y=()=>{C=!0,sessionStorage.setItem("ecom-chatbot-open","true"),E.classList.add("hidden"),i.classList.add("is-open"),$.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:j,setTimeout(u,50)},D=()=>{C=!1,sessionStorage.setItem("ecom-chatbot-open","false"),i.classList.remove("is-open"),$.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:j},J=()=>{E.classList.add("hidden"),C?D():Y()};$.addEventListener("click",J);const K=Le(e,{onClose:D,onCartClick:()=>{Y(),m("View Cart")},cartCount:0});g=f=>{v=Math.max(0,f||0);const y=K.querySelector('button[aria-label="View cart"]');if(y){let k=y.querySelector(".chatbot-cart-badge");v>0?(k||(k=document.createElement("span"),k.className="chatbot-cart-badge",y.appendChild(k)),k.textContent=v>99?"99+":String(v)):k&&k.remove()}let x=$.querySelector(".chatbot-launcher-badge");v>0?(x||(x=document.createElement("span"),x.className="chatbot-launcher-badge",$.appendChild(x)),x.textContent=v>99?"99+":String(v),x.classList.remove("cart-badge-pop"),x.offsetWidth,x.classList.add("cart-badge-pop")):x&&x.remove()},i.appendChild(K),i.appendChild(d),i.appendChild(w);const F=document.createElement("div");F.className="chatbot-footer",F.innerHTML="<p>Powered by Aura AI</p>",i.appendChild(F),window.EcomChatbot&&(window.EcomChatbot.open=Y,window.EcomChatbot.close=D,window.EcomChatbot.toggle=J,window.EcomChatbot.sendMessage=f=>{Y(),m(f)},window.EcomChatbot.resetAnimation=()=>{}),h.appendChild(i),h.appendChild(E),h.appendChild(U),a.appendChild(h),L&&Y(),function(){const f=["Hi! I'm Aura, your shopping assistant.","I can help you discover products.","I can track your orders for you.","Looking for the best deals? 🔥","What brings you here today?"],y=a.getElementById("typewriter-bubble");if(!y)return;let x=0,k=0,I=!1,O=!1;const S=68,A=38,N=1800,M=320;y.style.display="inline-block",y.style.minWidth="10px";const W=document.createElement("span");W.textContent="|",W.style.cssText="display:inline-block;margin-left:2px;animation:twCursor 0.8s steps(1) infinite;color:inherit;font-weight:300;opacity:0.7";const G=document.createElement("style");G.textContent="@keyframes twCursor{0%,100%{opacity:1}50%{opacity:0}}",a.appendChild(G),y.appendChild(W);function Z(){if(O)return;const _=f[x];if(I){if(k--,y.firstChild&&y.firstChild!==W&&(y.firstChild.textContent=_.slice(0,k)),k===0){I=!1,x=(x+1)%f.length,O=!0,setTimeout(()=>{O=!1,Z()},M);return}}else if(k++,y.firstChild&&y.firstChild!==W?y.firstChild.textContent=_.slice(0,k):y.insertBefore(document.createTextNode(_.slice(0,k)),W),k===_.length){O=!0,setTimeout(()=>{O=!1,I=!0,Z()},N);return}setTimeout(Z,I?A:S)}y.innerHTML="",y.appendChild(document.createTextNode("")),y.appendChild(W),Z()}()}window.EcomChatbot={init:t=>{Je(t)}};
