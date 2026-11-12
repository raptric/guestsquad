import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Hotel & Vacation Rental Support Pricing",
  description:
    "Starting prices for Guest Squad hotel answering, central reservations, and vacation rental support. Compare scope and request a tailored quote.",
  path: "/pricing",
});

// ─── Pricing data ────────────────────────────────────────────────────────────
// NOTE: Included scope marked [PLACEHOLDER] requires confirmation from the
// approved pricing matrix before this page is published publicly.

const SERVICES = [
  {
    id: "hotel-answering-service",
    name: "Hotel Answering Service",
    href: "/services/hotel-answering-service",
    price: "From US$149",
    period: "/month",
    description:
      "Human phone answering for independent hotels, with guest inquiries handled using your property's approved information and escalation procedures.",
    included: [
      "Live phone answering during agreed coverage hours",
      "Calls handled using your approved property information",
      "Reservation inquiries",
      "Late-arrival and access assistance",
      "Guest-request routing",
      "After-hours or overflow coverage",
      "Guest messaging and OTA inbox support",
      "Escalation to your designated contact per agreed procedure",
      "Call logging and handover notes",
      "Activity summary",
    ],
    cta: "Request Your Hotel Quote",
    ctaHref: "/contact?service=hotel-answering-service",
  },
  {
    id: "central-reservations",
    name: "Central Reservations Desk",
    href: "/services/central-reservations",
    price: "From US$299",
    period: "/month",
    description:
      "Coordinated reservation support across your properties, following each location's approved availability, rates, booking rules, and permissions.",
    included: [
      "Reservation inquiry handling across two properties",
      "After-hours coverage",
      "Rate and availability information using your approved data",
      "Direct booking assistance",
      "Approved changes and cancellations",
      "Booking-related email handling",
      "PMS workflows",
      "Reservation follow-up",
      "Routing of bookings and modifications per agreed permissions",
      "Booking-related escalation and handover",
      "Activity reporting across properties",
    ],
    cta: "Request Your Reservations Quote",
    ctaHref: "/contact?service=central-reservations",
    featured: true,
  },
  {
    id: "vacation-rental-answering-service",
    name: "Vacation Rental Answering Service",
    href: "/services/vacation-rental-answering-service",
    price: "From US$99",
    period: "/month",
    description:
      "Guest communication support for vacation rentals, following each listing's approved instructions, house rules, and escalation contacts.",
    included: [
      "OTA message handling for one listing",
      "Airbnb, Vrbo, and other agreed messaging channels",
      "Guest inquiry responses using your approved house rules",
      "Arrival and access assistance",
      "Guest inquiries",
      "Cleaner and maintenance communication",
      "24/7 coverage",
      "Live phone answering",
      "Escalation to your designated contact",
      "Activity summary",
    ],
    cta: "Request Your Vacation Rental Quote",
    ctaHref: "/contact?service=vacation-rental-answering-service",
  },
];

const PRICING_FACTORS = [
  {
    title: "Properties and portfolio",
    body: "Property count and approximate room or listing count help establish the operating requirements.",
  },
  {
    title: "Coverage hours",
    body: "Overflow, after-hours, extended-hour, and round-the-clock coverage require different arrangements.",
  },
  {
    title: "Interaction volume",
    body: "Calls, conversations, reservation inquiries, and follow-up contribute to workload under the agreed counting rules.",
  },
  {
    title: "Channels and handling requirements",
    body: "Phone, email, OTA messaging, approved booking actions, and coordination affect the required support.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    n: "01",
    title: "Share your requirements",
    body: "Tell us your properties, channels, coverage hours, and estimated workload.",
  },
  {
    n: "02",
    title: "Receive a scoped proposal",
    body: "We provide inclusions, allowances, permissions, reporting, and pricing specific to your operation.",
  },
  {
    n: "03",
    title: "Prepare for coverage",
    body: "Agree property instructions, system access, and escalation contacts before coverage begins.",
  },
  {
    n: "04",
    title: "Review delivery",
    body: "Monitor activity and adjust scope when your requirements change.",
  },
];

const FAQS = [
  {
    q: "What is included in the starting price?",
    a: "Each starting price covers the inclusions listed on the card above for the reference configuration shown. Final inclusions, allowances, and any conditions are confirmed in the scoped proposal for your property.",
  },
  {
    q: "How are calls, conversations, and messages counted?",
    a: "The counting rules for your workload allowance are set out in your proposal. What counts varies by service and handling type. We confirm this clearly before coverage begins.",
  },
  {
    q: "What happens if we exceed the agreed allowance?",
    a: "Additional work is handled according to the charges or scope-review process stated in your proposal. We do not apply unexpected charges without advance notice.",
  },
  {
    q: "Can one vacation rental listing use the service?",
    a: "The Vacation Rental Answering Service shows a starting configuration of one listing. Whether a single-listing engagement is available for your property is confirmed during the quotation process.",
  },
  {
    q: "Does hotel pricing depend on room count?",
    a: "Room count is one input into the operating requirements, but it is not the sole factor. Interaction volume, coverage hours, and handling complexity also shape the quote.",
  },
  {
    q: "Can one hotel request dedicated reservation support?",
    a: "Yes. If your volume or operational requirements suggest dedicated rather than shared support, that is discussed as part of the scoped proposal.",
  },
  {
    q: "Can we include additional properties?",
    a: "Yes. Additional properties beyond the reference configuration are priced as part of the quotation based on the added workload and coverage requirements.",
  },
  {
    q: "Is 24/7 coverage included or quoted separately?",
    a: "It depends on the service. The Vacation Rental Answering Service starting price includes 24/7 coverage for one listing. The Hotel Answering Service and Central Reservations Desk starting prices cover after-hours coverage (and, for hotels, overflow coverage). 24/7 is available for both and quoted to your volume and handling requirements.",
  },
  {
    q: "Are there onboarding fees?",
    a: "No. Property briefing, agent preparation, and go-live testing are included as part of getting coverage started.",
  },
  {
    q: "What are the cancellation terms?",
    a: "Plans are month-to-month with 30 days' notice to cancel.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hotel & Vacation Rental Support Pricing | Guest Squad",
            description:
              "Starting prices for Guest Squad hotel answering, central reservations, and vacation rental support. Compare scope and request a tailored quote.",
            path: "/pricing",
            primaryImageUrl: `${SITE.url}/brand-assets/guestsquad-favicon-official.svg`,
            primaryImageAlt: "Guest Squad pricing — hotel and vacation rental support",
            about: { "@id": `${SITE.url}/#organization` },
            audienceTypes: [
              "Independent Hotel",
              "Boutique Hotel",
              "Vacation Rental Operator",
              "Short-Term Rental Operator",
              "Serviced Apartment",
            ],
            mentions: [
              { "@type": "Thing", name: "Hotel Answering Service" },
              { "@type": "Thing", name: "Central Reservations Desk" },
              { "@type": "Thing", name: "Vacation Rental Answering Service" },
            ],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Pricing
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Guest Support Pricing for Hotels &amp; Vacation Rentals
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Explore starting prices for hotel answering, central reservations, and vacation rental
            answering. Choose the support your operation needs, then request a quotation based on
            your coverage hours, channels, and workload.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing-cards"
              className="inline-flex items-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink/90"
            >
              View Starting Prices
            </a>
            <CoverageReviewButton variant="outline" size="default" ctaLocation="pricing_hero">
              Discuss Your Requirements
            </CoverageReviewButton>
          </div>
        </div>
      </section>

      {/* ── 2. PRICING CARDS ────────────────────────────────────────────────── */}
      <section id="pricing-cards" className="border-b border-line bg-surface">
        <div className="container py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className={`flex flex-col rounded-lg border bg-paper ${
                  svc.featured ? "border-gold/40 shadow-sm" : "border-line"
                }`}
              >
                <div className="p-7">
                  {/* Service name */}
                  <Link
                    href={svc.href}
                    className="text-base font-semibold text-ink hover:text-gold-dark hover:underline underline-offset-4"
                  >
                    {svc.name}
                  </Link>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-ink">
                      {svc.price}*
                    </span>
                    <span className="text-sm text-ink-muted">{svc.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted italic">*Subject to scope confirmation</p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{svc.description}</p>

                  {/* Included */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                      Included at this starting price
                    </p>
                    <ul className="mt-3 space-y-2">
                      {svc.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* CTA */}
                <div className="mt-auto border-t border-line p-5">
                  <Link
                    href={svc.ctaHref}
                    className={`block w-full rounded-md px-4 py-2.5 text-center text-sm font-medium transition ${
                      svc.featured
                        ? "bg-gold text-white hover:bg-gold-dark"
                        : "bg-ink text-paper hover:bg-ink/90"
                    }`}
                  >
                    {svc.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-8 rounded-lg border border-line bg-paper px-6 py-4">
            <p className="text-xs leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">* Starting prices</span> apply to the
              shared-support configurations shown above. Your final monthly fee is confirmed in the
              scoped proposal and depends on agreed coverage hours, channels, workload allowance,
              and handling requirements. Work outside the agreed allowance is charged at the rate
              stated in your proposal.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT DETERMINES YOUR PRICE ───────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Pricing factors
          </p>
          <h2 className="max-w-xl text-2xl font-medium text-ink">
            What determines your monthly price?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PRICING_FACTORS.map((f) => (
              <div key={f.title} className="rounded-lg border border-line bg-surface p-6">
                <p className="text-sm font-semibold text-ink">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW THE ENGAGEMENT WORKS ─────────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <div className="container py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            How it works
          </p>
          <h2 className="max-w-xl text-2xl font-medium text-ink">How the engagement works.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT_STEPS.map((step) => (
              <div key={step.n} className="rounded-lg border border-line bg-paper p-6">
                <span className="block text-2xl font-semibold tabular-nums text-gold-dark/30">
                  {step.n}
                </span>
                <p className="mt-3 text-sm font-medium text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQS + STICKY CTA ────────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Questions
              </p>
              <h2 className="text-2xl font-medium text-ink">Pricing questions, answered clearly.</h2>
              <div className="mt-8">
                <FaqAccordion items={FAQS} />
              </div>
            </div>

            {/* Sticky review card */}
            <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">
                Get a quote
              </p>
              <h3 className="text-xl font-medium text-ink mb-3">
                Discuss your requirements
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft mb-5">
                Tell us your property type, required channels, coverage hours, and estimated
                workload. We will scope the right service and send a detailed proposal.
              </p>
              <CoverageReviewButton variant="gold" size="default" ctaLocation="pricing_sticky_cta">
                Book a Coverage Review
              </CoverageReviewButton>
              <p className="mt-5 text-xs text-ink-muted">
                Useful for the conversation: property type, current coverage hours, typical
                interaction volume, and any systems your team uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <div className="container py-14">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Get started
            </p>
            <h2 className="text-2xl font-medium text-ink">
              Get a quotation scoped to your property.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Tell us your property type, required channels, coverage hours, and estimated workload.
              We will scope the right service and send a detailed proposal.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="pricing_footer_cta">
                Discuss Your Requirements
              </CoverageReviewButton>
              <Link
                href="/services"
                className="inline-flex items-center rounded-md border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition hover:border-gold-dark hover:text-gold-dark"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
