import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    `${resolvedParams.blogSlug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  return (
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white/90 ">
      <Button
        className="fixed sm:top-8 top-2 left-0  rounded-l-none text-black"
        variant={"outline"}
        asChild
      >
        <Link href="/">
          Home
        </Link>
      </Button>
      <article className="prose prose-invert mx-auto max-w-3xl py-20 px-5">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl pb-5">{data.title}</h1>

          {data.image && (
            <div className=" overflow-hidden rounded-2xl  ">
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={800}
                priority
                className="rounded-2xl w-85 h-full"
              />
            </div>
          )}
        </div>
        <MDXRemote source={content} />
      </article>
    </main>
  );
};

export default Page;
