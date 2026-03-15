/**
 * Magnetic button effect: element subtly moves toward cursor on hover.
 * Uses transform only for 60fps. Call with (element, options).
 * @param {HTMLElement} el - Button or interactive element
 * @param {{ strength?: number, radius?: number }} options - strength 0-1, radius in px
 */
export function applyMagnetic(el, options = {}) {
    const strength = options.strength ?? 0.15;
    const radius = options.radius ?? 80;

    if (!el || typeof el.addEventListener !== 'function') return;

    let raf = null;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (a, b, t) => a + (b - a) * t;

    const update = () => {
        currentX = lerp(currentX, targetX, 0.2);
        currentY = lerp(currentY, targetY, 0.2);
        if (Math.abs(currentX - targetX) < 0.01) currentX = targetX;
        if (Math.abs(currentY - targetY) < 0.01) currentY = targetY;
        el.style.transform = `translate(${currentX}px, ${currentY}px)`;
        if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01 || targetX !== 0 || targetY !== 0) {
            raf = requestAnimationFrame(update);
        } else {
            raf = null;
            el.style.willChange = '';
        }
    };

    el.addEventListener('mouseenter', () => {
        el.style.willChange = 'transform';
    });

    el.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
        if (!raf) raf = requestAnimationFrame(update);
    });

    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius) {
            const f = (1 - dist / radius) * strength;
            targetX = dx * f;
            targetY = dy * f;
        } else {
            targetX = 0;
            targetY = 0;
        }
        if (!raf) raf = requestAnimationFrame(update);
    });

    return () => {
        if (raf) cancelAnimationFrame(raf);
    };
}

/**
 * Apply magnetic effect to all elements matching selector within a root.
 */
export function applyMagneticToAll(root, selector, options) {
    const elements = root.querySelectorAll(selector);
    const cleanups = [];
    elements.forEach((el) => cleanups.push(applyMagnetic(el, options)));
    return () => cleanups.forEach((fn) => fn && fn());
}
