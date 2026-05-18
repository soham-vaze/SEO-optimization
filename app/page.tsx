import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Welcome",
  description:
    "AI Solutions offers cutting-edge AI services including SEO, analytics, and automation to help your business thrive.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Welcome | AI Solutions",
    description:
      "AI Solutions offers cutting-edge AI services including SEO, analytics, and automation to help your business thrive.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <main className="max-w-7xl w-full mx-auto p-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }]} />
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Grow Your Business with AI Solutions
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl">
            We help companies harness the power of artificial intelligence to
            automate workflows, boost search rankings, and unlock data-driven
            growth — faster than ever before.
          </p>
          <div className="flex gap-4">
            <Link
              href="/services"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Explore Our AI Services
            </Link>
            <Link
              href="/contact"
              className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>

        {/* Hero image */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/image.jpg"
            alt="AI Solutions — empowering businesses with artificial intelligence"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1280px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Value proposition */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose AI Solutions?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            In today's fast-moving digital landscape, staying competitive means
            embracing intelligent technology. AI Solutions was founded to make
            enterprise-grade AI accessible to businesses of all sizes — whether
            you're a startup looking to automate manual tasks or an established
            enterprise seeking a data edge.
          </p>
          <p className="text-lg text-gray-700">
            Our team of engineers and strategists has delivered AI-powered
            transformations across industries including e-commerce, healthcare,
            finance, and logistics. We combine deep technical expertise with a
            results-first mindset, so every project is tied directly to your
            bottom line.
          </p>
        </section>

        {/* Services overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">AI-Powered SEO</h3>
              <p className="text-gray-600">
                We use machine learning to identify high-impact keyword
                opportunities, automate on-page optimization, and build
                sustainable organic growth strategies.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Turn raw data into actionable intelligence. Our analytics
                solutions integrate with your existing stack and surface the
                metrics that matter most.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Workflow Automation
              </h3>
              <p className="text-gray-600">
                Eliminate repetitive tasks and reduce operational overhead with
                custom AI automations designed around your unique business
                processes.
              </p>
            </div>
          </div>
          <p className="mt-6">
            <Link href="/services" className="text-blue-700 font-medium hover:underline">
              View all our AI services →
            </Link>
          </p>
        </section>

        {/* Latest from the Blog */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Latest from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/1"
              className="border rounded-xl p-6 hover:shadow-md transition block"
            >
              <p className="text-sm text-gray-400 mb-1">May 10, 2026</p>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                How AI Is Transforming SEO in 2026
              </h3>
              <p className="text-gray-600 text-sm">
                Discover how machine learning models are reshaping keyword
                research, content strategy, and technical SEO.
              </p>
            </Link>
            <Link
              href="/blog/2"
              className="border rounded-xl p-6 hover:shadow-md transition block"
            >
              <p className="text-sm text-gray-400 mb-1">May 3, 2026</p>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                5 Workflow Automations Every Business Should Implement Today
              </h3>
              <p className="text-gray-600 text-sm">
                From invoice processing to lead qualification, discover the
                automations delivering the fastest ROI.
              </p>
            </Link>
          </div>
          <p className="mt-4">
            <Link href="/blog" className="text-blue-700 font-medium hover:underline">
              Browse all blog posts →
            </Link>
          </p>
        </section>

        {/* CTA strip */}
        <section className="bg-blue-700 text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-6">
            Join hundreds of companies already growing with AI Solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            Start Your AI Transformation Today
          </Link>
        </section>
      </main>
    </>
  );
}