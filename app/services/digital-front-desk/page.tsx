/**
 * Digital Front Desk — structural draft
 * Status: PRIVATE PREVIEW. noindex. Not in public nav or sitemap.
 * Copy, keywords, final CTAs and schema are all pending.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Digital Front Desk — structural draft",
    description: "Private structural draft. Not for public indexing.",
    path: "/services/digital-front-desk",
  }),
  robots: { index: false, follow: false },
};

// ---------------------------------------------------------------------------
// Content data object — all copy slots pending final keyword and intent mapping
// ---------------------------------------------------------------------------
const DRAFT = {
  // Section 1 — Hero
  hero: {
    categoryLabel: "Digital Front Desk",
    h1: "[H1: service name and operational outcome — copy pending]",
    intro:
      "[Intro: 2–3 sentences. Human remote reception. Supported systems. Approved property procedures. Not generic call-center framing.]",
    primaryCta: "[Primary CTA label — pending]",
    secondaryAnchor: "#scope",
    secondaryLabel: "See what's covered",
    fitLine:
      "Independent and boutique hotels · Serviced apartments · Aparthotels · Contactless properties",
  },

  // Section 2 — Coverage arrangements
  arrangements: [
    {
      title: "After-Hours and Weekends",
      situation:
        "[Operating situation: evenings, overnight, early mornings, weekends — when front desk is closed or reduced.]",
      howReached:
        "[How interactions reach Guest Squad: call forwarding, messaging redirect, OTA routing — details pending property setup.]",
      retained:
        "[Retained property responsibilities: on-site physical presence, emergency decisions, access system control.]",
      link: "/services/after-hours-support",
      linkLabel: "After-Hours Support",
    },
    {
      title: "Overflow and Staff Absence",
      situation:
        "[Operating situation: check-in peaks, high-occupancy periods, staff time off, unplanned absences.]",
      howReached:
        "[How interactions reach Guest Squad: overflow routing when on-site team is at capacity — configuration pending.]",
      retained:
        "[Retained property responsibilities: primary front-desk staffing, on-site decisions, physical guest handling.]",
      link: null,
      linkLabel: null,
    },
    {
      title: "Broader Agreed Coverage",
      situation:
        "[Operating situation: extended daily hours or fuller front-desk coverage by agreement — scope defined per property.]",
      howReached:
        "[How interactions reach Guest Squad: agreed channel routing across phone, messaging, OTA — pending coverage definition.]",
      retained:
        "[Retained property responsibilities: physical attendance, emergency response, owner/management decisions.]",
      link: null,
      linkLabel: null,
    },
  ],

  // Section 3 — Scope table rows
  scopeRows: [
    {
      capability: "Calls and property enquiries",
      remoteHandling:
        "Answer calls, respond to enquiries, provide property information per approved brief",
      permissionNote: "Per property brief. No physical action.",
      link: "/services/hotel-answering-service",
      linkLabel: "Hotel Answering Service",
    },
    {
      capability: "Guest messaging (agreed channels)",
      remoteHandling:
        "Respond via SMS, WhatsApp, email or OTA inbox per agreed channel scope",
      permissionNote: "Channel access confirmed in setup.",
      link: "/services/guest-messaging",
      linkLabel: "Guest Messaging",
    },
    {
      capability: "Arrival and departure assistance",
      remoteHandling:
        "Provide arrival instructions, answer access questions, guide check-in/check-out steps",
      permissionNote:
        "Guidance only. Approved digital actions where system permits. No physical attendance.",
      link: null,
      linkLabel: null,
    },
    {
      capability: "Access guidance and troubleshooting",
      remoteHandling:
        "Troubleshoot access issues per approved instructions; initiate permitted actions where system allows",
      permissionNote:
        "[Owner confirmation: which systems and permitted actions are in scope.]",
      link: null,
      linkLabel: null,
    },
    {
      capability: "Housekeeping / maintenance coordination",
      remoteHandling:
        "Log requests, contact approved local responders, follow up per procedures",
      permissionNote:
        "Coordination only. Resolution is on-site. Local contacts defined in brief.",
      link: null,
      linkLabel: null,
    },
    {
      capability: "Reservation enquiries and approved tasks",
      remoteHandling:
        "Handle enquiries and approved booking tasks where included in scope",
      permissionNote:
        "Included by agreement. Portfolio reservations operations belong to Central Reservations Desk.",
      link: "/services/reservation-support",
      linkLabel: "Reservation Support",
    },
  ],

  // Section 5 — Setup steps
  setupSteps: [
    {
      n: "01",
      title: "Define coverage",
      body: "[Hours, channels, interaction types, responsibilities — confirmed per property.]",
    },
    {
      n: "02",
      title: "Build property brief",
      body: "[Policies, arrival instructions, escalation contacts, approved actions — supplied by property owner/manager.]",
    },
    {
      n: "03",
      title: "Configure access and routing",
      body: "[Channel routing, access permissions, communication workflows — [Owner confirmation: compatible systems and setup requirements.]]",
    },
    {
      n: "04",
      title: "Review readiness",
      body: "[Sample situations, handover arrangements, activation criteria — sign-off before go-live.]",
    },
  ],

  setupChecklist: [
    "Who owns updates to property instructions",
    "How changes reach the remote team",
    "Primary and backup local contacts",
    "[Owner confirmation: compatibility review — systems and integrations]",
    "Handover process between property and remote staff",
  ],

  // Section 6 — Visibility record fields
  recordFields: [
    { label: "Property", placeholder: "[Property name — redacted]" },
    { label: "Channel", placeholder: "Phone / SMS / OTA" },
    { label: "Guest enquiry / request", placeholder: "[Guest request description — illustrative]" },
    { label: "Action taken", placeholder: "[Remote action or escalation — illustrative]" },
    { label: "Responsible", placeholder: "Remote agent / [Local contact — redacted]" },
    { label: "Status", placeholder: "Resolved / Escalated / Pending" },
    { label: "Required next action", placeholder: "[Owner confirmation: field name and values]" },
  ],

  reportingConfirmations: [
    "[Owner confirmation: reporting fields and format]",
    "[Owner confirmation: delivery cadence — weekly / on-demand]",
    "[Owner confirmation: delivery method — email / portal / other]",
    "[Owner confirmation: supervisor or review contact]",
  ],

  relatedResources: [
    { label: "After-Hours Hotel Support Checklist", href: "/resources/after-hours-hotel-support-checklist" },
    { label: "Hotel Front Desk Overflow Support", href: "/resources/hotel-front-desk-overflow-support" },
    { label: "Hotel Guest Messaging SOP Template", href: "/resources/hotel-guest-messaging-sop-template" },
  ],

  // Section 7 — FAQ topics (answers pending)
  faqTopics: [
    { q: "What stays on-site and what does Guest Squad handle remotely?", a: "[Answer pending — copy and owner confirmation required.]" },
    { q: "What check-in or access actions can be performed remotely?", a: "[Answer pending — depends on property systems and agreed scope.]" },
    { q: "What happens if a local contact is unavailable?", a: "[Answer pending — escalation path defined per property brief.]" },
    { q: "Can coverage work alongside our current reception staff?", a: "[Answer pending.]" },
    { q: "Which systems and channels can be supported?", a: "[Answer pending — compatibility review required per property.]" },
    { q: "Can we start with a limited scope and expand later?", a: "[Answer pending.]" },
    { q: "What determines pricing?", a: "[Answer pending — owner confirmation required. No rates at this stage.]" },
  ],

  // Discovery panel slots
  discoverySlots: [
    "Property type and size",
    "Coverage gaps, hours, and time zone",
    "Channels and systems in use",
    "Required handling scope",
    "Local response arrangement",
  ],
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function DigitalFrontDeskDraftPage() {
  return (
    <>
      {/* Draft banner */}
      <div className="bg-amber-100 border-b border-amber-300 text-amber-900 text-xs font-semibold text-center py-2 tracking-wide uppercase">
        Structural Draft — Private Preview · noindex · Not in public nav or sitemap
      </div>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Digital Front Desk", path: "/services/digital-front-desk" },
        ]}
      />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              {DRAFT.hero.categoryLabel}
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              {DRAFT.hero.h1}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {DRAFT.hero.intro}
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="dfd_draft_hero">
                {DRAFT.hero.primaryCta}
              </CoverageReviewButton>
              <a
                href={DRAFT.hero.secondaryAnchor}
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                {DRAFT.hero.secondaryLabel}
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">{DRAFT.hero.fitLine}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
            {/* Photographic asset TBD — use existing site image or placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-surface">
              <p className="text-center text-sm text-ink-muted px-6">
                [Image placeholder: hotel front desk or remote-team context.<br />
                Use existing site photo asset. No AI-generated imagery.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: COVERAGE ARRANGEMENTS ───────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Coverage Arrangements"
          title="[H2: When this fits your operation — copy pending]"
        />
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          These are coverage arrangements, not price tiers or guaranteed inclusions. Scope is confirmed per property.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {DRAFT.arrangements.map((a) => (
            <div key={a.title} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">{a.title}</p>
              <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-ink-soft">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-1">Operating situation</span>
                  {a.situation}
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-1">How interactions reach Guest Squad</span>
                  {a.howReached}
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-1">Retained property responsibilities</span>
                  {a.retained}
                </div>
              </div>
              {a.link && (
                <div className="mt-4 pt-4 border-t border-line">
                  <Link href={a.link} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                    {a.linkLabel}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── SECTION 3: SCOPE AND RESPONSIBILITIES ───────────────────── */}
      <Section id="scope" surface>
        <SectionHeading
          eyebrow="Scope and Responsibilities"
          title="[H2: What Guest Squad handles remotely — copy pending]"
        />
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          Available work is not automatically included in every engagement. Scope is agreed per property before go-live.
        </p>

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-x-auto md:block">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="py-3 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted w-[22%]">Capability</th>
                <th className="py-3 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted w-[45%]">Remote handling</th>
                <th className="py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">Permission or on-site requirement</th>
              </tr>
            </thead>
            <tbody>
              {DRAFT.scopeRows.map((row, i) => (
                <tr key={row.capability} className={`border-b border-line/60 ${i % 2 === 0 ? "bg-paper" : "bg-surface/40"}`}>
                  <td className="py-4 pr-6 font-medium text-ink align-top">
                    {row.capability}
                    {row.link && (
                      <div className="mt-1">
                        <Link href={row.link} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                          {row.linkLabel}
                        </Link>
                      </div>
                    )}
                  </td>
                  <td className="py-4 pr-6 text-ink-soft align-top">{row.remoteHandling}</td>
                  <td className="py-4 text-ink-soft align-top">
                    <span className={row.permissionNote.startsWith("[Owner") ? "text-amber-700 font-medium" : ""}>
                      {row.permissionNote}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-6 flex flex-col gap-4 md:hidden">
          {DRAFT.scopeRows.map((row) => (
            <div key={row.capability} className="rounded-lg border border-line bg-paper p-5">
              <p className="font-semibold text-ink text-sm">{row.capability}</p>
              {row.link && (
                <Link href={row.link} className="text-xs text-gold-dark underline underline-offset-4 hover:text-gold">
                  {row.linkLabel}
                </Link>
              )}
              <div className="mt-3 flex flex-col gap-2 text-xs text-ink-soft">
                <div>
                  <span className="font-semibold text-ink-muted uppercase tracking-wider">Remote handling: </span>
                  {row.remoteHandling}
                </div>
                <div>
                  <span className="font-semibold text-ink-muted uppercase tracking-wider">Permission / on-site: </span>
                  <span className={row.permissionNote.startsWith("[Owner") ? "text-amber-700 font-medium" : ""}>
                    {row.permissionNote}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SECTION 4: WORKED INTERACTION / PROCESS DIAGRAM ─────────── */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="[H2: How a late-arrival access issue gets handled — copy pending]"
        />
        <p className="mt-2 text-sm text-ink-muted italic">
          Illustrative workflow — not a customer result or guaranteed outcome.
        </p>

        <div className="mt-8 max-w-3xl">
          {/* Main flow */}
          {[
            { step: "01", label: "Guest contacts support", owner: "Remote", note: "Call, SMS, OTA message or other agreed channel" },
            { step: "02", label: "Confirm guest and property context", owner: "Remote", note: "Identity, property, relevant booking or access details" },
            { step: "03", label: "Check approved instructions", owner: "Remote", note: "Property brief — approved actions and escalation path" },
            { step: "04", label: "Provide guidance or take permitted action", owner: "Remote", note: "Remote guidance or approved digital action where system allows" },
          ].map((s, i) => (
            <div key={s.step} className="flex gap-4 mb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-paper text-xs font-bold text-gold-dark">
                  {s.step}
                </div>
                {i < 3 && <div className="w-px flex-1 bg-line mt-1 mb-1 min-h-[24px]" />}
              </div>
              <div className="pb-5">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-ink">{s.label}</p>
                  <span className="text-[10px] font-bold uppercase tracking-wider rounded px-1.5 py-0.5 bg-gold/10 text-gold-dark border border-gold/20">
                    {s.owner}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-ink-soft">{s.note}</p>
              </div>
            </div>
          ))}

          {/* Decision branch */}
          <div className="ml-12 mt-2 rounded-lg border border-line bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Decision: Resolved remotely?</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded border border-green-200 bg-green-50 p-4">
                <p className="text-xs font-bold text-green-800 uppercase tracking-wider mb-2">Yes</p>
                <ul className="text-xs text-green-900 space-y-1 list-disc list-inside">
                  <li>Confirm with guest</li>
                  <li>Record outcome</li>
                </ul>
              </div>
              <div className="rounded border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">No — escalate</p>
                <ul className="text-xs text-amber-900 space-y-1 list-disc list-inside">
                  <li>
                    Contact approved local responder
                    <span className="ml-1 font-bold text-amber-700">[On-site]</span>
                  </li>
                  <li>Backup escalation if primary unavailable</li>
                  <li>Update guest on status</li>
                  <li>Record resolved or pending</li>
                </ul>
              </div>
            </div>
            {/* Fallback */}
            <div className="mt-4 rounded border border-line bg-paper p-3">
              <p className="text-xs font-semibold text-ink-muted mb-1">System unavailable or approval required</p>
              <p className="text-xs text-ink-soft">
                Inform guest of delay. Follow approved fallback procedure. Contact local contact immediately.
                [Owner confirmation: fallback steps and approval routing.]
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-ink-muted ml-12">
            Remote and on-site ownership are distinguished by label, not color alone.
          </p>
        </div>
      </Section>

      {/* ── SECTION 5: SETUP AND HANDOVER ───────────────────────────── */}
      <Section surface>
        <SectionHeading
          eyebrow="Setup and Handover"
          title="[H2: What implementation involves — copy pending]"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Four steps */}
          <div className="flex flex-col gap-6">
            {DRAFT.setupSteps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="shrink-0 text-2xl font-semibold tabular-nums text-gold-dark/50">{s.n}</span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-ink-muted pl-10">
              [Owner confirmation: exact staffing, continuity, security and launch-time claims.]<br />
              No promise of every PMS or lock integration. Duration not guaranteed.
            </p>
          </div>
          {/* Checklist */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Before go-live checklist</p>
            <ul className="flex flex-col gap-3">
              {DRAFT.setupChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className={`mt-0.5 h-4 w-4 shrink-0 rounded border-2 ${item.startsWith("[Owner") ? "border-amber-400 bg-amber-50" : "border-line"}`} aria-hidden="true" />
                  <span className={item.startsWith("[Owner") ? "text-amber-700 font-medium" : ""}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── SECTION 6: VISIBILITY AND ACCOUNTABILITY ─────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Visibility and Accountability"
          title="[H2: What the operator sees after every interaction — copy pending]"
        />

        {/* Illustrative interaction record */}
        <div className="mt-8 max-w-2xl rounded-lg border border-line bg-paper overflow-hidden">
          <div className="bg-surface px-5 py-3 border-b border-line">
            <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
              Illustrative interaction record — not actual guest data
            </p>
          </div>
          <div className="divide-y divide-line/60">
            {DRAFT.recordFields.map((f) => (
              <div key={f.label} className="grid grid-cols-[160px_1fr] gap-4 px-5 py-3 text-sm">
                <span className="font-semibold text-ink shrink-0">{f.label}</span>
                <span className={f.placeholder.startsWith("[Owner") ? "text-amber-700 font-medium" : "text-ink-soft"}>
                  {f.placeholder}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reporting confirmations */}
        <div className="mt-6 max-w-2xl rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">Owner confirmations required</p>
          <ul className="flex flex-col gap-2">
            {DRAFT.reportingConfirmations.map((item) => (
              <li key={item} className="text-sm text-amber-900">{item}</li>
            ))}
          </ul>
        </div>

        {/* Related resources */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Related reading</p>
          <div className="flex flex-col gap-2">
            {DRAFT.relatedResources.map((r) => (
              <Link key={r.href} href={r.href} className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold">
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 7: BUYER QUESTIONS AND NEXT STEP ────────────────── */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">

          {/* FAQ */}
          <div>
            <SectionHeading
              eyebrow="Common Questions"
              title="[H2: What operators ask before starting — copy pending]"
            />
            <p className="mt-2 text-sm text-ink-muted">
              Answers pending final copy and owner confirmation. Pricing and contract facts need confirmation before publishing.
            </p>
            <div className="mt-6">
              <FaqAccordion items={DRAFT.faqTopics} defaultOpenCount={0} />
            </div>
          </div>

          {/* Discovery panel */}
          <div className="rounded-lg border border-line bg-paper p-6 h-fit">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-1">Next Step</p>
            <h3 className="text-lg font-medium text-ink mb-3">
              [H3: Discovery panel headline — copy pending]
            </h3>
            <p className="text-sm text-ink-soft mb-4">
              [Short intro: what the review call covers. No invented rates or pilot promises.]
            </p>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                We&apos;ll ask about:
              </p>
              <ul className="flex flex-col gap-2">
                {DRAFT.discoverySlots.map((slot) => (
                  <li key={slot} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark/50" aria-hidden="true" />
                    {slot}
                  </li>
                ))}
              </ul>
            </div>
            <CoverageReviewButton variant="gold" size="default" ctaLocation="dfd_draft_next_step">
              [CTA label — pending]
            </CoverageReviewButton>
            <p className="mt-3 text-xs text-ink-muted">
              [Owner confirmation: pricing/pilot/contract facts before publishing.]
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
