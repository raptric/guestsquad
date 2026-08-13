import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    email,
    companyName,
    propertySize,
    helpWith,
    phone,
    propertyWebsite,
    website, // honeypot
    source_page,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
  } = body;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !companyName) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD ?? process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("GMAIL_USER or GMAIL_PASSWORD env vars not set");
    return NextResponse.json({ error: "Email not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const helpList = Array.isArray(helpWith) ? helpWith.join(", ") : (helpWith || "—");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <h2 style="border-bottom:2px solid #c9a84c;padding-bottom:12px;color:#c9a84c">
        Coverage Review Request — ${companyName}
      </h2>
      <h3 style="margin-top:24px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em">Contact Details</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600;width:220px">Name</td><td style="padding:9px 0;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Work Email</td><td style="padding:9px 0;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Phone</td><td style="padding:9px 0;border-bottom:1px solid #eee">${phone || "—"}</td></tr>
        <tr><td style="padding:9px 0;font-weight:600">Property Website</td><td style="padding:9px 0">${propertyWebsite || "—"}</td></tr>
        <tr><td style="padding:9px 0;font-weight:600">Property / Company</td><td style="padding:9px 0">${companyName}</td></tr>
      </table>
      <h3 style="margin-top:24px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em">Property Details</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600;width:220px">Property Size</td><td style="padding:9px 0;border-bottom:1px solid #eee">${propertySize || "—"}</td></tr>
        <tr><td style="padding:9px 0;font-weight:600;vertical-align:top">Looking for help with</td><td style="padding:9px 0;white-space:pre-wrap">${helpList}</td></tr>
      </table>
      <h3 style="margin-top:28px;font-size:13px;color:#888;border-top:1px solid #eee;padding-top:16px;text-transform:uppercase;letter-spacing:0.08em">Attribution</h3>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;width:220px;color:#555">Source page</td><td style="padding:6px 0;font-size:12px;color:#555">${source_page || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">Referrer</td><td style="padding:6px 0;font-size:12px;color:#555">${referrer || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">utm_source</td><td style="padding:6px 0;font-size:12px;color:#555">${utm_source || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">utm_medium</td><td style="padding:6px 0;font-size:12px;color:#555">${utm_medium || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">utm_campaign</td><td style="padding:6px 0;font-size:12px;color:#555">${utm_campaign || "—"}</td></tr>
      </table>
      <p style="margin-top:32px;font-size:12px;color:#888">Coverage Review form — guestsquad.com</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Guest Squad Website" <${gmailUser}>`,
    to: gmailUser,
    replyTo: email,
    subject: `Coverage Review Request — ${name} · ${companyName}`,
    html,
  });

  return NextResponse.json({ ok: true });
}
