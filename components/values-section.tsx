'use client'

import { useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

const values = [
  {
    word: 'Verlässlichkeit',
    statement:
      'Was besprochen wird, wird eingehalten. Absprachen, Rückmeldungen und Termine sind für mich verbindlich – keine leeren Versprechen, keine vertagten Anrufe.',
  },
  {
    word: 'Transparenz',
    statement:
      'Sie erfahren, wie eine Empfehlung zustande kommt, was sie kostet und welche Alternativen es gibt. Keine versteckten Kosten, keine Entscheidungen über Ihren Kopf hinweg.',
  },
  {
    word: 'Struktur',
    statement:
      'Als Entwicklungsingenieur habe ich gelernt, Dinge in klaren Schritten zu ordnen. Genau diesen Blick für Struktur und Details bringe ich in Ihre Vorsorge ein.',
  },
]

export function ValuesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.08 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)
  const activeIndex = previewIndex ?? selectedIndex

  const reveal = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity .8s ease ${delay}s, transform .8s ease ${delay}s`,
  })

  return (
    <section id="werte" ref={ref} className="overflow-hidden bg-cream py-20 md:py-28 lg:py-36" aria-labelledby="values-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 xl:px-28">
        <div className="grid gap-8 border-b border-border pb-12 md:gap-10 md:pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24 lg:pb-20">
          <div style={reveal(0)}>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gold">Werte</p>
            <h2 id="values-heading" className="text-balance font-serif text-[clamp(1.85rem,7.5vw,2.5rem)] leading-[1.08] text-foreground md:text-5xl xl:text-6xl">
              Wofür ich stehe.
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:pb-1 lg:text-xl" style={reveal(0.12)}>
            Drei Prinzipien, die jede Beratung und jede Zusammenarbeit tragen.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 xl:gap-32">
          <div
            className="border-t border-border"
            onMouseLeave={() => setPreviewIndex(null)}
            style={reveal(0.14)}
          >
            {values.map((value, index) => {
              const isActive = activeIndex === index
              const panelId = `value-panel-${index}`

              return (
                <div key={value.word} className="border-b border-border">
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-background md:py-8"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onMouseEnter={() => setPreviewIndex(index)}
                    onFocus={() => setPreviewIndex(index)}
                    onBlur={() => setPreviewIndex(null)}
                    onClick={() => {
                      setSelectedIndex(index)
                      setPreviewIndex(null)
                    }}
                  >
                    <span className="flex min-w-0 items-baseline gap-4 md:gap-7">
                      <span className={`text-[10px] tracking-[0.22em] transition-colors duration-300 ${isActive ? 'text-gold' : 'text-muted-foreground/60'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-balance font-serif text-[clamp(1.5rem,6.5vw,2rem)] leading-none transition-[color,transform] duration-500 md:text-4xl xl:text-5xl ${isActive ? 'translate-x-1 text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {value.word}
                      </span>
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[border-color,background-color,transform] duration-500 ${isActive ? 'rotate-45 border-foreground bg-foreground text-primary-foreground' : 'border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground'}`}>
                      <Plus className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    aria-hidden={!isActive}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-md pb-7 pl-8 text-base leading-relaxed text-muted-foreground sm:pl-10 md:pl-14">
                        {value.statement}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="hidden min-h-[430px] lg:flex lg:flex-col lg:justify-between" style={reveal(0.24)} aria-live="polite">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Haltung in der Praxis</span>
            </div>

            <div key={activeIndex} className="animate-value-reveal max-w-xl pb-8">
              <p className="font-serif text-5xl leading-[1.08] text-foreground xl:text-6xl">
                {values[activeIndex].word}
              </p>
              <p id={`value-panel-${activeIndex}`} className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground xl:text-xl">
                {values[activeIndex].statement}
              </p>
              <div className="mt-12 h-px w-full bg-border">
                <div className="h-px w-24 origin-left bg-gold animate-value-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
