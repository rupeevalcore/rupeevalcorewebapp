import dynamic from "next/dynamic";
import AudienceHero, { AudienceHeroConfig } from "@/components/audience/AudienceHero";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import AudienceMetrics from "@/components/audience/AudienceMetrics";
import LearningJourneyTimeline from "@/components/audience/LearningJourneyTimeline";
import ProgrammeModuleGrid from "@/components/audience/ProgrammeModuleGrid";
import DeliveryModelCards from "@/components/audience/DeliveryModelCards";
import LearningOutcomeGrid from "@/components/audience/LearningOutcomeGrid";
import { AlertCircle, TrendingUp } from "lucide-react";

const ContextualDownloadCard = dynamic(() => import("@/components/audience/ContextualDownloadCard"), { ssr: false });
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

const heroConfig: AudienceHeroConfig = {
  themeColor: "cyan",
  badge: "For Corporates",
  title: "Financial Wellness For Modern Workplaces.",
  subtitle: "Practical financial education programmes designed to improve employee confidence, reduce money stress and support long-term wellbeing.",
  primaryCta: "Request Corporate Proposal",
  secondaryCta: "Talk to Corporate Advisor",
  iconPath: "/corporate_3d.png",
  photoPosition: "bottom left",
  formUrl: process.env.NEXT_PUBLIC_CORPORATE_FORM_URL
};

const whyMatters = [
  { title: "Productivity", description: "Financial stress impacts productivity.", icon: AlertCircle },
  { title: "Wellbeing", description: "Financial uncertainty affects overall wellbeing." },
  { title: "Employee Confidence", description: "Employees actively seek financial confidence." },
  { title: "Decision Quality", description: "Awareness improves decision quality in life and at work." },
  { title: "Healthier Workplaces", description: "Education supports healthier, stress-free workplaces.", icon: TrendingUp }
];

const challenges = [
  { title: "Salary management confusion." },
  { title: "Tax planning anxiety." },
  { title: "Insurance misunderstandings." },
  { title: "Fraud risks and exposure." },
  { title: "Retirement preparation gaps." }
];

const timeline = [
  { title: "Fresh Graduates", description: "Navigating their first salary, understanding taxes, and building saving habits." },
  { title: "Individual Contributors", description: "Managing expenses, avoiding debt traps, and setting mid-term goals." },
  { title: "Team Leads & Managers", description: "Balancing family finances, insurance needs, and long-term investments." },
  { title: "Leadership Teams", description: "Advanced awareness of estate planning, retirement structures, and tax optimization." }
];

const metrics = [
  { label: "Target Audience", value: "20+ Employees" },
  { label: "Track Record", value: "3+ Sessions" },
  { label: "Coverage", value: "Chennai & TN" }
];

const modules = [
  "Salary Management", "Tax Awareness", "Insurance Awareness", 
  "Retirement Planning Awareness", "Fraud Prevention", "Investment Basics", 
  "Financial Goal Planning", "Employee Benefits Awareness"
];

const deliveryModels = [
  "Office Sessions", "Town Hall Events", "Employee Wellness Week",
  "Virtual Sessions", "Hybrid Sessions"
];

const outcomes = [
  "Better salary management", "Reduced financial stress", "Better financial understanding",
  "Increased financial confidence", "Improved long-term planning awareness"
];

const formats = [
  "60 Minute Sessions", "Half Day Workshops", "Full Day Workshops",
  "Wellness Series", "Quarterly Engagement Programmes"
];

const faqs = [
  { q: "Can workshops be customized?", a: "Yes, we tailor the modules based on the demographic and seniority of your employees." },
  { q: "Are online sessions available?", a: "Yes, we conduct highly interactive virtual sessions for remote or hybrid teams." },
  { q: "Can sessions be conducted at our office?", a: "Absolutely. We prefer conducting sessions at your premises for maximum engagement." },
  { q: "Are industry-specific modules available?", a: "Yes, we can adapt our examples for IT Services, Manufacturing, Startups, and other sectors." }
];

export default function CorporatePage() {
  return (
    <>
      <AudienceHero config={heroConfig} />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv">
          
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Why Corporate Financial Wellness Matters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMatters.map((item, idx) => (
                <AudienceInsightCard 
                  key={idx} 
                  title={item.title} 
                  description={item.description} 
                  icon={item.icon ? <item.icon size={28} strokeWidth={1.5} /> : undefined}
                  delay={idx * 0.1}
                  themeColor="cyan"
                />
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Corporate Challenges
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <AudienceInsightCard 
                  key={idx} 
                  title={item.title}
                  delay={idx * 0.1}
                  themeColor="cyan"
                />
              ))}
            </div>
          </div>

          <div className="mb-24 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
                Who Can Attend
              </h2>
              <LearningJourneyTimeline items={timeline} themeColor="cyan" />
            </div>
            <div className="sticky top-24">
              <AudienceMetrics metrics={metrics} themeColor="cyan" />
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Programme Modules
            </h2>
            <ProgrammeModuleGrid modules={modules} themeColor="cyan" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Delivery Models
            </h2>
            <DeliveryModelCards models={deliveryModels} themeColor="cyan" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Learning Outcomes
            </h2>
            <LearningOutcomeGrid outcomes={outcomes} themeColor="cyan" />
          </div>

          <div className="mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Workshop Formats
            </h2>
            <DeliveryModelCards models={formats} themeColor="cyan" />
          </div>

        </div>
      </section>

      <TestimonialsSection context="corporate" />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv">
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard 
              title="Corporate Financial Wellness Proposal"
              description="Download our comprehensive proposal document designed for HRs, Founders, and Team Leads."
              pdfUrl="/proposals/corporate-proposal-2026.pdf"
              category="Corporate"
              themeColor="cyan"
            />
          </div>
          <ComplianceBlock />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      
      <CTASection 
        headline="Build Financially Confident Workplaces."

        secondaryButtonText="Schedule Discussion"
      />
    </>
  );
}
