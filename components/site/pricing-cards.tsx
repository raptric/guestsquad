import { Check } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  description: string;
  bestFor: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    description: "After-hours and overflow coverage for a single property.",
    bestFor: "Independent hotels & boutique properties",
    features: [
      "After-hours front desk support",
      "Guest messaging (SMS, WhatsApp, email)",
      "Basic reservation support",
      "Monthly activity report",
    ],
    cta: "Get Quote",
    href: "/contact",
  },
  {
    name: "Growth",
    description: "Full guest-operations coverage across calls, messages, and OTAs.",
    bestFor: "Multi-property groups & resorts",
    features: [
      "Everything in Starter",
      "24/7 reservation support",
      "OTA inbox management",
      "Callback & lead recovery",
      "Upsell & revenue support",
      "Weekly performance reporting",
    ],
    cta: "Get Quote",
    href: "/contact",
    featured: true,
  },
  {
    name: "Custom",
    description: "Tailored coverage for large portfolios or unique operating models.",
    bestFor: "Hotel groups, management companies & STR portfolios",
    features: [
      "Everything in Growth",
      "Dedicated account structure",
      "Custom SOPs & escalation paths",
      "Back-office guest operations",
      "Priority onboarding",
    ],
    cta: "Book Demo",
    href: "/contact",
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
              <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                {f}
              </li>
            ))}
          </ul>

          <ButtonLink
            href={plan.href}
            variant={plan.featured ? "gold" : "outline"}
            className="mt-8 w-full"
          >
            {plan.cta}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
