import { Button } from "@/components/ui/button";
import BlogCard from "./components/BlogCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white flex flex-col items-center p-20 relative">
      <Button
        className="absolute top-10 left-0 rounded-l-none text-black animate-bounce animation-duration-[1.5s] repeat-1"
        variant={"outline"}
        asChild
      >
        <Link href="mailto:joshuakenyon1@gmail.com" target="_blank">
          Get in touch
        </Link>
      </Button>
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
