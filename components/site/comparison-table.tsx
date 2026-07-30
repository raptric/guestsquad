export type ComparisonRow = {
  feature: string;
  a: string;
  b: string;
  c?: string;
};

export function ComparisonTable({
  columnA,
  columnB,
  columnC,
  rows,
}: {
  columnA: string;
  columnB: string;
  columnC?: string;
  rows: ComparisonRow[];
}) {
  const hasThird = Boolean(columnC);

  return (
    <div className="overflow-hidden rounded-lg border border-line">
      {/* Header */}
      <div
        className={`hidden border-b border-line bg-surface sm:grid ${
          hasThird ? "grid-cols-[1.1fr_1fr_1fr_1fr]" : "grid-cols-[1.1fr_1fr_1fr]"
        }`}
      >
        <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Factor
        </div>
        <div className="border-l border-line px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gold-dark">
          {columnA}
        </div>
        <div className="border-l border-line px-5 py-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {columnB}
        </div>
        {hasThird && (
          <div className="border-l border-line px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {columnC}
          </div>
        )}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={row.feature}
          className={`grid ${
            hasThird ? "sm:grid-cols-[1.1fr_1fr_1fr_1fr]" : "sm:grid-cols-[1.1fr_1fr_1fr]"
          } ${i !== rows.length - 1 ? "border-b border-line" : ""}`}
        >
          <div className="bg-surface px-5 py-4 text-sm font-medium text-ink sm:bg-transparent sm:py-5">
            {row.feature}
          </div>
          <div className="border-t border-line px-5 py-5 text-sm leading-relaxed text-ink-soft sm:border-l sm:border-t-0 sm:bg-gold/5">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gold-dark sm:hidden">
              {columnA}
            </span>
            {row.a}
          </div>
          <div className="border-t border-line px-5 py-5 text-sm leading-relaxed text-ink-soft sm:border-l sm:border-t-0">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted sm:hidden">
              {columnB}
            </span>
            {row.b}
          </div>
          {hasThird && row.c && (
            <div className="border-t border-line px-5 py-5 text-sm leading-relaxed text-ink-soft sm:border-l sm:border-t-0 sm:bg-gold/5">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gold-dark sm:hidden">
                {columnC}
              </span>
              {row.c}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
