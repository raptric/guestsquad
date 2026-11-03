import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Section, SectionHeading } from "@/components/site/section";
import { AiHuman } from "@/components/site/ai-human";
import { PropertyTypes } from "@/components/site/property-types";
import { DEFAULT_PROCESS } from "@/components/site/process-steps";
import { Guarantees } from "@/components/site/guarantees";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { AssetBlock } from "@/components/site/asset-block";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = buildMetadata({
  title: "Guest Squad: Digital Front Desk & Central Reservations for Hotels",
  description:
    "Hospitality-trained remote teams for hotels, property management companies and vacation-rental operators. Guest reception, reservation enquiries and guest requests handled through your existing systems.",
  path: "",
});

const HOME_FAQS = [
  {
    q: "What does Guest Squad do?",
    a: "Guest Squad provides 24/7 human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. The service covers reservation calls, guest messages, OTA inboxes, after-hours front desk support, front desk overflow, and guest communication gaps, without requiring an additional full-time hire.",
  },
  {
    q: "Is Guest Squad a hotel answering service?",
    a: "Yes. Guest Squad provides [hotel answering service](/services/hotel-answering-service) coverage for reservation calls, guest questions, after-hours support, and front desk overflow. Unlike a generic call center, we also support guest messages, OTA inboxes, and property-specific escalation workflows.",
  },
  {
    q: "Which guest channels can Guest Squad cover?",
    a: "Phone calls, SMS, WhatsApp, email, Booking.com, Expedia, and Airbnb inboxes, and in-app messaging from supported PMS or guest-messaging platforms. [OTA inboxes](/services/ota-inbox-management) are covered as a dedicated service. Coverage is built around your existing channels, not a new system you have to adopt.",
  },
  {
    q: "What types of properties use Guest Squad?",
    a: "Independent hotels, boutique properties, resorts, serviced apartments, Airbnb hosts, Vrbo operators, and short-term rental property managers, typically from a single property up to a small portfolio.",
  },
  {
    q: "Does Guest Squad replace our front desk team?",
    a: "No. Guest Squad is designed to extend your front desk, not replace it. We handle overflow, after-hours, and the channels your on-site team does not have time to monitor, so the people you have hired can focus on the guests in front of them.",
  },
  {
    q: "How quickly can Guest Squad go live?",
    a: "Most clients are live within 5 business days of signing. Onboarding covers your rates, policies, PMS access, escalation rules, and brand voice before any agent handles a guest interaction.",
  },
  {
    q: "How does hotel answering service pricing work?",
    a: "Pricing is scoped per property based on call and message volume, channels covered, hours of coverage, and reporting needs. There is no fixed published rate because two properties with different volumes and channels need different coverage plans. See [what affects pricing](/pricing) before your first call.",
  },
  {
    q: "What is hotel guest operations?",
    a: "Hotel guest operations covers every channel a property uses to communicate with guests: [reservation calls](/services/reservation-support), guest messages, OTA inboxes, after-hours support, and front desk overflow. Guest Squad manages these channels so your on-site team can focus on guests in the building.",
  },
];


export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Digital Front Desk & Central Reservations for Hotels | Guest Squad",
            description: "Hospitality-trained remote teams for hotels, property management companies and vacation-rental operators. Guest reception, reservation enquiries and guest requests handled through your existing systems.",
            path: "",
            primaryImageUrl: "https://guestsquad.com/brand-assets/guestsquad-favicon-official.svg",
            primaryImageAlt: "Guest Squad logo",
            about: { "@id": "https://guestsquad.com/#organization" },
            mainEntityId: "https://guestsquad.com/#organization",
            audienceTypes: ["Independent Hotel","Boutique Hotel","Inn","Resort","Serviced Apartment","Aparthotel","Airbnb Host","Vrbo Host","Short-Term Rental Operator","Vacation Rental Operator","Vacation Rental Property Manager"],
            mentions: [
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              { "@type": "Organization", "name": "Vrbo" },
              { "@type": "Organization", "name": "Hotels.com" },
              { "@type": "Thing", "name": "Cloudbeds" },
              { "@type": "Thing", "name": "Mews" },
              { "@type": "Thing", "name": "Opera PMS" },
              { "@type": "Thing", "name": "Guesty" },
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              { "@type": "Accommodation", "name": "Independent Hotel" },
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
          faqSchema(HOME_FAQS),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-22">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Your Dedicated Guest Team
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Digital Front Desk &amp; Central Reservations for Hotels and Property Portfolios
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Hospitality-trained remote teams for independent hotels, property management companies and vacation-rental operators. We handle reservation enquiries, guest reception and day-to-day guest requests through your existing systems, following your property procedures and coordinating with your teams.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="homepage_hero">
                Discuss Your Requirements
              </CoverageReviewButton>
              <a
                href="#flagship-offers"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                Explore Our Services
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              After-hours, overflow and broader coverage for individual properties and portfolios.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface md:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?w=750&h=938&fit=crop&crop=entropy&q=75&auto=format"
              alt="Lively boutique hotel lobby and reception desk with staff at the front desk"
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* THREE FLAGSHIP OFFERS */}
      <Section id="flagship-offers">
        <SectionHeading
          eyebrow="Our Services"
          title="A guest team for your property or portfolio."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* Digital Front Desk */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Digital Front Desk</p>
            <h2 className="mt-2 text-lg font-medium text-ink">Remote reception for hotels and serviced properties.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For independent hotels, boutique properties, serviced apartments and contactless properties. We handle guest enquiries, arrival assistance, access support and day-to-day guest requests through your existing systems, following your property&rsquo;s own procedures.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Relevant services</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Hotel Answering Service", href: "/services/hotel-answering-service" },
                  { label: "After-Hours Support", href: "/services/after-hours-support" },
                  { label: "Guest Messaging", href: "/services/guest-messaging" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_digital_front_desk">
                Discuss Front Desk Coverage
              </CoverageReviewButton>
            </div>
          </div>

          {/* Central Reservations Desk */}
          <div className="flex flex-col rounded-lg border border-gold/40 bg-paper p-7 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Central Reservations Desk</p>
            <h2 className="mt-2 text-lg font-medium text-ink">A coordinated reservations operation for hotel groups and portfolios.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For hotel groups, property management companies and hospitality portfolios. We manage reservation enquiries, approved bookings, modifications and cancellations across your participating properties — each following its own rates, policies and systems, with management oversight retained by your team.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Relevant services</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Reservation Support", href: "/services/reservation-support" },
                  { label: "OTA Inbox Management", href: "/services/ota-inbox-management" },
                  { label: "Back-Office Operations", href: "/services/back-office-operations" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_central_reservations">
                Discuss Your Reservations Operation
              </CoverageReviewButton>
            </div>
          </div>

          {/* Vacation Rental Guest Operations */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Vacation Rental Guest Operations</p>
            <h2 className="mt-2 text-lg font-medium text-ink">Listing-specific guest operations for professional STR portfolios.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For professional vacation-rental companies and STR managers on Airbnb, Vrbo and direct-booking channels. We handle listing-specific guest communication, arrival assistance, access support and coordination with your approved housekeeping and maintenance contacts across your full portfolio.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Relevant services</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Vacation Rental Answering Service", href: "/services/vacation-rental-answering-service" },
                  { label: "Airbnb Guest Support", href: "/services/airbnb-guest-support" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_vacation_rental">
                Discuss Your Rental Portfolio
              </CoverageReviewButton>
            </div>
          </div>

        </div>
      </Section>

      {/* COVERAGE AROUND YOUR OPERATION */}
      <Section id="coverage-types" surface>
        <SectionHeading
          eyebrow="Coverage Options"
          title="Coverage built around your operation."
          align="center"
          className="mx-auto"
        />
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          Most properties start with one coverage type and expand as the need becomes clear.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* After-Hours & Weekend */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">After-Hours &amp; Weekends</p>
            <h2 className="mt-2 text-lg font-medium text-ink">Coverage when your front desk is closed or reduced.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Evenings, overnight, early mornings and weekends. Reservation calls, guest messages and OTA inboxes answered by a trained person, not a voicemail or a bot. Most common entry point for independent hotels.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "After-Hours Support", href: "/services/after-hours-support" },
                  { label: "Hotel Answering Service", href: "/services/hotel-answering-service" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Overflow & Staff Absence */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Overflow &amp; Staff Absence</p>
            <h2 className="mt-2 text-lg font-medium text-ink">Backup when your team is at capacity or short-staffed.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Check-in peaks, high-occupancy periods, staff holidays and unplanned absence. We step in when your on-site team cannot cover the volume, so no call or message falls through.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Hotel Answering Service", href: "/services/hotel-answering-service" },
                  { label: "Guest Messaging", href: "/services/guest-messaging" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Extended & Portfolio Coverage */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Extended &amp; Portfolio Coverage</p>
            <h2 className="mt-2 text-lg font-medium text-ink">Broader coverage across more hours, channels or properties.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For properties that need coverage across the full day, multiple channels, or a portfolio of properties and listings. Scoped around your actual operation, not a generic tier.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Reservation Support", href: "/services/reservation-support" },
                  { label: "OTA Inbox Management", href: "/services/ota-inbox-management" },
                  { label: "Vacation Rental Answering Service", href: "/services/vacation-rental-answering-service" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className="mt-10 flex justify-center">
          <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_coverage_types">
            Discuss Your Coverage Needs
          </CoverageReviewButton>
        </div>
      </Section>

      {/* IMAGE BREAK */}
      <section className="relative h-[320px] overflow-hidden border-b border-line md:h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1543325042-c67825847491?w=1200&q=75&auto=format"
          alt="Hotel front desk reception area representing 24/7 guest coverage for independent hotels"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <p className="max-w-md text-2xl font-medium leading-snug text-paper md:text-3xl">
              The same standard of care your front desk gives in person, extended to every channel, every hour.
            </p>
          </div>
        </div>
      </section>

      {/* AI + HUMAN */}
      <Section className="bg-[#F4F3F1]">
        <SectionHeading
          eyebrow="How It Works"
          title="Technology routes it. People handle it."
          description="We use software to make sure nothing is missed, but every guest conversation is handled by a trained person, not a bot."
        />
        <div className="mt-8">
          <AiHuman />
        </div>
      </Section>

      {/* PROPERTY TYPES */}
      <Section>
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for every kind of guest operation."
        />
        <div className="mt-8">
          <PropertyTypes />
        </div>
      </Section>

      {/* PROCESS */}
      <Section surface>
        <SectionHeading eyebrow="How We Work" title="Live in days, not months." />
        <div className="mt-6 grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-14">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-line">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=90"
              alt="Guest Squad property briefing and onboarding session before hotel answering service goes live"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            {DEFAULT_PROCESS.map((s, i) => (
              <div key={s.step} className="flex gap-4">
                <span className="flex-shrink-0 text-2xl font-medium text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {s.step}
                  </p>
                  <h3 className="mt-1 text-base font-medium text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW GUEST SQUAD WORKS — replaces PricingCards, scroll target for hero */}
      <Section id="how-it-works">
        <SectionHeading eyebrow="How It Works" title="How Guest Squad works." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "We review your guest communication gaps and missed-coverage hours" },
            { n: "02", title: "We map the channels, volume, and hours your property needs covered" },
            { n: "03", title: "We brief the team on your property, policies, and escalation rules" },
            { n: "04", title: "Coverage goes live — with reporting and refinement from day one" },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-2 border-t-2 border-gold/25 pt-4">
              <span className="text-2xl font-semibold tabular-nums text-gold-dark/60">{step.n}</span>
              <p className="text-sm font-medium text-ink">{step.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          Most qualified properties can be scoped and live within 5 business days.
        </p>
        <div className="mt-5">
          <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_how_it_works">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </Section>

      {/* GUARANTEES */}
      <Section surface>
        <SectionHeading eyebrow="Our Commitments" title="What every client gets from day one." align="center" className="mx-auto" />
        <div className="mt-8">
          <Guarantees />
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <div className="border-t border-line bg-paper">
        <div className="container py-8">
          <div className="mb-6 text-center">
            <a
              href="https://www.trustpilot.com/review/guestsquad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-gold-dark"
            >
              <span className="font-bold text-[#00b67a]">★★★★★</span>
              <span>Rated 5 stars on Trustpilot</span>
            </a>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              What early operators say about Guest Squad
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                quote: "We were losing reservation calls every night after 10pm. Within the first week of coverage it was clear it was working.",
                attr: "General Manager, 48-room boutique hotel",
                location: "Southeast US",
              },
              {
                quote: "Our OTA response times were hurting our Booking.com ranking. Guest Squad took over the inbox and the response window dropped significantly.",
                attr: "Owner-operator, serviced apartment portfolio",
                location: "UK",
              },
              {
                quote: "The pilot let us test whether a coverage service could actually follow our property's tone and escalation rules before we committed to anything.",
                attr: "Operations Manager, independent resort",
                location: "Pacific Northwest",
              },
            ].map((item) => (
              <div key={item.attr} className="rounded-xl border border-[#E5E0D8] bg-[#F7F5F2] p-5 shadow-sm">
                <svg className="h-5 w-5 text-gold/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-3 text-sm leading-relaxed text-ink">{item.quote}</p>
                <div className="mt-4 border-t border-[#E5E0D8] pt-3">
                  <p className="text-xs font-semibold text-ink">{item.attr}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <Section className="bg-[#F7F5F2]">
        <SectionHeading
          eyebrow="Common Questions"
          title="What hotels usually ask before getting started."
          align="center"
          className="mx-auto max-w-none"
          titleClassName="text-2xl md:text-3xl whitespace-nowrap"
        />
        <div className="mt-8">
          <FaqAccordion items={HOME_FAQS} defaultOpenCount={2} />
        </div>
      </Section>

      {/* PRICING BRIDGE */}
      <div className="border-y border-line bg-surface">
        <div className="container py-7">
          <div className="border-l-2 border-gold/30 pl-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Pricing</p>
            <h2 className="text-2xl font-medium text-ink">Need to understand how coverage is scoped?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Pricing explains what every plan includes, what affects cost, and how coverage is structured around your property.
            </p>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="gold" size="default">
                See Pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS AND RESOURCES */}
      <Section>
        <SectionHeading
          eyebrow="Tools and Resources"
          title="Find and fix your guest coverage gaps."
        />
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Use these tools to estimate missed revenue, review reporting, and identify where guest coverage is breaking down.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          {/* Calculator — primary */}
          <Link
            href="/resources/missed-booking-calculator"
            className="group flex items-center justify-between gap-6 rounded-xl border border-gold/40 bg-paper px-7 py-6 shadow-sm transition-colors hover:border-gold hover:bg-gold/5"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                Most useful first step
              </p>
              <h3 className="mt-1 text-base font-semibold text-ink">Missed Booking Revenue Calculator</h3>
              <p className="mt-1 text-sm text-ink-soft">Estimate how much revenue your property loses to unanswered calls and messages.</p>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-gold-dark px-4 py-2 text-sm font-medium text-paper transition-colors group-hover:bg-gold">
              Calculate →
            </span>
          </Link>

          {/* Secondary resources */}
          <div className="grid gap-4 sm:grid-cols-2">
            <AssetBlock
              heading="See how reporting works"
              assets={[{ label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" }]}
            />
            <AssetBlock
              heading="Identify your gaps"
              assets={[{ label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" }]}
            />
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
