'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const navLinks = siteConfig.nav

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/60 py-2.5 lg:py-4'
            : 'py-3 lg:py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="font-serif text-base tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300"
            style={{ letterSpacing: '0.15em' }}
          >
            {siteConfig.person.fullName}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-ink-muted hover:text-foreground transition-colors duration-300"
                style={{ letterSpacing: '0.12em', fontSize: '0.72rem' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#kontakt"
            className="hidden lg:inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            style={{ letterSpacing: '0.1em', fontSize: '0.72rem' }}
          >
            Gespräch vereinbaren
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative z-50 -mr-2.5 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                'block w-6 h-px bg-foreground transition-all duration-300',
                menuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-foreground transition-all duration-300',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-foreground transition-all duration-300',
                menuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center overflow-y-auto overscroll-contain bg-background px-6 py-24 transition-opacity duration-500 lg:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="my-auto flex w-full max-w-xs flex-col items-center gap-6" aria-label="Mobile Navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="flex min-h-11 items-center font-serif text-2xl text-foreground transition-colors duration-300 hover:text-accent"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleLinkClick}
            className="mt-4 text-xs tracking-widest uppercase px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            style={{ letterSpacing: '0.1em' }}
          >
            Gespräch vereinbaren
          </a>
        </nav>
      </div>
    </>
  )
}
