"use client"

import { useState } from "react"
import {
  AlertTriangle,
  TrendingUp,
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Gauge,
  Clock,
} from "lucide-react"
import type { CareerMatch } from "@/lib/career-data"
import { formatINR } from "@/lib/career-data"
import { cn } from "@/lib/utils"

/** Monochrome badge — darker = more severe (higher AI risk / harder). */
function severityBadge(level: string) {
  switch (level) {
    case "Low":
    case "Easy":
      return "bg-secondary text-foreground border-border"
    case "Medium":
    case "Moderate":
      return "bg-foreground/15 text-foreground border-foreground/20"
    default:
      return "bg-foreground text-background border-foreground"
  }
}

export function CareerResultCard({ match, rank }: { match: CareerMatch; rank: number }) {
  const [open, setOpen] = useState(rank === 0)
  const { career, matchPercent, reasons } = match
  const ai = career.aiVulnerability

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 p-5 text-left md:p-6"
        aria-expanded={open}
      >
        <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <span className="text-base font-bold leading-none">{matchPercent}%</span>
          <span className="text-[10px] uppercase tracking-wide opacity-80">match</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {rank === 0 && (
              <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                Top match
              </span>
            )}
            <span className="text-xs font-medium text-muted-foreground">Market demand: {career.marketDemand}</span>
          </div>
          <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{career.title}</h3>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">{career.whatTheyDo}</p>
        </div>
        <ChevronDown
          className={cn("size-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-6 pt-5 md:px-6">
          {/* What they do (full) */}
          <p className="text-sm leading-relaxed text-foreground">{career.whatTheyDo}</p>

          {/* Why it fits */}
          {reasons.length > 0 && (
            <div className="mt-4 rounded-xl bg-secondary/60 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="size-4 text-primary" aria-hidden="true" />
                Why it fits you
              </p>
              <ul className="mt-2 grid gap-1.5">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* AI vulnerability + Difficulty + Work hours — three across */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {/* AI vulnerability */}
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <AlertTriangle className="size-3.5" aria-hidden="true" />
                  AI risk
                </p>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                    severityBadge(ai.level),
                  )}
                >
                  {ai.level}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-foreground" style={{ width: `${ai.score}%` }} />
              </div>
              <p className="mt-1.5 text-xs font-medium text-muted-foreground">{ai.score}% exposed</p>
            </div>

            {/* Difficulty */}
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <Gauge className="size-3.5" aria-hidden="true" />
                  Difficulty
                </p>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                    severityBadge(career.difficulty.level),
                  )}
                >
                  {career.difficulty.level}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-foreground"
                  style={{ width: `${career.difficulty.score}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs font-medium text-muted-foreground">{career.difficulty.score}% tough</p>
            </div>

            {/* Working hours */}
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                Work hours
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{career.workHours}</p>
            </div>
          </div>

          {/* Detail on AI risk + difficulty */}
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <p className="rounded-lg bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Why this AI risk: </span>
              {ai.reason}
            </p>
            <p className="rounded-lg bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Why it&apos;s {career.difficulty.level.toLowerCase()}: </span>
              {career.difficulty.reason}
            </p>
          </div>

          {/* Salary */}
          <div className="mt-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <TrendingUp className="size-4 text-primary" aria-hidden="true" />
              Average salary in India (per year)
            </p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {[
                { label: "Entry", band: career.salary.entry },
                { label: "Mid", band: career.salary.mid },
                { label: "Senior", band: career.salary.senior },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-background p-3 text-center">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
                  <p className="mt-1 font-heading text-base font-bold text-foreground">{formatINR(s.band.amount)}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.band.years}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key skills */}
          <div className="mt-5">
            <p className="text-sm font-semibold text-foreground">Key skills</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {career.keySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div className="mt-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Building2 className="size-4 text-primary" aria-hidden="true" />
              Companies hiring in India
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {career.companies.map((c) => (
                <span key={c} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Path */}
          <div className="mt-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <GraduationCap className="size-4 text-primary" aria-hidden="true" />
              Path to get there
            </p>
            <ol className="mt-3 space-y-3">
              {career.path.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-foreground/90">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </article>
  )
}
