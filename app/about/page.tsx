import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Metrics } from "@/components/site/metrics";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About GuestSquad | Hospitality Guest Operations Company",
  description:
    "GuestSquad was built to give independent hotels, resorts, and short-term rental operators the guest-operations coverage that larger brands take for granted.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <PageHero
        eyebrow="About GuestSquad"
        title="Built for properties that can't staff every hour, on every channel."
        description="GuestSquad exists because independent hotels and small operators were being asked to compete with brands that have round-the-clock reservations teams, without the headcount to do it."
      />

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
              title="Guest expectations didn't wait for your staffing budget."
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Guests now expect a reply within minutes, on whichever channel
              they chose to reach out on, at 2pm or 2am. Independent hotels,
              boutique properties, and short-term rental operators rarely have
              the headcount to meet that expectation around the clock.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              GuestSquad was built specifically for that gap. Not a
              generic call center retrofitted for hospitality, but a guest
              operations team trained on hotel systems, OTA workflows, and the
              tone independent properties actually want their guests to hear.
            </p>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Our Approach" title="Support, not replacement." align="center" className="mx-auto" />
        <div className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
          We&rsquo;re explicit about this: GuestSquad is built to extend your
          front desk, not replace it. We handle overflow, after-hours, and
          the channels your on-site team doesn&rsquo;t have time to monitor, so
          the people you&rsquo;ve hired can focus on the guests standing in front
          of them. See how that compares to{" "}
          <Link href="/resources/hotel-answering-service-vs-ai-voice" className="underline-offset-4 hover:text-gold-dark hover:underline">
            AI voice agents
          </Link>{" "}
          and{" "}
          <Link href="/resources/hotel-answering-service-vs-call-center" className="underline-offset-4 hover:text-gold-dark hover:underline">
            generic call centers
          </Link>
          .
        </div>
        <div className="mt-12">
          <Metrics />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for hotels, boutique properties, resorts, and short-term rental operators."
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
          GuestSquad works with independent hotels, boutique properties, resorts,
          serviced apartments, and{" "}
          <Link href="/services/vacation-rental-answering-service" className="underline-offset-4 hover:text-gold-dark hover:underline">
            Airbnb or Vrbo operators
          </Link>
          , anywhere a guest&rsquo;s
          call or message can&rsquo;t always reach a person fast enough. Whether
          that&rsquo;s one boutique property or a small portfolio of short-term
          rental units, the operating model is the same: a dedicated, trained
          team works inside your existing PMS, OTA accounts, and phone system,
          rather than asking you to adopt new software or hand over control of
          your guest relationships. See the full list of{" "}
          <Link href="/services" className="underline-offset-4 hover:text-gold-dark hover:underline">
            services we cover
          </Link>
          , or{" "}
          <Link href="/pricing" className="underline-offset-4 hover:text-gold-dark hover:underline">
            view pricing
          </Link>
          .
        </p>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Our Standard"
          title="How agents are trained and quality-assured."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-sm font-medium text-ink">Property-specific briefing</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Before an agent handles a single guest message, they&rsquo;re briefed on
              your rates, policies, brand voice, escalation preferences, and the
              questions your guests actually ask.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-sm font-medium text-ink">Hospitality-trained, not generic</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Agents come from a hospitality and guest-service background, not a
              generic call-center pool shared across unrelated industries.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-sm font-medium text-ink">Logged, reviewable work</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Every call and message is logged. You can review what was said,
              what was decided, and what was escalated, so nothing happens in your
              guest channels that you can&rsquo;t see.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-sm font-medium text-ink">Clear escalation rules</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              We agree on escalation rules with you before going live: what
              gets handled directly, and what gets routed straight to your team.
            </p>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
