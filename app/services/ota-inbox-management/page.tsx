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
  title: "OTA Inbox Management for Hotels and Vacation Rentals",
  description:
    "Guest Squad monitors and responds to OTA guest messages on Booking.com, Expedia, Airbnb and Vrbo using your property information, booking policies and escalation procedures.",
  path: "/services/ota-inbox-management",
});

const PATH = "/services/ota-inbox-management";

const PLATFORMS = [
  "Booking.com",
  "Expedia",
  "Airbnb",
  "Vrbo",
  "Hotels.com",
];

const HANDLES = [
  "Pre-booking questions about availability, rates and policies",
  "Post-booking questions about check-in, parking and special requests",
  "Date changes, cancellations and modifications within your agreed policy",
  "Arrival coordination and in-stay message threads",
  "Review responses in your brand voice (where included in your arrangement)",
];

const ESCALATES = [
  "Cancellation disputes, refund requests or chargeback situations",
  "Compensation offers or exceptions requiring your approval",
  "OTA policy violations or listing integrity issues",
  "Availability conflicts or PMS sync errors",
];

const SERVICES = [
  {
    eyebrow: "For individual hotels",
    name: "Hotel Answering Service",
    slug: "hotel-answering-service",
    body: "OTA inbox management sits alongside phone coverage, so booking questions on Booking.com or Expedia are handled with the same property brief as your front-desk calls. One arrangement, consistent answers.",
  },
  {
    eyebrow: "For hotel groups",
    name: "Central Reservations",
    slug: "central-reservations",
    body: "Each property's OTA inbox is handled to its own rates, policies and escalation contacts. A guest messaging a specific hotel gets answers from that hotel's brief — not a generic group response.",
  },
  {
    eyebrow: "For vacation rental operators",
    name: "Vacation Rental Answering Service",
    slug: "vacation-rental-answering-service",
    body: "Airbnb and Vrbo threads are handled listing by listing, using each property's house rules, arrival instructions and local contacts. Multi-listing portfolios stay responsive without manual monitoring.",
  },
];

const FAQS = [
  {
    q: "Which Guest Squad services include OTA inbox management?",
    a: "OTA inbox management can be included within your agreed service scope across Hotel Answering Service for individual hotels, Central Reservations for hotel groups, or Vacation Rental Answering Service for listing portfolios. The right arrangement depends on your property types, platforms and coverage needs.",
  },
  {
    q: "Which OTA platforms do you cover?",
    a: "Booking.com, Expedia, Airbnb and Vrbo are covered as standard. Hotels.com and other platforms can be added depending on your setup. Platforms, permitted actions and access method are confirmed before your arrangement starts.",
  },
  {
    q: "Why does timely OTA messaging matter for my property?",
    a: "Pre-booking questions that go unanswered typically result in the guest booking elsewhere. Post-booking messages left unread create arrival friction and complaint risk. Consistent inbox coverage keeps conversations moving, reduces no-shows, and means guests arrive informed — which is the operational case for handling these threads properly, independent of any platform metrics.",
  },
  {
    q: "Can you answer pre-booking questions, or only post-booking messages?",
    a: "Both. Pre-booking questions are typically the highest-value messages to answer quickly — an unanswered question at that stage often means the guest books elsewhere. Post-booking messages, arrival coordination and in-stay threads are also handled.",
  },
  {
    q: "How is this different from using an OTA's built-in auto-reply tools?",
    a: "Auto-replies handle static templates. OTA inbox management handles the actual conversation: rate questions, modification requests, special arrangements, anything that requires real property knowledge and a judgment call. Auto-replies are complementary, not a replacement.",
  },
];

export default function OtaInboxManagementPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "OTA Inbox Management",
            description:
              "Guest Squad monitors and responds to OTA guest messages on Booking.com, Expedia, Airbnb and Vrbo using your property information, booking policies and escalation procedures.",
            path: PATH,
            serviceOutput:
              "Monitored and answered OTA message threads across Booking.com, Expedia, Airbnb and Vrbo with consistent response times and property-specific handling.",
            audienceTypes: [
              "Independent Hotel",
              "Boutique Hotel",
              "Hotel Group",
              "Vacation Rental Operator",
              "Airbnb Host",
              "Short-Term Rental Operator",
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: "OTA Inbox Management for Hotels and Vacation Rentals",
            description:
              "Guest Squad monitors and responds to OTA guest messages on Booking.com, Expedia, Airbnb and Vrbo using your property information, booking policies and escalation procedures.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "OTA Inbox Management", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "OTA Inbox Management", path: PATH },
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
            OTA Inbox Management for Hotels and Vacation Rentals
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Guest Squad monitors and responds to guest messages through supported OTA platforms using
            your property information, booking policies and escalation procedures. OTA inbox
            management can be included within your agreed service scope across{" "}
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

          {/* Platform pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {p}
              </span>
            ))}
            <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
              + others on request
            </span>
          </div>
          </div>
          {/* Hero illustration */}
          <div className="hidden lg:block">
            <img
              src="/brand-assets/ota-inbox-hero.svg"
              alt="OTA inbox management dashboard showing guest messages from Booking.com, Airbnb, Expedia and Vrbo"
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
              title="What OTA inbox management covers"
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              OTA inbox management covers private guest message threads on supported platforms —
              pre-booking inquiries, post-booking questions, modification requests and arrival
              coordination. Review responses can be included as optional scope within your
              arrangement.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              It does not cover SMS, WhatsApp, email or direct website enquiries. Those channels
              fall under{" "}
              <Link href="/services/guest-messaging" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                Guest Messaging
              </Link>
              , which can be scoped alongside OTA inbox management where needed.
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
          eyebrow="OTA inbox management within your service"
          title="Same capability. Different operating context."
          description="The platforms and permissions are the same. What changes is the property structure, the brief each agent works from, and how OTA coverage fits alongside other responsibilities."
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
          Platforms, coverage hours and permitted actions are confirmed for each arrangement.
        </p>
      </Section>

      {/* EVIDENCE — Sample handover card */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <SectionHeading
              eyebrow="How it works in practice"
              title="Every message thread logged and handed over."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              At the end of each shift, threads handled during that period are summarised and
              passed to your team. Each entry notes the platform, the topic, the action taken,
              and any escalations raised. Nothing drops between teams.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              You have visibility into what was handled, what was escalated, and what was held
              pending your input — without monitoring the inboxes yourself.
            </p>
          </div>
          {/* Handover card visual */}
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                Shift handover — OTA inboxes
              </p>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-xs text-ink-muted border border-line">
                Sample
              </span>
            </div>
            <div className="space-y-3">
              {[
                { platform: "Booking.com", topic: "Pre-booking: twin room rates", action: "Replied", status: "done" },
                { platform: "Airbnb", topic: "In-stay: WiFi access", action: "Replied", status: "done" },
                { platform: "Expedia", topic: "Date change request", action: "Replied — within policy", status: "done" },
                { platform: "Vrbo", topic: "Cancellation dispute", action: "Escalated to manager", status: "escalated" },
              ].map((row) => (
                <div key={row.topic} className="flex items-start justify-between gap-3 rounded-lg bg-paper px-4 py-3 border border-line">
                  <div>
                    <p className="text-xs font-medium text-ink">{row.platform}</p>
                    <p className="text-xs text-ink-soft mt-0.5">{row.topic}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${row.status === "done" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                    {row.action}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Full thread logs, response times and escalation notes available on request.
            </p>
          </div>
        </div>
      </Section>

      {/* RESOURCE LINKS */}
      <Section surface>
        <SectionHeading
          eyebrow="Guides &amp; checklists"
          title="Useful reading on OTA inbox management."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Platform guide",
              title: "Booking.com messaging best practices",
              body: "How Booking.com structures property-guest messaging, what actions are available, and what the platform expects from property teams.",
              href: "/resources/booking-com-message-support",
            },
            {
              label: "Checklist",
              title: "OTA inbox setup checklist",
              body: "What to confirm before handing over OTA inbox access: access method, permitted actions, escalation contacts and response expectations.",
              href: "/resources/hotel-guest-messaging-sop-template",
            },
            {
              label: "Operations",
              title: "Managing guest messages on a lean team",
              body: "How smaller properties and short-term rental portfolios handle multi-platform inbox volume without a dedicated reservations team.",
              href: "/resources/booking-com-message-support",
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
              title="OTA inbox management, explained."
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
              Find the right coverage for your OTA inboxes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Tell us which properties, platforms and message volume you manage. We&apos;ll recommend the
              right service arrangement and confirm what access and permissions are needed.
            </p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="ota_inbox_faq_cta">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Useful for the conversation: your OTA platforms, approximate monthly message volume,
              and whether review responses are needed.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
