import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { PricingCards } from "@/components/site/pricing-cards";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { AssetBlock } from "@/components/site/asset-block";
import { BoFuTrustBlock } from "@/components/site/bofu-trust-block";
import { PostBookingSteps } from "@/components/site/post-booking-steps";
import { DownloadGate } from "@/components/site/download-gate";
import { ClientTrustBlock } from "@/components/site/client-trust-block";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Support Pricing | Plans & Pricing",
  description:
    "Starter, Growth, and Custom guest operations plans for hotels, resorts, serviced apartments, and Airbnb operators. Get a quote based on your property.",
  path: "/pricing",
});

const FAQS = [
  {
    q: "What are guest operations coverage plans?",
    a: "Guest operations coverage plans are the service tiers Guest Squad uses to package [hotel answering service](/services/hotel-answering-service) coverage, [guest messaging](/services/guest-messaging), [OTA inbox management](/services/ota-inbox-management), and after-hours support for a hotel or STR portfolio. Starter covers the core channels, Growth adds fuller coverage and reporting, and Custom is built around properties with higher volumes or multiple sites. All plans are priced per property based on actual volume and channels.",
  },
  {
    q: "Is Guest Squad pricing based per property?",
    a: "Yes. Guest Squad pricing is scoped per property or portfolio based on the channels covered, expected call and message volume, coverage hours, and reporting needs. A quote reflects your actual operation rather than a fixed tier.",
  },
  {
    q: "Why don't you list exact prices?",
    a: "Pricing depends on call and message volume, number of properties, and which channels you need covered. A quote takes one short call and reflects your actual operation, not a generic tier.",
  },
  {
    q: "What affects Guest Squad pricing the most?",
    a: "Volume is the biggest factor: total call and message volume across your covered channels. The number of properties, hours of coverage, and PMS or OTA complexity also affect the plan. A property receiving 200 calls per month is priced differently from one receiving 2,000.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. There is no setup fee or onboarding fee. Property briefing, agent training, system access, and go-live testing are included as part of getting coverage started.",
  },
  {
    q: "Can we start with a pilot before committing to monthly coverage?",
    a: "Yes. Qualified properties can start with a 2-week pilot before moving into month-to-month coverage. This gives both teams time to validate fit, guest communication workflows, escalation rules, and channel coverage before ongoing service continues.",
  },
  {
    q: "Is there a contract?",
    a: "Plans are month-to-month with 30 days notice to cancel. We would rather earn your renewal through performance than lock you in.",
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
    a: "No. Plans are month-to-month from the start with 30 days notice to cancel.",
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

      <Section>
        <PricingCards />
        <p className="mt-10 text-center text-sm text-ink-soft">
          Not sure which plan fits?{" "}
          <Link href="/services" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Browse all services
          </Link>{" "}
          or see how we compare to{" "}
          <Link href="/resources/hotel-answering-service-vs-ai-voice" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            hotel answering service vs AI voice agent
          </Link>{" "}
          and{" "}
          <Link href="/resources/hotel-answering-service-vs-call-center" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            hotel answering service vs call center
          </Link>
          .
        </p>

        <p className="mt-6 text-center text-sm text-ink-soft">
          Qualified properties can start with a 2-week pilot before moving into month-to-month coverage.{" "}
          <Link href="/pilot" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            See if you qualify for a 2-week pilot →
          </Link>
        </p>

        {/* Sample report — proof block directly under plans */}
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-line bg-surface px-8 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-ink">See exactly what you receive each week.</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Download the sample weekly report to see calls handled, OTA replies, escalations, and recommendations before committing to anything.
              </p>
            </div>
            <div className="shrink-0">
              <DownloadGate
                asset="sample-weekly-report"
                pdfHref="/downloads/sample-weekly-report.pdf"
                ctaLabel="Download Sample Report"
              />
            </div>
          </div>
        </div>
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
        title="Get a quote built around your property."
        description="Tell us your volume and channels, and we'll come back with a plan and a price, not a generic package."
      />
    </>
  );
}
