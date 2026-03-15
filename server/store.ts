import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { storeProducts, Product } from "./data.js";

interface Document {
    product: Product;
    embedding: number[];
}

let vectorStore: Document[] = [];
let embeddingsModel: GoogleGenerativeAIEmbeddings | null = null;

function cosineSimilarity(vecA: number[], vecB: number[]): number {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function getVectorStore() {
    if (vectorStore.length > 0) return vectorStore;

    console.log("Vector DB initializing: embedding product catalog via Gemini...");

    embeddingsModel = new GoogleGenerativeAIEmbeddings({
        model: "gemini-embedding-001",
        apiKey: process.env.GOOGLE_API_KEY,
    });

    const texts = storeProducts.map(product => {
        let text = `${product.title} - Category: ${product.category}. Price: ${product.price}. Available Sizes: ${product.sizes?.join(", ")}. `;
        if (product.description) text += `Description: ${product.description}. `;
        if (product.bestseller) text += `This item is a Bestseller! `;
        return text;
    });

    const embeddings = await embeddingsModel.embedDocuments(texts);

    vectorStore = storeProducts.map((product, i) => ({
        product,
        embedding: embeddings[i]
    }));

    console.log("Vector DB embedded and ready!");
    return vectorStore;
}

export async function similaritySearch(query: string, k: number = 4): Promise<Product[]> {
    const store = await getVectorStore();
    if (!embeddingsModel) throw new Error("Embeddings not initialized");

    const queryEmbedding = await embeddingsModel.embedQuery(query);

    const scored = store.map(doc => ({
        product: doc.product,
        score: cosineSimilarity(queryEmbedding, doc.embedding)
    }));

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, k).map(s => s.product);
}
