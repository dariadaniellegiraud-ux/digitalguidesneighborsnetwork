import { Award, BadgeCheck, Medal } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const partners = ['Local library', 'Senior center', 'College service office', 'Local business discounts']

function Tier({
  name,
  description,
  gold,
}: {
  name: string
  description: string
  gold?: boolean
}) {
  return (
    <li
      className={cn(
        'card-lift relative flex flex-col items-center rounded-3xl border px-6 text-center',
        gold
          ? 'border-2 border-tier-gold bg-tier-gold py-12 shadow-[0_0_0_6px_rgb(212_166_42/0.18),0_24px_56px_-12px_rgb(212_166_42/0.55)] sm:scale-105'
          : 'border-border-muted bg-surface-primary py-9',
      )}
    >
      {gold && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface-dark px-4 py-1.5 text-senior-caption font-bold text-text-on-dark">
          Letter-ready
        </span>
      )}
      <span
        aria-hidden="true"
        className={cn(
          'flex items-center justify-center rounded-full',
          gold ? 'size-20 bg-tier-gold-tint' : 'size-16 bg-surface-secondary',
        )}
      >
        {gold ? <Medal className="size-10 text-text-primary" /> : <Award className="size-8 text-text-secondary" />}
      </span>
      <h4 className={cn('mt-4 font-serif font-semibold text-text-primary', gold ? 'text-4xl' : 'text-3xl')}>
        {name}
      </h4>
      <p className={cn('mt-2 text-lg', gold ? 'text-text-primary' : 'text-text-secondary')}>{description}</p>
    </li>
  )
}

export function Schools() {
  return (
    <section id="schools" aria-labelledby="schools-title" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="schools-title"
            eyebrow="For schools and volunteers"
            title="Service hours that count, with proof you can share"
            lead="Every volunteer session is logged and verified, so students and service offices get a clear, trustworthy record."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <h3 className="font-serif text-3xl font-semibold">Guide levels</h3>
            <p className="mt-2 text-xl text-text-secondary">Sample levels shown for this prototype.</p>
            <ul className="mt-10 grid items-center gap-8 sm:grid-cols-3 sm:gap-5">
              <Tier name="Bronze" description="First sessions completed" />
              <Tier name="Silver" description="Steady hours and strong ratings" />
              <Tier name="Gold" description="Top ratings and verified hours" gold />
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <article className="card-lift rounded-3xl border border-border-muted bg-surface-primary p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-senior-caption font-bold uppercase tracking-[0.14em] text-text-secondary">
                    Sample impact letter
                  </p>
                  <h3 className="mt-1 font-serif text-3xl font-semibold">Verified service letter</h3>
                </div>
                <span className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-surface-dark px-4 text-senior-caption font-bold text-text-on-dark">
                  <BadgeCheck aria-hidden="true" className="size-5" />
                  Verified
                </span>
              </div>
              <dl className="mt-6 flex flex-col gap-5 text-lg">
                <div>
                  <dt className="font-bold">Situation</dt>
                  <dd className="text-text-secondary">
                    A neighbor could not video call family and felt afraid of making mistakes.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Action</dt>
                  <dd className="text-text-secondary">
                    I taught three short sessions, one step at a time, and wrote a simple checklist.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Result</dt>
                  <dd className="text-text-secondary">
                    They now make weekly video calls on their own.
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-senior-caption text-text-secondary">
                Letters never name the Explorer.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-center text-xl font-bold">Sample partners</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <li
                key={partner}
                className="flex min-h-24 items-center justify-center rounded-2xl border-2 border-dashed border-border-muted px-4 text-center text-lg font-bold text-text-secondary"
              >
                {partner}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
