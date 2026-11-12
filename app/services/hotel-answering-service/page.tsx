import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { hotelAnsweringServiceData as d } from "@/lib/service-content";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service | 24/7 Live Calls",
  description:
    "Hotel answering service: a hotel call center answering 24/7, after hours or on overflow, in your hotel's name. After-hours plans from US$149/month.",
  path: "/services/hotel-answering-service",
});

const PATH = "/services/hotel-answering-service";

const FAQS = [
  {
    q: "What does a hotel answering service do?",
    a: "Trained people answer your hotel's calls live, in your hotel's name, using your approved procedures. They log the calls they handle and pass urgent matters to your team, after hours, in busy periods or 24/7.",
  },
  {
    q: "Do you use an automated phone tree or IVR?",
    a: "No. Calls are answered by a trained person, including direct booking calls from your website or Google profile.",
  },
  {
    q: "Can we cover only busy periods or after-hours calls?",
    a: "Yes. Coverage can be scoped for agreed overflow periods, evenings, overnight or weekends. Routing depends on your telephone provider and configuration, and is reviewed before coverage starts.",
  },
  {
    q: "Can agents take reservations?",
    a: "Where supported system access and booking authority are provided, agents can complete the agreed actions. Without that access, we agree an inquiry-capture and handover process rather than promise an immediate booking confirmation.",
  },
  {
    q: "What happens if a call needs to be transferred and nobody answers?",
    a: "The agreed escalation plan defines the next contact or message route. We document the caller's request and status for follow-up.",
  },
  {
    q: "How are urgent guest situations handled?",
    a: "We follow your approved procedures and contact routes. Situations needing physical attendance or management decisions stay with your local responders or team.",
  },
  {
    q: "How does this differ from reservation support?",
    a: "A hotel answering service covers incoming calls, general inquiries, routing and agreed phone tasks. Hotel reservation support focuses on booking inquiries and approved reservation actions.",
  },
  {
    q: "Can you also handle guest messages and OTA inboxes?",
    a: "Yes. Guest messaging and OTA inbox support are included in the US$149 starting configuration, within the agreed channels and workload allowance.",
  },
  {
    q: "Which countries and time zones do you cover?",
    a: "We cover hotels in the US, UK, Canada, Ireland, Australia and New Zealand. Our team works remotely, and coverage hours are scheduled around your time zone.",
  },
];

const WORKFLOWS = [
  {
    label: "Front-desk overflow",
    trigger: "Reception is busy or the line goes unanswered.",
    does: "Answers with your hotel greeting, handles the call from the property brief and takes a permitted action or routes the call per your instructions.",
    boundary: "A decision is needed from reception. The call is transferred, or a message is recorded with full context.",
  },
  {
    label: "Room and stay inquiries",
    trigger: "Caller asks about room types, rates, amenities, check-in times, parking or facilities.",
    does: "Answers from the approved rate and property information. Quotes what is confirmed in the brief. Does not make exceptions or offer unapproved discounts.",
    boundary: "The question is outside the brief. It goes to the front desk contact with the caller's details.",
  },
  {
    label: "Late-arrival assistance",
    trigger: "Guest calls to confirm or report a late arrival.",
    does: "Confirms the reservation, explains the agreed check-in procedure and logs the expected arrival time for the morning team.",
    boundary: "No on-site contact is reachable. The message is held and flagged clearly in the handover.",
  },
  {
    label: "Housekeeping request coordination",
    trigger: "An in-stay guest asks for extra towels, a room clean or additional items.",
    does: "Logs the request, contacts housekeeping by the agreed method and confirms next steps to the guest.",
    boundary: "Housekeeping does not acknowledge. It goes to the duty manager per your procedures.",
  },
  {
    label: "Hotel maintenance escalation",
    trigger: "Guest reports broken AC, plumbing, lighting or a door issue.",
    does: "Logs the issue in full, contacts the designated maintenance contact and tells the guest the expected response.",
    boundary: "There is a safety or urgent concern. It is escalated at once per your emergency procedures.",
  },
  {
    label: "Reception shift handovers",
    trigger: "End of the agreed coverage window.",
    does: "Compiles a full interaction log — calls handled, messages taken, open items, escalations — and delivers it to the incoming front desk shift.",
    boundary: "No handover recipient is available. The message is held and flagged for the next contact.",
  },
];

const SITUATIONS = [
  {
    heading: "Check-in queues and desk coverage gaps",
    body: "When your team is with guests at the desk, the phone rings unanswered. Calls that go to voicemail during check-in peaks are reservations and revenue that rarely come back.",
    link: { label: "How front desk overflow routing works", href: "/resources/hotel-front-desk-overflow-support" },
  },
  {
    heading: "After-hours and overnight calls",
    body: "Most hotels cannot staff a desk around the clock, but guests still call after close with late arrivals, early check-outs and overnight questions.",
    link: null,
  },
  {
    heading: "Staff absences and short-staffed shifts",
    body: "When a team member is out and the desk runs short, Guest Squad covers the gap without recruitment or extra headcount.",
    link: null,
  },
  {
    heading: "Direct booking calls from your website or Google profile",
    body: "An unanswered booking enquiry can become a lost direct reservation. When a trained person answers, more bookings stay off commission.",
    link: { label: "Estimate what missed calls cost you", href: "/resources/missed-booking-calculator" },
  },
];

const CAPABILITY_TABLE = [
  { cap: "Who answers the call", how: "A trained person, in your hotel's name" },
  { cap: "Property knowledge", how: "Your brief, approved rates, policies and contacts, agreed before coverage begins" },
  { cap: "Complex or upset callers", how: "A person handles the call and escalates by your rules" },
  { cap: "Booking actions", how: "Only those you authorise, in systems you grant access to" },
  { cap: "Messages and OTA inboxes", how: "Included in the starting configuration, within agreed channels and workload" },
  { cap: "Pricing basis", how: "From US$149/month for one hotel, after hours or overflow; 24/7 quoted" },
];

export default function HotelAnsweringServicePage() {
  return (
    <>
      <ServicePageViewTracker serviceName={d.slug} />
      <JsonLd
        data={[
          serviceSchema({
            name: d.eyebrow,
            description: d.description,
            path: PATH,
            serviceOutput: d.schemaServiceOutput,
            audienceTypes: d.schemaAudienceTypes,
            subjectOf: d.schemaSubjectOf,
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            "url": `${SITE.url}${PATH}`,
            "name": "Hotel Answering Service",
            "description": d.description,
            "inLanguage": "en",
            "isPartOf": { "@id": `${SITE.url}/#website` },
            "mainEntity": { "@id": `${SITE.url}${PATH}#service` },
            ...(d.schemaMentions && d.schemaMentions.length > 0 && {
              "mentions": d.schemaMentions,
            }),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Hotel Answering Service", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Hotel Answering Service", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Live Hotel Phone Coverage
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Hotel Answering Service
            </h1>
            <p className="mt-5 max-w-lg text-base font-medium leading-snug text-ink">
              Guest Support Operations: your calls answered live, after hours, on overflow or 24/7, in your hotel&apos;s name, by people trained on your property.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
              Hospitality-trained people answer your guest and booking calls using your approved property information, and pass anything that needs your team to the right contact. Coverage runs on your existing number. After-hours and overflow coverage for one hotel starts from US$149/month, subject to scope confirmation. 24/7 coverage is quoted to your property.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For independent hotels, boutique properties, B&amp;Bs, inns, lodges and serviced apartments.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="hotel_answering_hero">
                Book a Coverage Review
              </CoverageReviewButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
            <Image
              src={d.image.src}
              alt={d.image.alt}
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <Section surface>
        <SectionHeading
          eyebrow="When You Need This"
          title="The calls your front desk can't always answer."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SITUATIONS.map((s) => (
            <div key={s.heading} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              {s.link && (
                <Link href={s.link.href} className="mt-3 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold">
                  {s.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* HOTEL CALL CENTER */}
      <Section id="hotel-call-center">
        <SectionHeading
          eyebrow="How It Works"
          title="A hotel call center that answers in your hotel's name."
          description="Our hotel call-answering team learns your room types, policies, approved rates and escalation contacts before coverage begins. Agents answer in your hotel's name and complete only the actions you authorise."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "A property brief", body: "Covering rooms, rates, policies, arrival steps and your tone of voice." },
            { label: "PMS permissions", body: "That you set, so agents only do what you approve." },
            { label: "Escalation rules", body: "That name who gets the call, text or email, and when." },
            { label: "Activity reports", body: "With call volume, outcomes and escalations." },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORKFLOWS */}
      <Section surface>
        <SectionHeading
          eyebrow="Phone Workflows"
          title="Six phone workflows, each with a clear escalation point."
          description="Each workflow has a defined trigger, a clear set of actions and an agreed boundary."
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

      {/* MESSAGING & OTA */}
      <Section id="messaging-ota">
        <SectionHeading
          eyebrow="Also Included"
          title="Guest messaging and OTA inboxes, included in the starting price."
          description="The US$149 starting configuration also includes guest messaging and OTA inbox support, scoped to your property's systems, agreed channels and an agreed workload allowance."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              label: "Hotel reservation support",
              body: "Availability, approved rates and booking actions within your agreed permissions.",
              href: "/services/reservation-support",
            },
            {
              label: "OTA inbox management",
              body: "Guest threads on Booking.com, Expedia and other supported channels: inquiries, pre-arrival questions and booking follow-up.",
              href: "/services/ota-inbox-management",
            },
            {
              label: "Hotel guest messaging",
              body: "Arrival information, in-stay questions and guest requests through your agreed channels.",
              href: "/services/guest-messaging",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-6">
              <Link href={item.href} className="text-sm font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                {item.label}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          Phone forwarding and inbox monitoring work differently. Calls reach us through forwarding on your phone line. Inboxes are handled through the access you grant us. We agree both during onboarding.
        </p>
      </Section>

      {/* COVERAGE OPTIONS */}
      <Section surface id="coverage-options">
        <SectionHeading
          eyebrow="Coverage Options"
          title="Overflow, after hours or 24/7."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "After hours",
              body: "Calls forward to Guest Squad outside your front-desk hours. Your daytime team is unaffected.",
              href: "/services/after-hours-support",
              linkLabel: "After-hours hotel front desk support",
            },
            {
              label: "Overflow",
              body: "Your desk answers first. Unanswered or busy-line calls route to Guest Squad automatically.",
              href: null,
              linkLabel: null,
            },
            {
              label: "24/7 coverage",
              body: "Full coverage across all hours, including weekends, public holidays and peak periods. Quoted to your property.",
              href: null,
              linkLabel: null,
            },
          ].map((opt) => (
            <div key={opt.label} className="rounded-lg border border-line bg-paper px-5 py-5">
              <p className="text-sm font-semibold text-ink">{opt.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{opt.body}</p>
              {opt.href && (
                <Link href={opt.href} className="mt-3 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold">
                  {opt.linkLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          Running several hotels?{" "}
          <Link href="/services/central-reservations" className="text-gold-dark underline underline-offset-2 hover:text-gold">See our hotel reservation call center</Link>.{" "}
          Managing rentals?{" "}
          <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">See our vacation rental answering service</Link>.
        </p>
      </Section>

      {/* PRICE */}
      <Section id="price">
        <SectionHeading
          eyebrow="Pricing"
          title="Hotel answering service from US$149 a month."
          description="The US$149/month starting price is for one hotel with after-hours or overflow coverage, subject to scope confirmation. It includes live phone answering during agreed hours, reservation inquiries, late-arrival and access assistance, guest-request routing, guest messaging and OTA inbox support, escalation, call logging, handover notes and an activity summary."
        />
        <div className="mt-8 rounded-lg border border-line bg-paper p-6">
          <p className="text-sm font-medium text-ink mb-3">Your final fee is set in the scoped proposal. It depends on:</p>
          <ul className="flex flex-col gap-2">
            {[
              "Coverage hours (24/7 is quoted), number of properties and call volume",
              "The workload allowance, booking actions in your PMS and channels covered",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            Work outside the agreed allowance is charged at the rate in your proposal. Month-to-month, 30 days&apos; notice, no setup fee.{" "}
            <Link href="/pricing" className="text-gold-dark underline underline-offset-2 hover:text-gold">See guest support pricing</Link>{" "}
            or our breakdown of{" "}
            <Link href="/resources/hotel-answering-service-cost" className="text-gold-dark underline underline-offset-2 hover:text-gold">hotel answering service cost</Link>.
          </p>
        </div>
        <div className="mt-5">
          <CoverageReviewButton variant="gold" ctaLocation="hotel_price_cta">
            Get a Quote for Your Hotel
          </CoverageReviewButton>
        </div>
      </Section>

      {/* CAPABILITY COMPARISON */}
      <Section surface id="capabilities-to-check">
        <SectionHeading
          eyebrow="Capabilities to Check"
          title="Before you choose a provider."
          description="Whether you are weighing a human team, an AI voice agent or a larger call center, ask each provider the same questions. Here are ours."
        />
        <div className="mt-8 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">Capability to verify</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">How Guest Squad handles it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-paper">
              {CAPABILITY_TABLE.map((row) => (
                <tr key={row.cap}>
                  <td className="px-5 py-4 font-medium text-ink align-top">{row.cap}</td>
                  <td className="px-5 py-4 text-ink-soft">{row.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Read about{" "}
          <Link href="/resources/hotel-answering-service-vs-ai-voice" className="text-gold-dark underline underline-offset-2 hover:text-gold">AI hotel answering service</Link>{" "}
          options, or our guide to{" "}
          <Link href="/resources/hotel-answering-service-vs-call-center" className="text-gold-dark underline underline-offset-2 hover:text-gold">answering service vs call center</Link>.
        </p>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="From your existing phone line to a live answered call."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Property brief",
              body: "We document your room information, rates, policies, arrival instructions, preferred tone and your designated contacts for exceptions and escalation.",
            },
            {
              step: "02",
              title: "System access and permissions",
              body: "Where booking actions are included, we review PMS access and confirm what agents are permitted to complete. Rate exceptions and discretionary decisions stay with your team.",
            },
            {
              step: "03",
              title: "Routing and go-live",
              body: "We test forwarding, greeting, transfers and escalation paths. Coverage starts once your brief, system access and escalation contacts are agreed.",
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
          <p className="mt-3 text-xs text-ink-muted">System access and permitted actions are agreed during onboarding. Rate changes and payment processing stay with your team.</p>
        </div>
        <div className="mt-4 rounded-lg border border-line bg-surface px-6 py-4">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">On-site responsibility stays with your team.</span>{" "}
            Urgent safety or security concerns follow your property&apos;s approved emergency procedures. Remote call coverage does not replace emergency services or required on-site action.
          </p>
        </div>
      </Section>

      {/* REPORTING */}
      <Section surface>
        <SectionHeading
          eyebrow="Reporting"
          title="Calls logged. Your team briefed before the next shift."
        />
        <div className="mt-8 max-w-2xl">
          <p className="text-sm leading-relaxed text-ink-soft">
            Each call is answered from your brief, then logged with its purpose, action taken, escalation contact notified and next steps. Shift notes reach your incoming front desk at the agreed time, and call volume, outcomes and escalations are shared in your agreed activity reports.
          </p>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialsBlock />

      {/* MID-PAGE CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Ready to close your coverage gap?</p>
            <p className="mt-1 text-sm text-paper/60">Tell us about your property and we&apos;ll confirm scope and price in writing.</p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="hotel_answering_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* FAQ */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Hotel answering service questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          {/* Sticky card */}
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Discuss the calls your hotel needs covered
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              The coverage review covers your front-desk hours, your telephone setup, a rough weekly call count, the PMS and inboxes involved, and the actions you want agents to take.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="hotel_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">Guides</p>
              <div className="flex flex-col divide-y divide-line">
                {[
                  { label: "Answering service cost", detail: "What coverage costs and what drives the price.", href: "/resources/hotel-answering-service-cost" },
                  { label: "Human vs AI answering", detail: "Where each one fits.", href: "/resources/hotel-answering-service-vs-ai-voice" },
                  { label: "Hotel missed call revenue calculator", detail: "Estimate what unanswered calls cost you.", href: "/resources/missed-booking-calculator" },
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
                <Link href="/services/after-hours-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">After-hours hotel front desk support</Link>
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
        title="Discuss the calls your hotel needs covered."
        description="Book a coverage review and we'll confirm your scope and price in writing."
      />
    </>
  );
}
