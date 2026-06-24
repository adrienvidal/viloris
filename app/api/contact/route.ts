import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CALENDLY_URL } from "@/lib/data";

const FROM = "Adrien Vidal — Viloris.io <contact@viloris.io>";
const TO = "contact@viloris.io";

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

  try {
    await Promise.all([
      transporter.sendMail({
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
      }),
      transporter.sendMail({
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
          <p style="font-family:sans-serif">Adrien Vidal<br>Fondateur · <a href="https://viloris.io" style="color:#60a7d6">Viloris.io</a></p>
        `,
      }),
    ]);
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
