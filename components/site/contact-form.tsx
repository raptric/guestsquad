"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  PROPERTY_TYPES,
  PROPERTIES_COUNT_OPTIONS,
  VOLUME_OPTIONS,
} from "@/lib/site-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="rounded-lg border border-line bg-surface p-10 text-center">
        <h3 className="text-xl font-medium text-ink">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          We&rsquo;ve received your details and will be in touch within one
          business day. If it&rsquo;s urgent, book a slot directly on our
          calendar using the link above.
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
      volume: (form.elements.namedItem("volume") as HTMLSelectElement).value,
      tools: (form.elements.namedItem("tools") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // honeypot
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
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
          <Input id="name" name="name" placeholder="Jane Smith" required />
        </div>
        <div>
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" placeholder="jane@yourhotel.com" required />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Hotel / company name *</Label>
          <Input id="company" name="company" placeholder="The Harbor Hotel" required />
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

      <div className="grid gap-6 sm:grid-cols-2">
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
          <Label htmlFor="volume">Monthly call / message volume</Label>
          <Select id="volume" name="volume" defaultValue="">
            <option value="" disabled>Select an option</option>
            {VOLUME_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="tools">Current tools (PMS, CRS, OTA, phone system)</Label>
        <Input
          id="tools"
          name="tools"
          placeholder="e.g. Opera PMS, SiteMinder, Booking.com, RingCentral"
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what&apos;s currently falling through the cracks: missed calls, slow OTA replies, after-hours gaps..."
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
