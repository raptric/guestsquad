import { ButtonLink } from "@/components/site/button-link";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = "Book a 15-Minute Demo",
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  const primaryIsPopup = primaryHref === "/contact";

  return (
    <section className="border-b border-line bg-paper py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryIsPopup ? (
            <CalendlyPopupButton variant="gold" size="lg">
              {primaryCta}
            </CalendlyPopupButton>
          ) : (
            <ButtonLink href={primaryHref} variant="gold" size="lg">
              {primaryCta}
            </ButtonLink>
          )}
          {secondaryCta && secondaryHref && (
            <ButtonLink href={secondaryHref} variant="outline" size="lg">
              {secondaryCta}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
