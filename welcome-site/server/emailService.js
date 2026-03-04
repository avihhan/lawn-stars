import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || "587", 10),
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

function buildEmailHtml({ name, referralCode }) {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Lawn Stars</title>
</head>
<body style="margin:0;padding:0;background-color:#f0fdf4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#022c22 0%,#047857 50%,#10b981 100%);padding:40px 40px 30px;text-align:center;">
              <div style="font-size:36px;margin-bottom:8px;">&#9733;</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:800;">You're on the list!</h1>
              <p style="margin:8px 0 0;color:#a7f3d0;font-size:16px;">Welcome to Lawn Stars</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 20px;color:#1f2937;font-size:16px;line-height:1.6;">
                Hi ${firstName},
              </p>
              <p style="margin:0 0 20px;color:#1f2937;font-size:16px;line-height:1.6;">
                You're officially on the waitlist for <strong>Lawn Stars</strong>!
              </p>
              <p style="margin:0 0 24px;color:#4b5563;font-size:15px;line-height:1.6;">
                We're building this app because we know how frustrating it is to deal with surprise fees, rotating crews, and landscapers who just don't show up. You deserve a better way to take care of your home.
              </p>

              <p style="margin:0 0 16px;color:#1f2937;font-size:16px;font-weight:700;">
                Here's what you can expect when we launch:
              </p>

              <!-- Feature 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="48" valign="top">
                    <div style="width:40px;height:40px;border-radius:10px;background-color:#ecfdf5;text-align:center;line-height:40px;font-size:18px;">&#10003;</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;color:#065f46;font-size:15px;font-weight:700;">Consistent Quality</p>
                    <p style="margin:4px 0 0;color:#6b7280;font-size:14px;line-height:1.5;">The same dependable local crews treating your yard like it's their own.</p>
                  </td>
                </tr>
              </table>

              <!-- Feature 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="48" valign="top">
                    <div style="width:40px;height:40px;border-radius:10px;background-color:#ecfdf5;text-align:center;line-height:40px;font-size:18px;">&#128269;</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;color:#065f46;font-size:15px;font-weight:700;">Total Transparency</p>
                    <p style="margin:4px 0 0;color:#6b7280;font-size:14px;line-height:1.5;">Fair pricing upfront. Zero hidden corporate markups.</p>
                  </td>
                </tr>
              </table>

              <!-- Feature 3 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="48" valign="top">
                    <div style="width:40px;height:40px;border-radius:10px;background-color:#ecfdf5;text-align:center;line-height:40px;font-size:18px;">&#128241;</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;color:#065f46;font-size:15px;font-weight:700;">App Convenience</p>
                    <p style="margin:4px 0 0;color:#6b7280;font-size:14px;line-height:1.5;">Book, manage, and pay for services — all from your phone.</p>
                  </td>
                </tr>
              </table>

              <!-- What happens next -->
              <div style="background-color:#f0fdf4;border-radius:12px;padding:20px 24px;margin-bottom:24px;border-left:4px solid #10b981;">
                <p style="margin:0 0 8px;color:#065f46;font-size:15px;font-weight:700;">What happens next?</p>
                <p style="margin:0;color:#4b5563;font-size:14px;line-height:1.6;">
                  Sit tight! We're rolling out by zip code to ensure every neighborhood gets the high-quality service they deserve. The moment Lawn Stars goes live in your area, you'll be the first to get the download link.
                </p>
              </div>

              <!-- Referral section -->
              <div style="background-color:#fefce8;border-radius:12px;padding:20px 24px;margin-bottom:24px;text-align:center;">
                <p style="margin:0 0 8px;color:#854d0e;font-size:15px;font-weight:700;">Want early access?</p>
                <p style="margin:0 0 12px;color:#713f12;font-size:13px;">Share your link to move up the waitlist:</p>
                <div style="background-color:#ffffff;border:1px solid #fde68a;border-radius:8px;padding:10px 16px;font-family:monospace;font-size:14px;color:#047857;">
                  lawnstars.app/waitlist/ref=${referralCode}
                </div>
              </div>

              <p style="margin:0;color:#4b5563;font-size:15px;line-height:1.6;">
                Thanks for joining the community. We can't wait to show you the difference local service makes.
              </p>
              <p style="margin:20px 0 0;color:#1f2937;font-size:15px;">
                Best,<br /><strong>The Lawn Stars Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;padding:24px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 8px;font-size:13px;color:#9ca3af;">
                &#9733; Lawn Stars &mdash; Reliable. Transparent. Professional.
              </p>
              <p style="margin:0;font-size:12px;color:#d1d5db;">
                You're receiving this because you joined the Lawn Stars waitlist.<br />
                <a href="#" style="color:#10b981;text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendWelcomeEmail({ name, email, referralCode }) {
  try {
    const transport = getTransporter();

    if (!transport) {
      return {
        success: false,
        error: "SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS.",
      };
    }

    await transport.sendMail({
      from: `"Lawn Stars" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "You're on the list! Welcome to Lawn Stars \u2B50",
      html: buildEmailHtml({ name, referralCode }),
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
