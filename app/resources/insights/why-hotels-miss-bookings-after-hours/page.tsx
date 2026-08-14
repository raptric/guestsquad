import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { Section } from "@/components/site/section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { buildMetadata, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

const PATH = "/resources/insights/why-hotels-miss-bookings-after-hours";
const DATE_PUBLISHED = "2026-08-11T00:00:00+00:00";

const FAQS = [
  {
    q: "Why do hotels miss bookings after hours if demand is strong?",
    a: "Strong demand increases the volume of calls and messages arriving outside front desk hours, but most independent hotels have no coverage once the desk closes. Guests searching in the evening or from different time zones reach voicemail or an unmonitored inbox. By morning the decision is already made — usually in favour of a property that responded.",
  },
  {
    q: "What percentage of hotel front desks are currently understaffed?",
    a: "According to the AHLA's December 2024 survey of 282 hoteliers, 26% of hotels cite front desk as a current staffing shortage area. Sixty-five percent report staffing shortages overall, and 71% have unfilled positions despite active recruitment efforts.",
  },
  {
    q: "What types of calls arrive outside front desk hours?",
    a: "Reservation enquiries from guests researching in the evening, rate questions from travellers in different time zones, same-day arrival questions, late check-in requests, and in-stay issues from current guests. Pre-booking enquiries are the most commercially consequential — a guest comparing two properties will book with whichever one responds first.",
  },
  {
    q: "Is after-hours coverage only relevant for properties in high-demand markets?",
    a: "No. The overnight coverage gap affects every independent hotel regardless of market because travel research happens outside business hours universally. A boutique inn with 12 rooms faces the same gap as a 60-room independent hotel — the financial impact scales with their rate and booking volume, not their size.",
  },
  {
    q: "Can a voicemail or auto-reply protect an after-hours booking?",
    a: "A voicemail can capture the enquiry, but it cannot confirm the booking or answer the guest's specific question. A guest who leaves a voicemail and receives no reply until the following morning has had eight or more hours to book elsewhere. Auto-replies acknowledging receipt have the same limitation — they do not convert.",
  },
  {
    q: "What is the most practical way to close an after-hours coverage gap?",
    a: "For most independent properties, the choices are hiring a night shift (high fixed cost, difficult to fill given AHLA data on front desk shortages), training existing staff to rotate on-call coverage (burnout risk, inconsistent), or outsourcing after-hours call and message handling to a dedicated hospitality support service. The right choice depends on your call volume, average booking value, and how many hours per night are genuinely uncovered.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Why Hotels Lose Bookings After Hours",
  description:
    "Hotels lose bookings overnight despite strong demand. Here's why the coverage gap exists and how to close it without hiring a night shift.",
  path: PATH,
});

export default function AfterHoursMissedBookingsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Why Hotels Still Miss Bookings After Hours Even When Demand Is Strong",
            description:
              "Strong demand doesn't stop when the front desk closes. Here's why independent hotels lose bookings overnight, what the staffing data says, and how to close the gap without hiring a night shift.",
            path: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_PUBLISHED,
            about: {
              type: "Service",
              name: "After-Hours Hotel Support",
              serviceType: "After-Hours Hotel Support",
              url: `${SITE.url}/services/after-hours-support`,
            },
            mentions: [
              { type: "Organization", name: "American Hotel & Lodging Association" },
              { type: "Thing", name: "After-Hours Hotel Coverage" },
              { type: "Thing", name: "Hotel Front Desk Staffing" },
              { type: "Thing", name: "Hotel Reservation Calls" },
              { type: "Thing", name: "Overnight Hotel Coverage" },
              { type: "Article", name: "Hotel Answering Service vs. AI Voice Agent: Which Is Right for Your Property?", id: "https://guestsquad.com/resources/hotel-answering-service-vs-ai-voice#article" },
              { type: "Article", name: "After-Hours Hotel Front Desk Support: A Practical Checklist", id: "https://guestsquad.com/resources/after-hours-hotel-support-checklist#article" },
              { type: "Article", name: "Hotel Front Desk Overflow Support: When to Outsource and What to Keep In-House", id: "https://guestsquad.com/resources/hotel-front-desk-overflow-support#article" },
            ],
            articleSection: "After-Hours Coverage",
            keywords: "hotel after-hours coverage, missed booking calls, hotel front desk staffing, overnight hotel coverage, after-hours hotel support",
            timeRequired: "PT7M",
            wordCount: 1600,
            audience: [
              { audienceType: "Independent Hotel Owner" },
              { audienceType: "Boutique Hotel Operator" },
              { audienceType: "Vacation Rental Manager" },
              { audienceType: "Short-Term Rental Operator" },
            ],
            citation: [
              { name: "AHLA December 2024 Hotel Staffing Shortage Survey", url: "https://www.ahla.com/news/65-surveyed-hotels-report-staffing-shortages" },
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": `${SITE.url}${PATH}#howto`,
            name: "How to audit your hotel's after-hours coverage gap",
            totalTime: "PT20M",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Pull your after-hours call and message volume",
                text: "Check your phone system logs or PMS for calls received between 9pm and 8am over the past 30 days. Do the same for OTA messages and any other channels your team monitors. This gives you the actual volume — not an estimate.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Identify which contacts went unanswered until morning",
                text: "Cross-reference the overnight contacts with your response timestamps. Any call or message that received no reply until after 7am is a candidate for a lost booking. Note the inquiry type — reservation, rate question, same-day arrival — so you know which are commercially consequential.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Calculate the revenue exposure",
                text: "Multiply your estimated unanswered reservation enquiries per month by your average booking value and a conservative conversion rate. This is the floor of what overnight gaps cost. The Missed Booking Revenue Calculator on the resources page can help you model this.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Map the hours with no active coverage",
                text: "Write down exactly when your last staff member stops monitoring calls and messages, and when monitoring resumes. For most independent hotels this is a nine to ten hour window. That is your exposure period — the hours a competitor with coverage has an advantage.",
              },
            ],
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Insights", path: "/resources/insights" },
            { name: "After-Hours Missed Bookings", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Insights", path: "/resources/insights" },
          { name: "After-Hours Missed Bookings", path: PATH },
        ]}
      />

      <div className="border-b border-line bg-paper">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3 text-xs text-ink-muted">
              <span className="font-semibold uppercase tracking-widest text-gold-dark">After-Hours Coverage</span>
              <span>·</span>
              <span>7 min read</span>
              <span>·</span>
              <time dateTime={DATE_PUBLISHED}>August 11, 2026</time>
            </div>
            <h1 className="mt-4 text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              Why Hotels Still Miss Bookings After Hours Even When Demand Is Strong
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Strong demand doesn&apos;t stop when the front desk closes. Here&apos;s why independent hotels lose bookings overnight, what the staffing data says, and how to close the gap without hiring a night shift.
            </p>
            <p className="mt-4 text-xs text-ink-muted">
              By <span className="font-medium text-ink">Guest Squad</span>
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="mx-auto max-w-2xl">

          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            A 40-room boutique hotel in a popular weekend destination runs at 85% occupancy from Friday to Sunday. The owner knows demand is strong. What she doesn&apos;t know is how many reservation enquiries arrive between 10pm and 8am — and disappear without a reply. Her phone logs show 23 missed calls in the past month during those hours. She has no idea how many of those were booking enquiries.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            This is not an unusual situation. High occupancy and overnight booking losses are not contradictory — they coexist at most independent properties because demand is highest exactly when coverage is thinnest. Guests research travel in the evenings. Travellers in different time zones reach out during their own business hours. Group enquiries often come in after the caller has finished their own workday.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Why does the demand-coverage gap keep widening?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The short answer is staffing. According to the{" "}
            <a href="https://www.ahla.com/news/65-surveyed-hotels-report-staffing-shortages" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              AHLA&apos;s survey of 282 hoteliers conducted in December 2024
            </a>
            , 65% of hotels report staffing shortages, and 71% have job openings they cannot fill despite active recruitment. Front desk is the second most cited shortage area, with 26% of hotels identifying it as a gap. The average property is carrying six to seven open positions.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Hotel employment overall remains approximately 10% below pre-pandemic levels, according to the same data. The implication for after-hours coverage is direct: when front desk is already short-staffed during operating hours, adding overnight or weekend coverage through the same team is rarely viable. The people who would cover those shifts either don&apos;t exist at the property or are already managing more than their role was designed for.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            What types of contacts arrive after hours?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Not every overnight call or message represents a lost booking. Some are in-stay issues from current guests — a noisy room, a broken air conditioner, a request for extra towels. These matter for guest satisfaction and reviews, but they do not carry the same immediate revenue consequence as a pre-booking enquiry from someone who has not yet committed.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The commercially consequential contacts are the ones that arrive before a reservation exists: rate questions, availability checks, special-request enquiries, and group or event enquiries that require a real reply before the guest will commit. A guest choosing between two comparable properties and reaching one at 11pm while the other goes to voicemail will book with the one that answered — not with the one that calls back at 8:15am to a guest who has already confirmed elsewhere.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            OTA messages compound this further. A pre-booking message sent through Booking.com, Expedia, or Airbnb does not sit in a separate queue from the phone — it arrives in an inbox that most front desk teams check intermittently during the day and not at all overnight. For properties that do significant OTA business, overnight inbox gaps affect reply scores and search visibility simultaneously, not just the individual booking.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Why strong demand makes the gap more costly, not less
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            There is a counterintuitive assumption many operators hold: that when occupancy is high, the lost overnight bookings are a smaller share of revenue because there is less available inventory to fill. The opposite is closer to the truth.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            High-demand periods are exactly when last-minute and same-day enquiries spike. Guests searching for a room on a busy weekend or during a local event often call multiple properties in rapid succession — the first available room from a property that answers gets the booking. A property running at 70% occupancy with 12 rooms still available on a high-demand Friday night is leaving real revenue on the table if those last rooms are going unbooked because the phones go to voicemail at 9:30pm.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            High-demand periods also attract higher-value bookings. A guest willing to pay a premium rate during peak season or a local event is often a guest with higher expectations — including an expectation that a property will be reachable when they call.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Why internal fixes rarely close the gap
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The most common internal responses to after-hours coverage gaps are voicemail with a callback promise, a rotating on-call arrangement among existing staff, or a mobile phone forwarded to whoever is available. Each of these has a structural problem.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Voicemail delays the response until the next morning, by which time the guest has usually decided. A callback promise on a voicemail message is a hostage to the guest still being available and still interested — neither is guaranteed eight hours later.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            On-call rotation works for genuine emergencies — a fire alarm, a medical situation — but it is not a sustainable model for handling reservation enquiries at 11pm. The person on call does not have access to the PMS, does not know the current rate and availability, and is not in a position to quote a group enquiry or process a modification. They can take a message. A message is not a booking.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Forwarding a work phone to a personal mobile creates a different problem: the person receiving it is off duty, may not be briefed on current rates or availability, and is not in a position to give a consistent guest experience. Properties that use this model often find that calls go unanswered anyway — the phone is silenced, the staff member is asleep, or the call comes in during the one hour when the rotation changes.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            What auditing your overnight gap actually looks like
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Before choosing a solution, the first step is knowing the size of the problem. Most operators underestimate their overnight missed-call volume because they are not tracking it. The data is usually available — phone system logs, OTA message timestamps, PMS contact records — but it requires someone to pull it and look at it with after-hours gaps in mind, which rarely happens in a monthly review.
          </p>
          <div className="mb-5 flex flex-col gap-3">
            {[
              {
                n: "01",
                title: "Pull your after-hours call and message volume",
                body: "Check your phone system logs or PMS for calls received between 9pm and 8am over the past 30 days. Do the same for OTA messages. This gives you the actual volume — not an estimate.",
              },
              {
                n: "02",
                title: "Identify which contacts went unanswered until morning",
                body: "Cross-reference overnight contacts with your response timestamps. Any call or message that received no reply until after 7am is a candidate for a lost booking. Note the type — reservation, rate question, same-day arrival.",
              },
              {
                n: "03",
                title: "Calculate the revenue exposure",
                body: "Multiply your estimated unanswered reservation enquiries per month by your average booking value and a conservative conversion rate. The Missed Booking Revenue Calculator can help you model this number before making any coverage decisions.",
              },
              {
                n: "04",
                title: "Map the hours with no active coverage",
                body: "Write down exactly when your last staff member stops monitoring calls and messages, and when monitoring resumes. For most independent hotels this is a nine to ten hour window overnight. That is the window in which a competitor with coverage holds an advantage over you.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 rounded-lg border border-line bg-paper p-5">
                <span className="shrink-0 text-lg font-medium text-gold-dark">{item.n}</span>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 rounded-lg border border-gold/30 bg-gold/5 px-6 py-5">
            <p className="text-sm font-medium text-ink">Want to see the size of your overnight revenue gap?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              The After-Hours Checklist covers what a complete overnight setup needs — from call handling and OTA inboxes to emergency escalation and morning handoff.
            </p>
            <Link
              href="/resources/after-hours-checklist"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
            >
              Download the After-Hours Checklist <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            When the gap is too large to close with internal fixes
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            If the audit reveals a gap of four or more hours per night, internal workarounds are unlikely to close it reliably. A rotating on-call arrangement will cover some nights well and others poorly, which means the guest experience — and the booking outcome — becomes unpredictable.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Properties that outsource after-hours call and message handling to a dedicated hospitality support team close the gap structurally — not by adding to their existing staff&apos;s workload, but by replacing the coverage model. The front desk team starts the next day with a clear summary of what came in overnight, which enquiries converted, and what requires follow-up. The overnight window stops being a blind spot.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The economics are worth modelling before deciding. A property with an average booking value of £180 and an estimated five unanswered reservation enquiries per night, with a conservative 20% conversion rate, is leaving roughly £5,000 in monthly booking revenue unrecovered. The cost of dedicated after-hours coverage is a fraction of that number for most independent properties.
          </p>

        </div>
      </Section>

      <Section className="bg-[#F7F5F2]">
        <h2 className="mx-auto max-w-3xl text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      <div className="border-t border-line bg-paper">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Next Step</p>
            <p className="mt-3 text-base font-semibold text-ink">
              Guest Squad covers after-hours calls, OTA inboxes, and guest messages overnight.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Every call answered by a trained person, not voicemail. Every OTA message replied to before your reply score takes a hit. Your team starts the day with a clear handoff summary.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services/after-hours-support"
                className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:bg-gold/90"
              >
                See after-hours coverage
              </Link>
              <Link
                href="/resources/missed-booking-calculator"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
              >
                Calculate your overnight revenue gap <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Related Insights</p>
              <div className="mt-3 flex flex-col gap-2.5">
                <Link href="/resources/insights/unanswered-reservation-calls-revenue" className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="leading-snug group-hover:underline">The Cost of Unanswered Hotel Reservation Calls</span>
                </Link>
                <Link href="/resources/insights/when-to-outsource-guest-communication" className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="leading-snug group-hover:underline">When to Outsource Hotel Guest Communication</span>
                </Link>
                <Link href="/resources/insights/fast-responses-reduce-cancellations" className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="leading-snug group-hover:underline">How Fast Responses Reduce Hotel Cancellations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="Ready to close your overnight coverage gap?"
        description="Tell us your call volume, channels, and hours and we will walk through exactly what after-hours coverage your property needs."
      />
    </>
  );
}
