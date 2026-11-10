import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CoverageTypesBlock } from "@/components/site/coverage-types-block";
import { SharedCapabilitiesBlock } from "@/components/site/shared-capabilities-block";
import { serviceSchema, breadcrumbSchema, faqSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";
import { INSIGHTS } from "@/lib/insights-content";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { hotelAnsweringServiceData as d } from "@/lib/service-content";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service | 24/7 Live Call Coverage",
  description: d.description,
  path: "/services/hotel-answering-service",
});

const PATH = "/services/hotel-answering-service";

const WORKFLOWS = [
  {
    label: "Front-Desk Overflow",
    trigger: "Reception is busy or the line goes unanswered",
    does: "Answers with your hotel greeting, handles the call from the property brief — room questions, policies, availability — and takes a permitted action or routes the call per your instructions.",
    boundary: "Requires a decision from reception: transferred or message recorded with full context.",
  },
  {
    label: "Room & Stay Inquiries",
    trigger: "Caller asks about room types, rates, amenities, check-in times, parking or facilities",
    does: "Answers from the approved rate and property information. Quotes what is confirmed in the brief. Does not make exceptions or offer unapproved discounts.",
    boundary: "Out-of-brief questions routed to the front desk contact with the caller&apos;s details.",
  },
  {
    label: "Late-Arrival Assistance",
    trigger: "Guest calls to confirm or inform of a late arrival",
    does: "Confirms the reservation, communicates the agreed check-in procedure, and logs the expected arrival time for the morning team.",
    boundary: "No on-site contact reachable: message held and flagged clearly in the handover.",
  },
  {
    label: "Housekeeping Request Coordination",
    trigger: "In-stay guest requests extra towels, a room clean, additional items",
    does: "Logs the request, contacts housekeeping via the agreed method, and confirms next steps to the guest.",
    boundary: "No acknowledgment from housekeeping: escalates to the duty manager per your procedures.",
  },
  {
    label: "Hotel Maintenance Escalation",
    trigger: "Guest reports broken AC, plumbing, lighting or door issue",
    does: "Logs the issue with full detail, contacts the designated maintenance contact, and updates the guest with the expected response.",
    boundary: "Safety or urgent concern: immediate escalation per your emergency procedures.",
  },
  {
    label: "Reception Shift Handovers",
    trigger: "End of the agreed coverage window",
    does: "Compiles a full interaction log — calls handled, messages taken, open items, escalations — and delivers it to the incoming front desk shift.",
    boundary: "No handover recipient available: message held and flagged for the next contact.",
  },
];

const SITUATIONS = [
  {
    heading: "Check-in queues and desk coverage gaps",
    body: "When your team is with guests at the desk, the phone rings unanswered. Calls that go to voicemail during check-in peaks are reservations and revenue that rarely come back.",
  },
  {
    heading: "After-hours and overnight calls",
    body: "Most hotels cannot staff a front desk around the clock. Guests still call after close — late arrivals, early check-outs, overnight questions. Someone needs to answer.",
  },
  {
    heading: "Staff absences and short-staffed shifts",
    body: "A team member calls in sick and the desk runs short. Calls pile up. Guest Squad covers the gap without recruitment, training or extra headcount.",
  },
  {
    heading: "Direct booking calls from your website or Google profile",
    body: "Every unanswered direct booking call is a potential OTA booking or no booking at all. A live person answering means more reservations stay off commission.",
  },
];

export default function HotelAnsweringServicePage() {
  const comparisons = RESOURCES.filter((r) =>
    d.comparisonSlugs ? d.comparisonSlugs.includes(r.slug) : false
  );
  const insights = INSIGHTS.filter((i) =>
    d.insightSlugs ? d.insightSlugs.includes(i.slug) : false
  ).sort((a, b) =>
    d.insightSlugs!.indexOf(a.slug) - d.insightSlugs!.indexOf(b.slug)
  );

  return (
    <>
      <ServicePageViewTracker serviceName={d.slug} />
      <JsonLd
        data={[
          serviceSchema({
            name: d.eyebrow,
            description: d.description,
            path: PATH,
            serviceOutput: d.schemaServiceOutput,
            audienceTypes: d.schemaAudienceTypes,
            subjectOf: d.schemaSubjectOf,
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE.url}${PATH}#webpage`,
            "url": `${SITE.url}${PATH}`,
            "name": "Hotel Answering Service",
            "description": d.description,
            "inLanguage": "en",
            "isPartOf": { "@id": `${SITE.url}/#website` },
            "mainEntity": { "@id": `${SITE.url}${PATH}#service` },
            ...(d.schemaMentions && d.schemaMentions.length > 0 && {
              "mentions": d.schemaMentions,
            }),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Hotel Answering Service", path: PATH },
          ]),
          faqSchema(d.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Hotel Answering Service", path: PATH },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Live Hotel Phone Coverage
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Hotel Answering Service
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              Keep hotel calls covered when your front desk is busy or closed. Hospitality-trained people answer reservation inquiries, help guests and escalate urgent requests using your property&apos;s procedures — on your existing number, with weekly reporting included.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For independent hotels, boutique properties, B&amp;Bs, inns, lodges and serviced apartments.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="hotel_answering_hero">
                Book a Coverage Review
              </CoverageReviewButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
            <Image
              src={d.image.src}
              alt={d.image.alt}
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <Section surface>
        <SectionHeading
          eyebrow="When You Need This"
          title="The calls your front desk cannot always answer."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SITUATIONS.map((s) => (
            <div key={s.heading} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SHARED CAPABILITIES */}
      <Section>
        <SectionHeading
          eyebrow="What Guest Squad Handles"
          title="Five capabilities, applied to your hotel."
          description="Each capability is scoped to your property's systems, approved information and agreed procedures. Coverage can include some or all of these depending on your arrangement."
        />
        <div className="mt-10">
          <SharedCapabilitiesBlock variant="hotel" />
        </div>
      </Section>

      {/* WORKFLOWS */}
      <Section surface>
        <SectionHeading
          eyebrow="Hotel-Specific Workflows"
          title="Six workflows built around how a hotel front desk actually operates."
          description="Each workflow has a defined trigger, a clear set of actions and an agreed boundary. Nothing handled off the record, nothing assumed."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOWS.map((w) => (
            <div key={w.label} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">{w.label}</p>
              <div className="mt-4 flex flex-col gap-3 grow">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Trigger</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{w.trigger}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Agent does</p>
                  <p className="text-sm leading-relaxed text-ink-soft" dangerouslySetInnerHTML={{ __html: w.does }} />
                </div>
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Escalated when</p>
                <p className="text-sm leading-relaxed text-ink-soft" dangerouslySetInnerHTML={{ __html: w.boundary }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COVERAGE TYPES */}
      <Section surface id="coverage">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Coverage Options</p>
            <h2 className="mt-2 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              After-hours, overflow, or around the clock.
            </h2>
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "After-Hours",
              body: "Calls forward to Guest Squad outside your front-desk hours. Your daytime team is unaffected.",
            },
            {
              label: "Overflow",
              body: "Your desk answers first. Unanswered or busy-line calls route to Guest Squad automatically.",
            },
            {
              label: "24/7 Coverage",
              body: "Full coverage across all hours — including weekends, public holidays and peak periods.",
            },
          ].map((opt) => (
            <div key={opt.label} className="rounded-lg border border-line bg-paper px-5 py-5">
              <p className="text-sm font-semibold text-ink">{opt.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{opt.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          Coverage windows, channels and responsibilities are agreed during onboarding.{" "}
          <Link href="/pricing" className="text-gold-dark underline-offset-4 hover:underline">
            See how coverage is scoped →
          </Link>
        </p>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="From your existing phone line to a live answered call."
        />

        {/* Setup steps */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Property brief",
              body: "We document your room information, rates, policies, arrival instructions, preferred tone and your designated contacts for exceptions and escalation.",
            },
            {
              step: "02",
              title: "System access and permissions",
              body: "Where booking actions are included, we review PMS access and confirm what agents are permitted to complete. Rate exceptions and discretionary decisions stay with your team.",
            },
            {
              step: "03",
              title: "Routing and go-live",
              body: "We test forwarding, greeting, transfers and escalation paths. Most hotels are live within 5 business days of signing.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        {/* PMS systems */}
        <div className="mt-8 rounded-lg border border-line bg-paper px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Systems we work in</p>
          <div className="flex flex-wrap gap-2">
            {["Cloudbeds", "Mews", "Opera PMS", "Little Hotelier", "Booking.com Extranet", "Guesty", "Hostaway"].map((sys) => (
              <span key={sys} className="rounded border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                {sys}
              </span>
            ))}
            <span className="rounded border border-dashed border-line px-3 py-1 text-xs text-ink-muted">+ others on request</span>
          </div>
          <p className="mt-3 text-xs text-ink-muted">System access and permitted actions are agreed during onboarding. Rate changes and payment processing stay with your team.</p>
        </div>

        <div className="mt-4 rounded-lg border border-line bg-surface px-6 py-4">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">On-site responsibility stays with your team.</span>{" "}
            Urgent safety or security concerns follow your property&apos;s approved emergency procedures. Remote call coverage does not replace emergency services or required on-site action.
          </p>
        </div>
      </Section>

      {/* REPORTING */}
      <Section surface>
        <SectionHeading
          eyebrow="Reporting"
          title="Every call logged. Your team briefed before the next shift."
        />
        <div className="mt-10 grid gap-0 divide-y divide-line rounded-lg border border-line bg-paper md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            {
              step: "01",
              title: "Call answered",
              body: "Agent handles the call using your property brief and agreed procedures.",
            },
            {
              step: "02",
              title: "Interaction logged",
              body: "Purpose, action taken, escalation contact notified and next steps recorded.",
            },
            {
              step: "03",
              title: "Handover delivered",
              body: "Full shift notes sent to your incoming front desk at the agreed time.",
            },
            {
              step: "04",
              title: "Weekly summary",
              body: "Call volume, outcomes and escalations sent every week — from day one.",
            },
          ].map((s) => (
            <div key={s.step} className="flex flex-col gap-2 p-6">
              <p className="text-xs font-light text-ink-muted">{s.step}</p>
              <p className="text-sm font-semibold text-ink">{s.title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialsBlock />

      {/* MID-PAGE CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Ready to close your coverage gap?</p>
            <p className="mt-1 text-sm text-paper/60">Book a review or start with a 2-week no-obligation pilot.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="sm" ctaLocation="hotel_answering_mid_cta">
              Book a Coverage Review
            </CoverageReviewButton>
            <ButtonLink href="/pilot" variant="outline" size="sm" className="border-paper/25 text-paper hover:border-paper/60">
              Request Pilot Review
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* FAQ + CTA */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Questions" title="Hotel answering service questions, answered." />
            <div className="mt-8">
              <FaqAccordion items={d.faqs} />
            </div>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Book a coverage review for your hotel
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Tell us about your property, your front-desk hours and where calls are being missed. We&apos;ll review your coverage requirements and discuss a suitable scope.
            </p>
            <CoverageReviewButton variant="gold" size="default" ctaLocation="hotel_faq_cta">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="outline" size="sm">
                How pricing is scoped
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Useful for the conversation: your property type, current phone hours, typical call volume and any systems your front desk uses.
            </p>
          </div>
        </div>
      </Section>

      {/* KEEP EXPLORING */}
      <div className="border-t border-line py-14">
        <div className="container">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Keep Exploring</p>
            <h2 className="mt-1.5 text-2xl font-medium text-ink">Explore what fits your situation.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.length > 0 && (
              <div className="rounded-lg border border-line bg-paper p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Compare Options</p>
                <ul className="flex flex-col gap-3">
                  {comparisons.slice(0, 2).map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/resources/${r.slug}`}
                        className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {insights.length > 0 && (
              <div className="rounded-lg border border-line bg-paper p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Research &amp; Insights</p>
                <ul className="flex flex-col gap-3">
                  {insights.slice(0, 2).map((i) => (
                    <li key={i.slug}>
                      <Link
                        href={`/resources/insights/${i.slug}`}
                        className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-lg border border-line bg-paper p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Other Services</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/services/central-reservations" className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                    Central Reservations Desk
                  </Link>
                </li>
                <li>
                  <Link href="/services/vacation-rental-answering-service" className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                    Vacation Rental Answering Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <CtaSection title={d.ctaTitle} description={d.ctaDescription} />
    </>
  );
}
