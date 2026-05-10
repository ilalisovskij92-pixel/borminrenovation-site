// POST /api/contact — Bormin Rénovation lead intake.
// Phase 1: validation + console log.
// Phase 4: Resend integration (RESEND_API_KEY env var) + optional Telegram notification.

import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  address?: string;
  message?: string;
  // honeypot — bots often fill every field
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PHONE_LEN = 6;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const { name, phone, email, service, address, message, website } = body;

    // Honeypot — silent ignore
    if (website && website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Required fields
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, "").length < MIN_PHONE_LEN) {
      return NextResponse.json(
        { ok: false, error: "Numéro de téléphone invalide." },
        { status: 400 }
      );
    }

    if (email && !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 }
      );
    }

    // TODO Phase 4: send via Resend when RESEND_API_KEY is set
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "site@borminrenovation.ch",
    //   to: "artem@borminrenovation.ch",
    //   subject: `Nouvelle demande — ${service} — ${name}`,
    //   html: ... ,
    // });

    console.log("[contact] new lead:", {
      name,
      phone,
      email: email || "—",
      service,
      address: address || "—",
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
