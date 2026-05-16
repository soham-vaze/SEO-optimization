import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI SEO Solutions",
    url: "https://aiseosolutions.demo",
    description:
      "Experts in technical SEO, on-page SEO and AI SEO.",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI SEO helps content appear in AI systems like ChatGPT, Gemini, and Perplexity.",
        },
      },
      {
        "@type": "Question",
        name: "Why is technical SEO important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technical SEO ensures search engines can crawl, render, and index your content efficiently.",
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6">
          AI SEO Solutions for the Future of Search
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          We help businesses improve technical SEO,
          on-page SEO, and AI discoverability across
          modern search engines and LLMs.
        </p>

        <Image
          src="/images/image.jpg"
          alt="AI SEO dashboard"
          width={1200}
          height={700}
          className="rounded-xl"
          priority
        />

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">
            Our Core Services
          </h2>

          <ul className="grid md:grid-cols-3 gap-6">
            <li className="p-6 shadow rounded-xl">
              Technical SEO Audits
            </li>

            <li className="p-6 shadow rounded-xl">
              On-Page Optimization
            </li>

            <li className="p-6 shadow rounded-xl">
              AI SEO / GEO
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose AI SEO Solutions?
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Our team specializes in modern SEO strategies,
            combining technical SEO, on-page optimization,
            and AI search optimization to help your brand
            rank better across Google and AI-powered platforms.
          </p>

          <p className="text-lg text-gray-700">
            We optimize websites for both traditional search
            engines and large language models like ChatGPT,
            Gemini, and Perplexity.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">
                What is AI SEO?
              </h3>
              <p>
                AI SEO focuses on making your content
                discoverable by AI systems like ChatGPT,
                Gemini, and Perplexity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Why is technical SEO important?
              </h3>
              <p>
                Technical SEO ensures search engines can
                crawl, render, and index your content efficiently.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 flex gap-6">
          <a
            href="/services"
            className="text-blue-600 underline"
          >
            Explore Services
          </a>

          <a
            href="/blog"
            className="text-blue-600 underline"
          >
            Read Our Blog
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

/*
Improvements:
1. Added FAQ section (better content depth)
2. Added FAQ schema markup (rich results)
3. Added internal links (/services, /blog)
4. Improved keyword density and semantic relevance
5. Better content depth for AI SEO readiness
*/

// Improvement: keyword relevance, headings, alt text, internal semantics,
// Imp-2: Improve schema markup, rich results
// Imp-3: SEO Keywords added: keyword depth, semantic relevance.