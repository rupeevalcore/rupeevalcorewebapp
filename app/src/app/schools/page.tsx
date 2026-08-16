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
const WorkshopFormatTable = dynamic(() => import("@/components/audience/WorkshopFormatTable"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const WorkshopGallery = dynamic(() => import("@/components/sections/WorkshopGallery"));

export const metadata: Metadata = {
  title: "Financial Literacy Programs for Schools in Chennai | RupeeValcore",
  description: "Financial literacy programs for school students from Grade 3–12 in Chennai. Covering saving, budgeting, banking, digital payments, UPI safety, fraud awareness and financial decision-making.",
  keywords: ["financial literacy programs for schools", "financial literacy workshops for schools", "financial education for school students", "financial literacy workshop Chennai schools", "money management workshops for students"],
  openGraph: {
    title: "Financial Literacy Programs for Schools in Chennai | RupeeValcore",
    description: "Interactive financial literacy sessions for school students — banking, savings, budgeting, digital safety. Grades 3–12. Chennai and online.",
    url: "https://www.rupeevalcore.in/schools",
    siteName: "RupeeValcore",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/schools" },
};

const heroConfig: AudienceHeroConfig = {
  themeColor: "emerald",
  badge: "For Schools",
  title: "Financial Literacy Programs for Schools in Chennai",
  subtitle: "Building financial confidence early. Practical financial literacy programmes designed for school students from Grade 3 to Grade 12 — covering responsible money habits, digital financial awareness and real-world financial understanding.",
  primaryCta: "Request School Proposal",
  secondaryCta: "Talk to Programme Advisor",
  iconPath: "/schools_3d.webp",
  photoPosition: "top left",
  formUrl: LEAD_FORMS.schools,
  analyticsEvent: "school_proposal_requested",
};

const whyMatters = [
  { title: "Rarely Taught", description: "Students learn mathematics but rarely learn money management.", icon: AlertCircle },
  { title: "Digital Payments", description: "Digital payments are growing rapidly among younger generations.", icon: TrendingUp },
  { title: "Early Habits", description: "Financial habits are formed early in life." },
  { title: "Long-Term Impact", description: "Financial literacy supports better long-term decision making." },
  { title: "Responsible Adulthood", description: "Financial awareness helps students become responsible adults." }
];

const challenges = [
  { title: "Understanding spending but not saving." },
  { title: "Using UPI but not understanding banking." },
  { title: "Knowing brands but not budgeting." },
  { title: "Missing from formal curriculums." },
  { title: "Exposure to digital financial fraud." }
];

const timeline = [
  { title: "Grade 3 – Grade 5", description: "Introduction to money, saving habits and responsible spending." },
  { title: "Grade 6 – Grade 8", description: "Banking awareness, budgeting and digital payment literacy." },
  { title: "Grade 9 – Grade 10", description: "Financial decision making, fraud awareness and financial responsibility." },
  { title: "Grade 11 – Grade 12", description: "Banking, taxation awareness, insurance basics and introduction to investing concepts." }
];

const metrics = [
  { label: "Target Audience", value: "Grade 3–12" },
  { label: "Languages", value: "English & Tamil" },
  { label: "Delivery", value: "Chennai & Online" }
];

const modules = [
  "Money Basics", "Saving Habits", "Budgeting", "Banking Fundamentals",
  "Digital Payments", "UPI Safety", "Fraud Awareness", "Insurance Awareness",
  "Tax Awareness", "Goal Setting", "Financial Decision Making"
];

const deliveryModels = [
  "Classroom Sessions", "Auditorium Sessions", "Financial Literacy Week",
  "Annual Engagement Programmes", "Online Sessions", "Hybrid Sessions"
];

const outcomes = [
  "Responsible spending", "Saving discipline", "Banking fundamentals",
  "Fraud prevention", "Financial confidence", "Goal-oriented thinking", "Digital financial safety"
];

const schoolFormats = [
  {
    name: "60 Minute Awareness Session",
    duration: "60 Minutes",
    bestFor: "Single Grade / Assembly",
    pricing: "Custom Pricing",
    highlights: ["Interactive Quiz", "Money Basics", "Digital Safety Overview"]
  },
  {
    name: "Half Day Workshop",
    duration: "3 Hours",
    bestFor: "Grade 6 to 12 Batches",
    pricing: "Custom Pricing",
    highlights: ["Banking Fundamentals", "Budgeting Exercise", "UPI Fraud Awareness"]
  },
  {
    name: "Full Day Workshop",
    duration: "6 Hours",
    bestFor: "Comprehensive Campus Event",
    pricing: "Custom Pricing",
    highlights: ["Complete Curriculum", "Gamified Learning", "Certificates Included"]
  },
  {
    name: "Multi-Session Programme",
    duration: "4 - 8 Sessions",
    bestFor: "Term-long Integration",
    pricing: "Custom Pricing",
    highlights: ["Grade-wise Curriculum", "Progress Assessments", "Parent Orientation"]
  },
  {
    name: "Financial Literacy Club Model",
    duration: "Annual",
    bestFor: "Institutional Partnership",
    pricing: "Custom Pricing",
    highlights: ["Student Club Setup", "Monthly Activities", "Guest Mentors"]
  }
];

const testimonials = [
  {
    text: "The financial literacy session introduced practical money concepts in a simple and engaging format that resonated well with our students. The workshop encouraged meaningful discussions around saving, budgeting and responsible financial decision-making.",
    author: "Saravaloka International School",
    role: "Chennai"
  }
];

const faqs = [
  { q: "Do you conduct sessions in Chennai only?", a: "We conduct in-person sessions in Chennai and offer online sessions globally." },
  { q: "Are online sessions available?", a: "Yes, fully interactive online sessions are available." },
  { q: "Are programmes available in Tamil?", a: "Yes, we offer sessions in English, Tamil, or bilingual." },
  { q: "Which grades can participate?", a: "Our modules are designed for students from Grade 3 through Grade 12." },
  { q: "Can schools customize modules?", a: "Absolutely. We can tailor the curriculum to suit your specific requirements." },
  { q: "Are certificates provided?", a: "Yes, participants receive a certificate of completion." },
  { q: "What is the minimum participant requirement?", a: "We can accommodate groups as small as a single classroom or as large as an entire grade." }
];

export default function SchoolsPage() {
  return (
    <>
      <div className="container-rv pt-20 pb-2">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Financial Literacy Programs for Schools", href: "/schools" },
          ]}
        />
      </div>
      <AudienceHero config={heroConfig} />

      <section className="section-padding bg-background/50">
        <SectionContainer>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Why Financial Literacy Matters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMatters.map((item, idx) => (
                <AudienceInsightCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  icon={item.icon ? <item.icon size={28} strokeWidth={1.5} /> : undefined}
                  delay={idx * 0.1}
                  themeColor="emerald"
                />
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10 text-center">
              Challenges Schools Face
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <AudienceInsightCard
                  key={idx}
                  title={item.title}
                  delay={idx * 0.1}
                  themeColor="emerald"
                />
              ))}
            </div>
          </div>

          <div className="mb-24 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
                Who Can Attend
              </h2>
              <LearningJourneyTimeline items={timeline} themeColor="emerald" />
            </div>
            <div className="sticky top-24">
              <AudienceMetrics metrics={metrics} themeColor="emerald" />
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Programme Modules
            </h2>
            <ProgrammeModuleGrid modules={modules} themeColor="emerald" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Delivery Models
            </h2>
            <DeliveryModelCards models={deliveryModels} themeColor="emerald" />
          </div>

          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Learning Outcomes
            </h2>
            <LearningOutcomeGrid outcomes={outcomes} themeColor="emerald" />
          </div>

          <div className="mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Workshop Formats & Structure
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Choose the format that fits your school schedule and student cohort size.
            </p>
            <WorkshopFormatTable formats={schoolFormats} themeColor="emerald" />
          </div>

        </SectionContainer>
      </section>

      <WorkshopGallery
        title="Representative learning session"
        subtitle=""
        limit={2}
        showStats={false}
      />

      <TestimonialsSection testimonials={testimonials} />

      <ProcessSection themeColor="emerald" />

      <section className="section-padding bg-background/50">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard
              title="School Financial Literacy Proposal"
              description="Grades 3-12 Program Overview"
              features={[
                "Curriculum Overview",
                "Delivery Model",
                "Learning Outcomes",
                "Workshop Structure"
              ]}
              brochureKey="finance-schools"
              fileSize={getFileSize("downloads/finance-schools.pdf")}
              thumbnail="/schools_3d.webp"
              category="Schools"
              themeColor="emerald"
              trackingEvent="pdf_download_school"
            />
          </div>
          <ComplianceBlock />
        </SectionContainer>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Prepare Students for a Financially Responsible Future."
        primaryButtonText="Request School Proposal"
        primaryHref={LEAD_FORMS.schools}
        primaryAnalyticsEvent="school_proposal_requested"
        secondaryButtonText="Discuss School Programme"
      />
    </>
  );
}
