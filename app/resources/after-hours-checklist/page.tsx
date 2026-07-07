import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PrintLayout } from "@/components/site/print-layout";

export const metadata: Metadata = buildMetadata({
  title: "After-Hours Hotel Coverage Checklist | GuestSquad",
  description:
    "A practical checklist for auditing your hotel or STR property's after-hours coverage gaps, from overnight calls to emergency escalation and morning handoff.",
  path: "/resources/after-hours-checklist",
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function FillLine({ label }: { label: string }) {
  return (
    <div className="flex items-end gap-3 py-2">
      <span className="shrink-0 text-sm text-ink-soft">{label}:</span>
      <span className="flex-1 border-b border-line" />
    </div>
  );
}

export default function AfterHoursChecklistPage() {
  return (
    <PrintLayout
      title="After-Hours Guest Coverage Checklist"
      subtitle="Audit your overnight and weekend gaps before they cost you bookings or reviews."
      badge="Free Checklist"
      asset="after-hours-checklist"
      downloadHref="/downloads/after-hours-checklist.pdf"
    >
      <p className="text-sm leading-relaxed text-ink-soft">
        Use this checklist to assess how well your current after-hours setup covers overnight calls, weekend gaps, emergency escalation, and morning handoff. Work through each section and note what is in place, what is missing, and what needs to be formalised.
      </p>

      <Section title="1. Coverage Hours — Define Your Window">
        <FillLine label="Front desk closes at" />
        <FillLine label="Front desk reopens at" />
        <FillLine label="Weekend / holiday hours differ" />
        <FillLine label="Who is responsible for after-hours phone coverage currently" />
        <div className="mt-3 flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>Coverage hours are clearly defined and documented, not assumed.</CheckItem>
          <CheckItem>All team members know the exact handoff time and process.</CheckItem>
          <CheckItem>Holiday and peak-season coverage windows are agreed in advance.</CheckItem>
          <CheckItem>Call routing is configured to reflect the coverage schedule automatically.</CheckItem>
        </div>
      </Section>

      <Section title="2. Inbound Call Handling">
        <div className="flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>A live person answers calls during all defined coverage hours — no voicemail during covered windows.</CheckItem>
          <CheckItem>After-hours calls are answered with the correct property greeting, not a generic message.</CheckItem>
          <CheckItem>The call handler knows your current rates, room types, and basic availability.</CheckItem>
          <CheckItem>The handler can confirm, modify, or take payment for reservations without transferring.</CheckItem>
          <CheckItem>Calls outside covered hours have a clear voicemail or callback process.</CheckItem>
          <CheckItem>Call answer time target is defined (e.g., within 15 seconds or 3 rings).</CheckItem>
          <CheckItem>All inbound calls are logged with caller name, number, call type, and outcome.</CheckItem>
        </div>
      </Section>

      <Section title="3. Night Audit Phone Coverage">
        <div className="flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>Night audit calls (billing questions, late charges, audit queries) are handled live, not deferred to morning.</CheckItem>
          <CheckItem>The handler understands what night audit calls typically involve and can answer or log correctly.</CheckItem>
          <CheckItem>Disputes or rate queries during audit hours are logged and escalated correctly, not resolved without authorisation.</CheckItem>
          <CheckItem>Morning team receives a clear summary of any audit-related calls before their shift starts.</CheckItem>
        </div>
      </Section>

      <Section title="4. Emergency Escalation Protocol">
        <FillLine label="On-call contact name" />
        <FillLine label="On-call contact number" />
        <FillLine label="Backup escalation contact" />
        <FillLine label="Maintenance emergency contact" />
        <div className="mt-3 flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>A written escalation protocol exists and is accessible to the after-hours handler at all times.</CheckItem>
          <CheckItem>Categories of genuine emergencies are clearly defined (medical, fire, security, major maintenance).</CheckItem>
          <CheckItem>Non-emergencies that feel urgent (unhappy guest, minor complaint) are not escalating to on-call unnecessarily.</CheckItem>
          <CheckItem>Emergency services protocol: handler knows to call 911 first before notifying management for medical/safety events.</CheckItem>
          <CheckItem>Escalation is confirmed — handler waits for acknowledgement, does not simply leave a voicemail and disconnect.</CheckItem>
          <CheckItem>All escalations are logged with timestamp, issue type, action taken, and outcome.</CheckItem>
        </div>
      </Section>

      <Section title="5. Guest Requests During Covered Hours">
        <div className="flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>Late checkout requests: handler can check availability and confirm at defined rates without GM approval.</CheckItem>
          <CheckItem>Early check-in inquiries: handler can check and respond accurately, not just promise availability.</CheckItem>
          <CheckItem>Lock-out situations: handler knows the protocol (front desk on-call, spare key policy, security contact).</CheckItem>
          <CheckItem>Room change requests: handler knows what to log and when to escalate versus resolve.</CheckItem>
          <CheckItem>Complaint calls: handler can acknowledge, apologise, log, and route correctly without inflaming the situation.</CheckItem>
          <CheckItem>Special occasion requests: handler knows what the property offers and at what cost.</CheckItem>
        </div>
      </Section>

      <Section title="6. Morning Handoff Process">
        <FillLine label="Morning summary delivered by" />
        <FillLine label="Delivered at" />
        <FillLine label="Delivered to" />
        <div className="mt-3 flex flex-col divide-y divide-line rounded-lg border border-line bg-surface">
          <CheckItem>Morning team receives a written summary of overnight activity before their shift starts.</CheckItem>
          <CheckItem>Summary includes: all calls handled, all messages received, escalations triggered, any open issues.</CheckItem>
          <CheckItem>Unresolved matters (pending escalation responses, guest callbacks due) are flagged clearly.</CheckItem>
          <CheckItem>Nothing that happened overnight is a surprise to the morning team.</CheckItem>
        </div>
      </Section>

      <Section title="7. SLA Targets">
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Channel</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Target Response</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Your Current Standard</th>
              </tr>
            </thead>
            <tbody>
              {[
                { channel: "Inbound calls", target: "< 15 seconds / 3 rings" },
                { channel: "SMS messages", target: "< 15 minutes" },
                { channel: "WhatsApp", target: "< 15 minutes" },
                { channel: "OTA messages", target: "< 30 minutes" },
                { channel: "Email", target: "< 60 minutes" },
                { channel: "Escalation acknowledgement", target: "< 5 minutes" },
              ].map((row, i, arr) => (
                <tr key={row.channel} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                  <td className="px-4 py-3 text-ink-soft">{row.channel}</td>
                  <td className="px-4 py-3 text-ink-soft">{row.target}</td>
                  <td className="px-4 py-3"><span className="block w-28 border-b border-line" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="mt-10 rounded-lg border border-line bg-surface p-6 text-center">
        <p className="text-sm font-medium text-ink">Want GuestSquad to cover your after-hours gaps?</p>
        <p className="mt-1 text-xs text-ink-soft">Book a demo at guestsquad.com/contact or visit guestsquad.com/services/after-hours-support</p>
      </div>
    </PrintLayout>
  );
}
