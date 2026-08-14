import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { AssetBlock } from "@/components/site/asset-block";
import { BoFuTrustBlock } from "@/components/site/bofu-trust-block";
import { PostBookingSteps } from "@/components/site/post-booking-steps";
import { DownloadGate } from "@/components/site/download-gate";
import { ClientTrustBlock } from "@/components/site/client-trust-block";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Support Pricing | Plans & Pricing",
  description:
    "Starter, Growth, and Custom guest operations plans for hotels, resorts, serviced apartments, and Airbnb operators. Get a quote based on your property.",
  path: "/pricing",
});

const FAQS = [
  {
    q: "Why don't you list exact prices?",
    a: "Pricing depends on interaction volume, coverage hours, property complexity, and support model fit. A quote takes one short review call and reflects your actual operation, not a generic tier.",
  },
  {
    q: "What affects Guest Squad pricing the most?",
    a: "Interaction volume is the biggest factor — the number of calls, messages, and OTA interactions your property needs covered each month. Coverage hours, property complexity, and whether shared or dedicated support is the right fit also shape the final price.",
  },
  {
    q: "Is Guest Squad pricing based per property?",
    a: "Yes. Guest Squad pricing is scoped per property or portfolio based on the channels covered, interaction volume, coverage hours, and operational complexity. A quote reflects your actual operation rather than a fixed tier.",
  },
  {
    q: "Can we start with a pilot before committing to monthly coverage?",
    a: "Yes. Qualified properties can start with a 2-week pilot before moving into month-to-month coverage. This gives both teams time to validate fit, guest communication workflows, escalation rules, and channel coverage before ongoing service continues.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. There is no setup fee or onboarding fee. Property briefing, agent training, system access, and go-live testing are included as part of getting coverage started.",
  },
  {
    q: "Is there a contract?",
    a: "Plans are month-to-month with 30 days notice to cancel. We would rather earn your renewal through performance than lock you in.",
  },
  {
    q: "Can coverage expand later?",
    a: "Yes. Most properties start with after-hours coverage or OTA inbox management, then add channels or extend hours once they see the first scope working.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hotel Guest Support Pricing | Plans & Pricing | Guest Squad",
            description: "Starter, Growth, and Custom guest operations plans for hotels, resorts, serviced apartments, and Airbnb operators. Get a quote based on your property.",
            path: "/pricing",
            primaryImageUrl: "https://guestsquad.com/brand-assets/og-image.jpg",
            primaryImageAlt: "Guest Squad pricing — hotel guest operations coverage plans",
            about: { "@id": "https://guestsquad.com/#organization" },
            audienceTypes: ["Independent Hotel","Boutique Hotel","Inn","Resort","Serviced Apartment","Aparthotel","Airbnb Host","Vrbo Host","Short-Term Rental Operator","Vacation Rental Operator","Vacation Rental Property Manager"],
            mentions: [
              // OTAs named in FAQ answers
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              // Accommodation types named in pricing plan descriptions and body text
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              { "@type": "Accommodation", "name": "Serviced Apartment" },
              { "@type": "Accommodation", "name": "Vacation Rental" },
              { "@type": "Accommodation", "name": "Resort" },
              // Service concepts named in plan table, FAQ answers, and body text
              { "@type": "Thing", "name": "Hotel Answering Service" },
              { "@type": "Thing", "name": "Hotel Guest Operations" },
              { "@type": "Thing", "name": "OTA Inbox Management" },
              { "@type": "Thing", "name": "After-Hours Hotel Support" },
              { "@type": "Thing", "name": "Hotel Front Desk Coverage" },
            ],
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]),
          faqSchema(FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <PageHero
        eyebrow="Pricing"
        title="Pricing built around your property's coverage needs"
        description="Every Guest Squad plan is built around the guest communication channels your property actually uses. Final pricing is scoped after a short review of your interaction volume, coverage hours, property complexity, and support model fit."
        primaryCta="Review My Coverage Needs"
        primaryHref="/contact"
        secondaryCta="See What Affects Pricing"
        secondaryHref="#what-affects-pricing"
      />

      {/* Direct answer block */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            Guest Squad pricing is scoped per property based on interaction volume, coverage hours, property complexity, and support model fit. Every plan is built around the channels your guests actually use. A quote is provided after a short review call.
          </p>
        </div>
      </div>

      {/* Section 2 — Core Bundle */}
      <Section surface>
        <SectionHeading
          eyebrow="What's Included"
          title="Every plan is built around the channels your guests actually use"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Every engagement is scoped around your property&rsquo;s guest communication channels — whether you operate a hotel, boutique inn, serviced apartment, or short-term rental. Coverage is built to fit how your guests reach you, not a fixed channel list.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Phone answering — reservation and guest calls",
            "OTA inbox management — Booking.com, Expedia, Airbnb",
            "SMS and WhatsApp guest messaging",
            "Email guest communication",
            "After-hours and overnight coverage",
            "Escalation handling and on-call routing",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-line bg-paper p-5">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
              <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          Not every channel applies to every property. Coverage scope is agreed during the review call based on how your guests actually reach you.
        </p>
      </Section>


      {/* Section 3 — What Affects Pricing */}
      <div id="what-affects-pricing">
        <Section>
          <SectionHeading eyebrow="Pricing Factors" title="What affects pricing most" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Interaction volume",
                body: "The number of calls, messages, and OTA interactions your property needs covered each month.",
              },
              {
                title: "Coverage hours",
                body: "Whether you need after-hours support, overflow during peak periods, extended daily coverage, or broader around-the-clock availability.",
              },
              {
                title: "Property complexity",
                body: "A single property with straightforward operations is scoped differently from a multi-property group or a higher-volume hotel with more coordination needs.",
              },
              {
                title: "Support model fit",
                body: "Some properties are well-served by shared coverage. Others need a more dedicated setup based on volume, continuity, or operational requirements.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="text-sm font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Section 4 — Coverage Types */}
      <Section surface>
        <SectionHeading eyebrow="How Properties Structure Coverage" title="How properties typically scope coverage" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "After-hours coverage",
              body: "For properties that need support when the front desk is offline — evenings, weekends, and overnight gaps.",
            },
            {
              title: "Overflow coverage",
              body: "For properties that need backup during busy call and message periods when the team is at capacity.",
            },
            {
              title: "Extended coverage",
              body: "For properties that need broader daily support across their core guest communication channels.",
            },
            {
              title: "Custom coverage",
              body: "For properties with higher interaction volume, multiple locations, or more complex operational coordination needs.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          These are coverage patterns, not fixed plan tiers. Most properties start with one pattern and adjust as their coverage needs become clearer.
        </p>
      </Section>

      {/* Section 5 — Support Model */}
      <Section>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Coverage Fit</p>
          <h2 className="text-2xl font-medium text-ink">Coverage is scoped to fit the way your property operates</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Some properties are best served through efficient shared coverage. Others need a more dedicated setup because of interaction volume, operational complexity, or continuity requirements. We determine the right fit during the review call rather than applying the same model to every property.
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            The fit affects both how coverage is structured and how it is priced.
          </p>
        </div>
      </Section>

      {/* Section 6 — How Pricing Is Scoped */}
      <Section surface>
        <SectionHeading eyebrow="How It Works" title="How pricing works" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "We review your current call and OTA message flow" },
            { n: "02", title: "We identify where coverage is needed most" },
            { n: "03", title: "We recommend the right coverage structure" },
            { n: "04", title: "We provide a scoped quote based on fit" },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-2">
              <span className="text-2xl font-semibold tabular-nums text-gold-dark/30">{step.n}</span>
              <p className="text-sm font-medium text-ink">{step.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-muted">
          Qualified properties can move into a 2-week pilot after review.
        </p>
        <div className="mt-5">
          <CoverageReviewButton variant="gold" size="default" ctaLocation="pricing_how_it_works">
            Review My Coverage Needs
          </CoverageReviewButton>
        </div>
      </Section>

      <Section surface compact>
        <ClientTrustBlock />
      </Section>

      <Section>
        <SectionHeading eyebrow="Questions" title="Pricing, answered honestly." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.a.split(/(\[[^\]]+\]\([^)]+\))/).map((part, j) => {
                  const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                  return m ? <Link key={j} href={m[2]} className="text-gold-dark underline underline-offset-4 hover:text-gold">{m[1]}</Link> : part;
                })}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Not Sure What Coverage You Need?"
          title="Use these tools before requesting a quote."
        />
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Or book a Coverage Review and we will walk through them with you.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <AssetBlock
            heading="Estimate missed revenue"
            assets={[{ label: "Missed Booking Revenue Calculator", href: "/resources/missed-booking-calculator" }]}
          />
          <AssetBlock
            heading="Find your coverage gaps"
            assets={[{ label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" }]}
          />
          <AssetBlock
            heading="See what reporting looks like"
            assets={[{ label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" }]}
          />
        </div>
      </Section>

      <Section compact>
        <PostBookingSteps />
      </Section>

      <Section surface compact>
        <BoFuTrustBlock />
      </Section>

      <CtaSection
        title="Get pricing that fits your property, not a generic tier"
        description="We'll review your interaction volume, coverage needs, and operational setup before recommending the right structure and quote."
      />
    </>
  );
}
