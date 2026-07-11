import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";
import { ContextualDownload } from "@/components/ui/ContextualDownload";

export default function AICollegesPage() {
  return (
    <>
      <PageHero 
        badge="AI For Colleges"
        title="AI Orientation Programme" 
        description="Bridge the skills gap with our comprehensive AI orientation for college students. Learn to leverage AI for research, productivity, and career advancement."
        themeColor="purple"
      />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv max-w-4xl">
          <div className="glass p-10 rounded-3xl border border-white/5 mb-16">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">AI as a Professional Co-pilot</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Employers are actively seeking graduates who know how to leverage AI to increase productivity. Our college programs focus on advanced prompt engineering, automating routine tasks, and understanding the strategic implementation of AI in the workplace.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-heading font-bold text-accent mb-2">Advanced Prompting</h4>
                <p className="text-sm text-muted-foreground">Moving beyond basic queries to structured, context-rich prompting for complex problem solving.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-heading font-bold text-accent mb-2">Workflow Automation</h4>
                <p className="text-sm text-muted-foreground">Practical examples of how to use AI tools to draft reports, analyze data, and streamline entry-level tasks.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-16 text-center">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
              AI College Programme Proposal
            </h3>
            <p className="text-muted-foreground mb-8">
              Download our public overview document for college administrators and placement cells.
            </p>
            <div className="max-w-md mx-auto">
              <ContextualDownload 
                title="AI for Colleges Brochure" 
                file="AI_for_Colleges.pdf" 
                audience="AI Colleges" 
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
