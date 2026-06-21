"use client"

import { CareerFinderUI } from "@/components/career-finder"
import { CollegeFinderUI } from "@/components/college-finder"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 space-y-16">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Decision Engine
        </h1>
        <p className="text-xl text-muted-foreground">
          Analyze career routing matrices and college entries below.
        </p>
      </div>

      <div className="space-y-20">
        <CareerFinderUI />
        <div className="border-t border-border my-8" />
        <CollegeFinderUI />
      </div>
    </main>
  )
}
