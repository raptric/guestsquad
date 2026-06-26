import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { otaInboxData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "OTA Inbox Management for Hotels | Booking.com & Expedia Support",
  description: otaInboxData.description,
  path: `/services/${otaInboxData.slug}`,
});

export default function OtaInboxPage() {
  return <ServiceDetail data={otaInboxData} />;
}
