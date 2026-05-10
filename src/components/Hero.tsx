// Hero — editorial split layout for Bormin Rénovation.
// Tagline + value proposition + 2 CTAs (Devis + Appeler). Trust strip below.

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-section overflow-hidden bg-bg"
      aria-labelledby="hero-heading"
    >
      <div className="container-premium grid lg:grid-cols-12 gap-12 lg:gap-20 items-end pt-24">
        {/* Text column */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <AnimateOnScroll>
            <span className="eyebrow">
              Vevey · Lausanne · Morges · Suisse romande
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <h1
              id="hero-heading"
              className="text-display-xl mt-12 mb-10 font-light"
            >
              Votre rénovation,
              <br />
              <span className="italic-accent text-accent">
                livrée comme promis.
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={240}>
            <p className="text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed mb-12">
              Tous travaux du bâtiment dans le canton de Vaud — du dépannage à la
              rénovation clé en main. Devis transparent. Délais respectés.
              Communication continue.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={340}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="#contact" className="btn-pill btn-primary">
                Demander un devis gratuit
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12m0 0L8 2m5 5L8 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>
              <a
                href="https://wa.me/41765314652?text=Bonjour%20Artem%2C%20j%27ai%20un%20projet%20et%20j%27aimerais%20avoir%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.683 5.55l-.999 3.648 3.805-.997zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="tel:+41765314652" className="btn-ghost text-sm">
                ou +41 76 531 46 52
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={440}>
            <div className="mt-16 flex items-center gap-6 text-sm text-ink-muted">
              <div className="accent-line" aria-hidden="true" />
              <span className="tracking-[0.15em] uppercase text-[0.7rem] font-mono">
                17 ans d&apos;expérience · Indépendant · FR / EN / RU / UK
              </span>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Visual column — signature shaker kitchen, vertical 3:4 fits hero frame */}
        <div className="lg:col-span-5 order-2 lg:order-2">
          <AnimateOnScroll delay={150} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0 bg-gray-100 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/realisations/03-cuisine-shaker.jpg"
                alt="Cuisine shaker beige avec carrelage métro — réalisation Bormin Rénovation"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
