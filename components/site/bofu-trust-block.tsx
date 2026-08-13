import { Check, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Discovery call",
    body: "We learn your property, systems, SOPs, and where guests are currently falling through the cracks.",
  },
  {
    num: "02",
    title: "Setup & training",
    body: "Your account is briefed on your PMS, rates, policies, and brand voice before a single guest is contacted.",
  },
  {
    num: "03",
    title: "Go live",
    body: "Coverage begins on the channels you choose: calls, messages, OTA inbox, or after-hours only.",
  },
  {
    num: "04",
    title: "Reporting & refinement",
    body: "You receive regular reporting on volume, response times, and recovered revenue, with adjustments as needed.",
  },
];

const BULLETS = [
  "Property-specific briefing before go-live",
  "Written escalation rules for urgent issues",
  "Guest tone and brand voice documented",
  "OTA, PMS, and inbox workflows mapped before coverage starts",
  "Daily or weekly activity summaries",
  "Quality review of guest interactions",
  "Clear boundary between what Guest Squad handles and what your team approves",
];

interface BoFuTrustBlockProps {
  handles?: string[];
  escalates?: string[];
}

export function BoFuTrustBlock({ handles, escalates }: BoFuTrustBlockProps = {}) {
  const showOperations = (handles && handles.length > 0) || (escalates && escalates.length > 0);

  return (
    <div className="rounded-lg border border-line bg-surface p-8">
      <h2 className="text-xl font-medium text-ink">
        Set up once. Stay in control.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Before coverage goes live, Guest Squad documents your property rules,
        escalation contacts, brand voice, channels, and guest-handling
        boundaries. Agents follow your approved instructions, escalate what
        your team needs to own, and provide reporting so nothing disappears
        overnight.
      </p>

      {/* Onboarding steps */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.num} className="flex flex-col gap-2">
            <span className="text-2xl font-semibold tabular-nums text-gold-dark/30">
              {step.num}
            </span>
            <p className="text-sm font-medium text-ink">{step.title}</p>
            <p className="text-xs leading-relaxed text-ink-soft">{step.body}</p>
          </div>
        ))}
      </div>

      {/* Supporting bullets */}
      <ul className="mt-8 grid gap-2 border-t border-line pt-6 sm:grid-cols-2">
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
            {b}
          </li>
        ))}
      </ul>

      {/* Handled / escalated — only when service data provides it */}
      {showOperations && (
        <div className="mt-8 grid gap-8 border-t border-line pt-6 md:grid-cols-2">
          {handles && handles.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                Handled directly
              </p>
              <ul className="flex flex-col gap-3">
                {handles.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                    <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {escalates && escalates.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Escalated to your team
              </p>
              <ul className="flex flex-col gap-3">
                {escalates.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-muted" />
                    <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
