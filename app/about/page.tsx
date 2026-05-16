import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the team behind AI Solutions and how we help modern businesses grow.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="p-10">
      <h1>About</h1>
      <p className="mt-4">
        AI Solutions is a growth partner focused on helping teams win in search
        and understand performance across every channel.
      </p>
      <h2 className="mt-8 text-2xl">What we deliver</h2>
      <p className="mt-3">
        We combine technical audits, content planning, and analytics to improve
        discoverability and keep results measurable.
      </p>
      <h2 className="mt-8 text-2xl">How we work</h2>
      <p className="mt-3">
        Every engagement starts with a clear baseline, then we prioritize fixes
        that improve crawlability, rankings, and conversion performance.
      </p>
    </div>
  );
}