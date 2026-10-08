'use client'

import { useState } from 'react'
import { Check, ShieldCheck } from 'lucide-react'
import { Container, SectionHeading, buttonStyles } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const inputStyles =
  'min-h-14 w-full rounded-2xl border-2 border-border-muted bg-surface-primary px-5 text-xl placeholder:text-text-secondary'

export function Signup() {
  const [role, setRole] = useState<'explorer' | 'guide'>('explorer')
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  return (
    <section id="signup" aria-labelledby="signup-title" className="bg-surface-secondary py-24 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="signup-title"
            eyebrow="Join your neighbors"
            title="Ready when you are"
            lead="Tell us a little about you. There is no pressure and no deadline, and you decide when to book your first session."
          />
          <p className="mt-8 flex items-start gap-3 text-xl">
            <ShieldCheck aria-hidden="true" className="mt-1 size-6 shrink-0 text-surface-dark" />
            Guides and Explorers both complete an ID and background check before their first session.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              const data = new FormData(event.currentTarget)
              setSubmittedName(String(data.get('name') || 'neighbor'))
            }}
            className="card-lift flex flex-col gap-6 rounded-3xl border border-border-muted bg-surface-primary p-6 sm:p-10"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xl font-bold">
                First name or nickname
              </label>
              <input id="name" name="name" type="text" required autoComplete="given-name" className={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xl font-bold">
                Email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputStyles} />
            </div>

            <fieldset>
              <legend className="mb-2 text-xl font-bold">I am joining as</legend>
              <div className="flex flex-col gap-3 sm:flex-row">
                {(
                  [
                    ['explorer', "I'm an Explorer"],
                    ['guide', "I'm a Guide"],
                  ] as const
                ).map(([value, label]) => {
                  const selected = role === value
                  return (
                    <label
                      key={value}
                      className={cn(
                        'flex min-h-16 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 px-5 text-xl font-bold transition-colors has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-[3px] has-[:focus-visible]:outline-focus-ring',
                        selected
                          ? 'border-surface-dark bg-surface-dark text-text-on-dark'
                          : 'border-border-muted bg-surface-primary hover:border-surface-dark',
                      )}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={value}
                        checked={selected}
                        onChange={() => setRole(value)}
                        className="sr-only"
                      />
                      {selected && <Check aria-hidden="true" className="size-6" />}
                      {label}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            {role === 'explorer' && (
              <div>
                <label htmlFor="trusted" className="mb-1 block text-xl font-bold">
                  Trusted contact (optional)
                </label>
                <p id="trusted-help" className="mb-2 text-lg text-text-secondary">
                  A family member or caregiver who receives session confirmations.
                </p>
                <input
                  id="trusted"
                  name="trusted"
                  type="text"
                  inputMode="email"
                  aria-describedby="trusted-help"
                  placeholder="Email or phone number"
                  className={inputStyles}
                />
              </div>
            )}

            <button type="submit" className={cn(buttonStyles.primary, 'w-full')}>
              Sign up
            </button>

            <p aria-live="polite" className="min-h-6 text-lg font-bold">
              {submittedName &&
                `Thank you, ${submittedName}. This is a prototype, so nothing was sent.`}
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}
