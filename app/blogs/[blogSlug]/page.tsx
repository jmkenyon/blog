import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

interface IParams {
  blogSlug: string;
}

export async function generateMetadata({
  params,
}: {
  params: IParams;
}): Promise<Metadata> {
  const resolvedParams = await params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "content",
    "blogs",
    `${resolvedParams.blogSlug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  const url = `https://joshuakenyon.com/blogs/${params.blogSlug}`;

  return {
    title: `${data.title} | Joshua Kenyon`,
    description: data.excerpt,

    openGraph: {
      title: data.title,
      description: data.excerpt,
      url,
      siteName: "Joshua Kenyon",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "article",
    },
  };
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
    <main className="h-full bg-linear-to-r from-neutral-950 to-neutral-700 text-white/90 relative">
      <Button
        className="absolute md:top-10 top-2 left-0 rounded-l-none text-black"
        variant={"outline"}
        asChild
      >
        <Link href="/">Home</Link>
      </Button>
      <article className="prose prose-invert mx-auto lg:max-w-3xl md:max-w-xl sm:max-w-lg max-w-md py-20 px-5">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center">{data.title}</h1>

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
