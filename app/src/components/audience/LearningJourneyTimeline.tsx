"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  title: string;
  description: string;
};

interface LearningJourneyTimelineProps {
  items: TimelineItem[];
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function LearningJourneyTimeline({ items, themeColor = "accent" }: LearningJourneyTimelineProps) {
  
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { bg: "bg-emerald-500", border: "border-emerald-500", text: "text-emerald-500", glow: "from-emerald-500/50" };
      case "sapphire": return { bg: "bg-sapphire-500", border: "border-sapphire-500", text: "text-sapphire-500", glow: "from-sapphire-500/50" };
      case "cyan": return { bg: "bg-cyan-500", border: "border-cyan-500", text: "text-cyan-500", glow: "from-cyan-500/50" };
      case "orange": return { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-500", glow: "from-orange-500/50" };
      case "purple": return { bg: "bg-purple-500", border: "border-purple-500", text: "text-purple-500", glow: "from-purple-500/50" };
      default: return { bg: "bg-accent", border: "border-accent", text: "text-accent", glow: "from-accent/50" };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="relative pl-8 md:pl-12 py-8">
      {/* Vertical Line */}
      <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b ${theme.glow} to-transparent opacity-30`} />
      
      <div className="space-y-12">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-10 md:-left-14 top-1.5 w-4 h-4 rounded-full ${theme.bg} shadow-[0_0_15px_rgba(var(--color-${themeColor}),0.5)]`} />
            <div className={`absolute -left-[38px] md:-left-[54px] top-[8px] w-3 h-3 rounded-full bg-background border border-border`} style={{ zIndex: 2 }} />
            
            <div className="glass p-6 md:p-8 rounded-3xl hover:-translate-y-0.5 transition-all duration-300">
              <h4 className={`font-heading font-bold text-xl md:text-2xl ${theme.text} mb-3`}>
                {item.title}
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
