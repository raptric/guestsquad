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

const PATH = "/resources/insights/ota-ranking-response-time";
const DATE_PUBLISHED = "2026-08-10T00:00:00+00:00";

const FAQS = [
  {
    q: "How does response time affect my Booking.com ranking?",
    a: "Booking.com uses a reply score — the percentage of messages answered within 24 hours over the past 30 days — as a direct ranking input. Properties that fall below 90% face ranking penalties. The platform does not send a notification when your score crosses the threshold; the ranking simply adjusts.",
  },
  {
    q: "What is the minimum response rate to avoid ranking penalties on Booking.com?",
    a: "The minimum threshold is 90% of messages answered within 24 hours. The competitive standard among well-ranked properties is under one hour during operating hours. Staying above 90% keeps you out of penalty territory — it does not make you competitive against properties responding in under an hour.",
  },
  {
    q: "How long does it take for a Booking.com ranking to recover after a response time drop?",
    a: "Because Booking.com uses a 30-day rolling window, recovery requires four weeks of consistently high reply rates above the 90% threshold. During that window the ranking stays suppressed and the booking impact continues.",
  },
  {
    q: "Does Expedia also use response time as a ranking factor?",
    a: "Expedia tracks and displays your response rate on your listing and factors it into partner status. While Expedia does not publish the exact algorithmic weight, lower response rates correlate with reduced visibility and lower partner tier placement.",
  },
  {
    q: "What hours do most hotel OTA inboxes go unmonitored?",
    a: "Most independent hotel operations do not actively monitor OTA inboxes between 10pm and 7am to 8am. That is a nine to ten hour overnight gap — the same window when guests in different time zones are most likely to send pre-booking enquiries and compare properties before confirming.",
  },
  {
    q: "Can auto-responses or templates protect my reply score?",
    a: "An auto-response can acknowledge receipt and stop the clock on Booking.com's reply timer in some configurations, but it cannot answer a rate question, confirm availability, or convert a comparison shopper. Templates protect the metric; they do not close the booking.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "How Slow Replies Hurt Your Hotel's OTA Ranking",
  description:
    "Booking.com's reply score directly affects your search ranking. Here's how slow responses trigger ranking drops and what the Preferred Partner penalty costs your listing.",
  path: PATH,
});

export default function OtaRankingResponseTimePage() {
  const articleUrl = `${SITE.url}${PATH}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "What Happens to Your Hotel's OTA Ranking When You Reply Slowly",
            description:
              "Booking.com tracks your reply score as a direct ranking input. Here's exactly how slow responses move your listing down, what the Preferred Partner penalty costs you, and how to fix it.",
            path: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_PUBLISHED,
            about: {
              type: "Service",
              name: "OTA Inbox Management",
              serviceType: "OTA Inbox Management",
              url: `${SITE.url}/services/ota-inbox-management`,
            },
            mentions: [
              { type: "Organization", name: "Booking.com" },
              { type: "Organization", name: "Expedia" },
              { type: "Organization", name: "Airbnb" },
              { type: "Thing", name: "OTA Inbox Management" },
              { type: "Thing", name: "Hotel OTA Ranking" },
              { type: "Thing", name: "Booking.com Reply Score" },
              { type: "Thing", name: "Preferred Partner Status" },
              { type: "Article", name: "Booking.com and Expedia Message Support: An OTA Inbox Checklist", id: "https://guestsquad.com/resources/booking-com-message-support#article" },
            ],
            articleSection: "OTA Rankings",
            keywords: "OTA ranking, Booking.com reply score, hotel response time, Preferred Partner status, OTA inbox management",
            timeRequired: "PT8M",
            wordCount: 1850,
            audience: [
              { audienceType: "Independent Hotel Owner" },
              { audienceType: "Boutique Hotel Operator" },
              { audienceType: "Vacation Rental Manager" },
              { audienceType: "Short-Term Rental Operator" },
            ],
            citation: [
              { name: "D-Edge Hotel Distribution Report 2024", url: "https://www.d-edge.com/wp-content/uploads/2024/04/Hotel-Distribution-Report-2024-EN.pdf" },
              { name: "Enso Connect: Response Times in Hospitality", url: "https://ensoconnect.com/resources/response-times-in-hospitality-a-guide-for-vacation-rental-professionals" },
              { name: "Rentals United: Improve Booking.com Ranking", url: "https://rentalsunited.com/blog/improve-booking-com-ranking/" },
              { name: "TravelScrape: OTA Ranking & Visibility", url: "https://www.travelscrape.com/ota-ranking-visibility.php" },
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": `${SITE.url}${PATH}#howto`,
            name: "How to audit your hotel's OTA reply score and close the coverage gap",
            totalTime: "PT30M",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Find your reply score today",
                text: "Log into Booking.com Extranet → Inbox → Messaging Analytics. Both your reply score and average response time are displayed there. If you have not looked in the past 30 days, this is the starting point — not guessing at what might be wrong.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Map your unmonitored hours",
                text: "Write down the hours when nobody on your team is actively watching the OTA inbox. For most independent hotels this is a ten-hour overnight block. That is your exposure window.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Set a triage rule",
                text: "Pre-booking enquiries — any message that arrives before a reservation exists — need a response within 30 minutes during your operating hours. Post-booking operational questions can wait until morning without ranking penalty.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Check the score weekly, not monthly",
                text: "The 30-day window punishes a run of consecutive bad nights faster than a monthly reporting cycle catches it. Set a weekly calendar reminder to check Messaging Analytics before Monday's team briefing.",
              },
            ],
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Insights", path: "/resources/insights" },
            { name: "OTA Ranking & Response Time", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Insights", path: "/resources/insights" },
          { name: "OTA Ranking & Response Time", path: PATH },
        ]}
      />

      {/* Article header */}
      <div className="border-b border-line bg-paper">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3 text-xs text-ink-muted">
              <span className="font-semibold uppercase tracking-widest text-gold-dark">OTA Rankings</span>
              <span>·</span>
              <span>8 min read</span>
              <span>·</span>
              <time dateTime={DATE_PUBLISHED}>August 10, 2026</time>
            </div>
            <h1 className="mt-4 text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              What Happens to Your Hotel&apos;s OTA Ranking When You Reply Slowly
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Booking.com tracks your reply score as a direct ranking input. Here&apos;s exactly how slow responses move your listing down, what the Preferred Partner penalty costs you, and how to fix it.
            </p>
            <p className="mt-4 text-xs text-ink-muted">
              By <span className="font-medium text-ink">Guest Squad</span>
            </p>
          </div>
        </div>
      </div>

      {/* Article body */}
      <Section>
        <div className="mx-auto max-w-2xl">

          {/* Opening */}
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            A hotel ranked third in their market on Booking.com. By the time the general manager noticed Q4 bookings were tracking 38% below forecast, they had slipped to ninth. The rate hadn&apos;t changed. The photos were the same. No significant negative reviews had landed. What had changed was their message response time — a metric nobody was watching, sitting in a tab in the extranet that nobody had thought to check.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            This is not an unusual pattern. According to{" "}
            <a href="https://www.travelscrape.com/ota-ranking-visibility.php" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              OTA ranking analysts at TravelScrape
            </a>
            , in 80% of cases where hotel clients report a drop in OTA bookings, the cause is a ranking problem, not a pricing one. And the most common driver of that ranking problem is response time.
          </p>

          {/* H2 1 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Is your reply time actually a ranking signal?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Yes — on Booking.com, response time is a direct algorithm input, not a soft quality indicator. The platform tracks a &ldquo;reply score&rdquo;: the percentage of guest messages answered within 24 hours, calculated across a rolling 30-day window.{" "}
            <a href="https://www.guestara.com/post/hotel-guest-message-response-time-benchmarks" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Properties that fall below a 90% response rate face ranking penalties
            </a>
            , and the platform does not send an alert when your score crosses that threshold. The algorithm simply adjusts your position, quietly.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The competitive standard among well-ranked properties is under one hour during operating hours. Ninety percent within 24 hours keeps you out of penalty territory — it does not make you competitive.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            When we first access a property&apos;s Booking.com Extranet as part of an inbox audit, the reply score is almost never where the team thinks it is. Front desk staff gauge their responsiveness by feel — how quickly they check their phone, whether they got to messages before noon. The extranet number tells a different story. Properties that consider themselves responsive routinely sit at 78–84%, because the score is a 30-day rolling average that weights every overnight hour equally. One well-staffed day does not cancel out five unmanned nights.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Expedia tracks and displays response rate on your listing. While Expedia does not publish precise algorithmic weights, lower response rates correlate with lower partner status and reduced placement.{" "}
            <a href="https://ensoconnect.com/resources/response-times-in-hospitality-a-guide-for-vacation-rental-professionals" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Airbnb properties that respond within one hour see 25% more instant bookings
            </a>{" "}
            according to platform data cited by Enso Connect. The shared logic across all three platforms is the same: a guest who sends a pre-booking question and waits hours does not wait — they move to the next property on the list.
          </p>

          {/* H2 2 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Why does a slow response hurt your ranking, not just one booking?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The algorithm penalises pattern, not individual incidents. A single missed reply in a strong month does not move your reply score enough to matter. But if your inbox is routinely unmanned overnight — the same gap, every night — your 30-day average reflects it consistently, and the ranking adjusts accordingly.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The consequence goes further than fewer eyes on your listing. It is that fewer people see your property during the weeks when they are still deciding.{" "}
            <a href="https://www.d-edge.com/wp-content/uploads/2024/04/Hotel-Distribution-Report-2024-EN.pdf" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              OTAs captured 61% of bookings for independent properties in 2024, and 77% in Europe
            </a>
            , according to the D-Edge Hotel Distribution Report 2024. For most independent hotels, OTA visibility is not a secondary channel — it is the primary one. A ranking drop in October does not show in occupancy until December, after the booking window for that period has already closed.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            There is a second penalty that compounds the first. A low reply score blocks you from achieving Booking.com Preferred Partner status — the tier that{" "}
            <a href="https://rentalsunited.com/blog/improve-booking-com-ranking/" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              gives properties up to 65% more page views and 40% more bookings
            </a>{" "}
            compared to standard listings. Slow responses cost you two things simultaneously: your position in algorithmic search results, and the Preferred Partner badge that would have amplified that position further.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The delay is what makes this particularly damaging. By the time your revenue numbers show the problem, the opportunity to fix it for that month is gone.
          </p>

          {/* H2 3 — table */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            What does &ldquo;slow&rdquo; actually mean on each platform?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Each OTA uses different language and different thresholds — but none of them are fully transparent about the exact algorithmic weight of response time.
          </p>

          <div className="mb-5 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">Platform</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">Minimum threshold</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">Competitive standard</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">What gets tracked</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    platform: "Booking.com",
                    min: "90% of messages answered within 24 hrs",
                    competitive: "Under 1 hour during operating hours",
                    tracked: "Reply score (rolling 30-day window)",
                  },
                  {
                    platform: "Expedia",
                    min: "Not published",
                    competitive: "Under 1 hour recommended",
                    tracked: "Response rate (visible on listing, affects partner tier)",
                  },
                  {
                    platform: "Airbnb",
                    min: "90% over 365 days",
                    competitive: "Within 1 hour",
                    tracked: "Response rate + Superhost eligibility",
                  },
                ].map((row, i, arr) => (
                  <tr key={row.platform} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                    <td className="px-4 py-3 font-medium text-ink">{row.platform}</td>
                    <td className="px-4 py-3 text-ink-soft">{row.min}</td>
                    <td className="px-4 py-3 text-ink-soft">{row.competitive}</td>
                    <td className="px-4 py-3 text-ink-soft">{row.tracked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Booking.com is the most consequential for most independent hotels because the reply score is a live ranking variable, not a badge. Miss the 90% threshold and your listing moves down — immediately, and with no notification.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The overnight gap is where most independent properties accumulate the damage.{" "}
            <a href="https://ensoconnect.com/resources/response-times-in-hospitality-a-guide-for-vacation-rental-professionals" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              The industry average response time to guest messages for short-term rental hosts is 9 minutes
            </a>
            . Hotel front desks typically have nobody monitoring OTA inboxes between 10pm and 7am — a nine-hour window in which pre-booking questions from guests in different time zones sit unanswered.
          </p>

          {/* H2 4 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Why do most hotels discover this problem too late?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The reply score lives in the Booking.com Extranet, not in your PMS or your front desk log. If your team is not checking the Messaging Analytics tab, you will not see the number move until it has already affected your position. Most front desk teams do not check it — because the extranet is primarily used for rate and availability management, because the metric is two clicks from the home screen, and because there is no push notification when it falls.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The feedback loop compounds the delay. Slow replies depress the reply score. A lower score reduces ranking and impressions. Fewer impressions means fewer enquiries. Fewer enquiries means lower occupancy — four to six weeks after the original response-time problem began. By the time a general manager flags underperformance in a monthly review, the cause is already a month old and the window for that period is closed.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The one thing that breaks this loop is checking the metric weekly. Go to Booking.com Extranet → Inbox → Messaging Analytics. Your reply score and average response time are both displayed there. If you have not looked in the past 30 days, you do not currently know whether you have a problem.
          </p>

          {/* inline CTA */}
          <div className="my-8 rounded-lg border border-gold/30 bg-gold/5 px-6 py-5">
            <p className="text-sm font-medium text-ink">Not sure what standards your OTA inbox should meet?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              The Booking.com and Expedia Message Support Checklist covers response-time targets, pre-booking standards, and escalation rules — platform by platform.
            </p>
            <Link
              href="/resources/booking-com-message-support"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
            >
              Download the checklist <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* H2 5 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Who is monitoring your OTA inbox at 11pm?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            This is a staffing problem, not a technology problem. Auto-responses and template libraries can acknowledge that a message was received. They cannot answer a rate enquiry, confirm a specific room type&apos;s availability, or reassure a guest who is choosing between your property and two others at 11:45pm.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            For most independent properties, evening front desk coverage handles check-in, guest requests, and in-person questions from roughly 3pm to 9pm. OTA pre-booking enquiries arrive during the same window — and the team responds to what is physically in front of them. After 10pm, the inbox is unmanned.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            A guest searching from London at midnight — 7am in their destination&apos;s time zone — sends a pre-booking question to three shortlisted properties. The one that responds overnight takes the booking. The others respond at 8am to find the decision already made.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            This is not a training issue or a process gap. It is a coverage gap — the same kind the{" "}
            <Link href="/resources/booking-com-message-support" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Booking.com and Expedia Message Support Checklist
            </Link>{" "}
            is built to help you identify across your channels and hours.
          </p>

          {/* H2 6 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            What does recovering a lost ranking actually look like?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Recovery is possible, but the mathematics work against you. Booking.com&apos;s 30-day rolling window means that rebuilding from 82% to above 90% requires four weeks of clean, consistent replies at full coverage. During those four weeks, the ranking stays suppressed and the booking impact continues.
          </p>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Recoverable</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">A staff transition or isolated short-staffed period caused the drop. Staffing is restored, reply rates are back above 90%, and you need the 30-day window to reset. Expect two to four weeks before ranking returns to its previous position.</p>
            </div>
            <div className="flex-1 rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Structural gap</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">The inbox is routinely unmanned overnight and at weekends — not an exception, but the standard model. Better templates and SOPs will not close a nine-hour overnight gap. Only coverage changes the score.</p>
            </div>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The pattern holds across property types. A lean two-person front desk at a 30-room boutique operates identically to a 15-room inn in this respect: the inbox goes dark when the last staff member locks up. The size of the property does not determine the size of the gap — the staffing model does.
          </p>

          {/* H2 7 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            What should you check before making any decision?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Start with measurement, not action.
          </p>
          <div className="mb-5 flex flex-col gap-3">
            {[
              {
                n: "01",
                title: "Find your reply score today",
                body: "Log into Booking.com Extranet → Inbox → Messaging Analytics. Both your reply score and average response time are displayed there. If you have not looked in the past 30 days, this is the starting point — not guessing at what might be wrong.",
              },
              {
                n: "02",
                title: "Map your unmonitored hours",
                body: "Write down the hours when nobody on your team is actively watching the OTA inbox. For most independent hotels this is a ten-hour overnight block. That is your exposure window.",
              },
              {
                n: "03",
                title: "Set a triage rule",
                body: "Pre-booking enquiries — any message that arrives before a reservation exists — need a response within 30 minutes during your operating hours. Post-booking operational questions can wait until morning without ranking penalty.",
              },
              {
                n: "04",
                title: "Check the score weekly, not monthly",
                body: "The 30-day window punishes a run of consecutive bad nights faster than a monthly reporting cycle catches it.",
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
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            If mapping your unmonitored hours reveals a gap of four hours or more per night, manual process changes are unlikely to close it. The{" "}
            <Link href="/resources/missed-booking-calculator" className="text-gold-dark underline underline-offset-4 hover:text-gold">
              Missed Booking Revenue Calculator
            </Link>{" "}
            can help you put a number on what that gap is costing before you evaluate your options.
          </p>

          {/* H2 8 */}
          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            When is the gap too large to close manually?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            One trained person monitoring your OTA inboxes overnight, replying to pre-booking enquiries within 30 minutes, costs less than the revenue from a single recovered booking per week in almost every hotel market. The question is not whether the economics make sense — it is whether your operation can add that coverage role internally, or whether outsourcing is the more practical path.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Properties that outsource OTA inbox management to a dedicated team maintain reply scores in the 95–100% range consistently, because the overnight gap is the first thing a dedicated service closes. That consistent performance compounds into a ranking advantage over properties with structural overnight gaps — an advantage that shows in impressions, enquiries, and occupancy over the following months.
          </p>

        </div>
      </Section>

      {/* Primary CTA */}
      <div className="border-y border-line bg-surface">
        <div className="container py-10">
          <div className="mx-auto max-w-2xl">
            <p className="text-base font-medium text-ink">
              Guest Squad manages Booking.com, Expedia, and Airbnb inboxes around the clock.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Pre-booking enquiries, in-stay messages, complaint triage, and escalation to your on-call contact. Your reply score stays healthy. Your ranking reflects it.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services/ota-inbox-management"
                className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:bg-gold/90"
              >
                See OTA inbox management
              </Link>
              <Link
                href="/resources/booking-com-message-support"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
              >
                Download the OTA message checklist <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="border-t border-line">
        <div className="container py-10">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Related insights</p>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/resources/insights/booking-com-message-management-lean-teams" className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="leading-snug group-hover:underline">Booking.com Message Management for Lean Hotel Teams</span>
              </Link>
              <Link href="/resources/insights/airbnb-response-time-visibility" className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="leading-snug group-hover:underline">How Response Time Affects Airbnb Search Visibility</span>
              </Link>
              <Link href="/resources/insights/fast-responses-reduce-cancellations" className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="leading-snug group-hover:underline">How Fast Responses Reduce Hotel Cancellations</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-[#F7F5F2]">
        <h2 className="mx-auto max-w-3xl text-lg font-semibold text-ink">Frequently asked questions</h2>
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>

      {/* Related reading */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold text-ink">Related reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/resources/booking-com-message-support",
                tag: "Checklist",
                title: "Booking.com & Expedia Message Support Checklist",
                body: "Response-time targets, pre-booking standards, complaint handling, and escalation rules for OTA inboxes.",
              },
              {
                href: "/resources/missed-booking-calculator",
                tag: "Calculator",
                title: "Missed Booking Revenue Calculator",
                body: "Estimate how much unanswered calls and messages are costing your property each month.",
              },
              {
                href: "/services/ota-inbox-management",
                tag: "Service",
                title: "OTA Inbox Management",
                body: "24/7 coverage for Booking.com, Expedia, and Airbnb inboxes so your reply score stays healthy.",
              },
              {
                href: "/services/after-hours-support",
                tag: "Service",
                title: "After-Hours Hotel Support",
                body: "Overnight and weekend front-desk coverage for calls and messages outside your staffed hours.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-5 transition-colors hover:border-gold/50"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{item.tag}</span>
                  <h3 className="mt-2 text-sm font-medium text-ink transition-colors group-hover:text-gold-dark">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
                <p className="mt-4 flex items-center gap-1 text-xs font-medium text-gold-dark group-hover:text-gold">
                  View <ArrowUpRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaSection
        title="Ready to stop losing ranking to slow replies?"
        description="Start with a 2-week pilot. We review your OTA inboxes, call gaps, and after-hours needs before you commit to anything."
      />
    </>
  );
}
