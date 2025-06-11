
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ThreeBackground />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ContactCTA />
    </div>
  );
};

export default Index;
