import Link from "next/link";

export interface FaqItem {
  q: string;
  a: string;
}

function renderAnswer(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <Link key={i} href={m[2]} className="text-gold-dark underline underline-offset-4 hover:text-gold">
          {m[1]}
        </Link>
      );
    }
    return part;
  });
}

export function FaqAccordion({
  items,
  defaultOpenCount = 2,
}: {
  items: FaqItem[];
  defaultOpenCount?: number;
}) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[#E5E0D8] rounded-xl border border-[#E5E0D8] bg-paper">
      {items.map((item, i) => (
        <details key={item.q} className="group" {...(i < defaultOpenCount ? { open: true } : {})}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-gold/5 [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-ink">{item.q}</h3>
            <svg
              className="h-5 w-5 shrink-0 text-gold-dark transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 16 16"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
            </svg>
          </summary>
          <div className="mx-6 mb-5 rounded-r-sm border-l-2 border-gold-dark bg-gold/5 pb-1 pl-4 pt-2">
            <p className="text-sm leading-relaxed text-ink-soft">{renderAnswer(item.a)}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
