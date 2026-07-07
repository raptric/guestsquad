import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ASSET_LABELS: Record<string, string> = {
  "after-hours-checklist": "After-Hours Guest Coverage Checklist",
  "guest-messaging-sop": "Hotel Guest Messaging SOP Template",
  "ota-inbox-response-checklist": "OTA Inbox Response Checklist",
  "coverage-gap-assessment": "Guest Coverage Gap Assessment",
  "sample-weekly-report": "Sample Weekly Guest Operations Report",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, propertyType, asset, website, source_page, referrer, utm_source, utm_medium, utm_campaign } = body;

    // Honeypot — bots fill this, real users don't
    if (website) return NextResponse.json({ ok: true });

    if (!email || !asset) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const assetLabel = ASSET_LABELS[asset] ?? asset;
    const pdfUrl = `https://guestsquad.com/downloads/${asset}.pdf`;

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("[download-gate] GMAIL_USER or GMAIL_APP_PASSWORD env vars not set");
      // Still return ok — don't block the download because of email config
      return NextResponse.json({ ok: true, pdfUrl });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    // Internal lead notification — non-blocking
    transporter.sendMail({
      from: `"GuestSquad Website" <${gmailUser}>`,
      to: "info@guestsquad.com",
      replyTo: email,
      subject: `New asset download — ${assetLabel}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <h2 style="border-bottom:2px solid #c9a84c;padding-bottom:12px;color:#c9a84c">Asset Download Lead</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:20px">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:180px">Asset</td><td style="padding:10px 0;border-bottom:1px solid #eee">${assetLabel}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Property Type</td><td style="padding:10px 0;border-bottom:1px solid #eee">${propertyType || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:12px;color:#555">Source page</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#555">${source_page || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:12px;color:#555">Referrer</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#555">${referrer || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:12px;color:#555">utm_source</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#555">${utm_source || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:12px;color:#555">utm_medium</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#555">${utm_medium || "—"}</td></tr>
            <tr><td style="padding:10px 0;font-weight:600;font-size:12px;color:#555">utm_campaign</td><td style="padding:10px 0;font-size:12px;color:#555">${utm_campaign || "—"}</td></tr>
          </table>
          <p style="margin-top:32px;font-size:12px;color:#888">Sent from guestsquad.com asset download gate</p>
        </div>
      `,
    }).catch((err) => console.error("[download-gate] Lead notification failed:", err));

    // Delivery email to the lead — await this one so we know it went
    try {
      await transporter.sendMail({
        from: `"GuestSquad" <${gmailUser}>`,
        to: email,
        subject: `Your download: ${assetLabel}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#0B1220;padding:32px 40px">
              <img src="https://guestsquad.com/brand-assets/guestsquad-logo-horizontal.svg" alt="GuestSquad" style="height:28px;filter:brightness(0) invert(1)" />
            </div>
            <div style="border-top:3px solid #C7A24A"></div>
            <div style="padding:40px">
              <p style="font-size:15px;color:#1a1a1a">Thanks for downloading the <strong>${assetLabel}</strong>.</p>
              <p style="margin-top:16px">
                <a href="${pdfUrl}" style="display:inline-block;background:#0B1220;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600">
                  Download Your PDF
                </a>
              </p>
              <p style="margin-top:24px;font-size:13px;color:#666">
                If you have questions about how GuestSquad can cover the gaps your property has,
                <a href="https://guestsquad.com/contact" style="color:#9C7E33">book a coverage review</a>.
              </p>
              <p style="margin-top:32px;font-size:12px;color:#aaa">GuestSquad &middot; guestsquad.com</p>
            </div>
          </div>
        `,
      });
    } catch (err) {
      console.error("[download-gate] Delivery email failed:", err);
      // Still succeed — the download should not be blocked by email failure
    }

    return NextResponse.json({ ok: true, pdfUrl });
  } catch (err) {
    console.error("[download-gate] Unexpected error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
