import dynamic from "next/dynamic";
import type { Metadata } from "next";
import AudienceHero, { AudienceHeroConfig } from "@/components/audience/AudienceHero";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import AudienceMetrics from "@/components/audience/AudienceMetrics";
import LearningJourneyTimeline from "@/components/audience/LearningJourneyTimeline";
import ProgrammeModuleGrid from "@/components/audience/ProgrammeModuleGrid";
import DeliveryModelCards from "@/components/audience/DeliveryModelCards";
import LearningOutcomeGrid from "@/components/audience/LearningOutcomeGrid";
import { AlertCircle, TrendingUp, Cpu, Code2, Sparkles, Zap } from "lucide-react";
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
const PricingCard = dynamic(() => import("@/components/audience/PricingCard"));

const brochure = getBrochure("ai-colleges");

export const metadata: Metadata = {
  title: "AI Workshops for College Students in Chennai | Rupeevalcore",
  description: "AI upskilling & Vibe Coding workshops for college students in Chennai. 3-Hour Accelerator & Full-Day Intensive. AI portfolios, automation, NAAC/NBA documentation. Founder-led.",
  keywords: ["AI for college students Chennai", "campus AI workshop", "vibe coding college students", "placement AI readiness", "AI automation workshop Chennai"],
  openGraph: {
    title: "AI Education for Colleges | Rupeevalcore",
    description: "Placement-focused AI upskilling for college students. 15+ live tools, Vibe Coding, NAAC/NBA accreditation evidence. Chennai and online.",
    url: "https://www.rupeevalcore.in/ai/colleges",
    images: [{ url: "https://www.rupeevalcore.in/og-colleges.jpg", width: 1200, height: 630, alt: "AI for Colleges" }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/ai/colleges" },
};

const heroConfig: AudienceHeroConfig = {
  themeColor: "purple",
  badge: "AI For Colleges",
  title: "Closing the Campus AI Gap for College Students.",
  subtitle: "Transform students from passive prompt-copying into AI-native graduates ready for high-demand careers. 3-Hour Accelerator, Full-Day Intensive & Term Programmes.",
  primaryCta: "Request Campus Proposal",
  secondaryCta: "Talk to AI Lead",
  iconPath: "/colleges_3d.webp",
  photoPosition: "top right",
  formUrl: brochure.formUrl,
  analyticsEvent: "college_proposal_requested",
};

const gapMatrix = [
  { title: "Recruiter AI Skill Expectations", description: "Placement teams cite AI skill gap as top recruiter complaint in 2025–26 campus hiring. Response: Live AI tool sessions with ChatGPT, Gemini & NotebookLM." },
  { title: "Passive AI Copy-Pasting", description: "Students use AI casually without understanding structured workflows. Response: Automation modules with Zapier, Make.com & n8n." },
  { title: "High-Demand Vibe Coding", description: "Traditional coding syllabi lag behind AI-assisted development. Response: Cursor, Bolt.new & Lovable — students deploy working web apps in plain English." },
  { title: "Accreditation Evidence Deficit", description: "Institutions lack documented AI upskilling data for NAAC / NBA reviews. Response: Full attendance records, certificates & 48-hour outcome reports." }
];

const statsLandscape = [
  { title: "42.6%", description: "Graduate employability rate in India (Mercer-Mettl, 2025).", icon: AlertCircle },
  { title: "1M+ AI Demand", description: "AI professionals needed in India by 2026 against a 50% talent gap (MeitY, 2025).", icon: TrendingUp },
  { title: "15+ Tools", description: "Hands-on exposure to 15+ production AI tools in a single session." },
  { title: "48-Hr Report", description: "Structured IQAC / T&P report delivered within 48 hours post-workshop." }
];

const whoCanAttend = [
  { title: "Engineering Students", description: "AI-assisted coding, architecture prompt engineering, and cloud automation workflows." },
  { title: "Arts & Science Students", description: "AI research tools, automated document synthesis, and AI content creation." },
  { title: "Commerce & Management (MBA)", description: "Automated business workflows, AI data analysis, and report generation." },
  { title: "Placement & Final Year Batches", description: "Building AI-enhanced portfolios, resume optimization, and interview prep." }
];

const metrics = [
  { label: "Target Audience", value: "All Departments" },
  { label: "Placement Focus", value: "Portfolio Projects" },
  { label: "Report Turnaround", value: "Within 48 Hours" }
];

const modules = [
  "AI Tools for Learning & Research (ChatGPT, Gemini, NotebookLM)",
  "No-Code AI Automation & Agents (Zapier, Make.com, n8n)",
  "AI Content & Media Generation (Canva AI, ElevenLabs, Google Veo 3)",
  "Vibe Coding — Build & Deploy Web Apps (Cursor, Bolt.new, Lovable)",
  "Structured Context Prompting & Chain-of-Thought",
  "AI Hallucinations & Output Verification",
  "Academic Integrity & Digital Data Privacy (DPDP Act)",
  "NAAC / NBA Accreditation Evidence Generation"
];

const deliveryModels = [
  "3-Hour AI Career Accelerator",
  "Full-Day AI Intensive (6–8 Hours)",
  "Term AI Programme / Elective (8–12 Weeks)",
  "Department-Wise Workshops",
  "Placement Orientation Bootcamps",
  "Campus Virtual AI Masterclasses"
];

const outcomes = [
  "Live deployed web application hosted on personal URL",
  "No-code automation pipeline active on personal account",
  "Verifiable RupeeValcore Completion Certificate for resume",
  "Documented AI upskilling data for NAAC / NBA accreditation",
  "48-hour post-session outcome report delivered to T&P / IQAC"
];

const collegeFormats = [
  {
    name: "3-Hour AI Career Accelerator",
    duration: "3 Hours",
    bestFor: "1–2 Depts / Placement Batches",
    pricing: "₹15,000 – ₹20,000 + GST",
    highlights: ["15+ Live Tools", "Vibe Coding Deploy", "Immediate Portfolio Project"]
  },
  {
    name: "Full-Day AI Intensive",
    duration: "6 – 8 Hours",
    bestFor: "All Depts / Full Campus Fest",
    pricing: "₹20,000 – ₹35,000 + GST",
    highlights: ["All 4 Core Modules", "AI Agents & Automation", "Full Campus Rollout"]
  },
  {
    name: "Per-Student Cohort Model",
    duration: "Full Session",
    bestFor: "Opt-in / Elective Cohorts",
    pricing: "₹400 – ₹600 + GST / Student",
    highlights: ["Individual Mentoring", "Project Code Access", "Certificates"]
  },
  {
    name: "Term AI Programme",
    duration: "8 – 12 Weeks",
    bestFor: "Semester AI Club / Elective",
    pricing: "Custom (from ₹1,00,000)",
    highlights: ["Weekly Club Sessions", "Hackathon Mentoring", "50% Accelerator Upgrade Credit"]
  }
];

const acceleratorAgenda = [
  { step: "01", time: "0 – 15 min", title: "Welcome & AI Readiness Check", desc: "Anonymous 5-minute digital self-assessment; facilitator calibrates session pace based on live responses." },
  { step: "02", time: "15 – 60 min", title: "Hour 1: AI Tools for Productivity", desc: "Live hands-on with ChatGPT, Gemini & NotebookLM. Students build an AI-powered academic & research toolkit." },
  { step: "03", time: "60 – 120 min", title: "Hour 2: AI Automation + Content", desc: "Make.com automation pipeline built live without code. Canva AI + ElevenLabs video & voiceover created in minutes." },
  { step: "04", time: "120 – 170 min", title: "Hour 3: Vibe Coding (Build & Deploy)", desc: "Bolt.new or Lovable: students type plain English and deploy a working web app in under 40 minutes with a live URL." },
  { step: "05", time: "170 – 180 min", title: "Project Showcase + Certificates", desc: "Students present deployed web apps. Verifiable RupeeValcore Completion Certificates distributed in-session." }
];

const faqs = [
  { q: "Is this suitable for non-computer science students?", a: "Yes! The programme is designed for all departments (Engineering, Arts, Science, Commerce, Law, MBA). Vibe Coding and no-code automation allow students from any discipline to build real applications using plain English." },
  { q: "What infrastructure does our college need to provide?", a: "Zero infrastructure cost to the institution. Any standard lab or auditorium with basic Wi-Fi connectivity is sufficient. Facilitator brings backup connectivity." },
  { q: "How does this support NAAC and NBA accreditation?", a: "We provide documented evidence of student upskilling, attendance registers, pre/post assessment data, and a 48-hour outcome summary report formatted for IQAC and accreditation reviews." },
  { q: "What are the trainer's credentials?", a: "Sessions are founder-led by Manikandan C, holding a B.E. in Medical Electronics, AWS Cloud Certification, and 4 years of MNC enterprise IT experience at Tata Consultancy Services (TCS)." },
  { q: "How does the upgrade incentive work?", a: "Institutions that book the Full-Day Workshop or Term AI Programme within 30 days of their 3-Hour Accelerator receive a 50% credit of the Accelerator fee toward their booking." }
];

export default function AICollegesPage() {
  return (
    <>
      <AudienceHero config={heroConfig} />

      <section className="section-padding bg-background/50">
        <SectionContainer>

          {/* Section: Stats Landscape */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Executive Summary
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                The Campus AI Gap & Opportunity
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-3">
                Recruiters rank AI skill readiness as a top unmet expectation in campus hiring.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Section: Challenge -> Response -> Outcome Matrix */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Problem → Response → Outcome
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                How RupeeValcore Closes the Campus AI Gap
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {gapMatrix.map((item, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Banner */}
          <div className="mb-24 glass p-8 md:p-12 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-background to-background text-center relative overflow-hidden">
            <blockquote className="font-heading font-bold text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
              &ldquo;AI is not replacing graduates — it is replacing graduates who do not know AI. My mission: no college student crosses the stage without real, usable AI capability.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-purple-400 mt-4">
              — Manikandan C, Founder & Lead Trainer, RupeeValcore Technologies
            </p>
          </div>

          {/* Section: 3-Hour Accelerator Step-by-Step Agenda */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Flagship Format
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-3">
                3-Hour AI Career Accelerator Breakdown
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                3 Hours. 15+ Live AI Tools. One Portfolio-Ready Deployed Project.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {acceleratorAgenda.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-purple-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-heading font-black text-2xl text-purple-400">
                      {item.step}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full">
                        {item.time}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-foreground mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Who Can Attend */}
          <div className="mb-24 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Cross-Department Alignment
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
                Who Can Attend
              </h2>
              <LearningJourneyTimeline items={whoCanAttend} themeColor="purple" />
            </div>
            <div className="sticky top-24">
              <AudienceMetrics metrics={metrics} themeColor="purple" />
            </div>
          </div>

          {/* Section: 4 Core Modules */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Full-Day Intensive
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
                Four Core Programme Modules
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Every student leaves with built, hosted projects — 100% free-tier browser tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Sparkles size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 1 · 90 Minutes
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  AI Tools for Learning
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Supercharge academics & research: AI notes, exam prep, doubt solving, and structured paper summaries.
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
                  Module 2 · 90 Minutes
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  AI Automation & Agents
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Build automated business workflows without code — connect apps, schedule tasks, create AI agents.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: Zapier · Make.com · n8n · Claude Agents
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 3 · 75 Minutes
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  AI Content Creation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Generate professional video content from text, create voiceovers, and design digital marketing assets.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: Google Veo 3 · Canva AI · ElevenLabs · Sora · Runway ML
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <Code2 size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Module 4 · 75 Minutes
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-3 mb-2">
                  Vibe Coding (Build & Deploy)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Build real working web applications by typing plain English. Every student leaves with a live deployed project.
                </p>
                <div className="text-xs text-purple-300 font-mono bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
                  Tools: Cursor · Bolt.new · Lovable · Google AI Studio
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
              Engagement Formats
            </h2>
            <DeliveryModelCards models={deliveryModels} themeColor="purple" />
          </div>

          {/* Section: Learning Outcomes */}
          <div className="mb-24">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-10">
              Measurable Outcomes & Institutional Impact
            </h2>
            <LearningOutcomeGrid outcomes={outcomes} themeColor="purple" />
          </div>

          {/* Section: Facilitator Profile */}
          <div className="mb-24 glass p-8 md:p-12 rounded-3xl border border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="h-24 w-24 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-heading font-bold text-3xl shrink-0 border border-purple-500/30">
                MC
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  Lead Facilitator
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground mt-2 mb-2">
                  Manikandan C — Founder, RupeeValcore Technologies
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  4 years of enterprise IT experience at Tata Consultancy Services (TCS) with a B.E. in Medical Electronics Engineering. AWS Cloud Certified. The entire RupeeValcore platform was built using AI-assisted Vibe Coding — proof that the tools taught are production-grade.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">AWS Certified</span>
                  <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">TCS — 4 Years IT Exp</span>
                  <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">B.E. Medical Electronics</span>
                  <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">NISM Series XII</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Workshop Formats Table */}
          <div className="mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Transparent Institutional Pricing
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Published upfront rates with zero hidden costs. Subsidised pricing available for government & aided colleges.
            </p>
            <WorkshopFormatTable formats={collegeFormats} themeColor="purple" />
          </div>

          {/* Pricing Card */}
          <section className="mb-24">
            <PricingCard
              title="3-Hour Accelerator Batch Option"
              price="₹15,000 – ₹20,000 + GST"
              description="Up to 35 students per batch. Scales to full campus deployment."
              features={[
                "15+ Live AI tools covered hands-on",
                "Working Vibe Coding project built & deployed live",
                "Verifiable RupeeValcore Completion Certificates",
                "Documented AI upskilling evidence for NAAC / NBA",
                "48-Hour post-session summary report for T&P / IQAC",
                "Upgrade Incentive: 50% credit toward Full-Day Workshop"
              ]}
              buttonText="Request College Proposal"
              buttonLink={brochure.formUrl}
              analyticsEvent="college_proposal_requested"
              themeColor="purple"
            />
          </section>

        </SectionContainer>
      </section>

      {/* Workshop Gallery */}
      <WorkshopGallery
        title="Inside a RupeeValcore College AI Workshop"
        subtitle="College students building deployed web applications and workflow automations."
      />

      {/* Testimonials */}
      <TestimonialsSection context="colleges" />

      {/* Process Section */}
      <ProcessSection themeColor="purple" />

      {/* Contextual Brochure Download Card */}
      <section className="section-padding bg-background/50">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <ContextualDownloadCard
              title={brochure.title}
              description="Official Institutional Partnership Proposal for Colleges (2026)"
              features={[
                "3-Hour Accelerator & Full-Day Intensive Agendas",
                "Problem → Response → Outcome Matrix",
                "NAAC / NBA Accreditation Evidence Framework",
                "Transparent Rate Cards & Batch Pricing",
                "Facilitator Profile & Onboarding Timeline"
              ]}
              brochureKey={brochure.key}
              fileSize={getFileSize("downloads/ai-colleges.pdf")}
              thumbnail="/colleges_3d.webp"
              category="AI · Colleges"
              themeColor="purple"
              trackingEvent="pdf_download_college"
            />
          </div>
          <ComplianceBlock />
        </SectionContainer>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTASection
        headline="Build an AI-Capable Campus."
        primaryButtonText="Request College AI Proposal"
        primaryHref={brochure.formUrl}
        primaryAnalyticsEvent="college_proposal_requested"
        secondaryButtonText="Discuss Campus Workshop"
      />
    </>
  );
}
