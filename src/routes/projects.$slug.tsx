import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { Arrow, Card, CtaAnchor, CtaLink, Stat, Tag } from "@/components/primitives";
import { ProjectVisual } from "@/components/visuals";
import { pageMeta } from "@/lib/seo";
import { track } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable | Yash Modi" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      ...pageMeta({
        title: `${project.title} | Case Study — Yash Modi`,
        description: project.summary.slice(0, 155),
        path: `/projects/${params.slug}`,
        type: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            about: project.category,
            abstract: project.summary,
            author: { "@type": "Person", name: "Yash Modi" },
            keywords: project.tech.join(", "),
          }),
        },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <article>
      <header className="border-b border-border">
        <div className="shell py-14 md:py-20">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All work
          </Link>
          <p className="label-mono mt-8">{project.category}</p>
          <h1 className="display-1 mt-4 max-w-4xl text-balance">{project.title}</h1>
          {project.badge ? (
            <p className="mt-5 inline-block rounded-full bg-[color-mix(in_oklab,var(--warning)_12%,transparent)] px-3 py-1 text-xs font-medium text-warning">
              {project.badge}
            </p>
          ) : null}
          <p className="body-lg mt-6 max-w-3xl text-muted-foreground text-pretty">
            {project.problem}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.github ? (
              <CtaAnchor
                href={project.github}
                external
                variant="primary"
                onClick={() => track("github_click", { project: project.slug })}
              >
                View on GitHub <Arrow />
              </CtaAnchor>
            ) : null}
            {project.demo ? (
              <CtaAnchor
                href={project.demo}
                external
                variant="secondary"
                onClick={() => track("live_demo_click", { project: project.slug })}
              >
                Try Live Demo <Arrow />
              </CtaAnchor>
            ) : null}
            <CtaLink to="/contact" variant={project.github ? "secondary" : "primary"}>
              Let&apos;s Connect <Arrow />
            </CtaLink>
          </div>
        </div>
      </header>

      <section aria-label="Key figures" className="border-b border-border bg-surface">
        <div className="shell grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {project.highlights.map((h) => (
            <Stat key={h.label} value={h.value} label={h.label} />
          ))}
        </div>
      </section>

      <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <div className="min-w-0 space-y-12">
          <Reveal>
            <h2 className="display-3">Overview</h2>
            <p className="body-lg mt-4 text-muted-foreground text-pretty">{project.summary}</p>
          </Reveal>

          {project.sections.map((s) => (
            <Reveal key={s.heading}>
              <section>
                <h2 className="display-3 text-balance">{s.heading}</h2>
                <p className="body-lg mt-4 text-muted-foreground text-pretty">{s.body}</p>
                {s.list ? (
                  <ul className="mt-6 space-y-2.5">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                      >
                        <span aria-hidden="true" className="text-primary">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
          ))}
        </div>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Card>
            <h2 className="text-base font-semibold tracking-tight">Visual</h2>
            <div className="mt-6">
              <ProjectVisual kind={project.visual} />
            </div>
          </Card>
          <Card>
            <h2 className="text-base font-semibold tracking-tight">Technology stack</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>

      <nav aria-label="Next project" className="hairline bg-surface">
        <div className="shell flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="label-mono">Next project</p>
            <p className="mt-2 text-lg font-semibold tracking-tight">{next.title}</p>
          </div>
          <CtaLink to="/projects/$slug" params={{ slug: next.slug }} variant="secondary">
            Explore Case Study <Arrow />
          </CtaLink>
        </div>
      </nav>
    </article>
  );
}
