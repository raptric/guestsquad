import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { guestMessagingData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Guest Messaging",
  description: guestMessagingData.description,
  path: `/services/${guestMessagingData.slug}`,
});

export default function GuestMessagingPage() {
  return <ServiceDetail data={guestMessagingData} />;
}
