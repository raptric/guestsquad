import { Check } from "lucide-react";

const BULLETS = [
  "Property-specific briefing before go-live",
  "Written escalation rules for urgent issues",
  "Guest tone and brand voice documented",
  "OTA, PMS, and inbox workflows mapped before coverage starts",
  "Daily or weekly activity summaries",
  "Quality review of guest interactions",
  "Clear boundary between what GuestSquad handles and what your team approves",
];

export function BoFuTrustBlock() {
  return (
    <div className="rounded-lg border border-line bg-surface p-8">
      <h2 className="text-xl font-medium text-ink">
        How GuestSquad keeps guest support controlled
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Before coverage goes live, GuestSquad documents your property rules,
        escalation contacts, brand voice, channels, and guest-handling
        boundaries. Agents follow your approved instructions, escalate what
        your team needs to own, and provide reporting so nothing disappears
        overnight.
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
