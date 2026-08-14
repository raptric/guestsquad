const INK = "#1C1917";
const MUTED = "#A8A29E";

// Consistent wordmark height: 16px cap height, all dark
function Wordmark({ label, width }: { label: string; width: number }) {
  return (
    <svg width={width} height="18" viewBox={`0 0 ${width} 18`} aria-label={label} role="img">
      <text
        x="0"
        y="14"
        fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
        fontSize="13"
        fontWeight="700"
        fill={INK}
        letterSpacing="-0.2"
      >
        {label}
      </text>
    </svg>
  );
}

const OTA = [
  { name: "Booking.com", w: 98 },
  { name: "Expedia", w: 62 },
  { name: "Airbnb", w: 56 },
  { name: "Vrbo", w: 40 },
  { name: "Hotels.com", w: 84 },
];

const PMS = [
  { name: "Cloudbeds", w: 80 },
  { name: "Mews", w: 44 },
  { name: "Opera PMS", w: 84 },
  { name: "Guesty", w: 54 },
];

const CHANNELS = ["Phone", "SMS", "Email", "WhatsApp"];

const GROUP_LABEL = "text-[9px] font-semibold uppercase tracking-[0.18em]";

export function PlatformLogos() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="container py-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16 md:items-start">

          {/* Left — copy */}
          <div>
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
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {OTA.map((l) => (
                  <div key={l.name} className="opacity-55 hover:opacity-85 transition-opacity">
                    <Wordmark label={l.name} width={l.w} />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line/60" />

            {/* PMS */}
            <div>
              <p className={`${GROUP_LABEL} mb-3`} style={{ color: MUTED }}>PMS / hotel systems</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {PMS.map((l) => (
                  <div key={l.name} className="opacity-55 hover:opacity-85 transition-opacity">
                    <Wordmark label={l.name} width={l.w} />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line/60" />

            {/* Channels */}
            <div>
              <p className={`${GROUP_LABEL} mb-3`} style={{ color: MUTED }}>Guest communication channels</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {CHANNELS.map((ch) => (
                  <span key={ch} className="text-sm font-medium opacity-55" style={{ color: INK }}>
                    {ch}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        <p className="mt-7 text-[11px]" style={{ color: MUTED }}>
          Guest Squad works inside your existing stack rather than forcing your team into a new workflow.
        </p>
      </div>
    </div>
  );
}
