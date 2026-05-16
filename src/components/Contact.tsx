"use client";

// Contact — devis form + direct contact info side by side.
// POST → /api/contact (Resend integration TODO when domain + API key ready).

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICES = [
  "Rénovation complète",
  "Salle de bain",
  "Cuisine",
  "Plomberie / dépannage",
  "Menuiserie / fenêtres",
  "Maçonnerie",
  "Peinture / finitions",
  "Carrelage / sols",
  "Petits travaux",
  "Autre — à discuter",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    message: "",
    website: "", // honeypot
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-section-lg bg-gray-100"
      aria-labelledby="contact-heading"
    >
      <div className="container-premium">
        <AnimateOnScroll className="grid lg:grid-cols-12 gap-12 lg:items-end mb-20 pb-8 border-b border-line">
          <div className="lg:col-span-3">
            <span className="eyebrow">(07) — Contact</span>
          </div>
          <h2
            id="contact-heading"
            className="lg:col-span-9 text-display-md font-light"
          >
            Décrivez-nous{" "}
            <span className="italic-accent text-accent">votre projet.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Direct info */}
          <AnimateOnScroll className="lg:col-span-5 space-y-8">
            <p className="text-lg text-ink-soft leading-relaxed">
              Visite et devis gratuits sous 48h. Réponse à toute demande sous
              24h, 7 jours sur 7.
            </p>

            <div className="space-y-2 border-t border-ink pt-8">
              <a
                href="tel:+41765314652"
                className="block group"
                aria-label="Appeler Bormin Rénovation"
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                  Téléphone
                </div>
                <div className="text-2xl font-medium tracking-tight group-hover:text-accent transition-colors">
                  +41 76 531 46 52
                </div>
              </a>
            </div>

            <div className="space-y-2 border-t border-line pt-6">
              <a
                href="https://wa.me/41765314652"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                  WhatsApp
                </div>
                <div className="text-lg font-medium group-hover:text-accent transition-colors">
                  Réponse sous 30 min
                </div>
              </a>
            </div>

            <div className="space-y-2 border-t border-line pt-6">
              <a
                href="https://g.page/r/CV-nXy7PSi1UEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                  Avis Google
                </div>
                <div className="text-lg font-medium group-hover:text-accent transition-colors">
                  Laisser un avis ★★★★★
                </div>
              </a>
            </div>

            <div className="space-y-2 border-t border-line pt-6">
              <a
                href="https://facebook.com/borminrenovation"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                  Facebook
                </div>
                <div className="text-lg font-medium group-hover:text-accent transition-colors">
                  borminrenovation
                </div>
              </a>
            </div>

            <div className="space-y-2 border-t border-line pt-6 border-b pb-6">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                Adresse
              </div>
              <div className="text-lg font-medium">
                Rue du Clos 8
                <br />
                1800 Vevey, Suisse
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                Zone d&apos;intervention
              </div>
              <div className="text-base">
                Vevey · Lausanne · Morges · Montreux · Suisse romande
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={150} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-bg border border-line p-8 md:p-12"
            >
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-8">
                — Demande de devis
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={onChange}
                className="absolute left-[-9999px] w-px h-px opacity-0"
                aria-hidden="true"
              />

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <Field label="Prénom & nom *" name="name" value={form.name} onChange={onChange} required />
                <Field label="Téléphone *" name="phone" type="tel" value={form.phone} onChange={onChange} required />
              </div>

              <div className="mb-5">
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
              </div>

              <div className="mb-5">
                <label className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-2">
                  Type de travaux *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3 border border-line bg-bg text-ink focus:outline-none focus:border-accent transition-colors text-base"
                >
                  <option value="">— Choisir un type —</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <Field
                  label="Adresse du chantier (ville)"
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder="Morges, Lausanne, Vevey..."
                />
              </div>

              <div className="mb-6">
                <label className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="Surface · état actuel · ce que vous souhaitez faire..."
                  className="w-full px-4 py-3 border border-line bg-bg text-ink focus:outline-none focus:border-accent transition-colors resize-y text-base"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full btn-pill btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "idle" && "Envoyer ma demande →"}
                {status === "sending" && "Envoi en cours..."}
                {status === "sent" && "✓ Demande reçue, je vous recontacte sous 24h"}
                {status === "error" && "Erreur — veuillez réessayer"}
              </button>

              <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-muted text-center">
                Réponse sous 24h · Données protégées (LPD)
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-muted mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-line bg-bg text-ink focus:outline-none focus:border-accent transition-colors text-base placeholder:text-ink-subtle"
      />
    </div>
  );
}
