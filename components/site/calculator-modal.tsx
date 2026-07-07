"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { MissedBookingCalculator } from "@/components/site/missed-booking-calculator";

interface Props {
  children: React.ReactNode;
}

export function CalculatorModal({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </span>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-line bg-paper shadow-soft">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <div>
                <h2 className="text-base font-medium text-ink">Missed Booking Revenue Calculator</h2>
                <p className="text-xs text-ink-muted mt-0.5">Estimate the revenue impact of unanswered calls.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded p-1.5 text-ink-muted hover:bg-surface hover:text-ink transition-colors"
                aria-label="Close calculator"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Calculator */}
            <div className="p-6">
              <MissedBookingCalculator compact />
            </div>

            {/* Modal footer */}
            <div className="border-t border-line px-6 py-4">
              <a
                href="/resources/missed-booking-calculator"
                className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full calculator page
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
