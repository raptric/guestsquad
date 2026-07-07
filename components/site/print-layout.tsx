"use client";
import { Printer } from "lucide-react";

interface PrintLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}

export function PrintLayout({ title, subtitle, badge, children }: PrintLayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Controls bar — hidden when printing */}
      <div className="no-print border-b border-line bg-paper">
        <div className="container flex flex-col items-start justify-between gap-3 py-4 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-soft">
            View, save, or print this document using your browser&rsquo;s print function.
          </p>
          <button
            onClick={() => window.print()}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
          >
            <Printer className="h-4 w-4" />
            Save as PDF
          </button>
        </div>
      </div>

      {/* Document */}
      <div className="mx-auto max-w-[820px] shadow-soft print:max-w-none print:shadow-none">
        {/* Header */}
        <div className="bg-ink px-10 py-8 print:px-8">
          <div className="flex items-center justify-between">
            <img
              src="/brand-assets/guestsquad-logo-horizontal.svg"
              alt="GuestSquad"
              className="h-7 w-auto brightness-0 invert"
            />
            {badge && (
              <span className="rounded bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                {badge}
              </span>
            )}
          </div>
          <h1 className="mt-6 text-2xl font-medium leading-snug text-paper">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-paper/60">{subtitle}</p>}
        </div>

        {/* Gold rule */}
        <div className="h-[3px] bg-gold" />

        {/* Body */}
        <div className="bg-paper px-10 py-8 print:px-8">{children}</div>

        {/* Document footer */}
        <div className="border-t border-line bg-paper px-10 py-5 print:px-8">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-muted">guestsquad.com</span>
            <span className="text-xs text-ink-muted">
              &copy; {new Date().getFullYear()} GuestSquad. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
