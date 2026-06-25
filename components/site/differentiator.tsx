const GENERIC = [
  "Shared agents juggling unrelated industries",
  "Scripted answers with no property knowledge",
  "No visibility into what was actually said",
  "Treated as a cost center to minimize",
];

const CONCIERGEX = [
  "Agents trained specifically on your property and policies",
  "Familiar with hospitality terms, rate logic, and OTA workflows",
  "Every call and message logged and reported back to you",
  "Treated as an extension of your front desk, not a vendor",
];

export function Differentiator() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-line bg-surface p-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Generic call center
        </h3>
        <ul className="mt-5 flex flex-col gap-3.5">
          {GENERIC.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-muted" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-gold/30 bg-paper p-8 shadow-soft">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
          ConciergeX by Raptric
        </h3>
        <ul className="mt-5 flex flex-col gap-3.5">
          {CONCIERGEX.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
