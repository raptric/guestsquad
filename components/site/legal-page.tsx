export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export function LegalPage({
  title,
  effectiveDate,
  intro,
  sections,
}: {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
          Legal
        </p>
        <h1 className="text-3xl font-medium text-ink md:text-4xl">{title}</h1>
        <p className="mt-3 text-xs text-ink-muted">Effective date: {effectiveDate}</p>

        <div className="mt-8 flex flex-col gap-4">
          {intro.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-12">
          {sections.map((section, i) => (
            <div key={section.heading} id={`s${i + 1}`}>
              <h2 className="text-lg font-medium text-ink">
                {i + 1}. {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-3 flex flex-col gap-2 border-l-2 border-line pl-5">
                  {section.list.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
