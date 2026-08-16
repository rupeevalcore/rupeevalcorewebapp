import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/sections/CTASection";
import { SectionContainer } from "@/components/ui/SectionContainer";
import AudienceInsightCard from "@/components/audience/AudienceInsightCard";
import { getBrochure } from "@/lib/brochures";
import { School, GraduationCap, ArrowRight, Sparkles, Cpu, Code2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ContextualDownloadCard = dynamic(() => import("@/components/audience/ContextualDownloadCard"));
const ComplianceBlock = dynamic(() => import("@/components/audience/ComplianceBlock"));

const schoolBrochure = getBrochure("ai-schools");
const collegeBrochure = getBrochure("ai-colleges");

export const metadata: Metadata = {
  title: "AI Education Workshops for Schools & Colleges in Chennai | RupeeValcore",
  description: "Practical AI education workshops for schools and colleges in Chennai covering AI literacy, productivity, automation, AI tools and hands-on application. RupeeValcore AI Division.",
  keywords: ["AI education Chennai", "AI workshops for schools and colleges", "vibe coding training", "prompt engineering workshops Chennai", "institutional AI upskilling"],
  openGraph: {
    title: "AI Education Workshops for Schools & Colleges in Chennai | RupeeValcore",
    description: "Practical, future-ready AI literacy programmes for schools and colleges. Hands-on tools, Vibe Coding, ethics & safety. Chennai and online.",
    url: "https://www.rupeevalcore.in/ai",
    siteName: "RupeeValcore",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/ai" },
};

const pillars = [
  {
    title: "AI Tools for Learning",
    description: "Supercharge academic research, study planning, note synthesis, and doubt solving using ChatGPT, Gemini & NotebookLM.",
    icon: <Sparkles size={28} />
  },
  {
    title: "AI Productivity & Automation",
    description: "Build automated workflows without writing syntax — connecting apps and setting up AI agents using Zapier, Make.com & n8n.",
    icon: <Cpu size={28} />
  },
  {
    title: "AI Content & Media Generation",
    description: "Generate video content, voiceovers, and visual media from plain text using Canva AI, ElevenLabs & Google Veo 3.",
    icon: <ShieldCheck size={28} />
  },
  {
    title: "Vibe Coding (Build & Deploy)",
    description: "Build real working web applications by typing plain English using Cursor, Bolt.new & Lovable — zero prior coding required.",
    icon: <Code2 size={28} />
  }
];

export default function AILandingPage() {
  return (
    <>
      <div className="container-rv pt-20 pb-2">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "AI Education Workshops", href: "/ai" },
          ]}
        />
      </div>
      <PageHero
        badge="RupeeValcore AI Division"
        title="Practical AI Education for Institutions"
        description="Equipping schools and colleges with future-ready Artificial Intelligence literacy. Moving beyond theory to hands-on build, automation, and Vibe Coding."
        themeColor="purple"
      />
      
      <section className="section-padding bg-background/50">
        <SectionContainer>
          {/* Overview Banner */}
          <div className="glass p-8 md:p-12 rounded-3xl border border-purple-500/20 mb-24 max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Why Institutional AI Education?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Artificial Intelligence is becoming as fundamental to daily life and work as computer literacy became a generation ago. Most students already use AI tools — but usually without guidance, structure, or awareness of hallucination and ethics. RupeeValcore prepares students to become responsible, capable AI users — not passive consumers.
            </p>
          </div>

          {/* Program Track Selector Cards */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Targeted Programmes
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                Choose Your Institution Type
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: AI for Schools */}
              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                    <School size={30} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                    Grades 6 – 12
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-3 mb-3">
                    AI for Schools
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Age-appropriate AI workshops covering study tools, automation logic, AI media creation, safety, and Vibe Coding. Aligned with NEP 2020 digital literacy guidelines.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-8">
                    <li className="flex items-center gap-2">✓ Single-Day Workshop or 3-Hour Orientation</li>
                    <li className="flex items-center gap-2">✓ 100% Free-Tier Browser Tools (Zero Setup)</li>
                    <li className="flex items-center gap-2">✓ DPDP Act 2023 Compliant Safety Protocols</li>
                  </ul>
                </div>
                <Link
                  href="/ai/schools"
                  className="btn-accent py-3 px-6 rounded-xl font-heading font-bold text-sm text-center inline-flex items-center justify-center gap-2"
                >
                  Explore School AI Programme <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 2: AI for Colleges */}
              <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                    <GraduationCap size={30} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                    Higher Education & Placement
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-3 mb-3">
                    AI for Colleges
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Placement-focused AI upskilling for college students across all departments. 15+ live tools, Vibe Coding app deployment, and documented evidence for NAAC / NBA reviews.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-8">
                    <li className="flex items-center gap-2">✓ 3-Hour Accelerator & Full-Day Intensive</li>
                    <li className="flex items-center gap-2">✓ Live Deployed Web Projects for Resumes</li>
                    <li className="flex items-center gap-2">✓ 48-Hour IQAC / T&P Accreditation Report</li>
                  </ul>
                </div>
                <Link
                  href="/ai/colleges"
                  className="btn-accent py-3 px-6 rounded-xl font-heading font-bold text-sm text-center inline-flex items-center justify-center gap-2"
                >
                  Explore College AI Programme <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Core Curriculum Pillars */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                Curriculum Core
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                Four Pillars of RupeeValcore AI Education
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, idx) => (
                <AudienceInsightCard
                  key={idx}
                  title={p.title}
                  description={p.description}
                  icon={p.icon}
                  delay={idx * 0.1}
                  themeColor="purple"
                />
              ))}
            </div>
          </div>

          {/* Download Proposals Grid */}
          <div className="mb-16 max-w-4xl mx-auto space-y-8">
            <ContextualDownloadCard
              title={schoolBrochure.title}
              description="Full Overview of AI Programmes for Schools (Grades 6–12)"
              brochureKey={schoolBrochure.key}
              thumbnail="/ai_3d.webp"
              category="AI · Schools"
              themeColor="purple"
              trackingEvent="pdf_download_school"
            />
            <ContextualDownloadCard
              title={collegeBrochure.title}
              description="Official Institutional Partnership Proposal for Colleges (2026)"
              brochureKey={collegeBrochure.key}
              thumbnail="/colleges_3d.webp"
              category="AI · Colleges"
              themeColor="purple"
              trackingEvent="pdf_download_college"
            />
          </div>

          <ComplianceBlock />
        </SectionContainer>
      </section>

      <CTASection
        headline="Ready to Introduce Practical AI Education to Your Institution?"
        primaryButtonText="Request Institutional AI Proposal"
        primaryHref={schoolBrochure.formUrl}
        primaryAnalyticsEvent="lead_form_started"
        secondaryButtonText="Talk to AI Lead"
      />
    </>
  );
}
