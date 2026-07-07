const STEPS = [
  "We review your current call, message, and OTA coverage gaps.",
  "We identify which hours and channels are most exposed.",
  "We recommend the smallest coverage plan that solves the issue.",
  "We document the onboarding steps, escalation rules, and reporting cadence.",
  "You decide whether to start with one gap or broader support.",
];

export function PostBookingSteps() {
  return (
    <div className="rounded-lg border border-line bg-paper p-8">
      <h2 className="text-xl font-medium text-ink">
        What happens after you book a coverage review
      </h2>
      <ol className="mt-5 flex flex-col gap-4">
        {STEPS.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="flex-shrink-0 text-lg font-medium text-gold-dark">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-ink-soft">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
