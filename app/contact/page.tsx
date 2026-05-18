import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the AI Solutions team. We're ready to help you harness the power of AI for your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | AI Solutions",
    description:
      "Get in touch with the AI Solutions team. We're ready to help you harness the power of AI for your business.",
    url: "/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI Solutions",
  url: "https://yourdomain.com",
  description:
    "Cutting-edge AI solutions for businesses — SEO, analytics, and automation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Market Street, Suite 400",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  telephone: "+1-800-555-0100",
  openingHours: "Mo-Fr 09:00-18:00",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://yourdomain.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="max-w-5xl mx-auto p-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }]} />
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a question or ready to start your AI journey? Fill out the form
          below and a member of our team will be in touch within one business
          day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-5" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="seo">AI-Powered SEO</option>
                  <option value="analytics">Advanced Analytics</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="consulting">AI Strategy Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or question..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Office info */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Our Office</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <address className="not-italic">
                  123 Market Street, Suite 400
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </address>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+18005550100"
                  className="text-blue-700 hover:underline"
                >
                  +1 (800) 555-0100
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:hello@yourdomain.com"
                  className="text-blue-700 hover:underline"
                >
                  hello@yourdomain.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p>Monday – Friday: 9:00 AM – 6:00 PM PST</p>
                <p>Saturday – Sunday: Closed</p>
              </div>
            </div>
          </section>
        </div>

        {/* Not sure where to start */}
        <section className="mt-12 border-t pt-8 text-center">
          <p className="text-gray-600">
            Not sure which service is right for you?{" "}
            <Link href="/services" className="text-blue-700 font-medium hover:underline">
              Explore our full range of AI services
            </Link>{" "}
            or{" "}
            <Link href="/blog" className="text-blue-700 font-medium hover:underline">
              read our blog for practical insights
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}