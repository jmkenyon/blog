import { Button } from "@/components/ui/button";
import BlogCard from "./components/BlogCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white flex flex-col items-center py-20 md:px-20 sm:px-10 px-5 relative">
      <Button
        className="absolute sm:top-10 top-2 left-0 rounded-l-none text-black"
        variant={"outline"}
        asChild
      >
        <Link href="mailto:joshuakenyon1@gmail.com" target="_blank">
          Get in touch
        </Link>
      </Button>
      <section className="flex flex-col items-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">Joshua Kenyon</h1>
        <h2 className="mt-4 md:text-xl sm:text-base text-sm  text-neutral-300">
          Writing about startups, software, and building scalable products
        </h2>
      </section>
      <BlogCard />
    </main>
  );
}
