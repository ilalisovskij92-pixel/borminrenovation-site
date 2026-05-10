// Réalisations — real project gallery from Artem's previous work.
// 6 hand-picked photos: residential renovation + ceiling work + kitchen +
// 2 bathroom styles + commercial fit-out (bar). All images self-hosted,
// resized to 1600px wide, EXIF stripped (privacy + size).

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

type Project = {
  image: string;
  title: string;
  category: string;
  location: string;
  /** Aspect ratio tailwind class — let images breathe according to shot */
  aspect: string;
};

const projects: Project[] = [
  {
    image: "/photos/realisations/01-salon-gris.jpg",
    title: "Salon clé en main",
    category: "Rénovation complète",
    location: "Suisse romande",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/photos/realisations/02-plafond-tendu.jpg",
    title: "Plafond tendu & éclairage",
    category: "Finitions",
    location: "Suisse romande",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/photos/realisations/03-cuisine-shaker.jpg",
    title: "Cuisine shaker",
    category: "Cuisine & menuiserie",
    location: "Suisse romande",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/photos/realisations/04-salle-bain-marbre.jpg",
    title: "Salle de bain — marbre & motif floral",
    category: "Carrelage & sanitaire",
    location: "Suisse romande",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/photos/realisations/05-douche-italienne.jpg",
    title: "Douche italienne — pierre",
    category: "Carrelage & sanitaire",
    location: "Suisse romande",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/photos/realisations/06-amenagement-commercial.jpg",
    title: "Aménagement bar & restaurant",
    category: "Espace commercial",
    location: "Suisse romande",
    aspect: "aspect-[3/4]",
  },
];

export default function Realisations() {
  return (
    <section
      id="realisations"
      className="py-section bg-gray-100 border-t border-line"
      aria-labelledby="realisations-heading"
    >
      <div className="container-premium">
        {/* Heading */}
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow eyebrow-bare font-mono text-ink-muted">
            (02) — Réalisations
          </span>

          <h2
            id="realisations-heading"
            className="text-display-md font-light mt-6 mb-6"
          >
            Les chantiers{" "}
            <span className="italic-accent text-accent">parlent</span> pour
            nous.
          </h2>

          <p className="text-ink-muted text-lg leading-relaxed max-w-xl mx-auto">
            Cuisines, salles de bain, rénovations clé en main, aménagements
            commerciaux — chaque projet est livré aux dates promises.
          </p>
        </AnimateOnScroll>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.image} delay={80 * i}>
              <figure className="group">
                <div
                  className={`relative overflow-hidden bg-bg border border-line ${p.aspect}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category}, ${p.location}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-muted mb-1">
                    {p.category} · {p.location}
                  </div>
                  <div className="text-ink text-base md:text-lg leading-snug">
                    {p.title}
                  </div>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA strip */}
        <AnimateOnScroll delay={400}>
          <div className="max-w-3xl mx-auto text-center border-t border-line pt-10">
            <p className="text-ink-muted leading-relaxed mb-6">
              Un projet en tête&nbsp;? Visite gratuite, devis détaillé sous
              48h, prix fixe à la signature.
            </p>
            <Link href="#contact" className="btn-pill btn-primary">
              Demander mon devis →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
