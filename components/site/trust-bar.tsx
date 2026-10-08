import { BadgeCheck, CreditCard, Lock, ShieldCheck } from 'lucide-react'
import { Container } from './ui'

const items = [
  { icon: ShieldCheck, label: 'Background checked' },
  { icon: BadgeCheck, label: 'ID verified' },
  { icon: Lock, label: 'Private by design' },
  { icon: CreditCard, label: 'Secure payments', note: '(Stripe or PayPal)' },
]

export function TrustBar() {
  return (
    <div className="relative z-10 -mt-16 lg:-mt-20">
      <Container>
        <ul className="grid overflow-hidden rounded-3xl border-2 border-border-muted bg-surface-primary shadow-card-hover sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, note }) => (
            <li
              key={label}
              className="flex items-center gap-4 border-b border-border-muted p-6 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:odd:border-r"
            >
              <span
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-dark text-text-on-dark"
              >
                <Icon className="size-8" strokeWidth={2} />
              </span>
              <span className="text-xl font-bold leading-snug text-text-primary">
                {label}
                {note && <span className="block text-senior-caption font-normal text-text-secondary">{note}</span>}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
