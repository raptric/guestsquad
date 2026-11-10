import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Guest Squad",
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
      "Live phone coverage for independent hotels and boutique properties. Reservation inquiries, guest calls and OTA inbox management handled by hospitality-trained agents on your existing number.",
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
            trained people, your property brief, and weekly reporting.
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
    </>
  );
}
