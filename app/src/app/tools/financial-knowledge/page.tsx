import type { Metadata } from "next";
import KnowledgeAssessment from "@/components/financial-knowledge/KnowledgeAssessment";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Financial Literacy Quiz | Check Your Financial Knowledge | RupeeValcore",
  description: "Answer practical financial-literacy questions and discover your financial knowledge level across budgeting, saving, inflation, compounding and other essential money concepts.",
  keywords: [
    "financial literacy quiz",
    "financial knowledge test",
    "money management quiz",
    "financial literacy assessment",
    "personal finance quiz India",
    "financial education test Chennai",
  ],
  openGraph: {
    title: "Financial Literacy Quiz | Check Your Financial Knowledge | RupeeValcore",
    description: "Answer 10 real-life questions and discover what you know — and what you could learn next. Free 3-minute financial literacy assessment.",
    url: "https://www.rupeevalcore.in/tools/financial-knowledge",
    siteName: "RupeeValcore",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Literacy Quiz | RupeeValcore",
    description: "Answer 10 practical questions to check your Financial Knowledge Level. Free educational assessment with immediate results.",
  },
  alternates: {
    canonical: "https://www.rupeevalcore.in/tools/financial-knowledge",
  },
};

export default function FinancialKnowledgePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-2 container-rv">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Financial Knowledge Assessment", href: "/tools/financial-knowledge" },
          ]}
        />
      </div>

      {/* Hero Header */}
      <ShootingStarsGrid
        className="min-h-[35vh] rounded-none border-none shadow-none pt-4 pb-8"
        contentClassName="h-full w-full flex items-center justify-center p-0"
        interactive={false}
        starCount={20}
        shootingStarCount={2}
        glow={false}
      >
        <div className="container-rv relative z-10 text-center">
          <div className="inline-block text-[11px] font-bold text-accent uppercase tracking-widest px-3.5 py-1 rounded-full glass border border-white/10 shadow-lg mb-6 backdrop-blur-md">
            Educational Assessment
          </div>

          <div className="relative max-w-3xl mx-auto mb-4">
            <div className="absolute inset-0 bg-accent/10 blur-[80px] -z-10 rounded-full" />
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.15]">
              How Strong Is Your Financial Knowledge?
            </h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Answer 10 real-life questions and discover what you know &mdash; and what you could learn next.
          </p>
        </div>
      </ShootingStarsGrid>

      {/* Main Interactive Tool */}
      <SectionContainer className="pb-20 sm:pb-28">
        <KnowledgeAssessment />
      </SectionContainer>
    </main>
  );
}
