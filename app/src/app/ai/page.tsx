import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";

import { SectionContainer } from "@/components/ui/SectionContainer";

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
