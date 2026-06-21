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
        const isActive = value === s
        return (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className={isActive ? "rounded-xl border p-3 text-xs font-bold border-primary" : "rounded-xl border p-3 text-xs font-bold border-border"}
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
        const isSelected = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={isSelected ? "rounded-full border px-3 py-1 text-xs font-medium border-primary" : "rounded-full border px-3 py-1 text-xs font-medium border-border"}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export function YesNoToggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex gap-2">
      <button 
        type="button" 
        onClick={() => onChange(true)} 
        className={value ? "border p-2 text-xs border-primary" : "border p-2 text-xs border-border"}
      >
        Yes
      </button>
      <button 
        type="button" 
        onClick={() => onChange(false)} 
        className={!value ? "border p-2 text-xs border-primary" : "border p-2 text-xs border-border"}
      >
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
