import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ id: string }>;
};

const posts: Record<
  string,
  { title: string; date: string; content: React.ReactNode }
> = {
  "1": {
    title: "How AI Is Transforming SEO in 2026",
    date: "2026-05-10",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Search engine optimisation has always evolved alongside search engine
          algorithms — but the pace of change accelerated dramatically when
          large language models became central to how Google understands and
          ranks content. In 2026, AI is not just a tool for SEO practitioners;
          it is reshaping the entire discipline from the ground up.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          The End of Keyword Stuffing
        </h2>
        <p className="text-gray-700 mb-6">
          For years, SEO practitioners obsessed over keyword density — the
          percentage of times a target phrase appeared on a page. Google's
          AI-powered ranking systems, including BERT and MUM, fundamentally
          changed this. Today's algorithms evaluate topical authority, semantic
          relevance, and the depth of coverage on a subject. A page that
          genuinely answers a user's question will outrank one that merely
          repeats a keyword dozens of times.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          AI-Generated Content: Opportunity and Risk
        </h2>
        <p className="text-gray-700 mb-6">
          The explosion of AI writing tools has flooded the web with content.
          Google has responded by elevating the importance of E-E-A-T —
          Experience, Expertise, Authoritativeness, and Trustworthiness. Content
          produced by genuine subject matter experts, backed by real-world
          experience and credible citations, consistently outperforms generic
          AI-generated copy. The lesson: use AI to help you write faster, but
          never sacrifice depth, accuracy, or originality.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          Structured Data and the Rise of Rich Results
        </h2>
        <p className="text-gray-700 mb-6">
          Schema markup is more important than ever. As Google's AI summaries
          (previously called SGE, now deeply integrated into search results)
          pull structured information directly from web pages, sites that
          implement JSON-LD schemas for articles, FAQs, products, and
          organisations are far more likely to appear in enriched answer panels.
          This is no longer optional SEO hygiene — it is a competitive
          differentiator.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          Core Web Vitals Remain a Decisive Factor
        </h2>
        <p className="text-gray-700 mb-6">
          Google's Page Experience signals — Largest Contentful Paint, First
          Input Delay, and Cumulative Layout Shift — continue to influence
          rankings. Fast, stable, responsive pages are rewarded. Slow pages with
          layout shifts lose ground even when their content is excellent. AI
          tools that automatically optimise images, defer non-critical
          JavaScript, and predict user navigation patterns are now table stakes
          for competitive SEO.
        </p>
        <h2 className="text-2xl font-bold mb-3">What This Means for You</h2>
        <p className="text-gray-700 mb-6">
          The businesses winning in search today are those that treat SEO
          holistically — combining technical excellence, genuine content
          expertise, and intelligent use of AI tooling. If you are still
          thinking of SEO as a checklist of on-page tweaks, it is time to
          rethink your strategy.
        </p>
        <p className="text-gray-700">
          At AI Solutions, we help businesses build SEO strategies that are
          built for today's AI-driven search landscape.{" "}
          <Link href="/contact" className="text-blue-700 hover:underline">
            Talk to our team
          </Link>{" "}
          to find out how we can help you grow.
        </p>
      </>
    ),
  },
  "2": {
    title: "5 Workflow Automations Every Business Should Implement Today",
    date: "2026-05-03",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-6">
          Manual, repetitive tasks are the silent killers of business
          productivity. They drain your team's time, introduce human error, and
          slow down growth. The good news? AI-powered automation has never been
          more accessible. Here are five workflow automations that deliver
          measurable ROI for businesses at any scale.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          1. Automated Lead Qualification
        </h2>
        <p className="text-gray-700 mb-6">
          Not every website visitor or inbound enquiry is a good fit for your
          business. Manually sorting leads wastes sales team bandwidth on
          low-probability prospects. AI-powered lead scoring models analyse
          hundreds of signals — company size, page engagement, email behaviour,
          job title — and automatically route high-intent leads to sales while
          placing others into nurture sequences. Teams using automated lead
          qualification typically report 35–50% higher sales efficiency.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          2. Invoice Processing and Accounts Payable
        </h2>
        <p className="text-gray-700 mb-6">
          Processing invoices manually is time-consuming and error-prone. AI
          document processing tools — powered by optical character recognition
          and natural language understanding — can extract key fields from
          invoices, match them against purchase orders, flag discrepancies, and
          post them to accounting systems automatically. Finance teams that
          deploy invoice automation reduce processing time by up to 80% and
          dramatically cut late payment penalties.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          3. Customer Support Triage
        </h2>
        <p className="text-gray-700 mb-6">
          AI chatbots and support triage systems can resolve a significant
          proportion of incoming customer queries without human involvement —
          answering FAQs, checking order statuses, and processing basic requests
          around the clock. For queries that do require human attention, AI
          triage routes tickets to the right team with full context already
          attached, reducing average handling time significantly.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          4. Content Distribution and Social Scheduling
        </h2>
        <p className="text-gray-700 mb-6">
          Publishing great content is only half the battle — distribution is
          where most businesses fall short. Automation tools can take a single
          piece of long-form content, generate platform-appropriate summaries
          for LinkedIn, Twitter/X, and email, schedule posts at optimal times
          based on audience engagement data, and track performance — all without
          manual intervention.
        </p>
        <h2 className="text-2xl font-bold mb-3">
          5. Reporting and Analytics Delivery
        </h2>
        <p className="text-gray-700 mb-6">
          How much time does your team spend pulling together weekly or monthly
          reports? Automated reporting pipelines connect directly to your data
          sources — CRM, advertising platforms, analytics tools — and generate
          formatted reports on a schedule, delivered directly to stakeholders'
          inboxes. No more manual exports, formatting, or chasing data from
          multiple systems.
        </p>
        <h2 className="text-2xl font-bold mb-3">Getting Started</h2>
        <p className="text-gray-700">
          The key to successful automation is starting with the processes that
          consume the most time and carry the highest error risk. Begin with one
          automation, measure the impact, and build from there.{" "}
          <Link href="/contact" className="text-blue-700 hover:underline">
            Get in touch with our team
          </Link>{" "}
          to identify the highest-value automation opportunities in your
          business.
        </p>
      </>
    ),
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = posts[id];
  const title = post?.title ?? `Blog Post ${id}`;
  return {
    title,
    description:
      "Read our latest blog post — detailed insights and information from the AI Solutions team.",
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      title: `${title} | AI Solutions`,
      description:
        "Read our latest blog post — detailed insights and information from the AI Solutions team.",
      url: `/blog/${id}`,
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const post = posts[id];
  const title = post?.title ?? `Blog Post ${id}`;
  const date = post?.date ?? new Date().toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "AI Solutions",
      url: "https://yourdomain.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Solutions",
      url: "https://yourdomain.com",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/images/image.jpg",
      },
    },
    url: `https://yourdomain.com/blog/${id}`,
    mainEntityOfPage: `https://yourdomain.com/blog/${id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="max-w-3xl mx-auto p-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: title, href: `/blog/${id}` },
          ]}
        />
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <article className="prose prose-lg max-w-none">
          {post?.content ?? (
            <p>This post is not available yet. Check back soon.</p>
          )}
        </article>

        {/* Related Posts */}
        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="space-y-4">
            {Object.entries(posts)
              .filter(([key]) => key !== id)
              .map(([key, relatedPost]) => (
                <Link
                  key={key}
                  href={`/blog/${key}`}
                  className="block border rounded-xl p-5 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-700">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="mt-10 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/services"
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-700 mb-1">AI-Powered SEO</h3>
              <p className="text-sm text-gray-600">
                Climb the search rankings with machine-learning-driven SEO strategies.
              </p>
            </Link>
            <Link
              href="/services"
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-700 mb-1">Workflow Automation</h3>
              <p className="text-sm text-gray-600">
                Automate repetitive tasks and free your team for higher-value work.
              </p>
            </Link>
            <Link
              href="/services"
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-700 mb-1">AI Strategy Consulting</h3>
              <p className="text-sm text-gray-600">
                Build a practical AI roadmap with expert guidance from our consultants.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}