"use client";
import Link from "next/link";
import { Calculator, FileText, ClipboardList, BarChart2 } from "lucide-react";
import { DownloadGate } from "@/components/site/download-gate";

const TOOLS = [
  {
    type: "calculator" as const,
    href: "/resources/missed-booking-calculator",
    icon: Calculator,
    badge: "Free Tool",
    title: "Missed Booking Revenue Calculator",
    description:
      "Estimate how much revenue unanswered reservation calls are costing your property each month. Adjust volume, booking value, and conversion rate.",
  },
  {
    type: "download" as const,
    asset: "sample-weekly-report",
    icon: BarChart2,
    badge: "Sample Report",
    title: "Sample Weekly Guest Operations Report",
    description:
      "See exactly what a GuestSquad weekly report looks like: calls handled, messages, OTA replies, escalations, response times, and weekly recommendations.",
  },
  {
    type: "download" as const,
    asset: "coverage-gap-assessment",
    icon: ClipboardList,
    badge: "Self-Assessment",
    title: "Guest Coverage Gap Assessment",
    description:
      "Identify uncovered hours, unmanned channels, and escalation gaps across your property. Includes a service recommendation guide based on your answers.",
  },
  {
    type: "download" as const,
    asset: "after-hours-checklist",
    icon: ClipboardList,
    badge: "Checklist",
    title: "After-Hours Guest Coverage Checklist",
    description:
      "Audit your overnight and weekend coverage gaps: call handling, emergency escalation, night audit coverage, and morning handoff process.",
  },
  {
    type: "download" as const,
    asset: "guest-messaging-sop",
    icon: FileText,
    badge: "SOP Template",
    title: "Hotel Guest Messaging SOP Template",
    description:
      "A printable SOP template covering channels, response time targets, brand voice, scenario handling, escalation matrix, and logging process.",
  },
  {
    type: "download" as const,
    asset: "ota-inbox-response-checklist",
    icon: ClipboardList,
    badge: "Checklist",
    title: "OTA Inbox Response Checklist",
    description:
      "Standards for managing Booking.com, Expedia, and Airbnb inboxes: pre-booking, post-booking, complaints, review responses, and escalation triggers.",
  },
];

export function ResourceToolsGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TOOLS.map((tool) => {
        const Icon = tool.icon;

        if (tool.type === "calculator") {
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold-dark"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-gold-dark" />
                <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">
                  {tool.badge}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">
                {tool.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{tool.description}</p>
              <p className="mt-4 text-xs font-medium text-gold-dark">Open calculator →</p>
            </Link>
          );
        }

        const pdfHref = `/downloads/${tool.asset}.pdf`;

        return (
          <div
            key={tool.asset}
            className="flex flex-col rounded-lg border border-line bg-paper p-6"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-gold-dark" />
              <span className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">
                {tool.badge}
              </span>
            </div>
            <h3 className="mt-4 text-sm font-medium text-ink">{tool.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{tool.description}</p>
            <div className="mt-5">
              <DownloadGate
                asset={tool.asset}
                pdfHref={pdfHref}
                ctaLabel="Download PDF"
                block
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
