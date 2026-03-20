import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Turfsy — Book Your Turf Instantly",
  description:
    "Turfsy is the easiest way to discover, book, and manage sports turfs. Real-time availability, instant confirmation, and seamless payments.",
  keywords: [
    "turf booking",
    "sports booking",
    "turf rental",
    "book turf",
    "sports facility",
  ],
  openGraph: {
    title: "Turfsy — Book Your Turf Instantly",
    description:
      "Discover and book sports turfs near you. Real-time availability, instant confirmation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen bg-[var(--bg-dark)] text-[var(--text-primary)]">{children}</body>
    </html>
  );
}
