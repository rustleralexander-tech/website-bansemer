import type { Metadata } from 'next'
import { LegalBlock, LegalLayout } from '@/components/legal-layout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Erstinformation',
  description: `Kunden-Erstinformation nach § 15 Versicherungsvermittlungsverordnung (VersVermV) von ${siteConfig.person.fullName}.`,
  robots: { index: false, follow: true },
}

export default function ErstinformationPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Kunden-Erstinformation"
      intro="Erstinformation nach § 15 Versicherungsvermittlungsverordnung (VersVermV)."
    >
      <LegalBlock heading="1. Vermittler und Geschäftsanschrift">
        <p>
          {siteConfig.person.fullName}
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.city}
        </p>
        <p>
          Telefon:{' '}
          <a href={siteConfig.contact.phoneHref} className="underline hover:text-foreground">
            {siteConfig.contact.phoneNational}
          </a>
          <br />
          E-Mail:{' '}
          <a href={siteConfig.contact.emailHref} className="underline hover:text-foreground">
            {siteConfig.contact.email}
          </a>
          <br />
          Webseite: {siteConfig.domain}
        </p>
      </LegalBlock>

      <LegalBlock heading="2. Status des Vermittlers nach der Gewerbeordnung">
        <p>Ich bin als {siteConfig.legal.status} tätig.</p>
      </LegalBlock>

      <LegalBlock heading="3. Vertragliche Bindung als gebundener Handelsvertreter">
        <p>
          Als gebundener Handelsvertreter vermittle ich ausschließlich Versicherungs- und
          Finanzprodukte des Unternehmens, mit dem ein entsprechendes Vertragsverhältnis
          besteht. Ich bin nicht für mehrere Versicherer im Sinne eines Versicherungsmaklers
          tätig.
        </p>
      </LegalBlock>

      <LegalBlock heading="4. Registerstelle und Registernummer">
        <p>
          Eingetragen im Vermittlerregister unter der Registernummer:{' '}
          {siteConfig.legal.registerNumber}.
        </p>
        <p>
          Die Eintragung kann überprüft werden bei der gemeinsamen Registerstelle:
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

      <LegalBlock heading="5. Beratung und Vergütung">
        <p>
          <span className="font-medium text-foreground">Beratung:</span> Im Rahmen meiner
          Tätigkeit wird eine Beratung angeboten.
        </p>
        <p>
          <span className="font-medium text-foreground">Vergütung:</span> Für die Vermittlung
          und die Betreuung von Versicherungsverträgen erhalte ich von der jeweiligen
          Versicherungsgesellschaft eine Provision, die in der Versicherungsprämie bereits
          enthalten ist. Ich erhalte keine direkten Honorare von Ihnen als Kunde.
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Schlichtungsstellen für außergerichtliche Streitbeilegung">
        <p>
          Bei Streitigkeiten zwischen Versicherungsvermittlern und Versicherungsnehmern
          können folgende Schlichtungsstellen angerufen werden:
        </p>
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
    </LegalLayout>
  )
}
