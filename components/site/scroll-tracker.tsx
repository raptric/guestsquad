"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 90];

export function ScrollTracker() {
  const pathname = usePathname();
  const fired = useRef(new Set<number>());

  useEffect(() => {
    fired.current.clear();

    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollHeight <= clientHeight) return;
      const pct = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
      for (const milestone of MILESTONES) {
        if (!fired.current.has(milestone) && pct >= milestone) {
          fired.current.add(milestone);
          trackEvent("scroll_depth", { percent: milestone, page: pathname });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
