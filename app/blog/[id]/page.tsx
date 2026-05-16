export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        {id.replace("-", " ")}
      </h1>

      <p className="mb-4">
        Search engine optimization continues
        to evolve with the rise of AI-powered
        search experiences.
      </p>

      <p className="mb-4">
        Technical SEO ensures websites are
        crawlable, while on-page SEO improves
        relevance and usability.
      </p>

      <p>
        AI SEO focuses on helping content appear
        in generative AI responses such as
        ChatGPT and Gemini.
      </p>
    </main>
  );
}

/*
Improvements:
1. Removed thin content
2. Added richer keyword content
3. Better semantic depth
*/