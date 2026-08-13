"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { ButtonLink } from "@/components/site/button-link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { cn } from "@/lib/utils";

const CAMPAIGN_PATHS = ["/pilot"];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (CAMPAIGN_PATHS.includes(pathname)) {
    return (
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <img
              src="/brand-assets/guestsquad-logo-horizontal.svg"
              alt="Guest Squad"
              className="h-8 w-auto"
            />
          </Link>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="nav_campaign">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/brand-assets/guestsquad-logo-horizontal.svg"
            alt="Guest Squad"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-ink-soft transition-colors hover:text-ink",
                pathname === link.href && "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="nav">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-2">
              <CoverageReviewButton variant="gold" className="w-full" ctaLocation="nav_mobile">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
