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

const PAGE_TITLE = "OTA Inbox Management for Hotels and Rentals | Guest Squad";

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description:
      "OTA inbox management for hotels and vacation rentals: Booking.com, Expedia, Airbnb and Vrbo guest messages answered from your property brief and policies.",
    path: "/services/ota-inbox-management",
  }),
  title: { absolute: PAGE_TITLE },
};

const PATH = "/services/ota-inbox-management";

const FAQS = [
  {
    q: "Which OTA platforms do you cover?",
    a: "Booking.com, Expedia, Airbnb and Vrbo as standard. Hotels.com and other platforms can be added depending on your setup. Platforms, permitted actions and access method are confirmed before coverage starts.",
  },
  {
    q: "Can you answer pre-booking questions, or only post-booking messages?",
    a: "Both. Pre-booking questions about rates, rooms and policies are answered from your brief, and post-booking, arrival and in-stay threads are handled too.",
  },
  {
    q: "How is this different from an OTA's auto-reply tools?",
    a: "Auto-replies send fixed templates. OTA inbox management handles the conversation itself: rate questions, change requests, special arrangements and anything that needs property knowledge. The two work together.",
  },
  {
    q: "Do you reply to guest reviews?",
    a: "Review responses can be included in your scope. Tell us which platforms you want covered during the coverage review.",
  },
  {
    q: "Do you cover WhatsApp, SMS or email too?",
    a: "Those are covered by guest messaging, which can run alongside OTA inbox management in the same arrangement.",
  },
];

export default function OtaInboxManagementPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="ota-inbox-management" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "OTA Inbox Management",
            serviceType: "OTA Inbox Management Service",
            description:
              "OTA inbox management for hotels and vacation rentals: Booking.com, Expedia, Airbnb and Vrbo guest messages answered from your property brief and policies.",
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
              { "@type": "Audience", audienceType: "Independent Hotel" },
              { "@type": "Audience", audienceType: "Hotel Group" },
              { "@type": "Audience", audienceType: "Vacation Rental Operator" },
              { "@type": "Audience", audienceType: "Airbnb Host" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: PAGE_TITLE,
            description:
              "OTA inbox management for hotels and vacation rentals: Booking.com, Expedia, Airbnb and Vrbo guest messages answered from your property brief and policies.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "OTA Inbox Management", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "OTA Inbox Management", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Capability
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            OTA Inbox Management for Hotels and Vacation Rentals
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-snug text-ink">
            Guest Support Operations for your OTA inboxes: trained hospitality agents answer Booking.com, Expedia, Airbnb and Vrbo threads from your property brief, and escalate what your team must decide.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            OTA inbox management means a trained team reads and answers the guest messages that arrive in your Booking.com, Expedia, Airbnb and Vrbo inboxes, using your rates, policies and escalation rules. Guest Squad covers pre-booking questions, modification requests and arrival threads during the hours you agree, including overnight, and hands threads over at shift end. It is included in the{" "}
            <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              hotel answering service
            </Link>{" "}
            and the{" "}
            <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              vacation rental answering service
            </Link>
            , and can be scoped into multi-property plans.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Booking.com", "Expedia", "Airbnb", "Vrbo", "Hotels.com"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {p}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-line px-3 py-1 text-xs text-ink-muted">
              + others on request
            </span>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="lg" ctaLocation="ota_inbox_hero">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <Section id="scope">
        <SectionHeading
          eyebrow="Scope"
          title="What OTA inbox management covers (and what it doesn&apos;t)."
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            OTA inbox management covers private guest message threads on the platforms you agree: pre-booking enquiries, post-booking questions, modification requests and arrival coordination. Review responses can be added to your scope if you want them.
          </p>
          <p>
            It does not cover SMS, WhatsApp, email or direct website enquiries. Those channels fall under{" "}
            <Link href="/services/guest-messaging" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              hotel guest messaging
            </Link>
            , which can run alongside OTA inbox management in the same arrangement.
          </p>
        </div>
      </Section>

      {/* HANDLE / ESCALATE */}
      <Section surface id="handle-escalate">
        <SectionHeading
          eyebrow="What we answer and escalate"
          title="Hotel OTA messaging: what we answer and what we escalate."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">We answer</p>
            <ul className="space-y-2.5">
              {[
                "Pre-booking questions about availability, rates and policies",
                "Post-booking questions about check-in, parking and special requests",
                "Date changes, cancellations and modifications within your agreed policy",
                "Arrival coordination and in-stay threads",
                "Review responses in your tone of voice, where included in your scope",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">We escalate</p>
            <ul className="space-y-2.5">
              {[
                "Cancellation disputes, refund requests or chargebacks",
                "Compensation offers or exceptions that need your approval",
                "OTA policy or listing issues",
                "Availability conflicts or PMS sync errors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Pre-booking questions are often the most valuable messages to answer quickly, because a guest who waits may book somewhere else. Post-booking threads matter too: unanswered arrival questions create friction at check-in.
        </p>
      </Section>

      {/* BY PROPERTY TYPE */}
      <Section id="by-property-type">
        <SectionHeading
          eyebrow="By property type"
          title="Inbox management services by property type."
          description="Platforms, coverage hours and permitted actions are confirmed for each arrangement."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              eyebrow: "Independent hotels",
              body: "OTA replies sit alongside phone coverage, so booking questions on Booking.com or Expedia get the same answers as your front-desk calls. For one hotel, this is part of our hotel answering service.",
              href: "/services/hotel-answering-service",
              linkLabel: "Hotel answering service",
            },
            {
              eyebrow: "Hotel groups",
              body: "Each property's inbox is handled to its own rates, policies and escalation contacts, so a guest messaging one hotel gets that hotel's answers. See our hotel reservation call center for multi-property coverage.",
              href: "/services/central-reservations",
              linkLabel: "Central Reservations Desk",
            },
            {
              eyebrow: "Vacation rental operators",
              body: "Airbnb and Vrbo threads are handled listing by listing, using each property's house rules, arrival instructions and local contacts. If you host mainly on Airbnb and care about response rate and Superhost status, see our Airbnb guest services.",
              href: "/services/vacation-rental-answering-service",
              linkLabel: "Vacation rental answering service",
            },
          ].map((item) => (
            <div key={item.eyebrow} className="flex flex-col rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{item.eyebrow}</p>
              <p className="mt-2 grow text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold"
              >
                {item.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* RESPONSE TIMES */}
      <Section surface id="response-times">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Response times"
              title="Response times and your OTA reply score."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Each platform sets its own expectations for how quickly properties reply, and guests notice when a question sits unanswered overnight. We agree a response window for each platform during setup and cover the hours your team can&apos;t, including evenings, nights and weekends.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Automated replies help with fixed answers such as directions or check-in times, but they can&apos;t handle a rate question, a change request or anything that needs judgement. OTA inbox management handles the actual conversation, and works alongside your auto-replies.
            </p>
          </div>

          {/* Handover sample */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                Shift handover: OTA inboxes
              </p>
              <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-ink-muted">Sample</span>
            </div>
            <div className="space-y-2" id="handover">
              {[
                { platform: "Booking.com", thread: "Pre-booking: twin room rates", outcome: "Replied", escalated: false },
                { platform: "Airbnb", thread: "In-stay: Wi-Fi access", outcome: "Replied", escalated: false },
                { platform: "Expedia", thread: "Date change request", outcome: "Replied, within policy", escalated: false },
                { platform: "Vrbo", thread: "Cancellation dispute", outcome: "Escalated to manager", escalated: true },
              ].map((row) => (
                <div key={row.thread} className="flex items-start justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-ink">{row.platform}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{row.thread}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${row.escalated ? "bg-amber-50 text-amber-700" : "bg-green-50 text-green-700"}`}>
                    {row.outcome}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-muted">Thread logs and escalation notes available on request.</p>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">OTA Inbox Coverage Priced to Your Platform Mix.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">The platforms you use, your thread volume and the coverage hours you need all shape what your plan covers. OTA inbox management is included within your agreed service scope and workload allowance.</p>
            <div className="my-5 border-t border-line" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">What&apos;s included</p>
            <ul className="flex flex-col gap-2">
              {[
                "Booking.com, Expedia, Airbnb and Vrbo inbox replies",
                "Pre-booking enquiries and rate questions",
                "Modification and cancellation thread handling",
                "Escalation and handover notes",
                "Shift-end thread summaries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="mt-0.5 text-gold-dark">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-ink-muted">Month-to-month · Written proposal before onboarding · No lock-in</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-surface p-7">
              <p className="mb-3 text-sm font-semibold text-ink">What shapes your pricing:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "OTA platforms in scope",
                  "Monthly thread volume and response time requirements",
                  "Coverage hours (after-hours, 24/7, overflow)",
                  "Number of properties or listings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-0.5 shrink-0 text-gold-dark">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-paper p-7">
              <p className="mb-2 text-sm font-semibold text-ink">Start With a Pilot.</p>
              <p className="mb-5 text-sm text-ink-soft">Tell us your platforms, coverage hours and what you need managed. We&apos;ll agree the scope and send a written proposal before anything begins.</p>
              <CoverageReviewButton variant="gold" ctaLocation="ota_inbox_pricing_cta" className="w-full justify-center">
                Explore a Pilot
              </CoverageReviewButton>
              <p className="mt-4 text-xs text-ink-muted">✓ Written proposal before onboarding · ✓ Month-to-month · ✓ No obligation to continue</p>
            </div>
          </div>
        </div>
      </Section>

      {/* GUIDES */}
      <Section surface id="guides">
        <SectionHeading
          eyebrow="Guides"
          title="Guides for Booking.com and Expedia inboxes."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Platform guide",
              title: "Booking.com and Expedia message checklist",
              body: "How Booking.com structures property-guest messaging and what the platform expects from property teams.",
              href: "/resources/booking-com-message-support",
            },
            {
              label: "Template",
              title: "Hotel guest messaging SOP template",
              body: "A template for documenting channels, response standards, escalation paths and handovers.",
              href: "/resources/hotel-guest-messaging-sop-template",
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
            <p className="text-base font-medium text-paper">Find the right coverage for your OTA inboxes.</p>
            <p className="mt-1 text-sm text-paper/60">
              Tell us which properties, platforms and message volume you manage.
            </p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="ota_inbox_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">OTA inbox management questions.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Next Step</p>
            <h3 className="mb-3 text-xl font-medium text-ink">
              Find the right coverage for your OTA inboxes.
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">
              Tell us which properties, platforms and message volume you manage. We&apos;ll recommend the right arrangement and confirm the access and permissions needed.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="ota_inbox_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel answering service
                </Link>
                <Link href="/services/vacation-rental-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Vacation rental answering service
                </Link>
                <Link href="/services/guest-messaging" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel guest messaging
                </Link>
                <Link href="/services/airbnb-guest-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Airbnb guest services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Find the right coverage for your OTA inboxes."
        description="Tell us which properties, platforms and message volume you manage. We will recommend the right arrangement and confirm the access and permissions needed."
      />
    </>
  );
}
