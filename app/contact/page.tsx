export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1>Contact Us</h1>

      <form className="space-y-4">
        <input
          className="border p-3 w-full"
          placeholder="Your name"
        />
        <input
          className="border p-3 w-full"
          placeholder="Email"
        />
      </form>
    </main>
  );
}