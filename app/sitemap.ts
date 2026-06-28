import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/resources", "/pricing", "/about", "/contact", "/privacy-policy", "/terms-of-service"];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const resourceRoutes = RESOURCES.map((r) => `/resources/${r.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
