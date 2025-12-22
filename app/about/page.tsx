import type { Metadata } from "next";
import { ParallaxSection } from "@/components/ui";
import { AboutText, MissionVisionValues } from "./components";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about IntellectWay and our mission.",
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#F1F1F1" }}>
      <ParallaxSection
        image="/Images/AboutParrallax.jpg"
        title="About us"
        breadcrumb="Home/ About"
        height="short"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-[50px]">
        <AboutText />
      </section>
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MissionVisionValues />
        </div>
      </section>
    </main>
  );
}

