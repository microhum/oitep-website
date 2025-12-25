import ExperimentForm from "../components/ExperimentForm";

export const metadata = {
  title: "OITEP - Join Our Experiment",
  description:
    "Participate in our groundbreaking study on odor-induced flavor enhancement for sodium-restricted diets.",
};

export default function ExperimentPage() {
  return (
    <main>
      <ExperimentForm />
    </main>
  );
}
