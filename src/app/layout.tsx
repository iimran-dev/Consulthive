import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consulthive — ISO Certification & Compliance Consulting",
  description:
    "Expert consulting. Practical implementation. Globally recognized certifications. Get ISO certified and build a better business with Consulthive.",
  keywords: [
    "ISO certification",
    "ISO 9001",
    "ISO 27001",
    "compliance consulting",
    "NABL",
    "NABH",
    "CE marking",
  ],
  authors: [{ name: "Consulthive" }],
  openGraph: {
    title: "Consulthive — Get ISO Certified. Build A Better Business.",
    description:
      "Expert consulting. Practical implementation. Globally recognized certifications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
