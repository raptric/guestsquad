import type { Metadata } from "next";
import Link from "next/link";
import { DownloadGate } from "@/components/site/download-gate";
import { buildMetadata } from "@/lib/seo";
import { MissedBookingCalculator } from "@/components/site/missed-booking-calculator";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { JsonLd } from "@/components/site/json-ld";
import { faqSchema, breadcrumbSchema } from "@/lib/seo";

const FAQS = [
  {
    q: "How does missed booking analysis work?",
    a: "Missed booking analysis estimates the revenue a property loses from unanswered calls and messages. You enter your monthly missed call volume, average booking value, and typical conversion rate. The calculator shows how much revenue those unanswered calls represent and what a realistic recovery looks like if each call had been answered by a trained person. It is a starting point for understanding whether a coverage gap is worth fixing.",
  },
  {
    q: "What counts as a missed call for this calculator?",
    a: "Any inbound call that goes unanswered: rings out, reaches voicemail, or is abandoned by the caller before speaking to someone. This includes overnight calls, calls during busy check-in periods when your team is occupied, and calls during days your front desk is understaffed.",
  },
  {
    q: "What should I use as my average booking value?",
    a: "Use the average revenue per reservation at your property. For hotels, this is typically ADR multiplied by average length of stay. For short-term rentals, use your average booking payout after OTA commission. If you are unsure, start with your ADR as a conservative estimate.",
  },
  {
    q: "What is a realistic conversion rate for hotel reservation calls?",
    a: "Industry average for independent hotels answering their own calls is 15 to 25 percent. If a trained agent answers with your live rates and availability, conversion rates typically sit in the 20 to 30 percent range. Use 20 percent as a starting baseline if you do not have data.",
  },
  {
    q: "How is the recovery estimate calculated?",
    a: "The recovery estimate assumes GuestSquad answers and converts 70 percent of previously missed calls. The remaining 30 percent accounts for callers who have already booked elsewhere, are not serious inquiries, or call outside bookable hours. This is a conservative assumption based on typical call-type distribution.",
  },
  {
    q: "How many calls does the average hotel actually miss?",
    a: "It varies significantly by property size and staffing model. Independent properties with a single front desk agent often miss 20 to 40 percent of inbound calls during peak periods, and close to 100 percent overnight. A property receiving 100 calls per month may be missing 25 to 40 of them.",
  },
  {
    q: "Can I use this calculator for short-term rentals and vacation rentals?",
    a: "Yes. Use your average booking payout per stay as the booking value, and adjust the conversion rate to reflect how often an answered inquiry turns into a confirmed booking at your property.",
  },
  {
    q: "What is the break-even point for GuestSquad coverage?",
    a: "The calculator shows you how many recovered bookings per month it takes to cover the cost of a basic plan. For most properties, recovering one or two bookings per month is enough to break even, with everything beyond that as a net gain.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Missed Booking Revenue Calculator | GuestSquad",
  description:
    "Estimate how much revenue unanswered reservation calls are costing your hotel each month. Adjust call volume, booking value, and conversion rate.",
  path: "/resources/missed-booking-calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Missed Booking Calculator", path: "/resources/missed-booking-calculator" },
          ]),
          faqSchema(FAQS),
        ]}
      />
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
        description="Use this missed booking analysis to estimate how unanswered calls and messages are affecting your monthly and annual revenue. Adjust the inputs below for your property. No email required."
      />

      <Section>
        <MissedBookingCalculator />
      </Section>

      <Section surface>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-medium text-ink">How the calculator works</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Most hotel reservation calls that go unanswered are lost permanently. Callers searching for accommodation rarely leave voicemails and typically move to the next option within minutes. This calculator estimates the monthly and annual revenue impact of those unanswered calls based on three inputs you control.
          </p>
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
                body: "The average revenue per reservation at your property. For hotels, this is typically ADR multiplied by average length of stay. For short-term rentals, use your average booking payout net of OTA commission.",
              },
              {
                step: "03",
                title: "Conversion rate",
                body: "The percentage of answered reservation calls that result in a confirmed booking. Industry average for independent hotels is 15 to 25 percent. If you answer a call with your live rates, what proportion turn into reservations?",
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
            The recovery estimate assumes a 70% capture rate as a starting baseline. The 15–25% industry conversion range and 20–30% trained-agent range are based on typical independent hotel benchmarks — adjust both inputs to match your own property data for a more accurate picture. Actual results depend on call type, time of day, and how inquiries are handled. This calculator is for estimation purposes only.{" "}
            <Link href="/contact" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Talk to us for a property-specific assessment.
            </Link>
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-medium text-ink">Why missed calls cost more than the call itself</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            A guest who calls your property is already past the consideration stage. They have found you, chosen your property over an OTA search result, and picked up the phone. That is a high-intent action. When that call goes unanswered, the revenue cost is not just one missed booking. It is also the marketing spend, OTA commission savings, or organic visibility that got them to call in the first place.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            For properties running lean front desk operations, overnight gaps, or peak-period overflow, the cumulative effect across a month adds up quickly. The calculator above makes that number visible so it can be weighed against the cost of coverage.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            If you want to see where your specific gaps are before requesting a quote, the{" "}
            <DownloadGate
              asset="coverage-gap-assessment"
              pdfHref="/downloads/coverage-gap-assessment.pdf"
              ctaLabel="Coverage Gap Assessment"
              inline
            />{" "}
            walks through your hours, channels, and escalation readiness and tells you which service to start with.
          </p>
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Common Questions" title="How operators use this calculator." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-5">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Close the Gap" title="The two services that recover missed bookings." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              href: "/services/hotel-answering-service",
              label: "Hotel Answering Service",
              body: "Live call answering for reservation inquiries, guest questions, and overflow — so every inbound call reaches a trained person instead of voicemail.",
            },
            {
              href: "/services/after-hours-support",
              label: "After-Hours Hotel Support",
              body: "Overnight and weekend front-desk coverage for calls and messages your team cannot take outside working hours, without hiring a night shift.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <div>
                <h3 className="text-sm font-medium text-ink">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
              <p className="mt-4 text-xs font-medium text-gold-dark group-hover:text-gold">View service →</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Ready to stop leaving bookings on the table?"
        description="Book a coverage review and we will walk through your actual call volume, coverage gaps, and what a plan would cost."
      />
    </>
  );
}
