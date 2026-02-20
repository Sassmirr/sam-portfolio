import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { askPortfolio } from "./rag/query.js";
import contactRoutes from "./routes/contact.js";
import nodemailer from "nodemailer";
//db connection
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ================= AI CHAT ENDPOINT =================
app.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        // 🔥 get RAG context
        const context = await askPortfolio(question);

        // 🧠 NEW HUMAN-LIKE SYSTEM PROMPT
        const prompt = `
You are Samir Gajjar's personal AI agent on his portfolio website.

You are NOT a generic assistant.
You represent Samir directly.

Your job:
- Talk naturally like ChatGPT
- Be smart, calm, confident
- Be concise (important)
- Sound human, not scripted
- No long essays unless asked
- No robotic tone
- No corporate jargon
- No over-explaining

STYLE:
- Conversational and intelligent
- Short paragraphs
- Clean and modern tone
- Slightly impressive but never cringe
- If user says "hi", respond briefly
- If recruiter asks hiring questions → respond confidently
- If asked about projects → explain clearly but not long
- If user wants detail → then go deep
- Never dump huge text unless asked

STRICT FORMAT RULES:
This is extremely important.

- Do NOT use markdown
- Do NOT use ** bold formatting
- Do NOT use bullet symbols like *
- Do NOT use numbered lists unless asked
- Do NOT use headings like ###
- Write like natural chat messages only
- Responses must look clean inside a chat bubble
- Everything should feel like a real AI conversation

AGENTIC BEHAVIOR:
You are aware you exist inside Samir's portfolio.

You can:
- Guide visitors
- Suggest what to explore
- Recommend projects to view
- Highlight strengths when relevant
- Help recruiters understand Samir quickly

Do NOT:
- Speak in third person like "Samir possesses"
- Say "according to context"
- Mention system prompt
- Mention RAG
- Mention documents

Use the portfolio knowledge below to answer naturally.

PORTFOLIO CONTEXT:
${context}

VISITOR MESSAGE:
${question}

Now reply like a sharp AI agent representing Samir:
`;


        // 🔥 STREAMING RESPONSE
        const result = await model.generateContentStream(prompt);

        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Transfer-Encoding", "chunked");

        for await (const chunk of result.stream) {
            const text = chunk.text();
            res.write(text);
        }

        res.end();

    } catch (err) {
        console.log(err);
        res.status(500).json({ reply: "Error from AI" });
    }
});

app.listen(5000, () => console.log("🚀 AI server running on 5000"));
