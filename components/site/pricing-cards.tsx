import Link from "next/link";
import { Check } from "lucide-react";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { cn } from "@/lib/utils";

type Feature = { label: string; href?: string };

type Plan = {
  name: string;
  description: string;
  bestFor: string;
  features: Feature[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    description: "After-hours and overflow coverage for a single property.",
    bestFor: "Independent hotels & boutique properties",
    features: [
      { label: "After-hours front desk support", href: "/services/after-hours-support" },
      { label: "Guest messaging (SMS, WhatsApp, email)", href: "/services/guest-messaging" },
      { label: "Basic reservation support", href: "/services/reservation-support" },
      { label: "Monthly activity report" },
    ],
  },
  {
    name: "Growth",
    description: "Full guest-operations coverage across calls, messages, and OTAs.",
    bestFor: "Multi-property groups & resorts",
    features: [
      { label: "Everything in Starter" },
      { label: "24/7 reservation support", href: "/services/reservation-support" },
      { label: "OTA inbox management", href: "/services/ota-inbox-management" },
      { label: "Callback & lead recovery", href: "/services/hotel-answering-service" },
      { label: "Upsell & revenue support" },
      { label: "Weekly performance reporting" },
    ],
    featured: true,
  },
  {
    name: "Custom",
    description: "Tailored coverage for large portfolios or unique operating models.",
    bestFor: "Hotel groups, management companies & STR portfolios",
    features: [
      { label: "Everything in Growth" },
      { label: "Dedicated account structure" },
      { label: "Custom SOPs & escalation paths" },
      { label: "Back-office guest operations", href: "/services/back-office-operations" },
      { label: "Priority onboarding" },
    ],
  },
];

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "flex flex-col rounded-lg border p-8",
            plan.featured
              ? "border-gold/40 bg-paper shadow-soft md:-translate-y-3"
              : "border-line bg-paper"
          )}
        >
          {plan.featured && (
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gold-dark">
              Most Chosen
            </span>
          )}
          <h3 className="text-xl font-medium text-ink">{plan.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{plan.description}</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-muted">
            {plan.bestFor}
          </p>

          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {plan.features.map((f) => (
              <li key={f.label} className="flex gap-2.5 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                {f.href ? (
                  <Link href={f.href} className="text-gold-dark underline underline-offset-4 hover:text-gold">
                    {f.label}
                  </Link>
                ) : (
                  f.label
                )}
              </li>
            ))}
          </ul>

          <CalendlyPopupButton
            variant={plan.featured ? "gold" : "outline"}
            size="default"
            className="mt-8 w-full"
          >
            Book a Coverage Review
          </CalendlyPopupButton>
        </div>
      ))}
    </div>
  );
}
