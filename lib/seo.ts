import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

/**
 * Builds consistent per-page metadata (title, description, canonical,
 * Open Graph, Twitter card) so every route controls its own social
 * preview instead of inheriting the homepage's.
 */
export function buildMetadata({
  title,
  socialTitle,
  description,
  path = "",
  noindex = false,
}: {
  title: string;
  socialTitle?: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const ogTitle = socialTitle ?? title;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: `${ogTitle} — ${SITE.brand}`,
      description,
      url,
      siteName: SITE.brand,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${ogTitle} — ${SITE.brand}`,
      description,
    },
  };
}

/** Organization schema — sitewide identity for the brand. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
      "GuestSquad, a Raptric LLC company, provides 24/7 guest operations support for hotels, boutique properties, resorts, serviced apartments, and Airbnb operators — reservation support, guest messaging, OTA inbox management, after-hours coverage, and back-office guest operations.",
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
    name: SITE.brand,
    url: SITE.url,
    description:
      "24/7 guest operations support for hotels that can't afford missed bookings.",
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
    serviceType: name,
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: {
      "@type": "ProfessionalService",
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
