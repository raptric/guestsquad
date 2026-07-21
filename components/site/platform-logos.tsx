const OTA_LOGOS = [
  {
    name: "Booking.com",
    svg: (
      <svg width="142" height="38" viewBox="0 0 142 38" aria-label="Booking.com" role="img">
        <rect width="142" height="38" rx="5" fill="#003B95" />
        <text
          x="12"
          y="24"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.2"
        >
          booking
        </text>
        <circle cx="90" cy="11" r="4.5" fill="#009FE3" />
        <text
          x="85"
          y="24"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="white"
        >
          .com
        </text>
      </svg>
    ),
  },
  {
    name: "Expedia",
    svg: (
      <svg width="120" height="38" viewBox="0 0 120 38" aria-label="Expedia" role="img">
        <rect width="120" height="38" rx="5" fill="#FFC72C" />
        <text
          x="12"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#00355F"
          letterSpacing="-0.3"
        >
          expedia
        </text>
      </svg>
    ),
  },
  {
    name: "Airbnb",
    svg: (
      <svg width="108" height="38" viewBox="0 0 108 38" aria-label="Airbnb" role="img">
        {/* simplified bélo-like symbol */}
        <path
          d="M16 7 C16 4.2 18.2 2 21 2 C23.8 2 26 4.2 26 7 C26 9.5 24.2 11.8 21 15 C17.8 11.8 16 9.5 16 7Z M21 17 C17 22 11 26 9 29 C7.8 31.2 8.5 34 11 35 C13 35.8 15.5 34.5 17 32 L21 26 L25 32 C26.5 34.5 29 35.8 31 35 C33.5 34 34.2 31.2 33 29 C31 26 25 22 21 17Z"
          fill="#FF385C"
        />
        <text
          x="38"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#FF385C"
          letterSpacing="-0.3"
        >
          airbnb
        </text>
      </svg>
    ),
  },
  {
    name: "Vrbo",
    svg: (
      <svg width="88" height="38" viewBox="0 0 88 38" aria-label="Vrbo" role="img">
        <text
          x="10"
          y="26"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="#1C5FBF"
          letterSpacing="-0.5"
        >
          vrbo
        </text>
      </svg>
    ),
  },
  {
    name: "Hotels.com",
    svg: (
      <svg width="124" height="38" viewBox="0 0 124 38" aria-label="Hotels.com" role="img">
        <rect width="124" height="38" rx="5" fill="#D32323" />
        <text
          x="10"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.2"
        >
          hotels.com
        </text>
      </svg>
    ),
  },
];

const MESSAGING_LOGOS = [
  {
    name: "WhatsApp",
    svg: (
      <svg width="118" height="38" viewBox="0 0 118 38" aria-label="WhatsApp" role="img">
        {/* speech bubble circle */}
        <circle cx="19" cy="19" r="16" fill="#25D366" />
        <path
          d="M19 10 C13.5 10 9 14.2 9 19.3 C9 21.2 9.6 23 10.6 24.5 L9 29 L13.7 27.5 C15.2 28.4 16.9 28.9 18.8 28.9 C24.3 28.9 28.8 24.7 28.8 19.6 C28.8 17.1 27.8 14.8 26.1 13.1 C24.4 11.4 22 10.3 19 10Z M19 27.2 C17.3 27.2 15.7 26.7 14.3 25.9 L13.9 25.7 L11.3 26.5 L12.1 24 L11.9 23.6 C10.9 22.1 10.4 20.4 10.4 18.6 C10.4 14.7 14.3 11.5 19 11.5 C21.2 11.5 23.3 12.3 24.9 13.9 C26.5 15.4 27.5 17.4 27.5 19.6 C27.4 23.7 23.7 27.2 19 27.2Z M23.5 21.3 C23.3 21.2 22.1 20.6 21.9 20.5 C21.7 20.4 21.5 20.4 21.4 20.6 C21.2 20.8 20.7 21.4 20.6 21.6 C20.5 21.7 20.3 21.8 20.1 21.7 C19.9 21.6 19.2 21.3 18.3 20.5 C17.6 19.9 17.1 19.1 17 18.9 C16.9 18.7 17 18.6 17.1 18.5 L17.4 18.2 C17.5 18.1 17.6 17.9 17.7 17.8 C17.8 17.7 17.8 17.6 17.7 17.4 C17.6 17.3 17.1 16.1 16.9 15.6 C16.7 15.2 16.6 15.2 16.4 15.2 L16.1 15.2 C15.9 15.2 15.7 15.3 15.5 15.5 C15.3 15.7 14.7 16.3 14.7 17.5 C14.7 18.7 15.5 19.8 15.6 20 C15.8 20.1 17.1 22.1 19 23 C20 23.5 20.8 23.8 21.4 24 C22.4 24.3 23.3 24.3 24 24.1 C24.8 23.9 25.9 23.4 26.1 22.7 C26.3 22.1 26.3 21.6 26.2 21.5 C26.1 21.3 23.7 21.4 23.5 21.3Z"
          fill="white"
        />
        <text
          x="40"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#25D366"
          letterSpacing="-0.2"
        >
          WhatsApp
        </text>
      </svg>
    ),
  },
  {
    name: "SMS / Phone",
    svg: (
      <svg width="114" height="38" viewBox="0 0 114 38" aria-label="SMS / Phone" role="img">
        {/* phone handset icon */}
        <rect x="2" y="2" width="28" height="34" rx="5" fill="#4B5563" />
        <rect x="8" y="6" width="16" height="22" rx="2" fill="#E5E7EB" />
        <circle cx="16" cy="32" r="2" fill="#9CA3AF" />
        <text
          x="38"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#4B5563"
          letterSpacing="-0.2"
        >
          SMS / Phone
        </text>
      </svg>
    ),
  },
  {
    name: "Email",
    svg: (
      <svg width="88" height="38" viewBox="0 0 88 38" aria-label="Email" role="img">
        {/* envelope icon */}
        <rect x="2" y="8" width="28" height="22" rx="3" fill="#6B7280" />
        <polyline points="2,8 16,22 30,8" fill="none" stroke="white" strokeWidth="2" />
        <text
          x="38"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#6B7280"
          letterSpacing="-0.2"
        >
          Email
        </text>
      </svg>
    ),
  },
];

const PMS_LOGOS = [
  {
    name: "Cloudbeds",
    svg: (
      <svg width="118" height="38" viewBox="0 0 118 38" aria-label="Cloudbeds" role="img">
        {/* cloud shape */}
        <path d="M6 26 C3 26 1 24 1 21.5 C1 19.2 2.7 17.3 5 17 C4.7 16.4 4.5 15.7 4.5 15 C4.5 12.5 6.5 10.5 9 10.5 C9.5 10.5 9.9 10.6 10.3 10.7 C11.2 9.1 12.9 8 14.9 8 C18 8 20.4 10.4 20.4 13.5 C20.4 13.6 20.4 13.7 20.4 13.8 C21 13.6 21.6 13.5 22.2 13.5 C24.9 13.5 27 15.6 27 18.3 C27 21 24.9 23 22.2 23 L6 26Z" fill="#F85C2C" opacity="0.9" />
        <text
          x="32"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#F85C2C"
          letterSpacing="-0.2"
        >
          cloudbeds
        </text>
      </svg>
    ),
  },
  {
    name: "Mews",
    svg: (
      <svg width="82" height="38" viewBox="0 0 82 38" aria-label="Mews" role="img">
        <text
          x="10"
          y="26"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="#6C2DC7"
          letterSpacing="-0.5"
        >
          mews
        </text>
      </svg>
    ),
  },
  {
    name: "Opera PMS",
    svg: (
      <svg width="118" height="38" viewBox="0 0 118 38" aria-label="Opera PMS" role="img">
        {/* O circle mark */}
        <circle cx="18" cy="19" r="14" fill="none" stroke="#C8102E" strokeWidth="3.5" />
        <circle cx="18" cy="19" r="7" fill="#C8102E" />
        <text
          x="38"
          y="25"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#C8102E"
          letterSpacing="-0.2"
        >
          Opera PMS
        </text>
      </svg>
    ),
  },
  {
    name: "Guesty",
    svg: (
      <svg width="90" height="38" viewBox="0 0 90 38" aria-label="Guesty" role="img">
        <text
          x="8"
          y="26"
          fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"
          fontSize="18"
          fontWeight="700"
          fill="#0A2540"
          letterSpacing="-0.3"
        >
          guesty
        </text>
      </svg>
    ),
  },
];

export function PlatformLogos() {
  return (
    <div className="border-b border-line bg-surface py-10">
      <div className="container">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
          Channels and platforms we cover
        </p>

        {/* OTAs */}
        <div className="mb-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {OTA_LOGOS.map((logo) => (
            <div key={logo.name} title={logo.name} className="opacity-75 transition-opacity hover:opacity-100">
              {logo.svg}
            </div>
          ))}
        </div>

        {/* Messaging + PMS */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {[...MESSAGING_LOGOS, ...PMS_LOGOS].map((logo) => (
            <div key={logo.name} title={logo.name} className="opacity-75 transition-opacity hover:opacity-100">
              {logo.svg}
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[11px] text-ink-muted">
          OTA inboxes, PMS systems, and guest messaging channels — we work inside your existing stack.
        </p>
      </div>
    </div>
  );
}
