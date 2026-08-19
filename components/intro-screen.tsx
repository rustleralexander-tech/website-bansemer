'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'

interface IntroScreenProps {
  onComplete: () => void
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'done'>('visible')

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase('exiting'), 2800)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 3400)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink-deep"
      style={{
        transition: phase === 'exiting' ? 'opacity 0.6s ease, transform 0.6s ease' : undefined,
        opacity: phase === 'exiting' ? 0 : 1,
        transform: phase === 'exiting' ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: phase === 'exiting' ? 'none' : undefined,
      }}
      aria-hidden="true"
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Thin horizontal rule above name */}
      <div
        className="mb-8 h-px w-12 origin-center bg-gold"
        style={{ animation: 'lineGrow 1.2s ease 0.3s both' }}
      />

      {/* Name */}
      <h1
        className="px-6 text-center font-serif text-[clamp(1.35rem,7vw,3rem)] uppercase text-white"
        style={{
          animation: 'fadeUp 0.9s ease 0.5s both',
          letterSpacing: '0.14em',
        }}
      >
        {siteConfig.person.fullName}
      </h1>

      {/* Claim */}
      <p
        className="mt-4 px-6 text-center text-[0.6rem] uppercase text-gold sm:text-xs md:text-sm"
        style={{
          animation: 'fadeUp 0.9s ease 0.8s both',
          letterSpacing: '0.22em',
        }}
      >
        {siteConfig.person.tagline}
      </p>

      {/* Thin horizontal rule below */}
      <div
        className="mt-8 h-px w-12 origin-center bg-gold"
        style={{ animation: 'lineGrow 1.2s ease 1.1s both' }}
      />
    </div>
  )
}
