import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpertiseShowcase from "@/components/ExpertiseShowcase";
import ExperienceAccordion from "@/components/ExperienceAccordion";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />
        <ExpertiseShowcase />
        <ExperienceAccordion />
        <SkillsSection />
        <EducationSection />
      </main>

      <Footer />
    </div>
  );
}
