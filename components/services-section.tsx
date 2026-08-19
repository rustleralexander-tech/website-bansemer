'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { siteConfig } from '@/config/site'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="14" cy="14" r="11" />
        <path d="M14 8v6l4 2" />
      </svg>
    ),
    title: 'Arbeitskraftabsicherung',
    description:
      'Ihre Arbeitskraft ist Ihr größtes Vermögen. Ich prüfe Ihren bestehenden Schutz, decke Lücken auf und sichere ab, was im Ernstfall Ihre gesamte Planung tragen muss.',
    highlight: 'Der Schwerpunkt meiner Beratung.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="4 20 10 14 14 18 20 10" />
        <line x1="20" y1="10" x2="24" y2="10" />
        <line x1="20" y1="10" x2="20" y2="14" />
      </svg>
    ),
    title: 'Vermögensaufbau mit ETFs',
    description:
      'Ich erkläre, wie breit gestreute, wissenschaftlich fundierte Sachwert-Investments funktionieren, und entwickle mit Ihnen eine Strategie, die zu Ihren Zielen passt. Beratungsschwerpunkt – die Umsetzung erfolgt über spezialisierte Partner.',
    highlight: 'Systematisch statt spekulativ.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <circle cx="12" cy="9" r="4" />
        <path d="M20 13c2.2.6 4 2.6 4 5" />
        <path d="M17 7a4 4 0 0 1 0 4" />
      </svg>
    ),
    title: 'Altersvorsorge & Ruhestandsplanung',
    description:
      'Gesetzliche Rente, betriebliche und private Vorsorge – ich rechne durch, was Sie tatsächlich erwarten dürfen, und schließe die Lücke zwischen Wunsch und Zahlen.',
    highlight: 'Planbar statt gehofft.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="8" width="20" height="14" rx="2" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        <line x1="14" y1="14" x2="14" y2="18" />
        <line x1="12" y1="16" x2="16" y2="16" />
      </svg>
    ),
    title: 'Existenzieller Grundschutz',
    description:
      'Haftung, Gesundheit, Hinterbliebene: Ich sortiere Ihren bestehenden Versicherungsschutz und empfehle nur, was Sie wirklich brauchen – ohne Überversicherung.',
    highlight: 'Sicherheit ohne Überfluss.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <line x1="9" y1="9" x2="19" y2="9" />
        <line x1="9" y1="14" x2="19" y2="14" />
        <line x1="9" y1="19" x2="14" y2="19" />
      </svg>
    ),
    title: 'Selbstständige & Unternehmer',
    description:
      'Ohne Arbeitgeber gibt es kein Netz: Ich baue Absicherung und Vorsorge für Selbstständige und Unternehmer auf – inklusive Depotlösungen als Beratungsschwerpunkt.',
    highlight: 'Für alle, die selbst vorsorgen müssen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
      </svg>
    ),
    title: 'Immobilien als Kapitalanlage',
    description:
      'Ich zeige, wann sich eine Anlageimmobilie rechnet und wann nicht – nüchtern durchkalkuliert. Beratungsschwerpunkt; Vermittlung und Finanzierung erfolgen über Partner mit entsprechender Erlaubnis.',
    highlight: 'Erst rechnen, dann kaufen.',
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      id="leistungen"
      ref={ref}
      className="bg-cream py-20 md:py-28 lg:py-36"
      aria-labelledby="services-heading"
    >
      <div className="px-6 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em] text-gold"
            style={{
              letterSpacing: '0.25em',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}
          >
            Leistungen
          </p>
          <h2
            id="services-heading"
            className="text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight md:text-4xl xl:text-5xl"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            Womit ich Sie begleite.
          </h2>
          <p
            className="mt-6 text-base leading-relaxed text-ink-muted"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            Keine Produktlisten, kein Fachchinesisch. Der Fokus liegt auf existenzieller
            Absicherung und solidem, wissenschaftlich fundiertem Vermögensaufbau.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group flex flex-col gap-5 border border-border bg-background p-6 transition-all duration-500 hover:border-gold sm:p-8"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.7s ease ${0.05 + i * 0.07}s, transform 0.7s ease ${0.05 + i * 0.07}s, border-color 0.4s ease`,
              }}
            >
              <div className="duration-400 flex h-12 w-12 items-center justify-center text-foreground transition-colors group-hover:text-gold">
                {service.icon}
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 text-balance font-serif text-xl leading-snug text-foreground">{service.title}</h3>
                <p className="mb-4 text-base leading-relaxed md:text-[0.9375rem] text-ink-muted">{service.description}</p>
                <p className="mt-auto text-xs font-medium tracking-wide text-gold">
                  {service.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Status note */}
        <p
          className="mx-auto mt-10 max-w-2xl text-center text-[0.6875rem] leading-relaxed text-ink-muted"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease 0.55s',
          }}
        >
          Versicherungsverträge vermittle ich als {siteConfig.legal.statusShort}{' '}
          ausschließlich im Namen und unter der Haftung der Bayerischen.
          Details finden Sie in meiner{' '}
          <a href="/erstinformation" className="underline hover:text-foreground">
            Erstinformation
          </a>
          .
        </p>

        {/* CTA */}
        <div
          className="mt-10 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease 0.6s',
          }}
        >
          <a
            href="#kontakt"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-foreground px-8 py-4 text-xs uppercase tracking-widest text-background transition-all duration-300 hover:bg-accent hover:text-foreground sm:w-auto"
            style={{ letterSpacing: '0.12em' }}
          >
            Unverbindlich anfragen
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
