import "./globals.css";
import type { Metadata } from "next";
import { getOrganizationJsonLd } from "@/lib/seo";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AI Solutions",
    template: "%s | AI Solutions",
  },
  description:
    "AI Solutions provides SEO, analytics, and growth services for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Solutions",
    description:
      "SEO, analytics, and growth services designed to help teams scale.",
    url: baseUrl,
    siteName: "AI Solutions",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "AI Solutions hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions",
    description:
      "SEO, analytics, and growth services designed to help teams scale.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = getOrganizationJsonLd(baseUrl);

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  )
}

// Why bad? - no title, no MetadataBoundary, no Opengraph, no canonical