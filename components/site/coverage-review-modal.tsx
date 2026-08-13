"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

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

const TIME_OPTIONS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

const TIMEZONE_OPTIONS = [
  { label: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "Mountain Time (US & Canada)", value: "America/Denver" },
  { label: "Central Time (US & Canada)", value: "America/Chicago" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Atlantic Time (Canada)", value: "America/Halifax" },
  { label: "Newfoundland Time", value: "America/St_Johns" },
  { label: "London (GMT/BST)", value: "Europe/London" },
  { label: "Central Europe (CET/CEST)", value: "Europe/Paris" },
  { label: "Eastern Europe (EET/EEST)", value: "Europe/Athens" },
  { label: "Pakistan (PKT)", value: "Asia/Karachi" },
  { label: "Dubai (GST)", value: "Asia/Dubai" },
  { label: "India (IST)", value: "Asia/Kolkata" },
  { label: "Bangkok (ICT)", value: "Asia/Bangkok" },
  { label: "Singapore (SGT)", value: "Asia/Singapore" },
  { label: "Tokyo (JST)", value: "Asia/Tokyo" },
  { label: "Sydney (AEST/AEDT)", value: "Australia/Sydney" },
  { label: "Auckland (NZST/NZDT)", value: "Pacific/Auckland" },
];

const CALENDLY_URL = "https://calendly.com/guestsquad-info/30min";

function getUtmParam(search: string, key: string): string {
  return new URLSearchParams(search).get(key) ?? "";
}

function detectTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "";
  }
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
  const [timezone, setTimezone] = useState("");
  const [tracking, setTracking] = useState({
    source_page: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    if (!open) return;
    const detected = detectTimezone();
    const match = TIMEZONE_OPTIONS.find((tz) => tz.value === detected);
    setTimezone(match ? detected : "");
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

    const data = {
      name: get("name"),
      email: get("email"),
      companyName: get("companyName"),
      propertySize: get("propertySize"),
      helpWith,
      meetingDate: get("meetingDate"),
      meetingTime: get("meetingTime"),
      timezone,
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
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <Check className="h-7 w-7 text-gold-dark" />
              </div>
              <h3 className="text-lg font-medium text-ink">We&rsquo;ve received your request.</h3>
              <p className="mt-3 mx-auto max-w-sm text-sm leading-relaxed text-ink-soft">
                We&rsquo;ll confirm your preferred time within one business day. If you&rsquo;d like to skip the wait and book directly, you can use our scheduling link below.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold-dark px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold"
              >
                Schedule a time now →
              </a>
              <button
                onClick={resetAndClose}
                className="mt-4 text-xs text-ink-muted underline underline-offset-2 hover:text-ink"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

              {/* Row 4: Date + Time + Timezone */}
              <div className="grid gap-4 grid-cols-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Preferred Date <span className="text-gold-dark">*</span></label>
                  <input
                    name="meetingDate"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink focus:border-gold-dark focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Preferred Time <span className="text-gold-dark">*</span></label>
                  <select
                    name="meetingTime"
                    required
                    defaultValue=""
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink focus:border-gold-dark focus:outline-none"
                  >
                    <option value="" disabled>Select time</option>
                    {TIME_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink text-left">Timezone <span className="text-gold-dark">*</span></label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    required
                    className="rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-ink focus:border-gold-dark focus:outline-none"
                  >
                    <option value="">Select</option>
                    {TIMEZONE_OPTIONS.map((tz) => (
                      <option key={tz.value} value={tz.value}>{tz.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: What are you looking for — checkboxes, last */}
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
