const METRICS = [
  { value: "24/7", label: "Coverage across calls, messages, and OTA inboxes" },
  { value: "30–50%", label: "Typical cost reduction vs. staffing the same coverage in-house" },
  { value: "10–40×", label: "Revenue typically recovered per dollar spent on active OTA reconciliation" },
  { value: "95%+", label: "Reduction in manual reconciliation errors when audits run daily" },
];

export function Metrics() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="bg-paper px-6 py-10 text-center">
            <p className="text-3xl font-medium text-ink md:text-4xl">{m.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{m.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink-muted">
        Industry benchmarks for outsourced hospitality operations. Your results depend on current volume, channels, and gaps.
      </p>
    </div>
  );
}
