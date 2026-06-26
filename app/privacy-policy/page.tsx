import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { LegalPage } from "@/components/site/legal-page";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_EFFECTIVE_DATE, PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/lib/legal-content";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | GuestSquad",
  description:
    "How GuestSquad, a Raptric LLC company, collects, uses, and protects personal data, including GDPR data subject rights and our role as controller and processor.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
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
