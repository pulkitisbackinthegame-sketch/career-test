import type { Stream } from "./career-data"

export interface EntranceExam {
  /** Exam name, e.g. "CUET", "JEE Advanced", "CLAT" */
  name: string
  /** Human-readable expected cutoff for this college */
  cutoff: string
}

export interface College {
  id: string
  name: string
  city: string
  /** Total tuition fee for the full programme, in INR */
  fee: number
  /** Length of the programme in years (used to derive per-year tuition) */
  durationYears: number
  /** Estimated annual living expense for an out-of-city student, in INR */
  livingExpense: number
  /** Rough share of applicants admitted, as a percentage */
  acceptanceRate: number
  /** Entrance exams with expected cutoffs for this college */
  entranceExams: EntranceExam[]
  /** If admissions are CUET-driven, the rough CUET percentile cutoff (for the chance estimate) */
  cuetCutoff?: number
  /** Best-known programmes / what you can study here */
  courses: string[]
  streams: Stream[]
  /** Interest keywords this college is strong in */
  interests: string[]
}

/** Flat miscellaneous expenses (books, travel, supplies) assumed per year, in INR */
export const MISC_PER_YEAR = 25000

export const FIELD_OPTIONS = [
  "Commerce & Finance",
  "Engineering & Technology",
  "Economics",
  "Business / Management (BBA)",
  "Design",
  "Law",
  "Medicine / Health",
  "Humanities & Arts",
  "Science & Research",
  "Media & Communication",
]

export const colleges: College[] = [
  {
    id: "srcc",
    name: "Shri Ram College of Commerce (DU)",
    city: "Delhi",
    fee: 90000,
    durationYears: 3,
    livingExpense: 220000,
    acceptanceRate: 4,
    entranceExams: [{ name: "CUET", cutoff: "~99 %ile (general category)" }],
    cuetCutoff: 99,
    courses: ["B.Com (Hons)", "B.A. Economics (Hons)"],
    streams: ["Commerce"],
    interests: ["Commerce & Finance", "Economics", "Business / Management (BBA)"],
  },
  {
    id: "lsr",
    name: "Lady Shri Ram College (DU)",
    city: "Delhi",
    fee: 80000,
    durationYears: 3,
    livingExpense: 220000,
    acceptanceRate: 5,
    entranceExams: [{ name: "CUET", cutoff: "~98 %ile" }],
    cuetCutoff: 98,
    courses: ["B.A. Economics", "Psychology", "Journalism"],
    streams: ["Commerce", "Arts/Humanities"],
    interests: ["Economics", "Humanities & Arts", "Media & Communication"],
  },
  {
    id: "stxaviers-mum",
    name: "St. Xavier's College",
    city: "Mumbai",
    fee: 120000,
    durationYears: 3,
    livingExpense: 260000,
    acceptanceRate: 10,
    entranceExams: [{ name: "CUET", cutoff: "~95 %ile" }, { name: "Boards", cutoff: "90%+ in Class 12" }],
    cuetCutoff: 95,
    courses: ["B.Com", "B.M.S", "B.A. Mass Media"],
    streams: ["Commerce", "Arts/Humanities"],
    interests: ["Commerce & Finance", "Media & Communication", "Business / Management (BBA)"],
  },
  {
    id: "christ",
    name: "Christ University",
    city: "Bengaluru",
    fee: 450000,
    durationYears: 3,
    livingExpense: 240000,
    acceptanceRate: 25,
    entranceExams: [{ name: "Christ Entrance Test", cutoff: "Clear test + interview + skill assessment" }],
    courses: ["BBA", "B.Com", "B.A. Economics", "Psychology"],
    streams: ["Commerce", "Arts/Humanities"],
    interests: ["Business / Management (BBA)", "Commerce & Finance", "Economics", "Humanities & Arts"],
  },
  {
    id: "nmims",
    name: "NMIMS (Anil Surendra Modi School of Commerce)",
    city: "Mumbai",
    fee: 900000,
    durationYears: 3,
    livingExpense: 280000,
    acceptanceRate: 15,
    entranceExams: [{ name: "NPAT", cutoff: "~85+ percentile in NPAT" }],
    courses: ["B.Com (Hons)", "BBA", "Finance"],
    streams: ["Commerce"],
    interests: ["Commerce & Finance", "Business / Management (BBA)"],
  },
  {
    id: "symbiosis",
    name: "Symbiosis (SCMS / SSE)",
    city: "Pune",
    fee: 700000,
    durationYears: 3,
    livingExpense: 230000,
    acceptanceRate: 20,
    entranceExams: [{ name: "SET / SLAT", cutoff: "~80+ percentile + PI-WAT" }],
    courses: ["BBA", "B.Com", "B.A. Economics"],
    streams: ["Commerce", "Arts/Humanities"],
    interests: ["Business / Management (BBA)", "Commerce & Finance", "Economics"],
  },
  {
    id: "iitb",
    name: "IIT Bombay",
    city: "Mumbai",
    fee: 800000,
    durationYears: 4,
    livingExpense: 150000,
    acceptanceRate: 1,
    entranceExams: [{ name: "JEE Advanced", cutoff: "~Top 2,000 AIR for popular branches" }],
    courses: ["B.Tech", "Engineering", "Design (IDC)"],
    streams: ["Science"],
    interests: ["Engineering & Technology", "Design", "Science & Research"],
  },
  {
    id: "bits",
    name: "BITS Pilani",
    city: "Pilani",
    fee: 2000000,
    durationYears: 4,
    livingExpense: 160000,
    acceptanceRate: 3,
    entranceExams: [{ name: "BITSAT", cutoff: "~330+/390 for CS" }],
    courses: ["B.E.", "B.Tech", "M.Sc", "Economics"],
    streams: ["Science"],
    interests: ["Engineering & Technology", "Science & Research", "Economics"],
  },
  {
    id: "vit",
    name: "VIT Vellore",
    city: "Vellore",
    fee: 800000,
    durationYears: 4,
    livingExpense: 140000,
    acceptanceRate: 30,
    entranceExams: [{ name: "VITEEE", cutoff: "~Top 10,000 rank for CS" }],
    courses: ["B.Tech", "BCA", "Computer Science"],
    streams: ["Science"],
    interests: ["Engineering & Technology", "Science & Research"],
  },
  {
    id: "nid",
    name: "National Institute of Design (NID)",
    city: "Ahmedabad",
    fee: 1200000,
    durationYears: 4,
    livingExpense: 200000,
    acceptanceRate: 2,
    entranceExams: [{ name: "NID DAT", cutoff: "Clear DAT Prelims + Mains (studio test + interview)" }],
    courses: ["B.Des", "Product Design", "Communication Design"],
    streams: ["Science", "Arts/Humanities"],
    interests: ["Design", "Media & Communication"],
  },
  {
    id: "nls",
    name: "National Law School (NLSIU)",
    city: "Bengaluru",
    fee: 1300000,
    durationYears: 5,
    livingExpense: 240000,
    acceptanceRate: 2,
    entranceExams: [{ name: "CLAT", cutoff: "~Top 120 AIR" }],
    courses: ["B.A. LL.B (Hons)", "Law"],
    streams: ["Arts/Humanities", "Commerce", "Science"],
    interests: ["Law"],
  },
  {
    id: "aiims",
    name: "AIIMS Delhi",
    city: "Delhi",
    fee: 10000,
    durationYears: 5,
    livingExpense: 180000,
    acceptanceRate: 1,
    entranceExams: [{ name: "NEET", cutoff: "~Top 50 AIR" }],
    courses: ["MBBS", "Nursing", "Medicine"],
    streams: ["Science"],
    interests: ["Medicine / Health", "Science & Research"],
  },
  {
    id: "ashoka",
    name: "Ashoka University",
    city: "Sonipat",
    fee: 3200000,
    durationYears: 3,
    livingExpense: 100000,
    acceptanceRate: 15,
    entranceExams: [{ name: "Ashoka Aptitude Test", cutoff: "Test + essays + interview (SAT accepted)" }],
    courses: ["Economics", "Liberal Arts", "Psychology", "CS"],
    streams: ["Arts/Humanities", "Commerce", "Science"],
    interests: ["Economics", "Humanities & Arts", "Science & Research", "Media & Communication"],
  },
  {
    id: "stephens",
    name: "St. Stephen's College (DU)",
    city: "Delhi",
    fee: 60000,
    durationYears: 3,
    livingExpense: 200000,
    acceptanceRate: 5,
    entranceExams: [{ name: "CUET", cutoff: "~98 %ile" }, { name: "Interview", cutoff: "College interview round" }],
    cuetCutoff: 98,
    courses: ["B.A. Economics", "B.Sc", "History", "English"],
    streams: ["Arts/Humanities", "Science", "Commerce"],
    interests: ["Economics", "Humanities & Arts", "Science & Research"],
  },
  {
    id: "jmc",
    name: "Jai Hind College",
    city: "Mumbai",
    fee: 130000,
    durationYears: 3,
    livingExpense: 260000,
    acceptanceRate: 20,
    entranceExams: [{ name: "CUET", cutoff: "~92 %ile" }, { name: "Boards", cutoff: "85%+ in Class 12" }],
    cuetCutoff: 92,
    courses: ["B.Com", "B.M.M", "B.Sc"],
    streams: ["Commerce", "Arts/Humanities", "Science"],
    interests: ["Commerce & Finance", "Media & Communication", "Science & Research"],
  },
  {
    id: "manipal",
    name: "Manipal Institute of Technology",
    city: "Manipal",
    fee: 1700000,
    durationYears: 4,
    livingExpense: 170000,
    acceptanceRate: 25,
    entranceExams: [{ name: "MET", cutoff: "Good rank in Manipal Entrance Test" }],
    courses: ["B.Tech", "B.Des", "Engineering"],
    streams: ["Science"],
    interests: ["Engineering & Technology", "Design", "Science & Research"],
  },
]

export type AdmissionChance = "High" | "Moderate" | "Low" | null

export interface CollegeInput {
  stream: Stream
  userCity: string
  willingToMove: boolean
  interests: string[]
  cuetScore?: number | null
}

export interface CollegeMatch {
  college: College
  matchScore: number
  yearlyTuition: number
  yearlyLiving: number
  yearlyMisc: number
  yearlyTotal: number
  reasons: string[]
}

export function matchColleges(input: CollegeInput): CollegeMatch[] {
  const eligibleColleges = colleges.filter((college) =>
    college.streams.includes(input.stream)
  )

  const results: CollegeMatch[] = eligibleColleges.map((college) => {
    let score = 50 
    const reasons: string[] = []
    const isSameCity = college.city.toLowerCase().trim() === input.userCity.toLowerCase().trim()

    // City Logic
    if (!input.willingToMove) {
      if (isSameCity) {
        score += 40
        reasons.push(`Located right in your home city (${college.city}).`)
      } else {
        score -= 45 
      }
    } else {
      if (isSameCity) {
        score += 15
        reasons.push(`Local option in ${college.city}.`)
      } else {
        score += 10
        reasons.push(`Great out-of-station option in ${college.city}.`)
      }
    }

    // Interests Logic
    const matchingFields = input.interests.filter((field) =>
      college.interests.includes(field)
    )
    if (matchingFields.length > 0) {
      score += 15
      reasons.push(`Renowned for fields like: ${matchingFields.slice(0, 2).join(", ")}.`)
    }

    // CUET Logic
    if (input.cuetScore && college.cuetCutoff) {
      if (input.cuetScore >= college.cuetCutoff) {
        score += 10
        reasons.push(`Your CUET score meets or exceeds historical cutoffs.`)
      } else if (input.cuetScore >= college.cuetCutoff - 5) {
        score += 2
        reasons.push(`Borders on expected eligibility limits; competitive profile required.`)
      } else {
        score -= 30 
      }
    }

    const matchScore = Math.max(0, Math.min(100, score))
    
    // Financial breakdowns derived perfectly for your display layouts
    const yearlyTuition = Math.round(college.fee / college.durationYears)
    const yearlyLiving = (!isSameCity || input.willingToMove) ? college.livingExpense : 0
    const yearlyMisc = MISC_PER_YEAR
    const yearlyTotal = yearlyTuition + yearlyLiving + yearlyMisc

    return { 
      college, 
      matchScore, 
      yearlyTuition,
      yearlyLiving,
      yearlyMisc,
      yearlyTotal,
      reasons 
    }
  })

  return results.sort((a, b) => b.matchScore - a.matchScore)
}
