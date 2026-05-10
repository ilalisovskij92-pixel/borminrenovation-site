// Politique de confidentialité — conforme à la nLPD suisse (1er sept. 2023)
// et au RGPD (UE) au niveau de transparence de base. Version juridique
// finale à valider par un avocat avant lancement commercial.

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Bormin Rénovation collecte, utilise et protège vos données personnelles conformément à la nLPD suisse et au RGPD européen.",
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-section bg-white">
        <div className="container-premium max-w-3xl">
          <span className="eyebrow">Légal</span>
          <h1 className="text-display-lg mt-4 mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-ink-muted mb-12">
            Dernière mise à jour : mai 2026. Cette politique décrit comment
            Bormin Rénovation (« nous ») traite les données personnelles
            conformément à la Loi fédérale sur la protection des données
            (nLPD) et, le cas échéant, au Règlement général sur la protection
            des données (RGPD) de l&apos;Union européenne.
          </p>

          <div className="space-y-10 text-ink-soft leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                1. Responsable du traitement
              </h2>
              <p>
                Bormin Rénovation · Artem Bormin
                <br />
                Rue du Clos 8, 1800 Vevey, Suisse
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+41765314652"
                  className="text-ink hover:text-accent transition-colors"
                >
                  +41 76 531 46 52
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                2. Données collectées
              </h2>
              <p className="mb-3">Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-ink font-medium">
                    Données du formulaire de contact
                  </strong>{" "}
                  : nom, prénom, adresse e-mail, numéro de téléphone, type de
                  projet, message — fournis volontairement.
                </li>
                <li>
                  <strong className="text-ink font-medium">
                    Données techniques
                  </strong>{" "}
                  : adresse IP, type de navigateur, pages visitées — collectées
                  automatiquement par notre hébergeur (Vercel) à des fins de
                  sécurité et de performance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                3. Finalité du traitement
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Répondre à vos demandes de devis ou questions techniques
                </li>
                <li>Vous recontacter pour finaliser un projet de rénovation</li>
                <li>
                  Améliorer la sécurité et la performance du site (logs
                  techniques)
                </li>
              </ul>
              <p className="mt-3">
                Vos données ne sont jamais vendues, échangées ou louées à des
                tiers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                4. Base légale
              </h2>
              <p>
                Le traitement repose sur votre consentement explicite (envoi
                d&apos;une demande de devis) ainsi que sur l&apos;intérêt
                légitime de Bormin Rénovation à exécuter le service demandé.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                5. Durée de conservation
              </h2>
              <p>
                Les données du formulaire de contact sont conservées au maximum
                <strong className="text-ink font-medium"> 24 mois</strong>{" "}
                après le dernier échange. Les logs techniques sont conservés{" "}
                <strong className="text-ink font-medium">90 jours</strong>.
                Les documents comptables (devis, factures) sont conservés{" "}
                <strong className="text-ink font-medium">10 ans</strong>{" "}
                conformément aux obligations légales suisses.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                6. Sous-traitants et hébergement
              </h2>
              <p>
                Le site est hébergé par Vercel Inc. (USA) — leurs serveurs sont
                situés en Europe. Vercel agit en tant que sous-traitant et
                applique des mesures de sécurité conformes au RGPD.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                7. Cookies
              </h2>
              <p>
                Ce site utilise uniquement les cookies techniques strictement
                nécessaires à son fonctionnement. Aucun cookie de tracking
                publicitaire ou de profilage n&apos;est utilisé sans votre
                consentement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">8. Vos droits</h2>
              <p className="mb-3">
                Conformément à la nLPD et au RGPD, vous disposez des droits
                suivants :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-ink font-medium">Droit d&apos;accès</strong>{" "}
                  — savoir quelles données nous détenons à votre sujet
                </li>
                <li>
                  <strong className="text-ink font-medium">
                    Droit de rectification
                  </strong>{" "}
                  — corriger des données inexactes
                </li>
                <li>
                  <strong className="text-ink font-medium">
                    Droit d&apos;effacement
                  </strong>{" "}
                  — demander la suppression de vos données
                </li>
                <li>
                  <strong className="text-ink font-medium">
                    Droit d&apos;opposition
                  </strong>{" "}
                  — refuser le traitement
                </li>
                <li>
                  <strong className="text-ink font-medium">
                    Droit à la portabilité
                  </strong>{" "}
                  — recevoir vos données dans un format réutilisable
                </li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous au{" "}
                <a
                  href="tel:+41765314652"
                  className="text-ink hover:text-accent transition-colors"
                >
                  +41 76 531 46 52
                </a>{" "}
                ou via{" "}
                <a
                  href="https://wa.me/41765314652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
                . Nous répondons sous 30 jours.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                9. Réclamation
              </h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez déposer une plainte auprès du{" "}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/fr/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors underline"
                >
                  Préposé fédéral à la protection des données et à la
                  transparence (PFPDT)
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">
                10. Modifications
              </h2>
              <p>
                Cette politique peut être mise à jour. La version en vigueur est
                celle publiée sur cette page. Pour les questions juridiques,
                consultez nos{" "}
                <Link
                  href="/mentions-legales"
                  className="text-ink hover:text-accent transition-colors underline"
                >
                  mentions légales
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
