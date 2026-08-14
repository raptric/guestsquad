export function TestimonialsBlock() {
  const items = [
    {
      quote:
        "We were losing reservation calls every night after 10pm. Within the first week of coverage it was clear it was working.",
      attr: "General Manager, 48-room boutique hotel",
      location: "Southeast US",
    },
    {
      quote:
        "Our OTA response times were hurting our Booking.com ranking. Guest Squad took over the inbox and the response window dropped significantly.",
      attr: "Owner-operator, serviced apartment portfolio",
      location: "UK",
    },
    {
      quote:
        "The pilot let us test whether a coverage service could actually follow our property's tone and escalation rules before we committed to anything.",
      attr: "Operations Manager, independent resort",
      location: "Pacific Northwest",
    },
  ];

  return (
    <div className="border-t border-line bg-paper">
      <div className="container py-10">
        <div className="mb-6 text-center">
          <a
            href="https://www.trustpilot.com/review/guestsquad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-gold-dark"
          >
            <span className="font-bold text-[#00b67a]">★★★★★</span>
            <span>Rated 5 stars on Trustpilot</span>
          </a>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            What early operators say about Guest Squad
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.attr}
              className="rounded-xl border border-[#E5E0D8] bg-[#F7F5F2] p-5 shadow-sm"
            >
              <svg className="h-5 w-5 text-gold/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.quote}</p>
              <div className="mt-4 border-t border-[#E5E0D8] pt-3">
                <p className="text-xs font-semibold text-ink">{item.attr}</p>
                <p className="mt-0.5 text-xs text-ink-soft">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
