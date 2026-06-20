"use client"

import { useState } from "react"
import { GraduationCap, MapPin, Ticket, Percent, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  FieldLabel,
  StreamSelect,
  ChipMultiSelect,
  YesNoToggle,
  TextField,
} from "@/components/finder-controls"
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
  let baseFiltered = colleges.filter((col) => col.streams.includes(input.stream));

  if (!input.livesOutOfCity && input.homeCity.trim() !== "") {
    baseFiltered = baseFiltered.filter(
      (col) => col.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
    );
  }

  return baseFiltered
    .map((college) => {
      let scorePoints = 65
      
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
    return `₹${(amount / 100000).toFixed(1).replace(/\.0$/, '')} LPA`
  }
  return `₹${amount.toLocaleString('en-IN')}`
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
        
        {/* --- HERE IS THE ADDED TITLE HEADER --- */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            College Matching Engine
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-pretty leading-relaxed text-muted-foreground text-xs md:text-sm">
            Discover institutional options based on your home city, stream choices, and target entrance requirements.
          </p>
        </div>
        {/* -------------------------------------- */}

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
                All costs are shown <span className="font-semibold text-foreground">per year</span>. Toggle the living-cost option above if you'll move cities.
              </p>
            </div>
            
            <div className="grid gap-6">
              {results.map((m) => (
                <div key={m.college.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-heading text-lg font-bold tracking-tight text-foreground">
                        {m.college.name}
                      </h4>
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
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">₹{m.yearlyMisc.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="rounded-xl bg-background/50 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text
