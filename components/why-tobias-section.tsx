'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { siteConfig } from '@/config/site'

const differentiators = [
  {
    number: '01',
    title: 'Ingenieur, kein Verkäufer',
    description:
      'Studierter Master-Ingenieur und langjähriger Senior Software-Projektleiter in der Steuergeräteentwicklung. Ich betrachte Finanzen nicht durch die Vertriebsbrille, sondern mit analytischer Präzision.',
  },
  {
    number: '02',
    title: 'Durchgerechnet statt geschätzt',
    description:
      'Ich baue Konzepte wie Systeme: logisch, überprüfbar, maßgeschneidert. Jede Empfehlung muss mathematisch aufgehen – nicht nur im Verkaufsgespräch gut klingen.',
  },
  {
    number: '03',
    title: 'Beratung auf Augenhöhe',
    description:
      'Ich bin selbst erst mit 33 Jahren tiefer ins Investieren eingestiegen. Die typischen Fragen, Zweifel und Einstiegshürden meiner Mandanten kenne ich aus eigener Erfahrung.',
  },
  {
    number: '04',
    title: 'Ohne Fachchinesisch',
    description:
      'Komplexe Themen erkläre ich so lange, bis sie wirklich verständlich sind. Keine Schnell-reich-werden-Versprechen, keine Renditegarantien, keine Vertriebs-Slogans.',
  },
]

export function WhyTobiasSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="ueber-mich"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 px-6 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto"
      aria-labelledby="why-heading"
    >
      {/* Section label */}
      <p
        className="mb-6 text-xs uppercase tracking-[0.25em] text-gold"
        style={{
          letterSpacing: '0.25em',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        Warum {siteConfig.person.fullName}?
      </p>

      {/* Heading */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
        <h2
          id="why-heading"
          className="max-w-xl text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight md:text-4xl xl:text-5xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          Analytisch statt
          <br />
          <em className="not-italic text-gold">marktschreierisch.</em>
        </h2>
        <p
          className="text-base leading-relaxed text-ink-muted max-w-sm"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          Mein Unterschied liegt in meiner DNA als Ingenieur.
          Vier Dinge, die meine Arbeitsweise prägen.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {differentiators.map((item, i) => (
          <div
            key={item.number}
            className="group flex flex-col gap-4 bg-background p-7 transition-colors duration-500 hover:bg-foreground sm:p-10 md:p-12"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s, background-color 0.5s ease`,
            }}
          >
            <span
              className="font-mono text-xs tracking-widest text-gold transition-colors duration-500 group-hover:text-background"
              style={{ letterSpacing: '0.15em' }}
            >
              {item.number}
            </span>
            <h3 className="text-balance font-serif text-xl leading-snug text-foreground transition-colors duration-500 group-hover:text-background">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed md:text-[0.9375rem] text-ink-muted transition-colors duration-500 group-hover:text-background/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
