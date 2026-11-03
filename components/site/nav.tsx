"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { ButtonLink } from "@/components/site/button-link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { PilotFormButton } from "@/components/site/pilot-form-button";
import { cn } from "@/lib/utils";

const FLAGSHIP_LINKS = [
  {
    label: "Digital Front Desk",
    href: "/services/digital-front-desk",
    description: "Remote reception for hotels and serviced properties",
  },
  {
    label: "Central Reservations Desk",
    href: "/services/central-reservations",
    description: "Coordinated reservations for hotel groups and portfolios",
  },
  {
    label: "Vacation Rental Guest Operations",
    href: "/services/vacation-rental-guest-operations",
    description: "Guest communication and coordination for STR portfolios",
  },
];

const CAMPAIGN_PATHS = ["/pilot"];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (CAMPAIGN_PATHS.includes(pathname)) {
    return (
      <header className="no-print sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <img
              src="/brand-assets/guestsquad-logo-horizontal.svg"
              alt="Guest Squad"
              className="h-8 w-auto"
            />
          </Link>
          <PilotFormButton variant="gold" size="sm">
            Request Pilot Review
          </PilotFormButton>
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
          {NAV_LINKS.map((link) =>
            link.href === "/services" ? (
              <div key={link.href} ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink",
                    pathname.startsWith("/services") && "text-ink"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-line bg-paper shadow-lg">
                    <div className="p-2">
                      <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                        Flagship offers
                      </p>
                      {FLAGSHIP_LINKS.map((fl) => (
                        <Link
                          key={fl.href}
                          href={fl.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-3 py-2.5 hover:bg-surface"
                        >
                          <p className="text-sm font-medium text-ink">{fl.label}</p>
                          <p className="mt-0.5 text-xs text-ink-muted">{fl.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
            {NAV_LINKS.map((link) =>
              link.href === "/services" ? (
                <div key={link.href}>
                  <p className="px-2 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                    Services
                  </p>
                  {FLAGSHIP_LINKS.map((fl) => (
                    <Link
                      key={fl.href}
                      href={fl.href}
                      onClick={() => setOpen(false)}
                      className="block rounded px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink"
                    >
                      {fl.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </Link>
              )
            )}
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
