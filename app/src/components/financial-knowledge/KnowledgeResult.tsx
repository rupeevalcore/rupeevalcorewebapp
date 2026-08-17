import React, { useState } from "react";
import Link from "next/link";
import { 
  KnowledgeLevel, 
  CategoryResult, 
  LearningRecommendation, 
  Question, 
  LifeStageId 
} from "@/lib/financial-knowledge/types";
import { LIFE_STAGES } from "@/lib/financial-knowledge/questions";
import LearningRecommendations from "./LearningRecommendations";
import { 
  RotateCcw, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";

interface KnowledgeResultProps {
  score: number;
  totalQuestions: number;
  level: KnowledgeLevel;
  categoryBreakdown: CategoryResult[];
  recommendations: LearningRecommendation[];
  questions: Question[];
  userAnswers: Record<string, number>;
  selectedStage: LifeStageId;
  onRestart: () => void;
}

export default function KnowledgeResult({
  score,
  totalQuestions,
  level,
  categoryBreakdown,
  recommendations,
  questions,
  userAnswers,
  selectedStage,
  onRestart,
}: KnowledgeResultProps) {
  const [showReview, setShowReview] = useState(false);

  const stageConfig = LIFE_STAGES.find((s) => s.id === selectedStage);
  const targetHref = stageConfig?.targetAudienceHref || "/";

  return (
    <div className="space-y-8">
      {/* Executive Report Card */}
      <div className="glass rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative text-center max-w-3xl mx-auto">
        <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Your Financial Knowledge Level
        </div>

        <h2 className={`text-3xl sm:text-5xl font-heading font-black tracking-tight mb-4 ${level.colorClass}`}>
          {level.name.toUpperCase()}
        </h2>

        {/* Score Display */}
        <div className="inline-flex items-baseline gap-1.5 px-6 py-2 rounded-xl bg-white/[0.04] border border-white/10 mb-6">
          <span className="text-3xl sm:text-4xl font-heading font-black text-foreground">
            {score}
          </span>
          <span className="text-muted-foreground text-lg sm:text-xl font-medium">
            / {totalQuestions}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-foreground max-w-lg mx-auto mb-3 leading-snug">
          {level.headline}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {level.description}
        </p>
      </div>

      {/* Knowledge Snapshot Table */}
      <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-1.5">
            Category Breakdown
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground tracking-tight">
            Your Knowledge Snapshot
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categoryBreakdown.map((cat) => {
            let statusBadge = "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
            if (cat.status === "Developing") {
              statusBadge = "bg-yellow-500/10 text-yellow-300 border-yellow-500/20";
            } else if (cat.status === "Explore") {
              statusBadge = "bg-amber-500/10 text-amber-300 border-amber-500/20";
            }

            return (
              <div
                key={cat.category}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="font-medium text-xs sm:text-sm text-foreground">
                  {cat.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-mono">
                    {cat.correct}/{cat.total}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusBadge}`}>
                    {cat.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Recommendations */}
      <div className="max-w-3xl mx-auto">
        <LearningRecommendations recommendations={recommendations} />
      </div>

      {/* Detailed Question Review */}
      <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl max-w-3xl mx-auto">
        <button
          type="button"
          onClick={() => setShowReview(!showReview)}
          className="w-full flex items-center justify-between text-left cursor-pointer group"
        >
          <div>
            <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-1">
              Pedagogical Review
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
              Review All 10 Questions & Explanations
            </h3>
          </div>
          <div className="p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground">
            {showReview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {showReview && (
          <div className="mt-8 space-y-6 pt-6 border-t border-white/10">
            {questions.map((q, qIndex) => {
              const userAnswer = userAnswers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-2xl border ${
                    isCorrect
                      ? "bg-emerald-500/[0.02] border-emerald-500/20"
                      : "bg-amber-500/[0.02] border-amber-500/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-widest">
                      Question {String(qIndex + 1).padStart(2, "0")} · {q.category}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isCorrect
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Needs Review"}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-foreground mb-4 leading-snug">
                    {q.question}
                  </h4>

                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, optIdx) => {
                      const isUserChoice = userAnswer === optIdx;
                      const isTheCorrectAnswer = q.correctAnswer === optIdx;

                      let style = "border-white/5 bg-background/20 text-muted-foreground";
                      if (isTheCorrectAnswer) {
                        style = "border-emerald-500/40 bg-emerald-500/10 text-emerald-200 font-medium";
                      } else if (isUserChoice && !isCorrect) {
                        style = "border-amber-500/40 bg-amber-500/10 text-amber-200 font-medium";
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-2 ${style}`}
                        >
                          <span>{opt}</span>
                          {isTheCorrectAnswer && (
                            <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                              Correct
                            </span>
                          )}
                          {isUserChoice && !isCorrect && (
                            <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                              Your Answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">Educational Explanation: </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-2xl mx-auto">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Educational assessment only. This does not assess your personal financial situation and is not financial advice.
        </p>
      </div>

      {/* Action Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto">
        <Link
          href={targetHref}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-background font-bold text-sm sm:text-base hover:bg-accent/90 shadow-lg shadow-accent/20 text-center transition-all scale-100 hover:scale-[1.01] active:scale-[0.99]"
        >
          Explore RupeeValcore Programs
        </Link>

        <button
          type="button"
          onClick={onRestart}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Another Assessment</span>
        </button>
      </div>
    </div>
  );
}
