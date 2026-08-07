"use client";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
}: {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={className} onClick={() => trackEvent(eventName, eventParams)}>
      {children}
    </Link>
  );
}
