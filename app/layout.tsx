import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CookieConsent } from "@/components/site/cookie-consent";
import { JsonLd } from "@/components/site/json-ld";
import { ScrollTracker } from "@/components/site/scroll-tracker";
import { SITE } from "@/lib/site-data";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const GTM_ID = "GTM-PDHSJNXB";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "24/7 Hotel Guest Support & Reservation Services",
  description:
    "GuestSquad handles reservations, guest messaging, OTA inquiries, callbacks, upsells, and after-hours support, so your front desk stays focused on in-house guests.",
  openGraph: {
    title: "24/7 Hotel Guest Support & Reservation Services",
    description:
      "Never miss a guest. Never lose a booking. Guest operations support for hotels, resorts, serviced apartments, and Airbnb operators.",
    url: SITE.url,
    siteName: SITE.brand,
    type: "website",
    images: [
      {
        url: `${SITE.url}/brand-assets/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GuestSquad — 24/7 human hotel guest support for calls, messages, OTA inboxes, and after-hours coverage.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Hotel Guest Support & Reservation Services",
    description: "Never miss a guest. Never lose a booking.",
    images: [`${SITE.url}/brand-assets/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        {/* GTM — initialise dataLayer before GTM script loads */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];`}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ScrollTracker />
        <div className="no-print"><Nav /></div>
        <main className="flex-1">{children}</main>
        <div className="no-print"><Footer /></div>
        <CookieConsent />
      </body>
    </html>
  );
}
