"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CalendlyInlineWidget } from "@/components/site/calendly-inline-widget";

const PROPERTY_SIZES = [
  "Under 20 rooms",
  "20–49 rooms",
  "50–99 rooms",
  "100+ rooms",
  "Multiple properties",
];

const HELP_OPTIONS = [
  "After-hours guest support",
  "Missed / unanswered calls",
  "Reservation calls",
  "Front desk overflow",
  "OTA / guest messaging",
  "Late check-in & access support",
  "24/7 guest support",
  "Reduce front desk workload",
  "Not sure — I'd like a recommendation",
];

function getUtmParam(search: string, key: string): string {
  return new URLSearchParams(search).get(key) ?? "";
}

interface CoverageReviewModalProps {
  open: boolean;
  onClose: () => void;
  ctaLocation?: string;
}

export function CoverageReviewModal({ open, onClose, ctaLocation }: CoverageReviewModalProps) {
  const [mounted, setMounted] = useState(false);
  const [helpWith, setHelpWith] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const startedRef = useRef(false);

  function handleFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("coverage_review_form_start", { cta_location: ctaLocation || "unknown" });
  }
  const [prefill, setPrefill] = useState<{ name: string; email: string }>({ name: "", email: "" });
  const [tracking, setTracking] = useState({
    source_page: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    if (!open) return;
    startedRef.current = false;
    const search = window.location.search;
    setTracking({
      source_page: window.location.pathname,
      referrer: document.referrer,
      utm_source: getUtmParam(search, "utm_source"),
      utm_medium: getUtmParam(search, "utm_medium"),
      utm_campaign: getUtmParam(search, "utm_campaign"),
    });
  }, [open]);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleClose() {
    if (status === "loading") return;
    onClose();
  }

  function resetAndClose() {
    setStatus("idle");
    setHelpWith([]);
    onClose();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement)?.value ?? "";

    const name = get("name");
    const email = get("email");

    const data = {
      name,
      email,
      companyName: get("companyName"),
      propertySize: get("propertySize"),
      helpWith,
      phone: get("phone"),
      propertyWebsite: get("propertyWebsite"),
      website: get("website"),
      ...tracking,
    };

    try {
      const res = await fetch("/api/coverage-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      trackEvent("coverage_review_submit", {
        property_size: data.propertySize || "unknown",
        help_with: helpWith.join(","),
        cta_location: ctaLocation || "unknown",
      });
      setPrefill({ name, email });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Request a Coverage Review"
    >
      <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="flex min-h-full items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-2xl rounded-xl border border-line bg-paper shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-line px-6 py-5">
          <div className="text-left">
            <p className="text-base font-semibold text-ink">Request a Coverage Review</p>
            <p className="mt-0.5 text-xs text-ink-soft">We&rsquo;ll reach out within one business day to confirm your slot.</p>
          </div>
          <button
            onClick={handleClose}
            className="ml-4 shrink-0 rounded-md p-1 text-ink-muted transition-colors hover:bg-surface hover:text-ink"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {status === "done" ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-gold/10 px-4 py-3">
                <Check className="h-5 w-5 shrink-0 text-gold-dark" />
                <p className="text-sm text-ink">Details received — pick a time below and we&rsquo;ll confirm within one business day.</p>
              </div>
              <CalendlyInlineWidget prefill={prefill} />
              <p className="text-center text-xs text-ink-muted">
                Can&rsquo;t find a time that works?{" "}
                <a
                  href="mailto:info@guestsquad.com"
                  className="text-gold-dark underline underline-offset-2 hover:text-gold"
                >
                  Email us directly
                </a>{" "}
                and we&rsquo;ll find something that fits your schedule.
              </p>
              <button
                onClick={resetAndClose}
                className="text-center text-xs text-ink-muted underline underline-offset-2 hover:text-ink"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleFormStart} className="flex flex-col gap-4">
              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

              {/* Row 1: Name + Email */}
              <div className="grid gap-4 grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Name <span className="text-gold-dark">*</span></label>
                  <input
                    name="name"
                    required
                    placeholder="Your full name"
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-gold-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Work Email <span className="text-gold-dark">*</span></label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@yourproperty.com"
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-gold-dark focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Website (both optional) */}
              <div className="grid gap-4 grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Phone <span className="text-ink-muted font-normal">(optional)</span></label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 555 000 0000"
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-gold-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Property Website <span className="text-ink-muted font-normal">(optional)</span></label>
                  <input
                    name="propertyWebsite"
                    type="text"
                    placeholder="https://yourhotel.com"
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-gold-dark focus:outline-none"
                  />
                  <p className="text-[11px] text-ink-muted">Include https:// e.g. https://yourhotel.com</p>
                </div>
              </div>

              {/* Row 3: Property Name + Size */}
              <div className="grid gap-4 grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Property / Company Name <span className="text-gold-dark">*</span></label>
                  <input
                    name="companyName"
                    required
                    placeholder="The Grand Inn"
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-gold-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Property Size <span className="text-gold-dark">*</span></label>
                  <select
                    name="propertySize"
                    required
                    defaultValue=""
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink focus:border-gold-dark focus:outline-none"
                  >
                    <option value="" disabled>Select size</option>
                    {PROPERTY_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 4: What are you looking for — checkboxes, last */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-ink text-left">What are you looking for help with? <span className="text-gold-dark">*</span></label>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {HELP_OPTIONS.map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 cursor-pointer">
                      <span
                        role="checkbox"
                        aria-checked={helpWith.includes(opt)}
                        tabIndex={0}
                        onClick={() => setHelpWith(helpWith.includes(opt) ? helpWith.filter((h) => h !== opt) : [...helpWith, opt])}
                        onKeyDown={(e) => e.key === " " && (e.preventDefault(), setHelpWith(helpWith.includes(opt) ? helpWith.filter((h) => h !== opt) : [...helpWith, opt]))}
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors cursor-pointer ${helpWith.includes(opt) ? "border-gold-dark bg-gold-dark" : "border-line bg-surface hover:border-ink/30"}`}
                      >
                        {helpWith.includes(opt) && (
                          <svg className="h-2.5 w-2.5 text-paper" viewBox="0 0 10 10" fill="none">
                            <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="text-xs text-ink-soft">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {status === "error" && (
                <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-600">
                  Something went wrong. Please try again or email us at info@guestsquad.com.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || helpWith.length === 0}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-dark px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-gold disabled:opacity-60"
              >
                {status === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
                ) : (
                  "Request My Coverage Review"
                )}
              </button>

              <p className="text-center text-xs text-ink-muted">
                By submitting this form you agree to our{" "}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
      </div>
    </div>,
    document.body
  );
}
