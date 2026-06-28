import Link from "next/link";

const ROWS = [
  {
    title: "Routing & triage",
    ai: "Messages and calls are routed instantly to the right channel and priority.",
    human: "A trained agent reads context and responds the way your front desk would.",
  },
  {
    title: "Speed",
    ai: "Nothing sits in an inbox waiting to be noticed.",
    human: "Judgment calls — refunds, complaints, upsells — are handled by a person.",
  },
  {
    title: "Memory",
    ai: "Guest history and booking details are surfaced automatically.",
    human: "Tone, brand voice, and exceptions are applied the way your team would.",
  },
];

export function AiHuman() {
  return (
    <div>
    <div className="overflow-hidden rounded-lg border border-line">
      <div className="grid grid-cols-3 border-b border-line bg-surface text-xs font-semibold uppercase tracking-wide text-ink-muted">
        <div className="px-6 py-4">Function</div>
        <div className="px-6 py-4">Technology handles</div>
        <div className="px-6 py-4">Our people handle</div>
      </div>
      {ROWS.map((row, i) => (
        <div
          key={row.title}
          className={`grid grid-cols-3 ${i !== ROWS.length - 1 ? "border-b border-line" : ""}`}
        >
          <div className="px-6 py-6 text-sm font-medium text-ink">{row.title}</div>
          <div className="px-6 py-6 text-sm leading-relaxed text-ink-soft">{row.ai}</div>
          <div className="px-6 py-6 text-sm leading-relaxed text-ink-soft">{row.human}</div>
        </div>
      ))}
    </div>
      <Link
        href="/resources/hotel-answering-service-vs-ai-voice"
        className="mt-4 inline-block text-sm font-medium text-ink-soft underline-offset-4 hover:text-gold-dark hover:underline"
      >
        See the full human vs. AI voice agent comparison →
      </Link>
    </div>
  );
}
