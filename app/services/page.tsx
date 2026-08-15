import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServiceCard } from "@/components/site/service-card";
import { Differentiator } from "@/components/site/differentiator";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { SERVICES } from "@/lib/site-data";
import { INSIGHTS } from "@/lib/insights-content";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Operations Services",
  description:
    "Reservation calls, guest messaging, OTA inbox management, after-hours coverage, and back-office operations — all under one guest operations partner.",
  path: "/services",
});

const SERVICE_FAQS = [
  {
    q: "Which Guest Squad service should my property start with?",
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
    a: "Yes. Guest Squad covers phone calls, SMS, WhatsApp, email, OTA inboxes (Booking.com, Expedia, Airbnb), and in-app messaging from supported PMS or guest-messaging platforms.",
  },
  {
    q: "How does Guest Squad escalate issues to our team?",
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
          webPageSchema({
            name: "Hotel Guest Operations Services | Guest Squad",
            description: "Reservation calls, guest messaging, OTA inbox management, after-hours coverage, and back-office operations — all under one guest operations partner.",
            path: "/services",
            pageType: "CollectionPage",
            primaryImageUrl: "https://guestsquad.com/brand-assets/og-image.jpg",
            primaryImageAlt: "Guest Squad — 24/7 hotel guest operations services",
            about: { "@id": "https://guestsquad.com/#organization" },
            audienceTypes: ["Independent Hotel","Boutique Hotel","Inn","Resort","Serviced Apartment","Aparthotel","Airbnb Host","Vrbo Host","Short-Term Rental Operator","Vacation Rental Operator","Vacation Rental Property Manager"],
            mentions: [
              // OTAs — named in NEED_TABLE and FAQ answers
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              { "@type": "Organization", "name": "Vrbo" },
              // Accommodation types — named in body text
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              { "@type": "Accommodation", "name": "Serviced Apartment" },
              { "@type": "Accommodation", "name": "Vacation Rental" },
              { "@type": "Accommodation", "name": "Resort" },
              // Service concepts — named in service cards, headings, and FAQ answers
              { "@type": "Thing", "name": "Hotel Answering Service" },
              { "@type": "Thing", "name": "Hotel Guest Operations" },
              { "@type": "Thing", "name": "OTA Inbox Management" },
              { "@type": "Thing", "name": "After-Hours Hotel Support" },
              { "@type": "Thing", "name": "Hotel Front Desk Coverage" },
              // Insight articles — featured in the "From the Insights" section below
              { "@type": "Article", "@id": "https://guestsquad.com/resources/insights/ota-ranking-response-time#article" },
              { "@type": "Article", "@id": "https://guestsquad.com/resources/insights/why-hotels-miss-bookings-after-hours#article" },
              { "@type": "Article", "@id": "https://guestsquad.com/resources/insights/when-to-outsource-guest-communication#article" },
            ],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqSchema(SERVICE_FAQS),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/services#itemlist`,
            name: "Guest Squad Hotel Guest Operations Services",
            url: `${SITE.url}/services`,
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE.url}/services/${s.slug}`,
              description: s.description,
            })),
          },
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
            Guest Squad covers reservation calls, OTA inbox management, guest messaging, after-hours hotel support, and back-office operations — the channels where independent hotels, boutique properties, and short-term rental operators most commonly lose bookings or fall behind on response time. Each service runs on your rates, policies, and escalation contacts. Start with the gap that is costing you most right now and add coverage as your operation grows.
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

      {/* Service finder — decision rail */}
      <Section surface>
        <SectionHeading
          eyebrow="Where to Start"
          title="Match your gap to the right service."
        />
        <style>{`
          @keyframes row-in {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .need-row { animation: row-in 200ms ease both; }
          .need-row:hover .need-connector { opacity: 1; color: var(--color-gold-dark, #b08d57); }
          .need-row:hover .need-service   { color: var(--color-gold-dark, #b08d57); transform: translateX(3px); }
          .need-row:hover .need-gap       { color: var(--color-ink, #1a1a1a); }
        `}</style>
        <div className="mt-10 overflow-hidden rounded-xl border border-line shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-line bg-surface px-6 py-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Your current gap</span>
            <span className="w-8" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Best starting service</span>
          </div>
          {/* Rows */}
          {NEED_TABLE.map((row, i) => (
            <Link
              key={row.need}
              href={row.href}
              className={`need-row grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 transition-colors duration-150 hover:bg-gold/5${i < NEED_TABLE.length - 1 ? " border-b border-line" : ""}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="text-sm text-ink-soft">{row.need}</span>
              <ArrowRight className="need-connector h-3.5 w-3.5 shrink-0 text-ink-muted opacity-50 transition-all duration-150" />
              <span className="need-service text-sm font-semibold text-gold-dark transition-all duration-150">{row.service}</span>
            </Link>
          ))}
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

      {/* Useful resources */}
      <Section surface>
        <SectionHeading eyebrow="Useful Resources" title="Practical guides before you decide." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/resources/booking-com-message-support"
            className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Checklist</p>
              <h3 className="mt-2 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                Booking.com and Expedia Message Support Checklist
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Response-time targets, pre-booking standards, complaint handling, and escalation rules for OTA inboxes.
              </p>
            </div>
            <p className="mt-4 text-xs font-medium text-gold-dark">Read checklist →</p>
          </Link>
          <Link
            href="/resources/hotel-guest-messaging-sop-template"
            className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Template</p>
              <h3 className="mt-2 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                Hotel Guest Messaging SOP Template
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Document your channels, response targets, brand voice, and escalation rules before handing messaging off to any team.
              </p>
            </div>
            <p className="mt-4 text-xs font-medium text-gold-dark">Read template →</p>
          </Link>
        </div>
      </Section>

      {/* Insights hub link */}
      <Section>
        <SectionHeading eyebrow="From the Insights" title="Research behind these services." />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {INSIGHTS.filter((i) => ["ota-ranking-response-time", "why-hotels-miss-bookings-after-hours", "when-to-outsource-guest-communication"].includes(i.slug))
            .sort((a, b) => ["ota-ranking-response-time", "why-hotels-miss-bookings-after-hours", "when-to-outsource-guest-communication"].indexOf(a.slug) - ["ota-ranking-response-time", "why-hotels-miss-bookings-after-hours", "when-to-outsource-guest-communication"].indexOf(b.slug))
            .map((insight) => (
              <Link
                key={insight.slug}
                href={`/resources/insights/${insight.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{insight.category}</p>
                  <h3 className="text-sm font-medium text-ink">{insight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{insight.description}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-gold-dark group-hover:underline">Read insight →</p>
              </Link>
            ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-soft">
          <Link href="/resources/insights" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Browse all insights →
          </Link>
        </p>
      </Section>

      {/* Service finder FAQ */}
      <Section className="bg-[#F7F5F2]">
        <SectionHeading eyebrow="Questions" title="Choosing the right coverage." />
        <div className="mt-8">
          <FaqAccordion items={SERVICE_FAQS} />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
