import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

const PAGE_TITLE = "Airbnb Guest Services for Hosts: Messages & Response Rate";

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description:
      "Airbnb guest services for hosts and STR operators: guest messages answered day and night, check-in help, in-stay issues and your response rate protected.",
    path: "/services/airbnb-guest-support",
  }),
  title: { absolute: PAGE_TITLE },
};

const PATH = "/services/airbnb-guest-support";

const FAQS = [
  {
    q: "How much do Airbnb guest services cost?",
    a: "Your price depends on your listing count, the platforms covered and your message volume. Everything is set out in a written proposal before coverage begins.",
  },
  {
    q: "Will this help my response rate and Superhost status?",
    a: "It's designed to. Replies go out during the hours and on the listings you agree, including overnight, which supports the response-rate requirement. Superhost also depends on stays, cancellations and ratings, which stay in your hands.",
  },
  {
    q: "How do you handle several listings with different instructions?",
    a: "Each listing gets its own brief with check-in details, house rules, amenity instructions and escalation preferences. Agents use the right information for each unit. Listing count is agreed in your scope.",
  },
  {
    q: "What if a guest needs something only I can handle, like a maintenance visit?",
    a: "We contact you or your co-host with the listing, the guest's name and a description of the issue. The guest is told the request has been passed on and what to expect next.",
  },
  {
    q: "Do you cover Vrbo and direct bookings too, or just Airbnb?",
    a: "Airbnb, Vrbo and direct-booking messages can all be covered from one point of coverage.",
  },
  {
    q: "I'm one host with a few units. Does this still make sense?",
    a: "Yes. It's built for hosts and small operators who can't realistically be on call day and night themselves.",
  },
  {
    q: "Is Guest Squad an Airbnb guest services provider?",
    a: "Yes. We provide Airbnb guest services for hosts, serviced apartment operators and short-term rental managers who want human guest support without watching the inbox themselves. If your guests also phone you, our vacation rental answering service covers calls too.",
  },
];

export default function AirbnbGuestSupportPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="airbnb-guest-support" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "Airbnb Guest Services",
            serviceType: "Airbnb Guest Support Service",
            description:
              "Airbnb guest services for hosts and STR operators: guest messages answered day and night, check-in help, in-stay issues and your response rate protected.",
            url: `${SITE.url}${PATH}`,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: [
              { "@type": "Country", name: "US" },
              { "@type": "Country", name: "GB" },
              { "@type": "Country", name: "CA" },
              { "@type": "Country", name: "IE" },
              { "@type": "Country", name: "AU" },
              { "@type": "Country", name: "NZ" },
            ],
            audience: [
              { "@type": "Audience", audienceType: "Airbnb Host" },
              { "@type": "Audience", audienceType: "Vrbo Host" },
              { "@type": "Audience", audienceType: "Short-Term Rental Operator" },
              { "@type": "Audience", audienceType: "Serviced Apartment Operator" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: PAGE_TITLE,
            description:
              "Airbnb guest services for hosts and STR operators: guest messages answered day and night, check-in help, in-stay issues and your response rate protected.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Airbnb Guest Services", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Airbnb Guest Services", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Airbnb Guest Services
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Airbnb Guest Services for Hosts and Short-Term Rental Operators
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-snug text-ink">
            Guest Support Operations for Airbnb hosts: trained people answer guest messages day and night, within the listings and hours you agree, to help keep your response rate on track.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Airbnb guest services from Guest Squad mean a trained person reads and answers your Airbnb guest messages around the clock, using each listing&apos;s own brief: check-in questions, house rules, Wi-Fi, in-stay issues and post-stay replies. Prompt, consistent replies support your response rate, one of the Superhost requirements, and help enquiries turn into bookings. Airbnb messaging is part of our{" "}
            <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              vacation rental answering service
            </Link>
            . Coverage is scoped to your listings, channels and message volume. If your guests also phone you, that page covers live call answering.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="lg" ctaLocation="airbnb_hero">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <Section id="what-it-is">
        <SectionHeading
          eyebrow="What it is"
          title="What are Airbnb guest services?"
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            Airbnb guest services mean your Airbnb inbox is watched and answered by a trained person, instead of waiting until you wake up or finish your other job. Check-in questions, listing FAQs, in-stay issues and post-stay messages are handled from your listing instructions, so guests get consistent answers from one booking to the next.
          </p>
          <p>
            This Airbnb guest support is built around how the platform works: in-app messaging, response rate, Superhost criteria and guests spread across several listings. It is separate from the{" "}
            <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              vacation rental answering service
            </Link>
            , which is phone-first and covers live call answering for short-term rental operators.
          </p>
        </div>
      </Section>

      {/* INCLUDED */}
      <Section surface id="included">
        <SectionHeading
          eyebrow="What&apos;s included"
          title="Airbnb guest support for every stage of the stay."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Check-in coordination",
              body: "Lockbox codes, access instructions and arrival questions answered from the listing brief.",
            },
            {
              label: "In-stay issue resolution",
              body: "Wi-Fi, appliance and maintenance questions triaged, with escalation to your local contact when someone needs to visit.",
            },
            {
              label: "Messages across listings",
              body: "Airbnb, Vrbo and direct-booking messages handled from one point of coverage.",
            },
            {
              label: "Post-stay replies",
              body: "Post-stay messages and, where included in your scope, review responses in your tone of voice.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-surface px-6 py-5">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">In practice.</span>{" "}
            At midnight a guest asks for the Wi-Fi password because the printed card is missing. The agent finds it in your listing guide and replies. On a Friday evening a guest says the dishwasher isn&apos;t working. The agent checks whether it&apos;s a simple operating issue and talks the guest through it, or passes it to your maintenance contact with a clear description and urgency, and tells the guest what happens next.
          </p>
        </div>
      </Section>

      {/* RESPONSE RATE + SUPERHOST */}
      <Section id="response-rate">
        <SectionHeading
          eyebrow="Response rate and Superhost"
          title="Why reply speed matters on Airbnb."
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            Airbnb&apos;s Superhost programme requires a response rate of at least 90%: replying within 24 hours to new guest messages and booking requests, measured on first replies over the past 12 months and reviewed quarterly. It also requires at least 10 stays (or 3 stays totalling 100 nights), a cancellation rate under 1% and an overall rating of 4.8 or higher. (Source:{" "}
            <Link href="https://www.airbnb.com/help/article/829" className="text-gold-dark underline underline-offset-2 hover:text-gold" rel="noopener">
              Airbnb Help Centre
            </Link>
            .)
          </p>
          <p>
            The 24-hour rule is the minimum. Guests comparing listings often book the host who answers first, and a question left overnight can become a lost booking or a weaker review.
          </p>
        </div>
        <div className="mt-6 rounded-lg border border-line bg-surface px-6 py-5 max-w-2xl">
          <p className="text-sm font-medium text-ink mb-2">Help when your Airbnb and Vrbo inbox overflows</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            Busy weekends, back-to-back turnovers and several listings at once are when replies slip. We cover the hours and listings you agree, so messages keep getting answered when you can&apos;t.
          </p>
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section surface id="who-its-for">
        <SectionHeading
          eyebrow="Who it&apos;s for"
          title="Built around your listings, house rules and access setup."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <ul className="space-y-2.5">
            {[
              "Hosts managing several Airbnb or Vrbo listings",
              "Serviced apartment operators without on-site staff",
              "Property managers with guests across scattered units",
              "Hosts who currently answer guest messages themselves, at all hours",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-line bg-paper p-5 space-y-3">
            <p className="text-sm text-ink-soft">
              No front desk and no on-site team, but guests still expect a quick reply from a real person. We work with hosts in the US, UK, Canada, Ireland, Australia and New Zealand.
            </p>
            <p className="text-sm text-ink-soft">
              Channels covered here: Airbnb, Vrbo and direct-booking messages. For Booking.com and Expedia inboxes, see{" "}
              <Link href="/services/ota-inbox-management" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                OTA inbox management
              </Link>
              ; for SMS, WhatsApp and email, see our{" "}
              <Link href="/services/guest-messaging" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                guest messaging service
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title="Set up once. Stay in control."
          description="Before coverage starts, we document your listing rules, escalation contacts, tone of voice and handling limits."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery call",
              body: "We learn your listings, systems and procedures, and where guest messages currently slip.",
            },
            {
              step: "02",
              title: "Setup and briefing",
              body: "We build a brief for each listing: access, house rules, amenities and local contacts.",
            },
            {
              step: "03",
              title: "Go live",
              body: "Coverage starts on your Airbnb, Vrbo and direct-booking messages once the briefs, access and escalation contacts are agreed.",
            },
            {
              step: "04",
              title: "Reporting and refinement",
              body: "You receive activity summaries covering response times and open items, and we adjust with you.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-surface px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
            What&apos;s set up before go-live
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "A brief for each listing",
              "Written escalation rules for urgent issues",
              "Your guest tone of voice",
              "Inbox and PMS workflows",
              "Activity summaries",
              "Quality review of guest conversations",
              "A clear line between what Guest Squad handles and what you approve",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* HANDLE / ESCALATE */}
      <Section surface id="handle-escalate">
        <SectionHeading
          eyebrow="Scope"
          title="What we handle and what comes back to you."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
              Handled from your brief
            </p>
            <ul className="space-y-2.5">
              {[
                "Check-in instructions, lockbox codes and arrival logistics",
                "Listing FAQs on house rules, amenities and local recommendations",
                "In-stay requests such as extra supplies, Wi-Fi help and appliance questions",
                "Post-stay messages and, where in scope, review responses",
                "Message monitoring across Airbnb, Vrbo and direct-booking channels",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
              Escalated to you
            </p>
            <ul className="space-y-2.5">
              {[
                "Maintenance visits, appliance failures or damage that needs someone on site",
                "Guest safety or security concerns",
                "Refund requests, disputes or Airbnb Resolution Centre cases",
                "Situations where you need to speak to the guest yourself",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">Airbnb Guest Support Scoped to Your Listings.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Coverage for Airbnb hosts is scoped around your listing count, the channels guests use and the response standards your platform requires.
            </p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "24/7 Airbnb message monitoring and replies",
                  "Check-in coordination and access assistance",
                  "In-stay issue handling and escalation",
                  "Post-stay messages (and review responses where in scope)",
                  "Vrbo and direct-booking messages on request",
                  "Activity summaries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-xs text-ink-muted">Month-to-month · 30 days&apos; notice</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-surface p-7">
              <p className="mb-3 text-sm font-semibold text-ink">What shapes your pricing:</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Number of listings",
                  "Platforms covered — Airbnb, Vrbo, direct",
                  "Message volume and coverage hours",
                  "Whether review responses are in scope",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-paper p-7">
              <p className="mb-2 text-sm font-semibold text-ink">Start With a Pilot.</p>
              <p className="mb-5 text-sm text-ink-soft">
                Tell us your property, coverage hours and what you need managed. We&apos;ll agree the scope and send a written proposal before anything begins.
              </p>
              <CoverageReviewButton variant="gold" ctaLocation="airbnb_pricing_cta" className="w-full justify-center">
                Pilot Airbnb Guest Support
              </CoverageReviewButton>
              <p className="mt-4 text-xs text-ink-muted">✓ Written proposal before onboarding · ✓ Month-to-month · ✓ No obligation to continue</p>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPLORE */}
      <Section surface id="explore">
        <SectionHeading
          eyebrow="Guides"
          title="Explore what fits your situation."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Service",
              title: "Vacation rental answering service",
              body: "Live call answering plus messages for short-term rentals.",
              href: "/services/vacation-rental-answering-service",
            },
            {
              label: "Calculator",
              title: "Missed booking revenue calculator",
              body: "Estimate what unanswered messages may be costing you.",
              href: "/resources/missed-booking-calculator",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{item.label}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold"
              >
                Read →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* MID-PAGE DARK CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Keep guest replies moving without being on call all night.</p>
            <p className="mt-1 text-sm text-paper/60">
              Book a coverage review and we will map your listings, message patterns and escalation needs.
            </p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="airbnb_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Airbnb guest services questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Next Step</p>
            <h3 className="mb-3 text-xl font-medium text-ink">
              Stop watching your Airbnb inbox overnight.
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">
              Book a coverage review. We will look at your listings, message patterns and escalation needs, and set out the coverage, scope and price in writing.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="airbnb_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/vacation-rental-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Vacation rental answering service
                </Link>
                <Link href="/services/ota-inbox-management" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  OTA inbox management
                </Link>
                <Link href="/services/guest-messaging" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Guest messaging service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Keep guest replies moving without being on call all night."
        description="Book a coverage review. We will look at your listings, message patterns and escalation needs, and set out the coverage, scope and price in writing."
      />
    </>
  );
}
