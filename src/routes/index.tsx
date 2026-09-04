import { createFileRoute } from "@tanstack/react-router";
import {
  AboutSection,
  ContactCTA,
  CurrentBuild,
  Hero,
  PortfolioBriefCTA,
  ProofMetrics,
  Recognition,
  SelectedWork,
  TechnicalToolkit,
  ThinkingFramework,
} from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "Yash Modi | Data Scientist & AI/ML Engineer",
      description:
        "Yash Modi is a Data Scientist and AI/ML Engineer working in machine learning, statistical analytics, explainable AI, generative AI and data analytics — building predictive systems that support real decisions.",
      path: "/",
      type: "profile",
    }),
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ProofMetrics />
      <SelectedWork />
      <ThinkingFramework />
      <AboutSection />
      <TechnicalToolkit />
      <Recognition />
      <CurrentBuild />
      <PortfolioBriefCTA />
      <ContactCTA />
    </>
  );
}
