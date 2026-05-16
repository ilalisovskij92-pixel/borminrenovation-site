// FAQ — Frequently Asked Questions for SEO + visitor confidence.
// Each question targets a real long-tail search query (rénovation Vevey,
// devis travaux Vaud, garantie travaux Suisse, etc).
// FAQPage Schema.org markup ranks for "People Also Ask" rich snippets in Google.

import AnimateOnScroll from "./AnimateOnScroll";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Combien coûte une rénovation d'appartement dans le canton de Vaud ?",
    a: "Le prix dépend de la surface, de l'état initial du logement et des matériaux choisis. À titre indicatif, une rénovation de salle de bain commence autour de 12'000 CHF, une cuisine sur mesure autour de 18'000 CHF, et une rénovation complète d'un appartement se situe entre 1'500 et 3'000 CHF/m². Je remets un devis détaillé, ligne par ligne, après une visite gratuite à votre domicile.",
  },
  {
    q: "Combien de temps prend une rénovation de salle de bain ou de cuisine ?",
    a: "Une rénovation complète de salle de bain prend en général entre 2 et 4 semaines (démolition, plomberie, électricité, carrelage, finitions). Pour une cuisine, compter 3 à 5 semaines. Les délais sont fixés à l'avance dans le contrat et respectés — c'est l'engagement principal.",
  },
  {
    q: "Travaillez-vous uniquement à Vevey ou dans toute la Suisse romande ?",
    a: "Les chantiers sont basés principalement entre Vevey, Montreux, Lausanne et Morges — l'ensemble du canton de Vaud. Les chantiers plus éloignés en Suisse romande (Fribourg, Genève, Valais) sont possibles sur devis, avec frais de déplacement transparents annoncés à l'avance.",
  },
  {
    q: "Quelle garantie offrez-vous sur les travaux ?",
    a: "Garantie 5 ans sur le gros œuvre (maçonnerie, plomberie, électricité) et 2 ans sur les finitions (peinture, carrelage, menuiserie), conformément à l'article 367 du Code des obligations suisse. La garantie est explicitement mentionnée dans le contrat avant le début des travaux.",
  },
  {
    q: "Comment se passe le devis ? Est-il vraiment gratuit ?",
    a: "Oui — le devis est entièrement gratuit et sans engagement. Après votre demande, je viens visiter le lieu pour comprendre le projet, prendre les mesures et discuter de vos attentes. Vous recevez ensuite un devis détaillé sous 48h, avec un prix fixé à l'avance — pas de surprise en cours de chantier.",
  },
  {
    q: "Faut-il un permis pour rénover une cuisine ou une salle de bain ?",
    a: "Pour une rénovation à l'identique (mêmes emplacements et installations), aucun permis n'est nécessaire. Si vous modifiez la structure du logement (murs porteurs, ouvertures, déplacement de pièces humides), une autorisation communale peut être requise. Je vous accompagne dans les démarches selon votre commune — Vevey, Lausanne, Morges, Montreux et autres.",
  },
  {
    q: "Travaillez-vous en urgence pour des dépannages ?",
    a: "Oui — pour les urgences de plomberie ou d'électricité dans la région Vevey-Montreux-Lausanne, contactez-moi directement par WhatsApp ou téléphone au +41 76 531 46 52. Intervention sous 24-48h selon disponibilité.",
  },
  {
    q: "Pourquoi choisir un artisan indépendant plutôt qu'une grande entreprise ?",
    a: "Avec un indépendant vous parlez à une seule personne du devis à la livraison — pas de chef de chantier différent chaque semaine, pas d'intermédiaires. Communication directe, décisions rapides, et le même artisan responsable du début à la fin. C'est ce qui rend les délais réalistes et le résultat conforme à ce qui a été promis.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-section bg-cream border-t border-line"
      aria-labelledby="faq-heading"
    >
      <div className="container-premium">
        <AnimateOnScroll className="grid lg:grid-cols-12 gap-12 lg:items-end mb-20 pb-8 border-b border-line">
          <div className="lg:col-span-3">
            <span className="eyebrow">(06) — Questions</span>
          </div>
          <h2
            id="faq-heading"
            className="lg:col-span-9 text-display-md font-light"
          >
            Les réponses,{" "}
            <span className="italic-accent text-accent">
              avant les questions.
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          {faqs.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 40}>
              <details className="group border-t border-line last:border-b py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-lg md:text-xl font-light tracking-tight text-ink group-hover:text-accent group-open:text-accent transition-colors">
                    {item.q}
                  </h3>
                  <span
                    className="flex-shrink-0 w-8 h-8 border border-line rounded-full flex items-center justify-center text-ink-muted group-open:rotate-45 group-open:border-accent group-open:text-accent transition-all"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-5 text-ink-soft leading-relaxed max-w-3xl pr-12">
                  {item.a}
                </p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Schema.org FAQPage — ranks for "People Also Ask" rich snippets in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
