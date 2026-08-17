import React from "react";
import { LIFE_STAGES } from "@/lib/financial-knowledge/questions";
import { LifeStageId } from "@/lib/financial-knowledge/types";
import { ArrowRight, Check } from "lucide-react";

interface LifeStageSelectorProps {
  selectedStage: LifeStageId | null;
  onSelectStage: (stage: LifeStageId) => void;
  onStart: () => void;
}

export default function LifeStageSelector({
  selectedStage,
  onSelectStage,
  onStart,
}: LifeStageSelectorProps) {
  return (
    <div className="glass rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative">
      {/* Header */}
      <div className="text-left sm:text-center max-w-2xl mx-auto mb-10">
        <div className="inline-block text-[11px] font-bold text-accent uppercase tracking-widest mb-3">
          Step 1 of 2
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground tracking-tight mb-3">
          Choose Your Learning Stage
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Your questions will be adapted to the stage that best matches you.
        </p>
      </div>

      {/* 5 Stage Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
        {LIFE_STAGES.map((stage) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={`p-6 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group relative outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? "bg-accent/[0.08] border-accent shadow-lg shadow-accent/5 ring-1 ring-accent/40"
                  : "bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-white/20"
              } ${stage.id === "later-life" ? "sm:col-span-2 sm:max-w-md sm:mx-auto w-full" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground tracking-tight">
                    {stage.label}
                  </h3>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? "border-accent bg-accent text-background"
                        : "border-white/20 group-hover:border-white/40"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                <div className="text-xs font-semibold text-accent/80 mb-2">
                  {stage.subtitle}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 max-w-3xl mx-auto">
        <div className="text-xs text-muted-foreground text-center sm:text-left">
          10 real-life questions · About 3 minutes · Free
        </div>

        <button
          type="button"
          disabled={!selectedStage}
          onClick={onStart}
          className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 ${
            selectedStage
              ? "bg-accent text-background hover:bg-accent/90 shadow-lg shadow-accent/20 cursor-pointer scale-100 hover:scale-[1.01] active:scale-[0.99]"
              : "bg-white/10 text-muted-foreground cursor-not-allowed opacity-50"
          }`}
        >
          <span>Begin Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
