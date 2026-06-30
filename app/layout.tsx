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
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Hotel Guest Support & Reservation Services",
    description: "Never miss a guest. Never lose a booking.",
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
