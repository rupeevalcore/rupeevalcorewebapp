import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProgramsSection from "@/components/sections/ProgramsSection";

const CurriculumSection = dynamic(() => import("@/components/sections/CurriculumSection"));
const WorkshopGallery = dynamic(() => import("@/components/sections/WorkshopGallery"));
const LearningDeliveryModels = dynamic(() => import("@/components/sections/LearningDeliveryModels"));
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProgramsSection />
      <CurriculumSection />
      <WorkshopGallery />
      <LearningDeliveryModels />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <div className="container-rv mb-24"><ComplianceBlock /></div>
      <CTASection />
    </>
  );
}
