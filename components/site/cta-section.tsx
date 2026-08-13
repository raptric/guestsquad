import { ButtonLink } from "@/components/site/button-link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";

export function CtaSection({
  title = "Stop losing bookings to silence.",
  description = "Book a coverage review and see exactly how Guest Squad would cover your reservations, guest messages, OTA inboxes, and after-hours calls.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container max-w-5xl text-center">
        <h2 className="whitespace-nowrap text-3xl font-medium leading-tight text-paper md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 whitespace-nowrap text-base leading-relaxed text-paper/65">
          {description}
        </p>
        <p className="mt-6 whitespace-nowrap text-sm leading-relaxed text-paper/50">
          Qualified properties can start with a 2-week pilot before moving into month-to-month coverage.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CoverageReviewButton variant="gold" size="lg" ctaLocation="cta_section">
            Book a Coverage Review
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
