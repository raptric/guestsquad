import { Check } from "lucide-react";

const COMMITMENTS = [
  "5-business-day setup",
  "Property-specific briefing",
  "Written escalation rules",
  "Weekly reporting",
  "Human response, not generic scripts",
  "2-week pilot available for qualified properties",
];

export function ClientTrustBlock() {
  return (
    <div className="rounded-xl border border-line bg-surface px-8 py-8">
      <p className="text-base font-medium text-ink">What every client gets from day one.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {COMMITMENTS.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <Check className="h-4 w-4 shrink-0 text-gold-dark" />
            <span className="text-sm text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft border-t border-line pt-6">
        Before we handle a single guest call or message, we document your rates, policies, escalation contacts, guest tone, and brand voice. Nothing goes live until your team has reviewed the coverage brief and approved how Guest Squad should handle and escalate guest situations.
      </p>
    </div>
  );
}
