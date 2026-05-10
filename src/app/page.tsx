import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Bormin Rénovation — homepage composition.
// Order: Hero → Services → About → Process → Contact → Footer + floating WhatsApp.
// Réalisations + Testimonials added later when Artem provides photos and reviews.

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
