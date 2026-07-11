"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProgrammeModuleGridProps {
  modules: string[];
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function ProgrammeModuleGrid({ modules, themeColor = "accent" }: ProgrammeModuleGridProps) {
  
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return "text-emerald-500";
      case "sapphire": return "text-sapphire-500";
      case "cyan": return "text-cyan-500";
      case "orange": return "text-orange-500";
      case "purple": return "text-purple-500";
      default: return "text-accent";
    }
  };

  const colorClass = getThemeClasses();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {modules.map((module, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05, duration: 0.4 }}
          className="glass p-5 rounded-2xl flex items-center gap-3 border border-white/5 hover:bg-white/5 transition-colors"
        >
          <CheckCircle2 size={20} className={`${colorClass} shrink-0`} />
          <span className="font-medium text-foreground">{module}</span>
        </motion.div>
      ))}
    </div>
  );
}
