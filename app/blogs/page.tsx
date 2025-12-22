import type { Metadata } from "next";
import { ParallaxSection } from "@/components/ui";
import BlogsList from "./components/BlogsList";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights, stories, and strategies from the IntellectWay team.",
};

const paginationItems = [1, 2, "ellipsis", 9, 10] as const;
const currentPage = 1;

export default function BlogsPage() {
  return (
    <main style={{ backgroundColor: "#F1F1F1" }}>
      <ParallaxSection
        image="/Images/BlogPage.png"
        title="Blog"
        breadcrumb="Home/ Blog"
        height="medium"
      />
      
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-[50px]">
        <BlogsList />
      </section>
    </main>
  );
}

