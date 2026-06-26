import type { Metadata } from "next";
import { ServiceDetail } from "@/components/site/service-detail";
import { afterHoursData } from "@/lib/service-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "After-Hours Hotel Front Desk Support | GuestSquad",
  description: afterHoursData.description,
  path: `/services/${afterHoursData.slug}`,
});

export default function AfterHoursSupportPage() {
  return <ServiceDetail data={afterHoursData} />;
}
