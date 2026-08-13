"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PROPERTY_TYPES } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const ROOMS_OPTIONS = ["1–10", "11–30", "31–75", "76–200", "200+"];

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

export function PilotForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
          We&rsquo;ll review your property and follow up within one business day to confirm next steps.
        </p>
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

      <div>
        <Label htmlFor="pain">Biggest coverage gap *</Label>
        <Select id="pain" name="pain" defaultValue="" required>
          <option value="" disabled>Select your challenge</option>
          {PAIN_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </Select>
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
          By submitting this form you agree to our{" "}
          <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">Privacy Policy</a>
          {" "}and{" "}
          <a href="/terms-of-service" className="underline underline-offset-2 hover:text-ink">Terms of Service</a>
          . Reviewed within one business day.
        </p>
      </div>
    </form>
  );
}
