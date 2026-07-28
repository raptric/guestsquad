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

const TRUST_POINTS = [
  "Human guest support",
  "Calls, texts & OTA inboxes",
  "After-hours coverage",
  "Month-to-month after pilot",
  "Property-specific briefing",
];

const PAIN_CARDS = [
  {
    icon: Phone,
    title: "Missed reservation calls",
    body: "High-intent callers who found your property move on within minutes when no one answers.",
  },
  {
    icon: Inbox,
    title: "Slow OTA inbox responses",
    body: "Booking.com and Expedia surface faster-responding properties when your reply window slips.",
  },
  {
    icon: MessageSquare,
    title: "Guest texts after hours",
    body: "Check-in questions, access issues, and complaints that arrive at 11pm stay unanswered until morning.",
  },
  {
    icon: Users,
    title: "Front desk overflow",
    body: "Calls pile up during check-in peaks and busy periods while your team is occupied with in-house guests.",
  },
];

const COVERAGE_ITEMS = [
  { label: "Reservation calls", note: "Inbound booking inquiries, quotes, and availability" },
  { label: "Guest texts / SMS", note: "Pre-arrival, in-stay, and check-out messages" },
  { label: "OTA inboxes", note: "Booking.com, Expedia, Airbnb message threads" },
  { label: "WhatsApp & email", note: "Guest communication on your approved channels" },
  { label: "Cloudbeds / channel manager", note: "Messages routed via your PMS or channel tools" },
  { label: "Akia & guest messaging tools", note: "Supported platforms included in agreed scope" },
  { label: "After-hours support", note: "Overnight and weekend coverage gaps" },
  { label: "Escalation handling", note: "Documented rules agreed before go-live" },
];

const PILOT_STEPS = [
  {
    step: "01",
    title: "Qualification call",
    body: "A short call to review your property, channels, current gaps, and whether a 2-week pilot is a realistic fit.",
  },
  {
    step: "02",
    title: "Property briefing & channel setup",
    body: "We document your rates, policies, escalation contacts, guest tone, and channel access. Nothing goes live without your review.",
  },
  {
    step: "03",
    title: "Pilot coverage begins",
    body: "GuestSquad handles agreed channels for 2 weeks. You receive a weekly report showing volume, handling, and escalations.",
  },
  {
    step: "04",
    title: "Review & decide",
    body: "After the pilot, you decide whether to continue month-to-month. No long-term commitment and no pressure.",
  },
];

const FAQS = [
  {
    q: "Is this a free trial?",
    a: "No. We call it a 2-week no-obligation pilot because the goal is to validate fit, scope, channels, and workflows before moving into month-to-month coverage. Pilot terms are confirmed during qualification.",
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

const LEAD_MAGNETS = [
  {
    title: "Sample Weekly Report",
    description: "See exactly what GuestSquad reports each week: calls handled, messages sent, escalations, and recommendations.",
    cta: "View Sample Report",
    href: "/resources/sample-weekly-report",
    featured: true,
  },
  {
    title: "After-Hours Coverage Checklist",
    description: "Audit your overnight and weekend coverage gaps before agreeing pilot scope.",
    cta: "Download Checklist",
    href: "/resources/after-hours-hotel-support-checklist",
    featured: false,
  },
  {
    title: "Guest Messaging SOP Template",
    description: "The SOP framework GuestSquad uses during property briefing, adapted for your own team.",
    cta: "View Template",
    href: "/resources/hotel-guest-messaging-sop-template",
    featured: false,
  },
  {
    title: "OTA Inbox Response Checklist",
    description: "Standards for Booking.com, Expedia, and Airbnb inbox handling — useful before any pilot scope discussion.",
    cta: "View Checklist",
    href: "/resources/booking-com-message-support",
    featured: false,
  },
  {
    title: "Coverage Gap Assessment",
    description: "Identify which hours, channels, and escalation paths are unprotected at your property.",
    cta: "Download Assessment",
    href: "/resources/coverage-gap-assessment",
    featured: false,
  },
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
      <section className="border-b border-line bg-paper py-16 md:py-24">
        <div className="container max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            2-Week Pilot Programme
          </p>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Find Out If Your Property Qualifies for a 2-Week Guest Coverage Pilot
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            GuestSquad helps independent hotels cover reservation calls, guest texts, OTA inboxes, and after-hours guest communication without adding another front desk shift.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            For qualified properties, we can start with a 2-week no-obligation pilot before moving into month-to-month coverage.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center rounded-lg bg-gold-dark px-6 py-3 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-gold"
            >
              Check Pilot Fit
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold-dark/50"
            >
              Calculate Missed Booking Risk
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="border-b border-line bg-surface">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="flex items-center gap-2 text-xs font-medium text-ink-soft">
                <Check className="h-3.5 w-3.5 shrink-0 text-gold-dark" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAIN ── */}
      <Section>
        <SectionHeading
          eyebrow="The Problem"
          title="Guest communication gaps usually show up after the booking inquiry."
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Independent properties often lose revenue or damage the guest experience when calls, texts, OTA inboxes, and after-hours questions are not covered consistently. The volume is rarely catastrophic on any single day — the cost accumulates quietly.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_CARDS.map((card) => (
            <div key={card.title} className="rounded-lg border border-line bg-paper p-6">
              <card.icon className="h-5 w-5 text-gold-dark" />
              <h3 className="mt-4 text-sm font-medium text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CALCULATOR ── */}
      <Section surface id="calculator">
        <SectionHeading
          eyebrow="Missed Booking Risk"
          title="Estimate your missed booking risk."
        />
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Adjust the sliders to your property. The estimate shows why even a few missed calls or delayed responses can matter at scale.
        </p>
        <div className="mt-10">
          <MissedBookingCalculator compact />
        </div>
        <div className="mt-8">
          <a
            href="#qualify"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold"
          >
            Check if GuestSquad can cover this gap <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>

      {/* ── COVERAGE SCOPE ── */}
      <Section>
        <SectionHeading
          eyebrow="What a Pilot Can Include"
          title="What a guest coverage pilot can include."
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          During the pilot, we agree on the channels, escalation rules, and property-specific information before handling any guest communication. Final scope depends on qualification and your agreed channels.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COVERAGE_ITEMS.map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper px-5 py-4">
              <p className="text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── QUALIFICATION FORM ── */}
      <Section surface id="qualify">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading
              eyebrow="Check Pilot Fit"
              title="Tell us about your property."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Fill in the details below so we can review whether a 2-week pilot is a good fit for your property and guest communication setup.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "We review every submission within one business day.",
                "No commitment required to submit.",
                "We'll follow up with a short qualification call.",
                "Pilot scope and terms are agreed before anything starts.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  <p className="text-sm leading-relaxed text-ink-soft">{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-lg border border-line bg-paper p-6">
              <p className="text-sm font-medium text-ink">Prefer to book directly?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Skip the form and book a 30-minute coverage review. We&rsquo;ll walk through your property, gaps, and whether a pilot makes sense.
              </p>
              <div className="mt-5">
                <CalendlyPopupButton variant="outline" size="sm">
                  Book a Coverage Review
                </CalendlyPopupButton>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-paper p-8">
            <PilotForm />
          </div>
        </div>
      </Section>

      {/* ── LEAD MAGNETS ── */}
      <Section>
        <SectionHeading
          eyebrow="Before You Commit"
          title="See how coverage becomes operationally visible."
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Before committing to ongoing coverage, operators want to know what is being handled. Our reporting shows volume, recurring questions, escalations, and recommendations.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEAD_MAGNETS.map((asset) => (
            <Link
              key={asset.href}
              href={asset.href}
              className={`group flex flex-col justify-between rounded-lg border p-6 transition-colors hover:border-gold-dark/50 ${
                asset.featured
                  ? "border-gold bg-gold/5"
                  : "border-line bg-paper"
              }`}
            >
              <div>
                {asset.featured && (
                  <span className="mb-3 inline-block rounded bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold-dark">
                    Recommended first read
                  </span>
                )}
                <h3 className="text-sm font-medium text-ink">{asset.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{asset.description}</p>
              </div>
              <p className="mt-5 text-xs font-medium text-gold-dark group-hover:text-gold">{asset.cta} →</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section surface>
        <SectionHeading
          eyebrow="How the Pilot Works"
          title="How the 2-week pilot works."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILOT_STEPS.map((item) => (
            <div key={item.step} className="flex flex-col gap-4 rounded-lg border border-line bg-paper p-6">
              <span className="text-2xl font-medium text-gold-dark">{item.step}</span>
              <div>
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-muted">
          No long-term contract. Month-to-month if continued. Scope is agreed before launch. Property-specific briefing happens before guest handling begins.
        </p>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <SectionHeading
          eyebrow="Questions"
          title="Common questions about the pilot."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <section className="bg-ink py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-medium leading-tight text-paper md:text-4xl">
            Want to see if your property qualifies?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/65">
            Submit your property details or book a coverage review. We&rsquo;ll help you determine whether a 2-week pilot makes sense for your guest communication needs.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center rounded-lg bg-gold-dark px-6 py-3 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-gold"
            >
              Submit for Pilot Review
            </a>
            <CalendlyPopupButton
              variant="outline"
              size="lg"
              className="border-paper/25 text-paper hover:border-paper/60"
            >
              Book a Coverage Review
            </CalendlyPopupButton>
          </div>
        </div>
      </section>
    </>
  );
}
