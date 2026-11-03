import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Section, SectionHeading } from "@/components/site/section";
import { PlatformLogos } from "@/components/site/platform-logos";
import { DEFAULT_PROCESS } from "@/components/site/process-steps";
import { Guarantees } from "@/components/site/guarantees";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = buildMetadata({
  title: "Guest Squad: Digital Front Desk & Central Reservations for Hotels",
  description:
    "Hospitality-trained remote teams for hotels, property management companies and vacation-rental operators. Guest reception, reservation enquiries and guest requests handled through your existing systems.",
  path: "",
});

const HOME_FAQS = [
  {
    q: "How does Guest Squad learn our property's procedures and tone?",
    a: "Before any agent handles a guest interaction, we run a property briefing that covers your rates, policies, escalation rules, PMS access, and how you talk to guests. Agents follow your procedures, not a generic script. Most properties finish onboarding and go live within 5 business days.",
  },
  {
    q: "What happens if a guest issue needs someone on-site?",
    a: "Every property brief includes a clear escalation path. If something needs hands-on attention, the agent contacts the right person at your property the way you've specified. We don't make on-site calls. We make sure your team gets reached right away.",
  },
  {
    q: "Can we start with one channel and expand later?",
    a: "Yes. Most properties start with after-hours phone coverage or OTA inbox management, then add channels or extend hours once things are running smoothly. You don't have to cover everything on day one. Coverage grows on your timeline.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "Plans are month-to-month after the pilot, with 30 days notice to cancel. Qualified properties can start with a 2-week pilot before committing to ongoing coverage. No setup fee. No lock-in.",
  },
  {
    q: "How do we know coverage is actually working?",
    a: "Every client gets weekly reporting with call and message volume, response times, interaction outcomes, and any escalations. You can see exactly what was handled, how it was handled, and where gaps still exist. Reporting is included from day one, not an add-on.",
  },
  {
    q: "How quickly can Guest Squad go live?",
    a: "Most clients are live within 5 business days of signing. We cover your rates, policies, PMS access, escalation rules, and brand voice during onboarding before any agent takes a guest interaction.",
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
              Hospitality-trained remote teams for independent hotels, property management companies, and vacation rental operators. We handle reservation calls, guest questions, and day-to-day requests through your existing systems, following your property&apos;s procedures the way your own staff would.
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
          titleClassName="md:whitespace-nowrap"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* Digital Front Desk */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Digital Front Desk</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/digital-front-desk" className="hover:text-gold transition-colors">
                Remote reception for hotels and serviced properties.
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For independent hotels, boutique properties, serviced apartments, and contactless properties. We answer guest questions, help with arrivals, handle access issues, and take care of day-to-day requests through your existing systems, the way your front desk would.
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
            <div className="mt-6 flex flex-col gap-3">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_digital_front_desk">
                Discuss Front Desk Coverage
              </CoverageReviewButton>
              <Link href="/services/digital-front-desk" className="text-center text-xs text-gold-dark underline underline-offset-4 hover:text-gold transition-colors">
                Explore Digital Front Desk Services →
              </Link>
            </div>
          </div>

          {/* Central Reservations Desk */}
          <div className="flex flex-col rounded-lg border border-gold/40 bg-paper p-7 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Central Reservations Desk</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/central-reservations" className="hover:text-gold transition-colors">
                A coordinated reservations operation for hotel groups and portfolios.
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For hotel groups, property management companies, and hospitality portfolios. We handle reservation inquiries, approved bookings, modifications, and cancellations across your properties. Each property keeps its own rates, policies, and systems. Your team stays in control of decisions.
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
            <div className="mt-6 flex flex-col gap-3">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_central_reservations">
                Discuss Your Reservations Operation
              </CoverageReviewButton>
              <Link href="/services/central-reservations" className="text-center text-xs text-gold-dark underline underline-offset-4 hover:text-gold transition-colors">
                Explore Central Reservations Services →
              </Link>
            </div>
          </div>

          {/* Vacation Rental Guest Operations */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Vacation Rental Guest Operations</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/vacation-rental-guest-operations" className="hover:text-gold transition-colors">
                Listing-specific guest operations for professional STR portfolios.
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For professional vacation rental companies and STR managers on Airbnb, Vrbo, and direct-booking channels. We handle guest messages, arrivals, and access issues for each listing, and coordinate with your housekeeping and maintenance contacts across your whole portfolio.
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
            <div className="mt-6 flex flex-col gap-3">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="homepage_vacation_rental">
                Discuss Your Rental Portfolio
              </CoverageReviewButton>
              <Link href="/services/vacation-rental-guest-operations" className="text-center text-xs text-gold-dark underline underline-offset-4 hover:text-gold transition-colors">
                Explore Vacation Rental Guest Operations →
              </Link>
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
              Check-in peaks, high-occupancy periods, staff time off, and unplanned absences. We step in when your on-site team can&apos;t cover the volume, so no call or message falls through.
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
              Every channel. Every hour. The same care your front desk gives in person.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
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
            <p className="text-sm text-ink-muted">
              Most qualified properties can be scoped and live within 5 business days.
            </p>
          </div>
        </div>
      </Section>

      {/* PLATFORM LOGOS */}
      <PlatformLogos />

      {/* EVIDENCE — Guarantees + Social Proof */}
      <Section surface>
        <div className="flex flex-col items-center text-center">
          <a
            href="https://www.trustpilot.com/review/guestsquad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-gold-dark"
          >
            <span className="font-bold text-[#00b67a]">★★★★★</span>
            <span>Rated 5 stars on Trustpilot</span>
          </a>
          <SectionHeading eyebrow="Our Commitments" title="What every client gets from day one." align="center" className="mx-auto mt-3" />
        </div>
        <div className="mt-8">
          <Guarantees />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
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
            <div key={item.attr} className="rounded-xl border border-[#E5E0D8] bg-paper p-5 shadow-sm">
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
      </Section>

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

      <CtaSection />
    </>
  );
}
