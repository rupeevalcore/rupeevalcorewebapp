"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AudienceInsightCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  delay?: number;
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function AudienceInsightCard({ 
  title, 
  description, 
  icon, 
  delay = 0,
  themeColor = "accent" 
}: AudienceInsightCardProps) {

  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { text: "text-emerald-500", glow: "from-emerald-500/20", border: "group-hover:border-emerald-500/40" };
      case "sapphire": return { text: "text-sapphire-500", glow: "from-sapphire-500/20", border: "group-hover:border-sapphire-500/40" };
      case "cyan": return { text: "text-cyan-500", glow: "from-cyan-500/20", border: "group-hover:border-cyan-500/40" };
      case "orange": return { text: "text-orange-500", glow: "from-orange-500/20", border: "group-hover:border-orange-500/40" };
      case "purple": return { text: "text-purple-500", glow: "from-purple-500/20", border: "group-hover:border-purple-500/40" };
      default: return { text: "text-accent", glow: "from-accent/20", border: "group-hover:border-accent/40" };
    }
  };

  const theme = getThemeClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`glass p-8 rounded-3xl border border-white/5 ${theme.border} transition-all duration-300 group h-full relative overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${theme.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full`} />
      
      {icon && (
        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${theme.text} mb-6 border border-white/5`}>
          {icon}
        </div>
      )}
      
      <h3 className="font-heading font-bold text-xl text-foreground mb-3 leading-snug relative z-10">
        {title}
      </h3>
      
      {description && (
        <p className="text-muted-foreground relative z-10">
          {description}
        </p>
      )}
    </motion.div>
  );
}
