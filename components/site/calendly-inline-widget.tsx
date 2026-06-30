"use client";

import { useEffect } from "react";
import { SITE } from "@/lib/site-data";

export function CalendlyInlineWidget() {
  useEffect(() => {
    if (!document.querySelector('link[href*="assets.calendly.com"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="assets.calendly.com"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full overflow-hidden rounded-lg border border-line"
      data-url={`${SITE.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
      style={{ minWidth: "280px", height: "700px" }}
    />
  );
}
