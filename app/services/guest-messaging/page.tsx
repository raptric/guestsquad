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
  title: "Guest Messaging and Support for Hotels and Vacation Rentals",
  description:
    "Guest Squad handles guest messages, in-stay requests and arrival coordination across SMS, WhatsApp, email and direct channels using your property information and procedures.",
  path: "/services/guest-messaging",
});

const PATH = "/services/guest-messaging";

const CHANNELS = ["SMS", "WhatsApp", "Email", "Live Chat", "Direct Messages"];

const HANDLES = [
  "Pre-arrival messages: check-in time, parking, access and directions",
  "In-stay requests: housekeeping, maintenance reports and local recommendations",
  "Special requests and room preference confirmations before arrival",
  "Late check-out or early check-in requests within your agreed policy",
  "General guest questions about the property, amenities and surrounding area",
];

const ESCALATES = [
  "Maintenance or safety issues requiring immediate on-site action",
  "Complaints, compensation requests or negative situation management",
  "Requests outside your agreed property brief or permissions",
  "Situations where a guest needs to speak with the property directly",
];

const SERVICES = [
  {
    eyebrow: "For individual hotels",
    name: "Hotel Answering Service",
    slug: "hotel-answering-service",
    body: "Guest messaging sits alongside phone and OTA inbox coverage. Pre-arrival questions, in-stay requests and local recommendations are handled using the same property brief — consistent answers whether a guest texts, emails or calls.",
  },
  {
    eyebrow: "For hotel groups",
    name: "Central Reservations",
    slug: "central-reservations",
    body: "Each property's guests are handled to that property's own brief, local contacts and procedures. A guest at one hotel gets answers specific to that property — not a group-wide generic response.",
  },
  {
    eyebrow: "For vacation rental operators",
    name: "Vacation Rental Answering Service",
    slug: "vacation-rental-answering-service",
    body: "Guest messaging handles the full listing communication flow: pre-arrival access instructions, house rules, check-in details, in-stay questions and cleaner coordination. Each listing has its own brief.",
  },
];

const FAQS = [
  {
    q: "Which Guest Squad services include guest messaging?",
    a: "Guest messaging and support can be included within your agreed service scope across Hotel Answering Service for individual hotels, Central Reservations for hotel groups, or Vacation Rental Answering Service for listing portfolios. The channels covered and response hours are confirmed in your arrangement.",
  },
  {
    q: "Which channels do you cover for guest messaging?",
    a: "SMS, WhatsApp, email and direct messaging are covered. Live chat can be included where your platform supports it. The specific channels in scope are confirmed before your arrangement starts, based on what your guests actually use and what access is available.",
  },
  {
    q: "How are in-stay maintenance issues handled?",
    a: "Minor requests — extra towels, thermostat questions, local directions — are handled directly using your property brief. Issues requiring on-site action, such as a maintenance fault or safety concern, are escalated immediately to your designated contact and the guest is kept informed while that happens.",
  },
  {
    q: "Can you handle messages in languages other than English?",
    a: "English is the primary language for all arrangements. Where guests message in another language, we handle in English where the guest is likely to understand it, or escalate where a language barrier would affect the quality of the response. This is confirmed in your brief.",
  },
  {
    q: "What's the difference between guest messaging and OTA inbox management?",
    a: "OTA inbox management covers guest threads inside OTA platforms — Booking.com, Airbnb, Expedia. Guest messaging covers direct channels: SMS, WhatsApp, email, live chat. The two can run alongside each other within the same arrangement, covering the full communication picture.",
  },
];

const LOG_ROWS = [
  { channel: "SMS", action: "Early check-in request — 11am arrival", result: "Confirmed — room available", status: "done" },
  { channel: "WhatsApp", action: "Parking instructions query", result: "Replied with directions", status: "done" },
  { channel: "Email", action: "Maintenance — AC not working", result: "Escalated to property", status: "escalated" },
  { channel: "SMS", action: "Late check-out — 1pm requested", result: "Confirmed — within policy", status: "done" },
];

export default function GuestMessagingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Guest Messaging and Support",
            description:
              "Guest Squad handles guest messages, in-stay requests and arrival coordination across SMS, WhatsApp, email and direct channels using your property information and procedures.",
            path: PATH,
            serviceOutput:
              "Handled guest messages across SMS, WhatsApp, email and direct channels with property-specific responses, in-stay request management and timely escalation.",
            audienceTypes: [
              "Independent Hotel",
              "Boutique Hotel",
              "Hotel Group",
              "Vacation Rental Operator",
              "Short-Term Rental Operator",
              "Airbnb Host",
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: "Guest Messaging and Support for Hotels and Vacation Rentals",
            description:
              "Guest Squad handles guest messages, in-stay requests and arrival coordination across SMS, WhatsApp, email and direct channels using your property information and procedures.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Guest Messaging & Support", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Guest Messaging & Support", path: PATH },
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
                Guest Messaging and Support for Hotels and Vacation Rentals
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Guest Squad handles guest messages, in-stay requests and arrival coordination
                across SMS, WhatsApp, email and direct channels using your property information
                and procedures. Guest messaging can be included within your agreed service scope
                across{" "}
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
            {/* Hero illustration */}
            <div className="hidden lg:block">
              <img
                src="/brand-assets/guest-messaging-hero.svg"
                alt="Guest messaging dashboard showing SMS, WhatsApp, email and direct messages handled across channels"
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
              title="What guest messaging and support covers"
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Guest messaging covers direct guest communication outside OTA platforms — SMS,
              WhatsApp, email and live chat. Pre-arrival coordination, in-stay requests, access
              instructions and general questions are handled using your property brief.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              It does not cover OTA platform threads (Booking.com, Airbnb, Expedia). Those fall
              under{" "}
              <Link href="/services/ota-inbox-management" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                OTA Inbox Management
              </Link>
              , which can be scoped alongside guest messaging where needed.
            </p>
          </div>

          {/* Handle / escalate */}
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
          eyebrow="Guest messaging within your service"
          title="Same capability. Different operating context."
          description="The channels and process are the same. What changes is the property structure, the brief each agent works from, and how guest messaging fits alongside reservations and OTA coverage."
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
          Channels, coverage hours and escalation procedures are confirmed for each arrangement.
        </p>
      </Section>

      {/* EVIDENCE */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <SectionHeading
              eyebrow="How it works in practice"
              title="Every guest conversation handled to your property brief."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Messages are handled using your property-specific information: check-in procedures,
              parking details, amenity hours, local contacts and escalation paths. Guests get
              real answers relevant to their specific stay — not generic replies copied from a
              template.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Anything requiring on-site action or outside your brief is escalated immediately,
              with the guest kept informed. Your team receives a full log of conversations handled
              and escalations raised each shift.
            </p>
          </div>
          {/* Log card */}
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                Guest message log — sample
              </p>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs text-ink-muted border border-line">
                Sample
              </span>
            </div>
            <div className="space-y-3">
              {LOG_ROWS.map((row) => (
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
              Full message logs, escalation notes and channel breakdown available on request.
            </p>
          </div>
        </div>
      </Section>

      {/* RESOURCE LINKS */}
      <Section surface>
        <SectionHeading
          eyebrow="Guides &amp; checklists"
          title="Useful reading on guest messaging."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Setup guide",
              title: "What to include in a guest messaging brief",
              body: "How to structure the information agents need: check-in procedures, parking, access instructions, escalation contacts and what requires your direct response.",
              href: "/resources",
            },
            {
              label: "Checklist",
              title: "Pre-arrival messaging checklist for hotel operators",
              body: "The messages guests typically send before arrival and what your brief needs to cover so each one gets a useful, property-specific answer.",
              href: "/resources",
            },
            {
              label: "Operations",
              title: "Managing in-stay guest communication at scale",
              body: "How rental operators and hotel groups handle multi-property guest messaging without letting individual stays fall through the gap.",
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
              title="Guest messaging and support, explained."
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
              Find the right guest messaging coverage for your operation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Tell us your property type, the channels your guests use, and when coverage is
              needed. We will recommend the right service arrangement and confirm how messaging
              fits alongside your other coverage.
            </p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="guest_messaging_faq_cta">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Useful for the conversation: your guest channels (SMS, WhatsApp, email), typical
              message volume per stay, and whether OTA inbox coverage is also needed.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
