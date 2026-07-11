"use client";

import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

interface DeliveryModelCardsProps {
  models: string[];
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function DeliveryModelCards({ models, themeColor = "accent" }: DeliveryModelCardsProps) {
  
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 group-hover:border-emerald-500/40";
      case "sapphire": return "bg-sapphire-500/10 text-sapphire-500 border-sapphire-500/20 group-hover:border-sapphire-500/40";
      case "cyan": return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20 group-hover:border-cyan-500/40";
      case "orange": return "bg-orange-500/10 text-orange-500 border-orange-500/20 group-hover:border-orange-500/40";
      case "purple": return "bg-purple-500/10 text-purple-500 border-purple-500/20 group-hover:border-purple-500/40";
      default: return "bg-accent/10 text-accent border-accent/20 group-hover:border-accent/40";
    }
  };

  const themeClass = getThemeClasses();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {models.map((model, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className={`glass p-8 rounded-3xl border ${themeClass} transition-all duration-300 group flex flex-col items-center text-center`}
        >
          <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center mb-4">
            <LayoutGrid size={24} />
          </div>
          <h4 className="font-heading font-bold text-lg text-foreground">{model}</h4>
        </motion.div>
      ))}
    </div>
  );
}
