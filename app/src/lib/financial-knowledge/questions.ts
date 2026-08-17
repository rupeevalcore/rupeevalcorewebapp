import { LifeStageId, Question, LifeStageConfig } from "./types";

export const LIFE_STAGES: LifeStageConfig[] = [
  {
    id: "school",
    label: "School Student",
    subtitle: "Grades 6–12",
    description: "Foundational money habits, needs vs wants, daily saving, and digital safety.",
    targetAudienceHref: "/schools",
  },
  {
    id: "college",
    label: "College Student",
    subtitle: "Undergrads & Graduates",
    description: "First income planning, 50-30-20 budgeting, compounding, inflation, and avoiding debt traps.",
    targetAudienceHref: "/colleges",
  },
  {
    id: "professional",
    label: "Working Professional",
    subtitle: "Early & Mid-Career",
    description: "Salary cash flow, emergency buffers, tax basics, credit health, and long-term planning.",
    targetAudienceHref: "/corporate-financial-wellness",
  },
  {
    id: "family",
    label: "Family / Parent",
    subtitle: "Households & Parents",
    description: "Household cash flows, children's education planning, protection, and family risk management.",
    targetAudienceHref: "/individual-learning",
  },
  {
    id: "later-life",
    label: "Preparing for Later Life",
    subtitle: "Pre-Retirees & Seniors",
    description: "Purchasing power over time, healthcare costs, emergency liquidity, and asset preservation.",
    targetAudienceHref: "/individual-learning",
  },
];

export const QUESTIONS: Record<LifeStageId, Question[]> = {
  // ==========================================
  // 1. SCHOOL STUDENTS (10 Questions)
  // ==========================================
  school: [
    {
      id: "sch-01",
      lifeStage: "school",
      category: "Needs vs Wants",
      question: "You receive ₹1,000 as a birthday gift. Which of the following is an example of spending on a 'Need' rather than a 'Want'?",
      options: [
        "Buying the latest trendy video game",
        "Buying necessary school notebooks and a geometry box",
        "Ordering snacks from a fast-food app with friends",
        "Buying branded sneakers because your friends have them"
      ],
      correctAnswer: 1,
      explanation: "Needs are essential items required for daily living or basic education (like school supplies), whereas wants are things that are nice to have but not strictly necessary.",
      difficulty: "basic",
    },
    {
      id: "sch-02",
      lifeStage: "school",
      category: "Saving",
      question: "If you save ₹20 every single day in a piggy bank, approximately how much will you have accumulated by the end of one year (365 days)?",
      options: [
        "About ₹2,400",
        "About ₹5,200",
        "About ₹7,300",
        "About ₹10,000"
      ],
      correctAnswer: 2,
      explanation: "₹20 × 365 days = ₹7,300. Consistent small daily savings add up to a significant sum over time.",
      difficulty: "basic",
    },
    {
      id: "sch-03",
      lifeStage: "school",
      category: "Budgeting",
      question: "What is a 'Budget' in simple terms?",
      options: [
        "A list of all the things you wish to buy someday",
        "A plan for how much money you expect to receive and how you will spend and save it",
        "A penalty paid to a bank when you spend too much",
        "A secret code used to unlock digital payment apps"
      ],
      correctAnswer: 1,
      explanation: "A budget is simply a written plan that helps you track your expected money coming in and decide in advance how much to spend and how much to save.",
      difficulty: "basic",
    },
    {
      id: "sch-04",
      lifeStage: "school",
      category: "Financial Safety",
      question: "A stranger on an online gaming site sends you a link claiming you won ₹5,000, but asks you to enter your parent's UPI PIN to receive the money. What should you do?",
      options: [
        "Enter the UPI PIN immediately so you get the money before it expires",
        "Ask a friend to enter their UPI PIN instead",
        "Never share or enter the UPI PIN; tell your parents immediately because UPI PIN is only used to send money, not receive it",
        "Type 1234 as a test PIN to see if it works"
      ],
      correctAnswer: 2,
      explanation: "You never need to enter a UPI PIN to receive money. Entering a PIN always authorizes money to be deducted from your bank account. This is a common online scam.",
      difficulty: "basic",
    },
    {
      id: "sch-05",
      lifeStage: "school",
      category: "Compounding",
      question: "What does 'Earning Interest' on a savings bank account mean?",
      options: [
        "The government takes a fee from your savings every month",
        "The bank pays you a small percentage of extra money for keeping your savings with them",
        "You have to pay extra money every time you check your balance",
        "You get a discount voucher for online shopping"
      ],
      correctAnswer: 1,
      explanation: "When you deposit money in a bank savings account, the bank pays you extra money called interest as a reward for keeping your funds with them.",
      difficulty: "basic",
    },
    {
      id: "sch-06",
      lifeStage: "school",
      category: "Financial Goals",
      question: "You want to buy a bicycle costing ₹4,000 in 4 months. How much should you plan to save each month?",
      options: [
        "₹500 per month",
        "₹1,000 per month",
        "₹1,500 per month",
        "₹2,000 per month"
      ],
      correctAnswer: 1,
      explanation: "Dividing your target goal (₹4,000) by the number of months (4) gives ₹1,000 per month. Setting a clear goal makes saving structured and achievable.",
      difficulty: "basic",
    },
    {
      id: "sch-07",
      lifeStage: "school",
      category: "Needs vs Wants",
      question: "What is 'Delayed Gratification' in financial habits?",
      options: [
        "Forgetting where you kept your pocket money",
        "Waiting and saving money now so you can buy something more important or valuable later",
        "Borrowing money from everyone so you can spend immediately",
        "Refusing to buy anything ever in your life"
      ],
      correctAnswer: 1,
      explanation: "Delayed gratification is the ability to resist an immediate impulse purchase so that you can achieve a bigger, more meaningful goal in the future.",
      difficulty: "intermediate",
    },
    {
      id: "sch-08",
      lifeStage: "school",
      category: "Financial Safety",
      question: "What does an OTP (One-Time Password) do, and with whom should you share it?",
      options: [
        "It is a secret security code sent to verify transactions; you should never share it with anyone over phone or chat",
        "It is a public promo code you can post on social media for discounts",
        "It is a bank password that you must share with anyone claiming to be a bank executive",
        "It is a username that friends can use to play games together"
      ],
      correctAnswer: 0,
      explanation: "An OTP is a private security key used to confirm your identity and authorize transactions. Legitimate banks and officials will never ask you to share your OTP.",
      difficulty: "basic",
    },
    {
      id: "sch-09",
      lifeStage: "school",
      category: "Inflation",
      question: "If a notebook cost ₹30 five years ago and the exact same notebook costs ₹50 today, what economic concept does this price increase illustrate?",
      options: [
        "Deflation",
        "Inflation",
        "Compounding",
        "Depreciation"
      ],
      correctAnswer: 1,
      explanation: "Inflation is the general rise in prices over time, which means the same amount of money buys fewer goods and services than it used to.",
      difficulty: "intermediate",
    },
    {
      id: "sch-10",
      lifeStage: "school",
      category: "Risk Awareness",
      question: "If an online app promises that investing ₹500 will give you a guaranteed ₹5,000 in just 2 days without any risk, what is the most likely truth?",
      options: [
        "It is a genuine government scheme to help school students",
        "It is almost certainly a fraudulent scam, because no legitimate investment can guarantee 10x returns in 2 days",
        "It is an ordinary bank interest rate",
        "It is safe as long as you use your friend's phone"
      ],
      correctAnswer: 1,
      explanation: "Unrealistically high and fast guaranteed returns are the #1 indicator of a scam. In real financial markets, higher potential returns always come with higher risk, and instant 10x guarantees do not exist.",
      difficulty: "basic",
    },
  ],

  // ==========================================
  // 2. COLLEGE STUDENTS (10 Questions)
  // ==========================================
  college: [
    {
      id: "col-01",
      lifeStage: "college",
      category: "Budgeting",
      question: "In the popular 50-30-20 budgeting guideline for managing your income, what does the 20% represent?",
      options: [
        "20% for entertainment and dining out",
        "20% for rent and utilities",
        "20% for savings, emergency fund, and debt repayment",
        "20% for buying luxury gadgets"
      ],
      correctAnswer: 2,
      explanation: "The 50-30-20 rule suggests allocating roughly 50% of take-home income to Needs, 30% to Wants, and at least 20% to Savings and building financial resilience.",
      difficulty: "basic",
    },
    {
      id: "col-02",
      lifeStage: "college",
      category: "Compounding",
      question: "Why does starting to invest ₹2,000/month at age 21 often yield much more wealth by age 50 than starting with ₹5,000/month at age 35?",
      options: [
        "Because bank interest rates are higher for younger people",
        "Because the compound interest has 14 extra years to generate returns on previous returns",
        "Because stock markets only give returns to people under 30",
        "Because taxes are completely zero in your twenties"
      ],
      correctAnswer: 1,
      explanation: "Time is the most powerful ingredient in compounding. Returns generated in early years start generating their own returns, creating exponential growth over long periods.",
      difficulty: "intermediate",
    },
    {
      id: "col-03",
      lifeStage: "college",
      category: "Credit & Debt",
      question: "If you have a credit card bill of ₹15,000 and pay only the 'Minimum Amount Due' of ₹750 every month, what happens?",
      options: [
        "The remaining ₹14,250 is forgiven by the bank as a loyalty reward",
        "The remaining balance incurs heavy finance charges (often 36%–42% annualized interest), making total repayment very costly",
        "Your credit score reaches 900 automatically",
        "The bank gives you an automatic cash prize"
      ],
      correctAnswer: 1,
      explanation: "Paying only the minimum due avoids late payment fees, but the unpaid balance attracts steep revolving interest (3% to 3.5% per month or up to 40%+ yearly), leading to debt traps.",
      difficulty: "intermediate",
    },
    {
      id: "col-04",
      lifeStage: "college",
      category: "Inflation",
      question: "If the annual inflation rate in India is 6%, and your money is kept in a regular savings account earning 3% interest, what is happening to your purchasing power?",
      options: [
        "Your purchasing power is growing by 3% every year",
        "Your purchasing power is decreasing by approximately 3% in real terms every year",
        "Your purchasing power remains completely identical",
        "Your purchasing power doubles every 3 years"
      ],
      correctAnswer: 1,
      explanation: "Real return = Interest rate (3%) minus Inflation (6%) = -3%. Because prices rise faster than your savings interest, your money buys less over time.",
      difficulty: "intermediate",
    },
    {
      id: "col-05",
      lifeStage: "college",
      category: "Emergency Fund",
      question: "What is the primary purpose of an Emergency Fund for a young graduate starting their first job?",
      options: [
        "To buy festival gifts and vacation tickets when sales are announced",
        "To cover 3 to 6 months of essential living expenses in case of sudden job loss or medical urgency without borrowing",
        "To speculate on volatile penny stocks",
        "To earn maximum possible returns regardless of risk"
      ],
      correctAnswer: 1,
      explanation: "An emergency fund provides safety and peace of mind. It keeps you from having to borrow at high interest rates when unforeseen events occur.",
      difficulty: "basic",
    },
    {
      id: "col-06",
      lifeStage: "college",
      category: "Financial Safety",
      question: "You receive an SMS: 'Your electricity bill is overdue. Electricity will be disconnected tonight. Call this 10-digit number immediately.' What is this?",
      options: [
        "An official emergency alert from the state electricity board",
        "A typical urgency-based phishing scam designed to panic you into transferring money or downloading remote access apps",
        "A mandatory KYC procedure for new bank accounts",
        "A government rebate scheme"
      ],
      correctAnswer: 1,
      explanation: "Scammers use artificial urgency (threat of disconnection, account freeze) to bypass rational thinking. Official utility providers follow formal notice processes, not random WhatsApp/SMS threats.",
      difficulty: "basic",
    },
    {
      id: "col-07",
      lifeStage: "college",
      category: "Investing Basics",
      question: "What is 'Diversification' in simple financial terms?",
      options: [
        "Putting all your savings into a single hot stock that your friend recommended",
        "Spreading your investments across different asset types or companies to reduce the impact of any single failure",
        "Opening bank accounts in ten different cities",
        "Converting all your cash into foreign currency"
      ],
      correctAnswer: 1,
      explanation: "Diversification ('not putting all your eggs in one basket') ensures that if one company or sector underperforms, the overall health of your portfolio is protected by others.",
      difficulty: "basic",
    },
    {
      id: "col-08",
      lifeStage: "college",
      category: "Credit & Debt",
      question: "What is a 'Credit Score' (like CIBIL) and why does it matter to college graduates?",
      options: [
        "A score of your college exam percentages sent to employers",
        "A three-digit score reflecting your borrowing and repayment track record, used by lenders to approve loans and set interest rates",
        "The amount of cash balance remaining in your digital wallet",
        "A social media popularity rating"
      ],
      correctAnswer: 1,
      explanation: "A credit score (300–900) indicates your creditworthiness based on timely bill and loan repayments. A good score (750+) makes future education, home, or vehicle loans cheaper and easier to get.",
      difficulty: "intermediate",
    },
    {
      id: "col-09",
      lifeStage: "college",
      category: "Budgeting",
      question: "You land your first job with a net take-home salary of ₹30,000/month. What should be your first step before committing to new EMIs?",
      options: [
        "Immediately buy an expensive smartphone on 24-month EMI",
        "Calculate your fixed monthly necessities (rent, food, commute), set aside a savings portion, and check your affordability buffer",
        "Spend the entire first month's salary on luxury dining and worry about savings next year",
        "Apply for multiple personal loans to build credit score quickly"
      ],
      correctAnswer: 1,
      explanation: "Understanding your cash flow baseline before taking on fixed recurring liabilities ensures you avoid getting trapped in lifestyle inflation from day one.",
      difficulty: "basic",
    },
    {
      id: "col-10",
      lifeStage: "college",
      category: "Risk Awareness",
      question: "What is the relationship between Risk and Potential Return across financial instruments?",
      options: [
        "Higher potential returns always come with zero risk",
        "Generally, to seek higher potential returns, you must be willing to accept higher risk and potential volatility",
        "Risk and return have no relationship in finance",
        "The safest investments always produce the highest returns"
      ],
      correctAnswer: 1,
      explanation: "Risk and return are fundamentally linked. Guaranteed safety (like savings accounts) offers modest returns, while higher-growth assets involve market volatility and risk of capital fluctuation.",
      difficulty: "basic",
    },
  ],

  // ==========================================
  // 3. WORKING PROFESSIONALS (10 Questions)
  // ==========================================
  professional: [
    {
      id: "prof-01",
      lifeStage: "professional",
      category: "Budgeting",
      question: "You receive a 15% salary hike this year. What is 'Lifestyle Inflation' (or Lifestyle Creep)?",
      options: [
        "When government taxes rise automatically with every promotion",
        "The tendency to increase your discretionary spending to match every increase in income, leaving your savings rate unchanged",
        "A medical condition caused by workplace stress",
        "The rise in rental prices across metropolitan cities"
      ],
      correctAnswer: 1,
      explanation: "Lifestyle creep occurs when increased earnings are immediately consumed by upgraded cars, gadgets, or dining, preventing long-term wealth accumulation despite higher pay.",
      difficulty: "basic",
    },
    {
      id: "prof-02",
      lifeStage: "professional",
      category: "Emergency Fund",
      question: "Where should an emergency fund for a working professional ideally be parked?",
      options: [
        "In high-risk penny stocks or cryptocurrency for maximum profit",
        "In easily accessible, liquid, and safe instruments (like liquid mutual funds, high-yield savings, or sweep-in FDs)",
        "Locked in a 10-year real estate property that cannot be sold quickly",
        "In physical gold jewelry kept in a bank locker"
      ],
      correctAnswer: 1,
      explanation: "The purpose of an emergency fund is liquidity and capital preservation, not high returns. It must be accessible within 24 hours without penalty during emergencies.",
      difficulty: "intermediate",
    },
    {
      id: "prof-03",
      lifeStage: "professional",
      category: "Protection",
      question: "What is the primary purpose of a Pure Term Life Insurance policy for an earning professional with financial dependents?",
      options: [
        "To get a guaranteed cash maturity bonus after 20 years",
        "To provide a large, tax-free financial safety net to your dependents if you pass away prematurely, at an affordable premium",
        "To trade in the stock market on your behalf",
        "To get a loan against your salary"
      ],
      correctAnswer: 1,
      explanation: "Term insurance provides high financial protection (sum assured) for a low cost, replacing your economic value for dependent family members without mixing insurance with investment.",
      difficulty: "intermediate",
    },
    {
      id: "prof-04",
      lifeStage: "professional",
      category: "Compounding",
      question: "Using the Rule of 72, if an investment earns an average annual return of 12%, approximately how many years will it take for your invested capital to double?",
      options: [
        "About 3 years",
        "About 6 years (72 ÷ 12)",
        "About 12 years",
        "About 24 years"
      ],
      correctAnswer: 1,
      explanation: "The Rule of 72 is a quick mental math shortcut: 72 divided by the expected annual rate of return (12%) equals approximately 6 years for money to double.",
      difficulty: "intermediate",
    },
    {
      id: "prof-05",
      lifeStage: "professional",
      category: "Credit & Debt",
      question: "Which of the following debts should generally be paid off first in a sound financial debt-reduction plan?",
      options: [
        "A low-interest home loan at 8.5% with tax benefits",
        "A high-interest credit card balance or personal loan charging 18%–36% annualized interest",
        "An interest-free loan from a family member with flexible repayment",
        "A student education loan with low interest rates"
      ],
      correctAnswer: 1,
      explanation: "High-interest consumer debt (credit cards, personal loans) destroys cash flow rapidly. Clearing the highest-interest debt first saves the most money over time.",
      difficulty: "basic",
    },
    {
      id: "prof-06",
      lifeStage: "professional",
      category: "Inflation",
      question: "If healthcare inflation in India averages 10%–12% per year, what happens to a ₹5 Lakh health insurance cover over a 15-year career if it is never reviewed or increased?",
      options: [
        "Its real coverage value expands due to government subsidies",
        "Its real purchasing power against medical treatments will be severely diminished, making hospital bills difficult to absorb",
        "It stays exactly equal to all hospital costs regardless of time",
        "It automatically upgrades to ₹50 Lakhs"
      ],
      correctAnswer: 1,
      explanation: "Medical inflation increases treatment costs significantly over time. Regular review of health coverage and super top-up policies is necessary to maintain adequate protection.",
      difficulty: "intermediate",
    },
    {
      id: "prof-07",
      lifeStage: "professional",
      category: "Investing Basics",
      question: "What does 'Asset Allocation' mean in personal financial planning?",
      options: [
        "Choosing which computer monitor to buy for work",
        "Dividing your investable savings among different asset classes (equity, fixed income, cash, gold) based on your goals, timeline, and risk capacity",
        "Putting 100% of your money into real estate only",
        "Giving all your salary to an employer for stock options"
      ],
      correctAnswer: 1,
      explanation: "Asset allocation is the deliberate balance between growth assets (like equities) and stability assets (like debt/fixed income) to achieve goals with manageable volatility.",
      difficulty: "intermediate",
    },
    {
      id: "prof-08",
      lifeStage: "professional",
      category: "Financial Safety",
      question: "You get a call from someone claiming to be a 'SEBI Registered Stock Advisor' offering guaranteed 50% monthly profits on options trading in exchange for sharing your trading account credentials. What is the right response?",
      options: [
        "Share your credentials because they claim to be registered",
        "Refuse immediately; SEBI strictly prohibits guaranteed profit claims and you should never share login credentials with anyone",
        "Give them half your password to test them",
        "Ask them to double the guarantee to 100% first"
      ],
      correctAnswer: 1,
      explanation: "No registered advisor can legally offer guaranteed returns on volatile derivative or equity markets. Account credential sharing is a severe security risk.",
      difficulty: "basic",
    },
    {
      id: "prof-09",
      lifeStage: "professional",
      category: "Financial Goals",
      question: "When planning for a financial goal that is 15 years away (like retirement or a child's future), why is pure cash in a bank locker considered a risky strategy?",
      options: [
        "Because bank lockers are illegal in India",
        "Because inflation will relentlessly erode the purchasing power of idle cash over 15 years",
        "Because cash in lockers attracts double income tax every month",
        "Because currency notes expire automatically after 5 years"
      ],
      correctAnswer: 1,
      explanation: "While cash feels safe because its nominal number doesn't drop, its real purchasing power drops every year due to inflation. Long-term goals require inflation-beating growth.",
      difficulty: "intermediate",
    },
    {
      id: "prof-10",
      lifeStage: "professional",
      category: "Risk Awareness",
      question: "What is the recommended rule of thumb regarding the percentage of monthly income spent on total loan EMIs (Debt-to-Income ratio)?",
      options: [
        "Total EMIs should ideally be kept below 35%–40% of net monthly income to prevent financial stress",
        "Total EMIs should ideally be 80% to 90% of income",
        "You should borrow as much as the bank is willing to approve regardless of income",
        "EMIs should only be paid once every two years"
      ],
      correctAnswer: 0,
      explanation: "Keeping total monthly loan EMIs under 35%–40% of net take-home salary leaves enough room for emergency savings, insurance, living expenses, and investments.",
      difficulty: "basic",
    },
  ],

  // ==========================================
  // 4. FAMILY / PARENT (10 Questions)
  // ==========================================
  family: [
    {
      id: "fam-01",
      lifeStage: "family",
      category: "Budgeting",
      question: "What is the most effective first step for a household struggling to track rising monthly family expenses?",
      options: [
        "Take a personal loan to cover miscellaneous expenses",
        "Track all cash and digital spending for 60 to 90 days to identify recurring leaks and establish a realistic family budget",
        "Stop buying all groceries for one month",
        "Apply for 3 new credit cards to divide expenses"
      ],
      correctAnswer: 1,
      explanation: "You cannot manage what you do not measure. A 60–90 day tracking exercise brings transparency to family spending patterns and highlights non-essential leaks.",
      difficulty: "basic",
    },
    {
      id: "fam-02",
      lifeStage: "family",
      category: "Emergency Fund",
      question: "For a family with dependent children and home loan EMIs, what size emergency fund is generally recommended?",
      options: [
        "1 week of grocery money",
        "6 to 12 months of mandatory household living expenses and EMI commitments",
        "Only the balance in your wallet",
        "No emergency fund is needed if you have a credit card"
      ],
      correctAnswer: 1,
      explanation: "Families with dependents and fixed EMI obligations face higher disruption risk from unexpected income loss or medical events, making a 6–12 month cushion prudent.",
      difficulty: "intermediate",
    },
    {
      id: "fam-03",
      lifeStage: "family",
      category: "Financial Goals",
      question: "A child is currently 3 years old and will enter college at age 18 (15 years from now). What type of investment horizon is this for education planning?",
      options: [
        "An ultra-short-term horizon requiring cash in a cupboard",
        "A long-term horizon (15 years) where an inflation-aware, diversified growth approach can be utilized",
        "A day-trading horizon requiring daily buying and selling",
        "An irrelevant timeline that should only be planned 6 months before college"
      ],
      correctAnswer: 1,
      explanation: "A 15-year timeframe is a long-term goal. It allows families to use compounding and equity-oriented growth in early years, gradually transitioning to capital preservation as college approaches.",
      difficulty: "intermediate",
    },
    {
      id: "fam-04",
      lifeStage: "family",
      category: "Protection",
      question: "Why is relying solely on employer-provided health insurance risky for a family?",
      options: [
        "Because employer insurance is completely invalid in private hospitals",
        "Because if you change jobs, lose employment, or retire, you and your family lose health coverage immediately when you may need it most",
        "Because employer insurance charges 50% extra tax",
        "Because employer insurance cannot cover dental checkups"
      ],
      correctAnswer: 1,
      explanation: "Corporate health cover is tied to your job. Having an independent family floater policy ensures uninterrupted coverage during job transitions or unexpected career breaks.",
      difficulty: "intermediate",
    },
    {
      id: "fam-05",
      lifeStage: "family",
      category: "Inflation",
      question: "Higher education costs in India typically experience an inflation rate of 8%–10% annually. If a college degree costs ₹10 Lakhs today, approximately what will it cost in 15 years at 10% inflation?",
      options: [
        "About ₹12 Lakhs",
        "About ₹15 Lakhs",
        "About ₹40 Lakhs (doubling roughly every 7 years)",
        "About ₹10 Lakhs (prices never change for education)"
      ],
      correctAnswer: 2,
      explanation: "At 10% annual inflation, costs double every ~7.2 years. Over 15 years, ₹10 Lakhs multiplies roughly 4x to approximately ₹40 Lakhs. Planning must factor in education inflation.",
      difficulty: "advanced",
    },
    {
      id: "fam-06",
      lifeStage: "family",
      category: "Financial Safety",
      question: "What is a 'Nominee' on a bank account or mutual fund folio, and why is updating nominations critical for families?",
      options: [
        "A person authorized to spend your money while you are at work",
        "A designated custodian who receives and manages the assets smoothly in the event of the account holder's death, avoiding prolonged legal disputes",
        "A bank manager who audits your tax return",
        "A witness needed to open an online payment app"
      ],
      correctAnswer: 1,
      explanation: "Nominations ensure that your family can access your financial assets without lengthy court procedures or bureaucratic friction in times of grief.",
      difficulty: "basic",
    },
    {
      id: "fam-07",
      lifeStage: "family",
      category: "Credit & Debt",
      question: "A family is considering taking an expensive personal loan at 16% interest to fund a luxury holiday. What is the financial assessment of this decision?",
      options: [
        "It is great because holidays build credit scores faster than saving",
        "It is financially unhealthy because borrowing at high interest for a depreciating/consumed experience creates lingering debt without adding assets",
        "It is tax-deductible under Indian income tax laws",
        "It is recommended by all financial institutions"
      ],
      correctAnswer: 1,
      explanation: "Vacations are discretionary wants and should ideally be funded through advance savings (sinking funds), not high-interest debt that burdens future monthly income.",
      difficulty: "basic",
    },
    {
      id: "fam-08",
      lifeStage: "family",
      category: "Needs vs Wants",
      question: "How can parents best teach healthy money habits to their school-going children at home?",
      options: [
        "Never discuss money and buy everything the child demands immediately",
        "Involve them in age-appropriate discussions about needs vs wants, budgeting for treats, and the practice of saving before spending",
        "Give them unlimited access to credit cards without monitoring",
        "Tell them money is bad and should never be thought about"
      ],
      correctAnswer: 1,
      explanation: "Open, age-appropriate family conversations about budgeting, delayed gratification, and saving create confident, financially responsible habits that last into adulthood.",
      difficulty: "basic",
    },
    {
      id: "fam-09",
      lifeStage: "family",
      category: "Risk Awareness",
      question: "What does it mean to have 'Unbiased Financial Education' vs 'Product Selling'?",
      options: [
        "Unbiased education teaches concepts, risk management, and decision frameworks without pushing specific commission-earning products",
        "Product selling is always free and has no hidden incentives",
        "There is no difference between education and sales",
        "Unbiased education guarantees 100% stock market profits"
      ],
      correctAnswer: 0,
      explanation: "Unbiased financial education focuses entirely on building your knowledge and independent decision-making skills without selling commercial financial products for commissions.",
      difficulty: "basic",
    },
    {
      id: "fam-10",
      lifeStage: "family",
      category: "Investing Basics",
      question: "When investing for multiple family goals with different timelines (e.g. vacation in 1 yr, car in 3 yrs, child college in 12 yrs), how should you approach them?",
      options: [
        "Put all money into a single 1-year deposit and repeat every year",
        "Map each goal to a separate timeline and choose suitable asset classes matching the duration of each goal (Goal-Based Investing)",
        "Borrow for all goals regardless of timeline",
        "Only invest for the furthest goal and ignore the near-term goals"
      ],
      correctAnswer: 1,
      explanation: "Goal-based investing separates short-term needs (requiring safety and liquidity) from long-term aspirations (which can endure market cycles for higher growth).",
      difficulty: "intermediate",
    },
  ],

  // ==========================================
  // 5. PREPARING FOR LATER LIFE (10 Questions)
  // ==========================================
  "later-life": [
    {
      id: "lat-01",
      lifeStage: "later-life",
      category: "Inflation",
      question: "If a retired couple's monthly living expenses are ₹40,000 today, why is calculating future expenses with inflation critical over a 25-year retirement?",
      options: [
        "Because prices will remain unchanged for senior citizens",
        "Because at a modest 6% inflation rate, that same lifestyle will require around ₹80,000 in 12 years and over ₹1,70,000 in 25 years",
        "Because retirement accounts automatically double every January",
        "Because the government pays 100% of all grocery expenses after age 60"
      ],
      correctAnswer: 1,
      explanation: "Retirement spans decades. Without accounting for inflation, a corpus that seems sufficient in year 1 can become severely inadequate by year 15 or 20.",
      difficulty: "intermediate",
    },
    {
      id: "lat-02",
      lifeStage: "later-life",
      category: "Risk Awareness",
      question: "What is 'Longevity Risk' in retirement planning?",
      options: [
        "The risk of retiring too early before age 40",
        "The financial risk of outliving your accumulated retirement savings due to living longer than initially planned",
        "The risk that banks will close all accounts after age 65",
        "The risk that interest rates will rise too fast"
      ],
      correctAnswer: 1,
      explanation: "With improving healthcare, people frequently live 25–35 years post-retirement. Longevity risk is the danger of running out of money while still in retirement.",
      difficulty: "intermediate",
    },
    {
      id: "lat-03",
      lifeStage: "later-life",
      category: "Emergency Fund",
      question: "Why should retirees keep a dedicated healthcare and emergency reserve separate from their regular monthly pension/income stream?",
      options: [
        "To avoid having to distress-sell long-term investments during unexpected medical emergencies or market downturns",
        "Because banks do not allow retirees to withdraw monthly income",
        "To hide funds from hospital billing departments",
        "To earn speculative short-term trading profits"
      ],
      correctAnswer: 0,
      explanation: "Having dedicated emergency liquidity prevents retirees from being forced to liquidate long-term assets at market lows when sudden health expenses occur.",
      difficulty: "basic",
    },
    {
      id: "lat-04",
      lifeStage: "later-life",
      category: "Financial Safety",
      question: "A senior citizen receives a phone call claiming their pension account is suspended unless they immediately read out an OTP sent to their phone. What should they do?",
      options: [
        "Read out the OTP immediately to prevent pension stoppage",
        "Disconnect the call; never share an OTP over the phone, and visit or call their local bank branch through an official verified number",
        "Send their debit card PIN via SMS instead",
        "Transfer their entire pension to a stranger's account"
      ],
      correctAnswer: 1,
      explanation: "Pension and KYC fear-tactics heavily target senior citizens. Government bodies and banks never ask for OTPs or PINs over unsolicited telephone calls.",
      difficulty: "basic",
    },
    {
      id: "lat-05",
      lifeStage: "later-life",
      category: "Investing Basics",
      question: "Why is putting 100% of retirement savings into pure equity (stock market) generally considered too volatile for someone entering retirement?",
      options: [
        "Because senior citizens are legally barred from owning stocks in India",
        "Because sharp short-term market downturns could force withdrawals at heavy losses (Sequence of Returns Risk), damaging the portfolio's longevity",
        "Because stock markets never give returns over 5 years",
        "Because equity investments do not allow bank transfers"
      ],
      correctAnswer: 1,
      explanation: "When you are actively withdrawing monthly income, a major market crash can rapidly deplete equity portfolios. A balanced mix of stable debt instruments and growth assets is essential.",
      difficulty: "advanced",
    },
    {
      id: "lat-06",
      lifeStage: "later-life",
      category: "Investing Basics",
      question: "On the other hand, why is keeping 100% of a 30-year retirement fund in low-interest fixed deposits also a hidden risk?",
      options: [
        "Because fixed deposits are not legal in India",
        "Because after factoring in annual inflation and income taxes, fixed deposit returns may barely preserve real purchasing power over 3 decades",
        "Because fixed deposits can only be held for 6 months",
        "Because banks confiscate deposits when people turn 70"
      ],
      correctAnswer: 1,
      explanation: "Fixed deposits offer capital stability, but post-tax real returns are often near zero or negative compared to lifestyle and healthcare inflation over long multi-decade retirements.",
      difficulty: "intermediate",
    },
    {
      id: "lat-07",
      lifeStage: "later-life",
      category: "Protection",
      question: "What is a 'Will' (Testament) and why is having a clearly written one valuable for peace of mind?",
      options: [
        "A government tax form filed annually with local municipal offices",
        "A legal declaration specifying how your assets should be distributed among your chosen beneficiaries, preventing family confusion and disputes",
        "A document that surrenders all your savings to the state",
        "An insurance contract that guarantees stock market returns"
      ],
      correctAnswer: 1,
      explanation: "A clear, valid Will ensures your wishes are respected and that your life savings pass smoothly to your loved ones without costly legal friction.",
      difficulty: "basic",
    },
    {
      id: "lat-08",
      lifeStage: "later-life",
      category: "Credit & Debt",
      question: "What should be the general priority regarding outstanding debts (like personal loans or credit card balances) as you approach retirement?",
      options: [
        "Take on more personal loans to enjoy early retirement",
        "Aim to enter retirement debt-free so your fixed monthly pension or corpus does not get drained by EMI interest payments",
        "Stop paying EMIs and assume banks will forgive them after retirement",
        "Convert all debt into higher-interest payday loans"
      ],
      correctAnswer: 1,
      explanation: "Fixed loan commitments in retirement create constant stress. Entering retirement without high-interest liabilities allows maximum freedom with your monthly cash flow.",
      difficulty: "basic",
    },
    {
      id: "lat-09",
      lifeStage: "later-life",
      category: "Financial Safety",
      question: "An acquaintance approaches a retiree with an 'exclusive, unregistered collective scheme' promising 24% annual returns backed by 'special insider contacts'. What is the safest response?",
      options: [
        "Invest all retirement savings immediately before the scheme closes",
        "Decline firmly and consult only registered, transparent, and regulated avenues; unregulated high-return schemes carry immense risk of total capital loss",
        "Ask neighbors to pool their money into the scheme",
        "Take a loan to invest double in the scheme"
      ],
      correctAnswer: 1,
      explanation: "Retirees cannot easily replace lost capital through new earned income. Protecting principal from unregistered, unverified schemes is the foremost rule of later-life financial security.",
      difficulty: "basic",
    },
    {
      id: "lat-10",
      lifeStage: "later-life",
      category: "Financial Goals",
      question: "What is the key takeaway of sound later-life financial education?",
      options: [
        "Trying to double money overnight through risky speculation",
        "Preserving capital, managing inflation and healthcare costs, ensuring regular liquidity, and maintaining financial dignity and independence",
        "Surrendering all financial decision-making to strangers",
        "Ignoring all budget planning completely"
      ],
      correctAnswer: 1,
      explanation: "Later-life financial literacy is about security, independence, and peace of mind—balancing protection with sustainable, inflation-aware cash flow.",
      difficulty: "basic",
    },
  ],
};
