import type { Metadata } from "next";
import { ComparisonArticle } from "@/components/site/comparison-article";
import { buildMetadata } from "@/lib/seo";
import { aiVoiceComparison } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: aiVoiceComparison.metaTitle ?? aiVoiceComparison.title,
  description: aiVoiceComparison.metaDescription ?? aiVoiceComparison.description,
  path: `/resources/${aiVoiceComparison.slug}`,
});

export default function HotelAnsweringServiceVsAiVoicePage() {
  return <ComparisonArticle data={aiVoiceComparison} />;
}
