import { applyMagnetic } from '../utils/magnetic.js';

export function renderMessageList() {
    const list = document.createElement('div');
    list.className = 'chatbot-messages';
    list.id = 'chatbot-messages-container';

    // Welcome message will go here
    return list;
}

export function parseMarkdown(text) {
    if (!text) return '';
    let html = text;

    // 1. Tables — MUST come before newline conversion, as they depend on \n
    html = html.replace(/\|(.+)\|[ \t]*\n\|[ \t]*[-:| \t]+[ \t]*\n((?:\|.+\|[ \t]*\n?)+)/g, (match, header, body) => {
        const headers = header.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`).join('');
        const rows = body.trim().split('\n').filter(r => r.trim()).map(row => {
            const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        return `<div class="md-table-wrap"><table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
    });

    // 2. Blockquotes (> text) — before newline conversion
    html = html.replace(/^>\s?(.*)$/gm, '<blockquote>$1</blockquote>');

    // 3. Headings — before newline conversion
    html = html.replace(/^###\s+(.+)$/gm, '<h3 class="md-h3">$1</h3>');
    html = html.replace(/^##\s+(.+)$/gm, '<h2 class="md-h2">$1</h2>');
    html = html.replace(/^#\s+(.+)$/gm, '<h1 class="md-h1">$1</h1>');

    // 4. Horizontal Rules
    html = html.replace(/^---+$/gm, '<hr class="md-hr"/>');

    // 5. Unordered Lists — before newline conversion
    html = html.replace(/((?:^[ \t]*[-*]\s+.+\n?)+)/gm, (block) => {
        const items = block.trim().split('\n').map(line => {
            const content = line.replace(/^[ \t]*[-*]\s+/, '');
            return `<li>${content}</li>`;
        }).join('');
        return `<ul class="md-list">${items}</ul>\n`;
    });

    // 6. Bold and Italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');

    // 7. Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="md-code">$1</code>');

    // 8. Newlines — skip inside block elements by converting remaining \n to <br>
    html = html.replace(/\n{2,}/g, '</p><p class="md-p">');
    html = html.replace(/\n/g, '<br/>');
    html = `<p class="md-p">${html}</p>`;

    return html;
}


export function createTextMessage(text, isBot = true, config = null, onActionClick = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chatbot-message ${isBot ? 'bot' : 'user'} ${isBot ? 'msg-enter-bot' : 'msg-enter-user'}`;

    const bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble';

    if (isBot) {
        const avatarImage = config?.launcherIconUrl ? `<img src="${config.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : `<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
        msgDiv.innerHTML = `
            <div class="chatbot-message-avatar">
                ${avatarImage}
            </div>
        `;
        
        // Phase 4: Quick Actions Detection
        // If text contains something like [Action: Label], we strip it and make a button
        const actionRegex = /\[Action:\s*(.*?)\]/g;
        let actions = [];
        let cleanText = text.replace(actionRegex, (match, label) => {
            actions.push(label);
            return "";
        });

        bubble.innerHTML = parseMarkdown(cleanText);
        msgDiv.appendChild(bubble);

        if (actions.length > 0 && onActionClick) {
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'chatbot-actions';
            actions.forEach(label => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'action-btn';
                btn.textContent = label;
                btn.onclick = () => onActionClick(label);
                applyMagnetic(btn, { strength: 0.1, radius: 50 });
                actionsContainer.appendChild(btn);
            });
            msgDiv.appendChild(actionsContainer);
        }
    } else {
        bubble.innerHTML = parseMarkdown(text);
        msgDiv.appendChild(bubble);
    }

    return msgDiv;
}

export function createProductCard(productData, onAddToCart, config = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chatbot-message bot msg-enter-product';

    const avatarImage = config?.launcherIconUrl ? `<img src="${config.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : `<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
    const avatarHtml = `
        <div class="chatbot-message-avatar">
            ${avatarImage}
        </div>
    `;

    const imageSrc = productData.image || 'https://placehold.co/300x200?text=Product';

    // Build the dynamic card wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.innerHTML = avatarHtml;

    const cardContent = document.createElement('div');
    cardContent.className = 'chatbot-product-card';

    // State for sizes
    let selectedSize = null;

    let sizesHtml = '';
    if (productData.sizes && productData.sizes.length > 0) {
        sizesHtml = '<div class="chatbot-product-sizes"></div>';
    }

    const cartLabel = config?.addToCartLabel || 'Add to Cart';

    // Static HTML core
    cardContent.innerHTML = `
        <img src="${imageSrc}" alt="${productData.title || 'Product'}" class="chatbot-product-image" />
        <div class="chatbot-product-info">
            <div class="chatbot-product-title">${productData.title || 'Product'}</div>
            <div class="chatbot-product-desc">${productData.description || 'View details for this product.'}</div>
            ${sizesHtml}
            <button class="chatbot-product-action">${productData.price ? cartLabel + ' - ' + productData.price : 'View Product'}</button>
        </div>
    `;

    // Attach Interactive Elements if we have sizes
    if (productData.sizes && productData.sizes.length > 0) {
        const sizesContainer = cardContent.querySelector('.chatbot-product-sizes');

        productData.sizes.forEach(size => {
            const pill = document.createElement('button');
            pill.className = 'size-pill';
            pill.textContent = size;

            pill.addEventListener('click', () => {
                // Remove selected from all
                sizesContainer.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
                // Add to this one
                pill.classList.add('selected');
                selectedSize = size;
            });

            sizesContainer.appendChild(pill);
        });
    }

    // Handle Button Click
    const actionBtn = cardContent.querySelector('.chatbot-product-action');
    actionBtn.addEventListener('click', () => {
        if (productData.sizes && productData.sizes.length > 0 && !selectedSize) {
            actionBtn.textContent = 'Please select a size';
            actionBtn.style.background = '#e53e3e'; // Error red temporarily
            setTimeout(() => {
                const resetLabel = config?.addToCartLabel || 'Add to Cart';
                actionBtn.textContent = productData.price ? resetLabel + ' - ' + productData.price : 'View Product';
                actionBtn.style.background = ''; // reset to var(--primary)
            }, 2000);
            return;
        }

        // Trigger Callback
        if (onAddToCart) {
            onAddToCart(productData, selectedSize);
        } else if (productData.url) {
            window.open(productData.url, '_blank');
        }
    });

    cardWrapper.appendChild(cardContent);
    msgDiv.appendChild(cardWrapper);

    return msgDiv;
}

export function createProductCarousel(products, onAddToCart, config = null) {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'chatbot-message bot-message msg-enter-product';

    const avatarImage = config?.launcherIconUrl ? `<img src="${config.launcherIconUrl}" alt="Bot" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : `<svg viewBox="0 0 24 24" fill="var(--primary-color)"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
    const avatarHtml = `
        <div class="chatbot-message-avatar">
            ${avatarImage}
        </div>
    `;

    // Wrap the carousel inside a flex row so avatar sits flush left
    const messageRow = document.createElement('div');
    messageRow.style.display = 'flex';
    messageRow.style.width = '100%';
    messageRow.innerHTML = avatarHtml;

    const outerContainer = document.createElement('div');
    outerContainer.className = 'carousel-container';
    outerContainer.style.flex = '1';
    outerContainer.style.minWidth = '0'; // Allows carousel tracks to shrink properly inside flex

    // Left Button
    const leftBtn = document.createElement('button');
    leftBtn.className = 'carousel-nav-btn carousel-nav-left';
    leftBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';

    // Right Button
    const rightBtn = document.createElement('button');
    rightBtn.className = 'carousel-nav-btn carousel-nav-right';
    rightBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';

    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'chatbot-product-carousel';

    // Scroll Logic
    const SCROLL_AMOUNT = 232; // approx card width + gap
    leftBtn.addEventListener('click', () => {
        carouselWrapper.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
        carouselWrapper.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    });

    products.forEach(product => {
        // Build individual card
        const card = document.createElement('div');
        card.className = 'carousel-card';

        card.innerHTML = `
            <img src="${product.image || 'https://placehold.co/300x200?text=Product'}" class="chatbot-product-img" alt="${product.title || 'Product Image'}" />
            <div class="chatbot-product-content">
                <div class="chatbot-product-header">
                    <h4>${product.title || 'Unknown Product'}</h4>
                    <span class="chatbot-product-price">${product.price || ''}</span>
                </div>
            </div>
        `;

        const contentDiv = card.querySelector('.chatbot-product-content');

        // Add size selection if available
        let selectedSize = null;
        if (product.sizes && Array.isArray(product.sizes)) {
            const sizesDiv = document.createElement('div');
            sizesDiv.className = 'chatbot-product-sizes';

            const sizesList = document.createElement('div');
            sizesList.className = 'sizes-list';

            product.sizes.forEach(size => {
                const pill = document.createElement('button');
                pill.className = 'size-pill';
                pill.innerText = size;
                pill.addEventListener('click', () => {
                    sizesList.querySelectorAll('.size-pill').forEach(btn => btn.classList.remove('selected'));
                    pill.classList.add('selected');
                    selectedSize = size;
                });
                sizesList.appendChild(pill);
            });
            sizesDiv.appendChild(sizesList);
            contentDiv.appendChild(sizesDiv);
        }

        // Add Call to Action
        const actionBtn = document.createElement('div');
        actionBtn.className = 'chatbot-product-action';
        actionBtn.innerText = config?.addToCartLabel || 'Add to Cart';
        actionBtn.addEventListener('click', () => {
            if (product.sizes && !selectedSize) {
                alert('Please select a size first!');
                return;
            }
            if (onAddToCart) onAddToCart(product, selectedSize);
        });

        contentDiv.appendChild(actionBtn);
        apply3DTilt(card, 'carousel-card-3d');
        carouselWrapper.appendChild(card);
    });

    outerContainer.appendChild(leftBtn);
    outerContainer.appendChild(carouselWrapper);
    outerContainer.appendChild(rightBtn);

    messageRow.appendChild(outerContainer);
    listWrapper.appendChild(messageRow);

    return listWrapper;
}

/** 3D tilt on hover: rotateX/Y and translateY from mouse position. */
export function apply3DTilt(cardEl, className = 'chatbot-product-card-3d') {
    if (!cardEl) return;
    cardEl.classList.add(className);
    cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * 8;
        const tiltY = (x - 0.5) * -8;
        const lift = 4;
        cardEl.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-${lift}px)`;
    });
    cardEl.addEventListener('mouseleave', () => {
        cardEl.style.transform = '';
    });
}

/** Skeleton row shown while product results are loading (SSE). */
export function createSkeletonProductRow() {
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-message bot msg-enter-bot';
    wrapper.setAttribute('data-skeleton', 'true');
    wrapper.innerHTML = `
        <div class="chatbot-message-avatar" style="opacity:0.6;"></div>
        <div class="skeleton-product-row">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
        </div>
    `;
    return wrapper;
}

/** Suggestion chips under a message; clicking sends the chip text. */
export function createSuggestionChips(chips, onSelect, config) {
    if (!chips || chips.length === 0) return null;
    const wrap = document.createElement('div');
    wrap.className = 'chatbot-suggestion-chips';
    chips.forEach((label) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'suggestion-chip';
        chip.textContent = label;
        chip.addEventListener('click', () => onSelect(label));
        applyMagnetic(chip, { strength: 0.1, radius: 50 });
        wrap.appendChild(chip);
    });
    return wrap;
}

/**
 * Inline product card for chat stream: image, title, price, rating placeholder, quick actions.
 * Actions: Add to Cart, View, Save, Compare.
 */
export function createInlineProductCard(product, config, handlers = {}) {
    const { onAddToCart, onView, onSave, onCompare } = handlers;
    const card = document.createElement('div');
    card.className = 'chatbot-inline-product msg-enter-product';
    const rating = product.rating != null ? product.rating : (product.bestseller ? '4.8' : '');
    const ratingHtml = rating ? `<span class="chatbot-inline-rating">★ ${rating}</span>` : '';
    card.innerHTML = `
        <img src="${product.image || 'https://placehold.co/300x200?text=Product'}" alt="${product.title || 'Product'}" style="width:100%;height:120px;object-fit:cover;" />
        <div style="padding:10px 12px;">
            <div class="chatbot-product-title">${product.title || 'Product'}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
                <span class="chatbot-product-price">${product.price || ''}</span>
                ${ratingHtml}
            </div>
            <div class="chatbot-inline-product-actions"></div>
        </div>
    `;
    const actionsContainer = card.querySelector('.chatbot-inline-product-actions');
    const addBtn = document.createElement('button');
    addBtn.textContent = config?.addToCartLabel || 'Add to Cart';
    addBtn.addEventListener('click', () => onAddToCart && onAddToCart(product));
    actionsContainer.appendChild(addBtn);
    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View';
    viewBtn.style.background = 'transparent';
    viewBtn.style.color = 'var(--primary-color)';
    viewBtn.style.border = '1px solid var(--primary-color)';
    viewBtn.addEventListener('click', () => onView ? onView(product) : (product.url && window.open(product.url, '_blank')));
    actionsContainer.appendChild(viewBtn);
    if (onSave) {
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.style.background = 'transparent';
        saveBtn.style.color = 'inherit';
        saveBtn.addEventListener('click', () => onSave(product));
        actionsContainer.appendChild(saveBtn);
    }
    if (onCompare) {
        const compareBtn = document.createElement('button');
        compareBtn.textContent = 'Compare';
        compareBtn.style.background = 'transparent';
        compareBtn.style.color = 'inherit';
        compareBtn.addEventListener('click', () => onCompare(product));
        actionsContainer.appendChild(compareBtn);
    }
    apply3DTilt(card, 'chatbot-product-card-3d');
    return card;
}

/**
 * "Your Cart" section card: header, item rows (image, title, price, originalPrice, stock), grand total, optional checkout CTA.
 * cartPayload: { items: [{ title, image, price, originalPrice, stockStatus }], total: number }
 * options: { onCheckout?: () => void, onAddMore?: () => void }
 */
export function createYourCartCard(cartPayload, options = {}) {
    if (!cartPayload || !cartPayload.items || !Array.isArray(cartPayload.items)) return null;
    const { items, total } = cartPayload;
    const { onCheckout, onAddMore } = options;
    const card = document.createElement('div');
    card.className = 'chatbot-section-card chatbot-cart-card msg-enter-product';
    const totalFormatted = typeof total === 'number' ? `$${total.toFixed(2)}` : (total || '$0.00');
    const cartIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
    let rowsHtml = items.length === 0
        ? '<div class="chatbot-cart-empty">Your cart is empty. Add items to see them here.</div>'
        : items.map((item) => {
        const orig = item.originalPrice ? `<span class="price-original">${item.originalPrice}</span>` : '';
        const isOut = (item.stockStatus || '').toLowerCase().includes('out of stock');
        const stockClass = isOut ? 'stock-out' : 'stock-in';
        return `
            <div class="chatbot-section-card-row chatbot-cart-item">
                <img class="chatbot-cart-item-img" src="${item.image || 'https://placehold.co/80x80?text=Product'}" alt="${(item.title || '').slice(0, 30)}" />
                <div class="chatbot-cart-item-info">
                    <div class="chatbot-cart-item-title">${item.title || 'Product'}</div>
                    <div class="chatbot-cart-item-pricing">
                        <span class="chatbot-product-price">${item.price || ''}</span>${orig}
                    </div>
                    <div class="${stockClass}">${item.stockStatus || 'In Stock'}</div>
                </div>
            </div>
        `;
    }).join('');
    rowsHtml += `
        <div class="chatbot-section-card-row chatbot-cart-total-row">
            <span class="chatbot-cart-total-label">Grand Total</span>
            <span class="chatbot-cart-total-value">${totalFormatted}</span>
        </div>
    `;
    const checkoutFooter = items.length > 0 && onCheckout
        ? `<div class="chatbot-cart-checkout-footer">
            <p class="chatbot-cart-checkout-prompt">Would you like to proceed to checkout?</p>
            <button type="button" class="chatbot-cart-checkout-btn">Proceed to checkout</button>
        </div>`
        : '';
    const hasActions = items.length > 0 && (onCheckout || onAddMore);
    const cartSuggestionsHtml = hasActions
        ? `<div class="chatbot-cart-suggestions">
            <p class="chatbot-cart-suggestions-text">Add something else? Or proceed to checkout.</p>
            <div class="chatbot-cart-suggestion-pills"></div>
        </div>`
        : '';
    card.innerHTML = `
        <div class="chatbot-section-card-title chatbot-cart-card-title">
            ${cartIcon}
            <span>Your Cart</span>
        </div>
        <div class="chatbot-section-card-body">${rowsHtml}</div>
        ${checkoutFooter}
        ${cartSuggestionsHtml}
    `;
    if (items.length > 0 && onCheckout) {
        const btn = card.querySelector('.chatbot-cart-checkout-btn');
        if (btn) btn.addEventListener('click', () => onCheckout());
    }
    if (hasActions) {
        const pillsContainer = card.querySelector('.chatbot-cart-suggestion-pills');
        if (pillsContainer) {
            if (onAddMore) {
                const addMorePill = document.createElement('button');
                addMorePill.type = 'button';
                addMorePill.className = 'chatbot-cart-pill';
                addMorePill.textContent = 'Add another product';
                addMorePill.addEventListener('click', () => onAddMore());
                pillsContainer.appendChild(addMorePill);
            }
            if (onCheckout) {
                const checkoutPill = document.createElement('button');
                checkoutPill.type = 'button';
                checkoutPill.className = 'chatbot-cart-pill chatbot-cart-pill-checkout';
                checkoutPill.textContent = 'Proceed to checkout';
                checkoutPill.addEventListener('click', () => onCheckout());
                pillsContainer.appendChild(checkoutPill);
            }
        }
    }
    return card;
}

/**
 * Order history card: header + order blocks (ID, date, status badge, items, total). Appealing, scannable layout.
 * orders: [{ id, date, status, items: [{ title, price, size? }], total }]
 */
export function createOrderHistoryCard(orders) {
    if (!orders || !Array.isArray(orders)) return null;
    const card = document.createElement('div');
    card.className = 'chatbot-section-card chatbot-order-history-card msg-enter-product';
    const historyIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    const statusClass = (s) => {
        const v = (s || '').toLowerCase();
        if (v === 'delivered') return 'order-status-delivered';
        if (v === 'shipped') return 'order-status-shipped';
        if (v === 'processing') return 'order-status-processing';
        if (v === 'cancelled') return 'order-status-cancelled';
        return 'order-status-default';
    };
    let bodyHtml = orders.length === 0
        ? '<div class="chatbot-order-history-empty">You don’t have any past orders yet.</div>'
        : orders.map((order) => {
            const totalFormatted = typeof order.total === 'number' ? `$${order.total.toFixed(2)}` : (order.total != null ? `$${Number(order.total).toFixed(2)}` : '—');
            const itemsList = (order.items || []).map((i) => `<span class="chatbot-order-item-line">${i.title || 'Item'} ${i.price ? ` · ${i.price}` : ''}</span>`).join('');
            return `
                <div class="chatbot-order-block">
                    <div class="chatbot-order-block-header">
                        <span class="chatbot-order-id">${order.id || '—'}</span>
                        <span class="chatbot-order-date">${order.date || '—'}</span>
                        <span class="chatbot-order-status ${statusClass(order.status)}">${order.status || '—'}</span>
                    </div>
                    <div class="chatbot-order-items">${itemsList || '<span class="chatbot-order-item-line">No items</span>'}</div>
                    <div class="chatbot-order-total">Total ${totalFormatted}</div>
                </div>
            `;
        }).join('');
    card.innerHTML = `
        <div class="chatbot-section-card-title chatbot-order-history-title">
            ${historyIcon}
            <span>Order History</span>
        </div>
        <div class="chatbot-section-card-body chatbot-order-history-body">${bodyHtml}</div>
    `;
    return card;
}
