import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site-data";
import { organizationSchema, websiteSchema } from "@/lib/seo";

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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
