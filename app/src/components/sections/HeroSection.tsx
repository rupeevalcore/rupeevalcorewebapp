import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ShootingStarsGrid } from "@/components/ui/shooting-stars-grid";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {

  return (
    <ShootingStarsGrid
      className="min-h-[85vh] rounded-none border-none shadow-none pt-24 pb-12 flex items-center justify-center"
      contentClassName="h-full w-full flex items-center justify-center p-0"
      interactive={false}
      starCount={36}
      shootingStarCount={3}
      glow={false}
    >
      <SectionContainer className="relative z-10 flex flex-col items-center text-center">
        
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 shadow-lg text-accent text-sm font-medium mb-8 backdrop-blur-md animate-slideDown"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          Next batch starts soon in Chennai
        </div>

        <div className="relative w-full">
          {/* Subtle text glow behind */}
          <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10 rounded-full" />
          
          <h1 className="font-heading font-black tracking-tight mb-6 text-foreground text-balance">
            Premium Financial <br className="hidden sm:block" />
            Education Institution.
          </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground w-full max-w-[800px] mb-10 leading-relaxed font-medium text-balance">
          Practical financial education covering money basics, stock market awareness, taxes, and financial wellbeing. No products. No commissions. Just education.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto p-2 glass rounded-[24px] sm:rounded-full border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden animate-fadeIn"
        >
          <button type="button" data-program-selector="true" className="btn-accent flex-1 sm:flex-none group rounded-[18px] sm:rounded-full px-8 py-4 text-center relative z-10 focus:outline-none">
            Find The Right Program
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 sm:flex-none rounded-[18px] sm:rounded-full px-8 py-4 relative z-10">
            <FaWhatsapp className="w-5 h-5 text-[#25D366] mr-2" />
            WhatsApp Us
          </a>
        </div>

      </SectionContainer>
    </ShootingStarsGrid>
  );
}
