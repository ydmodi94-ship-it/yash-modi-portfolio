import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CtaAnchor, CtaLink, Arrow } from "@/components/primitives";
import { navLinks, RESUME_URL, mailto, track } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="shell flex h-16 items-center justify-between gap-4 md:h-18"
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-foreground font-mono text-[11px] text-background"
          >
            YM
          </span>
          <span className="truncate">Yash Modi</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  pathname.startsWith(link.to) && link.to !== "/" && "text-foreground",
                )}
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {RESUME_URL ? (
            <CtaAnchor
              href={RESUME_URL}
              variant="quiet"
              download
              onClick={() => track("resume_download")}
            >
              Download Resume <Arrow />
            </CtaAnchor>
          ) : null}
          <CtaLink to="/contact" variant="primary" onClick={() => track("contact_click")}>
            Let&apos;s Connect <Arrow />
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-md border border-border bg-surface lg:hidden"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <div className="shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-2 py-3.5 text-base text-foreground"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <CtaAnchor href={mailto} variant="primary" onClick={() => track("contact_click")}>
              Let&apos;s Connect <Arrow />
            </CtaAnchor>
            {RESUME_URL ? (
              <CtaAnchor href={RESUME_URL} variant="secondary" download>
                Download Resume <Arrow />
              </CtaAnchor>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
