import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProgramsSection from "@/components/sections/ProgramsSection";

export const metadata: Metadata = {
  title: "Financial Literacy Workshops in Chennai | RupeeValcore",
  description: "Practical financial literacy workshops in Chennai for schools, colleges, companies and individuals. Learn money management, banking, investing basics, taxes and financial decision-making. MSME registered.",
  keywords: ["financial literacy workshops Chennai", "financial education Chennai", "financial literacy programs for schools", "financial literacy workshops for college students", "corporate financial wellness Chennai", "personal finance education Chennai"],
  openGraph: {
    title: "Financial Literacy Workshops in Chennai | RupeeValcore",
    description: "Practical financial literacy workshops for schools, colleges, companies and individuals in Chennai and online. MSME registered.",
    url: "https://www.rupeevalcore.in",
    siteName: "RupeeValcore",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Literacy Workshops in Chennai | RupeeValcore",
    description: "Practical financial literacy workshops for schools, colleges, companies and individuals in Chennai.",
  },
  alternates: {
    canonical: "https://www.rupeevalcore.in",
  },
};



const CurriculumSection = dynamic(() => import("@/components/sections/CurriculumSection"));
const WorkshopGallery = dynamic(() => import("@/components/sections/WorkshopGallery"));
const LearningDeliveryModels = dynamic(() => import("@/components/sections/LearningDeliveryModels"));
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"));

import { SectionContainer } from "@/components/ui/SectionContainer";

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
      <SectionContainer className="mb-24">
        <ComplianceBlock />
      </SectionContainer>
      <CTASection />
    </>
  );
}
