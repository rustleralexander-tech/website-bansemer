import { siteConfig } from '@/config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-white/5 bg-ink-deepest px-6 py-12 md:px-16 lg:px-20 xl:px-28"
      aria-label="Seitenfooter"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          {/* Brand */}
          <div>
            <p
              className="font-serif text-sm tracking-widest uppercase text-white mb-1"
              style={{ letterSpacing: '0.15em' }}
            >
              {siteConfig.person.fullName}
            </p>
            <p className="text-xs text-white/40">
              {siteConfig.person.role} &middot; {siteConfig.address.city}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6" aria-label="Footer Navigation">
            {siteConfig.footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-xs text-white/40 transition-colors duration-300 hover:text-white"
                style={{ letterSpacing: '0.05em' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/30">
            &copy; {year} {siteConfig.person.fullName}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
