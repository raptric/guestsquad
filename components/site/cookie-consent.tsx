"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "gs_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if not already answered
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
  }

  function essential() {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-2xl rounded-xl border border-line bg-paper shadow-lg">
      <div className="p-5">
        <p className="text-sm font-semibold text-ink">Cookie consent</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          We use essential cookies to run the site and may use analytics or
          scheduling-related tools to improve the experience. You can accept all
          cookies or continue with essential-only cookies. See our{" "}
          <Link
            href="/privacy-policy"
            className="text-gold-dark underline underline-offset-2 hover:text-gold"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={essential}
            className="flex-1 rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-line transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={accept}
            className="flex-1 rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
