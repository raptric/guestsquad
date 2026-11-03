/**
 * Digital Front Desk — private preview
 * Status: noindex. Not in production nav, sitemap or SERVICES array.
 * Route: /services/digital-front-desk
 * Canonical will be set to the public URL at launch.
 */

import type { Metadata } from "next";
import Image from "next/image";
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
    title: "Digital Front Desk for Hotels | Guest Squad",
    description:
      "Human remote reception for hotels and serviced apartments. Guest calls, messages, arrival assistance and local-team coordination around your procedures.",
    path: "/services/digital-front-desk",
  }),
  robots: { index: false, follow: false },
};

// ---------------------------------------------------------------------------
// FAQ data
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "What is a digital front desk for hotels?",
    a: "A digital front desk, also called a virtual front desk, gives hotel guests access to reception support delivered remotely. Guest Squad provides a human team for agreed calls, messages, arrival assistance and guest requests, using your property information and supported systems. The operating scope includes clear responsibilities for both the remote team and your local contacts.",
  },
  {
    q: "How does this differ from a hotel answering service?",
    a: "A hotel answering service focuses on incoming calls and the actions agreed for those calls. Digital Front Desk can bring together calls, messaging, arrival assistance and guest-request coordination in one reception arrangement. The right choice depends on which parts of your guest journey need support.",
  },
  {
    q: "Can you help guests check in and access the property?",
    a: "Yes. We can provide arrival and access guidance and carry out approved check-in or access actions where your systems and permissions support them. Requests requiring physical attendance or authority outside the agreed scope follow your escalation plan.",
  },
  {
    q: "Can remote reception work alongside our existing staff?",
    a: "Yes. You can use Guest Squad for agreed overflow, staff-absence or out-of-hours coverage while your team continues its on-site work. We define routing and handover rules so responsibilities are clear.",
  },
  {
    q: "What happens when housekeeping or maintenance needs to attend?",
    a: "We contact your approved local team, share the request and follow up within your procedures. Your local responders carry out the physical work. We keep the guest informed and record the status, including any action or approval still outstanding.",
  },
  {
    q: "Do we need to change our PMS or install a kiosk?",
    a: "We start by reviewing your existing systems and guest-contact channels. The service is scoped around supported access and workflows; a kiosk is not a standard requirement. Compatibility and any setup requirements are confirmed before coverage begins.",
  },
  {
    q: "Can we arrange 24/7 guest support?",
    a: "Coverage can be scoped for after-hours, overflow or broader needs, including round-the-clock support where agreed. Tell us the hours, channels and guest tasks you need covered so we can confirm a suitable operating arrangement and proposal.",
  },
  {
    q: "How is Digital Front Desk pricing determined?",
    a: "Pricing depends on coverage hours, interaction volume, channels, property complexity and the actions required. We review your operation before recommending a scope. You can begin the conversation with your current coverage gap; exact volumes can be discussed during scoping.",
  },
];

// ---------------------------------------------------------------------------
// Scope table rows
// ---------------------------------------------------------------------------
const SCOPE_ROWS = [
  {
    need: "Calls and property questions",
    howHelps: "Answer questions about your property, amenities, policies and guest requests using the information you provide.",
    control: "Exceptions and decisions outside the brief go to the appropriate property contact.",
    link: { label: "Hotel Answering Service", href: "/services/hotel-answering-service" },
  },
  {
    need: "Guest messages",
    howHelps: "Handle conversations through agreed messaging channels, including supported OTA inboxes.",
    control: "Your channel access, tone and response procedures guide the handling.",
    link: { label: "Guest Messaging", href: "/services/guest-messaging" },
  },
  {
    need: "Arrivals and departures",
    howHelps: "Explain arrival instructions, help with check-in or checkout questions and complete supported actions where authorized.",
    control: "Your systems and permissions determine which actions we can take.",
    link: null,
  },
  {
    need: "Access assistance",
    howHelps: "Help guests follow entry instructions, troubleshoot supported access issues and perform approved actions.",
    control: "Physical attendance, repairs and access exceptions follow your local response plan.",
    link: null,
  },
  {
    need: "Housekeeping and maintenance requests",
    howHelps: "Contact your approved team, pass on the relevant context, follow up and keep the guest informed.",
    control: "Your local contacts carry out the work; approvals stay with the people you designate.",
    link: null,
  },
  {
    need: "Reservation enquiries",
    howHelps: "Answer booking questions and handle approved reservation tasks where included.",
    control: "Your rates, availability, policies and booking authority set the boundaries.",
    link: { label: "Reservation Support", href: "/services/reservation-support" },
  },
];

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
const PAGE_URL = `${SITE.url}/services/digital-front-desk`;
const SERVICE_ID = `${SITE.url}/#service-digital-front-desk`;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": SERVICE_ID,
  name: "Digital Front Desk for Hotels",
  serviceType: "Digital Front Desk",
  description:
    "Human remote reception for hotels and serviced apartments. Guest calls, messages, arrival assistance and local-team coordination around your procedures.",
  url: PAGE_URL,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: "Worldwide",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  audience: [
    { "@type": "Audience", audienceType: "Independent Hotel" },
    { "@type": "Audience", audienceType: "Boutique Hotel" },
    { "@type": "Audience", audienceType: "Serviced Apartment" },
    { "@type": "Audience", audienceType: "Aparthotel" },
    { "@type": "Audience", audienceType: "Contactless Property" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Front Desk — Available Scope",
    itemListElement: [
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
          "@id": `${SITE.url}/services/guest-messaging#service`,
          name: "Guest Messaging",
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
          "@id": `${SITE.url}/services/reservation-support#service`,
          name: "Reservation Support",
        },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    description: "Coverage scoped to your property hours, channels and interaction volume. Begins with a coverage review.",
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
  name: "Digital Front Desk for Hotels | Guest Squad",
  description:
    "Human remote reception for hotels and serviced apartments. Guest calls, messages, arrival assistance and local-team coordination around your procedures.",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  mainEntity: { "@id": SERVICE_ID },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function DigitalFrontDeskPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchemaData,
          serviceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Digital Front Desk", path: "/services/digital-front-desk" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Digital Front Desk", path: "/services/digital-front-desk" },
        ]}
      />

      {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-22">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Human Remote Reception
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Digital Front Desk for Hotels and Serviced Properties
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Give guests a person to turn to when your reception team is busy or off duty. Guest Squad handles calls, messages, arrival questions and guest requests through your supported systems, following your property procedures and coordinating with your on-site contacts.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For independent hotels, boutique properties, serviced apartments, aparthotels and contactless stays.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="dfd_hero">
                Discuss Front Desk Coverage
              </CoverageReviewButton>
              <a
                href="#scope"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                See What We Handle
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              After-hours, overflow and broader coverage, scoped to your operation.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?w=750&h=563&fit=crop&crop=entropy&q=75&auto=format"
              alt="Hotel front desk reception area"
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

      {/* ── SECTION 2: COVERAGE ARRANGEMENTS ───────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Coverage Arrangements"
          title="Front desk support for the hours and situations you need"
          description="Extend reception around your existing team, opening hours and guest journey. We agree which interactions come to us, what we can handle and when your property team takes over."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-semibold text-ink">After-hours and weekends</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Give late arrivals and in-stay guests a clear contact when reception is closed or operating with fewer staff. We handle agreed calls and messages, assist with supported arrival procedures and follow your escalation plan when local action is needed.
            </p>
            <div className="mt-auto pt-5">
              <Link href="/services/after-hours-support" className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                Explore after-hours hotel support
              </Link>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-gold/40 bg-paper p-7 shadow-sm">
            <h3 className="text-base font-semibold text-ink">Overflow and staff absence</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Keep guest conversations moving while your team handles check-ins, in-person requests or a staffing gap. Route agreed calls and messages to Guest Squad, with clear rules for what we complete and what returns to your team.
            </p>
          </div>

          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-semibold text-ink">Broader reception coverage</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Build a wider remote reception arrangement across agreed hours and channels. Define the guest tasks, system access and local response responsibilities before coverage begins.
            </p>
          </div>

        </div>
        <p className="mt-5 text-xs text-ink-muted">
          These are coverage arrangements, not fixed packages or automatic inclusions.
        </p>
      </Section>

      {/* ── SECTION 3: SERVICE SCOPE ─────────────────────────────────── */}
      <Section id="scope" surface>
        <SectionHeading
          eyebrow="Service Scope"
          title="What your digital front desk can handle"
          description="Your guests need useful answers and a clear next step. We work from your property information and approved procedures, with the scope and authority agreed before launch."
        />

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-x-auto md:block">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="pb-3 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted w-[22%]">Guest need</th>
                <th className="pb-3 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted w-[42%]">How Guest Squad helps</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">How your property stays in control</th>
              </tr>
            </thead>
            <tbody>
              {SCOPE_ROWS.map((row, i) => (
                <tr key={row.need} className={`border-b border-line/60 ${i % 2 === 0 ? "" : "bg-surface/40"}`}>
                  <td className="py-4 pr-6 align-top">
                    <span className="font-medium text-ink">{row.need}</span>
                    {row.link && (
                      <div className="mt-1.5">
                        <Link href={row.link.href} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                          {row.link.label}
                        </Link>
                      </div>
                    )}
                  </td>
                  <td className="py-4 pr-6 text-ink-soft align-top">{row.howHelps}</td>
                  <td className="py-4 text-ink-soft align-top">{row.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-6 flex flex-col gap-4 md:hidden">
          {SCOPE_ROWS.map((row) => (
            <div key={row.need} className="rounded-lg border border-line bg-paper p-5">
              <p className="font-semibold text-ink text-sm">{row.need}</p>
              {row.link && (
                <Link href={row.link.href} className="mt-0.5 block text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                  {row.link.label}
                </Link>
              )}
              <div className="mt-3 space-y-2 text-xs text-ink-soft">
                <div>
                  <span className="font-semibold text-ink-muted">How we help: </span>
                  {row.howHelps}
                </div>
                <div>
                  <span className="font-semibold text-ink-muted">Your control: </span>
                  {row.control}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          Need a specific part of reception covered? Explore our{" "}
          <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">hotel answering service</Link>
          {", "}
          <Link href="/services/guest-messaging" className="text-gold-dark underline underline-offset-4 hover:text-gold">guest messaging support</Link>
          {" and "}
          <Link href="/services/ota-inbox-management" className="text-gold-dark underline underline-offset-4 hover:text-gold">OTA inbox management</Link>.
        </p>
      </Section>

      {/* ── SECTION 4: WORKED GUEST INTERACTION ──────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="When a late arrival needs more than directions"
          description="A guest reaches the property after reception closes and cannot get inside. Here is how an agreed remote-support workflow can operate."
        />

        <div className="mt-10 max-w-2xl">
          {/* Steps */}
          {[
            {
              n: "01",
              title: "Establish the context",
              body: "Confirm the guest and property details according to your procedure, then review the relevant arrival instructions.",
              owner: "Remote",
            },
            {
              n: "02",
              title: "Take the permitted next step",
              body: "Guide the guest through the entry process or complete a supported action within the access you have authorized.",
              owner: "Remote",
            },
            {
              n: "03",
              title: "Bring in local help when needed",
              body: "If remote assistance cannot resolve the problem, contact the approved local responder. Follow the backup escalation route if the first contact is unavailable.",
              owner: "Remote → On-site",
            },
            {
              n: "04",
              title: "Keep the guest and property informed",
              body: "Explain the next step to the guest and record the action, current status and outstanding follow-up. A pending local response remains visible as pending.",
              owner: "Remote",
            },
          ].map((step, i, arr) => (
            <div key={step.n} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-gold/50 bg-paper text-xs font-bold text-gold-dark">
                  {step.n}
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px flex-1 bg-line my-1 min-h-[28px]" />
                )}
              </div>
              <div className={i < arr.length - 1 ? "pb-6" : "pb-0"}>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider rounded px-1.5 py-0.5 bg-gold/10 text-gold-dark border border-gold/20">
                    {step.owner}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          ))}

          {/* Decision branch */}
          <div className="ml-14 mt-4 rounded-lg border border-line bg-surface p-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-3">Resolved?</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded border border-green-200 bg-green-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-green-800 mb-2">Yes</p>
                <ul className="text-xs text-green-900 space-y-1 list-disc list-inside">
                  <li>Confirm outcome with guest</li>
                  <li>Record action and status</li>
                </ul>
              </div>
              <div className="rounded border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">No — escalate</p>
                <ul className="text-xs text-amber-900 space-y-1 list-disc list-inside">
                  <li>Contact approved local responder <span className="font-bold">[On-site]</span></li>
                  <li>Follow backup escalation if needed</li>
                  <li>Update guest on status</li>
                  <li>Record resolved or pending</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-4 ml-14 text-xs text-ink-muted italic">
            Illustrative workflow. Actual actions depend on your systems, permissions and agreed escalation procedures.
          </p>
        </div>
      </Section>

      {/* ── SECTION 5: SETUP AND HANDOVER ───────────────────────────── */}
      <Section surface>
        <SectionHeading
          eyebrow="Setup and Handover"
          title="Set up around your property, systems and team"
          description="Property knowledge and clear handovers make remote reception useful. Before coverage starts, we agree how the service will operate with your staff and local contacts."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            {[
              {
                n: "01",
                title: "Define the coverage",
                body: "Identify your guest-contact gaps, required hours, channels and tasks. Decide what comes to Guest Squad and what stays with your team.",
              },
              {
                n: "02",
                title: "Build the property brief",
                body: "Document your policies, arrival instructions, guest information, tone and escalation contacts so handling reflects how your property operates.",
              },
              {
                n: "03",
                title: "Confirm access and routing",
                body: "Review the systems and permissions needed for the agreed work. Set up the supported communication paths and clarify who can approve exceptions.",
              },
              {
                n: "04",
                title: "Review the handover",
                body: "Walk through representative guest situations, confirm primary and backup contacts, and agree how updates and unresolved requests move between teams.",
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
              We confirm supported workflows during scoping. System compatibility, access and the availability of local responders determine what can be handled remotely.
            </p>
          </div>

          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-5">Before coverage starts</p>
            <ul className="flex flex-col gap-4">
              {[
                "Who owns updates to property instructions",
                "How changes reach the remote team",
                "Primary and backup local contacts confirmed",
                "Compatibility and system access reviewed",
                "Handover process agreed between property and remote staff",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark/50" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── SECTION 6: VISIBILITY AND ACCOUNTABILITY ─────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Visibility and Accountability"
          title="Know what was handled and what still needs attention"
        />
        <div className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft space-y-4">
          <p>
            Your property needs context when a request passes between teams. Guest interactions and escalations are documented so the next person can understand the request, the action taken and the current status.
          </p>
          <p>
            The reporting format and review process are agreed around your coverage. We define the information your team needs to see, including outstanding requests, escalation ownership and required follow-up.
          </p>
          <p>
            For housekeeping, maintenance or management issues, we coordinate with your approved contacts and follow the issue within the agreed procedures. Work awaiting local action stays distinguishable from work completed.
          </p>
        </div>

        {/* Illustrative record */}
        <div className="mt-8 max-w-2xl overflow-hidden rounded-lg border border-line bg-paper">
          <div className="border-b border-line bg-surface px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Illustrative interaction record — not actual guest data
            </p>
          </div>
          <div className="divide-y divide-line/60">
            {[
              { label: "Property", value: "— [redacted]" },
              { label: "Interaction channel", value: "Phone" },
              { label: "Guest enquiry or request", value: "Late arrival — unable to access room" },
              { label: "Action taken", value: "Provided entry instructions; confirmed access via supported system" },
              { label: "Responsible contact", value: "Remote agent / [local contact if escalated]" },
              { label: "Current status", value: "Resolved" },
              { label: "Required next action", value: "None — issue closed" },
            ].map((f) => (
              <div key={f.label} className="grid grid-cols-[160px_1fr] gap-4 px-5 py-3 text-sm">
                <span className="font-semibold text-ink shrink-0">{f.label}</span>
                <span className="text-ink-soft">{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related resources */}
        <div className="mt-10">
          <h3 className="text-base font-semibold text-ink mb-4">Prepare your property for remote coverage</h3>
          <div className="flex flex-col gap-3">
            <Link href="/resources/after-hours-hotel-support-checklist" className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
              Review your after-hours support requirements
            </Link>
            <Link href="/resources/hotel-front-desk-overflow-support" className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
              Plan front desk overflow support
            </Link>
            <Link href="/resources/hotel-guest-messaging-sop-template" className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
              Build a guest messaging SOP
            </Link>
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
              title="Questions about remote hotel reception"
            />
            <div className="mt-8">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          {/* Discovery panel */}
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">
              Next Step
            </p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Discuss your front desk coverage
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Tell us where your reception team needs support: overnight arrivals, busy check-in periods, guest messages or a broader coverage requirement. We will review your hours, systems and guest-handling needs, then discuss the responsibilities and setup for a suitable arrangement.
            </p>
            <CoverageReviewButton variant="gold" size="default" ctaLocation="dfd_next_step">
              Discuss Front Desk Coverage
            </CoverageReviewButton>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="outline" size="sm" ctaLocation="dfd_pricing_link">
                How pricing is scoped
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Helpful for the conversation: property type and size, current reception hours, main guest-contact channels and the systems your team uses.
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
