import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/pricing", "/about", "/contact", "/privacy-policy", "/terms-of-service"];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
