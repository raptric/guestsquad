const MUTED = "#A8A29E";
const GROUP_LABEL = "text-[9px] font-semibold uppercase tracking-[0.18em]";

function ClearbitLogo({ domain, name, h = 22 }: { domain: string; name: string; h?: number }) {
  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      style={{ height: `${h}px`, width: "auto", objectFit: "contain" }}
      loading="lazy"
    />
  );
}

// Icon + label — using exact brand icon URLs provided
function IconLogo({ src, name, iconSize = 20 }: { src: string; name: string; iconSize?: number }) {
  return (
    <span className="flex items-center gap-2">
      <img
        src={src}
        alt={name}
        style={{ height: `${iconSize}px`, width: `${iconSize}px`, objectFit: "contain" }}
        loading="lazy"
      />
      <span
        style={{
          fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          color: "#1C1917",
          letterSpacing: "-0.1px",
        }}
      >
        {name}
      </span>
    </span>
  );
}

const OTA = [
  { src: "https://cf2.bstatic.com/static/img/favicon/9ca83ba2a5a3293ff07452cb24949a5843af4592.svg", name: "Booking.com" },
  { src: "https://www.expedia.com/favicon.ico",                                                     name: "Expedia" },
  { src: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-152x152-7b7c6444b63d8b6ebad9dae7169e5ed6.png", name: "Airbnb" },
  { src: "https://www.vrbo.com/favicon.ico",                                                        name: "Vrbo" },
  { src: "https://www.hotels.com/favicon.ico",                                                      name: "Hotels.com" },
];

const PMS = [
  { domain: "cloudbeds.com",      name: "Cloudbeds",    h: 22 },
  { domain: "mews.com",           name: "Mews",         h: 22 },
  { domain: "oracle.com",         name: "Opera PMS",    h: 22 },
  { domain: "guesty.com",         name: "Guesty",       h: 22 },
  { domain: "reznexus.com",       name: "RezNexus",     h: 20 },
];

const CHANNELS = [
  {
    name: "Phone",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 1h2.5l1 2.5-1.5 1a7 7 0 003.5 3.5l1-1.5L11 7.5V10a1 1 0 01-1 1A9 9 0 011 2a1 1 0 011-1z" stroke={MUTED} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "SMS",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M10 1H2a1 1 0 00-1 1v6a1 1 0 001 1h2l2 2 2-2h2a1 1 0 001-1V2a1 1 0 00-1-1z" stroke={MUTED} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Email",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <rect x="1" y="2.5" width="10" height="7" rx="1" stroke={MUTED} strokeWidth="1.1"/>
        <path d="M1 4l5 3.5L11 4" stroke={MUTED} strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5" stroke={MUTED} strokeWidth="1.1"/>
        <path d="M3.5 6c0 1.4 1.1 2.5 2.5 2.5.4 0 .8-.1 1.1-.3l1.1.3-.3-1.1c.2-.3.3-.7.3-1.1C8.2 4.9 7.2 4 6 4S3.5 4.9 3.5 6z" stroke={MUTED} strokeWidth="0.9" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function PlatformLogos() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="container py-9">
        <div className="grid gap-8 md:grid-cols-[2fr_3fr] md:gap-12 md:items-start">

          {/* Left — copy */}
          <div className="md:pt-0.5">
            <p className={`${GROUP_LABEL} mb-2.5`} style={{ color: MUTED }}>
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
          <div className="flex flex-col gap-4">

            {/* OTA inboxes */}
            <div>
              <p className={`${GROUP_LABEL} mb-2.5`} style={{ color: MUTED }}>OTA inboxes</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {OTA.map((l) => (
                  <div key={l.name} className="opacity-70 transition-opacity hover:opacity-100">
                    <IconLogo src={l.src} name={l.name} iconSize={20} />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line/40" />

            {/* PMS */}
            <div>
              <p className={`${GROUP_LABEL} mb-2.5`} style={{ color: MUTED }}>PMS / hotel systems</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {PMS.map((l) => (
                  <div key={l.name} className="opacity-70 transition-opacity hover:opacity-100">
                    <ClearbitLogo domain={l.domain} name={l.name} h={l.h} />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line/40" />

            {/* Communication channels */}
            <div>
              <p className={`${GROUP_LABEL} mb-2.5`} style={{ color: MUTED }}>Guest communication channels</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {CHANNELS.map((ch) => (
                  <span key={ch.name} className="flex items-center gap-1.5 text-sm text-ink-soft opacity-60">
                    {ch.icon}
                    {ch.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
