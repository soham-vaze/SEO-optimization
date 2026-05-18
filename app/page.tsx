"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-[1400px] mx-auto p-10">
        <h1 className="text-6xl mb-6">Welcome</h1>
        <h1 className="text-4xl mb-6">AI Solutions</h1>

        <img
          src="/images/image.jpg"
          className="w-full h-[700px] object-cover"
        />

        <p className="mt-10 text-xl">
          Welcome to our company. We provide services.
        </p>

        <div className="mt-10">
          <a href="/old-page" className="text-blue-700 underline">
            Learn More
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

// Intentional bad -> "use client"(client side rendering), multiple H1, raw <img>, missing alt, huge image(1.7 MB), thin content, broken link, fixed width (bad for mobile use)