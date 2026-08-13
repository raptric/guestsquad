import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { ButtonLink } from "@/components/site/button-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site-data";
import { RESOURCES } from "@/lib/resource-content";
import { INSIGHTS } from "@/lib/insights-content";
import { BoFuTrustBlock } from "@/components/site/bofu-trust-block";
import { TestimonialsBlock } from "@/components/site/testimonials-block";
import { ChannelBadges } from "@/components/site/channel-badges";
import { ServicePageViewTracker } from "@/components/site/service-page-view-tracker";

export type ServiceDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  schemaAbout?: { "@type": string; name: string };
  schemaServiceOutput?: string;
  schemaAudienceTypes?: string[];
  schemaMentions?: { "@type": string; name: string }[];
  schemaSubjectOf?: { "@type": string; "@id": string }[];
  introHeading?: string;
  answerBlock: string;
  image: { src: string; alt: string };
  primaryCta?: string;
  primaryHref?: string;
  includesTitle?: string;
  includes: { title: string; description: string }[];
  examples?: string;
  handles?: string[];
  escalates?: string[];
  whoItsForTitle?: string;
  whoItsFor: string[];
  notes: string;
  pairsWith?: { label: string; slug: string }[];
  relatedSlugs: string[];
  faqTitle?: string;
  relatedTitle?: string;
  comparisonTitle?: string;
  comparisonSlugs?: string[];
  insightSlugs?: string[];
  faqs: { q: string; a: string }[];
  assetLinks?: { label: string; href: string }[];
  downloadAsset?: { asset: string; pdfHref: string; label: string; description: string };
  ctaTitle?: string;
  ctaDescription?: string;
};

export function ServiceDetail({ data }: { data: ServiceDetailData }) {
  const path = `/services/${data.slug}`;
  const related = SERVICES.filter((s) => data.relatedSlugs.includes(s.slug))
    .sort((a, b) => data.relatedSlugs.indexOf(a.slug) - data.relatedSlugs.indexOf(b.slug));
  const comparisons = RESOURCES.filter((r) =>
    data.comparisonSlugs ? data.comparisonSlugs.includes(r.slug) : r.type === "comparison"
  );
  const insights = data.insightSlugs
    ? INSIGHTS.filter((i) => data.insightSlugs!.includes(i.slug)).sort(
        (a, b) => data.insightSlugs!.indexOf(a.slug) - data.insightSlugs!.indexOf(b.slug)
      )
    : [];

  return (
    <>
      <ServicePageViewTracker serviceName={data.slug} />
      <JsonLd
        data={[
          serviceSchema({
            name: data.eyebrow,
            description: data.description,
            path,
            about: data.schemaAbout,
            serviceOutput: data.schemaServiceOutput,
            dateModified: "2026-08-10T00:00:00+00:00",
            audienceTypes: data.schemaAudienceTypes,
            subjectOf: data.schemaSubjectOf,
          }),
          webPageSchema({
            name: data.title,
            description: data.description,
            path,
            primaryImageUrl: data.image.src,
            primaryImageAlt: data.image.alt,
            mentions: data.schemaMentions,
            mainEntityId: `${SITE.url}${path}#service`,
          }),
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
        primaryCta={data.primaryCta}
        primaryHref={data.primaryHref}
        secondaryCta="View Pricing"
        secondaryHref="/pricing"
      />

      {/* Direct answer block — LLM-extractable summary */}
      <div className="border-b border-line bg-surface">
        <div className="container py-10">
          {data.introHeading && (
            <h2 className="mx-auto max-w-3xl text-lg font-semibold text-ink mb-4">
              {data.introHeading}
            </h2>
          )}
          {data.answerBlock.split("\n\n").map((para, i) => (
            <p key={i} className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft mt-3 first:mt-0">
              {para.split(/(\[[^\]]+\]\([^)]+\))/).map((part, j) => {
                const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                return match ? (
                  <Link key={j} href={match[2]} className="text-gold-dark underline underline-offset-4 hover:text-gold">
                    {match[1]}
                  </Link>
                ) : part;
              })}
            </p>
          ))}
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

      {/* 1 — What's Included */}
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
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">In Practice</p>
            <p className="text-sm leading-relaxed text-ink-soft">{data.examples}</p>
          </div>
        )}
      </Section>

      {/* 2 — Who It's For */}
      <Section surface>
        <SectionHeading eyebrow="Who It&apos;s For" title={data.whoItsForTitle ?? "Built around how your property actually operates."} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.whoItsFor.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-line bg-paper p-5">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
              <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">{data.notes}</p>
        {data.pairsWith && data.pairsWith.length > 0 && (
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Pairs well with:{" "}
            {data.pairsWith.map((p, i) => (
              <span key={p.slug}>
                <Link href={`/services/${p.slug}`} className="text-gold-dark underline underline-offset-4 hover:text-gold">
                  {p.label}
                </Link>
                {i < data.pairsWith!.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        )}
      </Section>

      {/* 3 — Channels */}
      <ChannelBadges />

      {/* 4 — Trust block */}
      <BoFuTrustBlock />

      {/* 4b — Testimonials */}
      <TestimonialsBlock />

      {/* 5 — How It Works (handles / escalates) */}
      {(data.handles || data.escalates) && (
        <Section surface>
          <SectionHeading
            eyebrow="How It Works"
            title="How Guest Squad keeps your guest operations under control."
            description="Clear boundaries mean your team stays in charge of what matters most."
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

      {/* 6 — Slim mid-page CTA */}
      <div className="bg-ink">
        <div className="container flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="whitespace-nowrap text-base font-medium text-paper">Ready to close your coverage gap?</p>
            <p className="mt-1 whitespace-nowrap text-sm text-paper/60">Book a review or start with a 2-week no-obligation pilot.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CoverageReviewButton variant="gold" size="sm" ctaLocation="service_mid_cta">
              Book a Coverage Review
            </CoverageReviewButton>
            <ButtonLink href="/pilot" variant="outline" size="sm" className="border-paper/25 text-paper hover:border-paper/60">
              Request Pilot Review
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* 7 — FAQ */}
      <Section surface={!(data.handles || data.escalates)}>
        <SectionHeading eyebrow="Questions" title={data.faqTitle ?? "Common questions about this service."} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {data.faqs.map((item) => (
            <div key={item.q} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-sm font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 — Compact "Keep Exploring" link cluster */}
      <div className="border-t border-line py-14">
        <div className="mx-auto max-w-screen-xl px-6">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Keep Exploring</p>
          <h2 className="mt-1.5 text-2xl font-medium text-ink">Related services, guides, and research.</h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Related services */}
          {related.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Related Services</p>
              <ul className="flex flex-col gap-2.5">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="mt-1 inline-flex items-center gap-1 text-xs text-gold-dark hover:underline">
                    All services →
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Guides & comparisons */}
          {comparisons.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Guides &amp; Comparisons</p>
              <ul className="flex flex-col gap-2.5">
                {comparisons.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/resources/${r.slug}`}
                      className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                      {r.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/resources" className="mt-1 inline-flex items-center gap-1 text-xs text-gold-dark hover:underline">
                    All guides →
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Insights */}
          {insights.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Research &amp; Insights</p>
              <ul className="flex flex-col gap-2.5">
                {insights.map((i) => (
                  <li key={i.slug}>
                    <Link
                      href={`/resources/insights/${i.slug}`}
                      className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                      {i.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/resources/insights" className="mt-1 inline-flex items-center gap-1 text-xs text-gold-dark hover:underline">
                    All insights →
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Tools / asset links */}
          {data.assetLinks && data.assetLinks.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Tools &amp; Resources</p>
              <ul className="flex flex-col gap-2.5">
                {data.assetLinks.map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      className="group flex items-start gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-dark" />
                      {a.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/resources" className="mt-1 inline-flex items-center gap-1 text-xs text-gold-dark hover:underline">
                    All resources →
                  </Link>
                </li>
              </ul>
            </div>
          )}

        </div>
        </div>
      </div>

      <CtaSection title={data.ctaTitle} description={data.ctaDescription} />
    </>
  );
}
