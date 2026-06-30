import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, properties, propertyType, volume, tools, message, website } = body;

  // Honeypot — bots fill the hidden website field, real users don't
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !company) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD env vars not set");
    return NextResponse.json({ error: "Email not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <h2 style="border-bottom:2px solid #c9a84c;padding-bottom:12px;color:#c9a84c">
        New GuestSquad Enquiry
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:20px">
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:200px">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Hotel / Company</td><td style="padding:10px 0;border-bottom:1px solid #eee">${company}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Properties</td><td style="padding:10px 0;border-bottom:1px solid #eee">${properties || "—"}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Property Type</td><td style="padding:10px 0;border-bottom:1px solid #eee">${propertyType || "—"}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Monthly Volume</td><td style="padding:10px 0;border-bottom:1px solid #eee">${volume || "—"}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Current Tools</td><td style="padding:10px 0;border-bottom:1px solid #eee">${tools || "—"}</td></tr>
        <tr><td style="padding:10px 0;font-weight:600;vertical-align:top">Message</td><td style="padding:10px 0;white-space:pre-wrap">${message || "—"}</td></tr>
      </table>
      <p style="margin-top:32px;font-size:12px;color:#888">Sent from the contact form at guestsquad.com</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"GuestSquad Website" <${gmailUser}>`,
    to: gmailUser,
    replyTo: email,
    subject: `New enquiry from ${name} — ${company}`,
    html,
  });

  return NextResponse.json({ ok: true });
}
