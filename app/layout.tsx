import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noble-ash-dental.example.com"),
  title: {
    default: "Noble & Ash — A Private Dental Atelier",
    template: "%s — Noble & Ash",
  },
  description:
    "A boutique private dental practice on Fillmore Street. Thoughtful dentistry designed around comfort, confidence, and long-term health.",
  keywords: [
    "private dental practice",
    "cosmetic dentistry San Francisco",
    "Invisalign",
    "porcelain veneers",
    "boutique dentist",
    "Fillmore dental",
  ],
  openGraph: {
    title: "Noble & Ash — A Private Dental Atelier",
    description:
      "Thoughtful dentistry designed around comfort, confidence, and long-term health.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble & Ash — A Private Dental Atelier",
    description:
      "Thoughtful dentistry designed around comfort, confidence, and long-term health.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ivory text-stone-800 antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
