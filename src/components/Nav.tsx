"use client";

// Premium Nav — split menu (left/right) + brand mark center, transparent → bg/95 on scroll.
// Mobile burger with full-screen menu. Navy accent on hover.

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const leftLinks = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
];

const rightLinks = [
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-line py-4"
            : "bg-transparent py-6"
        }`}
        aria-label="Navigation principale"
      >
        <div className="container-premium flex items-center justify-between">
          {/* Left menu — desktop */}
          <ul className="hidden lg:flex items-center gap-10 flex-1">
            {leftLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.7rem] uppercase tracking-[0.15em] font-mono text-ink-muted hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered brand — official Bormin Rénovation logo */}
          <div className="lg:flex-1 lg:flex lg:justify-center">
            <Logo href="/" width={160} />
          </div>

          {/* Right menu + lang + CTA — desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            <ul className="flex items-center gap-8">
              {rightLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.7rem] uppercase tracking-[0.15em] font-mono text-ink-muted hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 items-center font-mono text-xs text-ink-muted border-l border-line pl-6">
              <span className="text-ink font-medium">FR</span>
              <span>·</span>
              <Link href="/en" className="hover:text-accent">EN</Link>
            </div>
            <Link
              href="#contact"
              className="btn-pill btn-primary text-[0.7rem] tracking-wider uppercase py-3 px-5"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-end gap-1.5 p-2 -mr-2"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-7"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : "w-5"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[5px]" : "w-7"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-bg transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8 px-6">
          {[...leftLinks, ...rightLinks].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl text-ink hover:text-accent transition-colors duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 150}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`btn-pill btn-primary mt-6 transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? `${5 * 60 + 150}ms` : "0ms" }}
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </>
  );
}
