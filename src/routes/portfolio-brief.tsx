import { createFileRoute } from "@tanstack/react-router";
import {
  achievements,
  education,
  profile,
  projects,
  proofMetrics,
  thinkingFramework,
  toolkit,
} from "@/data/portfolio";
import { Arrow, CtaAnchor, CtaLink } from "@/components/primitives";
import { pageMeta } from "@/lib/seo";
import { mailto, RESUME_URL, track } from "@/lib/site";

export const Route = createFileRoute("/portfolio-brief")({
  head: () => ({
    ...pageMeta({
      title: "Portfolio Brief | Yash Modi — Data Scientist & AI/ML Engineer",
      description:
        "A three-page executive overview of Yash Modi: positioning, proof metrics, flagship machine learning and analytics work, approach, toolkit, education and recognition.",
      path: "/portfolio-brief",
      type: "article",
    }),
  }),
  component: PortfolioBrief,
});

function Page({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <section
      className={`mx-auto w-full max-w-3xl rounded-xl border border-border bg-surface p-7 md:p-12 ${
        last ? "" : "print-page"
      }`}
    >
      {children}
    </section>
  );
}

function PortfolioBrief() {
  const flagship = projects.filter((p) => p.featured);

  return (
    <div className="section-y">
      <div className="shell">
        <div className="no-print mx-auto mb-10 flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="label-mono">Portfolio Brief</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A two-minute overview. No email required.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                track("portfolio_brief_download");
                window.print();
              }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Print / Save as PDF <Arrow />
            </button>
            {RESUME_URL ? (
              <CtaAnchor href={RESUME_URL} download variant="secondary">
                Download Resume <Arrow />
              </CtaAnchor>
            ) : null}
          </div>
        </div>

        <div className="space-y-10">
          {/* PAGE 1 */}
          <Page>
            <p className="label-mono">Portfolio Brief · Page 1 of 3</p>
            <h1 className="display-2 mt-5">{profile.name}</h1>
            <p className="mt-2 text-base text-data">{profile.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>

            <p className="body-lg mt-8 font-medium text-foreground text-pretty">
              {profile.positioning}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              An early-career Data Scientist and AI/ML Engineer with a quantitative
              foundation in Physics. I work end to end: automated ETL and feature
              engineering, benchmarking across model families, evaluation chosen for the
              cost of error, SHAP-based explainability, Monte Carlo simulation, and a
              generative AI layer that turns model output into recommended action.
            </p>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Key capabilities
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {toolkit.map((g) => (
                <li key={g.category} className="text-sm">
                  <span className="font-medium">{g.category}</span>
                  <span className="text-muted-foreground"> — {g.evidence}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Proof metrics
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {proofMetrics.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-2xl font-semibold">
                    {m.value == null
                      ? ("display" in m ? m.display : "")
                      : m.value.toLocaleString("en-US")}
                    {"suffix" in m && m.suffix ? m.suffix : ""}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</dd>
                </div>
              ))}
            </dl>
          </Page>

          {/* PAGE 2 */}
          <Page>
            <p className="label-mono">Portfolio Brief · Page 2 of 3</p>
            <h2 className="display-3 mt-5">Flagship work</h2>
            <div className="mt-8 space-y-8">
              {flagship.map((p, i) => (
                <article key={p.slug} className="border-t border-border pt-6">
                  <p className="label-mono">
                    {String(i + 1).padStart(2, "0")} · {p.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h.label} className="text-xs text-muted-foreground">
                        <span className="font-mono text-sm text-foreground">{h.value}</span>{" "}
                        {h.label}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground">{p.tech.join(" · ")}</p>
                  <CtaLink
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    variant="link"
                    className="no-print mt-4 text-sm"
                  >
                    Explore Case Study <Arrow />
                  </CtaLink>
                </article>
              ))}
            </div>
          </Page>

          {/* PAGE 3 */}
          <Page last>
            <p className="label-mono">Portfolio Brief · Page 3 of 3</p>

            <h2 className="display-3 mt-5">How I think</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {thinkingFramework.map((s) => (
                <li key={s.step} className="text-sm">
                  <span className="font-mono text-xs text-primary">{s.step}</span>{" "}
                  <span className="font-medium">{s.title}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Technical toolkit
            </h2>
            <div className="mt-4 space-y-3">
              {toolkit.map((g) => (
                <p key={g.category} className="text-sm">
                  <span className="font-medium">{g.category}:</span>{" "}
                  <span className="text-muted-foreground">{g.items.join(", ")}</span>
                </p>
              ))}
            </div>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Education
            </h2>
            <div className="mt-4 space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="text-sm font-medium">
                    {e.degree} <span className="text-muted-foreground">· {e.years}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {e.institution} — {e.detail}
                    {"note" in e && e.note ? ` (${e.note})` : ""}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Recognition
            </h2>
            <ul className="mt-4 space-y-2">
              {achievements.map((a) => (
                <li key={a.headline} className="text-sm">
                  <span className="font-medium">{a.headline}</span>
                  <span className="text-muted-foreground"> — {a.body}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>
                <a className="hover:text-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>{profile.phone}</li>
              <li className="break-all">
                <a
                  className="hover:text-primary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.linkedin}
                </a>
              </li>
              <li className="break-all">
                <a
                  className="hover:text-primary"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.github}
                </a>
              </li>
            </ul>

            <div className="no-print mt-10 flex flex-wrap gap-3">
              <CtaAnchor href={mailto} variant="primary" onClick={() => track("contact_click")}>
                Let&apos;s Connect <Arrow />
              </CtaAnchor>
              <CtaLink to="/projects" variant="secondary">
                View My Work <Arrow />
              </CtaLink>
            </div>
          </Page>
        </div>
      </div>
    </div>
  );
}
