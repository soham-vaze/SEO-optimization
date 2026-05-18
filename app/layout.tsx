import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "AI Solutions",
    template: "%s | AI Solutions",
  },
  description:
    "We provide cutting-edge AI solutions to help businesses grow, automate, and innovate.",
  openGraph: {
    type: "website",
    siteName: "AI Solutions",
    locale: "en_US",
    images: [
      {
        url: "/images/image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Solutions — cutting-edge AI for your business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Solutions",
  url: "https://yourdomain.com",
  logo: "https://yourdomain.com/images/image.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://yourdomain.com/contact",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Solutions",
  url: "https://yourdomain.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yourdomain.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}