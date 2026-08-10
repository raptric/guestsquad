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

/** Organization schema — sitewide identity for the brand. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.brand,
    legalName: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    parentOrganization: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.parentUrl,
    },
    description:
      "Guest Squad, a Raptric LLC company, provides 24/7 guest operations support for hotels, boutique properties, resorts, serviced apartments, and Airbnb operators, including reservation support, guest messaging, OTA inbox management, after-hours coverage, and back-office guest operations.",
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
      url: `${SITE.url}/brand-assets/guestsquad-favicon-official.svg`,
    },
    sameAs: [
      "https://www.linkedin.com/company/guest-squad/",
      "https://raptric.com",
      "https://www.crunchbase.com/organization/guest-squad",
      "https://about.me/usman-khalid",
      "https://www.trustpilot.com/review/guestsquad.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: "English",
    },
    knowsAbout: [
      "Hotel Guest Operations",
      "Hotel Answering Service",
      "Guest Reservation Service",
      "Hotel BPO",
      "Hotel Back Office Operations",
      "Virtual Front Desk",
      "OTA Inbox Management",
      "Hotel OTA Messaging",
      "After-Hours Hotel Support",
      "Vacation Rental Answering Service",
      "Vacation Rental After-Hours Support",
      "Airbnb Guest Support",
      "Airbnb Guest Services",
      "Guest Operations Coverage Plans",
      "Booking.com Message Support",
      "Hotel 24/7 Coverage Without Staff",
      "Missed Booking Analysis",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Guest Operations Coverage Plans",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotel Answering Service", serviceType: "Hotel Answering Service", url: "https://guestsquad.com/services/hotel-answering-service", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reservation Support", serviceType: "Hotel Reservation Support", url: "https://guestsquad.com/services/reservation-support", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Guest Messaging", serviceType: "Hotel Guest Messaging", url: "https://guestsquad.com/services/guest-messaging", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "OTA Inbox Management", serviceType: "OTA Inbox Management", url: "https://guestsquad.com/services/ota-inbox-management", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "After-Hours Hotel Support", serviceType: "After-Hours Hotel Support", url: "https://guestsquad.com/services/after-hours-support", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vacation Rental Answering Service", serviceType: "Vacation Rental Answering Service", url: "https://guestsquad.com/services/vacation-rental-answering-service", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airbnb Guest Support", serviceType: "Airbnb Guest Support", url: "https://guestsquad.com/services/airbnb-guest-support", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Back-Office Guest Operations", serviceType: "Hotel Back-Office Operations", url: "https://guestsquad.com/services/back-office-operations", areaServed: "Worldwide", hoursAvailable: ALWAYS_AVAILABLE, provider: { "@type": "Organization", "@id": `${SITE.url}/#organization` } } },
      ],
    },
  };
}

/** WebSite schema — helps search/LLM engines understand site identity & structure. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.brand,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
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
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: SITE.phone,
      email: SITE.email,
      availableLanguage: ["English"],
    },
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
  description,
  path,
  about,
  serviceOutput,
  dateModified,
  audienceTypes,
}: {
  name: string;
  description: string;
  path: string;
  about?: { "@type": string; name: string };
  serviceOutput?: string;
  dateModified?: string;
  audienceTypes?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    serviceType: name,
    name,
    description,
    url: `${SITE.url}${path}`,
    ...(dateModified && { dateModified }),
    ...(about && { about }),
    ...(serviceOutput && { serviceOutput }),
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.brand,
      url: SITE.url,
    },
    hoursAvailable: ALWAYS_AVAILABLE,
    areaServed: "Worldwide",
    audience: audienceTypes
      ? audienceTypes.map((t) => ({ "@type": "Audience", audienceType: t }))
      : { "@type": "Audience", audienceType: "Hotels, boutique properties, resorts, serviced apartments, Airbnb and short-term rental operators" },
    offers: {
      "@type": "Offer",
      description: "2-week pilot review for qualified properties, then month-to-month coverage with no long-term contract.",
      url: `${SITE.url}/pilot`,
      availability: "https://schema.org/InStock",
      areaServed: "Worldwide",
      seller: { "@type": "Organization", "@id": `${SITE.url}/#organization` },
    },
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
}: {
  name: string;
  description: string;
  path: string;
  primaryImageUrl?: string;
  primaryImageAlt?: string;
  mentions?: { "@type": string; name: string }[];
  about?: Record<string, string>;
  audienceTypes?: string[];
  mainEntityId?: string;
}) {
  const url = `${SITE.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
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
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".answer-block"],
    },
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

/** Article schema for comparison/resource pages. */
export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  about,
  mentions,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  about?: { type: string; name: string; url?: string; serviceType?: string; areaServed?: string };
  mentions?: { type: string; name: string }[];
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
    author: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.brand, url: SITE.url },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.brand,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/brand-assets/guestsquad-icon.svg` },
    },
    ...(about && { about: { "@type": about.type, name: about.name, ...(about.url && { url: about.url }), ...(about.serviceType && { serviceType: about.serviceType }), ...(about.areaServed && { areaServed: about.areaServed }) } }),
    ...(mentions && { mentions: mentions.map((m) => ({ "@type": m.type, name: m.name })) }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".answer-block"],
    },
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
