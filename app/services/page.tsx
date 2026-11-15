import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, servicesHubSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Hotel & Vacation Rental Guest Operations Services",
  description:
    "Live hospitality coverage for hotels, hotel groups and vacation rental operators. Reservation calls, OTA inboxes and guest communication handled by trained people.",
  path: "/services",
});

const MAIN_SERVICES = [
  {
    slug: "hotel-answering-service",
    eyebrow: "For independent hotels",
    title: "Hotel Answering Service",
    description:
      "Live phone coverage for independent hotels, with guest messaging and OTA inbox support included. Reservation inquiries, guest calls, Booking.com, Expedia and direct messages handled by hospitality-trained agents on your existing number.",
  },
  {
    slug: "central-reservations",
    eyebrow: "For hotel groups",
    title: "Central Reservations",
    description:
      "A coordinated reservations desk for hotel groups and multi-property portfolios. Each property handled to its own rates, policies and escalation contacts — one arrangement across your whole portfolio.",
  },
  {
    slug: "vacation-rental-answering-service",
    eyebrow: "For STR operators",
    title: "Vacation Rental Answering Service",
    description:
      "Guest communication and OTA inbox management for vacation rental portfolios. Listing-specific handling across Airbnb, Vrbo and direct channels, with cleaner coordination and access support included.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesHubSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="border-b border-line bg-paper">
        <div className="container py-14 md:py-18">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Services
          </p>
          <h1 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Hospitality coverage for hotels and rental operators
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Three service arrangements, each built around a specific type of operation. All include
            trained people, your property brief, and reporting at the agreed cadence.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="container py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {MAIN_SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex flex-col rounded-lg border border-line bg-paper p-7 transition-shadow hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  {svc.eyebrow}
                </p>
                <h2 className="mt-2 text-lg font-medium text-ink">{svc.title}</h2>
                <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">
                  {svc.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-gold-dark group-hover:text-gold">
                  Learn more
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14 md:py-18">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">How It Works</p>
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.1] tracking-tight text-ink">
            Every service starts with a property brief and an agreed scope.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            Before any agent handles a guest interaction, we build a property brief with you: your rates, policies, PMS access, escalation contacts, and how you want guests spoken to. Agents work from that brief from day one — not from a generic call script shared across unrelated properties.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Coverage hours, included channels, and escalation rules are agreed before the arrangement starts. What agents can confirm, modify, or decline is defined in advance. Anything outside that scope is routed to your team immediately with full context — no guessing, no improvising.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            The initial pilot has its own agreed scope, duration and fee. Ongoing arrangements after the pilot are month-to-month with 30 days&rsquo; notice, unless otherwise agreed in writing.
          </p>
        </div>
      </section>

      {/* Add-on and specialist services */}
      <section className="border-b border-line bg-surface">
        <div className="container py-14 md:py-18">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Specialist Services</p>
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.1] tracking-tight text-ink">
            Add coverage where your operation has gaps.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            The three arrangements above cover most properties. For specific coverage needs, Guest Squad also offers standalone specialist services that can be added individually or combined.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reservation Support",
                description: "Booking calls and direct reservation inquiries handled inside your PMS, with approved rates and policies confirmed before quoting.",
                href: "/services/reservation-support",
              },
              {
                title: "Guest Messaging",
                description: "SMS, WhatsApp, and email messages answered across the full stay journey — pre-arrival to post-stay — by a trained person using your tone and templates.",
                href: "/services/guest-messaging",
              },
              {
                title: "OTA Inbox Management",
                description: "Booking.com, Expedia, and Airbnb message threads monitored and answered around the clock to keep response scores strong and pre-booking inquiries converting.",
                href: "/services/ota-inbox-management",
              },
              {
                title: "After-Hours Support",
                description: "Overnight and weekend front desk coverage for properties without a 24-hour team. Late check-ins, access queries, and emergencies handled or escalated correctly.",
                href: "/services/after-hours-support",
              },
              {
                title: "Back-Office Operations",
                description: "Night audit, OTA reconciliation, and guest billing support delivered daily to your finance team — without adding a dedicated back-office hire.",
                href: "/services/back-office-operations",
              },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-base font-medium text-ink">{svc.title}</h3>
                <p className="mt-2 grow text-sm leading-relaxed text-ink-soft">{svc.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold-dark group-hover:text-gold">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="border-b border-line bg-paper">
        <div className="container py-12 md:py-14">
          <p className="text-sm text-ink-soft">
            Not sure which service fits your property?{" "}
            <Link href="/resources" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Explore our comparisons
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              book a coverage review
            </Link>{" "}
            to discuss the right service and scope for your operation.
          </p>
        </div>
      </section>

      <CtaSection
        title="Ready to book a coverage review?"
        description="Tell us your property, coverage hours and channels. We'll walk through exactly what your operation needs."
      />
    </>
  );
}
