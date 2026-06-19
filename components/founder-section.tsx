import Image from "next/image"
import { GraduationCap, Lightbulb, Briefcase, Quote } from "lucide-react"

const facts = [
  { icon: GraduationCap, text: "Pursuing Commerce in Grade 12" },
  { icon: Lightbulb, text: "Building tools that help students decide" },
  { icon: Briefcase, text: "Aspiring young Entrepreneur" },
]

export function FounderSection() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Meet the Founder
        </p>

        <div className="mt-10 grid items-stretch gap-8 md:grid-cols-[auto_1fr]">
          {/* Photo — left on desktop, below text on mobile */}
          <div className="order-2 mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-foreground shadow-lg md:order-1 md:w-80">
            <Image
              src="/founder.png"
              alt="Pulkit Malik, founder of PathFinder, in a black suit and navy tie"
              width={853}
              height={1646}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Text — matched to the photo height */}
          <div className="order-1 flex flex-col justify-between rounded-3xl border border-border bg-card p-8 md:order-2 md:p-10">
            <div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">Pulkit Malik</h2>
              <p className="mt-2 font-medium text-primary">16 • Commerce Student • Aspiring Entrepreneur</p>

              <blockquote className="relative mt-6 border-l-2 border-primary/30 pl-5 text-pretty text-lg leading-relaxed text-foreground/90">
                <Quote className="absolute -left-1 -top-3 size-6 text-primary/20" aria-hidden="true" />
                I built PathFinder because choosing a career at 16 felt overwhelming. Too many options, not enough clear
                answers. I wanted a tool that meets students where they are and shows them exactly where each path can
                lead — from salaries to the impact of AI.
              </blockquote>
            </div>

            <ul className="mt-8 grid gap-4">
              {facts.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
