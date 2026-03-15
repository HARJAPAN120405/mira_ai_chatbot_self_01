(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const O={botName:"eCommerce Chat Bot",botSubtitle:"eCommerce",botAvatarUrl:"https://cdn-icons-png.flaticon.com/512/4712/4712035.png",position:"bottom-right",marginBottom:20,marginSide:20,primaryColor:"#2b6cb0",textColor:"#ffffff",backgroundColor:"#ffffff",presetQuestions:["What kind of products do you sell?","Tell me about your store","Do you offer free shipping?"],autoDetectProduct:!0,greetingMessage:"Hi there! How can I help you with your shopping today?",inputPlaceholder:"Type your message",welcomeMessage:"Need help choosing a product?",welcomeIconUrl:"https://cdn-icons-png.flaticon.com/512/8943/8943377.png",addToCartLabel:"Add to Cart"};function W(e={}){return{...O,...e}}function q(e){const t=e.position.includes("left"),o=e.backgroundColor==="#1a202c",r=o?"#1a202c":e.backgroundColor||"#ffffff",a=o?"#2d3748":"#ffffff",n=o?"#4a5568":"#ffffff",p="var(--primary-color)",i=o?"#f7fafc":"#222222",d=o?"#cbd5e0":"#888888",s=o?"1px solid #4a5568":"1px solid #f0f0f0",l=o?"1px solid #718096":"1px solid #eaeaea",g=o?"0 10px 15px -3px rgba(0, 0, 0, 0.5)":"var(--shadow-lg)",u="12px",h=o?`
        background: linear-gradient(#2d3748, #2d3748) padding-box,
                    linear-gradient(135deg, var(--primary-color), #4fd1c5) border-box;
        border: 2px solid transparent;
        border-radius: ${u};
    `:`
        background: #fff;
        border: ${l};
        border-radius: ${u};
    `;return`
        /* CSS Variables mapped from config */
        :host {
            --primary-color: ${e.primaryColor};
            --text-color: ${e.textColor};
            --bg-color: ${r};
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --border-radius: 20px;
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
            ${e.position.includes("bottom")?`bottom: ${e.marginBottom}px;`:`top: ${e.marginBottom}px;`}
            ${t?`left: ${e.marginSide}px;`:`right: ${e.marginSide}px;`}
            z-index: 999999;
            display: flex;
            flex-direction: column;
            align-items: ${t?"flex-start":"flex-end"};
            pointer-events: none; /* Let clicks pass through wrapper */
        }

        /* Toggle Button (Floating Action Button) */
        .chatbot-toggle-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: var(--text-color);
            border: none;
            padding: 0;
            cursor: pointer;
            box-shadow: ${g};
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform var(--transition-speed) ease;
            pointer-events: auto; /* Re-enable clicks for the button */
            overflow: hidden; /* Ensure image respects the border-radius perfectly */
        }

        .chatbot-toggle-btn:hover {
            transform: scale(1.05);
        }

        .chatbot-toggle-btn svg {
            width: 30px;
            height: 30px;
            fill: currentColor;
        }

        /* Main Chat Window */
        .chatbot-window {
            width: 350px;
            height: 600px;
            max-height: 80vh;
            background-color: var(--bg-color);
            border-radius: var(--border-radius);
            box-shadow: ${g};
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 20px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px);
            transition: all var(--transition-speed) ease;
            border: ${s};
        }

        /* When Open */
        .chatbot-window.is-open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
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
            .chatbot-toggle-btn {
                position: fixed;
                /* Shift upward to avoid mobile safe areas like home bar/bottom nav */
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

        /* --- INTERNAL COMPONENTS --- */
        
        /* Header */
        .chatbot-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: ${a};
            border-bottom: 2px solid ${o?"#4a5568":"#f8f9fa"};
        }

        .chatbot-header-info {
            display: flex;
            flex-direction: column;
        }

        .chatbot-header-subtitle {
            font-size: 12px;
            color: ${d};
            margin-bottom: 4px;
        }

        .chatbot-header-title {
            font-size: 18px;
            font-weight: 700;
            color: ${i};
        }

        .chatbot-header-avatar img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }

        /* Message List */
        .chatbot-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
            background: ${o?"#1a202c":"#f8f9fa"};
        }

        /* Individual Messages */
        .chatbot-message {
            display: flex;
            max-width: 85%;
        }

        .chatbot-message.bot {
            align-self: flex-start;
        }

        .chatbot-message.bot-message {
            max-width: 100%; /* Override 85% restriction so carousels can peek */
        }

        .chatbot-message.user {
            align-self: flex-end;
            flex-direction: row-reverse;
        }

        .chatbot-message-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            flex-shrink: 0;
        }

        .chatbot-message-avatar svg {
            width: 18px;
            height: 18px;
            fill: #fff;
        }

        .chatbot-message.user .chatbot-message-avatar {
            margin-right: 0;
            margin-left: 10px;
        }

        .chatbot-bubble {
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 14px;
            line-height: 1.5;
            box-shadow: var(--shadow-sm);
        }

        .chatbot-message.bot .chatbot-bubble {
            background-color: ${n};
            color: ${i};
            border-top-left-radius: 4px;
        }

        .chatbot-message.user .chatbot-bubble {
            background-color: ${p};
            color: #fff;
            border-top-right-radius: 4px;
        }

        /* Product Card */
        .chatbot-product-card {
            ${h}
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            width: 240px;
            margin-top: 5px;
        }

        .chatbot-product-image {
            width: 100%;
            height: 140px;
            object-fit: contain;
            background: ${o?"#cbd5e0":"#f8f9fa"};
            padding: 10px;
        }

        .chatbot-product-info {
            padding: 15px;
        }

        .chatbot-product-title {
            font-size: 14px;
            font-weight: 600;
            color: ${i};
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
            color: ${i};
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
            position: relative;
            display: flex;
            align-items: center;
            margin: 5px 0;
            width: 100%;
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
            background: ${o?"rgba(74, 85, 104, 0.9)":"rgba(255,255,255,0.9)"};
            border: ${s};
            box-shadow: var(--shadow-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            color: ${i};
            transition: all 0.2s;
        }
        .carousel-nav-btn:hover {
            background: ${o?"#718096":"#fff"};
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
            min-width: 220px;
            max-width: 220px;
            scroll-snap-align: start;
            /* Re-use standard product styles but isolated slightly */
            ${h}
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            flex-shrink: 0;
        }
        .carousel-card .chatbot-product-img {
            border-radius: 0;
            width: 100%;
            height: 140px;
            object-fit: cover;
            background: ${o?"#cbd5e0":"transparent"};
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
            background: ${a};
            color: ${i};
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

        /* Input Area */
        .chatbot-input-area {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            background: ${a};
            border-top: ${s};
        }

        .chatbot-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 15px;
            color: ${i};
            background: transparent;
        }

        .chatbot-input::placeholder {
            color: ${o?"#A0AEC0":"#aaa"};
        }

        .chatbot-send-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--primary-color);
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .chatbot-send-btn svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        /* --- Welcome Bubble --- */
        .welcome-bubble {
            position: absolute;
            bottom: 75px; /* Above the launcher */
            ${t?"left: 0;":"right: 0;"}
            background: ${a};
            color: ${i};
            padding: 12px 18px;
            border-radius: 20px;
            box-shadow: ${g};
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 1;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: auto;
            border: ${s};
            transform-origin: bottom ${t?"left":"right"};
        }

        .welcome-bubble::after {
            content: '';
            position: absolute;
            bottom: -6px;
            ${t?"left: 24px;":"right: 24px;"}
            width: 12px;
            height: 12px;
            background: ${a};
            transform: rotate(45deg);
            border-right: ${t?"none":s};
            border-left: ${t?s:"none"};
            border-bottom: ${s};
            border-top: none;
        }

        .welcome-bubble.hidden {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
            pointer-events: none;
        }

        /* --- Typing Indicator --- */
        .typing-indicator-wrapper {
            background-color: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
        }
        
        .typing-indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 12px 16px;
            background-color: ${n};
            border-radius: 12px;
            border-top-left-radius: 4px;
            box-shadow: var(--shadow-sm);
            width: max-content;
            border: none;
        }

        .typing-indicator .dot {
            width: 6px;
            height: 6px;
            background-color: ${o?"#cbd5e0":"#aaa"};
            border-radius: 50%;
            animation: typing 1.4s infinite ease-in-out both;
        }

        .typing-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
        .typing-indicator .dot:nth-child(3) { animation-delay: 0s; }

        @keyframes typing {
            0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
            40% { transform: scale(1); opacity: 1; }
        }

        /* --- Preset Conversation Starter Pills --- */
        .chatbot-presets {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 0 15px 15px 15px;
            margin-top: -5px;
            background: ${o?"#1a202c":"#f8f9fa"};
        }

        .preset-pill {
            align-self: flex-end;
            background: ${a};
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
            padding: 8px 12px;
            border-radius: 16px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .preset-pill:hover {
            background: var(--primary-color);
            color: #fff;
            transform: translateY(-1px);
        }
    `}function F(e){const t=document.createElement("div");return t.className="chatbot-header",t.innerHTML=`
        <div class="chatbot-header-info">
            <span class="chatbot-header-subtitle">${e.botSubtitle}</span>
            <span class="chatbot-header-title">${e.botName}</span>
        </div>
        <div class="chatbot-header-avatar">
            <img src="${e.botAvatarUrl}" alt="${e.botName} Avatar" />
        </div>
    `,t}function j(){const e=document.createElement("div");return e.className="chatbot-messages",e.id="chatbot-messages-container",e}function T(e,t=!0,o=null){const r=document.createElement("div");r.className=`chatbot-message ${t?"bot":"user"}`;const a=document.createElement("div");if(a.className="chatbot-bubble",t){const p=o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';r.innerHTML=`
            <div class="chatbot-message-avatar">
                ${p}
            </div>
        `}const n=e.replace(/(\*\*|\*|`)/g,"");return a.textContent=n,r.appendChild(a),r}function G(e,t,o=null){const r=document.createElement("div");r.className="chatbot-message bot";const n=`
        <div class="chatbot-message-avatar">
            ${o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>'}
        </div>
    `,p=e.image||"https://placehold.co/300x200?text=Product",i=document.createElement("div");i.innerHTML=n;const d=document.createElement("div");d.className="chatbot-product-card";let s=null,l="";e.sizes&&e.sizes.length>0&&(l='<div class="chatbot-product-sizes"></div>');const g=(o==null?void 0:o.addToCartLabel)||"Add to Cart";if(d.innerHTML=`
        <img src="${p}" alt="${e.title||"Product"}" class="chatbot-product-image" />
        <div class="chatbot-product-info">
            <div class="chatbot-product-title">${e.title||"Product"}</div>
            <div class="chatbot-product-desc">${e.description||"View details for this product."}</div>
            ${l}
            <button class="chatbot-product-action">${e.price?g+" - "+e.price:"View Product"}</button>
        </div>
    `,e.sizes&&e.sizes.length>0){const h=d.querySelector(".chatbot-product-sizes");e.sizes.forEach(b=>{const m=document.createElement("button");m.className="size-pill",m.textContent=b,m.addEventListener("click",()=>{h.querySelectorAll(".size-pill").forEach(x=>x.classList.remove("selected")),m.classList.add("selected"),s=b}),h.appendChild(m)})}const u=d.querySelector(".chatbot-product-action");return u.addEventListener("click",()=>{if(e.sizes&&e.sizes.length>0&&!s){u.textContent="Please select a size",u.style.background="#e53e3e",setTimeout(()=>{const h=(o==null?void 0:o.addToCartLabel)||"Add to Cart";u.textContent=e.price?h+" - "+e.price:"View Product",u.style.background=""},2e3);return}t?t(e,s):e.url&&window.open(e.url,"_blank")}),i.appendChild(d),r.appendChild(i),r}function V(e,t,o=null){const r=document.createElement("div");r.className="chatbot-message bot-message";const n=`
        <div class="chatbot-message-avatar">
            ${o!=null&&o.launcherIconUrl?`<img src="${o.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:'<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>'}
        </div>
    `,p=document.createElement("div");p.style.display="flex",p.style.width="100%",p.innerHTML=n;const i=document.createElement("div");i.className="carousel-container",i.style.flex="1",i.style.minWidth="0";const d=document.createElement("button");d.className="carousel-nav-btn carousel-nav-left",d.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';const s=document.createElement("button");s.className="carousel-nav-btn carousel-nav-right",s.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';const l=document.createElement("div");l.className="chatbot-product-carousel";const g=232;return d.addEventListener("click",()=>{l.scrollBy({left:-g,behavior:"smooth"})}),s.addEventListener("click",()=>{l.scrollBy({left:g,behavior:"smooth"})}),e.forEach(u=>{const h=document.createElement("div");h.className="carousel-card",h.innerHTML=`
            <img src="${u.image||"https://placehold.co/300x200?text=Product"}" class="chatbot-product-img" alt="${u.title||"Product Image"}" />
            <div class="chatbot-product-content">
                <div class="chatbot-product-header">
                    <h4>${u.title||"Unknown Product"}</h4>
                    <span class="chatbot-product-price">${u.price||""}</span>
                </div>
            </div>
        `;const b=h.querySelector(".chatbot-product-content");let m=null;if(u.sizes&&Array.isArray(u.sizes)){const v=document.createElement("div");v.className="chatbot-product-sizes";const y=document.createElement("div");y.className="sizes-list",u.sizes.forEach(B=>{const w=document.createElement("button");w.className="size-pill",w.innerText=B,w.addEventListener("click",()=>{y.querySelectorAll(".size-pill").forEach(f=>f.classList.remove("selected")),w.classList.add("selected"),m=B}),y.appendChild(w)}),v.appendChild(y),b.appendChild(v)}const x=document.createElement("div");x.className="chatbot-product-action",x.innerText=(o==null?void 0:o.addToCartLabel)||"Add to Cart",x.addEventListener("click",()=>{if(u.sizes&&!m){alert("Please select a size first!");return}t&&t(u,m)}),b.appendChild(x),l.appendChild(h)}),i.appendChild(d),i.appendChild(l),i.appendChild(s),p.appendChild(i),r.appendChild(p),r}function D(e,t){const o=document.createElement("div");o.className="chatbot-input-area";const r=document.createElement("input");r.type="text",r.placeholder=t.inputPlaceholder||"Type your message",r.className="chatbot-input";const a=document.createElement("button");return a.className="chatbot-send-btn",a.innerHTML=`
        <svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    `,r.addEventListener("keypress",n=>{n.key==="Enter"&&r.value.trim()!==""&&(e(r.value.trim()),r.value="")}),a.addEventListener("click",()=>{r.value.trim()!==""&&(e(r.value.trim()),r.value="")}),o.appendChild(r),o.appendChild(a),o}function _(){const e=document.createElement("div");e.className="chat-message bot-message typing-indicator-wrapper";const t=document.createElement("div");return t.className="message-bubble typing-indicator",t.innerHTML=`
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    `,e.appendChild(t),e}function Y(){let e={isProductPage:!1,productName:null,productPrice:null,productImage:null,productUrl:window.location.href,pageTitle:document.title,description:null};const t=J();if(t)return M(e,t);const o=Q();if(o)return M(e,o);const r=K();return r?M(e,r):e}function M(e,t){return{...e,isProductPage:!0,productName:t.name||e.pageTitle,productPrice:t.price||null,productImage:t.image||"https://placehold.co/300x200?text=Product",description:t.description||null}}function J(){let e=null;const t=document.querySelectorAll('script[type="application/ld+json"]');for(let o of t)try{const r=JSON.parse(o.textContent),a=Array.isArray(r)?r:[r];for(let n of a)if(n["@type"]==="Product")return e={name:n.name,image:Array.isArray(n.image)?n.image[0]:n.image,description:n.description},n.offers&&n.offers.price&&(e.price=(n.offers.priceCurrency||"$")+n.offers.price),e}catch{}return e}function Q(){const e=document.querySelector('meta[property="og:type"]');if((!e||!e.content.includes("product"))&&!document.querySelector('meta[property="product:price:amount"]'))return null;const t=document.querySelector('meta[property="og:title"]'),o=document.querySelector('meta[property="og:image"]'),r=document.querySelector('meta[property="og:description"]'),a=document.querySelector('meta[property="product:price:amount"]'),n=document.querySelector('meta[property="product:price:currency"]');return{name:t?t.content:null,image:o?o.content:null,description:r?r.content:null,price:a?(n?n.content:"$")+a.content:null}}function K(){const e=document.querySelector('.product, .product-card, [data-product], [class*="product"]');if(!e){const i=document.querySelector('.price, [class*="price"], [data-price]');return i?{name:document.title,price:i.innerText.trim()}:null}let t=null,o=null,r=null;const a=e.querySelector('h1, h2, .product-title, .title, [class*="title"]');a&&(t=a.innerText.trim());const n=e.querySelector('.price, [class*="price"], [data-price]');n&&(o=n.innerText.trim());const p=e.querySelector('img.product-image, .image img, img[class*="product"]')||e.querySelector("img");return p&&(r=p.src),t||o?{name:t,price:o,image:r}:null}function Z(e){const t=e.toLowerCase();return/\b(price|cost|how much)\b/.test(t)?"PRICE":/\b(shipping|delivery|ship)\b/.test(t)?"SHIPPING":/\b(return|refund)\b/.test(t)?"RETURN":/\b(size|fit|guide)\b/.test(t)?"SIZE":/\b(yes|sure|okay|ok|agree|yeah|yep|yup|please|do it)\b/.test(t)?"AGREE":/\b(hi|hello|hey|yo|greetings)\b/.test(t)?"GREETING":/\b(about|store|what do you sell)\b/.test(t)?"ABOUT":/(show.*products|catalog|sneakers|apparel|accessories|shoes|shirts|clothing|buy)/i.test(t)?"SEARCH_PRODUCTS":"GENERAL"}let P="START";const $=[{category:"sneakers",title:"Nike Air Silver 1.0",price:"$120.00",image:"https://placehold.co/300x200/2b6cb0/fff?text=Air+Silver+1.0",url:"#"},{category:"sneakers",title:"Jordan Retro High",price:"$160.00",image:"https://placehold.co/300x200/e53e3e/fff?text=Jordan+Retro",url:"#"},{category:"sneakers",title:"Yeezy Boost 350",price:"$220.00",image:"https://placehold.co/300x200/38a169/fff?text=Yeezy+Boost+350",url:"#"},{category:"sneakers",title:"Vans Old Skool Classic",price:"$65.00",image:"https://placehold.co/300x200/000/fff?text=Vans+Old+Skool",url:"#"},{category:"sneakers",title:"New Balance 574 Core",price:"$85.00",image:"https://placehold.co/300x200/805ad5/fff?text=New+Balance+574",url:"#"},{category:"apparel",title:"Vintage Graphic Tee",price:"$30.00",image:"https://placehold.co/300x200/ff9800/fff?text=Graphic+Tee",url:"#"},{category:"apparel",title:"Distressed Denim Jacket",price:"$89.00",image:"https://placehold.co/300x200/3f51b5/fff?text=Denim+Jacket",url:"#"},{category:"apparel",title:"Relaxed Fit Cargo Pants",price:"$55.00",image:"https://placehold.co/300x200/607d8b/fff?text=Cargo+Pants",url:"#"},{category:"apparel",title:"Essential Fleece Hoodie",price:"$65.00",image:"https://placehold.co/300x200/f44336/fff?text=Hoodie",url:"#"},{category:"apparel",title:"Nylon Zip Windbreaker",price:"$75.00",image:"https://placehold.co/300x200/009688/fff?text=Windbreaker",url:"#"},{category:"accessories",title:"Classic Leather Wallet",price:"$40.00",image:"https://placehold.co/300x200/795548/fff?text=Leather+Wallet",url:"#"},{category:"accessories",title:"Aura Smart Watch X",price:"$195.00",image:"https://placehold.co/300x200/9c27b0/fff?text=Smart+Watch",url:"#"},{category:"accessories",title:"Polarized Aviator Sunglasses",price:"$50.00",image:"https://placehold.co/300x200/e91e63/fff?text=Sunglasses",url:"#"},{category:"accessories",title:"Canvas Travel Backpack",price:"$60.00",image:"https://placehold.co/300x200/cddc39/000?text=Backpack",url:"#"},{category:"accessories",title:"Embroidered Dad Cap",price:"$25.00",image:"https://placehold.co/300x200/03a9f4/fff?text=Cap",url:"#"}];async function X(e){const t=Y(),o=Z(e);let r={text:"",product:null};switch(o){case"PRICE":t.isProductPage&&t.productPrice?r.text=`The price for **${t.productName||"this item"}** is **${t.productPrice}**. Would you like to add it to your cart?`:r.text="I couldn't find the price for the specific item you're looking at. Feel free to browse our catalog!";break;case"SHIPPING":r.text="We offer free standard shipping on all orders over $50! Standard delivery takes 3-5 business days. Expedited options are available at checkout.";break;case"RETURN":r.text="You can return any unworn item within 30 days of purchase for a full refund. Please keep the original packaging!";break;case"SIZE":t.isProductPage&&t.productName?r.text=`For the **${t.productName}**, we recommend selecting your usual true-to-size fit. Do you have a specific size in mind?`:r.text="Please select your usual size! If you need specific help, let me know which product you are looking at.";break;case"GREETING":P==="START"&&t.isProductPage&&t.productName?(r.text=`Hello! I see you are looking at the **${t.productName}**. Would you like to see available sizes and checking options?`,P="HOOK_OFFERED"):P!=="START"?r.text="Hello again! Need help with an order, sizing, or finding a specific product?":r.text="Hello there! I am your eCommerce AI assistant. How can I help you find what you need today?";break;case"AGREE":P==="HOOK_OFFERED"&&t.isProductPage?(r.text=`Great! Here is the **${t.productName||"product"}**. You can select a size below.`,r.product={title:t.productName||"Current Product",price:t.productPrice||"N/A",image:t.productImage||"https://placehold.co/240x140?text=Product",url:t.productUrl,sizes:["US 7","US 8","US 9","US 10","US 11"]},P="PRODUCT_SHOWN"):r.text="Okay, sounds good! What else can I assist you with?";break;case"ABOUT":r.text="We are a premium eCommerce store dedicated to offering high-quality products. We specialize in footwear, apparel, and accessories to keep you looking your best! Take a look around our catalog.";break;case"SEARCH_PRODUCTS":const a=/sneaker|shoe/i.test(e),n=/apparel|shirt|clothing|jacket/i.test(e),p=/accessories|wallet|watch|sunglass/i.test(e);let i=$,d="Here are some of our popular items you might like:";a?(i=$.filter(s=>s.category==="sneakers"),d="Here are our trending sneakers right now:"):n?(i=$.filter(s=>s.category==="apparel"),d="Check out our latest streetwear apparel arrivals:"):p?(i=$.filter(s=>s.category==="accessories"),d="Here are some great accessories to complete your look:"):(i=[...$.filter(s=>s.category==="sneakers").slice(0,3),...$.filter(s=>s.category==="apparel").slice(0,3),...$.filter(s=>s.category==="accessories").slice(0,3)],d="We have a wide variety of products across multiple categories! Here are some of our favorites:"),i=i.map(s=>({...s,sizes:["US 8","US 9","US 10","US 11"]})),r.text=d,r.carousel=i;break;case"GENERAL":default:r.text=`I'm just a demo AI right now, so I'm not very smart! In a real integration, I would answer your specific question: "${e}" based on the store's knowledge base.`;break}return new Promise(a=>{setTimeout(()=>a(r),800+Math.random()*500)})}function ee(e){const t=W(e);console.log("Chatbot initialized in Shadow DOM with config:",t);const o=t.parentElement||document.body,r=o.querySelector("#ecom-chatbot-host");r&&r.remove();const a=document.createElement("div");a.id="ecom-chatbot-host",o.appendChild(a);const n=a.attachShadow({mode:"open"}),p=document.createElement("style");p.textContent=q(t),n.appendChild(p);const i=document.createElement("div");i.className="ecom-chatbot-wrapper";const d=document.createElement("div");d.className="chatbot-window";const s=F(t),l=j(),g=async f=>{const k=d.querySelector(".chatbot-presets");k&&k.remove();const S=T(f,!1,t);l.appendChild(S),l.scrollTop=l.scrollHeight;const R=_();l.appendChild(R),l.scrollTop=l.scrollHeight;const C=await X(f);if(l.removeChild(R),C.text){const L=T(C.text,!0,t);l.appendChild(L)}if(C.product){const L=(E,I)=>{const A=I?` (Size: ${I})`:"",H=T(`✅ Added 1x ** ${E.title}** ${A} to your cart for ${E.price}!`,!0,t);l.appendChild(H),l.scrollTop=l.scrollHeight,window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:E,selectedSize:I}}))},N=G(C.product,L,t);l.appendChild(N)}if(C.carousel&&Array.isArray(C.carousel)){const L=(E,I)=>{const A=I?` (Size: ${I})`:"",H=T(`✅ Added 1x ** ${E.title}** ${A} to your cart for ${E.price}!`,!0,t);l.appendChild(H),l.scrollTop=l.scrollHeight,window.dispatchEvent(new CustomEvent("ecom-add-to-cart",{detail:{product:E,selectedSize:I}}))},N=V(C.carousel,L,t);l.appendChild(N)}l.scrollTop=l.scrollHeight},u=D(g,t);if(l.appendChild(T("Hi! I can help you find products or answer questions about this store.",!0,t)),d.appendChild(s),d.appendChild(l),t.presetQuestions&&t.presetQuestions.length>0){const f=document.createElement("div");f.className="chatbot-presets",t.presetQuestions.forEach(k=>{if(!k.trim())return;const S=document.createElement("button");S.className="preset-pill",S.innerText=k,S.addEventListener("click",()=>{g(k),f.remove()}),f.appendChild(S)}),f.hasChildNodes()&&d.appendChild(f)}d.appendChild(u);const b=document.createElement("button");b.className="chatbot-toggle-btn",b.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
    `;let m=!1,x=!1;const v=document.createElement("div");v.className="welcome-bubble",v.innerHTML=`
        <img src="${t.welcomeIconUrl||"https://cdn-icons-png.flaticon.com/512/8943/8943377.png"}" alt="icon" style="width: 16px; height: 16px; margin-right: 6px; vertical-align: middle; border-radius: 50%; object-fit: cover;" />
        <span style="vertical-align: middle; font-size: 13px;">${t.welcomeMessage||"Need help choosing a product?"}</span>
    `,setTimeout(()=>{x||v.classList.add("hidden")},15e3);const y=()=>{m||(m=!0,x=!0,v.classList.add("hidden"),d.classList.add("is-open"),b.innerHTML=`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
    `)},B=()=>{m&&(m=!1,d.classList.remove("is-open"),b.innerHTML=t.launcherIconUrl?`<img src="${t.launcherIconUrl}" alt="Chat" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`:`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
    `)},w=()=>{m?B():y()};b.addEventListener("click",w),window.EcomChatbot&&(window.EcomChatbot.open=y,window.EcomChatbot.close=B,window.EcomChatbot.toggle=w,window.EcomChatbot.sendMessage=f=>{y(),g(f)}),i.appendChild(d),i.appendChild(v),i.appendChild(b),n.appendChild(i)}window.EcomChatbot={init:e=>{ee(e)}};let U={botName:document.getElementById("input-bot-name").value,inputPlaceholder:document.getElementById("input-placeholder").value,botAvatarUrl:document.getElementById("input-bot-avatar").value,welcomeMessage:document.getElementById("input-welcome-message").value,welcomeIconUrl:document.getElementById("input-welcome-icon").value,primaryColor:document.getElementById("input-primary-color").value,backgroundColor:document.getElementById("input-bg-color").value,position:document.getElementById("input-position").value,autoDetectProduct:document.getElementById("input-auto-detect").checked,presetQuestions:[document.getElementById("input-preset-1").value,document.getElementById("input-preset-2").value,document.getElementById("input-preset-3").value].filter(e=>e.trim()!==""),textColor:"#ffffff"};const c={botName:document.getElementById("input-bot-name"),botSubtitle:document.getElementById("input-bot-subtitle"),inputPlaceholder:document.getElementById("input-placeholder"),addToCartLabel:document.getElementById("input-add-to-cart"),launcherIcon:document.getElementById("input-launcher-icon"),launcherIconFile:document.getElementById("input-launcher-icon-file"),botAvatar:document.getElementById("input-bot-avatar"),botAvatarFile:document.getElementById("input-bot-avatar-file"),welcomeMessage:document.getElementById("input-welcome-message"),welcomeIcon:document.getElementById("input-welcome-icon"),welcomeIconFile:document.getElementById("input-welcome-icon-file"),primaryColor:document.getElementById("input-primary-color"),hexPrimaryColor:document.getElementById("hex-primary-color"),bgColor:document.getElementById("input-bg-color"),position:document.getElementById("input-position"),marginSide:document.getElementById("input-margin-side"),marginBottom:document.getElementById("input-margin-bottom"),autoDetect:document.getElementById("input-auto-detect"),preset1:document.getElementById("input-preset-1"),preset2:document.getElementById("input-preset-2"),preset3:document.getElementById("input-preset-3"),btnApply:document.getElementById("btn-apply"),btnCopy:document.getElementById("btn-copy"),snippetOutput:document.getElementById("snippet-output"),previewContainer:document.querySelector(".preview-browser"),previewUrlInput:document.getElementById("input-preview-url"),btnLoadUrl:document.getElementById("btn-load-url"),previewIframe:document.getElementById("preview-iframe")};c.primaryColor.addEventListener("input",e=>{c.hexPrimaryColor.textContent=e.target.value});c.botAvatarFile.addEventListener("change",e=>{const t=e.target.files[0];if(t){const o=new FileReader;o.onload=r=>{c.botAvatar.value=r.target.result,z()},o.readAsDataURL(t)}});c.welcomeIconFile.addEventListener("change",e=>{const t=e.target.files[0];if(t){const o=new FileReader;o.onload=r=>{c.welcomeIcon.value=r.target.result,z()},o.readAsDataURL(t)}});c.launcherIconFile.addEventListener("change",e=>{const t=e.target.files[0];if(t){const o=new FileReader;o.onload=r=>{c.launcherIcon.value=r.target.result,z()},o.readAsDataURL(t)}});function te(){const e=JSON.stringify(U,null,4),t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",o=window.location.origin,r=t?`<script type="module" src="${o}/src/widget/index.js"><\/script>`:`<script src="${o}/chatbot.min.js"><\/script>`,a=`
<script>
    window.chatbotConfig = ${e};
<\/script>
${r}
<script>
    window.addEventListener('DOMContentLoaded', () => {
        if (window.EcomChatbot) {
            window.EcomChatbot.init(window.chatbotConfig);
        }
    });
<\/script>`.trim();c.snippetOutput.textContent=a}function z(){U={botName:c.botName.value,botSubtitle:c.botSubtitle.value,inputPlaceholder:c.inputPlaceholder.value,addToCartLabel:c.addToCartLabel.value,launcherIconUrl:c.launcherIcon.value,botAvatarUrl:c.botAvatar.value,welcomeMessage:c.welcomeMessage.value,welcomeIconUrl:c.welcomeIcon.value,primaryColor:c.primaryColor.value,backgroundColor:c.bgColor.value,position:c.position.value,marginSide:parseInt(c.marginSide.value)||20,marginBottom:parseInt(c.marginBottom.value)||20,autoDetectProduct:c.autoDetect.checked,presetQuestions:[c.preset1.value,c.preset2.value,c.preset3.value].filter(e=>e.trim()!==""),textColor:(c.bgColor.value==="#ffffff","#ffffff")},te(),window.EcomChatbot&&window.EcomChatbot.init({...U,parentElement:c.previewContainer})}c.btnLoadUrl.addEventListener("click",()=>{let e=c.previewUrlInput.value.trim();e&&(e.startsWith("http")||(e="https://"+e),c.previewIframe.src=e)});window.addEventListener("ecom-add-to-cart",e=>{c.previewIframe&&c.previewIframe.contentWindow&&c.previewIframe.contentWindow.postMessage({type:"ECOM_ADD_TO_CART",detail:e.detail},"*")});c.btnApply.addEventListener("click",z);c.btnCopy.addEventListener("click",()=>{navigator.clipboard.writeText(c.snippetOutput.textContent).then(()=>alert("Snippet copied to clipboard!")).catch(e=>console.error("Failed to copy",e))});window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{z()},100)});
