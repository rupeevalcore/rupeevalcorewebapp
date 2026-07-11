import PageHero from "@/components/layout/PageHero";
import CurriculumSection from "@/components/sections/CurriculumSection";
import CTASection from "@/components/sections/CTASection";

export default function FinancialLiteracyPage() {
  return (
    <>
      <PageHero 
        badge="Flagship Program"
        title="Financial Literacy Program" 
        description="Our core curriculum designed to build a strong foundation in personal finance, investment, and money management."
      />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-heading font-bold text-3xl mb-6">Why Financial Literacy Matters</h2>
            <p className="text-muted-foreground mb-8">
              In today&apos;s complex economic landscape, understanding money is no longer optional—it&apos;s a critical life skill. Our program breaks down complex financial jargon into practical, actionable steps that anyone can follow. We cover everything from basic budgeting to advanced tax planning, ensuring you have the knowledge to make informed decisions.
            </p>
            
            <h3 className="font-heading font-bold text-2xl mb-4 text-accent">Program Highlights</h3>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-12 marker:text-accent">
              <li>No prior financial knowledge required</li>
              <li>Unbiased education with zero product selling</li>
              <li>Interactive modules with real-world case studies</li>
              <li>Practical templates for budgeting and tracking</li>
            </ul>
          </div>
        </div>
      </section>

      <CurriculumSection />
      <CTASection />
    </>
  );
}
