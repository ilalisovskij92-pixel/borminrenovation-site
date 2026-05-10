// About — Artem's story (17 years construction, Ukraine + Switzerland, multilingual).
// Editorial layout with portrait + narrative + values strip.

import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="py-section-lg bg-gray-100"
      aria-labelledby="about-heading"
    >
      <div className="container-premium">
        <AnimateOnScroll className="grid lg:grid-cols-12 gap-12 lg:items-end mb-20 pb-8 border-b border-line">
          <div className="lg:col-span-3">
            <span className="eyebrow">(02) — À propos</span>
          </div>
          <h2
            id="about-heading"
            className="lg:col-span-9 text-display-md font-light"
          >
            Le sérieux d&apos;un artisan,{" "}
            <span className="italic-accent text-accent">
              la clarté d&apos;un pro.
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <AnimateOnScroll className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md bg-gray-200 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=85"
                alt="Artem Bormin, fondateur de Bormin Rénovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 left-0 text-[0.65rem] uppercase tracking-[0.15em] font-mono text-ink-subtle">
                Placeholder · Portrait d&apos;Artem à venir
              </div>
            </div>
          </AnimateOnScroll>

          {/* Narrative */}
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <div className="space-y-5 text-lg leading-relaxed text-ink-soft max-w-xl">
                <p>
                  Je m&apos;appelle{" "}
                  <strong className="text-ink font-medium">Artem Bormin</strong>{" "}
                  et je dirige{" "}
                  <strong className="text-ink font-medium">
                    Bormin Rénovation
                  </strong>
                  , basée à Vevey. Je travaille dans le bâtiment depuis{" "}
                  <strong className="text-ink font-medium">17 ans</strong>.
                </p>
                <p>
                  Mes racines sont en{" "}
                  <strong className="text-ink font-medium">Ukraine</strong>, où
                  j&apos;ai dirigé ma propre entreprise de construction pendant
                  plus de dix ans. Aujourd&apos;hui, basé en{" "}
                  <strong className="text-ink font-medium">Suisse</strong>, je
                  travaille sur l&apos;ensemble du canton de Vaud et au-delà —
                  Genève, Fribourg, Neuchâtel.
                </p>
                <p>
                  Pour moi, un chantier réussi, c&apos;est{" "}
                  <span className="italic-accent text-accent">
                    trois choses
                  </span>{" "}
                  : un prix tenu, un délai respecté, et un client qui peut nous
                  appeler à tout moment. Je parle{" "}
                  <strong className="text-ink font-medium">
                    français, anglais, russe et ukrainien
                  </strong>{" "}
                  — la communication n&apos;est jamais un obstacle.
                </p>
                <p>
                  Que ce soit une petite réparation de plomberie ou la
                  rénovation complète d&apos;un appartement, vous parlerez
                  toujours à la même personne — moi. C&apos;est la différence
                  entre un artisan et une grosse boîte.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Values strip */}
            <AnimateOnScroll delay={150}>
              <div className="mt-12 grid grid-cols-2 gap-6 max-w-xl">
                {[
                  ["Devis fixe", "annoncé à l'avance"],
                  ["Délais", "respectés au jour près"],
                  ["Communication", "directe, en 4 langues"],
                  ["Un seul contact", "du devis à la livraison"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="border-t border-ink pt-4"
                  >
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink-muted mb-1">
                      {desc}
                    </div>
                    <div className="font-medium text-ink">{title}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
