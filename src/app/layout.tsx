import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chinaready.example"),
  title: {
    default: "ChinaReady — The Practical Survival Guide for Travelers in China",
    template: "%s · ChinaReady",
  },
  description:
    "Up-to-date, practical guides for foreign travelers in China: mobile payments, VPN & SIM, transport, language, visas and safety.",
  openGraph: {
    title: "ChinaReady — Practical Survival Guides for China",
    description:
      "Everything a foreign traveler needs to land in China and not get stuck: payments, internet, transport, language, visas, safety.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
