import type { Project } from "@/data/portfolio";

const stroke = "var(--border)";
const ink = "var(--foreground)";
const accent = "var(--primary)";
const data = "var(--data)";
const muted = "var(--muted-foreground)";

/** Hero: DATA → ANALYSIS → MODEL → EXPLAIN → DECISION */
export function HeroVisual() {
  const stages = ["Data", "Analysis", "Model", "Explain", "Decision"];
  return (
    <figure className="relative">
      <svg
        viewBox="0 0 460 300"
        role="img"
        aria-label="A pipeline diagram moving from data through analysis, modelling and explanation to a decision."
        className="w-full"
      >
        <defs>
          <pattern id="hero-grid" width="23" height="23" patternUnits="userSpaceOnUse">
            <path d="M23 0H0V23" fill="none" stroke={stroke} strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="460" height="300" fill="url(#hero-grid)" opacity="0.55" />

        {/* scatter -> distribution */}
        {Array.from({ length: 26 }).map((_, i) => {
          const x = 26 + (i % 13) * 6.5;
          const y = 70 + ((i * 37) % 90);
          return <circle key={i} cx={x} cy={y} r="2" fill={muted} opacity="0.55" />;
        })}

        {/* probability curve */}
        <path
          className="draw-line"
          d="M20 232 C 70 232, 78 150, 118 150 C 158 150, 168 232, 210 232"
          fill="none"
          stroke={data}
          strokeWidth="1.6"
        />
        <path
          d="M20 232 C 70 232, 78 150, 118 150 C 158 150, 168 232, 210 232 L210 232 L20 232 Z"
          fill={data}
          opacity="0.07"
        />

        {/* network nodes */}
        <g>
          <path
            className="draw-line"
            d="M240 90 L300 60 M240 90 L300 120 M240 160 L300 120 M240 160 L300 180 M300 60 L370 110 M300 120 L370 110 M300 180 L370 110 M370 110 L430 110"
            fill="none"
            stroke={accent}
            strokeWidth="1.2"
            opacity="0.55"
          />
          {[
            [240, 90],
            [240, 160],
            [300, 60],
            [300, 120],
            [300, 180],
            [370, 110],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill={accent} />
          ))}
          <rect x="410" y="98" width="40" height="24" rx="4" fill={ink} />
        </g>

        {/* axis */}
        <line x1="20" y1="256" x2="440" y2="256" stroke={stroke} strokeWidth="1" />
        {stages.map((s, i) => (
          <text
            key={s}
            x={22 + i * 88}
            y="276"
            fill={muted}
            fontSize="10"
            letterSpacing="1.6"
            fontFamily="var(--font-mono)"
          >
            {s.toUpperCase()}
          </text>
        ))}
      </svg>
    </figure>
  );
}

function FlowSteps({ steps, caption }: { steps: string[]; caption: string }) {
  return (
    <figure>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
          >
            <span className="font-mono text-[11px] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-foreground">{step}</span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function PipelineVisual() {
  return (
    <FlowSteps
      steps={[
        "Customer Data",
        "ETL",
        "18 Engineered Features",
        "Model Benchmarking",
        "Best Model",
        "SHAP Explainability",
        "Risk Segmentation",
        "Gemini Recommendations",
        "Decision Support",
      ]}
      caption="System architecture — illustrative diagram of the churn intelligence pipeline."
    />
  );
}

export function MonteCarloVisual() {
  const bars = [3, 6, 12, 21, 33, 46, 58, 66, 62, 51, 38, 26, 16, 9, 4];
  const max = Math.max(...bars);
  return (
    <figure>
      <svg
        viewBox="0 0 400 180"
        role="img"
        aria-label="Illustrative Monte Carlo outcome distribution with an overlaid normal curve."
        className="w-full"
      >
        {bars.map((b, i) => {
          const h = (b / max) * 120;
          return (
            <rect
              key={i}
              x={12 + i * 26}
              y={150 - h}
              width="18"
              height={h}
              rx="2"
              fill={i >= 6 && i <= 8 ? accent : data}
              opacity={i >= 6 && i <= 8 ? 0.9 : 0.28}
            />
          );
        })}
        <path
          className="draw-line"
          d="M12 148 C 90 146, 120 40, 205 32 C 290 40, 320 146, 396 148"
          fill="none"
          stroke={ink}
          strokeWidth="1.4"
        />
        <line x1="8" y1="152" x2="396" y2="152" stroke={stroke} />
        <text x="8" y="172" fontSize="9" fill={muted} fontFamily="var(--font-mono)">
          SIMULATED OUTCOME
        </text>
        <text x="300" y="172" fontSize="9" fill={muted} fontFamily="var(--font-mono)">
          5,000 TRIALS
        </text>
      </svg>
      <figcaption className="mt-4 text-xs text-muted-foreground">
        Illustrative distribution shape — not output from a specific match run.
      </figcaption>
    </figure>
  );
}

export function ParetoVisual() {
  const bars = [42, 26, 15, 9, 5, 3];
  let cum = 0;
  const cumulative = bars.map((b) => (cum += b));
  return (
    <figure>
      <svg
        viewBox="0 0 400 180"
        role="img"
        aria-label="Illustrative Pareto chart ranking defect causes with a cumulative percentage line."
        className="w-full"
      >
        {bars.map((b, i) => {
          const h = (b / 50) * 130;
          return (
            <rect
              key={i}
              x={20 + i * 62}
              y={150 - h}
              width="42"
              height={h}
              rx="2"
              fill={i < 2 ? accent : data}
              opacity={i < 2 ? 0.9 : 0.3}
            />
          );
        })}
        <path
          className="draw-line"
          d={cumulative
            .map((c, i) => `${i === 0 ? "M" : "L"} ${41 + i * 62} ${150 - (c / 100) * 140}`)
            .join(" ")}
          fill="none"
          stroke={ink}
          strokeWidth="1.4"
        />
        {cumulative.map((c, i) => (
          <circle key={i} cx={41 + i * 62} cy={150 - (c / 100) * 140} r="2.6" fill={ink} />
        ))}
        <line x1="14" y1="152" x2="392" y2="152" stroke={stroke} />
        <text x="14" y="172" fontSize="9" fill={muted} fontFamily="var(--font-mono)">
          RANKED ROOT CAUSES
        </text>
        <text x="290" y="172" fontSize="9" fill={muted} fontFamily="var(--font-mono)">
          CUMULATIVE %
        </text>
      </svg>
      <figcaption className="mt-4 text-xs text-muted-foreground">
        Illustrative Pareto structure — shape only, not the study&apos;s recorded values.
      </figcaption>
    </figure>
  );
}

export function ClassificationVisual() {
  const cells = [
    { label: "True negative", tone: data },
    { label: "False positive", tone: muted },
    { label: "False negative", tone: "var(--destructive)" },
    { label: "True positive", tone: accent },
  ];
  return (
    <figure>
      <div className="grid max-w-xs grid-cols-2 gap-2">
        {cells.map((c) => (
          <div
            key={c.label}
            className="rounded-lg border border-border bg-background p-4"
            style={{ borderLeft: `3px solid ${c.tone}` }}
          >
            <p className="text-xs font-medium text-foreground">{c.label}</p>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-xs text-muted-foreground">
        Confusion-matrix structure. Recall is prioritized: false negatives carry the
        highest cost in hazard detection. Illustrative layout, no values shown.
      </figcaption>
    </figure>
  );
}

export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "pipeline") return <PipelineVisual />;
  if (kind === "montecarlo") return <MonteCarloVisual />;
  if (kind === "pareto") return <ParetoVisual />;
  return <ClassificationVisual />;
}
