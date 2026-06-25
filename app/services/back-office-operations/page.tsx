import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { backOfficeData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Back-Office Guest Operations",
  description: backOfficeData.description,
  path: `/services/${backOfficeData.slug}`,
});

export default function BackOfficeOperationsPage() {
  return <ServiceDetail data={backOfficeData} />;
}
