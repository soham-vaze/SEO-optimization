"use client";

import Navbar from "@/components/Navbar";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1>Blog</h1>

        <a href="/blog/1">Post 1</a>
        <br />
        <a href="/blog/2">Post 2</a>
      </div>
    </>
  );
}

// bad titles