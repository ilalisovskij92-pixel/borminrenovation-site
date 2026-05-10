import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import About from "@/components/About";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Bormin Rénovation — homepage composition.
// Order: Hero → Services → Realisations → About → Process → Reviews → Contact.
// Realisations is currently a placeholder grid (waiting for Artem's project
// photos). Reviews funnels existing clients to leave a Google review.

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
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
