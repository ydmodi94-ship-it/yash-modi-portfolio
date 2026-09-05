export const profile = {
  name: "Yash Modi",
  title: "Data Scientist | AI/ML Engineer",
  shortTitle: "Data Scientist · AI/ML Engineer",
  positioning: "I build intelligent systems that turn data into decisions.",
  disciplines:
    "Machine Learning · Statistical Modelling · Explainable AI · Generative AI · Data Analytics · Intelligent Applications",
  location: "Bharuch, Gujarat, India",
  email: "ydmodi94@gmail.com",
  phone: "+91 87350 45707",
  linkedin: "https://www.linkedin.com/in/yash-modi-52b899281/",
  github: "https://github.com/ydmodi94-ship-it",
  siteRepo: "https://github.com/ydmodi94-ship-it/Professional_Web-site",
} as const;

export const proofMetrics = [
  { value: 18, suffix: "", label: "Engineered Features", context: "Churn Risk Intelligence System" },
  { value: 4, suffix: "", label: "Classification Models Benchmarked", context: "Logistic · Tree · Forest · Boosting" },
  { value: 5, suffix: "", label: "Evaluation Metrics", context: "Accuracy · Precision · Recall · F1 · ROC-AUC" },
  { value: 5000, suffix: "", label: "Monte Carlo Trials per Prediction", context: "CricAnalytics simulation engine" },
  { value: 75, suffix: "%", label: "Defect Rate Reduction", context: "Lean Six Sigma DMAIC study — 8% to 2%" },
  { value: null, display: "GCP", label: "Cloud Deployment", context: "Google Cloud Run" },
] as const;

export const thinkingFramework = [
  {
    step: "01",
    title: "Understand the Problem",
    body: "Frame the decision that needs to be made before touching a dataset. Who acts on the output, and what changes if the model is right?",
  },
  {
    step: "02",
    title: "Explore the Data",
    body: "Structured EDA: distributions, missingness, leakage checks, and the relationships that actually carry signal.",
  },
  {
    step: "03",
    title: "Build the Baseline",
    body: "A simple, interpretable baseline first. Every later gain has to justify itself against it.",
  },
  {
    step: "04",
    title: "Model",
    body: "Feature engineering and benchmarking across model families rather than committing to one algorithm early.",
  },
  {
    step: "05",
    title: "Validate",
    body: "Multiple metrics chosen for the cost of error — recall where misses are expensive, ROC-AUC for ranking quality.",
  },
  {
    step: "06",
    title: "Explain",
    body: "SHAP attributions, partial dependence and statistical tests so a reviewer can audit why a prediction was made.",
  },
  {
    step: "07",
    title: "Deploy",
    body: "Package the model into an application people can actually use — interfaces, simulators and cloud deployment.",
  },
  {
    step: "08",
    title: "Support the Decision",
    body: "Translate output into recommended action, risk segments and reports written for the person making the call.",
  },
] as const;

export const toolkit = [
  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Gradient Boosting",
      "Predictive Modelling",
      "Explainable AI",
      "SHAP",
    ],
    evidence: "SHAP — explainable customer risk predictions",
  },
  {
    category: "Data Engineering",
    items: [
      "ETL",
      "Feature Engineering",
      "Data Preprocessing",
      "Data Validation",
      "Quality Assurance",
      "Anomaly Detection",
    ],
    evidence: "Automated ETL pipeline with 18 engineered features",
  },
  {
    category: "Data & BI",
    items: [
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Advanced Excel",
      "Matplotlib",
      "Seaborn",
      "Recharts",
    ],
    evidence: "Recharts — interactive analytics interfaces",
  },
  {
    category: "AI",
    items: ["Generative AI", "Gemini API", "Prompt Engineering", "IBM Generative AI"],
    evidence: "Gemini API — AI-generated retention recommendations",
  },
  {
    category: "Statistics",
    items: [
      "EDA",
      "Hypothesis Testing",
      "Z-Test",
      "ROC-AUC",
      "Partial Dependence Plots",
      "Monte Carlo Simulation",
      "Box-Muller Transform",
      "Probability Distributions",
      "Statistical Modelling",
      "SPSS",
      "Econometrics",
    ],
    evidence: "Monte Carlo — 5,000 trials per match prediction",
  },
  {
    category: "Engineering & Deployment",
    items: ["React.js", "JavaScript", "Vite", "Tailwind CSS", "Google Cloud Platform", "Cloud Run"],
    evidence: "GCP Cloud Run — cloud deployment",
  },
  {
    category: "Professional Methods",
    items: ["Lean Six Sigma", "DMAIC", "Agile Analytics", "Responsible AI", "Data Governance"],
    evidence: "DMAIC — manufacturing defect root-cause analysis",
  },
] as const;

export const education = [
  {
    degree: "Post Graduate Diploma in Data Science",
    years: "2025–2026",
    institution: "Sardar Patel University, Vallabh Vidyanagar",
    detail: "GPA 7.7 / 10 · First Rank in Class",
    note: "First semester: GPA 8.2 / 10, First Rank",
    coursework: [
      "Statistical Modelling",
      "Machine Learning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Econometrics",
      "Predictive Analytics",
    ],
  },
  {
    degree: "M.Sc. in Physics (Spectroscopy)",
    years: "2023–2025",
    institution: "Maharaja Sayajirao University, Vadodara",
    detail: "Quantitative foundation",
    coursework: [
      "Statistical analysis",
      "Quantitative reasoning",
      "Experimental data interpretation",
    ],
  },
  {
    degree: "B.Sc. in Physics",
    years: "2020–2023",
    institution: "Sardar Patel University, Vallabh Vidyanagar",
    detail: "GPA 7.35 / 10",
    coursework: [],
  },
] as const;

export const achievements = [
  {
    headline: "Gold Medal · 1st Rank",
    body: "Awarded for the Industrial Defect Reduction Analysis project carried out on real manufacturing data.",
  },
  {
    headline: "First Rank in Class",
    body: "Post Graduate Diploma in Data Science — GPA 7.7 / 10, with GPA 8.2 / 10 and First Rank in the first semester.",
  },
  {
    headline: "Two self-directed full-stack analytics platforms",
    body: "Banking Risk Intelligence and Monte Carlo Sports Intelligence, designed and built end to end.",
  },
  {
    headline: "GCP Cloud Deployment",
    body: "Application deployment experience on Google Cloud Platform using Cloud Run.",
  },
  {
    headline: "Industry-recognized certifications",
    body: "Programmes from Google, IBM, Microsoft, CFI and Yale across data science, AI and finance.",
  },
] as const;

export const certifications = [
  {
    group: "AI & Data Science",
    items: [
      { name: "IBM Generative AI Engineering Professional Certificate", issuer: "IBM", inProgress: true },
      { name: "Google Data Analytics Certificate", issuer: "Google", inProgress: false },
      { name: "Python for Data Science", issuer: "IBM / Coursera", inProgress: false },
      { name: "Introduction to Artificial Intelligence", issuer: "IBM", inProgress: false },
      { name: "Google Prompting Essentials Specialization", issuer: "Google", inProgress: false },
      { name: "Python, SQL, Tableau for Data Science", issuer: "Coursera", inProgress: true },
    ],
  },
  {
    group: "Financial & Business",
    items: [
      { name: "Career in Finance", issuer: "CFI", inProgress: false },
      { name: "Financial Analyst: AI, Excel, and Power BI Skills", issuer: "CFI", inProgress: true },
      { name: "Commercial Real Estate Modelling", issuer: "CFI", inProgress: true },
      { name: "Financial Markets", issuer: "Yale University / Coursera", inProgress: true },
    ],
  },
  {
    group: "Productivity",
    items: [{ name: "Work Smarter with Microsoft Excel", issuer: "Microsoft", inProgress: false }],
  },
] as const;

export const currentBuild = {
  title: "Commercial Real Estate Market Analytics",
  description:
    "A property valuation and financial forecasting platform built in Python and Excel, covering market comparables, cash-flow modelling and scenario-based valuation.",
  status: "In Progress · 2026",
} as const;

export type CaseStudySection = { heading: string; body: string; list?: string[] };

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  tech: string[];
  featured: boolean;
  badge?: string;
  visual: "pipeline" | "montecarlo" | "pareto" | "classification";
  highlights: { label: string; value: string }[];
  sections: CaseStudySection[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "churn-risk-intelligence",
    title: "Predictive Churn Risk Intelligence System",
    category: "Retail Banking · Machine Learning · Risk Analytics",
    summary:
      "A full-stack churn prediction system for retail banking that moves from raw customer data through an automated ETL pipeline to explainable risk scores, AI-generated retention strategies and a supervisory report.",
    problem:
      "Retail banks lose valuable customers before anyone in the branch network can see the warning signs in the data.",
    tech: [
      "Python",
      "Scikit-learn",
      "SHAP",
      "Gemini API",
      "ETL Pipeline Design",
      "Financial Risk Analytics",
    ],
    featured: true,
    visual: "pipeline",
    highlights: [
      { label: "Engineered features", value: "18" },
      { label: "Models benchmarked", value: "4" },
      { label: "Evaluation metrics", value: "5" },
      { label: "Explainability", value: "SHAP" },
    ],
    sections: [
      {
        heading: "Why the problem matters",
        body: "Retention economics in retail banking are asymmetric: identifying an at-risk relationship early is far cheaper than reacquiring it. But a churn score on its own is not actionable — a relationship manager needs to know which customers, why, and what to do next.",
      },
      {
        heading: "Data & inputs",
        body: "Customer-level retail banking records covering demographics, product holdings, balance behaviour and engagement signals, ingested through an automated ETL pipeline that handles cleaning, type validation and consistency checks before modelling.",
      },
      {
        heading: "Feature engineering",
        body: "18 features were engineered from the raw customer table to capture behaviour rather than static attributes — balance dynamics, product mix, engagement recency and derived risk indicators.",
      },
      {
        heading: "Model selection",
        body: "Four classification models were benchmarked side by side instead of committing to one family early.",
        list: ["Logistic Regression", "Decision Tree", "Random Forest", "Gradient Boosting"],
      },
      {
        heading: "Evaluation",
        body: "Each model was scored across five metrics so the trade-off between catching churners and flooding the retention team with false positives stays explicit.",
        list: ["Accuracy", "Precision", "Recall", "F1-Score", "ROC-AUC"],
      },
      {
        heading: "Explainability",
        body: "SHAP waterfall visualizations expose the per-customer contribution of every feature to the predicted risk, so a reviewer can audit an individual decision rather than trusting an aggregate score.",
      },
      {
        heading: "Product & application layer",
        body: "The model is wrapped in decision-support modules built for the people who act on the output.",
        list: [
          "Capital Flight Risk module for balance-weighted exposure",
          "What-If Simulator for counterfactual scenario testing",
          "Gemini API-generated personalized retention strategies",
          "CRO-style supervisory report generator",
          "Macro-Liquidity Simulator",
        ],
      },
      {
        heading: "Key technical learnings",
        body: "Benchmarking across model families made the accuracy-versus-interpretability trade-off measurable, and SHAP turned an opaque ensemble into something defensible in a risk review. Wiring a generative layer on top of a statistical model required strict grounding: the language model explains and recommends, it never produces the score.",
      },
      {
        heading: "Business & decision relevance",
        body: "The output is a ranked, explained and segmented view of retention risk with a suggested action per customer — the format a retention or risk function can act on directly. This is a self-directed project built on a retail banking dataset; it has not been deployed inside a bank.",
      },
    ],
    github: "https://github.com/ydmodi94-ship-it/shap-banking-risk-profiler",
  },
  {
    slug: "cricanalytics",
    title: "CricAnalytics",
    category: "Sports Intelligence · Statistical Modelling · Predictive Simulation",
    summary:
      "A statistical match-prediction platform that runs 5,000 parallel Monte Carlo trials per prediction over 1,000+ historical IPL matches, combining ELO ratings, hypothesis testing and EMA-based season forecasting in a React interface.",
    problem:
      "Match commentary is full of confident predictions with no distribution behind them and no way to test whether an observed difference is statistically real.",
    tech: [
      "Python",
      "React 18",
      "Monte Carlo Simulation",
      "Z-Test",
      "ELO Rating",
      "Recharts",
      "Tailwind CSS",
    ],
    featured: true,
    visual: "montecarlo",
    highlights: [
      { label: "Monte Carlo trials", value: "5,000" },
      { label: "Historical matches", value: "1,000+" },
      { label: "IPL seasons", value: "19" },
      { label: "Significance test", value: "Two-tailed Z" },
    ],
    sections: [
      {
        heading: "Why the problem matters",
        body: "A single predicted outcome hides everything useful. A distribution of simulated outcomes shows how likely the result is, how wide the uncertainty is, and whether the edge between two teams is statistically meaningful at all.",
      },
      {
        heading: "Data & inputs",
        body: "Historical records from 1,000+ IPL matches across 19 seasons, covering team performance, match outcomes and season points progression.",
      },
      {
        heading: "Approach",
        body: "Each prediction runs 5,000 parallel Monte Carlo trials, with normally distributed performance samples generated through the Box-Muller transform, producing an outcome distribution rather than a point estimate.",
      },
      {
        heading: "Statistical validation",
        body: "A two-tailed Z-Test evaluates whether the difference between two teams' simulated performance is statistically significant, so the interface can distinguish a genuine edge from noise.",
      },
      {
        heading: "Rating & forecasting",
        body: "An ELO rating system tracks relative team strength over time, and EMA-based forecasting projects points-table positions across the remainder of a season.",
      },
      {
        heading: "Application layer",
        body: "A responsive single-page React 18 application built with Vite and Tailwind CSS, using Recharts for distribution, probability and rating-trend visualizations. Built through an AI-assisted development workflow.",
      },
      {
        heading: "Key technical learnings",
        body: "Simulation scale forces performance discipline: generating and aggregating thousands of trials per interaction meant designing the computation and the rendering path together. Pairing simulation output with an explicit significance test kept the interface honest about what it does and does not know.",
      },
      {
        heading: "Decision relevance",
        body: "The same pattern — simulate, quantify uncertainty, test significance, visualize — applies directly to demand forecasting, risk simulation and scenario planning in a commercial setting.",
      },
    ],
    github: "https://github.com/ydmodi94-ship-it/cricket-modelling-ipl",
  },
  {
    slug: "industrial-defect-reduction",
    title: "Defect Reduction & Operational Efficiency",
    category: "Manufacturing · Lean Six Sigma DMAIC · Quality Analytics",
    summary:
      "A Lean Six Sigma DMAIC study on the Medium Casing transformer line at Atlanta Electricals Pvt. Ltd. Real defect records were cleaned in pandas/NumPy, ranked with Pareto and 6M root-cause analysis, prioritised with FMEA, and converted into SOPs, Poka-Yoke controls and a 5S programme — cutting the defect rate from 8% to 2% and monthly cost of poor quality from ₹76,000 to ₹22,000.",
    problem:
      "The Medium Casing line ran an 8% defect rate and 12% rework rate, costing ₹76,000 a month in cost of poor quality, with no analysis isolating which causes actually drove the loss.",
    tech: [
      "Lean Six Sigma",
      "DMAIC",
      "Python",
      "Pandas",
      "NumPy",
      "Pareto Analysis",
      "FMEA",
      "SPC",
      "5S",
    ],
    featured: true,
    badge: "Gold Medal · 1st Rank",
    visual: "pareto",
    highlights: [
      { label: "Defect rate", value: "8% → 2%" },
      { label: "Monthly COPQ", value: "₹76K → ₹22K" },
      { label: "Cycle time", value: "−40%" },
      { label: "Recognition", value: "Gold Medal" },
    ],
    sections: [
      {
        heading: "Why the problem matters",
        body: "Atlanta Electricals (est. 1988, Vallabh Vidyanagar) manufactures electrical transformers for 200+ clients across 19 states and four export markets. On the Medium Casing line, process variability, inconsistent QC and non-value-added activity were producing an 8% defect rate, 12% rework and ₹76,000 of monthly cost of poor quality — a direct, measurable margin leak.",
      },
      {
        heading: "Data & inputs",
        body: "120 recorded defect events from the plant (YASH_DATASET.xlsx), cleaned and validated with pandas and NumPy. Each record carried fault code, 6M root-cause category, production section, COPQ in ₹, rework hours, detection phase and a 1–5 severity score — so the same event could be analysed financially, operationally and by risk.",
      },
      {
        heading: "Define — voice of customer to CTQ",
        body: "Customer expectations were translated into measurable Critical-to-Quality characteristics across the three failure-prone stages, with stakeholders mapped from customer and management down to operators and supply chain.",
        list: [
          "Winding — wire-turn accuracy ±0.5%, uniform tension and layering, no shorts or opens",
          "Insulation — dielectric strength at or above BIL spec, no moisture ingress, uniform potting",
          "Assembly — correct bolt torque, no loose connections, proper gasket seating",
          "Targets set upfront: 8% → 2% defects, 12% → 4% rework, 10 → 6 min cycle time",
        ],
      },
      {
        heading: "Measure — baseline the process",
        body: "The baseline was quantified before any intervention: 120 defects recorded, 8% average defect rate, 12% rework, ₹76,000 monthly COPQ split as ₹40,000 defect cost and ₹36,000 rework cost. Workmanship (34%) and design issues (22%) dominated the categories. A TIMWOODS waste audit rated defects 'very high' and waiting, overprocessing and unused skills 'high', while a 5S audit scored the workplace 19/50 (38%).",
      },
      {
        heading: "Analyse — Pareto, fishbone and FMEA",
        body: "Pareto ranking of 120 defects showed workmanship (41) and design issues (26) alone accounted for 56% of all defects, followed by material (22), assembly (17), testing (9) and others (5). A 6M fishbone exposed the interconnected causes — skill gaps in winding, late defect detection, humidity affecting insulation, dust and poor lighting. FMEA scored each failure mode on severity × occurrence × detection, isolating testing and insulation as the highest-RPN risks.",
      },
      {
        heading: "Improve — solutions targeting verified causes",
        body: "Each intervention was tied to a confirmed root cause rather than a symptom.",
        list: [
          "Standard Operating Procedures displayed and standardised across shifts",
          "Poka-Yoke error-proofing at the failure points flagged by FMEA",
          "Operator training programme closing the winding skill gap",
          "Full 5S cycle — sort, set, shine, standardise, sustain — with shadow boards, labels and daily audits",
        ],
      },
      {
        heading: "Results",
        body: "Defect rate fell from 8% to 2% (−75%), rework from 12% to 4% (−66%), cycle time by 40%, and monthly COPQ from ₹76,000 to ₹22,000 (−71%) — roughly ₹6.5 lakh in annualised savings against a ₹3.6 lakh target. The 5S score rose from 19/50 to a sustained high-performance standard.",
      },
      {
        heading: "Control — holding the gains",
        body: "Improvement without control is temporary. Statistical process control charts monitor the line, weekly internal 5S audits are scored and reviewed monthly by management, and quarterly refresher training is driven by the latest defect patterns. Future scope includes automated inspection, scaling DMAIC to HV winding and core assembly, and pushing toward 3.4 DPMO plant-wide.",
      },
      {
        heading: "Key learnings",
        body: "The value came from segmenting data the way the plant actually operates and pairing every statistic with a financial number — a ₹76,000 monthly figure moved decisions that a defect percentage alone did not. Carried out as sole contributor under Mr. Viraj M. Tur, the study was awarded a Gold Medal and 1st Rank in class.",
      },
    ],
  },

  {
    slug: "hazardous-asteroid-detection",
    title: "Hazardous Asteroid Detection Model",
    category: "Machine Learning · Classification · NASA Open Dataset",
    summary:
      "A binary classification model on NASA's near-Earth object dataset that prioritizes recall, because in hazard detection a missed positive costs far more than a false alarm.",
    problem:
      "Classifying near-Earth objects as hazardous or non-hazardous where the cost of a false negative is not symmetric with a false positive.",
    tech: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Matplotlib", "Seaborn"],
    featured: false,
    visual: "classification",
    highlights: [
      { label: "Task", value: "Binary classification" },
      { label: "Primary metric", value: "Recall" },
      { label: "Model", value: "Logistic Regression" },
      { label: "Source", value: "NASA NEO data" },
    ],
    sections: [
      {
        heading: "Data & inputs",
        body: "NASA's open near-Earth object dataset, covering orbital and physical characteristics of catalogued objects.",
      },
      {
        heading: "Approach",
        body: "Preprocessing and feature engineering followed by StandardScaler normalization, with Logistic Regression as an interpretable classifier whose coefficients can be inspected directly.",
      },
      {
        heading: "Evaluation",
        body: "Recall was chosen as the primary metric because a missed hazardous object is the expensive error; precision, F1-score and a confusion matrix were used alongside it to keep the false-positive cost visible.",
        list: ["Recall (primary)", "Precision", "F1-Score", "Confusion matrix"],
      },
      {
        heading: "Key learnings",
        body: "Metric choice is a modelling decision, not a reporting one. Selecting recall as the objective changed how thresholds were evaluated and made the accuracy figure largely irrelevant to the problem.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
