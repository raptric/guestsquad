import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { airbnbSupportData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Airbnb Guest Support",
  description: airbnbSupportData.description,
  path: `/services/${airbnbSupportData.slug}`,
});

export default function AirbnbGuestSupportPage() {
  return <ServiceDetail data={airbnbSupportData} />;
}
