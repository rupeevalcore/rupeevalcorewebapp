import React from "react";
import Link from "next/link";
import { LearningRecommendation } from "@/lib/financial-knowledge/types";
import { ArrowRight } from "lucide-react";

interface LearningRecommendationsProps {
  recommendations: LearningRecommendation[];
}

export default function LearningRecommendations({
  recommendations,
}: LearningRecommendationsProps) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl">
      <div className="mb-6">
        <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-1.5">
          Actionable Growth
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground tracking-tight">
          Your Next Learning Opportunity
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Based on your answers, exploring these core concepts will help solidify your financial foundation:
        </p>
      </div>

      <div className="space-y-3.5">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-heading font-bold text-base text-foreground mb-1 group-hover:text-accent transition-colors">
                  {rec.topic}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {rec.description}
                </p>
              </div>

              {rec.href && (
                <Link
                  href={rec.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline flex-shrink-0 mt-1 sm:mt-0"
                >
                  <span>Explore guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
