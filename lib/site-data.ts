export const SITE = {
  name: "Guest Squad",
  brand: "Guest Squad",
  legalName: "Raptric LLC",
  parentName: "Raptric",
  parentUrl: "https://raptric.com",
  tagline: "Never miss a guest. Never lose a booking.",
  subtitle: "Your Dedicated Guest Team",
  url: "https://guestsquad.com",
  orgId: "https://guestsquad.com/#organization",
  siteId: "https://guestsquad.com/#website",
  calendlyUrl: "https://calendly.com/guestsquad-info/30min",
  email: "info@guestsquad.com",
  phone: "+1 509 588 7311",
  phoneHref: "+15095887311",
};

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
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
    shortTitle: "Hotel Answering Service",
    description:
      "Live phone coverage for independent hotels and boutique properties, with every call answered by a hospitality-trained agent.",
  },
  {
    slug: "central-reservations",
    title: "Central Reservations Desk",
    shortTitle: "Central Reservations Desk",
    description:
      "A coordinated reservations operation for hotel groups and portfolios, handling multi-property enquiries through your systems.",
  },
  {
    slug: "vacation-rental-answering-service",
    title: "Vacation Rental Answering Service",
    shortTitle: "Vacation Rental Answering Service",
    description:
      "Listing-specific guest operations for professional STR portfolios, covering calls, OTA inboxes, and coordination.",
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
