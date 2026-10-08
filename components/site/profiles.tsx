import Image from 'next/image'
import { BadgeCheck, Flame, Gift, MapPin, Star } from 'lucide-react'
import { Container, Pill, SectionHeading } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Meter = { label: string; value: number }

function Stars({ value }: { value: number }) {
  return (
    <span aria-hidden="true" className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            'size-6',
            i < Math.round(value)
              ? 'fill-interactive-accent text-interactive-accent'
              : 'text-border-muted',
          )}
        />
      ))}
    </span>
  )
}

function MeterRow({ label, value }: Meter) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr_3rem] items-center gap-3">
      <span className="text-lg">{label}</span>
      <div
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={value}
        aria-valuetext={`${value.toFixed(1)} out of 5`}
        className="h-3 overflow-hidden rounded-full bg-border-muted/60"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-surface-dark to-interactive-accent"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="text-right text-lg font-bold">{value.toFixed(1)}</span>
    </div>
  )
}

function ProfileCard({
  role,
  name,
  subtitle,
  photo,
  photoAlt,
  rating,
  sessions,
  meters,
  children,
}: {
  role: string
  name: string
  subtitle: string
  photo: string
  photoAlt: string
  rating: number
  sessions: number
  meters: Meter[]
  children: React.ReactNode
}) {
  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-border-muted bg-surface-secondary">
      <div className="relative h-64 shrink-0">
        <Image
          src={photo}
          alt={photoAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 36rem"
          className="object-cover object-[50%_25%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent"
        />
        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
          <span className="rounded-full bg-surface-primary px-4 py-2 text-lg font-bold">{role}</span>
          <span className="rounded-full bg-surface-primary/90 px-4 py-2 text-senior-caption font-bold text-text-secondary">
            Sample profile
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-text-on-dark">
          <div>
            <h3 className="font-serif text-3xl font-semibold">{name}</h3>
            <p className="text-lg font-bold">{subtitle}</p>
          </div>
          <span className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-surface-primary px-4 text-senior-caption font-bold text-text-primary">
            <BadgeCheck aria-hidden="true" className="size-5 text-surface-dark" />
            Verified
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Stars value={rating} />
          <p className="text-xl">
            <span className="font-bold">{rating.toFixed(1)} / 5</span>{' '}
            <span className="text-text-secondary">from {sessions} sessions</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {meters.map((meter) => (
            <MeterRow key={meter.label} {...meter} />
          ))}
        </div>
        {children}
      </div>
    </article>
  )
}

export function Profiles() {
  return (
    <section
      id="guides-and-explorers"
      aria-labelledby="profiles-title"
      className="py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="profiles-title"
              eyebrow="Guides and Explorers"
              title="Every Explorer needs a Guide. Every Guide is a neighbor."
            />
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden="true">
                {['marcus', 'miss-s', 'mr-r', 'priya'].map((id) => (
                  <span
                    key={id}
                    className="relative size-14 overflow-hidden rounded-full border-2 border-surface-primary shadow-card"
                  >
                    <Image
                      src={`/images/portrait-${id}.png`}
                      alt=""
                      fill
                      sizes="3.5rem"
                      className="object-cover object-[50%_25%]"
                    />
                  </span>
                ))}
              </div>
              <p className="text-lg font-bold">Neighbors helping neighbors</p>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal className="h-full">
              <ProfileCard
                role="Digital Guide"
                name="Marcus T."
                subtitle="Phone Pro"
                photo="/images/portrait-marcus.png"
                photoAlt="Sample profile photo: Marcus, a smiling young Guide in a teal shirt."
                rating={4.9}
                sessions={38}
                meters={[
                  { label: 'Patience', value: 5.0 },
                  { label: 'Clarity', value: 4.8 },
                  { label: 'Respect', value: 4.9 },
                ]}
              >
                <div>
                  <h4 className="text-xl font-bold">Specialties</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {['Apple iPhone', 'Gmail and cloud storage', 'Video calls', 'Résumés'].map(
                      (item) => (
                        <li key={item}>
                          <Pill>{item}</Pill>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <p className="text-lg text-text-secondary">
                  I love helping neighbors feel at ease with their phones. We go one small step at
                  a time, and no question is too small.
                </p>
                <div className="mt-auto">
                  <a
                    href="#signup"
                    className="inline-flex min-h-14 items-center rounded-2xl border-2 border-text-primary bg-surface-primary px-7 text-xl font-bold hover:bg-surface-secondary"
                  >
                    View profile
                  </a>
                </div>
              </ProfileCard>
            </Reveal>

            <Reveal className="h-full" delay={120}>
              <ProfileCard
                role="Explorer"
                name="Miss S."
                subtitle="Neighbor and learner"
                photo="/images/portrait-miss-s.png"
                photoAlt="Sample profile photo: Miss S., a smiling older Explorer with silver curly hair and glasses."
                rating={4.8}
                sessions={6}
                meters={[
                  { label: 'Patience', value: 4.8 },
                  { label: 'Clarity', value: 4.7 },
                  { label: 'Respect', value: 5.0 },
                ]}
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-muted bg-surface-primary px-4 py-2 text-lg font-bold">
                  <Flame aria-hidden="true" className="size-6 text-theme-destination" />
                  Learning streak: 6 sessions
                </div>
                <div>
                  <h4 className="text-xl font-bold">Projects completed</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {[
                      'Learned email',
                      'Backed up photos',
                      'Cleaned up phone storage',
                      'Video calls with family',
                    ].map((item) => (
                      <li key={item}>
                        <Pill>{item}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex items-start gap-3 rounded-2xl border border-border-muted bg-surface-primary p-5">
                  <Gift aria-hidden="true" className="mt-1 size-6 shrink-0 text-theme-destination" />
                  <p className="text-lg">
                    <span className="font-bold">Good to know:</span> Explorers earn points toward
                    local discounts for good-behavior ratings.
                  </p>
                </div>
              </ProfileCard>
            </Reveal>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-12 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 lg:flex">
            <span
              aria-hidden="true"
              className="flex size-14 items-center justify-center rounded-full border-2 border-text-primary bg-theme-destination text-text-on-dark shadow-card"
            >
              <MapPin className="size-7" />
            </span>
            <span className="rounded-full bg-surface-primary px-4 py-1.5 text-senior-caption font-bold shadow-card">
              Paired up
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
