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
    <div
      className={`glass p-8 rounded-3xl ${theme.border} transition-all duration-300 group h-full relative overflow-hidden`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {icon && (
        <div 
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme.text} mb-6 relative z-10`}
          style={{ background: "var(--icon-bg)", border: "1px solid var(--glass-border)" }}
        >
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
    </div>
  );
}
