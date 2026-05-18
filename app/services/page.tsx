import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore AI Solutions' full range of services: SEO optimization, analytics, automation, and more to accelerate your business growth.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | AI Solutions",
    description:
      "Explore AI Solutions' full range of services: SEO optimization, analytics, automation, and more to accelerate your business growth.",
    url: "/services",
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI services does AI Solutions offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Solutions offers AI-powered SEO, advanced analytics, workflow automation, custom AI integrations, and technical consulting.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients begin to see measurable improvements in organic traffic and rankings within 3–6 months of starting an SEO engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate AI into our existing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our engineering team specialises in integrating AI capabilities into existing platforms, CRMs, ERPs, and custom-built software systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support after project delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer retainer-based support packages that include monitoring, optimisation, and continuous improvement of all delivered solutions.",
      },
    },
  ],
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-5xl mx-auto p-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/services" }]} />
        {/* Intro */}
        <section className="mb-14">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-700">
            We offer a comprehensive suite of AI-powered services designed to
            help businesses grow, operate more efficiently, and outperform the
            competition online. Whether you need to climb the search rankings,
            make sense of complex data, or automate time-consuming workflows,
            our expert team delivers measurable results.
          </p>
        </section>

        {/* Service 1 — SEO */}
        <section className="mb-12 border-b pb-12">
          <h2 className="text-3xl font-bold mb-4">AI-Powered SEO</h2>
          <p className="text-gray-700 mb-4">
            Search engine optimisation in the age of AI requires more than
            keyword stuffing and backlink building. Our AI-powered SEO service
            analyses your entire digital footprint — technical health, content
            gaps, competitor strategy, and user intent signals — to build a
            tailored roadmap to top rankings.
          </p>
          <h3 className="text-xl font-semibold mb-2">What's Included</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Full technical SEO audit and remediation</li>
            <li>AI-driven keyword research and content strategy</li>
            <li>On-page and structured data optimisation</li>
            <li>Core Web Vitals improvement</li>
            <li>Monthly performance reporting with actionable insights</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Expected Outcomes</h3>
          <p className="text-gray-700">
            Clients typically see a 40–120% increase in organic traffic within
            six months. We have successfully ranked businesses on page one for
            highly competitive keywords in finance, e-commerce, and SaaS.
          </p>
          <p className="text-gray-700 mt-4">
            <Link href="/blog/1" className="text-blue-700 hover:underline">
              Read: How AI Is Transforming SEO in 2026 →
            </Link>
          </p>
        </section>

        {/* Service 2 — Analytics */}
        <section className="mb-12 border-b pb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
          <p className="text-gray-700 mb-4">
            Data is only powerful if you can understand it. Our advanced
            analytics service transforms your raw data into clear, interactive
            dashboards and predictive models that help you make smarter
            decisions at every level of your organisation.
          </p>
          <h3 className="text-xl font-semibold mb-2">What's Included</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Data pipeline design and implementation</li>
            <li>Custom real-time dashboards (Google Looker Studio, Tableau, PowerBI)</li>
            <li>Predictive modelling and forecasting</li>
            <li>Customer segmentation and cohort analysis</li>
            <li>Attribution modelling for marketing spend</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Expected Outcomes</h3>
          <p className="text-gray-700">
            Our clients report an average 30% reduction in wasted marketing
            spend and significantly faster decision-making cycles after
            implementing our analytics solutions.
          </p>
        </section>

        {/* Service 3 — Automation */}
        <section className="mb-12 border-b pb-12">
          <h2 className="text-3xl font-bold mb-4">Workflow Automation</h2>
          <p className="text-gray-700 mb-4">
            Manual, repetitive tasks drain your team's time and introduce costly
            human error. Our workflow automation service designs, builds, and
            deploys custom AI automations that free your people to focus on
            high-value work.
          </p>
          <h3 className="text-xl font-semibold mb-2">What's Included</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Process mapping and automation opportunity audit</li>
            <li>Custom AI agent and bot development</li>
            <li>CRM, ERP, and third-party system integrations</li>
            <li>Document processing and data extraction (OCR, NLP)</li>
            <li>Testing, deployment, and ongoing monitoring</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Expected Outcomes</h3>
          <p className="text-gray-700">
            Most clients reduce manual processing time by 60–80% within the
            first 90 days of deployment.
          </p>
          <p className="text-gray-700 mt-4">
            <Link href="/blog/2" className="text-blue-700 hover:underline">
              Read: 5 Workflow Automations Every Business Should Implement Today →
            </Link>
          </p>
        </section>

        {/* Service 4 — Consulting */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4">AI Strategy Consulting</h2>
          <p className="text-gray-700 mb-4">
            Not sure where to start with AI? Our strategy consulting service
            helps leadership teams understand the AI landscape, identify the
            highest-ROI opportunities within their business, and build a
            practical roadmap for adoption — without the hype.
          </p>
          <h3 className="text-xl font-semibold mb-2">What's Included</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AI readiness assessment</li>
            <li>Competitive landscape analysis</li>
            <li>Prioritised AI adoption roadmap</li>
            <li>Vendor evaluation and selection support</li>
            <li>Executive workshops and team training</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                What AI services does AI Solutions offer?
              </h3>
              <p className="text-gray-700">
                AI Solutions offers AI-powered SEO, advanced analytics, workflow
                automation, custom AI integrations, and technical consulting.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                How long does it take to see SEO results?
              </h3>
              <p className="text-gray-700">
                Most clients begin to see measurable improvements in organic
                traffic and rankings within 3–6 months of starting an SEO
                engagement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Can you integrate AI into our existing software?
              </h3>
              <p className="text-gray-700">
                Yes. Our engineering team specialises in integrating AI
                capabilities into existing platforms, CRMs, ERPs, and
                custom-built software systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Do you offer ongoing support after project delivery?
              </h3>
              <p className="text-gray-700">
                Absolutely. We offer retainer-based support packages that
                include monitoring, optimisation, and continuous improvement of
                all delivered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 bg-blue-700 text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Let our team design an AI strategy tailored to your business goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Us for a Free Strategy Call
          </Link>
        </section>
      </main>
    </>
  );
}