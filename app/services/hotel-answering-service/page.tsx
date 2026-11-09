import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";
import { INSIGHTS } from "@/lib/insights-content";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { hotelAnsweringServiceData as d } from "@/lib/service-content";

export const metadata: Metadata = buildMetadata({
  title: "24/7 Hotel Answering Service for Hotels",
  description: d.description,
  path: "/services/hotel-answering-service",
});

const PATH = "/services/hotel-answering-service";

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
            "name": d.title,
            "description": d.description,
            "inLanguage": "en",
            "isPartOf": { "@id": `${SITE.url}#website` },
            "mainEntity": { "@id": `${SITE.url}${PATH}#service` },
            ...(d.image?.src && {
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": `${SITE.url}${d.image.src}`,
                "description": d.image.alt,
              },
            }),
            ...(d.schemaMentions && d.schemaMentions.length > 0 && {
              "mentions": d.schemaMentions,
            }),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: d.eyebrow, path: PATH },
          ]),
          faqSchema(d.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: d.eyebrow, path: PATH },
        ]}
      />

      {/* Hero */}
      <PageHero
        eyebrow="LIVE HOTEL PHONE COVERAGE"
        title={d.title}
        description="Live phone answering for reservation inquiries, front desk overflow and after-hours guest calls. Our hospitality-trained team answers in your hotel's name, follows your property procedures and handles approved requests, with clear escalation when your team needs to act."
        primaryCta="Book a Coverage Review"
        secondaryCta="See How Call Coverage Works"
        secondaryHref="#call-routing"
      >
        <p className="text-sm text-ink-muted">
          After-hours, overflow or broader coverage during the hours you agree. For independent hotels, boutique properties, inns, lodges and serviced properties.
        </p>
      </PageHero>

      {/* Definition block */}
      <div className="border-b border-line bg-surface">
        <div className="container py-10">
          <h2 className="mx-auto max-w-3xl text-lg font-semibold text-ink mb-4">
            {d.introHeading}
          </h2>
          {d.answerBlock.split("\n\n").map((para, i) => (
            <p key={i} className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft mt-3 first:mt-0">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[280px] overflow-hidden border-b border-line md:h-[380px]">
        <Image
          src={d.image.src}
          alt={d.image.alt}
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Section 1 — Phone-service scope */}
      <Section>
        <SectionHeading
          eyebrow="What's Included"
          title={d.includesTitle ?? "Coverage built for hospitality, not call volume."}
          description="Decide which calls should come to Guest Squad and what the team can do for each type. We agree the handling, system access and escalation rules before coverage begins."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {d.includes.map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-7">
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Scope links */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Explore hotel reservation support", href: "/services/reservation-support" },
            { label: "Plan front desk overflow support", href: "/resources/hotel-front-desk-overflow-support" },
            { label: "Explore after-hours hotel support", href: "/services/after-hours-support" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-3 text-sm text-gold-dark hover:bg-surface transition-colors"
            >
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              {l.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-line bg-paper p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Scope note</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            Property attendance, management exceptions and decisions outside the approved instructions remain with your designated team.
          </p>
        </div>
        {d.examples && (
          <div className="mt-6 rounded-lg border border-line bg-paper p-7">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Illustrative call-handling example</p>
            <p className="text-sm leading-relaxed text-ink-soft">{d.examples}</p>
          </div>
        )}
      </Section>

      {/* Section 3 — Call routing */}
      <Section id="call-routing">
        <SectionHeading
          eyebrow="Call Routing"
          title="How calls reach your hotel answering team"
          description="We review your existing telephone setup and agree when calls should reach Guest Squad. Available routing depends on your provider and configuration, so the agreed behavior is checked before guest calls are forwarded."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="pb-3 pr-6 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Coverage arrangement</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">How routing can work</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="py-4 pr-6 font-medium text-ink align-top">After-hours coverage</td>
                <td className="py-4 text-ink-soft">Calls route to Guest Squad during the hours agreed for your property.</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-medium text-ink align-top">Busy or unanswered calls</td>
                <td className="py-4 text-ink-soft">Your front desk has the opportunity to answer first, with eligible calls forwarded under supported busy-line or no-answer rules.</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-medium text-ink align-top">Broader answering coverage</td>
                <td className="py-4 text-ink-soft">Selected incoming calls route to Guest Squad throughout the agreed coverage window.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-medium text-ink">Your greeting and property instructions</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Once connected, agents answer using your hotel's approved greeting and work from your property brief. They assist with the call, take a permitted action or explain the next step when your team's involvement is required.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <h3 className="text-base font-medium text-ink">A clear route when your team needs to act</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Define who receives transfers, urgent requests and messages. The setup includes what happens when a transfer fails or a primary contact is unavailable, so the next action follows an agreed process.
            </p>
          </div>
        </div>

        {/* Simple flow diagram */}
        <div className="mt-10 overflow-x-auto">
          <div className="mx-auto flex min-w-[300px] max-w-sm flex-col items-center gap-0">
            {[
              "Existing hotel telephone line",
              "Agreed forwarding or routing rules",
              "Guest Squad answers with your greeting",
              "Approved handling, message or escalation",
            ].map((step, i, arr) => (
              <div key={step} className="flex w-full flex-col items-center">
                <div className="w-full rounded-lg border border-line bg-paper px-5 py-3 text-center text-sm text-ink">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <div className="flex h-8 items-center justify-center text-ink-muted">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-line bg-paper p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Setup note</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            Confirm normal answering, forwarding, transfers and backup handling with your telephone provider as part of setup. Changes to the current number or provider, if any, depend on the configuration reviewed.
          </p>
        </div>
      </Section>

      {/* Section 4 — Briefing, access and onboarding */}
      <Section surface>
        <SectionHeading
          eyebrow="Setup"
          title="Prepared around your property before calls go live"
          description="Useful call handling depends on accurate information and clear authority. We agree the property brief, permitted actions and handover process before coverage starts."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Document the property brief",
              body: "Confirm room information, amenities, policies, arrival instructions, your preferred tone and the contacts responsible for exceptions. Include how updates reach the team.",
            },
            {
              title: "Define reservation access",
              body: "Where booking handling is included, review the supported system and permissions needed to check information or complete an action. Rate exceptions and discretionary decisions stay within your approval rules.",
            },
            {
              title: "Plan handling without booking access",
              body: "If agents cannot access the reservation system, agree what information they can quote, which details to capture and who receives the booking request. Calls can still be scoped for information, intake and routing where the operating requirements are met.",
            },
            {
              title: "Review routing and representative calls",
              body: "Check the greeting, forwarding behavior, transfers and escalation paths. Walk through common questions and exceptions so both teams understand the service boundaries.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-7">
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-line bg-paper p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">On-site responsibility</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            Urgent safety or security concerns follow the property's approved emergency and escalation procedures. Remote call coverage does not replace emergency services or required on-site responsibilities.
          </p>
        </div>
      </Section>

      {/* Handles / Escalates */}
      {(d.handles || d.escalates) && (
        <Section compact>
          <div className="grid gap-10 md:grid-cols-2">
            {d.handles && d.handles.length > 0 && (
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Calls we handle</p>
                <ul className="flex flex-col gap-2">
                  {d.handles.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.escalates && d.escalates.length > 0 && (
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">We escalate to your team</p>
                <ul className="flex flex-col gap-2">
                  {d.escalates.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Section 5 — Visibility and proof */}
      <Section>
        <SectionHeading
          eyebrow="Visibility"
          title="Give your team the context to follow through"
          description="A useful handover includes what the caller needed, what was handled and what remains outstanding. We agree how call details, messages and escalations are recorded and delivered to your team."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-sm leading-relaxed text-ink-soft">
              Reporting format and review arrangements are scoped around the service. Confirm the information your property needs, including requests awaiting approval or local action.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Record fields</p>
            <ul className="flex flex-col gap-2">
              {[
                "Call purpose",
                "Relevant property context",
                "Action taken",
                "Transfer or escalation contact",
                "Current status",
                "Next action",
              ].map((field) => (
                <li key={field} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                  {field}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialsBlock />

      {/* Mid-page CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="whitespace-nowrap text-base font-medium text-paper">Ready to close your coverage gap?</p>
            <p className="mt-1 whitespace-nowrap text-sm text-paper/60">Book a review or start with a 2-week no-obligation pilot.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="sm" ctaLocation="service_mid_cta">
              Book a Coverage Review
            </CoverageReviewButton>
            <ButtonLink href="/pilot" variant="outline" size="sm" className="border-paper/25 text-paper hover:border-paper/60">
              Request Pilot Review
            </ButtonLink>
          </div>
        </div>
      </div>


      {/* Pricing */}
      <Section surface>
        <SectionHeading eyebrow="Pricing" title="Hotel answering service pricing" />
        <div className="mt-8 max-w-2xl">
          <p className="text-sm leading-relaxed text-ink-soft">
            Pricing depends on call volume, coverage hours, the number of properties and the actions agents need to perform. Telephone routing, booking access and escalation requirements also help define the scope.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Bring your current coverage gap to a review. We can discuss the hours and call types involved before recommending an arrangement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/pricing" variant="outline" size="sm">
              How pricing is scoped
            </ButtonLink>
            <Link
              href="/resources/hotel-answering-service-cost"
              className="text-sm text-gold-dark underline underline-offset-4 hover:text-gold self-center"
            >
              Hotel answering service cost guide
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-[#F7F5F2]">
        <SectionHeading eyebrow="Questions" title={d.faqTitle ?? "Common questions about this service."} />
        <div className="mt-8">
          <FaqAccordion items={d.faqs} />
        </div>
      </Section>

      {/* Keep Exploring */}
      <div className="border-t border-line py-14">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Keep Exploring</p>
            <h2 className="mt-1.5 text-2xl font-medium text-ink">Explore what fits your situation.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Compare options */}
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
            {/* Research & Insights */}
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
            {/* Tools & Resources */}
            {d.assetLinks && d.assetLinks.length > 0 && (
              <div className="rounded-lg border border-line bg-paper p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Tools &amp; Resources</p>
                <ul className="flex flex-col gap-3">
                  {d.assetLinks.slice(0, 2).map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                        {a.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Broader service */}
            <div className="rounded-lg border border-line bg-paper p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Full Reception Coverage</p>
              <p className="mb-3 text-sm leading-relaxed text-ink-soft">
                If you need reception support across calls, messages and arrivals, ask about the Digital Front Desk service.
              </p>
              <Link
                href="/services/digital-front-desk"
                className="group flex items-start gap-2 text-sm text-gold-dark hover:text-gold transition-colors"
              >
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Explore Digital Front Desk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <CtaSection title={d.ctaTitle} description={d.ctaDescription} />
    </>
  );
}
