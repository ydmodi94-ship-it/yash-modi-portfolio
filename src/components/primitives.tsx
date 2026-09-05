import { Link, type LinkComponentProps } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 whitespace-nowrap";

const variants = {
  primary:
    "bg-primary text-primary-foreground px-5 py-3 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]",
  secondary:
    "border border-border bg-surface text-foreground px-5 py-3 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
  ghost: "text-foreground px-3 py-2 hover:text-primary",
  link: "text-primary p-0 hover:gap-3",
  quiet:
    "border border-border bg-transparent text-muted-foreground px-4 py-2.5 hover:text-foreground hover:border-foreground/25",
} as const;

export type CtaVariant = keyof typeof variants;

type CtaProps = {
  variant?: CtaVariant;
  className?: string;
  children: ReactNode;
};

export function CtaLink({
  variant = "primary",
  className,
  children,
  ...rest
}: CtaProps & LinkComponentProps<"a">) {
  return (
    <Link className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  href,
  variant = "secondary",
  className,
  external,
  children,
  ...rest
}: CtaProps & { href: string; external?: boolean } & Omit<
    ComponentProps<"a">,
    "className" | "children"
  >) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="translate-y-px">
      →
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <p className="label-mono mb-4">{eyebrow}</p> : null}
      <h2 id={id} className="display-2 text-foreground text-balance">
        {title}
      </h2>
      {lead ? (
        <p className="body-lg mt-5 text-muted-foreground text-pretty">{lead}</p>
      ) : null}
    </header>
  );
}

export function Card({
  children,
  className,
  interactive,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6 md:p-8 shadow-[var(--shadow-card)]",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
      {children}
    </span>
  );
}

export function Stat({
  value,
  label,
}: {
  value: ReactNode;
  label: string;
}) {
  return (
    <div className="min-w-0 border-t border-border pt-3">
      <div className="font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {value}
      </div>
      <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{label}</div>
    </div>
  );
}
