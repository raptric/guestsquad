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

const PAGE_TITLE = "Hotel Night Audit Support & Back Office Operations";

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description:
      "Hotel night audit support and back office operations: billing errors caught, PMS reconciled, OTA payouts matched and rate parity checked overnight.",
    path: "/services/back-office-operations",
  }),
  title: { absolute: PAGE_TITLE },
};

const PATH = "/services/back-office-operations";

const FAQS = [
  {
    q: "What is included in night audit support?",
    a: "The day-end close in your PMS, room and tax posting, folio and payment balancing, no-show and cancellation review, agreed overnight corrections, and a morning exception report. The exact steps follow your property's night audit procedure.",
  },
  {
    q: "Can you run the night audit remotely if we have no one on the desk overnight?",
    a: "Yes, the accounting close can be run remotely in your PMS. If guests also need answering overnight, add our after-hours front desk support so calls and messages are covered too.",
  },
  {
    q: "Can your team post corrections, or only flag them?",
    a: "Both, within the permissions you set. You decide which corrections we may post overnight — for example, adding an unposted charge or correcting a rate to the booked plan — and which go on the exception report for your approval.",
  },
  {
    q: "Which PMS systems do you work with?",
    a: "We work inside your current PMS rather than asking you to change software. Access and procedures are confirmed during setup.",
  },
  {
    q: "What gets reconciled against what?",
    a: "OTA payout reports and commission statements from Booking.com, Expedia and Airbnb are matched against your PMS bookings and folios and your processor settlements, to flag missing, short or duplicate payments.",
  },
  {
    q: "What does a rate parity check involve?",
    a: "We compare your public rates on the OTAs with your direct booking rate for the dates and room types you choose, and report differences to your revenue manager. We don't change rates unless you've delegated that.",
  },
  {
    q: "How much revenue do OTA payout errors cost a hotel?",
    a: "It depends on your OTA mix, booking volume and how closely payouts are checked today. The first weeks of reconciliation show your own figure: each exception report lists the amounts involved.",
  },
  {
    q: "Do you replace our accountant or controller?",
    a: "No. We handle the daily close and reconciliation work and report into your existing finance team or controller.",
  },
  {
    q: "Do you process payments?",
    a: "No. We reconcile records and post agreed corrections. Payments, refunds and anything that needs a financial decision stay with your team.",
  },
  {
    q: "How are exceptions reported?",
    a: "By email on the schedule you choose, listing folios, booking references and amounts so each item can be checked quickly.",
  },
];

export default function BackOfficeOperationsPage() {
  return (
    <>
      <ServicePageViewTracker serviceName="back-office-operations" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "Hotel Night Audit Support and Back Office Operations",
            serviceType: "Hotel Back Office Operations",
            description:
              "Hotel night audit support and back office operations: billing errors caught, PMS reconciled, OTA payouts matched and rate parity checked overnight.",
            url: `${SITE.url}${PATH}`,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: "Worldwide",
            offers: {
              "@type": "Offer",
              description: "Quoted to scope: price depends on number of properties, nights covered, OTA volume and tasks included.",
              availability: "https://schema.org/InStock",
            },
            audience: [
              { "@type": "Audience", audienceType: "Independent Hotel" },
              { "@type": "Audience", audienceType: "Hotel Group" },
              { "@type": "Audience", audienceType: "Boutique Hotel" },
            ],
            subjectOf: [
              { "@id": "https://guestsquad.com/resources/after-hours-hotel-support-checklist#article" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: PAGE_TITLE,
            description:
              "Hotel night audit support and back office operations: billing errors caught, PMS reconciled, OTA payouts matched and rate parity checked overnight.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Night Audit & Back Office", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Night Audit & Back Office", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Back Office Operations
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Hotel Night Audit Support and Back Office Operations
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-snug text-ink">
            The back-office side of Guest Support Operations: a remote team closes your hotel&apos;s day, corrects billing errors overnight and reconciles what you were paid against what you&apos;re owed.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Guest Squad provides hotel night audit support and back office operations for independent hotels and hotel groups. Overnight, our team runs your day-end close in your PMS, catches billing errors and posts the agreed corrections before guests check out. During the day, we reconcile OTA payouts, research billing queries and check that your rates match across channels. Exceptions go to your finance contact in a report you can act on. Both are quoted to your properties, nights and booking volume.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["PMS", "OTA extranets", "Channel manager", "Payment processor portals"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="lg" ctaLocation="backoffice_hero">
              Book a Back Office Review
            </CoverageReviewButton>
          </div>
        </div>
      </section>

      {/* WHAT IS A HOTEL NIGHT AUDIT */}
      <Section id="what-is-night-audit">
        <SectionHeading
          eyebrow="Night audit explained"
          title="What is a hotel night audit?"
        />
        <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            A hotel night audit is the daily accounting close that ends the hotel&apos;s business day. The night auditor posts room charges and taxes to guest folios, checks that payments and charges balance, reviews no-shows and cancellations, rolls the PMS to the next business date, and produces the reports the morning team and management rely on. It usually runs between midnight and 6am, which is where the name comes from.
          </p>
          <p>
            In many independent hotels, the person on the desk overnight is also the night auditor. When that shift is short-staffed, rushed or covered by someone without accounting experience, errors go unposted and discrepancies roll into the next day. Night audit support moves the accounting part of that shift to a trained remote team.
          </p>
        </div>
      </Section>

      {/* NIGHT AUDIT SUPPORT */}
      <Section surface id="night-audit">
        <SectionHeading
          eyebrow="Night audit support"
          title="Errors caught before checkout, every night."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Day-end close in your PMS",
              body: "Room and tax posting, the date roll and the standard night audit reports, run in each property's local overnight window, 7 nights a week.",
            },
            {
              label: "Billing errors caught overnight",
              body: "Folios checked for missing charges, wrong rates, duplicate postings, unapplied deposits and incorrect taxes, so problems are found before the guest sees the bill.",
            },
            {
              label: "Corrections posted within your rules",
              body: "Agreed corrections are posted overnight within the permissions you set. Anything outside those permissions goes on the exception report for your team.",
            },
            {
              label: "PMS reconciliation",
              body: "Room status, in-house guests, no-shows and cancellations reconciled against the PMS, with cash and card totals balanced against the day's postings.",
            },
            {
              label: "Morning exception report",
              body: "A short report for your morning team and finance contact: what was corrected, what needs a decision, and which folios to check.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-surface px-6 py-5 max-w-2xl">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">Example.</span>{" "}
            During the overnight run, a departing guest&apos;s folio shows a minibar charge that was never posted. It&apos;s added under your posting rules, and the folio is correct before checkout instead of becoming a dispute after the guest has left.
          </p>
        </div>
      </Section>

      {/* BACK OFFICE OPERATIONS */}
      <Section id="back-office">
        <SectionHeading
          eyebrow="Back office operations"
          title="What you were paid against what you&apos;re owed."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "OTA reconciliation",
              body: "Booking.com, Expedia and Airbnb payouts and commission statements matched against your PMS bookings and processor settlements, with missing, short or duplicate payments flagged.",
            },
            {
              label: "Billing queries",
              body: "Questions about charges from guests after checkout, from OTAs and from corporate accounts, researched against the folio and booking. Answers prepared for your approval, as agreed.",
            },
            {
              label: "Rate parity checks",
              body: "Your public rates on the OTAs compared with your direct booking rate on the dates and room types you choose. Differences go to your revenue manager.",
            },
            {
              label: "Reporting to finance",
              body: "Exception reports on the schedule your controller or owner uses, with booking references, folio numbers and amounts, so each item can be acted on.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-surface px-6 py-5 max-w-2xl">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">Example.</span>{" "}
            An Expedia payout for a group booking arrives short of the expected amount. Daily reconciliation catches it, records the booking reference and payout detail, and flags it to your finance contact the next morning, so it doesn&apos;t sit unnoticed until month-end.
          </p>
        </div>
      </Section>

      {/* HANDLE / ESCALATE */}
      <Section surface id="handle-escalate">
        <SectionHeading
          eyebrow="Scope"
          title="What we handle and what goes to your controller."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
              Handled within your rules
            </p>
            <ul className="space-y-2.5">
              {[
                "Day-end close, folio posting and balancing",
                "Agreed billing corrections and incidental charge posting",
                "OTA payout and commission matching against PMS records",
                "Processor settlement checks and variance flags",
                "Rate parity checks and difference reports",
                "Exception reports to your finance team",
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
                "Payout discrepancies that need direct contact with an OTA",
                "Refunds, write-offs and billing disputes that need management approval",
                "PMS errors that affect many folios",
                "Rate changes, unless you have delegated them",
                "Anything that needs your controller or owner to act",
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
          We don&apos;t replace your accountant or controller. We do the daily reconciliation work that is easy to skip, and report into the finance team you already have.
        </p>
      </Section>

      {/* WHO IT SUITS */}
      <Section id="who-its-for">
        <SectionHeading
          eyebrow="Who it suits"
          title="One person doing too many jobs overnight."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <ul className="space-y-2.5">
            {[
              "Independent hotels where the overnight desk clerk also runs the night audit",
              "Hotels where reconciliation falls to one person who is already stretched",
              "Hotel groups reconciling several OTAs across several PMS instances",
              "Owners who suspect revenue is slipping through but don't have time to check",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-line bg-paper p-5">
            <p className="text-sm text-ink-soft">
              For hotel groups that also want reservations covered, see our{" "}
              <Link href="/services/central-reservations" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                hotel reservation call center
              </Link>
              . We work with hotels worldwide.
            </p>
          </div>
        </div>
      </Section>

      {/* PAIR WITH AFTER-HOURS */}
      <Section surface id="with-after-hours">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Complete overnight coverage"
              title="Pair night audit with overnight front desk cover."
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Night audit is the accounting side of the overnight shift. The guest side — late arrivals, lockouts, calls at 2am — is covered by our{" "}
              <Link href="/services/after-hours-support" className="text-gold-dark underline underline-offset-2 hover:text-gold">
                after-hours hotel front desk support
              </Link>
              . Together they cover the whole overnight shift remotely: guests are answered, and the day is closed and checked before your morning team arrives.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold text-gold-dark">G</span>
                <div>
                  <p className="text-sm font-medium text-ink">Guest side</p>
                  <p className="mt-0.5 text-sm text-ink-soft">Late arrivals, calls, lockouts, messages — answered live overnight.</p>
                  <Link href="/services/after-hours-support" className="mt-1 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold">After-hours front desk support →</Link>
                </div>
              </div>
              <div className="border-t border-line pt-4 flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold text-gold-dark">A</span>
                <div>
                  <p className="text-sm font-medium text-ink">Accounting side</p>
                  <p className="mt-0.5 text-sm text-ink-soft">Day-end close, billing corrections, PMS reconciliation — done before morning.</p>
                  <p className="mt-1 text-xs text-ink-muted">Night audit support (this page)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* HOW SETUP WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title="Set up around your PMS and OTA extranets."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Scoping call",
              body: "We agree which tasks you want covered (night audit, reconciliation, billing queries, rate checks), how many properties and nights, and who receives the reports.",
            },
            {
              step: "02",
              title: "Access and permissions",
              body: "You create named user logins for your PMS, OTA extranets and processor portals with only the rights the agreed tasks need, including what we may post or correct.",
            },
            {
              step: "03",
              title: "Procedures and thresholds",
              body: "We document your night audit steps, posting and correction rules, exception thresholds and report format.",
            },
            {
              step: "04",
              title: "Go live",
              body: "Work starts once access, procedures and escalation contacts are agreed. We review the first reports with you and adjust.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-line bg-surface px-6 py-4 max-w-2xl">
          <p className="text-sm font-medium text-ink mb-1">Data access and security</p>
          <p className="text-sm text-ink-soft">
            We use named logins with the minimum permissions the work needs, never shared passwords. We don&apos;t process payments or move money. You can see and remove our access in your own systems at any time.
          </p>
        </div>
      </Section>

      {/* PRICING */}
      <Section surface id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">Back Office Support Scoped to Your Operation.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">Night audit support and back office operations are built around your property count, PMS and the tasks you want covered. Every engagement starts with a written scope before anything begins.</p>
            <div className="my-5 border-t border-line" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">What&apos;s included</p>
            <ul className="flex flex-col gap-2">
              {[
                "Night audit close and PMS reconciliation",
                "Folio, payment and no-show review",
                "OTA payout matching and billing error checks",
                "Rate parity monitoring",
                "Morning exception report",
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
                  "Number of properties and PMS instances",
                  "Nights covered each week",
                  "OTA booking volume",
                  "Back office tasks in scope",
                  "Reporting frequency",
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
              <p className="mb-5 text-sm text-ink-soft">Tell us your PMS, properties and what you need covered overnight. We&apos;ll agree the scope and send a written proposal before anything begins.</p>
              <CoverageReviewButton variant="gold" ctaLocation="backoffice_pricing_cta" className="w-full justify-center">
                Book a Back Office Review
              </CoverageReviewButton>
              <p className="mt-4 text-xs text-ink-muted">✓ Written proposal before onboarding · ✓ Month-to-month · ✓ No obligation to continue</p>
            </div>
          </div>
        </div>
      </Section>

      {/* MID-PAGE DARK CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Catch billing errors and payout gaps before month-end.</p>
            <p className="mt-1 text-sm text-paper/60">
              Tell us your PMS, properties and OTA mix. We&apos;ll set out scope and a quote in writing.
            </p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="backoffice_mid_cta">
            Book a Back Office Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Night audit and back office questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          <div className="h-fit rounded-lg border border-line bg-paper p-7 lg:sticky lg:top-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">Next Step</p>
            <h3 className="mb-3 text-xl font-medium text-ink">
              Catch billing errors before month-end.
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">
              Tell us your PMS, properties and OTA mix, and we&apos;ll set out the scope, access needed and a quote in writing.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="backoffice_faq_cta" className="w-full justify-center">
              Book a Back Office Review
            </CoverageReviewButton>
            <p className="mt-4 text-xs text-ink-muted">
              Useful for the conversation: your PMS, number of properties, monthly OTA booking volume and who currently runs your night audit.
            </p>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/after-hours-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  After-hours hotel front desk support
                </Link>
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel answering service
                </Link>
                <Link href="/services/central-reservations" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Central Reservations Desk
                </Link>
                <Link href="/services/reservation-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">
                  Hotel reservation support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GUIDES */}
      <Section surface id="guides">
        <SectionHeading
          eyebrow="Guides"
          title="More on after-hours coverage."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Checklist",
              title: "After-hours front desk checklist",
              body: "Map your overnight gaps before choosing coverage.",
              href: "/resources/after-hours-hotel-support-checklist",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">{item.label}</p>
              <Link
                href={item.href}
                className="mt-2 block text-sm font-medium leading-snug text-ink hover:text-gold-dark"
              >
                {item.title}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Catch billing errors and payout gaps before month-end."
        description="Tell us your PMS, properties and OTA mix. We will set out the scope, access needed and a quote in writing."
      />
    </>
  );
}
