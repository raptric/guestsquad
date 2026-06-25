const TYPES = [
  { title: "Independent Hotels", description: "Full reservation, messaging, and after-hours coverage." },
  { title: "Boutique Properties", description: "Brand-matched tone across every guest touchpoint." },
  { title: "Resorts", description: "High-volume call and message handling across departments." },
  { title: "Serviced Apartments", description: "Check-in coordination and guest support without front desk staffing." },
  { title: "Airbnb & Short-Term Rentals", description: "24/7 host-side guest support across multiple listings." },
];

export function PropertyTypes() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {TYPES.map((t) => (
        <div key={t.title} className="bg-paper p-6">
          <h3 className="text-sm font-medium text-ink">{t.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
        </div>
      ))}
    </div>
  );
}
