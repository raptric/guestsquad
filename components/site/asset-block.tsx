"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DownloadGate } from "@/components/site/download-gate";

const PDF_ASSET_SLUGS: Record<string, string> = {
  "/resources/after-hours-checklist": "after-hours-checklist",
  "/resources/guest-messaging-sop": "guest-messaging-sop",
  "/resources/ota-inbox-response-checklist": "ota-inbox-response-checklist",
  "/resources/coverage-gap-assessment": "coverage-gap-assessment",
  "/resources/sample-weekly-report": "sample-weekly-report",
};

interface AssetLink {
  label: string;
  href: string;
}

interface AssetBlockProps {
  heading?: string;
  assets: AssetLink[];
}

export function AssetBlock({ heading = "Tools for your property", assets }: AssetBlockProps) {
  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">{heading}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {assets.map((a) => {
          const assetSlug = PDF_ASSET_SLUGS[a.href];

          if (assetSlug) {
            return (
              <li key={a.href}>
                <DownloadGate
                  asset={assetSlug}
                  pdfHref={`/downloads/${assetSlug}.pdf`}
                  ctaLabel={a.label}
                />
              </li>
            );
          }

          return (
            <li key={a.href}>
              <Link
                href={a.href}
                className="group inline-flex items-center gap-2 text-sm text-gold-dark underline-offset-4 hover:underline"
              >
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                {a.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
