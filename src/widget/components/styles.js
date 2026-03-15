export function getStyles(config) {
    const isLeft = config.position.includes('left');
    const isDark = config.backgroundColor === '#1a202c' || config.theme === 'dark';
    const isGlass = config.theme === 'glass' || true; // next-gen always uses glass

    // Next-gen theme: dark-first, purple/violet accents
    const primary = config.primaryColor || '#8b5cf6';
    const primaryLight = 'rgba(139, 92, 246, 0.35)';
    const primaryGlow = 'rgba(139, 92, 246, 0.5)';
    const bgDark = '#0c0c10';
    const bgCard = '#14141a';
    const bgGlass = 'rgba(20, 20, 26, 0.88)';
    const colorBg = isDark ? (isGlass ? bgGlass : bgDark) : (config.backgroundColor || '#ffffff');
    const glassFilter = 'backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);';
    const glassBorder = `border: 1px solid rgba(139, 92, 246, 0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(0,0,0,0.2);`;

    const colorPanelBg = isDark ? bgCard : '#ffffff';
    const colorBotBubble = isDark ? 'rgba(30, 30, 40, 0.95)' : 'rgba(255,255,255,0.95)';
    const colorUserBubble = primary;
    const colorTextMain = isDark ? '#f1f1f4' : '#1a1a1e';
    const colorTextMuted = isDark ? '#94949f' : '#6b6b76';
    const borderSubtle = isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)';
    const borderStrong = isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)';
    const shadowMain = isDark
        ? '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 60px -15px ' + primaryLight
        : '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 40px -10px rgba(139,92,246,0.15)';

    const cardBorderRadius = '14px';
    const cardDarkGradient = isDark ? `
        background: linear-gradient(180deg, rgba(28,28,36,0.98) 0%, rgba(20,20,28,0.98) 100%);
        border: 1px solid rgba(139, 92, 246, 0.15);
        border-radius: ${cardBorderRadius};
        box-shadow: 0 4px 24px rgba(0,0,0,0.3);
    ` : `
        background: #fff;
        border: ${borderStrong};
        border-radius: ${cardBorderRadius};
        box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    `;

    return `
        /* Next-gen design system */
        :host {
            --primary-color: ${primary};
            --primary-glow: ${primaryGlow};
            --text-color: ${config.textColor || '#ffffff'};
            --bg-color: ${colorBg};
            --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            --shadow-sm: 0 4px 12px rgba(0,0,0,0.15);
            --shadow-lg: ${shadowMain};
            --border-radius: 24px;
            --transition-speed: 0.35s;
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

        /* --- Next-gen Launcher (Hellorep-style: rings + breathing orb) --- */
        .chatbot-orb-wrapper {
            position: relative;
            pointer-events: auto;
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .chatbot-launcher-ring {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
        }
        .chatbot-launcher-ring-1 {
            width: 72px;
            height: 72px;
            border: 2px solid rgba(139, 92, 246, 0.25);
            animation: launcher-ring-pulse 3s ease-in-out infinite;
        }
        .chatbot-launcher-ring-2 {
            width: 84px;
            height: 84px;
            border: 1px solid rgba(139, 92, 246, 0.12);
            animation: launcher-ring-pulse 3s ease-in-out infinite 0.5s;
        }
        .chatbot-launcher-ring-3 {
            width: 96px;
            height: 96px;
            border: 1px solid rgba(139, 92, 246, 0.08);
            animation: launcher-ring-expand 4s ease-in-out infinite;
        }
        @keyframes launcher-ring-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.08); opacity: 0.6; }
        }
        @keyframes launcher-ring-expand {
            0% { transform: scale(0.92); opacity: 0.4; }
            50% { transform: scale(1.05); opacity: 0.15; }
            100% { transform: scale(0.92); opacity: 0.4; }
        }
        .chatbot-toggle-btn {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(145deg, rgba(255,255,255,0.25) 0%, var(--primary-color) 40%, #6d28d9 100%);
            color: var(--text-color);
            border: none;
            padding: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(139, 92, 246, 0.45),
                        0 0 0 1px rgba(255,255,255,0.25) inset,
                        0 -2px 10px rgba(0,0,0,0.2);
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
            animation: launcher-float 5s ease-in-out infinite;
            z-index: 2;
        }
        .chatbot-toggle-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), transparent 55%);
            opacity: 0.9;
            pointer-events: none;
        }
        .chatbot-toggle-btn::after {
            content: '';
            position: absolute;
            inset: -20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 65%);
            animation: launcher-glow-breathe 2.5s ease-in-out infinite;
            pointer-events: none;
        }
        .chatbot-toggle-btn:hover {
            transform: scale(1.12);
            box-shadow: 0 12px 40px rgba(139, 92, 246, 0.55),
                        0 0 0 1px rgba(255,255,255,0.35) inset;
        }
        .chatbot-toggle-btn:active {
            transform: scale(0.96);
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
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
        }
        @keyframes launcher-glow-breathe {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.15); opacity: 0.9; }
        }
        @keyframes orb-ripple {
            0% { transform: scale(0.85); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
        }
        .chatbot-toggle-btn svg,
        .chatbot-toggle-btn img {
            width: 28px;
            height: 28px;
            fill: currentColor;
            position: relative;
            z-index: 1;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        }
        .chatbot-toggle-btn img {
            object-fit: cover;
            border-radius: 50%;
        }

        /* Main Chat Window — Bigger, spring open; always fits viewport on laptop/monitor */
        .chatbot-window {
            width: 380px;
            max-width: min(380px, calc(100vw - ${config.marginSide * 2 + 8}px));
            height: 680px;
            max-height: min(680px, calc(100vh - ${config.marginBottom + 110}px));
            min-height: 360px;
            background: var(--bg-color);
            ${glassFilter}
            ${glassBorder}
            border-radius: var(--border-radius);
            box-shadow: ${shadowMain};
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-bottom: 18px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(32px) scale(0.92);
            transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                        transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                        visibility 0s linear 0.4s;
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
        }

        /* --- INTERNAL COMPONENTS --- */
        
        /* Header — animated gradient background + shine */
        .chatbot-header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 12px;
            padding: 18px 24px;
            background: ${isDark
                ? 'linear-gradient(110deg, #14141a 0%, #1a1a26 25%, #16161f 50%, #1a1a26 75%, #14141a 100%)'
                : 'linear-gradient(110deg, #fff 0%, #f8f6fc 25%, #faf9fc 50%, #f8f6fc 75%, #fff 100%)'};
            background-size: 200% 100%;
            animation: header-bg-shift 8s ease-in-out infinite;
            border-bottom: 1px solid ${isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.12)'};
            position: relative;
            overflow: hidden;
        }
        .chatbot-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
            opacity: 0.6;
            animation: header-line-shine 3s ease-in-out infinite;
        }
        .chatbot-header::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
            animation: header-glow-drift 12s ease-in-out infinite;
            pointer-events: none;
        }
        @keyframes header-bg-shift {
            0%, 100% { background-position: 0% 0; }
            50% { background-position: 100% 0; }
        }
        @keyframes header-line-shine {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
        }
        @keyframes header-glow-drift {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(2%, 1%); }
            66% { transform: translate(-1%, 2%); }
        }
        .chatbot-header-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
            position: relative;
            z-index: 1;
        }
        .chatbot-header-row {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .chatbot-header-status {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 11px;
            color: #48bb78;
            font-weight: 500;
        }
        .chatbot-header-status-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #22c55e;
            box-shadow: 0 0 8px #22c55e, 0 0 12px rgba(34, 197, 94, 0.4);
            animation: status-pulse 2s ease-in-out infinite;
        }
        @keyframes status-pulse {
            0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 8px #22c55e, 0 0 12px rgba(34, 197, 94, 0.4); }
            50% { opacity: 0.9; transform: scale(1.15); box-shadow: 0 0 12px #22c55e, 0 0 20px rgba(34, 197, 94, 0.5); }
        }
        .chatbot-header-subtitle {
            font-size: 12px;
            color: ${colorTextMuted};
            margin-bottom: 2px;
        }
        .chatbot-header-title {
            font-size: 17px;
            font-weight: 700;
            color: ${colorTextMain};
            letter-spacing: -0.02em;
            animation: header-title-in 0.5s ease-out;
        }
        @keyframes header-title-in {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .chatbot-header-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            border: 2px solid rgba(139, 92, 246, 0.4);
            box-shadow: 0 4px 16px rgba(139, 92, 246, 0.25);
            position: relative;
            z-index: 1;
            animation: header-avatar-glow 4s ease-in-out infinite;
        }
        @keyframes header-avatar-glow {
            0%, 100% { box-shadow: 0 4px 16px rgba(139, 92, 246, 0.25); }
            50% { box-shadow: 0 4px 24px rgba(139, 92, 246, 0.4); }
        }
        .chatbot-header-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Message List — visible animated background (no blank look) */
        .chatbot-messages {
            flex: 1;
            padding: 24px;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            gap: 14px;
            background: ${isDark
                ? 'linear-gradient(160deg, #0a0a0f 0%, #0e0e14 25%, #12121a 50%, #0c0c12 75%, #0a0a0f 100%)'
                : 'linear-gradient(160deg, #f5f3fc 0%, #ede9f8 25%, #f0eef8 50%, #eae6f6 75%, #f5f3fc 100%)'};
            background-size: 100% 400%;
            animation: chatbox-bg-flow 12s ease-in-out infinite;
            scroll-behavior: smooth;
            position: relative;
        }
        .chatbot-messages::before {
            content: '';
            position: absolute;
            inset: 0;
            background: ${isDark
                ? 'radial-gradient(ellipse 90% 60% at 80% 10%, rgba(139, 92, 246, 0.18) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)'
                : 'radial-gradient(ellipse 90% 60% at 80% 10%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'};
            pointer-events: none;
            animation: chatbox-mesh-drift 18s ease-in-out infinite;
            z-index: 0;
        }
        .chatbot-messages::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 0%, ${isDark ? 'rgba(139, 92, 246, 0.03)' : 'rgba(139, 92, 246, 0.02)'} 50%, transparent 100%);
            background-size: 100% 200%;
            pointer-events: none;
            animation: chatbox-shine 8s ease-in-out infinite;
            z-index: 0;
        }
        @keyframes chatbox-bg-flow {
            0%, 100% { background-position: 0 0; }
            50% { background-position: 0 100%; }
        }
        @keyframes chatbox-mesh-drift {
            0%, 100% { opacity: 1; transform: scale(1) translate(0, 0); }
            33% { opacity: 0.95; transform: scale(1.03) translate(2%, -1%); }
            66% { opacity: 1; transform: scale(0.97) translate(-1%, 2%); }
        }
        @keyframes chatbox-shine {
            0%, 100% { opacity: 0.5; background-position: 0 0; }
            50% { opacity: 1; background-position: 0 100%; }
        }
        .chatbot-messages-inner {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        /* Particle layer (behind messages) — more visible animation */
        .chatbot-messages-particles {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            border-radius: inherit;
            z-index: 0;
        }
        .particle-dot {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.15)'};
            animation: particle-float 18s ease-in-out infinite;
        }
        @keyframes particle-float {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
            33% { transform: translate(12px, -24px) scale(1.15); opacity: 0.9; }
            66% { transform: translate(-8px, -48px) scale(0.85); opacity: 0.4; }
        }
        /* Ensure messages and presets sit above background (single layer, no distortion) */
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
        .chatbot-message.group-first { margin-top: 4px; }
        .chatbot-message.group-same { margin-top: 2px; }

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

        .chatbot-message-avatar {
            width: 32px;
            height: 32px;
            min-width: 32px;
            border-radius: 50%;
            background: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            flex-shrink: 0;
            transition: opacity 0.2s ease;
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

        /* Next-gen chat bubbles — tails + timestamp area */
        .chatbot-bubble {
            padding: 14px 18px;
            border-radius: 20px 20px 6px 20px;
            font-size: 14px;
            line-height: 1.62;
            box-shadow: ${isDark ? '0 4px 20px rgba(0,0,0,0.25)' : '0 4px 16px rgba(0,0,0,0.06)'};
            max-width: 100%;
            word-break: break-word;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            position: relative;
        }
        .chatbot-message.user .chatbot-bubble {
            border-radius: 20px 20px 20px 6px;
            background: linear-gradient(135deg, var(--primary-color) 0%, #7c3aed 100%);
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.35);
        }
        .chatbot-message.bot .chatbot-bubble {
            background: ${colorBotBubble};
            border: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
        }
        .chatbot-message.bot .chatbot-bubble:hover {
            transform: translateY(-2px);
            box-shadow: ${isDark ? '0 8px 24px rgba(0,0,0,0.35)' : '0 8px 20px rgba(0,0,0,0.08)'};
        }
        .chatbot-bubble .md-p {
            margin: 0 0 8px 0;
        }

        .chatbot-bubble .md-p:last-child {
            margin-bottom: 0;
        }

        .chatbot-bubble .md-h1,
        .chatbot-bubble .md-h2,
        .chatbot-bubble .md-h3 {
            font-weight: 700;
            color: var(--primary-color);
            margin: 2px 0 6px 0;
            padding: 0;
            line-height: 1.3;
        }

        .chatbot-bubble .md-h3 { font-size: 14px; }
        .chatbot-bubble .md-h2 { font-size: 15px; }
        .chatbot-bubble .md-h1 { font-size: 16px; }

        .chatbot-bubble blockquote {
            margin: 6px 0;
            padding: 6px 10px;
            border-left: 3px solid var(--primary-color);
            background: ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'};
            border-radius: 0 6px 6px 0;
            font-size: 13px;
            color: ${colorTextMuted};
        }

        .chatbot-bubble .md-hr {
            border: none;
            border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
            margin: 8px 0;
        }

        .chatbot-bubble .md-list {
            margin: 6px 0;
            padding-left: 18px;
        }

        .chatbot-bubble .md-list li {
            margin-bottom: 3px;
            line-height: 1.5;
        }

        .chatbot-bubble .md-code {
            font-family: monospace;
            background: ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)'};
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
            border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
            background: ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)'};
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


        /* Product Card */
        .chatbot-product-card {
            ${cardDarkGradient}
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            width: 240px;
            margin-top: 5px;
        }

        .chatbot-product-image {
            width: 100%;
            height: 140px;
            object-fit: contain;
            background: ${isDark ? '#cbd5e0' : '#f8f9fa'};
            padding: 10px;
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
            background: ${isDark ? 'rgba(74, 85, 104, 0.9)' : 'rgba(255,255,255,0.9)'};
            border: ${borderSubtle};
            box-shadow: var(--shadow-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            color: ${colorTextMain};
            transition: all 0.2s;
        }
        .carousel-nav-btn:hover {
            background: ${isDark ? '#718096' : '#fff'};
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
            ${cardDarkGradient}
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            flex-shrink: 0;
        }
        .carousel-card .chatbot-product-img {
            border-radius: 0;
            width: 100%;
            height: 140px;
            object-fit: cover;
            background: ${isDark ? '#cbd5e0' : 'transparent'};
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
            border: ${borderStrong};
            border-radius: 4px;
            background: ${colorPanelBg};
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
        }

        .chatbot-product-action:disabled {
            background: #ccc;
            cursor: not-allowed;
        }

        /* Input Area — pill + gradient send */
        .chatbot-input-area {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 24px;
            padding-bottom: calc(18px + env(safe-area-inset-bottom, 0));
            background: ${isDark ? 'linear-gradient(180deg, #0a0a0e 0%, #0c0c10 100%)' : 'linear-gradient(180deg, #fff 0%, #f8f7fc 100%)'};
            border-top: 1px solid ${isDark ? 'rgba(139, 92, 246, 0.12)' : 'rgba(139, 92, 246, 0.1)'};
        }

        .chatbot-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 15px;
            color: ${colorTextMain};
            background: ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
            padding: 14px 20px;
            border-radius: 24px;
            border: 1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .chatbot-input:focus {
            border-color: rgba(139, 92, 246, 0.4);
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
        }

        .chatbot-input::placeholder {
            color: ${isDark ? '#6b6b78' : '#888'};
        }

        .chatbot-send-btn {
            width: 48px;
            height: 48px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: linear-gradient(145deg, var(--primary-color), #7c3aed);
            color: #fff;
            box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .chatbot-send-btn:hover {
            transform: scale(1.08);
            box-shadow: 0 6px 24px rgba(139, 92, 246, 0.5);
        }
        .chatbot-send-btn:active {
            transform: scale(0.95);
        }
        .chatbot-send-btn svg {
            width: 22px;
            height: 22px;
            fill: currentColor;
        }

        /* --- Welcome Bubble — next-gen --- */
        .welcome-bubble {
            position: absolute;
            bottom: 95px;
            ${isLeft ? 'left: 0;' : 'right: 0;'}
            background: ${isDark ? 'rgba(20, 20, 28, 0.98)' : 'rgba(255,255,255,0.98)'};
            color: ${colorTextMain};
            padding: 14px 20px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(139, 92, 246, 0.2);
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 1;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: auto;
            transform-origin: bottom ${isLeft ? 'left' : 'right'};
        }

        .welcome-bubble::after {
            content: '';
            position: absolute;
            bottom: -6px;
            ${isLeft ? 'left: 28px;' : 'right: 28px;'}
            width: 12px;
            height: 12px;
            background: inherit;
            transform: rotate(45deg);
            box-shadow: 2px 2px 0 -1px ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(0,0,0,0.06)'};
        }

        .welcome-bubble.hidden {
            opacity: 0;
            transform: scale(0.85) translateY(12px);
            pointer-events: none;
        }

        /* --- AI Thinking State --- */
        .typing-indicator-wrapper {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            align-self: flex-start;
        }
        .typing-indicator-wrapper .chatbot-message-avatar {
            flex-shrink: 0;
        }
        .ai-thinking {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 18px;
            background: ${colorBotBubble};
            border-radius: 18px 18px 18px 6px;
            box-shadow: var(--shadow-sm);
            width: max-content;
            max-width: 90%;
            border: ${borderSubtle};
        }
        .ai-thinking-shimmer {
            flex: 1;
            height: 24px;
            border-radius: 8px;
            background: linear-gradient(90deg,
                ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'} 0%,
                ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'} 50%,
                ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'} 100%);
            background-size: 200% 100%;
            animation: thinking-shimmer 1.5s ease-in-out infinite;
        }
        .ai-thinking-bars {
            display: flex;
            align-items: flex-end;
            gap: 4px;
            height: 20px;
        }
        .ai-thinking-bars span {
            width: 4px;
            background: var(--primary-color);
            border-radius: 2px;
            animation: thinking-bar 0.8s ease-in-out infinite;
        }
        .ai-thinking-bars span:nth-child(1) { height: 8px; animation-delay: 0s; }
        .ai-thinking-bars span:nth-child(2) { height: 14px; animation-delay: 0.1s; }
        .ai-thinking-bars span:nth-child(3) { height: 20px; animation-delay: 0.2s; }
        .ai-thinking-bars span:nth-child(4) { height: 12px; animation-delay: 0.3s; }
        .ai-thinking-bars span:nth-child(5) { height: 6px; animation-delay: 0.4s; }
        @keyframes thinking-shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        @keyframes thinking-bar {
            0%, 100% { transform: scaleY(0.5); opacity: 0.6; }
            50% { transform: scaleY(1); opacity: 1; }
        }
        .ai-thinking-status {
            font-size: 12px;
            color: ${colorTextMuted};
            margin-top: 6px;
        }
        .typing-indicator .dot {
            width: 6px;
            height: 6px;
            background-color: ${isDark ? '#cbd5e0' : '#aaa'};
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

        /* --- Skeleton loaders --- */
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
            background: linear-gradient(90deg,
                ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'} 0%,
                ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'} 50%,
                ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'} 100%);
            background-size: 200% 100%;
            animation: thinking-shimmer 1.5s ease-in-out infinite;
        }
        .skeleton-card:nth-child(2) { animation-delay: 0.15s; }
        .skeleton-card:nth-child(3) { animation-delay: 0.3s; }
        .skeleton-card:nth-child(4) { animation-delay: 0.45s; }

        /* --- Suggestion chips: only below response (no side layout) --- */
        .chatbot-suggestion-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
            padding-top: 8px;
        }
        .chatbot-chips-below {
            width: 100%;
            max-width: 100%;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
        }
        .chatbot-message.bot-message .chatbot-chips-below {
            padding-left: 0;
            padding-right: 0;
        }
        .suggestion-chip {
            padding: 10px 16px;
            border-radius: 20px;
            font-size: 12px;
            background: ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'};
            color: ${colorTextMain};
            border: 1px solid rgba(139, 92, 246, 0.25);
            cursor: pointer;
            transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
        }
        .suggestion-chip:hover {
            background: rgba(139, 92, 246, 0.15);
            border-color: rgba(139, 92, 246, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
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

        /* --- Preset pills: inside message list, same layer as chat --- */
        .chatbot-presets {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 16px 0 8px;
            margin-top: 8px;
            background: transparent;
            border: none;
        }

        .preset-pill {
            align-self: flex-end;
            background: ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
            border: 1px solid rgba(139, 92, 246, 0.35);
            color: ${colorTextMain};
            padding: 12px 18px;
            border-radius: 20px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.25s ease;
            text-align: left;
            box-shadow: 0 2px 12px rgba(139, 92, 246, 0.1);
        }

        .preset-pill:hover {
            background: linear-gradient(135deg, var(--primary-color), #7c3aed);
            color: #fff;
            border-color: transparent;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35);
        }
        .preset-pill:active {
            transform: translateY(0);
        }

        /* Section card — "Your Cart" / "Product Comparison" style */
        .chatbot-section-card {
            margin-top: 12px;
            background: ${isDark ? 'rgba(28, 28, 36, 0.98)' : 'rgba(255,255,255,0.98)'};
            border: 1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)'};
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'};
        }
        .chatbot-cart-card .chatbot-section-card-title {
            padding: 16px 20px;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 0.02em;
        }
        .chatbot-section-card-title {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 18px;
            font-size: 14px;
            font-weight: 600;
            color: ${colorTextMain};
            border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
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
            border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
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
            border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'};
        }
        .chatbot-cart-total-label { color: ${colorTextMain}; font-size: 14px; }
        .chatbot-cart-total-value { color: var(--primary-color); font-size: 16px; font-weight: 700; }
        .chatbot-cart-checkout-footer {
            padding: 18px 20px;
            border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'};
            background: ${isDark ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.03)'};
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
            box-shadow: 0 4px 14px rgba(139, 92, 246, 0.35);
        }
        .chatbot-cart-checkout-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.45);
        }
        .chatbot-cart-checkout-btn:active {
            transform: translateY(0);
        }
        .chatbot-cart-suggestions {
            padding: 14px 20px 18px;
            border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
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
            border: 1px solid rgba(139, 92, 246, 0.35);
            background: ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
            color: ${colorTextMain};
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .chatbot-cart-pill:hover {
            background: rgba(139, 92, 246, 0.15);
            border-color: rgba(139, 92, 246, 0.4);
        }
        .chatbot-cart-pill-checkout {
            background: linear-gradient(135deg, var(--primary-color), #7c3aed);
            color: #fff;
            border-color: transparent;
        }
        .chatbot-cart-pill-checkout:hover {
            background: linear-gradient(135deg, #7c3aed, var(--primary-color));
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.35);
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
            background: ${isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.04)'};
            border-radius: 12px;
            border: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
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
            background: ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'};
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
            border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
        }
        .chatbot-order-history-empty {
            padding: 24px 16px;
            text-align: center;
            color: ${colorTextMuted};
            font-size: 14px;
        }
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
            background: ${isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)'};
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
                max-height: min(680px, calc(100cqb - ${config.marginBottom + 98}px));
                min-height: min(360px, calc(100cqb - ${config.marginBottom + 98}px));
            }
        }
    `;
}
