import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Check, ArrowRight, Phone, MessageSquare, Inbox, Users } from "lucide-react";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { Section, SectionHeading } from "@/components/site/section";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { SITE } from "@/lib/site-data";

const MissedBookingCalculator = dynamic(
  () => import("@/components/site/missed-booking-calculator").then((m) => m.MissedBookingCalculator),
  { ssr: false, loading: () => <div className="h-48 rounded-lg border border-line bg-surface animate-pulse" /> }
);

const PilotForm = dynamic(
  () => import("@/components/site/pilot-form").then((m) => m.PilotForm),
  { ssr: false, loading: () => <div className="h-96 rounded-lg border border-line bg-surface animate-pulse" /> }
);

export const metadata: Metadata = buildMetadata({
  title: "2-Week Guest Coverage Pilot for Hotels",
  description:
    "Start with a 2-week pilot before monthly coverage. Guest Squad reviews your call gaps, OTA inboxes, and after-hours needs and recommends a plan that fits.",
  path: "/pilot",
});

const REASSURANCE_POINTS = [
  "Built for independent hotels, inns, serviced apartments, and short-term rental operators",
  "Supports calls, texts, OTA inboxes, and approved guest messaging tools",
  "Property-specific briefing completed before any coverage begins",
  "Month-to-month coverage — no long-term contract",
  "Reporting included where agreed in the pilot scope",
];

const PAIN_CARDS = [
  {
    icon: Phone,
    title: "Missed reservation calls",
    body: "High-intent callers move on within minutes when no one answers.",
  },
  {
    icon: Inbox,
    title: "Slow OTA inbox responses",
    body: "Booking.com and Expedia surface faster-responding properties ahead of yours.",
  },
  {
    icon: MessageSquare,
    title: "Guest texts after hours",
    body: "Check-in questions and access issues that arrive at 11pm wait until morning.",
  },
  {
    icon: Users,
    title: "Front desk overflow",
    body: "Calls pile up during check-in peaks while your team is with in-house guests.",
  },
];

const OPERATOR_CONCERNS = [
  {
    heading: "Guests need fast human responses",
    body: "A delayed answer on a reservation call or OTA message is often a lost booking. Speed and accuracy matter more than the channel.",
  },
  {
    heading: "Operators need clear escalation rules",
    body: "Coverage only works when the handling team knows exactly what to resolve and what to escalate immediately to the property.",
  },
  {
    heading: "Owners need visibility into what was handled",
    body: "Reporting on call volume, message types, and escalations tells ownership whether coverage is actually working — before they renew.",
  },
  {
    heading: "Teams need coverage without hiring another shift",
    body: "The goal is to close coverage gaps without adding headcount. That means a service that plugs in around the existing team.",
  },
];

const COVERAGE_ITEMS = [
  { label: "Reservation calls", note: "Inbound booking inquiries, quotes, and availability" },
  { label: "Guest texts / SMS", note: "Pre-arrival, in-stay, and check-out messages" },
  { label: "OTA inboxes", note: "Booking.com, Expedia, Airbnb message threads" },
  { label: "WhatsApp & email", note: "Approved guest communication channels" },
  { label: "Cloudbeds / channel manager", note: "Messages routed via your PMS or channel tools" },
  { label: "Akia & guest messaging tools", note: "Supported platforms included in agreed scope" },
  { label: "After-hours support", note: "Overnight and weekend coverage gaps" },
  { label: "Escalation handling", note: "Documented rules agreed before go-live" },
];

const PILOT_STEPS = [
  {
    n: "01",
    title: "Qualification call",
    body: "A short call to review your property, channels, gaps, and whether a 2-week pilot is a realistic fit.",
  },
  {
    n: "02",
    title: "Property briefing",
    body: "We document rates, policies, escalation contacts, guest tone, and channel access. Nothing goes live without your approval.",
  },
  {
    n: "03",
    title: "Pilot coverage",
    body: "Guest Squad handles agreed channels for 2 weeks. Weekly report shows volume, handling, and escalations.",
  },
  {
    n: "04",
    title: "Review and decide",
    body: "You decide whether to continue month-to-month. No long-term commitment, no pressure.",
  },
];

const FAQS = [
  {
    q: "Who qualifies for a 2-week pilot?",
    a: "Independent hotels, boutique hotels, inns, serviced apartments, aparthotels, resorts, and short-term rental operators with guest communication gaps across calls, texts, OTA inboxes, after-hours support, or front desk overflow may qualify. Qualification is confirmed during a short call before the pilot begins.",
  },
  {
    q: "Is the pilot no-obligation?",
    a: "Yes. The 2-week pilot carries no commitment to continue. After the pilot, you decide whether to move to month-to-month coverage. There is no long-term contract — ongoing coverage runs 30 days' written notice unless otherwise agreed.",
  },
  {
    q: "What happens after the pilot?",
    a: "At the end of the 2-week pilot you receive a report covering calls handled, messages, escalations, and patterns across your agreed channels. You then decide whether to continue month-to-month. Most properties extend coverage; some adjust scope first. Either way, there is no obligation to continue.",
  },
  {
    q: "Which channels can Guest Squad cover?",
    a: "Guest Squad can support reservation calls, guest texts, OTA inboxes (Booking.com, Expedia, Airbnb), email, WhatsApp/SMS, Cloudbeds or channel manager messages, Akia, and other approved guest communication tools. Final channels are agreed before the pilot begins.",
  },
  {
    q: "Do we need to change our PMS or phone system?",
    a: "No. Guest Squad works with your existing setup. The property briefing documents your current systems — rates, room types, escalation contacts, channel access — and coverage begins without requiring changes to your PMS, phone system, or booking engine.",
  },
];

const SAMPLE_REPORT_ROWS = [
  { date: "Mon", channel: "Phone", type: "Reservation enquiry", outcome: "Handled", note: "Rate and availability confirmed" },
  { date: "Mon", channel: "Booking.com", type: "Pre-booking question", outcome: "Handled", note: "Check-in time and parking confirmed" },
  { date: "Tue", channel: "SMS", type: "After-hours access", outcome: "Handled", note: "Key code provided per property brief" },
  { date: "Tue", channel: "Phone", type: "Complaint — noise", outcome: "Escalated", note: "Forwarded to on-call contact per rules" },
  { date: "Wed", channel: "Expedia", type: "Rate dispute", outcome: "Escalated", note: "Outside approved handling scope" },
  { date: "Wed", channel: "Phone", type: "Reservation enquiry", outcome: "Handled", note: "Booking confirmed" },
  { date: "Thu", channel: "WhatsApp", type: "Pre-arrival question", outcome: "Handled", note: "Directions and check-in instructions sent" },
  { date: "Thu", channel: "Airbnb", type: "Guest review concern", outcome: "Escalated", note: "Owner decision required" },
];

export default function PilotPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "2-Week Pilot", path: "/pilot" },
          ]),
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}/pilot#webpage`,
            url: `${SITE.url}/pilot`,
            name: "2-Week Guest Coverage Pilot for Hotels | Guest Squad",
            description:
              "See if your property qualifies for a 2-week Guest Squad pilot covering reservation calls, guest texts, OTA inboxes, and after-hours guest communication.",
            isPartOf: { "@type": "WebSite", "@id": `${SITE.url}/#website` },
            about: { "@type": "ProfessionalService", "@id": `${SITE.url}/#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}/pilot#service`,
            name: "2-Week Guest Coverage Pilot",
            serviceType: "Hotel Guest Operations Pilot",
            description:
              "A no-obligation 2-week pilot covering reservation calls, guest texts, OTA inboxes, and after-hours support for independent hotels and short-term rental operators. Scope agreed before coverage begins.",
            url: `${SITE.url}/pilot`,
            provider: {
              "@type": "ProfessionalService",
              "@id": `${SITE.url}/#organization`,
              name: SITE.brand,
              url: SITE.url,
            },
            areaServed: "Worldwide",
            audience: {
              "@type": "Audience",
              audienceType: "Independent hotels, boutique properties, serviced apartments, and short-term rental operators",
            },
            offers: {
              "@type": "Offer",
              name: "2-Week No-Obligation Pilot",
              description: "2-week pilot review with no long-term contract required. Month-to-month coverage available after the pilot.",
              url: `${SITE.url}/pilot`,
              availability: "https://schema.org/InStock",
              areaServed: "Worldwide",
              seller: { "@type": "Organization", "@id": `${SITE.url}/#organization` },
            },
          },
        ]}
      />

      {/* ── HERO ── */}
      <section className="border-b border-line bg-paper py-14 md:py-20">
        <div className="container max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            2-Week No-Obligation Pilot
          </p>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
            Cover Your Guest Communication Gaps Without Adding Another Front Desk Shift
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Guest Squad handles reservation calls, guest texts, OTA inboxes, and after-hours coverage for independent hotels and property operators. We&rsquo;ll review your property, channels, and coverage gaps to determine whether a 2-week no-obligation pilot is the right starting point.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center rounded-lg bg-gold-dark px-7 py-3.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-gold"
            >
              Request Pilot Review
            </a>
            <a href="#calculator" className="text-sm font-medium text-ink-soft underline underline-offset-2 hover:text-ink">
              Estimate Missed Booking Risk
            </a>
          </div>
        </div>
      </section>

      {/* ── REASSURANCE BLOCK ── */}
      <div className="border-b border-line bg-surface">
        <div className="container py-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {REASSURANCE_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-dark" />
                <span className="text-xs leading-relaxed text-ink-soft">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAIN ── */}
      <Section compact>
        <SectionHeading
          eyebrow="Where Revenue Leaks"
          title="Guest communication gaps cost more than they look."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_CARDS.map((card) => (
            <div key={card.title} className="rounded-lg border border-line bg-paper p-5">
              <card.icon className="h-5 w-5 text-gold-dark" />
              <h3 className="mt-3 text-sm font-medium text-ink">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CALCULATOR ── */}
      <Section surface compact id="calculator">
        <SectionHeading
          eyebrow="Revenue Calculator"
          title="Estimate your missed booking risk."
        />
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
          Adjust the sliders to your property volume. For many properties, one or two recovered bookings can offset a meaningful portion of guest coverage costs.
        </p>
        <div className="mt-8">
          <MissedBookingCalculator compact />
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a href="#qualify" className="inline-flex items-center gap-1.5 rounded-lg bg-gold-dark px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-gold">
            Review My Coverage Gap <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Section>

      {/* ── COVERAGE SCOPE ── */}
      <Section surface compact>
        <SectionHeading
          eyebrow="Coverage Scope"
          title="What the pilot can include."
        />
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
          Scope is agreed during qualification. Final channels depend on your property setup and what is agreed before go-live.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {COVERAGE_ITEMS.map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper px-4 py-3.5">
              <p className="text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SAMPLE REPORT PREVIEW ── */}
      <Section compact>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Reporting</p>
            <h2 className="text-2xl font-medium leading-tight text-ink md:text-3xl">
              Visibility into everything handled and escalated.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Every pilot includes a weekly report covering what was handled, what was escalated, and what patterns emerged across your agreed channels. Ownership gets a clear picture without chasing the team.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/downloads/sample-weekly-report.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-gold-dark px-5 py-2.5 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold-dark hover:text-paper"
              >
                Download Sample Report
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <p className="text-xs font-medium text-ink-soft">
                Want this level of visibility during a pilot?
              </p>
              <a
                href="#qualify"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-gold"
              >
                Request Pilot Review <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Sample report table */}
          <div className="rounded-xl border border-line bg-surface p-1 overflow-hidden">
            <div className="rounded-lg border border-line bg-paper overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <p className="text-xs font-semibold text-ink">Sample reporting view</p>
                <span className="rounded bg-gold/10 px-2 py-0.5 text-[10px] font-medium text-gold-dark">Example only</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-xs">
                  <thead>
                    <tr className="border-b border-line bg-surface">
                      <th className="px-3 py-2.5 text-left font-semibold uppercase tracking-wide text-ink-muted">Day</th>
                      <th className="px-3 py-2.5 text-left font-semibold uppercase tracking-wide text-ink-muted">Channel</th>
                      <th className="px-3 py-2.5 text-left font-semibold uppercase tracking-wide text-ink-muted">Type</th>
                      <th className="px-3 py-2.5 text-left font-semibold uppercase tracking-wide text-ink-muted">Outcome</th>
                      <th className="px-3 py-2.5 text-left font-semibold uppercase tracking-wide text-ink-muted">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_REPORT_ROWS.map((row, i) => (
                      <tr key={i} className={`border-b border-line last:border-0 ${row.outcome === "Escalated" ? "bg-amber-50/50 dark:bg-amber-950/10" : ""}`}>
                        <td className="px-3 py-2.5 text-ink-muted">{row.date}</td>
                        <td className="px-3 py-2.5 font-medium text-ink">{row.channel}</td>
                        <td className="px-3 py-2.5 text-ink-soft">{row.type}</td>
                        <td className="px-3 py-2.5">
                          <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                            row.outcome === "Handled"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                          }`}>
                            {row.outcome}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-ink-muted">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-line px-4 py-2.5 text-[10px] leading-relaxed text-ink-muted">
                Example only. Final reports depend on agreed channels and property workflow.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section surface compact>
        <SectionHeading
          eyebrow="How It Works"
          title="From submission to live coverage in four steps."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILOT_STEPS.map((item) => (
            <div key={item.n} className="rounded-lg border border-line bg-paper p-5">
              <span className="text-xl font-medium text-gold-dark">{item.n}</span>
              <h3 className="mt-3 text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Month-to-month coverage after the pilot — no long-term contract. Scope agreed before any guest handling begins.
        </p>
      </Section>

      {/* ── WHAT OPERATORS CARE ABOUT ── */}
      <Section compact>
        <SectionHeading
          eyebrow="What We Hear"
          title="Built to protect guest experience, not just answer messages."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {OPERATOR_CONCERNS.map((item) => (
            <div key={item.heading} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SOCIAL PROOF ── */}
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

      {/* ── QUALIFICATION FORM ── */}
      <Section id="qualify">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Request Pilot Review</p>
            <h2 className="text-2xl font-medium leading-tight text-ink md:text-3xl">
              Tell us about your property.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Share a few property details and we&rsquo;ll review whether a 2-week no-obligation pilot is the right starting point.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Reviewed within one business day.",
                "No commitment required to submit.",
                "Pilot scope and terms agreed before anything starts.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  <span className="text-sm leading-relaxed text-ink-soft">{line}</span>
                </li>
              ))}
            </ul>

            {/* Mini report preview */}
            <div className="mt-8 overflow-hidden rounded-xl border border-line bg-surface p-1">
              <div className="rounded-lg border border-line bg-paper overflow-hidden">
                <div className="flex items-center justify-between border-b border-line px-3 py-2">
                  <p className="text-[11px] font-semibold text-ink">Weekly pilot report</p>
                  <span className="rounded bg-gold/10 px-1.5 py-0.5 text-[9px] font-medium text-gold-dark">Example</span>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-line bg-surface">
                      <th className="px-2.5 py-1.5 text-left font-semibold text-ink-muted">Channel</th>
                      <th className="px-2.5 py-1.5 text-left font-semibold text-ink-muted">Type</th>
                      <th className="px-2.5 py-1.5 text-left font-semibold text-ink-muted">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { channel: "Phone", type: "Reservation enquiry", outcome: "Handled" },
                      { channel: "Booking.com", type: "Pre-arrival question", outcome: "Handled" },
                      { channel: "SMS", type: "After-hours access", outcome: "Handled" },
                      { channel: "Phone", type: "Noise complaint", outcome: "Escalated" },
                      { channel: "WhatsApp", type: "Check-in directions", outcome: "Handled" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-line last:border-0">
                        <td className="px-2.5 py-1.5 font-medium text-ink">{row.channel}</td>
                        <td className="px-2.5 py-1.5 text-ink-soft">{row.type}</td>
                        <td className="px-2.5 py-1.5">
                          <span className={`inline-block rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                            row.outcome === "Handled"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                          }`}>{row.outcome}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="border-t border-line px-3 py-2 text-[9px] text-ink-muted">
                  You receive a report like this every week during the pilot.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-paper p-7 md:p-8">
            <PilotForm />
          </div>
        </div>
      </Section>

      {/* ── TALK TO ADVISOR ── */}
      <section className="border-y border-line bg-gold/5 py-10">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Talk to an Advisor</p>
            <h2 className="mt-2 text-xl font-medium leading-snug text-ink md:text-2xl">
              Prefer to talk first?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Book a 30-minute coverage review and we&rsquo;ll walk through your guest communication gaps, channels, and pilot fit.
            </p>
          </div>
          <div className="shrink-0">
            <CalendlyPopupButton variant="gold" size="lg" ctaLocation="pilot_talk_to_advisor">
              Book a Coverage Review
            </CalendlyPopupButton>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <Section surface compact>
        <SectionHeading
          eyebrow="Questions"
          title="Common questions about the pilot."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-5">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <section className="bg-ink py-14 md:py-18">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-medium leading-tight text-paper md:text-[2rem] lg:text-4xl whitespace-nowrap">
            Ready to review your guest coverage gap?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-paper/60">
            Submit your property details or book a coverage review. We&rsquo;ll help determine whether a 2-week no-obligation pilot is the right starting point.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center rounded-lg bg-gold-dark px-7 py-3.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-gold"
            >
              Request Pilot Review
            </a>
            <CalendlyPopupButton
              variant="outline"
              size="lg"
              className="border-paper/25 text-paper hover:border-paper/50"
              ctaLocation="pilot_final_cta"
            >
              Book a Coverage Review
            </CalendlyPopupButton>
          </div>
        </div>
      </section>
    </>
  );
}
