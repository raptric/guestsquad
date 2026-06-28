import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ComparisonTable } from "@/components/site/comparison-table";
import { CtaSection } from "@/components/site/cta-section";
import { JsonLd } from "@/components/site/json-ld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { RESOURCES, type ResourceArticleData } from "@/lib/resource-content";
import { SERVICES } from "@/lib/site-data";

export function ComparisonArticle({ data }: { data: ResourceArticleData }) {
  const path = `/resources/${data.slug}`;
  const relatedResources = RESOURCES.filter((r) => r.slug !== data.slug);
  const relatedServices = SERVICES.filter(
    (s) => s.slug === "hotel-answering-service" || s.slug === "after-hours-support"
  );

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
        eyebrow="Comparison"
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

      <Section surface>
        <SectionHeading eyebrow="Side by Side" title="Factor by factor." />
        <div className="mt-10">
          <ComparisonTable columnA={data.columnA} columnB={data.columnB} rows={data.rows} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The Verdict" title={data.verdictHeading} />
        <div className="mx-auto mt-8 max-w-2xl">
          {data.verdictParagraphs.map((p, i) => (
            <p key={i} className="mb-5 text-sm leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </Section>

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
                Read comparison
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

      <CtaSection />
    </>
  );
}
