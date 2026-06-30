import type { Metadata } from "next";
import { GuideArticle } from "@/components/site/guide-article";
import { buildMetadata } from "@/lib/seo";
import { afterHoursChecklistGuide } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: afterHoursChecklistGuide.metaTitle ?? afterHoursChecklistGuide.title,
  description: afterHoursChecklistGuide.metaDescription ?? afterHoursChecklistGuide.description,
  path: `/resources/${afterHoursChecklistGuide.slug}`,
});

export default function AfterHoursHotelSupportChecklistPage() {
  return <GuideArticle data={afterHoursChecklistGuide} />;
}
