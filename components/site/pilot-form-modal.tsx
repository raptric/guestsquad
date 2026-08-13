"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { PilotForm } from "@/components/site/pilot-form";

interface PilotFormModalProps {
  open: boolean;
  onClose: () => void;
}

export function PilotFormModal({ open, onClose }: PilotFormModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Request Pilot Review"
    >
      <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative z-10 w-full max-w-2xl rounded-xl border border-line bg-paper shadow-xl">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-line px-6 py-5">
            <div className="text-left">
              <p className="text-base font-semibold text-ink">Request a Pilot Review</p>
              <p className="mt-0.5 text-xs text-ink-soft">Share a few details — we&rsquo;ll review and follow up within one business day.</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 shrink-0 rounded-md p-1 text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <PilotForm />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
