import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "AI Solutions helps businesses grow with SEO, analytics, and performance services.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto p-10">
        <h1 className="text-6xl mb-6">AI Solutions</h1>
        <h2 className="text-4xl mb-6">
          AI-driven SEO and analytics for modern teams
        </h2>

        <div className="relative w-full h-[700px]">
          <Image
            src="/images/image.jpg"
            alt="AI Solutions team collaborating"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover"
          />
        </div>

        <p className="mt-10 text-xl">
          We help growth-focused teams improve visibility, measure outcomes, and
          turn search demand into revenue.
        </p>
        <p className="mt-4 text-lg">
          Our work blends <Link href="/services">technical SEO</Link>, content
          strategy, and analytics so your site ranks, converts, and scales with
          confidence.
        </p>
        <p className="mt-3 text-lg">
          Learn more about our approach on the <Link href="/about">About</Link>
          page or explore recent insights in the <Link href="/blog">Blog</Link>.
        </p>

        <div className="mt-10">
          <Link href="/services" className="text-blue-700 underline">
            Learn More
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

// Intentional bad -> "use client"(client side rendering), multiple H1, raw <img>, missing alt, huge image(1.7 MB), thin content, broken link, fixed width (bad for mobile use)