import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import {
  achievements,
  certifications,
  currentBuild,
  education,
  profile,
  projects,
  proofMetrics,
  thinkingFramework,
  toolkit,
  type Project,
} from "@/data/portfolio";
import { CountUp, Reveal } from "@/components/motion";
import { Arrow, Card, CtaAnchor, CtaLink, SectionHeading, Stat, Tag } from "@/components/primitives";
import { HeroVisual, ProjectVisual } from "@/components/visuals";
import { mailto, RESUME_URL, track } from "@/lib/site";

/* ------------------------------- Hero ------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <p className="label-mono">{profile.shortTitle}</p>
          <h1 className="display-1 mt-6 text-balance">
            I build intelligent systems that turn data into decisions.
          </h1>
          <p className="body-lg mt-7 max-w-xl text-muted-foreground text-pretty">
            I work across machine learning, statistical analytics and predictive
            modelling — from automated ETL and feature engineering through model
            benchmarking, to SHAP-based explainability, Monte Carlo simulation and
            generative AI layered into applications people can actually use.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{profile.disciplines}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink
              to="/projects"
              variant="primary"
              onClick={() => track("hero_view_work_click")}
            >
              View My Work <Arrow />
            </CtaLink>
            <CtaLink
              to="/portfolio-brief"
              variant="secondary"
              onClick={() => track("portfolio_brief_click")}
            >
              Get My Portfolio Brief <Arrow />
            </CtaLink>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Recruiter?{" "}
            <Link
              to="/portfolio-brief"
              className="font-medium text-primary underline underline-offset-4"
              onClick={() => track("portfolio_brief_click", { source: "recruiter_microcopy" })}
            >
              Get the 2-minute overview →
            </Link>
          </p>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Proof metrics ---------------------------- */

export function ProofMetrics() {
  return (
    <section aria-label="Proof metrics" className="border-b border-border bg-surface">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-9 py-12 md:grid-cols-3 md:py-14 lg:grid-cols-6">
        {proofMetrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 60}>
            <div className="min-w-0">
              <div className="font-mono text-3xl font-semibold tracking-tight text-foreground md:text-[2.5rem]">
                <CountUp value={m.value} display={"display" in m ? m.display : undefined} />
                {"suffix" in m && m.suffix ? (
                  <span className="text-primary">{m.suffix}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">{m.label}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.context}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Projects ------------------------------ */

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article" className="hairline pt-12 md:pt-16">
      <div
        className={`grid gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label-mono">
              {String(index + 1).padStart(2, "0")} — Featured
            </span>
            {project.badge ? (
              <span className="rounded-full bg-[color-mix(in_oklab,var(--warning)_12%,transparent)] px-3 py-1 text-xs font-medium text-warning">
                {project.badge}
              </span>
            ) : null}
          </div>

          <h3 className="display-3 mt-4 text-balance">{project.title}</h3>
          <p className="mt-2 text-sm text-data">{project.category}</p>
          <p className="body-lg mt-5 text-muted-foreground text-pretty">{project.summary}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {project.highlights.map((h) => (
              <div key={h.label} className="min-w-0">
                <dt className="sr-only">{h.label}</dt>
                <dd>
                  <Stat value={h.value} label={h.label} />
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink
              to="/projects/$slug"
              params={{ slug: project.slug }}
              variant="primary"
              onClick={() => track("project_case_study_open", { project: project.slug })}
            >
              Explore Case Study <Arrow />
            </CtaLink>
            {project.github ? (
              <CtaAnchor
                href={project.github}
                external
                variant="secondary"
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
          </div>
        </div>

        <Card className="self-start bg-surface">
          <ProjectVisual kind={project.visual} />
        </Card>
      </div>
    </Reveal>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card interactive className="flex h-full flex-col">
      <p className="label-mono">{project.category}</p>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-balance">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          onClick={() => track("project_case_study_open", { project: project.slug })}
        >
          Explore Case Study <Arrow />
        </Link>
      </div>
    </Card>
  );
}

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="A selection of data, AI, statistical and analytical systems I have designed and built."
        />

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} index={i} />
          ))}
        </div>

        {others.length ? (
          <div className="mt-20 md:mt-28">
            <p className="label-mono mb-6">Also built</p>
            <div className="grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <Reveal key={p.slug}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* --------------------------- How I think --------------------------- */

export function ThinkingFramework() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="shell section-y">
        <SectionHeading
          eyebrow="How I Think"
          title="From Problem to Decision"
          lead="A consistent path from an unclear business question to an explained, deployed output someone can act on."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {thinkingFramework.map((s, i) => (
            <li key={s.step} className="bg-surface p-6 md:p-7">
              <Reveal delay={i * 40}>
                <span className="font-mono text-xs text-primary">{s.step}</span>
                <h3 className="mt-3 text-base font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------- About ------------------------------- */

const journey = [
  "M.Sc. Physics",
  "PG Diploma in Data Science",
  "Machine Learning",
  "Explainable AI / Generative AI",
  "Analytics Applications",
  "Deployment",
];

export function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="about" className={compact ? "" : "section-y"}>
      <div className="shell grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="About"
            title="A quantitative foundation in Physics. A practical focus in Data Science."
          />
          <div className="mt-7 space-y-5 text-muted-foreground body-lg">
            <p>
              I trained as a physicist — an M.Sc. in Spectroscopy built on statistical
              analysis, quantitative reasoning and the interpretation of experimental data.
              That work is where I learned to treat measurement error, uncertainty and
              evidence as first-class parts of a conclusion rather than footnotes.
            </p>
            <p>
              I moved into Data Science through a Post Graduate Diploma, where I finished
              first in class, and applied the same discipline to commercial problems:
              retail banking churn risk, manufacturing defect reduction, statistical sports
              simulation and open-data classification.
            </p>
            <p>
              What I care about now is the last mile — the point where a model stops being
              a score and becomes an explained, segmented, actionable recommendation
              someone is willing to sign off on.
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <ol className="relative space-y-4 border-l border-border pl-6">
            {journey.map((j, i) => (
              <li key={j} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-2 h-2 w-2 rounded-full"
                  style={{
                    background: i === journey.length - 1 ? "var(--primary)" : "var(--data)",
                  }}
                />
                <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium">
                  {j}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Education ----------------------------- */

export function EducationTimeline() {
  return (
    <div className="space-y-6">
      {education.map((e) => (
        <Reveal key={e.degree}>
          <Card>
            <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-8">
              <p className="label-mono md:pt-1">{e.years}</p>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                <p className="mt-3 text-sm font-medium text-primary">{e.detail}</p>
                {"note" in e && e.note ? (
                  <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
                ) : null}
                {e.coursework.length ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <li key={c}>
                        <Tag>{c}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------ Toolkit ------------------------------ */

export function TechnicalToolkit({ heading = true }: { heading?: boolean }) {
  return (
    <section id="skills" className="section-y">
      <div className="shell">
        {heading ? (
          <SectionHeading
            eyebrow="Technical Toolkit"
            title="Capabilities, tied to where I have used them."
            lead="Grouped by what the tools do rather than displayed as a logo wall."
          />
        ) : null}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group, i) => (
            <Reveal key={group.category} delay={i * 40}>
              <Card className="h-full">
                <h3 className="text-base font-semibold tracking-tight">{group.category}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-4 text-xs text-data">
                  {group.evidence}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Achievements ---------------------------- */

export function Recognition() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="shell section-y">
        <SectionHeading eyebrow="Recognition" title="Evidence, awards and applied outcomes." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {achievements.map((a, i) => (
            <div key={a.headline} className="bg-surface p-6 md:p-8">
              <Reveal delay={i * 40}>
                <h3 className="text-lg font-semibold tracking-tight text-balance">
                  {a.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationGroups() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {certifications.map((group) => (
        <Card key={group.group} className="h-full">
          <h3 className="text-base font-semibold tracking-tight">{group.group}</h3>
          <ul className="mt-5 space-y-4">
            {group.items.map((c) => (
              <li key={c.name}>
                <p className="text-sm font-medium leading-snug text-foreground">{c.name}</p>
                <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{c.issuer}</span>
                  {c.inProgress ? (
                    <span className="rounded-full border border-warning/40 px-2 py-0.5 text-warning">
                      In Progress
                    </span>
                  ) : (
                    <span className="rounded-full border border-success/40 px-2 py-0.5 text-success">
                      Completed
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}

/* --------------------------- Currently building --------------------------- */

export function CurrentBuild() {
  return (
    <section className="section-y">
      <div className="shell">
        <Reveal>
          <Card className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <p className="label-mono">Currently Building</p>
              <h2 className="display-3 mt-4 text-balance">{currentBuild.title}</h2>
              <p className="body-lg mt-4 max-w-2xl text-muted-foreground text-pretty">
                {currentBuild.description}
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-warning"
                />
                <span className="font-mono text-xs tracking-wider text-warning">
                  {currentBuild.status.toUpperCase()}
                </span>
              </div>
              <div
                aria-hidden="true"
                className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
              >
                <div className="h-full w-2/5 rounded-full bg-warning/60" />
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- CTAs ------------------------------- */

export function PortfolioBriefCTA() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="shell grid gap-8 py-16 md:py-24 lg:grid-cols-[1.2fr_auto] lg:items-end">
        <div className="min-w-0">
          <p className="label-mono">Portfolio Brief</p>
          <h2 className="display-2 mt-4 max-w-2xl text-balance">
            Looking for the fastest way to review my work?
          </h2>
          <p className="body-lg mt-5 max-w-xl text-muted-foreground">
            A three-page executive overview: positioning, proof metrics, flagship work,
            how I approach problems, toolkit, education and recognition. Readable in the
            browser, printable to PDF, no email required.
          </p>
        </div>
        <CtaLink
          to="/portfolio-brief"
          variant="primary"
          onClick={() => track("portfolio_brief_click", { source: "section" })}
        >
          Get My Portfolio Brief <Arrow />
        </CtaLink>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="section-y">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="label-mono">Contact</p>
          <h2 className="display-1 mt-5 text-balance">Let&apos;s build something intelligent.</h2>
          <p className="body-lg mt-6 text-muted-foreground text-pretty">
            I am open to Data Science, AI/ML and analytics roles where the work involves
            real modelling, intelligent data products and business-oriented analytical
            problems. If there is a fit, I would be glad to talk.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaAnchor
              href={mailto}
              variant="primary"
              onClick={() => track("contact_click", { source: "final_cta" })}
            >
              Let&apos;s Connect <Arrow />
            </CtaAnchor>
            <CtaAnchor
              href={profile.linkedin}
              external
              variant="secondary"
              onClick={() => track("linkedin_click")}
            >
              View LinkedIn <Arrow />
            </CtaAnchor>
            <CtaAnchor
              href={profile.github}
              external
              variant="secondary"
              onClick={() => track("github_click")}
            >
              View on GitHub <Arrow />
            </CtaAnchor>
            {RESUME_URL ? (
              <CtaAnchor
                href={RESUME_URL}
                download
                variant="quiet"
                onClick={() => track("resume_download")}
              >
                Download Resume <Arrow />
              </CtaAnchor>
            ) : null}
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-sm transition-colors hover:border-primary/30"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0 text-primary" />
                <span className="min-w-0 truncate">{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-sm transition-colors hover:border-primary/30"
              >
                <Linkedin size={16} aria-hidden="true" className="shrink-0 text-primary" />
                <span className="min-w-0 truncate">LinkedIn</span>
                <ArrowUpRight size={14} aria-hidden="true" className="ml-auto shrink-0" />
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-sm transition-colors hover:border-primary/30"
              >
                <Github size={16} aria-hidden="true" className="shrink-0 text-primary" />
                <span className="min-w-0 truncate">GitHub</span>
                <ArrowUpRight size={14} aria-hidden="true" className="ml-auto shrink-0" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
