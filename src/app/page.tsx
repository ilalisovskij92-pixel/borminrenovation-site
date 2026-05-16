import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import About from "@/components/About";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Bormin Rénovation — homepage composition.
// Order: Hero → Services (01) → Réalisations (02) → À propos (03) →
//        Méthode (04) → Témoignages (05) → FAQ (06) → Contact (07).
// FAQ uses Schema.org FAQPage for "People Also Ask" rich snippets in Google.

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Realisations />
        <About />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
