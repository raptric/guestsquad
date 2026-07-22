"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-data";

export function CalendlyInlineWidget() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preconnect hint
    if (!document.querySelector('link[rel="preconnect"][href*="calendly.com"]')) {
      const pc = document.createElement("link");
      pc.rel = "preconnect";
      pc.href = "https://assets.calendly.com";
      document.head.appendChild(pc);
    }

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
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    } else {
      // Script already injected (e.g. by CalendlyPopupButton on same page)
      setLoaded(true);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-line" style={{ height: "700px" }}>
      {/* Skeleton shown while Calendly loads */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface px-8 text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold-dark" />
          <p className="text-sm text-ink-soft">Loading calendar…</p>
          <p className="text-xs text-ink-muted">This usually takes a few seconds.</p>
        </div>
      )}
      <div
        className="calendly-inline-widget h-full w-full"
        data-url={`${SITE.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
        style={{ minWidth: "280px", height: "700px" }}
      />
    </div>
  );
}
