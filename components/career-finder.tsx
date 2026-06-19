"use client"

import { useState } from "react"
import { Sparkles, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  FieldLabel,
  StreamSelect,
  ChipMultiSelect,
  YesNoToggle,
  TextField,
} from "@/components/finder-controls"
import { CareerResultCard } from "@/components/career-result-card"
import {
  INTEREST_OPTIONS,
  SKILL_OPTIONS,
  matchCareers,
  type Stream,
  type CareerMatch,
} from "@/lib/career-data"

export function CareerFinder() {
  const [stream, setStream] = useState<Stream | null>(null)
  const [subjects, setSubjects] = useState("")
  const [course, setCourse] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [hasInternship, setHasInternship] = useState(false)
  const [hasMba, setHasMba] = useState(false)
  const [mbaSchool, setMbaSchool] = useState("")
  const [error, setError] = useState("")
  const [results, setResults] = useState<CareerMatch[] | null>(null)

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  function handleSubmit() {
    if (!stream) {
      setError("Please select your Grade 12 stream to continue.")
      return
    }
    setError("")
    const matches = matchCareers({
      stream,
      subjects,
      course,
      interests,
      skills,
      hasInternship,
      hasMba,
      mbaSchool,
    })
    setResults(matches)
  }

  return (
    <section id="career-finder" className="border-b border-border bg-background scroll-mt-8">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            Priority Tool
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Career Finder
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Tell us about yourself. We&apos;ll rank careers by how well they fit your profile.
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 grid gap-7 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div>
            <FieldLabel>Grade 12 stream</FieldLabel>
            <StreamSelect value={stream} onChange={setStream} />
          </div>

          <div>
            <FieldLabel>Which subjects do you have? (e.g. Psychology, Math, Physics)</FieldLabel>
            <TextField
              value={subjects}
              onChange={setSubjects}
              placeholder="e.g. Psychology, Biology, Chemistry, English"
            />
          </div>

          <div>
            <FieldLabel optional>Target College course</FieldLabel>
            <TextField
              value={course}
              onChange={setCourse}
              placeholder="e.g. B.Com, B.Tech CS, BA Psychology, BBA"
            />
          </div>

          <div>
            <FieldLabel optional>Interests — what do you enjoy?</FieldLabel>
            <ChipMultiSelect
              options={INTEREST_OPTIONS}
              selected={interests}
              onToggle={(v) => toggle(interests, setInterests, v)}
            />
          </div>

          <div>
            <FieldLabel optional>Skills you already have</FieldLabel>
            <ChipMultiSelect
              options={SKILL_OPTIONS}
              selected={skills}
              onToggle={(v) => toggle(skills, setSkills, v)}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <FieldLabel optional>Internship or work experience?</FieldLabel>
            <YesNoToggle value={hasInternship} onChange={setHasInternship} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <FieldLabel optional>Have you done an MBA?</FieldLabel>
            <YesNoToggle value={hasMba} onChange={setHasMba} />
          </div>

          {hasMba && (
            <div>
              <FieldLabel optional>Which MBA college / university?</FieldLabel>
              <TextField
                value={mbaSchool}
                onChange={setMbaSchool}
                placeholder="e.g. IIM Ahmedabad, ISB, a local college"
              />
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                The institute matters — an MBA from a top school like an IIM can lead to higher-paid roles than the same course elsewhere.
              </p>
            </div>
          )}

          {error && (
            <p className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
              <AlertCircle className="size-4" aria-hidden="true" />
              {error}
            </p>
          )}

          <Button size="lg" onClick={handleSubmit} className="w-full gap-2">
            <Sparkles className="size-4" aria-hidden="true" />
            Find my best-fit careers
          </Button>
        </div>

        {/* Results */}
        {results && (
          <div className="mt-12">
            <h3 className="font-heading text-xl font-bold text-foreground">
              {results.length} careers ranked for you
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Sorted by match — your strongest fit is at the top. Tap a card to expand.
            </p>
            <div className="mt-5 grid gap-4">
              {results.map((m, i) => (
                <CareerResultCard key={m.career.id} match={m} rank={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

