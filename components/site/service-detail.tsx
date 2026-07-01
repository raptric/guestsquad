import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { SERVICES } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";

export type ServiceDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  answerBlock: string;
  image: { src: string; alt: string };
  includesTitle?: string;
  includes: { title: string; description: string }[];
  examples?: string;
  handles?: string[];
  escalates?: string[];
  whoItsFor: string[];
  notes: string;
  faqs: { q: string; a: string }[];
};

export function ServiceDetail({ data }: { data: ServiceDetailData }) {
  const path = `/services/${data.slug}`;
  const related = SERVICES.filter((s) => s.slug !== data.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: data.eyebrow, description: data.description, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: data.eyebrow, path },
          ]),
          faqSchema(data.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: data.eyebrow, path },
        ]}
      />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        secondaryCta="View Pricing"
        secondaryHref="/pricing"
      />

      {/* Direct answer block — LLM-extractable summary */}
      <div className="border-b border-line bg-surface">
        <div className="container py-8">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            {data.answerBlock}
          </p>
        </div>
      </div>

      <div className="relative h-[280px] overflow-hidden border-b border-line md:h-[380px]">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Section>
        <SectionHeading
          eyebrow="What&apos;s Included"
          title={data.includesTitle ?? "Coverage built for hospitality, not call volume."}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.includes.map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-7">
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>

        {data.examples && (
          <div className="mt-8 rounded-lg border border-line bg-paper p-7">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              In Practice
            </p>
            <p className="text-sm leading-relaxed text-ink-soft">{data.examples}</p>
          </div>
        )}
      </Section>

      {(data.handles || data.escalates) && (
        <Section surface>
          <SectionHeading
            eyebrow="How It Works"
            title="What we handle, and what we escalate."
            description="Clear boundaries mean your team stays in control of what matters most."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {data.handles && (
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                  Handled directly
                </p>
                <ul className="flex flex-col gap-3">
                  {data.handles.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {data.escalates && (
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Escalated to your team
                </p>
                <ul className="flex flex-col gap-3">
                  {data.escalates.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-muted" />
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      <Section surface={!(data.handles || data.escalates)}>
        <SectionHeading eyebrow="Who It&apos;s For" title="Built around how your property actually operates." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.whoItsFor.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-line bg-paper p-5">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
              <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">{data.notes}</p>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Questions" title="Common questions about this service." />
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
        <SectionHeading eyebrow="Explore More" title="Other coverage hotels usually pair with this." />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {related.map((s) => (
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
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Worth Reading" title="How this compares to the alternatives." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {RESOURCES.filter((r) => r.type === "comparison").map((r) => (
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
        </div>
        <p className="mt-8 text-center text-sm text-ink-soft">
          <Link href="/resources" className="text-gold-dark underline underline-offset-4 hover:text-gold">
            Browse all guides and comparisons →
          </Link>
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
