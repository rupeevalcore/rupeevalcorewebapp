import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";

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
      />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">For Schools</h3>
              <p className="text-muted-foreground mb-6">Download our comprehensive proposal detailing the AI curriculum structure for school students.</p>
              <a href={process.env.NEXT_PUBLIC_AI_SCHOOLS_FORM_URL || "#"} target="_blank" rel="noopener noreferrer" className="btn-accent w-full justify-center text-center inline-flex">Request School Proposal</a>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">For Colleges</h3>
              <p className="text-muted-foreground mb-6">Download the advanced AI workshop proposal designed for college students and faculty.</p>
              <a href={process.env.NEXT_PUBLIC_AI_COLLEGES_FORM_URL || "#"} target="_blank" rel="noopener noreferrer" className="btn-accent w-full justify-center text-center inline-flex">Request College Proposal</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
