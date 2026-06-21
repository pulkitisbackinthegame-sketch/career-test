export interface College {
  id: string
  name: string
  city: string
  state: string
  tier: string
  streams: string[]
  courses: string[]
  fee: number
  durationYears: number
  baseLivingCostPerYear: number
  baseMiscCostPerYear: number
  acceptanceRate: number
  entranceExams: { name: string; minPercentileNeeded: number; cutoff: string }[]
}

// Make sure your array is explicitly exported like this:
export const collegesData: College[] = [
  // ... your college data objects go here
]
