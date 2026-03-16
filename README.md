# E-commerce Chatbot CDN Widget (Aura Store AI)

A premium, vanilla JS e-commerce chatbot widget with advanced UX, motion design, and AI assistant behavior. It ships as a single IIFE bundle, renders inside a Shadow DOM for style isolation, and connects to a Bun + Hono + LangChain + Gemini backend for streaming chat, product search, cart, and checkout.

## Key Features

- **Shadow DOM Isolation**: Zero CSS collisions with the host site.
- **Design-Chatbot-Widget (Aura Concierge) UI**: Carbon-copy of the Figma design: 360×600px panel, 18px radius, gradient glass background, soft shadow. Header: 64px gradient bar (#2563eb → #4f46e5), **Aura Concierge** title, **Always Available** status, cart + close. Launcher: 56px gradient circle. No per-message avatar.
- **Compact Window**: 360×600px default; viewport-safe; container-aware in panel Live Preview.
- **Message Bubbles**: Bot = white, asymmetric radius, shadow; user = gradient. 14px font, max-width 75%.
- **Typing Indicator**: Three animated dots in a white bubble.
- **Compact messages**: Backend keeps replies to 2–4 short lines; carousel for product lists.
- **Skeleton Loaders**: Shown **only when the user asks to show products** (e.g. "Searching products..." status); not shown for plain text replies.
- **Suggestion pills**: Relevant chips appear below every bot message; when none match the reply text, 2–3 default chips (e.g. "Trending items", "What's on sale?") are shown so the user always has next actions.
- **Product and cart images**: Every product card (carousel and single) and every cart item displays a cover image; backend ensures `image` is always set (catalog or placeholder). Carousel and cart payloads explicitly include `image`; widget uses `object-fit: cover` for consistent display.
- **"Tell me about your store" vs "Show products"**: For "Tell me about your store" / "About your store" the bot replies with a short 1–2 line message only (no product cards). Product cards/carousel are shown only when the user asks to *show* products (e.g. "show products", "show me sneakers", "show trending", "recommend something").
- **Suggestion Chips**: Only below response text (no side layout). Chips are relevance-picked from the bot’s message (e.g. sneakers → "Show sneakers under $100").
- **Smart Input Placeholder**: Cycles through example prompts every few seconds.
- **Magnetic Button Effect**: Buttons (send, quick action cards, action buttons, chips) subtly move toward the cursor on hover.
- **Product Card 3D Hover**: Subtle tilt (rotateX/Y, translateY) driven by mouse position on product cards.
- **Message Grouping**: Consecutive messages from the same sender share a single avatar for a cleaner thread.
- **Smooth Auto-Scroll**: New messages scroll into view with smooth behavior.
- **Header**: Gradient bar with avatar, title, green status dot, cart and close buttons. **Footer**: "Powered by Aura AI".
- **Quick Action Grid (2×2)**: Under the first greeting, four customizable cards (e.g. Browse Collections, View Cart, Order Status, Track My Order) let the user send a preset message on click. Configurable via **quickActions** or in the panel. Messages can also include `[Action: Label]` markers rendered as buttons.
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
        "botName": "Aura Concierge",
        "botAvatarUrl": "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
        "primaryColor": "#2563eb",
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

- **theme**: `'dark'` (default), `'glass'`, or `'default'`. **primaryColor**: default `'#2563eb'` (blue). **backgroundColor**: e.g. `'#0c0c10'` for dark, `'#ffffff'` for light.
- **placeholders**: Array of strings cycled in the input (e.g. `["Ask about products...", "Find sneakers under $100..."]`).
- **suggestionChips**: Array of chip labels shown after bot messages (e.g. `["Show sneakers under $100", "Trending items"]`).
- **quickActions**: Array of four items `{ title, desc, message }` for the 2×2 quick action grid under the first greeting (e.g. Browse Collections, View Cart, Order Status, Track My Order). Each `message` is sent when the user clicks that card. Customizable in the panel under **Quick Action Grid (2×2)**.
- **thinkingStatuses**: Array of status strings for the AI thinking state (e.g. `["Thinking...", "Searching products..."]`). The backend can override these by sending SSE events with `type: 'status'` and `content: "Searching products..."`.
- **headerStatus**: String shown next to the green dot in the header (default `"Always Available"`).
- **botSubtitle**: Unused in current header layout; status line uses **headerStatus** only.
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

- **Launcher**: Single 56px gradient circle (`#2563eb` → `#4f46e5`), message icon; ripple on new message when closed.
- **Spring open**: Chat window uses `translateY(30px) scale(0.95)` → `translateY(0) scale(1)` with cubic-bezier and visibility.
- **Message animations**: CSS classes `msg-enter-user`, `msg-enter-bot`, `msg-enter-product` apply GPU-friendly transforms (translateX/scale/opacity) on insert.
- **Thinking state**: Typing indicator shows animated gradient shimmer and wave bars; status text can be updated via SSE `type: 'status'` events from the backend.
- **Skeleton**: Shown at request start; removed when the first text token or carousel is received.
- **Suggestion chips**: Sourced from `config.suggestionChips`; shown **only when relevant** to the bot’s message. `getRelevantSuggestionChips` scores chips by keyword overlap with the response; chips with score 0 are never shown (no padding with irrelevant pills). So during checkout/OTP or other non-product flows, no suggestion pills appear.
- **Placeholder cycling**: `config.placeholders` (or `DEFAULT_PLACEHOLDERS`) cycle every 3.5s when the input is not focused.
- **Grouping**: `applyMessageGrouping()` runs after appends and hydrate; consecutive same-role messages get `group-same` (avatar hidden) and the first of each run gets `group-first`.
- **Smooth scroll**: `messageList.scrollTo({ top: messageList.scrollHeight, behavior: 'smooth' })` on new content.
- **3D tilt**: `apply3DTilt(cardEl)` in MessageList.js uses mousemove/mouseleave to set `transform: perspective(800px) rotateX/Y(...) translateY(-4px)` on product/carousel cards.
- **Magnetic**: `applyMagnetic(el, { strength, radius })` in `utils/magnetic.js`; used on send button, quick action cards, action buttons, and suggestion chips.
- **Cart view**: For "show my cart" only the **Your Cart** card is shown (no duplicate table). The backend `viewCart` returns a short instruction so the agent does not echo a table; the widget renders `createYourCartCard(payload, { onCheckout, onAddMore })` with thumbnail rows, Grand Total, a **"Proceed to checkout"** button, and below it a suggestions block: helper text **"Add something else? Or proceed to checkout."** plus pills **"Add another product"** (calls `onAddMore` → sends "I'd like to add something else") and **"Proceed to checkout"** (calls `onCheckout`). Card styling: 16px radius, stronger shadow, checkout CTA with gradient button; pills use `.chatbot-cart-pill` / `.chatbot-cart-pill-checkout`.
- **Product sizes / shoes**: In `server/data.ts`, only products with `category === 'sneakers'` get a `sizes` array; the widget shows size pills only when `product.sizes` exists. The agent and `addToCart` tool enforce that footwear is never added without a size: the tool returns a message listing available sizes if `size` is omitted for sneakers.
- All animations use **transform** and **opacity** only for 60fps and minimal layout thrashing.

### Checkout flow & toasts (business logic)

- **View cart → Checkout**: When the user says “view cart” / “show my cart”, the agent calls `viewCart` and the widget renders the glassmorphic **Your Cart** card with quantity controls and a gradient **Proceed to Checkout** CTA. The cart count badge animates on both the header cart icon and the launcher FAB when items are added.
- **Authentication → Address → Payment → Confirmation**: For “checkout” / “proceed to checkout”, the agent runs the state machine described in `server/agent.ts` using `getAuthStatus`, `requestOTP`/`verifyOTP` (mobile OTP login), `getUserAddresses`/`addAddress`, and finally `checkout` with `paymentMethod` (`COD` or `Prepaid`). The UI flows through login/signup tabs, saved address selection, payment method selection, and a final **Order Confirmed** card with suggestion chips like **Track Order**, **Continue Shopping**, and **View Order History**.
- **Order history**: “order history”, “track order”, or similar prompts call `getUserOrderHistory` / `getOrderStatus` and render the **Order History** card with status badges (Processing / In Transit / Delivered) and totals.
- **Toasts**: A lightweight toast manager inside the widget shows small, glassy toasts (top-center) for key events such as **Add to cart** success, keeping feedback aligned with the Aura Concierge visual language without requiring React/Sonner in the host page.

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

**Full-page demo (chatbot on whole webpage):** While the dev server is running (`npm run dev`), open **http://localhost:5173/demo.html** in your browser to see the full e-commerce demo store with the chatbot on the whole page (not inside the panel iframe). The demo store uses realistic product images and a full store layout (top bar, header, hero, categories, footer). You can also use the **"Open full-page demo →"** link in the panel’s Live Preview header.

---

## Deploy to Vercel (static: panel + widget CDN)

The **frontend** (panel app + widget bundle) can be deployed to Vercel as a static site. The backend (Bun + Hono in `server/`) is separate; deploy it elsewhere (e.g. Railway, Render) and set `apiBaseUrl` in the widget config to point to that API.

### 1. Set Git identity (one-time)

Use your Git username and email so commits are attributed correctly:

```bash
git config user.name "HARJAPAN120405"
git config user.email "harjapan@heliverse.com"
```

To set globally for all repos: `git config --global user.name "HARJAPAN120405"` and `git config --global user.email "harjapan@heliverse.com"`.

### 2. Push the project to GitHub

- Create a new repository on GitHub (e.g. `ecom-chatbot-cdn`).
- In the project folder, add the remote and push:

```bash
git remote add origin https://github.com/HARJAPAN120405/ecom-chatbot-cdn.git
git add .
git commit -m "Prepare for Vercel deployment"
git branch -M main
git push -u origin main
```

(Replace the repo URL if you used a different name or org.)

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub).
2. Click **Add New…** → **Project**.
3. **Import** the `ecom-chatbot-cdn` repository (or the one you pushed to).
4. Leave **Framework Preset** as **Other** (or **Vite** if shown).
5. **Build and Output Settings** (should match `vercel.json`):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**. Wait for the build to finish.

### 4. After deployment

- **Panel:** `https://<your-project>.vercel.app/panel/` (and `/panel/preview.html`, `/panel/demo.html` if you use them).
- **Widget script (CDN):** `https://<your-project>.vercel.app/chatbot.min.js`
- In your site's `chatbotConfig`, set `apiBaseUrl` to your backend URL (e.g. `https://your-api.railway.app`), and use the Vercel URL above for the script `src`.
