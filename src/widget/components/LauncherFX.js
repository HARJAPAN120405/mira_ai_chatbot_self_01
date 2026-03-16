/**
 * LauncherFX — Explosive chatbot launcher animation engine.
 * Runs fully inside the Shadow DOM. First-click only, then delegates to normal toggle.
 *
 * Usage:
 *   const fx = initLauncherFX(shadowRoot, wrapper, orbWrapper, chatWindow, openChatCallback);
 *   fx.reset();  // re-enables first-click animation
 */

export function initLauncherFX(shadowRoot, wrapper, orbWrapper, chatWindow, onReady) {
    /* ── Inject global styles for canvas + flash (they live on document.body) ── */
    if (!document.getElementById('lfx-global-styles')) {
        const globalStyle = document.createElement('style');
        globalStyle.id = 'lfx-global-styles';
        globalStyle.textContent = `
            .lfx-canvas {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                z-index: 999998; pointer-events: none;
            }
            .lfx-flash {
                position: fixed; inset: 0; background: #fff;
                opacity: 0; z-index: 999999; pointer-events: none;
            }
        `;
        document.head.appendChild(globalStyle);
    }

    /* ── Constants ── */
    const TAU = Math.PI * 2;
    const rand = (a, b) => a + Math.random() * (b - a);
    const randInt = (a, b) => Math.floor(rand(a, b));
    const pick = arr => arr[randInt(0, arr.length)];
    const SPARK_COLORS = ['#7b6fff', '#5548e0', '#00ffcc', '#ffd700', '#ff6b9d', 'white', '#9b8fff'];
    const TRAIL_LEN = 40;

    /* ── State ── */
    let played = false;
    let animating = false;
    let heroFlying = false;
    let heroT = 0;
    let particles = [];
    let waves = [];
    let ambients = [];
    let trail = [];
    let rafId = null;
    let W = 0, H = 0;

    /* ── DOM: Canvas ── */
    const canvas = document.createElement('canvas');
    canvas.className = 'lfx-canvas';
    const ctx = canvas.getContext('2d');

    /* ── DOM: Flash overlay ── */
    const flash = document.createElement('div');
    flash.className = 'lfx-flash';

    /* ── DOM: Radial glow ── */
    const glow = document.createElement('div');
    glow.className = 'lfx-glow';

    /* ── DOM: Orbital dots ── */
    const orbData = [
        { radius: 28, speed: '1.9s', color: '#00ffcc' },
        { radius: 34, speed: '2.3s', color: '#7b6fff' },
        { radius: 40, speed: '3.2s', color: '#ffd700' },
        { radius: 44, speed: '4.1s', color: '#ff6b9d' },
    ];
    const orbDots = orbData.map(d => {
        const el = document.createElement('div');
        el.className = 'lfx-orb';
        el.style.setProperty('--lfx-or', d.radius + 'px');
        el.style.setProperty('--lfx-os', d.speed);
        el.style.background = d.color;
        return el;
    });

    /* ── DOM: Hero ── */
    const hero = document.createElement('div');
    hero.className = 'lfx-hero';
    hero.innerHTML = `<svg viewBox="0 0 64 64">
        <defs><linearGradient id="lfx-hg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#7b6fff"/><stop offset="100%" stop-color="#00ffcc"/>
        </linearGradient></defs>
        <circle cx="32" cy="32" r="28" fill="url(#lfx-hg)" opacity=".9"/>
        <path d="M22 36c0-6 4-10 10-10s10 4 10 10" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="26" cy="28" r="2.5" fill="#fff"/><circle cx="38" cy="28" r="2.5" fill="#fff"/>
        <path d="M20 20l6 2M44 20l-6 2" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    </svg>`;

    /* ── DOM: SVG Light rays ── */
    const rays = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    rays.setAttribute('class', 'lfx-rays');
    rays.setAttribute('width', '60');
    rays.setAttribute('height', '200');
    rays.setAttribute('viewBox', '0 0 60 200');
    const rayColors = ['#7b6fff', '#9b8fff', '#00ffcc', '#fff', '#00ffcc', '#9b8fff', '#7b6fff'];
    const rayX2 = [10, 20, 28, 32, 38, 45, 52];
    rayColors.forEach((col, i) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '30'); line.setAttribute('y1', '200');
        line.setAttribute('x2', String(rayX2[i])); line.setAttribute('y2', '0');
        line.setAttribute('stroke', col); line.setAttribute('stroke-width', '2');
        line.style.opacity = '0';
        rays.appendChild(line);
    });

    /* ── Sizing helper ── */
    function resize() {
        const rect = wrapper.getBoundingClientRect();
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    /* ── Launcher center (relative to viewport) ── */
    function launcherCenter() {
        const btn = orbWrapper.querySelector('.chatbot-toggle-btn');
        if (!btn) return { x: W - 51, y: H - 51 };
        const r = btn.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }

    /* ── Canvas drawing helpers ── */
    function drawStar(x, y, r, col, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = col;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const a1 = (i * TAU) / 5 - Math.PI / 2;
            const a2 = a1 + TAU / 10;
            ctx.lineTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r);
            ctx.lineTo(x + Math.cos(a2) * r * 0.42, y + Math.sin(a2) * r * 0.42);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    /* ── Ambient particles (disabled — no background bubble animation) ── */
    function initAmbients() {
        ambients = [];
    }

    function drawAmbients() {
        /* no-op: background bubbles removed */
    }

    /* ── Explosion particles ── */
    function spawnParticles(cx, cy, count, opts = {}) {
        const speed = opts.speed || 6;
        const grav = opts.grav || [0.06, 0.16];
        const cols = opts.colors || SPARK_COLORS;
        for (let i = 0; i < count; i++) {
            const angle = rand(0, TAU);
            const spd = rand(speed * 0.3, speed);
            particles.push({
                x: cx, y: cy,
                vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd,
                life: opts.life || 60, maxLife: opts.life || 60,
                r: rand(1.5, 4), col: pick(cols),
                grav: rand(grav[0], grav[1]),
                star: opts.star || false,
                rot: rand(0, TAU), rv: rand(-0.1, 0.1),
            });
        }
    }

    function spawnStars(cx, cy, count) {
        spawnParticles(cx, cy, count, {
            speed: 8, life: 50, colors: ['#ffd700', '#ffeb3b', '#fff9c4', '#ffe082'],
            star: true, grav: [0.04, 0.12],
        });
    }

    function drawParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx; p.y += p.vy; p.vy += p.grav;
            p.vx *= 0.985; p.life--; p.rot += p.rv;
            if (p.life <= 0) { particles.splice(i, 1); continue; }
            const frac = p.life / p.maxLife;
            ctx.save();
            ctx.globalAlpha = frac;
            ctx.shadowColor = p.col;
            ctx.shadowBlur = 8 * frac;
            if (p.star) {
                drawStar(p.x, p.y, p.r * 2.5 * frac, p.col, frac);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * frac, 0, TAU);
                ctx.fillStyle = p.col;
                ctx.fill();
            }
            ctx.restore();
        }
    }

    /* ── Shockwaves ── */
    function spawnWaves(cx, cy, configs) {
        for (const c of configs) {
            waves.push({ x: cx, y: cy, r: 0, maxR: c.maxR, col: c.col, spd: c.spd || 4 });
        }
    }

    function drawWaves() {
        for (let i = waves.length - 1; i >= 0; i--) {
            const w = waves[i];
            w.r += w.spd;
            if (w.r >= w.maxR) { waves.splice(i, 1); continue; }
            const frac = 1 - w.r / w.maxR;
            ctx.save();
            ctx.globalAlpha = frac * 0.7;
            ctx.strokeStyle = w.col;
            ctx.lineWidth = 2.5 * frac;
            ctx.shadowColor = w.col;
            ctx.shadowBlur = 12 * frac;
            ctx.beginPath();
            ctx.arc(w.x, w.y, w.r, 0, TAU);
            ctx.stroke();
            ctx.restore();
        }
    }

    /* ── Comet trail ── */
    function drawTrail() {
        if (trail.length < 2) return;
        const len = trail.length;
        for (let i = 1; i < len; i++) {
            const frac = i / len;
            ctx.save();
            ctx.strokeStyle = `hsl(${245 + frac * 70}, 90%, ${55 + frac * 25}%)`;
            ctx.lineWidth = frac * 14;
            ctx.lineCap = 'round';
            ctx.shadowColor = 'rgba(140,120,255,0.8)';
            ctx.shadowBlur = frac * 18;
            ctx.globalAlpha = frac;
            ctx.beginPath();
            ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
            ctx.lineTo(trail[i].x, trail[i].y);
            ctx.stroke();
            ctx.restore();
        }
        for (let i = 1; i < len; i++) {
            const frac = i / len;
            ctx.save();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = frac * 5;
            ctx.lineCap = 'round';
            ctx.globalAlpha = frac * 0.25;
            ctx.beginPath();
            ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
            ctx.lineTo(trail[i].x, trail[i].y);
            ctx.stroke();
            ctx.restore();
        }
    }

    /* ── Afterburner ── */
    function drawAfterburner(x, y, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 28);
        grad.addColorStop(0, '#00ffcc');
        grad.addColorStop(0.5, '#7b6fff');
        grad.addColorStop(1, 'transparent');
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, 28, 0, TAU);
        ctx.fill();
        ctx.restore();
    }

    /* ── Speed lines ── */
    function drawSpeedLines(x, y, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.strokeStyle = '#fff';
        ctx.globalAlpha = 0.12;
        ctx.lineWidth = 1;
        for (let i = 0; i < 17; i++) {
            const off = (i - 8) * 16;
            const len = rand(25, 80);
            ctx.beginPath();
            ctx.moveTo(-len / 2, off);
            ctx.lineTo(len / 2, off);
            ctx.stroke();
        }
        ctx.restore();
    }

    /* ── Cubic bezier ── */
    function cubic(t, p0, p1, p2, p3) {
        const u = 1 - t;
        return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
    }

    function getFlightPos(t) {
        const chatRect = chatWindow.getBoundingClientRect();
        const chatX = chatRect.left + chatRect.width / 2;
        const chatY = chatRect.top + chatRect.height / 2;
        const sx = W - 51, sy = H - 51;
        const cp1x = W - 51, cp1y = 40;
        const cp2x = chatX - 80, cp2y = chatY;
        return {
            x: cubic(t, sx, cp1x, cp2x, chatX),
            y: cubic(t, sy, cp1y, cp2y, chatY),
        };
    }

    /* ── DOM sparks (post-impact) ── */
    function spawnDOMSparks(cx, cy) {
        for (let i = 0; i < 24; i++) {
            const el = document.createElement('div');
            el.className = 'lfx-spark';
            const size = rand(6, 14);
            el.style.cssText = `
                left:${cx + rand(-80, 80)}px;top:${cy + rand(-40, 40)}px;
                width:${size}px;height:${size}px;
                --lfx-sx:${rand(-120, 120)}px;--lfx-sy:${rand(-200, -40)}px;
                --lfx-sr:${rand(-360, 360)}deg;
                animation-delay:${i * 55}ms;animation-duration:${rand(600, 1000)}ms;
            `;
            if (i % 2 === 0) {
                el.innerHTML = `<svg viewBox="0 0 12 12" width="${size}" height="${size}"><polygon points="6,0 7.5,4 12,4.5 8.5,7 9.5,11 6,9 2.5,11 3.5,7 0,4.5 4.5,4" fill="${pick(SPARK_COLORS)}"/></svg>`;
            } else {
                el.style.borderRadius = '50%';
                el.style.background = pick(SPARK_COLORS);
            }
            wrapper.appendChild(el);
            setTimeout(() => el.remove(), 1200);
        }
    }

    /* ── Trigger animation ── */
    function triggerAnimation() {
        if (animating || played) return false; // signal: not handled
        animating = true;
        played = true;
        resize();

        const lc = launcherCenter();

        // Phase 1: Explosion — flash
        flash.style.transition = 'none';
        flash.style.opacity = '1';
        requestAnimationFrame(() => {
            flash.style.transition = 'opacity 500ms ease-out';
            flash.style.opacity = '0';
        });

        // Hide launcher idle elements
        orbWrapper.style.opacity = '0';
        orbWrapper.style.pointerEvents = 'none';
        glow.style.display = 'none';

        // Spawn explosion particles + stars + shockwaves
        spawnParticles(lc.x, lc.y, 80, { speed: 10, life: 60, grav: [0.06, 0.16] });
        spawnStars(lc.x, lc.y, 20);
        spawnWaves(lc.x, lc.y, [
            { maxR: 260, col: '#7b6fff', spd: 4 },
            { maxR: 180, col: '#00ffcc', spd: 5.5 },
            { maxR: 100, col: '#ffffff', spd: 7 },
        ]);

        // Phase 2: Hero kickoff (200ms)
        setTimeout(() => {
            hero.style.left = (lc.x - 32) + 'px';
            hero.style.top = (lc.y - 32) + 'px';
            hero.style.opacity = '1';
            hero.style.animation = 'lfx-heroKick 500ms cubic-bezier(0.34,1.56,0.64,1) forwards';
        }, 200);

        // Phase 3: Flight (680ms)
        setTimeout(() => {
            hero.style.animation = 'none';
            heroFlying = true;
            heroT = 0;
            trail = [];
        }, 680);

        return true; // signal: handled, prevent default toggle
    }

    /* ── Phase 4: Impact ── */
    function triggerImpact() {
        heroFlying = false;
        hero.style.opacity = '0';
        hero.style.animation = 'none';

        const chatRect = chatWindow.getBoundingClientRect();
        const impactX = chatRect.left + chatRect.width / 2;
        const impactY = chatRect.top + chatRect.height / 2;

        // Flash
        flash.style.transition = 'none';
        flash.style.opacity = '0.85';
        requestAnimationFrame(() => {
            flash.style.transition = 'opacity 700ms ease-out';
            flash.style.opacity = '0';
        });

        // Shake
        wrapper.style.animation = 'lfx-shake 450ms ease-out';
        wrapper.addEventListener('animationend', function onEnd() {
            wrapper.style.animation = 'none';
            wrapper.removeEventListener('animationend', onEnd);
        });

        // Explosion at landing
        spawnParticles(impactX, impactY, 70, { speed: 8, life: 50, grav: [0.05, 0.14] });
        spawnStars(impactX, impactY, 25);
        spawnWaves(impactX, impactY, [
            { maxR: 220, col: '#7b6fff', spd: 4 },
            { maxR: 160, col: '#00ffcc', spd: 5 },
            { maxR: 120, col: '#ffd700', spd: 6 },
            { maxR: 80, col: '#fff', spd: 7 },
        ]);

        // Secondary waves
        setTimeout(() => {
            spawnWaves(impactX, impactY - 60, [
                { maxR: 140, col: '#7b6fff', spd: 3 },
                { maxR: 100, col: '#00ffcc', spd: 4.5 },
            ]);
        }, 100);

        // Light rays — position near bottom of chat window
        const chatBottom = chatRect.bottom;
        const chatCenterX = chatRect.left + chatRect.width / 2;
        rays.style.left = (chatCenterX - 30) + 'px';
        rays.style.top = (chatBottom - 200) + 'px';
        rays.style.opacity = '1';
        const rayLines = rays.querySelectorAll('line');
        rayLines.forEach((l, i) => {
            l.style.transformOrigin = '30px 200px';
            l.style.animation = `lfx-raysAnim 900ms ${i * 60}ms ease-out forwards`;
            l.style.opacity = '1';
        });
        setTimeout(() => {
            rays.style.opacity = '0';
            rayLines.forEach(l => { l.style.animation = 'none'; l.style.opacity = '0'; });
        }, 1000);

        // DOM sparks
        spawnDOMSparks(impactX, impactY);

        // Open chat with spring animation
        chatWindow.classList.add('lfx-spring');
        chatWindow.classList.add('is-open');
        onReady(); // tell Chatbot.js to set isOpen state

        chatWindow.addEventListener('animationend', function onSpringEnd() {
            chatWindow.classList.remove('lfx-spring');
            chatWindow.removeEventListener('animationend', onSpringEnd);
        });

        // Mark animation complete after effects settle
        setTimeout(() => {
            animating = false;
            // Restore orb for close button functionality
            orbWrapper.style.opacity = '1';
            orbWrapper.style.pointerEvents = 'auto';
        }, 900);
    }

    /* ── Main render loop ── */
    function loop() {
        resize();
        ctx.clearRect(0, 0, W, H);

        if (heroFlying) {
            heroT += 0.016;
            if (heroT >= 1) {
                heroT = 1;
                triggerImpact();
            } else {
                const pos = getFlightPos(heroT);
                const posNext = getFlightPos(Math.min(heroT + 0.01, 1));
                const posPrev = getFlightPos(Math.max(heroT - 0.01, 0));
                const angle = Math.atan2(posNext.y - posPrev.y, posNext.x - posPrev.x);

                hero.style.left = (pos.x - 32) + 'px';
                hero.style.top = (pos.y - 32) + 'px';
                hero.style.transform = `rotate(${angle - Math.PI / 4}rad)`;

                trail.push({ x: pos.x, y: pos.y });
                if (trail.length > TRAIL_LEN) trail.shift();

                drawTrail();
                drawAfterburner(pos.x, pos.y, angle);
                drawSpeedLines(pos.x, pos.y, angle);

                if (Math.random() < 0.65) {
                    spawnParticles(pos.x + rand(-8, 8), pos.y + rand(-8, 8), 1, {
                        speed: 2, life: 25, grav: [0.01, 0.04],
                        colors: ['#7b6fff', '#00ffcc'],
                    });
                }
            }
        } else if (trail.length > 0) {
            trail.shift();
            drawTrail();
        }

        drawParticles();
        drawWaves();

        rafId = requestAnimationFrame(loop);
    }

    /* ── Assemble into shadow DOM ── */
    function mount() {
        // Insert canvas + flash at the wrapper level so they overlay the whole chatbot area
        // But since we need full-viewport coverage, attach to document.body directly
        // (canvas needs to cover the entire page, not just the widget area)
        document.body.appendChild(canvas);
        document.body.appendChild(flash);

        // Glow + orb dots go inside the orb wrapper
        orbWrapper.appendChild(glow);
        orbDots.forEach(d => orbWrapper.appendChild(d));

        // Hero + rays go in wrapper for z-index control
        wrapper.appendChild(hero);
        wrapper.appendChild(rays);

        resize();
        initAmbients();
        loop();
    }

    /* ── Reset: re-enable first-click animation ── */
    function reset() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        played = false;
        animating = false;
        heroFlying = false;
        heroT = 0;
        particles = [];
        waves = [];
        trail = [];

        hero.style.opacity = '0';
        hero.style.animation = 'none';
        hero.style.transform = 'none';
        flash.style.opacity = '0';
        rays.style.opacity = '0';
        glow.style.display = '';
        orbWrapper.style.opacity = '1';
        orbWrapper.style.pointerEvents = 'auto';
        chatWindow.classList.remove('lfx-spring');

        // Remove leftover sparks
        wrapper.querySelectorAll('.lfx-spark').forEach(s => s.remove());
        rays.querySelectorAll('line').forEach(l => {
            l.style.animation = 'none';
            l.style.opacity = '0';
        });

        initAmbients();
        loop();
    }

    /* ── Cleanup: fully tear down ── */
    function destroy() {
        if (rafId) cancelAnimationFrame(rafId);
        canvas.remove();
        flash.remove();
        hero.remove();
        rays.remove();
        glow.remove();
        orbDots.forEach(d => d.remove());
    }

    // Mount immediately
    mount();

    // Return public API
    return {
        /** Attempt to play the animation. Returns true if handled, false if already played. */
        trigger: triggerAnimation,
        /** Whether the animation is currently playing */
        get isAnimating() { return animating; },
        /** Whether the animation has already played */
        get hasPlayed() { return played; },
        /** Reset to allow re-play */
        reset,
        /** Full teardown */
        destroy,
    };
}
