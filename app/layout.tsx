import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/siteContent";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase:
    brand.siteUrl.includes("[") || !brand.siteUrl.startsWith("http")
      ? undefined
      : new URL(brand.siteUrl),
  title: {
    template: "%s | Nexus",
    default: brand.name,
  },
  description:
    "Nexus is a digital growth and creative agency for ambitious brands. We help businesses grow with SEO, web development, social media, video, and creator partnerships.",
  authors: [{ name: brand.name }],
  openGraph: {
    title: {
      template: "%s | Nexus",
      default: brand.name,
    },
    description:
      "Nexus is a digital growth and creative agency for ambitious brands. We help businesses grow with SEO, web development, social media, video, and creator partnerships.",
    type: "website",
    url: brand.siteUrl,
    siteName: brand.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | Nexus",
      default: brand.name,
    },
    description:
      "Nexus is a digital growth and creative agency for ambitious brands.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: brand.siteUrl },
  icons: [
    { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192.png" },
    { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
