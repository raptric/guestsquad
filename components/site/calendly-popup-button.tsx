"use client";

import { useEffect } from "react";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

function injectCalendlyAssets() {
  if (typeof window === "undefined") return;
  if (!document.querySelector('link[href*="calendly.com"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
  if (!document.querySelector('script[src*="calendly.com"]')) {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }
}

interface CalendlyPopupButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ButtonProps, "variant" | "size"> {
  children: React.ReactNode;
}

export function CalendlyPopupButton({
  children,
  variant = "gold",
  size = "lg",
  className,
  ...props
}: CalendlyPopupButtonProps) {
  // Preload assets on mount so the popup opens instantly on click
  useEffect(() => {
    injectCalendlyAssets();
  }, []);

  const handleClick = () => {
    trackEvent("calendly_open", { source_page: window.location.pathname });
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: SITE.calendlyUrl });
    } else {
      // Fallback: assets still loading, wait for script
      injectCalendlyAssets();
      const script = document.querySelector('script[src*="calendly.com"]');
      if (script) {
        script.addEventListener("load", () => {
          window.Calendly?.initPopupWidget({ url: SITE.calendlyUrl });
        }, { once: true });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
