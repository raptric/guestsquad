import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site-data";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a 15-minute demo or send us your property details. ConciergeX by Raptric responds within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Contact
          </p>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
            Let&rsquo;s talk about your property.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Tell us a little about your operation, or book a 15-minute demo
            directly. We respond within one business day.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-gold/30 bg-surface p-6 text-center">
          <p className="text-sm text-ink-soft">
            Prefer to skip the form?
          </p>
          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-gold-dark underline-offset-4 hover:underline"
          >
            Book a 15-minute demo on our calendar →
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-line bg-paper p-8 md:p-10">
          <ContactForm />
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center text-xs text-ink-muted">
          By submitting this form you agree to be contacted about ConciergeX
          services. See our{" "}
          <a href="/privacy-policy" className="underline-offset-4 hover:underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
      </section>
    </>
  );
}
