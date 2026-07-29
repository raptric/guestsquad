import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone, MessageSquare, Inbox, Users } from "lucide-react";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { Section, SectionHeading } from "@/components/site/section";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { MissedBookingCalculator } from "@/components/site/missed-booking-calculator";
import { PilotForm } from "@/components/site/pilot-form";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "2-Week Guest Coverage Pilot for Hotels",
  description:
    "See if your property qualifies for a 2-week GuestSquad pilot. Cover reservation calls, guest texts, OTA inboxes, and after-hours guest communication without another front desk shift.",
  path: "/pilot",
});

const REASSURANCE_POINTS = [
  "Built for independent hotels, inns, serviced apartments, and short-term rental operators",
  "Supports calls, texts, OTA inboxes, and approved guest messaging tools",
  "Property-specific briefing completed before any coverage begins",
  "Month-to-month after the pilot — no long-term contract",
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
    body: "GuestSquad handles agreed channels for 2 weeks. Weekly report shows volume, handling, and escalations.",
  },
  {
    n: "04",
    title: "Review and decide",
    body: "You decide whether to continue month-to-month. No long-term commitment, no pressure.",
  },
];

const FAQS = [
  {
    q: "What is included in the 2-week pilot?",
    a: "The pilot is designed to validate fit, channel coverage, escalation rules, and guest communication workflows before ongoing month-to-month coverage begins. Pilot terms are confirmed during qualification.",
  },
  {
    q: "What properties qualify for a pilot?",
    a: "Independent hotels, boutique hotels, inns, serviced apartments, aparthotels, resorts, and short-term rental operators with guest communication gaps across calls, texts, OTA inboxes, after-hours support, or front desk overflow may qualify.",
  },
  {
    q: "What channels can GuestSquad cover?",
    a: "GuestSquad can support reservation calls, guest texts, OTA inboxes, email, WhatsApp/SMS, Cloudbeds or channel manager messages, Akia, and other approved guest communication tools depending on the agreed scope.",
  },
  {
    q: "Do we need to sign a long-term contract?",
    a: "No. After the pilot, ongoing coverage is month-to-month with 30 days' written notice unless otherwise agreed.",
  },
  {
    q: "How quickly can coverage start?",
    a: "Timing depends on scope, access, and property briefing. GuestSquad reviews your property details, escalation rules, guest FAQs, and channel access before coverage begins.",
  },
  {
    q: "Will guests know they are speaking with GuestSquad?",
    a: "GuestSquad follows the approved property tone, workflows, and escalation rules. The goal is to support the guest experience as an extension of the property's team.",
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
            name: "2-Week Guest Coverage Pilot for Hotels | GuestSquad",
            description:
              "See if your property qualifies for a 2-week GuestSquad pilot covering reservation calls, guest texts, OTA inboxes, and after-hours guest communication.",
            isPartOf: { "@type": "WebSite", "@id": `${SITE.url}/#website` },
            about: { "@type": "ProfessionalService", "@id": `${SITE.url}/#organization` },
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
            GuestSquad handles reservation calls, guest texts, OTA inboxes, and after-hours coverage for independent hotels and property operators. Qualified properties can start with a 2-week no-obligation pilot before moving into month-to-month coverage.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center rounded-lg bg-gold-dark px-7 py-3.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-gold"
            >
              See If You Qualify
            </a>
            <a href="#calculator" className="text-sm font-medium text-ink-soft underline underline-offset-2 hover:text-ink">
              Estimate your revenue impact first
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
          Adjust the sliders to your property volume. Most properties find coverage pays for itself with one or two recovered bookings per month.
        </p>
        <div className="mt-8">
          <MissedBookingCalculator compact />
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a href="#qualify" className="inline-flex items-center gap-1.5 rounded-lg bg-gold-dark px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-gold">
            Stop Losing Revenue — See If You Qualify <ArrowRight className="h-3.5 w-3.5" />
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
            <div className="mt-6">
              <a
                href="/downloads/sample-weekly-report.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-gold-dark px-5 py-2.5 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold-dark hover:text-paper"
              >
                Download Sample Weekly Report
                <ArrowRight className="h-3.5 w-3.5" />
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
          No long-term contract. Month-to-month if continued. Scope agreed before any guest handling begins.
        </p>
      </Section>

      {/* ── BOOK A CALL CTA ── */}
      <section className="border-y border-line bg-gold/5 py-10">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Talk to an Advisor</p>
            <h2 className="mt-2 text-xl font-medium leading-snug text-ink md:text-2xl">
              Not sure if a pilot is the right fit for your property?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Book a 30-minute coverage review and speak directly with an advisor. We&rsquo;ll ask the right questions about your property, channels, and gaps — and tell you honestly whether GuestSquad is the right match.
            </p>
          </div>
          <div className="shrink-0">
            <CalendlyPopupButton variant="gold" size="lg">
              Book a Coverage Review
            </CalendlyPopupButton>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATION FORM ── */}
      <Section id="qualify">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Check Pilot Fit</p>
            <h2 className="text-2xl font-medium leading-tight text-ink md:text-3xl">
              Tell us about your property.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Fill in your property details and we&rsquo;ll review whether a 2-week pilot is a realistic fit. We follow up within one business day.
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

      {/* ── WHAT OPERATORS CARE ABOUT ── */}
      <Section compact>
        <SectionHeading
          eyebrow="What We Hear"
          title="What operators tell us before they start."
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
          <h2 className="text-3xl font-medium leading-tight text-paper md:text-4xl">
            Find out if your property qualifies.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-paper/60">
            Submit your details or book a coverage review. We&rsquo;ll review your property and let you know whether a 2-week pilot is the right starting point.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center rounded-lg bg-gold-dark px-7 py-3.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-gold"
            >
              Submit for Pilot Review
            </a>
            <CalendlyPopupButton
              variant="outline"
              size="lg"
              className="border-paper/25 text-paper hover:border-paper/50"
            >
              Book a Coverage Review
            </CalendlyPopupButton>
          </div>
        </div>
      </section>
    </>
  );
}
