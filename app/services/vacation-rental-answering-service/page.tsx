import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { SharedCapabilitiesBlock } from "@/components/site/shared-capabilities-block";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Vacation Rental Answering Service for STR Operators",
  description:
    "24/7 guest communication for short-term rental operators. Guest messages, access assistance, house-rule questions and cleaner coordination handled across your Airbnb, Vrbo and direct listings.",
  path: "/services/vacation-rental-answering-service",
});

const PATH = "/services/vacation-rental-answering-service";

// ---------------------------------------------------------------------------
// Workflow cards
// ---------------------------------------------------------------------------
const WORKFLOWS = [
  {
    label: "Airbnb & Vrbo Guest Communication",
    trigger: "Guest sends a message on Airbnb, Vrbo or another supported channel",
    does: "Responds within the agreed timeframe using the listing&apos;s instructions and approved information. Pre-stay questions, house-rule clarifications and in-stay messages handled to the listing brief.",
    boundary: "Booking dispute or refund request: flagged immediately to the operator with the full thread context.",
  },
  {
    label: "Listing & House-Rule Questions",
    trigger: "Guest asks about parking, Wi-Fi, pets, check-in time or other listing specifics",
    does: "Answers accurately from the listing brief. Confirms check-in instructions, access codes and any conditions relevant to the stay.",
    boundary: "Rule exception requested: routes to the operator with the guest&apos;s request documented. No exceptions granted without approval.",
  },
  {
    label: "Self Check-In & Access Assistance",
    trigger: "Guest reports a lockbox not working, a keypad code that fails or difficulty accessing the property",
    does: "Troubleshoots using the access procedures for that listing. Guides the guest through alternative steps where available.",
    boundary: "Unresolvable remotely: the designated emergency local contact is called immediately. Guest kept informed throughout.",
  },
  {
    label: "Cleaner & Turnover Coordination",
    trigger: "Late checkout, early check-in request or special preparation needed before the next guest",
    does: "Contacts the cleaner or turnover team per the agreed procedure. Confirms acknowledgment and updates the guest on timing.",
    boundary: "No acknowledgment from the cleaner: escalates to the operator before the next check-in window.",
  },
  {
    label: "Local Maintenance Coordination",
    trigger: "Guest reports a broken appliance, plumbing issue or fault affecting the stay",
    does: "Logs the issue against the listing and contacts the designated local tradesperson or maintenance contact. Updates the guest on expected resolution.",
    boundary: "Safety or habitability concern: immediate escalation to the operator and emergency services if required.",
  },
  {
    label: "Listing-Level Issue Tracking",
    trigger: "Any unresolved item, repeated question or guest complaint arises during the stay",
    does: "Records the item against the listing with full context. Includes it in the daily handover with status and any actions taken.",
    boundary: "Same issue reported by multiple guests or above an agreed threshold: operator notified directly with a summary.",
  },
];

// ---------------------------------------------------------------------------
// Situations
// ---------------------------------------------------------------------------
const SITUATIONS = [
  {
    heading: "Guest messages arrive across Airbnb, Vrbo and direct channels at all hours",
    body: "A slow response on Airbnb affects your ranking. A message left overnight on Vrbo misses a booking. Guests expect fast replies regardless of when they send them.",
  },
  {
    heading: "Access and check-in issues happen when you are unavailable",
    body: "A lockbox that won&apos;t open at 10pm, a keypad code that fails on arrival. These need an immediate, calm response — not a voicemail and a callback in the morning.",
  },
  {
    heading: "Each listing has different house rules, access instructions and local contacts",
    body: "One script does not cover all listings. The agent needs the right brief for each property — check-in method, house rules, Wi-Fi details, emergency contacts and cleaner procedures.",
  },
  {
    heading: "Turnover coordination breaks down during back-to-back stays",
    body: "A late checkout, an early check-in request and an unacknowledged cleaner add up quickly. Without a central point of contact, things fall through between guests.",
  },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "What is a vacation rental answering service?",
    a: "A vacation rental answering service handles guest communication and operational coordination across your short-term rental listings. Guest Squad provides the team, using each listing&apos;s brief, approved channels and agreed procedures — so guests get a prompt response and operators stay informed without being always on call.",
  },
  {
    q: "Which OTA channels do you support?",
    a: "We handle guest threads on Airbnb and Vrbo as the primary channels. Support for additional channels — Booking.com, direct messaging or others — is confirmed during scoping based on access and your current setup.",
  },
  {
    q: "What property management systems do you work in?",
    a: "We work in Guesty, Hostaway, Lodgify, Hostfully, Hospitable, OwnerRez and iGMS. If you use a different system, we review access and workflow options during setup and confirm what can be supported.",
  },
  {
    q: "Can you handle access emergencies when I&apos;m not available?",
    a: "Yes. Access issues follow a defined procedure for each listing — troubleshooting steps, alternative access options and an emergency local contact if needed. The operator is notified of any situation that cannot be resolved remotely.",
  },
  {
    q: "Can you coordinate with our cleaner or turnover team?",
    a: "Yes, within the agreed procedure. We contact the cleaner at the right time, confirm acknowledgment and flag any issues before the next check-in. The operator is notified if the cleaner cannot be reached within the agreed window.",
  },
  {
    q: "Do you handle multiple listings under one arrangement?",
    a: "Yes. Each listing has its own brief, instructions and approved contacts. The arrangement can cover a single listing or a portfolio — scope is agreed listing by listing before handling begins.",
  },
  {
    q: "What happens with booking disputes or refund requests?",
    a: "These are flagged immediately to the operator with the full context. Guest Squad does not negotiate disputes, approve refunds or represent the host in OTA resolution processes — those decisions stay with the operator.",
  },
  {
    q: "How is a vacation rental answering service priced?",
    a: "Pricing reflects the number of listings, active channels, guest message volume, coverage hours and the operational tasks included. We review these requirements before recommending a scope and proposal.",
  },
];

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------
const PAGE_URL = `${SITE.url}${PATH}`;

export default function VacationRentalAnsweringServicePage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            name: "Vacation Rental Answering Service for STR Operators",
            serviceType: "Vacation Rental Answering Service",
            description:
              "24/7 guest communication for short-term rental operators. Guest messages, access assistance and cleaner coordination handled across your Airbnb, Vrbo and direct listings.",
            url: PAGE_URL,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: "Worldwide",
            audience: [
              { "@type": "Audience", audienceType: "Short-Term Rental Operator" },
              { "@type": "Audience", audienceType: "Airbnb Host" },
              { "@type": "Audience", audienceType: "Vrbo Host" },
              { "@type": "Audience", audienceType: "Vacation Rental Property Manager" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: "Vacation Rental Answering Service for STR Operators | Guest Squad",
            description:
              "24/7 guest communication for short-term rental operators across Airbnb, Vrbo and direct listings.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${PAGE_URL}#service` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Vacation Rental Answering Service", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Vacation Rental Answering Service", path: PATH },
        ]}
      />

      {/* 1. HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              STR Guest Communication
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Vacation Rental Answering Service for STR Operators
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              Keep guests looked after across every listing and every channel — without being on call yourself. Guest Squad handles messages, access issues, house-rule questions and cleaner coordination using each listing&apos;s own brief and procedures.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For Airbnb hosts, Vrbo hosts, short-term rental operators and vacation rental property managers.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="vras_hero">
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
            <Image
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85"
              alt="Vacation rental property with consistent guest communication managed remotely"
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. SITUATIONS */}
      <Section surface>
        <SectionHeading
          eyebrow="When You Need This"
          title="Guest communication that cannot wait for office hours."
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

      {/* 3a. SHARED CAPABILITIES */}
      <Section>
        <SectionHeading
          eyebrow="What Guest Squad Handles"
          title="Reservations, OTA inboxes and guest communication — handled across your listings."
          description="Each capability is scoped to your listings&apos; channels, approved information and agreed procedures. The arrangement can include some or all depending on your operation."
        />
        <div className="mt-10">
          <SharedCapabilitiesBlock variant="rental" />
        </div>
      </Section>

      {/* 3b. WORKFLOWS */}
      <Section surface>
        <SectionHeading
          eyebrow="STR Workflows"
          title="Six workflows built around how a short-term rental operation actually runs."
          description="Each workflow has a defined trigger, a clear set of actions and an agreed boundary per listing."
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

      {/* 4. COVERAGE OPTIONS */}
      <Section id="coverage">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Coverage Options</p>
            <h2 className="mt-2 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              After-hours, overflow, or full coverage.
            </h2>
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "After-Hours",
              body: "Guest messages and calls handled outside your available hours. Guests get a prompt response even when you are asleep or unavailable.",
            },
            {
              label: "Overflow",
              body: "You handle communication first. Unanswered messages and calls route to Guest Squad automatically when you cannot respond in time.",
            },
            {
              label: "Full Coverage",
              body: "Complete guest communication across all hours. For operators who want consistent handling without being available themselves.",
            },
          ].map((opt) => (
            <div key={opt.label} className="rounded-lg border border-line bg-paper px-5 py-5">
              <p className="text-sm font-semibold text-ink">{opt.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{opt.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          Coverage hours, channels and participating listings are agreed during scoping.{" "}
          <Link href="/pricing" className="text-gold-dark underline-offset-4 hover:underline">
            See how coverage is scoped →
          </Link>
        </p>
      </Section>

      {/* 5. HOW IT WORKS */}
      <Section surface id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="From listing review to live guest handling."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Listing review",
              body: "We document each listing — check-in method, house rules, access procedures, local contacts, cleaner details and the channels guests use to reach you.",
            },
            {
              step: "02",
              title: "Channel access and permissions",
              body: "We confirm access to your PMS and OTA inboxes. We agree what agents can send, what requires your approval and how escalations are routed per listing.",
            },
            {
              step: "03",
              title: "Go-live",
              body: "We test message routing, access procedures and handover flows for each listing. Most operators are live within 5 business days of signing.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Systems */}
        <div className="mt-8 rounded-lg border border-line bg-paper px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Systems we work in</p>
          <div className="flex flex-wrap gap-2">
            {["Guesty", "Hostaway", "Lodgify", "Hostfully", "Hospitable", "OwnerRez", "iGMS", "Turno", "Airbnb", "Vrbo"].map((sys) => (
              <span key={sys} className="rounded border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                {sys}
              </span>
            ))}
            <span className="rounded border border-dashed border-line px-3 py-1 text-xs text-ink-muted">+ others on request</span>
          </div>
          <p className="mt-3 text-xs text-ink-muted">System access and channel permissions are confirmed per listing during setup. Booking disputes, refunds and OTA resolutions stay with the operator.</p>
        </div>

        <div className="mt-4 rounded-lg border border-line bg-surface px-6 py-4">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">Operator decisions stay with you.</span>{" "}
            Pricing exceptions, refunds and resolution processes follow the escalation routes agreed for each listing.
          </p>
        </div>
      </Section>

      {/* 6. REPORTING */}
      <Section>
        <SectionHeading
          eyebrow="Reporting"
          title="Every interaction logged. Every listing briefed before each day."
        />
        <div className="mt-10 grid gap-0 divide-y divide-line rounded-lg border border-line bg-paper md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            {
              step: "01",
              title: "Message handled",
              body: "Agent responds or takes action using the correct listing brief and agreed permissions.",
            },
            {
              step: "02",
              title: "Interaction logged",
              body: "Listing, channel, action taken, guest outcome, escalation contact and open items recorded.",
            },
            {
              step: "03",
              title: "Handover delivered",
              body: "Per-listing daily notes sent to the operator at the agreed time — open items flagged clearly.",
            },
            {
              step: "04",
              title: "Weekly summary",
              body: "Messages handled, access issues, maintenance contacts and escalations per listing — from day one.",
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
            <p className="text-base font-medium text-paper">Ready to stop being on call for your listings?</p>
            <p className="mt-1 text-sm text-paper/60">Book a review or start with a single listing.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="sm" ctaLocation="vras_mid_cta">
              Book a Coverage Review
            </CoverageReviewButton>
          </div>
        </div>
      </div>

      {/* 7. FAQ + CTA */}
      <Section surface>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Vacation rental answering service questions, answered."
            />
            <div className="mt-8">
              <FaqAccordion items={FAQS} />
            </div>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Book a coverage review for your listings
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Tell us about your listings, the channels your guests use and where communication is breaking down. We&apos;ll review your setup and discuss a suitable scope.
            </p>
            <CoverageReviewButton variant="gold" size="default" ctaLocation="vras_faq_cta">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-4">
              <ButtonLink href="/pricing" variant="outline" size="sm">
                How pricing is scoped
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs text-ink-muted">
              Useful for the conversation: your listing count, active OTA channels, your PMS if you use one, and where guest communication is hardest to keep up with.
            </p>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Ready to give your vacation rentals consistent guest communication?"
        description="Book a review and we will map out your listings, channels and coverage requirements."
      />
    </>
  );
}
