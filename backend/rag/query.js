import dotenv from "dotenv";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";

dotenv.config();

export async function askPortfolio(question) {
    try {
        // 🔥 Use SAME embeddings used during ingestion
        const embeddings = new HuggingFaceTransformersEmbeddings({
            modelName: "Xenova/all-MiniLM-L6-v2",
        });

        // 🔥 Connect to existing collection
        const vectorStore = await QdrantVectorStore.fromExistingCollection(
            embeddings,
            {
                url: process.env.QDRANT_URL,
                apiKey: process.env.QDRANT_API_KEY,
                collectionName: "portfolio_knowledge",
                checkCompatibility: false,
            }
        );

        // 🔥 similarity search
        const retriever = vectorStore.asRetriever({ k: 4 });
        const docs = await retriever.getRelevantDocuments(question);

        if (!docs.length) {
            return "No relevant portfolio information found.";
        }

        // 🔥 combine context
        const context = docs.map((d) => d.pageContent).join("\n\n");

        return context;

    } catch (err) {
        console.error("RAG error:", err);
        return "Error retrieving portfolio context.";
    }
}
