import { Check } from "lucide-react";

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

export function BoFuTrustBlock() {
  return (
    <div className="bg-ink px-6 py-14 md:px-0">
      <div className="container">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            How we onboard
          </p>
          <h2 className="text-2xl font-medium leading-snug text-paper md:text-3xl">
            Set up once. Covered correctly from day one.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/55">
            Before coverage goes live, Guest Squad documents your property rules,
            escalation contacts, brand voice, channels, and guest-handling boundaries.
            Agents follow your approved instructions, escalate what your team needs to own,
            and provide reporting so nothing disappears overnight.
          </p>
        </div>

        {/* Onboarding steps */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex flex-col gap-3 rounded-lg border border-paper/10 bg-paper/5 p-5"
            >
              <span className="text-3xl font-bold tabular-nums text-gold-dark/50">
                {step.num}
              </span>
              <p className="text-sm font-semibold text-paper">{step.title}</p>
              <p className="text-xs leading-relaxed text-paper/55">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Supporting bullets */}
        <ul className="mt-8 grid gap-2.5 rounded-lg border border-paper/10 bg-paper/5 p-6 sm:grid-cols-2">
          {BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-paper/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
