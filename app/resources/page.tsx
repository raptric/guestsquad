import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, FileText, ClipboardList, BarChart2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { RESOURCES } from "@/lib/resource-content";

const TOOLS = [
  {
    href: "/resources/sample-weekly-report",
    icon: BarChart2,
    badge: "Sample Report",
    title: "Sample Weekly Guest Operations Report",
    description: "See exactly what a GuestSquad weekly report looks like: calls handled, messages, OTA replies, escalations, response times, and weekly recommendations.",
  },
  {
    href: "/resources/missed-booking-calculator",
    icon: Calculator,
    badge: "Calculator",
    title: "Missed Booking Revenue Calculator",
    description: "Estimate how much revenue unanswered reservation calls are costing your property each month. Adjust volume, booking value, and conversion rate.",
  },
  {
    href: "/resources/after-hours-checklist",
    icon: ClipboardList,
    badge: "Checklist",
    title: "After-Hours Guest Coverage Checklist",
    description: "Audit your overnight and weekend coverage gaps: call handling, emergency escalation, night audit coverage, and morning handoff process.",
  },
  {
    href: "/resources/guest-messaging-sop",
    icon: FileText,
    badge: "SOP Template",
    title: "Hotel Guest Messaging SOP Template",
    description: "A printable SOP template covering channels, response time targets, brand voice, scenario handling, escalation matrix, and logging process.",
  },
  {
    href: "/resources/ota-inbox-response-checklist",
    icon: ClipboardList,
    badge: "Checklist",
    title: "OTA Inbox Response Checklist",
    description: "Standards for managing Booking.com, Expedia, and Airbnb inboxes: pre-booking, post-booking, complaints, review responses, and escalation triggers.",
  },
  {
    href: "/resources/coverage-gap-assessment",
    icon: ClipboardList,
    badge: "Self-Assessment",
    title: "Guest Coverage Gap Assessment",
    description: "Identify uncovered hours, unmanned channels, and escalation gaps across your property. Includes a service recommendation guide based on your answers.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service Guides & Comparisons",
  description:
    "Guides and comparisons on hotel answering services, AI voice agents, and call centers, to help you evaluate what's actually right for your property.",
  path: "/resources",
});

export default function ResourcesPage() {
  const comparisons = RESOURCES.filter((r) => r.type === "comparison");
  const guides = RESOURCES.filter((r) => r.type === "guide");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />

      <PageHero
        eyebrow="Resources"
        title="Hotel Answering Service Guides, Comparisons, and Checklists"
        description="Straight comparisons between human answering services, AI voice agents, and generic call centers, plus practical guides for running guest operations, written to help you decide, not just to sell."
      />

      {/* Hub intro */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            These guides compare hotel answering services against the most common alternatives, including AI voice agents and generic call centers, and cover the operational questions property teams ask most before choosing a guest support model. Each guide is written to help you evaluate options, not to push a specific product.
          </p>
        </div>
      </div>

      {/* Tools and assets */}
      <Section>
        <SectionHeading eyebrow="Tools and Assets" title="Checklists, templates, and tools for hospitality operators." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold-dark"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-gold-dark" />
                  <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">{tool.badge}</span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-ink group-hover:text-gold-dark transition-colors">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Comparisons" title="How GuestSquad stacks up against the alternatives." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {comparisons.map((r) => (
            <ServiceCard
              key={r.slug}
              service={{ slug: r.slug, title: r.title, shortTitle: r.shortTitle, description: r.description }}
              hrefBase="/resources"
            />
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Guides & Checklists" title="Practical guides for running guest operations." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {guides.map((r) => (
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
