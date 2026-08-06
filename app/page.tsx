import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Differentiator } from "@/components/site/differentiator";
import { AiHuman } from "@/components/site/ai-human";
import { PropertyTypes } from "@/components/site/property-types";
import { DEFAULT_PROCESS } from "@/components/site/process-steps";
import { Guarantees } from "@/components/site/guarantees";
import { PlatformLogos } from "@/components/site/platform-logos";
import { PricingCards } from "@/components/site/pricing-cards";
import { CtaSection } from "@/components/site/cta-section";
import { SERVICES } from "@/lib/site-data";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { AssetBlock } from "@/components/site/asset-block";
import { ClientTrustBlock } from "@/components/site/client-trust-block";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service & 24/7 Guest Support | Guest Squad",
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
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Guest Operations Support
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              24/7 Hotel Answering Service & Guest Support for Properties That Can&rsquo;t Afford
              Missed Bookings
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Guest Squad is a hotel answering service and guest operations
              team that handles reservations, guest messages, OTA inquiries,
              callbacks, upsells, and after-hours support, so your front
              desk stays focused on in-house guests.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CalendlyPopupButton variant="gold" size="lg">
                Book a Coverage Review
              </CalendlyPopupButton>
              <ButtonLink href="/pilot" variant="outline" size="lg">
                Request Pilot Review
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Support, overflow & after-hours coverage. Never a replacement for your team.
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

      {/* Direct answer block */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            Guest Squad provides 24/7 human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. From{" "}
            <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              hotel answering service for independent hotels
            </Link>{" "}
            to OTA inbox management and after-hours coverage, the service fills guest communication gaps without requiring an additional full-time hire or a change to your existing systems.
          </p>
          <div className="mx-auto mt-5 max-w-3xl rounded-lg border border-gold/30 bg-gold/5 px-5 py-4">
            <p className="text-sm font-medium text-ink">Not sure what level of coverage you need?</p>
            <div className="mt-3">
              <ButtonLink href="/pilot" variant="gold" size="sm">
                Request a Pilot Review
              </ButtonLink>
            </div>
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
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
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
            <div key={item.title} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section surface>
        <SectionHeading
          eyebrow="What We Cover"
          title="Guest operations, end to end."
          description="Pick full coverage or only the gaps your team can't currently fill."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
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

      {/* NOT A GENERIC CALL CENTER */}
      <Section>
        <SectionHeading
          eyebrow="The Difference"
          title="Not a generic call center."
          description="Most outsourced support is built for volume, not hospitality. We built ours the other way around."
        />
        <div className="mt-12">
          <Differentiator />
        </div>
      </Section>

      {/* AI + HUMAN */}
      <Section surface>
        <SectionHeading
          eyebrow="How It Works"
          title="Technology routes it. People handle it."
          description="We use software to make sure nothing is missed, but every guest conversation is handled by a trained person, not a bot."
        />
        <div className="mt-12">
          <AiHuman />
        </div>
      </Section>

      {/* PROPERTY TYPES */}
      <Section>
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for every kind of guest operation."
        />
        <div className="mt-12">
          <PropertyTypes />
        </div>
      </Section>

      {/* PROCESS */}
      <Section surface>
        <SectionHeading eyebrow="How We Work" title="Live in days, not months." />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
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
          <div className="flex flex-col gap-8">
            {DEFAULT_PROCESS.map((s, i) => (
              <div key={s.step} className="flex gap-5">
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

      {/* PILOT CTA */}
      <div className="border-t border-b border-line bg-gold/5">
        <div className="container py-10 text-center">
          <p className="text-base font-medium text-ink">Start with a no-obligation pilot review</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
            We&rsquo;ll review your calls, guest messages, OTA inboxes, after-hours gaps, and escalation needs, then recommend whether a 2-week pilot is the right fit.
          </p>
          <div className="mt-5">
            <ButtonLink href="/pilot" variant="gold" size="lg">
              Request Pilot Review
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* GUARANTEES */}
      <Section>
        <SectionHeading eyebrow="Our Commitments" title="What every client gets from day one." align="center" className="mx-auto" />
        <div className="mt-12">
          <Guarantees />
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <div className="border-t border-line bg-surface">
        <div className="container py-10">
          <div className="mb-5 text-center">
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
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                quote: "We were losing reservation calls every night after 10pm. The pilot showed us exactly what was being missed — and within the first week it was clear coverage was working. We continued month-to-month after.",
                attr: "General Manager, 48-room boutique hotel",
                location: "Southeast US",
              },
              {
                quote: "Our OTA response times were hurting our ranking on Booking.com. Guest Squad took over the inbox during the pilot and we saw the response window drop significantly. The weekly report made it easy to verify.",
                attr: "Owner-operator, serviced apartment portfolio",
                location: "UK",
              },
              {
                quote: "I didn't want to hire another front desk shift just for overflow. The pilot let us test whether a coverage service could actually follow our property's tone and escalation rules before we committed to anything.",
                attr: "Operations Manager, independent resort",
                location: "Pacific Northwest",
              },
            ].map((item) => (
              <div key={item.attr} className="rounded-xl border border-line bg-paper p-6">
                <svg className="h-5 w-5 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.quote}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-xs font-medium text-ink">{item.attr}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING PREVIEW */}
      <Section surface>
        <SectionHeading
          eyebrow="Pricing"
          title="Three ways to get started."
          description="Every plan starts with a conversation about your property, not a sales pitch."
        />
        <div className="mt-12">
          <PricingCards />
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-soft">
            Qualified properties can start with a 2-week no-obligation pilot before moving into month-to-month coverage.
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/pilot" variant="gold" size="lg">
              Request Pilot Review
            </ButtonLink>
            <ButtonLink href="/pricing" variant="link">
              See full pricing details →
            </ButtonLink>
          </div>
        </div>
      </Section>

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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Tools and Resources"
          title="Find and fix your guest coverage gaps."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
