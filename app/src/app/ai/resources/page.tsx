import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";
import { ContextualDownload } from "@/components/ui/ContextualDownload";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getBrochure } from "@/lib/brochures";

const schoolBrochure = getBrochure("ai-schools");
const collegeBrochure = getBrochure("ai-colleges");

export const metadata: Metadata = {
  title: "AI Education Proposals & Resources for Schools and Colleges | Rupeevalcore",
  description: "Download AI literacy programme proposals for schools and colleges from Rupeevalcore. Curriculum overviews, brochures, and resources for institutions looking to introduce AI education.",
  openGraph: {
    title: "AI Education Resources for Institutions | Rupeevalcore",
    description: "Downloadable AI literacy proposals and brochures for schools and colleges. Chennai and online.",
    url: "https://www.rupeevalcore.in/ai/resources",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/ai/resources" },
};

export default function AIResourcesPage() {
  return (
    <>
      <PageHero 
        badge="AI Resources"
        title="AI Learning Resources & Proposals" 
        description="Downloadable materials and proposals for implementing AI education in your institution."
        themeColor="purple"
      />
      
      <section className="section-padding bg-background/50">
        <SectionContainer className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">For Schools</h3>
                <p className="text-muted-foreground text-sm mb-6">Download our comprehensive proposal detailing the AI curriculum structure for school students (Grades 6–12).</p>
              </div>
              <ContextualDownload
                title={schoolBrochure.title}
                brochureKey={schoolBrochure.key}
                audience="AI Schools"
              />
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">For Colleges</h3>
                <p className="text-muted-foreground text-sm mb-6">Download the advanced AI workshop proposal designed for college students, placement cells, and IQAC clearance.</p>
              </div>
              <ContextualDownload
                title={collegeBrochure.title}
                brochureKey={collegeBrochure.key}
                audience="AI Colleges"
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      <CTASection />
    </>
  );
}
