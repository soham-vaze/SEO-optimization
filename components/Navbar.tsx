"use client";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-5">
      <div className="flex gap-8 text-xl">
        <a href="/">Home</a>
        <a href="/page1">Services</a>
        <a href="/page2">Blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

// Intentional issues -> bad URLS(/pahe1, /page2), uses <a> and not Link, broken links