import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

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
  const renderMetricValue = (value: string) => {
    const match = value.match(/^(\d+)(\+?)(\s+.*)?$/);

    if (!match) return value;

    const [, rawTarget, suffix, rest = ""] = match;

    return (
      <>
        <AnimatedCounter target={Number(rawTarget)} suffix={suffix} duration={1400} />
        {rest}
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className={`glass p-6 md:p-8 rounded-3xl ${theme.border} text-center group transition-colors duration-300`}
          style={{ transitionDelay: `${idx * 30}ms` }}
        >
          <div className={`text-3xl md:text-4xl font-heading font-black ${theme.text} mb-2 group-hover:scale-105 transition-transform`}>
            {renderMetricValue(metric.value)}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
