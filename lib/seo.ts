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
    alt: "GuestSquad — 24/7 human hotel guest support for calls, messages, OTA inboxes, and after-hours coverage.",
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
      "GuestSquad, a Raptric LLC company, provides 24/7 guest operations support for hotels, boutique properties, resorts, serviced apartments, and Airbnb operators, including reservation support, guest messaging, OTA inbox management, after-hours coverage, and back-office guest operations.",
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: "Worldwide",
    knowsAbout: [
      "Guest Reservation Service",
      "Hotel BPO",
      "Hotel Back Office Operations",
      "Virtual Front Desk",
    ],
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
    description:
      "24/7 guest operations support for hotels that can't afford missed bookings.",
    publisher: { "@type": "ProfessionalService", "@id": `${SITE.url}/#organization`, name: SITE.brand },
  };
}

/** Service schema for an individual service detail page. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    serviceType: name,
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.brand,
      url: SITE.url,
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType:
        "Hotels, boutique properties, resorts, serviced apartments, Airbnb and short-term rental operators",
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
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
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
        text: f.a,
      },
    })),
  };
}
