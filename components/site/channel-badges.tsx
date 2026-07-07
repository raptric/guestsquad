const CHANNELS = [
  "Booking.com inbox",
  "Expedia Partner Central",
  "Airbnb messages",
  "Vrbo messages",
  "SMS",
  "WhatsApp",
  "Email",
  "Guest app messages",
  "PMS workflows",
  "OTA extranets",
  "Reservation calls",
  "After-hours calls",
];

export function ChannelBadges() {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
        Channels and workflows we support
      </p>
      <div className="flex flex-wrap gap-2">
        {CHANNELS.map((c) => (
          <span
            key={c}
            className="rounded border border-line bg-paper px-3 py-1.5 text-xs text-ink-soft"
          >
            {c}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-muted">
        GuestSquad works with your existing guest communication channels and documented workflows. Platform names are used descriptively only.
      </p>
    </div>
  );
}
