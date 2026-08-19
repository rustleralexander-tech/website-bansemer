import Link from 'next/link'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/config/site'

interface LegalLayoutProps {
  eyebrow: string
  title: string
  intro?: string
  children: React.ReactNode
}

export function LegalLayout({ eyebrow, title, intro, children }: LegalLayoutProps) {
  return (
    <>
      <header
        className="border-b border-border"
        aria-label="Seitenkopf"
      >
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

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-16 md:py-24 lg:px-20">
        <p
          className="mb-5 text-xs uppercase text-gold"
          style={{ letterSpacing: '0.25em' }}
        >
          {eyebrow}
        </p>
        <h1 className="text-balance font-serif text-[clamp(1.75rem,7vw,2.5rem)] leading-tight text-foreground md:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 text-base leading-relaxed text-ink-muted">{intro}</p>
        ) : null}

        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </main>

      <Footer />
    </>
  )
}

export function LegalBlock({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3 border-t border-border pt-8">
      <h2 className="font-serif text-xl leading-snug text-foreground">{heading}</h2>
      <div className="flex flex-col gap-3 text-base leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  )
}
