import React from "react";

interface ProgressIndicatorProps {
  currentIndex: number;
  total: number;
  stageLabel: string;
}

export default function ProgressIndicator({
  currentIndex,
  total,
  stageLabel,
}: ProgressIndicatorProps) {
  const percentage = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <span className="font-medium tracking-wide text-foreground/80 uppercase">
          {stageLabel}
        </span>
        <span className="font-mono text-muted-foreground">
          Question {String(currentIndex + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="w-full bg-white/[0.06] h-[2px] rounded-full overflow-hidden">
        <div
          className="bg-accent h-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
