import { Sparkles } from "lucide-react";

interface LearningOutcomeGridProps {
  outcomes: string[];
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function LearningOutcomeGrid({ outcomes, themeColor = "accent" }: LearningOutcomeGridProps) {
  
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return "text-emerald-500 bg-emerald-500/10";
      case "sapphire": return "text-sapphire-500 bg-sapphire-500/10";
      case "cyan": return "text-cyan-500 bg-cyan-500/10";
      case "orange": return "text-orange-500 bg-orange-500/10";
      case "purple": return "text-purple-500 bg-purple-500/10";
      default: return "text-accent bg-accent/10";
    }
  };

  const colorClass = getThemeClasses();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {outcomes.map((outcome, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4"
          style={{ transitionDelay: `${idx * 30}ms` }}
        >
          <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${colorClass}`}>
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-foreground font-medium text-lg">{outcome}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
