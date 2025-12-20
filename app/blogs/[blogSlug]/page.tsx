import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface IParams {
  blogSlug?: string;
}

const Page = async ({ params }: { params: Promise<IParams> }) => {
  const resolvedParams = await params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "content",
    "blogs",
    `${(resolvedParams).blogSlug}.mdx`
  );
  

  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);


  return (
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white/90">
    <article className="prose prose-invert mx-auto max-w-3xl py-16">
      <h1 className="text-3xl pb-10">{data.title}</h1>
      <MDXRemote source={content} />
    </article>
    </main>
  );
};

export default Page;
