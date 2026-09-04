import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { navLinks, RESUME_URL, track } from "@/lib/site";

export function Footer() {
  return (
    <footer className="hairline mt-8 bg-background">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div className="min-w-0">
          <p className="text-base font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.shortTitle}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            {profile.positioning}
          </p>
        </div>

        <nav aria-label="Footer" className="min-w-0">
          <p className="label-mono mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <p className="label-mono mb-4">Elsewhere</p>
          <ul className="space-y-2.5">
            <li>
              <a
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("linkedin_click")}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("github_click")}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            {RESUME_URL ? (
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href={RESUME_URL}
                  download
                  onClick={() => track("resume_download")}
                >
                  Resume
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="hairline">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
