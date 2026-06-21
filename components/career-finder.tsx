"use client"

import { useState } from "react"
import { Briefcase, GraduationCap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Stream, type Career, careersData } from "@/lib/career-data"
// Using a direct relative path to completely bypass alias pathing issues
import { FieldLabel, StreamSelect, ChipMultiSelect } from "./finder-control"

export interface CareerMatch {
  career: Career
  matchPercent: number
}

export const SKILL_OPTIONS = [
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

export function matchCareersStrict(stream: Stream, selectedInterests: string[]): CareerMatch[] {
  const rawStreamCareers = careersData[stream] || []

  return rawStreamCareers
    .map((career) => {
      let scorePoints = 65

      if (selectedInterests.length > 0) {
        const matchingTags = career.tags.filter((tag) => selectedInterests.includes(tag))
        scorePoints += matchingTags.length * 10
      }

      const matchPercent = Math.max(30, Math.min(98, scorePoints))

      return {
        career,
        matchPercent,
      }
    })
    .sort((a, b) => b.matchPercent - a.matchPercent)
}

export function CareerFinderUI() {
  const [stream, setStream] = useState<Stream | null>(null)
  const [interests, setInterests] = useState<string[]>([])
  const [results, setResults] = useState<CareerMatch[] | null>(null)
  const [error, setError] = useState("")

  function handleToggle(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  function handleCalculate() {
    if (!stream) {
      setError("Please select your stream choice to filter career paths.")
      return
    }
    setError("")

    const matches = matchCareersStrict(stream, interests)
    setResults(matches)
  }

  return (
    <section id="career-finder" className="border-b border-border bg-background pb-12 pt-4">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Occupational Pathway Mapper
          </h2>
          <p className="mt-2 max-w-xl mx-auto leading-relaxed text-muted-foreground text-xs md:text-sm">
            Enforces strict academic stream isolation. Interests bubble specific options to the top, while all valid stream matches remain visible underneath.
          </p>
        </div>

        <div className="mt-6 grid gap-7 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div>
            <FieldLabel>Academic Stream (Strict Requirement)</FieldLabel>
            <StreamSelect value={stream} onChange={setStream} />
          </div>

          <div>
            <FieldLabel optional>Core Interests (Prioritizes Sorting Placement)</FieldLabel>
            <ChipMultiSelect
              options={SKILL_OPTIONS}
              selected={interests}
              onToggle={handleToggle}
            />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button size="lg" onClick={handleCalculate} className="w-full gap-2 rounded-xl">
            <Briefcase className="size-4" />
            Explore Aligned Careers
          </Button>
        </div>

        {results && (
          <div className="mt-12 space-y-6">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Compatible Pathways ({results.length})
            </h3>
            
            <div className="grid gap-6">
              {results.map((m) => (
                <div key={m.career.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-heading text-lg font-bold tracking-tight text-foreground">
                        {m.career.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{m.career.description}</p>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/20">
                      {m.matchPercent}% match
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="rounded-xl bg-background/50 p-3 border border-border/40">
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                        <TrendingUp className="size-3 text-emerald-500" /> Pay Range
                      </span>
                      <span className="mt-1 block font-heading text-sm font-bold text-foreground">
                        ₹{m.career.salaryRange.min}-{m.career.salaryRange.max} LPA
                      </span>
                    </div>

                    <div className="rounded-xl bg-background/50 p-3 border border-border/40 sm:col-span-2">
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                        <GraduationCap className="size-3 text-primary" /> Core Qualifications
                      </span>
                      <span className="mt-1 block font-heading text-xs font-semibold text-foreground truncate">
                        {m.career.degrees.join(", ")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                      Primary Tasks
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-muted-foreground pl-1">
                      {m.career.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
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
