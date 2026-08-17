import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  UserCheck,
  Building2,
  School,
  Briefcase,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getWhatsAppUrl } from "@/lib/utils";
import FinancialLearningEcosystem from "@/components/hero/FinancialLearningEcosystem";

export default function HeroSection() {
  return (
    <ShootingStarsGrid
      className="min-h-[90vh] rounded-none border-none shadow-none pt-24 sm:pt-28 pb-16 sm:pb-20 flex items-center justify-center relative overflow-hidden"
      contentClassName="h-full w-full flex items-center justify-center p-0"
      interactive={false}
      starCount={36}
      shootingStarCount={3}
      glow={false}
    >
      <SectionContainer className="relative z-10 w-full">
        {/* Main 2-Column Grid for Desktop / Stacked for Mobile */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">

          {/* Left Column: Proposition & CTA Hierarchy */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 shadow-lg text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md animate-slideDown">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Financial Education &bull; Chennai &amp; Online</span>
            </div>

            {/* Main SEO H1 */}
            <div className="relative w-full mb-6">
              <div className="absolute inset-0 bg-accent/15 blur-[90px] -z-10 rounded-full pointer-events-none" />

              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.1] text-balance">
                Financial Literacy
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B37D14] via-accent to-[#9B6E14] dark:from-accent dark:via-[#F3CE72] dark:to-accent">
                  Workshops in Chennai
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-xl text-balance">
              Practical financial education for schools, colleges, workplaces and individuals &mdash; built for real-life decisions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <button
                type="button"
                data-program-selector="true"
                className="btn-accent py-4 px-8 text-base font-bold flex items-center justify-center gap-2 rounded-full shadow-xl shadow-accent/20 cursor-pointer scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Find The Right Program</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={getWhatsAppUrl("Website Hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-4 px-8 text-base font-semibold flex items-center justify-center gap-2 rounded-full glass border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 4 Trust Micro-Pillars */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mb-10 text-xs font-semibold text-muted-foreground/90">
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>No Products. No Commissions.</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                <span>Ethical. Practical.</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <UserCheck className="w-4 h-4 text-accent shrink-0" />
                <span>Student Friendly.</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Users className="w-4 h-4 text-accent shrink-0" />
                <span>All Life Stages.</span>
              </div>
            </div>

            {/* 4 Audience Quick-Navigation Pillars */}
            <div className="w-full pt-6 border-t border-white/10">
              <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3 text-center lg:text-left">
                Select Your Audience Track
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link
                  href="/schools"
                  className="p-3 rounded-2xl glass border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.04] transition-all flex flex-col items-center justify-center gap-1.5 group"
                >
                  <School className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-foreground">Schools</span>
                </Link>

                <Link
                  href="/colleges"
                  className="p-3 rounded-2xl glass border border-white/10 hover:border-sapphire-500/40 hover:bg-sapphire-500/[0.04] transition-all flex flex-col items-center justify-center gap-1.5 group"
                >
                  <GraduationCap className="w-5 h-5 text-sapphire-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-foreground">Colleges</span>
                </Link>

                <Link
                  href="/corporate-financial-wellness"
                  className="p-3 rounded-2xl glass border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/[0.04] transition-all flex flex-col items-center justify-center gap-1.5 group"
                >
                  <Building2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-foreground">Corporates</span>
                </Link>

                <Link
                  href="/individual-learning"
                  className="p-3 rounded-2xl glass border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition-all flex flex-col items-center justify-center gap-1.5 group"
                >
                  <Users className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-foreground">Individuals</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Financial Learning Ecosystem Centerpiece */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <FinancialLearningEcosystem priority={true} />
          </div>

        </div>

        {/* Bottom Banner: "BUILDING FINANCIALLY INTELLIGENT COMMUNITIES" */}
        <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02]">
          <div className="text-[11px] sm:text-xs font-bold text-accent uppercase tracking-widest text-center mb-6">
            Building Financially Intelligent Communities
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 text-emerald-400">
                <School className="w-5 h-5" />
              </div>
              <div className="font-heading font-black text-xl sm:text-2xl text-foreground">
                Schools
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Grades 6&ndash;12 Practical Money Habits
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-sapphire-500/10 border border-sapphire-500/20 flex items-center justify-center mx-auto mb-3 text-sapphire-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="font-heading font-black text-xl sm:text-2xl text-foreground">
                Colleges
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                First Salary &amp; Financial Foundations
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="font-heading font-black text-xl sm:text-2xl text-foreground">
                Workplaces
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Unbiased Employee Financial Wellness
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-3 text-orange-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-heading font-black text-xl sm:text-2xl text-foreground">
                Individuals
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                1-on-1 Mentoring &amp; Family Planning
              </div>
            </div>
          </div>
        </div>

      </SectionContainer>
    </ShootingStarsGrid>
  );
}
