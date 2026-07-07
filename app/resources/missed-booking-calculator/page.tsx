import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { MissedBookingCalculator } from "@/components/site/missed-booking-calculator";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Missed Booking Revenue Calculator | GuestSquad",
  description:
    "Estimate how much revenue unanswered reservation calls are costing your hotel each month. Adjust call volume, booking value, and conversion rate.",
  path: "/resources/missed-booking-calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Missed Booking Calculator", path: "/resources/missed-booking-calculator" },
        ]}
      />

      <PageHero
        eyebrow="Revenue Calculator"
        title="How much are missed calls costing you each month?"
        description="Adjust the inputs below to estimate the revenue impact of unanswered reservation calls at your property."
      />

      <Section>
        <MissedBookingCalculator />
      </Section>

      <Section surface>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-medium text-ink">How the calculator works</h2>
          <div className="mt-6 flex flex-col gap-4">
            {[
              {
                step: "01",
                title: "Monthly missed calls",
                body: "The number of calls that go unanswered, ring out, or reach voicemail during a typical month. This includes after-hours calls, peak-hour overflow, and calls missed while your team is with other guests.",
              },
              {
                step: "02",
                title: "Average booking value",
                body: "The average revenue per reservation at your property. For hotels, this is typically one stay (ADR x average nights). For short-term rentals, use your average booking payout net of OTA commission.",
              },
              {
                step: "03",
                title: "Conversion rate",
                body: "The percentage of answered reservation calls that result in a confirmed booking. Industry average for independent hotels is 15-25%. If you answer a call, what proportion turn into reservations?",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-line bg-paper p-5">
                <span className="shrink-0 text-xl font-medium text-gold-dark">{item.step}</span>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink-muted">
            The recovery estimate assumes a 70% capture rate, meaning GuestSquad answers and converts 70% of previously missed calls. Actual results depend on call type, time of day, and how enquiries are handled. This calculator is for estimation purposes only.{" "}
            <Link href="/contact" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Talk to us for a property-specific assessment.
            </Link>
          </p>
        </div>
      </Section>

      <CtaSection
        title="Ready to stop leaving bookings on the table?"
        description="Book a short demo and we will walk through your actual call volume, coverage gaps, and what a plan would cost."
      />
    </>
  );
}
