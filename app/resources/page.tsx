import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { DownloadGate } from "@/components/site/download-gate";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { RESOURCES } from "@/lib/resource-content";
import { Calculator, FileText, ClipboardList, BarChart2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service Guides & Comparisons",
  description:
    "Guides and comparisons on hotel answering services, AI voice agents, and call centers, to help you evaluate what's actually right for your property.",
  path: "/resources",
});

export default function ResourcesPage() {
  const buyingGuides = RESOURCES;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />

      <PageHero
        eyebrow="Resources"
        title="Hotel Answering Service Guides, Comparisons, and Checklists"
        description="Practical tools, templates, and guides for hospitality operators evaluating guest support options."
      />

      {/* Free Tools */}
      <Section>
        <SectionHeading
          eyebrow="Free Tools"
          title="Calculate and assess your coverage gaps."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/resources/missed-booking-calculator"
            className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold-dark"
          >
            <div className="flex items-center justify-between">
              <Calculator className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">Free Tool</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
              Missed Booking Revenue Calculator
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Estimate how much revenue unanswered reservation calls are costing your property each month.
            </p>
            <p className="mt-4 text-xs font-medium text-gold-dark">Open calculator →</p>
          </Link>

          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <ClipboardList className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">Self-Assessment</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">Guest Coverage Gap Assessment</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              Identify uncovered hours, unmanned channels, and escalation gaps across your property.
            </p>
            <div className="mt-5">
              <DownloadGate asset="coverage-gap-assessment" pdfHref="/downloads/coverage-gap-assessment.pdf" ctaLabel="Download PDF" block />
            </div>
          </div>
        </div>
      </Section>

      {/* Templates and Checklists */}
      <Section surface>
        <SectionHeading
          eyebrow="Templates and Checklists"
          title="Ready-to-use operational documents."
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

      {/* Proof Assets */}
      <Section>
        <SectionHeading
          eyebrow="Proof Assets"
          title="See how GuestSquad reports and what coverage looks like."
        />
        <div className="mt-10 max-w-sm">
          <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center justify-between">
              <BarChart2 className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">Sample Report</span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">Sample Weekly Guest Operations Report</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              See exactly what a GuestSquad weekly report looks like: calls handled, messages, OTA replies, escalations, and recommendations.
            </p>
            <div className="mt-5">
              <DownloadGate asset="sample-weekly-report" pdfHref="/downloads/sample-weekly-report.pdf" ctaLabel="Download Sample Report" block />
            </div>
          </div>
        </div>
      </Section>

      {/* Buying Guides */}
      <Section surface>
        <SectionHeading
          eyebrow="Buying Guides"
          title="How GuestSquad stacks up against the alternatives."
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
            Browse all services
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
