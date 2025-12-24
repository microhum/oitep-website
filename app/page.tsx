import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Awards from "./components/Awards";
import ProductPreview from "./components/ProductPreview";
import ProofSection from "./components/ProofSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <ProductPreview />
      <ProofSection />
      <ProblemStatement />
      <Footer />
    </main>
  );
}
