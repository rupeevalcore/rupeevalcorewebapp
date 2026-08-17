export type LifeStageId = "school" | "college" | "professional" | "family" | "later-life";

export type Category =
  | "Needs vs Wants"
  | "Budgeting"
  | "Saving"
  | "Compounding"
  | "Inflation"
  | "Credit & Debt"
  | "Emergency Fund"
  | "Financial Safety"
  | "Investing Basics"
  | "Financial Goals"
  | "Risk Awareness"
  | "Protection";

export interface Question {
  id: string;
  lifeStage: LifeStageId;
  category: Category;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-indexed (0 to 3)
  explanation: string;
  difficulty: "basic" | "intermediate" | "advanced";
}

export interface LifeStageConfig {
  id: LifeStageId;
  label: string;
  subtitle: string;
  description: string;
  targetAudienceHref: string;
}

export type KnowledgeLevelId = "foundation" | "building" | "confident" | "strong-foundation";

export interface KnowledgeLevel {
  id: KnowledgeLevelId;
  name: string;
  minScore: number;
  maxScore: number;
  headline: string;
  description: string;
  colorClass: string;
  badgeClass: string;
}

export type CategoryStatus = "Strong" | "Developing" | "Explore";

export interface CategoryResult {
  category: Category;
  total: number;
  correct: number;
  status: CategoryStatus;
}

export interface LearningRecommendation {
  topic: string;
  description: string;
  href?: string;
}
