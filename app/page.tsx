import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { Section, SectionHeading } from "@/components/site/section";
import { PlatformLogos } from "@/components/site/platform-logos";
import { CtaSection } from "@/components/site/cta-section";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = buildMetadata({
  title: "Hospitality Call Center & Guest Support Operations",
  description:
    "Hospitality call center for hotels, hotel groups and vacation rentals. Guest support operations: calls, reservations, messages and OTA inboxes, 24/7.",
  path: "",
});

const HOME_FAQS = [
  {
    q: "Is Guest Squad a call center?",
    a: "Yes, one built for hospitality. Our team handles guest calls, reservation enquiries and agreed inboxes using your systems and procedures.",
  },
  {
    q: "How does Guest Squad learn our property's procedures and tone?",
    a: "Before any agent handles a guest interaction, we run a property briefing covering your rates, policies, escalation rules, PMS access and how you talk to guests. Agents follow your procedures, not a generic script. Coverage starts once your brief, system access and escalation contacts are agreed.",
  },
  {
    q: "What happens if a guest issue needs someone on-site?",
    a: "Every property brief includes an escalation path. If something needs hands-on attention, the agent contacts the right person at your property the way you have specified. We do not make on-site visits.",
  },
  {
    q: "Can we start with one channel and expand later?",
    a: "Yes. Many properties start with after-hours phone coverage or OTA inbox management, then add channels or extend hours. You do not have to cover everything on day one.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "Plans are month-to-month with 30 days' notice to cancel. Setup fees depend on the property and are confirmed in the scoped proposal.",
  },
  {
    q: "How do we know coverage is working?",
    a: "You receive activity reports and handover notes covering call and message volume, outcomes and escalations, so you can see what was handled and where gaps remain.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Hospitality Call Center & Guest Support Operations | Guest Squad",
            description: "Hospitality call center for hotels, hotel groups and vacation rentals. Guest support operations: calls, reservations, messages and OTA inboxes, 24/7.",
            path: "",
            primaryImageUrl: "https://guestsquad.com/brand-assets/guestsquad-favicon-official.svg",
            primaryImageAlt: "Guest Squad logo",
            about: { "@id": "https://guestsquad.com/#organization" },
            mainEntityId: "https://guestsquad.com/#organization",
            audienceTypes: ["Independent Hotel","Boutique Hotel","Inn","Resort","Serviced Apartment","Aparthotel","Airbnb Host","Vrbo Host","Short-Term Rental Operator","Vacation Rental Operator","Vacation Rental Property Manager"],
            mentions: [
              { "@type": "Organization", "name": "Booking.com" },
              { "@type": "Organization", "name": "Expedia" },
              { "@type": "Organization", "name": "Airbnb" },
              { "@type": "Organization", "name": "Vrbo" },
              { "@type": "Organization", "name": "Hotels.com" },
              { "@type": "Thing", "name": "Cloudbeds" },
              { "@type": "Thing", "name": "Mews" },
              { "@type": "Thing", "name": "Opera PMS" },
              { "@type": "Thing", "name": "Guesty" },
              { "@type": "Accommodation", "name": "Hotel" },
              { "@type": "Accommodation", "name": "Boutique Hotel" },
              { "@type": "Accommodation", "name": "Independent Hotel" },
              { "@type": "Accommodation", "name": "Serviced Apartment" },
              { "@type": "Accommodation", "name": "Vacation Rental" },
              { "@type": "Accommodation", "name": "Resort" },
              { "@type": "Thing", "name": "Hotel Answering Service" },
              { "@type": "Thing", "name": "Hotel Guest Operations" },
              { "@type": "Thing", "name": "OTA Inbox Management" },
              { "@type": "Thing", "name": "After-Hours Hotel Support" },
              { "@type": "Thing", "name": "Hotel Front Desk Coverage" },
            ],
          }),
          faqSchema(HOME_FAQS),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-line bg-paper">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-22">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Premium hospitality call center
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Guest Support Operations for Hotels and Vacation Rentals
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              Trained people answer guest calls, handle reservation enquiries and manage agreed inboxes using your property&apos;s systems and procedures.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CoverageReviewButton variant="gold" size="lg" ctaLocation="homepage_hero">
                Book a Coverage Review
              </CoverageReviewButton>
              <a
                href="#offers"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-surface"
              >
                Explore Our Services
              </a>
            </div>
            <blockquote className="mt-8 border-l-2 border-gold/40 pl-4">
              <p className="text-sm leading-relaxed text-ink-soft italic">
                &ldquo;We were losing reservation calls every night after 10pm. Within the first week of coverage it was clear it was working.&rdquo;
              </p>
              <footer className="mt-2 text-xs text-ink-muted">General Manager, 48-room boutique hotel, Southeast US</footer>
            </blockquote>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface md:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?w=750&h=938&fit=crop&crop=entropy&q=75&auto=format"
              alt="Lively boutique hotel lobby and reception desk with staff at the front desk"
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section id="about-guest-squad" className="border-b border-line bg-surface">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-medium text-ink md:text-2xl">
              A hospitality call center for hotels and vacation rentals
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Our hospitality contact center provides guest communication services through your existing phone, messaging and booking systems. Guest Squad covers the guest calls, reservation enquiries and messages your team cannot take, at any hour you choose. Coverage runs under your brand, to your procedures, and escalates to your people the way you set.
            </p>
          </div>
        </div>
      </section>

      {/* THREE WAYS TO COVER YOUR GUESTS */}
      <Section id="offers">
        <SectionHeading
          eyebrow="Our Services"
          title="Three ways to cover your guests."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* For independent hotels */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">For independent hotels</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/hotel-answering-service" className="hover:text-gold transition-colors">
                Hotel Answering Service
              </Link>
            </h2>
            <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">
              Live phone coverage when your front desk is closed or busy. Our{" "}
              <Link href="/services/hotel-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">hotel answering service</Link>{" "}
              handles front-desk overflow, room and stay enquiries, late arrivals, guest requests, maintenance escalations and shift handovers. Guest messaging and OTA inbox support are included.
            </p>
            <p className="mt-4 text-sm font-medium text-ink">From US$149/month</p>
            <p className="text-xs text-ink-muted">One hotel · after-hours or overflow coverage · 24/7 quoted</p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="sm" ctaLocation="homepage_hotel_card">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
          </div>

          {/* For hotel groups */}
          <div className="flex flex-col rounded-lg border border-gold/40 bg-paper p-7 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">For hotel groups</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/central-reservations" className="hover:text-gold transition-colors">
                Hotel Reservation Call Center
              </Link>
            </h2>
            <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">
              One reservations team for several properties. Our{" "}
              <Link href="/services/central-reservations" className="text-gold-dark underline underline-offset-2 hover:text-gold">hotel reservation call center</Link>{" "}
              handles reservation enquiries, property selection and availability, approved quotes and booking changes, with property-specific booking rules and reporting for each property.
            </p>
            <p className="mt-4 text-sm font-medium text-ink">From US$299/month</p>
            <p className="text-xs text-ink-muted">Two-property reference configuration · after-hours · 24/7 and additional properties quoted</p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="sm" ctaLocation="homepage_hotel_groups_card">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
          </div>

          {/* For vacation rentals */}
          <div className="flex flex-col rounded-lg border border-line bg-paper p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">For vacation rentals</p>
            <h2 className="mt-2 text-lg font-medium text-ink">
              <Link href="/services/vacation-rental-answering-service" className="hover:text-gold transition-colors">
                Vacation Rental Answering Service
              </Link>
            </h2>
            <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">
              Listing-specific guest support for professional short-term rental portfolios. Our{" "}
              <Link href="/services/vacation-rental-answering-service" className="text-gold-dark underline underline-offset-2 hover:text-gold">vacation rental answering service</Link>{" "}
              covers live guest calls, Airbnb and Vrbo messages, listing and house-rule questions, self check-in help, and cleaner, turnover and maintenance coordination.
            </p>
            <p className="mt-4 text-sm font-medium text-ink">From US$99/month</p>
            <p className="text-xs text-ink-muted">One listing · 24/7 included · live phone answering and Airbnb and Vrbo messaging</p>
            <div className="mt-5">
              <CoverageReviewButton variant="gold" size="sm" ctaLocation="homepage_vr_card">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
          </div>

        </div>
      </Section>

      {/* CHOOSE YOUR HOURS */}
      <Section id="coverage" surface>
        <SectionHeading
          eyebrow="Coverage Options"
          title="Choose your hours."
          align="center"
          className="mx-auto"
        />
        <p className="mt-3 text-center text-sm text-ink-soft">
          Every service can run at any hour. Starting prices cover the hours listed on each plan, and wider coverage is quoted.
        </p>
        <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden">
          {[
            { label: "After-hours", line: "Evenings and overnight when your desk is closed." },
            { label: "Weekends",    line: "Saturday and Sunday with reduced or no front-desk staffing." },
            { label: "Overflow",    line: "When your team is at capacity or the line is busy." },
            { label: "24 / 7",      line: "Continuous coverage across all hours, within the agreed scope." },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2 bg-paper px-6 py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">{item.label}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{item.line}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-ink-muted">
          Hours, channels and permitted actions are agreed during setup. Work outside the agreed allowance is charged at the rate in your proposal.
        </p>
        <div className="mt-7 flex justify-center">
          <CoverageReviewButton variant="gold" ctaLocation="homepage_coverage">
            Discuss Your Coverage Needs
          </CoverageReviewButton>
        </div>
      </Section>

      {/* HOW THE TEAM WORKS */}
      <Section id="how-we-work">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl shadow-md lg:block">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85"
              alt="Hotel front desk team managing guest reservations and calls"
              fill
              loading="lazy"
              sizes="50vw"
              unoptimized
              className="object-cover object-center"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              How the team works inside your operation
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              Your systems. Your procedures. Our people.
            </h2>
            <div className="mt-8 flex flex-col divide-y divide-line">
              {[
                {
                  label: "Your systems.",
                  body: "Agents work in your PMS, inbox and booking tools, so there is no parallel platform or duplicate data entry.",
                },
                {
                  label: "Your procedures.",
                  body: "Every property is briefed before coverage starts. Agents follow your greeting, policies and escalation rules.",
                },
                {
                  label: "Scope agreed before go-live.",
                  body: "You define which calls are handled, which actions are permitted and when your team is contacted.",
                },
                {
                  label: "Hospitality-trained.",
                  body: "Teams are briefed on rate structures, check-in procedures and OTA conventions.",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5 py-5">
                  <span className="mt-2 h-3.5 w-0.5 shrink-0 rounded-full bg-gold-dark" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{item.label}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* HOW COVERAGE STARTS */}
      <Section id="how-it-works" surface>
        <SectionHeading
          eyebrow="Getting started"
          title="How coverage starts."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { n: "01", title: "Property brief", body: "We cover your rates, policies, escalation rules and how you talk to guests." },
            { n: "02", title: "System access", body: "You give us access to your PMS, inbox and booking tools." },
            { n: "03", title: "Go-live", body: "Coverage starts once your brief, system access and escalation contacts are agreed." },
          ].map((step) => (
            <div key={step.n} className="flex gap-4 rounded-lg border border-line bg-paper p-6">
              <span className="mt-0.5 text-xs font-semibold tabular-nums text-ink-muted">{step.n}</span>
              <div>
                <p className="text-sm font-medium text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <CoverageReviewButton variant="gold" ctaLocation="homepage_how_it_works">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </Section>

      {/* PLATFORM LOGOS */}
      <PlatformLogos />

      {/* TESTIMONIALS */}
      <Section id="reviews" surface>
        <SectionHeading
          eyebrow="What our clients say"
          title="Hotels and rental operators we work with."
          align="center"
          className="mx-auto"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              quote: "We were losing reservation calls every night after 10pm. Within the first week of coverage it was clear it was working.",
              attr: "General Manager, 48-room boutique hotel",
              location: "Southeast US",
            },
            {
              quote: "Our OTA response times were hurting our Booking.com ranking. Guest Squad took over the inbox and the response window dropped significantly.",
              attr: "Owner-operator, serviced apartment portfolio",
              location: "UK",
            },
          ].map((item) => (
            <div key={item.attr} className="rounded-xl border border-line bg-paper p-5 shadow-sm">
              <svg className="h-5 w-5 text-gold/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.quote}</p>
              <div className="mt-4 border-t border-line pt-3">
                <p className="text-xs font-semibold text-ink">{item.attr}</p>
                <p className="mt-0.5 text-xs text-ink-soft">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://www.trustpilot.com/review/guestsquad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold"
          >
            Read our reviews on Trustpilot
          </a>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="mx-auto max-w-xl rounded-xl border border-line bg-paper p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
          <h2 className="mt-3 text-2xl font-medium text-ink">
            Flexible Guest Support. Pricing Built Around Your Property.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            No two properties operate the same way. Your coverage is tailored to the hours, guest interactions, communication channels and responsibilities you need us to manage.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Start with a pilot to experience how Guest Squad works with your property. We&apos;ll discuss your requirements, agree on the scope and provide transparent pricing before any service begins.
          </p>
          <div className="mt-6">
            <CoverageReviewButton variant="gold" ctaLocation="homepage-pricing" size="default">
              Explore a Pilot ↗
            </CoverageReviewButton>
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            ✓ Tailored coverage &nbsp;·&nbsp; ✓ Clear proposal &nbsp;·&nbsp; ✓ No obligation to continue
          </p>
        </div>
      </Section>

      {/* FAQ + STICKY */}
      <Section id="guides" surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* Left column: FAQ only */}
          <div id="faq" className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Common Questions</p>
            <h2 className="text-2xl font-medium text-ink">Questions hotels and rental operators ask.</h2>
            <div className="mt-6">
              <FaqAccordion items={HOME_FAQS} defaultOpenCount={2} />
            </div>
          </div>

          {/* Sticky card */}
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Not sure which service fits?
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Tell us about your property and coverage gaps. We&apos;ll identify the right service and coverage hours for your operation.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="homepage_guides_sticky" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">Guides</p>
              <div className="flex flex-col divide-y divide-line">
                {[
                  { label: "Answering service cost", detail: "What coverage costs and what drives the price.", href: "/resources/hotel-answering-service-cost" },
                  { label: "Human vs AI answering", detail: "Where each one fits.", href: "/resources/hotel-answering-service-vs-ai-voice" },
                  { label: "Hotel missed call revenue calculator", detail: "Estimate what unanswered calls cost you.", href: "/resources/missed-booking-calculator" },
                ].map((guide) => (
                  <Link key={guide.href} href={guide.href} className="flex flex-col py-3 hover:opacity-80 transition-opacity">
                    <p className="text-sm text-gold-dark underline underline-offset-2">{guide.label}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{guide.detail}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">Related services</p>
              <div className="flex flex-col gap-2">
                <Link href="/services/after-hours-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">After-hours hotel front desk support</Link>
                <Link href="/services/ota-inbox-management" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">OTA inbox management</Link>
                <Link href="/services/guest-messaging" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Hotel guest messaging</Link>
                <Link href="/services/airbnb-guest-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Airbnb guest services</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
