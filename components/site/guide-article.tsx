import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { DownloadGate } from "@/components/site/download-gate";
import { JsonLd } from "@/components/site/json-ld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { RESOURCES, type GuideArticleData } from "@/lib/resource-content";
import { SERVICES } from "@/lib/site-data";

export function GuideArticle({ data }: { data: GuideArticleData }) {
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
        eyebrow="Guide"
        title={data.title}
        description={data.description}
        secondaryCta="View Pricing"
        secondaryHref="/pricing"
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          {data.intro.map((p, i) => (
            <p key={i} className="mb-5 text-sm leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {data.sections.map((section, i) => (
        <Section key={section.heading} surface={i % 2 === 0}>
          <div className="mx-auto max-w-2xl">
            <SectionHeading title={section.heading} />
            <div className="mt-6">
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 text-sm leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
            {section.checklist && (
              <ul className="mt-2 flex flex-col gap-3">
                {section.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      ))}

      <Section surface={data.sections.length % 2 === 0}>
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
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
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
            </Link>
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
