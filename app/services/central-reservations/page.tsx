import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Reservation Call Center for Hotel Groups",
  description:
    "Hotel reservation call center for hotel groups: one team handles quotes, bookings and changes. After-hours coverage for two properties from US$299/month.",
  path: "/services/central-reservations",
});

const PATH = "/services/central-reservations";

const FAQS = [
  {
    q: "What is a central reservations desk for a hotel group?",
    a: "It is one team that handles enquiries and bookings for several properties. Guest Squad provides that team for the agreed work. Agents use each property's information, supported systems and booking permissions.",
  },
  {
    q: "Can each property keep its own rates and policies?",
    a: "Yes. Handling follows the approved information and rules for each property. We agree how those instructions are kept up to date, who approves exceptions and how changes reach the team.",
  },
  {
    q: "Can you complete bookings, modifications and cancellations?",
    a: "Yes, where your systems and permissions allow the action and it is in the agreed scope. Anything outside that authority goes to your designated contact. Refunds, compensation and other discretionary decisions follow their own approval rules.",
  },
  {
    q: "Can you work alongside our existing reservations team?",
    a: "Yes. We can cover overflow, extended hours or a wider set of tasks while your team keeps its agreed duties. Routing and handover procedures set out how the two teams work together.",
  },
  {
    q: "What if our properties use different systems?",
    a: "We review systems and workflows property by property. What we can handle depends on the access, permissions and procedures available. We confirm that before a property joins the arrangement.",
  },
  {
    q: "Can we start with part of the portfolio?",
    a: "Yes. A first scope can cover selected properties, channels or coverage periods. We agree requirements before handling begins, then discuss expansion once you are ready.",
  },
  {
    q: "How much does a hotel reservation call center cost?",
    a: "From US$299/month for a two-property reference configuration with after-hours coverage, subject to scope confirmation. 24/7 coverage, overflow and additional properties are quoted. Price depends on enquiry volume, coverage hours, number of properties, channels, system complexity and the actions required. See pricing at /pricing.",
  },
];

const WORKFLOWS = [
  {
    label: "Multi-property reservation handling",
    trigger: "A caller asks about availability across properties in the portfolio.",
    does: "Finds the best-fit property by dates, size, location and brief. Presents approved options from each property's information.",
    boundary: "Fit is unclear. The agent routes the caller's details to the group reservations contact.",
  },
  {
    label: "Property selection and availability",
    trigger: "A caller needs specific dates checked at a named or suggested property.",
    does: "Checks availability in the PMS for that property. Presents approved options and quotes the correct rate.",
    boundary: "The property is unavailable. The agent offers alternatives in the portfolio or takes the enquiry for follow-up.",
  },
  {
    label: "Approved quotes and booking changes",
    trigger: "A caller wants a rate confirmed, a reservation made, or a booking changed or cancelled.",
    does: "Sends the approved quote, or processes the booking or change within the permitted PMS scope. Confirms the outcome to the caller and records it.",
    boundary: "The request is outside permitted scope. The agent logs it and routes it to the reservations manager with full context.",
  },
  {
    label: "Reservation follow-up",
    trigger: "A pending enquiry, unanswered quote or incomplete booking needs a follow-up.",
    does: "Contacts the enquirer on the agreed timeline. Updates the record with the outcome.",
    boundary: "There is no response after the agreed attempts. The item is logged and handed to the reservations manager.",
  },
  {
    label: "Property-specific booking rules",
    trigger: "A caller asks about minimum stays, deposits, cancellation terms or rate restrictions at one property.",
    does: "Applies the rules from that property's brief. Explains the conditions clearly and accurately.",
    boundary: "The caller asks for an exception. The agent routes it to that property's approver with the request documented.",
  },
  {
    label: "Property-level handover and reporting",
    trigger: "The agreed coverage window ends.",
    does: "Writes a per-property summary of enquiries handled, bookings made, changes processed, open items and escalations. Sends it to the GM or reservations lead.",
    boundary: "Unresolved items are flagged clearly. The GM or reservations lead is told before the next operating period.",
  },
];

const SITUATIONS = [
  {
    heading: "Enquiries arrive across multiple properties with no central point",
    body: "Calls, messages and OTA threads land at individual hotels. Some get answered fast. Others are missed. Nobody has a consistent record of what was handled or what is still open.",
  },
  {
    heading: "Each property has different rates, policies and permissions",
    body: "A group-level team can't run on one script. The agent must know which property the caller means and apply that property's own instructions.",
  },
  {
    heading: "Reservation enquiries go unanswered outside office hours",
    body: "Guests who call in the evening, at weekends or at peak times may reach voicemail. Many of those bookings move to OTA channels, where you pay commission.",
  },
  {
    heading: "Your team handles reservations on top of operations and management",
    body: "In smaller groups, one person manages reservations, escalations and property oversight. Each job interrupts the others. A dedicated reservations team separates the work.",
  },
];

export default function CentralReservationsPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="central-reservations" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "Hotel Reservation Call Center for Hotel Groups",
            serviceType: "Hotel reservation call center",
            alternateName: "Central reservations",
            description:
              "Hotel reservation call center for hotel groups: one team handles quotes, bookings and changes. After-hours coverage for two properties from US$299/month.",
            url: `${SITE.url}${PATH}`,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: [
              { "@type": "Country", name: "US" },
              { "@type": "Country", name: "GB" },
              { "@type": "Country", name: "CA" },
              { "@type": "Country", name: "IE" },
              { "@type": "Country", name: "AU" },
              { "@type": "Country", name: "NZ" },
            ],
            offers: {
              "@type": "Offer",
              price: "299",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "299",
                priceCurrency: "USD",
                unitCode: "MON",
                description: "After-hours coverage for a two-property reference configuration, subject to scope confirmation",
              },
              availability: "https://schema.org/InStock",
            },
            audience: [
              { "@type": "Audience", audienceType: "Hotel Group" },
              { "@type": "Audience", audienceType: "Multi-Property Hotel Operator" },
              { "@type": "Audience", audienceType: "Hospitality Management Company" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: "Hotel Reservation Call Center for Hotel Groups",
            description:
              "Hotel reservation call center for hotel groups: one team handles quotes, bookings and changes. After-hours coverage for two properties from US$299/month.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Central Reservations Desk", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Central Reservations Desk", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Central Reservations Desk
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Hotel Reservation Call Center for Hotel Groups
            </h1>
            <p className="mt-5 max-w-lg text-base font-medium leading-snug text-ink">
              Guest Support Operations for hotel groups: one reservations team across your participating properties.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
              Guest Squad is a hotel reservation call center for hotel groups and management companies. One reservations team answers booking calls and messages for the properties you choose, after hours or around the clock. Agents quote, book and change reservations in each hotel&apos;s own PMS, using that hotel&apos;s rates and policies. Your team keeps control of rates, refunds and exceptions.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
              Additional properties and 24/7 coverage are quoted to your portfolio.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For hotel groups, hospitality management companies and multi-property operators.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="crd_hero">
                Book a Portfolio Review
              </CoverageReviewButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Part of our{" "}
              <Link href="/" className="text-gold-dark underline underline-offset-2 hover:text-gold">hospitality call center</Link>{" "}
              for hotels and vacation rentals. Running one hotel?{" "}
              <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">Hotel answering service</Link>{" "}
              covers phone calls for a single property, and{" "}
              <Link href="/services/reservation-support" className="text-gold-dark underline underline-offset-2 hover:text-gold">hotel reservation support</Link>{" "}
              handles its booking calls.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-assets/central-reservations-hero.svg"
              alt="Illustration of three hotel property cards (Edinburgh, Bristol and Bath) feeding a central reservations desk panel that lists a confirmed reservation, a handled enquiry, an escalation to the GM and a daily handover."
              width={560}
              height={420}
              className="h-auto w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <Section surface id="when-you-need-it">
        <SectionHeading
          eyebrow="When You Need This"
          title="When a hotel group needs a central reservations office."
          description="Enquiries land at the wrong hotel, at the wrong hour, or with the wrong person. A central reservations office fixes that with one team and one record. These are the four problems we hear most."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SITUATIONS.map((s, i) => (
            <div key={s.heading} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              {i === 2 && (
                <div className="mt-3 flex flex-col gap-1">
                  <Link href="/resources/insights/unanswered-reservation-calls-revenue" className="text-xs text-gold-dark underline underline-offset-2 hover:text-gold">
                    Cost of unanswered reservation calls →
                  </Link>
                  <Link href="/resources/missed-booking-calculator" className="text-xs text-gold-dark underline underline-offset-2 hover:text-gold">
                    Hotel missed call revenue calculator →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE HANDLE */}
      <Section id="what-we-handle">
        <SectionHeading
          eyebrow="What Guest Squad Handles"
          title="What our hotel reservation call center handles across your portfolio."
          description="Each service is scoped to your properties' systems, approved information and agreed procedures. You can start with one and add others."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            {
              label: "Reservations",
              body: "Property selection, availability, approved quotes, bookings, changes and follow-up across your participating hotels.",
              href: "/services/reservation-support",
              linkLabel: "Hotel reservation support (single property)",
            },
            {
              label: "OTA inbox",
              body: "Property-specific reservation and guest threads across the supported channels you agree. Each inbox is handled to that property's instructions.",
              href: "/services/ota-inbox-management",
              linkLabel: "OTA inbox management",
            },
            {
              label: "Guest messaging",
              body: "Pre-arrival and in-stay messages, with requests routed to the right property team and escalated by each property's agreed procedure.",
              href: "/services/guest-messaging",
              linkLabel: "Guest messaging",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <Link href={item.href} className="mt-3 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold">
                {item.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* CRS VS TEAM */}
      <Section surface id="crs-vs-team">
        <SectionHeading
          eyebrow="Clarification"
          title="Booking software (CRS) vs a reservations team."
          description="Guest Squad supplies the reservations team. We work in your supported PMS, CRS or booking tools and do not replace your software."
        />
        <div className="mt-8 overflow-x-auto rounded-lg border border-line max-w-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted w-1/2"> </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">What to check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-paper">
              <tr>
                <td className="px-5 py-4 font-medium text-ink">Booking software (CRS)</td>
                <td className="px-5 py-4 text-ink-soft">Stores inventory and rates and distributes them to booking channels.</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-medium text-ink">Reservations team (Guest Squad)</td>
                <td className="px-5 py-4 text-ink-soft">Answers calls and messages, quotes, books and changes reservations, and follows up on open enquiries.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* WORKFLOWS */}
      <Section>
        <SectionHeading
          eyebrow="Portfolio Workflows"
          title="Six portfolio workflows, from property selection to handover."
          description="Each workflow has a trigger, a set of agent actions and an agreed limit per property."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOWS.map((w) => (
            <div key={w.label} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">{w.label}</p>
              <div className="mt-4 flex flex-col gap-3 grow">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Trigger</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{w.trigger}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Agent does</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{w.does}</p>
                </div>
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Escalated when</p>
                <p className="text-sm leading-relaxed text-ink-soft">{w.boundary}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COVERAGE OPTIONS */}
      <Section surface id="coverage">
        <SectionHeading
          eyebrow="Coverage Options"
          title="Coverage options: after-hours, overflow or extended hours."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "After-hours",
              body: "We handle reservation enquiries outside your team's agreed hours, so prospective guests reach a live agent instead of voicemail.",
            },
            {
              label: "Overflow",
              body: "Your reservations team answers first. Calls and messages you route to us — for example when lines are busy or no one is free — go to Guest Squad. Overflow is quoted to your portfolio.",
            },
            {
              label: "Extended hours or 24/7",
              body: "Extend coverage across evenings, weekends and peak periods to match demand across your portfolio. 24/7 coverage is available and quoted to your portfolio.",
            },
          ].map((opt) => (
            <div key={opt.label} className="rounded-lg border border-line bg-paper px-5 py-5">
              <p className="text-sm font-semibold text-ink">{opt.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{opt.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          Coverage windows, channels and participating properties are agreed during scoping.{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-2 hover:text-gold">See pricing</Link>{" "}
          for how coverage is scoped.
        </p>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="From portfolio review to live reservations."
          description="Coverage starts once your brief, system access and escalation contacts are agreed."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Portfolio review",
              body: "We document your participating properties, enquiry sources, current gaps, required booking actions and the approval limits for each hotel.",
            },
            {
              step: "02",
              title: "System access and permissions",
              body: "We confirm PMS and booking tool access per property. We agree what agents can complete and set escalation routes for anything outside that scope.",
            },
            {
              step: "03",
              title: "Routing and go-live",
              body: "We test enquiry routing, property identification, transfers and handover before coverage begins.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-line bg-paper px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Systems we work in</p>
          <div className="flex flex-wrap gap-2">
            {["Cloudbeds", "Mews", "Opera PMS", "Little Hotelier", "Booking.com Extranet", "Guesty", "Hostaway"].map((sys) => (
              <span key={sys} className="rounded border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                {sys}
              </span>
            ))}
            <span className="rounded border border-dashed border-line px-3 py-1 text-xs text-ink-muted">+ others on request</span>
          </div>
          <p className="mt-3 text-xs text-ink-muted">System access and permitted actions are confirmed per property during setup. Rate changes and payment processing stay with your team. Rate exceptions, refunds and discretionary approvals follow the escalation routes agreed for each hotel.</p>
        </div>
      </Section>

      {/* REPORTING */}
      <Section surface id="reporting">
        <SectionHeading
          eyebrow="Reporting"
          title="Every reservation logged, every property briefed."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "Enquiry handled", body: "The agent handles the call or message using the right property brief and agreed permissions." },
            { n: "02", title: "Interaction logged", body: "We record the property, action taken, booking outcome, escalation contact and next steps." },
            { n: "03", title: "Handover delivered", body: "Per-property handover notes reach the GM or reservations lead at the agreed time." },
            { n: "04", title: "Activity report", body: "Enquiries handled, bookings made, open items and escalations, per property." },
          ].map((s) => (
            <div key={s.n} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.n}</p>
              <p className="mt-3 text-sm font-semibold text-ink">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: price card */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">From US$299<span className="text-base font-normal text-ink-muted">/month</span></p>
            <p className="mt-1 text-xs text-ink-muted italic">Subject to scope confirmation</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Two properties, after-hours coverage. Shared-support starting configuration.
            </p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted mb-3">Included at this starting price</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Reservation inquiry handling across two properties",
                  "After-hours coverage",
                  "Rate and availability information using your approved data",
                  "Direct booking assistance",
                  "Approved changes and cancellations",
                  "Booking-related email handling",
                  "PMS workflows",
                  "Escalation, handover notes and activity reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-xs text-ink-muted">Month-to-month · 30 days&apos; notice</p>
            </div>
          </div>

          {/* Right: what determines price + CTA */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-surface p-7">
              <p className="text-sm font-semibold text-ink mb-3">Your final fee depends on:</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Enquiry volume",
                  "Coverage hours — 24/7 and overflow are quoted",
                  "Number of participating properties",
                  "Channels: phone, email, OTA, messaging",
                  "System complexity and actions agents must complete",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">
                Work outside the agreed allowance is charged at the rate in your proposal.{" "}
                <Link href="/pricing" className="text-gold-dark underline underline-offset-2 hover:text-gold">See full pricing</Link>.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-paper p-7">
              <p className="text-sm font-semibold text-ink mb-2">Ready to discuss your portfolio?</p>
              <p className="text-sm text-ink-soft mb-5">Tell us your properties, channels and coverage requirements. We will scope the right configuration and send a written proposal.</p>
              <CoverageReviewButton variant="gold" ctaLocation="crd_price_cta" className="w-full justify-center">
                Book a Portfolio Review
              </CoverageReviewButton>
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialsBlock />

      {/* MID-PAGE CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Ready to coordinate reservations across your portfolio?</p>
            <p className="mt-1 text-sm text-paper/60">Book a review and start with a selected group of properties.</p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="crd_mid_cta">
            Book a Portfolio Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* FAQ */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Central reservations questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          {/* Sticky card */}
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Start with a portfolio review
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Ready to coordinate reservations across your portfolio? Book a review and start with a selected group of properties. It helps to bring your property list, current systems, enquiry sources and the hours you want covered.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="crd_faq_cta" className="w-full justify-center">
              Book a Portfolio Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">Guides</p>
              <div className="flex flex-col divide-y divide-line">
                {[
                  { label: "Cost of unanswered reservation calls", detail: "What missed enquiries cost a hotel group.", href: "/resources/insights/unanswered-reservation-calls-revenue" },
                  { label: "Hotel missed call revenue calculator", detail: "Estimate what unanswered calls cost you.", href: "/resources/missed-booking-calculator" },
                  { label: "Guest support pricing", detail: "How coverage is scoped and priced.", href: "/pricing" },
                ].map((guide) => (
                  <Link key={guide.href} href={guide.href} className="flex flex-col py-3 hover:opacity-80 transition-opacity">
                    <p className="text-sm text-gold-dark underline underline-offset-2">{guide.label}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{guide.detail}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Hotel answering service</Link>
                <Link href="/services/reservation-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Hotel reservation support</Link>
                <Link href="/services/ota-inbox-management" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">OTA inbox management</Link>
                <Link href="/services/guest-messaging" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Hotel guest messaging</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <CtaSection
        title="Ready to give your hotel group a coordinated reservations operation?"
        description="Book a portfolio review and we will map the participating properties, coverage requirements and a suitable scope."
      />
    </>
  );
}
