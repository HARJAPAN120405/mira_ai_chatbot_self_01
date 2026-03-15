import { getVectorStore, similaritySearch } from "./server/store.js";

async function main() {
    try {
        console.log("Vector store initializing...");
        await getVectorStore();
        console.log("Vector store initialized successfully.");

        console.log("Running similarity search...");
        const results = await similaritySearch("sneakers", 2);
        console.log("Results:", results);
    } catch (error) {
        console.error("Test failed with error:", error);
    }
}
main();
