// Services — editorial list of 6 main service categories.
// Each row: number + name + short description + arrow CTA.

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    num: "01",
    name: "Rénovation clé en main",
    desc: "Démolition, plomberie, électricité, finitions. Coordination complète, livraison aux dates promises.",
  },
  {
    num: "02",
    name: "Plomberie",
    desc: "Installation, dépannage, raccordements. Salles de bain, cuisines, chauffage.",
  },
  {
    num: "03",
    name: "Menuiserie & fenêtres",
    desc: "Pose et remplacement de portes, fenêtres, escaliers, agencements.",
  },
  {
    num: "04",
    name: "Maçonnerie",
    desc: "Gros œuvre, cloisons, ouvertures, modifications structurelles.",
  },
  {
    num: "05",
    name: "Carrelage & sols",
    desc: "Salles de bain, cuisines, parquet, stratifié, sols coulés.",
  },
  {
    num: "06",
    name: "Peinture & finitions",
    desc: "Peinture intérieure et extérieure, plâtrerie, effets décoratifs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section bg-bg" aria-labelledby="services-heading">
      <div className="container-premium">
        <AnimateOnScroll className="grid lg:grid-cols-12 gap-12 lg:items-end mb-20 pb-8 border-b border-line">
          <div className="lg:col-span-3">
            <span className="eyebrow">(01) — Services</span>
          </div>
          <h2
            id="services-heading"
            className="lg:col-span-9 text-display-md font-light"
          >
            Tous corps de métier.{" "}
            <span className="italic-accent text-accent">
              Un seul interlocuteur.
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 60}>
              <Link
                href="#contact"
                className="group grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_1fr_auto_60px] gap-6 lg:gap-12 items-center py-9 border-t border-line hover:pl-6 transition-all duration-500 last:border-b"
              >
                <span className="font-mono text-xs text-gray-300 tracking-[0.1em]">
                  {s.num}
                </span>
                <span className="text-2xl md:text-4xl font-light tracking-tight">
                  {s.name}
                </span>
                <span className="hidden lg:block text-sm text-ink-muted max-w-sm text-right leading-relaxed">
                  {s.desc}
                </span>
                <span className="hidden lg:flex w-12 h-12 border border-line rounded-full items-center justify-center text-lg group-hover:bg-ink group-hover:text-bg group-hover:border-ink transition-all">
                  ↗
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
