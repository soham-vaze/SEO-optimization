import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-20">
      <h2 className="text-2xl">AI Solutions</h2>
      <p className="mt-2">All rights reserved</p>
      <nav className="mt-4 flex flex-wrap gap-4 text-sm">
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}

// Bad -> multiple H1 later