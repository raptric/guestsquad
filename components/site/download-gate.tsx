"use client";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface DownloadGateProps {
  asset: string;
  pdfHref: string;
  ctaLabel?: string;
}

const PROPERTY_TYPES = [
  "Independent hotel",
  "Boutique hotel",
  "Resort",
  "Serviced apartments",
  "Vacation rental / STR",
  "Other",
];

export function DownloadGate({ asset, pdfHref, ctaLabel = "Download PDF" }: DownloadGateProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

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
      // Open the PDF directly after a short delay
      setTimeout(() => window.open(pdfHref, "_blank"), 400);
    } catch {
      setStatus("error");
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
      >
        <Download className="h-4 w-4" />
        {ctaLabel}
      </button>
    );
  }

  return (
    <div className="w-full max-w-sm rounded-lg border border-line bg-paper p-5 shadow-soft">
      {status === "done" ? (
        <div className="text-center">
          <p className="text-sm font-medium text-ink">Your download is opening now.</p>
          <p className="mt-1 text-xs text-ink-soft">We also sent a link to your email.</p>
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gold-dark underline underline-offset-4 hover:text-gold"
          >
            <Download className="h-3.5 w-3.5" />
            Click here if it did not open
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <p className="text-xs font-medium text-ink">Enter your details to download</p>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="email"
            required
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-gold-dark focus:outline-none"
          />

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-gold-dark focus:outline-none"
          >
            <option value="">Property type (optional)</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          {status === "error" && (
            <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/90 disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Get the PDF
          </button>
          <p className="text-center text-xs text-ink-muted">
            No spam.{" "}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="underline underline-offset-2 hover:text-ink"
            >
              Cancel
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
