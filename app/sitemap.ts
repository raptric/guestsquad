import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";

const PRIORITY: Record<string, number> = {
  "": 1,
  "/pilot": 0.9,
  "/services": 0.9,
  "/pricing": 0.9,
  "/contact": 0.8,
  "/resources": 0.6,
  "/about": 0.6,
  "/privacy-policy": 0.2,
  "/terms-of-service": 0.2,
};

const ASSET_ROUTES = [
  "/resources/missed-booking-calculator",
];

// Update these dates whenever meaningful content changes are made to a page
const LAST_MODIFIED: Record<string, string> = {
  // Static pages
  "": "2026-08-08",
  "/pilot": "2026-08-08",
  "/services": "2026-08-08",
  "/pricing": "2026-08-08",
  "/contact": "2026-08-08",
  "/resources": "2026-08-08",
  "/about": "2026-08-08",
  "/privacy-policy": "2026-08-06",
  "/terms-of-service": "2026-06-26",
  // Service pages — schema enriched with about, serviceOutput, mentions
  "/services/hotel-answering-service": "2026-08-08",
  "/services/reservation-support": "2026-08-08",
  "/services/guest-messaging": "2026-08-08",
  "/services/ota-inbox-management": "2026-08-08",
  "/services/after-hours-support": "2026-08-08",
  "/services/back-office-operations": "2026-08-08",
  "/services/airbnb-guest-support": "2026-08-08",
  "/services/vacation-rental-answering-service": "2026-08-08",
  // Resource articles — updated with inline PDF hooks today
  "/resources/hotel-answering-service-vs-ai-voice": "2026-08-07",
  "/resources/hotel-answering-service-vs-call-center": "2026-08-07",
  "/resources/hotel-answering-service-cost": "2026-08-07",
  "/resources/after-hours-hotel-support-checklist": "2026-08-07",
  "/resources/hotel-front-desk-overflow-support": "2026-08-07",
  "/resources/booking-com-message-support": "2026-08-07",
  "/resources/hotel-guest-messaging-sop-template": "2026-08-07",
  "/resources/missed-booking-calculator": "2026-08-08",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.keys(PRIORITY);
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const resourceRoutes = RESOURCES.map((r) => `/resources/${r.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes, ...ASSET_ROUTES].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(LAST_MODIFIED[route] ?? "2026-06-26"),
    changeFrequency: "monthly",
    priority: PRIORITY[route] ?? (route.startsWith("/services/") ? 0.8 : 0.5),
  }));
}
