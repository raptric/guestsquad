import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-paper">
      <div className="container flex items-center gap-2 py-3 text-xs text-ink-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {isLast ? (
                <span className="text-ink-soft">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-ink">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
