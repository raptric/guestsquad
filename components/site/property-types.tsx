import Link from "next/link";

const TYPES = [
  { title: "Independent Hotels", description: "Full reservation, messaging, and after-hours coverage.", href: "/services/reservation-support" },
  { title: "Boutique Properties", description: "Brand-matched tone across every guest touchpoint.", href: "/services/guest-messaging" },
  { title: "Resorts", description: "High-volume call and message handling across departments.", href: "/services/back-office-operations" },
  { title: "Serviced Apartments", description: "Check-in coordination and guest support without front desk staffing.", href: "/services/vacation-rental-answering-service" },
  { title: "Airbnb & Short-Term Rentals", description: "24/7 host-side guest support across multiple listings.", href: "/services/airbnb-guest-support" },
];

export function PropertyTypes() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {TYPES.map((t) => (
        <Link key={t.title} href={t.href} className="group bg-paper p-6 transition-colors hover:bg-surface">
          <h3 className="text-sm font-medium text-ink group-hover:text-gold-dark">{t.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
        </Link>
      ))}
    </div>
  );
}
