const GUARANTEES = [
  {
    commitment: "Live in 5 business days",
    detail:
      "From signed agreement to first live guest interaction. We brief agents on your property, rates, and policies before we touch a single call.",
    counter: "Enterprise BPOs take months.",
  },
  {
    commitment: "Hospitality-trained staff, ready for your guests from day one.",
    detail:
      "Every team member reviews your past guest Q&A, rates, policies, and brand voice before going live. Prepared for your property, not a generic script.",
    counter: "Built around your operation, not a shared call center pool.",
  },
  {
    commitment: "Every interaction logged",
    detail:
      "Every call, message, and OTA reply is documented and included in your weekly report. Nothing handled off the record.",
    counter: "Most services report call counts, not outcomes.",
  },
  {
    commitment: "No contracts. No lock-in.",
    detail:
      "Plans are month-to-month with 30 days notice. We would rather earn your business through performance than hold you to a term.",
    counter: "Some providers require 6–12 month commitments upfront.",
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
