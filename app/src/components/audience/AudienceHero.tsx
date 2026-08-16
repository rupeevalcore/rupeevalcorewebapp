import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

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

export default function AudienceHero({ config }: { config: AudienceHeroConfig }) {
  const { themeColor, badge, title, subtitle, primaryCta, secondaryCta, iconPath, photoPosition, analyticsEvent } = config;

  const getThemeClasses = () => {
    switch (themeColor) {
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
      className="min-h-[70vh] rounded-none border-none shadow-none pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      contentClassName="h-full w-full flex items-center p-0"
      interactive={false}
      starCount={24}
      shootingStarCount={2}
      glow={false}
    >
      <div className="container-rv relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_500px] gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:max-w-none lg:mx-0">
            {badge && (
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full glass ${theme.border} shadow-lg ${theme.text} text-xs sm:text-sm font-bold mb-6 sm:mb-8 uppercase tracking-wider backdrop-blur-md`}
              >
                {badge}
              </div>
            )}

            <div className="relative w-full max-w-4xl mb-6 sm:mb-8">
              <div className={`absolute inset-0 ${theme.glow} blur-[100px] -z-10 rounded-full`} />
              <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground tracking-tight leading-[1.15] text-balance">
                {title}
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed mb-8 sm:mb-12 text-balance">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {config.formUrl ? (
                <a
                  href={config.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event={analyticsEvent}
                  className="btn-accent group py-4 text-base text-center inline-flex w-full sm:w-auto justify-center"
                >
                  {primaryCta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button
                  type="button"
                  data-program-selector="true"
                  data-audience={
                    themeColor === "emerald" ? "school" :
                    themeColor === "sapphire" ? "college" :
                    themeColor === "cyan" ? "corporate" :
                    themeColor === "orange" ? "individual" : undefined
                  }
                  data-analytics-event={analyticsEvent}
                  className="btn-accent group py-4 text-base text-center inline-flex w-full sm:w-auto justify-center focus:outline-none cursor-pointer"
                >
                  {primaryCta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              <a
                href={getWhatsAppUrl(badge)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-4 text-base w-full sm:w-auto justify-center"
              >
                <MessageSquare size={18} />
                {secondaryCta}
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative w-full aspect-[4/3]">
            <div className={`absolute inset-0 ${theme.glow} blur-[120px] rounded-full scale-150 -z-20`} />

            {/* The Photo Container */}
            {photoPosition && (
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div
                  className="w-full h-full opacity-90"
                  style={{
                    backgroundImage: `url('/collage_photos.webp')`,
                    backgroundSize: "200% 200%",
                    backgroundPosition: photoPosition,
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
