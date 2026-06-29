import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Differentiator } from "@/components/site/differentiator";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { SERVICES } from "@/lib/site-data";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Operations Services | GuestSquad",
  description:
    "Reservation support, guest messaging, OTA inbox management, after-hours coverage, back-office operations, and Airbnb guest support, all under one guest operations partner.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <PageHero
        eyebrow="Services"
        title="Guest operations support, built around how hotels actually run."
        description="Choose full coverage across every channel, or fill the specific gaps your team can't currently staff."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Not sure which service fits?{" "}
          <Link href="/resources" className="underline-offset-4 hover:text-gold-dark hover:underline">
            Read our comparisons
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="underline-offset-4 hover:text-gold-dark hover:underline">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="The Difference"
          title="Not a generic call center."
          description="Most outsourced support is built for volume, not hospitality. We built ours the other way around."
        />
        <div className="mt-12">
          <Differentiator />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
