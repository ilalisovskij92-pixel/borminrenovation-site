// Datenschutz / Privacy notice — соответствует nDSG (Швейцария, 1 Sep 2023)
// и GDPR (EU) на уровне базовой прозрачности. Подробную версию юрист финализирует.

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Elina Tongieva collects, uses and protects your personal data in accordance with the Swiss nDSG and the EU GDPR.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-section bg-white">
        <div className="container-premium max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="text-display-lg mt-4 mb-6">Privacy notice</h1>
          <p className="text-ink-muted mb-12">
            Last updated: April 2026. This notice describes how Elina Tongieva
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;) processes personal data in
            accordance with the Swiss Federal Act on Data Protection (nDSG) and,
            where applicable, the EU General Data Protection Regulation (GDPR).
          </p>

          <div className="space-y-10 text-ink-soft leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                1. Data controller
              </h2>
              <p>
                Elina Tongieva, Zurich, Switzerland.
                <br />
                Contact:{" "}
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
                2. Data we collect
              </h2>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Contact form:</strong> name, email, country, and any
                  message you choose to share.
                </li>
                <li>
                  <strong>Email correspondence:</strong> content you send us
                  directly.
                </li>
                <li>
                  <strong>Technical data:</strong> IP address and minimal server
                  logs required to operate the website securely.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                3. Purposes and legal basis
              </h2>
              <p className="mb-3">
                We process your data only for the purposes below and on the
                following legal grounds:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Responding to enquiries</strong> — performance of
                  pre-contractual steps at your request (Art. 6(1)(b) GDPR;
                  Art. 31 nDSG).
                </li>
                <li>
                  <strong>Delivering coaching services</strong> — performance of
                  the contract.
                </li>
                <li>
                  <strong>Operating this website</strong> — our legitimate
                  interest in a secure, functional site.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                4. Retention
              </h2>
              <p>
                Contact enquiries are kept for up to 12 months from the last
                interaction. Records related to engaged clients are retained for
                10 years as required by Art. 958f of the Swiss Code of
                Obligations. Technical logs are rotated within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                5. Recipients &amp; processors
              </h2>
              <p className="mb-3">
                We work with carefully selected processors under appropriate
                contracts:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Hosting:</strong> Vercel Inc. (USA) — site delivery
                  via globally distributed edge network.
                </li>
                <li>
                  <strong>Email:</strong> Google Workspace — correspondence.
                </li>
                <li>
                  <strong>Scheduling:</strong> Cal.com (if used) — to manage
                  discovery calls.
                </li>
              </ul>
              <p className="mt-3">
                Transfers outside Switzerland/EEA are safeguarded by Standard
                Contractual Clauses or equivalent mechanisms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                6. Your rights
              </h2>
              <p className="mb-3">
                You have the right to access, correct, delete, restrict, or
                port your personal data, and to object to processing based on
                legitimate interests. You may also withdraw consent at any time
                without affecting the lawfulness of prior processing.
              </p>
              <p>
                To exercise your rights, email{" "}
                <a
                  href="mailto:hello@elinatongieva.com"
                  className="gold-underline"
                >
                  hello@elinatongieva.com
                </a>
                . You may also lodge a complaint with the Swiss Federal Data
                Protection and Information Commissioner (FDPIC) or, for EU
                residents, your local supervisory authority.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                7. Cookies &amp; analytics
              </h2>
              <p>
                This website does not use marketing cookies or tracking pixels
                by default. Only strictly necessary cookies are set to support
                core functionality. If privacy-friendly analytics are added in
                the future (e.g. Plausible), this notice will be updated
                accordingly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                8. Security
              </h2>
              <p>
                We apply appropriate technical and organisational measures —
                HTTPS everywhere, least-privilege access, encrypted storage —
                to protect your data against unauthorised access, loss or
                misuse.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                9. Changes
              </h2>
              <p>
                We may update this notice to reflect changes in our practice or
                applicable law. The current version is always available on this
                page.
              </p>
            </section>

            <div className="pt-8 border-t border-line">
              <Link href="/" className="btn-pill btn-outline">
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
