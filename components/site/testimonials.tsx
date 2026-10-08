import Image from 'next/image'
import { Star } from 'lucide-react'
import { Container, Pill, SectionHeading } from './ui'
import { Reveal } from './reveal'

type Story = {
  name: string
  role: string
  photo: string
  alt: string
  quote: string
  gained: string[]
}

const explorers: Story[] = [
  {
    name: 'Miss S.',
    role: 'Explorer',
    photo: '/images/portrait-miss-s.png',
    alt: 'Sample photo of Miss S., a smiling older woman with silver curly hair and glasses.',
    quote:
      'I was scared of pressing the wrong button. My Guide taught me one step at a time, and now I video call my grandkids every Sunday.',
    gained: ['Learned video calls', '3 sessions'],
  },
  {
    name: 'Mr. R.',
    role: 'Explorer',
    photo: '/images/portrait-mr-r.png',
    alt: 'Sample photo of Mr. R., a smiling older man with white hair and a mustache.',
    quote:
      'I finally set up my email and backed up my photos. I did it myself, and my Guide just made sure I felt confident.',
    gained: ['Email set up', 'Photos backed up'],
  },
]

const guides: Story[] = [
  {
    name: 'Marcus T.',
    role: 'Guide · Phone Pro',
    photo: '/images/portrait-marcus.png',
    alt: 'Sample photo of Marcus, a smiling young man in a teal shirt.',
    quote:
      'Helping someone video call their family beats any paycheck. I learned to explain things simply, and it comes up in every interview.',
    gained: ['38 sessions', 'Silver Guide'],
  },
  {
    name: 'Priya K.',
    role: 'Guide · Résumé Expert, volunteer',
    photo: '/images/portrait-priya.png',
    alt: 'Sample photo of Priya, a smiling young woman with long dark hair.',
    quote:
      "I volunteer for my school's service hours. My impact letter described real problems I solved, which made my application stronger.",
    gained: ['Service hours verified', 'Impact letter'],
  },
]

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="card-lift flex h-full flex-col gap-6 rounded-3xl border border-border-muted bg-surface-primary p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <span className="relative size-20 shrink-0 overflow-hidden rounded-full shadow-card">
          <Image
            src={story.photo}
            alt={story.alt}
            fill
            sizes="5rem"
            className="object-cover object-[50%_25%]"
          />
        </span>
        <div>
          <h4 className="text-senior-heading-sm font-bold">{story.name}</h4>
          <Pill className="mt-1 bg-surface-secondary">{story.role}</Pill>
        </div>
      </div>
      <blockquote className="font-serif text-2xl leading-snug text-text-primary">
        &ldquo;{story.quote}&rdquo;
      </blockquote>
      <div className="mt-auto">
        <p className="text-lg font-bold">What they gained</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {story.gained.map((item) => (
            <li key={item}>
              <Pill className="bg-surface-secondary">{item}</Pill>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex items-center gap-2">
          <span aria-hidden="true" className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-5 fill-interactive-accent text-interactive-accent" />
            ))}
          </span>
          <span className="text-lg font-bold">5 out of 5 stars</span>
        </p>
      </div>
    </article>
  )
}

function Group({ title, stories }: { title: string; stories: Story[] }) {
  return (
    <div>
      <h3 className="font-serif text-3xl font-semibold">{title}</h3>
      <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">
        {stories.map((story, index) => (
          <Reveal key={story.name} className="h-full" delay={index * 100}>
            <StoryCard story={story} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section aria-labelledby="stories-title" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="stories-title"
            eyebrow="Stories from our community"
            title="Real help. Real confidence."
          />
          <p className="mt-5 inline-flex min-h-10 items-center rounded-full bg-surface-secondary px-5 text-lg font-bold">
            Sample stories for this prototype.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-col gap-14">
          <Group title="From our Explorers" stories={explorers} />
          <Group title="From our Guides" stories={guides} />
        </div>
      </Container>
    </section>
  )
}
