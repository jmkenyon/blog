import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Kenyon — Startups, Software, and Building Products",
  description: "Personal blog by Joshua Kenyon writing about startups, software, and building scalable products from real-world experience."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-linear-to-r from-neutral-950 to-neutral-700">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
