import { AlertTriangle, TrendingUp, GraduationCap, Compass } from "lucide-react"

const features = [
  {
    icon: AlertTriangle,
    title: "AI risk score",
    desc: "How exposed each career is to automation",
  },
  {
    icon: TrendingUp,
    title: "Salary ranges (INR)",
    desc: "Entry, mid and senior pay in India",
  },
  {
    icon: GraduationCap,
    title: "Path to get there",
    desc: "The exact steps from Class 12 onward",
  },
]

export function SiteHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center md:py-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
          <Compass className="size-4" aria-hidden="true" />
          PathFinder
        </span>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl">
          Discover the career that fits you
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          Tell us your stream, course and interests. We&apos;ll suggest the best-fit careers along with their AI
          vulnerability, average salary in India and the companies hiring for each role.
        </p>

        <div className="mt-12 grid w-full grid-cols-3 gap-2 sm:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center gap-2 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 text-center sm:p-5"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/15 sm:size-10">
                <f.icon className="size-4 sm:size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-xs font-semibold leading-tight sm:text-sm">{f.title}</p>
                <p className="mt-1 hidden text-xs leading-relaxed text-primary-foreground/70 sm:block">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
