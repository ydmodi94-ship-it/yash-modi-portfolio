import { profile } from "@/data/portfolio";

/**
 * Drop a real PDF at `public/yash-modi-resume.pdf` and set this to
 * "/yash-modi-resume.pdf" to switch every "Download Resume" CTA on.
 * While it is null the CTA is hidden rather than rendered as a dead link.
 */
export const RESUME_URL: string | null = "/yash-modi-resume.pdf";

/** Analytics-ready event hook. No tracking is wired up by default. */
export type AnalyticsEvent =
  | "hero_view_work_click"
  | "portfolio_brief_click"
  | "portfolio_brief_download"
  | "project_case_study_open"
  | "github_click"
  | "live_demo_click"
  | "resume_download"
  | "linkedin_click"
  | "contact_click";

export function track(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
  };
  w.dataLayer?.push({ event, ...payload });
}

export const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Opportunity for Yash Modi — Data Science / AI-ML",
)}`;

export const navLinks = [
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Portfolio Brief", to: "/portfolio-brief" },
  { label: "Contact", to: "/contact" },
] as const;
