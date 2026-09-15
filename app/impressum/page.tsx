import type { Metadata } from 'next'
import { LegalBlock, LegalLayout } from '@/components/legal-layout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Angaben gemäß § 5 DDG und § 18 MStV für die Website von ${siteConfig.person.fullName}.`,
  robots: { index: false, follow: true },
}

export default function ImpressumPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)."
    >
      <LegalBlock heading="Anbieter">
        <p>
          {siteConfig.person.fullName}
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.city}
          <br />
          {siteConfig.address.country}
        </p>
      </LegalBlock>

      <LegalBlock heading="Kontakt">
        <p>
          Telefon:{' '}
          <a href={siteConfig.contact.phoneHref} className="underline hover:text-foreground">
            {siteConfig.contact.phone}
          </a>
          <br />
          E-Mail:{' '}
          <a href={siteConfig.contact.emailHref} className="underline hover:text-foreground">
            {siteConfig.contact.email}
          </a>
          <br />
          Website: {siteConfig.domain}
        </p>
      </LegalBlock>

      <LegalBlock heading="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          {siteConfig.person.fullName}
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.city}
        </p>
      </LegalBlock>

      <LegalBlock heading="Berufsbezeichnung und Vermittlerstatus">
        <p>Berufsbezeichnung: {siteConfig.person.role}</p>
        <p>
          Tätigkeit als {siteConfig.legal.status}. Als gebundener Handelsvertreter
          vermittle ich ausschließlich Produkte des Versicherers, mit dem ein
          entsprechendes Vertragsverhältnis besteht.
        </p>
      </LegalBlock>

      <LegalBlock heading="Registereintrag und zuständige Stellen">
        <p>Registernummer im Vermittlerregister: {siteConfig.legal.registerNumber}</p>
        <p>
          Zuständige Aufsichts- und Erlaubnisbehörde:
          <br />
          {siteConfig.legal.supervisoryAuthority.name}
          <br />
          {siteConfig.legal.supervisoryAuthority.address}
        </p>
        <p>
          Gemeinsame Registerstelle:
          <br />
          {siteConfig.legal.registerOffice.name}
          <br />
          {siteConfig.legal.registerOffice.address}
          <br />
          Telefon: {siteConfig.legal.registerOffice.phone} (
          {siteConfig.legal.registerOffice.phoneNote})
          <br />
          <a
            href={siteConfig.legal.registerOffice.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            {siteConfig.legal.registerOffice.urlLabel}
          </a>
        </p>
      </LegalBlock>

      <LegalBlock heading="Außergerichtliche Streitbeilegung">
        {siteConfig.legal.ombudsmen.map((ombudsman) => (
          <p key={ombudsman.name}>
            {ombudsman.name}
            <br />
            {ombudsman.address}
            <br />
            <a
              href={ombudsman.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              {ombudsman.urlLabel}
            </a>
          </p>
        ))}
      </LegalBlock>

      <LegalBlock heading="Haftung für Inhalte und Links">
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
          übernommen werden. Die Inhalte dienen der allgemeinen Information und stellen
          keine Anlageberatung im Sinne des Wertpapierhandelsgesetzes sowie keine Steuer-
          oder Rechtsberatung dar.
        </p>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein
          Einfluss besteht. Für diese fremden Inhalte ist stets der jeweilige Anbieter
          verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße
          erkennbar.
        </p>
      </LegalBlock>

      <LegalBlock heading="Urheberrecht">
        <p>
          Die auf dieser Website veröffentlichten Inhalte, Texte und Bilder unterliegen dem
          deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung
          außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des
          jeweiligen Rechteinhabers.
        </p>
      </LegalBlock>
    </LegalLayout>
  )
}
