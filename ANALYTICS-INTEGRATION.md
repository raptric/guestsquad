# GuestSquad Analytics Integration Guide

**Audience:** developer implementing the tracking code in this Next.js repo.
**Status:** GTM side is fully built and staged in a draft workspace (`Claude Analytics Setup`, workspace ID 7, container `GTM-PDHSJNXB`) — **nothing is published/live yet**. This document is the website-code half: what to add so the taxonomy below actually has data to send once it does get published.

Do not publish the GTM container yourself — that's a separate explicit approval step on the analytics side, not part of this work.

---

## 1. How tracking works in this codebase (already built, don't change)

- `lib/analytics.ts` — `trackEvent(eventName, params?)` pushes `{event, ...params}` to `window.dataLayer`. GTM's Custom Event triggers listen for the `event` value and forward configured params to GA4 as event parameters.
- `app/layout.tsx` already loads GTM (`GTM-PDHSJNXB`) and initializes `dataLayer` before the GTM script — no changes needed here.
- GA4 Measurement ID is `G-1G9ZM8DBQZ`, referenced in `lib/analytics.ts` as `GA_ID` (informational only, not actually used to send anything directly — GTM owns that).

This guide only adds/edits `trackEvent(...)` calls and a couple of small tracking components, following the exact pattern already used for `generate_lead` in `contact-form.tsx`.

---

## 2. The locked taxonomy — what needs to exist on the site

| Event | Mechanism | Code work needed |
|---|---|---|
| `page_view` | Automatic (GTM base config tag) | **None** |
| `scroll_depth` | Already implemented | **Rename params only** (§3) |
| `cta_click` | Explicit `trackEvent` | New (§4) |
| `service_page_view` | Explicit `trackEvent` | New (§5) |
| `resource_to_service_click` | Explicit `trackEvent` | New (§6) |
| `book_coverage_review_click` | Explicit `trackEvent` | Replaces old `calendly_open` call (§7) |
| `contact_form_start` | Explicit `trackEvent` | New (§8) |
| `calendly_view` | Automatic (GTM listens for Calendly's own `postMessage`) | **None** |
| `contact_form_submit` | Explicit `trackEvent` | Replaces old `generate_lead` call (§8) |
| `meeting_booked` | Automatic (GTM listens for Calendly's own `postMessage`) | **None** |
| `phone_click` | Automatic (GTM detects `tel:` link clicks) | Verify only (§9) |
| `email_click` | Automatic (GTM detects `mailto:` link clicks) | Verify only (§9) |
| `whatsapp_click` | Automatic (GTM detects `wa.me` link clicks) | **Blocked — see §9** |
| `outbound_click` | Automatic (GTM detects external-domain link clicks) | Verify only (§9) |
| `file_download` | Automatic (GTM detects `.pdf`/`.doc(x)`/`.xls(x)`/`.zip` link clicks) | Verify only (§9) |

"Automatic" means GTM handles it entirely — the site doesn't need to call `trackEvent` at all, it just needs the real link/markup to exist in a form GTM can detect (a real `<a href="tel:...">`, an actual click on the PDF link, etc.).

---

## 3. `scroll_depth` — rename params

**File:** `components/site/scroll-tracker.tsx:22`

```diff
- trackEvent("scroll_depth", { percent: milestone, page: pathname });
+ trackEvent("scroll_depth", { scroll_percent: milestone, page_path: pathname });
```

That's the only change. The event name and firing logic (25/50/75/90% milestones, once per pathname) are already correct.

---

## 4. `cta_click` — generic CTA button tracking

**File:** `components/site/button-link.tsx`

`ButtonLink` is the shared component behind most non-Calendly CTA buttons site-wide (e.g. "Request Pilot Review" in `cta-section.tsx`, secondary CTAs in `PageHero`). Instrument it once here rather than at every call site.

```diff
+"use client";
+
 import Link from "next/link";
+import { usePathname } from "next/navigation";
 import { buttonVariants, type ButtonProps } from "@/components/ui/button";
 import { cn } from "@/lib/utils";
+import { trackEvent } from "@/lib/analytics";

 interface ButtonLinkProps extends Pick<ButtonProps, "variant" | "size"> {
   href: string;
   className?: string;
   children: React.ReactNode;
   external?: boolean;
+  /** Where on the page this CTA lives, e.g. "hero", "cta_section", "pricing_card". Required for cta_click tracking to be useful in reports. */
+  ctaLocation?: string;
 }

 export function ButtonLink({
   href,
   variant,
   size,
   className,
   children,
   external,
+  ctaLocation,
 }: ButtonLinkProps) {
+  const pathname = usePathname();
+
+  function handleClick() {
+    trackEvent("cta_click", {
+      button_text: typeof children === "string" ? children : "",
+      cta_location: ctaLocation ?? "unspecified",
+      page_path: pathname,
+    });
+  }
+
   return (
     <Link
       href={href}
       target={external ? "_blank" : undefined}
       rel={external ? "noopener noreferrer" : undefined}
+      onClick={handleClick}
       className={cn(buttonVariants({ variant, size, className }))}
     >
       {children}
     </Link>
   );
 }
```

**Follow-up work:** every existing `<ButtonLink ...>` call site should get a `ctaLocation` prop added (e.g. `ctaLocation="cta_section"` in `cta-section.tsx:27`, `ctaLocation="hero"` wherever `PageHero`'s CTA buttons render). Search the repo for `<ButtonLink` to find all call sites — without this prop, `cta_location` reports as `"unspecified"`, which still works but isn't useful for the funnel breakdown.

`button_text` only captures plain string children — if any `ButtonLink` usage passes JSX children (icon + text), that call site needs an explicit label passed some other way (e.g. an additional `label` prop), since we can't safely stringify arbitrary JSX.

---

## 5. `service_page_view`

**File:** `components/site/service-detail.tsx` (shared by every page under `app/services/*/page.tsx` — instrument once here, covers all service pages)

`ServiceDetail` is currently a Server Component with no client-side hooks, so don't convert the whole file to `"use client"` — add a tiny dedicated tracker component instead, same pattern as `ScrollTracker`:

**New file:** `components/site/service-page-view-tracker.tsx`
```tsx
"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ServicePageViewTracker({ serviceName }: { serviceName: string }) {
  useEffect(() => {
    trackEvent("service_page_view", { service_name: serviceName });
  }, [serviceName]);
  return null;
}
```

**Then in `service-detail.tsx`**, add the import and drop `<ServicePageViewTracker serviceName={data.slug} />` anywhere in the returned JSX (e.g. right after the opening `<>` around line 54).

---

## 6. `resource_to_service_click`

**Files:** `components/site/guide-article.tsx:144-159` and `components/site/comparison-article.tsx` (~line 200, same pattern) — both render the "related services" links from a resource/comparison page out to `/services/[slug]`.

Add a small reusable tracked link component rather than duplicating an inline handler in two files:

**New file:** `components/site/tracked-link.tsx`
```tsx
"use client";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
}: {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={className} onClick={() => trackEvent(eventName, eventParams)}>
      {children}
    </Link>
  );
}
```

**In `guide-article.tsx`**, replace the `relatedServices.map` block (~line 144-159):
```diff
  {relatedServices.map((s) => (
-   <Link
+   <TrackedLink
      key={s.slug}
      href={`/services/${s.slug}`}
+     eventName="resource_to_service_click"
+     eventParams={{ resource_name: data.slug, service_name: s.slug }}
      className="group flex flex-col justify-between rounded-lg border border-line bg-paper p-6 transition-colors hover:border-gold/50"
    >
      ...
-   </Link>
+   </TrackedLink>
  ))}
```
(swap the `Link` import for `TrackedLink` at the top of the file; keep `Link` if it's still used elsewhere in the same file for `relatedResources`)

Apply the identical change in `comparison-article.tsx` at its equivalent block.

---

## 7. `book_coverage_review_click` — replaces `calendly_open`

**File:** `components/site/calendly-popup-button.tsx:52`

This is the button click itself, before the Calendly widget even opens — `calendly_view` (a separate event, GTM-only, see §2) confirms the widget actually rendered. Don't conflate the two.

```diff
+interface CalendlyPopupButtonProps
+  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
+    Pick<ButtonProps, "variant" | "size"> {
+  children: React.ReactNode;
+  ctaLocation?: string;
+}

  const handleClick = () => {
-   trackEvent("calendly_open", { source_page: window.location.pathname });
+   trackEvent("book_coverage_review_click", { cta_location: ctaLocation ?? "unspecified" });
    if (window.Calendly) {
```

**Follow-up work:** same as `ButtonLink` — add a `ctaLocation` prop at each `<CalendlyPopupButton>` call site (`nav.tsx` has 3 instances, `cta-section.tsx`, `footer.tsx`, `download-gate.tsx`'s post-download block) so reports can tell which button was clicked. Suggested values: `"nav"`, `"nav_mobile"`, `"cta_section"`, `"footer"`, `"download_gate_post_download"`.

---

## 8. `contact_form_start` + `contact_form_submit` — replaces `generate_lead`

**File:** `components/site/contact-form.tsx`

The GTM tag for `generate_lead` no longer exists (removed in the taxonomy rebuild), so that `trackEvent` call is currently inert — safe to replace outright rather than leave both.

**Submit (line 87-91):**
```diff
  if (!res.ok) throw new Error("Server error");
- trackEvent("generate_lead", {
-   source_page: tracking.source_page,
-   utm_source: tracking.utm_source || "direct",
-   property_type: data.propertyType || "unknown",
- });
+ trackEvent("contact_form_submit", { form_name: "contact_form" });
  setSubmitted(true);
```
(This already only fires after `res.ok` — i.e. on success, matching the "success only" requirement. No change to that logic needed.)

**Start (fires once, on first interaction with any field):** add near the top of the component, alongside the existing `tracking` state:
```diff
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
+ const startedRef = useRef(false);
+
+ function handleFormStart() {
+   if (startedRef.current) return;
+   startedRef.current = true;
+   trackEvent("contact_form_start", { form_name: "contact_form" });
+ }
```
(add `useRef` to the `import { useState, useEffect } from "react";` line)

Then add `onFocus={handleFormStart}` to the `<form>` element (line 101) — using focus capture on the form itself fires once for the first field the user interacts with, without needing a handler on every individual input.

---

## 9. Auto-detected click events — verify, don't necessarily add code

GTM's new triggers watch real link clicks by URL pattern. Confirm these before testing:

- **`phone_click`** (`tel:` links) — currently only exists in `footer.tsx:72` and `campaign-footer.tsx`. Fine as-is; add more `tel:` links elsewhere if the business wants phone CTAs on more pages (e.g. contact page), but not required for tracking to work.
- **`email_click`** (`mailto:` links) — same two files. Same note.
- **`outbound_click`** (any link to a different hostname) — LinkedIn, Trustpilot, and the parent-company link in `footer.tsx` already qualify. Nothing to add.
- **`file_download`** (`.pdf`/`.doc(x)`/`.xls(x)`/`.zip` URLs) — `download-gate.tsx:108-114` programmatically creates and clicks an `<a href="{pdfHref}">` for the actual PDF download. This *is* a real DOM click event (dispatched via `.click()` on an element attached to `document.body`), so GTM's click listener should catch it — **but verify this specifically in GTM Preview mode** (§10), since programmatic clicks on dynamically-created elements are a known edge case worth confirming rather than assuming. The existing `trackEvent("pdf_download", ...)` call at line 101 is now inert (old GTM tag removed) — safe to delete, optional cleanup.
- **`whatsapp_click`** (`wa.me` links) — **blocked**: no WhatsApp number or link exists anywhere in this codebase (`SITE` in `lib/site-data.ts` has no `whatsapp` field, no `wa.me` link found in a full repo search). This needs a real WhatsApp Business number from the business before any link can be added — don't fabricate one. Flag this back rather than guessing.

---

## 10. Testing checklist before anything publishes

Once the code above is deployed to a preview/staging environment:

1. Open the site with GTM's Preview mode pointed at the **`Claude Analytics Setup`** workspace (not the live container — that workspace is still unpublished)
2. Fire every event above and confirm in Preview's summary: correct event name, correct parameter values, fires exactly once per user action (no dupes)
3. Cross-check in GA4 DebugView that each event arrives with the right parameters
4. Specifically confirm: `contact_form_submit` does *not* fire on a validation error, `meeting_booked` does *not* fire just from opening the Calendly widget (only on an actual completed booking), `file_download`'s programmatic click is actually detected
5. Report results back before requesting the publish step — publishing the GTM container is a separate, explicit approval, not automatic once tests pass

---

## Open items for the business (not code)

- WhatsApp number/link needed before `whatsapp_click` can ever fire (§9)
- `cta_location` values for `ButtonLink`/`CalendlyPopupButton` call sites are left as placeholder suggestions above — confirm naming convention before merging so Looker Studio reports are legible
