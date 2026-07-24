import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "AI Literacy Workshops for Schools & Colleges in Chennai | Rupeevalcore",
  description: "Rupeevalcore's AI education division equips schools and colleges with practical AI literacy. Prompt engineering, AI ethics, critical thinking, and future-ready skills for students.",
  openGraph: {
    title: "AI Literacy Workshops for Institutions | Rupeevalcore",
    description: "Practical AI literacy programmes for schools and colleges. Prompt engineering, ethics, and real-world AI skills. Chennai.",
    url: "https://www.rupeevalcore.in/ai",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/ai" },
};


export default function AILandingPage() {
  return (
    <>
      <PageHero 
        badge="Rupeevalcore AI Division"
        title="AI Education for Institutions" 
        description="Equipping schools and colleges with practical, future-ready Artificial Intelligence literacy."
      />
      
      <section className="section-padding bg-background/50">
        <SectionContainer className="max-w-4xl">
          <div className="glass p-10 rounded-[32px] border border-white/5 mb-16">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why AI Literacy?</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Artificial Intelligence is transforming every industry. Our AI workshops are designed to demystify AI concepts, teach practical prompt engineering, and prepare students for an AI-driven future—ethically and responsibly.
            </p>
          </div>
        </SectionContainer>
      </section>

      <CTASection />
    </>
  );
}
