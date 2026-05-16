import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SEO, analytics, and growth services tailored to help your business scale.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1>Services</h1>
        <p className="mt-4">
          Practical, performance-focused services built to improve visibility
          and decision-making.
        </p>
        <h2 className="mt-8 text-2xl">Core services</h2>
        <h3 className="mt-4 text-xl">SEO strategy and execution</h3>
        <p className="mt-2">
          Technical audits, on-page improvements, and content roadmaps that help
          your site rank and convert.
        </p>
        <h3 className="mt-6 text-xl">Analytics and reporting</h3>
        <p className="mt-2">
          Clear dashboards and KPI tracking so every optimization decision is
          grounded in data.
        </p>
      </div>
    </>
  );
}


// Bad  -> bad heading hierarchy, thin content 