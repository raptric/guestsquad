import { Moon, Calendar, PhoneIncoming, Clock } from "lucide-react";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { cn } from "@/lib/utils";

const COVERAGE_TYPES = [
  {
    icon: Moon,
    label: "After-Hours",
    title: "When your desk closes, guests still call.",
    points: [
      "Evenings from your agreed close time through the morning",
      "Reservation inquiries, guest questions, and late-arrival calls answered by a person",
      "No voicemail. No IVR. No missed opportunity.",
    ],
  },
  {
    icon: Calendar,
    label: "Weekends",
    title: "Reduced staffing should not mean reduced service.",
    points: [
      "Saturday and Sunday coverage during agreed hours",
      "Same greeting and procedures as your weekday team",
      "Your on-site contacts are only reached when the situation requires it",
    ],
  },
  {
    icon: PhoneIncoming,
    label: "Overflow",
    title: "Your desk answers first. We catch what they can't.",
    points: [
      "Busy-line or no-answer forwarding from your existing number",
      "Check-in peaks, high-occupancy periods, and short-staffed days covered",
      "No calls reach voicemail while your team is with a guest",
    ],
  },
  {
    icon: Clock,
    label: "24/7",
    title: "Continuous coverage with a defined scope.",
    points: [
      "Agreed handling rules across every hour of the day",
      "Scope can vary by time window — daytime, overnight, and weekend rules set separately",
      "Suited to properties without full-time on-site reception",
    ],
  },
];

interface CoverageTypesBlockProps {
  className?: string;
  showCta?: boolean;
  ctaLocation?: string;
  /**
   * Pass a subset of labels to show only specific cards, e.g. ["After-Hours", "Overflow"]
   */
  only?: string[];
}

export function CoverageTypesBlock({
  className,
  showCta = true,
  ctaLocation = "coverage_types",
  only,
}: CoverageTypesBlockProps) {
  const cards = only
    ? COVERAGE_TYPES.filter((c) => only.includes(c.label))
    : COVERAGE_TYPES;

  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="flex flex-col gap-4 rounded-lg border border-line bg-paper p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-surface">
                  <Icon className="h-4 w-4 text-gold-dark" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                  {card.label}
                </p>
              </div>
              <h3 className="text-base font-medium leading-snug text-ink">
                {card.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Scope clarification */}
      <div className="rounded-lg border border-line bg-surface px-6 py-5">
        <p className="text-sm leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Coverage is defined, not assumed.</span>{" "}
          Agreed hours, channels, and responsibilities are set during setup. The specific
          calls handled, actions permitted, and escalation rules are confirmed before
          coverage begins — not every capability is included automatically.
        </p>
      </div>

      {showCta && (
        <div className="flex justify-center">
          <CoverageReviewButton variant="gold" ctaLocation={ctaLocation}>
            Discuss Your Coverage Needs
          </CoverageReviewButton>
        </div>
      )}
    </div>
  );
}
