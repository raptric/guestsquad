import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { LegalPage } from "@/components/site/legal-page";
import { buildMetadata } from "@/lib/seo";
import { LEGAL_EFFECTIVE_DATE, TERMS_INTRO, TERMS_SECTIONS } from "@/lib/legal-content";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "GuestSquad's Terms of Service, including billing authorization, payment dispute and chargeback handling, pilot terms, and liability terms.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms-of-service" }]} />
      <LegalPage
        title="Terms of Service"
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        intro={TERMS_INTRO}
        sections={TERMS_SECTIONS}
      />
    </>
  );
}
