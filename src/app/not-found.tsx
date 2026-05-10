// 404 — premium not-found page in French.

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[70vh] flex items-center justify-center pt-40 pb-section bg-gray-100">
        <div className="container-premium max-w-2xl text-center">
          <div className="eyebrow eyebrow-bare font-mono text-ink-muted">
            Erreur 404
          </div>
          <h1 className="text-[clamp(4rem,12vw,9rem)] leading-[1] text-ink mt-6 font-light">
            Page{" "}
            <span className="italic-accent text-accent">introuvable.</span>
          </h1>
          <p className="text-ink-muted text-lg mt-8 mb-12 max-w-md mx-auto leading-relaxed">
            La page que vous cherchez n&apos;existe pas — ou n&apos;a jamais
            existé. Revenons à l&apos;essentiel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-pill btn-primary">
              Retour à l&apos;accueil →
            </Link>
            <Link href="/#contact" className="btn-pill btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
