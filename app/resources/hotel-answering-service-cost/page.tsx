import type { Metadata } from "next";
import { GuideArticle } from "@/components/site/guide-article";
import { buildMetadata } from "@/lib/seo";
import { answeringServiceCostGuide } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: answeringServiceCostGuide.metaTitle ?? answeringServiceCostGuide.title,
  description: answeringServiceCostGuide.metaDescription ?? answeringServiceCostGuide.description,
  path: `/resources/${answeringServiceCostGuide.slug}`,
});

export default function HotelAnsweringServiceCostPage() {
  return <GuideArticle data={answeringServiceCostGuide} />;
}
