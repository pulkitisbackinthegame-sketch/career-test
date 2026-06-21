"use client"

import * as React from "react"

export function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  if (optional) {
    return (
      <label className="block text-sm font-bold tracking-tight text-foreground mb-2">
        {children} <span className="text-xs font-normal text-muted-foreground">(Optional)</span>
      </label>
    )
  }
  return (
    <label className="block text-sm font-bold tracking-tight text-foreground mb-2">
      {children}
    </label>
  )
}

export function StreamSelect({ value, onChange }: { value: string | null; onChange: (v: any) => void }) {
  const streams = ["Science", "Commerce", "Arts"]
  const buttons: React.ReactNode[] = []

  for (let i = 0; i < streams.length; i++) {
    const s = streams[i]
    let cls = "rounded-xl border p-3 text-xs font-bold border-border"
    if (value === s) {
      cls = "rounded-xl border p-3 text-xs font-bold border-primary text-primary bg-primary/10"
    }

    buttons.push(
      <button key={s} type="button" onClick={function() { onChange(s) }} className={cls}>
        {s}
      </button>
    )
  }

  return <div className="grid grid-cols-3 gap-2">{buttons}</div>
}

export function ChipMultiSelect({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  const chips: React.ReactNode[] = []

  for (let i = 0; i < options.length; i++) {
    const opt = options[i]
    let cls = "rounded-full border px-3 py-1 text-xs font-medium border-border"
    if (selected.includes(opt)) {
      cls = "rounded-full border px-3 py-1 text-xs font-medium border-primary text-primary-foreground bg-primary"
    }

    chips.push(
      <button key={opt} type="button" onClick={function() { onToggle(opt) }} className={cls}>
        {opt}
      </button>
    )
  }

  return <div className="flex flex-wrap gap-2">{chips}</div>
}

export function YesNoToggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  let yesCls = "border p-2 text-xs border-border"
  let noCls = "border p-2 text-xs border-border"

  if (value) {
    yesCls = "border p-2 text-xs border-primary text-primary bg-primary/10"
  } else {
    noCls = "border p-2 text-xs border-primary text-primary bg-primary/10"
  }

  return (
    <div className="flex gap-2">
      <button type="button" onClick={function() { onChange(true) }} className={yesCls}>
        Yes
      </button>
      <button type="button" onClick={function() { onChange(false) }} className={noCls}>
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
      onChange={function(e) { onChange(e.target.value) }}
      className="w-full rounded-xl border border-border px-3 py-2 text-sm text-foreground"
    />
  )
}
