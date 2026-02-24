import express from "express";
import Contact from "../models/Contact.js";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        // SAVE TO DB
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
            createdAt: new Date(),
        });

        await newContact.save();

        // SEND EMAIL (RESEND)
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["sgajjar3216@gmail.com"],
            subject: `🚀 New Portfolio Message: ${subject || "No subject"}`,
            html: `
                <h2>New message from your portfolio</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b></p>
                <p>${message}</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Message sent & saved",
        });

    } catch (err) {
        console.error("Contact error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;