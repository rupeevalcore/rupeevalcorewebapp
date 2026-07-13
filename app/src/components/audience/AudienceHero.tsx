import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export type AudienceHeroConfig = {
  themeColor: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  iconPath: string;
  photoPosition?: "top left" | "top right" | "bottom left" | "bottom right";
  formUrl?: string;
  analyticsEvent?: string;
};

interface AudienceHeroProps {
  config: AudienceHeroConfig;
}

export default function AudienceHero({ config }: AudienceHeroProps) {
  const { themeColor, badge, title, subtitle, primaryCta, secondaryCta, iconPath, photoPosition, formUrl, analyticsEvent } = config;

  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { text: "text-emerald-500", glow: "bg-emerald-500/10", border: "border-emerald-500/20" };
      case "sapphire": return { text: "text-sapphire-500", glow: "bg-sapphire-500/10", border: "border-sapphire-500/20" };
      case "cyan": return { text: "text-cyan-500", glow: "bg-cyan-500/10", border: "border-cyan-500/20" };
      case "orange": return { text: "text-orange-500", glow: "bg-orange-500/10", border: "border-orange-500/20" };
      case "purple": return { text: "text-purple-500", glow: "bg-purple-500/10", border: "border-purple-500/20" };
      default: return { text: "text-accent", glow: "bg-accent/10", border: "border-accent/20" };
    }
  };

  const theme = getThemeClasses();

  return (
    <ShootingStarsGrid
      className="min-h-[70vh] rounded-none border-none shadow-none pt-32 pb-20 overflow-hidden"
      contentClassName="h-full w-full flex items-center p-0"
      interactive={false}
      starCount={24}
      shootingStarCount={2}
      glow={false}
    >
      <div className="container-rv relative z-10">
        <div className="grid lg:grid-cols-[1fr_500px] gap-12 items-center">
          <div>
            {badge && (
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full glass ${theme.border} shadow-lg ${theme.text} text-sm font-bold mb-8 uppercase tracking-wider backdrop-blur-md`}
              >
                {badge}
              </div>
            )}
            
            <div
              className="relative max-w-4xl mb-8"
            >
              <div className={`absolute inset-0 ${theme.glow} blur-[100px] -z-10 rounded-full`} />
              <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.1]">
                {title}
              </h1>
            </div>
            
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed mb-12"
            >
              {subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={formUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event={analyticsEvent}
                className="btn-accent group py-4 text-base text-center inline-flex w-full sm:w-auto"
              >
                {primaryCta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary py-4 text-base"
              >
                <MessageSquare size={18} />
                {secondaryCta}
              </a>
            </div>
          </div>

          <div
            className="hidden lg:flex justify-center relative w-full aspect-[4/3]"
          >
            <div className={`absolute inset-0 ${theme.glow} blur-[120px] rounded-full scale-150 -z-20`} />
            
            {/* The Photo Container */}
            {photoPosition && (
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div 
                  className="w-full h-full opacity-90"
                  style={{
                    backgroundImage: `url('/collage_photos.webp')`,
                    backgroundSize: '200% 200%',
                    backgroundPosition: photoPosition
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
              </div>
            )}

            {/* The 3D Icon Overlay */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 drop-shadow-2xl z-10 animate-float">
              <Image src={iconPath} alt={title} fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </ShootingStarsGrid>
  );
}
