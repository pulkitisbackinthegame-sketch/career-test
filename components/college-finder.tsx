"use client"

import { useState } from "react"
import { GraduationCap, MapPin, Ticket, Percent } from "lucide-react"
import { type Stream } from "@/lib/career-data"
import {
  FieldLabel,
  StreamSelect,
  ChipMultiSelect,
  YesNoToggle,
  TextField,
} from "@/ui/finder-controls"

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
  state: string
  tier: "Tier 1" | "Tier 2" | "Tier 3"
  streams: Stream[]
  courses: string[]
  fee: number
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
  // --- DELHI ---
  {
    id: "srcc-delhi",
    name: "Shri Ram College of Commerce (SRCC)",
    city: "Delhi", state: "Delhi", tier: "Tier 1",
    streams: ["Commerce"],
    courses: ["B.Com (Hons)", "BA (Hons) Economics"],
    fee: 90000, durationYears: 3, acceptanceRate: 2,
    entranceExams: [{ name: "CUET", cutoff: "99.5+ Percentile", minPercentileNeeded: 99.2 }],
    baseLivingCostPerYear: 120000, baseMiscCostPerYear: 20000
  },
  {
    id: "lsr-delhi",
    name: "Lady Shri Ram College for Women (LSR)",
    city: "Delhi", state: "Delhi", tier: "Tier 1",
    streams: ["Commerce", "Arts/Humanities"],
    courses: ["BA (Hons) Psychology", "B.Com (Hons)", "BA Economics"],
    fee: 75000, durationYears: 3, acceptanceRate: 3,
    entranceExams: [{ name: "CUET", cutoff: "99.0+ Percentile", minPercentileNeeded: 98.7 }],
    baseLivingCostPerYear: 140000, baseMiscCostPerYear: 25000
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology (IIT Delhi)",
    city: "Delhi", state: "Delhi", tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech Computer Science", "B.Tech Electrical Engineering"],
    fee: 850000, durationYears: 4, acceptanceRate: 1,
    entranceExams: [{ name: "JEE Advanced", cutoff: "Top 1000 Rank", minPercentileNeeded: 99.5 }],
    baseLivingCostPerYear: 80000, baseMiscCostPerYear: 30000
  },
  {
    id: "nlu-delhi",
    name: "National Law University (NLU Delhi)",
    city: "Delhi", state: "Delhi", tier: "Tier 1",
    streams: ["Arts/Humanities", "Commerce", "Science"],
    courses: ["BA LL.B. (Hons)"],
    fee: 1050000, durationYears: 5, acceptanceRate: 1.5,
    entranceExams: [{ name: "AILET", cutoff: "Top 100 Rank", minPercentileNeeded: 98.5 }],
    baseLivingCostPerYear: 90000, baseMiscCostPerYear: 20000
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University (DTU)",
    city: "Delhi", state: "Delhi", tier: "Tier 2",
    streams: ["Science"],
    courses: ["B.Tech Software Engineering", "B.Tech Mechanical"],
    fee: 900000, durationYears: 4, acceptanceRate: 7,
    entranceExams: [{ name: "JEE Main", cutoff: "98.5+ Percentile", minPercentileNeeded: 97.5 }],
    baseLivingCostPerYear: 100000, baseMiscCostPerYear: 20000
  },
  {
    id: "ip-university-delhi",
    name: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    city: "Delhi", state: "Delhi", tier: "Tier 3",
    streams: ["Commerce", "Science", "Arts/Humanities"],
    courses: ["BBA", "B.Tech CSE", "BA Journalism"],
    fee: 400000, durationYears: 3, acceptanceRate: 25,
    entranceExams: [{ name: "IPU CET / CUET", cutoff: "85+ Percentile", minPercentileNeeded: 80 }],
    baseLivingCostPerYear: 90000, baseMiscCostPerYear: 15000
  },

  // --- MAHARASHTRA (MUMBAI, PUNE) ---
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    city: "Mumbai", state: "Maharashtra", tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech Computer Science", "B.Tech Aerospace"],
    fee: 900000, durationYears: 4, acceptanceRate: 0.5,
    entranceExams: [{ name: "JEE Advanced", cutoff: "Top 500 AIR", minPercentileNeeded: 99.7 }],
    baseLivingCostPerYear: 80000, baseMiscCostPerYear: 25000
  },
  {
    id: "sxers-mumbai",
    name: "St. Xavier's College",
    city: "Mumbai", state: "Maharashtra", tier: "Tier 1",
    streams: ["Arts/Humanities", "Commerce"],
    courses: ["BA Arts", "BMS Management"],
    fee: 45000, durationYears: 3, acceptanceRate: 5,
    entranceExams: [{ name: "Xavier's Test / CUET", cutoff: "95+ Percentile", minPercentileNeeded: 94 }],
    baseLivingCostPerYear: 180000, baseMiscCostPerYear: 35000
  },
  {
    id: "nmims-mumbai",
    name: "NMIMS ASMSOC",
    city: "Mumbai", state: "Maharashtra", tier: "Tier 2",
    streams: ["Commerce"],
    courses: ["BBA", "B.Com (Hons)"],
    fee: 900000, durationYears: 3, acceptanceRate: 12,
    entranceExams: [{ name: "NPAT", cutoff: "High Merit Standing", minPercentileNeeded: 88 }],
    baseLivingCostPerYear: 200000, baseMiscCostPerYear: 40000
  },
  {
    id: "coep-pune",
    name: "COEP Technological University",
    city: "Pune", state: "Maharashtra", tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech Computer Engineering"],
    fee: 500000, durationYears: 4, acceptanceRate: 4,
    entranceExams: [{ name: "MHT-CET / JEE", cutoff: "99.2+ Percentile", minPercentileNeeded: 98.5 }],
    baseLivingCostPerYear: 100000, baseMiscCostPerYear: 20000
  },
  {
    id: "symbiosis-pune",
    name: "Symbiosis Centre for Management Studies",
    city: "Pune", state: "Maharashtra", tier: "Tier 2",
    streams: ["Commerce", "Arts/Humanities"],
    courses: ["BBA", "BA Mass Communication"],
    fee: 910000, durationYears: 3, acceptanceRate: 15,
    entranceExams: [{ name: "SET Exam / CUET", cutoff: "88+ Score", minPercentileNeeded: 85 }],
    baseLivingCostPerYear: 160000, baseMiscCostPerYear: 30000
  },

  // --- KARNATAKA (BANGALORE) ---
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science (IISc)",
    city: "Bangalore", state: "Karnataka", tier: "Tier 1",
    streams: ["Science"],
    courses: ["Bachelor of Science (Research)"],
    fee: 120000, durationYears: 4, acceptanceRate: 0.2,
    entranceExams: [{ name: "JEE Advanced / NEET", cutoff: "Top 500 Rank", minPercentileNeeded: 99.6 }],
    baseLivingCostPerYear: 60000, baseMiscCostPerYear: 15000
  },
  {
    id: "nlsui-bangalore",
    name: "National Law School of India University (NLSIU)",
    city: "Bangalore", state: "Karnataka", tier: "Tier 1",
    streams: ["Arts/Humanities", "Commerce", "Science"],
    courses: ["BA LL.B. (Hons)"],
    fee: 1450000, durationYears: 5, acceptanceRate: 1,
    entranceExams: [{ name: "CLAT", cutoff: "Top 100 AIR", minPercentileNeeded: 99.1 }],
    baseLivingCostPerYear: 110000, baseMiscCostPerYear: 30000
  },
  {
    id: "christ-bangalore",
    name: "Christ University (Main Campus)",
    city: "Bangalore", state: "Karnataka", tier: "Tier 2",
    streams: ["Commerce", "Arts/Humanities"],
    courses: ["BBA Finance", "B.Sc Psychology"],
    fee: 650000, durationYears: 3, acceptanceRate: 15,
    entranceExams: [{ name: "Christ Test", cutoff: "Interview Basis", minPercentileNeeded: 80 }],
    baseLivingCostPerYear: 150000, baseMiscCostPerYear: 40000
  },
  {
    id: "rvce-bangalore",
    name: "RV College of Engineering (RVCE)",
    city: "Bangalore", state: "Karnataka", tier: "Tier 2",
    streams: ["Science"],
    courses: ["B.Tech Computer Science"],
    fee: 1000000, durationYears: 4, acceptanceRate: 8,
    entranceExams: [{ name: "COMEDK / KCET", cutoff: "Top 1000 Rank", minPercentileNeeded: 95 }],
    baseLivingCostPerYear: 120000, baseMiscCostPerYear: 20000
  },

  // --- WEST BENGAL ---
  {
    id: "iit-kharagpur",
    name: "IIT Kharagpur",
    city: "Kharagpur", state: "West Bengal", tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech Computer Science"],
    fee: 880000, durationYears: 4, acceptanceRate: 0.6,
    entranceExams: [{ name: "JEE Advanced", cutoff: "Top 600 AIR", minPercentileNeeded: 99.4 }],
    baseLivingCostPerYear: 70000, baseMiscCostPerYear: 15000
  },
  {
    id: "sxers-kolkata",
    name: "St. Xavier's College (Kolkata)",
    city: "Kolkata", state: "West Bengal", tier: "Tier 1",
    streams: ["Commerce", "Arts/Humanities"],
    courses: ["B.Com (Hons)", "BA English"],
    fee: 120000, durationYears: 3, acceptanceRate: 6,
    entranceExams: [{ name: "CUET / Merit Score", cutoff: "95+ Percentile", minPercentileNeeded: 92 }],
    baseLivingCostPerYear: 110000, baseMiscCostPerYear: 15000
  },
  {
    id: "ju-kolkata",
    name: "Jadavpur University",
    city: "Kolkata", state: "West Bengal", tier: "Tier 1",
    streams: ["Science", "Arts/Humanities"],
    courses: ["B.Tech CSE", "BA Economics"],
    fee: 40000, durationYears: 4, acceptanceRate: 2,
    entranceExams: [{ name: "WBJEE", cutoff: "Top 200 Rank", minPercentileNeeded: 98.8 }],
    baseLivingCostPerYear: 50000, baseMiscCostPerYear: 10000
  },

  // --- TAMIL NADU ---
  {
    id: "iit-madras",
    name: "IIT Madras",
    city: "Chennai", state: "Tamil Nadu", tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech CSE"],
    fee: 900000, durationYears: 4, acceptanceRate: 0.4,
    entranceExams: [{ name: "JEE Advanced", cutoff: "Top 400 Rank", minPercentileNeeded: 99.6 }],
    baseLivingCostPerYear: 75000, baseMiscCostPerYear: 15000
  },
  {
    id: "loyola-chennai",
    name: "Loyola College",
    city: "Chennai", state: "Tamil Nadu", tier: "Tier 1",
    streams: ["Commerce", "Arts/Humanities"],
    courses: ["B.Com (Hons)", "BA Economics"],
    fee: 110000, durationYears: 3, acceptanceRate: 5,
    entranceExams: [{ name: "Merit Matrix", cutoff: "94+ Percentile", minPercentileNeeded: 90 }],
    baseLivingCostPerYear: 120000, baseMiscCostPerYear: 20000
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology (VIT)",
    city: "Vellore", state: "Tamil Nadu", tier: "Tier 2",
    streams: ["Science"],
    courses: ["B.Tech CSE"],
    fee: 790000, durationYears: 4, acceptanceRate: 10,
    entranceExams: [{ name: "VITEEE", cutoff: "Under 15k Rank", minPercentileNeeded: 88 }],
    baseLivingCostPerYear: 130000, baseMiscCostPerYear: 25000
  },

  // --- UTTAR PRADESH & PUNJAB ---
  {
    id: "bhu-varanasi",
    name: "Banaras Hindu University (BHU)",
    city: "Varanasi", state: "Uttar Pradesh", tier: "Tier 1",
    streams: ["Arts/Humanities", "Commerce"],
    courses: ["BA Social Sciences", "B.Com (Hons)"],
    fee: 25000, durationYears: 3, acceptanceRate: 5,
    entranceExams: [{ name: "CUET", cutoff: "94+ Percentile", minPercentileNeeded: 91 }],
    baseLivingCostPerYear: 60000, baseMiscCostPerYear: 10000
  },
  {
    id: "thapar-patiala",
    name: "Thapar Institute of Engineering & Technology",
    city: "Patiala", state: "Punjab", tier: "Tier 2",
    streams: ["Science"],
    courses: ["B.Tech CSE"],
    fee: 1950000, durationYears: 4, acceptanceRate: 20,
    entranceExams: [{ name: "JEE Main", cutoff: "94.5+ Percentile", minPercentileNeeded: 92 }],
    baseLivingCostPerYear: 140000, baseMiscCostPerYear: 25000
  },
  {
    id: "lpu-punjab",
    name: "Lovely Professional University (LPU)",
    city: "Phagwara", state: "Punjab", tier: "Tier 3",
    streams: ["Science", "Commerce", "Arts/Humanities"],
    courses: ["B.Tech CSE", "BBA", "BA Arts"],
    fee: 960000, durationYears: 4, acceptanceRate: 70,
    entranceExams: [{ name: "LPUNEST", cutoff: "Eligibility Score", minPercentileNeeded: 55 }],
    baseLivingCostPerYear: 90000, baseMiscCostPerYear: 15000
  }
]

export function matchColleges(input: CollegeInput): CollegeMatch[] {
  // RULE 1: Strict filtering based on secondary stream priority
  let baseFiltered = colleges.filter((col) => col.streams.includes(input.stream));

  if (!input.livesOutOfCity && input.homeCity.trim() !== "") {
    baseFiltered = baseFiltered.filter(
      (col) => col.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
    );
  }

  return baseFiltered
    .map((college) => {
      let scorePoints = 65
      
      // RULE 2: Interests rank items to top but don't delete missed parameters
      if (input.interests.length > 0) {
        const matchCount = input.interests.some((interest) => {
          const lowerName = college.name.toLowerCase() + " " + college.courses.join(" ").toLowerCase()
          if (interest.includes("Commerce") && (lowerName.includes("b.com") || lowerName.includes("commerce"))) return true
          if (interest.includes("Management") && (lowerName.includes("bba") || lowerName.includes("bms"))) return true
          if (interest.includes("Science") && lowerName.includes("b.tech")) return true
          if (interest.includes("Psychology") && lowerName.includes("psychology")) return true
          if (interest.includes("Economics") && lowerName.includes("economics")) return true
          return false
        })
        if (matchCount) scorePoints += 20
      }

      const isSameCity = college.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
      if (isSameCity) {
        scorePoints += 10
      }

      const yearlyTuition = Math.round(college.fee / college.durationYears)
      const yearlyLiving = (isSameCity && !input.livesOutOfCity) ? 0 : college.baseLivingCostPerYear
      const yearlyMisc = college.baseMiscCostPerYear
      const yearlyTotal = yearlyTuition + yearlyLiving + yearlyMisc

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

function formatLPA(amount: number): string {
  if (amount === 0) return "—"
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1).replace(/\.0$/, "")} LPA`
  }
  return `₹${amount.toLocaleString("en-IN")}`
}

export function CollegeFinderUI() {
  const [stream, setStream] = useState<Stream | null>(null)
  const [homeCity, setHomeCity] = useState("")
  const [livesOutOfCity, setLivesOutOfCity] = useState(false)
  const [cuetPercentile, setCuetPercentile] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [results, setResults] = useState<CollegeMatch[] | null>(null)
  const [error, setError] = useState("")

  function handleToggle(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  function handleCalculate() {
    if (!stream) {
      setError("Please select your stream to build matches.")
      return
    }
    setError("")

    const matches = matchColleges({
      stream,
      interests,
      homeCity,
      livesOutOfCity,
      cuetPercentile: cuetPercentile ? parseFloat(cuetPercentile) : null,
    })
    setResults(matches)
  }

  return (
    <section id="college-finder" className="border-b border-border bg-background scroll-mt-8 pb-12">
      <div className="mx-auto max-w-3xl px-6 py-6 md:py-10">
        
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            College Matching Engine
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-pretty leading-relaxed text-muted-foreground text-xs md:text-sm">
            Discover institutional options based on your home city, stream choices, and target entrance requirements.
          </p>
        </div>

        <div className="mt-6 grid gap-7 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div>
            <FieldLabel>Grade 12 Stream</FieldLabel>
            <StreamSelect value={stream} onChange={setStream} />
          </div>

          <div>
            <FieldLabel>What is your current home city?</FieldLabel>
            <TextField value={homeCity} onChange={setHomeCity} placeholder="e.g. Delhi, Mumbai" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <FieldLabel>Are you willing to move outside your city?</FieldLabel>
            <YesNoToggle value={livesOutOfCity} onChange={setLivesOutOfCity} />
          </div>

          <div>
            <FieldLabel optional>CUET Score / Entrance Percentile</FieldLabel>
            <TextField value={cuetPercentile} onChange={setCuetPercentile} placeholder="e.g. 99.2" />
          </div>

          <div>
            <FieldLabel optional>Target fields of interest</FieldLabel>
            <ChipMultiSelect
              options={FIELD_OPTIONS}
              selected={interests}
              onToggle={handleToggle}
            />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button size="lg" onClick={handleCalculate} className="w-full gap-2 rounded-xl">
            <GraduationCap className="size-4" />
            Find colleges for me
          </Button>
        </div>

        {results && (
          <div className="mt-12 space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {results.length} colleges matched
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                All costs are shown <span className="font-semibold text-foreground">per year</span>. Toggle the living-cost option above if you will move cities.
              </p>
            </div>
            
            <div className="grid gap-6">
              {results.map((m) => (
                <div key={m.college.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-heading text-lg font-bold tracking-tight text-foreground">
                          {m.college.name}
                        </h4>
                        <span className="inline-flex items-center rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-bold text-muted-foreground border border-border/40">
                          {m.college.tier} • {m.college.state}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="size-3.5 text-muted-foreground/70" /> {m.college.city}
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-center rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground border border-border">
                      {m.matchPercent}% match
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.college.courses.map((course) => (
                      <span key={course} className="rounded-full bg-accent/50 px-2.5 py-0.5 text-xs font-medium text-foreground">
                        {course}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-border/80 bg-background/40 p-4 text-xs">
                    <div className="flex items-center justify-between font-semibold border-b border-border/50 pb-2 mb-2 text-muted-foreground">
                      <div className="flex items-center gap-1.5 text-foreground">
                        <Ticket className="size-3.5 text-primary" /> Admissions
                      </div>
                      <div className="flex items-center gap-1">
                        <Percent className="size-3" /> Acceptance rate ~{m.college.acceptanceRate}%
                      </div>
                    </div>
                    <p className="text-foreground">
                      <span className="font-bold">{m.college.entranceExams[0]?.name}:</span> {m.college.entranceExams[0]?.cutoff}
                      {m.admissionChance && (
                        <span> (Your chance status: <span className="font-bold underline text-primary">{m.admissionChance}</span>)</span>
                      )}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-xl bg-background/50 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">📁 TUITION / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">{formatLPA(m.yearlyTuition)}</span>
                    </div>
                    <div className="rounded-xl bg-background/50 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">🏠 LIVING / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">{formatLPA(m.yearlyLiving)}</span>
                    </div>
                    <div className="rounded-xl bg-background/50 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">📦 MISC / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">₹{m.yearlyMisc.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="rounded-xl bg-background/50 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">∑ TOTAL / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">{formatLPA(m.yearlyTotal)}</span>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[10px] text-muted-foreground/70 pl-1">
                    Full {m.college.durationYears}-year tuition total: ₹{m.college.fee.toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

```
