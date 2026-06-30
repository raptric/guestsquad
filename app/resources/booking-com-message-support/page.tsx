import type { Metadata } from "next";
import { GuideArticle } from "@/components/site/guide-article";
import { buildMetadata } from "@/lib/seo";
import { otaInboxChecklistGuide } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: otaInboxChecklistGuide.metaTitle ?? otaInboxChecklistGuide.title,
  description: otaInboxChecklistGuide.metaDescription ?? otaInboxChecklistGuide.description,
  path: `/resources/${otaInboxChecklistGuide.slug}`,
});

export default function BookingComMessageSupportPage() {
  return <GuideArticle data={otaInboxChecklistGuide} />;
}
