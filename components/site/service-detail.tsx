import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { SERVICES } from "@/lib/site-data";

export type ServiceDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  includes: { title: string; description: string }[];
  whoItsFor: string[];
  notes: string;
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
        <SectionHeading eyebrow="What's Included" title="Coverage built for hospitality, not call volume." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.includes.map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-paper p-7">
              <h3 className="text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Who It's For" title="Built around how your property actually operates." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.whoItsFor.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-line bg-paper p-5">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
              <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {data.notes}
        </p>
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

      <CtaSection />
    </>
  );
}
