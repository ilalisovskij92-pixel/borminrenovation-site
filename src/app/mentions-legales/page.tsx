// Mentions légales — page légalement requise en Suisse (LCD art. 3 al. 1 let. s)
// pour tout site commercial. Doit identifier clairement l'éditeur et permettre
// un contact rapide.

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales sur Bormin Rénovation, entreprise indépendante de construction et rénovation basée à Vevey, Suisse.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-section bg-white">
        <div className="container-premium max-w-3xl">
          <span className="eyebrow">Légal</span>
          <h1 className="text-display-lg mt-4 mb-12">Mentions légales</h1>

          <div className="space-y-10 text-ink-soft leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Responsable de la publication
              </h2>
              <p>
                Bormin Rénovation
                <br />
                Artem Bormin · Indépendant (raison individuelle)
                <br />
                Rue du Clos 8
                <br />
                1800 Vevey, Suisse
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">Contact</h2>
              <p>
                Téléphone :{" "}
                <a
                  href="tel:+41765314652"
                  className="text-ink hover:text-accent transition-colors"
                >
                  +41 76 531 46 52
                </a>
                <br />
                WhatsApp :{" "}
                <a
                  href="https://wa.me/41765314652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  +41 76 531 46 52
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Hébergement du site
              </h2>
              <p>
                Vercel Inc.
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723, USA
                <br />
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logo,
                design) est la propriété de Bormin Rénovation, sauf mention
                contraire. Toute reproduction, même partielle, est interdite
                sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Limite de responsabilité
              </h2>
              <p>
                Les informations présentées sur ce site sont fournies à titre
                indicatif. Bormin Rénovation s&apos;efforce d&apos;assurer leur
                exactitude mais ne peut garantir l&apos;absence d&apos;erreurs
                ou d&apos;omissions. Les devis et estimations engageant
                l&apos;entreprise sont uniquement ceux établis par écrit après
                visite du chantier.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Droit applicable
              </h2>
              <p>
                Le présent site et son utilisation sont régis par le droit
                suisse. Tout litige relève des tribunaux compétents du canton de
                Vaud.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Données personnelles
              </h2>
              <p>
                Pour toute information sur le traitement de vos données
                personnelles, consultez notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-ink hover:text-accent transition-colors underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <Link
              href="/"
              className="text-sm font-mono uppercase tracking-[0.15em] text-ink-muted hover:text-accent transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
