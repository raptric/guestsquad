import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

/**
 * Builds consistent per-page metadata (title, description, canonical,
 * Open Graph, Twitter card) so every route controls its own social
 * preview instead of inheriting the homepage's.
 */
export function buildMetadata({
  title,
  description,
  path = "",
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = {
    url: `${SITE.url}/brand-assets/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "Guest Squad — 24/7 human hotel guest support for calls, messages, OTA inboxes, and after-hours coverage.",
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.brand,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/** Organization schema — home page and /about only. All other pages use @id reference. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.brand,
    alternateName: "GuestSquad",
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    description:
      "Guest Squad is a hospitality call center providing Guest Support Operations for hotels, hotel groups and vacation rental operators: guest calls, reservations, guest messaging, OTA inboxes and back office support, after hours, on overflow or 24/7.",
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "40 Corbin Ave",
      addressLocality: "Bay Shore",
      addressRegion: "NY",
      postalCode: "11706",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: `${SITE.url}/brand-assets/favicon-512x512.png`,
      contentUrl: `${SITE.url}/brand-assets/favicon-512x512.png`,
      width: 512,
      height: 512,
      caption: "Guest Squad",
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}/brand-assets/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    sameAs: [
      "https://www.linkedin.com/company/guest-squad/",
      "https://www.crunchbase.com/organization/guest-squad",
      "https://www.trustpilot.com/review/guestsquad.com",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: "English",
      },
    ],
    naics: "561421",
    founder: [
      {
        "@type": "Person",
        "@id": `${SITE.url}/about#usman-khalid`,
        name: "Usman Khalid",
        jobTitle: "Founder",
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/about#khadija-khalid`,
        name: "Khadija Khalid",
        jobTitle: "Co-founder",
      },
    ],
    knowsAbout: [
      "Hotel answering service",
      "Vacation rental answering service",
      "Hotel reservation call center",
      "Central reservations",
      "After-hours hotel front desk support",
      "Hotel reservation support",
      "Hotel guest messaging",
      "OTA inbox management",
      "Airbnb guest support",
      "Hotel night audit",
      "Hotel back office operations",
      "Hospitality call center",
      { "@type": "Thing", name: "Call centre", sameAs: "https://en.wikipedia.org/wiki/Call_centre" },
      { "@type": "Thing", name: "Answering service", sameAs: "https://en.wikipedia.org/wiki/Answering_service" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Guest Support Operations",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/hotel-answering-service#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/vacation-rental-answering-service#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/central-reservations#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/after-hours-support#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/reservation-support#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/guest-messaging#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/ota-inbox-management#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/airbnb-guest-support#service` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE.url}/services/back-office-operations#service` } },
      ],
    },
  };
}

/** WebSite schema — home page only. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.brand,
    alternateName: ["GuestSquad", "guestsquad.com"],
    url: `${SITE.url}/`,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/** AboutPage schema — /about only. Use alongside organizationSchema(). */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/about#webpage`,
    url: `${SITE.url}/about`,
    name: "About Guest Squad",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    mainEntity: { "@id": `${SITE.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE.url}/brand-assets/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    breadcrumb: { "@id": `${SITE.url}/about#breadcrumb` },
  };
}

/** ContactPage schema for the /contact route. */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.url}/contact#contactpage`,
    url: `${SITE.url}/contact`,
    name: "Contact Guest Squad | Book a Coverage Review",
    description:
      "Contact Guest Squad to book a coverage review for hotel answering service, guest messaging, OTA inbox management, after-hours support, and managed guest operations coverage.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };
}

const ALWAYS_AVAILABLE = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "00:00",
  closes: "23:59",
};

/** Service schema for an individual service detail page. */
export function serviceSchema({
  name,
  serviceType,
  description,
  path,
  serviceOutput,
  audienceTypes,
  subjectOf,
  isRelatedTo,
}: {
  name: string;
  serviceType?: string;
  description: string;
  path: string;
  serviceOutput?: string;
  audienceTypes?: string[];
  subjectOf?: { "@id": string }[];
  isRelatedTo?: { "@id": string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    name,
    serviceType: serviceType ?? name,
    category: "Hospitality call center",
    description,
    url: `${SITE.url}${path}`,
    provider: { "@id": `${SITE.url}/#organization` },
    brand: { "@id": `${SITE.url}/#organization` },
    ...(serviceOutput && { serviceOutput }),
    hoursAvailable: ALWAYS_AVAILABLE,
    areaServed: "Worldwide",
    audience: audienceTypes
      ? audienceTypes.map((t) => ({ "@type": "BusinessAudience", audienceType: t }))
      : [{ "@type": "BusinessAudience", audienceType: "Independent hotels" }],
    availableChannel: {
      "@type": "ServiceChannel",
      name: "Book a Coverage Review",
      serviceUrl: `${SITE.url}/contact`,
    },
    ...(isRelatedTo && isRelatedTo.length > 0 && { isRelatedTo }),
    ...(subjectOf && subjectOf.length > 0 && { subjectOf }),
    mainEntityOfPage: { "@id": `${SITE.url}${path}#webpage` },
  };
}

/** WebPage schema — ties page entities together for entity coherence. */
export function webPageSchema({
  name,
  description,
  path,
  primaryImageUrl,
  primaryImageAlt,
  mentions,
  about,
  audienceTypes,
  mainEntityId,
  pageType = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  primaryImageUrl?: string;
  primaryImageAlt?: string;
  mentions?: { "@type": string; name?: string; "@id"?: string; sameAs?: string }[];
  about?: Record<string, string>;
  audienceTypes?: string[];
  mainEntityId?: string;
  pageType?: string;
}) {
  const url = `${SITE.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: about ?? { "@type": "Service", "@id": `${url}#service` },
    ...(primaryImageUrl && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: primaryImageUrl,
        description: primaryImageAlt,
      },
    }),
    ...(mentions && mentions.length > 0 && { mentions }),
    ...(audienceTypes && audienceTypes.length > 0 && {
      audience: audienceTypes.map((t) => ({ "@type": "Audience", audienceType: t })),
    }),
    ...(mainEntityId && { mainEntity: { "@id": mainEntityId } }),
  };
}

/** BreadcrumbList schema — pairs with the visible Breadcrumbs component. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

/** Article schema for comparison/resource and insight pages. */
export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  about,
  mentions,
  articleSection,
  keywords,
  timeRequired,
  wordCount,
  audience,
  citation,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  about?: { type: string; name: string; url?: string; serviceType?: string; areaServed?: string };
  mentions?: { type: string; name: string; id?: string }[];
  articleSection?: string;
  keywords?: string;
  timeRequired?: string;
  wordCount?: number;
  audience?: { audienceType: string }[];
  citation?: { name: string; url: string }[];
}) {
  const url = `${SITE.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    ...(articleSection && { articleSection }),
    ...(keywords && { keywords }),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    ...(timeRequired && { timeRequired }),
    ...(wordCount && { wordCount }),
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE.url}/brand-assets/og-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/brand-assets/og-image-square.jpg`,
        width: 1200,
        height: 1200,
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/brand-assets/og-image-4x3.jpg`,
        width: 1200,
        height: 900,
      },
    ],
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.brand,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.brand,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/brand-assets/guestsquad-favicon-official.svg`,
      },
    },
    isPartOf: { "@id": `${SITE.url}/#website` },
    ...(about && { about: { "@type": about.type, name: about.name, ...(about.url && { url: about.url }), ...(about.serviceType && { serviceType: about.serviceType }), ...(about.areaServed && { areaServed: about.areaServed }) } }),
    ...(audience && audience.length > 0 && { audience: audience.map((a) => ({ "@type": "Audience", audienceType: a.audienceType })) }),
    ...(mentions && { mentions: mentions.map((m) => ({ "@type": m.type, name: m.name, ...(m.id && { "@id": m.id }) })) }),
    ...(citation && citation.length > 0 && { citation: citation.map((c) => ({ "@type": "WebPage", name: c.name, url: c.url })) }),
  };
}

/** CollectionPage + ItemList schema for the /services hub. */
export function servicesHubSchema() {
  const services = [
    { name: "Hotel Answering Service", path: "/services/hotel-answering-service" },
    { name: "Vacation Rental Answering Service", path: "/services/vacation-rental-answering-service" },
    { name: "Central Reservations Desk", path: "/services/central-reservations" },
    { name: "After-Hours Hotel Front Desk Support", path: "/services/after-hours-support" },
    { name: "Hotel Reservation Support", path: "/services/reservation-support" },
    { name: "Hotel Guest Messaging", path: "/services/guest-messaging" },
    { name: "OTA Inbox Management", path: "/services/ota-inbox-management" },
    { name: "Airbnb Guest Services", path: "/services/airbnb-guest-support" },
    { name: "Hotel Night Audit Support and Back Office Operations", path: "/services/back-office-operations" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/services#webpage`,
    url: `${SITE.url}/services`,
    name: "Services",
    description: "Live hospitality coverage for hotels, hotel groups and vacation rental operators. Reservation calls, OTA inboxes and guest communication handled by trained people.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${SITE.url}/services#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Services" },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: services.length,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE.url}${s.path}`,
        name: s.name,
      })),
    },
  };
}

/** WebApplication schema for interactive tools. */
export function webApplicationSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${SITE.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#webapp`,
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: { "@id": `${SITE.url}/#organization` },
  };
}

/** FAQPage schema — feed it the same FAQ arrays already rendered on the page. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      },
    })),
  };
}
