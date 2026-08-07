import Link from "next/link";
import { SITE } from "@/lib/site-data";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";

export function CampaignFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <img
                src="/brand-assets/guestsquad-logo-horizontal.svg"
                alt="Guest Squad"
                className="h-7 w-auto"
              />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-ink-muted">
              24/7 human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <CalendlyPopupButton variant="gold" size="sm" ctaLocation="campaign_footer">
              Book a Coverage Review
            </CalendlyPopupButton>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-ink-muted sm:justify-end">
              <a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a>
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-ink">{SITE.phone}</a>
              <Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-ink">Terms of Service</Link>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} {SITE.brand}. All rights reserved. Guest operations support, not a replacement for your team.
        </p>
      </div>
    </footer>
  );
}
