import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/site/contact-form";
import { CalendlyInlineWidget } from "@/components/site/calendly-inline-widget";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { Section, SectionHeading } from "@/components/site/section";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { AssetBlock } from "@/components/site/asset-block";
import { BoFuTrustBlock } from "@/components/site/bofu-trust-block";

export const metadata: Metadata = buildMetadata({
  title: "Contact GuestSquad | Book a Guest Support Demo",
  description:
    "Book a 30-minute demo or send us your property details. GuestSquad responds within one business day.",
  path: "/contact",
});

const FAQS = [
  {
    q: "What happens after I submit the form?",
    a: "We respond within one business day to schedule a short discovery call about your property, current gaps, and volume.",
  },
  {
    q: "Do I need to know which plan I want first?",
    a: "No. Most clients are not sure which plan fits until we have talked through their volume and channels. See the Pricing page for an overview in the meantime.",
  },
  {
    q: "Can I just ask questions before committing to anything?",
    a: "Yes. A demo call is a conversation, not a sales pitch. Bring your questions about how the service actually works and what it would look like for your property specifically.",
  },
  {
    q: "What should I prepare before a demo call?",
    a: "Nothing formal. It helps to have a rough sense of your monthly call or message volume, which channels you use, and the hours where you currently have gaps. We will guide the rest of the conversation.",
  },
  {
    q: "Can I request a quote without booking a full demo?",
    a: "Yes. Fill in the form with your property details and volume and we will respond with a ballpark range before scheduling anything. A discovery call is only needed if you want to move forward.",
  },
  {
    q: "How fast can GuestSquad review my property needs?",
    a: "We review all form submissions within one business day. If your situation is time-sensitive, book directly on the calendar for the fastest response.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          faqSchema(FAQS),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="py-16 md:py-20">
        <div className="container">

          {/* Page header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Contact
            </p>
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
              Let&rsquo;s talk about your property.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Book a coverage review directly in the calendar, or fill in the form and we&rsquo;ll
              reach out within one business day.
            </p>
          </div>

          {/* Two-column: calendar left, form right */}
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">

            {/* Left — Calendly inline widget */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Book a 30-Minute Demo
              </p>
              <CalendlyInlineWidget />
            </div>

            {/* Right — contact form */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Send Us a Message
              </p>
              <div className="mb-5 rounded-lg border border-line bg-surface px-6 py-4">
                <p className="text-sm leading-relaxed text-ink-soft">
                  GuestSquad is best suited for properties that receive regular call or message volume your team cannot always cover: independent hotels, boutique properties, resorts, serviced apartments, and short-term rental operators. If that sounds like your property,{" "}
                  <Link href="/pricing" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                    view pricing
                  </Link>{" "}
                  or send us the details below.
                </p>
              </div>
              <div className="rounded-lg border border-line bg-paper p-8">
                <ContactForm />
              </div>
              <p className="mt-6 text-center text-xs text-ink-muted">
                By submitting this form you agree to be contacted about GuestSquad
                services. See our{" "}
                <Link href="/privacy-policy" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-of-service" className="text-gold-dark underline underline-offset-4 hover:text-gold">
                  Terms of Service
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </section>

      <Section surface>
        <SectionHeading eyebrow="Before You Reach Out" title="A few things people usually ask." />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {FAQS.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Still deciding?{" "}
          <Link href="/resources" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Read our comparisons
          </Link>{" "}
          on human answering services vs. AI voice agents and generic call centers.
        </p>
      </Section>

      <Section>
        <BoFuTrustBlock />
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Not Ready to Book Yet?" title="Start with one of these." />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <AssetBlock
            heading="See what reporting looks like"
            assets={[{ label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" }]}
          />
          <AssetBlock
            heading="Find your coverage gaps"
            assets={[{ label: "Start Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" }]}
          />
          <AssetBlock
            heading="Estimate missed revenue"
            assets={[{ label: "Missed Booking Revenue Calculator", href: "/resources/missed-booking-calculator" }]}
          />
        </div>
      </Section>
    </>
  );
}
