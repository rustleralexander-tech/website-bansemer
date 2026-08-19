'use client'

import { useRef, useState } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { sendContactMessage } from '@/app/actions/send-contact-message'
import { siteConfig } from '@/config/site'

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { threshold: 0.05 })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    const result = await sendContactMessage(formState)

    setIsSubmitting(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setErrorMessage(result.error ?? 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.')
    }
  }

  return (
    <section
      id="kontakt"
      ref={ref}
      className="bg-ink-deep py-20 md:py-28 lg:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="px-6 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA text */}
          <div
            className={`reveal-left ${inView ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}
          >
            <p
              className="mb-6 text-xs uppercase tracking-[0.25em] text-gold"
              style={{ letterSpacing: '0.25em' }}
            >
              Kontakt
            </p>
            <h2
              id="contact-heading"
              className="mb-8 text-balance font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] leading-tight text-white md:text-4xl xl:text-5xl"
            >
              Lassen Sie uns durchrechnen.
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-white/60 md:mb-12">
              Das erste Gespräch ist unverbindlich und kostet Sie nichts außer Zeit.
              Kein Verkaufsdruck, keine Standardprodukte – erst schauen wir uns Ihre
              Situation an, dann entscheiden Sie.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <a
                href={siteConfig.contact.phoneHref}
                className="group flex min-h-11 items-center gap-4 py-0.5"
                aria-label="Anrufen"
              >
                <div
                  className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                    <path d="M2 3.5c0-.83.67-1.5 1.5-1.5h1.67a1 1 0 0 1 .95.68l.8 2.4a1 1 0 0 1-.3 1.06L5.7 7.03a9.18 9.18 0 0 0 3.28 3.27l.88-.92a1 1 0 0 1 1.06-.3l2.4.8A1 1 0 0 1 14 10.83v1.67c0 .83-.67 1.5-1.5 1.5C6.1 14 2 9.9 2 3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-white/40">Telefon</p>
                  <p className="text-white text-sm group-hover:text-gold transition-colors duration-300">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.contact.emailHref}
                className="group flex min-h-11 items-center gap-4 py-0.5"
                aria-label="E-Mail schreiben"
              >
                <div
                  className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                    <rect x="2" y="4" width="12" height="9" rx="1.5" />
                    <path d="M2 5.5l6 4 6-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-white/40">E-Mail</p>
                  <p className="text-white text-sm group-hover:text-gold transition-colors duration-300">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>

              <div className="flex min-h-11 items-center gap-4 py-0.5">
                <div
                  className="w-10 h-10 border border-white/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                    <path d="M8 14.5s5-4.1 5-7.7a5 5 0 0 0-10 0c0 3.6 5 7.7 5 7.7z" />
                    <circle cx="8" cy="6.6" r="1.9" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-white/40">Beratungsgebiet</p>
                  <p className="text-white text-sm">{siteConfig.region.serviceArea}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`reveal-right ${inView ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': '0.25s' } as React.CSSProperties}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-6 py-20">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-gold text-ink-deep"
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="4 10 8 14 16 6" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white">Vielen Dank.</h3>
                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  Ihre Nachricht ist bei mir angekommen. Ich melde mich innerhalb von
                  24 Stunden persönlich bei Ihnen.
                </p>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                  Alternativ erreichen Sie mich auch direkt unter{' '}
                  <a href={siteConfig.contact.emailHref} className="underline hover:text-white">
                    {siteConfig.contact.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50" style={{ letterSpacing: '0.15em' }}>
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="min-h-12 border border-white/10 bg-transparent px-4 py-3 text-base text-white transition-colors duration-300 placeholder:text-white/25 focus:border-gold focus:outline-none"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50" style={{ letterSpacing: '0.15em' }}>
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="min-h-12 border border-white/10 bg-transparent px-4 py-3 text-base text-white transition-colors duration-300 placeholder:text-white/25 focus:border-gold focus:outline-none"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/50" style={{ letterSpacing: '0.15em' }}>
                    Telefon (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="min-h-12 border border-white/10 bg-transparent px-4 py-3 text-base text-white transition-colors duration-300 placeholder:text-white/25 focus:border-gold focus:outline-none"
                    placeholder="+49 ..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50" style={{ letterSpacing: '0.15em' }}>
                    Ihre Situation *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="resize-none border border-white/10 bg-transparent px-4 py-3 text-base leading-relaxed text-white transition-colors duration-300 placeholder:text-white/25 focus:border-gold focus:outline-none"
                    placeholder="Was beschäftigt Sie aktuell? Was möchten Sie erreichen?"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    checked={formState.privacy}
                    onChange={handleChange}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-gold"
                  />
                  <label htmlFor="privacy" className="text-[0.8125rem] leading-relaxed text-white/50">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <a href="/datenschutz" className="text-white/60 underline hover:text-white transition-colors">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.*
                  </label>
                </div>

                {errorMessage && (
                  <p role="alert" className="text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex min-h-13 w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {isSubmitting ? 'Wird gesendet …' : 'Nachricht senden'}
                  {!isSubmitting && (
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
