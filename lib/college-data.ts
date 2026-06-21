"use client"

import { CareerFinderUI } from "@/components/career-finder"
import { CollegeFinderUI } from "@/components/college-finder"

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
