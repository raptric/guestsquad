import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { PricingCards } from "@/components/site/pricing-cards";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Starter, Growth, and Custom guest operations plans for hotels, resorts, serviced apartments, and Airbnb operators. Get a quote based on your property.",
  path: "/pricing",
});

const FAQS = [
  {
    q: "Why don't you list exact prices?",
    a: "Pricing depends on call and message volume, number of properties, and which channels you need covered. A quote takes one short call and reflects your actual operation, not a generic tier.",
  },
  {
    q: "Is there a contract?",
    a: "Plans are month-to-month after the initial setup period. We'd rather earn renewal through performance than lock you in.",
  },
  {
    q: "Can we start with just one service?",
    a: "Yes. Most clients start with after-hours coverage or OTA inbox management, then expand once they see it working.",
  },
  {
    q: "Do you replace our front desk staff?",
    a: "No. We cover overflow, after-hours, and the channels your team doesn't have time for — your on-site team stays focused on in-house guests.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]),
          faqSchema(FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <PageHero
        eyebrow="Pricing"
        title="Plans built around your property, not a generic tier."
        description="Every engagement starts with a short conversation about your volume, channels, and current gaps — then we recommend the right level of coverage."
      />

      <Section>
        <PricingCards />
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Questions" title="Pricing, answered honestly." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Get a quote built around your property."
        description="Tell us your volume and channels, and we'll come back with a plan and a price — no generic packages."
      />
    </>
  );
}
