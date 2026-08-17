"use client";

import React, { useState } from "react";
import { 
  LifeStageId, 
  Question, 
  KnowledgeLevel, 
  CategoryResult, 
  LearningRecommendation 
} from "@/lib/financial-knowledge/types";
import { QUESTIONS, LIFE_STAGES } from "@/lib/financial-knowledge/questions";
import { 
  getKnowledgeLevel, 
  calculateCategoryBreakdown, 
  getLearningRecommendations 
} from "@/lib/financial-knowledge/scoring";

import LifeStageSelector from "./LifeStageSelector";
import QuestionCard from "./QuestionCard";
import ProgressIndicator from "./ProgressIndicator";
import KnowledgeResult from "./KnowledgeResult";

type AssessmentStep = "select-stage" | "in-quiz" | "result";

export default function KnowledgeAssessment() {
  const [step, setStep] = useState<AssessmentStep>("select-stage");
  const [selectedStage, setSelectedStage] = useState<LifeStageId | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const activeQuestions: Question[] = selectedStage ? QUESTIONS[selectedStage] : [];
  const currentQuestion: Question | undefined = activeQuestions[currentQuestionIndex];
  const stageConfig = LIFE_STAGES.find((s) => s.id === selectedStage);

  const handleStageSelect = (stageId: LifeStageId) => {
    setSelectedStage(stageId);
  };

  const handleStartQuiz = () => {
    if (!selectedStage) return;
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedOption(null);
    setStep("in-quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null || !currentQuestion) return;

    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedOption,
    };
    setUserAnswers(newAnswers);

    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      const nextQ = activeQuestions[currentQuestionIndex + 1];
      setSelectedOption(newAnswers[nextQ?.id] ?? null);
      window.scrollTo({ top: 100, behavior: "smooth" });
    } else {
      setStep("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestart = () => {
    setSelectedStage(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedOption(null);
    setStep("select-stage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateFinalResults = () => {
    if (!selectedStage || activeQuestions.length === 0) return null;

    let score = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    const level: KnowledgeLevel = getKnowledgeLevel(score);
    const categoryBreakdown: CategoryResult[] = calculateCategoryBreakdown(activeQuestions, userAnswers);
    const recommendations: LearningRecommendation[] = getLearningRecommendations(categoryBreakdown, selectedStage);

    return { score, level, categoryBreakdown, recommendations };
  };

  const finalResults = step === "result" ? calculateFinalResults() : null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      {step === "select-stage" && (
        <LifeStageSelector
          selectedStage={selectedStage}
          onSelectStage={handleStageSelect}
          onStart={handleStartQuiz}
        />
      )}

      {step === "in-quiz" && currentQuestion && (
        <div className="max-w-3xl mx-auto">
          <ProgressIndicator
            currentIndex={currentQuestionIndex}
            total={activeQuestions.length}
            stageLabel={stageConfig?.label || "Assessment"}
          />
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={activeQuestions.length}
            selectedOption={selectedOption}
            onSelectOption={handleOptionSelect}
            onNext={handleNextQuestion}
            onRestart={handleRestart}
          />
        </div>
      )}

      {step === "result" && finalResults && selectedStage && (
        <KnowledgeResult
          score={finalResults.score}
          totalQuestions={activeQuestions.length}
          level={finalResults.level}
          categoryBreakdown={finalResults.categoryBreakdown}
          recommendations={finalResults.recommendations}
          questions={activeQuestions}
          userAnswers={userAnswers}
          selectedStage={selectedStage}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
