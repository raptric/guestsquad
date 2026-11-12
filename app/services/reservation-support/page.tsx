import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

const PAGE_TITLE = "Hotel Reservation Support for Independent Hotels";

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description:
      "Hotel reservation support for one property: availability checks, quotes, bookings and changes handled live to your rates and policies. From US$149/month.",
    path: "/services/reservation-support",
  }),
  title: { absolute: PAGE_TITLE },
};

const PATH = "/services/reservation-support";

const FAQS = [
  {
    q: "Is reservation support included in the hotel answering service?",
    a: "Yes. For a single hotel, reservation support is part of the hotel answering service, from US$149/month, subject to scope confirmation. What agents may do is agreed in your brief.",
  },
  {
    q: "Can your agents make bookings?",
    a: "Permitted actions are agreed before coverage starts. They typically include confirming availability, quoting approved rates and processing changes or cancellations within your policy. Anything outside the agreed scope is escalated.",
  },
  {
    q: "How do agents access our availability and rates?",
    a: "It depends on your setup: a PMS login, channel manager access, or an availability schedule you provide. The brief includes approved rates, minimum stays, blackout dates and what needs escalation. Access and permissions are confirmed before coverage starts.",
  },
  {
    q: "Can you handle group or event enquiries?",
    a: "We can receive and acknowledge group enquiries. Where a group needs contract pricing, negotiation or a sales process, it goes to your team. The scope of group handling is set in your brief.",
  },
  {
    q: "What if a guest asks for a rate that isn't in the brief?",
    a: "It isn't offered or confirmed. The enquiry is acknowledged and passed to the right contact (your reservations lead, revenue manager or the property), and the guest is kept informed.",
  },
  {
    q: "We run several hotels. Is this the right service?",
    a: "For several properties handled by one team, see our hotel reservation call center. This page covers a single property.",
  },
];

export default function ReservationSupportPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="reservation-support" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "Hotel Reservation Support",
            serviceType: "Hotel Reservation Support Service",
            description:
              "Hotel reservation support for one property: availability checks, quotes, bookings and changes handled live to your rates and policies. From US$149/month.",
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
              price: "149",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "149",
                priceCurrency: "USD",
                unitCode: "MON",
                description:
                  "Included in the hotel answering service: one hotel, after-hours or overflow coverage, subject to scope confirmation",
              },
              availability: "https://schema.org/InStock",
            },
            audience: [
              { "@type": "Audience", audienceType: "Independent Hotel" },
              { "@type": "Audience", audienceType: "Boutique Hotel" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: PAGE_TITLE,
            description:
              "Hotel reservation support for one property: availability checks, quotes, bookings and changes handled live to your rates and policies. From US$149/month.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Hotel Reservation Support", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Hotel Reservation Support", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Capability
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Hotel Reservation Support for Independent Hotels
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-snug text-ink">
            Guest Support Operations for single properties: booking calls, availability checks and quotes handled by a team briefed on your hotel.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Guest Squad provides hotel reservation support for independent hotels. Our team answers booking calls, emails and OTA messages for your property. Agents check availability, quote your approved rates, and make or change bookings within the permissions you set. Anything outside your brief goes to your team. Reservation support is part of our{" "}
            <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              hotel answering service
            </Link>
            , with plans from US$149/month, subject to scope confirmation.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Phone", "Email", "PMS", "OTA channels", "Direct booking"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="lg" ctaLocation="reservation_hero">
              Book a Coverage Review
            </CoverageReviewButton>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* SCOPE + HANDLE + ESCALATE */}
      <Section id="scope">
        <SectionHeading
          eyebrow="Scope"
          title="What hotel reservation support covers."
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            Reservation support covers live and written booking enquiries on the channels you agree: phone, email, OTA message threads and direct booking requests. Agents work from your property brief: approved rates, availability access, permitted actions and escalation contacts.
          </p>
          <p>
            It does not cover revenue management, pricing strategy or contract negotiation. Those decisions stay with your team. Requests within your brief are handled; anything outside it is passed to the right person.
          </p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">We handle</p>
            <ul className="space-y-2.5">
              {[
                "Availability checks and room enquiries",
                "Rate questions and approved booking actions, within your agreed permissions",
                "Date changes, cancellations and modifications, per your policy",
                "Group and special-rate enquiries, routed or answered within your brief",
                "Follow-up and confirmation messages after a booking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">We escalate</p>
            <ul className="space-y-2.5">
              {[
                "Requests outside your approved rates or availability permissions",
                "Group negotiation or contract pricing",
                "Overbooking situations or PMS sync conflicts",
                "Refunds, compensation or goodwill decisions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section surface id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title="How booking calls and quotes work for one property."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Build your reservation brief",
              body: "Room types, approved rates, minimum stays, policies, blackout dates and escalation contacts.",
            },
            {
              step: "02",
              title: "Confirm access and permitted actions",
              body: "PMS or booking-engine login, channel manager, or an availability schedule you provide, and exactly what agents may confirm, change or cancel.",
            },
            {
              step: "03",
              title: "Calls and messages route to us",
              body: "On overflow, after hours or full time, as agreed. Coverage starts once the brief, access and escalation contacts are agreed.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-line bg-surface px-6 py-4">
          <p className="text-sm text-ink-soft">
            If your front desk misses calls at busy times, our guide to{" "}
            <Link href="/resources/hotel-front-desk-overflow-support" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              front desk overflow
            </Link>{" "}
            shows how overflow routing works. Overnight booking calls are covered by our{" "}
            <Link href="/services/after-hours-support" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              after-hours hotel front desk support
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* ACTION LOG */}
      <Section id="log">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Logging"
              title="Booking actions logged against your brief."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              When a reservation action is taken (a booking confirmed, a date changed, a cancellation processed), it is logged with the channel, the guest reference and the action. Your team can see what was handled and what was escalated without monitoring calls or inboxes.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Agents confirm, quote and process within the agreed limits, and route anything else to the right contact. Action logs and escalation notes are available on request.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">Reservation actions log</p>
              <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-ink-muted">Sample</span>
            </div>
            <div className="space-y-2">
              {[
                { channel: "Phone", request: "Availability, 3 nights from 14 Aug", outcome: "Quoted and confirmed", escalated: false },
                { channel: "Booking.com", request: "Date change, check-out +1 night", outcome: "Processed within policy", escalated: false },
                { channel: "Email", request: "Group enquiry, 8 rooms", outcome: "Escalated to manager", escalated: true },
                { channel: "Phone", request: "Cancellation, 48 hours' notice", outcome: "Processed within policy", escalated: false },
              ].map((row) => (
                <div key={row.request} className="flex items-start justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-ink">{row.channel}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{row.request}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${row.escalated ? "bg-amber-50 text-amber-700" : "bg-green-50 text-green-700"}`}>
                    {row.outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section surface id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
              From US$149<span className="text-base font-normal text-ink-muted">/month</span>
            </p>
            <p className="mt-1 text-xs italic text-ink-muted">Subject to scope confirmation</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Hotel reservation support is included in our hotel answering service, for one hotel. The starting price covers after-hours or overflow coverage within an agreed workload allowance.
            </p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                Included at this starting price
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Live booking call answering",
                  "Availability checks and rate quotes",
                  "Booking changes and cancellations within your policy",
                  "OTA and email booking enquiries",
                  "Action log and escalation notes",
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

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-paper p-7">
              <p className="mb-3 text-sm font-semibold text-ink">Your final fee depends on:</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Coverage hours (overflow, after hours or full time)",
                  "Channels covered (phone, email, OTA)",
                  "Call and enquiry volume",
                  "Actions included in the agreed scope",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">
                24/7 coverage is available and quoted to your volume.{" "}
                <Link href="/pricing" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                  See pricing
                </Link>
                .
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Want to size the problem first? The{" "}
                <Link href="/resources/missed-booking-calculator" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                  hotel missed call revenue calculator
                </Link>{" "}
                estimates what unanswered booking calls may be costing you.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-surface p-7">
              <p className="mb-2 text-sm font-semibold text-ink">Find the right reservation coverage.</p>
              <p className="mb-5 text-sm text-ink-soft">
                Tell us your booking channels and what you want agents to handle. We will confirm the scope, the access needed and the price in writing.
              </p>
              <CoverageReviewButton variant="gold" ctaLocation="reservation_pricing_cta" className="w-full justify-center">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
          </div>
        </div>
      </Section>

      {/* WHICH SERVICE */}
      <Section id="which-service">
        <SectionHeading
          eyebrow="Which service fits"
          title="Which service fits your property."
        />
        <p className="mt-4 text-sm text-ink-soft">
          This page is for single hotels that want booking enquiries handled within their own rates and rules.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "For hotel groups",
              body: "One team handling enquiries and bookings across several properties.",
              href: "/services/central-reservations",
              linkLabel: "Hotel reservation call center",
            },
            {
              label: "For short-term rentals",
              body: "Live call answering and messages for vacation rental operators.",
              href: "/services/vacation-rental-answering-service",
              linkLabel: "Vacation rental answering service",
            },
            {
              label: "For booking messages on Booking.com and Expedia",
              body: "OTA thread monitoring and replies from your property brief.",
              href: "/services/ota-inbox-management",
              linkLabel: "OTA inbox management",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold"
              >
                {item.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* GUIDES */}
      <Section surface id="guides">
        <SectionHeading
          eyebrow="Guides"
          title="Guides for running reservations on a lean team."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Operations",
              title: "Front desk overflow support",
              body: "When and how independent hotels route booking calls they can't answer at the desk.",
              href: "/resources/hotel-front-desk-overflow-support",
            },
            {
              label: "Checklist",
              title: "After-hours hotel support checklist",
              body: "What to confirm before anyone handles guests on your behalf, including access and escalation paths.",
              href: "/resources/after-hours-hotel-support-checklist",
            },
            {
              label: "Template",
              title: "Hotel guest messaging SOP template",
              body: "A template for the written rules agents work from.",
              href: "/resources/hotel-guest-messaging-sop-template",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{item.label}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold"
              >
                Read →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* MID-PAGE DARK CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Find the right reservation coverage for your property.</p>
            <p className="mt-1 text-sm text-paper/60">
              Tell us your booking channels and what you want agents to handle.
            </p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="reservation_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Hotel reservation support questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Next Step</p>
            <h3 className="mb-3 text-xl font-medium text-ink">
              Find the right reservation coverage.
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">
              Tell us your booking channels and what you want agents to handle. We will confirm the scope, the access needed and the price in writing.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="reservation_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <p className="mt-4 text-xs text-ink-muted">
              Useful for the conversation: your booking channels, approximate monthly enquiry volume, and your PMS or channel manager.
            </p>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel answering service
                </Link>
                <Link href="/services/after-hours-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  After-hours hotel support
                </Link>
                <Link href="/services/central-reservations" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Central Reservations Desk
                </Link>
                <Link href="/services/ota-inbox-management" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  OTA inbox management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Find the right reservation coverage for your property."
        description="Tell us your booking channels and what you want agents to handle. We will confirm the scope, the access needed and the price in writing."
      />
    </>
  );
}
