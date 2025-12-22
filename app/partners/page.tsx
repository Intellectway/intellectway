import type { Metadata } from "next";
import { ParallaxSection } from "@/components/ui";
import { PartnerText, CompaniesList } from "./components";

export const metadata: Metadata = {
  title: "Partners",
  description: "Discover the organizations and communities we collaborate with.",
};

export default function PartnersPage() {
  return (
    <main>
      <ParallaxSection
        image="/Images/OurPartners.jpg"
        title="Partners"
        breadcrumb="Home/ Partners"
        height="medium"
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <PartnerText />
      </section>
      <section className="mb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <CompaniesList />
        </div>
      </section>
    </main>
  );
}

