import Link from "next/link";
import { SERVICES, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/brand-assets/guestsquad-logo-horizontal.svg"
              alt="GuestSquad"
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              24/7 guest operations support for hotels, boutique properties,
              resorts, serviced apartments, and Airbnb operators.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-soft hover:text-ink"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/about" className="text-sm text-ink-soft hover:text-ink">About</Link></li>
              <li><Link href="/resources" className="text-sm text-ink-soft hover:text-ink">Resources</Link></li>
              <li><Link href="/pricing" className="text-sm text-ink-soft hover:text-ink">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-ink-soft hover:text-ink">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-ink-soft hover:text-ink">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-ink-soft hover:text-ink">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Get in touch
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phoneHref}`} className="hover:text-ink">{SITE.phone}</a></li>
              <li>
                <a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Book a 15-min demo →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-xs text-ink-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.brand}, a product of{" "}
            <a
              href={SITE.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              {SITE.legalName}
            </a>
            . All rights reserved.
          </p>
          <p>Guest operations support, not a replacement for your team.</p>
        </div>
      </div>
    </footer>
  );
}
