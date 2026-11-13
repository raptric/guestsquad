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

const PAGE_TITLE = "Hotel Guest Messaging: SMS, WhatsApp and Email | Guest Squad";

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description:
      "Hotel guest messaging by trained people: pre-arrival, in-stay and late-night guest texts, WhatsApp and email answered from your property brief and rules.",
    path: "/services/guest-messaging",
  }),
  title: { absolute: PAGE_TITLE },
};

const PATH = "/services/guest-messaging";

const FAQS = [
  {
    q: "Which channels do you cover?",
    a: "SMS, WhatsApp, email and direct messaging. Live chat can be included where your platform supports it. The channels in scope are confirmed before coverage starts, based on what your guests use and what access is available.",
  },
  {
    q: "How are in-stay maintenance issues handled?",
    a: "Minor requests are handled directly from your property brief. Issues that need on-site action, such as a fault or a safety concern, go to your designated contact, and the guest is kept informed.",
  },
  {
    q: "Can you handle messages in languages other than English?",
    a: "English is the primary language. If a guest writes in another language, we reply in English where the guest is likely to understand it, or pass the message to your team where a language barrier would affect the answer. This is agreed in your brief.",
  },
  {
    q: "What is the difference between guest messaging and OTA inbox management?",
    a: "OTA inbox management covers threads inside Booking.com, Airbnb, Expedia and similar platforms. Guest messaging covers direct channels: SMS, WhatsApp, email and live chat. The two can run together.",
  },
];

export default function GuestMessagingPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="guest-messaging" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "Hotel Guest Messaging",
            serviceType: "Hotel Guest Messaging Service",
            description:
              "Hotel guest messaging by trained people: pre-arrival, in-stay and late-night guest texts, WhatsApp and email answered from your property brief and rules.",
            url: `${SITE.url}${PATH}`,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: "Worldwide",
            audience: [
              { "@type": "Audience", audienceType: "Independent Hotel" },
              { "@type": "Audience", audienceType: "Hotel Group" },
              { "@type": "Audience", audienceType: "Vacation Rental Operator" },
              { "@type": "Audience", audienceType: "Serviced Apartment Operator" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: PAGE_TITLE,
            description:
              "Hotel guest messaging by trained people: pre-arrival, in-stay and late-night guest texts, WhatsApp and email answered from your property brief and rules.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Hotel Guest Messaging", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Hotel Guest Messaging", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Capability
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Hotel Guest Messaging by SMS, WhatsApp and Email
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-snug text-ink">
            Guest Support Operations for direct guest channels: trained hospitality agents answer texts, WhatsApp and email from your property brief, for hotels, serviced apartments and vacation rentals.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Hotel guest messaging is the texts, WhatsApp messages and emails guests send before arrival and during their stay: check-in times, parking, access codes, late check-out, an air conditioner that stops working at midnight. Guest Squad answers them from your property brief during the hours you agree, passes anything that needs someone on site to your team, and sends a summary at shift end. Guest messaging is included in our{" "}
            <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              hotel answering service
            </Link>{" "}
            and can be scoped into vacation rental and multi-property plans.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["SMS", "WhatsApp", "Email", "Live chat", "Direct messages"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="lg" ctaLocation="guest_messaging_hero">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <Section id="scope">
        <SectionHeading
          eyebrow="Scope"
          title="What hotel guest messaging covers (and what it doesn&apos;t)."
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            Guest messaging covers direct channels: SMS, WhatsApp, email and live chat where your setup supports it. Agents reply using your property brief: check-in procedures, parking, access codes, amenity hours, local contacts and escalation paths.
          </p>
          <p>
            It does not cover message threads inside OTA platforms such as Booking.com, Airbnb and Expedia. Those fall under{" "}
            <Link href="/services/ota-inbox-management" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              OTA inbox management
            </Link>
            , which can run alongside guest messaging in the same arrangement.
          </p>
        </div>
      </Section>

      {/* WE ANSWER / WE ESCALATE */}
      <Section surface id="we-answer">
        <SectionHeading
          eyebrow="What we handle"
          title="Pre-arrival, in-stay and late-night messages we answer."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">We answer</p>
            <ul className="space-y-2.5">
              {[
                "Pre-arrival: check-in time, parking, access and directions",
                "Special requests: room preferences and arrival notes confirmed before the stay",
                "Timing changes: late check-out or early check-in within your agreed policy",
                "In-stay: housekeeping requests, maintenance reports and local recommendations",
                "General questions about the property, amenities and surrounding area",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Guests get answers that fit their stay, not a generic template, because agents work from your property&apos;s own information.
            </p>
          </div>
          <div id="we-escalate">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">We escalate</p>
            <ul className="space-y-2.5">
              {[
                "Maintenance or safety issues that need someone on site",
                "Complaints and compensation requests",
                "Requests outside your property brief or permissions",
                "Situations where the guest needs to speak to the property directly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Minor requests (extra towels, thermostat questions, directions) are handled directly. When something needs on-site action, it goes to your designated contact and the guest is kept updated.
            </p>
          </div>
        </div>
      </Section>

      {/* BY PROPERTY TYPE */}
      <Section id="by-property-type">
        <SectionHeading
          eyebrow="By property type"
          title="Guest messaging service for hotels, groups and vacation rentals."
          description="Channels, coverage hours and escalation paths are confirmed for each arrangement."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              eyebrow: "Independent hotels",
              body: "Guest messaging sits alongside phone and OTA inbox coverage, using one property brief, so guests get the same answer whether they text, email or call. For one hotel, it's part of our hotel answering service.",
              href: "/services/hotel-answering-service",
              linkLabel: "Hotel answering service",
            },
            {
              eyebrow: "Hotel groups",
              body: "Each property's guests are answered from that property's own brief, contacts and procedures. See our hotel reservation call center for multi-property coverage.",
              href: "/services/central-reservations",
              linkLabel: "Central Reservations Desk",
            },
            {
              eyebrow: "Serviced apartments and extended stays",
              body: "Longer stays bring a steady flow of messages: maintenance, housekeeping schedules, parcels and access changes. We handle these within your procedures and pass on anything that needs your team.",
              href: null,
              linkLabel: null,
            },
            {
              eyebrow: "Vacation rentals",
              body: "For listings, guest messaging covers access instructions, house rules, check-in details and cleaner coordination. For messages inside the Airbnb app, see our Airbnb guest services.",
              href: "/services/vacation-rental-answering-service",
              linkLabel: "Vacation rental answering service",
            },
          ].map((item) => (
            <div key={item.eyebrow} className="flex flex-col rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{item.eyebrow}</p>
              <p className="mt-2 grow text-sm leading-relaxed text-ink-soft">{item.body}</p>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold"
                >
                  {item.linkLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* HANDOVER + SAMPLE LOG */}
      <Section surface id="handover">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Logging and handover"
              title="Conversations logged and handed over."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              At the end of each shift, the messages handled, actions taken and escalations raised are summarised for your team. You can see what happened without monitoring the channels yourself.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Message logs and escalation notes are available on request.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">Guest message log</p>
              <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-ink-muted">Sample</span>
            </div>
            <div className="space-y-2">
              {[
                { channel: "SMS", message: "Early check-in, 11am arrival", outcome: "Confirmed, room available", escalated: false },
                { channel: "WhatsApp", message: "Parking instructions", outcome: "Replied with directions", escalated: false },
                { channel: "Email", message: "Maintenance: AC not working", outcome: "Escalated to property", escalated: true },
                { channel: "SMS", message: "Late check-out, 1pm requested", outcome: "Confirmed, within policy", escalated: false },
              ].map((row) => (
                <div key={row.message} className="flex items-start justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-ink">{row.channel}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{row.message}</p>
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
      <Section id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">Guest Messaging Coverage Priced to Your Channels.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">Message volume, response time requirements and the platforms you use all shape what your plan covers. Messaging is included within your agreed service scope and workload allowance.</p>
            <div className="my-5 border-t border-line" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">What&apos;s included</p>
            <ul className="flex flex-col gap-2">
              {[
                "SMS, WhatsApp and email message replies",
                "OTA inbox handling (Airbnb, Vrbo, Booking.com)",
                "Pre-arrival, in-stay and post-stay messages",
                "Escalation and handover notes",
                "Activity summaries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="mt-0.5 text-gold-dark">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-ink-muted">Month-to-month · Written proposal before onboarding · No lock-in</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-surface p-7">
              <p className="mb-3 text-sm font-semibold text-ink">What shapes your pricing:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Guest channels in scope (SMS, WhatsApp, email, OTA inbox)",
                  "Daily message volume and response time requirements",
                  "Coverage hours (after-hours, 24/7, overflow)",
                  "Number of properties or listings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-0.5 shrink-0 text-gold-dark">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-paper p-7">
              <p className="mb-2 text-sm font-semibold text-ink">Start With a Pilot.</p>
              <p className="mb-5 text-sm text-ink-soft">Tell us your property, the channels your guests use and what you need managed. We&apos;ll agree the scope and send a written proposal before anything begins.</p>
              <CoverageReviewButton variant="gold" ctaLocation="guest_messaging_pricing_cta" className="w-full justify-center">
                Explore a Pilot
              </CoverageReviewButton>
              <p className="mt-4 text-xs text-ink-muted">✓ Written proposal before onboarding · ✓ Month-to-month · ✓ No obligation to continue</p>
            </div>
          </div>
        </div>
      </Section>

      {/* GUIDES */}
      <Section surface id="guides">
        <SectionHeading
          eyebrow="Guides and templates"
          title="Guest messaging guides and templates."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Template",
              title: "Hotel guest messaging SOP template",
              body: "What to include in a guest messaging brief, from check-in procedures to escalation paths.",
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
            <p className="text-base font-medium text-paper">Find the right guest messaging coverage.</p>
            <p className="mt-1 text-sm text-paper/60">
              Tell us your property type, the channels your guests use and your message volume.
            </p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="guest_messaging_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Hotel guest messaging questions.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Next Step</p>
            <h3 className="mb-3 text-xl font-medium text-ink">
              Find the right guest messaging coverage.
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">
              Tell us your property type, the channels your guests use and your typical message volume. We&apos;ll confirm the arrangement, the access needed and the price in writing.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="guest_messaging_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel answering service
                </Link>
                <Link href="/services/ota-inbox-management" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  OTA inbox management
                </Link>
                <Link href="/services/vacation-rental-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Vacation rental answering service
                </Link>
                <Link href="/services/airbnb-guest-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Airbnb guest services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Find the right guest messaging coverage for your property."
        description="Tell us your property type, the channels your guests use and your typical message volume. We will confirm the arrangement, the access needed and the price in writing."
      />
    </>
  );
}
