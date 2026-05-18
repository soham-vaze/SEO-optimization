import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-5">
      <div className="flex gap-8 text-xl">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}