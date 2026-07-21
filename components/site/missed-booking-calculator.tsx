"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

function usd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

interface Props {
  compact?: boolean;
}

export function MissedBookingCalculator({ compact = false }: Props) {
  const [missedCalls, setMissedCalls] = useState(30);
  const [bookingValue, setBookingValue] = useState(280);
  const [convRate, setConvRate] = useState(20);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interacted = useRef(false);

  const monthly = missedCalls * (convRate / 100) * bookingValue;
  const annual = monthly * 12;
  const recovered = monthly * 0.7;
  const breakEven = bookingValue > 0 ? Math.ceil(150 / bookingValue) : 1;

  useEffect(() => {
    if (!interacted.current) { interacted.current = true; return; }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      trackEvent("calculator_engagement", {
        missed_calls: missedCalls,
        booking_value: bookingValue,
        conv_rate: convRate,
        monthly_impact: Math.round(monthly),
      });
    }, 1500);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [missedCalls, bookingValue, convRate, monthly]);

  return (
    <div className={compact ? "" : "mx-auto max-w-2xl"}>
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-ink">
              Monthly missed or unanswered calls
            </label>
            <span className="text-sm font-semibold text-ink">{missedCalls}</span>
          </div>
          <input
            type="range"
            min={5}
            max={300}
            value={missedCalls}
            onChange={(e) => setMissedCalls(Number(e.target.value))}
            className="mt-2 w-full accent-[#C7A24A]"
          />
          <div className="mt-1 flex justify-between text-xs text-ink-muted">
            <span>5</span><span>300</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-ink">
              Average booking value (USD)
            </label>
            <span className="text-sm font-semibold text-ink">{usd(bookingValue)}</span>
          </div>
          <input
            type="range"
            min={50}
            max={2000}
            step={50}
            value={bookingValue}
            onChange={(e) => setBookingValue(Number(e.target.value))}
            className="mt-2 w-full accent-[#C7A24A]"
          />
          <div className="mt-1 flex justify-between text-xs text-ink-muted">
            <span>$50</span><span>$2,000</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-ink">
              Estimated reservation call conversion rate
            </label>
            <span className="text-sm font-semibold text-ink">{convRate}%</span>
          </div>
          <p className="mt-0.5 text-xs text-ink-muted">
            What percentage of answered reservation calls typically result in a booking?
          </p>
          <input
            type="range"
            min={5}
            max={60}
            value={convRate}
            onChange={(e) => setConvRate(Number(e.target.value))}
            className="mt-2 w-full accent-[#C7A24A]"
          />
          <div className="mt-1 flex justify-between text-xs text-ink-muted">
            <span>5%</span><span>60%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 rounded-lg border border-line bg-surface p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Estimated Revenue Impact
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-line bg-paper p-5">
            <p className="text-2xl font-medium text-ink">{usd(monthly)}</p>
            <p className="mt-1 text-xs text-ink-muted">Monthly revenue not captured</p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-5">
            <p className="text-2xl font-medium text-ink">{usd(annual)}</p>
            <p className="mt-1 text-xs text-ink-muted">Annualised impact</p>
          </div>
          <div className="rounded-lg border-2 border-gold bg-paper p-5">
            <p className="text-2xl font-medium text-gold-dark">{usd(recovered)}</p>
            <p className="mt-1 text-xs text-ink-muted">Est. recovered at 70% capture rate</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-soft">
          Coverage pays for itself if it converts just{" "}
          <strong>{breakEven}</strong> additional booking
          {breakEven !== 1 ? "s" : ""} per month at your average booking value.
        </p>
      </div>

      {!compact && (
        <div className="mt-6 space-y-3 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
          >
            Get a quote based on your property
          </Link>
          <p className="text-xs text-ink-muted">
            Results are estimates based on your inputs. Actual recovery rates vary by property and call type.
          </p>
        </div>
      )}
    </div>
  );
}
