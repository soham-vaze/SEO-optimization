import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-5">
      <div className="max-w-6xl mx-auto flex gap-8 text-lg">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

// removed broken links, better internal linking,uses Next.js Link