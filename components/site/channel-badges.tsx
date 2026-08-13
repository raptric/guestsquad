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
    <div className="bg-ink">
      <div className="container flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-paper">
          Channels &amp; workflows we support
        </p>
        <div className="flex flex-wrap gap-2">
          {CHANNELS.map((c) => (
            <span
              key={c}
              className="rounded border border-paper/10 bg-paper/5 px-3 py-1.5 text-xs text-paper/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
