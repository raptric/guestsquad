import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Support Pricing | Guest Squad",
  description:
    "Guest Squad pricing is scoped around your property's channels, interaction volume, and coverage hours. Every plan starts with the channels your guests use. Get a quote after a short review call.",
  path: "/pricing",
});

const FAQS = [
  {
    q: "Why don't you list exact prices?",
    a: "Pricing depends on interaction volume, coverage hours, property complexity, and support model fit. A scoped review call is the fastest way to get a quote that reflects your actual operation.",
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
            name: "Hotel Guest Support Pricing | Guest Squad",
            description: "Guest Squad pricing is scoped around your property's channels, interaction volume, and coverage hours. Every plan starts with the channels your guests use. Get a quote after a short review call.",
            path: "/pricing",
            primaryImageUrl: "https://guestsquad.com/brand-assets/og-image.jpg",
            primaryImageAlt: "Guest Squad pricing — hotel guest operations coverage plans",
            about: { "@id": "https://guestsquad.com/#organization" },
            audienceTypes: ["Independent Hotel","Boutique Hotel","Inn","Resort","Serviced Apartment","Aparthotel","Airbnb Host","Vrbo Host","Short-Term Rental Operator","Vacation Rental Operator","Vacation Rental Property Manager"],
            mentions: [
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              { "@type": "Accommodation", "name": "Serviced Apartment" },
              { "@type": "Accommodation", "name": "Vacation Rental" },
              { "@type": "Accommodation", "name": "Resort" },
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

      {/* Section 1 — Hero */}
      <PageHero
        eyebrow="Pricing"
        title="Pricing built around your property's coverage needs"
        description="Every Guest Squad plan starts with the guest communication channels most independent hotels cannot afford to miss. Final pricing is scoped after a short review of your interaction volume, coverage hours, property complexity, and support model fit."
        primaryCta="Review My Coverage Needs"
        primaryHref="/contact"
        secondaryCta="See What Affects Pricing"
        secondaryHref="#what-affects-pricing"
      />

      {/* Hero helper line */}
      <div className="border-b border-line bg-paper">
        <div className="container py-4 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ink-soft">
            We scope the level of coverage your property actually needs without overbuilding or under-covering it.
          </p>
        </div>
      </div>

      {/* Section 2 — Intro strip */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            Guest Squad pricing is scoped per property based on interaction volume, coverage hours, operational complexity, and delivery fit.
          </p>
        </div>
      </div>

      {/* Section 3 — What's Included */}
      <Section surface>
        <SectionHeading
          eyebrow="What's Included"
          title="Every plan is built around the channels your guests actually use"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Every engagement is scoped around your property&rsquo;s guest communication channels, whether you operate a hotel, boutique inn, serviced apartment, or short-term rental. Coverage is built to fit how your guests actually reach you.
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
          Every property starts with core guest communication coverage. Final scope is confirmed during the review call based on how your guests actually reach you.
        </p>
      </Section>

      {/* Section 4 — What Affects Pricing */}
      <div id="what-affects-pricing">
        <Section>
          <SectionHeading eyebrow="Pricing Factors" title="What affects pricing most" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Interaction volume",
                body: "The number of calls, messages, and OTA guest interactions your property needs covered each month.",
              },
              {
                title: "Coverage hours",
                body: "Whether you need after-hours support, overflow during peak periods, extended daily coverage, or broader around-the-clock availability.",
              },
              {
                title: "Property complexity",
                body: "A single-property setup with straightforward operations is scoped differently from a multi-property group or a higher-volume hotel with more coordination needs.",
              },
              {
                title: "Support model fit",
                body: "Some properties are best served through shared coverage. Others need a more dedicated setup based on volume, continuity, or operational requirements.",
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

      {/* Section 5 — Coverage Types */}
      <Section surface>
        <SectionHeading eyebrow="How Properties Structure Coverage" title="How hotels usually structure coverage" />
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
          These are common coverage patterns, not fixed plan tiers. Most properties start with one pattern and refine coverage as needs become clearer.
        </p>
        <div className="mt-8 flex justify-center">
          <CoverageReviewButton variant="gold" size="default" ctaLocation="pricing_coverage_types">
            Review My Coverage Needs
          </CoverageReviewButton>
        </div>
      </Section>

      {/* Section 6 — Coverage Fit */}
      <Section>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Coverage Fit</p>
          <h2 className="text-2xl font-medium text-ink">Not every property needs the same support model</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Lower-volume properties are often a fit for efficient shared coverage, while busier or more operationally complex hotels may need a more dedicated setup. We determine the right fit during the review so coverage matches your volume, continuity needs, and workflow complexity.
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            This affects both how coverage is structured and how it is priced.
          </p>
        </div>
      </Section>

      {/* Section 7 — ROI Bridge */}
      <div className="border-y border-line bg-surface">
        <div className="container py-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Why This Matters</p>
          <h2 className="max-w-2xl text-xl font-medium text-ink">
            The right question is not just what coverage costs
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            It is whether missed reservation calls, slow OTA replies, and after-hours gaps are already costing more than the support required to fix them. The review call helps scope coverage around that reality before missed demand turns into lost revenue.
          </p>
        </div>
      </div>

      {/* Section 8 — How Pricing Works */}
      <Section surface>
        <SectionHeading eyebrow="How It Works" title="How pricing works" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "We review your current call and OTA message flow" },
            { n: "02", title: "We identify where guest communication is being missed or delayed" },
            { n: "03", title: "We recommend the right coverage structure" },
            { n: "04", title: "We provide a scoped quote based on fit" },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-2">
              <span className="text-2xl font-semibold tabular-nums text-gold-dark/30">{step.n}</span>
              <p className="text-sm font-medium text-ink">{step.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Slim dark CTA before FAQ */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">You do not need to know the right plan before reaching out. Most properties do not.</p>
            <p className="mt-1 text-sm text-paper/60">Qualified properties can move into a 2-week pilot after review.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="sm" ctaLocation="pricing_pre_faq">
              Review My Coverage Needs
            </CoverageReviewButton>
          </div>
        </div>
      </div>

      {/* Section 9 — FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions" title="Pricing questions, answered clearly." />
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

      {/* SEO link strip */}
      <div className="border-t border-line bg-surface">
        <div className="container py-8 text-center">
          <p className="text-sm text-ink-soft">
            Not sure where to start?{" "}
            <Link href="/services" className="text-gold-dark underline underline-offset-4 hover:text-gold">Browse all services</Link>
            {" "}or see how we compare to{" "}
            <Link href="/resources/hotel-answering-service-vs-ai-voice" className="text-gold-dark underline underline-offset-4 hover:text-gold">hotel answering service vs AI voice agent</Link>
            {" "}and{" "}
            <Link href="/resources/hotel-answering-service-vs-call-center" className="text-gold-dark underline underline-offset-4 hover:text-gold">hotel answering service vs call center</Link>.
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            Qualified properties can start with a 2-week pilot before moving into month-to-month coverage.{" "}
            <Link href="/pilot" className="text-gold-dark underline underline-offset-4 hover:text-gold">See if you qualify for a 2-week pilot →</Link>
          </p>
        </div>
      </div>

      {/* Micro-proof strip */}
      <div className="border-t border-line bg-surface">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "Core phone + OTA coverage",
              "Scoped per property",
              "2-week pilot for qualified properties",
              "Month-to-month after pilot",
            ].map((item) => (
              <span key={item} className="text-xs font-medium text-ink-soft">
                <span className="mr-2 text-gold-dark">✓</span>{item}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Section 11 — Final CTA */}
      <CtaSection
        title="Get pricing that fits your property, not a generic tier"
        description="We'll review your interaction volume, coverage hours, property complexity, and operational setup before recommending the right structure and quote."
        primaryCta="Review My Coverage Needs"
      />
    </>
  );
}
