import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { siteConfig, absoluteUrl } from '@/config/site'

export const metadata: Metadata = {
  title: 'Karriere & Zusammenarbeit',
  description: `${siteConfig.person.fullName} spricht Menschen an, die sich für eine berufliche Zusammenarbeit in der Vorsorge- und Finanzberatung interessieren – in ${siteConfig.region.short} und Umgebung.`,
  alternates: { canonical: absoluteUrl('/karriere') },
}

const reasons = [
  {
    number: '01',
    title: 'Ein Weg, den ich selbst gegangen bin',
    description:
      'Ich war Entwicklungsingenieur in der Automobilbranche, bevor ich in die Finanzberatung gewechselt bin. Ich weiß, wie sich ein solcher Schritt anfühlt – und welche Fragen dabei aufkommen.',
  },
  {
    number: '02',
    title: 'Eine sinnvolle Aufgabe',
    description:
      'Zusammen entdecken wir neue Verdienstmöglichkeiten und den Spaß daran, einer Aufgabe nachzugehen, die wirklich etwas bewirkt: Menschen dabei zu helfen, ihre Ziele zu erreichen.',
  },
  {
    number: '03',
    title: 'Ruhe und Struktur statt Druck',
    description:
      'Wie in der Beratung meiner Kunden gilt auch hier: kein Verkaufsdruck, sondern ein strukturierter, ehrlicher Ansatz – gemeinsam entwickelt, in Ihrem Tempo.',
  },
  {
    number: '04',
    title: 'Zukunftsmarkt statt Modethema',
    description:
      'Vorsorge, Absicherung und Vermögensaufbau bleiben relevant – unabhängig von Konjunktur und Technologiezyklen. Ein Markt, in dem Sorgfalt und Verlässlichkeit zählen.',
  },
]

const profiles = [
  {
    title: 'Menschen mit analytischer Denkweise',
    description:
      'Sie arbeiten gerne strukturiert und denken in klaren Schritten statt in Bauchgefühl. Diese Denkweise ist in der Beratung selten – und ein echter Vorteil.',
  },
  {
    title: 'Quereinsteiger mit Ambition',
    description:
      'Sie kommen aus einer anderen Branche, möchten etwas Eigenes aufbauen und sind bereit, sich fachlich einzuarbeiten. Vorerfahrung in der Finanzwelt ist keine Voraussetzung.',
  },
  {
    title: 'Menschen, die ein zweites Standbein suchen',
    description:
      'Der Einstieg ist auch begleitend zum bestehenden Beruf möglich. Tempo und Umfang bestimmen Sie selbst.',
  },
]

const expectations = [
  'Ein offenes, ehrliches Gespräch über Ihre Möglichkeiten',
  'Persönliche Begleitung statt anonymer Onboarding-Strecke',
  'Flexible Zeiteinteilung und leistungsorientierte Vergütung',
  'Der Blick auf eine sinnvolle Aufgabe – nicht nur auf ein Produkt',
]

export default function KarrierePage() {
  return (
    <>
      <header className="border-b border-border" aria-label="Seitenkopf">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-16 lg:px-20 xl:px-28">
          <Link
            href="/"
            className="font-serif text-base uppercase text-foreground transition-colors duration-300 hover:text-accent"
            style={{ letterSpacing: '0.15em' }}
          >
            {siteConfig.person.fullName}
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest text-ink-muted transition-colors duration-300 hover:text-foreground"
            style={{ letterSpacing: '0.1em' }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main>
        {/* Intro */}
        <section
          className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24 lg:px-20 lg:py-32 xl:px-28"
          aria-labelledby="karriere-heading"
        >
          <p
            className="mb-6 text-xs uppercase text-gold"
            style={{ letterSpacing: '0.25em' }}
          >
            Karriere &amp; Zusammenarbeit
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <h1
              id="karriere-heading"
              className="text-balance font-serif text-[clamp(1.85rem,7.5vw,2.75rem)] leading-[1.12] text-foreground md:text-5xl"
            >
              Vom Ingenieur
              <br />
              <em className="not-italic text-gold">zum Vorsorgeberater.</em>
            </h1>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-muted">
              <p>
                Interessieren Sie sich für eine berufliche Zusammenarbeit in der Vorsorge-
                und Finanzberatung? Ich freue mich über den Austausch mit Menschen, die
                Lust haben, gemeinsam etwas aufzubauen.
              </p>
              <p>
                Zusammen entdecken wir neue Verdienstmöglichkeiten und den Spaß daran,
                einer sinnvollen Aufgabe nachzugehen und Menschen zu helfen – ich habe
                diesen Wechsel aus der Ingenieurwelt selbst vollzogen.
              </p>
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section
          className="bg-cream py-16 md:py-24 lg:py-28"
          aria-labelledby="reasons-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 xl:px-28">
            <h2
              id="reasons-heading"
              className="mb-12 max-w-xl text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight text-foreground md:mb-16 md:text-4xl"
            >
              Was die Zusammenarbeit ausmacht.
            </h2>
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="flex flex-col gap-4 bg-background p-7 sm:p-10 md:p-12"
                >
                  <span
                    className="font-mono text-xs text-gold"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    {reason.number}
                  </span>
                  <h3 className="text-balance font-serif text-xl leading-snug text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-muted md:text-[0.9375rem]">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section
          className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24 lg:px-20 lg:py-28 xl:px-28"
          aria-labelledby="profiles-heading"
        >
          <p
            className="mb-6 text-xs uppercase text-gold"
            style={{ letterSpacing: '0.25em' }}
          >
            Wen ich suche
          </p>
          <h2
            id="profiles-heading"
            className="mb-12 max-w-xl text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight text-foreground md:mb-16 md:text-4xl"
          >
            Drei Wege in die Beratung.
          </h2>
          <div className="flex flex-col">
            {profiles.map((profile, index) => (
              <div
                key={profile.title}
                className="flex flex-col gap-4 border-b border-border py-8 last:border-0 md:flex-row md:gap-12"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-mono text-xs font-bold text-ink"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-balance font-serif text-xl leading-snug text-foreground">
                    {profile.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-muted md:text-[0.9375rem]">
                    {profile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expectations + CTA */}
        <section
          className="bg-ink-deep py-16 md:py-24 lg:py-28"
          aria-labelledby="expectations-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-16 lg:grid-cols-2 lg:gap-24 lg:px-20 xl:px-28">
            <div>
              <p
                className="mb-6 text-xs uppercase text-gold"
                style={{ letterSpacing: '0.25em' }}
              >
                Was Sie erwartet
              </p>
              <h2
                id="expectations-heading"
                className="mb-8 text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight text-white md:text-4xl"
              >
                Transparent, von Anfang an.
              </h2>
              <ul className="flex flex-col gap-4">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
                    <span className="text-base leading-relaxed text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-8 border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <p className="text-pretty font-serif text-xl leading-snug text-white md:text-2xl">
                &ldquo;{siteConfig.person.quote}&rdquo;
              </p>
              <p className="text-base leading-relaxed text-white/60">
                Wenn Sie wissen möchten, ob dieser Weg zu Ihnen passt: Schreiben Sie mir
                oder rufen Sie an. Ein erstes Gespräch ist unverbindlich und ehrlich –
                inklusive der Punkte, die gegen einen Wechsel sprechen.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={`${siteConfig.contact.emailHref}?subject=${encodeURIComponent('Interesse an einer Zusammenarbeit')}`}
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-gold px-7 py-4 text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-gold-light sm:self-start"
                  style={{ letterSpacing: '0.12em' }}
                >
                  Gespräch anfragen
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path
                      d="M1 5h12M8 1l5 4-5 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex min-h-11 items-center text-xs uppercase tracking-widest text-white/60 transition-colors duration-300 hover:text-white"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
