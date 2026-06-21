"use client"

import { useState } from "react"
import { GraduationCap, MapPin, Ticket, Percent } from "lucide-react"
import { Button } from "./ui/button"
import { type Stream } from "../lib/career-data"
import { collegesData, type College } from "../lib/college-data"
import {
  FieldLabel,
  StreamSelect,
  ChipMultiSelect,
  YesNoToggle,
  TextField,
} from "./finder-controls"

export type AdmissionChance = "High" | "Moderate" | "Low"

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

export function matchColleges(input: CollegeInput): CollegeMatch[] {
  let baseFiltered = collegesData.filter((col) => col.streams.includes(input.stream))

  if (!input.livesOutOfCity && input.homeCity.trim() !== "") {
    baseFiltered = baseFiltered.filter(
      (col) => col.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
    )
  }

  return baseFiltered
    .map((college) => {
      let scorePoints = 70
      
      if (input.interests.length > 0) {
        const matchesInterest = input.interests.some((interest) => {
          const contentMatrix = (college.name + " " + college.courses.join(" ")).toLowerCase()
          if (interest.includes("Commerce") && (contentMatrix.includes("b.com") || contentMatrix.includes("commerce"))) return true
          if (interest.includes("Management") && (contentMatrix.includes("bba") || contentMatrix.includes("bms"))) return true
          if (interest.includes("Science") && (contentMatrix.includes("b.tech") || contentMatrix.includes("b.sc"))) return true
          if (interest.includes("Psychology") && contentMatrix.includes("psychology")) return true
          if (interest.includes("Economics") && contentMatrix.includes("economics")) return true
          if (interest.includes("Law") && contentMatrix.includes("ll.b")) return true
          return false
        })
        if (matchesInterest) scorePoints += 15
      }

      const isSameCity = college.city.toLowerCase().trim() === input.homeCity.toLowerCase().trim()
      if (isSameCity) scorePoints += 10

      const yearlyTuition = Math.round(college.fee / college.durationYears)
      const yearlyLiving = (isSameCity && !input.livesOutOfCity) ? 0 : college.baseLivingCostPerYear
      const yearlyMisc = college.baseMiscCostPerYear
      const yearlyTotal = yearlyTuition + yearlyLiving + yearlyMisc

      let admissionChance: AdmissionChance | null = null
      if (input.cuetPercentile !== null && college.entranceExams.length > 0) {
        const targetMin = college.entranceExams[0].minPercentileNeeded
        const differential = input.cuetPercentile - targetMin

        if (differential >= 2) admissionChance = "High"
        else if (differential >= -3) admissionChance = "Moderate"
        else admissionChance = "Low"
      }

      const matchPercent = Math.max(25, Math.min(99, scorePoints))

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
    .sort((a, b) => b.matchPercent - a.matchPercent)
}

function formatLPA(amount: number): string {
  if (amount === 0) return "—"
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1).replace(/\.0$/, "")} LPA`
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
      setError("Please select your stream parameters to matching matrix.")
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
    <section id="college-finder" className="border-b border-border bg-background pb-12">
      <div className="mx-auto max-w-3xl px-6 py-6">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Pan-India College Allocator
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-muted-foreground text-xs md:text-sm">
            Explore 50+ tier-structured options across multiple states mapping real-world cutoffs and yearly living fee schedules.
          </p>
        </div>

        <div className="grid gap-7 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div>
            <FieldLabel>Grade 12 Academic Stream</FieldLabel>
            <StreamSelect value={stream} onChange={setStream} />
          </div>

          <div>
            <FieldLabel>Current Residential City</FieldLabel>
            <TextField value={homeCity} onChange={setHomeCity} placeholder="e.g. Pune, Kolkata, Delhi" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <FieldLabel>Are you willing to migrate outside your city?</FieldLabel>
            <YesNoToggle value={livesOutOfCity} onChange={setLivesOutOfCity} />
          </div>

          <div>
            <FieldLabel optional>Target Performance Percentile (CUET/JEE/CLAT)</FieldLabel>
            <TextField value={cuetPercentile} onChange={setCuetPercentile} placeholder="e.g. 96.5" />
          </div>

          <div>
            <FieldLabel optional>Selective Course Fields</FieldLabel>
            <ChipMultiSelect options={FIELD_OPTIONS} selected={interests} onToggle={handleToggle} />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button size="lg" onClick={handleCalculate} className="w-full gap-2 rounded-xl">
            <GraduationCap className="size-4" />
            Execute Institution Matcher
          </Button>
        </div>

        {results && (
          <div className="mt-12 space-y-6">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Institutions Identified ({results.length})
            </h3>
            
            <div className="grid gap-6">
              {results.map((m) => (
                <div key={m.college.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-heading text-lg font-bold text-foreground">{m.college.name}</h4>
                        <span className="inline-flex rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-bold border border-border">
                          {m.college.tier} • {m.college.state}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="size-3.5 text-muted-foreground/60" /> {m.college.city}
                      </p>
                    </div>
                    <div className="rounded-full bg-secondary px-3 py-1 text-xs font-bold border border-border">
                      {m.matchPercent}% match
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.college.courses.map((course) => (
                      <span key={course} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium">
                        {course}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-border bg-background/50 p-4 text-xs">
                    <div className="flex items-center justify-between border-b border-border/50 pb-2 mb-2 font-medium text-muted-foreground">
                      <span className="flex items-center gap-1.5 text-foreground font-bold"><Ticket className="size-3.5 text-primary" /> Exam Parameters</span>
                      <span><Percent className="size-3" /> Acceptance: ~{m.college.acceptanceRate}%</span>
                    </div>
                    <p className="text-foreground">
                      <span className="font-bold">{m.college.entranceExams[0]?.name || "Merit"}:</span> {m.college.entranceExams[0]?.cutoff || "Board marks evaluation matrix"}
                      {m.admissionChance && (
                        <span> (Admission Likelihood: <span className="font-bold text-primary underline">{m.admissionChance}</span>)</span>
                      )}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-xl bg-background/60 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold text-muted-foreground/80">TUITION / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">{formatLPA(m.yearlyTuition)}</span>
                    </div>
                    <div className="rounded-xl bg-background/60 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold text-muted-foreground/80">HOUSING / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">{formatLPA(m.yearlyLiving)}</span>
                    </div>
                    <div className="rounded-xl bg-background/60 p-3 border border-border/40">
                      <span className="block text-[10px] font-bold text-muted-foreground/80">MISC / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">₹{m.yearlyMisc.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="rounded-xl bg-background/60 p-3 border border-border/40 font-semibold text-primary">
                      <span className="block text-[10px] font-bold text-muted-foreground/80">TOTAL / YR</span>
                      <span className="mt-1 block font-heading text-sm font-bold">{formatLPA(m.yearlyTotal)}</span>
                    </div>
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
