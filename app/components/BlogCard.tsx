"use client"
import Image from "next/image";
import { useBlogData } from "../assets/blogData";
import Link from "next/link";


const BlogCard = () => {
    const blogData = useBlogData();
  return (
    
    <section className="pt-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 cursor-pointer">
    {blogData.map((blog, index) => (
       
      <article
        key={index}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
      >
         <Link href={`/blogs/${blog.slug}`}>
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
            {blog.excerpt}
          </p>
        </div>
        </Link>
      </article>
  
    ))}
  </section>

  )
}

export default BlogCard