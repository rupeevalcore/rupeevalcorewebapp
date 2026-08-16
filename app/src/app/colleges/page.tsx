import dynamic from "next/dynamic";
import type { Metadata } from "next";
import AudienceHero, { AudienceHeroConfig } from "@/components/audience/AudienceHero";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import AudienceMetrics from "@/components/audience/AudienceMetrics";
import LearningJourneyTimeline from "@/components/audience/LearningJourneyTimeline";
import ProgrammeModuleGrid from "@/components/audience/ProgrammeModuleGrid";
import DeliveryModelCards from "@/components/audience/DeliveryModelCards";
import LearningOutcomeGrid from "@/components/audience/LearningOutcomeGrid";
import { AlertCircle, TrendingUp } from "lucide-react";
import { LEAD_FORMS } from "@/lib/lead-routing";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getFileSize } from "@/lib/server-utils";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ContextualDownloadCard = dynamic(() => import("@/components/audience/ContextualDownloadCard"));
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const WorkshopGallery = dynamic(() => import("@/components/sections/WorkshopGallery"));
const PricingCard = dynamic(() => import("@/components/audience/PricingCard"));

export const metadata: Metadata = {
  title: "Financial Literacy Workshops for College Students in Chennai | RupeeValcore",
  description: "Financial literacy workshops for college students in Chennai covering salary management, taxes, banking, credit, investing basics, fraud awareness and first-salary planning.",
  keywords: ["financial literacy workshops for college students", "financial literacy workshops for colleges", "financial education for college students", "first salary financial literacy workshop", "personal finance workshop for college students"],
  openGraph: {
    title: "Financial Literacy Workshops for College Students in Chennai | RupeeValcore",
    description: "Placement-focused financial literacy for college students — salary, tax, banking, investment basics. Chennai and online.",
    url: "https://www.rupeevalcore.in/colleges",
    siteName: "RupeeValcore",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/colleges" },
};

const heroConfig: AudienceHeroConfig = {
  themeColor: "sapphire",
  badge: "For Colleges",
  title: "Financial Literacy Workshops for College Students in Chennai",
  subtitle: "Preparing students for financial life beyond graduation. Practical financial literacy programmes to equip college students with real-world financial knowledge before they enter the workforce.",
  primaryCta: "Request College Proposal",
  secondaryCta: "Talk to Programme Advisor",
  iconPath: "/colleges_3d.webp",
  photoPosition: "top right",
  formUrl: LEAD_FORMS.colleges,
  analyticsEvent: "college_proposal_requested",
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
      <div className="container-rv pt-20 pb-2">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Financial Literacy Workshops for College Students", href: "/colleges" },
          ]}
        />
      </div>
      <AudienceHero config={heroConfig} />

      <section className="section-padding bg-background/50">
        <SectionContainer>

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

        </SectionContainer>
      </section>

      <WorkshopGallery
        title="Inside a RupeeValcore Workshop"
        subtitle="Interactive sessions designed to help students understand money, banking, financial decision making and real-world financial concepts."
      />

      <TestimonialsSection context="colleges" />

      <ProcessSection themeColor="sapphire" />

      <section className="section-padding bg-background">
        <SectionContainer>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Institutional Investment
            </h2>
            <p className="text-muted-foreground text-lg">
              Equip your graduating students with the financial awareness they need to succeed in the real world.
            </p>
          </div>

          <PricingCard
            title="College Group Sessions"
            price="Custom Pricing"
            description="Tailored financial literacy programmes for final year and placement batches."
            features={[
              "Customized modules based on student background",
              "Interactive Q&A and real-world case studies",
              "Presentation materials and workbooks provided",
              "Post-workshop doubt clearing session",
              "Strictly educational (No financial products sold)"
            ]}
            buttonText="Request Custom Proposal"
            buttonLink={LEAD_FORMS.colleges}
            analyticsEvent="college_proposal_requested"
            themeColor="sapphire"
          />
        </SectionContainer>
      </section>

      <section className="section-padding bg-background/50">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard
              title="College Financial Literacy Proposal"
              description="Placement & Graduate Program Overview"
              features={[
                "Curriculum Overview",
                "Delivery Model",
                "Learning Outcomes",
                "Workshop Structure"
              ]}
              brochureKey="finance-colleges"
              fileSize={getFileSize("downloads/finance-colleges.pdf")}
              thumbnail="/colleges_3d.webp"
              category="Colleges"
              themeColor="sapphire"
              trackingEvent="pdf_download_college"
            />
          </div>
          <ComplianceBlock />
        </SectionContainer>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Prepare Students For Financial Life Beyond Graduation."
        primaryButtonText="Request College Proposal"
        primaryHref={LEAD_FORMS.colleges}
        primaryAnalyticsEvent="college_proposal_requested"
        secondaryButtonText="Discuss Campus Workshop"
      />
    </>
  );
}
