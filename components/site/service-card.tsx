import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceSummary } from "@/lib/site-data";

export function ServiceCard({
  service,
  hrefBase = "/services",
}: {
  service: ServiceSummary;
  hrefBase?: string;
}) {
  return (
    <Link
      href={`${hrefBase}/${service.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-7 transition-colors hover:border-gold/50"
    >
      <div>
        <h3 className="text-lg font-medium text-ink">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {service.description}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors group-hover:text-gold-dark">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
