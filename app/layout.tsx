import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SEO Solutions | Technical SEO & AI Optimization",
  description:
    "Improve your website's technical SEO, on-page SEO, and AI discoverability with AI SEO Solutions.",
  keywords: [
    "AI SEO",
    "Technical SEO",
    "On Page SEO",
    "SEO Consulting",
  ],
  openGraph: {
    title: "AI SEO Solutions",
    description:
      "Technical SEO and AI SEO experts helping businesses improve discoverability.",
    url: "https://aiseosolutions.demo",
    siteName: "AI SEO Solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://aiseosolutions.demo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


// adding global metadata-> improves title, meta description, keywords, OpenGraph, 
// adding canonical tags in the metadata