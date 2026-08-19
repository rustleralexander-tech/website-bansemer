'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

export function StorySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      id="geschichte"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 px-6 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto"
      aria-labelledby="story-heading"
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:items-stretch lg:gap-24">
        {/* Image */}
        <div
          className={`reveal-left relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] lg:aspect-auto lg:h-full ${inView ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}
        >
          <Image
            src={siteConfig.images.story}
            alt={`${siteConfig.person.fullName} – entspannt und authentisch`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Edge fades — same technique as the hero portrait */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{ background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16"
            style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16"
            style={{ background: 'linear-gradient(to left, var(--background) 0%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16"
            style={{ background: 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)' }}
            aria-hidden="true"
          />

          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 z-10 h-1 w-16 bg-gold" aria-hidden="true" />
        </div>

        {/* Text */}
        <div
          className={`reveal-right ${inView ? 'is-visible' : ''}`}
          style={{ '--reveal-delay': '0.25s' } as React.CSSProperties}
        >
          <p
            className="mb-6 text-xs uppercase tracking-[0.25em] text-gold"
            style={{ letterSpacing: '0.25em' }}
          >
            Die Geschichte
          </p>
          <h2
            id="story-heading"
            className="mb-8 text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight md:text-4xl xl:text-5xl"
          >
            Vom Steuergerät zur Finanzarchitektur.
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-ink-muted">
            <p>
              Mein Weg beginnt nicht in der Finanzwelt, sondern in der Technik: duales Studium
              Elektrotechnik an der Hochschule Bonn-Rhein-Sieg, gelernter Elektroniker für
              Betriebstechnik, anschließend Master in Elektrotechnik. Danach Software für
              Steuergeräte in der Automobilbranche – bei Bertrandt in Köln, bei Aptiv und
              heute bei Dauch in Lohmar.
            </p>
            <p>
              2018 sprach ich mit einem Arbeitskollegen erstmals über ETFs – ein Begriff, der
              mir damals völlig fremd war. Anfang 2021 ließ ich mich umfassend aufklären und
              startete meine ersten Investments. Mit 33 fühlte ich mich wie ein Spätzünder.
              Genau das wurde mein Katalysator: Ich habe mich tief in Aktien, ETFs und
              Immobilien eingearbeitet und diese Themen nicht mehr losgelassen.
            </p>
            <p>
              Parallel stellte ich mir die entscheidende Frage: Was würde ich den ganzen Tag
              tun, wenn Zeit und Geld keine Rolle spielten? Wenn ich arbeiten KÖNNTE, aber
              nicht mehr MÜSSTE? Zwei Leidenschaften blieben übrig: Autos und Finanzen.
            </p>
            <p>
              Als sich mir der Weg in die Beratung eröffnete, steckte ich mitten in einer
              Trading-Ausbildung. Eigentlich hatte ich keine Zeit mehr. Doch je mehr ich über
              Arbeitsweise, Knowhow und Möglichkeiten erfuhr, desto klarer wurde die
              Entscheidung: für die Beratung, gegen das Daytrading.
            </p>
            <p className="font-medium text-foreground">
              Heute verbinde ich meine analytische Leidenschaft mit dem Ziel, andere Menschen
              auf ihrem Weg in die finanzielle Unabhängigkeit zu begleiten. Genau das bedeutet
              für mich echte Lebensqualität.
            </p>
          </div>

          {/* Signature-style quote */}
          <div
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="mb-4 text-pretty font-serif text-lg italic leading-snug text-foreground md:text-xl">
              &ldquo;{siteConfig.person.quote}&rdquo;
            </p>
            <p
              className="text-xs uppercase tracking-[0.2em] text-gold"
              style={{ letterSpacing: '0.2em' }}
            >
              {siteConfig.person.fullName}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
