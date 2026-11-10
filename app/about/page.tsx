import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { CoverageReviewButton } from "@/components/site/coverage-review-button";
import { buildMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "About Guest Squad | Our Team & Approach",
  description:
    "Guest Squad provides remote hospitality support for hotels and vacation rental operators — calls, reservations, guest messages, and agreed coordination handled by trained people.",
  path: "/about",
});

const TEAM = [
  {
    name: "Usman Khalid",
    title: "Founder",
    bio: "A seasoned BPO and technology leader.",
    photo: "/team/usman-khalid.jpg",
  },
  { name: "Khadija Khalid", title: "Co-Founder", bio: null, photo: "/team/khadija-khalid.jpg" },
  { name: "Mary", title: "Operations Lead", bio: null, photo: "/team/mary-avatar.jpg" },
  { name: "Imran Khalid", title: "Guest Service Officer", bio: null, photo: "/team/imran-khalid.jpg" },
  { name: "Azadar", title: "Business Development & Sales", bio: null, photo: "/team/azadar.jpg" },
  { name: "Maaz", title: "Hospitality Specialist", bio: null, photo: null },
];

const HOW_WE_WORK = [
  {
    n: "01",
    title: "Learn each property's instructions",
    body: "Before coverage begins, agents are briefed on your rates, policies, check-in procedures, communication standards, and any property-specific rules.",
  },
  {
    n: "02",
    title: "Follow agreed permissions",
    body: "Agents act within the scope your property defines — what can be confirmed, modified, or declined, and what requires your approval.",
  },
  {
    n: "03",
    title: "Escalate to designated contacts",
    body: "Situations outside the agreed scope are routed immediately to the contact and method your property specifies.",
  },
  {
    n: "04",
    title: "Document activity and handovers",
    body: "Every interaction is logged with context and outcome so your team has full visibility and handovers are clean.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "About Guest Squad | Our Team & Approach",
            description:
              "Guest Squad provides remote hospitality support for hotels and vacation rental operators — calls, reservations, guest messages, and agreed coordination handled by trained people.",
            path: "/about",
            primaryImageUrl: `${SITE.url}/brand-assets/guestsquad-favicon-official.svg`,
            primaryImageAlt: "Guest Squad logo",
            about: { "@id": `${SITE.url}/#organization` },
            audienceTypes: [
              "Independent Hotel",
              "Boutique Hotel",
              "Serviced Apartment",
              "Vacation Rental Operator",
              "Short-Term Rental Operator",
            ],
            mentions: [
              { "@type": "Organization", name: "Raptric LLC" },
              { "@type": "Person", name: "Usman Khalid" },
              { "@type": "Thing", name: "Hotel Answering Service" },
              { "@type": "Thing", name: "OTA Inbox Management" },
            ],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* 1. WHO WE ARE */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14 md:py-18">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            About
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            About Guest Squad.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Guest Squad provides remote hospitality support for independent hotels, boutique
            properties, serviced apartments, and vacation rental operators — covering calls,
            reservations, guest messages, and agreed coordination.
          </p>
        </div>
      </section>

      {/* 2. WHY WE EXIST */}
      <section className="border-b border-line bg-surface">
        <div className="container py-14">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Why we exist
            </p>
            <h2 className="text-2xl font-medium leading-snug text-ink">
              Helping operators keep guest communication covered.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Independent hotels and rental operators are expected to respond to guests around the
              clock, while their teams manage the property itself. The gap between when a guest
              needs an answer and when a trained person is available to give one — overnight,
              during peak check-in, across a weekend — is where bookings are lost and reviews are
              shaped.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Guest Squad was built to close that gap with trained people working inside your
              systems, following your procedures. Not scripts. Not software pretending to be
              hospitality.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm">
              <Link
                href="/services/hotel-answering-service"
                className="text-gold-dark underline underline-offset-4 hover:text-gold"
              >
                Hotel Answering Service
              </Link>
              <Link
                href="/services/central-reservations"
                className="text-gold-dark underline underline-offset-4 hover:text-gold"
              >
                Central Reservations
              </Link>
              <Link
                href="/services/vacation-rental-answering-service"
                className="text-gold-dark underline underline-offset-4 hover:text-gold"
              >
                Vacation Rental Answering Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Our team
          </p>
          <h2 className="text-2xl font-medium text-ink">Meet the team.</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Guest Squad is operated by Raptric LLC.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col rounded-lg border border-line bg-paper overflow-hidden"
              >
                <div className="relative aspect-[3/4] w-full bg-surface">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="24" r="14" fill="#C7A24A" fillOpacity="0.25"/>
                        <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#C7A24A" strokeOpacity="0.4" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-ink">{member.name}</p>
                  <p className="mt-0.5 text-xs text-gold-dark">{member.title}</p>
                  {member.bio && (
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft">{member.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="border-b border-line bg-surface">
        <div className="container py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            How we work
          </p>
          <h2 className="max-w-xl text-2xl font-medium text-ink">
            Your property. Your procedures. Our people.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {HOW_WE_WORK.map((item) => (
              <div
                key={item.n}
                className="flex gap-4 rounded-lg border border-line bg-paper p-6"
              >
                <span className="mt-0.5 text-xs font-semibold tabular-nums text-ink-muted">
                  {item.n}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TALK WITH OUR TEAM */}
      <section className="border-b border-line bg-paper">
        <div className="container py-14">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Get in touch
            </p>
            <h2 className="text-2xl font-medium text-ink">
              Talk with our team.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Tell us about your property type, your current coverage gaps, and the channels your
              guests use. We&apos;ll discuss how Guest Squad can support your operation.
            </p>
            <div className="mt-7">
              <CoverageReviewButton variant="gold" size="default" ctaLocation="about_cta">
                Discuss Your Requirements
              </CoverageReviewButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
