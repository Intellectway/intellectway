import {
  HeroSection,
  AboutUs,
  ServicesSection,
  CompaniesSection,
  CSRSection,
  BlogsSection,
  OpportunitiesCTA,
  RepresentativeCTA,
  ContactSection,
} from "@/components/home";

export default function Home() {
  return (
    <main style={{ marginTop: '65px' }}>
      <HeroSection />
      <AboutUs />
      <OpportunitiesCTA />
      <ServicesSection />
      <RepresentativeCTA />
      <CompaniesSection />
      <CSRSection />
      <BlogsSection />
      <ContactSection />
    </main>
  );
}
