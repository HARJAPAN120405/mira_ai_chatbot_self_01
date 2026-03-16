(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const he=["Ask about products...","Find sneakers under $100...","Compare two products...","Show trending items...","What's on sale?","Recommend something for me..."],me=["Show sneakers under $100","Trending items","Best running shoes","Summer jackets","What's on sale?","Add to cart"],ue=["Thinking...","Searching products...","Analyzing your request...","Looking for the best options..."],be={botName:"Aura Concierge",botSubtitle:"Always Available",botAvatarUrl:"",position:"bottom-right",marginBottom:24,marginSide:24,primaryColor:"#2563eb",textColor:"#ffffff",backgroundColor:"#ffffff",headerStatus:"Always Available",quickActions:[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],autoDetectProduct:!0,greetingMessage:"Hi! I'm Aura, your shopping assistant. What can I help you with today?",inputPlaceholder:"Ask anything about orders, products...",placeholders:he,suggestionChips:me,welcomeMessage:"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",welcomeIconUrl:"",addToCartLabel:"Add to Cart",theme:"default",thinkingStatuses:ue,apiBaseUrl:""};function ge(t={}){return{...be,...t}}function fe(t){const e=t.position.includes("left"),o=t.primaryColor||"#2563eb",r="#4f46e5",s=`linear-gradient(135deg, ${o}, ${r})`,i=`linear-gradient(135deg, ${o}, ${r})`,a="linear-gradient(180deg, #f8fafc, #eef2ff)",n="0 20px 50px rgba(0,0,0,0.15)",p="0 6px 14px rgba(0,0,0,0.08)",h="#111827",d="#6b7280",l="1px solid #e5e7eb",u="16px",b="#60a5fa",m=`background: #fff; border: ${l};`,c=`
        background: #fff;
        border: ${l};
        border-radius: ${u};
        box-shadow: ${p};
    `;return`
        /* Premium E-Commerce Chatbot — ultra-smooth animations */
        :host {
            --primary-color: ${o};
            --primary-indigo: ${r};
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
            background: ${s};
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
        }

        /* --- INTERNAL COMPONENTS (Design-Chatbot-Widget) --- */
        
        /* Header — 64px, gradient, white text, slideDown on open */
        .chatbot-header {
            height: 64px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${s};
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
            background: ${s};
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
            color: ${h};
            box-shadow: ${p};
        }
        .chatbot-message.bot .chatbot-bubble:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .chatbot-message.user .chatbot-bubble {
            border-radius: 20px 20px 6px 20px;
            background: ${i};
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
            color: ${d};
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
            ${c}
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
            color: ${d};
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
            color: ${d};
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
            color: ${h};
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
            box-shadow: ${p};
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
            background: ${s};
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
            color: ${d};
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
            background: ${s};
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
            color: ${d};
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
            color: ${d};
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
            color: ${d};
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
            color: ${d};
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
            color: ${d};
        }
        .chatbot-order-items {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 8px;
        }
        .chatbot-order-item-line {
            font-size: 12px;
            color: ${h};
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
            color: ${d};
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
            color: ${d};
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
            color: ${d};
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
            background: ${s};
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
            color: ${d};
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
            color: ${d};
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
        .price-original { text-decoration: line-through; color: ${d}; font-size: 12px; margin-left: 6px; }

        /* Inline product card (inside stream) */
        .chatbot-inline-product {
            margin-top: 10px;
            ${m}
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
    `}const xe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>';function ye(t,e={}){const{onClose:o,onCartClick:r,cartCount:s=0}=e,i=document.createElement("header");i.className="chatbot-header";const a=t.botName??"Aura Concierge",n=t.headerStatus??"Always Available",p=document.createElement("div");p.className="chatbot-header-left";const h=document.createElement("div");if(h.className="chatbot-header-avatar",t.botAvatarUrl){const x=document.createElement("img");x.src=t.botAvatarUrl,x.alt=`${a} avatar`,h.appendChild(x)}else h.innerHTML=xe;const d=document.createElement("div");d.className="chatbot-header-info";const l=document.createElement("h3");l.className="chatbot-header-title",l.textContent=a;const u=document.createElement("div");u.className="chatbot-header-row";const b=document.createElement("span");b.className="chatbot-header-status-dot";const m=document.createElement("span");m.className="chatbot-header-status",m.textContent=n,u.appendChild(b),u.appendChild(m),d.appendChild(l),d.appendChild(u),p.appendChild(h),p.appendChild(d),i.appendChild(p);const c=document.createElement("div");if(c.className="chatbot-header-actions",typeof r=="function"){const x=document.createElement("button");if(x.type="button",x.className="chatbot-header-btn",x.setAttribute("aria-label","View cart"),x.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',s>0){const C=document.createElement("span");C.className="chatbot-cart-badge",C.textContent=s>99?"99+":String(s),x.style.position="relative",x.appendChild(C)}x.addEventListener("click",r),c.appendChild(x)}const $=document.createElement("button");return $.type="button",$.className="chatbot-header-btn",$.setAttribute("aria-label","Close"),$.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',$.addEventListener("click",()=>o&&o()),c.appendChild($),i.appendChild(c),i}function se(t,e={}){const o=e.strength??.15,r=e.radius??80;if(!t||typeof t.addEventListener!="function")return;let s=null,i=0,a=0,n=0,p=0;const h=(l,u,b)=>l+(u-l)*b,d=()=>{i=h(i,n,.2),a=h(a,p,.2),Math.abs(i-n)<.01&&(i=n),Math.abs(a-p)<.01&&(a=p),t.style.transform=`translate(${i}px, ${a}px)`,Math.abs(i)>.01||Math.abs(a)>.01||n!==0||p!==0?s=requestAnimationFrame(d):(s=null,t.style.willChange="")};return t.addEventListener("mouseenter",()=>{t.style.willChange="transform"}),t.addEventListener("mouseleave",()=>{n=0,p=0,s||(s=requestAnimationFrame(d))}),t.addEventListener("mousemove",l=>{const u=t.getBoundingClientRect(),b=u.left+u.width/2,m=u.top+u.height/2,c=l.clientX-b,$=l.clientY-m,x=Math.sqrt(c*c+$*$);if(x<r){const C=(1-x/r)*o;n=c*C,p=$*C}else n=0,p=0;s||(s=requestAnimationFrame(d))}),()=>{s&&cancelAnimationFrame(s)}}const ve=`
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
`;function we(){if(typeof document<"u"&&!document.getElementById("messagelist-styles")){const t=document.createElement("style");t.id="messagelist-styles",t.textContent=ve,document.head.appendChild(t)}}we();function ke(){const t=document.createElement("div");return t.className="chatbot-messages",t.id="chatbot-messages-container",t}function te(t){if(!t)return"";let e=t;return e=e.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g,(o,r,s)=>{const i=r.split("|").filter(n=>n.trim()).map(n=>`<th>${n.trim()}</th>`).join(""),a=s.trim().split(`
`).filter(n=>n.trim()).map(n=>`<tr>${n.split("|").filter(h=>h.trim()).map(h=>`<td>${h.trim()}</td>`).join("")}</tr>`).join("");return`<div class="md-table-wrap"><table><thead><tr>${i}</tr></thead><tbody>${a}</tbody></table></div>
`}),e=e.replace(/^>\s?(.*)$/gm,"<blockquote>$1</blockquote>"),e=e.replace(/^###\s+(.+)$/gm,'<h3 class="md-h3">$1</h3>'),e=e.replace(/^##\s+(.+)$/gm,'<h2 class="md-h2">$1</h2>'),e=e.replace(/^#\s+(.+)$/gm,'<h1 class="md-h1">$1</h1>'),e=e.replace(/^---+$/gm,'<hr class="md-hr"/>'),e=e.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm,o=>`<ul class="md-list">${o.trim().split(`
`).map(s=>`<li>${s.replace(/^[ \t]*[-*]\s+/,"")}</li>`).join("")}</ul>
`),e=e.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*\n]+?)\*/g,"<em>$1</em>"),e=e.replace(/`([^`]+)`/g,'<code class="md-code">$1</code>'),e=e.replace(/\n{2,}/g,'</p><p class="md-p">'),e=e.replace(/\n/g,"<br/>"),e=`<p class="md-p">${e}</p>`,e}function Ce(){const t=document.createElement("span");t.className="chatbot-timestamp";const e=new Date,o=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return t.textContent=`${o}:${r}`,t}function O(t,e=!0,o=null,r=null){const s=document.createElement("div");s.className=`chatbot-message ${e?"bot":"user"} ${e?"msg-enter-bot":"msg-enter-user"}`;const i=document.createElement("div");if(i.className="chatbot-bubble",e){const p=o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';s.innerHTML=`
            <div class="chatbot-message-avatar">
                ${p}
            </div>
        `;const h=/\[Action:\s*(.*?)\]/g;let d=[],l=t.replace(h,(u,b)=>(d.push(b),""));if(i.innerHTML=te(l),s.appendChild(i),d.length>0&&r){const u=document.createElement("div");u.className="chatbot-actions",d.forEach(b=>{const m=document.createElement("button");m.type="button",m.className="action-btn",m.textContent=b,m.onclick=()=>r(b),se(m,{strength:.1,radius:50}),u.appendChild(m)}),s.appendChild(u)}}else i.innerHTML=te(t),s.appendChild(i);const a=document.createElement("div");a.className=`chatbot-message-ts-row ${e?"ts-bot":"ts-user"}`;const n=Ce();return a.appendChild(n),s.appendChild(a),s}const $e="https://placehold.co/300x200?text=Product";function Se(t){if(!Array.isArray(t)||t.length===0)return[];const e=r=>r&&r.image!=null&&String(r.image).trim()!=="",o=t.filter(e);return o.length>0?o:t}function ce(t,e,o=null){const r=document.createElement("div");r.className="chatbot-message bot-message msg-enter-product";const s=Se(t),i=$e,n=`
        <div class="chatbot-message-avatar">
            ${o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>'}
        </div>
    `,p=document.createElement("div");p.style.display="flex",p.style.width="100%",p.innerHTML=n;const h=document.createElement("div");h.className="carousel-container",h.style.flex="1",h.style.minWidth="0",h.style.display="flex",h.style.flexDirection="column",h.style.gap="6px";const d=["Have a look","Choose from these","Here are some picks"],l=d[Math.floor(Math.random()*d.length)],u=document.createElement("div");u.className="carousel-heading",u.textContent=l,h.appendChild(u);const b=document.createElement("div");b.className="carousel-row",b.style.display="flex",b.style.alignItems="center",b.style.position="relative";const m=document.createElement("button");m.className="carousel-nav-btn carousel-nav-left",m.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';const c=document.createElement("button");c.className="carousel-nav-btn carousel-nav-right",c.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';const $=document.createElement("div");$.className="chatbot-product-carousel";const x=232;return m.addEventListener("click",()=>{$.scrollBy({left:-x,behavior:"smooth"})}),c.addEventListener("click",()=>{$.scrollBy({left:x,behavior:"smooth"})}),s.forEach(C=>{const Y=C.image&&String(C.image).trim()?C.image:i,A=document.createElement("div");A.className="carousel-card",A.innerHTML=`
            <img src="${Y}" class="chatbot-product-img" alt="${C.title||"Product Image"}" />
            <div class="chatbot-product-content">
                <div class="chatbot-product-header">
                    <h4>${C.title||"Unknown Product"}</h4>
                    <span class="chatbot-product-price">${C.price||""}</span>
                </div>
            </div>
        `;const w=A.querySelector(".chatbot-product-content");let B=null;if(C.sizes&&Array.isArray(C.sizes)){const R=document.createElement("div");R.className="chatbot-product-sizes";const U=document.createElement("div");U.className="sizes-list",C.sizes.forEach(P=>{const z=document.createElement("button");z.className="size-pill",z.innerText=P,z.addEventListener("click",()=>{U.querySelectorAll(".size-pill").forEach(j=>j.classList.remove("selected")),z.classList.add("selected"),B=P}),U.appendChild(z)}),R.appendChild(U),w.appendChild(R)}const L=document.createElement("div");L.className="chatbot-product-action",L.innerText=(o==null?void 0:o.addToCartLabel)||"Add to Cart",L.addEventListener("click",()=>{if(C.sizes&&!B){alert("Please select a size first!");return}e&&e(C,B)}),w.appendChild(L),Ee(A,"carousel-card-3d"),$.appendChild(A)}),b.appendChild(m),b.appendChild($),b.appendChild(c),h.appendChild(b),p.appendChild(h),r.appendChild(p),r}function Ee(t,e="chatbot-product-card-3d"){t&&(t.classList.add(e),t.addEventListener("mousemove",o=>{const r=t.getBoundingClientRect(),s=(o.clientX-r.left)/r.width,a=((o.clientY-r.top)/r.height-.5)*8,n=(s-.5)*-8,p=4;t.style.transform=`perspective(800px) rotateX(${a}deg) rotateY(${n}deg) translateY(-${p}px)`}),t.addEventListener("mouseleave",()=>{t.style.transform=""}))}function Ae(){const t=document.createElement("div");return t.className="chatbot-message bot msg-enter-bot",t.setAttribute("data-skeleton","true"),t.innerHTML=`
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `,t}function Le(t,e,o){if(!t||t.length===0)return null;const r=document.createElement("div");return r.className="chatbot-suggestion-chips",t.forEach(s=>{const i=document.createElement("button");i.type="button",i.className="suggestion-chip",i.textContent=s,i.addEventListener("click",()=>e(s)),se(i,{strength:.1,radius:50}),r.appendChild(i)}),r}const ze='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';function de(t,e={}){if(!t||!t.items||!Array.isArray(t.items))return null;const{items:o,total:r}=t,{onCheckout:s,onAddMore:i,onUpdateQty:a,onRemove:n}=e,p=document.createElement("div");p.className="chatbot-section-card chatbot-cart-card msg-enter-product chatbot-cart-card-premium";const d=`$${(typeof r=="number"?r:parseFloat(String(r).replace(/[^0-9.]/g,""))||0).toFixed(2)}`,l=o.reduce((x,C)=>x+(C.quantity||1),0),u=l===1?"item":"items",b=t.subtotalLabel||`Subtotal (${l} ${u})`;if(o.length===0)return p.innerHTML=`
            <div class="chatbot-cart-card-body">
                <div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>
            </div>
        `,p;const m=document.createElement("div");m.className="chatbot-cart-card-body",o.forEach(x=>{const C=document.createElement("div");C.className="chatbot-cart-item-row";const Y=x.quantity!=null?x.quantity:1,A=x.title||x.name||"Product",w=x.price!=null?typeof x.price=="string"?x.price:`$${Number(x.price).toFixed(2)}`:"$0.00",B=x.image&&String(x.image).trim()?x.image:"https://placehold.co/80x80?text=Product",L=x.badge?`<span class="chatbot-cart-item-badge">${x.badge}</span>`:"";C.innerHTML=`
            <div class="chatbot-cart-item-thumb-wrap">
                <img class="chatbot-cart-item-img" src="${B}" alt="${A.slice(0,40)}" />
                ${L}
            </div>
            <div class="chatbot-cart-item-details">
                <div class="chatbot-cart-item-name">${A}</div>
                <div class="chatbot-cart-item-price">${w}</div>
                <div class="chatbot-cart-item-actions">
                    <div class="chatbot-cart-qty-pill">
                        <button type="button" class="chatbot-cart-qty-btn" data-action="minus" aria-label="Decrease">−</button>
                        <span class="chatbot-cart-qty-num">${Y}</span>
                        <button type="button" class="chatbot-cart-qty-btn" data-action="plus" aria-label="Increase">+</button>
                    </div>
                    <button type="button" class="chatbot-cart-remove-btn" aria-label="Remove">${ze}</button>
                </div>
            </div>
        `;const R=C.querySelector('[data-action="minus"]'),U=C.querySelector('[data-action="plus"]'),P=C.querySelector(".chatbot-cart-qty-num"),z=C.querySelector(".chatbot-cart-remove-btn");a&&P&&(R==null||R.addEventListener("click",()=>{const j=Math.max(0,(parseInt(P.textContent,10)||1)-1);P.textContent=j,a(x,j),j===0&&z&&z.click()}),U==null||U.addEventListener("click",()=>{const j=(parseInt(P.textContent,10)||1)+1;P.textContent=j,a(x,j)})),n&&z&&z.addEventListener("click",()=>n(x)),m.appendChild(C)});const c=document.createElement("div");c.className="chatbot-cart-summary",c.innerHTML=`
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">${b}</span>
            <span class="chatbot-cart-summary-value">${d}</span>
        </div>
        <div class="chatbot-cart-summary-row">
            <span class="chatbot-cart-summary-label">Shipping</span>
            <span class="chatbot-cart-shipping-free">FREE</span>
        </div>
        <div class="chatbot-cart-summary-divider"></div>
        <div class="chatbot-cart-summary-row chatbot-cart-summary-total">
            <span class="chatbot-cart-summary-label">Total</span>
            <span class="chatbot-cart-summary-total-value">${d}</span>
        </div>
    `;const $=document.createElement("button");return $.type="button",$.className="chatbot-cart-checkout-btn-premium",$.innerHTML='Proceed to Checkout <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',s&&$.addEventListener("click",()=>s()),m.appendChild(c),m.appendChild($),p.appendChild(m),p}function le(t){if(!t||!Array.isArray(t))return null;const e=document.createElement("div");e.className="chatbot-section-card chatbot-order-history-card msg-enter-product";const o='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',r=i=>{const a=(i||"").toLowerCase();return a==="delivered"?"order-status-delivered":a==="shipped"?"order-status-shipped":a==="processing"?"order-status-processing":a==="cancelled"?"order-status-cancelled":"order-status-default"};let s=t.length===0?'<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>':t.map(i=>{const a=typeof i.total=="number"?`$${i.total.toFixed(2)}`:i.total!=null?`$${Number(i.total).toFixed(2)}`:"—",n=(i.items||[]).map(p=>`<span class="chatbot-order-item-line">${p.title||"Item"} ${p.price?` · ${p.price}`:""}</span>`).join("");return`
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${i.id||"—"}</span>
                        <span class="chatbot-order-date">${i.date||"—"}</span>
                        <span class="chatbot-order-status ${r(i.status)}">${i.status||"—"}</span>
                    </div>
                    <div class="chatbot-order-items">${n||'<span class="chatbot-order-item-line">No items</span>'}</div>
                    <div class="chatbot-order-total">Total ${a}</div>
                </div>
            `}).join("");return e.innerHTML=`
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${o}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${s}</div>
    `,e}const pe=['<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>'];function Te(t,e={}){const{onAction:o}=e,r=document.createElement("div");return r.className="chatbot-quick-actions-grid",t.forEach((s,i)=>{const a=s.icon!=null?s.icon:pe[i]??pe[0],n=document.createElement("div");n.className="quick-action-card msg-enter-product",n.innerHTML=`
            <div class="quick-action-icon-box">${a}</div>
            <div class="quick-action-info">
                <span class="quick-action-title">${(s.title||"").replace(/</g,"&lt;")}</span>
                <span class="quick-action-desc">${(s.desc||"").replace(/</g,"&lt;")}</span>
            </div>
        `;const p=s.message!=null?s.message:s.title||"";n.onclick=()=>o("quickAction",{...s,message:p}),r.appendChild(n)}),r}function Me(t,e={}){const{step:o,data:r,state:s}=t,{onAction:i}=e,a=document.createElement("div");a.className="chatbot-checkout-wrapper msg-enter-product";const n='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',p='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',h='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';if(o==="mobile"){a.innerHTML=`
            <div class="checkout-form-card checkout-mobile-card">
                <div class="checkout-field">
                    <label class="checkout-label-uppercase">MOBILE NUMBER</label>
                    <div class="checkout-mobile-input-wrap">
                        <span class="checkout-mobile-icon">${n}</span>
                        <span class="checkout-mobile-prefix">+91</span>
                        <input type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="10" class="checkout-mobile-input" placeholder="9876543210" id="checkout-mobile" value="${(s.mobile||"").replace(/\D/g,"").slice(0,10)}" autocomplete="tel" />
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
        `;const d=a.querySelector("#checkout-mobile"),l=a.querySelector("#mobile-submit-btn"),u=()=>{const b=(d.value||"").replace(/\D/g,"");l.disabled=b.length!==10};d.addEventListener("input",()=>{d.value=d.value.replace(/\D/g,"").slice(0,10),u()}),u(),l.addEventListener("click",()=>{const b=(d.value||"").replace(/\D/g,"").slice(0,10);b.length===10&&i("submitMobile",{mobile:b})})}else if(o==="otp"){const d=s.mobile?"+91 "+String(s.mobile).replace(/(\d{2})(\d{4})(\d+)/,"$1 $2 $3").trim():"+91 ••••••••••";a.innerHTML=`
            <div class="checkout-form-card checkout-otp-card">
                <div class="checkout-otp-header">
                    <h3 class="checkout-otp-title">ENTER OTP</h3>
                    <button type="button" class="checkout-change-number-link">Change Number</button>
                </div>
                <p class="checkout-otp-sent-to">Sent to ${d}</p>
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
        `;const l=a.querySelectorAll(".checkout-otp-box");l.forEach((u,b)=>{u.addEventListener("input",m=>{const c=m.target.value.replace(/\D/g,"").slice(0,1);m.target.value=c,c&&b<3&&l[b+1].focus()}),u.addEventListener("keydown",m=>{m.key==="Backspace"&&!m.target.value&&b>0&&l[b-1].focus()})}),l[0]&&l[0].focus(),a.querySelector("#otp-verify-btn").addEventListener("click",()=>{const u=Array.from(a.querySelectorAll(".checkout-otp-box")).map(b=>b.value||"").join("").slice(0,4);i("verifyOtp",{code:u})}),a.querySelector(".checkout-change-number-link").addEventListener("click",()=>i("changeAuthMode",{mode:"mobile"})),a.querySelector(".checkout-resend-link").addEventListener("click",()=>i("submitMobile",{mobile:s.mobile}))}else if(o==="address"){const d=r.addresses||[],l=s.selectedAddressId,u='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',b='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/></svg>',m='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';let c=d.map(w=>{const B=(w.type||"home").toUpperCase(),L=(w.type||"home").toLowerCase()==="home";return`
            <div class="checkout-address-card ${w.id===l?"selected":""}" data-id="${w.id}">
                <div class="address-icon-box ${L?"address-icon-home":""}">${L?u:b}</div>
                <div class="address-info">
                    <div class="address-header">
                        <span class="address-name">${w.name}</span>
                        <span class="address-type-badge">${B}</span>
                    </div>
                    <div class="address-text">${w.street}</div>
                    <div class="address-text">${w.city}, ${w.state||""} ${w.zip}</div>
                    <div class="address-phone">${m} ${w.phone}</div>
                </div>
                ${w.id===l?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
            </div>`}).join("");a.innerHTML=`
            <div class="checkout-address-step">
                ${c}
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
                ${l!=null?'<button type="button" class="checkout-primary-btn" id="addr-continue-btn">Continue to Payment '+h+"</button>":""}
            </div>
        `,a.querySelectorAll(".checkout-address-card").forEach(w=>{w.onclick=()=>i("selectAddress",{id:w.dataset.id})});const $=a.querySelector("#add-address-btn"),x=a.querySelector("#add-address-form-wrap"),C=a.querySelector("#addr-cancel-btn"),Y=a.querySelector("#addr-save-btn");$&&x&&$.addEventListener("click",()=>{x.style.display=x.style.display==="none"?"block":"none"}),C&&x&&C.addEventListener("click",()=>{x.style.display="none"}),Y&&x&&Y.addEventListener("click",()=>{var z,j,J,ee,F,Q;const w=(((z=a.querySelector("#addr-name"))==null?void 0:z.value)||"").trim(),B=(((j=a.querySelector("#addr-street"))==null?void 0:j.value)||"").trim(),L=(((J=a.querySelector("#addr-city"))==null?void 0:J.value)||"").trim(),R=(((ee=a.querySelector("#addr-state"))==null?void 0:ee.value)||"").trim(),U=(((F=a.querySelector("#addr-zip"))==null?void 0:F.value)||"").trim(),P=(((Q=a.querySelector("#addr-phone"))==null?void 0:Q.value)||"").trim();B&&(i("addAddress",{address:{type:"home",name:w,street:B,city:L,state:R,zip:U,phone:P}}),x.style.display="none")});const A=a.querySelector("#addr-continue-btn");A&&(A.onclick=()=>i("continueToPayment"))}else if(o==="payment"){const d=s.paymentMethod,l=Number(r.subtotal)||0,u=l*.1,b=l+u;a.innerHTML=`
            <div class="checkout-payment-step">
                <div class="checkout-method-card ${d==="cod"?"selected":""}" data-method="cod">
                    <div class="method-icon-box method-icon-cod">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M7 15h.01"/><path d="M12 15h.01"/><path d="M17 15h.01"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Cash on Delivery</h4>
                        <p class="method-desc">Pay when you receive</p>
                    </div>
                    ${d==="cod"?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
                </div>
                <div class="checkout-method-card ${d==="prepaid"?"selected":""}" data-method="prepaid">
                    <div class="method-icon-box method-icon-card">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 class="method-title">Credit / Debit Card</h4>
                        <p class="method-desc">Secure payment</p>
                    </div>
                    ${d==="prepaid"?'<div class="selection-check-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg></div>':""}
                </div>
                <div class="checkout-summary-card">
                    <h4 class="summary-title">ORDER SUMMARY</h4>
                    <div class="summary-row"><span>Subtotal</span><span>$${l.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Shipping</span><span class="summary-shipping-free">FREE</span></div>
                    <div class="summary-row"><span>Tax</span><span>$${u.toFixed(2)}</span></div>
                    <div class="summary-divider"></div>
                    <div class="summary-row summary-total"><span>Total</span><span class="total-value">$${b.toFixed(2)}</span></div>
                </div>
                <button class="checkout-place-order-btn" id="place-order-btn" ${d?"":"disabled"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Place Order – $${b.toFixed(2)}
                </button>
            </div>
        `,a.querySelectorAll(".checkout-method-card").forEach(c=>{c.onclick=()=>i("selectPayment",{method:c.dataset.method})});const m=a.querySelector("#place-order-btn");m&&(m.onclick=()=>{d&&i("placeOrder")})}else if(o==="confirmation"){const d=s.orderId||r.orderId||`ORD-${String(Math.floor(Math.random()*1e4)).padStart(4,"0")}`,l=r.orderItems||s.orderItems||[],u=l.length?`<div class="confirmation-products">
                <div class="confirmation-products-title">Products ordered</div>
                ${l.map(b=>{const m=b.quantity||1,c=(b.price||0)*m;return`<div class="confirmation-product-row">
                        ${b.image?`<img src="${b.image}" alt="" class="confirmation-product-img" onerror="this.style.display='none'" />`:'<div class="confirmation-product-placeholder"></div>'}
                        <div class="confirmation-product-info">
                            <span class="confirmation-product-name">${(b.name||"").replace(/</g,"&lt;")}</span>
                            <span class="confirmation-product-meta">Qty: ${m} × $${(b.price||0).toFixed(2)} = $${c.toFixed(2)}</span>
                        </div>
                    </div>`}).join("")}
               </div>`:"";a.innerHTML=`
            <div class="checkout-confirmation">
                <div class="success-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 class="confirmation-title">Order Confirmed!</h3>
                <p class="confirmation-message">Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                ${u}
                <div class="order-number-badge">
                    <span>Order #</span>
                    <b>${d}</b>
                </div>
            </div>
        `}return a}const Ie='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Ne='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';function qe(t,e){const o=document.createElement("div");o.className="chatbot-input-area",o.setAttribute("data-region","input-bar");const r=e.placeholders&&e.placeholders.length>0?e.placeholders:he,s=e.inputPlaceholder||"Ask anything about orders, products...",i=document.createElement("div");i.className="chatbot-input-wrap";const a=document.createElement("button");a.type="button",a.className="chatbot-attach-btn",a.setAttribute("aria-label","Attach"),a.innerHTML=Ie;const n=document.createElement("input");n.type="text",n.placeholder=s,n.className="chatbot-input",n.setAttribute("aria-label","Message input");const p=document.createElement("button");p.type="button",p.className="chatbot-send-btn",p.setAttribute("aria-label","Send message"),p.innerHTML=Ne;const h=()=>{const m=n.value.trim().length>0;p.classList.toggle("active",m),p.disabled=!m};n.addEventListener("input",h),n.addEventListener("focus",h),n.addEventListener("blur",h),h();let d=0;const u=setInterval(()=>{!n.matches(":focus")&&r.length>1&&(d=(d+1)%r.length,n.placeholder=r[d])},3500);n.addEventListener("focus",()=>{n.placeholder=e.inputPlaceholder||"Ask anything about orders, products..."}),n.addEventListener("blur",()=>{n.placeholder=r[d%r.length]});const b=()=>{const m=n.value.trim();m&&(t(m),n.value="",d=0,n.placeholder=r[0],h())};return n.addEventListener("keypress",m=>{m.key==="Enter"&&b()}),p.addEventListener("click",b),i.appendChild(a),i.appendChild(n),i.appendChild(p),o.appendChild(i),se(p,{strength:.12,radius:60}),o.destroy=()=>clearInterval(u),o}function Be(t="Thinking..."){const e=document.createElement("div");e.className="chatbot-message bot typing-indicator-wrapper msg-enter-bot";const o=document.createElement("div");o.className="chatbot-message-avatar",o.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';const r=document.createElement("div");return r.className="message-bubble typing-indicator",r.setAttribute("aria-live","polite"),r.setAttribute("role","status"),r.innerHTML='<span class="dot"></span><span class="dot"></span><span class="dot"></span>',e.appendChild(o),e.appendChild(r),e.setStatus=()=>{},e}const He="http://localhost:3000";async function Oe(t,e=[],o,r,s,i="default",a=null,n=null,p=null,h=null){const l=`${(h||He).replace(/\/$/,"")}/api/chat`;try{const u=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,history:e,sessionId:i})});if(!u.ok)throw new Error;const b=u.body.getReader(),m=new TextDecoder;let c="";for(;;){const{value:$,done:x}=await b.read();if(x)break;c+=m.decode($,{stream:!0});const C=c.split(`
`);c=C.pop();for(const Y of C)if(Y.startsWith("data: ")){const A=Y.replace("data: ","").trim();try{if(A){const w=JSON.parse(A);w.type==="text"&&o&&o(w.content),w.type==="carousel"&&r&&r(w.content),w.type==="cart"&&n&&n(w.content),w.type==="orderHistory"&&p&&p(w.content),w.type==="status"&&a&&a(w.content),w.type==="done"&&s&&s()}}catch{}}}}catch(u){console.error("AI Service Error:",u),o&&o("My neural network is temporarily offline."),s&&s()}}const Ye="";function K(t){return(t||Ye).replace(/\/$/,"")}async function je(t,e,o){return(await fetch(`${K(o)}/api/checkout/send-otp`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,phone:String(e).replace(/\D/g,"")})})).json()}async function Pe(t,e,o,r){return(await fetch(`${K(r)}/api/checkout/verify-otp`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,phone:String(e).replace(/\D/g,""),code:String(o).replace(/\D/g,"").slice(0,4)})})).json()}async function re(t,e){return(await(await fetch(`${K(e)}/api/checkout/addresses?sessionId=${encodeURIComponent(t)}`)).json()).addresses||[]}async function Ue(t,e,o){return(await fetch(`${K(o)}/api/checkout/address`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,address:e})})).json()}async function De(t,e,o,r){return(await fetch(`${K(r)}/api/checkout/place-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,addressId:Number(e),paymentMethod:o==="prepaid"?"prepaid":"COD"})})).json()}function Re(t,e=[],o=4){if(!e||e.length===0)return[];const r=(t||"").toLowerCase(),s=e.map(a=>{const n=a.toLowerCase();let p=0;const h=n.split(/\s+/).filter(d=>d.length>2);for(const d of h)r.includes(d)&&(p+=2),r.includes(d.replace(/[^a-z0-9]/g,""))&&(p+=1);return a.toLowerCase().includes("sneaker")&&(r.includes("sneaker")||r.includes("shoe"))&&(p+=3),a.toLowerCase().includes("trending")&&(r.includes("trending")||r.includes("bestseller")||r.includes("popular"))&&(p+=3),a.toLowerCase().includes("sale")&&(r.includes("sale")||r.includes("price")||r.includes("$"))&&(p+=2),a.toLowerCase().includes("running")&&r.includes("running")&&(p+=3),a.toLowerCase().includes("jacket")&&(r.includes("jacket")||r.includes("apparel"))&&(p+=2),{label:a,score:p}});s.sort((a,n)=>n.score-a.score);const i=s.filter(a=>a.score>0).slice(0,o).map(a=>a.label);return i.length===0&&r.length<500?e.slice(0,Math.min(3,o)):i}function Fe(t){if(!t)return null;const e=document.createElement("div");return e.className="chatbot-toast-host",t.appendChild(e),{showToast:({title:r,message:s,image:i,duration:a=3e3}={})=>{const n=document.createElement("div");n.className="chatbot-toast",n.innerHTML=`
            ${i?`<div class="chatbot-toast-image-wrap"><img src="${i}" alt="" /></div>`:""}
            <div class="chatbot-toast-content">
                ${r?`<div class="chatbot-toast-title">${r}</div>`:""}
                ${s?`<div class="chatbot-toast-message">${s}</div>`:""}
            </div>
        `,e.appendChild(n),requestAnimationFrame(()=>{n.classList.add("chatbot-toast-visible")}),setTimeout(()=>{n.classList.remove("chatbot-toast-visible"),n.addEventListener("transitionend",()=>{n.remove()},{once:!0})},a)}}}function Ve(t){const e=ge(t);console.log("Chatbot initialized in Shadow DOM with config:",e);let o=sessionStorage.getItem("ecom-session-id");o||(o="sess_"+Math.random().toString(36).substring(2,9),sessionStorage.setItem("ecom-session-id",o));const r=e.parentElement||document.body,s=r.querySelector("#ecom-chatbot-host");s&&s.remove();const i=document.createElement("div");i.id="ecom-chatbot-host",r.appendChild(i);const a=i.attachShadow({mode:"open"}),n=Fe(a),p=document.createElement("style");p.textContent=fe(e),a.appendChild(p);const h=document.createElement("div");h.className="ecom-chatbot-wrapper";const d=document.createElement("div");d.className="chatbot-window";const l=ke();function u(){l.scrollTo({top:l.scrollHeight,behavior:"smooth"})}function b(){let g=null;Array.from(l.children).filter(y=>y.classList&&!y.hasAttribute("data-skeleton")&&(y.classList.contains("chatbot-message")||y.classList.contains("typing-indicator-wrapper"))).forEach(y=>{const f=y.classList.contains("user"),k=y.classList.contains("bot")||y.classList.contains("typing-indicator-wrapper"),E=f?"user":k?"bot":null;E&&(y.classList.remove("group-same","group-first"),g===E?y.classList.add("group-same"):y.classList.add("group-first"),g=E)})}let m=[];try{const g=sessionStorage.getItem("ecom-chat-history");g&&(m=JSON.parse(g),console.log("Restored chat history from session:",m))}catch(g){console.error("Failed to parse session chat history",g)}let c={step:null,authMode:"login",name:"",email:"",selectedAddressId:null,paymentMethod:"",subtotal:0};const $=[{id:"1",type:"home",name:"John Doe",street:"123 Main Street, Apt 4B",city:"New York",state:"NY",zip:"10001",phone:"+1 (555) 123-4567"}],x=async(g,v)=>{var y;if(g==="changeAuthMode")c.authMode=v.mode,v.mode==="mobile"&&(c.step="mobile"),A();else if(g==="submitMobile"){const f=(v.mobile||"").replace(/\D/g,"").slice(-10);try{const k=await je(o,f,e.apiBaseUrl);if(!k.success){n.showToast({title:"Error",message:k.message||"Could not send OTP"});return}c.mobile=f,c.step="otp";const E=k.code||"";n.showToast({title:"OTP Sent",message:E?`Your OTP: ${E} (see backend console)`:k.message})}catch{n.showToast({title:"Error",message:"Could not send OTP. Is the backend running?"});return}A()}else if(g==="verifyOtp"){const f=(v.code||"").replace(/\D/g,"").slice(0,4);try{const E=await Pe(o,c.mobile,f,e.apiBaseUrl);if(!E.success){n.showToast({title:"Verification failed",message:E.message||"Invalid OTP. Use the code from backend."});return}const S=await re(o,e.apiBaseUrl);c.addresses=Array.isArray(S)?S:[],c.isAuthenticated=!0}catch{n.showToast({title:"Error",message:"Verification failed. Use the OTP shown in backend console."});return}c.step="address";const k=c.addresses||$;k.length&&(c.selectedAddressId==null||!k.some(E=>(E.id??0)===c.selectedAddressId))&&(c.selectedAddressId=((y=k[0])==null?void 0:y.id)??0),l.appendChild(O("Continue to address selection",!1,e)),u(),A()}else if(g==="submitAuth"){c.email=v.email,c.name=v.name,n.showToast({title:"Successfully logged in!",message:""}),c.isAuthenticated=!0,c.step="address";const f=c.addresses||$;!c.selectedAddressId&&f.length&&(c.selectedAddressId=f[0].id),l.appendChild(O("Continue to address selection",!1,e)),u(),A()}else if(g==="addAddress"){if(v.address&&e.apiBaseUrl)try{const f=await Ue(o,v.address,e.apiBaseUrl);if(!f.success){n.showToast({title:"Error",message:f.message||"Could not add address"});return}const k=await re(o,e.apiBaseUrl);c.addresses=k,c.selectedAddressId=f.id,n.showToast({title:"Address saved",message:""})}catch{n.showToast({title:"Error",message:"Could not add address"});return}A()}else if(g==="selectAddress")c.selectedAddressId=v.id,A();else if(g==="continueToPayment")c.step="payment",c.paymentMethod||(c.paymentMethod="cod"),l.appendChild(O("Continue to payment",!1,e)),u(),A();else if(g==="selectPayment")c.paymentMethod=v.method,A();else if(g==="placeOrder"){try{const f=c.selectedAddressId!=null?Number(c.selectedAddressId):0,k=await De(o,f,c.paymentMethod||"cod",e.apiBaseUrl);if(!k.success){n.showToast({title:"Order failed",message:k.message||"Could not place order"});return}c.orderItems=(k.items||[]).map(E=>({name:E.title,price:typeof E.price=="string"?E.price:`$${Number(E.price).toFixed(2)}`,quantity:1,image:null})),c.orderId=k.orderId,B&&B(0)}catch{n.showToast({title:"Error",message:"Could not place order. Is the backend running?"});return}c.step="confirmation",l.appendChild(O("Place order",!1,e)),u(),A(),n.showToast({title:"Order Placed",message:'Thank you! Check "Order history" to see it.'})}},C={mobile:"To complete your order, please login or create an account.",otp:"",address:"Please select a delivery address or add a new one.",payment:"Choose your preferred payment method.",confirmation:"Your order has been placed successfully! You'll receive a confirmation email shortly."};let Y=null;const A=async()=>{const g=c.step;if(g==="address"&&e.apiBaseUrl&&(!c.addresses||c.addresses.length===0))try{c.addresses=await re(o,e.apiBaseUrl)}catch{c.addresses=[]}const v={step:g,data:{addresses:c.addresses||$,subtotal:c.subtotal??cart.reduce((N,H)=>N+(H.price||0)*(H.quantity||1),0),orderItems:c.orderItems||[]},state:c},y=Me(v,{onAction:x}),f=C[g]||"";if(Y){const H=(Y.querySelector(".chatbot-message-content")||Y).querySelector(".chatbot-checkout-wrapper"),V=Y.querySelector(".chatbot-bubble");if(V&&(V.innerHTML=f?te(f):""),H){H.replaceWith(y),u();return}}const k=O(f,!0,e),E=document.createElement("div");E.className="chatbot-message-content";const S=k.querySelector(".chatbot-bubble");S.parentNode.insertBefore(E,S),E.appendChild(S),E.appendChild(y),l.appendChild(k),Y=k,u(),b()};let w=0,B=null;const L=async g=>{const v=d.querySelector(".chatbot-presets");v&&v.remove();const y=d.querySelector(".chatbot-quick-actions-grid");y&&y.remove();const f=O(g,!1,e);l.appendChild(f),u();const k=Be();l.appendChild(k),u();const E=[...m];m.push({role:"user",content:g}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(m));let S=null,N="",H=!1,V=null,_=null,G=null;const W=()=>{k.parentNode&&l.removeChild(k),G&&G.parentNode&&l.removeChild(G)},X=()=>{if(J)return;const I=h.querySelector(".chatbot-toggle-btn");if(I&&!I.querySelector(".chatbot-ripple-ring")){const M=document.createElement("span");M.className="chatbot-ripple-ring",I.appendChild(M),setTimeout(()=>M.remove(),1400)}};await Oe(g,E,I=>{W(),H||(H=!0,X()),S||(S=O("",!0,e,L),l.appendChild(S),V=S),N+=I;const M=S.querySelector(".chatbot-bubble");M&&(M.innerHTML=te(N)),u()},I=>{W(),H||(H=!0,X());const M=["Here's what we have:","Have a look at these.","Here are some picks."],T=M[Math.floor(Math.random()*M.length)];(!S||!N.trim())&&(S=O(T,!0,e,L),l.appendChild(S),N=T);const q=ce(I,U,e);_=I,V=q,l.appendChild(q),m.push({role:"bot",content:"Displayed a product carousel to the user.",carousel:I}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(m)),b(),u()},()=>{W(),N&&(m.push({role:"bot",content:N}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(m)));const I=N||(_?(_||[]).map(T=>T.title||"").join(" "):""),M=Re(I,e.suggestionChips||[],4);if(M.length>0&&V){const T=Le(M,D=>L(D));T.classList.add("chatbot-chips-below");const q=V.querySelector(".chatbot-bubble");if(q){let D=V.querySelector(".chatbot-message-content");D||(D=document.createElement("div"),D.className="chatbot-message-content",q.parentNode.insertBefore(D,q),D.appendChild(q)),D.appendChild(T)}else V.appendChild(T)}b(),u()},o,I=>{k.setStatus&&k.setStatus(I),I&&/searching|product|looking for|options|recommend/i.test(I)&&!G&&(G=Ae(),l.appendChild(G),u())},I=>{W(),H||(H=!0,X()),S||(S=O("",!0,e,L),l.appendChild(S));const M=S.querySelector(".chatbot-bubble");let T=S.querySelector(".chatbot-message-content");!T&&M&&(T=document.createElement("div"),T.className="chatbot-message-content",M.parentNode.insertBefore(T,M),T.appendChild(M));const q=de(I,{onCheckout:()=>{c.step="mobile",c.subtotal=I.total||0,A()},onAddMore:()=>L("I'd like to add something else")});q&&T?T.appendChild(q):q&&botMsg.appendChild(q);const D=N||"Here’s what’s in your cart:";m.push({role:"bot",content:D,cart:I}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(m)),b(),u()},I=>{W(),H||(H=!0,X()),S||(S=O("",!0,e,L),l.appendChild(S));const M=S.querySelector(".chatbot-bubble");let T=S.querySelector(".chatbot-message-content");!T&&M&&(T=document.createElement("div"),T.className="chatbot-message-content",M.parentNode.insertBefore(T,M),T.appendChild(M));const q=le(I);q&&T?T.appendChild(q):q&&S.appendChild(q);const D=N||"Here’s your order history.";m.push({role:"bot",content:D,orderHistory:I}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(m)),b(),u()},e.apiBaseUrl||void 0)},R=qe(L,e),U=(g,v)=>{const y=v?` (Size: ${v})`:"",f=O(`✅ Added 1x **${g.title}** ${y} to your cart for ${g.price}!`,!0,e);l.appendChild(f),b(),u(),window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:g,selectedSize:v}})),B&&B(w+1),n&&g&&n.showToast({title:"Added to cart",message:`${g.title||""} · ${g.price||""}`,image:g.image})};if(m.length>0)m.forEach(g=>{if(g.role==="user")l.appendChild(O(g.content,!1,e));else if(g.role==="bot")if(g.carousel)l.appendChild(ce(g.carousel,U,e));else if(g.cart){const v=O(g.content||"Here’s what’s in your cart:",!0,e),y=v.querySelector(".chatbot-bubble");if(y){const f=document.createElement("div");f.className="chatbot-message-content",y.parentNode.insertBefore(f,y),f.appendChild(y);const k=de(g.cart,{onCheckout:()=>L("I'd like to proceed to checkout"),onAddMore:()=>L("I'd like to add something else")});k&&f.appendChild(k)}l.appendChild(v)}else if(g.orderHistory){const v=O(g.content||"Here’s your order history.",!0,e),y=v.querySelector(".chatbot-bubble");if(y){const f=document.createElement("div");f.className="chatbot-message-content",y.parentNode.insertBefore(f,y),f.appendChild(y);const k=le(g.orderHistory);k&&f.appendChild(k)}l.appendChild(v)}else g.content&&g.content!=="Displayed a product carousel to the user."&&l.appendChild(O(g.content,!0,e))}),b(),u();else{const g=e.welcomeMessage??"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",v=O(g,!0,e);l.appendChild(v);const y=[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],f=e.quickActions&&e.quickActions.length>=4?e.quickActions.slice(0,4):y,k=Te(f,{onAction:(E,S)=>{const N=S.message!=null&&String(S.message).trim()?S.message:S.title;N&&L(N)}});l.appendChild(k),m.push({role:"bot",content:g})}const P=document.createElement("div");P.className="chatbot-orb-wrapper";const z=document.createElement("button");z.type="button",z.className="chatbot-toggle-btn",z.setAttribute("aria-label","Open chat");const j='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';z.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:j,P.appendChild(z);let J=!1;const ee=sessionStorage.getItem("ecom-chatbot-open")==="true",F=document.createElement("div");F.className="welcome-bubble",F.innerHTML='<span style="vertical-align: middle; font-size: 14px; font-weight: 600;">Need help? 👋</span>';function Q(){setTimeout(()=>{J?Q():(F.classList.remove("hidden"),setTimeout(()=>{F.classList.add("hidden"),Q()},5e3))},15e3)}setTimeout(()=>{F.classList.add("hidden"),Q()},5e3);const Z=()=>{J=!0,sessionStorage.setItem("ecom-chatbot-open","true"),F.classList.add("hidden"),d.classList.add("is-open"),z.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:j,setTimeout(u,50)},oe=()=>{J=!1,sessionStorage.setItem("ecom-chatbot-open","false"),d.classList.remove("is-open"),z.innerHTML=e.launcherIconUrl?`<img src="${e.launcherIconUrl}" alt="Chat" />`:j},ne=()=>{F.classList.add("hidden"),J?oe():Z()};z.addEventListener("click",ne);const ie=ye(e,{onClose:oe,onCartClick:()=>{Z(),L("View Cart")},cartCount:0});B=g=>{w=Math.max(0,g||0);const v=ie.querySelector('button[aria-label="View cart"]');if(v){let f=v.querySelector(".chatbot-cart-badge");w>0?(f||(f=document.createElement("span"),f.className="chatbot-cart-badge",v.appendChild(f)),f.textContent=w>99?"99+":String(w)):f&&f.remove()}let y=z.querySelector(".chatbot-launcher-badge");w>0?(y||(y=document.createElement("span"),y.className="chatbot-launcher-badge",z.appendChild(y)),y.textContent=w>99?"99+":String(w),y.classList.remove("cart-badge-pop"),y.offsetWidth,y.classList.add("cart-badge-pop")):y&&y.remove()},d.appendChild(ie),d.appendChild(l),d.appendChild(R);const ae=document.createElement("div");ae.className="chatbot-footer",ae.innerHTML="<p>Powered by Aura AI</p>",d.appendChild(ae),window.EcomChatbot&&(window.EcomChatbot.open=Z,window.EcomChatbot.close=oe,window.EcomChatbot.toggle=ne,window.EcomChatbot.sendMessage=g=>{Z(),L(g)},window.EcomChatbot.resetAnimation=()=>{}),h.appendChild(d),h.appendChild(F),h.appendChild(P),a.appendChild(h),ee&&Z(),function(){const g=["Hi! I'm Aura, your shopping assistant.","I can help you discover products.","I can track your orders for you.","Looking for the best deals? 🔥","What brings you here today?"],v=a.getElementById("typewriter-bubble");if(!v)return;let y=0,f=0,k=!1,E=!1;const S=68,N=38,H=1800,V=320;v.style.display="inline-block",v.style.minWidth="10px";const _=document.createElement("span");_.textContent="|",_.style.cssText="display:inline-block;margin-left:2px;animation:twCursor 0.8s steps(1) infinite;color:inherit;font-weight:300;opacity:0.7";const G=document.createElement("style");G.textContent="@keyframes twCursor{0%,100%{opacity:1}50%{opacity:0}}",a.appendChild(G),v.appendChild(_);function W(){if(E)return;const X=g[y];if(k){if(f--,v.firstChild&&v.firstChild!==_&&(v.firstChild.textContent=X.slice(0,f)),f===0){k=!1,y=(y+1)%g.length,E=!0,setTimeout(()=>{E=!1,W()},V);return}}else if(f++,v.firstChild&&v.firstChild!==_?v.firstChild.textContent=X.slice(0,f):v.insertBefore(document.createTextNode(X.slice(0,f)),_),f===X.length){E=!0,setTimeout(()=>{E=!1,k=!0,W()},H);return}setTimeout(W,k?N:S)}v.innerHTML="",v.appendChild(document.createTextNode("")),v.appendChild(_),W()}()}window.EcomChatbot={init:t=>{Ve(t)}};
