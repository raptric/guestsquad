"use client";

import { useState } from "react";
import { CoverageReviewModal } from "@/components/site/coverage-review-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoverageReviewButtonProps {
  children?: React.ReactNode;
  variant?: "gold" | "outline" | "link" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  ctaLocation?: string;
}

export function CoverageReviewButton({
  children = "Book a Coverage Review",
  variant = "gold",
  size = "default",
  className,
  ctaLocation,
}: CoverageReviewButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <CoverageReviewModal
        open={open}
        onClose={() => setOpen(false)}
        ctaLocation={ctaLocation}
      />
    </>
  );
}
