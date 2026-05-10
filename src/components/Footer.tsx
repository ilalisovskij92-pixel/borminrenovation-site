// Footer — dark anthracite block. Bormin brand + address (matches GBP) + social.

import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bg pt-24 pb-12">
      <div className="container-premium">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-bg/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Logo href="/" width={200} inverted />
            </div>
            <p className="text-bg/60 max-w-sm leading-relaxed text-sm mb-6">
              Construction & rénovation tous corps de métier en Suisse romande.
              17 ans d&apos;expérience au service de votre projet.
            </p>
            <Link href="#contact" className="btn-pill btn-primary bg-bg text-ink border-bg hover:bg-accent hover:border-accent hover:text-bg">
              Demander un devis →
            </Link>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-7">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg/50 mb-6">
              Navigate
            </div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-bg/80 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg/50 mb-6">
              Contact
            </div>
            <a
              href="tel:+41765314652"
              className="block text-lg font-medium hover:text-accent transition-colors mb-3"
            >
              +41 76 531 46 52
            </a>
            <p className="text-bg/60 text-sm mb-2">
              Rue du Clos 8
              <br />
              1800 Vevey, Suisse
            </p>
            <a
              href="https://g.page/r/CV-nXy7PSi1UEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-bg/60 hover:text-accent transition-colors block mt-4"
            >
              Avis Google · Laisser une note ★
            </a>
            <a
              href="https://facebook.com/borminrenovation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-bg/60 hover:text-accent transition-colors block mt-2"
            >
              Facebook · borminrenovation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg/40">
          <div>© {year} Bormin Rénovation · Indépendant · Vevey, Suisse</div>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
