import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParallaxSection } from "@/components/ui";
import { BlogText } from "../components";

async function fetchBlogById(id: string) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const target = `${base.replace(/\/$/, "")}/api/Blogs/${id}`;
  const res = await fetch(target, { method: "GET" });
  if (!res.ok) return null;
  return res.json();
}

type ParamsPayload = {
  id: string;
};

type BlogPageParams = {
  params: ParamsPayload | Promise<ParamsPayload>;
};

const resolveParams = async (params: BlogPageParams["params"]) =>
  Promise.resolve(params);

export async function generateMetadata({
  params,
}: BlogPageParams): Promise<Metadata> {
  const { id } = await resolveParams(params);
  const post = await fetchBlogById(id);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be located.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  // Skip static params generation from local data; let Next handle dynamic rendering.
  return [];
}

export default async function BlogPostPage({ params }: BlogPageParams) {
  const { id } = await resolveParams(params);
  const post = await fetchBlogById(id);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <ParallaxSection
        image="/Images/BlogPage.png"
        title="Blog"
        breadcrumb="Home/ Blog"
        height="medium"
      />
      {/* API returns `description` — render as a single HTML paragraph block */}
      <BlogText title={post.title} content={[post.description]} />
    </main>
  );
}

