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
    <div className="fixed bottom-3 left-3 right-3 z-[60] mx-auto max-w-2xl rounded-xl border border-line bg-paper shadow-lg">
      <div className="flex items-center gap-3 px-4 py-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-ink-soft">
          We use cookies for analytics and scheduling.{" "}
          <Link
            href="/privacy-policy"
            className="text-gold-dark underline underline-offset-2 hover:text-gold"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={essential}
            className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:bg-line transition-colors"
          >
            Essential
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-paper hover:bg-ink/90 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
