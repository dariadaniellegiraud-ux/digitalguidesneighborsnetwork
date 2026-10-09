import { Compass } from 'lucide-react'
import { Container } from './ui'

export function Footer() {
  return (
    <footer
      id="contact"
      data-on-dark
      className="dotted-grid bg-surface-dark py-16 text-text-on-dark"
    >
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-2xl bg-text-on-dark text-surface-dark"
            >
              <Compass className="size-7" strokeWidth={2.25} />
            </span>
            <p className="text-xl font-bold">Digital Guides &amp; Neighbors Network</p>
          </div>
          <p className="mt-5 font-serif text-3xl font-semibold text-balance">
            Every Explorer needs a Guide. Every Guide is a neighbor.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-lg">
          <p className="font-bold">Washington, DC</p>
          <p>daria.giraud@snhu.edu</p>
          <a
            href="mailto:[YOUR EMAIL]?subject=Report%20a%20problem"
            className="mt-2 inline-flex min-h-12 w-fit items-center font-bold underline decoration-2 underline-offset-4"
          >
            Report a problem
          </a>
        </div>
        <p className="border-t border-text-on-dark/20 pt-6 text-lg text-text-on-dark/90 md:col-span-2">
          Prototype: © All Rights Reserved. Daria Giraud | DariaCreativeCo. 
        </p>
      </Container>
    </footer>
  )
}
