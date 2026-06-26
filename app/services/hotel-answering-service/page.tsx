import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { hotelAnsweringServiceData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hotel Answering Service | 24/7 Reservation & Guest Call Support",
  description: hotelAnsweringServiceData.description,
  path: `/services/${hotelAnsweringServiceData.slug}`,
});

export default function HotelAnsweringServicePage() {
  return <ServiceDetail data={hotelAnsweringServiceData} />;
}
