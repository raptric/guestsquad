import { ButtonLink } from "@/components/site/button-link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";

export function CtaSection({
  title = "Stop losing bookings to silence.",
  description = "Book a coverage review and see exactly how Guest Squad would cover your reservations, guest messages, OTA inboxes, and after-hours calls.",
  primaryCta = "Book a Coverage Review",
}: {
  title?: string;
  description?: string;
  primaryCta?: string;
}) {
  return (
    <section className="bg-ink py-16 md:py-22">
      <div className="container text-center">
        <h2 className="text-3xl font-medium leading-tight text-paper md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-paper/65">
          {description}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-paper/50">
          Qualified properties can start with a 2-week pilot before moving into month-to-month coverage.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CoverageReviewButton variant="gold" size="lg" ctaLocation="cta_section">
            {primaryCta}
          </CoverageReviewButton>
          <ButtonLink
            href="/pilot"
            variant="outline"
            size="lg"
            className="border-paper/25 text-paper hover:border-paper/60"
          >
            Request Pilot Review
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
