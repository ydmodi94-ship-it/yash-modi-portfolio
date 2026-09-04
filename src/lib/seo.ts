import { profile } from "@/data/portfolio";

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:site_name", content: `${profile.name} — ${profile.title}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Data Scientist and AI/ML Engineer",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bharuch",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Machine Learning",
    "Statistical Modelling",
    "Explainable AI",
    "Generative AI",
    "Data Analytics",
    "Predictive Modelling",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Sardar Patel University, Vallabh Vidyanagar" },
    { "@type": "CollegeOrUniversity", name: "Maharaja Sayajirao University, Vadodara" },
  ],
};
