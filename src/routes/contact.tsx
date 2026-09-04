import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "@/components/sections";
import { profile } from "@/data/portfolio";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact Yash Modi | Data Scientist & AI/ML Engineer",
      description:
        "Get in touch with Yash Modi about Data Science, AI/ML and analytics roles. Email, LinkedIn and GitHub, based in Bharuch, Gujarat, India.",
      path: "/contact",
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactCTA />
      <section className="hairline">
        <div className="shell grid gap-8 py-12 sm:grid-cols-3">
          <div>
            <p className="label-mono">Location</p>
            <p className="mt-2 text-sm">{profile.location}</p>
          </div>
          <div>
            <p className="label-mono">Phone</p>
            <p className="mt-2 text-sm">
              <a className="hover:text-primary" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </p>
          </div>
          <div>
            <p className="label-mono">Availability</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to Data Science and AI/ML opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
