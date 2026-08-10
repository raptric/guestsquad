import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { DownloadGate } from "@/components/site/download-gate";
import { buildMetadata, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";
import { Calculator, FileText, ClipboardList, BarChart2, ArrowRight } from "lucide-react";

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

export default function ResourcesPage() {
  const buyingGuides = RESOURCES;

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
              // OTAs — named in FAQ answers and checklist titles
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              // Accommodation types — named in resource card descriptions
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              // Service concepts — named in headings and FAQ answers
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
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]),
          faqSchema(RESOURCES_FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />

      <PageHero
        eyebrow="Resources"
        title="Hotel Answering Service Guides, Comparisons, and Checklists"
        description="Practical tools, templates, and guides for hospitality operators evaluating guest support options."
      />

      {/* Journey strip */}
      <div className="border-b border-line bg-surface">
        <div className="container py-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
            {[
              "Calculate your revenue gap",
              "Identify your coverage gaps",
              "Get the right templates",
              "See what Guest Squad delivers",
              "Book a coverage review",
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-dark text-[10px] font-semibold text-paper">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </span>
                {i < arr.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-ink-muted/50" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Step 1 — Calculator */}
      <Section>
        <SectionHeading
          eyebrow="Step 1"
          title="Calculate how much unanswered calls are costing you."
        />
        <div className="mt-8">
          <Link
            href="/resources/missed-booking-calculator"
            className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold-dark sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                <Calculator className="h-5 w-5 text-gold-dark" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                  Missed Booking Revenue Calculator
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Enter your missed call volume, average booking value, and conversion rate. The calculator shows the monthly and annual revenue impact and how many recovered bookings it takes to break even on coverage.
                </p>
              </div>
            </div>
            <p className="mt-4 shrink-0 text-xs font-medium text-gold-dark sm:ml-8 sm:mt-0">
              Open calculator →
            </p>
          </Link>
        </div>
      </Section>

      {/* Step 2 — Gap Assessment */}
      <Section surface>
        <SectionHeading
          eyebrow="Step 2"
          title="Find out exactly where your coverage gaps are."
        />
        <div className="mt-8 max-w-2xl">
          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
                <ClipboardList className="h-5 w-5 text-gold-dark" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-ink">Guest Coverage Gap Assessment</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  The calculator shows the cost. This assessment shows the cause — uncovered hours, unmanned channels, and escalation blind spots across your property.
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
            </div>
          </div>
        </div>
      </Section>

      {/* Step 3 — Templates and Checklists */}
      <Section>
        <SectionHeading
          eyebrow="Step 3"
          title="Get the templates to fix what you find."
          description="Use these to build or audit your guest operations before handing anything off."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <FileText className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">SOP Template</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">Hotel Guest Messaging SOP Template</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Channels, response time targets, brand voice, scenario handling, escalation matrix, and logging process.
            </p>
            <div className="mt-5">
              <DownloadGate asset="guest-messaging-sop" pdfHref="/downloads/guest-messaging-sop.pdf" ctaLabel="Download PDF" block />
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <ClipboardList className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">Checklist</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">After-Hours Guest Coverage Checklist</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Audit your overnight and weekend coverage gaps: call handling, emergency escalation, and morning handoff.
            </p>
            <div className="mt-5">
              <DownloadGate asset="after-hours-checklist" pdfHref="/downloads/after-hours-checklist.pdf" ctaLabel="Download PDF" block />
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <ClipboardList className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">Checklist</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">OTA Inbox Response Checklist</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Standards for managing Booking.com, Expedia, and Airbnb inboxes: pre-booking, complaints, and escalation triggers.
            </p>
            <div className="mt-5">
              <DownloadGate asset="ota-inbox-response-checklist" pdfHref="/downloads/ota-inbox-response-checklist.pdf" ctaLabel="Download PDF" block />
            </div>
          </div>
        </div>
      </Section>

      {/* Step 4 — Proof */}
      <Section surface>
        <SectionHeading
          eyebrow="Step 4"
          title="See what Guest Squad actually delivers each week."
          description="Download the sample report to see the format before committing to anything."
        />
        <div className="mt-8 max-w-sm">
          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <BarChart2 className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">Sample Report</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">Sample Weekly Guest Operations Report</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Calls handled, messages sent, OTA replies, escalations flagged, and recommendations for the week ahead.
            </p>
            <div className="mt-5">
              <DownloadGate asset="sample-weekly-report" pdfHref="/downloads/sample-weekly-report.pdf" ctaLabel="Download Sample Report" block />
            </div>
          </div>
        </div>
      </Section>

      {/* Insights */}
      <Section surface>
        <SectionHeading
          eyebrow="Insights"
          title="What the data says about hotel operations."
          description="Analysis and operational insight for independent hoteliers — built around OTA rankings, guest response time, and revenue gaps."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Link
            href="/resources/insights/ota-ranking-response-time"
            className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">OTA Rankings</span>
                <span className="text-xs text-ink-muted">8 min read</span>
              </div>
              <h3 className="mt-3 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                What Happens to Your Hotel&apos;s OTA Ranking When You Reply Slowly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Booking.com tracks your reply score as a direct ranking input. Here&apos;s exactly how slow responses move your listing down — and what recovery looks like.
              </p>
            </div>
            <p className="mt-5 flex items-center gap-1.5 text-xs font-medium text-gold-dark group-hover:text-gold">
              Read article →
            </p>
          </Link>
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          <Link href="/resources/insights" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            View all insights →
          </Link>
        </p>
      </Section>

      {/* Buying Guides */}
      <Section>
        <SectionHeading
          eyebrow="Further Reading"
          title="How Guest Squad compares to the alternatives."
          description="Straight comparisons to help you evaluate guest support options before choosing."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {buyingGuides.map((r) => (
            <ServiceCard
              key={r.slug}
              service={{ slug: r.slug, title: r.title, shortTitle: r.shortTitle, description: r.description }}
              hrefBase="/resources"
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Already know what you need?{" "}
          <Link href="/services" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Browse all guest operations services
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Questions" title="Common questions about these resources." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {RESOURCES_FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Ready to book a coverage review?"
        description="Tell us your volume and channels and we will walk through exactly what coverage your property needs."
      />
    </>
  );
}
