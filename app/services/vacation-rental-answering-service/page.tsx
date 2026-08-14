import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { vacationRentalAnsweringData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vacation Rental Answering Service | Airbnb & Vrbo",
  description: vacationRentalAnsweringData.description,
  path: `/services/${vacationRentalAnsweringData.slug}`,
});

export default function VacationRentalAnsweringServicePage() {
  return <ServiceDetail data={vacationRentalAnsweringData} />;
}
