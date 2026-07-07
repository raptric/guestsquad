import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PrintLayout } from "@/components/site/print-layout";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Guest Messaging SOP Template | GuestSquad",
  description:
    "A printable SOP template for hotel guest messaging: response time targets, brand voice guidelines, escalation matrix, and scenario handling guide.",
  path: "/resources/guest-messaging-sop",
});

function FillLine({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <div className={`flex items-end gap-3 py-1.5 ${wide ? "col-span-2" : ""}`}>
      <span className="shrink-0 text-xs text-ink-soft">{label}:</span>
      <span className="flex-1 border-b border-line" />
    </div>
  );
}

function CheckBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-1.5">
      <span className="mt-0.5 shrink-0 h-4 w-4 rounded border-2 border-ink-muted" />
      <span className="text-sm text-ink-soft">{children}</span>
    </div>
  );
}

function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="border-b-2 border-gold pb-2 text-sm font-semibold text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function GuestMessagingSopPage() {
  return (
    <PrintLayout
      title="Hotel Guest Messaging SOP"
      subtitle="Standard Operating Procedure — Guest Communication"
      badge="SOP Template"
    >
      <p className="text-sm leading-relaxed text-ink-soft">
        Complete each section of this template to create a working guest messaging SOP for your property. A finished SOP gives any team member or external support partner enough context to handle guest communications consistently, on brand, and within your defined escalation rules.
      </p>

      <DocSection title="Section 1 — Property Information">
        <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
          <FillLine label="Property name" />
          <FillLine label="Property type (hotel / STR / resort)" />
          <FillLine label="General Manager / Owner" />
          <FillLine label="Primary reservations contact" />
          <FillLine label="After-hours escalation contact" />
          <FillLine label="After-hours contact number" />
          <FillLine label="PMS in use" />
          <FillLine label="Channel manager / OTA tools" />
          <FillLine label="SOP owner (who maintains this document)" />
          <FillLine label="Last reviewed / updated" />
        </div>
      </DocSection>

      <DocSection title="Section 2 — Channels Covered Under This SOP">
        <p className="mb-3 text-xs text-ink-muted">Check all channels included in this SOP.</p>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {[
            "Inbound phone — main line",
            "Inbound phone — reservations line",
            "SMS / text messages",
            "WhatsApp Business",
            "Email — reservations@",
            "Email — info@ / general",
            "Booking.com Message Center",
            "Expedia Partner Central inbox",
            "Airbnb messages",
            "Vrbo messages",
            "In-app (PMS guest messaging)",
            "Other: _________________________",
          ].map((ch) => (
            <CheckBox key={ch}>{ch}</CheckBox>
          ))}
        </div>
      </DocSection>

      <DocSection title="Section 3 — Response Time Targets">
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Channel</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Response Target</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Hours Covered</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Responsible</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Inbound calls",
                "SMS",
                "WhatsApp",
                "Booking.com inbox",
                "Expedia inbox",
                "Airbnb / Vrbo",
                "Email",
              ].map((ch, i, arr) => (
                <tr key={ch} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-3 text-ink-soft">{ch}</td>
                  <td className="px-4 py-3"><span className="block w-24 border-b border-line" /></td>
                  <td className="px-4 py-3"><span className="block w-24 border-b border-line" /></td>
                  <td className="px-4 py-3"><span className="block w-24 border-b border-line" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Section 4 — Brand Voice Guidelines">
        <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
          <div className="col-span-2 py-2">
            <p className="text-xs text-ink-muted mb-2">Tone (circle one):</p>
            <div className="flex gap-6 text-sm text-ink-soft">
              <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-ink-muted shrink-0" /> Formal</span>
              <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-ink-muted shrink-0" /> Warm-professional</span>
              <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-ink-muted shrink-0" /> Casual-friendly</span>
            </div>
          </div>
          <FillLine label="Property name used in messages (e.g. 'The Langford' vs 'we')" />
          <FillLine label="Languages spoken / supported" />
          <FillLine label="Standard phone greeting script" />
          <FillLine label="Standard message sign-off" />
          <FillLine label="Words or phrases to avoid" />
          <FillLine label="Topics that must always be escalated (never answered directly)" />
        </div>
        <div className="mt-4 rounded-lg border border-line bg-surface p-4">
          <p className="text-xs font-medium text-ink-muted mb-2">EXAMPLE MESSAGES (paste 2–3 real examples from your property)</p>
          <div className="flex flex-col gap-3">
            <div><p className="text-xs text-ink-muted">Example 1 — reservation inquiry response:</p><div className="mt-1 min-h-[40px] rounded border border-line bg-paper px-3 py-2" /></div>
            <div><p className="text-xs text-ink-muted">Example 2 — late checkout response:</p><div className="mt-1 min-h-[40px] rounded border border-line bg-paper px-3 py-2" /></div>
            <div><p className="text-xs text-ink-muted">Example 3 — complaint response:</p><div className="mt-1 min-h-[40px] rounded border border-line bg-paper px-3 py-2" /></div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Section 5 — Scenario Handling Guide">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-3 py-3 text-left font-semibold uppercase tracking-[0.12em] text-ink-muted">Scenario</th>
                <th className="px-3 py-3 text-left font-semibold uppercase tracking-[0.12em] text-ink-muted">Handle directly?</th>
                <th className="px-3 py-3 text-left font-semibold uppercase tracking-[0.12em] text-ink-muted">Escalate to</th>
                <th className="px-3 py-3 text-left font-semibold uppercase tracking-[0.12em] text-ink-muted">Notes / script</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Rate and availability inquiry",
                "Booking modification (within policy)",
                "Cancellation (within policy)",
                "Cancellation (outside policy)",
                "Late checkout request",
                "Early check-in request",
                "Rate negotiation / discount",
                "Group inquiry (5+ rooms)",
                "Complaint — minor",
                "Complaint — serious / media",
                "Maintenance issue — non-urgent",
                "Maintenance emergency",
                "Medical / safety emergency",
                "Special occasion / upgrade request",
                "Lost property",
                "Review / feedback question",
              ].map((sc, i, arr) => (
                <tr key={sc} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-3 py-2.5 text-ink-soft">{sc}</td>
                  <td className="px-3 py-2.5"><span className="block w-16 border-b border-line" /></td>
                  <td className="px-3 py-2.5"><span className="block w-20 border-b border-line" /></td>
                  <td className="px-3 py-2.5"><span className="block w-32 border-b border-line" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Section 6 — Escalation Matrix">
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Situation</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Escalate to</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Method</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Response expected</th>
              </tr>
            </thead>
            <tbody>
              {[
                { s: "Medical / safety emergency", method: "Call 911, then notify management", resp: "Immediate" },
                { s: "Maintenance emergency", method: "Call / SMS", resp: "< 30 min" },
                { s: "Serious guest complaint", method: "", resp: "" },
                { s: "Rate dispute / refund request", method: "", resp: "" },
                { s: "Media / press inquiry", method: "", resp: "" },
                { s: "PMS / system access issue", method: "", resp: "" },
                { s: "Other: ________________", method: "", resp: "" },
              ].map((row, i, arr) => (
                <tr key={row.s} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-2.5 text-ink-soft">{row.s}</td>
                  <td className="px-4 py-2.5"><span className="block w-28 border-b border-line">{row.method && <span className="text-xs text-ink-muted">{row.method}</span>}</span></td>
                  <td className="px-4 py-2.5"><span className="block w-20 border-b border-line" /></td>
                  <td className="px-4 py-2.5"><span className="block w-20 border-b border-line">{row.resp && <span className="text-xs text-ink-muted">{row.resp}</span>}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Section 7 — Logging and Reporting">
        <p className="mb-3 text-xs text-ink-muted">Define what gets logged and how reporting works.</p>
        <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
          <FillLine label="Log location (shared sheet / PMS / email)" />
          <FillLine label="Who reviews the log" />
          <FillLine label="Reporting frequency" />
          <FillLine label="Morning summary delivered to" />
          <FillLine label="Morning summary delivered by (time)" />
        </div>
        <div className="mt-4">
          <p className="text-xs text-ink-muted mb-2">Each log entry should include:</p>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {["Date and time", "Channel (call / SMS / OTA / email)", "Caller / guest name", "Contact number or platform ID", "Issue type", "Action taken", "Outcome", "Escalation triggered? (Y/N)", "Escalation contact notified", "Resolution status"].map((f) => (
              <CheckBox key={f}>{f}</CheckBox>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Section 8 — SOP Maintenance">
        <div className="flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          {[
            "This SOP is reviewed and updated at least quarterly.",
            "Rate changes, policy updates, and seasonal procedures trigger an immediate SOP update.",
            "New team members and external partners read this SOP before handling any guest communication.",
            "SOP updates are communicated to all active handlers before they take effect.",
          ].map((item) => (
            <CheckBox key={item}>{item}</CheckBox>
          ))}
        </div>
      </DocSection>

      <div className="mt-10 rounded-lg border border-line bg-surface p-6 text-center">
        <p className="text-sm font-medium text-ink">Need a team to work inside this SOP for your property?</p>
        <p className="mt-1 text-xs text-ink-soft">GuestSquad agents are briefed on your SOP before handling any guest interaction. guestsquad.com/contact</p>
      </div>
    </PrintLayout>
  );
}
