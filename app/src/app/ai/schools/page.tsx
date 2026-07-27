import dynamic from "next/dynamic";
import type { Metadata } from "next";
import AudienceHero, { AudienceHeroConfig } from "@/components/audience/AudienceHero";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import AudienceMetrics from "@/components/audience/AudienceMetrics";
import LearningJourneyTimeline from "@/components/audience/LearningJourneyTimeline";
import ProgrammeModuleGrid from "@/components/audience/ProgrammeModuleGrid";
import DeliveryModelCards from "@/components/audience/DeliveryModelCards";
import LearningOutcomeGrid from "@/components/audience/LearningOutcomeGrid";
import { AlertCircle, TrendingUp, ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getFileSize } from "@/lib/server-utils";
import { getBrochure } from "@/lib/brochures";

const ContextualDownloadCard = dynamic(() => import("@/components/audience/ContextualDownloadCard"));
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const WorkshopFormatTable = dynamic(() => import("@/components/audience/WorkshopFormatTable"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const WorkshopGallery = dynamic(() => import("@/components/sections/WorkshopGallery"));

const brochure = getBrochure("ai-schools");

export const metadata: Metadata = {
  title: "AI Workshops for School Students in Chennai | Rupeevalcore",
  description: "Hands-on AI workshops for school students (Grades 6–12) in Chennai. Prompting, AI ethics, automation & Vibe Coding. Aligned with NEP 2020. Founder-led by Cloud/AI educator.",
  keywords: ["AI for school students Chennai", "AI workshop for schools", "student artificial intelligence training", "NEP 2020 AI digital literacy", "vibe coding for school students"],
  openGraph: {
    title: "AI Education for Schools | Rupeevalcore",
    description: "Equip school students to become responsible, capable AI users. Hands-on tools, Vibe Coding, ethics & safety. Chennai and online.",
    url: "https://www.rupeevalcore.in/ai/schools",
    images: [{ url: "https://www.rupeevalcore.in/og-schools.jpg", width: 1200, height: 630, alt: "AI for Schools" }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/ai/schools" },
};

const heroConfig: AudienceHeroConfig = {
  themeColor: "purple",
  badge: "AI For Schools",
  title: "Next-Generation AI Education for Schools.",
  subtitle: "A structured, hands-on programme for Grades 6–12. We prepare students to become responsible, capable AI users — not passive consumers of technology.",
  primaryCta: "Request School Proposal",
  secondaryCta: "Talk to AI Educator",
  iconPath: "/ai_3d.webp",
  photoPosition: "top left",
  formUrl: brochure.formUrl,
  analyticsEvent: "school_proposal_requested",
};

const statsLandscape = [
  { title: "1 in 5", description: "Indian youth currently in any structured AI skilling programme (Google.org & ADB, 2025).", icon: AlertCircle },
  { title: "92% / 88%", description: "92% of students already use AI tools — but 88% use them with zero formal guidance.", icon: TrendingUp },
  { title: "1M+ Demand", description: "1 Million+ AI professionals needed by 2026 against a 50% talent gap (MeitY, 2025)." },
  { title: "42.6% Gap", description: "Graduate employability rate gap that begins with a skills deficit starting in school." },
  { title: "NEP 2020 Fit", description: "Direct alignment with NEP Chapter 4.26 calling for computational thinking and digital literacy." }
];

const challenges = [
  { title: "Passive AI Copy-Pasting", description: "Students copy output without understanding prompting logic or verifying facts." },
  { title: "AI Hallucinations & Misinformation", description: "Lack of critical thinking leaves students vulnerable to false AI-generated claims." },
  { title: "Missing from Curriculum", description: "Computer science syllabi teach traditional coding, not modern Generative AI workflows." },
  { title: "Academic Integrity Confusion", description: "Students lack clear boundaries on ethical AI assistance versus academic dishonesty." },
  { title: "Zero Hands-On Projects", description: "Lecture-only presentations fail to build practical, portfolio-ready digital skills." }
];

const gradeTimeline = [
  { title: "Grades 6 – 8 (Foundation)", description: "AI Tools for Learning & Content Creation — Study support, notes, quizzes, and guided creative media with teacher-supervised accounts." },
  { title: "Grades 9 – 10 (Intermediate)", description: "+ AI Productivity & Automation — Workflow thinking, connecting apps without code, and deep dives into AI ethics & data privacy." },
  { title: "Grades 11 – 12 (Advanced)", description: "+ Vibe Coding & Web Deploy — Building real working web applications by typing plain English. Portfolio creation for college applications." }
];

const metrics = [
  { label: "Target Audience", value: "Grades 6–12" },
  { label: "Tool Architecture", value: "100% Free-Tier" },
  { label: "Delivery Model", value: "100% Hands-On" }
];

const modules = [
  "AI Tools for Learning (ChatGPT, Gemini, NotebookLM)",
  "AI Productivity & Automation (Zapier, Make.com, n8n)",
  "AI Content Creation (Canva AI, ElevenLabs, Google Veo 3)",
  "Vibe Coding (Antigravity IDE, Cursor, Bolt.new, Lovable)",
  "Prompt Engineering Fundamentals",
  "AI Ethics & Academic Integrity",
  "Fact-Checking & Hallucination Spotting",
  "Data Privacy & Digital Citizenship",
  "No-Code AI Agent Workflows",
  "Live Web Application Deployment"
];

const deliveryModels = [
  "Single-Day AI Workshop (6–8 Hours)",
  "Short Session / AI Orientation (1–3 Hours)",
  "AI Club / Term Programme (8–12 Sessions)",
  "Co-Pay / Opt-in Cohort Sessions",
  "In-Person Campus Deployment",
  "Virtual Live Workshops"
];

const outcomes = [
  "AI-assisted study plan & note system built live",
  "No-code automation or AI agent workflow created",
  "Original AI-generated media (video / voiceover / graphic)",
  "Working web app or website deployed from plain English",
  "Critical capability to spot AI hallucinations",
  "Clear understanding of academic integrity & DPDP compliance"
];

const schoolFormats = [
  {
    name: "AI Orientation Session",
    duration: "1 – 3 Hours",
    bestFor: "Single Batch / Assembly",
    pricing: "₹15,000 – ₹25,000 + GST",
    highlights: ["AI Awareness", "Prompt Basics", "Safety & Ethics Briefing"]
  },
  {
    name: "Single-Day AI Intensive",
    duration: "6 – 8 Hours",
    bestFor: "Full School / Multiple Batches",
    pricing: "₹20,000 – ₹35,000 + GST",
    highlights: ["All 4 Core Modules", "Vibe Coding Build", "100% Hands-On Projects"]
  },
  {
    name: "Per-Student Cohort Model",
    duration: "Full Session",
    bestFor: "Opt-in / Special Interest Groups",
    pricing: "₹299 – ₹599 / Student",
    highlights: ["Individual Lab Access", "Certificate Provided", "Take-Home Project"]
  },
  {
    name: "AI Club / Term Programme",
    duration: "8 – 12 Weeks",
    bestFor: "Sustained School Partnership",
    pricing: "Custom Pricing",
    highlights: ["Weekly AI Projects", "Hackathon Event", "50% Upgrade Credit"]
  }
];

const faqs = [
  { q: "Do students need prior coding experience?", a: "No prior coding experience is required. We use plain-English prompt engineering and Vibe Coding tools that allow students to build real apps by typing natural language." },
  { q: "Are the AI tools free for students to continue using?", a: "Yes. Every tool used in our curriculum carries a robust free-tier tier, allowing students to continue building independently after the session at zero cost." },
  { q: "How do you address AI safety and data privacy?", a: "Safety and privacy are non-optional core components of every session. We teach data privacy (DPDP Act compliance), age-appropriate tool usage, and strictly guide students not to share sensitive personal data." },
  { q: "What infrastructure does the school need to provide?", a: "Zero heavy infrastructure. Any standard computer lab or classroom with Wi-Fi is sufficient. All tools run directly inside web browsers with zero installation required." },
  { q: "Who leads the AI sessions?", a: "Sessions are founder-led by Manikandan C, a Cloud Infrastructure Engineer & AI Educator with 4+ years of industry experience at TCS, combining MNC IT rigour with hands-on teaching." },
  { q: "Can the curriculum be mapped to our school timetable?", a: "Yes. We offer single-day intensive workshops, short orientation sessions, or weekly 60-minute AI club modules embedded into your existing timetable without academic disruption." }
];

export default function AISchoolsPage() {
  return (
    <>
      <AudienceHero config={heroConfig} />

      <section className="section-padding bg-background/50">
        <SectionContainer>

          {/* Section: Why AI in Schools */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                The AI Landscape
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                Why AI in Schools, Right Now?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-3">
                Schools teach subjects. Our programme teaches a fundamental future skill.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {statsLandscape.map((item, idx) => (
                <AudienceInsightCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  icon={item.icon ? <item.icon size={28} strokeWidth={1.5} /> : undefined}
                  delay={idx * 0.1}
                  themeColor="purple"
                />
              ))}
            </div>
          </div>

          {/* Section: Core Problem */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                The Gap We Close
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                Challenges School Students Face
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <AudienceInsightCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  delay={idx * 0.1}
                  themeColor="purple"
                />
              ))}
            </div>
          </div>

          {/* Quote Banner */}
          <div className="mb-24 glass p-8 md:p-12 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-background to-background text-center relative overflow-hidden">
            <blockquote className="font-heading font-bold text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
              &ldquo;AI is not replacing students — it is replacing students who do not know AI. My mission: no school student gets left behind in this shift.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-purple-400 mt-4">
              — Manikandan C, Founder & Lead Trainer, RupeeValcore Technologies
            </p>
          </div>

          {/* Section: Who Can Attend (Grade Bands) */}
          <div className="mb-24 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Age-Appropriate Design
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
                Grade-Band Curriculum Mapping
              </h2>
              <LearningJourneyTimeline items={gradeTimeline} themeColor="purple" />
            </div>
            <div className="sticky top-24">
              <AudienceMetrics metrics={metrics} themeColor="purple" />
            </div>
          </div>

          {/* Section: 4 Core Modules */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                100% Practical & Hands-On
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
                Four Core Programme Modules
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Every student builds real projects during the session — no passive lectures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Sparkles size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 1 · Grades 6–12
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  AI Tools for Learning
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Supercharge academics: AI notes, exam prep, doubt solving, and structured research summaries.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: ChatGPT · Gemini · NotebookLM · Perplexity · MS Copilot
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Cpu size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 2 · Grades 9–12
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  AI Productivity & Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate repetitive tasks and connect apps without writing code — building workflow logic.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: Zapier · Make.com · n8n · Claude Agents
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 3 · Grades 8–12
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  AI Content Creation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Generate videos, voiceovers, and digital media from text prompts with professional AI engines.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: Canva AI · ElevenLabs · Google Veo 3 · Sora · Runway ML
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Code2 size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 4 · Grades 9–12
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  Vibe Coding (Build & Deploy)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Build real working web applications by typing plain English — no syntax knowledge required.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: Antigravity IDE · Cursor · Bolt.new · Lovable
                </div>
              </div>
            </div>
          </div>

          {/* Section: Complete Modules List */}
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Complete Skill Coverage
            </h2>
            <ProgrammeModuleGrid modules={modules} themeColor="purple" />
          </div>

          {/* Section: Delivery Models */}
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Flexible Delivery Options
            </h2>
            <DeliveryModelCards models={deliveryModels} themeColor="purple" />
          </div>

          {/* Section: Learning Outcomes */}
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Student Deliverables & Outcomes
            </h2>
            <LearningOutcomeGrid outcomes={outcomes} themeColor="purple" />
          </div>

          {/* Section: Workshop Formats Table */}
          <div className="mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Workshop Formats & Pricing
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Transparent, market-benchmarked pricing options for your school.
            </p>
            <WorkshopFormatTable formats={schoolFormats} themeColor="purple" />
          </div>

        </SectionContainer>
      </section>

      {/* Workshop Gallery */}
      <WorkshopGallery
        title="Inside a RupeeValcore AI Workshop"
        subtitle="Students hands-on with live AI tools, building projects and understanding responsible tech use."
        limit={2}
        showStats={false}
      />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process Section */}
      <ProcessSection themeColor="purple" />

      {/* Contextual Brochure Download Card */}
      <section className="section-padding bg-background/50">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard
              title={brochure.title}
              description="Comprehensive Overview of AI Programmes for School Students (Grades 6–12)"
              features={[
                "4 Core Programme Modules Detailed",
                "Grade-Band Curriculum Mapping",
                "AI Ethics & Safety Protocol",
                "Transparent Institutional Pricing",
                "Implementation Roadmap"
              ]}
              brochureKey={brochure.key}
              fileSize={getFileSize("downloads/ai-schools.pdf")}
              thumbnail="/ai_3d.webp"
              category="AI · Schools"
              themeColor="purple"
              trackingEvent="pdf_download_school"
            />
          </div>
          <ComplianceBlock />
        </SectionContainer>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTASection
        headline="Equip Your School Students for an AI-Driven Future."
        primaryButtonText="Request School AI Proposal"
        primaryHref={brochure.formUrl}
        primaryAnalyticsEvent="school_proposal_requested"
        secondaryButtonText="Discuss AI Programme"
      />
    </>
  );
}
