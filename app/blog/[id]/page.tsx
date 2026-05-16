import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const postNumber = params.id;

  return {
    title: `Post ${postNumber}`,
    description: "Read the latest SEO and analytics insights from AI Solutions.",
    alternates: {
      canonical: `/blog/${postNumber}`,
    },
  };
}

export default function BlogPost() {
  return (
    <div className="p-10">
      <h1>SEO insights and growth notes</h1>
      <p className="mt-4">
        This article breaks down practical steps to improve visibility and
        measure impact over time.
      </p>
      <h2 className="mt-8 text-2xl">Key takeaways</h2>
      <p className="mt-3">
        Start with technical fundamentals, refine on-page content, and connect
        every change to a measurable business outcome.
      </p>
      <h2 className="mt-8 text-2xl">Where to focus first</h2>
      <p className="mt-3">
        Prioritize crawlability, clean information architecture, and pages that
        already show early signs of demand.
      </p>
      <p className="mt-6">
        See how we implement these steps in our
        <Link className="text-blue-700 underline" href="/services">
          services
        </Link>
        , or return to the
        <Link className="text-blue-700 underline" href="/blog">
          blog
        </Link>
        for more insights.
      </p>
    </div>
  );
}

// Very thin