export type Stream = "Commerce" | "Science" | "Arts/Humanities"

export type AiLevel = "Low" | "Medium" | "High"

export type DifficultyLevel = "Easy" | "Moderate" | "Hard"

export interface SalaryBand {
  amount: number
  years: string
}

export interface Career {
  id: string
  title: string
  whatTheyDo: string
  marketDemand: "Very High" | "High" | "Growing" | "Moderate"
  aiVulnerability: {
    score: number
    level: AiLevel
    reason: string
  }
  difficulty: {
    score: number
    level: DifficultyLevel
    reason: string
  }
  workHours: string
  salary: {
    entry: SalaryBand
    mid: SalaryBand
    senior: SalaryBand
  }
  keySkills: string[]
  companies: string[]
  path: string[]
  streams: Stream[]
  relatedCourses: string[]
  relatedSkills: string[]
  relatedInterests: string[]
  mbaBoost: boolean
}

export const INTEREST_OPTIONS = [
  "Finance & Markets",
  "Accounting",
  "Economics",
  "Business & Management",
  "Marketing & Branding",
  "Data & Analytics",
  "Technology & Coding",
  "Design & Creativity",
  "Writing & Communication",
  "Law & Policy",
  "Psychology & People",
  "Mathematics & Logic",
  "Science & Research",
  "Healthcare",
  "Entrepreneurship",
  "Media & Content",
]

export const SKILL_OPTIONS = [
  "Excel / Spreadsheets",
  "Python / Programming",
  "SQL / Databases",
  "Public Speaking",
  "Writing",
  "Graphic Design",
  "Financial Modeling",
  "Data Analysis",
  "Leadership",
  "Negotiation",
  "Research",
  "Social Media",
]

export const STREAMS: Stream[] = ["Commerce", "Science", "Arts/Humanities"]

export const careers: Career[] = [
  {
    id: "investment-banker",
    title: "Investment Banker",
    whatTheyDo: "Helps companies raise money and advises on mergers, acquisitions and big financial deals.",
    marketDemand: "High",
    aiVulnerability: {
      score: 35,
      level: "Medium",
      reason: "AI automates a lot of modelling and research grunt-work, but high-stakes deal judgment and client relationships still need humans.",
    },
    difficulty: {
      score: 88,
      level: "Hard",
      reason: "Extremely competitive entry, gruelling hours and constant pressure to perform on multi-crore deals.",
    },
    workHours: "60–90 hrs/week — among the most demanding careers, with late nights and weekend work during live deals.",
    salary: {
      entry: { amount: 1200000, years: "0–2 yrs" },
      mid: { amount: 3500000, years: "3–7 yrs" },
      senior: { amount: 9000000, years: "8+ yrs" },
    },
    keySkills: ["Financial Modeling", "Valuation", "Excel", "Negotiation", "Communication"],
    companies: ["Goldman Sachs", "JPMorgan", "Morgan Stanley", "Kotak Investment Banking", "Avendus"],
    path: [
      "Class 12 (Commerce preferred)",
      "Bachelor's in Commerce / Economics / BBA",
      "Internships in finance / equity research",
      "MBA Finance from a top school (IIM / ISB) — big advantage",
      "Analyst → Associate → VP → MD",
    ],
    streams: ["Commerce", "Science"],
    relatedCourses: ["b.com", "bba", "economics", "finance", "mba", "ca"],
    relatedSkills: ["Financial Modeling", "Excel / Spreadsheets", "Negotiation", "Data Analysis"],
    relatedInterests: ["Finance & Markets", "Economics", "Business & Management", "Mathematics & Logic"],
    mbaBoost: true,
  },
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    whatTheyDo: "Audits accounts, handles taxation and ensures a business's finances are accurate and compliant.",
    marketDemand: "Very High",
    aiVulnerability: {
      score: 55,
      level: "High",
      reason: "Routine bookkeeping, reconciliation and basic tax filing are increasingly automated, pushing CAs toward advisory work.",
    },
    difficulty: {
      score: 82,
      level: "Hard",
      reason: "The CA exams have single-digit pass rates and the qualification takes years of study alongside articleship.",
    },
    workHours: "45–60 hrs/week, spiking sharply during audit and tax-filing seasons.",
    salary: {
      entry: { amount: 800000, years: "0–2 yrs" },
      mid: { amount: 1800000, years: "3–7 yrs" },
      senior: { amount: 5000000, years: "8+ yrs" },
    },
    keySkills: ["Accounting", "Taxation", "Auditing", "Excel", "Compliance"],
    companies: ["Deloitte", "PwC", "EY", "KPMG", "Grant Thornton"],
    path: [
      "Class 12 (Commerce)",
      "Register for CA Foundation",
      "Clear Intermediate + Articleship (3 yrs)",
      "Clear CA Final",
      "Audit / Tax / Advisory roles",
    ],
    streams: ["Commerce"],
    relatedCourses: ["b.com", "ca", "commerce", "accounting"],
    relatedSkills: ["Excel / Spreadsheets", "Financial Modeling", "Data Analysis"],
    relatedInterests: ["Accounting", "Finance & Markets", "Business & Management"],
    mbaBoost: false,
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    whatTheyDo: "Finds patterns in data and builds models that help companies make smarter decisions.",
    marketDemand: "Very High",
    aiVulnerability: {
      score: 25,
      level: "Low",
      reason: "Data scientists build and steer the AI itself; demand grows as more companies adopt machine learning.",
    },
    difficulty: {
      score: 62,
      level: "Moderate",
      reason: "Needs strong maths and coding plus continuous learning, but the path is flexible and self-study friendly.",
    },
    workHours: "40–50 hrs/week, generally predictable with occasional deadline crunches.",
    salary: {
      entry: { amount: 1000000, years: "0–2 yrs" },
      mid: { amount: 2400000, years: "3–6 yrs" },
      senior: { amount: 6000000, years: "7+ yrs" },
    },
    keySkills: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization"],
    companies: ["Google", "Amazon", "Microsoft", "Flipkart", "Razorpay"],
    path: [
      "Class 12 (Science / Commerce with Maths)",
      "Bachelor's in CS / Statistics / Maths / Engineering",
      "Learn Python, SQL & ML through projects",
      "Internships + a strong portfolio",
      "Analyst → Data Scientist → Senior / Lead",
    ],
    streams: ["Science", "Commerce"],
    relatedCourses: ["b.tech", "computer science", "statistics", "mathematics", "bca", "data science"],
    relatedSkills: ["Python / Programming", "SQL / Databases", "Data Analysis", "Excel / Spreadsheets"],
    relatedInterests: ["Data & Analytics", "Technology & Coding", "Mathematics & Logic", "Science & Research"],
    mbaBoost: false,
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    whatTheyDo: "Designs, writes and maintains the code that powers apps, websites and systems.",
    marketDemand: "Very High",
    aiVulnerability: {
      score: 40,
      level: "Medium",
      reason: "AI speeds up coding and may replace routine tasks, but system design, problem-solving and judgment remain in demand.",
    },
    difficulty: {
      score: 60,
      level: "Moderate",
      reason: "Competitive interviews and constant upskilling, but you can break in through self-taught projects and a strong portfolio.",
    },
    workHours: "40–50 hrs/week, with occasional crunch close to releases.",
    salary: {
      entry: { amount: 900000, years: "0–2 yrs" },
      mid: { amount: 2500000, years: "3–6 yrs" },
      senior: { amount: 7000000, years: "7+ yrs" },
    },
    keySkills: ["Programming", "Data Structures", "System Design", "Problem Solving", "Git"],
    companies: ["Google", "Microsoft", "Atlassian", "Zomato", "Swiggy"],
    path: [
      "Class 12 (Science with Maths)",
      "B.Tech / BCA / B.Sc CS",
      "Build projects & practice DSA",
      "Internships + open-source",
      "SDE-1 → SDE-2 → Senior → Staff",
    ],
    streams: ["Science"],
    relatedCourses: ["b.tech", "bca", "computer science", "engineering", "b.sc"],
    relatedSkills: ["Python / Programming", "SQL / Databases", "Data Analysis"],
    relatedInterests: ["Technology & Coding", "Mathematics & Logic", "Data & Analytics"],
    mbaBoost: false,
  },
  {
    id: "product-manager",
    title: "Product Manager",
    whatTheyDo: "Decides what a product should do and coordinates teams to build and ship it.",
    marketDemand: "High",
    aiVulnerability: {
      score: 20,
      level: "Low",
      reason: "Requires cross-team leadership, user empathy and strategic trade-offs that AI cannot make on its own.",
    },
    difficulty: {
      score: 66,
      level: "Moderate",
      reason: "Rarely an entry-level role — you usually need a few years in tech, design or analytics before moving in.",
    },
    workHours: "45–55 hrs/week, meeting-heavy with frequent context-switching.",
    salary: {
      entry: { amount: 1500000, years: "0–3 yrs" },
      mid: { amount: 3500000, years: "4–8 yrs" },
      senior: { amount: 9000000, years: "9+ yrs" },
    },
    keySkills: ["Product Strategy", "Communication", "Data Analysis", "Leadership", "User Research"],
    companies: ["Google", "Flipkart", "Razorpay", "CRED", "PhonePe"],
    path: [
      "Class 12 (any stream)",
      "Bachelor's (Engineering / Business common)",
      "Work in tech / analytics / design",
      "MBA (IIM / ISB) helps for a fast track",
      "APM → PM → Senior PM → Director",
    ],
    streams: ["Commerce", "Science", "Arts/Humanities"],
    relatedCourses: ["bba", "b.tech", "mba", "economics", "design"],
    relatedSkills: ["Leadership", "Data Analysis", "Public Speaking", "Negotiation"],
    relatedInterests: ["Business & Management", "Technology & Coding", "Data & Analytics", "Entrepreneurship"],
    mbaBoost: true,
  },
  {
    id: "digital-marketer",
    title: "Digital Marketing Specialist",
    whatTheyDo: "Promotes brands online through ads, social media, SEO and content to attract customers.",
    marketDemand: "High",
    aiVulnerability: {
      score: 60,
      level: "High",
      reason: "AI tools now generate copy, creatives and ad targeting, automating much of routine campaign execution.",
    },
    difficulty: {
      score: 35,
      level: "Easy",
      reason: "One of the most accessible careers — you can start with free certifications and a few live campaigns.",
    },
    workHours: "40–48 hrs/week, busier around launches and campaign deadlines.",
    salary: {
      entry: { amount: 450000, years: "0–2 yrs" },
      mid: { amount: 1100000, years: "3–6 yrs" },
      senior: { amount: 3000000, years: "7+ yrs" },
    },
    keySkills: ["SEO", "Social Media", "Content", "Analytics", "Paid Ads"],
    companies: ["Dentsu", "Ogilvy", "Nykaa", "Zomato", "Schbang"],
    path: [
      "Class 12 (any stream)",
      "Bachelor's in Marketing / Mass Comm / any field",
      "Certifications (Google, Meta) + live campaigns",
      "Build a portfolio of results",
      "Executive → Manager → Head of Growth",
    ],
    streams: ["Commerce", "Arts/Humanities", "Science"],
    relatedCourses: ["bba", "mass communication", "marketing", "b.com", "journalism"],
    relatedSkills: ["Social Media", "Writing", "Data Analysis", "Graphic Design"],
    relatedInterests: ["Marketing & Branding", "Media & Content", "Design & Creativity", "Writing & Communication"],
    mbaBoost: true,
  },
  {
    id: "management-consultant",
    title: "Management Consultant",
    whatTheyDo: "Advises companies on solving big problems and improving how their business runs.",
    marketDemand: "High",
    aiVulnerability: {
      score: 30,
      level: "Medium",
      reason: "AI handles research and analysis, but framing problems and persuading leadership stays a human strength.",
    },
    difficulty: {
      score: 80,
      level: "Hard",
      reason: "Top firms recruit from a handful of colleges and MBAs, with notoriously tough case interviews.",
    },
    workHours: "55–80 hrs/week with heavy travel and tight client deadlines.",
    salary: {
      entry: { amount: 1400000, years: "0–2 yrs" },
      mid: { amount: 3500000, years: "3–7 yrs" },
      senior: { amount: 10000000, years: "8+ yrs" },
    },
    keySkills: ["Problem Solving", "Communication", "Analytics", "Presentation", "Leadership"],
    companies: ["McKinsey", "BCG", "Bain", "Deloitte", "Kearney"],
    path: [
      "Class 12 (any stream)",
      "Bachelor's (top college helps)",
      "Internship in consulting / strategy",
      "MBA from IIM / ISB — major advantage",
      "Analyst → Consultant → Manager → Partner",
    ],
    streams: ["Commerce", "Science", "Arts/Humanities"],
    relatedCourses: ["bba", "economics", "b.tech", "mba", "b.com"],
    relatedSkills: ["Leadership", "Public Speaking", "Data Analysis", "Negotiation"],
    relatedInterests: ["Business & Management", "Economics", "Entrepreneurship", "Data & Analytics"],
    mbaBoost: true,
  },
  {
    id: "lawyer",
    title: "Corporate Lawyer",
    whatTheyDo: "Advises businesses on contracts, compliance and legal risk in their deals and operations.",
    marketDemand: "High",
    aiVulnerability: {
      score: 45,
      level: "Medium",
      reason: "AI drafts and reviews routine documents, but negotiation, courtroom work and complex advice need lawyers.",
    },
    difficulty: {
      score: 75,
      level: "Hard",
      reason: "Cracking a top law school via CLAT and then a tier-1 firm is highly competitive and demanding.",
    },
    workHours: "50–70 hrs/week, with late nights when deals are closing.",
    salary: {
      entry: { amount: 1000000, years: "0–3 yrs" },
      mid: { amount: 2500000, years: "4–8 yrs" },
      senior: { amount: 7000000, years: "9+ yrs" },
    },
    keySkills: ["Legal Research", "Drafting", "Negotiation", "Communication", "Attention to Detail"],
    companies: ["Cyril Amarchand", "Khaitan & Co", "AZB & Partners", "Trilegal", "Shardul Amarchand"],
    path: [
      "Class 12 (any stream)",
      "5-year integrated LLB (BA/BBA LLB) or 3-year LLB",
      "Internships at law firms",
      "Clear bar exam",
      "Associate → Senior Associate → Partner",
    ],
    streams: ["Arts/Humanities", "Commerce", "Science"],
    relatedCourses: ["llb", "law", "ba", "bba"],
    relatedSkills: ["Research", "Writing", "Negotiation", "Public Speaking"],
    relatedInterests: ["Law & Policy", "Writing & Communication", "Business & Management"],
    mbaBoost: false,
  },
  {
    id: "ux-designer",
    title: "UX / Product Designer",
    whatTheyDo: "Designs how apps and websites look and feel so they're easy and enjoyable to use.",
    marketDemand: "High",
    aiVulnerability: {
      score: 38,
      level: "Medium",
      reason: "AI assists with visuals and prototypes, but understanding users and crafting experiences remains human-led.",
    },
    difficulty: {
      score: 52,
      level: "Moderate",
      reason: "Portfolio-driven and learnable without a formal degree, though standing out takes strong case studies.",
    },
    workHours: "40–45 hrs/week — generally one of the more balanced tech roles.",
    salary: {
      entry: { amount: 600000, years: "0–2 yrs" },
      mid: { amount: 1600000, years: "3–6 yrs" },
      senior: { amount: 4500000, years: "7+ yrs" },
    },
    keySkills: ["Figma", "User Research", "Visual Design", "Prototyping", "Empathy"],
    companies: ["Google", "Razorpay", "CRED", "Swiggy", "Microsoft"],
    path: [
      "Class 12 (any stream)",
      "Design degree (B.Des) or self-taught + portfolio",
      "Learn Figma & UX fundamentals",
      "Build case studies",
      "Designer → Senior → Lead → Design Manager",
    ],
    streams: ["Arts/Humanities", "Science", "Commerce"],
    relatedCourses: ["b.des", "design", "fine arts", "hci"],
    relatedSkills: ["Graphic Design", "Research", "Writing"],
    relatedInterests: ["Design & Creativity", "Technology & Coding", "Psychology & People"],
    mbaBoost: false,
  },
  {
    id: "economist",
    title: "Economist / Policy Analyst",
    whatTheyDo: "Studies economic data and trends to advise governments, banks or companies on decisions.",
    marketDemand: "Moderate",
    aiVulnerability: {
      score: 30,
      level: "Medium",
      reason: "AI crunches data faster, but interpreting policy implications and advising leaders needs human judgment.",
    },
    difficulty: {
      score: 64,
      level: "Moderate",
      reason: "Usually needs a master's from a strong institute, and research roles can be competitive.",
    },
    workHours: "40–45 hrs/week, steady and largely predictable.",
    salary: {
      entry: { amount: 700000, years: "0–2 yrs" },
      mid: { amount: 1800000, years: "3–7 yrs" },
      senior: { amount: 4500000, years: "8+ yrs" },
    },
    keySkills: ["Economics", "Statistics", "Research", "Writing", "Data Analysis"],
    companies: ["RBI", "World Bank", "NITI Aayog", "CRISIL", "ICRA"],
    path: [
      "Class 12 (Commerce / Arts with Economics)",
      "BA / B.Sc Economics",
      "MA / M.Sc Economics (DSE, JNU, ISI)",
      "Research / policy internships",
      "Analyst → Economist → Senior Economist",
    ],
    streams: ["Commerce", "Arts/Humanities", "Science"],
    relatedCourses: ["economics", "ba", "b.sc", "statistics"],
    relatedSkills: ["Research", "Data Analysis", "Writing", "Excel / Spreadsheets"],
    relatedInterests: ["Economics", "Law & Policy", "Data & Analytics", "Science & Research"],
    mbaBoost: false,
  },
  {
    id: "content-writer",
    title: "Content Writer / Strategist",
    whatTheyDo: "Writes articles, scripts and brand copy that inform, engage and convert readers.",
    marketDemand: "Moderate",
    aiVulnerability: {
      score: 70,
      level: "High",
      reason: "Generative AI produces drafts quickly, so routine writing is at high risk; strategy and original voice add value.",
    },
    difficulty: {
      score: 32,
      level: "Easy",
      reason: "Low barrier to entry — a portfolio and consistent writing can get you started without a specific degree.",
    },
    workHours: "35–45 hrs/week, often flexible and remote-friendly.",
    salary: {
      entry: { amount: 350000, years: "0–2 yrs" },
      mid: { amount: 800000, years: "3–6 yrs" },
      senior: { amount: 2000000, years: "7+ yrs" },
    },
    keySkills: ["Writing", "SEO", "Research", "Editing", "Storytelling"],
    companies: ["Zomato", "Nykaa", "The Ken", "Dentsu", "Razorpay"],
    path: [
      "Class 12 (any stream)",
      "Bachelor's in English / Journalism / any field",
      "Build a writing portfolio / blog",
      "Freelance + internships",
      "Writer → Senior Writer → Content Lead",
    ],
    streams: ["Arts/Humanities", "Commerce", "Science"],
    relatedCourses: ["english", "journalism", "mass communication", "ba"],
    relatedSkills: ["Writing", "Research", "Social Media"],
    relatedInterests: ["Writing & Communication", "Media & Content", "Marketing & Branding"],
    mbaBoost: false,
  },
  {
    id: "doctor",
    title: "Doctor (MBBS)",
    whatTheyDo: "Diagnoses and treats patients, caring for their health and guiding their recovery.",
    marketDemand: "Very High",
    aiVulnerability: {
      score: 15,
      level: "Low",
      reason: "AI supports diagnosis, but hands-on care, examination and patient trust keep doctors firmly in demand.",
    },
    difficulty: {
      score: 95,
      level: "Hard",
      reason: "NEET is fiercely competitive and the journey through MBBS, residency and specialisation spans a decade.",
    },
    workHours: "50–80 hrs/week, with night shifts and on-call duty, especially during residency.",
    salary: {
      entry: { amount: 800000, years: "0–3 yrs" },
      mid: { amount: 1800000, years: "4–8 yrs" },
      senior: { amount: 4000000, years: "9+ yrs" },
    },
    keySkills: ["Biology", "Diagnosis", "Empathy", "Decision Making", "Communication"],
    companies: ["AIIMS", "Apollo", "Fortis", "Max Healthcare", "Manipal"],
    path: [
      "Class 12 (Science with Biology)",
      "Clear NEET",
      "MBBS (5.5 yrs)",
      "MD / MS specialization (optional)",
      "Resident → Specialist → Consultant",
    ],
    streams: ["Science"],
    relatedCourses: ["mbbs", "biology", "b.sc", "medicine"],
    relatedSkills: ["Research"],
    relatedInterests: ["Healthcare", "Science & Research", "Psychology & People"],
    mbaBoost: false,
  },
  {
    id: "psychologist",
    title: "Clinical Psychologist",
    whatTheyDo: "Helps people manage mental health through assessment, therapy and counselling.",
    marketDemand: "Growing",
    aiVulnerability: {
      score: 18,
      level: "Low",
      reason: "Human empathy, trust and nuanced judgment in therapy are very hard for AI to replicate.",
    },
    difficulty: {
      score: 68,
      level: "Moderate",
      reason: "Requires years of study up to an M.Phil/PsyD and RCI licensing before you can practise independently.",
    },
    workHours: "35–45 hrs/week, mostly session-based and schedulable.",
    salary: {
      entry: { amount: 400000, years: "0–3 yrs" },
      mid: { amount: 900000, years: "4–8 yrs" },
      senior: { amount: 2200000, years: "9+ yrs" },
    },
    keySkills: ["Empathy", "Active Listening", "Assessment", "Research", "Communication"],
    companies: ["NIMHANS", "Fortis", "Manas", "Amaha", "Lissun"],
    path: [
      "Class 12 (any stream, Psychology helps)",
      "BA / B.Sc Psychology",
      "MA Psychology",
      "M.Phil / PsyD in Clinical Psychology (RCI)",
      "Therapist → Clinical Psychologist → Consultant",
    ],
    streams: ["Arts/Humanities", "Science", "Commerce"],
    relatedCourses: ["psychology", "ba", "b.sc"],
    relatedSkills: ["Research", "Active Listening"],
    relatedInterests: ["Psychology & People", "Healthcare", "Science & Research"],
    mbaBoost: false,
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur / Founder",
    whatTheyDo: "Builds a business from an idea — solving a problem, building a team and creating value.",
    marketDemand: "Growing",
    aiVulnerability: {
      score: 10,
      level: "Low",
      reason: "Founders use AI as leverage; vision, risk-taking and leadership cannot be automated away.",
    },
    difficulty: {
      score: 90,
      level: "Hard",
      reason: "Most startups fail — it demands relentless effort, financial risk and resilience with no safety net.",
    },
    workHours: "60–100 hrs/week in the early years, with no fixed limits or off-days.",
    salary: {
      entry: { amount: 300000, years: "0–3 yrs" },
      mid: { amount: 2000000, years: "4–8 yrs" },
      senior: { amount: 10000000, years: "9+ yrs" },
    },
    keySkills: ["Leadership", "Sales", "Resilience", "Strategy", "Finance"],
    companies: ["Your own startup", "Y Combinator (backed)", "Sequoia / Peak XV (backed)"],
    path: [
      "Class 12 (any stream)",
      "Bachelor's (optional but useful network)",
      "Build & test a small product",
      "Find co-founders / mentors / funding",
      "Founder → Scale → Exit / Grow",
    ],
    streams: ["Commerce", "Science", "Arts/Humanities"],
    relatedCourses: ["bba", "b.com", "b.tech", "economics", "mba"],
    relatedSkills: ["Leadership", "Negotiation", "Public Speaking", "Financial Modeling"],
    relatedInterests: ["Entrepreneurship", "Business & Management", "Marketing & Branding", "Technology & Coding"],
    mbaBoost: false,
  },
]

export interface CareerInput {
  stream: Stream
  course?: string
  interests: string[]
  skills: string[]
  hasInternship: boolean
  hasMba: boolean
  mbaSchool?: string
}

export interface CareerMatch {
  career: Career
  matchPercent: number
  reasons: string[]
}

const TOP_MBA_SCHOOLS = ["iim", "isb", "xlri", "fms", "spjain", "iift", "mdi"]

export function matchCareers(input: CareerInput): CareerMatch[] {
  // STRICT FILTER: A career MUST explicitly include the selected stream
  const eligibleCareers = careers.filter((career) => 
    career.streams.includes(input.stream)
  )

  const results: CareerMatch[] = eligibleCareers.map((career) => {
    let totalScore = 0
    let maxPossibleScore = 0
    const reasons: string[] = []

    // Primary Stream Fit (Weight: 30)
    maxPossibleScore += 30
    if (career.streams[0] === input.stream) {
      totalScore += 30
      reasons.push(`Perfect match for your primary stream: ${input.stream}.`)
    } else {
      totalScore += 18
      reasons.push(`Compatible with your stream: ${input.stream}.`)
    }

    // Direct Interest Matching (Weight: 40)
    if (input.interests && input.interests.length > 0) {
      maxPossibleScore += 40
      const matchingInterests = input.interests.filter((interest) =>
        career.relatedInterests.includes(interest)
      )
      
      if (matchingInterests.length > 0) {
        const interestScore = (matchingInterests.length / input.interests.length) * 40
        totalScore += Math.min(40, interestScore)
        reasons.push(`Strongly aligns with your interest in ${matchingInterests.slice(0, 2).join(" & ")}.`)
      }
    }

    // Skill Selection Overlap (Weight: 20)
    if (input.skills && input.skills.length > 0) {
      maxPossibleScore += 20
      const matchingSkills = input.skills.filter((skill) =>
        career.relatedSkills.includes(skill)
      )
      
      if (matchingSkills.length > 0) {
        const skillScore = (matchingSkills.length / career.relatedSkills.length) * 20
        totalScore += Math.min(20, skillScore)
        reasons.push(`Leverages your skills in ${matchingSkills.slice(0, 2).join(" & ")}.`)
      }
    }

    // Explicit Academic Background Check (Weight: 10)
    if (input.course && input.course.trim()) {
      maxPossibleScore += 10
      const userCourse = input.course.toLowerCase().trim()
      const courseMatch = career.relatedCourses.some((rc) => userCourse.includes(rc) || rc.includes(userCourse))
      
      if (courseMatch) {
        totalScore += 10
        reasons.push(`Directly complements your current background/course.`)
      }
    }

    // Experience Bonuses
    let bonus = 0
    if (input.hasInternship) {
      bonus += 3
      reasons.push(`Your practical internship experience adds a competitive edge.`)
    }
    
    if (input.hasMba && career.mbaBoost) {
      const school = (input.mbaSchool || "").toLowerCase()
      const isTopSchool = TOP_MBA_SCHOOLS.some((s) => school.includes(s))
      bonus += isTopSchool ? 7 : 4
      reasons.push(isTopSchool ? `Top-tier MBA provides an elite path here.` : `An MBA accelerates growth in this role.`)
    }

    const basePercentage = maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 0
    const matchPercent = Math.min(99, Math.round(basePercentage + bonus))

    return { career, matchPercent, reasons }
  })

  // Filter out poor recommendations entirely
  return results
    .filter(item => item.matchPercent >= 35)
    .sort((a, b) => b.matchPercent - a.matchPercent)
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1).replace(/\.0$/, "")} LPA`
  }
  return `₹${amount.toLocaleString("en-IN")}`
}