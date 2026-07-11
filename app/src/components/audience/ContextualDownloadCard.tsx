"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Image from "next/image";

interface ContextualDownloadCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  thumbnail?: string;
  category: string;
  trackingEvent?: string;
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function ContextualDownloadCard({ 
  title, 
  description, 
  pdfUrl, 
  thumbnail, 
  category, 
  trackingEvent,
  themeColor = "accent" 
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

  const handleDownload = () => {
    if (trackingEvent) {
      console.log(`Tracking event: ${trackingEvent}`);
    }
    window.open(pdfUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
      onClick={handleDownload}
    >
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail Area */}
        <div className={`md:w-1/3 bg-gradient-to-br ${theme.glow} to-background p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative`}>
          <div className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider ${theme.text} bg-background/50 backdrop-blur-md px-3 py-1 rounded-full`}>
            {category}
          </div>
          {thumbnail ? (
            <div className="relative w-full aspect-[3/4] max-w-[160px] drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <Image src={thumbnail} alt={title} fill className="object-cover rounded-md" />
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
          
          <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-4 relative z-10">
            {title}
          </h3>
          <p className="text-muted-foreground text-lg mb-8 relative z-10">
            {description}
          </p>
          
          <div className="mt-auto relative z-10">
            <button className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-heading font-bold text-sm ${theme.bg} text-white hover:opacity-90 transition-opacity`}>
              Download PDF
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
