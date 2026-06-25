"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { ButtonLink } from "@/components/site/button-link";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-lg font-semibold tracking-tight text-ink">
            Guest<span className="text-gold-dark">Squad</span>
          </span>
          <span className="hidden text-xs text-ink-muted sm:inline">by Raptric</span>
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
          <ButtonLink href="/contact" variant="gold" size="sm">
            Book a Demo
          </ButtonLink>
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
              <ButtonLink href="/contact" variant="gold" className="w-full">
                Book a Demo
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
