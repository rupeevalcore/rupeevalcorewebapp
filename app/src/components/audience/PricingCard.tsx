import { CheckCircle2, ArrowRight } from "lucide-react";

export type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  analyticsEvent?: string;
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
};

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  analyticsEvent,
  themeColor = "accent"
}: PricingCardProps) {
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { text: "text-emerald-500", bg: "bg-emerald-500", border: "border-emerald-500/20" };
      case "sapphire": return { text: "text-sapphire-500", bg: "bg-sapphire-500", border: "border-sapphire-500/20" };
      case "cyan": return { text: "text-cyan-500", bg: "bg-cyan-500", border: "border-cyan-500/20" };
      case "orange": return { text: "text-orange-500", bg: "bg-orange-500", border: "border-orange-500/20" };
      case "purple": return { text: "text-purple-500", bg: "bg-purple-500", border: "border-purple-500/20" };
      default: return { text: "text-accent", bg: "bg-accent", border: "border-accent/20" };
    }
  };

  const theme = getThemeClasses();

  return (
    <div
      className={`relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden border border-border shadow-lg bg-card transition-shadow hover:shadow-xl`}
    >
      {/* Top Banner Accent */}
      <div className={`h-2 w-full ${theme.bg}`} />
      
      <div className="p-8 md:p-10">
        <h3 className="font-heading font-black text-2xl text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        <div className="mb-8 pb-8 border-b border-border/50">
          <span className="font-heading font-black text-4xl text-foreground">{price}</span>
        </div>
        
        <div className="space-y-4 mb-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className={`w-5 h-5 shrink-0 ${theme.text} mt-0.5`} />
              <span className="text-sm font-medium text-foreground/80 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
        
        <a 
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event={analyticsEvent}
          className="btn-accent w-full justify-center group py-4"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
