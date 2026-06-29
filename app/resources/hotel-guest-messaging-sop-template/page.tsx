import type { Metadata } from "next";
import { GuideArticle } from "@/components/site/guide-article";
import { buildMetadata } from "@/lib/seo";
import { messagingSopGuide } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: messagingSopGuide.metaTitle ?? `${messagingSopGuide.title} | GuestSquad`,
  description: messagingSopGuide.metaDescription ?? messagingSopGuide.description,
  path: `/resources/${messagingSopGuide.slug}`,
});

export default function HotelGuestMessagingSopTemplatePage() {
  return <GuideArticle data={messagingSopGuide} />;
}
