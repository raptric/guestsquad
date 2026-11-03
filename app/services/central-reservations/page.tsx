/**
 * Central Reservations Desk — private draft
 * Status: noindex. Not in SERVICES array, sitemap or production nav.
 * Route: /services/central-reservations
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

// ---------------------------------------------------------------------------
// Metadata — noindex until launch
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Central Reservations for Hotel Groups",
    description:
      "Human reservations support for hotel groups and portfolios. Handle enquiries, approved bookings and changes using each property's rates, policies and systems.",
    path: "/services/central-reservations",
  }),
  robots: { index: false, follow: false },
};

// ---------------------------------------------------------------------------
// FAQ data
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "What is a central reservations desk for a hotel group?",
    a: "A central reservations desk coordinates enquiry and booking handling across participating properties. Guest Squad provides the human operating team for the agreed work, using each property's information, supported systems and booking permissions.",
  },
  {
    q: "How is this different from reservation support?",
    a: "Reservation Support explains individual tasks such as booking enquiries, quotes and approved reservation changes. Central Reservations Desk brings those tasks into a wider portfolio arrangement, including property-specific procedures, enquiry routing, coverage and management oversight.",
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
    a: "An initial scope can focus on selected properties, channels or coverage periods. We agree the requirements and review process before handling begins, then discuss expansion based on operational readiness and the results available.",
  },
  {
    q: "How is the service priced?",
    a: "Pricing reflects enquiry volume, coverage hours, participating properties, channels, system complexity and the actions required. We review these requirements before recommending a scope and proposal.",
  },
];

// ---------------------------------------------------------------------------
// Scope table
// ---------------------------------------------------------------------------
const SCOPE_ROWS = [
  {
    need: "Booking enquiries",
    help: "Respond to questions about participating properties, accommodation options and booking conditions through agreed channels.",
  },
  {
    need: "Rates and availability",
    help: "Consult approved systems or information sources to explain available options and authorized rates.",
  },
  {
    need: "New reservations",
    help: "Complete supported booking actions within the permissions and procedures you provide.",
  },
  {
    need: "Modifications and cancellations",
    help: "Handle permitted changes, explain applicable conditions and route exceptions for approval.",
  },
  {
    need: "Property selection",
    help: "Help guests understand relevant options within your participating portfolio where that handling is included.",
  },
  {
    need: "Exceptions and handoffs",
    help: "Pass the enquiry, action taken and outstanding decision to the appropriate property or management contact.",
  },
];

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
const PAGE_URL = `${SITE.url}/services/central-reservations`;
const SERVICE_ID = `${SITE.url}/#service-central-reservations`;

const centralReservationsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": SERVICE_ID,
  name: "Central Reservations Desk for Hotel Groups",
  serviceType: "Central Reservations",
  description:
    "Human reservations support for hotel groups and portfolios. Handle enquiries, approved bookings and changes using each property's rates, policies and systems.",
  url: PAGE_URL,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: "Worldwide",
  audience: [
    { "@type": "Audience", audienceType: "Hotel Group" },
    { "@type": "Audience", audienceType: "Hospitality Management Company" },
    { "@type": "Audience", audienceType: "Multi-Property Operator" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Central Reservations — Available Scope",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/services/reservation-support#service`,
          name: "Reservation Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/services/hotel-answering-service#service`,
          name: "Hotel Answering Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/services/ota-inbox-management#service`,
          name: "OTA Inbox Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/services/after-hours-support#service`,
          name: "After-Hours Hotel Support",
        },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    description:
      "Scoped to participating properties, enquiry volume, coverage hours and required booking actions. Begins with a portfolio review.",
    url: `${SITE.url}/contact`,
    availability: "https://schema.org/InStock",
    areaServed: "Worldwide",
    seller: { "@id": `${SITE.url}/#organization` },
  },
};

const webPageSchemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Central Reservations for Hotel Groups | Guest Squad",
  description:
    "Human reservations support for hotel groups and portfolios. Handle enquiries, approved bookings and changes using each property's rates, policies and systems.",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  mainEntity: { "@id": SERVICE_ID },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function CentralReservationsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchemaData,
          centralReservationsSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Central Reservations Desk", path: "/services/central-reservations" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Central Reservations Desk", path: "/services/central-reservations" },
        ]}
      />

      {/* ── SECTION 1: HERO ───────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-22">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Human Reservations Support
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Central Reservations Desk for Hotel Groups and Portfolios
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Bring reservation enquiries, approved bookings and changes across your properties into a coordinated operation. Guest Squad&apos;s hospitality-trained remote team works through your supported systems, using each property&apos;s rates, policies and booking permissions.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For hotel groups, hospitality management companies and multi-property operators.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="crd_hero">
                Discuss Your Reservations Operation
              </CoverageReviewButton>
              <a
                href="#operating-model"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                Explore the Operating Model
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Property-specific handling. Agreed booking authority. Coverage built around your team.
            </p>
          </div>

          {/* Portfolio diagram visual */}
          <div className="flex items-center justify-center rounded-lg border border-line bg-surface p-8 lg:p-10">
            <div className="w-full max-w-sm">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.15em] text-ink-muted text-center">
                Portfolio operating model
              </p>
              {/* Central team node */}
              <div className="flex justify-center mb-2">
                <div className="rounded-lg border-2 border-gold/50 bg-paper px-5 py-3 text-center shadow-sm">
                  <p className="text-xs font-bold text-ink">Guest Squad</p>
                  <p className="text-[10px] text-ink-muted mt-0.5">Reservations team</p>
                </div>
              </div>
              {/* Connector down */}
              <div className="flex justify-center">
                <div className="w-px h-6 bg-line" />
              </div>
              {/* Horizontal bar */}
              <div className="relative flex justify-center">
                <div className="h-px w-4/5 bg-line" />
              </div>
              {/* Three property connectors */}
              <div className="grid grid-cols-3 gap-3 mt-0">
                {["Property A", "Property B", "Property C"].map((prop, i) => (
                  <div key={prop} className="flex flex-col items-center">
                    <div className="w-px h-5 bg-line" />
                    <div className="w-full rounded border border-line bg-paper p-2.5 text-center">
                      <p className="text-[10px] font-semibold text-ink">{prop}</p>
                      <p className="text-[9px] text-ink-muted mt-1 leading-tight">
                        {i === 0 ? "Rates · policies · permissions" : i === 1 ? "Rates · policies · permissions" : "Rates · policies · permissions"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Escalation note */}
              <div className="mt-5 rounded border border-gold/20 bg-gold/5 px-4 py-2.5 text-center">
                <p className="text-[10px] text-ink-soft">Approval and escalation routes defined per property</p>
              </div>
              <p className="mt-3 text-center text-[9px] text-ink-muted">
                Conceptual illustration — not actual software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PORTFOLIO OPERATING MODEL ─────────────────────── */}
      <Section id="operating-model">
        <SectionHeading
          eyebrow="Portfolio Operating Model"
          title="One reservations operation, with each property's rules intact"
          description="Your properties may share management while offering different rooms, packages and booking conditions. We organize handling around those differences, so the team follows the correct instructions for the property and enquiry."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-semibold text-ink">Shared handling standards</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Agree how enquiries are received, what information is captured, how guests are assisted and how work passes between Guest Squad and your teams.
            </p>
          </div>
          <div className="rounded-lg border border-gold/40 bg-paper p-7 shadow-sm">
            <h3 className="text-base font-semibold text-ink">Property-specific knowledge</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Maintain the relevant room information, rate instructions, booking conditions and guest policies for each participating property.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-semibold text-ink">Clear decision ownership</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Define which actions we can complete and which require approval. Rate exceptions, discretionary changes and other decisions follow the escalation routes you set.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-muted">
          You retain control of commercial policy. We handle the agreed reservations work within it.
        </p>
      </Section>

      {/* ── SECTION 3: SCOPE AND WORKFLOW ────────────────────────────── */}
      <Section surface>
        <SectionHeading
          eyebrow="Reservation Scope"
          title="From the first enquiry to the approved booking action"
          description="Give prospective guests informed help with room options, booking conditions and next steps. The work can include the following, according to your systems, permissions and agreed scope."
        />

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="pb-3 pr-8 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted w-[30%]">
                  Reservation need
                </th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  How Guest Squad helps
                </th>
              </tr>
            </thead>
            <tbody>
              {SCOPE_ROWS.map((row, i) => (
                <tr key={row.need} className={`border-b border-line/60 ${i % 2 === 0 ? "" : "bg-surface/40"}`}>
                  <td className="py-4 pr-8 align-top font-medium text-ink">{row.need}</td>
                  <td className="py-4 text-ink-soft align-top">{row.help}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-6 flex flex-col gap-4 md:hidden">
          {SCOPE_ROWS.map((row) => (
            <div key={row.need} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">{row.need}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{row.help}</p>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <h3 className="text-base font-semibold text-ink mb-6">A clear path for each reservation enquiry</h3>
            <div className="flex flex-col">
              {[
                "Identify the property and guest requirement",
                "Check approved availability, rates and conditions",
                "Explain the relevant options",
                "Complete an authorized action or request approval",
                "Confirm the next step and record the outcome",
              ].map((step, i, arr) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-paper text-[10px] font-bold text-gold-dark">
                      {i + 1}
                    </div>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-line my-1 min-h-[20px]" />}
                  </div>
                  <p className={`text-sm text-ink-soft ${i < arr.length - 1 ? "pb-5" : "pb-0"} pt-1`}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-muted mb-5">Related capability pages</p>
            <div className="flex flex-col gap-5">
              <div>
                <Link href="/services/reservation-support" className="text-sm font-medium text-gold-dark underline underline-offset-4 hover:text-gold">
                  Hotel Reservation Support
                </Link>
                <p className="mt-1 text-xs text-ink-muted">A closer look at individual booking-handling tasks.</p>
              </div>
              <div>
                <Link href="/services/hotel-answering-service" className="text-sm font-medium text-gold-dark underline underline-offset-4 hover:text-gold">
                  Hotel Answering Service
                </Link>
                <p className="mt-1 text-xs text-ink-muted">Reservation calls and phone enquiries handled around your operation.</p>
              </div>
              <div>
                <Link href="/services/ota-inbox-management" className="text-sm font-medium text-gold-dark underline underline-offset-4 hover:text-gold">
                  OTA Inbox Management
                </Link>
                <p className="mt-1 text-xs text-ink-muted">Platform enquiries across Booking.com, Expedia and Airbnb inboxes.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: COVERAGE ARRANGEMENTS ─────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Coverage Arrangements"
          title="Reservations coverage that works with your existing operation"
          description="Keep your current team at the center of the arrangement. Add support for a specific gap or define a broader reservations scope across participating properties."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-semibold text-ink">Overflow and peak demand</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Add capacity when reservation enquiries exceed what your property or central team can handle. Agree the routing, channels and tasks that move to Guest Squad during busy periods.
            </p>
          </div>
          <div className="flex flex-col rounded-lg border border-gold/40 bg-paper p-7 shadow-sm">
            <h3 className="text-base font-semibold text-ink">After-hours and weekends</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Extend reservation handling beyond your team&apos;s usual hours. Give prospective guests access to informed assistance during agreed evening, overnight or weekend coverage.
            </p>
            <div className="mt-auto pt-5">
              <Link href="/services/after-hours-support" className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                Explore after-hours hotel support
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-semibold text-ink">A broader reservations operation</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Bring more of the agreed enquiry and booking workflow into one managed arrangement. Define the participating properties, coverage windows and responsibilities, with a rollout suited to your portfolio.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-muted">
          You can scope an initial arrangement around selected properties, channels or hours, then review what is appropriate to expand.
        </p>
      </Section>

      {/* ── SECTION 5: SYSTEMS AND ROLLOUT ───────────────────────────── */}
      <Section surface>
        <SectionHeading
          eyebrow="Systems and Rollout"
          title="Built around your systems and property procedures"
          description="A portfolio reservations service needs a consistent operating method and accurate property-level detail. Before handling begins, we review the work, access and handoffs required for each participating property."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            {[
              {
                n: "01",
                title: "Map the reservations workflow",
                body: "Review enquiry sources, current handling, coverage gaps and the actions required. Identify how Guest Squad will work alongside property teams, reservations leaders and other decision-makers.",
              },
              {
                n: "02",
                title: "Document property rules",
                body: "Build the operating information for each property, including room details, rate instructions, booking conditions, approval limits and escalation contacts.",
              },
              {
                n: "03",
                title: "Confirm supported access",
                body: "Review the PMS, CRS, booking tools and communication channels involved. Agree permissions and routing for the workflows we can support.",
              },
              {
                n: "04",
                title: "Review and introduce coverage",
                body: "Walk through representative enquiries and exceptions before launch. Where appropriate, begin with a defined part of the portfolio and review handling before expanding the arrangement.",
              },
            ].map((s) => (
              <div key={s.n} className="flex gap-5">
                <span className="shrink-0 text-2xl font-semibold tabular-nums text-gold-dark/40">{s.n}</span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-ink-muted pl-11">
              Compatibility and booking authority are confirmed during scoping. Changes to rates, policies and permissions need an agreed update process so the team works from current instructions.
            </p>
          </div>

          {/* Property setup checklist */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-5">Per property, before handling begins</p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Room types and packages", detail: "Current accommodation options, descriptions and booking conditions." },
                { label: "Rate structure and authority", detail: "Which rates can be quoted, modified or matched, and who approves exceptions." },
                { label: "Booking tools and access", detail: "PMS, CRS or booking system access required for the agreed workflow." },
                { label: "Escalation contacts", detail: "Primary and backup contacts for decisions outside the agreed scope." },
                { label: "Update and review process", detail: "How rate, policy and instruction changes reach the team." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark/50" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 6: OVERSIGHT AND ACCOUNTABILITY ──────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Oversight and Accountability"
          title="Visibility into reservation handling across your properties"
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left — copy + illustrative record */}
          <div>
            <div className="text-sm leading-relaxed text-ink-soft space-y-4">
              <p>
                Give management a clear view of the work being handled and the decisions still awaiting attention. We agree the records, reporting format and review process around your participating properties and coverage.
              </p>
              <p>
                The information can cover enquiries received, authorized booking actions, requests passed back to your teams and outstanding follow-up. Available fields and reporting detail are confirmed during setup.
              </p>
              <p>
                Property-specific context stays with the handoff, helping the next person understand what the guest requested, what has already happened and what needs approval.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-ink mb-2">Define the measures before judging the results</h3>
              <p className="text-sm text-ink-soft">
                If booking outcomes or conversion are part of your review, we first agree what is being measured and which records support it. A handled enquiry, a confirmed reservation and a completed stay represent different outcomes.
              </p>
            </div>

            {/* Illustrative record */}
            <div className="mt-7 overflow-hidden rounded-lg border border-line bg-paper">
              <div className="border-b border-line bg-surface px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Illustrative reservation record — not actual guest data
                </p>
              </div>
              <div className="divide-y divide-line/60">
                {[
                  { label: "Participating property", value: "— [redacted]" },
                  { label: "Enquiry channel", value: "Phone" },
                  { label: "Guest requirement", value: "Superior room, 3 nights, flexible rate" },
                  { label: "Action taken", value: "Quoted available rate; reservation completed in system" },
                  { label: "Booking status", value: "Confirmed" },
                  { label: "Escalation owner", value: "None required" },
                  { label: "Outstanding next step", value: "None — outcome recorded" },
                ].map((f) => (
                  <div key={f.label} className="grid grid-cols-[168px_1fr] gap-3 px-5 py-3 text-sm">
                    <span className="font-semibold text-ink shrink-0">{f.label}</span>
                    <span className="text-ink-soft">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — status panel + resource links */}
          <div className="flex flex-col gap-8">

            {/* Enquiry status visual */}
            <div className="rounded-lg border border-line bg-surface p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-muted mb-5">Portfolio enquiry status — illustrative</p>
              <div className="flex flex-col gap-3">
                {[
                  { property: "Property A — direct call", status: "Confirmed", badge: "green" },
                  { property: "Property A — web enquiry", status: "Confirmed", badge: "green" },
                  { property: "Property B — OTA message", status: "Confirmed", badge: "green" },
                  { property: "Property B — rate exception", status: "Pending approval", badge: "amber" },
                  { property: "Property C — cancellation", status: "Escalated", badge: "amber" },
                ].map((row) => (
                  <div
                    key={row.property}
                    className="flex items-center justify-between gap-4 rounded border border-line bg-paper px-4 py-2.5"
                  >
                    <span className="text-xs text-ink-soft">{row.property}</span>
                    <span
                      className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        row.badge === "green"
                          ? "border border-green-200 bg-green-50 text-green-700"
                          : "border border-amber-200 bg-amber-50 text-amber-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-ink-muted">
                Pending approvals and escalations remain visible until resolved or handed off.
              </p>
            </div>

            {/* Resource links */}
            <div>
              <h3 className="text-base font-semibold text-ink mb-4">Explore the work behind reservations coverage</h3>
              <div className="flex flex-col gap-3">
                <Link href="/services/reservation-support" className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
                  Hotel reservation support
                </Link>
                <Link href="/resources/insights/unanswered-reservation-calls-revenue" className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
                  The impact of unanswered reservation calls
                </Link>
                <Link href="/pricing" className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
                  How Guest Squad scopes pricing
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* ── SECTION 7: FAQ AND NEXT STEP ─────────────────────────────── */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

          {/* FAQ */}
          <div>
            <SectionHeading
              eyebrow="Common Questions"
              title="Questions about outsourced central reservations"
            />
            <div className="mt-8">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          {/* CTA panel */}
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">
              Next Step
            </p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Discuss a reservations operation for your portfolio
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Tell us which properties you manage, how reservation enquiries reach your team and where coverage needs to improve. We will review your systems, booking workflows and required hours, then discuss a suitable scope and rollout.
            </p>
            <CoverageReviewButton variant="gold" size="default" ctaLocation="crd_next_step">
              Discuss Your Reservations Operation
            </CoverageReviewButton>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="outline" size="sm" ctaLocation="crd_pricing_link">
                How pricing is scoped
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Helpful for the conversation: participating properties, current systems, enquiry channels, coverage hours and the booking actions you want handled.
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
