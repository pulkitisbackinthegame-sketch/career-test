export type Stream = "Commerce" | "Science" | "Arts/Humanities"

export interface SalaryRange {
  entry: string
  mid: string
  senior: string
}

export interface CareerPath {
  id: string
  title: string
  description: string
  streams: Stream[]
  interests: string[]
  aiRisk: "Low" | "Medium" | "High"
  aiRiskPercent: number
  aiRiskDesc: string
  difficulty: "Easy" | "Moderate" | "Hard"
  difficultyPercent: number
  difficultyDesc: string
  demand: "Low" | "Moderate" | "High"
  workHours: string
  keywords: string[]
  skills: string[]
  salary: SalaryRange
}

export const careerPaths: CareerPath[] = [
  // --- LAW & LEGAL STUDIES ---
  {
    id: "corporate-lawyer",
    title: "Corporate Lawyer",
    description: "Advises businesses on legal rights, obligations, and relations, specializing in contract, tax, and merger compliance.",
    streams: ["Commerce", "Arts/Humanities", "Science"],
    interests: ["Law & Policy", "Business & Management"],
    aiRisk: "Medium", aiRiskPercent: 45,
    aiRiskDesc: "AI drafts routine contracts, but complex courtroom litigation and strategic negotiation require human lawyers.",
    difficulty: "Hard", difficultyPercent: 75,
    difficultyDesc: "Requires cracking top law schools via CLAT/AILET followed by rigorous, competitive study.",
    demand: "High", workHours: "50-70 hrs/week",
    keywords: ["clat", "llb", "law", "corporate law", "ba llb", "bba llb"],
    skills: ["Negotiation", "Legal Drafting", "Analytical Thinking", "Public Speaking"],
    salary: { entry: "8-12 LPA", mid: "20-35 LPA", senior: "60-90+ LPA" }
  },
  {
    id: "litigation-lawyer",
    title: "Criminal / Civil Litigator",
    description: "Represents clients in court trials, arguing cases, conducting cross-examinations, and managing legal disputes.",
    streams: ["Arts/Humanities", "Commerce", "Science"],
    interests: ["Law & Policy", "Writing & Communication"],
    aiRisk: "Low", aiRiskPercent: 20,
    aiRiskDesc: "Courtroom advocacy, judging human behavior, and spontaneous legal arguments cannot be replicated by AI.",
    difficulty: "Hard", difficultyPercent: 80,
    difficultyDesc: "Takes years to build an independent practice and reputation in district or high courts.",
    demand: "High", workHours: "45-65 hrs/week",
    keywords: ["lawyer", "advocate", "clat", "llb", "court", "ba llb"],
    skills: ["Courtroom Advocacy", "Cross Examination", "Legal Research", "Storytelling"],
    salary: { entry: "4-7 LPA", mid: "12-25 LPA", senior: "50-100+ LPA" }
  },

  // --- ECONOMICS & POLICY ---
  {
    id: "economist",
    title: "Economist / Policy Analyst",
    description: "Studies data trends and creates frameworks to advise governments, central banks, and corporate blocks on financial policies.",
    streams: ["Arts/Humanities", "Commerce"],
    interests: ["Economics", "Law & Policy", "Data & Analytics"],
    aiRisk: "Medium", aiRiskPercent: 35,
    aiRiskDesc: "AI crunches data faster, but human judgment is vital to interpret policy implications and real-world behavior.",
    difficulty: "Moderate", difficultyPercent: 65,
    difficultyDesc: "Usually requires a strong master's degree or Ph.D. from premium institutes for core advisory roles.",
    demand: "Moderate", workHours: "40-50 hrs/week",
    keywords: ["economics", "eco hons", "ba eco", "policy", "analyst"],
    skills: ["Statistical Modeling", "Economic Theory", "Data Analytics", "Report Writing"],
    salary: { entry: "6-9 LPA", mid: "15-26 LPA", senior: "40-75 LPA" }
  },

  // --- COMMERCE & FINANCE ---
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    description: "Manages financial auditing, taxation, corporate finance, and accounting systems for businesses and individuals.",
    streams: ["Commerce"],
    interests: ["Accounting", "Finance & Markets"],
    aiRisk: "Medium", aiRiskPercent: 40,
    aiRiskDesc: "Basic bookkeeping is automated, but complex tax planning and auditing strategies require certified professionals.",
    difficulty: "Hard", difficultyPercent: 90,
    difficultyDesc: "Known for an exceptionally low passing percentage across Foundation, Intermediate, and Final exams.",
    demand: "High", workHours: "45-60 hrs/week (Peak during tax season)",
    keywords: ["ca", "chartered accountant", "b.com", "audit", "taxation"],
    skills: ["Tax Law compliance", "Financial Auditing", "Accounting Frameworks", "Corporate Law"],
    salary: { entry: "8-12 LPA", mid: "18-30 LPA", senior: "45-80+ LPA" }
  },
  {
    id: "investment-banker",
    title: "Investment Banker",
    description: "Helps corporations raise capital, issues debt, structures massive mergers & acquisitions, and guides stock listings.",
    streams: ["Commerce", "Science"],
    interests: ["Finance & Markets", "Business & Management"],
    aiRisk: "Medium", aiRiskPercent: 38,
    aiRiskDesc: "AI processes valuation models, but high-stakes deals depend entirely on human relationships and client trust.",
    difficulty: "Hard", difficultyPercent: 85,
    difficultyDesc: "Extreme competition; requires an MBA from Tier-1 colleges (IIMs) or global top certifications like CFA.",
    demand: "High", workHours: "70-90 hrs/week",
    keywords: ["investment banking", "ib", "cfa", "mba", "finance"],
    skills: ["Financial Valuation", "M&A Structuring", "Pitch Deck Creation", "Market Strategy"],
    salary: { entry: "12-22 LPA", mid: "30-60 LPA", senior: "100+ LPA" }
  },

  // --- COMPUTER SCIENCE & ENGINEERING ---
  {
    id: "software-engineer",
    title: "Software Engineer (Full-Stack)",
    description: "Designs, codes, and maintains scalable web applications, handling both client systems and database servers.",
    streams: ["Science"],
    interests: ["Technology & Coding", "Mathematics & Logic"],
    aiRisk: "High", aiRiskPercent: 55,
    aiRiskDesc: "AI generates basic boilerplate code blocks, but building unique architecture and creative problem-solving remains a human task.",
    difficulty: "Moderate", difficultyPercent: 60,
    difficultyDesc: "Accessible with practice, but keeping up with evolving languages and system tools requires non-stop learning.",
    demand: "High", workHours: "40-50 hrs/week",
    keywords: ["b.tech", "cse", "coding", "software developer", "computer science"],
    skills: ["JavaScript/TypeScript", "System Design", "Database Management", "Cloud Architectures"],
    salary: { entry: "6-14 LPA", mid: "18-35 LPA", senior: "45-90+ LPA" }
  },
  {
    id: "data-scientist",
    title: "Data Scientist / AI Engineer",
    description: "Builds complex machine learning algorithms and math models to train predictive systems and large language models.",
    streams: ["Science"],
    interests: ["Data & Analytics", "Technology & Coding", "Mathematics & Logic"],
    aiRisk: "Low", aiRiskPercent: 15,
    aiRiskDesc: "As the creators of AI frameworks, these engineers remain heavily insulated from automation risks.",
    difficulty: "Hard", difficultyPercent: 78,
    difficultyDesc: "Demands an exceptionally deep understanding of calculus, linear algebra, statistics, and programming languages.",
    demand: "High", workHours: "40-55 hrs/week",
    keywords: ["ai", "machine learning", "data science", "b.tech cse", "python"],
    skills: ["Python/R", "Deep Learning", "Predictive Analytics", "Advanced Statistics"],
    salary: { entry: "8-16 LPA", mid: "22-45 LPA", senior: "55-120+ LPA" }
  },

  // --- PSYCHOLOGY & HUMAN BEHAVIOR ---
  {
    id: "clinical-psychologist",
    title: "Clinical Psychologist",
    description: "Diagnoses and provides evidence-based therapies for emotional, behavioral, and mental health challenges.",
    streams: ["Arts/Humanities", "Science"],
    interests: ["Psychology & People", "Healthcare"],
    aiRisk: "Low", aiRiskPercent: 10,
    aiRiskDesc: "Deep empathy, therapeutic bonds, and reading non-verbal emotional cues cannot be emulated by software models.",
    difficulty: "Hard", difficultyPercent: 70,
    difficultyDesc: "Requires an MA/M.Sc followed by an RCI-approved M.Phil or Psy.D to legally practice in India.",
    demand: "High", workHours: "35-45 hrs/week",
    keywords: ["psychology", "ba psychology", "clinical", "therapy", "counseling"],
    skills: ["Psychotherapy", "Diagnostic Assessment", "Active Listening", "Empathy"],
    salary: { entry: "4-6 LPA", mid: "10-18 LPA", senior: "22-45+ LPA" }
  },

  // --- DESIGN & ARTS ---
  {
    id: "ui-ux-designer",
    title: "UI/UX Product Designer",
    description: "Shapes the digital presentation, visual flow, layouts, and accessibility experiences of apps and websites.",
    streams: ["Arts/Humanities", "Commerce", "Science"],
    interests: ["Design & Creativity", "Technology & Coding"],
    aiRisk: "Medium", aiRiskPercent: 30,
    aiRiskDesc: "AI speeds up standard asset layout designs, but understanding human user friction requires intuitive creative direction.",
    difficulty: "Moderate", difficultyPercent: 50,
    difficultyDesc: "Relies more on building a compelling visual portfolio of practical design work than high institutional exams.",
    demand: "High", workHours: "40-50 hrs/week",
    keywords: ["design", "ui ux", "b.des", "figma", "product designer"],
    skills: ["Figma/Adobe", "User Research", "Wireframing", "Interaction Design"],
    salary: { entry: "5-9 LPA", mid: "14-25 LPA", senior: "35-65+ LPA" }
  },

  // --- MEDIA & COMMUNICATION ---
  {
    id: "journalist",
    title: "Journalist / Media Anchor",
    description: "Investigates current events, reports news stories, and hosts public broadcasts across television and digital networks.",
    streams: ["Arts/Humanities", "Commerce"],
    interests: ["Writing & Communication", "Media & Content"],
    aiRisk: "Medium", aiRiskPercent: 45,
    aiRiskDesc: "AI can draft basic factual bulletins, but field reporting, live interviewing, and investigative journalism require human grit.",
    difficulty: "Moderate", difficultyPercent: 55,
    difficultyDesc: "Requires building trust, a unique vocal presence, and working through high-pressure breaking news situations.",
    demand: "Moderate", workHours: "45-60 hrs/week",
    keywords: ["bjmc", "journalism", "mass communication", "media"],
    skills: ["Investigative Reporting", "Public Speaking", "Script Writing", "Video Production"],
    salary: { entry: "3-6 LPA", mid: "8-18 LPA", senior: "25-60+ LPA" }
  }
]
