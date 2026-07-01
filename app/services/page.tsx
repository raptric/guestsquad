import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Differentiator } from "@/components/site/differentiator";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { SERVICES } from "@/lib/site-data";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Operations Services",
  description:
    "Reservation support, guest messaging, OTA inbox management, after-hours coverage, back-office operations, and Airbnb guest support, all under one guest operations partner.",
  path: "/services",
});

const SERVICE_FAQS = [
  {
    q: "Which GuestSquad service should my property start with?",
    a: "Most properties start with whichever gap is costing them the most right now. After-hours coverage is the most common starting point for hotels that are losing overnight calls. OTA inbox management is the fastest win for properties whose response time on Booking.com or Expedia is dragging down their ranking.",
  },
  {
    q: "What is the difference between hotel answering, reservation support, and after-hours support?",
    a: "Hotel Answering Service is the broadest call-answering layer: every inbound call, any hour. Reservation Support focuses specifically on booking calls, quotes, and modifications. After-Hours Support covers the overnight and weekend window when your team is not on-site. Many clients use all three together for complete coverage.",
  },
  {
    q: "Can we combine multiple services into one coverage plan?",
    a: "Yes. Most clients cover more than one gap: a common combination is after-hours calls plus OTA inbox management, or reservation support plus guest messaging. Plans are built around your actual channels and hours, not a fixed bundle.",
  },
  {
    q: "Do you cover both calls and messages?",
    a: "Yes. GuestSquad covers phone calls, SMS, WhatsApp, email, OTA inboxes (Booking.com, Expedia, Airbnb), and in-app messaging from supported PMS or guest-messaging platforms.",
  },
  {
    q: "How does GuestSquad escalate issues to our team?",
    a: "Escalation rules are agreed with your team during onboarding. You specify what can be resolved directly, what should be logged for morning review, and what triggers an immediate notification to your on-call contact. Nothing is escalated without the context your team needs to act.",
  },
];

const NEED_TABLE = [
  { need: "Missed calls during busy hours", service: "Hotel Answering Service", href: "/services/hotel-answering-service" },
  { need: "Booking inquiries not answered fast enough", service: "Reservation Support", href: "/services/reservation-support" },
  { need: "Overnight or weekend gaps", service: "After-Hours Support", href: "/services/after-hours-support" },
  { need: "Slow Booking.com or Expedia replies", service: "OTA Inbox Management", href: "/services/ota-inbox-management" },
  { need: "SMS, WhatsApp, or email guest messages", service: "Guest Messaging", href: "/services/guest-messaging" },
  { need: "Airbnb or Vrbo guest communication", service: "Airbnb Guest Support", href: "/services/airbnb-guest-support" },
  { need: "Night audit or OTA payout issues", service: "Back Office Operations", href: "/services/back-office-operations" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqSchema(SERVICE_FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <PageHero
        eyebrow="Services"
        title="Guest operations support, built around how hotels actually run."
        description="Choose full coverage across every channel, or fill the specific gaps your team cannot currently staff."
      />

      {/* Direct answer block */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            GuestSquad covers the full range of guest-facing operations for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. Services can be combined to fill specific gaps or bundled for complete coverage. Every plan starts with a conversation about your property, not a fixed package.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Not sure which service fits?{" "}
          <Link href="/resources" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Read our comparisons
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            view pricing
          </Link>
          .
        </p>
      </Section>

      {/* Service finder table */}
      <Section surface>
        <SectionHeading
          eyebrow="Where to Start"
          title="Match your gap to the right service."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Your current gap
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Best starting service
                </th>
              </tr>
            </thead>
            <tbody>
              {NEED_TABLE.map((row, i) => (
                <tr key={row.need} className={i < NEED_TABLE.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-6 py-4 text-ink-soft">{row.need}</td>
                  <td className="px-6 py-4">
                    <Link href={row.href} className="font-medium text-gold-dark underline-offset-4 hover:underline">
                      {row.service}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The Difference"
          title="Not a generic call center."
          description="Most outsourced support is built for volume, not hospitality. We built ours the other way around."
        />
        <div className="mt-12">
          <Differentiator />
        </div>
      </Section>

      {/* Service finder FAQ */}
      <Section surface>
        <SectionHeading eyebrow="Questions" title="Choosing the right coverage." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SERVICE_FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
