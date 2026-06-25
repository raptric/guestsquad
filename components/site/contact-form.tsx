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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-6"
    >
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
          placeholder="Tell us what's currently falling through the cracks — missed calls, slow OTA replies, after-hours gaps..."
        />
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
      <p className="text-xs text-ink-muted">
        We respond within one business day. Your information is confidential and never shared.
      </p>
    </form>
  );
}
