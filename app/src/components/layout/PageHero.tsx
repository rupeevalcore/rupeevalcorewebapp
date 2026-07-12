import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function PageHero({ title, description, badge, themeColor = "accent" }: PageHeroProps) {
  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { text: "text-emerald-500", glow: "bg-emerald-500/10" };
      case "sapphire": return { text: "text-sapphire-500", glow: "bg-sapphire-500/10" };
      case "cyan": return { text: "text-cyan-500", glow: "bg-cyan-500/10" };
      case "orange": return { text: "text-orange-500", glow: "bg-orange-500/10" };
      case "purple": return { text: "text-purple-500", glow: "bg-purple-500/10" };
      default: return { text: "text-accent", glow: "bg-accent/10" };
    }
  };

  const theme = getThemeClasses();

  return (
    <ShootingStarsGrid
      className="min-h-[50vh] rounded-none border-none shadow-none pt-24 pb-12"
      contentClassName="h-full w-full flex items-center justify-center p-0"
      interactive={false}
      starCount={24}
      shootingStarCount={2}
      glow={false}
    >
      <div className="container-rv relative z-10 text-center">
        {badge && (
          <div
            className={`inline-flex items-center px-3 py-1.5 rounded-full glass border-white/10 shadow-lg ${theme.text} text-sm font-medium mb-6 uppercase tracking-wider backdrop-blur-md`}
          >
            {badge}
          </div>
        )}
        
        <div
          className="relative max-w-4xl mx-auto mb-6"
        >
          <div className={`absolute inset-0 ${theme.glow} blur-[80px] -z-10 rounded-full`} />
          <h1 className="font-heading font-black text-4xl md:text-6xl text-foreground tracking-tight">
            {title}
          </h1>
        </div>
        
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed"
        >
          {description}
        </p>
      </div>
    </ShootingStarsGrid>
  );
}
