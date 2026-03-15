# E-commerce Chatbot CDN Widget (Aura Store AI)

A premium, vanilla JS e-commerce chatbot widget with advanced UX, motion design, and AI assistant behavior. It ships as a single IIFE bundle, renders inside a Shadow DOM for style isolation, and connects to a Bun + Hono + LangChain + Gemini backend for streaming chat, product search, cart, and checkout.

## Key Features

- **Shadow DOM Isolation**: Zero CSS collisions with the host site.
- **Next-gen AI Launcher**: Hellorep-style multi-ring orb (3 concentric rings + breathing glow), float animation, and ripple on new messages. Default theme: dark with purple/violet accents.
- **Larger Window**: 380×680px default; **viewport-safe** so it always fits on laptop and monitor: `max-height: min(680px, calc(100vh - margin))`, `max-width: calc(100vw - margin)`, `min-height: 360px`. In the Botify panel Live Preview, the chatbox is **container-aware**: the preview area uses `container-type: size` and the widget uses `@container chatbot-preview` so the chat window height is constrained to the preview area, ensuring the full chatbox (launcher + window + input) stays visible on small screens.
- **Spring Open Animation**: Chat window opens with scale + translateY and spring-like easing.
- **Message Entrance Animations**: User messages slide from right; bot messages slide from left; product cards scale in.
- **AI Thinking State**: Shimmer bars and optional status text (e.g. "Searching products...") instead of simple typing dots.
- **Skeleton Loaders**: Shimmer placeholders while product results stream in.
- **Suggestion Chips**: Only below response text (no side layout). Chips are relevance-picked from the bot’s message (e.g. sneakers → "Show sneakers under $100").
- **Smart Input Placeholder**: Cycles through example prompts every few seconds.
- **Magnetic Button Effect**: Buttons (send, preset pills, action buttons, chips) subtly move toward the cursor on hover.
- **Product Card 3D Hover**: Subtle tilt (rotateX/Y, translateY) driven by mouse position on product cards.
- **Message Grouping**: Consecutive messages from the same sender share a single avatar for a cleaner thread.
- **Smooth Auto-Scroll**: New messages scroll into view with smooth behavior.
- **Particle Background**: Light floating particles behind the message list.
- **Animated Header**: Gradient background animation, top-line shine, drifting glow, avatar glow pulse, status dot pulse.
- **Animated Chatbox**: Flowing gradient background and drifting mesh (radial gradients); particles; no side layout.
- **Quick Actions**: Messages can include `[Action: Label]` markers rendered as buttons.
- **Comparison Tables**: Markdown tables in bot replies are styled with horizontal scroll.
- **Your Cart card**: When the user asks to see their cart, the backend sends a `cart` SSE payload; the widget renders a **Your Cart** section card with product image, title, price, original price (strikethrough), stock status (In Stock / Out of Stock), and Grand Total. Below the card, a short line **"Add something else? Or proceed to checkout."** and **suggestion pills**: **"Add another product"** (sends a message to browse more) and **"Proceed to checkout"** (same as the main checkout button). Demo data includes `originalPrice` and `stockStatus` per product.
- **Sizes only for shoes**: For **footwear (sneakers)**, the bot **always asks for size before adding to cart**. The backend `addToCart` tool requires a `size` parameter for shoes and returns a prompt to choose a size if missing; the agent is instructed to never call addToCart for shoes without the user’s size. Size pills (e.g. US 8–11) are shown in product carousels and single product cards; the widget blocks add-to-cart until a size is selected.
- **Enhanced Glassmorphism**: Stronger blur, soft highlights, and depth for the glass theme.
- **Auto Product Detection**: Schema.org, OpenGraph, and DOM fallback for product context on the host page.
- **Mobile Native UX**: Full-screen mode on viewports under 480px with safe-area support.
- **Customization Panel**: Config builder for colors, text, avatars, and integration snippet.

---

## 🚀 Integration

Getting started is as simple as defining your `window.chatbotConfig` and dropping the script before your closing `</body>` tag.

```html
<script>
    window.chatbotConfig = {
        "botName": "Shopping Assistant",
        "botAvatarUrl": "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
        "primaryColor": "#2b6cb0",
        "backgroundColor": "#ffffff",
        "position": "bottom-right",
        "autoDetectProduct": true,
        "textColor": "#ffffff"
    };
</script>
<script src="https://cdn.yourdomain.com/chatbot.min.js"></script>
<script>
    window.addEventListener('DOMContentLoaded', () => {
        if (window.EcomChatbot) window.EcomChatbot.init(window.chatbotConfig);
    });
</script>
```

---

## 🎛️ Public JavaScript API

The widget exposes a global `window.EcomChatbot` object which allows you to programmatically control the chat interface from anywhere on your site.

### Methods Available:

*   `window.EcomChatbot.open()` : Force opens the chatbot window.
*   `window.EcomChatbot.close()` : Force closes the chatbot window.
*   `window.EcomChatbot.toggle()` : Toggles the window state between open and closed.
*   `window.EcomChatbot.sendMessage("Your custom text")` : Opens the window (if closed) and sends a message into the chat as the user.

**Example**: Connect a "Need Help?" button to open the chat:
```javascript
document.getElementById('help-btn').addEventListener('click', () => {
    window.EcomChatbot.open();
});
```

### Optional config for premium UX

- **theme**: `'dark'` (default, next-gen purple/dark), `'glass'`, or `'default'`. **backgroundColor**: e.g. `'#0c0c10'` for dark, `'#ffffff'` for light.
- **placeholders**: Array of strings cycled in the input (e.g. `["Ask about products...", "Find sneakers under $100..."]`).
- **suggestionChips**: Array of chip labels shown after bot messages (e.g. `["Show sneakers under $100", "Trending items"]`).
- **thinkingStatuses**: Array of status strings for the AI thinking state (e.g. `["Thinking...", "Searching products..."]`). The backend can override these by sending SSE events with `type: 'status'` and `content: "Searching products..."`.
- **headerStatus**: String shown next to the bot name in the header (default `"Online"`).
- **botSubtitle**: Subtitle under the bot name (e.g. `"Shopping Assistant"`).
- **apiBaseUrl**: Backend base URL for chat (e.g. `"http://localhost:3000"` or `"https://your-api.com"`). Empty or omitted uses `http://localhost:3000`. The widget calls `POST ${apiBaseUrl}/api/chat` with `{ message, history, sessionId }`.

---

## 🔧 Backend tools (server)

The Bun + Hono backend exposes these tools to the agent; all use the same `sessionId` from the request for cart and auth.

| Tool | Purpose |
|------|--------|
| **searchProductCatalog** | Semantic product search; server streams `type: 'carousel'` for the widget. |
| **viewCart** | Show cart; server streams `type: 'cart'` with `{ items, total }` for the "Your Cart" card. Trigger phrases: "show my cart", "what's in my bag", "view cart", etc. |
| **addToCart** / **removeFromCart** | Add/remove by product title; cart is per-session. For footwear (sneakers), **size** is required—the tool asks for size if missing. |
| **checkout** | Requires auth + address + payment (COD/Prepaid); clears cart on success. |
| **getRecommendations** | Cross-sell from cart/order categories; returns JSON product list. |
| **getAuthStatus** | Returns `{ isAuthenticated, userName?, phone? }` (JSON string). |
| **requestOTP** / **verifyOTP** | Phone login; `verifyOTP` sets session as authenticated. |
| **getUserAddresses** / **addAddress** | For checkout flow. |
| **getOrderStatus** | Look up order by ID (e.g. ORD-1001). |
| **getUserOrderHistory** | Past orders for the authenticated user (requires login). When the user is logged in, the server sends `type: 'orderHistory'` and the widget renders an **Order History** card (order blocks with ID, date, status badge, items, total). |
| **getStorePolicies** | shipping / returns / sizing. |

Stream event parsing supports both **StreamEvent** shape (`event.event`, `event.name`, `event.data`) and LangGraph **tuple** shape (`["tools", { event, name, output }]`) so `viewCart` and `searchProductCatalog` are detected regardless of runtime.

---

## 🎬 Motion & UX (Business Logic)

- **Launcher**: Three concentric rings with pulse/expand animations; central orb with gradient, float and breathing glow; ripple (`.chatbot-ripple-ring`) when a new message arrives and chat is closed.
- **Spring open**: Chat window uses `transform: translateY(24px) scale(0.96)` → `translateY(0) scale(1)` with `cubic-bezier(0.34, 1.56, 0.64, 1)` and `visibility` for a pop-in feel.
- **Message animations**: CSS classes `msg-enter-user`, `msg-enter-bot`, `msg-enter-product` apply GPU-friendly transforms (translateX/scale/opacity) on insert.
- **Thinking state**: Typing indicator shows animated gradient shimmer and wave bars; status text can be updated via SSE `type: 'status'` events from the backend.
- **Skeleton**: Shown at request start; removed when the first text token or carousel is received.
- **Suggestion chips**: Sourced from `config.suggestionChips`; shown **only when relevant** to the bot’s message. `getRelevantSuggestionChips` scores chips by keyword overlap with the response; chips with score 0 are never shown (no padding with irrelevant pills). So during checkout/OTP or other non-product flows, no suggestion pills appear.
- **Placeholder cycling**: `config.placeholders` (or `DEFAULT_PLACEHOLDERS`) cycle every 3.5s when the input is not focused.
- **Grouping**: `applyMessageGrouping()` runs after appends and hydrate; consecutive same-role messages get `group-same` (avatar hidden) and the first of each run gets `group-first`.
- **Smooth scroll**: `messageList.scrollTo({ top: messageList.scrollHeight, behavior: 'smooth' })` on new content.
- **3D tilt**: `apply3DTilt(cardEl)` in MessageList.js uses mousemove/mouseleave to set `transform: perspective(800px) rotateX/Y(...) translateY(-4px)` on product/carousel cards.
- **Magnetic**: `applyMagnetic(el, { strength, radius })` in `utils/magnetic.js`; used on send button, preset pills, action buttons, and suggestion chips.
- **Cart view**: For "show my cart" only the **Your Cart** card is shown (no duplicate table). The backend `viewCart` returns a short instruction so the agent does not echo a table; the widget renders `createYourCartCard(payload, { onCheckout, onAddMore })` with thumbnail rows, Grand Total, a **"Proceed to checkout"** button, and below it a suggestions block: helper text **"Add something else? Or proceed to checkout."** plus pills **"Add another product"** (calls `onAddMore` → sends "I'd like to add something else") and **"Proceed to checkout"** (calls `onCheckout`). Card styling: 16px radius, stronger shadow, checkout CTA with gradient button; pills use `.chatbot-cart-pill` / `.chatbot-cart-pill-checkout`.
- **Product sizes / shoes**: In `server/data.ts`, only products with `category === 'sneakers'` get a `sizes` array; the widget shows size pills only when `product.sizes` exists. The agent and `addToCart` tool enforce that footwear is never added without a size: the tool returns a message listing available sizes if `size` is omitted for sneakers.
- All animations use **transform** and **opacity** only for 60fps and minimal layout thrashing.

---

## 🧠 Intent Detection & AI Engine

The widget ships with a lightweight, client-side NLP parser mapped to specific buying intents in `ai.js`.

*   **PRICE**: Recognizes "price", "cost", "how much". The bot returns the cost of the currently detected product via Context Extractor.
*   **SHIPPING**: Recognizes "shipping", "delivery", "ship". Returns generic shipping policies.
*   **RETURN**: Recognizes "return", "refund". Returns a dynamic refund message snippet.
*   **SIZE**: Recognizes "size", "fit". Prompts user about true-to-size metrics for the current product context.
*   **GREETING**: Context-aware welcome greetings that adapt if a product is detected on the page.

*(Note: The `getAIResponse` hook returns a JavaScript Promise containing simulated typing latency. This makes migrating to a real endpoint simple—just swap the logic inside for a `fetch` parsing prompt logic.)*

---

## 🔎 Auto Product Detection Strategy

When `autoDetectProduct: true` is set, the `contextExtractor.js` acts identically to SEO crawlers. The prioritization logic strictly follows:

1.  **Schema.org JSON-LD**: The absolute source of truth. It searches `<script type="application/ld+json">` for `@type === 'Product'`.
2.  **OpenGraph Meta Tags**: Fallbacks to reading `<meta property="og:type" content="product">` and standard `product:price:amount` metrics.
3.  **DOM Scraping Fallback**: As a last resort, it uses heuristics (looking for wrappers like `.product-card`, `.price`, `h1`) to gracefully estimate and extract `{ name, price, image }`.

---

## 📱 Mobile Responsiveness

The widget is equipped with adaptive CSS targeting sizes `<480px`. Let's face it: floating widgets suck on phones. When triggered on a smaller screen, the chat defaults onto a native-app-like full-screen mode layout: 
*   Padding variables expand for "Fat Finger" accessibility.
*   Safe Area Viewports are respected (specifically for fluid overlapping Home bars on iOS devices).
*   The FAB (Floating Action Button) alters its elevation stack logically avoiding thumb zones.

---

## 🎨 Customization Panel Usage

The project includes an exclusive configuration dashboard mapped to `src/panel/index.html`. 

To launch the panel securely locally, utilizing absolute module isolation to generate integration code snippets:

```bash
# Serves the built panel bundle
npm run preview
```

**Using the Panel:**
1. Open the preview server.
2. Alter Hex codes, strings, or image pointers in the left sidebar.
3. Observe the `iframe` postMessage synchronizing live updates into the Preview window.
4. Copy the freshly baked Configuration schema straight from the Integration block at the bottom right into your main site's HTML!

The Live Preview area is a **size container** (`container-type: size`, `container-name: chatbot-preview`). The widget uses a container query so the chat window height is limited to the preview area height, so the entire chatbox (including input and send button) remains visible on laptop and smaller viewports instead of being clipped.
