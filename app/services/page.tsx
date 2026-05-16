import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | AI SEO Solutions",
  description:
    "Explore technical SEO, on-page SEO and AI SEO services.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">
          SEO Services
        </h1>

        <h2 className="text-2xl mt-6">Technical SEO</h2>
        <p>
          Improve crawlability, indexing, Core Web Vitals,
          and rendering performance.
        </p>

        <h2 className="text-2xl mt-6">On-Page SEO</h2>
        <p>
          Optimize metadata, content structure, and keyword relevance.
        </p>

        <h2 className="text-2xl mt-6">AI SEO</h2>
        <p>
          Make your website discoverable in ChatGPT,
          Perplexity, and Gemini.
        </p>
      </main>
    </>
  );
}