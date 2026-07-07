import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PrintLayout } from "@/components/site/print-layout";

export const metadata: Metadata = buildMetadata({
  title: "Guest Coverage Gap Assessment | GuestSquad",
  description:
    "A self-assessment for hotel and STR operators to identify uncovered hours, unmanned channels, escalation gaps, and which GuestSquad service to start with.",
  path: "/resources/coverage-gap-assessment",
  noindex: true,
});

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="mt-0.5 shrink-0 h-4 w-4 rounded border-2 border-ink-muted" />
      <span className="text-sm leading-relaxed text-ink-soft">{children}</span>
    </div>
  );
}

function FillLine({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <div className={`flex items-end gap-3 py-1.5 ${wide ? "col-span-2" : ""}`}>
      <span className="shrink-0 text-sm text-ink-soft">{label}:</span>
      <span className="flex-1 border-b border-line" />
    </div>
  );
}

function DocSection({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="border-b-2 border-gold pb-2 text-sm font-semibold text-ink">{title}</h2>
      {subtitle && <p className="mt-2 text-xs text-ink-muted">{subtitle}</p>}
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function CoverageGapAssessmentPage() {
  return (
    <PrintLayout
      title="Guest Coverage Gap Assessment"
      subtitle="Identify where your property is losing bookings and guests to coverage gaps."
      badge="Self-Assessment"
      asset="coverage-gap-assessment"
      downloadHref="/downloads/coverage-gap-assessment.pdf"
    >
      <p className="text-sm leading-relaxed text-ink-soft">
        Complete this assessment to map your current guest communication coverage against what guests actually expect. Work through each section honestly. The gaps you identify are the starting point for deciding which coverage to add first.
      </p>

      <DocSection title="Section 1 — Property Profile" subtitle="Fill in your property details for reference.">
        <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
          <FillLine label="Property name" />
          <FillLine label="Property type" />
          <FillLine label="Number of rooms / units" />
          <FillLine label="Location / market" />
          <FillLine label="OTA platforms listed on" />
          <FillLine label="PMS in use" />
          <FillLine label="Team size (front desk / operations)" />
          <FillLine label="Peak season months" />
        </div>
      </DocSection>

      <DocSection
        title="Section 2 — Current Coverage Hours"
        subtitle="Mark what is actually staffed, not what you intend to have covered."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Period</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Fully staffed</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Partially covered</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">No coverage</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Weekday daytime (8am–6pm)",
                "Weekday evening (6pm–11pm)",
                "Overnight (11pm–7am)",
                "Saturday daytime",
                "Saturday evening / night",
                "Sunday daytime",
                "Sunday evening / night",
                "Public holidays",
                "Peak season weekends",
              ].map((period, i, arr) => (
                <tr key={period} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-2.5 text-ink-soft">{period}</td>
                  <td className="px-4 py-2.5 text-center"><span className="inline-block h-4 w-4 rounded border-2 border-ink-muted" /></td>
                  <td className="px-4 py-2.5 text-center"><span className="inline-block h-4 w-4 rounded border-2 border-ink-muted" /></td>
                  <td className="px-4 py-2.5 text-center"><span className="inline-block h-4 w-4 rounded border-2 border-ink-muted" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection
        title="Section 3 — Channel Coverage"
        subtitle="For each channel, mark current coverage level and volume."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Channel</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Active</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Fully managed</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Gaps exist</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Est. weekly volume</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Inbound phone — main",
                "Inbound phone — reservations",
                "SMS / text",
                "WhatsApp",
                "Email (reservations)",
                "Booking.com inbox",
                "Expedia inbox",
                "Airbnb messages",
                "Vrbo messages",
                "PMS guest messaging",
              ].map((ch, i, arr) => (
                <tr key={ch} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-2.5 text-ink-soft">{ch}</td>
                  <td className="px-4 py-2.5 text-center"><span className="inline-block h-4 w-4 rounded border-2 border-ink-muted" /></td>
                  <td className="px-4 py-2.5 text-center"><span className="inline-block h-4 w-4 rounded border-2 border-ink-muted" /></td>
                  <td className="px-4 py-2.5 text-center"><span className="inline-block h-4 w-4 rounded border-2 border-ink-muted" /></td>
                  <td className="px-4 py-2.5"><span className="block w-20 border-b border-line" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Section 4 — Volume and Risk Indicators">
        <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
          <FillLine label="Est. monthly inbound calls (total)" />
          <FillLine label="Est. monthly calls missed / unanswered" />
          <FillLine label="Est. OTA messages per week" />
          <FillLine label="Est. OTA messages not replied within 1 hour" />
          <FillLine label="Est. SMS / WhatsApp messages per week" />
          <FillLine label="Current Booking.com response rate (from dashboard)" />
        </div>
        <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>Phone rings to voicemail during evenings or weekends regularly.</CheckItem>
          <CheckItem>OTA messages sit unanswered for more than 2 hours at some point in the week.</CheckItem>
          <CheckItem>Front desk misses calls while handling in-person check-ins.</CheckItem>
          <CheckItem>Booking inquiries have been lost because no one answered in time.</CheckItem>
          <CheckItem>A guest has left a review mentioning slow response or unanswered communication.</CheckItem>
          <CheckItem>Staff describe phones as disruptive to in-person guest service.</CheckItem>
          <CheckItem>There is no written escalation process for overnight emergencies.</CheckItem>
          <CheckItem>Morning team regularly discovers messages or calls from overnight that were not handled.</CheckItem>
        </div>
      </DocSection>

      <DocSection title="Section 5 — Escalation Readiness">
        <div className="divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>A written escalation protocol exists for after-hours emergencies.</CheckItem>
          <CheckItem>Every team member knows who to call for an overnight emergency.</CheckItem>
          <CheckItem>On-call contacts are documented and current.</CheckItem>
          <CheckItem>Guests are never told to call back in the morning for an urgent matter.</CheckItem>
          <CheckItem>The escalation process has been tested in the last 6 months.</CheckItem>
        </div>
      </DocSection>

      <DocSection title="Section 6 — Gap Summary and Starting Point">
        <p className="text-sm text-ink-soft mb-4">Review your answers above and complete this summary.</p>
        <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
          <FillLine label="Hours with no current coverage" />
          <FillLine label="Channels currently unmanaged or behind on response" />
          <FillLine label="Biggest single gap (your honest assessment)" />
          <FillLine label="Estimated monthly bookings at risk from coverage gaps" />
        </div>

        <div className="mt-6 overflow-hidden rounded-lg border border-line">
          <div className="border-b border-line bg-ink px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/70">Recommended Service to Start With</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">If your biggest gap is...</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Start with</th>
              </tr>
            </thead>
            <tbody>
              {[
                { gap: "Missed calls during busy hours or peak check-in", service: "Hotel Answering Service" },
                { gap: "Overnight and weekend phone gaps", service: "After-Hours Support" },
                { gap: "Slow OTA inbox response (Booking.com, Expedia)", service: "OTA Inbox Management" },
                { gap: "Unanswered SMS, WhatsApp, or email messages", service: "Guest Messaging" },
                { gap: "Booking inquiries not converting", service: "Reservation Support" },
                { gap: "Airbnb or Vrbo guest communication", service: "Airbnb Guest Support" },
                { gap: "Night audit calls, OTA reconciliation, billing", service: "Back Office Operations" },
                { gap: "Multiple gaps across channels and hours", service: "Starter Plan — book a demo" },
              ].map((row, i, arr) => (
                <tr key={row.gap} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-3 text-ink-soft">{row.gap}</td>
                  <td className="px-4 py-3 font-medium text-ink">{row.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <div className="mt-10 rounded-lg border border-line bg-surface p-6 text-center">
        <p className="text-sm font-medium text-ink">Ready to close the gaps you found?</p>
        <p className="mt-1 text-xs text-ink-soft">Book a 15-minute coverage review at guestsquad.com/contact</p>
      </div>
    </PrintLayout>
  );
}
