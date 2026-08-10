import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { Section } from "@/components/site/section";
import { buildMetadata, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

const PATH = "/resources/insights/hotel-guest-messaging-lifecycle";
const DATE_PUBLISHED = "2026-08-11T00:00:00+00:00";

const FAQS = [
  {
    q: "What are the three stages of hotel guest messaging?",
    a: "Pre-arrival messaging covers everything from pre-booking enquiries through to arrival confirmation and check-in details. In-stay messaging covers requests, questions, and issues during the guest's time at the property. Post-checkout messaging covers thank-you messages, review invitations, and any follow-up required after departure. Each stage has different goals, different urgency levels, and different impact on bookings and reviews.",
  },
  {
    q: "Why is pre-arrival messaging the most commercially important stage?",
    a: "Pre-arrival messaging includes pre-booking enquiries from guests who have not yet committed. These are the highest-stakes messages from a revenue perspective — a slow reply means the guest may book elsewhere. Even after booking is confirmed, pre-arrival messages about special requests, accessibility, or logistics affect cancellation risk. A guest who cannot get answers before arrival is more likely to cancel.",
  },
  {
    q: "What types of messages arrive during a guest's stay?",
    a: "In-stay messages range from maintenance requests (broken air conditioning, missing towels) to questions about local recommendations, dining, transportation, and checkout procedures. Complaints also arrive during the stay — these are the highest-review-risk messages because the guest is forming their final impression of the property while still on site.",
  },
  {
    q: "Does a post-checkout message improve the chance of a positive review?",
    a: "Yes. A brief, genuine post-checkout message thanking the guest and inviting them to share feedback increases both the likelihood of a review and the quality of it. Guests who feel acknowledged after their stay are more likely to take the time to write a review, and their review is more likely to reflect the care they experienced throughout the journey, not just the stay itself.",
  },
  {
    q: "How quickly should each stage of messages be answered?",
    a: "Pre-booking enquiries should be answered within one to two hours — not just within 24 hours, because the booking decision is live. Pre-arrival messages from confirmed guests should be answered within the same day. In-stay messages, particularly complaints or maintenance issues, should be answered within 30 minutes to one hour. Post-checkout messages can be answered within one to two days, though sooner is better if the guest has raised an issue.",
  },
  {
    q: "How do hotels manage messaging volume across all three stages simultaneously?",
    a: "The most effective model separates in-person guest service from inbox management. When front desk staff manage messages between check-ins and check-outs, both functions compete for the same attention. Properties that outsource inbox management — either through dedicated property management software or a guest messaging support team — ensure that message volume in any one stage does not degrade response quality in the others.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "What Good Hotel Guest Messaging Looks Like Before Arrival, During Stay, and After Checkout",
  description:
    "Guest messaging is not one function — it's three, each with different goals, urgency levels, and impact on revenue and reviews. Here's what strong messaging looks like across the full guest journey.",
  path: PATH,
});

export default function GuestMessagingLifecyclePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "What Good Hotel Guest Messaging Looks Like Before Arrival, During Stay, and After Checkout",
            description:
              "Guest messaging is not one function — it's three, each with different goals, urgency levels, and impact on revenue and reviews. Here's what strong messaging looks like across the full guest journey.",
            path: PATH,
            datePublished: DATE_PUBLISHED,
            dateModified: DATE_PUBLISHED,
            about: {
              type: "Service",
              name: "Hotel Guest Messaging",
              serviceType: "Hotel Guest Messaging",
              url: `${SITE.url}/services/guest-messaging`,
            },
            mentions: [
              { type: "Organization", name: "Booking.com" },
              { type: "Organization", name: "Airbnb" },
              { type: "Thing", name: "Hotel Guest Communication" },
              { type: "Thing", name: "Pre-Arrival Messaging" },
              { type: "Thing", name: "In-Stay Guest Messaging" },
              { type: "Thing", name: "Post-Checkout Follow-Up" },
              { type: "Thing", name: "Guest Journey Communication" },
            ],
          }),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": `${SITE.url}${PATH}#howto`,
            name: "How to structure guest messaging across the three stages of the guest journey",
            totalTime: "PT30M",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Pre-arrival: answer every enquiry within two hours",
                text: "From the moment a potential guest makes contact — via OTA message, phone, email, or direct booking enquiry — the clock is running. Pre-booking enquiries should receive a substantive reply within one to two hours, not just within 24 hours. After booking is confirmed, pre-arrival messages about special requests, check-in timing, and logistics should be answered within the same day. Set up saved message templates for the most common pre-arrival questions so replies are fast and consistent.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "In-stay: prioritise complaints and maintenance above everything else",
                text: "During the stay, maintenance requests and complaints carry the highest review risk. A guest who raised an issue and did not hear back will write about it. Establish a clear escalation path: a maintenance request sent by message should trigger an immediate acknowledgement and a time commitment ('our maintenance team will be there within 30 minutes'). Complaints should receive a real response, not just an acknowledgement. In-stay messages about local recommendations and logistics can be answered within a few hours.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Post-checkout: send one genuine follow-up within 24 hours of departure",
                text: "Send a brief post-checkout message thanking the guest and inviting them to share their experience. Keep it short and specific — reference something from their stay if you can. A template is fine; a template that sounds personal is better. Do not attach multiple review links or make the message feel like a marketing email. The goal is a genuine expression of thanks that leaves the guest feeling valued, not chased.",
              },
            ],
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Insights", path: "/resources/insights" },
            { name: "Hotel Guest Messaging Lifecycle", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Insights", path: "/resources/insights" },
          { name: "Hotel Guest Messaging Lifecycle", path: PATH },
        ]}
      />

      <div className="border-b border-line bg-paper">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3 text-xs text-ink-muted">
              <span className="font-semibold uppercase tracking-widest text-gold-dark">Guest Messaging</span>
              <span>·</span>
              <span>8 min read</span>
              <span>·</span>
              <time dateTime={DATE_PUBLISHED}>August 11, 2026</time>
            </div>
            <h1 className="mt-4 text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              What Good Hotel Guest Messaging Looks Like Before Arrival, During Stay, and After Checkout
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Guest messaging is not one function — it&apos;s three, each with different goals, urgency levels, and impact on revenue and reviews. Here&apos;s what strong messaging looks like across the full guest journey.
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
            Hotel messaging tends to be treated as a reactive task — something the front desk handles between other duties, when a message arrives that needs a reply. The problem with that model is that it treats the three very different stages of guest communication as a single function: check the inbox, reply, move on. In practice, a pre-booking enquiry from a guest who has not yet committed, an in-stay complaint from a guest mid-experience, and a post-checkout follow-up from a guest about to write a review are three fundamentally different conversations with different urgency levels, different stakes, and different goals.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Getting the structure right across all three stages is what separates properties with consistently high review scores and low cancellation rates from those that handle messaging well most of the time and poorly at exactly the wrong moments.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Stage 1: Pre-arrival messaging — the revenue stage
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Pre-arrival messaging begins before a booking exists and runs through to the day of arrival. It is the stage with the highest revenue consequence and the widest range of urgency.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            At the top of the urgency scale: pre-booking enquiries. A guest who messages via Booking.com, Airbnb, or your direct booking page asking about availability, rates, or specific room features is in an active decision window. They are likely comparing your property with two or three others simultaneously. The first substantive reply wins. Booking.com&apos;s reply score measures responses within 24 hours, but the practical standard for pre-booking conversion is much shorter — replying at 23 hours and 50 minutes is still a reply that might arrive after the guest booked elsewhere.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Once a booking is confirmed, pre-arrival messages shift in character. The guest is no longer comparing — they have committed. But they are still forming expectations and may still cancel. A message about an accessibility requirement, a dietary request, or an arrangement for a celebration is a guest asking: &ldquo;Can this property actually deliver what I need?&rdquo; A slow or incomplete reply introduces doubt. Vrbo&apos;s own documentation notes that fast responses reduce the likelihood of a cancellation. The mechanism is this: a guest whose questions are answered promptly has higher confidence in the stay and lower incentive to look elsewhere.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The final pre-arrival messages — check-in instructions, parking directions, door code, welcome information — should be sent proactively, not waited for. A guest who receives this information 24-48 hours before arrival has one fewer reason to message, one fewer potential source of pre-arrival anxiety, and a stronger positive first impression of the property before they have even arrived.
          </p>

          <div className="mb-5 rounded-lg border border-line bg-paper p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-muted">Stage 1 — Pre-arrival standards</p>
            <div className="flex flex-col gap-2">
              {[
                { msg: "Pre-booking enquiry", target: "Under 2 hours", why: "Active booking decision in progress" },
                { msg: "Post-booking special request", target: "Same day", why: "Cancellation risk if unanswered" },
                { msg: "Pre-arrival logistics", target: "Same day or proactively", why: "Expectation-setting and confidence" },
                { msg: "Check-in information", target: "24-48hrs before arrival", why: "Reduce friction and pre-arrival contact" },
              ].map((row) => (
                <div key={row.msg} className="grid grid-cols-3 gap-3 border-t border-line pt-2 first:border-t-0 first:pt-0">
                  <span className="text-sm text-ink">{row.msg}</span>
                  <span className="text-sm font-medium text-gold-dark">{row.target}</span>
                  <span className="text-sm text-ink-soft">{row.why}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Stage 2: In-stay messaging — the review stage
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            In-stay messaging is the stage most directly connected to the review the guest will write. Every message a guest sends during their stay is a data point about what they are experiencing and, critically, how the property responds to that experience. A guest who sends a message about a noisy room, a broken appliance, or a missing amenity and receives no reply is not just frustrated — they are building the opening paragraph of a negative review.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The most consequential in-stay messages fall into two categories. Maintenance requests require acknowledgement within minutes and resolution within a clear time frame. &ldquo;Our maintenance team will be with you within 30 minutes&rdquo; is dramatically better than a slow reply because it removes uncertainty. The guest may still be inconvenienced, but they know someone is coming and when. That framing — responsive, specific, accountable — is what the review will reflect.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Complaints are more delicate. A guest who is unhappy enough to message about it is signalling that something has gone wrong in a way that has passed their personal threshold for raising an issue. The response needs to acknowledge the specific problem — not a generic apology — and offer a concrete resolution where possible. A complaint handled well during the stay is often described positively in the review. &ldquo;There was an issue with our room but the team sorted it immediately&rdquo; is a better review outcome than no complaint at all, because it demonstrates service responsiveness in a credible way.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Informational in-stay messages — local restaurant recommendations, transport directions, checkout procedure questions — are lower urgency but still worth answering within a few hours. A guest who asks for a restaurant recommendation at 6pm and receives a reply at 10pm has missed dinner based on your suggestion. Responding within one to two hours for informational in-stay messages maintains the positive frame throughout the stay.
          </p>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Stage 3: Post-checkout messaging — the review invitation stage
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Post-checkout messaging has the lowest urgency but a significant and often underused opportunity. A brief, genuine message thanking the guest within 24 hours of departure does three things: it closes the guest journey on a positive note, it invites feedback, and it increases the probability that the guest writes a review.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The psychology is straightforward. Most guests who have a positive stay do not write a review unless prompted — not because they are unhappy, but because it requires activation energy they default to not spending. A warm post-checkout message lowers that activation energy. It makes writing a review feel like a reciprocal gesture rather than an administrative task.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The message should be short, specific where possible, and free of multiple calls to action. Mentioning something from the guest&apos;s stay — their arrival timing, a request they made, a detail you remember — makes it feel personal rather than templated. A review platform link is appropriate, but it should appear naturally at the end, not as the obvious purpose of the message.
          </p>

          <div className="my-8 rounded-lg border border-gold/30 bg-gold/5 px-6 py-5">
            <p className="text-sm font-medium text-ink">Looking for a structured messaging SOP for your property?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              The Hotel Guest Messaging SOP Template covers pre-arrival, in-stay, and post-checkout workflows — including response time standards, escalation paths, and template library structure.
            </p>
            <Link
              href="/resources/hotel-guest-messaging-sop-template"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
            >
              Download the SOP Template <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <h2 className="mb-3 mt-10 text-lg font-semibold text-ink">
            Why the three stages need separate coverage thinking
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            Managing all three messaging stages from a single front desk inbox creates competition between different urgency levels. A complaint that arrives during the same hour as a check-in queue and three pre-booking enquiries may not receive the immediate acknowledgement it needs. A pre-booking enquiry may not get the two-hour response that makes the difference between converting and losing the booking.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            The most reliable way to maintain standards across all three stages is to separate inbox management from in-person guest service. When a trained team handles messaging — across all stages, across all channels — the front desk is free to focus on the guest in front of them, and neither function degrades the other.
          </p>
          <p className="mb-5 text-sm leading-relaxed text-ink-soft">
            For properties that are not ready for dedicated messaging support, the minimum standard is a clear written protocol: which message types get replied to within how many hours, who is responsible for each type, how complaints are escalated, and what the post-checkout follow-up looks like. That clarity, even without outsourcing, is materially better than an inbox managed reactively.
          </p>

        </div>
      </Section>

      <div className="border-y border-line bg-surface">
        <div className="container py-10">
          <div className="mx-auto max-w-2xl">
            <p className="text-base font-medium text-ink">
              Guest Squad manages messaging across all three stages of the guest journey.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Pre-booking enquiries answered within hours. In-stay complaints escalated and resolved. Post-checkout follow-ups sent consistently. Your front desk focuses on in-person service.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services/guest-messaging"
                className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:bg-gold/90"
              >
                See guest messaging service
              </Link>
              <Link
                href="/resources/hotel-guest-messaging-sop-template"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
              >
                Download the SOP Template <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Section surface>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-semibold text-ink">Frequently asked questions</h2>
          <div className="mt-8 flex flex-col gap-6">
            {FAQS.map((item) => (
              <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="text-sm font-medium text-ink">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaSection
        title="Build a messaging system that works across the full guest journey."
        description="Tell us your current messaging setup and we'll show you where the gaps are and what consistent coverage would look like."
      />
    </>
  );
}
