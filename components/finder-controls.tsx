"use client"

import { Check } from "lucide-react"
import type { Stream } from "@/lib/career-data"
import { STREAMS } from "@/lib/career-data"
import { cn } from "@/lib/utils"

export function FieldLabel({
  children,
  optional,
}: {
  children: React.ReactNode
  optional?: boolean
}) {
  return (
    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
      {children}
      {optional && (
        <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
          optional
        </span>
      )}
    </label>
  )
}

export function StreamSelect({
  value,
  onChange,
}: {
  value: Stream | null
  onChange: (s: Stream) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {STREAMS.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          className={cn(
            "rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
            value === s
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary/40",
          )}
        >
          {s}
        </button>
      ))}
    </div>
  )
}

export function ChipMultiSelect({
  options,
  selected,
  onToggle,
}: {
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isOn = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              isOn
                ? "border-primary bg-accent text-accent-foreground"
                : "border-border bg-background text-foreground hover:border-primary/40",
            )}
          >
            {isOn && <Check className="size-3.5" aria-hidden="true" />}
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export function YesNoToggle({
  value,
  onChange,
}: {
  value: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="inline-flex rounded-xl border border-border bg-background p-1">
      {[
        { label: "Yes", v: true },
        { label: "No", v: false },
      ].map((opt) => (
        <button
          key={opt.label}
          type="button"
          onClick={() => onChange(opt.v)}
          className={cn(
            "rounded-lg px-5 py-1.5 text-sm font-medium transition-colors",
            value === opt.v ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export function TextField({
  value,
  onChange,
  placeholder,
  id,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  id?: string
}) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
    />
  )
}
