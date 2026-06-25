import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { reservationSupportData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reservation Support",
  description: reservationSupportData.description,
  path: `/services/${reservationSupportData.slug}`,
});

export default function ReservationSupportPage() {
  return <ServiceDetail data={reservationSupportData} />;
}
