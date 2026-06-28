export const SITE = {
  name: "GuestSquad",
  brand: "GuestSquad",
  legalName: "Raptric LLC",
  parentName: "Raptric",
  parentUrl: "https://raptric.com",
  tagline: "Never miss a guest. Never lose a booking.",
  subtitle: "Your Dedicated Guest Team",
  url: "https://guestsquad.com",
  calendlyUrl: "https://calendly.com/guestsquad/15min-demo",
  email: "info@guestsquad.com",
  phone: "+1 509 588 7311",
  phoneHref: "+15095887311",
};

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
};

export const SERVICES: ServiceSummary[] = [
  {
    slug: "hotel-answering-service",
    title: "Hotel Answering Service",
    shortTitle: "Answering Service",
    description:
      "24/7 hotel call answering for reservation questions, guest requests, and general inquiries — every call answered by a trained person, not a phone tree.",
  },
  {
    slug: "vacation-rental-answering-service",
    title: "Vacation Rental Answering Service",
    shortTitle: "Vacation Rental Support",
    description:
      "24/7 answering and messaging coverage for Airbnb, Vrbo, and short-term rental operators — built for hosts who can't be on call around the clock.",
  },
  {
    slug: "reservation-support",
    title: "Reservation Support",
    shortTitle: "Reservations",
    description:
      "Inbound and outbound reservation calls, quotes, and bookings handled with your rates, policies, and tone — every time the phone rings.",
  },
  {
    slug: "guest-messaging",
    title: "Guest Messaging",
    shortTitle: "Guest Messaging",
    description:
      "SMS, WhatsApp, email, and in-app guest messages answered promptly across the full stay journey, from inquiry to checkout.",
  },
  {
    slug: "ota-inbox-management",
    title: "OTA Inbox Management",
    shortTitle: "OTA Inbox",
    description:
      "Booking.com, Expedia, and Airbnb inboxes monitored and answered, so OTA leads convert before they go cold.",
  },
  {
    slug: "after-hours-support",
    title: "After-Hours Hotel Support",
    shortTitle: "After-Hours",
    description:
      "Overnight and weekend front-desk coverage for calls and messages your on-site team can't take outside working hours.",
  },
  {
    slug: "airbnb-guest-support",
    title: "Airbnb Guest Support",
    shortTitle: "Airbnb Support",
    description:
      "Round-the-clock guest support for short-term rental hosts and serviced apartment operators — check-in help, issues, and FAQs handled.",
  },
  {
    slug: "back-office-operations",
    title: "Back-Office Guest Operations",
    shortTitle: "Back Office",
    description:
      "Night audit, OTA reconciliation, and guest-billing support handled daily — so revenue leakage gets caught instead of buried in next month's close.",
  },
];

export const PROPERTY_TYPES = [
  "Independent hotel",
  "Boutique property",
  "Resort",
  "Serviced apartments",
  "Airbnb / short-term rental",
  "Other",
];

export const PROPERTIES_COUNT_OPTIONS = [
  "1 property",
  "2–5 properties",
  "6–15 properties",
  "16–50 properties",
  "50+ properties",
];

export const VOLUME_OPTIONS = [
  "Under 500 / month",
  "500–2,000 / month",
  "2,000–5,000 / month",
  "5,000+ / month",
];
