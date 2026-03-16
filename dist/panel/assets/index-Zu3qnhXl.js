(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const ct=["Ask about products...","Find sneakers under $100...","Compare two products...","Show trending items...","What's on sale?","Recommend something for me..."],dt=["Show sneakers under $100","Trending items","Best running shoes","Summer jackets","What's on sale?","Add to cart"],pt=["Thinking...","Searching products...","Analyzing your request...","Looking for the best options..."],ht={botName:"Aura Concierge",botSubtitle:"Always Available",botAvatarUrl:"",position:"bottom-right",marginBottom:24,marginSide:24,primaryColor:"#2563eb",textColor:"#ffffff",backgroundColor:"#ffffff",headerStatus:"Always Available",quickActions:[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],autoDetectProduct:!0,greetingMessage:"Hi! I'm Aura, your shopping assistant. What can I help you with today?",inputPlaceholder:"Ask anything about orders, products...",placeholders:ct,suggestionChips:dt,welcomeMessage:"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",welcomeIconUrl:"",addToCartLabel:"Add to Cart",theme:"default",thinkingStatuses:pt,apiBaseUrl:""};function bt(r={}){return{...ht,...r}}function ut(r){const t=r.position.includes("left"),i=r.primaryColor||"#2563eb",s="#4f46e5",o=`linear-gradient(135deg, ${i}, ${s})`,n=`linear-gradient(135deg, ${i}, ${s})`,a="linear-gradient(180deg, #f8fafc, #eef2ff)",e="0 20px 50px rgba(0,0,0,0.15)",l="0 6px 14px rgba(0,0,0,0.08)",p="#111827",d="#6b7280",c="1px solid #e5e7eb",m="16px",u="#60a5fa",h=`background: #fff; border: ${c};`,y=`
        background: #fff;
        border: ${c};
        border-radius: ${m};
        box-shadow: ${l};
    `;return`
        /* Design-Chatbot-Widget (Aura Concierge) carbon copy */
        :host {
            --primary-color: ${i};
            --primary-indigo: ${s};
            --text-color: #ffffff;
            --bg-color: #ffffff;
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --shadow-panel: ${e};
            --border-radius: 18px;
            --transition-speed: 0.3s;
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
            ${r.position.includes("bottom")?`bottom: ${r.marginBottom}px;`:`top: ${r.marginBottom}px;`}
            ${t?`left: ${r.marginSide}px;`:`right: ${r.marginSide}px;`}
            z-index: 999999;
            display: flex;
            flex-direction: column;
            align-items: ${t?"flex-start":"flex-end"};
            pointer-events: none; /* Let clicks pass through wrapper */
            max-width: calc(100% - ${r.marginSide*2}px);
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
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            z-index: 2;
            animation: launcher-float 2s ease-in-out infinite;
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
            top: -2px;
            right: -2px;
            min-width: 20px;
            height: 20px;
            padding: 0 5px;
            border-radius: 50%;
            background: #f43f5e;
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            transform-origin: center;
        }
        .chatbot-launcher-badge.cart-badge-pop {
            animation: cart-badge-pop 220ms cubic-bezier(0.3, 1.4, 0.6, 1) forwards;
        }
        @keyframes cart-badge-pop {
            0% { transform: scale(0); }
            60% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }

        /* Chat Window — Design-Chatbot-Widget: 360×600, 18px radius, gradient glass */
        .chatbot-window {
            width: 360px;
            max-width: min(360px, calc(100vw - ${r.marginSide*2+8}px));
            height: 600px;
            max-height: min(600px, calc(100vh - ${r.marginBottom+80}px));
            min-height: 400px;
            background: ${a};
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 18px;
            box-shadow: ${e};
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 24px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(30px) scale(0.95);
            transition: opacity 0.3s cubic-bezier(0.16, 0.84, 0.44, 1),
                        transform 0.3s cubic-bezier(0.16, 0.84, 0.44, 1),
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
        
        /* Header — 64px, gradient, white text, avatar + title + status, cart + close */
        .chatbot-header {
            height: 64px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${o};
            color: #fff;
            flex-shrink: 0;
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
            border: none;
            background: transparent;
            color: #fff;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        }
        .chatbot-header-btn:hover {
            background: rgba(255,255,255,0.1);
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
            color: ${i};
            font-size: 10px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Message List — Design-Chatbot-Widget: 16px padding, 12px gap, scrollbar hidden */
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

        /* Message entrance animations — GPU-friendly */
        .chatbot-message.msg-enter-user {
            opacity: 0;
            transform: translateX(16px);
            animation: msg-enter-user 0.35s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
        }
        .chatbot-message.msg-enter-bot {
            opacity: 0;
            transform: translateX(-16px);
            animation: msg-enter-bot 0.35s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
        }
        .chatbot-message.msg-enter-product {
            opacity: 0;
            transform: scale(0.92);
            animation: msg-enter-product 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes msg-enter-user {
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes msg-enter-bot {
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes msg-enter-product {
            to { opacity: 1; transform: scale(1); }
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

        /* Message bubbles — Design-Chatbot-Widget: bot = white 20px radius, user = gradient */
        .chatbot-bubble {
            padding: 14px 16px;
            font-size: 14px;
            line-height: 1.5;
            max-width: 75%;
            word-break: break-word;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            position: relative;
        }
        .chatbot-message.bot .chatbot-bubble {
            border-radius: 20px 20px 20px 6px;
            background: #fff;
            color: ${p};
            box-shadow: ${l};
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
            ${y}
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
            color: ${d};
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
            border: ${c};
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
            box-shadow: ${l};
            flex-shrink: 0;
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
            border: ${c};
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
        }

        .chatbot-product-action:disabled {
            background: #ccc;
            cursor: not-allowed;
        }

        /* Input Area — Design-Chatbot-Widget: white wrapper, rounded-[28px], focus ring */
        .chatbot-input-area {
            display: flex;
            align-items: center;
            gap: 0;
            padding: 16px;
            padding-bottom: calc(16px + env(safe-area-inset-bottom, 0));
            background: transparent;
        }
        .chatbot-input-wrap {
            flex: 1;
            display: flex;
            align-items: center;
            background: #fff;
            border: ${c};
            border-radius: 28px;
            padding: 10px 14px 10px 12px;
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .chatbot-input-wrap:focus-within {
            border-color: ${i};
            box-shadow: 0 0 0 3px rgba(37,99,235,0.25);
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
            width: 32px;
            height: 32px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #d1d5db;
            color: #fff;
            flex-shrink: 0;
            transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }
        .chatbot-send-btn.active {
            background: ${o};
            box-shadow: 0 4px 10px rgba(37,99,235,0.3);
        }
        .chatbot-send-btn.active:hover {
            transform: scale(1.1);
        }
        .chatbot-send-btn:active {
            transform: scale(0.95);
        }
        .chatbot-send-btn svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
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
        /* Footer — Design-Chatbot-Widget: "Powered by Aura AI" */
        .chatbot-footer {
            padding: 12px 16px;
            text-align: center;
            flex-shrink: 0;
        }
        .chatbot-footer p {
            margin: 0;
            font-size: 12px;
            color: #6b7280;
        }

        /* Toast notifications — top-center inside shadow root */
        .chatbot-toast-host {
            position: fixed;
            top: 16px;
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
            padding: 10px 12px;
            border-radius: 16px;
            background: #ffffff;
            box-shadow: 0 16px 40px rgba(15,23,42,0.35);
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transform: translateY(-12px) scale(0.96);
            transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }
        .chatbot-toast-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .chatbot-toast-image-wrap {
            width: 40px;
            height: 40px;
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

        /* Welcome Bubble — Design-Chatbot-Widget: white, blue text, rounded-2xl */
        .welcome-bubble {
            position: absolute;
            bottom: 72px;
            ${t?"left: 0;":"right: 0;"}
            background: #fff;
            color: ${i};
            padding: 12px 20px;
            border-radius: 16px;
            box-shadow: 0 0 40px rgba(37,99,235,0.25);
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            opacity: 1;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: auto;
            transform-origin: bottom ${t?"left":"right"};
            animation: welcome-float 3s ease-in-out infinite;
        }
        .welcome-bubble.hidden {
            opacity: 0;
            transform: scale(0.9) translateY(8px);
            pointer-events: none;
        }
        @keyframes welcome-float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
        }

        /* Typing indicator — Design-Chatbot-Widget: white bubble, 3 dots */
        .typing-indicator-wrapper {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            align-self: flex-start;
        }
        .typing-indicator-wrapper .chatbot-message-avatar {
            flex-shrink: 0;
        }
        .message-bubble.typing-indicator {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 14px 16px;
            border-radius: 20px 20px 20px 6px;
            background: #fff;
            box-shadow: ${l};
        }
        .typing-indicator .dot {
            width: 6px;
            height: 6px;
            background-color: #9ca3af;
            border-radius: 50%;
            animation: typing-dot 0.6s infinite ease-in-out both;
        }
        .typing-indicator .dot:nth-child(1) { animation-delay: -0.12s; }
        .typing-indicator .dot:nth-child(2) { animation-delay: -0.06s; }
        .typing-indicator .dot:nth-child(3) { animation-delay: 0s; }
        @keyframes typing-dot {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
            40% { transform: translateY(-4px); opacity: 1; }
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
            border: ${c};
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            transition: box-shadow 0.2s, transform 0.2s;
        }
        .suggestion-chip:hover {
            box-shadow: 0 6px 14px rgba(0,0,0,0.12);
            transform: translateY(-2px);
        }
        .suggestion-chip:active {
            transform: translateY(0);
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

        /* Quick Action Grid (2x2) — Image 1 Refined */
        .chatbot-quick-actions-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-top: 8px;
            width: 100%;
        }

        .quick-action-card {
            background: #fff;
            border-radius: 12px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0, 0, 0, 0.06);
            text-align: left;
        }

        .quick-action-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            border-color: rgba(37, 99, 235, 0.1);
        }

        .quick-action-icon-box {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(37, 99, 235, 0.06);
            color: ${i};
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
            box-shadow: ${l};
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
            background: ${i};
            color: #fff;
        }

        .checkout-form-card {
            background: #fff;
            border-radius: 16px;
            padding: 16px;
            box-shadow: ${l};
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
            border-color: ${i};
            box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
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
            border: 2px solid #111827;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .address-icon-box {
            padding: 10px;
            border-radius: 12px;
            background: ${i};
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
            font-size: 13px;
            font-weight: 600;
            color: ${p};
        }

        .address-type {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 2px 6px;
            background: #f3f4f6;
            color: #6b7280;
            border-radius: 4px;
        }

        .address-text {
            font-size: 11px;
            color: ${d};
            line-height: 1.4;
        }

        .address-phone {
            font-size: 10px;
            color: #9ca3af;
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 4px;
        }

        .checkout-add-address {
            width: 100%;
            padding: 12px;
            border: 2px dashed #d1d5db;
            border-radius: 16px;
            background: transparent;
            color: ${d};
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: all 0.2s;
        }

        .checkout-add-address:hover {
            border-color: ${i};
            color: ${i};
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
            border: 2px solid #111827;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .method-icon-box {
            padding: 10px;
            border-radius: 12px;
            background: ${i};
            color: #fff;
        }

        .checkout-method-card:not(.selected) .method-icon-box {
            background: rgba(37, 99, 235, 0.05);
            color: ${i};
        }

        .method-info h4 {
            font-size: 13px;
            font-weight: 600;
            color: ${p};
        }

        .method-info p {
            font-size: 11px;
            color: ${d};
        }

        .checkout-summary-card {
            background: #fff;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            gap: 12px;
            border: 1px solid #f3f4f6;
            margin-top: 8px;
        }

        .summary-title {
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            color: ${p};
            letter-spacing: 0.08em;
            margin-bottom: 4px;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: ${d};
        }

        .summary-row.total {
            margin-top: 8px;
            padding-top: 12px;
            border-top: 2px solid #f3f4f6;
            font-weight: 800;
            font-size: 16px;
            color: ${p};
        }

        .total-value {
            color: ${i};
            font-size: 22px;
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
            padding: 6px 12px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            color: ${d};
        }

        .order-number-badge b {
            color: ${p};
            font-size: 12px;
        }

        .stock-in { color: #22c55e; font-size: 12px; }
        .stock-out { color: #ef4444; font-size: 12px; }
        .price-original { text-decoration: line-through; color: ${d}; font-size: 12px; margin-left: 6px; }

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
                max-height: min(520px, calc(100cqb - ${r.marginBottom+98}px));
                min-height: min(320px, calc(100cqb - ${r.marginBottom+98}px));
            }
        }
    `}const gt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>';function mt(r,t={}){const{onClose:i,onCartClick:s,cartCount:o=0}=t,n=document.createElement("header");n.className="chatbot-header";const a=r.botName??"Aura Concierge",e=r.headerStatus??"Always Available",l=document.createElement("div");l.className="chatbot-header-left";const p=document.createElement("div");if(p.className="chatbot-header-avatar",r.botAvatarUrl){const k=document.createElement("img");k.src=r.botAvatarUrl,k.alt=`${a} avatar`,p.appendChild(k)}else p.innerHTML=gt;const d=document.createElement("div");d.className="chatbot-header-info";const c=document.createElement("h3");c.className="chatbot-header-title",c.textContent=a;const m=document.createElement("div");m.className="chatbot-header-row";const u=document.createElement("span");u.className="chatbot-header-status-dot";const h=document.createElement("span");h.className="chatbot-header-status",h.textContent=e,m.appendChild(u),m.appendChild(h),d.appendChild(c),d.appendChild(m),l.appendChild(p),l.appendChild(d),n.appendChild(l);const y=document.createElement("div");if(y.className="chatbot-header-actions",typeof s=="function"){const k=document.createElement("button");if(k.type="button",k.className="chatbot-header-btn",k.setAttribute("aria-label","View cart"),k.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',o>0){const M=document.createElement("span");M.className="chatbot-cart-badge",M.textContent=o>99?"99+":String(o),k.style.position="relative",k.appendChild(M)}k.addEventListener("click",s),y.appendChild(k)}const w=document.createElement("button");return w.type="button",w.className="chatbot-header-btn",w.setAttribute("aria-label","Close"),w.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',w.addEventListener("click",()=>i&&i()),y.appendChild(w),n.appendChild(y),n}function tt(r,t={}){const i=t.strength??.15,s=t.radius??80;if(!r||typeof r.addEventListener!="function")return;let o=null,n=0,a=0,e=0,l=0;const p=(c,m,u)=>c+(m-c)*u,d=()=>{n=p(n,e,.2),a=p(a,l,.2),Math.abs(n-e)<.01&&(n=e),Math.abs(a-l)<.01&&(a=l),r.style.transform=`translate(${n}px, ${a}px)`,Math.abs(n)>.01||Math.abs(a)>.01||e!==0||l!==0?o=requestAnimationFrame(d):(o=null,r.style.willChange="")};return r.addEventListener("mouseenter",()=>{r.style.willChange="transform"}),r.addEventListener("mouseleave",()=>{e=0,l=0,o||(o=requestAnimationFrame(d))}),r.addEventListener("mousemove",c=>{const m=r.getBoundingClientRect(),u=m.left+m.width/2,h=m.top+m.height/2,y=c.clientX-u,w=c.clientY-h,k=Math.sqrt(y*y+w*w);if(k<s){const M=(1-k/s)*i;e=y*M,l=w*M}else e=0,l=0;o||(o=requestAnimationFrame(d))}),()=>{o&&cancelAnimationFrame(o)}}function ft(){const r=document.createElement("div");return r.className="chatbot-messages",r.id="chatbot-messages-container",r}function K(r){if(!r)return"";let t=r;return t=t.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g,(i,s,o)=>{const n=s.split("|").filter(e=>e.trim()).map(e=>`<th>${e.trim()}</th>`).join(""),a=o.trim().split(`
`).filter(e=>e.trim()).map(e=>`<tr>${e.split("|").filter(p=>p.trim()).map(p=>`<td>${p.trim()}</td>`).join("")}</tr>`).join("");return`<div class="md-table-wrap"><table><thead><tr>${n}</tr></thead><tbody>${a}</tbody></table></div>
`}),t=t.replace(/^>\s?(.*)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^###\s+(.+)$/gm,'<h3 class="md-h3">$1</h3>'),t=t.replace(/^##\s+(.+)$/gm,'<h2 class="md-h2">$1</h2>'),t=t.replace(/^#\s+(.+)$/gm,'<h1 class="md-h1">$1</h1>'),t=t.replace(/^---+$/gm,'<hr class="md-hr"/>'),t=t.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm,i=>`<ul class="md-list">${i.trim().split(`
`).map(o=>`<li>${o.replace(/^[ \t]*[-*]\s+/,"")}</li>`).join("")}</ul>
`),t=t.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*\n]+?)\*/g,"<em>$1</em>"),t=t.replace(/`([^`]+)`/g,'<code class="md-code">$1</code>'),t=t.replace(/\n{2,}/g,'</p><p class="md-p">'),t=t.replace(/\n/g,"<br/>"),t=`<p class="md-p">${t}</p>`,t}function xt(){const r=document.createElement("span");r.className="chatbot-timestamp";const t=new Date,i=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return r.textContent=`${i}:${s}`,r}function q(r,t=!0,i=null,s=null){const o=document.createElement("div");o.className=`chatbot-message ${t?"bot":"user"} ${t?"msg-enter-bot":"msg-enter-user"}`;const n=document.createElement("div");if(n.className="chatbot-bubble",t){const l=i!=null&&i.launcherIconUrl?`<img src="${i.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';o.innerHTML=`
            <div class="chatbot-message-avatar">
                ${l}
            </div>
        `;const p=/\[Action:\s*(.*?)\]/g;let d=[],c=r.replace(p,(m,u)=>(d.push(u),""));if(n.innerHTML=K(c),o.appendChild(n),d.length>0&&s){const m=document.createElement("div");m.className="chatbot-actions",d.forEach(u=>{const h=document.createElement("button");h.type="button",h.className="action-btn",h.textContent=u,h.onclick=()=>s(u),tt(h,{strength:.1,radius:50}),m.appendChild(h)}),o.appendChild(m)}}else n.innerHTML=K(r),o.appendChild(n);const a=document.createElement("div");a.className=`chatbot-message-ts-row ${t?"ts-bot":"ts-user"}`;const e=xt();return a.appendChild(e),o.appendChild(a),o}function rt(r,t,i=null){const s=document.createElement("div");s.className="chatbot-message bot-message msg-enter-product";const n=`
        <div class="chatbot-message-avatar">
            ${i!=null&&i.launcherIconUrl?`<img src="${i.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>'}
        </div>
    `,a=document.createElement("div");a.style.display="flex",a.style.width="100%",a.innerHTML=n;const e=document.createElement("div");e.className="carousel-container",e.style.flex="1",e.style.minWidth="0",e.style.display="flex",e.style.flexDirection="column",e.style.gap="6px";const l=["Have a look","Choose from these","Here are some picks"],p=l[Math.floor(Math.random()*l.length)],d=document.createElement("div");d.className="carousel-heading",d.textContent=p,e.appendChild(d);const c=document.createElement("div");c.className="carousel-row",c.style.display="flex",c.style.alignItems="center",c.style.position="relative";const m=document.createElement("button");m.className="carousel-nav-btn carousel-nav-left",m.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';const u=document.createElement("button");u.className="carousel-nav-btn carousel-nav-right",u.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';const h=document.createElement("div");h.className="chatbot-product-carousel";const y=232;return m.addEventListener("click",()=>{h.scrollBy({left:-y,behavior:"smooth"})}),u.addEventListener("click",()=>{h.scrollBy({left:y,behavior:"smooth"})}),r.forEach(w=>{const k=document.createElement("div");k.className="carousel-card",k.innerHTML=`
            <img src="${w.image||"https://placehold.co/300x200?text=Product"}" class="chatbot-product-img" alt="${w.title||"Product Image"}" />
            <div class="chatbot-product-content">
                <div class="chatbot-product-header">
                    <h4>${w.title||"Unknown Product"}</h4>
                    <span class="chatbot-product-price">${w.price||""}</span>
                </div>
            </div>
        `;const M=k.querySelector(".chatbot-product-content");let T=null;if(w.sizes&&Array.isArray(w.sizes)){const z=document.createElement("div");z.className="chatbot-product-sizes";const L=document.createElement("div");L.className="sizes-list",w.sizes.forEach(G=>{const W=document.createElement("button");W.className="size-pill",W.innerText=G,W.addEventListener("click",()=>{L.querySelectorAll(".size-pill").forEach(V=>V.classList.remove("selected")),W.classList.add("selected"),T=G}),L.appendChild(W)}),z.appendChild(L),M.appendChild(z)}const N=document.createElement("div");N.className="chatbot-product-action",N.innerText=(i==null?void 0:i.addToCartLabel)||"Add to Cart",N.addEventListener("click",()=>{if(w.sizes&&!T){alert("Please select a size first!");return}t&&t(w,T)}),M.appendChild(N),yt(k,"carousel-card-3d"),h.appendChild(k)}),c.appendChild(m),c.appendChild(h),c.appendChild(u),e.appendChild(c),a.appendChild(e),s.appendChild(a),s}function yt(r,t="chatbot-product-card-3d"){r&&(r.classList.add(t),r.addEventListener("mousemove",i=>{const s=r.getBoundingClientRect(),o=(i.clientX-s.left)/s.width,a=((i.clientY-s.top)/s.height-.5)*8,e=(o-.5)*-8,l=4;r.style.transform=`perspective(800px) rotateX(${a}deg) rotateY(${e}deg) translateY(-${l}px)`}),r.addEventListener("mouseleave",()=>{r.style.transform=""}))}function vt(){const r=document.createElement("div");return r.className="chatbot-message bot msg-enter-bot",r.setAttribute("data-skeleton","true"),r.innerHTML=`
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `,r}function wt(r,t,i){if(!r||r.length===0)return null;const s=document.createElement("div");return s.className="chatbot-suggestion-chips",r.forEach(o=>{const n=document.createElement("button");n.type="button",n.className="suggestion-chip",n.textContent=o,n.addEventListener("click",()=>t(o)),tt(n,{strength:.1,radius:50}),s.appendChild(n)}),s}function nt(r,t={}){if(!r||!r.items||!Array.isArray(r.items))return null;const{items:i,total:s}=r,{onCheckout:o,onAddMore:n}=t,a=document.createElement("div");a.className="chatbot-section-card chatbot-cart-card msg-enter-product";const e=typeof s=="number"?`$${s.toFixed(2)}`:s||"$0.00",l='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';let p=i.length===0?'<div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>':i.map(u=>{const h=u.originalPrice?`<span class="price-original">${u.originalPrice}</span>`:"",w=(u.stockStatus||"").toLowerCase().includes("out of stock")?"stock-out":"stock-in";return`
            <div class="chatbot-section-card-row chatbot-cart-item">
                <img class="chatbot-cart-item-img" src="${u.image||"https://placehold.co/80x80?text=Product"}" alt="${(u.title||"").slice(0,30)}" />
                <div class="chatbot-cart-item-info">
                    <div class="chatbot-cart-item-title">${u.title||"Product"}</div>
                    <div class="chatbot-cart-item-pricing">
                        <span class="chatbot-product-price">${u.price||""}</span>${h}
                    </div>
                    <div class="${w}">${u.stockStatus||"In Stock"}</div>
                </div>
            </div>
        `}).join("");p+=`
        <div class="chatbot-section-card-row chatbot-cart-total-row">
            <span class="chatbot-cart-total-label">Grand Total</span>
            <span class="chatbot-cart-total-value">${e}</span>
        </div>
    `;const d=i.length>0&&o?`<div class="chatbot-cart-checkout-footer">
            <p class="chatbot-cart-checkout-prompt">Would you like to proceed to checkout?</p>
            <button type="button" class="chatbot-cart-checkout-btn">Proceed to checkout</button>
        </div>`:"",c=i.length>0&&(o||n),m=c?`<div class="chatbot-cart-suggestions">
            <p class="chatbot-cart-suggestions-text">Add something else? Or proceed to checkout.</p>
            <div class="chatbot-cart-suggestion-pills"></div>
        </div>`:"";if(a.innerHTML=`
        <div class="chatbot-section-card-title chatbot-cart-card-title">
            <div style="display: flex; align-items: center; gap: 8px;">
                ${l}
                <span>Your Cart</span>
            </div>
            <button type="button" class="chatbot-cart-edit-link" style="background: none; border: none; color: ${primary}; font-size: 12px; font-weight: 600; cursor: pointer; padding: 0;">Edit Bag</button>
        </div>
        <div class="chatbot-section-card-body">${p}</div>
        ${d}
        ${m}
    `,i.length>0&&o){const u=a.querySelector(".chatbot-cart-checkout-btn");u&&u.addEventListener("click",()=>o());const h=a.querySelector(".chatbot-cart-edit-link");h&&h.addEventListener("click",()=>n&&n())}if(c){const u=a.querySelector(".chatbot-cart-suggestion-pills");if(u){if(n){const h=document.createElement("button");h.type="button",h.className="chatbot-cart-pill",h.textContent="Add another product",h.addEventListener("click",()=>n()),u.appendChild(h)}if(o){const h=document.createElement("button");h.type="button",h.className="chatbot-cart-pill chatbot-cart-pill-checkout",h.textContent="Proceed to checkout",h.addEventListener("click",()=>o()),u.appendChild(h)}}}return a}function st(r){if(!r||!Array.isArray(r))return null;const t=document.createElement("div");t.className="chatbot-section-card chatbot-order-history-card msg-enter-product";const i='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',s=n=>{const a=(n||"").toLowerCase();return a==="delivered"?"order-status-delivered":a==="shipped"?"order-status-shipped":a==="processing"?"order-status-processing":a==="cancelled"?"order-status-cancelled":"order-status-default"};let o=r.length===0?'<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>':r.map(n=>{const a=typeof n.total=="number"?`$${n.total.toFixed(2)}`:n.total!=null?`$${Number(n.total).toFixed(2)}`:"—",e=(n.items||[]).map(l=>`<span class="chatbot-order-item-line">${l.title||"Item"} ${l.price?` · ${l.price}`:""}</span>`).join("");return`
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${n.id||"—"}</span>
                        <span class="chatbot-order-date">${n.date||"—"}</span>
                        <span class="chatbot-order-status ${s(n.status)}">${n.status||"—"}</span>
                    </div>
                    <div class="chatbot-order-items">${e||'<span class="chatbot-order-item-line">No items</span>'}</div>
                    <div class="chatbot-order-total">Total ${a}</div>
                </div>
            `}).join("");return t.innerHTML=`
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${i}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${o}</div>
    `,t}const it=['<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>','<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>'];function kt(r,t={}){const{onAction:i}=t,s=document.createElement("div");return s.className="chatbot-quick-actions-grid",r.forEach((o,n)=>{const a=o.icon!=null?o.icon:it[n]??it[0],e=document.createElement("div");e.className="quick-action-card msg-enter-product",e.innerHTML=`
            <div class="quick-action-icon-box">${a}</div>
            <div class="quick-action-info">
                <span class="quick-action-title">${(o.title||"").replace(/</g,"&lt;")}</span>
                <span class="quick-action-desc">${(o.desc||"").replace(/</g,"&lt;")}</span>
            </div>
        `;const l=o.message!=null?o.message:o.title||"";e.onclick=()=>i("quickAction",{...o,message:l}),s.appendChild(e)}),s}function Ct(r,t={}){const{step:i,data:s,state:o}=r,{onAction:n}=t,a=document.createElement("div");if(a.className="chatbot-checkout-wrapper msg-enter-product",i==="mobile"){a.innerHTML=`
            <div class="checkout-auth-tabs">
                <button class="checkout-auth-tab active">Login</button>
                <button class="checkout-auth-tab">Sign Up</button>
            </div>
            <div class="checkout-form-card">
                <div class="checkout-field">
                    <label>Mobile Number</label>
                    <div class="checkout-input-wrap">
                        <span style="position: absolute; left: 12px; font-size: 13px; font-weight: 600; color: ${colorTextMain}">+91</span>
                        <input type="tel" class="checkout-input" style="padding-left: 45px" placeholder="9876543210" id="checkout-mobile" value="${o.mobile||""}" />
                    </div>
                </div>
                <button class="checkout-primary-btn" id="mobile-submit-btn">
                    Continue <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span style="font-size: 11px; color: #9ca3af; font-weight: 500;">Encrypted and secure</span>
                </div>
            </div>
        `;const e=a.querySelector("#mobile-submit-btn");e.onclick=()=>n("submitMobile",{mobile:a.querySelector("#checkout-mobile").value})}else if(i==="otp"){a.innerHTML=`
            <div class="checkout-form-card">
                <h3 style="font-size: 15px; font-weight: 700; color: ${colorTextMain}; text-align: center; margin-bottom: 4px;">Enter OTP</h3>
                <p style="font-size: 12px; color: ${colorTextMuted}; text-align: center; margin-bottom: 12px;">We've sent a 4-digit code to +91 ${o.mobile}</p>
                <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 16px;">
                    <input type="text" maxlength="1" class="checkout-input" style="padding: 10px; width: 45px; text-align: center; font-size: 18px; font-weight: 700;" id="otp-1" />
                    <input type="text" maxlength="1" class="checkout-input" style="padding: 10px; width: 45px; text-align: center; font-size: 18px; font-weight: 700;" id="otp-2" />
                    <input type="text" maxlength="1" class="checkout-input" style="padding: 10px; width: 45px; text-align: center; font-size: 18px; font-weight: 700;" id="otp-3" />
                    <input type="text" maxlength="1" class="checkout-input" style="padding: 10px; width: 45px; text-align: center; font-size: 18px; font-weight: 700;" id="otp-4" />
                </div>
                <button class="checkout-primary-btn" id="otp-verify-btn">
                    Verify & Continue <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                <button style="background: none; border: none; color: ${primary}; font-size: 12px; font-weight: 600; cursor: pointer; margin-top: 8px;">Resend code in 0:45</button>
            </div>
        `;const e=a.querySelectorAll("input");e.forEach((p,d)=>{p.oninput=c=>{c.target.value&&d<3&&e[d+1].focus()}});const l=a.querySelector("#otp-verify-btn");l.onclick=()=>n("verifyOtp")}else if(i==="address"){const e=s.addresses||[],l=o.selectedAddressId;let p=e.map(c=>`
            <div class="checkout-address-card ${c.id===l?"selected":""}" data-id="${c.id}">
                <div class="address-icon-box">
                    ${c.type==="home"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22V12h6v10"/></svg>'}
                </div>
                <div class="address-info">
                    <div class="address-header">
                        <span class="address-name" style="font-size: 15px;">${c.name}</span>
                        <span class="address-type" style="margin-left: 6px;">${c.type}</span>
                    </div>
                    <div class="address-text" style="font-size: 13px;">${c.street}</div>
                    <div class="address-text" style="font-size: 13px;">${c.city}, ${c.zip}</div>
                    <div class="address-phone" style="font-size: 12px; margin-top: 6px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        ${c.phone}
                    </div>
                </div>
                ${c.id===l?`
                    <div class="selection-check-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                `:""}
            </div>
        `).join("");a.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${p}
                <button class="checkout-add-address" style="border-radius: 20px; padding: 14px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add New Address
                </button>
                ${l?`
                    <button class="checkout-primary-btn" id="addr-continue-btn" style="padding: 14px;">
                        Continue to Payment <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                `:""}
            </div>
        `,a.querySelectorAll(".checkout-address-card").forEach(c=>{c.onclick=()=>n("selectAddress",{id:c.dataset.id})});const d=a.querySelector("#addr-continue-btn");d&&(d.onclick=()=>n("continueToPayment"))}else if(i==="payment"){const e=o.paymentMethod;a.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <div class="checkout-method-card ${e==="cod"?"selected":""}" data-method="cod">
                    <div class="method-icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/><path d="M2 10h20"/><path d="M2 14h20"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 style="font-size: 15px;">Cash on Delivery</h4>
                        <p style="font-size: 13px;">Pay when you receive</p>
                    </div>
                    ${e==="cod"?`
                        <div class="selection-check-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                    `:""}
                </div>
                <div class="checkout-method-card ${e==="prepaid"?"selected":""}" data-method="prepaid">
                    <div class="method-icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    </div>
                    <div class="method-info">
                        <h4 style="font-size: 15px;">Credit / Debit Card</h4>
                        <p style="font-size: 13px;">Secure payment</p>
                    </div>
                    ${e==="prepaid"?`
                        <div class="selection-check-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                    `:""}
                </div>
                
                ${e?`
                    <div class="checkout-summary-card">
                        <h4 class="summary-title">Order Summary</h4>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span>$${s.subtotal.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Shipping</span>
                            <span style="color: #10b981; font-weight: 700;">FREE</span>
                        </div>
                        <div class="summary-row">
                            <span>Tax (10%)</span>
                            <span>$${(s.subtotal*.1).toFixed(2)}</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span class="total-value">$${(s.subtotal*1.1).toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="checkout-primary-btn" id="place-order-btn" style="background: ${primary}; padding: 14px; margin-top: 4px;">
                        Place Order <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                `:""}
            </div>
        `,a.querySelectorAll(".checkout-method-card").forEach(p=>{p.onclick=()=>n("selectPayment",{method:p.dataset.method})});const l=a.querySelector("#place-order-btn");l&&(l.onclick=()=>n("placeOrder"))}else if(i==="confirmation"){const e=s.orderId||`ORD-${Math.floor(Math.random()*1e4)}`;a.innerHTML=`
            <div class="checkout-confirmation">
                <div class="success-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style="font-size: 18px; font-weight: 800; color: #111827;">Order Confirmed!</h3>
                <p style="font-size: 14px; color: #4b5563; line-height: 1.6;">Your order has been placed successfully. You'll receive a confirmation email shortly.</p>
                <div class="order-number-badge" style="padding: 10px 20px; border-radius: 25px;">
                    <span style="font-size: 13px;">Order #</span>
                    <b style="font-size: 15px;">${e}</b>
                </div>
            </div>
        `}return a}const $t='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Et='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';function St(r,t){const i=document.createElement("div");i.className="chatbot-input-area",i.setAttribute("data-region","input-bar");const s=t.placeholders&&t.placeholders.length>0?t.placeholders:ct,o=t.inputPlaceholder||s[0],n=document.createElement("div");n.className="chatbot-input-wrap";const a=document.createElement("button");a.type="button",a.className="chatbot-attach-btn",a.setAttribute("aria-label","Attach"),a.innerHTML=$t;const e=document.createElement("input");e.type="text",e.placeholder=o,e.className="chatbot-input",e.setAttribute("aria-label","Message input");const l=document.createElement("button");l.type="button",l.className="chatbot-send-btn",l.setAttribute("aria-label","Send message"),l.innerHTML=Et;const p=()=>{e.value.trim()?l.classList.add("active"):l.classList.remove("active")};e.addEventListener("input",p),e.addEventListener("focus",p),e.addEventListener("blur",p),p();let d=0;const m=setInterval(()=>{!e.matches(":focus")&&s.length>1&&(d=(d+1)%s.length,e.placeholder=s[d])},3500);e.addEventListener("focus",()=>{e.placeholder=t.inputPlaceholder||"Ask anything about orders, products..."}),e.addEventListener("blur",()=>{e.placeholder=s[d%s.length]});const u=()=>{const h=e.value.trim();h&&(r(h),e.value="",d=0,e.placeholder=s[0],p())};return e.addEventListener("keypress",h=>{h.key==="Enter"&&u()}),l.addEventListener("click",u),n.appendChild(a),n.appendChild(e),n.appendChild(l),i.appendChild(n),tt(l,{strength:.12,radius:60}),i.destroy=()=>clearInterval(m),i}function zt(r="Thinking..."){const t=document.createElement("div");t.className="chatbot-message bot typing-indicator-wrapper msg-enter-bot";const i=document.createElement("div");i.className="chatbot-message-avatar",i.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';const s=document.createElement("div");return s.className="message-bubble typing-indicator",s.setAttribute("aria-live","polite"),s.setAttribute("role","status"),s.innerHTML='<span class="dot"></span><span class="dot"></span><span class="dot"></span>',t.appendChild(i),t.appendChild(s),t.setStatus=()=>{},t}const Mt="http://localhost:3000";async function Lt(r,t=[],i,s,o,n="default",a=null,e=null,l=null,p=null){const c=`${(p||Mt).replace(/\/$/,"")}/api/chat`;try{const m=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r,history:t,sessionId:n})});if(!m.ok)throw new Error;const u=m.body.getReader(),h=new TextDecoder;let y="";for(;;){const{value:w,done:k}=await u.read();if(k)break;y+=h.decode(w,{stream:!0});const M=y.split(`
`);y=M.pop();for(const T of M)if(T.startsWith("data: ")){const N=T.replace("data: ","").trim();try{if(N){const z=JSON.parse(N);z.type==="text"&&i&&i(z.content),z.type==="carousel"&&s&&s(z.content),z.type==="cart"&&e&&e(z.content),z.type==="orderHistory"&&l&&l(z.content),z.type==="status"&&a&&a(z.content),z.type==="done"&&o&&o()}}catch{}}}}catch(m){console.error("AI Service Error:",m),i&&i("My neural network is temporarily offline."),o&&o()}}function At(r,t=[],i=4){if(!t||t.length===0)return[];const s=(r||"").toLowerCase(),o=t.map(a=>{const e=a.toLowerCase();let l=0;const p=e.split(/\s+/).filter(d=>d.length>2);for(const d of p)s.includes(d)&&(l+=2),s.includes(d.replace(/[^a-z0-9]/g,""))&&(l+=1);return a.toLowerCase().includes("sneaker")&&(s.includes("sneaker")||s.includes("shoe"))&&(l+=3),a.toLowerCase().includes("trending")&&(s.includes("trending")||s.includes("bestseller")||s.includes("popular"))&&(l+=3),a.toLowerCase().includes("sale")&&(s.includes("sale")||s.includes("price")||s.includes("$"))&&(l+=2),a.toLowerCase().includes("running")&&s.includes("running")&&(l+=3),a.toLowerCase().includes("jacket")&&(s.includes("jacket")||s.includes("apparel"))&&(l+=2),{label:a,score:l}});o.sort((a,e)=>e.score-a.score);const n=o.filter(a=>a.score>0).slice(0,i).map(a=>a.label);return n.length===0&&s.length<500?t.slice(0,Math.min(3,i)):n}function Tt(r){if(!r)return null;const t=document.createElement("div");return t.className="chatbot-toast-host",r.appendChild(t),{showToast:({title:s,message:o,image:n,duration:a=3e3}={})=>{const e=document.createElement("div");e.className="chatbot-toast",e.innerHTML=`
            ${n?`<div class="chatbot-toast-image-wrap"><img src="${n}" alt="" /></div>`:""}
            <div class="chatbot-toast-content">
                ${s?`<div class="chatbot-toast-title">${s}</div>`:""}
                ${o?`<div class="chatbot-toast-message">${o}</div>`:""}
            </div>
        `,t.appendChild(e),requestAnimationFrame(()=>{e.classList.add("chatbot-toast-visible")}),setTimeout(()=>{e.classList.remove("chatbot-toast-visible"),e.addEventListener("transitionend",()=>{e.remove()},{once:!0})},a)}}}function Nt(r){const t=bt(r);console.log("Chatbot initialized in Shadow DOM with config:",t);let i=sessionStorage.getItem("ecom-session-id");i||(i="sess_"+Math.random().toString(36).substring(2,9),sessionStorage.setItem("ecom-session-id",i));const s=t.parentElement||document.body,o=s.querySelector("#ecom-chatbot-host");o&&o.remove();const n=document.createElement("div");n.id="ecom-chatbot-host",s.appendChild(n);const a=n.attachShadow({mode:"open"}),e=Tt(a),l=document.createElement("style");l.textContent=ut(t),a.appendChild(l);const p=document.createElement("div");p.className="ecom-chatbot-wrapper";const d=document.createElement("div");d.className="chatbot-window";const c=ft();function m(){c.scrollTo({top:c.scrollHeight,behavior:"smooth"})}function u(){let b=null;Array.from(c.children).filter(g=>g.classList&&!g.hasAttribute("data-skeleton")&&(g.classList.contains("chatbot-message")||g.classList.contains("typing-indicator-wrapper"))).forEach(g=>{const x=g.classList.contains("user"),C=g.classList.contains("bot")||g.classList.contains("typing-indicator-wrapper"),B=x?"user":C?"bot":null;B&&(g.classList.remove("group-same","group-first"),b===B?g.classList.add("group-same"):g.classList.add("group-first"),b=B)})}let h=[];try{const b=sessionStorage.getItem("ecom-chat-history");b&&(h=JSON.parse(b),console.log("Restored chat history from session:",h))}catch(b){console.error("Failed to parse session chat history",b)}let y={step:null,authMode:"login",name:"",email:"",selectedAddressId:null,paymentMethod:"",subtotal:0};const w=[{id:"1",type:"home",name:"John Doe",street:"123 Main St, Apt 4B",city:"New York",state:"NY",zip:"10001",phone:"+1 (555) 012-3456"}],k=async(b,f)=>{b==="changeAuthMode"?(y.authMode=f.mode,T()):b==="submitMobile"?(y.mobile=f.mobile,y.step="otp",T()):b==="verifyOtp"?(e.showToast({title:"Success",message:"Mobile verified"}),y.step="address",T()):b==="submitAuth"?(y.email=f.email,y.name=f.name,e.showToast({title:"Success",message:f.mode==="login"?"Logged in successfully":"Account created"}),y.step="address",T()):b==="selectAddress"?(y.selectedAddressId=f.id,T()):b==="continueToPayment"?(y.step="payment",T()):b==="selectPayment"?(y.paymentMethod=f.method,T()):b==="placeOrder"&&(y.step="confirmation",T(),e.showToast({title:"Order Placed",message:"Thank you for your order!"}))};let M=null;const T=()=>{const b={step:y.step,data:{addresses:w,subtotal:y.subtotal},state:y},f=Ct(b,{onAction:k});if(M){const v=(M.querySelector(".chatbot-message-content")||M).querySelector(".chatbot-checkout-wrapper");if(v){v.replaceWith(f),m();return}}const g=q("",!0,t),x=document.createElement("div");x.className="chatbot-message-content";const C=g.querySelector(".chatbot-bubble");C.parentNode.insertBefore(x,C),x.appendChild(C),x.appendChild(f),c.appendChild(g),M=g,m(),u()};let N=0,z=null;const L=async b=>{const f=d.querySelector(".chatbot-presets");f&&f.remove();const g=d.querySelector(".chatbot-quick-actions-grid");g&&g.remove();const x=q(b,!1,t);c.appendChild(x),m();const C=zt();c.appendChild(C),m();const B=[...h];h.push({role:"user",content:b}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h));let v=null,I="",j=!1,F=null,O=null,D=null;const Y=()=>{C.parentNode&&c.removeChild(C),D&&D.parentNode&&c.removeChild(D)},R=()=>{if(X)return;const S=p.querySelector(".chatbot-toggle-btn");if(S&&!S.querySelector(".chatbot-ripple-ring")){const E=document.createElement("span");E.className="chatbot-ripple-ring",S.appendChild(E),setTimeout(()=>E.remove(),1400)}};await Lt(b,B,S=>{Y(),j||(j=!0,R()),v||(v=q("",!0,t,L),c.appendChild(v),F=v),I+=S;const E=v.querySelector(".chatbot-bubble");E&&(E.innerHTML=K(I)),m()},S=>{Y(),j||(j=!0,R());const E=["Here's what we have:","Have a look at these.","Here are some picks."],$=E[Math.floor(Math.random()*E.length)];(!v||!I.trim())&&(v=q($,!0,t,L),c.appendChild(v),I=$);const A=rt(S,W,t);O=S,F=A,c.appendChild(A),h.push({role:"bot",content:"Displayed a product carousel to the user.",carousel:S}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)),u(),m()},()=>{Y(),I&&(h.push({role:"bot",content:I}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)));const S=I||(O?(O||[]).map($=>$.title||"").join(" "):""),E=At(S,t.suggestionChips||[],4);if(E.length>0&&F){const $=wt(E,H=>L(H));$.classList.add("chatbot-chips-below");const A=F.querySelector(".chatbot-bubble");if(A){let H=F.querySelector(".chatbot-message-content");H||(H=document.createElement("div"),H.className="chatbot-message-content",A.parentNode.insertBefore(H,A),H.appendChild(A)),H.appendChild($)}else F.appendChild($)}u(),m()},i,S=>{C.setStatus&&C.setStatus(S),S&&/searching|product|looking for|options|recommend/i.test(S)&&!D&&(D=vt(),c.appendChild(D),m())},S=>{Y(),j||(j=!0,R()),v||(v=q("",!0,t,L),c.appendChild(v));const E=v.querySelector(".chatbot-bubble");let $=v.querySelector(".chatbot-message-content");!$&&E&&($=document.createElement("div"),$.className="chatbot-message-content",E.parentNode.insertBefore($,E),$.appendChild(E));const A=nt(S,{onCheckout:()=>{y.step="mobile",y.subtotal=S.total||0,T()},onAddMore:()=>L("I'd like to add something else")});A&&$?$.appendChild(A):A&&botMsg.appendChild(A);const H=I||"Here’s what’s in your cart:";h.push({role:"bot",content:H,cart:S}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)),u(),m()},S=>{Y(),j||(j=!0,R()),v||(v=q("",!0,t,L),c.appendChild(v));const E=v.querySelector(".chatbot-bubble");let $=v.querySelector(".chatbot-message-content");!$&&E&&($=document.createElement("div"),$.className="chatbot-message-content",E.parentNode.insertBefore($,E),$.appendChild(E));const A=st(S);A&&$?$.appendChild(A):A&&v.appendChild(A);const H=I||"Here’s your order history.";h.push({role:"bot",content:H,orderHistory:S}),sessionStorage.setItem("ecom-chat-history",JSON.stringify(h)),u(),m()},t.apiBaseUrl||void 0)},G=St(L,t),W=(b,f)=>{const g=f?` (Size: ${f})`:"",x=q(`✅ Added 1x **${b.title}** ${g} to your cart for ${b.price}!`,!0,t);c.appendChild(x),u(),m(),window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:b,selectedSize:f}})),z&&z(N+1),e&&b&&e.showToast({title:"Added to cart",message:`${b.title||""} · ${b.price||""}`,image:b.image})};if(h.length>0)h.forEach(b=>{if(b.role==="user")c.appendChild(q(b.content,!1,t));else if(b.role==="bot")if(b.carousel)c.appendChild(rt(b.carousel,W,t));else if(b.cart){const f=q(b.content||"Here’s what’s in your cart:",!0,t),g=f.querySelector(".chatbot-bubble");if(g){const x=document.createElement("div");x.className="chatbot-message-content",g.parentNode.insertBefore(x,g),x.appendChild(g);const C=nt(b.cart,{onCheckout:()=>L("I'd like to proceed to checkout"),onAddMore:()=>L("I'd like to add something else")});C&&x.appendChild(C)}c.appendChild(f)}else if(b.orderHistory){const f=q(b.content||"Here’s your order history.",!0,t),g=f.querySelector(".chatbot-bubble");if(g){const x=document.createElement("div");x.className="chatbot-message-content",g.parentNode.insertBefore(x,g),x.appendChild(g);const C=st(b.orderHistory);C&&x.appendChild(C)}c.appendChild(f)}else b.content&&b.content!=="Displayed a product carousel to the user."&&c.appendChild(q(b.content,!0,t))}),u(),m();else{const b=t.welcomeMessage??"Hi! I'm Aura, your shopping assistant. I can help you discover products, track orders, and more. What brings you here today?",f=q(b,!0,t);c.appendChild(f);const g=[{title:"Browse Collections",desc:"View all products",message:"Show me your collections"},{title:"View Cart",desc:"See shopping bag",message:"View my cart"},{title:"Order Status",desc:"Track orders",message:"Order status"},{title:"Track My Order",desc:"Get updates",message:"Track my order"}],x=t.quickActions&&t.quickActions.length>=4?t.quickActions.slice(0,4):g,C=kt(x,{onAction:(B,v)=>{const I=v.message!=null&&String(v.message).trim()?v.message:v.title;I&&L(I)}});c.appendChild(C),h.push({role:"bot",content:b})}const V=document.createElement("div");V.className="chatbot-orb-wrapper";const P=document.createElement("button");P.type="button",P.className="chatbot-toggle-btn",P.setAttribute("aria-label","Open chat");const J='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';P.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" />`:J,V.appendChild(P);let X=!1,et=!1;const lt=sessionStorage.getItem("ecom-chatbot-open")==="true",U=document.createElement("div");U.className="welcome-bubble",U.innerHTML=`
        <span id="typewriter-bubble" style="vertical-align: middle; font-size: 14px; font-weight: 600;"></span>
    `,setTimeout(()=>{et||U.classList.add("hidden")},5e3);const _=()=>{X=!0,et=!0,sessionStorage.setItem("ecom-chatbot-open","true"),U.classList.add("hidden"),d.classList.add("is-open"),P.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" />`:J,setTimeout(m,50)},Q=()=>{X=!1,sessionStorage.setItem("ecom-chatbot-open","false"),d.classList.remove("is-open"),P.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" />`:J},ot=()=>{U.classList.add("hidden"),X?Q():_()};P.addEventListener("click",ot);const at=mt(t,{onClose:Q,onCartClick:()=>{_(),L("View Cart")},cartCount:0});z=b=>{N=Math.max(0,b||0);const f=at.querySelector('button[aria-label="View cart"]');if(f){let x=f.querySelector(".chatbot-cart-badge");N>0?(x||(x=document.createElement("span"),x.className="chatbot-cart-badge",f.appendChild(x)),x.textContent=N>99?"99+":String(N)):x&&x.remove()}let g=P.querySelector(".chatbot-launcher-badge");N>0?(g||(g=document.createElement("span"),g.className="chatbot-launcher-badge",P.appendChild(g)),g.textContent=N>99?"99+":String(N),g.classList.remove("cart-badge-pop"),g.offsetWidth,g.classList.add("cart-badge-pop")):g&&g.remove()},d.appendChild(at),d.appendChild(c),d.appendChild(G);const Z=document.createElement("div");Z.className="chatbot-footer",Z.innerHTML="<p>Powered by Aura AI</p>",d.appendChild(Z),window.EcomChatbot&&(window.EcomChatbot.open=_,window.EcomChatbot.close=Q,window.EcomChatbot.toggle=ot,window.EcomChatbot.sendMessage=b=>{_(),L(b)},window.EcomChatbot.resetAnimation=()=>{}),p.appendChild(d),p.appendChild(U),p.appendChild(V),a.appendChild(p),lt&&_(),function(){const b=["Hi! I'm Aura, your shopping assistant.","I can help you discover products.","I can track your orders for you.","Looking for the best deals? 🔥","What brings you here today?"],f=a.getElementById("typewriter-bubble");if(!f)return;let g=0,x=0,C=!1,B=!1;const v=68,I=38,j=1800,F=320;f.style.display="inline-block",f.style.minWidth="10px";const O=document.createElement("span");O.textContent="|",O.style.cssText="display:inline-block;margin-left:2px;animation:twCursor 0.8s steps(1) infinite;color:inherit;font-weight:300;opacity:0.7";const D=document.createElement("style");D.textContent="@keyframes twCursor{0%,100%{opacity:1}50%{opacity:0}}",a.appendChild(D),f.appendChild(O);function Y(){if(B)return;const R=b[g];if(C){if(x--,f.firstChild&&f.firstChild!==O&&(f.firstChild.textContent=R.slice(0,x)),x===0){C=!1,g=(g+1)%b.length,B=!0,setTimeout(()=>{B=!1,Y()},F);return}}else if(x++,f.firstChild&&f.firstChild!==O?f.firstChild.textContent=R.slice(0,x):f.insertBefore(document.createTextNode(R.slice(0,x)),O),x===R.length){B=!0,setTimeout(()=>{B=!1,C=!0,Y()},j);return}setTimeout(Y,C?I:v)}f.innerHTML="",f.appendChild(document.createTextNode("")),f.appendChild(O),Y()}()}window.EcomChatbot={init:r=>{Nt(r)}};
