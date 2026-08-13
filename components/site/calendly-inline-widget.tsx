"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-data";

export function CalendlyInlineWidget({
  prefill,
}: {
  prefill?: { name?: string; email?: string };
}) {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-surface px-8 text-center">
          {/* Animated calendar icon */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-line bg-paper shadow-sm">
            <div className="absolute -top-2 left-3 h-3 w-1.5 rounded-full bg-gold-dark" />
            <div className="absolute -top-2 right-3 h-3 w-1.5 rounded-full bg-gold-dark" />
            <div className="grid grid-cols-3 gap-1 px-3 pt-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-sm bg-line"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
            {/* Pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-2xl border border-gold/30" />
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Fetching available times…</p>
            <p className="mt-1 text-xs text-ink-muted">This usually takes a few seconds.</p>
          </div>
          {/* Progress bar */}
          <div className="h-0.5 w-32 overflow-hidden rounded-full bg-line">
            <div className="h-full w-1/3 animate-slide rounded-full bg-gold-dark" />
          </div>
        </div>
      )}
      <div
        className="calendly-inline-widget h-full w-full"
        data-url={(() => {
          const params = new URLSearchParams({ hide_event_type_details: "1", hide_gdpr_banner: "1" });
          if (prefill?.name) params.set("name", prefill.name);
          if (prefill?.email) params.set("email", prefill.email);
          return `${SITE.calendlyUrl}?${params.toString()}`;
        })()}
        style={{ minWidth: "280px", height: "700px" }}
      />
    </div>
  );
}
