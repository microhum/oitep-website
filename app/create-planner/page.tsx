import ExperimentForm from "../components/ExperimentForm";

export const metadata = {
  title: "OITEP - Create Your Personal Salt Planner",
  description:
    "Get personalized salt reduction recommendations based on your current habits and health goals. Take control of your sodium intake with a customized plan.",
};

export default function ExperimentPage() {
  return (
    <main>
      <ExperimentForm />
    </main>
  );
}
