import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { airbnbSupportData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "24/7 Airbnb Guest Support for STR Operators | GuestSquad",
  description: airbnbSupportData.description,
  path: `/services/${airbnbSupportData.slug}`,
});

export default function AirbnbGuestSupportPage() {
  return <ServiceDetail data={airbnbSupportData} />;
}
