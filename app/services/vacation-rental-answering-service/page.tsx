import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Vacation Rental Answering Service with 24/7 Guest Support",
  description:
    "Vacation rental answering service: trained people answer guest calls and Airbnb and Vrbo messages 24/7, from late check-ins to lockouts. From US$99/month.",
  path: "/services/vacation-rental-answering-service",
});

const PATH = "/services/vacation-rental-answering-service";

const FAQS = [
  {
    q: "Do you answer guest phone calls 24/7?",
    a: "Yes. The US$99/month plan for one listing includes live phone answering with 24/7 coverage, subject to scope confirmation. You can also choose after-hours or overflow coverage. Additional listings are quoted.",
  },
  {
    q: "What should I look for in a phone answering service for vacation rentals?",
    a: "Live people answering, not only voicemail or a bot. A written brief for each listing. A clear escalation path with names and wait times. Coverage that matches your guests' time zones. Call logs and handover notes. A price that says which hours and listings it covers.",
  },
  {
    q: "Can you handle access emergencies when I am not available?",
    a: "Access issues follow a procedure per listing: troubleshooting steps, approved alternatives and your designated local contact. You are notified of anything that cannot be resolved remotely.",
  },
  {
    q: "How does call forwarding differ from inbox monitoring?",
    a: "Forwarding sends your phone calls to our team. Inbox monitoring means we have agreed access to your Airbnb, Vrbo or PMS inboxes and reply there. Each is set up separately.",
  },
  {
    q: "Which OTA channels do you support?",
    a: "Airbnb and Vrbo are the primary channels. Booking.com, direct messaging and others are confirmed during scoping.",
  },
  {
    q: "What property management systems do you work in?",
    a: "Guesty, Hostaway, Lodgify, Hostfully, Hospitable, OwnerRez and iGMS. For other systems, we review access and workflow options during setup.",
  },
  {
    q: "Can you coordinate with our cleaner or turnover team?",
    a: "Yes, within the agreed procedure. We contact the cleaner, confirm they have acknowledged and tell you if they cannot be reached in the agreed window.",
  },
  {
    q: "Do you handle multiple listings?",
    a: "Yes. Each listing has its own brief and approved contacts. Scope is agreed listing by listing before handling begins.",
  },
  {
    q: "What happens with booking disputes or refund requests?",
    a: "They are flagged to you with full context. Guest Squad does not negotiate disputes, approve refunds or represent the host in OTA resolution.",
  },
];

const WORKFLOWS = [
  {
    label: "Guest calls or messages on Airbnb, Vrbo or direct",
    trigger: "A guest calls or messages on a supported channel.",
    does: "Responds using the listing's instructions and approved information.",
    boundary: "A booking dispute or refund request comes in. It goes to you with full context.",
  },
  {
    label: "Listing and house-rule questions",
    trigger: "A guest asks about parking, Wi-Fi, pets or check-in time.",
    does: "Answers from the listing brief and confirms check-in instructions.",
    boundary: "A rule exception is requested. It goes to you documented. No exceptions without approval.",
  },
  {
    label: "Self check-in and access assistance",
    trigger: "A lockbox will not open, a keypad code fails or the guest cannot get in.",
    does: "Troubleshoots with the listing's access procedure and approved alternatives.",
    boundary: "It cannot be fixed remotely. Your designated local contact is called and the guest is updated.",
  },
  {
    label: "Cleaner and turnover coordination",
    trigger: "A late checkout, early check-in request or special preparation.",
    does: "Contacts the cleaner or turnover team per the agreed procedure and updates the guest on timing.",
    boundary: "The cleaner does not acknowledge. You are told before the next check-in window.",
  },
  {
    label: "Local maintenance coordination",
    trigger: "A guest reports a broken appliance, plumbing issue or other fault.",
    does: "Logs the issue, contacts your designated maintenance contact and updates the guest.",
    boundary: "There is a safety or habitability concern. You are alerted, and emergency services are called if required.",
  },
  {
    label: "Listing-level issue tracking",
    trigger: "An unresolved item, repeated question or complaint during a stay.",
    does: "Records it against the listing and includes it in the handover notes with status and actions taken.",
    boundary: "The same issue recurs or passes an agreed threshold. You get a summary directly.",
  },
];

export default function VacationRentalAnsweringServicePage() {
  return (
    <>
      <ServicePageViewTracker serviceName="vacation-rental-answering-service" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}${PATH}#service`,
            name: "Vacation Rental Answering Service",
            serviceType: "Vacation Rental Answering Service",
            description:
              "Vacation rental answering service: trained people answer guest calls and Airbnb and Vrbo messages 24/7, from late check-ins to lockouts. From US$99/month.",
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
              price: "99",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "99",
                priceCurrency: "USD",
                unitCode: "MON",
                description: "One listing, 24/7 coverage included, subject to scope confirmation",
              },
              availability: "https://schema.org/InStock",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            },
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
            "@id": `${SITE.url}${PATH}#webpage`,
            url: `${SITE.url}${PATH}`,
            name: "Vacation Rental Answering Service | 24/7 Guest Calls",
            description:
              "Vacation rental answering service: trained people answer guest calls and Airbnb and Vrbo messages 24/7, from late check-ins to lockouts. From US$99/month.",
            inLanguage: "en",
            isPartOf: { "@id": `${SITE.url}/#website` },
            mainEntity: { "@id": `${SITE.url}${PATH}#service` },
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
              Premium Vacation Rental Call Center
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              Vacation Rental Answering Service: 24/7 Guest Support
            </h1>
            <p className="mt-5 max-w-lg text-base font-medium leading-snug text-ink">
              Guest Support Operations for STR operators: live guest calls and agreed messaging channels covered 24/7, listing by listing.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
              Guest Squad is a vacation rental answering service. Trained people answer your guests&apos; phone calls and your Airbnb, Vrbo and other agreed messages, including after hours and overnight, using a brief written for each listing.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
              Late check-ins, lockouts, failed keypad codes, Wi-Fi problems and noise complaints are the calls we are set up for. Anything that needs you goes to your designated contact through the escalation process we agree.
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
              alt="Holiday home exterior with a keypad entry door"
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. AFTER-HOURS CALLS */}
      <Section surface id="after-hours-calls">
        <SectionHeading
          eyebrow="After-Hours Support"
          title="After-hours calls that can't wait until morning."
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Guests call when they are locked out or running late, and you shouldn&apos;t have to be the one picking up at 11pm. A voicemail and a morning callback can turn into a bad review, and slow Airbnb replies can affect your{" "}
          <Link href="/resources/insights/airbnb-response-time-visibility" className="text-gold-dark underline underline-offset-2 hover:text-gold">response rate and ranking</Link>.
          {" "}This is how vacation rental after-hours support works for common situations.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Late check-in",
              body: "The agent confirms the new arrival time, checks the check-in method for that listing and tells the cleaner or you if timing affects the stay.",
            },
            {
              label: "Lockout",
              body: "The agent walks the guest through the access steps for that listing and the alternatives you approved. If it is not resolved, they contact your local contact.",
            },
            {
              label: "Wi-Fi and access details",
              body: "Router reset steps, door codes, gate and parking details, answered from the listing brief.",
            },
            {
              label: "Noise complaints",
              body: "The agent logs the complaint and follows your house rules. If it repeats, they alert you.",
            },
            {
              label: "Emergencies",
              body: "Water leaks, no heat, smoke alarms and safety concerns are escalated to you and, where needed, to emergency services. The guest is updated through the agreed process.",
            },
            {
              label: "Turnover pressure",
              body: "Late checkouts and early check-in requests go to the cleaner or turnover team per your procedure.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-surface px-6 py-4">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">How escalation works.</span>{" "}
            Agents guide guests through approved access and troubleshooting steps. When an issue needs local action, they contact your designated person and update the guest through the agreed escalation process. For each listing we agree who is called first, who is called second and how long we wait before moving on. Each call we handle is logged and appears in your handover notes.
          </p>
        </div>
        <div className="mt-6">
          <CoverageReviewButton variant="gold" ctaLocation="vras_afterhours_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </Section>

      {/* 4. COVERAGE */}
      <Section surface id="coverage">
        <SectionHeading
          eyebrow="Coverage Options"
          title="After-hours, overflow or 24/7."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "After-hours",
              body: "We answer calls and agreed messages outside the hours you are available. For hosts who work days but cannot be on call at night.",
            },
            {
              label: "Overflow",
              body: "You answer first. Calls you do not pick up are forwarded to Guest Squad, and agreed inboxes are monitored by us.",
            },
            {
              label: "24/7 coverage",
              body: "Coverage runs across all hours and days for the listings and channels in scope. Included in the starting plan, subject to scope confirmation.",
            },
          ].map((opt) => (
            <div key={opt.label} className="rounded-lg border border-line bg-paper px-5 py-5">
              <p className="text-sm font-semibold text-ink">{opt.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{opt.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft">
          <span className="font-medium text-ink">Phone calls and inboxes work differently.</span>{" "}
          For calls, you set up forwarding from your listing number to ours. For messages, we get access to the inboxes you agree — Airbnb, Vrbo or your PMS — and monitor and reply there. Forwarding and inbox access are set up and tested separately for each listing. 24/7 availability does not mean unlimited handling; coverage hours, channels and workload allowances are confirmed during scoping.
        </p>
      </Section>

      {/* 5. CAPABILITIES */}
      <Section id="capabilities">
        <SectionHeading
          eyebrow="What We Handle"
          title="Guest calls, OTA inboxes and messages across your listings."
          description="Each capability is scoped to your listings' channels, approved information and agreed procedures. You can use some or all."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            {
              label: "Guest calls",
              body: "Live phone answering for arrivals, access, in-stay problems and emergencies. If you need an Airbnb answering service for guest calls, this is it.",
              href: null,
              linkLabel: null,
            },
            {
              label: "Airbnb and Vrbo threads",
              body: "For messaging, response rate and Superhost standards.",
              href: "/services/airbnb-guest-support",
              linkLabel: "Airbnb guest services",
            },
            {
              label: "Inboxes across channels",
              body: "Inquiry replies, house-rule questions and pre-arrival messages.",
              href: "/services/ota-inbox-management",
              linkLabel: "OTA inbox management",
            },
            {
              label: "In-stay questions",
              body: "Arrival instructions and listing-specific conversations through your approved channels.",
              href: "/services/guest-messaging",
              linkLabel: "Guest messaging service",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              {item.href && (
                <Link href={item.href} className="mt-2 inline-block text-xs text-gold-dark underline underline-offset-2 hover:text-gold">
                  {item.linkLabel} →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Every listing has its own rules, so agents work from the brief for the listing the guest is staying in. For benchmarks, read{" "}
          <Link href="/resources/insights/vacation-rental-response-standards" className="text-gold-dark underline underline-offset-2 hover:text-gold">vacation rental response standards</Link>.
        </p>
      </Section>

      {/* 6. WORKFLOWS */}
      <Section surface id="workflows">
        <SectionHeading
          eyebrow="STR Workflows"
          title="Six workflows built around how a short-term rental runs."
          description="Each workflow has a trigger, a set of actions and an agreed boundary per listing."
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
                  <p className="text-sm leading-relaxed text-ink-soft">{w.does}</p>
                </div>
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">Escalated when</p>
                <p className="text-sm leading-relaxed text-ink-soft">{w.boundary}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. PRICING */}
      <Section id="pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: price card */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Pricing</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">From US$99<span className="text-base font-normal text-ink-muted">/month</span></p>
            <p className="mt-1 text-xs text-ink-muted italic">Subject to scope confirmation</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              One listing, 24/7 coverage included. Shared-support starting configuration.
            </p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted mb-3">Included at this starting price</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Live phone answering, 24/7",
                  "OTA message handling (Airbnb, Vrbo and agreed channels)",
                  "Guest inquiry responses using your house rules",
                  "Arrival and access assistance",
                  "Cleaner and maintenance communication",
                  "Escalation to your designated contact",
                  "Activity summary",
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

          {/* Right: what determines price + CTA */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-surface p-7">
              <p className="text-sm font-semibold text-ink mb-3">Your final fee depends on:</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Number of listings",
                  "Channels covered (phone, Airbnb, Vrbo, other)",
                  "Call and message volume",
                  "Tasks included in the agreed scope",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">
                Additional listings are quoted. Work outside the agreed allowance is charged at the proposal rate.{" "}
                <Link href="/pricing" className="text-gold-dark underline underline-offset-2 hover:text-gold">See guest support pricing</Link>.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-paper p-7">
              <p className="text-sm font-semibold text-ink mb-2">Ready to stop being on call?</p>
              <p className="text-sm text-ink-soft mb-5">Tell us your listings, channels and coverage requirements. We will scope the right configuration and send a written proposal.</p>
              <CoverageReviewButton variant="gold" ctaLocation="vras_price_cta" className="w-full justify-center">
                Book a Coverage Review
              </CoverageReviewButton>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. TRAINED PEOPLE */}
      <Section surface id="human-judgement">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Trained People</p>
          <h2 className="text-2xl font-medium text-ink">Trained people using your brief.</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Guest Squad agents are trained people who follow your brief and use judgement within it — such as when a noise complaint needs your attention or when to contact you overnight. If you are comparing AI voice tools, check how they handle upset guests, access problems and escalation. Read more in{" "}
            <Link href="/resources/hotel-answering-service-vs-ai-voice" className="text-gold-dark underline underline-offset-2 hover:text-gold">human vs AI answering</Link>.
          </p>
        </div>
      </Section>

      {/* 9. HOW IT WORKS */}
      <Section id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="From listing review to live coverage."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Listing review",
              body: "We document each listing: check-in method, house rules, access procedures, local contacts, cleaner details and the channels guests use.",
            },
            {
              step: "02",
              title: "Channel access and permissions",
              body: "We set up call forwarding and agree inbox access. We agree what agents can send, what needs your approval and how escalations are routed per listing.",
            },
            {
              step: "03",
              title: "Go-live",
              body: "We test call routing, message routing, access procedures and handover flows. Coverage starts once your brief, system access and escalation contacts are agreed.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.step}</p>
              <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
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
          <p className="mt-3 text-xs text-ink-muted">Access is confirmed per listing during setup. Booking disputes, refunds and OTA resolutions stay with the operator.</p>
        </div>
      </Section>

      {/* 10. REPORTING */}
      <Section surface id="reporting">
        <SectionHeading
          eyebrow="Reporting"
          title="What you get back."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "Handled", body: "The agent acts using the correct listing brief and agreed permissions." },
            { n: "02", title: "Logged", body: "Listing, channel, action taken, outcome, escalation contact and open items are recorded." },
            { n: "03", title: "Handover notes", body: "Per-listing notes reach you at the agreed time, with open items flagged." },
            { n: "04", title: "Activity reports", body: "Calls and messages handled, access issues and escalations per listing." },
          ].map((s) => (
            <div key={s.n} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-2xl font-light text-ink-muted">{s.n}</p>
              <p className="mt-3 text-sm font-semibold text-ink">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialsBlock />

      {/* MID-PAGE DARK CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-medium text-paper">Ready to stop being on call for your listings?</p>
            <p className="mt-1 text-sm text-paper/60">Book a coverage review and we will map your listings, channels and escalation contacts.</p>
          </div>
          <CoverageReviewButton variant="gold" size="sm" ctaLocation="vras_mid_cta">
            Book a Coverage Review
          </CoverageReviewButton>
        </div>
      </div>

      {/* 11. FAQ + STICKY */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* FAQ */}
          <div className="rounded-lg border border-line bg-paper p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Questions</p>
            <h2 className="text-2xl font-medium text-ink">Vacation rental answering service questions, answered.</h2>
            <div className="mt-6">
              <FaqAccordion items={FAQS} defaultOpenCount={2} />
            </div>
          </div>

          {/* Sticky card */}
          <div className="rounded-lg border border-line bg-paper p-7 h-fit lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark mb-2">Next Step</p>
            <h3 className="text-xl font-medium text-ink mb-3">
              Ready to stop being on call?
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft mb-5">
              Book a Coverage Review. We will map your listings, your guests&apos; time zones and your escalation contacts, and quote your coverage.
            </p>
            <CoverageReviewButton variant="gold" ctaLocation="vras_faq_cta" className="w-full justify-center">
              Book a Coverage Review
            </CoverageReviewButton>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">Guides</p>
              <div className="flex flex-col divide-y divide-line">
                {[
                  { label: "Vacation rental response standards", detail: "Benchmarks for Airbnb and Vrbo response times.", href: "/resources/insights/vacation-rental-response-standards" },
                  { label: "Airbnb response time and visibility", detail: "How response rate affects your ranking.", href: "/resources/insights/airbnb-response-time-visibility" },
                  { label: "Human vs AI answering", detail: "Where each one fits for STR operators.", href: "/resources/hotel-answering-service-vs-ai-voice" },
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
                <Link href="/services/airbnb-guest-support" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Airbnb guest services</Link>
                <Link href="/services/ota-inbox-management" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">OTA inbox management</Link>
                <Link href="/services/guest-messaging" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Hotel guest messaging</Link>
                <Link href="/services/hotel-answering-service" className="text-sm text-gold-dark underline underline-offset-2 hover:text-gold">Hotel answering service</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 12. FINAL CTA */}
      <CtaSection
        title="Ready to stop being on call for your vacation rentals?"
        description="Book a coverage review and we will map your listings, channels and escalation contacts, and quote your coverage."
      />
    </>
  );
}
