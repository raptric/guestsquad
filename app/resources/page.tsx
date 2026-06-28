import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { RESOURCES } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: "Resources | GuestSquad",
  description:
    "Comparisons and guides on hotel answering services, AI voice agents, call centers, and guest operations — to help you evaluate what's actually right for your property.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />

      <PageHero
        eyebrow="Resources"
        title="Comparisons and guides for evaluating guest support."
        description="Straight comparisons between human answering services, AI voice agents, and generic call centers — written to help you decide, not just to sell."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <ServiceCard
              key={r.slug}
              service={{
                slug: r.slug,
                title: r.title,
                shortTitle: r.shortTitle,
                description: r.description,
              }}
              hrefBase="/resources"
            />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
