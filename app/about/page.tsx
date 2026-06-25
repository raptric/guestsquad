import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Metrics } from "@/components/site/metrics";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "ConciergeX by Raptric was built to give independent hotels, resorts, and short-term rental operators the guest-operations coverage that larger brands take for granted.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <PageHero
        eyebrow="About ConciergeX"
        title="Built for properties that can't staff every hour, on every channel."
        description="ConciergeX by Raptric exists because independent hotels and small operators were being asked to compete with brands that have round-the-clock reservations teams — without the headcount to do it."
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80"
              alt="ConciergeX operations team reviewing guest communications"
              fill
              unoptimized
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why We Exist"
              title="Guest expectations didn't wait for your staffing budget."
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Guests now expect a reply within minutes, on whichever channel
              they chose to reach out on — at 2pm or 2am. Independent hotels,
              boutique properties, and short-term rental operators rarely have
              the headcount to meet that expectation around the clock.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              ConciergeX by Raptric was built specifically for that gap. Not a
              generic call center retrofitted for hospitality — a guest
              operations team trained on hotel systems, OTA workflows, and the
              tone independent properties actually want their guests to hear.
            </p>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Our Approach" title="Support, not replacement." align="center" className="mx-auto" />
        <div className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          We're explicit about this: ConciergeX is built to extend your
          front desk, not replace it. We handle overflow, after-hours, and
          the channels your on-site team doesn't have time to monitor — so
          the people you've hired can focus on the guests standing in front
          of them.
        </div>
        <div className="mt-12">
          <Metrics />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
