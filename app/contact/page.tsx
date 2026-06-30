import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/site/contact-form";
import { CalendlyInlineWidget } from "@/components/site/calendly-inline-widget";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { Section, SectionHeading } from "@/components/site/section";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

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
    a: "No. Most clients aren't sure which plan fits until we've talked through their volume and channels; see the Pricing page for an overview in the meantime.",
  },
  {
    q: "Can I just ask questions before committing to anything?",
    a: "Yes. A demo call is a conversation, not a sales pitch, so bring your questions about how the service actually works.",
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
              Book a demo directly in the calendar, or fill in the form and we&rsquo;ll
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
    </>
  );
}
