import { 
  Category, 
  Question, 
  LifeStageId, 
  KnowledgeLevel, 
  CategoryResult, 
  CategoryStatus, 
  LearningRecommendation 
} from "./types";

export const KNOWLEDGE_LEVELS: KnowledgeLevel[] = [
  {
    id: "foundation",
    name: "Foundation",
    minScore: 0,
    maxScore: 3,
    headline: "You're beginning your financial learning journey.",
    description: "You have taken the first step toward financial awareness. Focusing on foundational budgeting, daily saving habits, and safety rules will build immediate confidence.",
    colorClass: "text-amber-400",
    badgeClass: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  {
    id: "building",
    name: "Building",
    minScore: 4,
    maxScore: 6,
    headline: "You understand several important financial concepts, with some areas worth exploring further.",
    description: "You have a practical grasp of everyday money concepts. Deepening your understanding of inflation, compounding, and risk management will elevate your financial decision-making.",
    colorClass: "text-yellow-400",
    badgeClass: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
  {
    id: "confident",
    name: "Confident",
    minScore: 7,
    maxScore: 8,
    headline: "You have a solid foundation in several core financial concepts.",
    description: "You consistently make informed, structured financial choices and understand key money dynamics. Continuing to refine long-term goal planning and asset protection will keep you resilient.",
    colorClass: "text-sapphire-400",
    badgeClass: "bg-sapphire-500/10 text-sapphire-300 border-sapphire-500/20",
  },
  {
    id: "strong-foundation",
    name: "Strong Foundation",
    minScore: 9,
    maxScore: 10,
    headline: "You demonstrate strong financial-literacy fundamentals.",
    description: "You show a clear, holistic understanding of money principles, compounding, risk awareness, and financial security across real-life situations.",
    colorClass: "text-emerald-400",
    badgeClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
];

export function getKnowledgeLevel(score: number): KnowledgeLevel {
  const clamped = Math.max(0, Math.min(10, score));
  return (
    KNOWLEDGE_LEVELS.find((l) => clamped >= l.minScore && clamped <= l.maxScore) ||
    KNOWLEDGE_LEVELS[0]
  );
}

export function calculateCategoryBreakdown(
  questions: Question[],
  userAnswers: Record<string, number>
): CategoryResult[] {
  const categoryMap = new Map<Category, { total: number; correct: number }>();

  questions.forEach((q) => {
    const isCorrect = userAnswers[q.id] === q.correctAnswer;
    const current = categoryMap.get(q.category) || { total: 0, correct: 0 };
    categoryMap.set(q.category, {
      total: current.total + 1,
      correct: current.correct + (isCorrect ? 1 : 0),
    });
  });

  const results: CategoryResult[] = [];
  categoryMap.forEach((val, category) => {
    let status: CategoryStatus = "Developing";
    if (val.correct === val.total) {
      status = "Strong";
    } else if (val.correct === 0) {
      status = "Explore";
    } else {
      status = "Developing";
    }

    results.push({
      category,
      total: val.total,
      correct: val.correct,
      status,
    });
  });

  // Sort categories: Explore first, then Developing, then Strong
  const order: Record<CategoryStatus, number> = { Explore: 0, Developing: 1, Strong: 2 };
  return results.sort((a, b) => order[a.status] - order[b.status]);
}

export function getLearningRecommendations(
  categoryResults: CategoryResult[],
  lifeStage: LifeStageId
): LearningRecommendation[] {
  const recommendations: LearningRecommendation[] = [];

  const needImprovement = categoryResults.filter((c) => c.status !== "Strong");

  const topicCatalog: Record<Category, { topic: string; description: string; href?: string }> = {
    "Needs vs Wants": {
      topic: "Understanding Needs vs Wants",
      description: "Learn frameworks for conscious spending habits and managing lifestyle decisions.",
      href: "/blog/financial-literacy-for-school-students",
    },
    Budgeting: {
      topic: "Building a Practical Budget",
      description: "Structure your cash flows and establish baseline financial control.",
      href: "/blog/how-to-manage-your-first-salary",
    },
    Saving: {
      topic: "The Habit of Systematic Saving",
      description: "Explore methods to build consistent savings and resilience over time.",
      href: "/blog/personal-finance-for-young-professionals",
    },
    Compounding: {
      topic: "The Power of Compounding",
      description: "Understand time horizons, compound growth, and the Rule of 72.",
      href: "/blog/financial-literacy-for-school-students",
    },
    Inflation: {
      topic: "Understanding Inflation",
      description: "Learn how purchasing power changes and why real returns matter.",
      href: "/blog/personal-finance-for-young-professionals",
    },
    "Credit & Debt": {
      topic: "Understanding Credit & Debt",
      description: "Understand credit scores, revolving debt mechanics, and healthy borrowing limits.",
      href: "/blog/how-to-manage-your-first-salary",
    },
    "Emergency Fund": {
      topic: "Building an Emergency Reserve",
      description: "How to structure 3–6 months of essential liquidity in safe, accessible instruments.",
      href: "/blog/what-is-employee-financial-wellness",
    },
    "Financial Safety": {
      topic: "Digital Payment Security & Scam Safety",
      description: "Essential rules for UPI safety, phishing identification, and credential protection.",
      href: "/individual-learning",
    },
    "Investing Basics": {
      topic: "Asset Allocation Principles",
      description: "Learn how to balance growth assets and stability assets across time horizons.",
      href: "/individual-learning",
    },
    "Financial Goals": {
      topic: "Goal-Based Financial Planning",
      description: "Map milestones to structured timelines and realistic savings targets.",
      href: "/individual-learning",
    },
    "Risk Awareness": {
      topic: "Understanding Risk & Volatility",
      description: "Identify market risk, longevity risk, and how to evaluate financial claims.",
      href: "/individual-learning",
    },
    Protection: {
      topic: "Financial Protection & Insurance Basics",
      description: "Understand the role of pure term protection and independent health cover.",
      href: "/corporate-financial-wellness",
    },
  };

  needImprovement.forEach((item) => {
    const itemConfig = topicCatalog[item.category];
    if (itemConfig && recommendations.length < 3) {
      recommendations.push(itemConfig);
    }
  });

  if (recommendations.length < 2) {
    if (lifeStage === "school" || lifeStage === "college") {
      recommendations.push(topicCatalog["Compounding"]);
      recommendations.push(topicCatalog["Budgeting"]);
    } else if (lifeStage === "professional") {
      recommendations.push(topicCatalog["Investing Basics"]);
      recommendations.push(topicCatalog["Protection"]);
    } else {
      recommendations.push(topicCatalog["Inflation"]);
      recommendations.push(topicCatalog["Emergency Fund"]);
    }
  }

  const uniqueTopics = new Set<string>();
  return recommendations.filter((r) => {
    if (uniqueTopics.has(r.topic)) return false;
    uniqueTopics.add(r.topic);
    return true;
  }).slice(0, 3);
}
