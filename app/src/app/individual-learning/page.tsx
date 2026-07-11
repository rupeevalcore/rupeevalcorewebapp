import dynamic from "next/dynamic";
import AudienceHero, { AudienceHeroConfig } from "@/components/audience/AudienceHero";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import AudienceMetrics from "@/components/audience/AudienceMetrics";
import LearningJourneyTimeline from "@/components/audience/LearningJourneyTimeline";
import ProgrammeModuleGrid from "@/components/audience/ProgrammeModuleGrid";
import DeliveryModelCards from "@/components/audience/DeliveryModelCards";
import LearningOutcomeGrid from "@/components/audience/LearningOutcomeGrid";
import { AlertCircle, TrendingUp } from "lucide-react";

const ContextualDownloadCard = dynamic(() => import("@/components/audience/ContextualDownloadCard"));
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const WorkshopGallery = dynamic(() => import("@/components/sections/WorkshopGallery"));

const heroConfig: AudienceHeroConfig = {
  themeColor: "orange",
  badge: "For Individuals & Families",
  title: "Personal Financial Education Without Product Selling.",
  subtitle: "One-to-one mentoring and family sessions designed to help you understand personal finance, taxes, and long-term planning without the pressure of hidden commissions.",
  primaryCta: "Book 1-to-1 Session",
  secondaryCta: "Talk to Advisor",
  iconPath: "/individual_3d.png",
  photoPosition: "bottom right",
  formUrl: process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL
};

const whyMatters = [
  { title: "Unbiased Education", description: "Most financial advice is tied to product sales.", icon: AlertCircle },
  { title: "Personalized Needs", description: "Financial situations are deeply personal and unique." },
  { title: "Family Alignment", description: "Couples and families need aligned financial understanding." },
  { title: "Better Decisions", description: "Knowledge helps you evaluate financial products confidently." },
  { title: "Long-Term Growth", description: "Understanding compounding and planning yields long-term results.", icon: TrendingUp }
];

const challenges = [
  { title: "Confusion around where to start." },
  { title: "Fear of making the wrong financial decisions." },
  { title: "Information overload from the internet." },
  { title: "Hidden fees in financial products." },
  { title: "Misaligned financial goals within families." }
];

const timeline = [
  { title: "Young Professionals", description: "Starting the financial journey, understanding taxes, and building emergency funds." },
  { title: "Couples", description: "Aligning financial goals, managing joint expenses, and planning for life events." },
  { title: "Families", description: "Understanding insurance needs, children's education planning, and long-term wealth building." },
  { title: "Pre-Retirees", description: "Structuring assets, understanding risk, and preparing for life after work." }
];

const metrics = [
  { label: "Format", value: "1-to-1 Sessions" },
  { label: "For Whom", value: "Family Sessions" },
  { label: "Delivery", value: "Online Mentoring" }
];

const modules = [
  "Personal Finance Basics", "Expense Management", "Emergency Funds", 
  "Tax Planning Basics", "Insurance Assessment", "Retirement Fundamentals", 
  "Goal Setting", "Avoiding Scams & Fraud"
];

const deliveryModels = [
  "1-to-1 Online Sessions", "1-to-1 In-Person Sessions", "Couples Financial Mentoring",
  "Family Financial Bootcamps", "Ask-Me-Anything Sessions"
];

const outcomes = [
  "Clear financial understanding", "Confidence in decision making", "Aligned family goals",
  "Understanding of risk and return", "Awareness of hidden fees"
];

const formats = [
  "Initial Consultation", "Deep Dive Strategy Session", "Ongoing Mentoring",
  "Family Workshop"
];

const faqs = [
  { q: "Are you selling any mutual funds or insurance?", a: "Absolutely not. We are an education-only platform. We do not sell any financial products." },
  { q: "Can my spouse join the session?", a: "Yes, we highly encourage couples to attend together." },
  { q: "Is the session confidential?", a: "Yes, all 1-to-1 and family sessions are strictly confidential." },
  { q: "Do you offer investment advice?", a: "No, we do not offer investment advice, stock recommendations, or portfolio management. We teach you the frameworks to make your own informed decisions." }
];

export default function IndividualPage() {
  return (
    <>
      <AudienceHero config={heroConfig} />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv">
          
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Why Unbiased Financial Education Matters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMatters.map((item, idx) => (
                <AudienceInsightCard 
                  key={idx} 
                  title={item.title} 
                  description={item.description} 
                  icon={item.icon ? <item.icon size={28} strokeWidth={1.5} /> : undefined}
                  delay={idx * 0.1}
                  themeColor="orange"
                />
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Challenges Individuals Face
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <AudienceInsightCard 
                  key={idx} 
                  title={item.title}
                  delay={idx * 0.1}
                  themeColor="orange"
                />
              ))}
            </div>
          </div>

          <div className="mb-24 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
                Who Can Attend
              </h2>
              <LearningJourneyTimeline items={timeline} themeColor="orange" />
            </div>
            <div className="sticky top-24">
              <AudienceMetrics metrics={metrics} themeColor="orange" />
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Programme Modules
            </h2>
            <ProgrammeModuleGrid modules={modules} themeColor="orange" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Delivery Models
            </h2>
            <DeliveryModelCards models={deliveryModels} themeColor="orange" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Learning Outcomes
            </h2>
            <LearningOutcomeGrid outcomes={outcomes} themeColor="orange" />
          </div>

          <div className="mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Session Formats
            </h2>
            <DeliveryModelCards models={formats} themeColor="orange" />
          </div>

        </div>
      </section>

      <TestimonialsSection context="individual" />
      
      <section className="section-padding bg-background/50">
        <div className="container-rv">
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard 
              title="Individual & Family Programme Overview"
              description="Download our detailed outline of topics covered during our 1-to-1 mentoring sessions."
              pdfUrl="/downloads/Individual_Financial_Literacy_Programme.pdf"
              category="Individuals"
              themeColor="orange"
            />
          </div>
          <ComplianceBlock />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      
      <CTASection 
        headline="Take Control Of Your Financial Journey."

        secondaryButtonText="WhatsApp Us"
      />
    </>
  );
}
