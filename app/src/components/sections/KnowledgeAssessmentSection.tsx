import Link from "next/link";
import { ArrowRight, Check, Clock, Sparkles, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

export default function KnowledgeAssessmentSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background/60 to-background relative overflow-hidden border-y border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sapphire-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <SectionContainer>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent/20 shadow-md text-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Assessment</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.15] mb-5 text-balance">
              How Strong Is Your Financial Knowledge?
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl text-balance">
              Answer 10 real-life questions and discover what you know &mdash; and what you could learn next.
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-foreground">
                <Check className="w-3.5 h-3.5 text-accent" />
                10 real-life questions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-foreground">
                <Clock className="w-3.5 h-3.5 text-accent" />
                About 3 minutes
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent">
                <ShieldCheck className="w-3.5 h-3.5" />
                Free &amp; Unrestricted
              </span>
            </div>

            {/* Primary Action Button */}
            <div className="w-full sm:w-auto">
              <Link
                href="/tools/financial-knowledge"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-accent text-background font-heading font-bold text-base hover:bg-accent/90 shadow-xl shadow-accent/20 transition-all scale-100 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Check My Financial Knowledge</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-xs text-muted-foreground/80 mt-4">
              Adapted for school students, college graduates, working professionals, and families.
            </p>
          </div>

          {/* Right Column: Refined Assessment Preview Card */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl bg-gradient-to-b from-white/[0.04] to-transparent">
              {/* Header Preview */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                    Budgeting &amp; Cash Flow
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  Question 01 of 10
                </span>
              </div>

              {/* Sample Question */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-5 leading-snug">
                In the popular 50-30-20 guideline for personal budgeting, what does the 20% represent?
              </h3>

              {/* Sample Options */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-xs sm:text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold">
                    A
                  </span>
                  <span>Dining out and weekend entertainment</span>
                </div>

                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-xs sm:text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold">
                    B
                  </span>
                  <span>Rent, groceries, and essential utilities</span>
                </div>

                <div className="p-3.5 rounded-xl border border-accent/60 bg-accent/[0.08] text-xs sm:text-sm text-foreground font-semibold flex items-center justify-between gap-3 shadow-sm ring-1 ring-accent/30">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-accent text-background flex items-center justify-center font-mono text-xs font-bold">
                      C
                    </span>
                    <span>Savings, emergency fund, and debt payoff</span>
                  </div>
                  <Check className="w-4 h-4 text-accent shrink-0" />
                </div>
              </div>

              {/* Footer Preview with Knowledge Level Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Outcome evaluation:
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                  <span>Score &amp; Learning Breakdown</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
