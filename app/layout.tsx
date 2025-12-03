import type { Metadata } from "next";
import type React from "react";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Serene Atelier — Luxury Beauty Salon",
  description: "An editorial, cinematic landing for a high-end beauty salon with bespoke motion crafted for awards.",
  openGraph: {
    title: "Serene Atelier — Luxury Beauty Salon",
    description: "An editorial, cinematic landing for a high-end beauty salon with bespoke motion crafted for awards.",
    url: "https://serene-atelier.example.com",
    siteName: "Serene Atelier",
    images: [
      {
        url: "/og-salon.jpg",
        width: 1200,
        height: 630,
        alt: "Serene Atelier Beauty Salon"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Serene Atelier — Luxury Beauty Salon",
    description: "Cinematic, GSAP-driven landing for a luxury beauty salon.",
    images: ["/og-salon.jpg"],
    creator: "@sereneatelier"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="bg-noir text-blush antialiased">
        <div className="fixed inset-0 -z-10 layered-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
