/**
 * Vacation Rental Guest Operations — private draft
 * Status: noindex. Not in SERVICES array, sitemap or production nav.
 * Route: /services/vacation-rental-guest-operations
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
    title: "Vacation Rental Guest Support & Operations",
    description:
      "Human guest support for vacation rental managers. Messages, arrival assistance and local-team coordination, guided by each listing's procedures.",
    path: "/services/vacation-rental-guest-operations",
  }),
  robots: { index: false, follow: false },
};

// ---------------------------------------------------------------------------
// FAQ data
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "What does Vacation Rental Guest Operations include?",
    a: "The service brings together agreed guest communication, arrival assistance and operational coordination across participating listings. The scope can cover calls, messages, property questions and requests that need your approved local contacts. We define the channels, hours, actions and responsibilities before handling begins.",
  },
  {
    q: "How is this different from a vacation rental answering service?",
    a: "A vacation rental answering service focuses on incoming phone calls. Guest Operations provides a broader arrangement for communication and coordination across the guest journey, including listing knowledge, permitted actions, local-team handoffs and management visibility.",
  },
  {
    q: "Can you support Airbnb, Vrbo and direct-booking guests?",
    a: "We review the channels and tools used by your portfolio and agree which conversations can be handled through supported access. Each listing's instructions and the permissions available determine the work we can perform.",
  },
  {
    q: "Can you help guests check in or resolve access problems?",
    a: "Yes. We provide guidance and carry out supported, approved actions within your systems and procedures. If the issue needs physical attendance or a decision outside our authority, we follow the local response and escalation plan.",
  },
  {
    q: "What happens when maintenance or housekeeping needs to attend?",
    a: "We contact your approved team, share the relevant context and follow up within your procedures. Your local contacts perform the work. We keep the guest informed and record whether the request is resolved or still awaiting action.",
  },
  {
    q: "Can you work alongside our existing team and automated messages?",
    a: "Yes. During setup, we define which conversations come to Guest Squad, which stay with your team and how existing automated messages fit the workflow. Routing and handover rules help avoid overlapping responsibilities.",
  },
  {
    q: "Do you provide full property management?",
    a: "This service focuses on remote guest communication and agreed operational coordination. Physical property work, owner relationships, pricing strategy and other management responsibilities remain outside the scope unless separately agreed.",
  },
  {
    q: "Can we start with after-hours coverage or selected listings?",
    a: "An initial arrangement can focus on particular hours, channels or listings. We review the requirements and local response arrangements, then agree an appropriate scope. Broader coverage can be discussed as your needs change.",
  },
  {
    q: "Can you approve refunds, compensation or reservation changes?",
    a: "Only where the specific action is authorized and supported by your systems. Otherwise, we gather the relevant information and route the decision to your designated contact.",
  },
  {
    q: "How is the service priced?",
    a: "Pricing depends on participating listings, guest-contact volume, coverage hours, channels, property complexity and the actions required. Listing count helps us understand the portfolio, but the operating workload also matters.",
  },
];

// ---------------------------------------------------------------------------
// Guest-journey table
// ---------------------------------------------------------------------------
const JOURNEY_ROWS = [
  {
    stage: "Before booking",
    help: "Answer questions about the property, amenities, house rules and booking conditions using approved information. Handle booking-related actions only where included and authorized.",
  },
  {
    stage: "Before arrival",
    help: "Help guests understand arrival instructions, parking, access arrangements and the information they need for their stay.",
  },
  {
    stage: "Check-in and access",
    help: "Guide guests through supported arrival procedures, troubleshoot access questions and perform permitted actions where your systems allow.",
  },
  {
    stage: "During the stay",
    help: "Handle property questions, receive requests and coordinate with approved housekeeping, maintenance or management contacts when local action is required.",
  },
  {
    stage: "Departure and follow-up",
    help: "Explain checkout instructions, handle departure questions and pass outstanding matters to the appropriate contact under your procedures.",
  },
];

// ---------------------------------------------------------------------------
// Listing-brief fields
// ---------------------------------------------------------------------------
const LISTING_FIELDS = [
  "Listing identity and location.",
  "Guest-facing property information.",
  "House rules.",
  "Arrival and departure procedures.",
  "Access instructions and authority.",
  "Approved troubleshooting.",
  "Local contact responsibilities.",
  "Escalation and approval limits.",
];

// ---------------------------------------------------------------------------
// Visibility record fields
// ---------------------------------------------------------------------------
const RECORD_FIELDS = [
  { label: "Listing", value: "Sunset Villa — Unit 4B" },
  { label: "Channel", value: "Airbnb message" },
  { label: "Request", value: "Entry code not accepted" },
  { label: "Action taken", value: "Guided through backup procedure" },
  { label: "Local responder", value: "Maintenance — primary contact" },
  { label: "Status", value: "Awaiting attendance" },
  { label: "Next step", value: "Follow up with guest once resolved" },
];

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
const PAGE_URL = `${SITE.url}/services/vacation-rental-guest-operations`;
const SERVICE_ID = `${SITE.url}/#service-vacation-rental-guest-operations`;

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Vacation Rental Guest Support & Operations | Guest Squad",
        description:
          "Human guest support for vacation rental managers. Messages, arrival assistance and local-team coordination, guided by each listing's procedures.",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": SERVICE_ID },
        mainEntity: { "@id": SERVICE_ID },
      },
      {
        "@type": "Service",
        "@id": SERVICE_ID,
        name: "Vacation Rental Guest Operations",
        serviceType: "Vacation Rental Guest Operations",
        description:
          "Remote guest communication and operational coordination for professional vacation-rental companies and short-term rental portfolios. Covers messages, arrival assistance, local-team coordination and issue ownership.",
        url: PAGE_URL,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "Worldwide",
        audience: [
          {
            "@type": "Audience",
            audienceType: "Vacation Rental Management Company",
          },
          { "@type": "Audience", audienceType: "Short-Term Rental Operator" },
          { "@type": "Audience", audienceType: "STR Portfolio Manager" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Vacation Rental Guest Operations — Available Scope",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE.url}/services/vacation-rental-answering-service#service`,
                name: "Vacation Rental Answering Service",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE.url}/services/airbnb-guest-support#service`,
                name: "Airbnb Guest Support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE.url}/services/guest-messaging#service`,
                name: "Guest Messaging",
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
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        {
          name: "Vacation Rental Guest Operations",
          path: "/services/vacation-rental-guest-operations",
        },
      ]),
      faqSchema(FAQS.map((f) => ({ q: f.q, a: f.a }))),
    ],
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function VacationRentalGuestOperationsPage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      {/* ------------------------------------------------------------------ */}
      {/* Section 1: Hero                                                     */}
      {/* ------------------------------------------------------------------ */}
      <Section id="hero">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            {
              name: "Vacation Rental Guest Operations",
              path: "/services/vacation-rental-guest-operations",
            },
          ]}
        />
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: copy */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-gold">
              Human Support for STR Portfolios
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-5xl">
              Vacation Rental Guest Operations for Property Managers
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Keep guest communication and day-to-day requests moving across
              your portfolio. Guest Squad&apos;s hospitality-trained remote team
              handles agreed calls, messages, arrival questions and issue
              coordination using each listing&apos;s instructions and your
              supported systems.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              From a late check-in to a maintenance request, guests receive
              guidance while your local team gets the context needed to act.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              For professional vacation-rental companies and short-term rental
              managers operating across Airbnb, Vrbo and direct-booking
              channels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CoverageReviewButton>Discuss Your Guest Operations</CoverageReviewButton>
              <ButtonLink href="#guest-support-scope" variant="outline">
                Explore What We Handle
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-ink-muted">
              After-hours, overflow and broader coverage, organized around your
              listings and local teams.
            </p>
          </div>

          {/* Right: photo */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=75"
              alt="Vacation rental property exterior at dusk"
              className="h-full w-full object-cover"
              width={900}
              height={600}
            />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 2: Guest support scope                                      */}
      {/* ------------------------------------------------------------------ */}
      <Section surface id="guest-support-scope">
        <SectionHeading
          eyebrow="Guest Journey"
          title="Guest support from the first question to departure"
          description="Each stage of the stay brings different questions and decisions. We agree which conversations and actions Guest Squad handles, with listing-specific information and clear approval boundaries."
        />

        {/* Journey table */}
        <div className="mt-10 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[540px] text-sm">
            <thead>
              <tr className="border-b border-line bg-paper">
                <th className="py-3 pl-5 pr-4 text-left text-xs font-bold uppercase tracking-[0.12em] text-ink-muted w-40">
                  Stage
                </th>
                <th className="py-3 pl-4 pr-5 text-left text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">
                  How Guest Squad helps
                </th>
              </tr>
            </thead>
            <tbody>
              {JOURNEY_ROWS.map((row, i) => (
                <tr
                  key={row.stage}
                  className={
                    i < JOURNEY_ROWS.length - 1 ? "border-b border-line" : ""
                  }
                >
                  <td className="py-4 pl-5 pr-4 font-medium text-ink align-top">
                    {row.stage}
                  </td>
                  <td className="py-4 pl-4 pr-5 text-ink-soft align-top">
                    {row.help}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-ink-soft">
          Your house rules, booking policies and approval limits guide the work.
          Requests outside those instructions go to the person you designate.
        </p>

        <p className="mt-4 text-sm text-ink-soft">
          Need a particular channel covered? Explore our{" "}
          <Link
            href="/services/vacation-rental-answering-service"
            className="text-gold underline underline-offset-2 hover:text-ink transition-colors"
          >
            vacation rental answering service
          </Link>
          ,{" "}
          <Link
            href="/services/airbnb-guest-support"
            className="text-gold underline underline-offset-2 hover:text-ink transition-colors"
          >
            Airbnb guest support
          </Link>{" "}
          and{" "}
          <Link
            href="/services/ota-inbox-management"
            className="text-gold underline underline-offset-2 hover:text-ink transition-colors"
          >
            OTA inbox management
          </Link>
          .
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 3: Coverage arrangements                                    */}
      {/* ------------------------------------------------------------------ */}
      <Section id="coverage">
        <SectionHeading
          eyebrow="Coverage"
          title="Coverage for overnight arrivals, busy periods and everyday operations"
          description="Build support around the hours, channels and guest tasks your team needs covered. Define how work reaches Guest Squad and when your local or management team becomes involved."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "After-hours and overnight support",
              body: "Give guests a clear contact when your office is closed. We handle agreed calls and messages, assist with supported arrival procedures and follow your escalation plan when a request needs local attention.",
            },
            {
              title: "Overflow during busy periods",
              body: "Add support when arrivals, guest questions or seasonal demand put pressure on your team. Agree the channels and tasks that move to Guest Squad, with clear handovers for outstanding requests.",
            },
            {
              title: "Broader portfolio coverage",
              body: "Bring more of your guest communication and coordination into one operating arrangement. Define participating listings, coverage windows and responsibilities, then review what is appropriate to expand.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-line bg-surface p-6"
            >
              <h3 className="font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          The right scope depends on guest-contact volume, listing complexity
          and the local response arrangements available.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 4: Local coordination and issue ownership                   */}
      {/* ------------------------------------------------------------------ */}
      <Section surface id="coordination">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: steps */}
          <div>
            <SectionHeading
              eyebrow="Coordination"
              title="Connect the guest's request with the people who can act"
              description="A reply is only one part of handling a guest issue. When a request needs someone at the property, we coordinate with your approved contacts and keep track of the next action within your procedures."
            />

            <p className="mt-2 text-sm text-ink-muted italic">
              Illustrative scenario: a guest reports that the entry code is not
              working.
            </p>

            <ol className="mt-8 space-y-6">
              {[
                {
                  n: "1",
                  title: "Confirm the right listing and instructions",
                  body: "Establish the guest and property context according to your procedure, then check the relevant arrival information.",
                },
                {
                  n: "2",
                  title: "Provide permitted assistance",
                  body: "Guide the guest through the supported access process or take an approved action within the permissions provided.",
                },
                {
                  n: "3",
                  title: "Coordinate local help",
                  body: "If the issue needs attendance, contact the approved responder with the details already gathered. Follow the backup route if the first contact is unavailable.",
                },
                {
                  n: "4",
                  title: "Keep the status clear",
                  body: "Update the guest, follow up within the agreed process and record whether the issue is resolved, awaiting attendance or pending a management decision.",
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-bold text-gold"
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-xs text-ink-muted">
              Illustrative workflow. Actual actions depend on listing
              procedures, system access and the local response plan.
            </p>
          </div>

          {/* Right: workflow SVG */}
          <div className="flex items-start justify-center rounded-lg border border-line bg-paper p-6 lg:p-8">
            <div className="w-full max-w-xs">
              <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-ink-muted">
                Issue coordination flow
              </p>
              <svg
                viewBox="0 0 260 440"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Guest reports an issue. Guest Squad confirms listing context and checks approved instructions. Permitted remote assistance is provided. If local action is required, the approved responder is contacted with a backup route. Guest is updated and status is recorded."
                className="w-full"
              >
                {/* Guest node */}
                <rect x="60" y="10" width="140" height="36" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-line"/>
                <text x="130" y="29" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-current text-ink">Guest reports an issue</text>
                <line x1="130" y1="46" x2="130" y2="66" stroke="currentColor" strokeWidth="1.5" className="text-line" strokeDasharray="3 2"/>

                {/* Confirm node */}
                <rect x="30" y="66" width="200" height="36" rx="7" style={{fill: "var(--color-surface, #F5F5F0)"}} stroke="currentColor" strokeWidth="1" className="text-line"/>
                <text x="130" y="81" textAnchor="middle" fontSize="8.5" className="fill-current text-ink">Confirm guest and listing context</text>
                <text x="130" y="94" textAnchor="middle" fontSize="8" className="fill-current text-ink-muted">Check approved instructions</text>
                <line x1="130" y1="102" x2="130" y2="122" stroke="currentColor" strokeWidth="1.5" className="text-line" strokeDasharray="3 2"/>

                {/* Remote assistance node */}
                <rect x="30" y="122" width="200" height="36" rx="7" style={{fill: "var(--color-surface, #F5F5F0)"}} stroke="currentColor" strokeWidth="1" className="text-line"/>
                <text x="130" y="137" textAnchor="middle" fontSize="8.5" className="fill-current text-ink">Provide permitted remote assistance</text>
                <text x="130" y="150" textAnchor="middle" fontSize="8" className="fill-current text-ink-muted">Guest Squad acts within authority</text>
                <line x1="130" y1="158" x2="130" y2="178" stroke="currentColor" strokeWidth="1.5" className="text-line" strokeDasharray="3 2"/>

                {/* Decision diamond */}
                <polygon points="130,178 200,210 130,242 60,210" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-line"/>
                <text x="130" y="207" textAnchor="middle" fontSize="8.5" className="fill-current text-ink">Local action</text>
                <text x="130" y="218" textAnchor="middle" fontSize="8.5" className="fill-current text-ink">required?</text>

                {/* No branch — right */}
                <line x1="200" y1="210" x2="240" y2="210" stroke="currentColor" strokeWidth="1" className="text-line"/>
                <text x="222" y="206" textAnchor="middle" fontSize="7.5" className="fill-current text-ink-muted">No</text>
                <line x1="240" y1="210" x2="240" y2="380" stroke="currentColor" strokeWidth="1" className="text-line"/>
                <line x1="240" y1="380" x2="182" y2="380" stroke="currentColor" strokeWidth="1" className="text-line"/>

                {/* Yes branch — down */}
                <line x1="130" y1="242" x2="130" y2="262" stroke="currentColor" strokeWidth="1.5" className="text-line"/>
                <text x="118" y="256" textAnchor="middle" fontSize="7.5" className="fill-current text-ink-muted">Yes</text>

                {/* Contact responder */}
                <rect x="30" y="262" width="200" height="36" rx="7" style={{fill: "var(--color-surface, #F5F5F0)"}} stroke="currentColor" strokeWidth="1" className="text-line"/>
                <text x="130" y="277" textAnchor="middle" fontSize="8.5" className="fill-current text-ink">Contact approved local responder</text>
                <text x="130" y="290" textAnchor="middle" fontSize="8" className="fill-current text-ink-muted">Backup route if unavailable</text>
                <line x1="130" y1="298" x2="130" y2="318" stroke="currentColor" strokeWidth="1.5" className="text-line" strokeDasharray="3 2"/>

                {/* Update and record */}
                <rect x="30" y="318" width="200" height="50" rx="7" style={{fill: "rgba(184,146,58,0.08)"}} stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" className="text-line"/>
                <text x="130" y="337" textAnchor="middle" fontSize="8.5" fontWeight="600" className="fill-current text-ink">Update guest</text>
                <text x="130" y="350" textAnchor="middle" fontSize="8" className="fill-current text-ink-soft">Record: resolved / awaiting</text>
                <text x="130" y="362" textAnchor="middle" fontSize="8" className="fill-current text-ink-soft">attendance / pending decision</text>

                {/* Caption */}
                <text x="130" y="420" textAnchor="middle" fontSize="7.5" className="fill-current text-ink-muted">Guest Squad — remote coordination only</text>
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 5: Listing-specific onboarding                              */}
      {/* ------------------------------------------------------------------ */}
      <Section id="onboarding">
        <SectionHeading
          eyebrow="Setup"
          title="Built around each listing's details and your way of working"
          description="Guest support depends on accurate property knowledge. We organize the information, access and contact routes needed for the agreed work, with a process for keeping instructions current."
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Setup steps */}
          <ol className="space-y-6">
            {[
              {
                n: "1",
                title: "Define the operating scope",
                body: "Identify participating listings, guest-contact channels, required hours and the tasks you want handled. Agree what stays with your team.",
              },
              {
                n: "2",
                title: "Prepare listing knowledge",
                body: "Document house rules, amenities, parking, arrival and departure instructions, approved troubleshooting and property-specific exceptions.",
              },
              {
                n: "3",
                title: "Confirm systems and permissions",
                body: "Review the PMS, messaging tools and platform access involved. Agree which actions can be completed and which require approval.",
              },
              {
                n: "4",
                title: "Connect the local response team",
                body: "Set primary and backup contacts, clarify who handles each type of request and agree how listing updates and unresolved issues pass between teams.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-bold text-gold"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Listing brief panel */}
          <div className="rounded-lg border border-line bg-surface overflow-hidden">
            <div className="border-b border-line px-5 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">
                Listing brief — illustrative fields
              </p>
            </div>
            <ul className="divide-y divide-line">
              {LISTING_FIELDS.map((field) => (
                <li
                  key={field}
                  className="flex items-start gap-3 px-5 py-3 text-sm"
                >
                  <span
                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"
                    aria-hidden="true"
                  />
                  <span className="text-ink-soft">{field}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-line px-5 py-3">
              <p className="text-[10px] text-ink-muted">
                Illustrative example — actual fields confirmed during setup. No
                real access codes or guest data.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          Compatibility and available actions are confirmed during scoping.
          Changes to access instructions, policies or local contacts need an
          agreed update process.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 6: Portfolio visibility and accountability                  */}
      {/* ------------------------------------------------------------------ */}
      <Section surface id="visibility">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: copy */}
          <div>
            <SectionHeading
              eyebrow="Visibility"
              title="See what was handled and what still needs attention"
            />
            <p className="mt-4 text-ink-soft leading-relaxed">
              Keep the context of a request available as it moves between
              people. Guest interactions and escalations are documented so the
              next person can understand the listing, the issue, the action
              taken and the current status.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We agree the reporting format and review process around your
              portfolio. Available information can include outstanding requests,
              escalation ownership and required follow-up, with the exact fields
              confirmed during setup.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Work awaiting local attendance or management approval stays
              distinguishable from completed work.
            </p>

            <h3 className="mt-8 font-semibold text-ink">
              Keep responsibilities visible across the portfolio
            </h3>
            <p className="mt-2 text-ink-soft leading-relaxed">
              Your guest team needs to know who is acting next. Clear handovers
              help your managers and local responders pick up the work with the
              relevant context.
            </p>

            <h3 className="mt-8 font-semibold text-ink">
              Prepare your guest-support operation
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/resources/insights/vacation-rental-response-standards"
                  className="text-gold underline underline-offset-2 hover:text-ink transition-colors"
                >
                  Vacation rental response standards
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/insights/hotel-guest-messaging-lifecycle"
                  className="text-gold underline underline-offset-2 hover:text-ink transition-colors"
                >
                  Guest messaging across the stay
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gold underline underline-offset-2 hover:text-ink transition-colors"
                >
                  How Guest Squad scopes pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: illustrative record */}
          <div className="rounded-lg border border-line bg-paper overflow-hidden">
            <div className="border-b border-line px-5 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">
                Interaction record — illustrative example
              </p>
            </div>
            <div className="divide-y divide-line">
              {RECORD_FIELDS.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[140px_1fr] gap-3 px-5 py-3 text-sm"
                >
                  <span className="text-ink-muted">{f.label}</span>
                  <span
                    className={
                      f.label === "Status"
                        ? "font-medium text-amber-600 dark:text-amber-400"
                        : "text-ink"
                    }
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-line px-5 py-3">
              <p className="text-[10px] text-ink-muted">
                Illustrative only — actual fields confirmed during setup.
                Verified evidence can be added after launch.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 7: FAQ + sticky CTA                                         */}
      {/* ------------------------------------------------------------------ */}
      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 lg:items-start">
          {/* FAQ */}
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Questions about vacation rental guest operations"
            />
            <div className="mt-8">
              <FaqAccordion items={FAQS} defaultOpenCount={1} />
            </div>
          </div>

          {/* Sticky CTA panel */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl border border-line bg-surface p-6 lg:p-7">
              <h2 className="text-xl font-semibold text-ink">
                Discuss guest support for your portfolio
              </h2>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                Tell us where guest communication creates pressure: overnight
                arrivals, growing message volume, access questions or requests
                that need local coordination.
              </p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                We will review your listings, systems, coverage hours and
                response arrangements, then discuss a suitable operating scope.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <CoverageReviewButton>Discuss Your Guest Operations</CoverageReviewButton>
                <Link
                  href="/pricing"
                  className="text-center text-sm text-gold underline underline-offset-2 hover:text-ink transition-colors"
                >
                  How pricing is scoped
                </Link>
              </div>
              <p className="mt-4 text-xs text-ink-muted leading-relaxed">
                Helpful for the conversation: active listings, locations,
                booking channels, current tools, coverage gaps and local
                response arrangements.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
