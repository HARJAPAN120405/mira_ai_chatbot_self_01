export function extractProductContext() {
    let context = {
        isProductPage: false,
        productName: null,
        productPrice: null,
        productImage: null,
        productUrl: window.location.href,
        pageTitle: document.title,
        description: null
    };

    // 1️⃣ Try checking for Schema.org JSON-LD
    const schemaProduct = extractFromSchema();
    if (schemaProduct) {
        return mergeContext(context, schemaProduct);
    }

    // 2️⃣ Fallback to OpenGraph Meta Tags
    const ogProduct = extractFromOpenGraph();
    if (ogProduct) {
        return mergeContext(context, ogProduct);
    }

    // 3️⃣ DOM Scraping Fallback
    const domProduct = extractFromDOM();
    if (domProduct) {
        return mergeContext(context, domProduct);
    }

    return context;
}

function mergeContext(base, extracted) {
    return {
        ...base,
        isProductPage: true,
        productName: extracted.name || base.pageTitle,
        productPrice: extracted.price || null,
        productImage: extracted.image || 'https://placehold.co/300x200?text=Product',
        description: extracted.description || null
    };
}

function extractFromSchema() {
    let result = null;
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');

    for (let script of jsonLdScripts) {
        try {
            const data = JSON.parse(script.textContent);
            const items = Array.isArray(data) ? data : [data];

            for (let item of items) {
                if (item['@type'] === 'Product') {
                    result = {
                        name: item.name,
                        image: Array.isArray(item.image) ? item.image[0] : item.image,
                        description: item.description
                    };

                    if (item.offers && item.offers.price) {
                        result.price = (item.offers.priceCurrency || '$') + item.offers.price;
                    }
                    return result; // Return first found product
                }
            }
        } catch (e) {
            // Ignore parse errors
        }
    }
    return result;
}

function extractFromOpenGraph() {
    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType || !ogType.content.includes('product')) {
        // Not explicitly a product, but could check price meta
        if (!document.querySelector('meta[property="product:price:amount"]')) {
            return null;
        }
    }

    const nameEl = document.querySelector('meta[property="og:title"]');
    const imageEl = document.querySelector('meta[property="og:image"]');
    const descEl = document.querySelector('meta[property="og:description"]');
    const priceAmountEl = document.querySelector('meta[property="product:price:amount"]');
    const priceCurrencyEl = document.querySelector('meta[property="product:price:currency"]');

    return {
        name: nameEl ? nameEl.content : null,
        image: imageEl ? imageEl.content : null,
        description: descEl ? descEl.content : null,
        price: priceAmountEl ? ((priceCurrencyEl ? priceCurrencyEl.content : '$') + priceAmountEl.content) : null
    };
}

function extractFromDOM() {
    // Search for common ecommerce patterns
    const productContainer = document.querySelector('.product, .product-card, [data-product], [class*="product"]');

    // If we can't find a wrapper, we might just look for global signals, but wrappers are safer
    if (!productContainer) {
        // Extremely loose fallback just looking for a price and assuming the page is a product
        const wildPrice = document.querySelector('.price, [class*="price"], [data-price]');
        if (wildPrice) {
            return {
                name: document.title,
                price: wildPrice.innerText.trim()
            };
        }
        return null; // Nothing found
    }

    // Attempt to extract from within the container
    let name = null;
    let price = null;
    let image = null;

    // Common title selectors
    const titleEl = productContainer.querySelector('h1, h2, .product-title, .title, [class*="title"]');
    if (titleEl) name = titleEl.innerText.trim();

    // Common price selectors
    const priceEl = productContainer.querySelector('.price, [class*="price"], [data-price]');
    if (priceEl) price = priceEl.innerText.trim();

    // Common image selectors
    const imgEl = productContainer.querySelector('img.product-image, .image img, img[class*="product"]') || productContainer.querySelector('img');
    if (imgEl) image = imgEl.src;

    // Only return if we at least found a name or a price
    if (name || price) {
        return { name, price, image };
    }

    return null;
}
