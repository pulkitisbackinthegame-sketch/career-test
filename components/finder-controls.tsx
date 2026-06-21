"use client"

import * as React from "react"

export function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block text-sm font-bold tracking-tight text-foreground mb-2">
      {children} {optional && <span className="text-xs font-normal text-muted-foreground">(Optional)</span>}
    </label>
  )
}

export function StreamSelect({ value, onChange }: { value: string | null; onChange: (v: any) => void }) {
  const streams = ["Science", "Commerce", "Arts/Humanities"]
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {streams.map((s) => {
        let buttonClass = "border-border bg-background text-muted-foreground hover:bg-accent"
        if (value === s) {
          buttonClass = "border-primary bg-primary/10 text-primary"
        }

        return (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={`rounded-xl border p-3 text-xs font-bold transition-all ${buttonClass}`}
          >
            {s}
          </button>
        )
      })}
    </div>
  )
}

export function ChipMultiSelect({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        let chipClass = "border-border bg-background text-muted-foreground hover:bg-accent"
        if (selected.includes(opt)) {
          chipClass = "border-primary bg-primary text-primary-foreground"
        }

        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${chipClass}`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export function YesNoToggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  let yesClass = "bg-background border-border text-muted-foreground"
  let noClass = "bg-background border-border text-muted-foreground"

  if (value) {
    yesClass = "bg-primary text-primary-foreground border-primary"
  } else {
    noClass = "bg-primary text-primary-foreground border-primary"
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`rounded-lg px-3 py-1.5 text-xs font-semibold border ${yesClass}`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`rounded-lg px-3 py-1.5 text-xs font-semibold border ${noClass}`}
      >
        No
      </button>
    </div>
  )
}

export function TextField({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || ""}
      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
    />
  )
}
