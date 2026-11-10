import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { CoverageTypesBlock } from "@/components/site/coverage-types-block";
import { ButtonLink } from "@/components/site/button-link";
import { Section, SectionHeading } from "@/components/site/section";
import { PlatformLogos } from "@/components/site/platform-logos";
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
              Digital Front Desk Services for Hotels and Vacation Rentals
            </h1>
            <p className="mt-5 text-xl font-medium leading-snug text-ink">
              Your Remote Guest Operations Team — Built Around Your Property.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
              Human support for hotel calls, reservations, and vacation rental communication — handled inside your existing systems, following your procedures. Available when your on-site team isn&apos;t.
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

          {/* Hotel Answering Service */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Hotel Answering Service</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/hotel-answering-service" className="hover:text-gold transition-colors">
                Live phone coverage for independent hotels and boutique properties.
              </Link>
            </h2>
            <ul className="mt-4 grow flex flex-col gap-2">
              {[
                "Front-Desk Overflow",
                "Room & Stay Inquiries",
                "Late-Arrival Assistance",
                "Housekeeping Request Coordination",
                "Hotel Maintenance Escalation",
                "Reception Shift Handovers",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/services/hotel-answering-service" variant="gold">
                Explore Hotel Answering Service
              </ButtonLink>
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
            <ul className="mt-4 grow flex flex-col gap-2">
              {[
                "Multi-Property Reservation Handling",
                "Property Selection & Availability",
                "Approved Quotes & Booking Changes",
                "Reservation Follow-Up",
                "Property-Specific Booking Rules",
                "Property-Level Handover & Reporting",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/services/central-reservations" variant="gold">
                Explore Central Reservations Services
              </ButtonLink>
            </div>
          </div>

          {/* Vacation Rental Answering Service */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">Vacation Rental Answering Service</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/vacation-rental-answering-service" className="hover:text-gold transition-colors">
                Listing-specific guest operations for professional STR portfolios.
              </Link>
            </h2>
            <ul className="mt-4 grow flex flex-col gap-2">
              {[
                "Airbnb & Vrbo Guest Communication",
                "Listing & House-Rule Questions",
                "Self Check-In & Access Assistance",
                "Cleaner & Turnover Coordination",
                "Local Maintenance Coordination",
                "Listing-Level Issue Tracking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/services/vacation-rental-answering-service" variant="gold">
                Explore Vacation Rental Answering Service
              </ButtonLink>
            </div>
          </div>

        </div>
      </Section>

      {/* COVERAGE TYPES */}
      <Section id="coverage-types" surface>
        <SectionHeading
          eyebrow="Coverage Options"
          title="Choose the coverage that fits your operation."
          align="center"
          className="mx-auto"
          titleClassName="md:whitespace-nowrap"
        />
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden">
          {[
            { label: "After-Hours", line: "Evenings and overnight when your desk is closed." },
            { label: "Weekends",    line: "Saturday and Sunday with reduced or no front-desk staffing." },
            { label: "Overflow",    line: "When your team is at capacity or the line is busy." },
            { label: "24 / 7",      line: "Continuous coverage with agreed scope across all hours." },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2 bg-paper px-6 py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">{item.label}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{item.line}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-ink-muted">
          Coverage does not automatically include every capability. Hours, channels, and permitted actions are agreed during setup.
        </p>
        <div className="mt-7 flex justify-center">
          <CoverageReviewButton variant="gold" ctaLocation="homepage_coverage_types">
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

      {/* DIFFERENTIATORS */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl shadow-md lg:block">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85"
              alt="Hotel front desk team managing guest reservations and calls"
              fill
              loading="lazy"
              sizes="50vw"
              unoptimized
              className="object-cover object-center"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              What Makes Guest Squad Different
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              Your dedicated guest team. Not a repurposed call centre.
            </h2>

            <div className="mt-10 flex flex-col divide-y divide-line">
              {[
                {
                  label: "Your systems, not ours",
                  body: "Agents work inside your PMS, inbox, and booking tools. No parallel platform, no duplicate data entry, no handoff friction.",
                },
                {
                  label: "Your procedures, not a script",
                  body: "Every property is briefed before coverage starts. Agents follow your greeting, your policies, and your escalation rules. No generic call flows.",
                },
                {
                  label: "Scope agreed before go-live",
                  body: "You define which calls are handled, which actions are permitted, and when your team needs to be reached. Nothing is assumed.",
                },
                {
                  label: "Hospitality-trained, not general support",
                  body: "Teams are briefed on hotel and STR operations: rate structures, check-in procedures, and OTA conventions. Not repurposed from a general helpdesk.",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5 py-5">
                  <span className="mt-2 h-3.5 w-0.5 shrink-0 rounded-full bg-gold-dark" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{item.label}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* PLATFORM LOGOS */}
      <PlatformLogos />

      {/* SOCIAL PROOF */}
      <Section surface>
        <div className="flex justify-center">
          <a
            href="https://www.trustpilot.com/review/guestsquad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-gold-dark"
          >
            <span className="font-bold text-[#00b67a]">★★★★★</span>
            <span>Rated 5 stars on Trustpilot</span>
          </a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
