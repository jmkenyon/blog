import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joshua Kenyon — Product Engineer | Internal Tools, SaaS & AI Systems",
    template: "%s · Joshua Kenyon",
  },
  description:
    "Joshua Kenyon is a product-focused software engineer building internal tools, SaaS platforms, and applied AI systems. Experience shipping production software used by real teams.",
  keywords: [
    "Joshua Kenyon",
    "Product Engineer",
    "Software Engineer",
    "Internal Tools",
    "SaaS Developer",
    "AI Engineer",
    "Applied AI",
    "Next.js Consultant",
    "Full Stack Engineer",
    "Startup Engineer",
    "Internal Dashboards",
    "Stripe SaaS",
    "Operational Tooling",
  ],
  authors: [{ name: "Joshua Kenyon" }],
  creator: "Joshua Kenyon",
  publisher: "Joshua Kenyon",
  metadataBase: new URL("https://joshuakenyon.dev"),

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://joshuakenyon.dev",
    title: "Joshua Kenyon — Product Engineer | Internal Tools, SaaS & AI",
    description:
      "Product-focused engineer building internal tools, SaaS platforms, and AI-powered systems used by real teams.",
    siteName: "Joshua Kenyon",
  },

  twitter: {
    card: "summary_large_image",
    title: "Joshua Kenyon — Product Engineer | Internal Tools & AI",
    description:
      "Building production-ready internal tools, SaaS platforms, and applied AI systems.",
    creator: "@YOUR_TWITTER_HANDLE",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://joshuakenyon.dev",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}