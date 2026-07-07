import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { ResourceToolsGrid } from "@/components/site/resource-tools-grid";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { RESOURCES } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service Guides & Comparisons",
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
        description="Straight comparisons between human answering services, AI voice agents, and generic call centers, plus practical guides and tools for running guest operations."
      />

      {/* Hub intro */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            These guides compare hotel answering services against the most common alternatives, including AI voice agents and generic call centers, and cover the operational questions property teams ask most before choosing a guest support model. Each guide is written to help you evaluate options, not to push a specific product.
          </p>
        </div>
      </div>

      {/* Tools and Templates */}
      <Section>
        <SectionHeading
          eyebrow="Tools and Templates"
          title="Calculators, checklists, and templates for hospitality operators."
        />
        <ResourceToolsGrid />
      </Section>

      {/* Guides and Comparisons */}
      <Section surface>
        <SectionHeading
          eyebrow="Guides and Comparisons"
          title="How GuestSquad stacks up against the alternatives."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {comparisons.map((r) => (
            <ServiceCard
              key={r.slug}
              service={{ slug: r.slug, title: r.title, shortTitle: r.shortTitle, description: r.description }}
              hrefBase="/resources"
            />
          ))}
        </div>
        {guides.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {guides.map((r) => (
              <ServiceCard
                key={r.slug}
                service={{ slug: r.slug, title: r.title, shortTitle: r.shortTitle, description: r.description }}
                hrefBase="/resources"
              />
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-sm text-ink-soft">
          Already know what you need?{" "}
          <Link href="/services" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Browse all services
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
