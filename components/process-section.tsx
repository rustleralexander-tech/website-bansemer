'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'

const steps = [
  {
    step: '01',
    title: 'Ziele und Wünsche erfassen',
    duration: 'Unverbindlich',
    description:
      'Zuerst erarbeite ich mit Ihnen, was Sie eigentlich erreichen möchten. Ohne diese Basis lässt sich nichts sinnvoll planen.',
  },
  {
    step: '02',
    title: 'Ist-Situation darstellen',
    duration: 'Erstgespräch',
    description:
      'Wir schauen uns gemeinsam an, wo Sie heute stehen – Absicherung, Vorsorge, bestehende Verträge. Offen und ohne Bewertung.',
  },
  {
    step: '03',
    title: 'Wege aufzeigen',
    duration: 'Im Hintergrund',
    description:
      'Ich zeige mögliche Lücken auf und mache auch auf Bereiche aufmerksam, die Sie vielleicht noch gar nicht auf dem Schirm hatten – sowie die Wege, die zu Ihren Zielen führen.',
  },
  {
    step: '04',
    title: 'Sie entscheiden',
    duration: '"Alles geht, nichts muss"',
    description:
      'Sie entscheiden, was Sie umsetzen möchten. Es gibt keinen Druck und kein Versprechen auf das jeweils billigste Produkt – nur eine Empfehlung, die zu Ihnen passt.',
  },
  {
    step: '05',
    title: 'Umsetzung',
    duration: 'Schritt für Schritt',
    description:
      'Wir setzen gemeinsam um, was Sie entschieden haben – in Ihrem Tempo, verständlich erklärt, ohne Fachchinesisch.',
  },
  {
    step: '06',
    title: 'Check-up & Begleitung',
    duration: 'Alle 12 – 18 Monate',
    description:
      'Leben passiert: Hochzeit, Geburt, Umzug, Scheidung. Alle 12 bis 18 Monate setzen wir uns zusammen und besprechen, ob sich Ziele geändert haben oder Optimierungsbedarf besteht.',
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      id="zusammenarbeit"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 px-6 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto"
      aria-labelledby="process-heading"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-20">
        <div>
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em] text-gold"
            style={{
              letterSpacing: '0.25em',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}
          >
            Zusammenarbeit
          </p>
          <h2
            id="process-heading"
            className="text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight md:text-4xl xl:text-5xl"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            So arbeiten wir zusammen.
          </h2>
        </div>
        <p
          className="text-base leading-relaxed text-ink-muted max-w-sm"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease 0.2s',
          }}
        >
          Ein fester Ablauf, an dem sich der Kunde orientieren kann. Sie wissen zu jedem
          Zeitpunkt, wo Sie stehen und warum.
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute bottom-4 left-[1.0625rem] top-4 hidden w-px bg-border md:block"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-border last:border-0 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
              }}
            >
              {/* Step number */}
              <div className="flex items-start gap-4 md:w-16 shrink-0">
                <div
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-mono text-xs font-bold text-ink"
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 flex-1">
                <div className="flex-1">
                  <h3 className="mb-3 text-balance font-serif text-xl leading-snug text-foreground">{step.title}</h3>
                  <p className="text-base leading-relaxed md:text-[0.9375rem] text-ink-muted">{step.description}</p>
                </div>
                <div className="md:text-right shrink-0">
                  <span
                    className="border border-border px-3 py-1 text-xs uppercase tracking-widest text-gold"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
