// Réalisations — placeholder section to keep the #realisations anchor live
// while Artem gathers project photos. Once 4-6 photos are received, this
// becomes a proper grid of project cards (image + title + district + year).

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Realisations() {
  return (
    <section
      id="realisations"
      className="py-section bg-gray-100 border-t border-line"
      aria-labelledby="realisations-heading"
    >
      <div className="container-premium">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <span className="eyebrow eyebrow-bare font-mono text-ink-muted">
            (02) — Réalisations
          </span>

          <h2
            id="realisations-heading"
            className="text-display-md font-light mt-6 mb-6"
          >
            Les chantiers{" "}
            <span className="italic-accent text-accent">parlent</span>{" "}
            pour nous.
          </h2>

          <p className="text-ink-muted text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Cuisines, salles de bain, rénovations clé en main — chaque
            projet raconte une histoire de précision et de respect des
            délais. Galerie en cours de mise à jour avec nos derniers
            chantiers en Suisse romande.
          </p>

          {/* Placeholder mosaic — three subtle cards saying "à venir" */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-bg border border-line flex items-center justify-center"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-subtle">
                  Photo · 0{i}
                </span>
              </div>
            ))}
          </div>

          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink-muted mb-8">
            Galerie complète bientôt en ligne
          </p>

          <Link href="#contact" className="btn-pill btn-primary">
            Voir un projet en cours →
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
