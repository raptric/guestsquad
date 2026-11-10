import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { SharedCapabilitiesBlock } from "@/components/site/shared-capabilities-block";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Central Reservations Desk for Hotel Groups",
  description:
    "Coordinated reservation handling for hotel groups and portfolios. Enquiries, approved bookings and changes managed across your properties using each hotel's rates, policies and systems.",
  path: "/services/central-reservations",
});

const PATH = "/services/central-reservations";

// ---------------------------------------------------------------------------
// Workflow cards
// ---------------------------------------------------------------------------
const WORKFLOWS = [
  {
    label: "Multi-Property Reservation Handling",
    trigger: "Caller asks about availability across properties in the portfolio",
    does: "Identifies the best-fit property by dates, size, location and brief. Presents approved options from each property's information.",
    boundary: "Cannot determine fit: routes to the group reservations contact with caller details.",
  },
  {
    label: "Property Selection & Availability",
    trigger: "Caller needs specific dates checked at a named or suggested property",
    does: "Checks availability in the PMS for the relevant property. Presents approved options and quotes the correct rate.",
    boundary: "Property unavailable: offers alternatives within the portfolio or takes the enquiry for follow-up.",
  },
  {
    label: "Approved Quotes & Booking Changes",
    trigger: "Caller wants a rate confirmed, a reservation made, or an existing booking changed or cancelled",
    does: "Sends the approved quote, processes the booking or change within the permitted PMS scope. Confirms the outcome to the caller and records it.",
    boundary: "Outside permitted scope: logs the request and routes to the reservations manager with full context.",
  },
  {
    label: "Reservation Follow-Up",
    trigger: "A pending enquiry, unanswered quote or incomplete booking requires a follow-up contact",
    does: "Contacts the enquirer per the agreed follow-up procedure and timeline. Updates the record with the outcome.",
    boundary: "No response after agreed attempts: logged and handed to the reservations manager.",
  },
  {
    label: "Property-Specific Booking Rules",
    trigger: "Caller asks about minimum stays, deposits, cancellation conditions or rate restrictions at a specific property",
    does: "Applies the correct rules from that property&apos;s brief. Explains conditions clearly and accurately.",
    boundary: "Exception requested: routes to the designated approver for that property with the caller&apos;s request documented.",
  },
  {
    label: "Property-Level Handover & Reporting",
    trigger: "End of the agreed coverage window or daily close",
    does: "Produces a per-property summary: enquiries handled, bookings made, changes processed, open items and escalations. Delivers to the relevant GM or reservations lead.",
    boundary: "Unresolved items flagged clearly; GM or reservations lead notified before the next operational period.",
  },
];

// ---------------------------------------------------------------------------
// Situations
// ---------------------------------------------------------------------------
const SITUATIONS = [
  {
    heading: "Enquiries arrive across multiple properties with no central point",
    body: "Calls, messages and OTA threads land at individual hotels. Some get answered quickly, others are missed. There is no consistent record of what was handled or what is still open.",
  },
  {
    heading: "Each property has different rates, policies and permissions",
    body: "A group-level team cannot operate on a single script. The agent needs to know which property the caller is asking about and apply that property's specific instructions.",
  },
  {
    heading: "Reservation enquiries go unanswered outside office hours",
    body: "Prospective guests calling in the evening, on weekends or during peak periods reach voicemail. Those enquiries often go to OTA channels where you pay commission.",
  },
  {
    heading: "Your team handles reservations alongside operations and management",
    body: "In smaller groups, the same person manages reservations, escalations and property oversight. Demand for one interrupts the others. A dedicated handling layer separates the work.",
  },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "What is a central reservations desk for a hotel group?",
    a: "A central reservations desk coordinates enquiry and booking handling across participating properties. Guest Squad provides the human operating team for the agreed work, using each property's information, supported systems and booking permissions.",
  },
  {
    q: "Can each property keep its own rates and policies?",
    a: "Yes. Handling is organized around the approved information and rules for each property. We agree how those instructions are maintained, who approves exceptions and how changes reach the team.",
  },
  {
    q: "Can you complete bookings, modifications and cancellations?",
    a: "Yes, where your systems and permissions support the action and it is included in the agreed scope. Requests outside that authority go to the designated contact. Refunds, compensation and other discretionary decisions require their own approval rules.",
  },
  {
    q: "Can you work alongside our existing reservations team?",
    a: "Yes. The arrangement can cover overflow, extended hours or a broader set of tasks while your current team retains its agreed responsibilities. Routing and handover procedures define how the teams work together.",
  },
  {
    q: "What if our properties use different systems?",
    a: "We review the systems and workflows property by property. Support depends on the access, permissions and procedures available. We confirm what can be handled before including a property or workflow in the arrangement.",
  },
  {
    q: "Is this a central reservation system or software platform?",
    a: "Guest Squad provides a staffed reservations service. We work through supported tools and approved workflows used by your operation. We do not supply the CRS or replace your PMS.",
  },
  {
    q: "Can we start with a small part of the portfolio?",
    a: "An initial scope can focus on selected properties, channels or coverage periods. We agree the requirements before handling begins, then discuss expansion based on operational readiness.",
  },
  {
    q: "How is the service priced?",
    a: "Pricing reflects enquiry volume, coverage hours, participating properties, channels, system complexity and the actions required. We review these requirements before recommending a scope and proposal.",
  },
];

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
const PAGE_URL = `${SITE.url}${PATH}`;

export default function CentralReservationsPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            name: "Central Reservations Desk for Hotel Groups",
            serviceType: "Central Reservations",
            description:
              "Coordinated reservation handling for hotel groups and portfolios. Enquiries, approved bookings and changes managed across your properties.",
            url: PAGE_URL,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: "Worldwide",
            audience: [
              { "@type": "Audience", audienceType: "Hotel Group" },
              { "@type": "Audience", audienceType: "Multi-Property Hotel Operator" },
              { "@type": "Audience", audienceType: "Hospitality Management Company" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: "Central Reservations Desk for Hotel Groups | Guest Squad",
            description:
              "Coordinated reservation handling for hotel groups and portfolios.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${PAGE_URL}#service` },
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

      {/* 1. HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Hotel Group Reservations
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Central Reservations Desk for Hotel Groups
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              Give reservation enquiries across your hotels a coordinated point of contact. Guest Squad handles approved quotes, bookings, changes and follow-up using each property&apos;s rates, availability and policies.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For hotel groups, hospitality management companies and multi-property operators.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="crd_hero">
                Discuss Your Reservations Operation
              </CoverageReviewButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-assets/central-reservations-hero.svg"
              alt="Three hotel properties routing reservation enquiries to a central Guest Squad reservations desk, with confirmed bookings, quotes and handovers flowing back to each GM"
              width={560}
              height={420}
              className="h-auto w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2. SITUATIONS */}
      <Section surface>
        <SectionHeading
          eyebrow="When You Need This"
          title="Keep reservation enquiries organized across your hotels."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SITUATIONS.map((s) => (
            <div key={s.heading} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3a. SHARED CAPABILITIES */}
      <Section>
        <SectionHeading
          eyebrow="What Guest Squad Handles"
          title="Reservations, OTA inboxes and guest communication — coordinated across your portfolio."
          description="Each capability is scoped to your properties' systems, approved information and agreed procedures. The arrangement can include some or all depending on your group's requirements."
        />
        <div className="mt-10">
          <SharedCapabilitiesBlock variant="group" />
        </div>
      </Section>

      {/* 3b. WORKFLOWS */}
      <Section surface>
        <SectionHeading
          eyebrow="Portfolio Workflows"
          title="Six workflows built around how a hotel group's reservations operation actually runs."
          description="Each workflow has a defined trigger, a clear set of actions and an agreed boundary per property."
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
                  <p className="text-sm leading-relaxed text-ink-soft" dangerouslySetInnerHTML={{ __html: w.does }} />
                </div>
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Escalated when</p>
                <p className="text-sm leading-relaxed text-ink-soft" dangerouslySetInnerHTML={{ __html: w.boundary }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. COVERAGE OPTIONS */}
      <Section id="coverage">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Coverage Options</p>
            <h2 className="mt-2 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              After-hours, overflow, or a broader window.
            </h2>
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "After-Hours",
              body: "Reservation enquiries handled outside your team's agreed hours. Prospective guests reach a live person instead of voicemail.",
            },
            {
              label: "Overflow",
              body: "Your reservations team answers first. Unanswered or busy-line calls and messages route to Guest Squad automatically.",
            },
            {
              label: "Broader Window",
              body: "Extend coverage across evenings, weekends and peak periods to match the demand pattern across your portfolio.",
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
          <Link href="/pricing" className="text-gold-dark underline-offset-4 hover:underline">
            See how coverage is scoped →
          </Link>
        </p>
      </Section>

      {/* 5. HOW IT WORKS */}
      <Section surface id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="From portfolio review to live reservations handling."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Portfolio review",
              body: "We document participating properties, enquiry sources, current handling gaps, required booking actions and the approval boundaries for each hotel.",
            },
            {
              step: "02",
              title: "System access and permissions",
              body: "We confirm PMS and booking tool access per property, agree what agents can complete and define escalation routes for decisions outside that scope.",
            },
            {
              step: "03",
              title: "Routing and go-live",
              body: "We test enquiry routing, property identification, transfers and handover procedures. Most groups are live within 7 business days of signing.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Systems */}
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
          <p className="mt-3 text-xs text-ink-muted">System access and permitted actions are confirmed per property during setup. Rate changes and payment processing stay with your team.</p>
        </div>

        <div className="mt-4 rounded-lg border border-line bg-surface px-6 py-4">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">Commercial decisions stay with your properties.</span>{" "}
            Rate exceptions, refunds and discretionary approvals follow the escalation routes agreed for each hotel.
          </p>
        </div>
      </Section>

      {/* 6. REPORTING */}
      <Section>
        <SectionHeading
          eyebrow="Reporting"
          title="Every reservation tracked. Your properties briefed before each shift."
        />
        <div className="mt-10 grid gap-0 divide-y divide-line rounded-lg border border-line bg-paper md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            {
              step: "01",
              title: "Enquiry handled",
              body: "Agent handles the call or message using the correct property brief and agreed permissions.",
            },
            {
              step: "02",
              title: "Interaction logged",
              body: "Property, action taken, booking outcome, escalation contact and next steps recorded.",
            },
            {
              step: "03",
              title: "Handover delivered",
              body: "Per-property shift notes sent to the relevant GM or reservations lead at the agreed time.",
            },
            {
              step: "04",
              title: "Weekly summary",
              body: "Enquiries handled, bookings made, open items and escalations per property — from day one.",
            },
          ].map((s) => (
            <div key={s.step} className="flex flex-col gap-2 p-6">
              <p className="text-xs font-light text-ink-muted">{s.step}</p>
              <p className="text-sm font-semibold text-ink">{s.title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialsBlock />

      {/* MID-PAGE CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Ready to coordinate reservations across your portfolio?</p>
            <p className="mt-1 text-sm text-paper/60">Book a review or start with a selected group of properties.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="sm" ctaLocation="crd_mid_cta">
              Discuss Your Operation
            </CoverageReviewButton>
          </div>
        </div>
      </div>

      {/* 7. FAQ + CTA */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Central reservations questions, answered."
            />
            <div className="mt-8">
              <FaqAccordion items={FAQS} />
            </div>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Discuss a reservations operation for your portfolio
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Tell us which properties you manage, how reservation enquiries currently reach your team and where coverage needs to improve. We will review your systems, booking workflows and required hours, then discuss a suitable scope.
            </p>
            <CoverageReviewButton variant="gold" size="default" ctaLocation="crd_faq_cta">
              Discuss Your Reservations Operation
            </CoverageReviewButton>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="outline" size="sm">
                How pricing is scoped
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Useful for the conversation: participating properties, current systems, enquiry channels, coverage hours and the booking actions you want handled.
            </p>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Ready to give your hotel group a coordinated reservations operation?"
        description="Book a review and we will map out the participating properties, coverage requirements and a suitable scope for your portfolio."
      />
    </>
  );
}
