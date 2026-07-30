import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    propertyName,
    propertyWebsite,
    propertyType,
    rooms,
    channels,
    pain,
    name,
    email,
    phone,
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

  if (!name || !email || !propertyName) {
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

  const channelList = Array.isArray(channels) ? channels.join(", ") : (channels || "—");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <h2 style="border-bottom:2px solid #c9a84c;padding-bottom:12px;color:#c9a84c">
        Pilot Qualification — ${propertyName}
      </h2>
      <h3 style="margin-top:24px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em">Property Details</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600;width:220px">Property Name</td><td style="padding:9px 0;border-bottom:1px solid #eee">${propertyName}</td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Website</td><td style="padding:9px 0;border-bottom:1px solid #eee">${propertyWebsite || "—"}</td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Property Type</td><td style="padding:9px 0;border-bottom:1px solid #eee">${propertyType || "—"}</td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Rooms / Units</td><td style="padding:9px 0;border-bottom:1px solid #eee">${rooms || "—"}</td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Channels Needed</td><td style="padding:9px 0;border-bottom:1px solid #eee">${channelList}</td></tr>
        <tr><td style="padding:9px 0;font-weight:600;vertical-align:top">Main Pain Point</td><td style="padding:9px 0;white-space:pre-wrap">${pain || "—"}</td></tr>
      </table>
      <h3 style="margin-top:24px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em">Contact</h3>
      <table style="width:100%;border-collapse:collapse;margin-top:10px">
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600;width:220px">Name</td><td style="padding:9px 0;border-bottom:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:9px 0;border-bottom:1px solid #eee;font-weight:600">Work Email</td><td style="padding:9px 0;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:9px 0;font-weight:600">Phone</td><td style="padding:9px 0">${phone || "—"}</td></tr>
      </table>
      <h3 style="margin-top:28px;font-size:13px;color:#888;border-top:1px solid #eee;padding-top:16px;text-transform:uppercase;letter-spacing:0.08em">Attribution</h3>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;width:220px;color:#555">Source page</td><td style="padding:6px 0;font-size:12px;color:#555">${source_page || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">Referrer</td><td style="padding:6px 0;font-size:12px;color:#555">${referrer || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">utm_source</td><td style="padding:6px 0;font-size:12px;color:#555">${utm_source || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">utm_medium</td><td style="padding:6px 0;font-size:12px;color:#555">${utm_medium || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;font-size:12px;color:#555">utm_campaign</td><td style="padding:6px 0;font-size:12px;color:#555">${utm_campaign || "—"}</td></tr>
      </table>
      <p style="margin-top:32px;font-size:12px;color:#888">Pilot qualification form — guestsquad.com/pilot</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Guest Squad Website" <${gmailUser}>`,
    to: gmailUser,
    replyTo: email,
    subject: `Pilot Qualification — ${propertyName} (${propertyType || "Unknown type"})`,
    html,
  });

  return NextResponse.json({ ok: true });
}
