import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          SEO Blog
        </h1>

        <ul className="space-y-4">
          <li>
            <Link href="/blog/technical-seo">
              Technical SEO Guide 2026
            </Link>
          </li>

          <li>
            <Link href="/blog/on-page-seo">
              On-Page SEO Best Practices
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}