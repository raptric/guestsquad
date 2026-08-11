import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { INSIGHTS } from "@/lib/insights-content";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Operations Insights",
  description:
    "Data-backed insights on hotel OTA rankings, guest response time, revenue gaps, and the operational decisions that affect how properties perform on Booking.com, Expedia, and Airbnb.",
  path: "/resources/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hotel Operations Insights | Guest Squad",
            description:
              "Data-backed insights on hotel OTA rankings, guest response time, revenue gaps, and the operational decisions that affect how properties perform on Booking.com, Expedia, and Airbnb.",
            path: "/resources/insights",
            pageType: "CollectionPage",
            primaryImageUrl: `${SITE.url}/brand-assets/og-image.jpg`,
            primaryImageAlt: "Guest Squad hotel operations insights",
            about: { "@id": `${SITE.url}/#organization` },
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/resources/insights#itemlist`,
            name: "Guest Squad Hotel Operations Insights",
            url: `${SITE.url}/resources/insights`,
            itemListElement: INSIGHTS.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: a.title,
              url: `${SITE.url}/resources/insights/${a.slug}`,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Insights", path: "/resources/insights" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Insights", path: "/resources/insights" },
        ]}
      />

      <PageHero
        eyebrow="Insights"
        title="What the data says about hotel operations."
        description="Analysis and operational insight for independent hoteliers — built around the patterns we see across OTA rankings, guest response time, and revenue gaps."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/insights/${article.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    {article.category}
                  </span>
                  <span className="text-xs text-ink-muted">{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {article.description}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-ink-soft group-hover:text-gold-dark">
                Read article
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Related Resources"
          title="Guides and tools for your next step."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/resources/booking-com-message-support",
              label: "Booking.com & Expedia Message Support Checklist",
              body: "Response-time targets, pre-booking standards, and escalation rules for OTA inboxes.",
              tag: "Checklist",
            },
            {
              href: "/resources/missed-booking-calculator",
              label: "Missed Booking Revenue Calculator",
              body: "Estimate how much unanswered calls and messages cost your property each month.",
              tag: "Calculator",
            },
            {
              href: "/services/ota-inbox-management",
              label: "OTA Inbox Management",
              body: "24/7 coverage for Booking.com, Expedia, and Airbnb inboxes — so your reply score stays healthy.",
              tag: "Service",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
              <p className="mt-4 text-xs font-medium text-gold-dark group-hover:text-gold">
                View →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want to see how your OTA response time stacks up?"
        description="We review your Booking.com and Expedia inbox metrics as part of every coverage assessment."
      />
    </>
  );
}
