"use client"

import { useState } from "react"
import { GraduationCap, Sparkles } from "lucide-react"
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
  const baseFiltered = colleges.filter((col) => col.streams.includes(input.stream))

  return baseFiltered
    .map((college) => {
      let scorePoints = 50
      
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
        if (matchCount) scorePoints += 30
      }

      const isSameCity = college.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
      
      if (isSameCity) {
        scorePoints += 15
      } else if (!input.livesOutOfCity) {
        scorePoints -= 35
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
      setError("Please select your stream first.")
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
    <section id="college-finder" className="border-b border-border bg-card/50 scroll-mt-8">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            College Tool
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            College Matching Engine
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Find and rank top colleges based on your scores, stream, budget, and location settings.
          </p>
        </div>

        <div className="mt-10 grid gap-7 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div>
            <FieldLabel>Grade 12 Stream</FieldLabel>
            <StreamSelect value={stream} onChange={setStream} />
          </div>

          <div>
            <FieldLabel>Your Home City</FieldLabel>
            <TextField value={homeCity} onChange={setHomeCity} placeholder="e.g. Delhi, Mumbai" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <FieldLabel>Are you willing to move outside your city?</FieldLabel>
            <YesNoToggle value={livesOutOfCity} onChange={setLivesOutOfCity} />
          </div>

          <div>
            <FieldLabel optional>CUET / Entrance Percentile (e.g. 95.5)</FieldLabel>
            <TextField value={cuetPercentile} onChange={setCuetPercentile} placeholder="e.g. 98.2" />
          </div>

          <div>
            <FieldLabel optional>Target Fields & Courses</FieldLabel>
            <ChipMultiSelect
              options={FIELD_OPTIONS}
              selected={interests}
              onToggle={handleToggle}
            />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button size="lg" onClick={handleCalculate} className="w-full gap-2">
            <GraduationCap className="size-5" />
            Find Matching Colleges
          </Button>
        </div>

        {results && (
          <div className="mt-12">
            <h3 className="font-heading text-xl font-bold text-foreground">
              {results.length} Colleges Matched For You
            </h3>
            <div className="mt-5 grid gap-4">
              {results.map((m) => (
                <div key={m.college.id} className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{m.college.name}</h4>
                      <p className="text-sm text-muted-foreground">📍 {m.college.city}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {m.matchPercent}% Match
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs border-t border-dashed border-border pt-4 text-muted-foreground">
                    <div>📚 Courses: {m.college.courses.join(", ")}</div>
                    <div>💰 Est. Total Cost/Year: ₹{m.yearlyTotal.toLocaleString()}</div>
                    {m.admissionChance && (
                      <div className="col-span-2 mt-1">
                        🎯 Admission Chance: <span className="font-semibold text-foreground">{m.admissionChance}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
