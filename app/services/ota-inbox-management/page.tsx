import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, XCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
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
    a: "OTA inbox management can be included within Hotel Answering Service for individual hotels, Central Reservations for hotel groups, or Vacation Rental Answering Service for listing portfolios. The right arrangement depends on your property types, platforms and coverage needs.",
  },
  {
    q: "Which OTA platforms do you cover?",
    a: "Booking.com, Expedia, Airbnb and Vrbo are covered as standard. Hotels.com and other platforms can be added depending on your setup. Platforms, permitted actions and access method are confirmed before your arrangement starts.",
  },
  {
    q: "Does slow OTA response time affect hotel ranking?",
    a: "Booking.com and Expedia both track response rate and speed as factors in how properties appear in search results. We focus on consistent coverage — monitored inboxes, fast replies, fewer unanswered threads — which keeps your response metrics strong across active platforms.",
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Capability
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            OTA Inbox Management for Hotels and Vacation Rentals
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Guest Squad monitors and responds to guest messages through supported OTA platforms using
            your property information, booking policies and escalation procedures. OTA inbox
            management is included within{" "}
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
            , depending on the channels and responsibilities agreed for your operation.
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
              Tell us which properties, platforms and message volume you manage. We'll recommend the
              right service arrangement and confirm what access and permissions are needed.
            </p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="ota_inbox_faq_cta">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <ButtonLink href="/services/hotel-answering-service" variant="outline" size="sm">
                Hotel Answering Service
              </ButtonLink>
              <ButtonLink href="/services/central-reservations" variant="outline" size="sm">
                Central Reservations
              </ButtonLink>
              <ButtonLink href="/services/vacation-rental-answering-service" variant="outline" size="sm">
                Vacation Rental Answering Service
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Useful for the conversation: your OTA platforms, approximate monthly message volume,
              and whether review responses are needed.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
