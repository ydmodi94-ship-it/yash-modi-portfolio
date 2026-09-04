import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/primitives";
import {
  AboutSection,
  CertificationGroups,
  ContactCTA,
  EducationTimeline,
  Recognition,
  ThinkingFramework,
} from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About Yash Modi | From Physics to Data Science",
      description:
        "A quantitative foundation in Physics and a practical focus in Data Science: education, the analytical framework behind the work, recognition and certifications.",
      path: "/about",
    }),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="border-b border-border py-16 md:py-24">
        <AboutSection compact />
      </div>

      <section className="section-y">
        <div className="shell">
          <SectionHeading eyebrow="Education" title="Academic foundation." />
          <div className="mt-12">
            <EducationTimeline />
          </div>
        </div>
      </section>

      <ThinkingFramework />
      <Recognition />

      <section className="section-y">
        <div className="shell">
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

      <ContactCTA />
    </>
  );
}
