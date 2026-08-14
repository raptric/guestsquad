const MUTED = "#A8A29E";
const GROUP_LABEL = "text-[9px] font-semibold uppercase tracking-[0.18em]";

// Real brand SVG logos — presented at reduced opacity for visual restraint
const OTA_LOGOS = [
  {
    name: "Booking.com",
    w: 120,
    svg: (
      <svg width="120" height="28" viewBox="0 0 120 28" aria-label="Booking.com" role="img" fill="none">
        <text x="0" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="800" fill="#003580" letterSpacing="-0.3">booking</text>
        <circle cx="74" cy="7" r="4" fill="#009FE3" />
        <text x="69" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="800" fill="#003580">.com</text>
      </svg>
    ),
  },
  {
    name: "Expedia",
    w: 96,
    svg: (
      <svg width="96" height="28" viewBox="0 0 96 28" aria-label="Expedia" role="img" fill="none">
        {/* Expedia diamond */}
        <polygon points="12,2 22,14 12,26 2,14" fill="#FFC72C" />
        <polygon points="12,7 18,14 12,21 6,14" fill="#00355F" />
        <text x="28" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="15" fontWeight="700" fill="#00355F" letterSpacing="-0.2">expedia</text>
      </svg>
    ),
  },
  {
    name: "Airbnb",
    w: 84,
    svg: (
      <svg width="84" height="28" viewBox="0 0 84 28" aria-label="Airbnb" role="img" fill="none">
        {/* Bélo mark simplified */}
        <path d="M11 3.5C11 2.1 12.1 1 13.5 1C14.9 1 16 2.1 16 3.5C16 4.7 15.1 5.9 13.5 7.7C11.9 5.9 11 4.7 11 3.5Z M13.5 9.5C11.5 12 8.5 14.2 7.5 16C6.8 17.3 7.2 18.9 8.5 19.4C9.5 19.8 10.8 19.2 11.5 18L13.5 15L15.5 18C16.2 19.2 17.5 19.8 18.5 19.4C19.8 18.9 20.2 17.3 19.5 16C18.5 14.2 15.5 12 13.5 9.5Z" fill="#FF385C" />
        <text x="26" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="15" fontWeight="700" fill="#FF385C" letterSpacing="-0.3">airbnb</text>
      </svg>
    ),
  },
  {
    name: "Vrbo",
    w: 56,
    svg: (
      <svg width="56" height="28" viewBox="0 0 56 28" aria-label="Vrbo" role="img" fill="none">
        <text x="0" y="21" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="800" fill="#1B5EBE" letterSpacing="-0.4">vrbo</text>
      </svg>
    ),
  },
  {
    name: "Hotels.com",
    w: 104,
    svg: (
      <svg width="104" height="28" viewBox="0 0 104 28" aria-label="Hotels.com" role="img" fill="none">
        {/* H mark */}
        <rect x="0" y="2" width="18" height="24" rx="3" fill="#D32323" />
        <rect x="3" y="5" width="4" height="18" fill="white" />
        <rect x="11" y="5" width="4" height="18" fill="white" />
        <rect x="3" y="12" width="12" height="4" fill="white" />
        <text x="24" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="700" fill="#D32323" letterSpacing="-0.2">hotels.com</text>
      </svg>
    ),
  },
];

const PMS_LOGOS = [
  {
    name: "Cloudbeds",
    w: 110,
    svg: (
      <svg width="110" height="28" viewBox="0 0 110 28" aria-label="Cloudbeds" role="img" fill="none">
        {/* Cloud shape */}
        <path d="M4 20C2 20 0.5 18.5 0.5 16.5C0.5 14.6 1.9 13.1 3.7 12.9C3.5 12.4 3.4 11.8 3.4 11.2C3.4 9.1 5.1 7.4 7.2 7.4C7.6 7.4 8 7.5 8.3 7.6C9.1 6.3 10.5 5.4 12.2 5.4C14.9 5.4 17.1 7.6 17.1 10.3C17.1 10.4 17.1 10.5 17.1 10.5C17.6 10.4 18.1 10.3 18.6 10.3C21 10.3 22.9 12.2 22.9 14.6C22.9 17 21 19 18.6 19L4 20Z" fill="#F85C2C" />
        <text x="27" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="700" fill="#F85C2C" letterSpacing="-0.2">cloudbeds</text>
      </svg>
    ),
  },
  {
    name: "Mews",
    w: 62,
    svg: (
      <svg width="62" height="28" viewBox="0 0 62 28" aria-label="Mews" role="img" fill="none">
        <text x="0" y="21" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="800" fill="#6C2DC7" letterSpacing="-0.4">mews</text>
      </svg>
    ),
  },
  {
    name: "Opera PMS",
    w: 106,
    svg: (
      <svg width="106" height="28" viewBox="0 0 106 28" aria-label="Opera PMS" role="img" fill="none">
        {/* O double-ring mark */}
        <circle cx="13" cy="14" r="12" stroke="#C8102E" strokeWidth="2.5" fill="none" />
        <circle cx="13" cy="14" r="6.5" stroke="#C8102E" strokeWidth="2" fill="none" />
        <text x="30" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="700" fill="#C8102E" letterSpacing="-0.2">Opera PMS</text>
      </svg>
    ),
  },
  {
    name: "Guesty",
    w: 66,
    svg: (
      <svg width="66" height="28" viewBox="0 0 66 28" aria-label="Guesty" role="img" fill="none">
        <text x="0" y="21" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" fontSize="17" fontWeight="800" fill="#0A2540" letterSpacing="-0.3">guesty</text>
      </svg>
    ),
  },
];

// Communication channels — simple icon + label, quiet treatment
const CHANNELS = [
  {
    name: "Phone",
    icon: (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <path d="M2 1h3l1.5 3.5L5 6a8 8 0 004 4l1.5-1.5L14 10v3a1 1 0 01-1 1A12 12 0 011 2a1 1 0 011-1z" stroke="#78716C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "SMS",
    icon: (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <path d="M11 1H2a1 1 0 00-1 1v7a1 1 0 001 1h2l2 2 2-2h3a1 1 0 001-1V2a1 1 0 00-1-1z" stroke="#78716C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Email",
    icon: (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <rect x="1" y="2.5" width="11" height="8" rx="1.2" stroke="#78716C" strokeWidth="1.2"/>
        <path d="M1 4l5.5 4L12 4" stroke="#78716C" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    icon: (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="6.5" r="5.5" stroke="#78716C" strokeWidth="1.2"/>
        <path d="M4 6.5c0 1.4 1.1 2.5 2.5 2.5.5 0 .9-.1 1.3-.4l1.2.3-.3-1.2c.2-.4.3-.8.3-1.2C9 5.1 7.9 4 6.5 4S4 5.1 4 6.5z" stroke="#78716C" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function PlatformLogos() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="container py-10">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:gap-14 md:items-start">

          {/* Left — copy */}
          <div className="md:pt-1">
            <p className={`${GROUP_LABEL} mb-3`} style={{ color: MUTED }}>
              Channels and platforms we cover
            </p>
            <h2 className="text-base font-semibold leading-snug text-ink">
              Works inside the systems your team already uses
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              OTA inboxes, PMS tools, and guest communication channels — without forcing your team into a new operating stack.
            </p>
          </div>

          {/* Right — grouped logos */}
          <div className="flex flex-col gap-5">

            {/* OTA inboxes */}
            <div>
              <p className={`${GROUP_LABEL} mb-3`} style={{ color: MUTED }}>OTA inboxes</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {OTA_LOGOS.map((l) => (
                  <div key={l.name} className="opacity-60 transition-opacity hover:opacity-90">
                    {l.svg}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line/50" />

            {/* PMS */}
            <div>
              <p className={`${GROUP_LABEL} mb-3`} style={{ color: MUTED }}>PMS / hotel systems</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {PMS_LOGOS.map((l) => (
                  <div key={l.name} className="opacity-60 transition-opacity hover:opacity-90">
                    {l.svg}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line/50" />

            {/* Guest communication channels */}
            <div>
              <p className={`${GROUP_LABEL} mb-3`} style={{ color: MUTED }}>Guest communication channels</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {CHANNELS.map((ch) => (
                  <span key={ch.name} className="flex items-center gap-1.5 text-sm text-ink-soft opacity-70">
                    {ch.icon}
                    {ch.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        <p className="mt-8 text-[11px]" style={{ color: MUTED }}>
          Guest Squad works inside your existing stack rather than forcing your team into a new workflow.
        </p>
      </div>
    </div>
  );
}
