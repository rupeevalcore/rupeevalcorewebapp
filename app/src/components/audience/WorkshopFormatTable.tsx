"use client";

import { Check, Clock, Users, ArrowRight } from "lucide-react";

export type FormatItem = {
  name: string;
  duration: string;
  bestFor: string;
  pricing: string;
  highlights: string[];
};

interface WorkshopFormatTableProps {
  formats: FormatItem[];
  themeColor?: "emerald" | "sapphire" | "cyan" | "orange" | "purple" | "accent";
}

export default function WorkshopFormatTable({ formats, themeColor = "accent" }: WorkshopFormatTableProps) {
  const getThemeClasses = () => {
    switch (themeColor) {
      case "emerald": return { text: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", btnBg: "bg-emerald-500" };
      case "sapphire": return { text: "text-sapphire-500", bg: "bg-sapphire-500/10", border: "border-sapphire-500/20", btnBg: "bg-sapphire-500" };
      case "cyan": return { text: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", btnBg: "bg-cyan-500" };
      case "orange": return { text: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", btnBg: "bg-orange-500" };
      case "purple": return { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", btnBg: "bg-purple-500" };
      default: return { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20", btnBg: "bg-accent" };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="w-full my-12">
      {/* Desktop & Tablet Table */}
      <div className="hidden md:block glass rounded-3xl border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 bg-muted/40">
                <th className="p-5 font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground">Format</th>
                <th className="p-5 font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground">Duration</th>
                <th className="p-5 font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground">Best For</th>
                <th className="p-5 font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground">Pricing</th>
                <th className="p-5 font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {formats.map((item, idx) => (
                <tr key={idx} className="hover:bg-accent/5 transition-colors group">
                  <td className="p-5 font-heading font-bold text-base text-foreground">
                    {item.name}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.highlights.map((h, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-background/60 border border-border/40 px-2 py-0.5 rounded-full">
                            <Check size={10} className={theme.text} /> {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="p-5 text-sm text-muted-foreground font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className={theme.text} /> {item.duration}
                    </span>
                  </td>
                  <td className="p-5 text-sm text-muted-foreground font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Users size={14} className={theme.text} /> {item.bestFor}
                    </span>
                  </td>
                  <td className="p-5 font-heading font-semibold text-sm text-foreground">
                    {item.pricing}
                  </td>
                  <td className="p-5 text-right">
                    <button
                      type="button"
                      data-program-selector="true"
                      className="px-4 py-2 rounded-xl text-xs font-heading font-bold bg-accent text-accent-foreground hover:opacity-95 transition-opacity inline-flex items-center gap-1 cursor-pointer"
                    >
                      Request <ArrowRight size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {formats.map((item, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading font-bold text-lg text-foreground">{item.name}</h3>
                <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                  {item.pricing}
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className={theme.text} /> <span>Duration: {item.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className={theme.text} /> <span>Best For: {item.bestFor}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              data-program-selector="true"
              className="w-full py-2.5 rounded-xl text-xs font-heading font-bold bg-accent text-accent-foreground hover:opacity-95 transition-opacity flex items-center justify-center gap-1 cursor-pointer mt-2"
            >
              Request Proposal <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
