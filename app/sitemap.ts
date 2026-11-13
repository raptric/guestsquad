import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";

const ASSET_ROUTES = [
  "/resources/missed-booking-calculator",
];

// Update these dates whenever meaningful content changes are made to a page
const LAST_MODIFIED: Record<string, string> = {
  // Static pages
  "": "2026-11-13",
  "/services": "2026-11-13",
  "/contact": "2026-08-08",
  "/resources": "2026-11-14",
  "/about": "2026-11-13",
  "/privacy-policy": "2026-10-26",
  "/terms-of-service": "2026-08-08",
  // Service pages
  "/services/hotel-answering-service": "2026-11-13",
  "/services/reservation-support": "2026-11-13",
  "/services/guest-messaging": "2026-11-13",
  "/services/central-reservations": "2026-11-13",
  "/services/ota-inbox-management": "2026-11-13",
  "/services/after-hours-support": "2026-11-13",
  "/services/back-office-operations": "2026-11-13",
  "/services/airbnb-guest-support": "2026-11-13",
  "/services/vacation-rental-answering-service": "2026-11-13",
  // Resource articles — updated with insight links and schema today
  "/resources/hotel-answering-service-vs-ai-voice": "2026-10-26",
  "/resources/hotel-answering-service-vs-call-center": "2026-10-26",
  "/resources/hotel-answering-service-cost": "2026-11-14",
  "/resources/after-hours-hotel-support-checklist": "2026-11-14",
  "/resources/hotel-front-desk-overflow-support": "2026-11-14",
  "/resources/booking-com-message-support": "2026-11-14",
  "/resources/hotel-guest-messaging-sop-template": "2026-08-11",
  "/resources/missed-booking-calculator": "2026-11-14",
};

const STATIC_ROUTES = ["", "/services", "/contact", "/resources", "/about", "/privacy-policy", "/terms-of-service"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_ROUTES;
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const resourceRoutes = RESOURCES.map((r) => `/resources/${r.slug}`);
  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes, ...ASSET_ROUTES].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(LAST_MODIFIED[route] ?? "2026-08-11"),
  }));
}
