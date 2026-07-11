import nextDynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProgramsSection from "@/components/sections/ProgramsSection";

const CurriculumSection = nextDynamic(() => import("@/components/sections/CurriculumSection"));
const WorkshopGallery = nextDynamic(() => import("@/components/sections/WorkshopGallery"), { ssr: false });
const LearningDeliveryModels = nextDynamic(() => import("@/components/sections/LearningDeliveryModels"));
const TeamSection = nextDynamic(() => import("@/components/sections/TeamSection"));
const TestimonialsSection = nextDynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const FAQSection = nextDynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const CTASection = nextDynamic(() => import("@/components/sections/CTASection"));
const ComplianceBlock = nextDynamic(() => import("@/components/audience/ComplianceBlock"), { ssr: false });

export const dynamic = 'force-static';

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
