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

const PAGE_TITLE = "After-Hours Hotel Front Desk Support | Live Overnight Calls";

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description:
      "After-hours hotel front desk support: hotel after hours calls, late check-ins and guest messages answered live, emergencies escalated. Coverage scoped to your overnight hours and call volume.",
    path: "/services/after-hours-support",
  }),
  title: { absolute: PAGE_TITLE },
};

const PATH = "/services/after-hours-support";

const FAQS = [
  {
    q: "How much does after-hours hotel support cost?",
    a: "Your price depends on your overnight hours, call volume, channels covered and the escalation responsibilities you want managed. Everything is set out in a written proposal before coverage begins.",
  },
  {
    q: "Is this cheaper than hiring overnight staff?",
    a: "For most hotels with moderate overnight activity, yes. A night position carries wages, employer costs, cover for absences and turnover, while after-hours support is priced to your coverage hours and volume. Compare your own overnight payroll cost with a quote for your property.",
  },
  {
    q: "Can hotels get 24/7 coverage without hiring overnight staff?",
    a: "Yes. Guest Squad can cover your phones and messages around the clock using your property rules and escalation contacts, with urgent situations routed to your on-call person. 24/7 coverage is quoted to your volume. Coverage starts once the brief, access and escalation contacts are agreed.",
  },
  {
    q: "What hours do you cover?",
    a: "Whatever gap you need filled: overnight only, weekends only, or 24/7. Most hotels start with overnight and weekend gaps, then adjust.",
  },
  {
    q: "Can Guest Squad cover only nights and weekends?",
    a: "Yes. Coverage hours are agreed during setup and can be changed as your needs change.",
  },
  {
    q: "What counts as an emergency, and how is it handled?",
    a: "Anything involving guest safety, security or property damage goes to your on-call contact, following the escalation protocol agreed during setup.",
  },
  {
    q: "Can you handle a lockout or late check-in at 2am?",
    a: "Yes. Late check-ins, early arrivals and access problems are among the most common overnight requests. They are handled using your property's procedures, and anything that needs someone on site goes to your on-call contact.",
  },
  {
    q: "How does Guest Squad decide what gets escalated overnight?",
    a: "You set the rules before go-live: what can be handled directly, what should be logged for morning review, and what should trigger an immediate call to your on-call contact.",
  },
  {
    q: "Can after-hours support reduce front desk burnout?",
    a: "Yes. Many teams use it so day staff are no longer expected to take overnight calls. A clear split of hours takes pressure off your in-house team.",
  },
  {
    q: "Do we still need a night auditor?",
    a: "We cover guest-facing calls and messages. The financial night audit is a separate function that stays with your team or accounting provider. If you want the accounting close covered too, see our hotel night audit support and back office operations page.",
  },
  {
    q: "Do you cover vacation rentals after hours?",
    a: "Yes, through our vacation rental answering service, which is built around listings, access codes and local contacts.",
  },
];

export default function AfterHoursSupportPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="after-hours-support" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "After-Hours Hotel Front Desk Support",
            serviceType: "After-Hours Hotel Answering Service",
            description:
              "After-hours hotel front desk support: overnight and weekend calls and messages answered live, emergencies escalated to your on-call manager. Coverage scoped to your overnight hours and volume.",
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
            offers: {
              "@type": "Offer",
              description: "Coverage scoped to your overnight hours, call volume and channels. Written proposal provided before onboarding.",
              availability: "https://schema.org/InStock",
            },
            audience: [
              { "@type": "Audience", audienceType: "Independent Hotel" },
              { "@type": "Audience", audienceType: "Boutique Hotel" },
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
              "After-hours hotel front desk support: hotel after hours calls, late check-ins and guest messages answered live, emergencies escalated. Coverage scoped to your overnight hours and call volume.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "After-Hours Hotel Support", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "After-Hours Hotel Support", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            After-Hours Hotel Support
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            After-Hours Hotel Front Desk Support for Calls and Guest Messages
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-snug text-ink">
            Guest Support Operations for independent hotels: overnight and weekend calls and messages answered live, with emergencies escalated to your on-call manager.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            After-hours hotel front desk support gives your hotel a trained person on guest calls and messages after your desk closes. We answer overnight and weekend calls, late check-in and access questions, and reservation enquiries. Emergencies go to your on-call manager. It works like a 24-hour front desk without a night shift on payroll. After-hours coverage is part of our{" "}
            <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              hotel answering service
            </Link>
            . Coverage is scoped to your overnight hours and call volume, with a written proposal before anything begins.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="lg" ctaLocation="afterhours_hero">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <Section id="what-it-is">
        <SectionHeading
          eyebrow="What it is"
          title="After-hours hotel front desk support explained."
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            After-hours hotel front desk support means a trained person covers your guest calls and messages through the night and at weekends, without you hiring a full overnight shift. Late check-ins, access questions, noise complaints and routine overnight enquiries are handled using your procedures. Situations involving guest safety, security or property damage go to your designated on-call contact, following the protocol you set during setup.
          </p>
          <p>
            Many independent hotels and boutique properties run the front desk until 10 or 11pm, then have little or no cover overnight. Hotel after hours calls still come in: late arrivals, guests who can&apos;t get in, and people trying to book for tomorrow. Our{" "}
            <Link href="/resources/after-hours-hotel-support-checklist" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              after-hours coverage checklist
            </Link>{" "}
            helps you map those gaps before you choose a coverage level, and the{" "}
            <Link href="/resources/missed-booking-calculator" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              hotel missed call revenue calculator
            </Link>{" "}
            estimates what unanswered calls may be costing you.
          </p>
          <p>
            Running short-term rentals rather than a hotel? See our{" "}
            <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">
              vacation rental answering service
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section surface id="included">
        <SectionHeading
          eyebrow="What&apos;s included"
          title="Overnight calls, weekends and holidays, emergency escalation."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Overnight call coverage",
              body: "Reservation, guest and general enquiry calls answered through the night.",
            },
            {
              label: "Weekend and holiday coverage",
              body: "Cover on the days your team is short-staffed or off.",
            },
            {
              label: "Emergency escalation",
              body: "Urgent situations routed to your on-call contact, using a protocol agreed in advance.",
            },
            {
              label: "Late checkout and early-arrival queries",
              body: "Routine after-hours questions handled within your policies, without waking your team.",
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
            A guest on a late flight calls at 1am for their room access instructions. The agent gives the check-in details from your property guide, and nobody on your team is woken. At 3am a guest reports noise from the next room. The agent logs the complaint, contacts your on-call person under your escalation protocol, and keeps the guest updated.
          </p>
        </div>
      </Section>

      {/* HANDLE / ESCALATE */}
      <Section id="handle-escalate">
        <SectionHeading
          eyebrow="Scope"
          title="What we handle overnight and what we escalate."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
              Handled using your procedures
            </p>
            <ul className="space-y-2.5">
              {[
                "Late check-in instructions and access questions",
                "Early arrival and late checkout requests within your set policy",
                "Parking, directions and local questions",
                "General overnight calls and messages that need no on-site action",
                "Routine noise or minor disturbance follow-ups, per your protocol",
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
              Escalated to your team
            </p>
            <ul className="space-y-2.5">
              {[
                "Guest safety or medical emergencies",
                "Security incidents or suspected unauthorised access",
                "Property damage that needs someone on site",
                "Complaints or compensation requests that can't be settled overnight",
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
          You decide where the line sits. Anything you&apos;d rather review in the morning is logged for the morning handover.
        </p>
      </Section>

      {/* 24-HOUR FRONT DESK */}
      <Section surface id="24-hour-front-desk">
        <SectionHeading
          eyebrow="Who this suits"
          title="24-hour front desk coverage without a night shift."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <ul className="space-y-2.5">
            {[
              "Hotels without a 24-hour front desk",
              "Hotels relying on a single overnight staff member",
              "Boutique properties and serviced apartments with limited on-site hours",
              "Independent hotels that want overnight cover without adding a permanent night position",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-line bg-paper p-5">
            <p className="text-sm text-ink-soft">
              Most hotels start with overnight and weekend gaps. If you want round-the-clock cover, 24/7 coverage is available and quoted to your call volume and handling requirements.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Hotel channels we can cover, as agreed in setup: reservation and guest calls, Booking.com and Expedia messages, SMS, WhatsApp, email and guest app messages.
            </p>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title="Set up once, stay in control."
          description="Before coverage starts, we document your property rules, escalation contacts, tone of voice, channels and handling limits."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery call",
              body: "We learn your property, systems and procedures, and where guests currently go unanswered.",
            },
            {
              step: "02",
              title: "Setup and briefing",
              body: "Agents are briefed on your PMS, rates, policies and tone before they handle a guest.",
            },
            {
              step: "03",
              title: "Go live",
              body: "Coverage starts on the channels you choose once the brief, access and escalation contacts are agreed.",
            },
            {
              step: "04",
              title: "Reporting and refinement",
              body: "You receive activity summaries covering volume, outcomes and escalations, and we adjust the setup with you.",
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
              "A property-specific brief",
              "Written escalation rules for urgent issues",
              "Your guest tone of voice",
              "OTA, PMS and inbox workflows",
              "Activity summaries and morning handover notes",
              "Quality review of guest interactions",
              "A clear line between what Guest Squad handles and what your team approves",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PRICING */}
      <Section surface id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">After-Hours Coverage Scoped to Your Overnight Needs.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Every hotel&apos;s overnight window is different. Your plan is scoped around the hours your desk is closed, your expected call volume and the escalation responsibilities you want managed.
            </p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Overnight and weekend call answering",
                  "Guest messaging and OTA inbox support",
                  "Emergency escalation to your on-call contact",
                  "Morning handover notes",
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
                  "Coverage hours — overnight, weekends or 24/7",
                  "Channels covered — phone, OTA, messaging",
                  "Your overnight call and message volume",
                  "Tasks included in the agreed scope",
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
              <CoverageReviewButton variant="gold" ctaLocation="afterhours_pricing_cta" className="w-full justify-center">
                Pilot After-Hours Coverage
              </CoverageReviewButton>
              <p className="mt-4 text-xs text-ink-muted">✓ Written proposal before onboarding · ✓ Month-to-month · ✓ No obligation to continue</p>
            </div>
          </div>
        </div>
      </Section>

      {/* GUIDES */}
      <Section id="guides">
        <SectionHeading
          eyebrow="Guides"
          title="More on after-hours coverage."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Checklist",
              title: "After-hours coverage checklist",
              body: "Map your overnight gaps before choosing coverage.",
              href: "/resources/after-hours-hotel-support-checklist",
            },
            {
              label: "Insight",
              title: "Why hotels still miss bookings after hours",
              body: "The overnight gap and what it costs in unanswered calls.",
              href: "/resources/insights/why-hotels-miss-bookings-after-hours",
            },
            {
              label: "Insight",
              title: "The revenue impact of unanswered reservation calls",
              body: "Estimating what missed calls cost your property.",
              href: "/resources/insights/unanswered-reservation-calls-revenue",
            },
            {
              label: "Comparison",
              title: "AI hotel answering service vs live answering",
              body: "Where AI and human answering each fit for hotels.",
              href: "/resources/hotel-answering-service-vs-ai-voice",
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
            <p className="text-base font-medium text-paper">Give guests an answer after your front desk closes.</p>
            <p className="mt-1 text-sm text-paper/60">
              Book a coverage review and we will look at your overnight calls, messages and escalation needs.
            </p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="afterhours_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">After-hours support questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Give guests an answer overnight.
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">
              Book a coverage review. We will look at your overnight calls, messages and escalation needs, and set out the coverage, scope and price in writing.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="afterhours_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel answering service
                </Link>
                <Link href="/services/reservation-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel reservation support
                </Link>
                <Link href="/services/guest-messaging" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel guest messaging
                </Link>
                <Link href="/services/vacation-rental-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Vacation rental answering service
                </Link>
                <Link href="/services/back-office-operations" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel night audit support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Ready to cover your overnight gap?"
        description="Book a coverage review and we will look at your overnight calls, messages and escalation needs, and set out the coverage, scope and price in writing."
      />
    </>
  );
}
