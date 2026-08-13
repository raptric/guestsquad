"use client";

import { useState } from "react";
import { PilotFormModal } from "@/components/site/pilot-form-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PilotFormButtonProps {
  children?: React.ReactNode;
  variant?: "gold" | "outline" | "link" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function PilotFormButton({
  children = "Request Pilot Review",
  variant = "gold",
  size = "default",
  className,
}: PilotFormButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={variant} size={size} className={cn(className)} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <PilotFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
