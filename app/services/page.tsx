"use client";

import Navbar from "@/components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1>Services</h1>
        <h4>SEO</h4>
        <h2>Analytics</h2>
        <p>We help businesses.</p>
      </div>
    </>
  );
}


// Bad  -> bad heading hierarchy, thin content 