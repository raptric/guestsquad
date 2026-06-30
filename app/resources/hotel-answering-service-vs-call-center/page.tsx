import type { Metadata } from "next";
import { ComparisonArticle } from "@/components/site/comparison-article";
import { buildMetadata } from "@/lib/seo";
import { callCenterComparison } from "@/lib/resource-content";

export const metadata: Metadata = buildMetadata({
  title: callCenterComparison.metaTitle ?? callCenterComparison.title,
  description: callCenterComparison.metaDescription ?? callCenterComparison.description,
  path: `/resources/${callCenterComparison.slug}`,
});

export default function HotelAnsweringServiceVsCallCenterPage() {
  return <ComparisonArticle data={callCenterComparison} />;
}
