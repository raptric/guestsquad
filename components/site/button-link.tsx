"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface ButtonLinkProps extends Pick<ButtonProps, "variant" | "size"> {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  ctaLocation?: string;
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  external,
  ctaLocation,
}: ButtonLinkProps) {
  const pathname = usePathname();

  function handleClick() {
    trackEvent("cta_click", {
      button_text: typeof children === "string" ? children : "",
      cta_location: ctaLocation ?? "unspecified",
      page_path: pathname,
    });
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
}
