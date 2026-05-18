import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AI Solutions — our mission, values, and the team behind our cutting-edge AI products and services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | AI Solutions",
    description:
      "Learn about AI Solutions — our mission, values, and the team behind our cutting-edge AI products and services.",
    url: "/about",
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does AI Solutions do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Solutions helps businesses leverage artificial intelligence to automate processes, improve SEO performance, and extract meaningful insights from data.",
      },
    },
    {
      "@type": "Question",
      name: "How long has AI Solutions been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Solutions was founded in 2020 and has since served clients across e-commerce, healthcare, finance, and logistics industries.",
      },
    },
    {
      "@type": "Question",
      name: "Does AI Solutions work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with businesses of all sizes — from early-stage startups to established enterprises. Our solutions are tailored to your budget and growth stage.",
      },
    },
  ],
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-5xl mx-auto p-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />
        {/* Mission */}
        <section className="mb-14">
          <h1 className="text-5xl font-bold mb-6">About AI Solutions</h1>
          <p className="text-lg text-gray-700 mb-4">
            AI Solutions was founded in 2020 with a single mission: to make
            artificial intelligence practical, accessible, and profitable for
            every business. We believe that AI is not a luxury reserved for tech
            giants — it is the most powerful lever available to any company
            willing to embrace it.
          </p>
          <p className="text-lg text-gray-700">
            Headquartered in San Francisco, our team of AI engineers, data
            scientists, and growth strategists has helped over 200 companies
            across four continents automate operations, outrank competitors in
            search, and make better decisions through data.
          </p>
          <p className="mt-4">
            <Link href="/services" className="text-blue-700 font-medium hover:underline">
              Explore our full range of AI services →
            </Link>
          </p>
        </section>

        {/* Values */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Results First</h3>
              <p className="text-gray-600">
                Every engagement is measured against real business outcomes —
                revenue, efficiency, search rankings, or cost savings.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Transparency
              </h3>
              <p className="text-gray-600">
                We communicate openly about what AI can and can't do, and we
                back every recommendation with data and clear reasoning.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Long-Term Partnership
              </h3>
              <p className="text-gray-600">
                We don't just deliver a project and disappear. We build lasting
                relationships and grow with our clients over time.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Sarah Chen</h3>
              <p className="text-gray-500 text-sm">CEO & Co-Founder</p>
              <p className="text-gray-600 mt-2 text-sm">
                Former ML Lead at Google. 12 years in AI research and product.
              </p>
            </div>
            <div className="border rounded-xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Marcus Reid</h3>
              <p className="text-gray-500 text-sm">CTO & Co-Founder</p>
              <p className="text-gray-600 mt-2 text-sm">
                Built scalable AI infrastructure at Amazon and Stripe.
              </p>
            </div>
            <div className="border rounded-xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Aisha Patel</h3>
              <p className="text-gray-500 text-sm">Head of SEO Strategy</p>
              <p className="text-gray-600 mt-2 text-sm">
                10 years of enterprise SEO experience, 3x speaker at MozCon.
              </p>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-14 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-700">200+</p>
              <p className="text-gray-600 mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-700">4</p>
              <p className="text-gray-600 mt-1">Continents</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-700">94%</p>
              <p className="text-gray-600 mt-1">Client Retention</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-700">5★</p>
              <p className="text-gray-600 mt-1">Average Rating</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                What does AI Solutions do?
              </h3>
              <p className="text-gray-700">
                AI Solutions helps businesses leverage artificial intelligence to
                automate processes, improve SEO performance, and extract
                meaningful insights from data.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                How long has AI Solutions been in business?
              </h3>
              <p className="text-gray-700">
                AI Solutions was founded in 2020 and has since served clients
                across e-commerce, healthcare, finance, and logistics
                industries.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Does AI Solutions work with small businesses?
              </h3>
              <p className="text-gray-700">
                Yes. We work with businesses of all sizes — from early-stage
                startups to established enterprises. Our solutions are tailored
                to your budget and growth stage.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 bg-blue-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Work with Us?</h2>
          <p className="text-lg mb-6">
            Discover our services or get in touch to start your AI journey.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Explore Our AI Services
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}