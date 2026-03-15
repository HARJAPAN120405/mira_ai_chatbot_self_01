import { agent } from "./agent.js";
import { HumanMessage } from "@langchain/core/messages";
import { config } from 'dotenv'

config();

async function main() {
    console.log("Starting stream query...");
    try {
        const events = agent.streamEvents({ messages: [new HumanMessage("hello")] }, { version: "v2" });
        for await (const event of events) {
            console.log(event.event, event.name);
            if (event.event === "on_chat_model_stream") {
                console.log(event.data.chunk?.content);
            }
        }
    } catch (error) {
        console.error("Stream error:", error);
    }
}
main();
