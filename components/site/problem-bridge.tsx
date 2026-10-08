import { Container, SectionHeading } from './ui'
import { Reveal } from './reveal'

const quotes = [
  "I'm afraid to press the wrong button.",
  'Everything keeps changing.',
  "I don't want to bother my family again.",
]

const steps = [
  'Tell us what you want to learn',
  'Choose a verified Guide you like',
  'Learn, then rate each other',
]

export function ProblemBridge() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="problem-title"
      className="bg-surface-secondary py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              id="problem-title"
              eyebrow="The problem"
              title="The digital divide is real"
              lead="Technology moves fast. Plenty of capable people are left feeling stuck, and they deserve better than a manual or a hold queue."
            />
            <ul className="mt-8 flex flex-col gap-4">
              {quotes.map((quote) => (
                <li
                  key={quote}
                  className="card-lift rounded-2xl border border-border-muted bg-surface-primary px-6 py-5 font-serif text-2xl leading-snug text-text-primary"
                >
                  &ldquo;{quote}&rdquo;
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-surface-dark p-8 text-text-on-dark shadow-card sm:p-10">
              <p className="mb-3 text-senior-caption font-bold uppercase tracking-[0.14em] text-text-on-dark/85">
                The bridge
              </p>
              <h3 className="font-serif text-4xl font-semibold">We bridge the gap</h3>
              <p className="mt-4 text-xl leading-relaxed text-text-on-dark/90">
                Guides teach you, not just do it for you. You leave every session knowing how to do
                it yourself.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-center font-serif text-3xl font-semibold">Your journey in three steps</h3>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => (
              <li key={step} className="relative flex flex-col items-center text-center md:items-center">
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-0 w-[calc(100%-5rem+1.5rem)] border-t-[6px] border-dotted border-theme-destination/70 md:block"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full border-2 border-text-primary bg-theme-destination font-serif text-3xl font-semibold text-text-on-dark shadow-card"
                >
                  {index + 1}
                </span>
                <p className="mt-4 max-w-[16rem] text-xl font-bold">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
