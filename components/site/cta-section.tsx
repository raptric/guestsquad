import { ButtonLink } from "@/components/site/button-link";

export function CtaSection({
  title = "Stop losing bookings to silence.",
  description = "Book a 15-minute demo and see exactly how GuestSquad would cover your reservations, messaging, and after-hours calls.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl font-medium leading-tight text-paper md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/65">
          {description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact" variant="gold" size="lg">
            Book a 15-Minute Demo
          </ButtonLink>
          <ButtonLink
            href="/pricing"
            variant="outline"
            size="lg"
            className="border-paper/25 text-paper hover:border-paper/60"
          >
            View Pricing
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
