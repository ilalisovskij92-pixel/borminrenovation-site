// Reviews — strong CTA section that funnels existing clients into a Google review.
// Strategy: Artem will share the site with past clients, asking them to leave a
// Google review directly via the prominent button below. Once a few reviews
// land we can swap the placeholder block for an embedded Google Reviews widget.

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const GOOGLE_REVIEW_URL =
  "https://g.page/r/CV-nXy7PSi1UEAI/review";
const GOOGLE_PLACE_URL = "https://g.page/r/CV-nXy7PSi1UEAI";

export default function Reviews() {
  return (
    <section
      id="avis"
      className="py-section bg-ink text-bg"
      aria-labelledby="reviews-heading"
    >
      <div className="container-premium">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent mb-6 block">
            (05) — Témoignages
          </span>

          <h2
            id="reviews-heading"
            className="text-display-md font-light mb-6"
          >
            Construit sur la{" "}
            <span className="italic-accent text-accent">confiance,</span>
            <br />
            validé par nos clients.
          </h2>

          <p className="text-bg/70 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Nos chantiers parlent pour nous — mais ce sont les retours
            de nos clients qui comptent vraiment. Lisez-les directement
            sur Google, ou laissez le vôtre si vous avez travaillé
            avec nous.
          </p>

          {/* Big rating block (placeholder until real reviews land) */}
          <div className="border border-bg/15 p-10 lg:p-14 mb-10 max-w-2xl mx-auto">
            <div
              className="text-accent text-4xl tracking-[0.3em] mb-4"
              aria-label="Note 5 étoiles sur 5"
            >
              ★★★★★
            </div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bg/50 mb-4">
              Avis Google · Bormin Rénovation
            </div>
            <p className="text-bg/80 text-base leading-relaxed italic">
              « Vous êtes un ancien client&nbsp;? Votre retour aide les
              futurs propriétaires à choisir en confiance. Quelques
              minutes suffisent — et c&apos;est précieux pour nous. »
            </p>
          </div>

          {/* Two complementary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary bg-accent text-ink border-accent hover:bg-accent-dark hover:border-accent-dark"
            >
              Laisser un avis ★
            </Link>
            <Link
              href={GOOGLE_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary bg-transparent text-bg border-bg/30 hover:bg-bg hover:text-ink"
            >
              Lire les avis sur Google
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
