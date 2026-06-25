# ConciergeX by Raptric — Marketing Website

Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui-style components.

## Setup

```bash
cd "new website"
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — pages (App Router). One folder per route, e.g. `app/services/reservation-support/`.
- `components/ui/` — shadcn-style primitives (button, card, input, select, etc.)
- `components/site/` — page-building blocks (nav, footer, hero, pricing cards, contact form, etc.)
- `lib/site-data.ts` — nav links, services list, form options, brand constants (edit this to change copy that repeats across the site).
- `lib/service-content.ts` — content for each of the 6 service detail pages, including the per-service image and `slug` used for canonical URLs, breadcrumbs, and JSON-LD.
- `lib/seo.ts` — `buildMetadata()` (per-page title/description/canonical/OG/Twitter) and JSON-LD builders (`organizationSchema`, `websiteSchema`, `serviceSchema`, `breadcrumbSchema`, `faqSchema`). Every page's `metadata` export should go through `buildMetadata()`.

## SEO / LLM-search infrastructure

- **Structured data**: `ProfessionalService` + `WebSite` schema sitewide (root layout), `Service` + `BreadcrumbList` schema on every service page, `FAQPage` schema on Pricing. Rendered via `components/site/json-ld.tsx`.
- **Breadcrumbs**: visible UI (`components/site/breadcrumbs.tsx`) on every page except Home — doubles as internal linking and breadcrumb schema.
- **Related services**: bottom of every service page cross-links to 3 other services, closing the internal link graph between all 6 service pages.
- **Social previews**: `app/opengraph-image.tsx` / `app/twitter-image.tsx` generate a branded 1200×630 card dynamically (no static asset needed) — applies as the default for every page unless a route adds its own.
- **`public/llms.txt`**: a plain-language summary of the brand, services, and key facts for AI answer engines/LLM crawlers, following the emerging llms.txt convention. Update this any time positioning or services change — it's easy to forget since it's not visible in the UI.
- **Images**: all `<img>` tags were converted to `next/image` with `unoptimized` (since source images are already pre-sized via Unsplash's own CDN params — this also avoids depending on the Next.js server having outbound network access to images.unsplash.com, which isn't guaranteed in every hosting/sandbox environment). The hero image is `priority`; everything else is `loading="lazy"`.
- **Privacy Policy is `noindex`** via `buildMetadata({ noindex: true })` — sensible until it has real legal content worth ranking.

## Before going live

- [ ] Replace `SITE.calendlyUrl` in `lib/site-data.ts` with your real Calendly link
- [ ] Replace `SITE.email`, `SITE.phone`, `SITE.url` with real values — `SITE.url` in particular feeds every canonical URL, OG tag, and JSON-LD `url` field
- [ ] Wire `components/site/contact-form.tsx` to a real submission endpoint (currently shows a success state without sending data anywhere)
- [ ] Replace placeholder Unsplash imagery with real or licensed photography, and update `public/llms.txt` + JSON-LD descriptions if positioning changes
- [ ] Replace the placeholder `app/privacy-policy/page.tsx` with a finalized policy, then remove `noindex: true` from its metadata once it has real content
- [ ] Review all "Get Quote" / pricing copy against your actual plan structure
- [ ] Submit `sitemap.xml` to Google Search Console / Bing Webmaster Tools once `SITE.url` is the real production domain
- [ ] Verify rich results with Google's Rich Results Test once deployed (JSON-LD here is correct syntactically but should be checked against the live, real domain)
