export type Stream = "Science" | "Commerce" | "Arts/Humanities"

export interface SalaryRange {
  min: number
  max: number
}

export interface Career {
  title: string
  description: string
  salaryRange: SalaryRange
  degrees: string[]
  tasks: string[]
  tags: string[]
}

export const careersData: Record<Stream, Career[]> = {
  "Science": [
    {
      title: "Software Engineer / Developer",
      description: "Designs, builds, and maintains software applications, operating systems, and core digital systems.",
      salaryRange: { min: 6, max: 35 },
      degrees: ["B.Tech CSE", "B.E. Computer Science", "BCA", "B.Sc Computer Science"],
      tasks: ["Write clean application code", "Debug production systems", "Architect database schemas", "Review peer merge requests"],
      tags: ["Computer Science & Tech", "Engineering"]
    },
    {
      title: "Data Scientist & AI Specialist",
      description: "Analyzes massive infrastructure datasets and builds machine learning pipelines to solve complex problems.",
      salaryRange: { min: 8, max: 40 },
      degrees: ["B.Tech Data Science", "B.Sc Statistics", "B.Tech CSE"],
      tasks: ["Train predictive ML models", "Clean noisy database pipelines", "Design analytical dashboards", "Deploy statistical neural networks"],
      tags: ["Computer Science & Tech", "Engineering"]
    },
    {
      title: "Mechanical Engineer",
      description: "Designs, manufactures, and tests mechanical sensors, thermal devices, and heavy machinery automation.",
      salaryRange: { min: 4, max: 18 },
      degrees: ["B.Tech Mechanical Engineering", "B.E. Mechanical"],
      tasks: ["Develop structural CAD models", "Run thermal simulation profiles", "Oversee production assembly lines", "Prototype robotic joints"],
      tags: ["Engineering"]
    },
    {
      title: "Civil Engineer",
      description: "Plans, designs, and supervises construction operations for public infrastructure, roads, and bridges.",
      salaryRange: { min: 4, max: 15 },
      degrees: ["B.Tech Civil Engineering", "B.E. Civil"],
      tasks: ["Review structural blueprints", "Calculate load-bearing limits", "Survey construction job sites", "Manage raw material logistics"],
      tags: ["Engineering"]
    },
    {
      title: "Electrical & Electronics Engineer",
      description: "Designs components for power generation transmission, smart embedded electronics, and consumer hardware.",
      salaryRange: { min: 5, max: 22 },
      degrees: ["B.Tech Electrical", "B.Tech ECE"],
      tasks: ["Design integrated circuit PCBs", "Program low-level microcontrollers", "Simulate signal processing setups", "Audit electrical safety systems"],
      tags: ["Engineering", "Computer Science & Tech"]
    },
    {
      title: "Medical Practitioner (Doctor)",
      description: "Diagnoses illnesses, prescribes systemic medications, and performs medical interventions to heal patients.",
      salaryRange: { min: 9, max: 50 },
      degrees: ["MBBS"],
      tasks: ["Examine incoming clinic patients", "Prescribe diagnostic lab tests", "Formulate medical treatment plans", "Perform surgical interventions"],
      tags: ["Medicine & Biology"]
    },
    {
      title: "Pharmacist / Pharmaceutical Scientist",
      description: "Compounds chemical prescriptions, conducts medical batch testing, and handles regulatory pharmacy oversight.",
      salaryRange: { min: 3.5, max: 12 },
      degrees: ["B.Pharm", "Pharm.D"],
      tasks: ["Dispense therapeutic medications", "Conduct stability testing", "Monitor inventory and cold chains", "Review patient allergy conflicts"],
      tags: ["Medicine & Biology"]
    },
    {
      title: "Biotechnology Researcher",
      description: "Applies cellular and biomolecular principles to create healthcare, industrial, and agricultural solutions.",
      salaryRange: { min: 4.5, max: 16 },
      degrees: ["B.Tech Biotechnology", "B.Sc Microbiology"],
      tasks: ["Isolate cellular DNA chains", "Run biochemical assays", "Document clinical lab experiments", "Engineer synthetic enzymes"],
      tags: ["Medicine & Biology"]
    },
    {
      title: "Aerospace Engineer",
      description: "Researches, builds, and verifies operating tolerances for commercial aircraft, satellites, and spacecraft.",
      salaryRange: { min: 6, max: 28 },
      degrees: ["B.Tech Aerospace Engineering"],
      tasks: ["Test aerodynamics in wind tunnels", "Calculate orbital launch vectors", "Evaluate composite hull stress", "Program flight control systems"],
      tags: ["Engineering"]
    },
    {
      title: "Environmental Scientist",
      description: "Conducts data-driven field research to eliminate localized pollution and consults on sustainable green initiatives.",
      salaryRange: { min: 4, max: 11 },
      degrees: ["B.Sc Environmental Science", "B.Tech Environmental"],
      tasks: ["Collect ecosystem water samples", "Draft environmental impact briefs", "Monitor localized air quality indices", "Consult on green waste setups"],
      tags: ["Medicine & Biology"]
    }
  ],
  "Commerce": [
    {
      title: "Chartered Accountant (CA)",
      description: "Manages statutory corporate audits, deep tax optimization schemes, and official financial accounting systems.",
      salaryRange: { min: 8, max: 30 },
      degrees: ["B.Com + CA Qualification"],
      tasks: ["Perform corporate ledger audits", "File direct and indirect corporate taxes", "Analyze fiscal balance sheets", "Advise on asset structuring"],
      tags: ["Commerce & B.Com"]
    },
    {
      title: "Investment Banker",
      description: "Advises enterprise organizations on capital raising configurations, complex asset valuations, and mergers.",
      salaryRange: { min: 10, max: 45 },
      degrees: ["BBA Finance", "B.Com Hons", "BFIA"],
      tasks: ["Build financial forecast sheets", "Pitch equity restructuring packages", "Conduct target due diligence", "Draft M&A transition memos"],
      tags: ["Management & BBA", "Commerce & B.Com", "Economics"]
    },
    {
      title: "Financial Risk Analyst",
      description: "Measures and mitigates operational, market, and credit risk exposures using quantitative financial software.",
      salaryRange: { min: 6, max: 22 },
      degrees: ["B.Com", "B.Sc Actuarial Science", "BA Economics"],
      tasks: ["Calculate portfolio Value-at-Risk", "Stress-test capital reserves", "Monitor market pricing fluctuations", "Draft risk mitigation rules"],
      tags: ["Commerce & B.Com", "Economics"]
    },
    {
      title: "Management Consultant",
      description: "Evaluates standard corporate workflows to redesign operational systems and unlock organizational efficiency.",
      salaryRange: { min: 7, max: 28 },
      degrees: ["BBA", "B.Com Hons", "BMS"],
      tasks: ["Interview business team leaders", "Analyze corporate cost overheads", "Present strategic structural changes", "Optimize supply chain networks"],
      tags: ["Management & BBA"]
    },
    {
      title: "Corporate Secretary (CS)",
      description: "Ensures the enterprise fully obeys all board protocols, statutory disclosures, and regulatory laws.",
      salaryRange: { min: 5.5, max: 18 },
      degrees: ["B.Com + CS Professional Certification"],
      tasks: ["Record board meeting minutes", "File regulatory compliance forms", "Draft corporate bylaws", "Advise directors on legal duties"],
      tags: ["Commerce & B.Com", "Law & Legal Studies"]
    },
    {
      title: "Human Resource Manager",
      description: "Directs employee hiring parameters, talent retention guidelines, and comprehensive performance frameworks.",
      salaryRange: { min: 4, max: 14 },
      degrees: ["BBA HR", "BMS", "B.Com"],
      tasks: ["Coordinate executive recruitment", "Design internal training tracks", "Mediate workforce grievances", "Administer payroll benefits"],
      tags: ["Management & BBA", "Psychology & Human Behavior"]
    },
    {
      title: "Marketing Manager / Brand Strategist",
      description: "Drives multi-channel brand positioning setups, user acquisition spending, and modern advertising campaigns.",
      salaryRange: { min: 5, max: 20 },
      degrees: ["BBA Marketing", "B.Com", "BMM"],
      tasks: ["Allocate monthly ad spend", "Review customer engagement data", "Approve campaign visual briefs", "Coordinate public relation channels"],
      tags: ["Management & BBA", "Media & Mass Communication"]
    },
    {
      title: "Stock Broker & Portfolio Manager",
      description: "Executes target public market equities trading and balances diversified investment portfolios for clients.",
      salaryRange: { min: 5, max: 25 },
      degrees: ["B.Com Finance", "BBA", "BA Economics"],
      tasks: ["Execute live asset trades", "Track global macroeconomic trends", "Rebalance private wealth funds", "Deliver client performance reviews"],
      tags: ["Commerce & B.Com", "Economics"]
    },
    {
      title: "Product Manager",
      description: "Bridges engineering constraints and business requirements to ship functional software enhancements.",
      salaryRange: { min: 8, max: 32 },
      degrees: ["BBA", "BMS", "B.Com Hons"],
      tasks: ["Draft product roadmap specs", "Analyze user interaction metrics", "Coordinate engineering sprint schedules", "Validate UX mockups"],
      tags: ["Management & BBA", "Computer Science & Tech"]
    },
    {
      title: "Supply Chain & Logistics Analyst",
      description: "Controls the global movement of physical inventory from material sourcing lines to user fulfillment centers.",
      salaryRange: { min: 4, max: 13 },
      degrees: ["BBA Logistics", "B.Com"],
      tasks: ["Negotiate wholesale vendor rates", "Track freight shipping windows", "Analyze warehouse storage capacity", "Minimize distribution bottlenecks"],
      tags: ["Management & BBA"]
    }
  ],
  "Arts/Humanities": [
    {
      title: "Corporate & Litigation Lawyer",
      description: "Defends client legal interests, files structured court pleadings, and prepares complex corporate contracts.",
      salaryRange: { min: 6, max: 30 },
      degrees: ["BA LL.B.", "BBA LL.B.", "LL.B."],
      tasks: ["Draft commercial transactions", "Argue client motions in court", "Conduct jurisprudence research", "Negotiate out-of-court settlements"],
      tags: ["Law & Legal Studies"]
    },
    {
      title: "Clinical Psychologist / Therapist",
      description: "Evaluates psychological conditions, administers cognitive diagnostics, and runs targeted counseling pathways.",
      salaryRange: { min: 4, max: 15 },
      degrees: ["BA Psychology", "B.Sc Clinical Psychology", "MA Psychology"],
      tasks: ["Conduct cognitive examinations", "Facilitate talk therapy courses", "Formulate behavior interventions", "Document patient case progress"],
      tags: ["Psychology & Human Behavior"]
    },
    {
      title: "Economist & Policy Advisor",
      description: "Models micro/macroeconomic metrics, runs predictive market surveys, and designs public policy parameters.",
      salaryRange: { min: 7, max: 26 },
      degrees: ["BA Economics Hons", "B.Sc Economics"],
      tasks: ["Analyze inflation index metrics", "Draft fiscal policy impact briefs", "Run econometric regression sets", "Publish research papers"],
      tags: ["Economics"]
    },
    {
      title: "Journalist & News Anchor",
      description: "Investigates breaking stories, verifies source networks, and broadcasts accurate analytical multimedia news packages.",
      salaryRange: { min: 3.5, max: 14 },
      degrees: ["BJMC", "BA Journalism", "Mass Communication"],
      tasks: ["Investigate field leads", "Conduct on-camera interviews", "Draft text editorial articles", "Edit broadcast video stories"],
      tags: ["Media & Mass Communication"]
    },
    {
      title: "UX/UI Designer",
      description: "Maps interactive digital screen flows, structures wireframe mockups, and validates end-to-end user testing panels.",
      salaryRange: { min: 5, max: 24 },
      degrees: ["B.Des Communication", "BFA", "BA Digital Design"],
      tasks: ["Build functional Figma mockups", "Map user journeys", "Conduct structural usability checks", "Maintain brand UI kit tokens"],
      tags: ["Design & Arts", "Computer Science & Tech"]
    },
    {
      title: "Civil Services Officer (IAS / IFS / IPS)",
      description: "Administers systemic public policies, maintains law enforcement stability, and manages civic infrastructure systems.",
      salaryRange: { min: 7, max: 15 },
      degrees: ["Any Bachelor's Degree + UPSC Civil Services Clearance"],
      tasks: ["Enforce localized zoning codes", "Supervise district budget drops", "Coordinate crisis rescue responses", "Review civic infrastructure work"],
      tags: ["Law & Legal Studies", "Psychology & Human Behavior"]
    },
    {
      title: "Public Relations Specialist",
      description: "Manages outbound corporate messaging portfolios, fields media requests, and maintains strategic reputation setups.",
      salaryRange: { min: 4, max: 16 },
      degrees: ["BA Mass Communication", "BMM"],
      tasks: ["Draft official corporate releases", "Pitch narrative angles to media", "Organize executive press panels", "Resolve brand PR crises"],
      tags: ["Media & Mass Communication", "Management & BBA"]
    },
    {
      title: "Content Strategist & Copywriter",
      description: "Develops text assets for corporate conversion funnels, script frameworks, and digital brand collateral channels.",
      salaryRange: { min: 3, max: 11 },
      degrees: ["BA English", "BA Journalism", "BMM"],
      tasks: ["Write marketing landing pages", "Brainstorm creative ad copies", "Optimize articles for SEO rankings", "Audit consistent tone systems"],
      tags: ["Media & Mass Communication", "Design & Arts"]
    },
    {
      title: "Creative Director / Animator",
      description: "Supervises narrative conceptual styling frameworks, structural 3D animation rigs, and general multimedia creation sets.",
      salaryRange: { min: 4.5, max: 22 },
      degrees: ["B.Des Animation", "BFA"],
      tasks: ["Storyboard commercial video loops", "Animate keyframes in production", "Direct artistic asset sets", "Review lighting compositing layers"],
      tags: ["Design & Arts"]
    },
    {
      title: "Sociologist & Anthropologist",
      description: "Studies human cultural groups, evolutionary societal behaviors, and institutional interactions through fieldwork.",
      salaryRange: { min: 4, max: 12 },
      degrees: ["BA Sociology", "MA Anthropology"],
      tasks: ["Conduct observational field interviews", "Analyze demographic metrics", "Draft qualitative social papers", "Consult on development grants"],
      tags: ["Psychology & Human Behavior"]
    }
  ]
}
