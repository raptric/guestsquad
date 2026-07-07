"use client";
import { useState, useEffect } from "react";
import { Download, X, Loader2 } from "lucide-react";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";

interface DownloadGateProps {
  asset: string;
  pdfHref: string;
  ctaLabel?: string;
  /** Render as a full-width block button (for cards) */
  block?: boolean;
  /** Render as an inline text link (for use inside paragraphs) */
  inline?: boolean;
}

const ASSET_TITLES: Record<string, string> = {
  "after-hours-checklist": "After-Hours Guest Coverage Checklist",
  "guest-messaging-sop": "Hotel Guest Messaging SOP Template",
  "ota-inbox-response-checklist": "OTA Inbox Response Checklist",
  "coverage-gap-assessment": "Guest Coverage Gap Assessment",
  "sample-weekly-report": "Sample Weekly Guest Operations Report",
};

const PROPERTY_TYPES = [
  "Independent hotel",
  "Boutique hotel",
  "Resort",
  "Serviced apartments",
  "Vacation rental / STR",
  "Other",
];

export function DownloadGate({ asset, pdfHref, ctaLabel = "Download PDF", block, inline }: DownloadGateProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function openModal() {
    setStatus("idle");
    setEmail("");
    setPropertyType("");
    setWebsite("");
    setOpen(true);
  }

  function closeModal() {
    if (status === "loading") return;
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/download-gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, propertyType, asset, website }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      // Trigger download
      const link = document.createElement("a");
      link.href = pdfHref;
      link.download = pdfHref.split("/").pop() ?? "download.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setStatus("error");
    }
  }

  const assetTitle = ASSET_TITLES[asset] ?? "this resource";

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={openModal}
        className={
          inline
            ? "text-gold-dark underline underline-offset-4 hover:text-gold"
            : block
            ? "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
            : "inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
        }
      >
        {!inline && <Download className="h-4 w-4" />}
        {ctaLabel}
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Download form"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal card */}
          <div className="relative z-10 w-full max-w-md rounded-xl border border-line bg-paper shadow-xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-line px-6 py-5">
              <div>
                <p className="text-sm font-medium text-ink">Get the free PDF</p>
                <p className="mt-0.5 text-xs text-ink-soft">{assetTitle}</p>
              </div>
              <button
                onClick={closeModal}
                className="ml-4 shrink-0 rounded-md p-1 text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {status === "done" ? (
                <div className="flex flex-col items-center py-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface">
                    <Download className="h-5 w-5 text-gold-dark" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-ink">Your download has started.</p>
                  <p className="mt-1 text-xs text-ink-soft">We also sent a copy to your email.</p>
                  <a
                    href={pdfHref}
                    download
                    className="mt-4 text-xs text-gold-dark underline underline-offset-4 hover:text-gold"
                  >
                    Click here if the download did not start
                  </a>
                  <div className="mt-6 border-t border-line pt-5 text-center">
                    <p className="text-xs text-ink-soft">
                      If this exposed a real coverage gap, book a review and we&rsquo;ll help you prioritize what to fix first.
                    </p>
                    <div className="mt-3">
                      <CalendlyPopupButton variant="gold" size="sm">
                        Book a Coverage Review
                      </CalendlyPopupButton>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="mt-4 text-xs text-ink-muted underline underline-offset-2 hover:text-ink"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-ink">
                      Work email <span className="text-gold-dark">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@yourproperty.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-gold-dark focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-ink">
                      Property type <span className="text-ink-muted">(optional)</span>
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink focus:border-gold-dark focus:outline-none"
                    >
                      <option value="">Select one</option>
                      {PROPERTY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {status === "error" && (
                    <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-600">
                      Something went wrong. Please try again or email us at info@guestsquad.com.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    {status === "loading" ? "Sending…" : "Get the PDF"}
                  </button>

                  <p className="text-center text-xs text-ink-muted">
                    No spam. We send the PDF once and may follow up once.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
