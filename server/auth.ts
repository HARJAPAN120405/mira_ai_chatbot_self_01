import { tool } from "@langchain/core/tools";
import { z } from "zod";

export interface User {
    id: string;
    phone: string;
    name?: string;
    addresses: any[];
}

export const usersDB = new Map<string, User>();
export const otps = new Map<string, string>(); // phone -> code
export const activeSessions = new Map<string, string>(); // sessionId -> phone

// Mock user for demo
usersDB.set("1234567890", { id: "user_1", phone: "1234567890", name: "John Doe", addresses: ["123 Main St, New York, NY 10001"] });

export const getAuthStatus = tool(
    async (_input: any, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const phone = activeSessions.get(sessionId);
        if (!phone) {
            return JSON.stringify({ isAuthenticated: false, message: "User is not logged in." });
        }
        
        const user = usersDB.get(phone);
        return JSON.stringify({
            isAuthenticated: true,
            userName: user?.name || "Valued Customer",
            phone: phone,
            addressCount: user?.addresses?.length || 0
        });
    },
    {
        name: "getAuthStatus",
        description: "Check the current authentication status for this session. Use this to determine if the user is already logged in before asking for credentials.",
        schema: z.object({}),
    }
);

export const getUserAddresses = tool(
    async (_input: any, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const phone = activeSessions.get(sessionId);
        if (!phone) return "User is not logged in. Please ask them to log in first using requestOTP.";
        
        const user = usersDB.get(phone);
        if (!user || !user.addresses || user.addresses.length === 0) {
            return "No saved addresses found. Please ask the user for their shipping address.";
        }
        
        return JSON.stringify(user.addresses.map((addr, idx) => ({ id: idx, address: addr })));
    },
    {
        name: "getUserAddresses",
        description: "Retrieve all saved shipping addresses for the currently authenticated user. Call this to check if you need to ask for a new address during checkout.",
        schema: z.object({}),
    }
);

export const addAddress = tool(
    async ({ address }: { address: string }, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const phone = activeSessions.get(sessionId);
        if (!phone) return "User is not logged in. Please ask them to log in first.";
        
        const user = usersDB.get(phone);
        if (user) {
            user.addresses.push(address);
            return `Address successfully saved. ID for this address is ${user.addresses.length - 1}.`;
        }
        return "System error: user not found in DB.";
    },
    {
        name: "addAddress",
        description: "Save a new full shipping address (street, city, state, zip) for the currently authenticated user.",
        schema: z.object({
            address: z.string().describe("The entire shipping address to save."),
        }),
    }
);

export const requestOTP = tool(
    async ({ phone }: { phone: string }) => {
        // Strip non-digits for simplicity
        const cleanPhone = phone.replace(/\D/g, '');
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        otps.set(cleanPhone, code);
        console.log(`[MOCK SMS] Sent OTP ${code} to ${cleanPhone}`);
        return `OTP sent to ${cleanPhone}. (For demo purposes, tell the user the code is ${code}). Ask the user to provide this code.`;
    },
    {
        name: "requestOTP",
        description: "Send a One-Time Password (OTP) to a user's phone number to begin the login process. Always use this when the user wants to login, checkout, or check order status but is unauthenticated.",
        schema: z.object({
            phone: z.string().describe("The user's phone number (digits only preferred)."),
        }),
    }
);

export const verifyOTP = tool(
    async ({ phone, code }: { phone: string, code: string }, config: any) => {
        const sessionId = config.configurable?.sessionId;
        const cleanPhone = phone.replace(/\D/g, '');
        const expectedCode = otps.get(cleanPhone);
        
        if (expectedCode && expectedCode === code) {
            otps.delete(cleanPhone);
            activeSessions.set(sessionId, cleanPhone);
            
            // Create user if doesn't exist
            if (!usersDB.has(cleanPhone)) {
                usersDB.set(cleanPhone, { id: `user_${Date.now()}`, phone: cleanPhone, addresses: [] });
                return "SUCCESS: OTP verified. User account created. SESSION_AUTHENTICATED: true. Please proceed with providing the shipping address.";
            }
            
            const user = usersDB.get(cleanPhone);
            return `SUCCESS: OTP verified. Welcome back, ${user?.name || cleanPhone}. SESSION_AUTHENTICATED: true. You may now proceed to checkout or retrieve order history.`;
        }
        return "Invalid OTP or OTP expired. Please ask the user to try again.";
    },
    {
        name: "verifyOTP",
        description: "Verify the OTP provided by the user. Requires the user's phone number and the code they provided.",
        schema: z.object({
            phone: z.string().describe("The user's phone number."),
            code: z.string().describe("The 4-digit OTP code provided by the user."),
        }),
    }
);
