'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const topics = [
  { id: 'phone', title: 'Phone and apps', helper: 'Texts, photos, and everyday apps', image: '/images/topic-phone.png' },
  { id: 'email', title: 'Email and cloud storage', helper: 'Send, save, and back up safely', image: '/images/topic-email.png' },
  { id: 'video', title: 'Video calls', helper: 'See and talk to family', image: '/images/topic-video.png' },
  { id: 'computer', title: 'Computer basics', helper: 'Files, printing, and the web', image: '/images/topic-computer.png' },
  { id: 'resume', title: 'Résumés', helper: 'Write and send a strong one', image: '/images/topic-resume.png' },
  { id: 'safety', title: 'Online safety', helper: 'Spot scams and stay protected', image: '/images/topic-safety.png' },
  { id: 'other', title: 'Something else', helper: 'Tell us what you have in mind', image: '/images/topic-other.png' },
]

function Segmented({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string
  name: string
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <fieldset>
      <legend className="mb-4 font-serif text-3xl font-semibold">{legend}</legend>
      <div className="flex flex-col gap-3 sm:flex-row">
        {options.map((option) => {
          const selected = value === option
          return (
            <label
              key={option}
              className={cn(
                'relative flex min-h-16 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 px-6 text-xl font-bold transition-colors has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-[3px] has-[:focus-visible]:outline-focus-ring',
                selected
                  ? 'border-surface-dark bg-surface-dark text-text-on-dark'
                  : 'border-border-muted bg-surface-primary hover:border-surface-dark',
              )}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {selected && <Check aria-hidden="true" className="size-6" />}
              {option}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export function HelpPicker() {
  const [selected, setSelected] = useState<string[]>([])
  const [meet, setMeet] = useState('Zoom')
  const [length, setLength] = useState('30 min')
  const [other, setOther] = useState('')

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )

  return (
    <section aria-labelledby="help-title" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="help-title"
            eyebrow="Step one"
            title="What do you need help with?"
            lead="Pick as many as you like. You can always change your mind later."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => {
            const isSelected = selected.includes(topic.id)
            return (
              <li key={topic.id}>
                <Reveal className="h-full" delay={(index % 4) * 80}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggle(topic.id)}
                    className={cn(
                      'card-lift flex h-full w-full flex-col overflow-hidden rounded-3xl border-2 bg-surface-primary text-left',
                      isSelected ? 'border-surface-dark' : 'border-border-muted',
                    )}
                  >
                    <span className="relative block aspect-[4/3] w-full bg-surface-secondary">
                      <Image
                        src={topic.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16rem"
                        className="object-cover"
                      />
                      {isSelected && (
                        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-surface-dark px-3 py-1.5 text-senior-caption font-bold text-text-on-dark">
                          <Check aria-hidden="true" className="size-4" />
                          Selected
                        </span>
                      )}
                    </span>
                    <span className="flex flex-1 flex-col gap-1 p-5">
                      <span className="text-senior-heading-sm font-bold leading-snug">{topic.title}</span>
                      <span className="text-lg text-text-secondary">{topic.helper}</span>
                    </span>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>

        {selected.includes('other') && (
          <div className="mt-8 max-w-2xl">
            <label htmlFor="other-help" className="mb-2 block text-xl font-bold">
              Tell us what you would like to learn
            </label>
            <input
              id="other-help"
              type="text"
              value={other}
              onChange={(event) => setOther(event.target.value)}
              placeholder="For example: using a tablet for church"
              className="min-h-14 w-full rounded-2xl border-2 border-border-muted bg-surface-primary px-5 text-xl placeholder:text-text-secondary"
            />
          </div>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Segmented
            legend="How do you want to meet?"
            name="meet"
            options={['Zoom', 'In person at a public place']}
            value={meet}
            onChange={setMeet}
          />
          <Segmented
            legend="How long?"
            name="length"
            options={['15 min', '30 min', '60 min']}
            value={length}
            onChange={setLength}
          />
        </div>

        <p aria-live="polite" className="mt-8 text-xl text-text-secondary">
          {selected.length === 0
            ? 'Nothing selected yet. Choose a topic above to get started.'
            : `You chose ${selected.length} ${selected.length === 1 ? 'topic' : 'topics'}, meeting by ${meet === 'Zoom' ? 'Zoom' : 'in person at a public place'} for ${length}.`}
        </p>
      </Container>
    </section>
  )
}
