import { CoverageReviewButton } from "@/components/site/coverage-review-button";

export function CtaSection({
  title = "Close the coverage gap.",
  description = "Book a coverage review and see how Guest Squad would cover your reservations, guest messages, OTA inboxes, and after-hours calls.",
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
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CoverageReviewButton variant="gold" size="lg" ctaLocation="cta_section">
            {primaryCta}
          </CoverageReviewButton>
        </div>
      </div>
    </section>
  );
}
