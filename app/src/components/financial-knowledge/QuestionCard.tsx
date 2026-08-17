import React from "react";
import { Question } from "@/lib/financial-knowledge/types";
import { ArrowRight, RotateCcw } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  onNext: () => void;
  onRestart: () => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNext,
  onRestart,
}: QuestionCardProps) {
  const isLastQuestion = questionNumber === totalQuestions;
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="glass rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative">
      {/* Category header */}
      <div className="mb-6">
        <span className="inline-block text-[11px] font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
          {question.category}
        </span>
      </div>

      {/* Question Text */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground leading-snug mb-8">
        {question.question}
      </h2>

      {/* Option Cards */}
      <div className="space-y-3.5 mb-10">
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const letter = optionLetters[idx] || String(idx + 1);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectOption(idx)}
              className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex items-start gap-4 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? "bg-accent/[0.08] border-accent shadow-md shadow-accent/5 ring-1 ring-accent/40"
                  : "bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-white/20"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${
                  isSelected
                    ? "bg-accent text-background font-black"
                    : "bg-white/5 border border-white/10 text-muted-foreground"
                }`}
              >
                {letter}
              </span>
              <span
                className={`text-sm sm:text-base flex-1 leading-relaxed ${
                  isSelected ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restart</span>
        </button>

        <button
          type="button"
          disabled={selectedOption === null}
          onClick={onNext}
          className={`px-8 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 transition-all duration-200 ${
            selectedOption !== null
              ? "bg-accent text-background hover:bg-accent/90 shadow-lg shadow-accent/20 cursor-pointer scale-100 hover:scale-[1.01] active:scale-[0.99]"
              : "bg-white/10 text-muted-foreground cursor-not-allowed opacity-40"
          }`}
        >
          <span>{isLastQuestion ? "See My Results" : "Continue"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
