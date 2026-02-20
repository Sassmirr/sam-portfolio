import fs from "fs";
import path from "path";
import dotenv from "dotenv";
//import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";

dotenv.config();

// path to backend/data
const docsPath = path.join(process.cwd(), "data");

// new collection for portfolio
const COLLECTION_NAME = "portfolio_knowledge";

async function ingest() {
    try {
        console.log("🚀 Starting portfolio ingestion...\n");

        if (!fs.existsSync(docsPath)) {
            console.log("❌ data folder not found inside backend");
            return;
        }

        const files = fs.readdirSync(docsPath);

        if (files.length === 0) {
            console.log("❌ No files inside data folder");
            return;
        }

        let texts = [];

        for (const file of files) {
            if (!file.endsWith(".txt")) continue;

            const content = fs.readFileSync(path.join(docsPath, file), "utf-8");

            texts.push({
                pageContent: content,
                metadata: {
                    source: file,
                    type: "portfolio",
                },
            });

            console.log("Loaded:", file);
        }

        console.log("\n🧠 Creating embeddings...\n");

        const embeddings = new HuggingFaceTransformersEmbeddings({
            modelName: "Xenova/all-MiniLM-L6-v2",
        });

        await QdrantVectorStore.fromDocuments(texts, embeddings, {
            url: process.env.QDRANT_URL,
            apiKey: process.env.QDRANT_API_KEY,
            collectionName: COLLECTION_NAME,
            checkCompatibility: false,
        });

        console.log(`\n🎉 SUCCESS → Stored in collection: ${COLLECTION_NAME}`);
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

ingest();
