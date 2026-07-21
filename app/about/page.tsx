import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Guarantees } from "@/components/site/guarantees";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "About GuestSquad | Hospitality Guest Operations Company",
  description:
    "GuestSquad provides human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. Every interaction is handled by a trained person, not a bot.",
  path: "/about",
});

const ABOUT_FAQS = [
  {
    q: "Who operates GuestSquad?",
    a: "GuestSquad is a hospitality guest operations service with a team built exclusively for guest-facing operations: reservation calls, messaging, OTA inboxes, after-hours coverage, and back-office support for hotels, boutique properties, and short-term rental operators.",
  },
  {
    q: "How are GuestSquad agents trained?",
    a: "All agents hold prior hospitality or customer service certification before joining. They then complete GuestSquad's own pre-live training covering PMS workflows, OTA platforms, escalation protocols, and brand voice standards specific to hospitality. No agent handles a live guest interaction until they have passed our internal certification and completed a supervised practice period.",
  },
  {
    q: "How does GuestSquad protect guest and booking data?",
    a: "Guest data is handled in line with your property's own policies. Beyond that, GuestSquad applies a need-to-know access model: information is accessed only for active interactions, not stored beyond operational requirements, and never shared across client properties. Access to your systems is provisioned and revoked by your team.",
  },
  {
    q: "What types of properties is GuestSquad built for?",
    a: "Independent hotels, boutique properties, resorts, serviced apartments, Airbnb hosts, Vrbo operators, and short-term rental managers, typically from a single property up to a small portfolio.",
  },
  {
    q: "Is GuestSquad a software platform or a human support service?",
    a: "Human support service. GuestSquad is not a software product or AI tool. Every guest interaction is handled by a trained person working inside your existing systems, not a bot generating automated responses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
          faqSchema(ABOUT_FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <PageHero
        eyebrow="About GuestSquad"
        title="Hospitality Support Built for the Hours Your Team Cannot Cover"
        description="GuestSquad provides human guest operations support for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators."
      />

      {/* Direct answer block */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            GuestSquad is a human guest operations support service for hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. The service covers reservation calls, guest messages, OTA inboxes, after-hours support, front desk overflow, and back-office guest operations using trained agents, property-specific briefing, escalation rules, and quality review.
          </p>
        </div>
      </div>

      {/* Why GuestSquad Exists */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80"
              alt="GuestSquad operations team reviewing guest communications"
              fill
              unoptimized
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why We Exist"
              title="Why GuestSquad Exists"
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Independent hotels and smaller property operators are expected to deliver the same response speed as large brands, often without the same staffing model. Guests call after hours, send OTA messages before booking, ask check-in questions on weekends, and expect answers across every channel.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The problem is rarely the property itself. It is the gap between when guests need a real answer and when a trained person is available to give one. Most independent operators have one person at the desk and a voicemail box, while large brands have dedicated reservations teams and round-the-clock OTA inbox management.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              GuestSquad was built to close that gap with human support, not generic scripts or software pretending to be hospitality. Agents work inside your existing systems, follow your property policies, and cover the hours and channels your team cannot reliably staff.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder-led block */}
      <Section surface>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="How We Operate" title="A dedicated team, built around your operation." align="center" className="mx-auto" />
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            GuestSquad is a focused hospitality operations service built around the guest communication gaps that independent hotels, serviced apartments, resorts, and short-term rental operators face every day: missed calls, unanswered guest messages, slow OTA replies, after-hours gaps, and front desk overload.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Every service decision starts with how hospitality properties actually operate. The team is built exclusively around guest-facing operations.
          </p>
        </div>
      </Section>

      {/* Support not replacement */}
      <Section>
        <SectionHeading eyebrow="Our Approach" title="Support for Your Team, Not a Replacement for It." align="center" className="mx-auto" />
        <div className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          GuestSquad is designed to extend your front desk, reservations, and guest communication workflow. We cover overflow, after-hours gaps, OTA inboxes, guest messages, and routine reservation inquiries so your on-site team can stay focused on the guests in front of them. Your property stays in control of policies, pricing, compensation decisions, escalation rules, and on-site response. GuestSquad provides the coverage layer around that operation.
        </div>
        <div className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink-soft">
          See how that compares to{" "}
          <Link href="/resources/hotel-answering-service-vs-ai-voice" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            AI voice agents
          </Link>{" "}
          and{" "}
          <Link href="/resources/hotel-answering-service-vs-call-center" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            generic call centers
          </Link>
          .
        </div>
        <div className="mt-12">
          <Guarantees />
        </div>
      </Section>

      {/* What this means for your property */}
      <Section surface>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Client Outcomes" title="What this means for your property." align="center" className="mx-auto" />
          <ul className="mt-10 flex flex-col gap-4">
            {[
              "Guests receive answers based on your actual policies, not generic scripts.",
              "Your team controls escalation rules and decides what gets routed, logged, or actioned immediately.",
              "Every interaction is logged with context and outcome so your team has full visibility.",
              "Quality review improves consistency over time without requiring your supervision.",
              "GuestSquad supports your operation without taking over your front desk, pricing decisions, guest compensation decisions, or on-site responsibilities.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-4 rounded-lg border border-line bg-paper px-6 py-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
                <span className="text-sm leading-relaxed text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Agent training */}
      <Section>
        <SectionHeading
          eyebrow="Agent Standards"
          title="Agent Standards and Hospitality Training"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          GuestSquad agents are prepared before they handle guest communication. Training covers hospitality tone, PMS workflows, OTA platforms, guest-message handling, escalation judgment, property-specific rules, and brand voice expectations. No agent is assigned to a property until they understand the property&rsquo;s operating instructions, guest policies, escalation contacts, and communication standards.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Hospitality or Customer-Service Background",
              body: "All agents hold prior hospitality or customer-service certification before they are considered. Industry background is a requirement, not a preference.",
            },
            {
              title: "GuestSquad Training Program",
              body: "Before handling guest interactions, every agent completes our structured training: PMS workflows, OTA extranets, escalation protocols, and brand voice standards specific to hospitality.",
            },
            {
              title: "Supervised Practice Before Live Coverage",
              body: "No agent handles a live guest interaction until they have completed a supervised practice period and passed our internal certification review.",
            },
            {
              title: "Property-Specific Briefing",
              body: "Agents are briefed on each property they support: your rates, policies, brand voice, and the questions your guests actually ask, before the first interaction.",
            },
            {
              title: "Ongoing Policy and Procedure Updates",
              body: "Training is not one-time. Agents are updated when properties change policies, rates, or seasonal procedures so accuracy does not drift between onboarding and peak season.",
            },
            {
              title: "Escalation Judgment",
              body: "Knowing what not to handle is as important as handling what you can. Agents are trained specifically on escalation judgment, not just response scripts.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* QA process */}
      <Section surface>
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Quality Review and Operational Visibility"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Every GuestSquad interaction is logged with context, outcome, and escalation status. Client teams can review activity, understand what was handled, and see where issues were routed. Quality review is built into the operating model.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Interaction Logging",
                body: "Every call and message handled by GuestSquad is logged, tagged by type and outcome, and available for your team to review at any time. Nothing happens in your guest channels that you cannot see.",
              },
              {
                title: "Weekly Quality Review",
                body: "A sample of every agent's interactions is reviewed weekly against a structured scorecard covering response accuracy, tone and brand alignment, escalation judgment, and resolution time.",
              },
              {
                title: "Coaching and Correction",
                body: "When an interaction falls below standard, it is flagged, reviewed with the agent, and corrected before the next shift. Issues are not left to recur.",
              },
              {
                title: "Client Reporting",
                body: "Monthly performance summaries covering response times, escalation rates, and volume trends are available to clients on request.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-line bg-paper p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              QA Scorecard Covers
            </p>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft">
              {[
                "Response accuracy against your property policies",
                "Tone and brand voice alignment",
                "Escalation judgment: handled vs. routed correctly",
                "Resolution time against channel benchmarks",
                "Guest experience outcome where determinable",
                "Compliance with your escalation protocol",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Data and privacy */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Data and Privacy"
              title="Data Handling Based on Your Property Policies"
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              GuestSquad agents follow the data-handling rules your property sets for guest communication. Your policies define what can be confirmed, what requires guest verification, what must be escalated, and what information cannot be shared.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Access to your PMS, OTA accounts, and guest data is provisioned by your team during onboarding and can be revoked by your team at any time. GuestSquad does not retain access after an engagement ends.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              See our{" "}
              <Link href="/privacy-policy" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                Terms of Service
              </Link>{" "}
              for full detail on how data is handled, stored, and protected.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { title: "Property Policy First", body: "Your property's data and privacy policies are the operating standard. Agent behaviour is trained to follow them, not to apply GuestSquad defaults in their place." },
              { title: "Need-to-Know Access", body: "Agents access guest information only for the interactions they are actively handling. Broader data browsing is not part of the workflow." },
              { title: "No Cross-Property Data Sharing", body: "Guest and booking information from your property is never visible to agents covering other properties and is never used for any purpose beyond your active engagement." },
              { title: "Access Controlled by Your Team", body: "System credentials are provisioned by your team and revoked by your team. GuestSquad does not retain access to your systems after an engagement concludes." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service boundaries */}
      <Section surface>
        <SectionHeading eyebrow="Scope of Service" title="What GuestSquad handles. What your property controls." align="center" className="mx-auto" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">GuestSquad Handles</p>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft">
              {[
                "Inbound calls and guest messages",
                "OTA inbox management",
                "Routine reservation questions",
                "After-hours guest support",
                "Escalation routing",
                "Interaction logging and client reporting",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-paper p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Your Property Controls</p>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft">
              {[
                "Pricing and rate decisions",
                "Guest compensation and goodwill policies",
                "Final financial approvals",
                "On-site physical response",
                "Guest safety and security decisions",
                "PMS and OTA account access permissions",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-muted" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Who GuestSquad Supports"
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
          GuestSquad is built for properties that need better guest communication coverage without adding another full-time shift. This includes independent hotels, boutique properties, resorts, serviced apartments,{" "}
          <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Airbnb and Vrbo operators
          </Link>
          , short-term rental managers, and lean multi-property teams. See the full list of{" "}
          <Link href="/services" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            services we cover
          </Link>
          , or{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            view pricing
          </Link>
          .
        </p>
      </Section>

      {/* GuestSquad at a glance */}
      <Section>
        <SectionHeading eyebrow="Quick Reference" title="GuestSquad at a glance" />
        <div className="mt-8 overflow-hidden rounded-lg border border-line">
          {[
            { label: "Company", value: "GuestSquad" },
            { label: "Parent company", value: "Raptric LLC" },
            { label: "Category", value: "Hospitality guest operations support" },
            { label: "Services", value: "Reservation answering, guest messaging, OTA inbox management, after-hours support, back-office operations" },
            { label: "Serves", value: "Independent hotels, boutique properties, resorts, serviced apartments, Airbnb hosts, Vrbo operators, short-term rental managers" },
            { label: "Coverage", value: "24/7 human guest support — every interaction handled by a trained person" },
            { label: "Email", value: SITE.email },
            { label: "Phone", value: SITE.phone },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-[180px_1fr] gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-paper" : "bg-surface"}`}>
              <span className="font-medium text-ink">{row.label}</span>
              <span className="text-ink-soft">{row.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* About FAQ */}
      <Section surface>
        <SectionHeading eyebrow="About GuestSquad" title="Common Questions About GuestSquad" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ABOUT_FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-soft">
          Ready to talk?{" "}
          <Link href="/contact" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Contact us
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <CtaSection
        title="See Where GuestSquad Fits Into Your Operation"
        description="Book a coverage review and we will map your current guest communication gaps, the channels you need covered, and the escalation rules your team would keep control of."
      />
    </>
  );
}
