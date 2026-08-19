'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

const credentials = siteConfig.person.credentials

interface HeroSectionProps {
  visible: boolean
}

export function HeroSection({ visible }: HeroSectionProps) {
  const [activeCredential, setActiveCredential] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCredential((prev) => (prev + 1) % credentials.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden lg:min-h-screen lg:flex-row"
      aria-label="Hero"
    >
      {/* Mobile portrait block — stacked above the text, own height, fades at bottom */}
      <div
        className="relative h-[72vw] max-h-80 w-full shrink-0 overflow-hidden lg:hidden"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s ease 0.1s',
        }}
        aria-hidden="true"
      >
        <Image
          src={siteConfig.images.hero}
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* bottom fade merges into page background */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Left — Text content */}
      <div
        className="relative z-10 flex w-full flex-col justify-end px-6 pb-12 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:w-1/2 lg:justify-center lg:px-20 lg:pb-16 lg:pt-28 xl:px-28"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
        }}
      >
        {/* Eyebrow */}
        <p
          className="mb-5 text-[0.65rem] uppercase text-gold sm:text-xs md:mb-6"
          style={{ letterSpacing: '0.22em' }}
        >
          {siteConfig.person.role} &middot; {siteConfig.region.heroSuffix}
        </p>

        {/* Headline */}
        <h1 className="mb-5 text-balance font-serif text-[clamp(1.85rem,8.5vw,2.75rem)] leading-[1.12] text-foreground md:mb-6 md:text-5xl xl:text-6xl">
          Finanzen mit der
          <br />
          <em className="not-italic text-gold">Präzision eines</em>
          <br />
          Ingenieurs.
        </h1>

        {/* Subtext */}
        <p className="mb-8 max-w-md text-base leading-relaxed text-ink-muted md:mb-10">
          Ich bin Master-Ingenieur und Senior Software-Projektleiter – und betrachte Vorsorge und
          Vermögensaufbau nicht durch die Vertriebsbrille, sondern als System, das
          durchgerechnet werden muss. Für Familien, Selbstständige, Unternehmer und
          Ingenieure.
        </p>

        {/* CTA */}
        <div className="mb-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:mb-12">
          <a
            href="#kontakt"
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-7 py-4 text-xs uppercase tracking-widest text-background transition-all duration-300 hover:bg-accent hover:text-foreground sm:justify-start"
            style={{ letterSpacing: '0.12em' }}
          >
            Kostenloses Gespräch
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#ueber-mich"
            className="flex min-h-11 items-center justify-center gap-2 text-xs uppercase tracking-widest text-ink-muted transition-colors duration-300 hover:text-foreground sm:justify-start"
            style={{ letterSpacing: '0.1em' }}
          >
            Mehr erfahren
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-col gap-4">
          {/* Motto */}
          <div className="flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-gold" aria-hidden="true" />
            <span className="text-xs leading-relaxed text-ink-muted">
              {siteConfig.person.motto}
            </span>
          </div>

          {/* Rotating credentials */}
          <div className="relative flex h-8 items-center gap-3">
            {credentials.map((credential, i) => (
              <div
                key={credential}
                className="flex items-center gap-2"
                style={{
                  opacity: i === activeCredential ? 1 : 0,
                  transform: i === activeCredential ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  position: i === activeCredential ? 'relative' : 'absolute',
                }}
              >
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-semibold text-ink"
                  style={{ fontSize: '0.65rem' }}
                  aria-hidden="true"
                >
                  {credential[0]}
                </div>
                <p className="text-xs text-ink-muted">
                  <span className="font-medium text-foreground">{credential}</span>
                  {' '}&mdash; analytisch, nachvollziehbar, auf Augenhöhe
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Portrait */}
      <div
        className="relative hidden w-full overflow-hidden lg:block lg:w-1/2"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 1.2s ease 0.5s',
        }}
      >
        {/* The portrait PNG is freetstanding on white. We use absolute positioning
            with a fixed pixel-width so it scales to fill the full column height.
            A negative top value pulls Tobias' head above the hero's padding so it
            aligns with the eyebrow text on the left. */}
        <Image
          src={siteConfig.images.hero}
          alt={`${siteConfig.person.fullName} – ${siteConfig.person.role} aus ${siteConfig.address.city}`}
          fill
          priority
          className="object-cover object-[60%_0%]"
          sizes="50vw"
          style={{ objectPosition: '60% -5%' }}
        />
        {/* Fade bottom edge into section background */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
          style={{
            background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-border" style={{ animation: 'fadeIn 2s ease infinite alternate' }} />
        <span className="text-[10px] tracking-[0.2em] uppercase text-ink-muted" style={{ letterSpacing: '0.2em' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
