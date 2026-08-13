export function TestimonialsBlock() {
  const items = [
    {
      quote:
        "We were losing reservation calls every night after 10pm. The pilot showed us exactly what was being missed — and within the first week it was clear coverage was working. We continued month-to-month after.",
      attr: "General Manager, 48-room boutique hotel",
      location: "Southeast US",
    },
    {
      quote:
        "Our OTA response times were hurting our ranking on Booking.com. Guest Squad took over the inbox during the pilot and we saw the response window drop significantly. The weekly report made it easy to verify.",
      attr: "Owner-operator, serviced apartment portfolio",
      location: "Finland",
    },
    {
      quote:
        "I didn't want to hire another front desk shift just for overflow. The pilot let us test whether a coverage service could actually follow our property's tone and escalation rules before we committed to anything.",
      attr: "Operations Manager, independent resort",
      location: "Pacific Northwest",
    },
  ];

  return (
    <div className="border-t border-line bg-surface">
      <div className="container py-10">
        <div className="mb-6 text-center">
          <a
            href="https://www.trustpilot.com/review/guestsquad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <span className="text-[#00b67a]">★★★★★</span>
            <span>Rated 5 stars on Trustpilot</span>
          </a>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            What operators say about Guest Squad
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.attr} className="rounded-xl border border-line bg-paper p-6">
              <svg className="h-5 w-5 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.quote}</p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-xs font-medium text-ink">{item.attr}</p>
                <p className="mt-0.5 text-xs text-ink-muted">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
