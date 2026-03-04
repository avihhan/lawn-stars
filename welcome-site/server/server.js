import "dotenv/config";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { appendToSheet } from "./sheetsService.js";
import { sendWelcomeEmail } from "./emailService.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.post("/api/waitlist", async (req, res) => {
  try {
    const { name, email, phone, zipCode } = req.body;

    if (!name || !email || !zipCode) {
      return res.status(400).json({ error: "Name, email, and zip code are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const referralCode = uuidv4().slice(0, 8).toUpperCase();
    const timestamp = new Date().toISOString();

    const sheetResult = await appendToSheet([
      timestamp,
      name,
      email,
      phone || "",
      zipCode,
      referralCode,
    ]);

    if (!sheetResult.success) {
      console.warn("Google Sheets append failed (non-blocking):", sheetResult.error);
    }

    const emailResult = await sendWelcomeEmail({ name, email, referralCode });

    if (!emailResult.success) {
      console.warn("Welcome email failed (non-blocking):", emailResult.error);
    }

    res.json({ success: true, referralCode });
  } catch (err) {
    console.error("Waitlist signup error:", err);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Lawn Stars API running on http://localhost:${PORT}`);
});
