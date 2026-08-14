import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { DownloadGate } from "@/components/site/download-gate";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";
import { INSIGHTS } from "@/lib/insights-content";
import { Calculator, FileText, ClipboardList, BarChart2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service Guides & Comparisons",
  description:
    "Guides and comparisons on hotel answering services, AI voice agents, and call centers, to help you evaluate what's actually right for your property.",
  path: "/resources",
});

const RESOURCES_FAQS = [
  {
    q: "What Guest Squad resources should a hotel start with?",
    a: "Most hotels should start with the Missed Booking Revenue Calculator to estimate revenue risk, then use the Coverage Gap Assessment or After-Hours Checklist to identify which calls, messages, and OTA inboxes need coverage first.",
  },
  {
    q: "Which resource helps compare human support with AI voice agents?",
    a: "The Hotel Answering Service vs AI Voice guide compares human guest support with AI voice tools for reservation calls, guest questions, escalations, and after-hours situations where judgment matters.",
  },
  {
    q: "Which resource helps with Booking.com and Expedia messages?",
    a: "The Booking.com and Expedia Message Support Checklist helps properties define OTA response standards, common reply types, escalation rules, and inbox coverage gaps.",
  },
  {
    q: "Can these resources help before booking a coverage review?",
    a: "Yes. Guest Squad resources are designed to help hospitality teams understand missed revenue, after-hours gaps, OTA inbox standards, guest messaging SOPs, and reporting expectations before booking a coverage review.",
  },
  {
    q: "Are Guest Squad templates free to use?",
    a: "Guest Squad provides free tools, checklists, and templates to help hotels and property operators assess guest communication gaps. Some downloadable assets may require a short form before access.",
  },
];

const FEATURED_INSIGHT_SLUG = "ota-ranking-response-time";

export default function ResourcesPage() {
  const featuredInsight = INSIGHTS.find((i) => i.slug === FEATURED_INSIGHT_SLUG)!;
  const secondaryInsights = INSIGHTS.filter((i) => i.slug !== FEATURED_INSIGHT_SLUG).slice(0, 4);

  const featuredComparison = RESOURCES.find((r) => r.slug === "hotel-answering-service-vs-call-center")!;
  const supportingComparisons = RESOURCES.filter((r) =>
    ["hotel-answering-service-vs-ai-voice", "hotel-answering-service-cost", "hotel-front-desk-overflow-support"].includes(r.slug)
  );

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hotel Answering Service Guides & Comparisons | Guest Squad",
            description: "Guides and comparisons on hotel answering services, AI voice agents, and call centers, to help you evaluate what's actually right for your property.",
            path: "/resources",
            pageType: "CollectionPage",
            primaryImageUrl: "https://guestsquad.com/brand-assets/og-image.jpg",
            primaryImageAlt: "Guest Squad resources — hotel answering service guides and comparisons",
            about: { "@id": "https://guestsquad.com/#organization" },
            audienceTypes: ["Independent Hotel","Boutique Hotel","Inn","Resort","Serviced Apartment","Aparthotel","Airbnb Host","Vrbo Host","Short-Term Rental Operator","Vacation Rental Operator","Vacation Rental Property Manager"],
            mentions: [
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              { "@type": "Thing", "name": "Hotel Answering Service" },
              { "@type": "Thing", "name": "Hotel Guest Operations" },
              { "@type": "Thing", "name": "After-Hours Hotel Support" },
              { "@type": "Thing", "name": "OTA Inbox Management" },
              { "@type": "Thing", "name": "Hotel Front Desk Coverage" },
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/resources#itemlist`,
            name: "Guest Squad Hotel Resources",
            url: `${SITE.url}/resources`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Missed Booking Revenue Calculator", url: `${SITE.url}/resources/missed-booking-calculator` },
              { "@type": "ListItem", position: 2, name: "Insights — Hotel Operations Analysis", url: `${SITE.url}/resources/insights` },
              ...RESOURCES.map((r, i) => ({
                "@type": "ListItem",
                position: i + 3,
                name: r.title,
                url: `${SITE.url}/resources/${r.slug}`,
              })),
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/resources#insights-itemlist`,
            name: "Guest Squad Insights — Hotel Operations Analysis",
            description: "Analysis and operational insight for independent hoteliers — built around OTA rankings, guest response time, and revenue gaps.",
            url: `${SITE.url}/resources/insights`,
            numberOfItems: INSIGHTS.length,
            itemListElement: INSIGHTS.map((insight, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/resources/insights/${insight.slug}`,
              item: {
                "@type": "Article",
                "@id": `${SITE.url}/resources/insights/${insight.slug}#article`,
                name: insight.title,
                description: insight.description,
                datePublished: `${insight.datePublished}T00:00:00+00:00`,
              },
            })),
          },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]),
          faqSchema(RESOURCES_FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />

      {/* 1 — Hero */}
      <PageHero
        eyebrow="Resources"
        title="Hotel Answering Service Guides, Comparisons, and Checklists"
        description="Practical tools, templates, and guides for hospitality operators evaluating guest support options."
      />

      {/* 2 — Quick path selector */}
      <div className="border-b border-line bg-[#F4F3F1]">
        <div className="container py-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Start with the path that matches what you need right now
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                href: "#tools",
                label: "Estimate missed revenue",
                description: "See how much unanswered calls and messages are costing your property each month.",
                icon: <Calculator className="h-4 w-4 text-gold-dark" />,
              },
              {
                href: "#tools",
                label: "Find your coverage gaps",
                description: "Map uncovered hours, unmanned channels, and escalation blind spots.",
                icon: <ClipboardList className="h-4 w-4 text-gold-dark" />,
              },
              {
                href: "#comparisons",
                label: "Compare support options",
                description: "See how human answering services compare to AI voice agents and call centers.",
                icon: <FileText className="h-4 w-4 text-gold-dark" />,
              },
            ].map((path) => (
              <a
                key={path.label}
                href={path.href}
                className="group flex flex-col gap-2 rounded-xl border border-[#E5E0D8] bg-paper p-5 transition-colors hover:border-gold/50 hover:bg-gold/5"
              >
                <div className="flex items-center justify-between">
                  {path.icon}
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold-dark opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-sm font-semibold text-ink">{path.label}</p>
                <p className="text-xs leading-relaxed text-ink-soft">{path.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3 — Tools */}
      <Section id="tools">
        <SectionHeading
          eyebrow="Start Here"
          title="Start by finding the gap."
          description="These tools give you the numbers before you make any decisions."
        />

        {/* Featured: Calculator */}
        <div className="mt-8">
          <Link
            href="/resources/missed-booking-calculator"
            className="group flex flex-col gap-5 rounded-xl border border-gold/30 bg-paper p-7 transition-colors hover:border-gold/60 sm:flex-row sm:items-start"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/5">
              <Calculator className="h-6 w-6 text-gold-dark" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">Featured Tool</span>
              <h3 className="mt-1.5 text-base font-semibold text-ink transition-colors group-hover:text-gold-dark">
                Missed Booking Revenue Calculator
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                Enter your missed call volume, average booking value, and conversion rate. The calculator shows the monthly and annual revenue impact and exactly how many recovered bookings it takes to break even on coverage.
              </p>
              <p className="mt-4 text-xs font-semibold text-gold-dark group-hover:text-gold">
                Open calculator →
              </p>
            </div>
          </Link>
        </div>

        {/* Secondary: Gap Assessment + Sample Report */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface">
                <ClipboardList className="h-4 w-4 text-gold-dark" />
              </div>
              <span className="rounded bg-surface px-2 py-1 text-xs font-medium text-ink-muted">Assessment</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">Guest Coverage Gap Assessment</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">
              The calculator shows the cost. This shows the cause — uncovered hours, unmanned channels, and escalation blind spots.
            </p>
            <div className="mt-5">
              <DownloadGate
                asset="coverage-gap-assessment"
                pdfHref="/downloads/coverage-gap-assessment.pdf"
                ctaLabel="Download Gap Assessment"
                block
              />
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface">
                <BarChart2 className="h-4 w-4 text-gold-dark" />
              </div>
              <span className="rounded bg-surface px-2 py-1 text-xs font-medium text-ink-muted">Sample Report</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">Sample Weekly Guest Operations Report</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">
              See the exact reporting format before committing — calls handled, OTA replies, escalations flagged, and weekly recommendations.
            </p>
            <div className="mt-5">
              <DownloadGate
                asset="sample-weekly-report"
                pdfHref="/downloads/sample-weekly-report.pdf"
                ctaLabel="Download Sample Report"
                block
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 4 — Templates */}
      <Section className="bg-[#F4F3F1]">
        <SectionHeading
          eyebrow="Process Resources"
          title="Use these to fix what you find."
          description="Once you know where the gaps are, these templates help you build or audit your guest operations."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: <FileText className="h-4 w-4 text-gold-dark" />,
              tag: "SOP Template",
              title: "Hotel Guest Messaging SOP Template",
              body: "Channels, response-time targets, brand voice, scenario handling, escalation matrix, and logging process.",
              asset: "guest-messaging-sop",
              pdf: "/downloads/guest-messaging-sop.pdf",
              cta: "Download PDF",
            },
            {
              icon: <ClipboardList className="h-4 w-4 text-gold-dark" />,
              tag: "Checklist",
              title: "After-Hours Guest Coverage Checklist",
              body: "Audit overnight and weekend coverage: call handling, emergency escalation, and morning handoff.",
              asset: "after-hours-checklist",
              pdf: "/downloads/after-hours-checklist.pdf",
              cta: "Download PDF",
            },
            {
              icon: <ClipboardList className="h-4 w-4 text-gold-dark" />,
              tag: "Checklist",
              title: "OTA Inbox Response Checklist",
              body: "Standards for Booking.com, Expedia, and Airbnb inboxes: pre-booking, complaints, and escalation triggers.",
              asset: "ota-inbox-response-checklist",
              pdf: "/downloads/ota-inbox-response-checklist.pdf",
              cta: "Download PDF",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg border border-[#E5E0D8] bg-paper p-6"
            >
              <div className="flex items-center justify-between">
                {item.icon}
                <span className="rounded bg-[#F4F3F1] px-2 py-1 text-xs font-medium text-ink-muted">{item.tag}</span>
              </div>
              <h3 className="mt-4 text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <div className="mt-5">
                <DownloadGate asset={item.asset} pdfHref={item.pdf} ctaLabel={item.cta} block />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 — Comparisons */}
      <Section id="comparisons">
        <SectionHeading
          eyebrow="Evaluation Guides"
          title="Compare your support options before you choose."
          description="Straight comparisons to help you evaluate guest support options without a sales call."
        />

        {/* Featured comparison */}
        <div className="mt-8">
          <Link
            href={`/resources/${featuredComparison.slug}`}
            className="group flex flex-col gap-4 rounded-xl border border-line bg-paper p-7 transition-colors hover:border-gold/50 sm:flex-row sm:items-start"
          >
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">Most Read</span>
              <h3 className="mt-1.5 text-base font-semibold text-ink transition-colors group-hover:text-gold-dark">
                {featuredComparison.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{featuredComparison.description}</p>
              <p className="mt-4 text-xs font-semibold text-gold-dark group-hover:text-gold">
                Read the comparison →
              </p>
            </div>
          </Link>
        </div>

        {/* Supporting comparisons */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {supportingComparisons.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-5 transition-colors hover:border-gold/50"
            >
              <div>
                <h3 className="text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{r.description}</p>
              </div>
              <p className="mt-4 flex items-center gap-1 text-xs font-medium text-gold-dark group-hover:text-gold">
                Read <ArrowUpRight className="h-3 w-3" />
              </p>
            </Link>
          ))}
        </div>

        {/* Compact additional link */}
        <div className="mt-4">
          <Link
            href="/resources/booking-com-message-support"
            className="group flex items-center justify-between rounded-lg border border-line bg-surface px-5 py-3.5 transition-colors hover:border-gold/50"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Checklist</span>
              <p className="mt-0.5 text-sm font-medium text-ink group-hover:text-gold-dark">
                Booking.com and Expedia Message Support Checklist
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-dark" />
          </Link>
        </div>
      </Section>

      {/* 6 — Insights */}
      <Section id="insights" className="bg-[#F4F3F1]">
        <SectionHeading
          eyebrow="Insights"
          title="What the data says about hotel operations."
          description="Analysis and operational insight for independent hoteliers — built around OTA rankings, guest response time, and revenue gaps."
        />

        {/* Featured insight */}
        <div className="mt-8">
          <Link
            href={`/resources/insights/${featuredInsight.slug}`}
            className="group flex flex-col gap-3 rounded-xl border border-[#E5E0D8] bg-paper p-7 transition-colors hover:border-gold/50 sm:flex-row sm:items-start sm:gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">{featuredInsight.category}</span>
                <span className="text-xs text-ink-muted">{featuredInsight.readTime}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-ink transition-colors group-hover:text-gold-dark">
                {featuredInsight.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{featuredInsight.description}</p>
              <p className="mt-4 text-xs font-semibold text-gold-dark group-hover:text-gold">
                Read article →
              </p>
            </div>
          </Link>
        </div>

        {/* Secondary insights grid */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryInsights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/resources/insights/${insight.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-[#E5E0D8] bg-paper p-5 transition-colors hover:border-gold/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">{insight.category}</span>
                  <span className="text-xs text-ink-muted">{insight.readTime}</span>
                </div>
                <h3 className="mt-2.5 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                  {insight.title}
                </h3>
              </div>
              <p className="mt-4 flex items-center gap-1 text-xs font-medium text-gold-dark group-hover:text-gold">
                Read <ArrowUpRight className="h-3 w-3" />
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink-soft">
          <Link href="/resources/insights" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            View all {INSIGHTS.length} insights →
          </Link>
        </p>
      </Section>

      {/* 7 — FAQ */}
      <Section className="bg-[#F7F5F2]">
        <SectionHeading eyebrow="Common Questions" title="Questions about these resources." />
        <div className="mt-8">
          <FaqAccordion items={RESOURCES_FAQS} defaultOpenCount={1} />
        </div>
      </Section>

      {/* 8 — Pre-CTA bridge */}
      <div className="border-t border-line bg-paper">
        <div className="container py-10 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ink-soft">
            If you&apos;ve identified a revenue gap, process gap, or after-hours weakness, the next step is to review your property setup with us.
          </p>
        </div>
      </div>

      <CtaSection
        title="Ready to book a coverage review?"
        description="Tell us your volume and channels and we will walk through exactly what coverage your property needs."
      />
    </>
  );
}
