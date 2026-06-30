"use client";

import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

function loadCalendlyAssets(cb: () => void) {
  if (window.Calendly) { cb(); return; }
  if (!document.querySelector('link[href*="calendly.com"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  script.onload = cb;
  document.head.appendChild(script);
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
  const handleClick = () => {
    loadCalendlyAssets(() => {
      window.Calendly?.initPopupWidget({ url: SITE.calendlyUrl });
    });
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
