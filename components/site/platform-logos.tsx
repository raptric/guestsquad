const INK = "#1C1917";
const MUTED = "#78716C";

const OTA_LOGOS = [
  {
    name: "Booking.com",
    svg: (
      <svg width="110" height="22" viewBox="0 0 110 22" aria-label="Booking.com" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">booking</text>
        <circle cx="68" cy="6" r="3.5" fill={INK} />
        <text x="63" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK}>.com</text>
      </svg>
    ),
  },
  {
    name: "Expedia",
    svg: (
      <svg width="72" height="22" viewBox="0 0 72 22" aria-label="Expedia" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Expedia</text>
      </svg>
    ),
  },
  {
    name: "Airbnb",
    svg: (
      <svg width="64" height="22" viewBox="0 0 64 22" aria-label="Airbnb" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Airbnb</text>
      </svg>
    ),
  },
  {
    name: "Vrbo",
    svg: (
      <svg width="48" height="22" viewBox="0 0 48 22" aria-label="Vrbo" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.3">Vrbo</text>
      </svg>
    ),
  },
  {
    name: "Hotels.com",
    svg: (
      <svg width="90" height="22" viewBox="0 0 90 22" aria-label="Hotels.com" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Hotels.com</text>
      </svg>
    ),
  },
];

const PMS_LOGOS = [
  {
    name: "Cloudbeds",
    svg: (
      <svg width="90" height="22" viewBox="0 0 90 22" aria-label="Cloudbeds" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Cloudbeds</text>
      </svg>
    ),
  },
  {
    name: "Mews",
    svg: (
      <svg width="50" height="22" viewBox="0 0 50 22" aria-label="Mews" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Mews</text>
      </svg>
    ),
  },
  {
    name: "Opera PMS",
    svg: (
      <svg width="96" height="22" viewBox="0 0 96 22" aria-label="Opera PMS" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Opera PMS</text>
      </svg>
    ),
  },
  {
    name: "Guesty",
    svg: (
      <svg width="58" height="22" viewBox="0 0 58 22" aria-label="Guesty" role="img">
        <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill={INK} letterSpacing="-0.2">Guesty</text>
      </svg>
    ),
  },
];

const CHANNEL_CHIPS = ["Phone", "SMS", "Email", "WhatsApp"];

export function PlatformLogos() {
  return (
    <div className="border-b border-line bg-paper py-12">
      <div className="container">
        {/* Intro */}
        <div className="mb-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: MUTED }}>
            Channels and platforms we cover
          </p>
          <h2 className="text-lg font-medium text-ink">
            Works inside the systems your team already uses
          </h2>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-soft">
            OTA inboxes, PMS tools, and guest communication channels — without forcing your team into a new operating stack.
          </p>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-8">
          {/* OTA inboxes */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
              OTA inboxes
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {OTA_LOGOS.map((logo) => (
                <div key={logo.name} className="opacity-60 transition-opacity hover:opacity-90">
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-line" />

          {/* PMS / hotel systems */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
              PMS / hotel systems
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {PMS_LOGOS.map((logo) => (
                <div key={logo.name} className="opacity-60 transition-opacity hover:opacity-90">
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-line" />

          {/* Guest communication channels */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
              Guest communication channels
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
              {CHANNEL_CHIPS.map((channel) => (
                <span
                  key={channel}
                  className="rounded-md border border-line px-3 py-1.5 text-sm font-medium text-ink-soft"
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-[11px] text-ink-muted">
          Guest Squad works inside your existing stack rather than forcing your team into a new workflow.
        </p>
      </div>
    </div>
  );
}
