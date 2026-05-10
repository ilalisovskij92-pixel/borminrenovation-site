// Impressum — юридически обязательная страница для сайтов в Швейцарии (Art. 3 UWG)
// и EU (TMG § 5 если обслуживает DE). Минимальный набор данных владельца.

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal information and publisher details for elinatongieva.com.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-section bg-white">
        <div className="container-premium max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="text-display-lg mt-4 mb-12">Impressum</h1>

          <div className="space-y-10 text-ink-soft leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Responsible for content
              </h2>
              <p>
                Elina Tongieva
                <br />
                Life &amp; Business Coach
                <br />
                Zurich, Switzerland
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">Contact</h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@elinatongieva.com"
                  className="gold-underline"
                >
                  hello@elinatongieva.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                VAT / Business ID
              </h2>
              <p>
                To be added once the VAT registration (UID-Nr.) is issued. Until
                then no VAT is charged in accordance with Swiss MwSt
                regulations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Disclaimer
              </h2>
              <p className="mb-4">
                All content on this website is published in good faith and for
                general information purposes only. Coaching services are not a
                substitute for medical, psychological, legal, or financial
                advice. The author accepts no liability for any damages arising
                from the use of the information provided.
              </p>
              <p>
                External links are provided for convenience. Elina Tongieva
                assumes no responsibility for the content or availability of
                external websites.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">Copyright</h2>
              <p>
                All texts, images, and graphics on this website are protected by
                copyright. Any reproduction, distribution, or public
                availability — in whole or in part — requires prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Applicable law
              </h2>
              <p>
                Swiss substantive law applies exclusively. Place of jurisdiction
                is Zurich, Switzerland.
              </p>
            </section>

            <div className="pt-8 border-t border-line">
              <Link
                href="/"
                className="btn-pill btn-outline"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
