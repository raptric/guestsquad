import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, XCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { serviceSchema, breadcrumbSchema, faqSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Reservation Support for Hotels and Vacation Rentals",
  description:
    "Guest Squad handles reservation enquiries, availability checks and booking actions on behalf of your property using your rates, policies and approved permissions.",
  path: "/services/reservation-support",
});

const PATH = "/services/reservation-support";

const CHANNELS = ["Phone", "Email", "PMS", "OTA Channels", "Direct Booking"];

const HANDLES = [
  "Availability checks and room or listing enquiries",
  "Rate questions and approved booking actions within your agreed permissions",
  "Date changes, cancellations and modifications per your policy",
  "Group and special rate enquiries — routed or replied within your brief",
  "Follow-up and confirmation messages after a booking is made",
];

const ESCALATES = [
  "Requests outside your approved rate or availability permissions",
  "Group negotiation or contract pricing decisions",
  "Overbooking situations or PMS sync conflicts",
  "Refund, compensation or goodwill gesture decisions",
];

const SERVICES = [
  {
    eyebrow: "For individual hotels",
    name: "Hotel Answering Service",
    slug: "hotel-answering-service",
    body: "Reservation support runs alongside phone coverage and OTA inbox handling. Availability, rates and booking changes are answered using the same property brief — whether the guest calls, emails or messages through Booking.com.",
  },
  {
    eyebrow: "For hotel groups",
    name: "Central Reservations",
    slug: "central-reservations",
    body: "Reservation enquiries across multiple properties are handled property by property, each to its own rates, availability calendar and escalation contacts. A guest asking about one hotel gets that hotel&apos;s answers.",
  },
  {
    eyebrow: "For vacation rental operators",
    name: "Vacation Rental Answering Service",
    slug: "vacation-rental-answering-service",
    body: "Reservation support covers availability, pricing questions and booking changes across your listing portfolio. Each listing is handled to its own calendar, minimum stays and house rules.",
  },
];

const FAQS = [
  {
    q: "Which Guest Squad services include reservation support?",
    a: "Reservation support can be included within your agreed service scope across Hotel Answering Service for individual hotels, Central Reservations for hotel groups, or Vacation Rental Answering Service for listing portfolios. The right arrangement depends on your property type, booking volume and channel mix.",
  },
  {
    q: "What actions can your agents take — can they actually make bookings?",
    a: "Permitted actions are agreed before your arrangement starts. These typically include confirming availability, quoting approved rates and processing booking changes or cancellations within your policy. Actions outside the agreed scope are escalated rather than handled independently.",
  },
  {
    q: "How do agents access our availability and rates?",
    a: "Access method depends on your setup — PMS login, channel manager, or a provided availability schedule. The brief includes approved rates, minimum stays, any blackout dates, and what requires escalation. Access and permissions are confirmed in setup before the arrangement goes live.",
  },
  {
    q: "Can you handle group or event enquiries?",
    a: "Initial group enquiries can be received and acknowledged. Where a group requires contract pricing, negotiation or a sales process, those are escalated to your team rather than handled directly. The scope of group handling is confirmed in your brief.",
  },
  {
    q: "What if a guest asks for a rate that isn&apos;t in the brief?",
    a: "Any rate or action outside your approved brief is not offered or confirmed. The enquiry is acknowledged and routed to the relevant contact — your reservations team, revenue manager or the property directly — with the guest kept informed in the meantime.",
  },
];

export default function ReservationSupportPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Reservation Support",
            description:
              "Guest Squad handles reservation enquiries, availability checks and booking actions on behalf of your property using your rates, policies and approved permissions.",
            path: PATH,
            serviceOutput:
              "Handled reservation enquiries, availability confirmations and booking changes across phone, email and OTA channels within agreed property permissions.",
            audienceTypes: [
              "Independent Hotel",
              "Boutique Hotel",
              "Hotel Group",
              "Vacation Rental Operator",
              "Short-Term Rental Operator",
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: "Reservation Support for Hotels and Vacation Rentals",
            description:
              "Guest Squad handles reservation enquiries, availability checks and booking actions on behalf of your property using your rates, policies and approved permissions.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Reservation Support", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Reservation Support", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Capability
              </p>
              <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
                Reservation Support for Hotels and Vacation Rentals
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Guest Squad handles reservation enquiries, availability checks and booking actions
                using your rates, policies and approved permissions. Reservation support can be
                included within your agreed service scope across{" "}
                <Link href="/services/hotel-answering-service" className="text-ink underline underline-offset-2 hover:text-gold-dark">
                  Hotel Answering Service
                </Link>
                ,{" "}
                <Link href="/services/central-reservations" className="text-ink underline underline-offset-2 hover:text-gold-dark">
                  Central Reservations
                </Link>{" "}
                and{" "}
                <Link href="/services/vacation-rental-answering-service" className="text-ink underline underline-offset-2 hover:text-gold-dark">
                  Vacation Rental Answering Service
                </Link>
                .
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {CHANNELS.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/brand-assets/reservation-support-hero.svg"
                alt="Reservation support workflow showing phone, OTA and email channels feeding into a central booking record"
                width={520}
                height={380}
                className="w-[420px] xl:w-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              eyebrow="Scope"
              title="What reservation support covers"
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Reservation support covers live and written enquiries across agreed channels — phone,
              email, OTA message threads and direct booking requests. Agents work from your property
              brief: approved rates, availability access, permitted actions and escalation contacts.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              It does not cover revenue management, pricing strategy or contract negotiation. Those
              decisions stay with your team. Everything within your brief is handled; everything
              outside it is escalated.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                We handle
              </p>
              <ul className="space-y-2">
                {HANDLES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span className="text-sm text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                We escalate
              </p>
              <ul className="space-y-2">
                {ESCALATES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                    <span className="text-sm text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* HOW CONTEXT DIFFERS BY SERVICE */}
      <Section surface>
        <SectionHeading
          eyebrow="Reservation support within your service"
          title="Same capability. Different operating context."
          description="The channels and permitted actions are agreed per arrangement. What changes is the property structure, the brief each agent works from, and how reservation support fits alongside other responsibilities."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.slug}
              className="flex flex-col rounded-lg border border-line bg-paper p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                {svc.eyebrow}
              </p>
              <h3 className="mt-2 text-base font-medium text-ink">{svc.name}</h3>
              <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">{svc.body}</p>
              <Link
                href={`/services/${svc.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-gold-dark hover:text-gold"
              >
                Explore {svc.name}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Channels, coverage hours and permitted actions are confirmed for each arrangement.
        </p>
      </Section>

      {/* EVIDENCE */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <SectionHeading
              eyebrow="How it works in practice"
              title="Every booking action logged against your brief."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              When a reservation action is taken — a booking confirmed, a date changed, a
              cancellation processed — it is logged with the channel, the guest reference and the
              action taken. Your team has a full record of what was handled and what was escalated,
              without monitoring calls or inboxes themselves.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Nothing is actioned outside your brief. Agents confirm, quote and process within
              agreed parameters — and route anything else to the right contact immediately.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                Reservation actions log
              </p>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs text-ink-muted border border-line">
                Sample
              </span>
            </div>
            <div className="space-y-3">
              {[
                { channel: "Phone", action: "Availability — 3 nights Aug 14", result: "Quoted & confirmed", status: "done" },
                { channel: "Booking.com", action: "Date change — check-out +1 night", result: "Processed — within policy", status: "done" },
                { channel: "Email", action: "Group enquiry — 8 rooms", result: "Escalated to manager", status: "escalated" },
                { channel: "Phone", action: "Cancellation — 48hr notice", result: "Processed — within policy", status: "done" },
              ].map((row) => (
                <div key={row.action} className="flex items-start justify-between gap-3 rounded-lg bg-paper px-4 py-3 border border-line">
                  <div>
                    <p className="text-xs font-medium text-ink">{row.channel}</p>
                    <p className="text-xs text-ink-soft mt-0.5">{row.action}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${row.status === "done" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                    {row.result}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Full action logs and escalation notes available on request.
            </p>
          </div>
        </div>
      </Section>

      {/* RESOURCE LINKS */}
      <Section surface>
        <SectionHeading
          eyebrow="Guides &amp; checklists"
          title="Useful reading on reservation support."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Setup guide",
              title: "What to include in a reservation brief",
              body: "The information agents need before handling reservations: approved rates, availability access method, permitted actions, escalation contacts and what requires a callback.",
              href: "/resources",
            },
            {
              label: "Checklist",
              title: "Reservation handover checklist",
              body: "What to confirm before an agent handles bookings on your behalf — PMS access, rate permissions, cancellation policy and emergency escalation paths.",
              href: "/resources",
            },
            {
              label: "Operations",
              title: "Managing reservation volume on a lean team",
              body: "How independent hotels and rental operators handle booking enquiries across multiple channels without a dedicated reservations desk.",
              href: "/resources",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-ink leading-snug">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold-dark hover:text-gold"
              >
                Read guide
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ + STICKY CTA */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Reservation support, explained."
            />
            <div className="mt-8">
              <FaqAccordion items={FAQS} />
            </div>
          </div>
          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
              Next step
            </p>
            <h3 className="mt-2 text-xl font-medium text-ink">
              Find the right reservation coverage for your property
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Tell us your property type, booking channels and what you need agents to handle.
              We&apos;ll confirm the right service arrangement and what access is needed.
            </p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="reservation_support_faq_cta">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Useful for the conversation: your booking channels, approximate monthly enquiry
              volume, and your PMS or channel manager.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
