import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import TeamSection from "@/components/sections/TeamSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <CurriculumSection />
      <TrustSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
