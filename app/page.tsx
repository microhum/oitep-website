import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Awards from "./components/Awards";
import ProductPreview from "./components/ProductPreview";
import ProofSection from "./components/ProofSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <ProblemStatement />
      <div className="hidden md:block relative">
        <div className="absolute text-meadow-2 uppercase w-full text-center -bottom-25 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-medium">
          <div className="inline-flex gap-5">
            <div className="text-meadow-3 text-6xl">Bland Taste?</div>
            <Image
              src="/static/preview/Face_Ball.png"
              alt="Salty Face"
              width={100}
              height={100}
              className="h-18 w-auto filter drop-shadow-[1px_3px_1px_black]"
            />
          </div>
          <div>
            We Found the <span className="font-extrabold ">Solution</span>
          </div>
        </div>
      </div>
      <ProductPreview />

      <ProofSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
