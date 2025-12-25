import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Awards from "./components/Awards";
import ProductPreview from "./components/ProductPreview";
import ProofSection from "./components/ProofSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <ProblemStatement />
      <ProductPreview />
      <ProofSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
