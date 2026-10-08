import { Compass, GraduationCap } from 'lucide-react'
import { Container, IconTile, buttonStyles } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const explorerSteps = [
  'Pass the ID and background check.',
  'Tell us what you need help with.',
  'Choose your Guide, Zoom or in person, and how long.',
  'Learn, pay securely on the site, and rate each other.',
]

const guideSteps = [
  'Pass the ID and background check.',
  'Build your profile with your skills and a short bio.',
  'Choose paid or volunteer, and pick your times.',
  'Teach a session, then rate each other (get paid or log service hours).',
]

function PathCard({
  icon,
  title,
  steps,
  cta,
  secondary,
}: {
  icon: React.ReactNode
  title: string
  steps: string[]
  cta: string
  secondary?: boolean
}) {
  return (
    <article className="card-lift flex h-full flex-col rounded-3xl border border-border-muted bg-surface-primary p-6 sm:p-10">
      <div className="flex items-center gap-4">
        <IconTile>{icon}</IconTile>
        <h3 className="font-serif text-3xl font-semibold">{title}</h3>
      </div>
      <ol className="mt-8 flex flex-1 flex-col gap-6">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-dark font-serif text-2xl font-semibold text-text-on-dark"
            >
              {index + 1}
            </span>
            <p className="pt-2 text-xl leading-snug">
              <span className="sr-only">Step {index + 1}: </span>
              {step}
            </p>
          </li>
        ))}
      </ol>
      <a
        href="#signup"
        className={cn(secondary ? buttonStyles.secondary : buttonStyles.primary, 'mt-10 w-full sm:w-fit')}
      >
        {cta}
      </a>
    </article>
  )
}

export function Paths() {
  return (
    <section aria-labelledby="paths-title" className="bg-surface-secondary py-24 sm:py-28">
      <Container>
        <Reveal>
          <h2
            id="paths-title"
            className="max-w-3xl font-serif text-4xl font-semibold leading-[1.15] text-balance sm:text-5xl"
          >
            Two ways to join, one simple path each
          </h2>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <PathCard
              icon={<Compass className="size-8" />}
              title="I need help"
              steps={explorerSteps}
              cta="Find a Guide"
            />
          </Reveal>
          <Reveal className="h-full" delay={120}>
            <PathCard
              icon={<GraduationCap className="size-8" />}
              title="I want to be a Guide"
              steps={guideSteps}
              cta="Apply to be a Guide"
              secondary
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
