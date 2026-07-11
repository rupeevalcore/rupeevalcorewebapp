"use client";

import { motion } from "framer-motion";

export type MetricItem = {
  label: string;
  value: string;
};

interface AudienceMetricsProps {
  metrics: MetricItem[];
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function AudienceMetrics({ metrics, themeColor = "accent" }: AudienceMetricsProps) {
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { text: "text-emerald-500", border: "group-hover:border-emerald-500/40" };
      case "sapphire": return { text: "text-sapphire-500", border: "group-hover:border-sapphire-500/40" };
      case "cyan": return { text: "text-cyan-500", border: "group-hover:border-cyan-500/40" };
      case "orange": return { text: "text-orange-500", border: "group-hover:border-orange-500/40" };
      case "purple": return { text: "text-purple-500", border: "group-hover:border-purple-500/40" };
      default: return { text: "text-accent", border: "group-hover:border-accent/40" };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
      {metrics.map((metric, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`glass p-6 md:p-8 rounded-3xl border border-white/5 ${theme.border} text-center group hover:bg-white/5 transition-colors`}
        >
          <div className={`text-3xl md:text-4xl font-heading font-black ${theme.text} mb-2 group-hover:scale-105 transition-transform`}>
            {metric.value}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
