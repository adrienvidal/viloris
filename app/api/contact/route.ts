import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CALENDLY_URL, CONTACT_EMAIL, SITE_URL } from "@/lib/data";

const FROM = `Adrien Vidal — Viloris.io <${CONTACT_EMAIL}>`;
const TO = CONTACT_EMAIL;

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: NextRequest) {
  const { name, email, company, services, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const servicesLine =
    Array.isArray(services) && services.length > 0 ? services.join(", ") : "Non précisé";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const firstName = safeName.split(" ")[0];

  const transporter = createTransporter();

  // The notification decides success: if it fails, the lead would be lost.
  try {
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Audit] Nouvelle demande de ${name}`,
      html: `
          <h2 style="font-family:sans-serif">Nouvelle demande d'audit</h2>
          <table style="font-family:sans-serif;border-collapse:collapse">
            <tr><td style="padding:4px 12px 4px 0;color:#666">Nom</td><td><strong>${safeName}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            ${safeCompany ? `<tr><td style="padding:4px 12px 4px 0;color:#666">Entreprise</td><td>${safeCompany}</td></tr>` : ""}
            <tr><td style="padding:4px 12px 4px 0;color:#666">Services</td><td>${servicesLine}</td></tr>
          </table>
          <p style="font-family:sans-serif;margin-top:16px"><strong>Message :</strong><br>${safeMessage}</p>
        `,
    });
  } catch (err) {
    console.error("[contact] notification failed", { from: email, err });
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }

  // The confirmation is a courtesy: a failure (e.g. typo in the address) must not
  // show an error to a prospect whose request was already received.
  try {
    await transporter.sendMail({
      from: FROM,
      to: email,
      subject: "Votre demande d'audit a bien été reçue — Viloris.io",
      html: `
          <p style="font-family:sans-serif">Bonjour ${firstName},</p>
          <p style="font-family:sans-serif">J'ai bien reçu votre demande et je reviens vers vous sous 24h.</p>
          <p style="font-family:sans-serif">En attendant, vous pouvez réserver directement un créneau dans mon agenda :<br>
            <a href="${CALENDLY_URL}" style="color:#60a7d6">Réserver un créneau →</a>
          </p>
          <br>
          <p style="font-family:sans-serif">Adrien Vidal<br>Fondateur · <a href="${SITE_URL}" style="color:#60a7d6">Viloris.io</a></p>
        `,
    });
  } catch (err) {
    console.error("[contact] confirmation failed", { to: email, err });
  }

  return NextResponse.json({ success: true });
}
