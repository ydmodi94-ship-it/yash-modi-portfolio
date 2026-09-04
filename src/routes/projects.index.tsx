import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/primitives";
import { FeaturedProject, PortfolioBriefCTA, ProjectCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    ...pageMeta({
      title: "Selected Work | Yash Modi — Data Science & AI/ML Projects",
      description:
        "Machine learning, statistical modelling and analytics projects by Yash Modi: banking churn risk intelligence with SHAP, Monte Carlo sports simulation, Lean Six Sigma defect analysis and NASA asteroid classification.",
      path: "/projects",
    }),
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <section className="border-b border-border">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Selected Work"
            title="A selection of data, AI, statistical and analytical systems I have designed and built."
            lead="Each project has a full case study covering the problem, the data, the modelling approach, validation, explainability and the decision it supports."
          />
        </div>
      </section>

      <div className="shell space-y-16 py-16 md:space-y-24 md:py-24">
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} index={i} />
        ))}

        <div>
          <p className="label-mono mb-6">Also built</p>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <PortfolioBriefCTA />
    </>
  );
}
