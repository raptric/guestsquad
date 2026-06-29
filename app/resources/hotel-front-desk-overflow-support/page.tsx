import type { Metadata } from "next";
import { GuideArticle } from "@/components/site/guide-article";
import { buildMetadata } from "@/lib/seo";
import { overflowSupportGuide } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: overflowSupportGuide.metaTitle ?? `${overflowSupportGuide.title} | GuestSquad`,
  description: overflowSupportGuide.metaDescription ?? overflowSupportGuide.description,
  path: `/resources/${overflowSupportGuide.slug}`,
});

export default function HotelFrontDeskOverflowSupportPage() {
  return <GuideArticle data={overflowSupportGuide} />;
}
