"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/site/footer";
import { CampaignFooter } from "@/components/site/campaign-footer";

const CAMPAIGN_PATHS = ["/pilot"];

export function FooterWrapper() {
  const pathname = usePathname();
  if (CAMPAIGN_PATHS.includes(pathname)) {
    return <CampaignFooter />;
  }
  return <Footer />;
}
