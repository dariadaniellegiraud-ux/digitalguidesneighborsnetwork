import Image from 'next/image'
import { BadgeCheck, CheckCircle2, Lightbulb, Star } from 'lucide-react'
import { Container, Eyebrow, buttonStyles } from './ui'
import { cn } from '@/lib/utils'

const checks = ['Everyone background-checked', 'Zoom or public places', 'Pay only through the site']

function PinShape({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 52"
      className={cn('h-[3.25rem] w-10 drop-shadow-[0_4px_6px_rgb(26_58_64/0.25)]', className)}
    >
      <path
        d="M20 49C20 49 4 31.5 4 19.5C4 10.4 11.2 3 20 3C28.8 3 36 10.4 36 19.5C36 31.5 20 49 20 49Z"
        fill="var(--theme-destination)"
        stroke="var(--text-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="19.5" r="6.5" fill="var(--surface-primary)" stroke="var(--text-primary)" strokeWidth="2" />
    </svg>
  )
}

function PinLabel({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'whitespace-nowrap rounded-full bg-surface-primary px-4 py-1.5 text-senior-caption font-bold text-text-primary shadow-card',
        className,
      )}
    >
      {children}
    </span>
  )
}

function MapScene() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      {/* Mobile: photo and journey row */}
      <div className="lg:hidden">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card-hover">
          <Image
            src="/images/hero-neighbors.jpg"
            alt="A young Guide and an older Explorer smile together while looking at a phone at a wooden table in a bright community café."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 34rem"
            className="object-cover"
          />
        </div>
        <ol className="mt-6 grid grid-cols-3 gap-3 text-center">
          {['Start here', 'Learn together', 'Confident on your own'].map((label) => (
            <li key={label} className="flex flex-col items-center gap-1">
              <PinShape className="h-11 w-8" />
              <span className="text-senior-caption font-bold leading-tight">{label}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop: full map scene */}
      <div className="relative hidden aspect-[600/660] lg:block">
        <svg
          aria-hidden="true"
          viewBox="0 0 600 660"
          className="absolute inset-0 size-full overflow-visible"
          fill="none"
        >
          <path
            d="M70 600C170 650 380 640 500 560C590 500 590 380 560 300C540 240 560 150 530 60"
            stroke="var(--theme-destination)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="0.1 18"
            opacity="0.75"
          />
        </svg>

        <div className="absolute left-[11%] top-[11%] h-[68%] w-[78%] overflow-hidden rounded-3xl shadow-card-hover">
          <Image
            src="/images/hero-neighbors.jpg"
            alt="A young Guide and an older Explorer smile together while looking at a phone at a wooden table in a bright community café."
            fill
            priority
            sizes="28rem"
            className="object-cover object-[55%_50%]"
          />
        </div>

        {/* Pins: positions match the route in the 600x660 viewBox */}
        <div className="absolute left-[11.5%] top-[91%] -translate-x-1/2 -translate-y-full">
          <PinShape />
        </div>
        <PinLabel className="absolute left-[16%] top-[92%]">Start here</PinLabel>

        <div className="absolute left-[93.3%] top-[45%] -translate-x-1/2 -translate-y-full">
          <PinShape />
        </div>
        <PinLabel className="absolute right-[3%] top-[47%]">Learn together</PinLabel>

        <div className="absolute left-[88.3%] top-[9%] -translate-x-1/2 -translate-y-full">
          <PinShape />
        </div>
        <PinLabel className="absolute right-[16%] top-[0%]">Confident on your own</PinLabel>

        {/* Lightbulb */}
        <div className="absolute left-[2%] top-[4%] flex flex-col items-center gap-1">
          <span
            aria-hidden="true"
            className="flex size-14 items-center justify-center rounded-full bg-surface-primary text-interactive-accent shadow-card"
          >
            <Lightbulb className="size-7" />
          </span>
          <PinLabel>Idea!</PinLabel>
        </div>

        {/* Floating cards */}
        <div className="absolute left-[36%] top-[72%] flex items-center gap-3 rounded-2xl bg-surface-primary p-4 pr-5 shadow-card-hover">
          <span
            aria-hidden="true"
            className="flex size-12 items-center justify-center rounded-full bg-surface-dark text-text-on-dark"
          >
            <BadgeCheck className="size-6" />
          </span>
          <div>
            <p className="text-lg font-bold leading-tight">Verified Guide</p>
            <p className="text-senior-caption text-text-secondary">ID and background checked</p>
          </div>
        </div>
        <div className="absolute left-[0%] top-[59%] flex items-center gap-3 rounded-2xl bg-surface-primary p-4 pr-5 shadow-card-hover">
          <span
            aria-hidden="true"
            className="flex size-12 items-center justify-center rounded-full bg-surface-secondary text-text-primary"
          >
            <Star className="size-6 fill-interactive-accent text-interactive-accent" />
          </span>
          <div>
            <p className="text-lg font-bold leading-tight">4.9 · Patience</p>
            <p className="text-senior-caption text-text-secondary">Rated by Explorers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-28 pt-12 sm:pt-16 lg:pb-36">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <Eyebrow>Community tech help · Washington, DC </Eyebrow>
          <h1
            id="hero-title"
            className="font-serif text-senior-display font-semibold text-text-primary text-balance"
          >
            Learning something new shouldn&apos;t be a struggle.
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-relaxed text-text-primary/90 text-pretty">
            We pair you with a verified Guide who teaches you, step by step, until you feel
            confident doing it yourself.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#signup" className={buttonStyles.primary}>
              I&apos;m an Explorer
            </a>
            <a href="#signup" className={buttonStyles.secondary}>
              Become a Guide
            </a>
          </div>
          <a href="#how-it-works" className={cn(buttonStyles.link, 'mt-4')}>
            Learn more
          </a>
          <ul className="mt-8 flex flex-col gap-3">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 aria-hidden="true" className="size-6 shrink-0 text-surface-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <MapScene />
      </Container>
    </section>
  )
}
