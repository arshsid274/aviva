import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.rawanemgawer.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rawan Emgawer Architects — Where Design Becomes Legacy",
    template: "%s | Rawan Emgawer Architects",
  },
  description:
    "Independent architect creating thoughtful spaces that connect people and place. Architecture, interiors, and large-scale environments designed with clarity, purpose, and longevity.",
  keywords: [
    "Rawan Emgawer Architects",
    "REA",
    "architecture",
    "interior architecture",
    "masterplanning",
    "Libya architecture",
    "Dubai architecture",
    "residential architecture",
    "commercial architecture",
  ],
  authors: [{ name: "Rawan Emgawer Architects" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rawan Emgawer Architects",
    title: "Rawan Emgawer Architects — Where Design Becomes Legacy",
    description:
      "A multidisciplinary design consultancy creating architecture, interiors, and large-scale environments with clarity, purpose, and longevity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawan Emgawer Architects",
    description:
      "Architecture as a dialogue between space, context, and human experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
