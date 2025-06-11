
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactCTA from "@/components/ContactCTA";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <ThreeBackground />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ContactCTA />
    </div>
  );
};

export default Index;
