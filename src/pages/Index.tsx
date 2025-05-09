import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCases } from "@/components/sections/featured-cases";
import { StatsSection } from "@/components/sections/stats-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { caseData } from "@/data/case-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturedCases caseItems={caseData} />
        <StatsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
