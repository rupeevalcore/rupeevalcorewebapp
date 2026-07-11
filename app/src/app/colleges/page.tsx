import AudienceHero, { AudienceHeroConfig } from "@/components/audience/AudienceHero";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import AudienceMetrics from "@/components/audience/AudienceMetrics";
import LearningJourneyTimeline from "@/components/audience/LearningJourneyTimeline";
import ProgrammeModuleGrid from "@/components/audience/ProgrammeModuleGrid";
import DeliveryModelCards from "@/components/audience/DeliveryModelCards";
import LearningOutcomeGrid from "@/components/audience/LearningOutcomeGrid";
import ContextualDownloadCard from "@/components/audience/ContextualDownloadCard";
import ComplianceBlock from "@/components/audience/ComplianceBlock";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { AlertCircle, TrendingUp } from "lucide-react";

const heroConfig: AudienceHeroConfig = {
  themeColor: "sapphire",
  badge: "For Colleges",
  title: "Preparing Students For Financial Life Beyond Graduation.",
  subtitle: "Practical financial literacy programmes designed to equip college students with real-world financial knowledge before they enter the workforce.",
  primaryCta: "Request College Proposal",
  secondaryCta: "Talk to Programme Advisor",
  iconPath: "/colleges_3d.png",
  photoPosition: "top right",
  formUrl: process.env.NEXT_PUBLIC_COLLEGES_FORM_URL
};

const whyMatters = [
  { title: "Unprepared for Salary", description: "Students receive salaries before learning money management.", icon: AlertCircle },
  { title: "No Financial Education", description: "Most graduates enter the workforce without financial education." },
  { title: "Credit Realities", description: "Loans, credit cards and EMIs require financial understanding." },
  { title: "Long-Term Consequences", description: "Early financial mistakes often have long-term consequences.", icon: TrendingUp },
  { title: "Decision Quality", description: "Financial awareness improves long-term decision quality." }
];

const challenges = [
  { title: "Understanding salary structure." },
  { title: "Managing first income." },
  { title: "Credit card misuse." },
  { title: "Lack of tax awareness." },
  { title: "Student loan misunderstandings." },
  { title: "Digital fraud exposure." },
  { title: "Social media financial misinformation." }
];

const timeline = [
  { title: "Engineering Students", description: "Tailored to starting salaries and managing early tech income." },
  { title: "Arts and Science Students", description: "Building core saving habits and understanding financial products." },
  { title: "Commerce Students", description: "Bridging the gap between theoretical commerce and practical wealth management." },
  { title: "MBA Students", description: "Advanced awareness of taxes, corporate structures, and investing." },
  { title: "Professional Courses", description: "Managing unpredictable income and setting long-term goals." },
  { title: "Final Year Placement Batches", description: "A focused bootcamp on managing your very first salary." }
];

const metrics = [
  { label: "Placement Focus", value: "Placement Readiness" },
  { label: "Target Audience", value: "Final Year Students" },
  { label: "Delivery", value: "Auditorium Sessions" }
];

const modules = [
  "Personal Finance Basics", "Banking Fundamentals", "Salary Structure", 
  "Tax Awareness", "Insurance Awareness", "Investment Awareness", 
  "Mutual Fund Awareness", "Stock Market Basics", "Fraud Awareness", 
  "Credit Score Awareness", "Loan Awareness", "Financial Decision Making"
];

const deliveryModels = [
  "Auditorium Sessions", "Department Workshops", "Placement Readiness Programs",
  "Orientation Programs", "Financial Literacy Week", "Online Sessions"
];

const outcomes = [
  "Salary management", "Income tax basics", "Banking fundamentals",
  "Financial products", "Risk and return", "Digital safety", "Financial confidence"
];

const formats = [
  "60 Minute Session", "Half Day Workshop", "Full Day Workshop",
  "Placement Bootcamp", "Multi Session Programme"
];

const faqs = [
  { q: "Is this suitable for engineering students?", a: "Yes, our programs are highly beneficial for engineering students receiving their first salaries." },
  { q: "Is finance background required?", a: "Not at all. We teach from the ground up, assuming zero prior financial knowledge." },
  { q: "Are sessions available online?", a: "Yes, we can conduct large-scale online seminars as well as in-person auditorium sessions." },
  { q: "Are certificates provided?", a: "Yes, students receive a certificate that can enhance their placement profile." },
  { q: "Can modules be customized?", a: "Yes, we can customize the depth of the modules depending on the students' background (e.g., deeper tax modules for MBA students)." }
];

export default function CollegesPage() {
  return (
    <>
      <AudienceHero config={heroConfig} />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv">
          
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Why College Financial Literacy Matters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMatters.map((item, idx) => (
                <AudienceInsightCard 
                  key={idx} 
                  title={item.title} 
                  description={item.description} 
                  icon={item.icon ? <item.icon size={28} strokeWidth={1.5} /> : undefined}
                  delay={idx * 0.1}
                  themeColor="sapphire"
                />
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Challenges College Students Face
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <AudienceInsightCard 
                  key={idx} 
                  title={item.title}
                  delay={idx * 0.1}
                  themeColor="sapphire"
                />
              ))}
            </div>
          </div>

          <div className="mb-24 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
                Who Can Attend
              </h2>
              <LearningJourneyTimeline items={timeline} themeColor="sapphire" />
            </div>
            <div className="sticky top-24">
              <AudienceMetrics metrics={metrics} themeColor="sapphire" />
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Programme Modules
            </h2>
            <ProgrammeModuleGrid modules={modules} themeColor="sapphire" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Delivery Models
            </h2>
            <DeliveryModelCards models={deliveryModels} themeColor="sapphire" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Learning Outcomes
            </h2>
            <LearningOutcomeGrid outcomes={outcomes} themeColor="sapphire" />
          </div>

          <div className="mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Workshop Formats
            </h2>
            <DeliveryModelCards models={formats} themeColor="sapphire" />
          </div>

        </div>
      </section>

      <TestimonialsSection context="colleges" />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv">
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard 
              title="College Financial Literacy Proposal"
              description="Download our comprehensive proposal document designed for placement officers, deans and HODs."
              pdfUrl="/downloads/College_Financial_Literacy_Programme.pdf"
              category="Colleges"
              themeColor="sapphire"
            />
          </div>
          <ComplianceBlock />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      
      <CTASection 
        headline="Prepare Students For Financial Life Beyond Graduation."

        secondaryButtonText="Schedule Discussion"
      />
    </>
  );
}
