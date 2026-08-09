import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { LegalPage } from "@/components/site/legal-page";
import { buildMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { LEGAL_EFFECTIVE_DATE, PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/lib/legal-content";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Guest Squad collects, uses, and protects personal data. Covers data subject rights, our role as controller and processor, and GDPR compliance.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Privacy Policy | Guest Squad",
            description: "How Guest Squad collects, uses, and protects personal data. Covers data subject rights, our role as controller and processor, and GDPR compliance.",
            path: "/privacy-policy",
            primaryImageUrl: "https://guestsquad.com/brand-assets/guestsquad-favicon-official.svg",
            primaryImageAlt: "Guest Squad logo",
            about: { "@id": "https://guestsquad.com/#organization" },
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <LegalPage
        title="Privacy Policy"
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        intro={PRIVACY_INTRO}
        sections={PRIVACY_SECTIONS}
      />
    </>
  );
}
