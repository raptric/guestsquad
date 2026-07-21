const GUARANTEES = [
  {
    commitment: "Live in 5 business days",
    detail:
      "From signed agreement to first live guest interaction. We brief agents on your property, rates, and policies before we touch a single call.",
    counter: "Enterprise BPOs take months.",
  },
  {
    commitment: "Agents briefed on your actual property",
    detail:
      "Every agent reviews your past guest Q&A, rates, policies, and brand voice before going live. No generic scripts. No guesswork.",
    counter: "Generic call centers use shared scripts.",
  },
  {
    commitment: "Every interaction logged",
    detail:
      "Every call, message, and OTA reply is documented and included in your weekly report. Nothing handled off the record.",
    counter: "Most services report call counts, not outcomes.",
  },
  {
    commitment: "Cancel any month",
    detail:
      "Plans are month-to-month with 30 days notice. No penalties, no lock-in, no awkward conversation. We earn renewal through performance.",
    counter: "Competitors lock you in for 6–12 months.",
  },
];

export function Guarantees() {
  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {GUARANTEES.map((g) => (
          <div key={g.commitment} className="flex flex-col gap-3 bg-paper px-8 py-10">
            <p className="text-lg font-medium text-ink">{g.commitment}</p>
            <p className="text-sm leading-relaxed text-ink-soft">{g.detail}</p>
            <p className="mt-auto pt-4 text-xs font-medium text-ink-muted border-t border-line">
              {g.counter}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink-muted">
        These are not benchmarks. These are commitments we make to every client from day one.
      </p>
    </div>
  );
}
