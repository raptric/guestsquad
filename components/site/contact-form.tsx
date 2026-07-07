"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  PROPERTY_TYPES,
  PROPERTIES_COUNT_OPTIONS,
} from "@/lib/site-data";

function getUtmParam(search: string, key: string): string {
  return new URLSearchParams(search).get(key) ?? "";
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tracking, setTracking] = useState({
    source_page: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    const search = window.location.search;
    setTracking({
      source_page: window.location.pathname,
      referrer: document.referrer,
      utm_source: getUtmParam(search, "utm_source"),
      utm_medium: getUtmParam(search, "utm_medium"),
      utm_campaign: getUtmParam(search, "utm_campaign"),
      utm_term: getUtmParam(search, "utm_term"),
      utm_content: getUtmParam(search, "utm_content"),
    });
  }, []);

  if (submitted) {
    return (
      <div className="rounded-lg border border-line bg-paper p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <svg className="h-7 w-7 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-ink">Message received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          We&rsquo;ll review your details and follow up within one business day.
          Need a faster answer? Book a coverage review directly on the calendar.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      properties: (form.elements.namedItem("properties") as HTMLSelectElement).value,
      propertyType: (form.elements.namedItem("propertyType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      ...tracking,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly at info@guestsquad.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" placeholder="Your full name" required className="placeholder:text-ink-muted/50" />
        </div>
        <div>
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" placeholder="Your work email" required className="placeholder:text-ink-muted/50" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Hotel / company name *</Label>
          <Input id="company" name="company" placeholder="Your hotel or company" required className="placeholder:text-ink-muted/50" />
        </div>
        <div>
          <Label htmlFor="properties">Number of properties</Label>
          <Select id="properties" name="properties" defaultValue="">
            <option value="" disabled>Select an option</option>
            {PROPERTIES_COUNT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="propertyType">Property type</Label>
        <Select id="propertyType" name="propertyType" defaultValue="">
          <option value="" disabled>Select an option</option>
          {PROPERTY_TYPES.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your property and what you need help with..."
          className="placeholder:text-ink-muted/50"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs text-ink-muted">
        We respond within one business day. Your information is confidential and never shared.
      </p>
    </form>
  );
}
