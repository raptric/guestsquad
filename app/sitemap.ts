import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";

const PRIORITY: Record<string, number> = {
  "": 1,
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

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.keys(PRIORITY);
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const resourceRoutes = RESOURCES.map((r) => `/resources/${r.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes, ...ASSET_ROUTES].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/resources/") ? "yearly" : "monthly",
    priority: PRIORITY[route] ?? (route.startsWith("/services/") ? 0.8 : 0.5),
  }));
}
