import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { PricingCards } from "@/components/site/pricing-cards";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Support Pricing | Plans & Pilot Program",
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
    a: "No. We cover overflow, after-hours, and the channels your team doesn't have time for; your on-site team stays focused on in-house guests.",
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
        description="Every engagement starts with a short conversation about your volume, channels, and current gaps, then we recommend the right level of coverage."
      />

      <Section>
        <PricingCards />
        <p className="mt-10 text-center text-sm text-ink-soft">
          Not sure which plan fits?{" "}
          <Link href="/services" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Browse all services
          </Link>{" "}
          or see how we compare to{" "}
          <Link href="/resources/hotel-answering-service-vs-ai-voice" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            AI voice agents
          </Link>{" "}
          and{" "}
          <Link href="/resources/hotel-answering-service-vs-call-center" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            generic call centers
          </Link>
          .
        </p>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Questions" title="Pricing, answered honestly." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.q === "Can we start with just one service?" ? (
                  <>
                    Yes. Most clients start with{" "}
                    <Link href="/services/after-hours-support" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                      after-hours coverage
                    </Link>{" "}
                    or{" "}
                    <Link href="/services/ota-inbox-management" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                      OTA inbox management
                    </Link>
                    , then expand once they see it working.
                  </>
                ) : (
                  item.a
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Get a quote built around your property."
        description="Tell us your volume and channels, and we'll come back with a plan and a price, not a generic package."
      />
    </>
  );
}
