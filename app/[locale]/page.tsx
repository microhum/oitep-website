import HomePageContent from "../components/HomePageContent";
import { Locale } from "../translations";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;

  return <HomePageContent />;
}
