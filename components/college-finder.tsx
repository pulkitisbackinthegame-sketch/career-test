import { type Stream } from "./career-data"

export type AdmissionChance = "High" | "Moderate" | "Low"

export interface EntranceExam {
  name: string
  cutoff: string
  minPercentileNeeded: number
}

export interface College {
  id: string
  name: string
  city: string
  streams: Stream[]
  courses: string[]
  fee: number // Total multi-year course fee
  durationYears: number
  acceptanceRate: number
  entranceExams: EntranceExam[]
  baseLivingCostPerYear: number
  baseMiscCostPerYear: number
}

export interface CollegeInput {
  stream: Stream
  interests: string[]
  homeCity: string
  livesOutOfCity: boolean
  cuetPercentile: number | null
}

export interface CollegeMatch {
  college: College
  matchPercent: number
  yearlyTuition: number
  yearlyLiving: number
  yearlyMisc: number
  yearlyTotal: number
  admissionChance: AdmissionChance | null
}

export const FIELD_OPTIONS = [
  "Management & BBA",
  "Commerce & B.Com",
  "Economics",
  "Computer Science & Tech",
  "Engineering",
  "Psychology & Human Behavior",
  "Medicine & Biology",
  "Law & Legal Studies",
  "Media & Mass Communication",
  "Design & Arts",
]

export const colleges: College[] = [
  {
    id: "srcc-delhi",
    name: "Shri Ram College of Commerce (SRCC)",
    city: "Delhi",
    streams: ["Commerce", "Science"],
    courses: ["B.Com (Hons)", "BA (Hons) Economics"],
    fee: 90000,
    durationYears: 3,
    acceptanceRate: 2,
    entranceExams: [{ name: "CUET", cutoff: "99.5+ Percentile", minPercentileNeeded: 99.2 }],
    baseLivingCostPerYear: 120000,
    baseMiscCostPerYear: 20000,
  },
  {
    id: "lsr-delhi",
    name: "Lady Shri Ram College for Women (LSR)",
    city: "Delhi",
    streams: ["Commerce", "Arts/Humanities", "Science"],
    courses: ["BA (Hons) Psychology", "B.Com (Hons)", "BA Economics"],
    fee: 75000,
    durationYears: 3,
    acceptanceRate: 3,
    entranceExams: [{ name: "CUET", cutoff: "99.0+ Percentile", minPercentileNeeded: 98.7 }],
    baseLivingCostPerYear: 140000,
    baseMiscCostPerYear: 25000,
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology (IIT Delhi)",
    city: "Delhi",
    streams: ["Science"],
    courses: ["B.Tech Computer Science", "B.Tech Electrical"],
    fee: 850000,
    durationYears: 4,
    acceptanceRate: 1,
    entranceExams: [{ name: "JEE Advanced", cutoff: "Top 1000 Rank", minPercentileNeeded: 99.5 }],
    baseLivingCostPerYear: 80000,
    baseMiscCostPerYear: 30000,
  },
  {
    id: "christ-bangalore",
    name: "Christ University",
    city: "Bangalore",
    streams: ["Commerce", "Arts/Humanities", "Science"],
    courses: ["BBA (Finance)", "B.Com", "B.Sc Psychology"],
    fee: 650000,
    durationYears: 3,
    acceptanceRate: 12,
    entranceExams: [{ name: "CUET / Christ Test", cutoff: "Clear Interview + 85+", minPercentileNeeded: 85 }],
    baseLivingCostPerYear: 150000,
    baseMiscCostPerYear: 40000,
  },
  {
    id: "sxers-mumbai",
    name: "St. Xavier's College",
    city: "Mumbai",
    streams: ["Arts/Humanities", "Commerce", "Science"],
    courses: ["BA Arts", "BMS (Management)", "B.Sc Information Tech"],
    fee: 45000,
    durationYears: 3,
    acceptanceRate: 5,
    entranceExams: [{ name: "Xavier's Entrance / CUET", cutoff: "95+ Percentile", minPercentileNeeded: 94 }],
    baseLivingCostPerYear: 180000,
    baseMiscCostPerYear: 35000,
  },
  {
    id: "symbiosis-pune",
    name: "Symbiosis Centre for Management Studies",
    city: "Pune",
    streams: ["Commerce", "Arts/Humanities", "Science"],
    courses: ["BBA (Dual Specialization)", "BA Mass Comm"],
    fee: 910000,
    durationYears: 3,
    acceptanceRate: 15,
    entranceExams: [{ name: "SET Exam / CUET", cutoff: "88+ score matching", minPercentileNeeded: 86 }],
    baseLivingCostPerYear: 160000,
    baseMiscCostPerYear: 30000,
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology (VIT)",
    city: "Vellore",
    streams: ["Science"],
    courses: ["B.Tech CSE", "B.Tech Bio-Engineering"],
    fee: 780000,
    durationYears: 4,
    acceptanceRate: 10,
    entranceExams: [{ name: "VITEEE / CUET", cutoff: "Under 20k Rank", minPercentileNeeded: 88 }],
    baseLivingCostPerYear: 110000,
    baseMiscCostPerYear: 25000,
  },
  {
    id: "nmims-mumbai",
    name: "Narsee Monjee Institute of Management Studies",
    city: "Mumbai",
    streams: ["Commerce", "Science"],
    courses: ["BBA", "B.Com (Hons)", "B.Sc Economics"],
    fee: 900000,
    durationYears: 3,
    acceptanceRate: 8,
    entranceExams: [{ name: "NPAT / CUET", cutoff: "High Merit Standing", minPercentileNeeded: 90 }],
    baseLivingCostPerYear: 200000,
    baseMiscCostPerYear: 40000,
  }
]

export function matchColleges(input: CollegeInput): CollegeMatch[] {
  // 1. Stream Lockout Protection
  const baseFiltered = colleges.filter((col) => col.streams.includes(input.stream))

  return baseFiltered
    .map((college) => {
      let scorePoints = 50 // Start with flat base anchor
      
      // Interest Fit check
      if (input.interests.length > 0) {
        // Simple contextual course mapping match 
        const matchCount = input.interests.some((interest) => {
          const lowerName = college.name.toLowerCase() + " " + college.courses.join(" ").toLowerCase()
          if (interest.includes("Commerce") && (lowerName.includes("b.com") || lowerName.includes("commerce"))) return true
          if (interest.includes("Management") && (lowerName.includes("bba") || lowerName.includes("bms"))) return true
          if (interest.includes("Science") && lowerName.includes("b.tech")) return true
          if (interest.includes("Psychology") && lowerName.includes("psychology")) return true
          if (interest.includes("Economics") && lowerName.includes("economics")) return true
          return false
        })
        if (matchCount) scorePoints += 30
      }

      // 2. City Proximity Filters
      const isSameCity = college.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
      
      if (isSameCity) {
        scorePoints += 15
      } else if (!input.livesOutOfCity) {
        // If they refuse to move, heavily suppress out of city targets
        scorePoints -= 35
      }

      // Calculate localized financial breakdown strings
      const yearlyTuition = Math.round(college.fee / college.durationYears)
      const yearlyLiving = (isSameCity && !input.livesOutOfCity) ? 0 : college.baseLivingCostPerYear
      const yearlyMisc = college.baseMiscCostPerYear
      const yearlyTotal = yearlyTuition + yearlyLiving + yearlyMisc

      // 3. Admission Chance grading engine
      let admissionChance: AdmissionChance | null = null
      if (input.cuetPercentile !== null) {
        const required = college.entranceExams[0]?.minPercentileNeeded || 50
        const diff = input.cuetPercentile - required

        if (diff >= 2) admissionChance = "High"
        else if (diff >= -3) admissionChance = "Moderate"
        else admissionChance = "Low"
      }

      const matchPercent = Math.max(15, Math.min(98, scorePoints))

      return {
        college,
        matchPercent,
        yearlyTuition,
        yearlyLiving,
        yearlyMisc,
        yearlyTotal,
        admissionChance,
      }
    })
    .filter((m) => m.matchPercent >= 30)
    .sort((a, b) => b.matchPercent - a.matchPercent)
}