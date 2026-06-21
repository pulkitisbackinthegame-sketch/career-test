"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CareerFinderUI } from "@/components/career-finder"
import { CollegeFinderUI } from "@/components/college-finder"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Decorative Header Banner */}
      <header className="border-b border-border bg-card/50 py-12 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
            Platform Alpha
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
            NextGen Career & College Planner
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            A centralized data model mapping academic streams to accurate occupational pathways and nationwide institutions.
          </p>
        </div>
      </header>

      {/* Main Tab Interface Controller */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Tabs defaultValue="careers" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 rounded-xl p-1 bg-secondary border border-border">
              <TabsTrigger value="careers" className="rounded-lg font-medium text-xs md:text-sm py-2">
                💼 Career Finder
              </TabsTrigger>
              <TabsTrigger value="colleges" className="rounded-lg font-medium text-xs md:text-sm py-2">
                🎓 College Finder
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="careers" className="focus-visible:outline-none">
            <CareerFinderUI />
          </TabsContent>

          <TabsContent value="colleges" className="focus-visible:outline-none">
            <CollegeFinderUI />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
