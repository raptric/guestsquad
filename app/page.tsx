import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/site/button-link";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Differentiator } from "@/components/site/differentiator";
import { AiHuman } from "@/components/site/ai-human";
import { PropertyTypes } from "@/components/site/property-types";
import { DEFAULT_PROCESS } from "@/components/site/process-steps";
import { Metrics } from "@/components/site/metrics";
import { PricingCards } from "@/components/site/pricing-cards";
import { CtaSection } from "@/components/site/cta-section";
import { SERVICES } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "24/7 Hotel Guest Support & Reservation Services",
  description:
    "GuestSquad provides 24/7 hotel guest support, reservation calls, OTA inbox management, messaging, and after-hours front desk coverage.",
  path: "",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Guest Operations Support
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              24/7 Hotel Guest Support for Properties That Can&rsquo;t Afford
              Missed Bookings
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              GuestSquad handles reservations, guest messages, OTA
              inquiries, callbacks, upsells, and after-hours support, so
              your front desk stays focused on in-house guests.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="gold" size="lg">
                Book a 15-Minute Demo
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                See Services
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
          alt="Sleek hotel reception desk with a wall reading RECEPTION"
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
              alt="Onboarding and property briefing in progress"
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

      {/* METRICS */}
      <Section>
        <SectionHeading eyebrow="What to Expect" title="Coverage that shows up in the numbers." align="center" className="mx-auto" />
        <div className="mt-12">
          <Metrics />
        </div>
      </Section>

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
          <ButtonLink href="/pricing" variant="link">
            See full pricing details →
          </ButtonLink>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
