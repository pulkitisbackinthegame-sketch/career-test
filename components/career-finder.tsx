"use client"

import { useState } from "react"
import { Briefcase, Activity, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FieldLabel, StreamSelect, ChipMultiSelect } from "@/components/finder-controls"
import { FieldLabel, StreamSelect, ChipMultiSelect } from "@/ui/finder-controls"

export interface CareerInput {
  stream: Stream
  interests: string[]
}

export interface CareerMatch {
  path: CareerPath
  matchPercent: number
  isInterestMatch: boolean
}

export const INTEREST_OPTIONS = [
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

export function matchCareers(input: CareerInput): CareerMatch[] {
  // RULE 1: Stream is strict priority. Filter out careers not belonging to this stream.
  const streamFiltered = careerPaths.filter((path) => path.streams.includes(input.stream))

  return streamFiltered
    .map((path) => {
      let scorePoints = 75 // High base match for belonging to the correct stream

      // Check if this career matches any selected interests
      const matchedInterests = path.interests.filter((interest) =>
        input.interests.includes(interest)
      )

      const isInterestMatch = matchedInterests.length > 0
      if (isInterestMatch) {
        scorePoints += 15 + matchedInterests.length * 2
      }

      const matchPercent = Math.min(98, scorePoints)

      return {
        path,
        matchPercent,
        isInterestMatch,
      }
    })
    // RULE 2: Keep all stream-valid careers visible, but sort interest matches to the top
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
      setError("Please select your stream to evaluate paths.")
      return
    }
    setError("")

    const matches = matchCareers({ stream, interests })
    setResults(matches)
  }

  return (
    <section id="career-finder" className="border-b border-border bg-background scroll-mt-8 pb-12">
      <div className="mx-auto max-w-3xl px-6 py-6 md:py-10">
        
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Stream & Career Mapper
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-pretty text-xs md:text-sm text-muted-foreground">
            Strict stream gating ensures your results match your secondary school path, with interests organizing top recommendations.
          </p>
        </div>

        <div className="mt-6 grid gap-7 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <div>
            <FieldLabel>Current Grade 12 Stream</FieldLabel>
            <StreamSelect value={stream} onChange={setStream} />
          </div>

          <div>
            <FieldLabel optional>What are your core interests?</FieldLabel>
            <ChipMultiSelect
              options={INTEREST_OPTIONS}
              selected={interests}
              onToggle={handleToggle}
            />
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button size="lg" onClick={handleCalculate} className="w-full gap-2 rounded-xl">
            <Briefcase className="size-4" />
            Map Career Vectors
          </Button>
        </div>

        {results && (
          <div className="mt-12 space-y-6">
            <h3 className="font-heading text-xl font-bold text-foreground">
              {results.length} Core Paths Valid for Your Profile
            </h3>
            
            <div className="grid gap-6">
              {results.map(({ path, matchPercent }) => (
                <div key={path.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-heading text-lg font-bold tracking-tight text-foreground">
                        {path.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{path.description}</p>
                    </div>
                    <div className="inline-flex items-center justify-center rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground border border-border shrink-0">
                      {matchPercent}% match
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-b border-border/60 py-3 my-3 text-center text-xs">
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted-foreground">💵 ENTRY PAY</span>
                      <span className="font-semibold text-foreground">{path.salary.entry}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted-foreground">📈 MID-CAREER</span>
                      <span className="font-semibold text-foreground">{path.salary.mid}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted-foreground">👑 SENIOR EXECUTIVE</span>
                      <span className="font-semibold text-foreground">{path.salary.senior}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between gap-4 rounded-lg bg-background/50 p-2 border border-border/40">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Activity className="size-3.5 text-primary" /> Technical Difficulty
                      </span>
                      <span className="font-medium text-foreground">{path.difficulty} ({path.difficultyPercent}%)</span>
                    </div>

                    <div className="flex items-center justify-between gap-4 rounded-lg bg-background/50 p-2 border border-border/40">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <AlertCircle className="size-3.5 text-orange-500" /> Automation/AI Disruption Risk
                      </span>
                      <span className="font-medium text-foreground">{path.aiRisk} ({path.aiRiskPercent}%)</span>
                    </div>
                  </div>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {path.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                        {skill}
                      </span>
                    ))}
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
