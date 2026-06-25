import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Placeholder privacy policy for ConciergeX by Raptric.",
  path: "/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />

      <section className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
          Legal
        </p>
        <h1 className="text-3xl font-medium text-ink md:text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          This is a placeholder Privacy Policy page. Replace this content
          with your finalized policy — covering what information is
          collected through this site and the contact form, how it is
          stored and used, how long it is retained, and how visitors can
          request access to or deletion of their data — before taking this
          site live.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          Until a final policy is published, do not rely on this page to
          satisfy GDPR, CCPA, or other applicable data protection
          obligations.
        </p>
      </div>
      </section>
    </>
  );
}
