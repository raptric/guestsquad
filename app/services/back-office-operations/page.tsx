import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { backOfficeData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Back Office Operations | Night Audit & OTA Reconciliation",
  description:
    "Daily night audit, OTA reconciliation, and guest-billing support, so revenue leakage gets caught the day it happens, not at month-end close.",
  path: `/services/${backOfficeData.slug}`,
});

export default function BackOfficeOperationsPage() {
  return <ServiceDetail data={backOfficeData} />;
}
