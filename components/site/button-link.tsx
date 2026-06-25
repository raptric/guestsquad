import Link from "next/link";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends Pick<ButtonProps, "variant" | "size"> {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  external,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
}
