import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { storeProducts, Product, mockOrders, Order } from "./data.js";
import { similaritySearch } from "./store.js";
import { requestOTP, verifyOTP, getUserAddresses, addAddress, activeSessions, usersDB, getAuthStatus } from "./auth.js";
import { getOrderStatus, getUserOrderHistory } from "./orders.js";

// Session mock cart (exported for server to send cart view to client)
export const sessionCarts = new Map<string, Product[]>();
const DEFAULT_IMG = 'https://placehold.co/80x80?text=Product';

export function getCartGrouped(sessionId: string): { items: any[]; total: number } {
    const cart = sessionCarts.get(sessionId) || [];
    const byKey = new Map<string, { product: Product; quantity: number }>();
    for (const p of cart) {
        const key = (p.title || '').toLowerCase() + '|' + ((p as any).lastAddedSize || '');
        const existing = byKey.get(key);
        if (existing) existing.quantity += 1;
        else byKey.set(key, { product: p, quantity: 1 });
    }
    const items = Array.from(byKey.values()).map(({ product, quantity }) => ({
        title: product.title,
        image: product.image || DEFAULT_IMG,
        price: product.price,
        originalPrice: (product as any).originalPrice ?? null,
        stockStatus: (product as any).stockStatus ?? 'In Stock',
        quantity,
    }));
    const total = cart.reduce((sum, p) => sum + (parseFloat(String(p.price).replace(/[$,]/g, '')) || 0), 0);
    return { items, total };
}

// Tool to semantic search the catalog
export const searchProductCatalog = tool(
    async ({ query, limit }: { query: string, limit?: number }) => {
        try {
            // Retrieve top most semantically similar products
            const products = await similaritySearch(query, limit || 4);

            if (products.length === 0) {
                return JSON.stringify({ message: "No products matched your request." });
            }

            return JSON.stringify(products);
        } catch (error) {
            console.error(error);
            return JSON.stringify({ message: "An error occurred searching the catalog." });
        }
    },
    {
        name: "searchProductCatalog",
        description: "Perform a semantic search of the product catalog. Input a highly descriptive natural language query matching the user's intent. Use limit parameter to specify how many items to return (1 for specific matches, up to 5 for exploration). Returns JSON string of matching products.",
        schema: z.object({
            query: z.string().describe("A descriptive natural language search query (e.g. 'waterproof outerwear', 'summer beach clothing', 'bestseller sneaker')."),
            limit: z.number().optional().describe("Number of products to return. Use 1 or 2 for specific queries, 3-5 for general recommendations."),
        }),
    }
);

// Tool to get store policies
export const getStorePolicies = tool(
    async ({ topic }: { topic: string }) => {
        const policies = {
            "shipping": "We offer free standard shipping on all orders over $50! Standard delivery takes 3-5 business days. Expedited options are available at checkout.",
            "returns": "You can return any unworn item within 30 days of purchase for a full refund. Please keep the original packaging!",
            "sizing": "We recommend selecting your usual true-to-size fit for all footwear and apparel."
        };

        const key = topic.toLowerCase() as keyof typeof policies;
        return policies[key] || "I don't have specific policy information on that topic. Please refer to our website's help center.";
    },
    {
        name: "getStorePolicies",
        description: "Retrieve store policies regarding shipping, returns, or sizing.",
        schema: z.object({
            topic: z.enum(["shipping", "returns", "sizing"]).describe("The policy topic to retrieve."),
        }),
    }
);

export const addToCart = tool(
    async ({ title, size }: { title: string, size?: string }, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const product = storeProducts.find(p => p.title.toLowerCase().includes(title.toLowerCase()));
        if (!product) {
            return `I couldn't find a product matching "${title}".`;
        }

        // For shoes (sneakers), size is required — ask user before adding
        const isShoe = (product as any).category === 'sneakers' || ((product as any).sizes && (product as any).sizes.length > 0);
        if (isShoe && (!size || !size.trim())) {
            const sizes = (product as any).sizes || ['US 8', 'US 9', 'US 10', 'US 11'];
            return `**${product.title}** is footwear — I need your size before adding it to the cart. Which size would you like? We have: ${sizes.join(', ')}.`;
        }

        let cart = sessionCarts.get(sessionId);
        if (!cart) {
            cart = [];
            sessionCarts.set(sessionId, cart);
        }

        cart.push(product);
        let resp = `✅ **${product.title}** has been added to your shopping bag.`;
        if (size) resp += `\n- **Size:** ${size}`;
        resp += `\n- **Price:** ${product.price}`;
        return resp + `\n\nWould you like to **checkout** or **keep browsing**?`;
    },
    {
        name: "addToCart",
        description: "Add a product to the user's shopping cart. Only use this if the user explicitly asks to add an item or purchase it. For footwear/sneakers, you MUST ask the user for their size first and pass the size parameter; do not call addToCart for shoes without a size.",
        schema: z.object({
            title: z.string().describe("The exact title of the product to add."),
            size: z.string().optional().describe("Required for footwear/sneakers. The user's chosen size (e.g. 'US 9'). For non-footwear, omit."),
        }),
    }
);

export const checkout = tool(
    async ({ addressId, paymentMethod }: { addressId: number, paymentMethod: "COD" | "Prepaid" }, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const cart = sessionCarts.get(sessionId);
        if (!cart || cart.length === 0) {
            return "Your cart is empty. Please add items before checking out.";
        }

        // Verify Auth
        const phone = activeSessions.get(sessionId);
        if (!phone) {
            return "User is NOT logged in. You must ask the user to log in or provide their phone number first before checking out.";
        }

        // Verify Address
        const user = usersDB.get(phone);
        if (!user || !user.addresses || user.addresses.length <= addressId || addressId < 0) {
            return `User does NOT have a valid address at ID ${addressId}. Please use getUserAddresses to check their addresses, or ask them to add a new shipping address.`;
        }
        
        const addr = user.addresses[addressId];
        const shippingAddress = typeof addr === 'string' ? addr : [addr.street, [addr.city, addr.state].filter(Boolean).join(', '), addr.zip].filter(Boolean).join(', ');

        // Process Payment (Mock)
        const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);
        const total = cart.reduce((sum, p) => sum + parseFloat(p.price.replace('$', '')), 0);
        
        const newOrder: Order = {
            id: orderId,
            phone: phone,
            status: 'Processing',
            items: cart.map(p => ({ title: p.title, price: p.price, size: "N/A" })),
            total: total,
            date: new Date().toISOString().split('T')[0]
        };

        mockOrders.push(newOrder);
        
        // Clear Cart
        sessionCarts.set(sessionId, []);

        const paymentLabel = paymentMethod === 'COD' ? '💵 Cash on Delivery' : '💳 Prepaid (Online)';

        let confirmationTable = `🎊 **Order Confirmed!**\n\n**Order ID:** \`${orderId}\`\n\n| Item | Price | Size |\n| :--- | :--- | :--- |\n`;
        newOrder.items.forEach(item => {
            confirmationTable += `| ${item.title} | ${item.price} | ${item.size} |\n`;
        });
        confirmationTable += `\n**Total:** $${total.toFixed(2)} · **Payment:** ${paymentLabel}\n\n**Ships to:** ${shippingAddress}\n\nYour order is now being processed. You'll receive it within 3-5 business days. 🚚`;

        return confirmationTable;
    },
    {
        name: "checkout",
        description: "Process the cart and complete the checkout. You MUST ensure the user is logged in, that you have verified their desired shipping address, and that you have confirmed their payment method (COD or Prepaid).",
        schema: z.object({
            addressId: z.number().describe("The array index ID of the chosen shipping address."),
            paymentMethod: z.enum(["COD", "Prepaid"]).describe("The payment method chosen by the user. Either 'COD' (Cash on Delivery) or 'Prepaid' (online payment)."),
        }),
    }
);

export const getRecommendations = tool(
    async (_input: any, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const cart = sessionCarts.get(sessionId) || [];
        const phone = activeSessions.get(sessionId);
        const userOrders = phone ? mockOrders.filter(o => o.phone === phone) : [];
        
        const categoriesInCartOrOrders = new Set<string>();
        cart.forEach(p => categoriesInCartOrOrders.add(p.category));
        userOrders.forEach(o => o.items.forEach(i => {
           const p = storeProducts.find(prod => prod.title === i.title);
           if (p) categoriesInCartOrOrders.add(p.category);
        }));

        let recommendedCategory = 'accessories'; // default
        if (categoriesInCartOrOrders.has('sneakers')) recommendedCategory = 'apparel';
        else if (categoriesInCartOrOrders.has('apparel')) recommendedCategory = 'accessories';
        else if (categoriesInCartOrOrders.has('accessories')) recommendedCategory = 'sneakers';
        
        const recommendations = storeProducts.filter(p => p.category === recommendedCategory).slice(0, 2);
        
        return JSON.stringify(recommendations);
    },
    {
        name: "getRecommendations",
        description: "Get personalized product recommendations for the user based on their current cart or past order history. Call this to proactively cross-sell items.",
        schema: z.object({}),
    }
);
export const viewCart = tool(
    async (_input: any, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const cart = sessionCarts.get(sessionId);
        if (!cart || cart.length === 0) {
            return "Your shopping bag is empty. Browse our catalog to add items!";
        }
        // Do NOT return a table — the client shows a cart card. Return a short instruction so the agent does not duplicate the list.
        return "The cart has been sent to the widget and is displayed as a card. Reply with only a brief line such as: 'Here’s your cart.' or 'Here’s what’s in your bag.' Then ask: 'Would you like to proceed to checkout or need anything else?' Do not list items, repeat prices, or output a table.";
    },
    {
        name: "viewCart",
        description: "Show the user's shopping cart. ALWAYS call this when the user says: 'show my cart', 'what's in my cart', 'my bag', 'view cart', 'cart', or any request to see their cart. The client displays a cart card; do not list items or repeat prices in your reply.",
        schema: z.object({}),
    }
);

export const removeFromCart = tool(
    async ({ title }: { title: string }, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const cart = sessionCarts.get(sessionId);
        if (!cart || cart.length === 0) {
            return "Your cart is already empty.";
        }
        const idx = cart.findIndex(p => p.title.toLowerCase().includes(title.toLowerCase()));
        if (idx === -1) {
            return `I couldn't find "${title}" in your cart. Use viewCart to see what's in your bag.`;
        }
        const removed = cart.splice(idx, 1)[0];
        const remaining = cart.length;
        return `✅ **${removed.title}** has been removed from your bag. You now have ${remaining} item${remaining !== 1 ? 's' : ''} remaining.`;
    },
    {
        name: "removeFromCart",
        description: "Remove a specific product from the user's cart by its name. Call when user says 'remove X' or 'delete X from cart'.",
        schema: z.object({
            title: z.string().describe("The name of the product to remove from the cart."),
        }),
    }
);

/** REST: run checkout and push to mockOrders (so order shows in order history) */
export function runCheckout(sessionId: string, addressId: number, paymentMethod: "COD" | "Prepaid"): { success: boolean; orderId?: string; total?: number; items?: any[]; message: string } {
    const cart = sessionCarts.get(sessionId);
    if (!cart?.length) return { success: false, message: "Cart is empty." };
    const phone = activeSessions.get(sessionId);
    if (!phone) return { success: false, message: "Not logged in." };
    const user = usersDB.get(phone);
    if (!user || !user.addresses || user.addresses.length <= addressId || addressId < 0) {
        return { success: false, message: "Invalid address." };
    }
    const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);
    const total = cart.reduce((sum, p) => sum + parseFloat(String(p.price).replace(/[$,]/g, '')) || 0, 0);
    const items = cart.map((p: any) => ({ title: p.title, price: p.price, size: (p.lastAddedSize as string) || "N/A" }));
    const newOrder: Order = { id: orderId, phone, status: 'Processing', items, total, date: new Date().toISOString().split('T')[0] };
    mockOrders.push(newOrder);
    sessionCarts.set(sessionId, []);
    return { success: true, orderId, total, items, message: "Order placed." };
}

export const agentTools = [searchProductCatalog, getStorePolicies, addToCart, viewCart, removeFromCart, checkout, getRecommendations, requestOTP, verifyOTP, getUserAddresses, addAddress, getOrderStatus, getUserOrderHistory, getAuthStatus];
