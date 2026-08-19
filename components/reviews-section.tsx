'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
import { siteConfig } from '@/config/site'

const PROVEN_EXPERT_URL = siteConfig.reviews.provenExpertUrl

type Review = {
  name: string
  role: string
  text: string
  rating: number
  initial: string
}

/**
 * Echte Kundenstimmen von ProvenExpert (öffentliches, verifiziertes Profil).
 * Stand: 10 veröffentlichte Bewertungen, durchweg "Sehr gut" / 5 Sterne.
 * Solange dieses Array leer ist, wird im Karussell-Bereich ein neutraler
 * Hinweis mit Verweis auf das ProvenExpert-Profil ausgegeben.
 * Format pro Eintrag:
 * { name: 'Vorname N.', role: 'Beruf, Ort', text: 'O-Ton', rating: 5, initial: 'V' }
 */
const reviews: Review[] = [
  {
    name: 'Günther',
    role: 'Verifizierte Bewertung · 13.08.2026',
    text: 'Ich wollte meine Verträge einfach mal grundlegend prüfen lassen. Was mich sofort überzeugt hat: Meine bestehenden Sachversicherungen waren bereits gut aufgestellt – Tobias hat das fair anerkannt und sie direkt in seinen Bestand übernommen. Damit habe ich jetzt endlich alles gebündelt und nur noch EINEN zentralen Ansprechpartner für alle Anliegen. Den entscheidenden Mehrwert gab es beim Thema Pflegezusatzversicherung. Er hat mir ganz ohne Panikmache, aber extrem klar aufgezeigt, welche finanziellen Konsequenzen eine Pflegelücke im Ernstfall haben kann. Absolut top Beratung, menschlich wie fachlich!',
    rating: 5,
    initial: 'G',
  },
  {
    name: 'Vicki',
    role: 'Verifizierte Bewertung · 13.08.2026',
    text: 'Das Thema Berufsunfähigkeit schiebt man ja gerne mal vor sich her, weil es oft trocken und kompliziert wirkt. Tobi hat das Ganze aber extrem entspannt aufgezogen. Er hat sich richtig Zeit genommen, alle Kleingedruckte-Details verständlich erklärt und mir nichts aufgetischt, was ich nicht brauche. Beratung auf Augenhöhe, ehrlich und auf den Punkt. Wer seine BU sauber und ohne Kopfschmerzen regeln will, ist bei ihm genau richtig!',
    rating: 5,
    initial: 'V',
  },
  {
    name: 'Linda',
    role: 'Verifizierte Bewertung · 13.08.2026',
    text: 'Ohne Tobias würde mein Geld immer noch auf dem Tagesgeldkonto rumdümpeln und meine Altersvorsorge wäre ein graues Tuch. Mit Fachwissen und genauem Blick für die individuelle Situation hat er meine finanzielle Vorsorge in die richtigen Bahnen gelenkt, so dass ich jetzt das Gefühl habe, gut für die Zukunft aufgestellt zu sein. DANKE!',
    rating: 5,
    initial: 'L',
  },
  {
    name: 'Carina Jungjohann',
    role: 'Verifizierte Bewertung · 10.08.2026',
    text: 'Tobias ist immer erreichbar, meldet sich schnell und hat auch sehr zeitnah Lösungen für meine Probleme parat. Bei den Gesprächen nimmt er sich immer viel Zeit und geht auf alles ein, was mir am Herzen liegt. Ich fühle mich im Versicherungsdschungel besser als vorher aufgehoben.',
    rating: 5,
    initial: 'C',
  },
  {
    name: 'Anna-Lena',
    role: 'Verifizierte Bewertung · 09.08.2026',
    text: 'Ich habe die Beratung als durchweg positiv erlebt und mich von Anfang an sehr gut aufgehoben gefühlt. Er nimmt sich wirklich Zeit, hört genau zu und versucht zunächst zu verstehen, was sein Gegenüber tatsächlich braucht. Man hat nicht das Gefühl, dass es darum geht, einfach irgendein Produkt zu vermitteln – stattdessen steht die individuelle Situation mit ihren Zielen und Wünschen im Mittelpunkt. Ich habe mich fachlich wie menschlich bestens aufgehoben gefühlt und kann ihn als Berater aus voller Überzeugung weiterempfehlen. Verdiente 5 Sterne!',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Robert Isbitzki',
    role: 'Verifizierte Bewertung · 09.08.2026',
    text: 'Hier wird man noch ehrlich beraten und die Ausführung ist erstklassig – Qualität aus erster Hand. Ich kann den Service nur wärmstens weiterempfehlen!',
    rating: 5,
    initial: 'R',
  },
  {
    name: 'Anonym',
    role: 'Verifizierte Bewertung · 08.08.2026',
    text: 'Bin ohne große Erwartungen rein und war echt begeistert. Tobi hat ein paar Punkte beim Thema Steuern und Vorsorge rausgeholt, die ich so gar nicht auf dem Schirm hatte. Extrem geiler Input!',
    rating: 5,
    initial: '?',
  },
  {
    name: 'Sebastian',
    role: 'Verifizierte Bewertung · 08.08.2026',
    text: 'Das Gespräch mit Tobias war einfach nur cool. Er guckt sich wirklich alles an – von Absicherung über ETFs bis Immobilien – und schneidet alles genau auf einen zu. Kein Aufquatschen, einfach ehrlich. 10/10!',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Alex',
    role: 'Verifizierte Bewertung · 07.08.2026',
    text: 'Super nette Beratung und ich bin positiv überrascht, welch umfangreiches Wissen vor allem im Bereich Investment vorhanden ist. Wusste gar nicht, dass man beim Investieren in ETFs steuerliche Vorteile haben kann. Großes Dankeschön für die Beratung.',
    rating: 5,
    initial: 'A',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const ref = useRef<HTMLElement>(null)
  const touchStart = useRef<number | null>(null)
  const cardContentRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.05 })
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cardHeight, setCardHeight] = useState<number>()

  const select = useCallback((index: number) => {
    if (reviews.length === 0) return
    setActive((index + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    if (paused || !inView || reviews.length < 2) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 7000)
    return () => window.clearInterval(timer)
  }, [paused, inView])

  // Measure the card content on every review change (and viewport resize) so
  // the outer frame can animate smoothly to the new height instead of
  // snapping — the card "breathes" with each review's text length.
  useLayoutEffect(() => {
    const node = cardContentRef.current
    if (!node) return
    setCardHeight(node.scrollHeight)

    const observer = new ResizeObserver(() => setCardHeight(node.scrollHeight))
    observer.observe(node)
    return () => observer.disconnect()
  }, [active])

  const review = reviews[active]

  return (
    <section
      id="bewertungen"
      ref={ref}
      className="bg-ink py-20 md:py-28 lg:py-36"
      aria-labelledby="reviews-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 xl:px-28">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold transition-opacity duration-700" style={{ opacity: inView ? 1 : 0 }}>Was Kunden sagen</p>
            <h2 id="reviews-heading" className="max-w-xl text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight text-primary-foreground md:text-4xl xl:text-5xl" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity .7s ease .1s, transform .7s ease .1s' }}>Vertrauen, das spricht.</h2>
          </div>
          <a
            href={PROVEN_EXPERT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-4 self-start border border-primary-foreground/10 px-4 py-3 text-primary-foreground transition-colors hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto sm:px-5 md:shrink-0 md:self-auto"
            aria-label={`Kundenbewertungen & Erfahrungen zu ${siteConfig.person.fullName} bei ProvenExpert ansehen`}
            title={`Kundenbewertungen & Erfahrungen zu ${siteConfig.person.fullName}. Mehr Infos anzeigen.`}
          >
            <Image
              src={siteConfig.images.seal}
              alt={`Erfahrungen & Bewertungen zu ${siteConfig.person.fullName} auf ProvenExpert`}
              width={56}
              height={67}
              className="h-16 w-auto shrink-0"
            />
            <div className="border-l border-primary-foreground/10 pl-4">
              <p className="text-[0.625rem] uppercase tracking-widest text-primary-foreground/40">Verifiziert von</p>
              <p className="text-sm font-medium">ProvenExpert</p>
              <p className="mt-1 whitespace-nowrap text-xs text-primary-foreground/60">Profil ansehen</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center border-l border-primary-foreground/10 pl-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden">
                <span
                  id={siteConfig.reviews.provenExpertWidgetId}
                  className="block h-[150px] w-[150px]"
                  style={{ transform: 'scale(0.4267)', transformOrigin: 'top left' }}
                  aria-label="ProvenExpert-Bewertungswidget"
                />
              </div>
            </div>
          </a>
          <Script
            src={siteConfig.reviews.provenExpertWidgetSrc}
            strategy="lazyOnload"
          />
        </div>

        {reviews.length === 0 ? (
          <div
            className="border border-primary-foreground/10 p-6 sm:p-8 md:p-12 lg:p-16"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity .8s ease .2s, transform .8s ease .2s' }}
          >
            <Quote className="h-12 w-12 text-primary-foreground/[0.08] md:h-16 md:w-16" strokeWidth={1} aria-hidden="true" />
            <p className="mt-6 max-w-2xl text-pretty font-serif text-[1.0625rem] leading-relaxed text-primary-foreground md:text-xl">
              Mein ProvenExpert-Profil ist neu. Statt erfundener Zitate finden Sie hier
              künftig ausschließlich Stimmen von Mandanten, die ihre Freigabe erteilt haben.
            </p>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-primary-foreground/50">
              Bis dahin gilt: Fragen Sie mich direkt nach Referenzen – oder überzeugen Sie
              sich im Erstgespräch selbst von meiner Arbeitsweise.
            </p>
            <a
              href="#kontakt"
              className="mt-10 inline-flex min-h-12 items-center gap-3 bg-gold px-7 py-4 text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-gold-light"
              style={{ letterSpacing: '0.12em' }}
            >
              Erstgespräch anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ) : (
          <div
            className="border border-primary-foreground/10"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity .8s ease .2s, transform .8s ease .2s' }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') select(active - 1)
              if (event.key === 'ArrowRight') select(active + 1)
            }}
            onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return
              const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current
              if (Math.abs(distance) > 50) select(active + (distance < 0 ? 1 : -1))
              touchStart.current = null
            }}
            tabIndex={0}
            role="region"
            aria-roledescription="Karussell"
            aria-label="Kundenbewertungen"
          >
            <div
              className="overflow-hidden transition-[height] duration-500 ease-in-out"
              style={{ height: cardHeight }}
            >
              <div ref={cardContentRef} className="grid lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]">
                <article className="relative flex min-h-[14rem] flex-col overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16" aria-live="polite">
                  <Quote className="absolute right-8 top-8 h-20 w-20 text-primary-foreground/[0.04] md:right-14 md:top-12 md:h-28 md:w-28" strokeWidth={1} aria-hidden="true" />
                  <div key={active} className="animate-fade-up">
                    <StarRating count={review.rating} />
                    <blockquote className="mt-6 max-w-3xl text-pretty font-serif text-[1.0625rem] leading-relaxed text-primary-foreground md:mt-8 md:text-xl">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                  </div>
                  <footer key={`author-${active}`} className="mt-10 flex animate-fade-in items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-ink" aria-hidden="true">{review.initial}</div>
                    <div><p className="text-[0.9375rem] font-medium text-primary-foreground">{review.name}</p><p className="text-[0.8125rem] leading-snug text-primary-foreground/50">{review.role}</p></div>
                  </footer>
                </article>

                <aside className="flex flex-col justify-between gap-6 border-t border-primary-foreground/10 p-6 md:p-8 lg:border-l lg:border-t-0" aria-label="Bewertung auswählen">
                  <div className="flex items-baseline justify-between border-b border-primary-foreground/10 pb-5">
                    <p className="font-serif text-3xl text-primary-foreground">{String(active + 1).padStart(2, '0')}</p>
                    <p className="text-xs tracking-widest text-primary-foreground/35">/ {String(reviews.length).padStart(2, '0')}</p>
                  </div>
                  <div className="hidden flex-col lg:flex">
                    {reviews.map((item, index) => (
                      <button key={item.name} type="button" onClick={() => select(index)} className="group flex items-center gap-3 border-b border-primary-foreground/5 py-3 text-left focus-visible:outline-none" aria-current={active === index ? 'true' : undefined}>
                        <span className={`h-px transition-all duration-300 ${active === index ? 'w-6 bg-gold' : 'w-3 bg-primary-foreground/20 group-hover:w-5'}`} />
                        <span className={`text-xs transition-colors ${active === index ? 'text-primary-foreground' : 'text-primary-foreground/35 group-hover:text-primary-foreground/65'}`}>{item.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 lg:hidden" aria-hidden="true">{reviews.map((_, index) => <span key={index} className={`h-1 rounded-full transition-all ${active === index ? 'w-6 bg-gold' : 'w-1 bg-primary-foreground/20'}`} />)}</div>
                    <div className="ml-auto flex gap-2">
                      <button type="button" onClick={() => select(active - 1)} className="flex h-11 w-11 items-center justify-center border border-primary-foreground/15 text-primary-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" aria-label="Vorherige Bewertung"><ArrowLeft className="h-4 w-4" aria-hidden="true" /></button>
                      <button type="button" onClick={() => select(active + 1)} className="flex h-11 w-11 items-center justify-center bg-gold text-ink transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" aria-label="Nächste Bewertung"><ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
