import {
  EyeOff,
  Flag,
  HeartHandshake,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  Star,
  Timer,
} from 'lucide-react'
import { Container, IconTile, WaveDivider, buttonStyles } from './ui'
import { Reveal } from './reveal'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Everyone is vetted',
    body: 'Guides and Explorers both complete an ID check and a background check, so no one, young or old, has to feel unsafe.',
  },
  {
    icon: EyeOff,
    title: 'Names stay private',
    body: 'Guides show a first name and last initial; Explorers can use a nickname. Full details are shared only after a booking is confirmed.',
  },
  {
    icon: Landmark,
    title: 'Public places, staff nearby',
    body: 'Meet by Zoom or in a library or senior-center common area. Never at a private home.',
  },
  {
    icon: Timer,
    title: 'Short, checked-in sessions',
    body: 'Sessions run 15 to 60 minutes. In-person sessions have a check-in and a check-out, and either person can end a session at any time with no penalty.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted contact',
    body: 'Explorers can add a family member or caregiver (optional) who receives session confirmations.',
  },
  {
    icon: Flag,
    title: 'Report a problem',
    body: 'One tap on every page. The session is paused right away while we review.',
  },
  {
    icon: Star,
    title: 'Two-way ratings and strikes',
    body: 'Patience, clarity, and respect are rated by both sides. Disrespect from either side has consequences.',
  },
  {
    icon: ShieldAlert,
    title: 'Scam protection',
    body: 'Pay only on the site through Stripe or PayPal. We never see or store card details. No cash, gift cards, or direct transfers. Guides never ask for passwords, bank info, or codes.',
  },
]

export function Safety() {
  return (
    <div className="bg-surface-primary">
      <WaveDivider className="relative top-px text-surface-dark" flip />
      <section
        id="safety"
        data-on-dark
        aria-labelledby="safety-title"
        className="dotted-grid bg-surface-dark py-16 text-text-on-dark sm:py-20"
      >
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <h2
                id="safety-title"
                className="font-serif text-4xl font-semibold leading-[1.15] text-balance sm:text-5xl"
              >
                We value the safety of our participants
              </h2>
              <p className="mt-5 text-2xl leading-relaxed text-text-on-dark/90">
                Safety goes both ways. Everyone in the network is protected.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ icon: Icon, title, body }, index) => (
              <li key={title}>
                <Reveal className="h-full" delay={(index % 4) * 80}>
                  <article className="card-lift flex h-full flex-col gap-4 rounded-3xl border border-border-muted bg-surface-primary p-6 text-text-primary">
                    <IconTile>
                      <Icon className="size-7" />
                    </IconTile>
                    <h3 className="text-senior-heading-sm font-bold leading-snug">{title}</h3>
                    <p className="text-lg leading-relaxed text-text-secondary">{body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-text-on-dark/10 p-6 sm:flex-row sm:items-center sm:p-8">
              <p className="max-w-xl text-xl font-bold leading-snug">
                We never sell your information. Delete your account and data anytime.
              </p>
              <a href="#contact" className={buttonStyles.primary}>
                Report a problem
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
      <WaveDivider className="relative -top-px text-surface-dark" />
    </div>
  )
}
