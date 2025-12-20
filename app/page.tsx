import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white flex flex-col items-center p-20 relative">
      <section className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">Joshua Kenyon</h1>
        <h2 className="mt-4 text-xl text-neutral-300">
          Writing about startups, software, and building scalable products
        </h2>
      </section>
      <BlogCard />
    </main>
  );
}
