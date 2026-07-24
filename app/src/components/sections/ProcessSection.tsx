"use client";

import { MessageSquareText, PhoneCall, FileSpreadsheet, CalendarCheck } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface ProcessSectionProps {
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

const steps = [
  {
    step: "01",
    title: "Initial Enquiry",
    description: "Submit your requirement or request a proposal through our modal or WhatsApp.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Discovery Call",
    description: "Our advisors discuss your target audience, learning goals, and schedule preferences.",
    icon: PhoneCall,
  },
  {
    step: "03",
    title: "Custom Proposal",
    description: "We share a tailored curriculum overview and scheduling structure for your review.",
    icon: FileSpreadsheet,
  },
  {
    step: "04",
    title: "Workshop Scheduled",
    description: "Session dates confirmed, workbook materials delivered, and workshop delivered.",
    icon: CalendarCheck,
  },
];

export default function ProcessSection({ themeColor = "accent" }: ProcessSectionProps) {
  const getThemeClasses = () => {
    switch (themeColor) {
      case "emerald": return { text: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
      case "sapphire": return { text: "text-sapphire-500", bg: "bg-sapphire-500/10", border: "border-sapphire-500/20" };
      case "cyan": return { text: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" };
      case "orange": return { text: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" };
      case "purple": return { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" };
      default: return { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20" };
    }
  };

  const theme = getThemeClasses();

  return (
    <section className="section-padding bg-background/50 relative overflow-hidden">
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-xs font-heading font-bold uppercase tracking-widest ${theme.text} mb-3`}>
            Simple Process
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            What Happens Next?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-3">
            From initial interest to a delivered workshop in 4 straightforward steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass p-6 rounded-3xl border border-white/10 relative flex flex-col justify-between group hover:border-accent/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`h-12 w-12 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center`}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="font-heading font-black text-2xl text-foreground/20">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
