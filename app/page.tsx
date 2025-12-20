"use client";

import Image from "next/image";
import { useBlogData } from "./assets/blogData";

export default function Home() {
  const blogData = useBlogData();
  return (
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white flex flex-col items-center p-20 relative">
      <section className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">Joshua Kenyon</h1>
        <h2 className="mt-4 text-xl text-neutral-300">
          Writing about startups, software, and building scalable products
        </h2>
      </section>
      <section className="pt-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 cursor-pointer">
        {blogData.map((blog, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold tracking-tight text-white">
                {blog.title}
              </h2>

              <p className="mt-2 text-sm text-neutral-300">
                {blog.content.substring(0, 150)}…
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
