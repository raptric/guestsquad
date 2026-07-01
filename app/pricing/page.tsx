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
    q: "What affects GuestSquad pricing the most?",
    a: "Volume is the biggest factor: total call and message volume across your covered channels. The number of properties, hours of coverage, and PMS or OTA complexity also affect the plan. A property receiving 200 calls per month is priced differently from one receiving 2,000.",
  },
  {
    q: "Is there a setup fee?",
    a: "There is a one-time onboarding fee that covers property briefing, agent training, system access, and go-live testing. The fee is disclosed during your initial quote call and is not a recurring charge.",
  },
  {
    q: "Can we start with a pilot?",
    a: "Yes. A pilot covering a defined set of hours or channels is available for properties that want to test the service before committing to a full plan. Ask about pilot options during your demo call.",
  },
  {
    q: "Is there a contract?",
    a: "Plans are month-to-month after the initial setup period. We would rather earn renewal through performance than lock you in.",
  },
  {
    q: "Can pricing change if call or message volume increases?",
    a: "Yes. Plans are reviewed when volume increases significantly. You will never be billed at a higher rate without advance notice and your agreement.",
  },
  {
    q: "Do you offer seasonal coverage?",
    a: "Yes. Properties with seasonal peaks can structure coverage to match: full coverage during high season and reduced coverage or a pause during low season. This is agreed during onboarding.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "There is a minimum coverage period tied to the onboarding investment, typically three months, after which plans are month-to-month. The exact minimum is confirmed in your quote.",
  },
  {
    q: "Can we start with one service and add more later?",
    a: "Yes. Most clients start with after-hours coverage or OTA inbox management, then add reservation support or guest messaging once they see the first service working.",
  },
  {
    q: "What do we need to provide before launch?",
    a: "Access to your PMS or booking system, OTA extranets if applicable, your rates and room types, cancellation and modification policies, brand voice guidelines, and an escalation contact list. We provide a setup checklist during onboarding.",
  },
  {
    q: "Do you replace our front desk staff?",
    a: "No. We cover overflow, after-hours, and the channels your team does not have time for. Your on-site team stays focused on in-house guests.",
  },
  {
    q: "Can we start with just one service?",
    a: "Yes. Most clients start with after-hours coverage or OTA inbox management, then expand once they see it working.",
  },
];

const PRICING_FACTORS = [
  "Number of properties or listings",
  "Monthly call volume",
  "Monthly message volume across channels",
  "Which channels are covered (calls, SMS, WhatsApp, OTA inboxes)",
  "Hours of coverage required",
  "PMS and OTA platform complexity",
  "Escalation rules and on-call requirements",
  "Reporting frequency and format",
  "Seasonal coverage adjustments",
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

      {/* Pricing factors */}
      <Section surface>
        <SectionHeading eyebrow="What Goes Into a Quote" title="What pricing depends on." />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          No two properties have the same volume, channels, or coverage needs. A quote reflects your actual operation. These are the factors that shape it.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_FACTORS.map((factor) => (
            <li key={factor} className="flex items-start gap-3 rounded-lg border border-line bg-paper px-5 py-4">
              <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
              <span className="text-sm leading-relaxed text-ink-soft">{factor}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
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
