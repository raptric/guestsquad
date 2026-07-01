import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Metrics } from "@/components/site/metrics";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About GuestSquad | Hospitality Guest Operations Company",
  description:
    "GuestSquad was built to give independent hotels, resorts, and short-term rental operators the guest-operations coverage that larger brands take for granted.",
  path: "/about",
});

const ABOUT_FAQS = [
  {
    q: "Who operates GuestSquad?",
    a: "GuestSquad is a hospitality guest operations service operated by Raptric LLC. The team is built exclusively for guest-facing operations: reservation calls, messaging, OTA inboxes, after-hours coverage, and back-office support for hotels, boutique properties, and short-term rental operators.",
  },
  {
    q: "How are GuestSquad agents trained?",
    a: "All agents hold prior hospitality or customer service certification before joining. They then complete GuestSquad's own pre-live training covering PMS workflows, OTA platforms, escalation protocols, and brand voice standards. No agent handles a live guest interaction until they have passed our internal certification and completed a supervised shadowing period.",
  },
  {
    q: "How does GuestSquad protect guest and booking data?",
    a: "Guest data is handled in line with your property's own policies, which are the source of truth. Beyond that, GuestSquad follows international data-handling standards: information is accessed on a need-to-know basis, not stored beyond operational requirements, and never shared across client properties.",
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
        title="Built for properties that can't staff every hour, on every channel."
        description="GuestSquad exists because independent hotels and small operators were being asked to compete with brands that have round-the-clock reservations teams, without the headcount to do it."
      />

      {/* Founder story */}
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
              eyebrow="How It Started"
              title="A frequent traveller noticed the same gap, everywhere."
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Dozens of stays across independent hotels on three continents pointed to the same pattern. The room was right. The property was exactly what the guest had chosen it for. But the phone rang out at 11pm, the OTA message sat unanswered until morning, and the check-in question on a Sunday got a generic auto-reply.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The problem was never the property. It was the gap between when guests needed a real answer and when a real person was available to give one. Independent hotels, boutique properties, and short-term rental operators were competing with brands that had dedicated reservations teams, 24-hour coverage, and dozens of staff managing OTA inboxes. Most small operators had one person at the desk and a voicemail box.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              GuestSquad was built to close that gap: not with software that pretends to be human, but with trained people who work inside the same systems your property already uses, covering the hours and channels your team cannot.
            </p>
          </div>
        </div>
      </Section>

      {/* Support not replacement */}
      <Section surface>
        <SectionHeading eyebrow="Our Approach" title="Support, not replacement." align="center" className="mx-auto" />
        <div className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          GuestSquad is built to extend your front desk, not replace it. We handle overflow, after-hours, and the
          channels your on-site team does not have time to monitor, so the people you have hired can focus on the
          guests standing in front of them. See how that compares to{" "}
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
          <Metrics />
        </div>
      </Section>

      {/* Agent training */}
      <Section>
        <SectionHeading
          eyebrow="Agent Standards"
          title="Trained before they go live. Reviewed after every shift."
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Every GuestSquad agent holds prior certification in hospitality, guest services, or a related discipline before joining the team. That is the baseline requirement. What follows is our own pre-live training program designed around the specific operations we cover.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Pre-hire certification",
              body: "All agents hold recognized hospitality or customer-service certification before they are considered. Industry background is a requirement, not a preference.",
            },
            {
              title: "Internal training program",
              body: "Before going live, every agent completes our structured training: PMS workflows, OTA extranets, escalation protocols, and brand voice standards specific to hospitality.",
            },
            {
              title: "Supervised shadowing",
              body: "No agent handles a live guest interaction until they have completed a supervised shadowing period and passed our internal certification review.",
            },
            {
              title: "Property-specific briefing",
              body: "Agents are briefed on each property they support: your rates, policies, brand voice, and the questions your guests actually ask, before the first interaction.",
            },
            {
              title: "Ongoing updates",
              body: "Training is not one-time. Agents are updated when properties change policies, rates, or seasonal procedures, so accuracy does not drift between onboarding and peak season.",
            },
            {
              title: "Escalation discipline",
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
          title="Every interaction is logged. A percentage is reviewed every week."
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Interaction logging",
                body: "Every call and message handled by GuestSquad is logged, tagged by type and outcome, and available for your team to review at any time. Nothing happens in your guest channels that you cannot see.",
              },
              {
                title: "Weekly quality review",
                body: "A percentage of every agent's interactions are reviewed weekly against a structured scorecard covering response accuracy, tone and brand alignment, escalation judgment, and resolution time.",
              },
              {
                title: "Debrief and correction",
                body: "When an interaction falls below standard, it is flagged, debriefed with the agent, and corrected before the next shift. Issues are not left to recur.",
              },
              {
                title: "Client reporting",
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
              title="Your property's policies are the source of truth."
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              GuestSquad agents operate within the data-handling rules your property has established for its guests. What can be confirmed over the phone, what requires guest verification, and what cannot be shared: your policies define this, and we follow them. We do not override your data rules, supplement them with assumptions, or apply policies from other client properties.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Beyond your property rules, GuestSquad follows international data-handling standards as baseline practice. Guest information is accessed only on a need-to-know basis by agents actively covering your property, is not stored beyond operational requirements, and is never shared across client properties under any circumstance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Access to your PMS, OTA accounts, and guest data is provisioned by you during onboarding and can be revoked by you at any time. GuestSquad does not retain data access after an engagement ends.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { title: "Hotel policy first", body: "Your property's data and privacy policies are the operating standard. Agent behavior is trained to follow them, not to apply GuestSquad defaults in their place." },
              { title: "Need-to-know access", body: "Agents access guest information only for the interactions they are actively handling. Broader data browsing is not part of the workflow." },
              { title: "No cross-property data sharing", body: "Guest and booking information from your property is never visible to agents covering other properties, and is never used for any purpose beyond your active engagement." },
              { title: "Access you control", body: "System credentials are provisioned by your team and revoked by your team. GuestSquad does not retain access to your systems after an engagement concludes." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who we serve */}
      <Section surface>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for hotels, boutique properties, resorts, and short-term rental operators."
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
          GuestSquad works with independent hotels, boutique properties, resorts, serviced apartments, and{" "}
          <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Airbnb and Vrbo operators
          </Link>
          , anywhere a guest call or message cannot always reach a person fast enough. Whether that is one boutique property or a small portfolio of short-term rental units, the operating model is the same: a dedicated, trained team working inside your existing PMS, OTA accounts, and phone system, rather than asking you to adopt new software or hand over control of your guest relationships. See the full list of{" "}
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

      {/* About FAQ */}
      <Section>
        <SectionHeading eyebrow="About GuestSquad" title="Questions about how we operate." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ABOUT_FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
