import { ShieldCheck, BookOpen, MapPin, Building2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionContainer } from "@/components/ui/SectionContainer";

const stats = [
  { label: "Schools", value: 2, suffix: "", variant: "schools" as const },
  { label: "Colleges", value: 2, suffix: "", variant: "colleges" as const },
  { label: "Organizations", value: 3, suffix: "", variant: "corporate" as const },
  { label: "Individual Sessions", value: 25, suffix: "+", variant: "individuals" as const },
];

const visionStats = [
  { label: "Schools", value: 50, suffix: "+" },
  { label: "Colleges", value: 50, suffix: "+" },
  { label: "Workplaces", value: 50, suffix: "+" },
];

const trustCards = [
  { icon: ShieldCheck, title: "MSME Registered Business" },
  { icon: BookOpen, title: "Financial Education Specialists" },
  { icon: MapPin, title: "Chennai Based + Online Delivery" },
  { icon: Building2, title: "Institution Focused Programs" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="section-padding relative overflow-hidden bg-transparent">
      <SectionContainer>
        
        {/* New Premium Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-24 border-b border-border/50 mb-24">
          {trustCards.map((card, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex flex-col items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <card.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="font-heading font-semibold tracking-tight text-foreground text-lg leading-tight">
                {card.title}
              </span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Current Impact */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading font-bold text-foreground mb-4">
                Our Current Impact
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                We are actively partnering with institutions across Chennai to bring practical financial education to those who need it most.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-2xl relative overflow-hidden group"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                  <div className="relative z-10">
                    <div className="text-4xl font-black font-heading text-foreground mb-1">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1600} />
                    </div>
                    <div className="text-sm font-medium text-accent tracking-wide uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-background rounded-3xl blur-xl" />
            <div className="relative glass p-10 md:p-12 rounded-3xl border border-accent/10">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground mb-10">Building a financially literate India, one institution at a time.</p>
              
              <div className="space-y-8">
                {visionStats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border/50 pb-6 last:border-0 last:pb-0">
                    <span className="text-xl font-heading text-foreground">{stat.label}</span>
                    <span className="text-3xl font-black font-heading text-accent">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
}
