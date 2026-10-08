import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const buttonBase =
  'inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-7 text-xl font-bold transition-colors'

export const buttonStyles = {
  primary: cn(
    buttonBase,
    'bg-interactive-accent text-text-on-dark shadow-[0_6px_16px_-6px_rgb(217_119_6/0.7)] hover:brightness-95',
  ),
  secondary: cn(
    buttonBase,
    'border-2 border-text-primary bg-surface-primary text-text-primary hover:bg-surface-secondary',
  ),
  link: 'inline-flex min-h-12 items-center text-xl font-bold text-text-primary underline decoration-2 underline-offset-4 hover:text-interactive-accent',
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6 lg:px-8', className)}>{children}</div>
}

export function Eyebrow({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={cn(
        'mb-3 text-senior-caption font-bold uppercase tracking-[0.14em]',
        onDark ? 'text-text-on-dark/85' : 'text-text-secondary',
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  onDark,
  align = 'left',
  id,
}: {
  eyebrow?: string
  title: string
  lead?: string
  onDark?: boolean
  align?: 'left' | 'center'
  id?: string
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          'font-serif text-4xl font-semibold leading-[1.15] text-balance sm:text-5xl',
          onDark ? 'text-text-on-dark' : 'text-text-primary',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-5 text-xl leading-relaxed text-pretty',
            onDark ? 'text-text-on-dark/90' : 'text-text-secondary',
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

export function Pill({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex min-h-10 items-center rounded-full border border-border-muted bg-surface-primary px-4 text-senior-caption font-bold text-text-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function IconTile({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-14 shrink-0 items-center justify-center rounded-2xl bg-surface-dark text-text-on-dark',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function WaveDivider({
  className,
  flip,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn('block h-10 w-full sm:h-16', flip && 'rotate-180', className)}
      fill="currentColor"
    >
      <path d="M0 40C120 72 240 80 360 62C480 44 560 8 720 14C880 20 960 62 1100 66C1240 70 1340 42 1440 22V80H0V40Z" />
    </svg>
  )
}
