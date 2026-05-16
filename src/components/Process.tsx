// Process — 3 steps from approved mockup: Visite → Contrat → Livraison.

import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Visite & devis",
    body: "Visite gratuite à votre domicile pour comprendre le projet. Devis détaillé sous 48h, ligne par ligne, prix fixé à l'avance.",
  },
  {
    num: "02",
    title: "Planning & contrat",
    body: "Dates de début et de fin précises. Acompte de 30% à la signature. Vous savez ce qu'il se passe et quand.",
  },
  {
    num: "03",
    title: "Réalisation & livraison",
    body: "Communication continue pendant le chantier. Espace propre, voisinage respecté. Livraison aux dates promises.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-section bg-bg" aria-labelledby="process-heading">
      <div className="container-premium">
        <AnimateOnScroll className="grid lg:grid-cols-12 gap-12 lg:items-end mb-20 pb-8 border-b border-line">
          <div className="lg:col-span-3">
            <span className="eyebrow">(04) — Méthode</span>
          </div>
          <h2
            id="process-heading"
            className="lg:col-span-9 text-display-md font-light"
          >
            Trois étapes,{" "}
            <span className="italic-accent text-accent">
              zéro mauvaise surprise.
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 120}>
              <div className="border border-line bg-bg p-10 min-h-[280px] flex flex-col hover:border-ink transition-colors duration-300">
                <span className="font-mono text-xs text-ink-muted tracking-[0.15em] mb-12">
                  {s.num} / {s.title.split(" ")[0].toLowerCase()}
                </span>
                <h3 className="text-2xl mb-3 font-medium tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
