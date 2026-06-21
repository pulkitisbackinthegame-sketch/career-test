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

export const collegesData: College[] = [
  {
    id: "1",
    name: "Indian Institute of Technology (IIT) Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech Computer Science", "B.Tech Mechanical", "B.Tech Electrical"],
    fee: 220000,
    durationYears: 4,
    baseLivingCostPerYear: 60000,
    baseMiscCostPerYear: 20000,
    acceptanceRate: 0.01,
    entranceExams: [{ name: "JEE Advanced", minPercentileNeeded: 99.8, cutoff: "Top 100 AIR" }]
  },
  {
    id: "2",
    name: "Shri Ram College of Commerce (SRCC)",
    city: "New Delhi",
    state: "Delhi",
    tier: "Tier 1",
    streams: ["Commerce"],
    courses: ["B.Com Hons", "BA Economics Hons"],
    fee: 30000,
    durationYears: 3,
    baseLivingCostPerYear: 120000,
    baseMiscCostPerYear: 15000,
    acceptanceRate: 0.02,
    entranceExams: [{ name: "CUET", minPercentileNeeded: 99.5, cutoff: "780+ out of 800" }]
  },
  {
    id: "3",
    name: "St. Stephen's College",
    city: "New Delhi",
    state: "Delhi",
    tier: "Tier 1",
    streams: ["Arts/Humanities", "Science"],
    courses: ["BA English Hons", "BA History Hons", "B.Sc Mathematics"],
    fee: 40000,
    durationYears: 3,
    baseLivingCostPerYear: 140000,
    baseMiscCostPerYear: 20000,
    acceptanceRate: 0.03,
    entranceExams: [{ name: "CUET", minPercentileNeeded: 99.0, cutoff: "770+ out of 800" }]
  },
  {
    id: "4",
    name: "Delhi Technological University (DTU)",
    city: "New Delhi",
    state: "Delhi",
    tier: "Tier 1",
    streams: ["Science"],
    courses: ["B.Tech Computer Engineering", "B.Tech Electronics & Communication"],
    fee: 219000,
    durationYears: 4,
    baseLivingCostPerYear: 90000,
    baseMiscCostPerYear: 15000,
    acceptanceRate: 0.05,
    entranceExams: [{ name: "JEE Main", minPercentileNeeded: 98.8, cutoff: "Top 10000 AIR" }]
  },
  {
    id: "5",
    name: "Christ University",
    city: "Bengaluru",
    state: "Karnataka",
    tier: "Tier 2",
    streams: ["Commerce", "Arts/Humanities", "Science"],
    courses: ["BBA Finance", "B.Com Hons", "BA Psychology"],
    fee: 175000,
    durationYears: 3,
    baseLivingCostPerYear: 150000,
    baseMiscCostPerYear: 30000,
    acceptanceRate: 0.15,
    entranceExams: [{ name: "CUET / Christ Entrance", minPercentileNeeded: 85.0, cutoff: "Interview Round" }]
  }
]
