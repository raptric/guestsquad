"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { PROPERTY_TYPES } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const ROOMS_OPTIONS = ["1–10", "11–30", "31–75", "76–200", "200+"];

const CHANNEL_OPTIONS = [
  "Calls",
  "Text / SMS",
  "OTA inboxes",
  "Email",
  "WhatsApp",
  "Cloudbeds / channel manager",
  "Akia",
  "Other guest messaging tool",
];

function getUtmParam(search: string, key: string): string {
  return new URLSearchParams(search).get(key) ?? "";
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

  function toggleChannel(ch: string) {
    setSelectedChannels((prev) =>
      prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch]
    );
  }

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
          <CalendlyPopupButton variant="gold" size="lg">
            Book a Coverage Review
          </CalendlyPopupButton>
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
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? "";

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
      website: get("website"), // honeypot
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="propertyName">Property name *</Label>
          <Input id="propertyName" name="propertyName" placeholder="The Grand Inn" required className="placeholder:text-ink-muted/50" />
        </div>
        <div>
          <Label htmlFor="propertyWebsite">Website *</Label>
          <Input id="propertyWebsite" name="propertyWebsite" placeholder="yourhhotel.com" required className="placeholder:text-ink-muted/50" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Label>Channels needing coverage *</Label>
        <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {CHANNEL_OPTIONS.map((ch) => (
            <label
              key={ch}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                selectedChannels.includes(ch)
                  ? "border-gold bg-gold/5 text-ink"
                  : "border-line bg-paper text-ink-soft hover:border-gold/50"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedChannels.includes(ch)}
                onChange={() => toggleChannel(ch)}
                className="h-4 w-4 accent-[#C7A24A]"
              />
              {ch}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="pain">Main guest communication challenge *</Label>
        <Textarea
          id="pain"
          name="pain"
          required
          placeholder="e.g. Missed calls overnight, slow OTA inbox replies, front desk overflow during peak hours…"
          className="placeholder:text-ink-muted/50"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" className="placeholder:text-ink-muted/50" />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div>
        <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={loading}>
          {loading ? "Submitting…" : "Submit for Pilot Review"}
        </Button>
        <p className="mt-2.5 text-xs text-ink-muted">
          Reviewed within one business day. Your information is confidential and never shared.
        </p>
      </div>
    </form>
  );
}
