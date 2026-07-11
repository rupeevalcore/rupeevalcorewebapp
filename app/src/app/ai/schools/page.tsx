import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";
import { ContextualDownload } from "@/components/ui/ContextualDownload";

export default function AISchoolsPage() {
  return (
    <>
      <PageHero 
        badge="AI For Schools"
        title="Next-Generation AI Education" 
        description="Equip school students with fundamental AI concepts. We focus on ethical usage, critical thinking, and practical interaction with AI tools."
        themeColor="purple"
      />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv max-w-4xl">
          <div className="glass p-10 rounded-3xl border border-white/5 mb-16">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Preparing for an AI-driven future</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Artificial Intelligence is reshaping every industry. Our school workshops demystify AI, moving beyond the hype to teach practical prompt engineering, critical thinking, and the ethical use of AI tools in daily learning.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-heading font-bold text-accent mb-2">Prompt Engineering Basics</h4>
                <p className="text-sm text-muted-foreground">Teaching students how to effectively communicate with Large Language Models to assist with research and creativity.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-heading font-bold text-accent mb-2">AI Ethics & Safety</h4>
                <p className="text-sm text-muted-foreground">Understanding hallucinations, data privacy, and the responsible use of AI in academic environments.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-16 text-center">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
              AI School Programme Proposal
            </h3>
            <p className="text-muted-foreground mb-8">
              Download our public overview document detailing the AI curriculum for schools.
            </p>
            <div className="max-w-md mx-auto">
              <ContextualDownload 
                title="AI for Schools Brochure" 
                file="AI_for_Schools.pdf" 
                audience="AI Schools" 
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
