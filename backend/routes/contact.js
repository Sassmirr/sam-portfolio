import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        // ===== SAVE TO MONGODB =====
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
            createdAt: new Date(),
        });

        await newContact.save();

        // ===== SEND EMAIL TO YOU =====
        const transporter = nodemailer.createTransport({
            //service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // important
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "sgajjar3216@gmail.com",
            subject: `🚀 New Portfolio Message: ${subject || "No subject"}`,
            html: `
        <h2>New message from your portfolio</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Message sent & email delivered",
        });

    } catch (err) {
        console.error("Contact error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
