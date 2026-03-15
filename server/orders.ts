import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { mockOrders } from "./data.js";
import { activeSessions } from "./auth.js";

export const getOrderStatus = tool(
    async ({ orderId }: { orderId: string }) => {
        const order = mockOrders.find(o => o.id === orderId.toUpperCase());
        if (!order) return "I couldn't find an order with that ID. Please check the ID and try again.";
        
        return `Order ${order.id} is currently: ${order.status}. It was placed on ${order.date} and total is $${order.total}. Items: ${order.items.map(i => i.title).join(", ")}`;
    },
    {
        name: "getOrderStatus",
        description: "Fetch the tracking status of a specific order by its Order ID (e.g., ORD-1001). Can be used by guest users.",
        schema: z.object({
            orderId: z.string().describe("The specific Order ID to look up."),
        }),
    }
);

export const getUserOrderHistory = tool(
    async (_input: any, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const phone = activeSessions.get(sessionId);
        if (!phone) return "User is not logged in. Please ask them to log in first using requestOTP to see their history.";
        
        const userOrders = mockOrders.filter(o => o.phone === phone);
        if (userOrders.length === 0) {
            return "You don't have any past orders in your history.";
        }
        // Do not return a list — the client shows an order history card. Short instruction for the agent.
        return "Order history has been sent to the widget and is displayed as a card. Reply with a brief greeting (e.g. 'Here’s your order history.') and ask if they need anything else regarding their orders. Do not list order IDs, dates, or items in your message.";
    },
    {
        name: "getUserOrderHistory",
        description: "Retrieve the past order history for the currently authenticated user. Call this when they ask about their past purchases or what they bought yesterday.",
        schema: z.object({}),
    }
);
