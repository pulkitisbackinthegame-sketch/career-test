import { SiteHero } from "@/components/site-hero"
import { FounderSection } from "@/components/founder-section"
import { CareerFinder } from "@/components/career-finder"
import { CollegeFinder } from "@/components/college-finder"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHero />
      <FounderSection />
      <CareerFinder />
      <CollegeFinder />
      <footer className="bg-primary py-8 text-center text-sm text-primary-foreground/70">
        <p>PathFinder — built by Pulkit Malik to help students choose with clarity.</p>
        <p className="mt-1 text-xs text-primary-foreground/50">
          Salary, demand and AI-risk figures are indicative estimates for guidance only.
        </p>
      </footer>
    </main>
  )
}
