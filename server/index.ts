import { config } from 'dotenv'
config();

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { HumanMessage, AIMessage } from "@langchain/core/messages"
import { streamSSE } from 'hono/streaming'
import { agent } from "./agent.js"
import { sessionCarts } from "./tools.js"
import { activeSessions } from "./auth.js"
import { mockOrders } from "./data.js"

const app = new Hono()

app.use('/*', cors())

app.get('/', (c) => c.text('eCommerce Chatbot API running on Bun + Hono!'))

app.post('/api/chat', async (c) => {
    const body = await c.req.json();
    const userMessage = body.message;
    const history = body.history || [];
    const sessionId = body.sessionId || "default_session";

    const messages: any[] = [];
    
    // Convert history to LangChain messages
    history.forEach((msg: any) => {
        if (msg.role === 'user') messages.push(new HumanMessage(msg.content));
        else messages.push(new AIMessage(msg.content));
    });
    messages.push(new HumanMessage(userMessage));

    // Pass the sessionId inside the config object using configurable
    const config = {
        configurable: {
            sessionId: sessionId
        },
        version: "v2" as const
    };

    return streamSSE(c, async (stream) => {
        try {
            const events = agent.streamEvents({ messages }, config);

            // Normalize event: LangGraph can yield [mode, payload] e.g. ["tools", { event, name, output }]
            const isToolEnd = (e: any, toolName: string) => {
                if (Array.isArray(e) && e[0] === 'tools' && e[1]?.event === 'on_tool_end' && e[1]?.name === toolName) return true;
                return e?.event === 'on_tool_end' && e?.name === toolName;
            };
            const getToolOutput = (e: any) => Array.isArray(e) && e[1]?.output !== undefined ? e[1].output : e?.data?.output;

            for await (const event of events) {
                // Stream text tokens: support both StreamEvent shape and [mode, payload]
                const isStream = Array.isArray(event) ? event[0] === 'messages' && event[1] : event.event === "on_chat_model_stream";
                if (isStream) {
                    const chunk = Array.isArray(event) ? event[1] : event.data?.chunk;
                    if (chunk?.content && typeof chunk.content === "string") {
                        await stream.writeSSE({
                            data: JSON.stringify({ type: 'text', content: chunk.content })
                        });
                    }
                }
                // Intercept product search (carousel)
                if (isToolEnd(event, "searchProductCatalog")) {
                    try {
                        const toolOutput = getToolOutput(event);
                        const contentStr = typeof toolOutput === 'string' ? toolOutput : (toolOutput as any)?.content;
                        if (contentStr) {
                            const parsed = JSON.parse(contentStr);
                            if (Array.isArray(parsed) && parsed.length > 0) {
                                await stream.writeSSE({
                                    data: JSON.stringify({ type: 'carousel', content: parsed })
                                });
                            }
                        }
                    } catch (e) {
                        console.error("Failed to parse tool output for carousel", e);
                    }
                }
                // Send "Your Cart" card payload when viewCart is called
                if (isToolEnd(event, "viewCart")) {
                    try {
                        const sid = config.configurable?.sessionId;
                        const cart = sid ? sessionCarts.get(sid) : null;
                        const items = cart && cart.length > 0 ? cart : [];
                        const total = items.reduce((sum, p) => sum + (parseFloat(String(p.price).replace(/[$,]/g, '')) || 0), 0);
                        const payload = items.map((p: any) => ({
                            title: p.title,
                            image: p.image,
                            price: p.price,
                            originalPrice: p.originalPrice ?? null,
                            stockStatus: p.stockStatus ?? 'In Stock',
                        }));
                        await stream.writeSSE({
                            data: JSON.stringify({ type: 'cart', content: { items: payload, total } })
                        });
                    } catch (e) {
                        console.error("Failed to send cart payload", e);
                    }
                }
                // Send order history card when getUserOrderHistory is called (only when user is logged in)
                if (isToolEnd(event, "getUserOrderHistory")) {
                    try {
                        const sid = config.configurable?.sessionId;
                        const phone = sid ? activeSessions.get(sid) : null;
                        if (phone) {
                            const orders = mockOrders.filter((o: any) => o.phone === phone);
                            const payload = orders.map((o: any) => ({
                                id: o.id,
                                date: o.date,
                                status: o.status,
                                items: o.items || [],
                                total: o.total,
                            }));
                            await stream.writeSSE({
                                data: JSON.stringify({ type: 'orderHistory', content: payload })
                            });
                        }
                    } catch (e) {
                        console.error("Failed to send order history payload", e);
                    }
                }
            }

            // Send termination event
            await stream.writeSSE({ data: JSON.stringify({ type: 'done' }) });
        } catch (error) {
            console.error("Agent error:", error);
            await stream.writeSSE({
                data: JSON.stringify({ type: 'text', content: "I'm sorry, I encountered an internal error processing that request." })
            });
            await stream.writeSSE({ data: JSON.stringify({ type: 'done' }) });
        }
    });
})

export default {
    port: process.env.PORT || 3000,
    fetch: app.fetch,
}
