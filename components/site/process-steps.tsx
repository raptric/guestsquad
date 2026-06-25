export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
      {steps.map((s) => (
        <div key={s.step} className="bg-paper p-7">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {s.step}
          </span>
          <h3 className="mt-3 text-base font-medium text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {s.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export const DEFAULT_PROCESS: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Discovery call",
    description:
      "We learn your property, systems, SOPs, and where guests are currently falling through the cracks.",
  },
  {
    step: "Step 2",
    title: "Setup & training",
    description:
      "Your account is briefed on your PMS, rates, policies, and brand voice before a single guest is contacted.",
  },
  {
    step: "Step 3",
    title: "Go live",
    description:
      "Coverage begins on the channels you choose — calls, messages, OTA inbox, or after-hours only.",
  },
  {
    step: "Step 4",
    title: "Reporting & refinement",
    description:
      "You receive regular reporting on volume, response times, and recovered revenue, with adjustments as needed.",
  },
];
