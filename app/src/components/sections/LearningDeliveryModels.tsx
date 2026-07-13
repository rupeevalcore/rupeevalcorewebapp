import Link from "next/link";
import { Building2, GraduationCap, BriefcaseBusiness, UserRound, UsersRound, HeartHandshake, ArrowRight } from "lucide-react";

export default function LearningDeliveryModels() {
  return (
    <section id="delivery-models" className="section-padding bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="absolute left-[-5%] top-[20%] hidden h-24 w-[420px] -rotate-6 rounded-full bg-accent/[0.03] md:block" />
      <div className="absolute right-[-5%] bottom-[10%] hidden h-20 w-[320px] rotate-6 rounded-full bg-primary/[0.03] md:block" />

      <div className="container-rv relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Learning Delivery Models
            </h2>
            <p className="text-lg text-muted-foreground">
              Educational formats designed to meet the specific learning objectives of institutions and individuals.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Group Sessions */}
          <div
            className="h-full flex flex-col"
          >
            <Link href="#contact" data-program-selector aria-label="Request Group Proposal" className="block h-full p-8 md:p-10 rounded-3xl glass border border-white/10 group hover:-translate-y-[4px] focus-visible:-translate-y-[4px] hover:border-accent/40 focus-visible:border-accent/40 hover:shadow-lg hover:shadow-accent/10 focus-visible:shadow-lg focus-visible:shadow-accent/10 transition-all duration-[300ms] ease-out outline-none relative overflow-hidden flex flex-col">
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold tracking-wide border border-emerald-500/20">College Events</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold tracking-wide border border-cyan-500/20">Corporate Events</span>
              </div>

              <div className="flex gap-4 mb-8 text-foreground/40 dark:text-white/40">
                <Building2 className="w-8 h-8" />
                <GraduationCap className="w-8 h-8" />
                <BriefcaseBusiness className="w-8 h-8" />
              </div>

              <h3 className="font-heading font-bold text-3xl text-foreground mb-4">Group Sessions</h3>
              <p className="text-muted-foreground mb-6 font-medium">Perfect for colleges and corporates.</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Interactive workshops for groups of 10+ participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Customizable topics based on audience requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Practical examples and Q&A sessions included</span>
                </li>
              </ul>

              <div className="mb-8 pt-6 border-t border-border/40">
                <p className="text-sm font-medium text-muted-foreground mb-1">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-2xl text-foreground">₹499</span>
                  <span className="text-muted-foreground text-sm font-medium">per participant</span>
                </div>
              </div>

              <div className="flex items-center text-accent font-semibold gap-2 transition-all mt-auto">
                Request Group Proposal
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:translate-x-0 group-focus-visible:translate-x-0 transition-all duration-[300ms] ease-out" />
              </div>
            </Link>
          </div>

          {/* Card 2: Personal Learning Sessions */}
          <div
            className="h-full flex flex-col"
          >
            <Link href="/individual-learning" aria-label="Schedule Personal Learning Discussion" className="block h-full p-8 md:p-10 rounded-3xl glass border border-white/10 group hover:-translate-y-[4px] focus-visible:-translate-y-[4px] hover:border-accent/40 focus-visible:border-accent/40 hover:shadow-lg hover:shadow-accent/10 focus-visible:shadow-lg focus-visible:shadow-accent/10 transition-all duration-[300ms] ease-out outline-none relative overflow-hidden flex flex-col">
              <div className="flex flex-wrap gap-2 mb-8 items-start justify-between">
                <div className="flex flex-wrap gap-2 max-w-[70%]">
                  <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide">Individuals</span>
                  <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-sm font-semibold tracking-wide">Families</span>
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-sm font-semibold tracking-wide">Professionals</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-bold uppercase tracking-wider">Premium</span>
              </div>

              <div className="flex gap-4 mb-8 text-foreground/40 dark:text-white/40">
                <UserRound className="w-8 h-8" />
                <UsersRound className="w-8 h-8" />
                <HeartHandshake className="w-8 h-8" />
              </div>

              <h3 className="font-heading font-bold text-3xl text-foreground mb-6">Personal Learning Sessions</h3>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Personalized learning paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Topic-specific learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Follow-up support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">Custom plans</span>
                </li>
              </ul>

              <div className="flex items-center text-accent font-semibold gap-2 transition-all mt-auto pt-6 border-t border-border/40">
                Schedule Discussion
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:translate-x-0 group-focus-visible:translate-x-0 transition-all duration-[300ms] ease-out" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
