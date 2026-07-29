"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { PROPERTY_TYPES } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const ROOMS_OPTIONS = ["1–10", "11–30", "31–75", "76–200", "200+"];

const CHANNEL_OPTIONS = [
  "Reservation calls",
  "Guest texts / SMS",
  "OTA inboxes",
  "Email",
  "WhatsApp",
  "Cloudbeds / channel manager",
  "Akia",
  "Other",
];

const PAIN_OPTIONS = [
  "Missed calls — no one answering",
  "Slow OTA inbox responses",
  "After-hours guest messages going unanswered",
  "Front desk overflow during peak hours",
  "No overnight or weekend coverage",
  "Too many channels to manage",
  "Losing bookings to faster competitors",
  "Other / not sure yet",
];

function getUtmParam(search: string, key: string): string {
  return new URLSearchParams(search).get(key) ?? "";
}

function ChannelMultiSelect({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggle(ch: string) {
    onChange(selected.includes(ch) ? selected.filter((c) => c !== ch) : [...selected, ch]);
  }

  function remove(ch: string) {
    onChange(selected.filter((c) => c !== ch));
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-[42px] w-full flex-wrap items-center gap-1.5 rounded-md border border-line bg-paper px-3 py-2 text-left text-sm transition-colors hover:border-ink/30 focus:outline-none focus:ring-2 focus:ring-gold/30"
      >
        {selected.length === 0 ? (
          <span className="text-ink-muted/60">Select channels…</span>
        ) : (
          selected.map((ch) => (
            <span
              key={ch}
              className="inline-flex items-center gap-1 rounded bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold-dark"
            >
              {ch}
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); remove(ch); }}
                onKeyDown={(e) => e.key === "Enter" && (e.stopPropagation(), remove(ch))}
                className="cursor-pointer opacity-60 hover:opacity-100"
              >
                <X className="h-2.5 w-2.5" />
              </span>
            </span>
          ))
        )}
        <ChevronDown className={`ml-auto h-4 w-4 shrink-0 text-ink-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-line bg-paper shadow-lg">
          {CHANNEL_OPTIONS.map((ch) => {
            const checked = selected.includes(ch);
            return (
              <button
                key={ch}
                type="button"
                onClick={() => toggle(ch)}
                className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-surface ${checked ? "text-ink" : "text-ink-soft"}`}
              >
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${checked ? "border-gold-dark bg-gold-dark" : "border-line"}`}>
                  {checked && (
                    <svg className="h-2.5 w-2.5 text-paper" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {ch}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function PilotForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [tracking, setTracking] = useState({
    source_page: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    const search = window.location.search;
    setTracking({
      source_page: window.location.pathname,
      referrer: document.referrer,
      utm_source: getUtmParam(search, "utm_source"),
      utm_medium: getUtmParam(search, "utm_medium"),
      utm_campaign: getUtmParam(search, "utm_campaign"),
    });
  }, []);

  if (submitted) {
    return (
      <div className="rounded-xl border border-line bg-paper p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <svg className="h-7 w-7 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-ink">We&rsquo;ve received your details.</h3>
        <p className="mt-3 mx-auto max-w-sm text-sm leading-relaxed text-ink-soft">
          We&rsquo;ll review your property and follow up within one business day. If you&rsquo;d like to move faster, book a coverage review now.
        </p>
        <div className="mt-7">
          <CalendlyPopupButton variant="gold" size="lg">Book a Coverage Review</CalendlyPopupButton>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement)?.value ?? "";

    const propertyType = get("propertyType");
    const rooms = get("rooms");

    const data = {
      propertyName: get("propertyName"),
      propertyWebsite: get("propertyWebsite"),
      propertyType,
      rooms,
      channels: selectedChannels,
      pain: get("pain"),
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      website: get("website"),
      ...tracking,
    };

    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      trackEvent("pilot_qualification_submit", {
        property_type: propertyType || "unknown",
        rooms_units_range: rooms || "unknown",
        selected_channels: selectedChannels.join(","),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us at info@guestsquad.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="propertyName">Property name *</Label>
          <Input id="propertyName" name="propertyName" placeholder="The Grand Inn" required className="placeholder:text-ink-muted/50" />
        </div>
        <div>
          <Label htmlFor="propertyWebsite">Website *</Label>
          <Input id="propertyWebsite" name="propertyWebsite" placeholder="yourhotel.com" required className="placeholder:text-ink-muted/50" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="propertyType">Property type *</Label>
          <Select id="propertyType" name="propertyType" defaultValue="" required>
            <option value="" disabled>Select type</option>
            {PROPERTY_TYPES.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="rooms">Rooms / units *</Label>
          <Select id="rooms" name="rooms" defaultValue="" required>
            <option value="" disabled>Select range</option>
            {ROOMS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Channels needing coverage *</Label>
          <div className="mt-1.5">
            <ChannelMultiSelect selected={selectedChannels} onChange={setSelectedChannels} />
          </div>
        </div>
        <div>
          <Label htmlFor="pain">Biggest coverage gap *</Label>
          <Select id="pain" name="pain" defaultValue="" required>
            <option value="" disabled>Select your challenge</option>
            {PAIN_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" placeholder="Your full name" required className="placeholder:text-ink-muted/50" />
        </div>
        <div>
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" placeholder="you@yourhotel.com" required className="placeholder:text-ink-muted/50" />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" className="placeholder:text-ink-muted/50" />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div>
        <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={loading}>
          {loading ? "Submitting…" : "Request Pilot Review"}
        </Button>
        <p className="mt-2.5 text-xs text-ink-muted">
          Reviewed within one business day. Confidential — never shared.
        </p>
      </div>
    </form>
  );
}
