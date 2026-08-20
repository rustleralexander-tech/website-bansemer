'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView } from '@/hooks/use-in-view'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

const personalImages = siteConfig.images.personal

const facts = [
  { label: 'Zuhause', value: 'Köln und Umgebung, im eigenen Zuhause' },
  { label: 'Familie', value: 'Familienvater' },
  { label: 'Leidenschaften', value: 'Fitness und Finanzen' },
  { label: 'Motto', value: 'Wann immer eine Reise endet, beginnt eine neue' },
]

export function PersonalSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % personalImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="persoenlich"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 px-6 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto"
      aria-labelledby="personal-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text side */}
        <div
          className={`reveal-left ${inView ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}
        >
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em] text-gold"
            style={{ letterSpacing: '0.25em' }}
          >
            Der Mensch hinter der Arbeit
          </p>
          <h2
            id="personal-heading"
            className="mb-8 text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight md:text-4xl xl:text-5xl"
          >
            Verwurzelt in Köln.
          </h2>

          <p className="text-base leading-relaxed text-ink-muted mb-6">
            Ich bin Familienvater und lebe mit meiner Familie im eigenen Zuhause in Köln
            und Umgebung. Die Region ist für mich mehr als ein Beratungsgebiet – hier lebe
            ich, hier berate ich, hier kenne ich die Menschen.
          </p>
          <p className="text-base leading-relaxed text-ink-muted mb-10">
            Neben der Finanzwelt schlägt mein Herz für Fitness – ein guter Ausgleich zum
            analytischen Denken, das meine Arbeit prägt. Beide Themen verbindet für mich
            derselbe Gedanke: dranbleiben, Fortschritte messen, konsequent bleiben.
          </p>

          {/* Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facts.map((fact, i) => (
              <div key={i} className="border-l-2 border-gold pl-4">
                <p className="mb-1 text-[0.65rem] uppercase text-ink-muted" style={{ letterSpacing: '0.15em' }}>
                  {fact.label}
                </p>
                <p className="text-[0.9375rem] font-medium leading-snug text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image side — crossfade slideshow */}
        <div
          className={`reveal-right relative aspect-[4/5] min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-0 ${inView ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '0.25s' } as React.CSSProperties}
        >
          {personalImages.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === activeIndex ? 1 : 0 }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          ))}
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {personalImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Bild ${i + 1} anzeigen`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-gold' : 'w-1.5 bg-white/65'
                }`}
                style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.3)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
