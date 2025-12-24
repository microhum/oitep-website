import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <ProblemStatement />
    </main>
  );
}
