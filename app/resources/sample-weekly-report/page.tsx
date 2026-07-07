import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PrintLayout } from "@/components/site/print-layout";

export const metadata: Metadata = buildMetadata({
  title: "Sample Weekly Guest Operations Report | GuestSquad",
  description:
    "See exactly what a GuestSquad weekly report looks like: calls handled, messages, OTA replies, escalations, response times, and recommendations.",
  path: "/resources/sample-weekly-report",
});

const CALL_DAYS = [
  { day: "Mon", calls: 9, messages: 14 },
  { day: "Tue", calls: 5, messages: 11 },
  { day: "Wed", calls: 6, messages: 10 },
  { day: "Thu", calls: 7, messages: 13 },
  { day: "Fri", calls: 8, messages: 17 },
  { day: "Sat", calls: 8, messages: 16 },
  { day: "Sun", calls: 4, messages: 8 },
];

const REQUEST_TYPES = [
  { type: "Rate and availability inquiries", count: 14, resolved: 14, escalated: 0 },
  { type: "Late checkout requests", count: 12, resolved: 10, escalated: 2 },
  { type: "Early check-in inquiries", count: 8, resolved: 8, escalated: 0 },
  { type: "Cancellation / modification", count: 7, resolved: 6, escalated: 1 },
  { type: "General guest questions", count: 11, resolved: 11, escalated: 0 },
  { type: "After-hours maintenance", count: 3, resolved: 1, escalated: 2 },
  { type: "Complaints", count: 2, resolved: 1, escalated: 1 },
];

const ESCALATIONS = [
  {
    ref: "ESC-001",
    type: "Maintenance — urgent",
    detail: "Pipe issue reported in Room 204, 11:47pm. On-call maintenance notified by call and SMS. Resolved within 47 minutes. Guest moved to Room 212, complimentary breakfast offered.",
    outcome: "Resolved. Guest satisfied.",
  },
  {
    ref: "ESC-002",
    type: "Guest dispute — rate",
    detail: "Guest disputed rate on checkout call, citing a rate seen on OTA that differed from confirmed booking. Logged and escalated to GM inbox for morning review. Rate adjustment approved by GM.",
    outcome: "Resolved next morning by GM.",
  },
  {
    ref: "ESC-003",
    type: "Medical — after hours",
    detail: "Guest called reporting chest discomfort at 2:14am. Emergency protocol followed. 911 advised. Emergency contact notified. Agent remained on call until guest confirmed ambulance en route.",
    outcome: "Emergency services contacted. Protocol followed correctly.",
  },
];

const SLA = [
  { channel: "Inbound calls", target: "< 15 seconds", actual: "11 sec avg", met: true },
  { channel: "SMS messages", target: "< 15 minutes", actual: "3 min avg", met: true },
  { channel: "OTA messages (Booking.com / Expedia)", target: "< 30 minutes", actual: "4 min avg", met: true },
  { channel: "Email", target: "< 60 minutes", actual: "22 min avg", met: true },
  { channel: "WhatsApp", target: "< 15 minutes", actual: "6 min avg", met: true },
];

const maxCalls = Math.max(...CALL_DAYS.map((d) => d.calls + d.messages));

export default function SampleWeeklyReportPage() {
  return (
    <PrintLayout
      title="Weekly Guest Operations Report"
      subtitle="The Langford Boutique Hotel — Sample 7-Day Period"
      badge="Sample Report"
      downloadHref="/downloads/sample-weekly-report.pdf"
    >
      {/* Disclaimer */}
      <div className="mb-8 rounded border border-gold/40 bg-gold/10 px-5 py-3">
        <p className="text-xs text-ink-soft">
          This is a sample report using illustrative data. Your actual weekly report will reflect your property&rsquo;s real call volume, message channels, escalation rules, and SLA targets agreed during onboarding.
        </p>
      </div>

      {/* Week at a glance */}
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Week at a Glance</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total interactions", value: "136" },
          { label: "Calls handled", value: "47" },
          { label: "Messages handled", value: "89" },
          { label: "Escalations", value: "3" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-line bg-surface p-4 text-center">
            <p className="text-2xl font-semibold text-ink">{s.value}</p>
            <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { label: "Answer rate (covered hours)", value: "100%" },
          { label: "Avg call answer time", value: "11 sec" },
          { label: "Avg message response", value: "4 min" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-line bg-surface p-4 text-center">
            <p className="text-xl font-semibold text-gold-dark">{s.value}</p>
            <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Daily activity */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Daily Activity</h2>
      <div className="overflow-hidden rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-surface">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Day</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Calls</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Messages</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Total</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Volume</th>
            </tr>
          </thead>
          <tbody>
            {CALL_DAYS.map((row, i) => {
              const total = row.calls + row.messages;
              const pct = Math.round((total / maxCalls) * 100);
              return (
                <tr key={row.day} className={i < CALL_DAYS.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-3 font-medium text-ink">{row.day}</td>
                  <td className="px-4 py-3 text-right text-ink-soft">{row.calls}</td>
                  <td className="px-4 py-3 text-right text-ink-soft">{row.messages}</td>
                  <td className="px-4 py-3 text-right font-medium text-ink">{total}</td>
                  <td className="px-4 py-3">
                    <div className="h-2 w-full max-w-[120px] rounded-full bg-surface">
                      <div className="h-2 rounded-full bg-gold" style={{ width: `${pct}%` }} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Message channel breakdown */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Message Channel Breakdown</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { channel: "OTA inboxes", count: 36, note: "Booking.com & Expedia" },
          { channel: "SMS", count: 23, note: "Direct text messages" },
          { channel: "WhatsApp", count: 18, note: "WhatsApp Business" },
          { channel: "Email", count: 12, note: "reservations@ inbox" },
        ].map((c) => (
          <div key={c.channel} className="rounded-lg border border-line bg-surface p-4">
            <p className="text-xl font-semibold text-ink">{c.count}</p>
            <p className="mt-0.5 text-sm font-medium text-ink">{c.channel}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{c.note}</p>
          </div>
        ))}
      </div>

      {/* Guest request types */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Guest Request Breakdown</h2>
      <div className="overflow-hidden rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-surface">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Request Type</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Count</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Resolved Direct</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Escalated</th>
            </tr>
          </thead>
          <tbody>
            {REQUEST_TYPES.map((row, i) => (
              <tr key={row.type} className={i < REQUEST_TYPES.length - 1 ? "border-b border-line" : ""}>
                <td className="px-4 py-3 text-ink-soft">{row.type}</td>
                <td className="px-4 py-3 text-right font-medium text-ink">{row.count}</td>
                <td className="px-4 py-3 text-right text-ink-soft">{row.resolved}</td>
                <td className="px-4 py-3 text-right text-ink-soft">{row.escalated > 0 ? row.escalated : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Response times vs SLA */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Response Times vs. SLA Targets</h2>
      <div className="overflow-hidden rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-surface">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Channel</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Target</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Actual (Avg)</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Met</th>
            </tr>
          </thead>
          <tbody>
            {SLA.map((row, i) => (
              <tr key={row.channel} className={i < SLA.length - 1 ? "border-b border-line" : ""}>
                <td className="px-4 py-3 text-ink-soft">{row.channel}</td>
                <td className="px-4 py-3 text-right text-ink-soft">{row.target}</td>
                <td className="px-4 py-3 text-right font-medium text-ink">{row.actual}</td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${row.met ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {row.met ? "Yes" : "No"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking recovery */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Booking Inquiry Summary</h2>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Booking inquiries handled", value: "14" },
          { label: "Reservations confirmed", value: "9" },
          { label: "Est. booking value recovered", value: "$6,300" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-line bg-surface p-4 text-center">
            <p className="text-xl font-semibold text-gold-dark">{s.value}</p>
            <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-muted">
        Booking value estimate is based on a sample average booking value of $700 per confirmed reservation. Your report will use your actual property rates.
      </p>

      {/* Escalation log */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Escalation Log (3 this week)</h2>
      <div className="flex flex-col gap-4">
        {ESCALATIONS.map((e) => (
          <div key={e.ref} className="rounded-lg border border-line bg-surface p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{e.ref}</span>
              <span className="rounded bg-ink px-2 py-0.5 text-xs font-medium text-paper">{e.type}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.detail}</p>
            <p className="mt-2 text-xs font-medium text-gold-dark">Outcome: {e.outcome}</p>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <h2 className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Recommendations This Week</h2>
      <div className="flex flex-col gap-3">
        {[
          {
            n: "01",
            title: "Extend Saturday evening coverage",
            body: "6 calls came in between 10pm and midnight on Saturday outside your currently covered window. These are high-intent reservation callers. Extending coverage by 2 hours on Saturday evenings would capture this volume.",
          },
          {
            n: "02",
            title: "Friday afternoon OTA inbox check",
            body: "Booking.com pre-booking inquiry response time on Fridays averaged 38 minutes, compared to 4 minutes for the rest of the week. This is the highest-conversion window of the week. A dedicated inbox check at 3pm and 5pm Friday would keep responses within your SLA target.",
          },
          {
            n: "03",
            title: "Saturday late-checkout message template",
            body: "Late checkout requests accounted for 25% of Saturday message volume. A proactive Saturday morning message confirming late checkout availability would reduce inbound volume and improve the guest experience before they ask.",
          },
        ].map((r) => (
          <div key={r.n} className="flex gap-4 rounded-lg border border-line bg-paper p-5">
            <span className="shrink-0 text-xl font-semibold text-gold-dark">{r.n}</span>
            <div>
              <p className="text-sm font-medium text-ink">{r.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-lg border border-line bg-surface p-6 text-center">
        <p className="text-sm font-medium text-ink">Ready to receive a report like this for your property?</p>
        <p className="mt-1 text-xs text-ink-soft">Book a 15-minute demo at guestsquad.com/contact</p>
      </div>
    </PrintLayout>
  );
}
