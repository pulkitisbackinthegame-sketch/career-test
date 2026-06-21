"use client"

import * as React from "react"

export function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block text-sm font-bold tracking-tight text-foreground mb-2">
      {children}
      {optional && <span className="text-xs font-normal text-muted-foreground">(Optional)</span>}
    </label>
  )
}

export function StreamSelect({ value, onChange }: { value: string | null; onChange: (v: any) => void }) {
  const streams = ["Science", "Commerce", "Arts"]
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {streams.map((s) => {
        let btnClass = "border-border"
        if (value === s) {
          btnClass = "border-primary"
        }
        return (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={`rounded-xl border p-3 text-xs font-bold ${btnClass}`}
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
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        let chipClass = "border-border"
        if (selected.includes(opt)) {
          chipClass = "border-primary"
        }
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${chipClass}`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export function YesNoToggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  let yClass = "border-border"
  let nClass = "border-border"
  if (value) {
    yClass = "border-primary"
  } else {
    nClass = "border-primary"
  }
  return (
    <div className="flex gap-2">
      <button type="button" onClick={() => onChange(true)} className={`border p-2 text-xs ${yClass}`}>
        Yes
      </button>
      <button type="button" onClick={() => onChange(false)} className={`border p-2 text-xs ${nClass}`}>
        No
      </button>
    </div>
  )
}

export function TextField({ value, onChange }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-border px-3 py-2 text-sm text-foreground"
    />
  )
}
