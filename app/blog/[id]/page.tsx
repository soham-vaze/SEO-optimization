export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        {id.replace("-", " ")}
      </h1>

      <p>
        This article explains modern SEO best practices,
        including technical SEO, content optimization,
        and structured data.
      </p>
    </main>
  );
}