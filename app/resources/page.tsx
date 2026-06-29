import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { RESOURCES } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service Guides & Comparisons | GuestSquad",
  description:
    "Guides and comparisons on hotel answering services, AI voice agents, and call centers, to help you evaluate what's actually right for your property.",
  path: "/resources",
});

export default function ResourcesPage() {
  const comparisons = RESOURCES.filter((r) => r.type === "comparison");
  const guides = RESOURCES.filter((r) => r.type === "guide");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />

      <PageHero
        eyebrow="Resources"
        title="Hotel Answering Service Guides, Comparisons, and Checklists"
        description="Straight comparisons between human answering services, AI voice agents, and generic call centers, plus practical guides for running guest operations, written to help you decide, not just to sell."
      />

      <Section>
        <SectionHeading eyebrow="Comparisons" title="How GuestSquad stacks up against the alternatives." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {comparisons.map((r) => (
            <ServiceCard
              key={r.slug}
              service={{ slug: r.slug, title: r.title, shortTitle: r.shortTitle, description: r.description }}
              hrefBase="/resources"
            />
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Guides & Checklists" title="Practical guides for running guest operations." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {guides.map((r) => (
            <ServiceCard
              key={r.slug}
              service={{ slug: r.slug, title: r.title, shortTitle: r.shortTitle, description: r.description }}
              hrefBase="/resources"
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Already know what you need?{" "}
          <Link href="/services" className="underline-offset-4 hover:text-gold-dark hover:underline">
            Browse all services
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="underline-offset-4 hover:text-gold-dark hover:underline">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
