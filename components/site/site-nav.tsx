'use client'

import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'
import { buttonStyles } from './ui'
import { cn } from '@/lib/utils'

const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#guides-and-explorers', label: 'Guides and Explorers' },
  { href: '#safety', label: 'Safety' },
  { href: '#schools', label: 'For Schools' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      data-on-dark
      className="dotted-grid sticky top-0 z-50 bg-surface-dark text-text-on-dark shadow-[0_8px_24px_-12px_rgb(26_58_64/0.6)]"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-surface-primary focus:px-5 focus:py-3 focus:font-bold focus:text-text-primary"
      >
        Skip to main content
      </a>
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 lg:px-8"
      >
        <a href="#top" className="flex min-h-12 items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-text-on-dark text-surface-dark"
          >
            <Compass className="size-7" strokeWidth={2.25} />
          </span>
          <span className="max-w-[10.5rem] text-lg font-bold leading-tight sm:max-w-none lg:max-w-[12rem]">
            Digital Guides &amp; Neighbors Network
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-12 items-center whitespace-nowrap rounded-xl px-3 text-lg font-bold hover:bg-text-on-dark/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#signup" className={cn(buttonStyles.primary, 'min-h-12 whitespace-nowrap px-6')}>
              Sign up
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-text-on-dark/70 px-4 text-lg font-bold lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-text-on-dark/15 lg:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 text-xl font-bold hover:bg-text-on-dark/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#signup"
              onClick={() => setOpen(false)}
              className={cn(buttonStyles.primary, 'w-full')}
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
