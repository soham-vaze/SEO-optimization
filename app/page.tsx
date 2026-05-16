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
          We help businesses improve technical SEO, on-page SEO,
          and AI discoverability across modern search engines and LLMs.
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
      </main>

      <Footer />
    </>
  );
}

// Improvement: keyword relevance, headings, alt text, internal semantics,
// Imp-2: Improve schema markup, rich results