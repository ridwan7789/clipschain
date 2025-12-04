import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import SecuritySection from "@/components/SecuritySection";
import PartnersSection from "@/components/PartnersSection";
import TokenAddress from "@/components/TokenAddress";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemsSection />
        <SolutionsSection />
        <HowItWorksSection />
        <TokenomicsSection />
        <TokenAddress />
        <RoadmapSection />
        <SecuritySection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
