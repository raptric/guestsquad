import type { Metadata } from "next";
import Link from "next/link";
import { DownloadGate } from "@/components/site/download-gate";
import { buildMetadata } from "@/lib/seo";
import { MissedBookingCalculator } from "@/components/site/missed-booking-calculator";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { JsonLd } from "@/components/site/json-ld";
import { faqSchema, breadcrumbSchema, webPageSchema, webApplicationSchema } from "@/lib/seo";

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
    a: "As a rough guide, many independent hotels see 15 to 25 percent of answered reservation calls turn into bookings. Use your own figure if you track it; start with 20 percent if you don't.",
  },
  {
    q: "How is the recovery estimate calculated?",
    a: "The estimate assumes 70 percent of the missed revenue could be recovered once those calls are answered. The other 30 percent allows for callers who have already booked elsewhere, aren't serious enquiries, or call outside bookable hours. It's a planning assumption, not a guaranteed result.",
  },
  {
    q: "How many calls does the average hotel actually miss?",
    a: "It varies widely by property and staffing. With one person on the desk, a large share of calls can go unanswered at check-in peaks, and most do overnight if nobody covers the phone. Your phone system's call logs give you the real number.",
  },
  {
    q: "Can I use this calculator for short-term rentals and vacation rentals?",
    a: "Yes. Use your average booking payout per stay as the booking value, and adjust the conversion rate to reflect how often an answered inquiry turns into a confirmed booking at your property.",
  },
  {
    q: "How do I compare this number with the cost of coverage?",
    a: "Take the monthly figure to your coverage review. Your quote depends on coverage hours, channels and volume, so comparing the two shows whether closing the gap is worth it for your property.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Hotel Missed Call Revenue Calculator",
  description:
    "Estimate how much revenue unanswered reservation calls are costing your hotel each month. Adjust call volume, booking value, and conversion rate.",
  path: "/resources/missed-booking-calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hotel Missed Call Revenue Calculator | Guest Squad",
            description: "Estimate how much revenue unanswered reservation calls are costing your hotel each month. Adjust call volume, booking value, and conversion rate.",
            path: "/resources/missed-booking-calculator",
            primaryImageUrl: "https://guestsquad.com/brand-assets/og-image.jpg",
            primaryImageAlt: "Missed booking revenue calculator for hotels",
            about: { "@id": "https://guestsquad.com/services/reservation-support#service" },
            mentions: [
              { "@type": "Service", "@id": "https://guestsquad.com/services/hotel-answering-service#service", "name": "Hotel Answering Service" },
              { "@type": "Service", "@id": "https://guestsquad.com/services/central-reservations#service", "name": "Hotel Reservation Call Center" },
              { "@type": "Service", "@id": "https://guestsquad.com/services/after-hours-support#service", "name": "After-Hours Hotel Front Desk Support" },
            ],
          }),
          webApplicationSchema({
            name: "Hotel Missed Call Revenue Calculator",
            description: "Estimate how much revenue unanswered reservation calls are costing your hotel each month. Adjust call volume, booking value, and conversion rate.",
            path: "/resources/missed-booking-calculator",
            about: { "@id": "https://guestsquad.com/services/reservation-support#service" },
            mentions: [
              { "@type": "Service", "@id": "https://guestsquad.com/services/hotel-answering-service#service", "name": "Hotel Answering Service" },
              { "@type": "Service", "@id": "https://guestsquad.com/services/central-reservations#service", "name": "Hotel Reservation Call Center" },
              { "@type": "Service", "@id": "https://guestsquad.com/services/after-hours-support#service", "name": "After-Hours Hotel Front Desk Support" },
            ],
          }),
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
            The recovery estimate uses a 70% capture rate as a starting assumption. Adjust both inputs to match your property&apos;s own data for a more accurate picture. Actual results depend on call type, time of day, and how inquiries are handled. This calculator is for estimation purposes only.{" "}
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
            Guest Squad is a hospitality call center for hotels and vacation rentals: we answer those calls in your property&apos;s name during the hours you choose.
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

      <Section className="bg-[#F7F5F2]">
        <SectionHeading eyebrow="Common Questions" title="How operators use this calculator." />
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Close the Gap" title="Services that recover missed bookings" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              href: "/services/reservation-support",
              label: "Hotel reservation support",
              body: "Availability checks, quotes, bookings and changes for one property, handled live to your rates and policies.",
            },
            {
              href: "/services/hotel-answering-service",
              label: "Hotel answering service",
              body: "A hotel call center answering in your hotel's name 24/7, after hours or on overflow.",
            },
            {
              href: "/services/central-reservations",
              label: "Hotel reservation call center",
              body: "One team for quotes, bookings and changes across your hotel group.",
            },
            {
              href: "/services/after-hours-support",
              label: "After-hours hotel front desk support",
              body: "Overnight and weekend calls, late check-ins and guest messages answered live, with emergencies escalated to your team.",
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
        <p className="mt-6 text-sm text-ink-soft">
          Read next:{" "}
          <Link href="/resources/hotel-answering-service-cost" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            How much does an answering service cost for a hotel?
          </Link>
        </p>
      </Section>

      <CtaSection
        title="Know your number. Now close the gap."
        description="See which service fits your coverage gap, then book a coverage review for a quote scoped to your volume."
      />
    </>
  );
}
