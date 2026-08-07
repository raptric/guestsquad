import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ComparisonTable } from "@/components/site/comparison-table";
import { CtaSection } from "@/components/site/cta-section";
import { DownloadGate } from "@/components/site/download-gate";
import { JsonLd } from "@/components/site/json-ld";
import { TrackedLink } from "@/components/site/tracked-link";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { RESOURCES, type ResourceArticleData } from "@/lib/resource-content";
import { SERVICES } from "@/lib/site-data";

export function ComparisonArticle({ data }: { data: ResourceArticleData }) {
  const path = `/resources/${data.slug}`;
  const relatedResources = RESOURCES.filter((r) => r.slug !== data.slug).slice(0, 2);
  const relatedServices = SERVICES.filter((s) => data.relatedServiceSlugs.includes(s.slug));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: data.title,
            description: data.description,
            path,
            datePublished: data.datePublished,
            dateModified: data.dateModified,
            about: data.schemaAbout,
            mentions: data.schemaMentions,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: data.title, path },
          ]),
          faqSchema(data.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: data.title, path },
        ]}
      />

      <PageHero
        eyebrow="Comparison"
        title={data.title}
        description={data.description}
        primaryCta={data.heroPrimaryCta}
        primaryHref={data.heroPrimaryHref}
        secondaryCta={data.heroSecondaryCta ?? "View Pricing"}
        secondaryHref={data.heroSecondaryHref ?? "/pricing"}
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          {data.intro.map((p, i) => (
            <p key={i} className="mb-5 text-sm leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        {data.postIntroCta && (
          <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-gold/30 bg-gold/5 px-6 py-5">
            <p className="text-sm font-medium text-ink">{data.postIntroCta.heading}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{data.postIntroCta.body}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={data.postIntroCta.primaryHref}
                className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-ink hover:bg-gold/90"
              >
                {data.postIntroCta.primaryLabel}
              </Link>
              {data.postIntroCta.secondaryLabel && data.postIntroCta.secondaryHref && (
                <Link
                  href={data.postIntroCta.secondaryHref}
                  className="text-sm font-medium text-gold-dark hover:text-gold"
                >
                  {data.postIntroCta.secondaryLabel} →
                </Link>
              )}
            </div>
          </div>
        )}
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Side by Side" title={data.tableHeading ?? "Factor by factor."} />
        <div className="mt-10">
          <ComparisonTable columnA={data.columnA} columnB={data.columnB} columnC={data.columnC} rows={data.rows} />
        </div>
      </Section>

      {data.postTableCta && (
        <div className="container py-6">
          <div className="mx-auto max-w-2xl rounded-lg border border-line bg-surface px-6 py-5">
            <p className="text-sm font-medium text-ink">{data.postTableCta.heading}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{data.postTableCta.body}</p>
            <div className="mt-4">
              <Link
                href={data.postTableCta.primaryHref}
                className="inline-flex items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90"
              >
                {data.postTableCta.primaryLabel}
              </Link>
            </div>
          </div>
        </div>
      )}

      <Section>
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="The Verdict" title={data.verdictHeading} />
          <div className="mt-8">
            {data.verdictParagraphs.map((p, i) => (
              <p key={i} className="mb-5 text-sm leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            {data.verdictChecklist && data.verdictChecklist.length > 0 && (
              <ul className="mb-5 space-y-2">
                {data.verdictChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                      <svg className="h-2.5 w-2.5 text-gold-dark" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {data.verdictClosure && (
              <p className="mb-5 text-sm leading-relaxed text-ink-soft">
                {data.verdictClosure.split(/(\[[^\]]+\]\([^)]+\))/).map((part, j) => {
                  const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                  return m ? <Link key={j} href={m[2]} className="text-gold-dark underline underline-offset-4 hover:text-gold">{m[1]}</Link> : part;
                })}
              </p>
            )}
          </div>
        </div>
      </Section>

      {data.inlineAsset && data.inlineAsset.asset && data.inlineAsset.pdfHref && (
        <div className="container py-6">
          <div className="mx-auto max-w-2xl border-l-2 border-gold/40 pl-5">
            <p className="text-sm text-ink-soft">{data.inlineAsset.heading}</p>
            <div className="mt-3">
              <DownloadGate
                asset={data.inlineAsset.asset}
                pdfHref={data.inlineAsset.pdfHref}
                ctaLabel={data.inlineAsset.ctaLabel ?? "Download PDF"}
                inline
              />
            </div>
          </div>
        </div>
      )}

      <Section surface>
        <SectionHeading eyebrow="Questions" title="Common questions." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {data.faqs.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Explore More" title="Related reading and services." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedResources.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <div>
                <h3 className="text-sm font-medium text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink-soft group-hover:text-gold-dark">
                {r.type === "comparison" ? "Read comparison" : "Read guide"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
          {relatedServices.map((s) => (
            <TrackedLink
              key={s.slug}
              href={`/services/${s.slug}`}
              eventName="resource_to_service_click"
              eventParams={{ resource_name: data.slug, service_name: s.slug }}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
            >
              <div>
                <h3 className="text-sm font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink-soft group-hover:text-gold-dark">
                View service
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </TrackedLink>
          ))}
        </div>
      </Section>

      {data.assetCta && (
        <Section surface>
          <div className="rounded-lg border border-line bg-paper p-8">
            <p className="text-base font-medium text-ink">{data.assetCta.heading}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              {data.assetCta.asset && data.assetCta.pdfHref ? (
                <DownloadGate
                  asset={data.assetCta.asset}
                  pdfHref={data.assetCta.pdfHref}
                  ctaLabel={data.assetCta.ctaLabel ?? "Download PDF"}
                />
              ) : data.assetCta.calculatorHref ? (
                <Link
                  href={data.assetCta.calculatorHref}
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-medium text-ink hover:bg-gold/90"
                >
                  {data.assetCta.ctaLabel}
                </Link>
              ) : null}
              {data.assetCta.serviceHref && (
                <Link
                  href={data.assetCta.serviceHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
                >
                  {data.assetCta.serviceLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </Section>
      )}

      <CtaSection />
    </>
  );
}
