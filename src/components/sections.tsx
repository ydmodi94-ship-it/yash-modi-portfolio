import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
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
  dashboards,
  type Dashboard,
  type Project,
} from "@/data/portfolio";
import { CountUp, Reveal } from "@/components/motion";
import {
  Arrow,
  Card,
  CtaAnchor,
  CtaLink,
  SectionHeading,
  Stat,
  Tag,
} from "@/components/primitives";
import { ProjectVisual } from "@/components/visuals";
import { mailto, RESUME_URL, track } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ------------------------------- Hero ------------------------------- */

function HeroPortrait() {
  return (
    <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
        <img
          src="/Professional.jpeg"
          alt="Yash Modi in a navy suit for his professional portfolio."
          className="aspect-[4/5] w-full object-cover object-[center_20%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={800}
          height={1000}
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="font-mono">{profile.location}</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-data">
          <span className="h-1 w-1 rounded-full bg-data" />
          Available
        </span>
      </figcaption>
    </figure>
  );
}

function AvailabilityBadge() {
  const [open, setOpen] = useState(false);

  const roles = [
    "Data Scientist",
    "AI / ML Engineer",
    "Machine Learning Engineer",
    "Data Analyst (Advanced)",
    "Applied AI Engineer",
    "NLP / Generative AI Engineer",
  ];

  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="availability-panel"
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-success/40 hover:bg-[color-mix(in_oklab,var(--success)_6%,var(--surface))] hover:text-foreground"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
        </span>
        <span>Open to Data Science &amp; AI/ML roles</span>
        <ChevronDown
          size={12}
          className={cn("transition-transform duration-200", open && "rotate-180 text-success")}
          aria-hidden="true"
        />
      </button>

      <div
        id="availability-panel"
        hidden={!open}
        className="hairline mt-3 overflow-hidden rounded-2xl border border-success/15 bg-[color-mix(in_oklab,var(--success)_5%,var(--background))] shadow-[var(--shadow-card)] backdrop-blur-sm"
      >
        <div className="grid gap-5 p-5 sm:grid-cols-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-success">
              <Briefcase size={12} />
              <span>Roles of Interest</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {roles.slice(0, 3).map((r) => (
                <li key={r} className="text-sm text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
              <li className="text-xs text-muted-foreground pl-3">+ {roles.length - 3} more</li>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-success">
              <MapPin size={12} />
              <span>Location</span>
            </div>
            <p className="mt-3 text-sm text-foreground">Bharuch, Gujarat, India</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Open to Remote · Hybrid · Relocation
            </p>
          </div>

          <div className="min-w-0 sm:col-span-1 col-span-1">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-success">
              <Clock size={12} />
              <span>Availability</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">Immediate Joining</p>
            <div className="mt-4">
              <CtaAnchor
                href={mailto}
                variant="primary"
                className="w-full justify-center !py-2 text-xs"
                onClick={() => track("contact_click", { source: "availability_badge" })}
              >
                <Mail size={12} />
                Reach Out Now
              </CtaAnchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="grid-motif pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(120%_80%_at_70%_0%,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_65%)] blur-2xl"
      />
      <div className="shell relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <AvailabilityBadge />

          <p className="label-mono mt-5">{profile.shortTitle}</p>

          <h1 className="display-1 mt-5 text-balance leading-[1.08]">
            I build intelligent systems that turn data into{" "}
            <span className="bg-[linear-gradient(180deg,transparent_68%,color-mix(in_oklab,var(--primary)_22%,transparent)_68%)]">
              decisions
            </span>
            .
          </h1>

          <p className="body-lg mt-7 max-w-xl text-muted-foreground text-pretty">
            I work across machine learning, statistical analytics and predictive modelling — from
            automated ETL and feature engineering through model benchmarking, to SHAP-based
            explainability, Monte Carlo simulation and generative AI layered into applications
            people can actually use.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{profile.disciplines}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink to="/projects" variant="primary" onClick={() => track("hero_view_work_click")}>
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

        {/* Portrait: below CTAs on mobile, right column on desktop */}
        <div className="min-w-0 order-last sm:order-last lg:order-last">
          <HeroPortrait />
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
            <span className="label-mono">{String(index + 1).padStart(2, "0")} — Featured</span>
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
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-balance">{project.title}</h3>
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

/* -------------------------- Dashboards -------------------------- */

export function DashboardsSection() {
  if (dashboards.length === 0) return null;

  return (
    <section id="dashboards" className="section-y bg-surface border-t border-border">
      <div className="shell">
        <SectionHeading
          eyebrow="Dashboards & BI"
          title="Dashboards & Business Intelligence"
          lead="Turning raw data into clear insights through data visualization, interactive reporting, and analytical storytelling."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {dashboards.map((d) => (
            <Reveal key={d.id} className="h-full">
              <DashboardCard dashboard={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardCard({ dashboard }: { dashboard: Dashboard }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-background">
        <img
          src={dashboard.image}
          alt={`Power BI ${dashboard.title} preview`}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="label-mono">{dashboard.category}</p>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-balance">
          {dashboard.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {dashboard.description}
        </p>

        {dashboard.insights && dashboard.insights.length > 0 && (
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            {dashboard.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {dashboard.tools.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7 flex flex-wrap gap-3">
          {dashboard.dashboardUrl && (
            <CtaAnchor
              href={dashboard.dashboardUrl}
              external
              variant="primary"
              onClick={() => track("live_demo_click", { project: dashboard.id })}
            >
              View Dashboard <Arrow />
            </CtaAnchor>
          )}
          {dashboard.caseStudyUrl && (
            <CtaAnchor
              href={dashboard.caseStudyUrl}
              external={dashboard.caseStudyUrl.startsWith("http")}
              variant="secondary"
              onClick={() => track("project_case_study_open", { project: dashboard.id })}
            >
              Read Case Study <Arrow />
            </CtaAnchor>
          )}
          {!dashboard.dashboardUrl && !dashboard.caseStudyUrl && (
            <span className="inline-flex items-center rounded-md bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground border border-border">
              Dashboard Preview
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

/* --------------------------- How I think --------------------------- */

export function ThinkingFramework() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="shell section-y grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-start">
        <div className="min-w-0 order-2 lg:order-1">
          <SectionHeading
            eyebrow="How I Work"
            title="Curious by nature. Analytical by discipline."
            lead="A consistent approach from an unclear business question to an explained, deployed output someone can act on."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {thinkingFramework.slice(0, 6).map((s, i) => (
              <li key={s.step} className="bg-surface p-5 md:p-6">
                <Reveal delay={i * 40}>
                  <span className="font-mono text-xs text-primary">{s.step}</span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <ol className="mt-px grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {thinkingFramework.slice(6).map((s, i) => (
              <li key={s.step} className="bg-surface p-5 md:p-6">
                <Reveal delay={i * 40}>
                  <span className="font-mono text-xs text-primary">{s.step}</span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Office visual: below content on mobile, right column on desktop */}
        <div className="min-w-0 order-1 lg:order-2 lg:sticky lg:top-24">
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]">
              <img
                src="/Office.jpeg"
                alt="Yash Modi in a professional work environment."
                className="aspect-[4/5] w-full object-cover object-[center_30%]"
                loading="lazy"
                decoding="async"
                width={900}
                height={1125}
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="font-mono">Work · Context</span>
              <span className="font-mono text-primary">Focused · Deliberate</span>
            </figcaption>
          </figure>
        </div>
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
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-start">
        <div className="min-w-0 order-2 lg:order-1">
          <SectionHeading
            eyebrow="About Yash"
            title="A quantitative foundation in Physics. A practical focus in Data Science."
          />
          <div className="mt-7 space-y-5 text-muted-foreground body-lg">
            <p>
              I'm Yash Modi — a Data Scientist and AI/ML Engineer from Bharuch, Gujarat. I build
              systems that take noisy, real-world data and turn it into explained, actionable
              decisions recruiters, stakeholders and decision-makers can trust.
            </p>
            <p>
              I trained as a physicist — an M.Sc. in Spectroscopy built on statistical analysis,
              quantitative reasoning and the interpretation of experimental data. That work is where
              I learned to treat measurement error, uncertainty and evidence as first-class parts of
              a conclusion rather than footnotes.
            </p>
            <p>
              I moved into Data Science through a Post Graduate Diploma, where I finished first in
              class, and applied the same discipline to commercial problems: retail banking churn
              risk, manufacturing defect reduction, statistical sports simulation and open-data
              classification.
            </p>
            <p>
              <span className="text-foreground font-medium">
                Turning complex data into structured thinking, practical analysis, and meaningful
                decisions.
              </span>
            </p>
          </div>

          {/* recruiter-friendly scannable groups */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <p className="label-mono mb-3">Education</p>
              <ul className="space-y-3">
                {[education[0], education[1]].map((e) => (
                  <li key={e.degree} className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{e.degree}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{e.institution}</p>
                    <p className="mt-1 text-xs font-medium text-primary">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <p className="label-mono mb-3">Technical Focus</p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Statistical Modelling",
                  "Predictive Analytics",
                  "Explainable AI",
                  "Generative AI",
                  "Monte Carlo Simulation",
                  "ETL & Feature Engineering",
                  "Cloud Deployment",
                ].map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
              <p className="label-mono mt-6 mb-3">Domains</p>
              <p className="text-sm text-muted-foreground">
                Banking Risk · Sports Intelligence · Manufacturing Quality · Open-Data
                Classification
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="label-mono mb-3">Working Approach</p>
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

        {/* Portrait: below content on mobile, right column on desktop */}
        <div className="min-w-0 order-1 lg:order-2 lg:sticky lg:top-24">
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
              <img
                src="/AboutPhoto.jpeg"
                alt="Yash Modi professional portrait."
                className="aspect-[3/4] w-full object-cover object-[center_15%]"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1600}
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="font-mono">{profile.name}</span>
              <span className="font-mono text-primary">{profile.shortTitle}</span>
            </figcaption>
          </figure>
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
                <h3 className="text-lg font-semibold tracking-tight text-balance">{a.headline}</h3>
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
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-warning" />
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
            A three-page executive overview: positioning, proof metrics, flagship work, how I
            approach problems, toolkit, education and recognition. Readable in the browser,
            printable to PDF, no email required.
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
            I am open to Data Science, AI/ML and analytics roles where the work involves real
            modelling, intelligent data products and business-oriented analytical problems. If there
            is a fit, I would be glad to talk.
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
