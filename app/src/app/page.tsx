import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProgramsSection from "@/components/sections/ProgramsSection";

export const metadata: Metadata = {
  title: "Financial Literacy Workshops in Chennai | Schools, Colleges, Corporates — Rupeevalcore",
  description: "Rupeevalcore offers certified financial literacy workshops for schools, colleges, corporates and individuals in Chennai. MSME registered. NISM certified faculty. No products sold. Pure education.",
  keywords: ["financial literacy Chennai", "financial literacy workshops Chennai", "financial literacy for schools Chennai", "financial literacy for colleges Chennai", "corporate financial wellness Chennai", "NISM certified", "financial education India"],
  openGraph: {
    title: "Financial Literacy Workshops in Chennai | Rupeevalcore",
    description: "Certified financial literacy workshops for schools, colleges, corporates and individuals. NISM certified. MSME registered. Chennai.",
    url: "https://rupeevalcore.in",
    siteName: "Rupeevalcore",
    images: [{ url: "https://rupeevalcore.in/og-home.jpg", width: 1200, height: 630, alt: "Rupeevalcore Financial Literacy Workshops" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Literacy Workshops in Chennai | Rupeevalcore",
    description: "Certified financial literacy workshops for schools, colleges, corporates and individuals in Chennai.",
    images: ["https://rupeevalcore.in/og-home.jpg"],
  },
  alternates: {
    canonical: "https://rupeevalcore.in",
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
