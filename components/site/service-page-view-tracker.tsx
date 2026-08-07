"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ServicePageViewTracker({ serviceName }: { serviceName: string }) {
  useEffect(() => {
    trackEvent("service_page_view", { service_name: serviceName });
  }, [serviceName]);
  return null;
}
