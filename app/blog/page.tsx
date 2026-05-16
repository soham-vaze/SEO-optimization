import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on SEO, analytics, and growth strategies from the AI Solutions team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1>Blog</h1>
        <p className="mt-4">
          Practical insights on SEO, analytics, and growth for modern teams.
        </p>
        <h2 className="mt-8 text-2xl">Latest posts</h2>

        <Link href="/blog/1">Post 1: SEO foundations for growth</Link>
        <br />
        <Link href="/blog/2">Post 2: Analytics that drive decisions</Link>
        <p className="mt-8">
          Need help applying these insights? Review our
          <Link href="/services"> services</Link> or learn more
          <Link href="/about"> about our team</Link>.
        </p>
      </div>
    </>
  );
}

// bad titles