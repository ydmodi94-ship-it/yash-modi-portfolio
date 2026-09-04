import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/primitives";
import {
  CertificationGroups,
  ContactCTA,
  PortfolioBriefCTA,
  TechnicalToolkit,
} from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => ({
    ...pageMeta({
      title: "Technical Toolkit | Yash Modi — Machine Learning & Analytics",
      description:
        "Machine learning, data engineering, statistics, generative AI, BI and deployment capabilities used by Yash Modi, each tied to the project where it was applied.",
      path: "/skills",
    }),
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Technical Toolkit"
            title="Capabilities, tied to where I have used them."
            lead="Grouped by what the tools do rather than displayed as a logo wall. Every group carries a line of evidence from real project work."
          />
        </div>
      </section>

      <TechnicalToolkit heading={false} />

      <section className="border-t border-border bg-surface">
        <div className="shell section-y">
          <SectionHeading
            eyebrow="Certifications"
            title="Structured learning, honestly labelled."
            lead="Programmes still underway are marked In Progress."
          />
          <div className="mt-12">
            <CertificationGroups />
          </div>
        </div>
      </section>

      <PortfolioBriefCTA />
      <ContactCTA />
    </>
  );
}
