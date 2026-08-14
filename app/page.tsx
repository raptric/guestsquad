import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Differentiator } from "@/components/site/differentiator";
import { AiHuman } from "@/components/site/ai-human";
import { PropertyTypes } from "@/components/site/property-types";
import { DEFAULT_PROCESS } from "@/components/site/process-steps";
import { Guarantees } from "@/components/site/guarantees";
import { PlatformLogos } from "@/components/site/platform-logos";
import { CtaSection } from "@/components/site/cta-section";
import { SERVICES } from "@/lib/site-data";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { AssetBlock } from "@/components/site/asset-block";
import { ClientTrustBlock } from "@/components/site/client-trust-block";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service & 24/7 Guest Support",
  description:
    "Guest Squad provides 24/7 hotel guest support, reservation calls, OTA inbox management, messaging, and after-hours front desk coverage.",
  path: "",
});

const HOME_FAQS = [
  {
    q: "What does Guest Squad do?",
    a: "Guest Squad provides 24/7 human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. The service covers reservation calls, guest messages, OTA inboxes, after-hours front desk support, front desk overflow, and guest communication gaps, without requiring an additional full-time hire.",
  },
  {
    q: "Is Guest Squad a hotel answering service?",
    a: "Yes. Guest Squad provides hotel answering service coverage for reservation calls, guest questions, after-hours support, and front desk overflow. Unlike a generic call center, we also support guest messages, OTA inboxes, and property-specific escalation workflows.",
  },
  {
    q: "Is Guest Squad a hotel call center?",
    a: "No. Guest Squad is a guest operations service built specifically for hospitality, not a generic call center that also handles hotel calls. Agents are trained on hotel systems, OTA workflows, and the tone independent properties want their guests to experience.",
  },
  {
    q: "Which guest channels can Guest Squad cover?",
    a: "Phone calls, SMS, WhatsApp, email, Booking.com, Expedia, and Airbnb inboxes, and in-app messaging from supported PMS or guest-messaging platforms. Coverage is built around your existing channels, not a new system you have to adopt.",
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
    a: "Pricing is scoped per property based on call and message volume, channels covered, hours of coverage, and reporting needs. There is no fixed published rate because two properties with different volumes and channels need different coverage plans. A quote is provided after a short discovery call.",
  },
  {
    q: "What is hotel guest operations?",
    a: "Hotel guest operations covers every channel a property uses to communicate with guests: reservation calls, guest messages, OTA inboxes, after-hours support, and front desk overflow. Guest Squad manages these channels so your on-site team can focus on guests in the building.",
  },
];

const SERVICE_GROUPS = [
  {
    label: "Core guest communication",
    slugs: ["hotel-answering-service", "ota-inbox-management", "guest-messaging", "reservation-support"],
  },
  {
    label: "Coverage extensions",
    slugs: ["after-hours-support", "vacation-rental-answering-service"],
  },
  {
    label: "Operational support",
    slugs: ["back-office-operations", "airbnb-guest-support"],
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hotel Answering Service & 24/7 Guest Support | Guest Squad",
            description: "Guest Squad provides 24/7 hotel guest support, reservation calls, OTA inbox management, messaging, and after-hours front desk coverage.",
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
              Guest Operations Support
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              24/7 Hotel Answering Service & Guest Support for Properties That Can&rsquo;t Afford
              Missed Bookings
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Guest Squad covers the guest communication channels hotels cannot afford to miss: reservation calls, OTA guest messages, front-desk overflow, and after-hours gaps.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="homepage_hero">
                Book a Coverage Review
              </CoverageReviewButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                How It Works
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Built for hotels, boutique properties, resorts, serviced apartments, and Airbnb operators.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface md:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?w=1400&h=1750&fit=crop&crop=entropy&q=90"
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

      {/* PLATFORM LOGOS */}
      <PlatformLogos />

      {/* DIRECT ANSWER */}
      <div className="border-b border-line bg-surface">
        <div className="container py-5">
          <p className="mx-auto max-w-2xl text-sm leading-loose text-ink-soft">
            Guest Squad provides 24/7 human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. From{" "}
            <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              hotel answering service for independent hotels
            </Link>{" "}
            to OTA inbox management and after-hours coverage, the service fills guest communication gaps without requiring an additional full-time hire or a change to your existing systems.
          </p>
        </div>
      </div>

      {/* WHAT WE COVER STRIP */}
      <div className="border-b border-line bg-paper">
        <div className="container py-5">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
            The guest communication coverage most properties cannot afford to miss
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Reservation calls", href: "/services/hotel-answering-service" },
              { label: "OTA guest messaging", href: "/services/ota-inbox-management" },
              { label: "After-hours support", href: "/services/after-hours-support" },
              { label: "Front-desk overflow", href: "/services/hotel-answering-service" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg border border-line bg-surface px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold/40 hover:bg-gold/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <Section>
        <SectionHeading
          eyebrow="The Problem"
          title="Every unanswered call or message is a guest deciding somewhere else."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              title: "After hours, nobody answers",
              body: "A booking inquiry at 11pm waits until morning. By then, the guest has booked elsewhere.",
            },
            {
              title: "OTA inboxes pile up",
              body: "Booking.com and Expedia messages sit unread while your team handles in-person guests.",
            },
            {
              title: "Front desk is stretched thin",
              body: "Check-ins, housekeeping, and phones compete for the same two people at the desk.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-5">
              <h3 className="text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NOT A GENERIC CALL CENTER — moved above services */}
      <Section surface>
        <SectionHeading
          eyebrow="The Difference"
          title="Not a generic call center."
          description="Most outsourced support is built for volume, not hospitality. We built ours the other way around."
        />
        <div className="mt-8">
          <Differentiator />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            If your property needs guest-ready handling, OTA coverage, property-specific context, and after-hours judgment, a generic call center is the wrong model.
          </p>
          <div className="mt-5">
            <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_differentiator">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </Section>

      {/* SERVICES GRID — reframed */}
      <Section>
        <SectionHeading
          eyebrow="What We Cover"
          title="Coverage built around how hotels actually run."
        />
        <div className="mt-8 flex flex-col gap-7">
          {SERVICE_GROUPS.map((group) => {
            const groupServices = group.slugs
              .map((slug) => SERVICES.find((s) => s.slug === slug))
              .filter(Boolean) as typeof SERVICES;
            return (
              <div key={group.label}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
                  {group.label}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {groupServices.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <p className="text-sm text-ink-soft">
            Not sure which coverage areas matter most for your property?
          </p>
          <div className="mt-4">
            <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_services">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </Section>

      {/* IMAGE BREAK */}
      <section className="relative h-[320px] overflow-hidden border-b border-line md:h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1543325042-c67825847491?w=1800&q=90"
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
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line">
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
      <div className="border-t border-line bg-surface">
        <div className="container py-8">
          <div className="mb-4 text-center">
            <a
              href="https://www.trustpilot.com/review/guestsquad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <span className="text-[#00b67a]">★★★★★</span>
              <span>Rated 5 stars on Trustpilot</span>
            </a>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
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
              <div key={item.attr} className="rounded-xl border border-line bg-paper p-5">
                <svg className="h-4 w-4 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.quote}</p>
                <div className="mt-4 border-t border-line pt-3">
                  <p className="text-xs font-medium text-ink">{item.attr}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST BLOCK */}
      <Section surface compact>
        <ClientTrustBlock />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="Common Questions"
          title="What hotels usually ask before getting started."
          align="center"
          className="mx-auto"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-4">
              <h3 className="text-sm font-semibold text-ink">{item.q}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING BRIDGE */}
      <div className="border-y border-line bg-surface">
        <div className="container py-7">
          <div className="border-l-2 border-gold/30 pl-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Pricing</p>
            <h2 className="text-xl font-medium text-ink">Need to understand how coverage is scoped?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Pricing explains what every plan includes, what affects cost, and how coverage is structured around your property.
            </p>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="default" size="default" className="text-gold-dark hover:text-gold hover:bg-ink/90">
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
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <AssetBlock
            heading="Estimate missed revenue"
            assets={[{ label: "Missed Booking Revenue Calculator", href: "/resources/missed-booking-calculator" }]}
          />
          <AssetBlock
            heading="See how reporting works"
            assets={[{ label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" }]}
          />
          <AssetBlock
            heading="Identify your gaps"
            assets={[{ label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" }]}
          />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
