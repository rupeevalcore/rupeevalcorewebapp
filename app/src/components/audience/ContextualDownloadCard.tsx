"use client";

import { Download, FileText, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { AnalyticsEvent } from "@/lib/lead-routing";
import type { BrochureKey } from "@/lib/brochures";

interface ContextualDownloadCardProps {
  title: string;
  description: string;
  features?: string[];
  /** Legacy: direct PDF URL (opens lead-capture modal). Use brochureKey for the new verification flow. */
  pdfUrl?: string;
  fileSize?: string;
  thumbnail?: string;
  category: string;
  trackingEvent?: AnalyticsEvent;
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
  /** New: key from brochures.ts — triggers brochure verification modal instead of lead-capture */
  brochureKey?: BrochureKey;
  buttonLabel?: string;
}

export default function ContextualDownloadCard({ 
  title, 
  description,
  features = [], 
  pdfUrl,
  fileSize,
  thumbnail, 
  category,
  trackingEvent, 
  themeColor = "accent",
  brochureKey,
  buttonLabel = "Get Proposal PDF",
}: ContextualDownloadCardProps) {

  const getThemeClasses = () => {
    switch(themeColor) {
      case "emerald": return { text: "text-emerald-500", bg: "bg-emerald-500", glow: "from-emerald-500/20" };
      case "sapphire": return { text: "text-sapphire-500", bg: "bg-sapphire-500", glow: "from-sapphire-500/20" };
      case "cyan": return { text: "text-cyan-500", bg: "bg-cyan-500", glow: "from-cyan-500/20" };
      case "orange": return { text: "text-orange-500", bg: "bg-orange-500", glow: "from-orange-500/20" };
      case "purple": return { text: "text-purple-500", bg: "bg-purple-500", glow: "from-purple-500/20" };
      default: return { text: "text-accent", bg: "bg-accent", glow: "from-accent/20" };
    }
  };

  const theme = getThemeClasses();

  // If brochureKey is set, the card itself triggers the verification modal.
  // If only pdfUrl is set, it falls back to the existing lead-capture modal.
  const cardDataAttrs = brochureKey
    ? { "data-brochure-verify": brochureKey, "data-analytics-event": trackingEvent }
    : { "data-program-selector": "true", "data-pdf-url": pdfUrl || undefined, "data-pdf-title": title, "data-analytics-event": trackingEvent };

  const hasDownload = Boolean(brochureKey || pdfUrl);

  return (
    <div
      {...cardDataAttrs}
      className={`block glass rounded-3xl overflow-hidden border border-white/10 group relative outline-none focus-visible:border-accent/50 ${hasDownload ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="flex flex-col md:flex-row relative z-10">
        {/* Thumbnail Area */}
        <div className={`md:w-1/3 bg-gradient-to-br ${theme.glow} to-background p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative`}>
          <div className={`absolute top-4 left-4 text-sm font-bold uppercase tracking-wider ${theme.text} bg-background/50 backdrop-blur-md px-3 py-1 rounded-full`}>
            {category}
          </div>
          {thumbnail ? (
            <div className="relative w-full aspect-[3/4] max-w-[160px] drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <Image src={thumbnail} alt={title} fill sizes="(max-width: 768px) 100vw, 160px" className="object-cover rounded-md" />
            </div>
          ) : (
            <div className="w-24 h-32 bg-white/5 border border-white/10 rounded-md flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <FileText size={48} className={theme.text} opacity={0.5} />
            </div>
          )}
        </div>
        
        {/* Content Area */}
        <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
          
          <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-2 relative z-10">
            {title}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-6 relative z-10 font-medium">
            {description}
          </p>
          
          {features.length > 0 && (
            <ul className="mb-8 space-y-2 relative z-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 size={16} className={theme.text} />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {hasDownload ? (
              <>
                <button
                  type="button"
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-heading font-bold text-sm ${theme.bg} text-white group-hover:opacity-90 transition-opacity cursor-pointer`}
                >
                  {buttonLabel}
                  <Download size={18} />
                </button>
                {fileSize && (
                  <span className="text-sm font-medium text-muted-foreground">
                    {fileSize} PDF
                  </span>
                )}
              </>
            ) : (
              <p className="text-sm text-muted-foreground bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                Proposal document temporarily unavailable. Please contact us for the latest version.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

