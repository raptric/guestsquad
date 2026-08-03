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
  "": "2026-08-04",
  "/pilot": "2026-08-04",
  "/services": "2026-08-04",
  "/pricing": "2026-07-27",
  "/contact": "2026-06-26",
  "/resources": "2026-08-04",
  "/about": "2026-07-27",
  "/privacy-policy": "2026-06-26",
  "/terms-of-service": "2026-06-26",
  // Service pages — updated with PDF download blocks
  "/services/hotel-answering-service": "2026-08-04",
  "/services/reservation-support": "2026-07-27",
  "/services/guest-messaging": "2026-08-04",
  "/services/ota-inbox-management": "2026-07-27",
  "/services/after-hours-support": "2026-07-27",
  "/services/back-office-operations": "2026-07-27",
  "/services/airbnb-guest-support": "2026-07-27",
  "/services/vacation-rental-answering-service": "2026-07-27",
  // Resource articles — updated with inline PDF hooks today
  "/resources/hotel-answering-service-vs-ai-voice": "2026-07-27",
  "/resources/hotel-answering-service-vs-call-center": "2026-08-04",
  "/resources/hotel-answering-service-cost": "2026-07-27",
  "/resources/after-hours-hotel-support-checklist": "2026-07-27",
  "/resources/hotel-front-desk-overflow-support": "2026-07-27",
  "/resources/booking-com-message-support": "2026-07-27",
  "/resources/hotel-guest-messaging-sop-template": "2026-07-27",
  "/resources/missed-booking-calculator": "2026-07-27",
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
