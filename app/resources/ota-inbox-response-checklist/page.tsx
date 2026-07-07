import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PrintLayout } from "@/components/site/print-layout";

export const metadata: Metadata = buildMetadata({
  title: "OTA Inbox Response Checklist | GuestSquad",
  description:
    "A practical checklist for managing Booking.com, Expedia, and Airbnb message inboxes: response standards, message categories, escalation rules, and review protocol.",
  path: "/resources/ota-inbox-response-checklist",
});

function CheckItem({ children, indent }: { children: React.ReactNode; indent?: boolean }) {
  return (
    <div className={`flex items-start gap-3 py-2 ${indent ? "pl-6" : ""}`}>
      <span className="mt-0.5 shrink-0 h-4 w-4 rounded border-2 border-ink-muted" />
      <span className="text-sm leading-relaxed text-ink-soft">{children}</span>
    </div>
  );
}

function DocSection({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="border-b-2 border-gold pb-2 text-sm font-semibold text-ink">{title}</h2>
      {note && <p className="mt-2 text-xs italic text-ink-muted">{note}</p>}
      <div className="mt-2 divide-y divide-line rounded-lg border border-line bg-surface">{children}</div>
    </div>
  );
}

export default function OtaInboxChecklistPage() {
  return (
    <PrintLayout
      title="OTA Inbox Response Checklist"
      subtitle="Booking.com | Expedia | Airbnb | Vrbo — Message Handling Standards"
      badge="Free Checklist"
      asset="ota-inbox-response-checklist"
      downloadHref="/downloads/ota-inbox-response-checklist.pdf"
    >
      <p className="text-sm leading-relaxed text-ink-soft">
        Use this checklist to standardise how your team or external support partners manage OTA inboxes. Consistent, fast, policy-aligned responses improve your OTA ranking, reduce booking friction, and prevent complaints from surfacing in reviews.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Pre-booking target", value: "< 30 min", note: "Highest conversion window" },
          { label: "Post-booking target", value: "< 60 min", note: "Affects review sentiment" },
          { label: "Complaint target", value: "< 15 min", note: "Escalate immediately" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-line bg-surface p-4 text-center">
            <p className="text-xl font-semibold text-gold-dark">{s.value}</p>
            <p className="mt-0.5 text-xs font-medium text-ink">{s.label}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{s.note}</p>
          </div>
        ))}
      </div>

      <DocSection
        title="1. Inbox Setup and Access"
        note="Confirm these are in place before any team member or partner handles OTA messages."
      >
        <CheckItem>Booking.com Message Center login credentials are documented and accessible to all authorised handlers.</CheckItem>
        <CheckItem>Expedia Partner Central inbox access is set up for all authorised users.</CheckItem>
        <CheckItem>Airbnb account access is granted to the messaging team via Co-Host or shared credentials as appropriate.</CheckItem>
        <CheckItem>Vrbo / VRBO inbox access is confirmed and tested.</CheckItem>
        <CheckItem>Notification settings on each platform are configured so new messages trigger an alert, not just a daily summary.</CheckItem>
        <CheckItem>Response-time metrics are reviewed in each platform at least weekly.</CheckItem>
      </DocSection>

      <DocSection
        title="2. Pre-Booking Inquiries"
        note="These are the highest-priority messages. A delay here costs a booking."
      >
        <CheckItem>All pre-booking questions are answered within your defined response target (typically under 30 minutes).</CheckItem>
        <CheckItem>Availability questions: agent checks live availability before confirming, not from memory.</CheckItem>
        <CheckItem>Rate questions: agent quotes the correct rate for the requested dates, including any OTA-specific promotion or non-refundable option.</CheckItem>
        <CheckItem>Facility and accessibility questions are answered accurately from the property brief, not guessed.</CheckItem>
        <CheckItem>Policy questions (pets, smoking, early check-in) are answered based on the current written policy.</CheckItem>
        <CheckItem>If a question cannot be answered directly, it is acknowledged within target time and escalated with a timeline given to the guest.</CheckItem>
        <CheckItem>Response is written in the guest&rsquo;s language where the OTA provides an auto-translation prompt, or escalated if language is not covered.</CheckItem>
      </DocSection>

      <DocSection
        title="3. Post-Booking Guest Messages"
        note="Questions from confirmed guests. Accuracy and tone are both important here."
      >
        <CheckItem>Check-in instructions: template is current and matches the actual check-in process.</CheckItem>
        <CheckItem>Arrival time inquiries are handled within the platform, not deferred to phone or email.</CheckItem>
        <CheckItem>Special request messages (cot, high floor, anniversary) are logged in PMS and confirmed to the guest.</CheckItem>
        <CheckItem>Questions about charges or invoices are answered based on the booking record, not estimated.</CheckItem>
        <CheckItem>Repeat messages from the same guest (a guest who has messaged twice without a reply) are flagged as urgent.</CheckItem>
      </DocSection>

      <DocSection
        title="4. Modification and Cancellation Requests"
        note="Handle within the platform where possible. Never process outside OTA without authorisation."
      >
        <CheckItem>Date change requests are handled within the OTA platform using the correct modification flow, not via direct payment or third-party arrangement.</CheckItem>
        <CheckItem>Cancellation requests within the refund window: confirm the policy, process within platform, confirm to guest.</CheckItem>
        <CheckItem>Cancellation requests outside the refund window: acknowledge, explain policy, log, and escalate to GM for any exception decisions.</CheckItem>
        <CheckItem>No refund or exception is offered without explicit GM or owner authorisation.</CheckItem>
        <CheckItem>Any modification that changes the rate must be reviewed against current pricing before confirmation.</CheckItem>
        <CheckItem>OTA-side modifications are confirmed in PMS to keep records aligned.</CheckItem>
      </DocSection>

      <DocSection
        title="5. Complaint Handling"
        note="How complaints are handled on OTA messaging directly affects review outcomes."
      >
        <CheckItem>Complaints are acknowledged within 15 minutes — acknowledgement alone, not resolution, within that window.</CheckItem>
        <CheckItem>Agent empathises and confirms they are looking into the issue before providing any resolution.</CheckItem>
        <CheckItem>Minor complaints (housekeeping, noise, missing item) are handled directly with an apology and a concrete action taken.</CheckItem>
        <CheckItem>Serious complaints (safety, significant property issue, health concern) are escalated to management immediately via call, not held in OTA message thread.</CheckItem>
        <CheckItem>No compensation, refund, or upgrade is offered without authorisation.</CheckItem>
        <CheckItem>Resolution is followed up in the same OTA message thread once actioned, so the guest has a record.</CheckItem>
        <CheckItem>Every complaint is logged regardless of how it was resolved, as it may precede a negative review.</CheckItem>
      </DocSection>

      <DocSection
        title="6. Review Responses"
        note="Responses to guest reviews on Booking.com and Expedia are public. Tone matters more here than anywhere else."
      >
        <CheckItem>All reviews (positive and negative) receive a management response within 48 hours.</CheckItem>
        <CheckItem>Positive reviews: thank the guest by first name, reference one specific thing they mentioned, invite them back.</CheckItem>
        <CheckItem>Negative reviews: do not argue or be defensive. Acknowledge the experience, apologise for the shortfall, note the action taken.</CheckItem>
        <CheckItem>Review responses are never written in anger or immediately after reading a negative review.</CheckItem>
        <CheckItem>No private guest information (booking details, names, complaint specifics) is included in a public review response.</CheckItem>
        <CheckItem>Response drafts for serious negative reviews are reviewed by GM before posting.</CheckItem>
      </DocSection>

      <DocSection
        title="7. Direct Booking Conversion"
        note="Where appropriate, conversations naturally point guests toward direct booking for future stays."
      >
        <CheckItem>At the end of a pre-booking inquiry that converts to a booking through the OTA: note the direct booking option for future stays without pressing on the current booking.</CheckItem>
        <CheckItem>Post-checkout follow-up messages (where OTA allows) include a mention of direct booking advantages (e.g., flexible rate, direct perks).</CheckItem>
        <CheckItem>Direct booking nudges are natural and never pushy — the OTA relationship is not put at risk.</CheckItem>
      </DocSection>

      <DocSection title="8. Escalation Triggers — Act Immediately">
        <CheckItem>Medical or safety concern mentioned by guest.</CheckItem>
        <CheckItem>Guest has not received expected check-in information and arrival is within 2 hours.</CheckItem>
        <CheckItem>Complaint involving a threat to leave a review if not compensated.</CheckItem>
        <CheckItem>OTA platform has flagged your response-time metric as at risk.</CheckItem>
        <CheckItem>Guest claims they were overcharged or double-billed.</CheckItem>
        <CheckItem>Message involves a regulatory or legal concern (discrimination claim, injury).</CheckItem>
        <CheckItem>Guest has not received a reply to two or more messages within target time.</CheckItem>
      </DocSection>

      <div className="mt-10 rounded-lg border border-line bg-surface p-6 text-center">
        <p className="text-sm font-medium text-ink">Want GuestSquad to manage your OTA inboxes?</p>
        <p className="mt-1 text-xs text-ink-soft">guestsquad.com/services/ota-inbox-management</p>
      </div>
    </PrintLayout>
  );
}
