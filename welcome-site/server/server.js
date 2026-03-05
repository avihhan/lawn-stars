import "dotenv/config";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { google } from "googleapis";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// ── Google Sheets ──────────────────────────────────────────────────────────────

let sheetsClient = null;

function getSheetsClient() {
  if (sheetsClient) return sheetsClient;
  const { GOOGLE_SERVICE_ACCOUNT_EMAIL: email, GOOGLE_PRIVATE_KEY: key, GOOGLE_SHEETS_SPREADSHEET_ID: id } = process.env;
  if (!email || !key || !id) {
    console.warn("[Sheets] Missing env vars — SPREADSHEET_ID:", id ? "SET" : "MISSING", "| EMAIL:", email ? "SET" : "MISSING", "| KEY:", key ? "SET" : "MISSING");
    return null;
  }
  const auth = new google.auth.JWT(email, null, key.replace(/\\n/g, "\n"), ["https://www.googleapis.com/auth/spreadsheets"]);
  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

async function appendToSheet(row) {
  const client = getSheetsClient();
  if (!client) return { success: false, error: "Google Sheets not configured" };
  try {
    await client.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });
    console.log("[Sheets] Row appended");
    return { success: true };
  } catch (err) {
    console.error("[Sheets] Error:", err.message);
    return { success: false, error: err.message };
  }
}

// ── Nodemailer ─────────────────────────────────────────────────────────────────

let mailer = null;

function getMailer() {
  if (mailer) return mailer;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  mailer = nodemailer.createTransport({ host: SMTP_HOST, port: parseInt(SMTP_PORT || "587"), secure: false, auth: { user: SMTP_USER, pass: SMTP_PASS } });
  return mailer;
}

function welcomeEmailHtml(firstName, referralCode) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f0fdf4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;padding:40px 20px;"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.06);">
  <tr><td style="background:linear-gradient(135deg,#022c22,#047857,#10b981);padding:40px 40px 30px;text-align:center;">
    <div style="font-size:36px;margin-bottom:8px;">&#9733;</div>
    <h1 style="margin:0;color:#fff;font-size:28px;font-weight:800;">You're on the list!</h1>
    <p style="margin:8px 0 0;color:#a7f3d0;font-size:16px;">Welcome to Lawn Stars</p>
  </td></tr>
  <tr><td style="padding:36px 40px;">
    <p style="margin:0 0 20px;color:#1f2937;font-size:16px;line-height:1.6;">Hi ${firstName},</p>
    <p style="margin:0 0 20px;color:#1f2937;font-size:16px;line-height:1.6;">You're officially on the waitlist for <strong>Lawn Stars</strong>!</p>
    <p style="margin:0 0 24px;color:#4b5563;font-size:15px;line-height:1.6;">We're building this app because we know how frustrating it is to deal with surprise fees, rotating crews, and landscapers who just don't show up. You deserve a better way to take care of your home.</p>
    <p style="margin:0 0 16px;color:#1f2937;font-size:16px;font-weight:700;">Here's what you can expect when we launch:</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;"><tr>
      <td width="48" valign="top"><div style="width:40px;height:40px;border-radius:10px;background:#ecfdf5;text-align:center;line-height:40px;font-size:18px;">&#10003;</div></td>
      <td style="padding-left:12px;"><p style="margin:0;color:#065f46;font-size:15px;font-weight:700;">Consistent Quality</p><p style="margin:4px 0 0;color:#6b7280;font-size:14px;">The same dependable local crews treating your yard like it's their own.</p></td>
    </tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;"><tr>
      <td width="48" valign="top"><div style="width:40px;height:40px;border-radius:10px;background:#ecfdf5;text-align:center;line-height:40px;font-size:18px;">&#128269;</div></td>
      <td style="padding-left:12px;"><p style="margin:0;color:#065f46;font-size:15px;font-weight:700;">Total Transparency</p><p style="margin:4px 0 0;color:#6b7280;font-size:14px;">Fair pricing upfront. Zero hidden corporate markups.</p></td>
    </tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;"><tr>
      <td width="48" valign="top"><div style="width:40px;height:40px;border-radius:10px;background:#ecfdf5;text-align:center;line-height:40px;font-size:18px;">&#128241;</div></td>
      <td style="padding-left:12px;"><p style="margin:0;color:#065f46;font-size:15px;font-weight:700;">App Convenience</p><p style="margin:4px 0 0;color:#6b7280;font-size:14px;">Book, manage, and pay for services — all from your phone.</p></td>
    </tr></table>
    <div style="background:#f0fdf4;border-radius:12px;padding:20px 24px;margin-bottom:24px;border-left:4px solid #10b981;">
      <p style="margin:0 0 8px;color:#065f46;font-size:15px;font-weight:700;">What happens next?</p>
      <p style="margin:0;color:#4b5563;font-size:14px;line-height:1.6;">Sit tight! We're rolling out by zip code to ensure every neighborhood gets the high-quality service they deserve. The moment Lawn Stars goes live in your area, you'll be the first to get the download link.</p>
    </div>
    <div style="background:#fefce8;border-radius:12px;padding:20px 24px;margin-bottom:24px;text-align:center;">
      <p style="margin:0 0 8px;color:#854d0e;font-size:15px;font-weight:700;">Want early access?</p>
      <p style="margin:0 0 12px;color:#713f12;font-size:13px;">Share your link to move up the waitlist:</p>
      <div style="background:#fff;border:1px solid #fde68a;border-radius:8px;padding:10px 16px;font-family:monospace;font-size:14px;color:#047857;">lawnstars.app/waitlist/ref=${referralCode}</div>
    </div>
    <p style="margin:0;color:#4b5563;font-size:15px;line-height:1.6;">Thanks for joining the community. We can't wait to show you the difference local service makes.</p>
    <p style="margin:20px 0 0;color:#1f2937;font-size:15px;">Best,<br/><strong>The Lawn Stars Team</strong></p>
  </td></tr>
  <tr><td style="background:#f9fafb;padding:24px 40px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0 0 8px;font-size:13px;color:#9ca3af;">&#9733; Lawn Stars &mdash; Reliable. Transparent. Professional.</p>
    <p style="margin:0;font-size:12px;color:#d1d5db;">You're receiving this because you joined the Lawn Stars waitlist.<br/><a href="#" style="color:#10b981;text-decoration:underline;">Unsubscribe</a></p>
  </td></tr>
</table>
</td></tr></table></body></html>`;
}

async function sendWelcomeEmail({ name, email, referralCode }) {
  const transport = getMailer();
  if (!transport) return { success: false, error: "SMTP not configured" };
  try {
    await transport.sendMail({
      from: `"Lawn Stars" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "You're on the list! Welcome to Lawn Stars \u2B50",
      html: welcomeEmailHtml(name.split(" ")[0], referralCode),
    });
    console.log("[Email] Sent to", email);
    return { success: true };
  } catch (err) {
    console.error("[Email] Error:", err.message);
    return { success: false, error: err.message };
  }
}

// ── Routes ─────────────────────────────────────────────────────────────────────

app.post("/api/waitlist", async (req, res) => {
  try {
    const { name, email, phone, zipCode } = req.body;
    console.log("[API] Waitlist signup:", { name, email, phone, zipCode });

    if (!name || !email || !zipCode) return res.status(400).json({ error: "Name, email, and zip code are required." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Please provide a valid email address." });

    const referralCode = uuidv4().slice(0, 8).toUpperCase();

    const [sheetResult, emailResult] = await Promise.all([
      appendToSheet([new Date().toISOString(), name, email, phone || "", zipCode, referralCode]),
      sendWelcomeEmail({ name, email, referralCode }),
    ]);

    if (!sheetResult.success) console.warn("[API] Sheets failed:", sheetResult.error);
    if (!emailResult.success) console.warn("[API] Email failed:", emailResult.error);

    res.json({ success: true, referralCode });
  } catch (err) {
    console.error("[API] Error:", err);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log(`Lawn Stars API running on http://localhost:${PORT}`));
