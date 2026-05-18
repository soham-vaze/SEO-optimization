import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights, tutorials, and news on AI, SEO, and business automation from the AI Solutions team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | AI Solutions",
    description:
      "Read the latest insights, tutorials, and news on AI, SEO, and business automation from the AI Solutions team.",
    url: "/blog",
  },
};


const posts = [
  {
    id: "1",
    title: "How AI Is Transforming SEO in 2026",
    excerpt:
      "Discover how machine learning models are reshaping keyword research, content strategy, and technical SEO — and what your business needs to do to stay ahead.",
    date: "May 10, 2026",
  },
  {
    id: "2",
    title: "5 Workflow Automations Every Business Should Implement Today",
    excerpt:
      "From invoice processing to lead qualification, these five AI-powered automations deliver the fastest ROI for businesses of any size.",
    date: "May 3, 2026",
  },
];

export default function Blog() {
  return (
    <>
      <main className="max-w-4xl mx-auto p-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-10">
          Insights, tutorials, and industry news from the AI Solutions team.
        </p>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-10">
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-700 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-700 font-medium hover:underline"
              >
                Read full article →
              </Link>
            </article>
          ))}
        </div>

        {/* Services CTA */}
        <section className="mt-14 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Want to See These Strategies in Action?
          </h2>
          <p className="text-gray-700 mb-6">
            Our team applies these insights to real client campaigns every day.
          </p>
          <Link
            href="/services"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Explore Our AI Services
          </Link>
        </section>
      </main>
    </>
  );
}