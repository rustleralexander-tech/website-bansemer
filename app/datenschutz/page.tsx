import type { Metadata } from 'next'
import { LegalBlock, LegalLayout } from '@/components/legal-layout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: `Informationen zur Verarbeitung personenbezogener Daten auf der Website von ${siteConfig.person.fullName}.`,
  robots: { index: false, follow: true },
}

export default function DatenschutzPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      intro="Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 und 14 DSGVO."
    >
      <LegalBlock heading="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          {siteConfig.address.company}
          <br />
          {siteConfig.person.fullName}
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.city}
          <br />
          Telefon: {siteConfig.contact.phone}
          <br />
          E-Mail:{' '}
          <a href={siteConfig.contact.emailHref} className="underline hover:text-foreground">
            {siteConfig.contact.email}
          </a>
        </p>
      </LegalBlock>

      <LegalBlock heading="2. Zugriffsdaten und Server-Logfiles">
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch
          Informationen in Server-Logfiles gespeichert, die Ihr Browser übermittelt. Dazu
          gehören insbesondere Browsertyp und -version, verwendetes Betriebssystem,
          Referrer-URL, Uhrzeit der Serveranfrage und die IP-Adresse in gekürzter oder
          vollständiger Form.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in
          der technisch fehlerfreien Bereitstellung und der Sicherheit der Website. Die Daten
          werden nach kurzer Zeit gelöscht, soweit sie nicht zur Aufklärung eines
          Sicherheitsvorfalls benötigt werden.
        </p>
      </LegalBlock>

      <LegalBlock heading="3. Kontaktaufnahme und Kontaktformular">
        <p>
          Wenn Sie mich per E-Mail, Telefon oder über das Kontaktformular dieser Website
          kontaktieren, verarbeite ich die von Ihnen übermittelten Angaben (Name, E-Mail-Adresse,
          gegebenenfalls Telefonnummer und Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer
          Anfrage.
        </p>
        <p>
          Das Kontaktformular dieser Website speichert keine Daten auf dem Server. Beim Absenden
          wird eine vorbereitete E-Mail in Ihrem lokalen E-Mail-Programm geöffnet, die Sie selbst
          versenden. Die Übermittlung erfolgt damit über Ihren eigenen E-Mail-Anbieter.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss
          eines Vertrages gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund des
          berechtigten Interesses an der Beantwortung von Anfragen. Ihre Angaben werden gelöscht,
          sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalBlock>

      <LegalBlock heading="4. Vermittlungs- und Beratungstätigkeit">
        <p>
          Im Rahmen einer Beratung oder Vermittlung verarbeite ich die zur Durchführung
          erforderlichen Daten, gegebenenfalls einschließlich besonderer Kategorien
          personenbezogener Daten wie Gesundheitsdaten. Diese Verarbeitung erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie – bei Gesundheitsdaten – auf Grundlage
          Ihrer ausdrücklichen Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO.
        </p>
        <p>
          Als Versicherungsmakler gebe ich die für die Antragstellung und Vertragsverwaltung
          erforderlichen Daten an die jeweils von Ihnen ausgewählte Versicherungsgesellschaft
          weiter. Es gelten zusätzlich die gesetzlichen Aufbewahrungspflichten nach Handels-
          und Steuerrecht.
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Externe Links und Dienste">
        <p>
          Auf dieser Website wird auf mein Profil bei ProvenExpert verlinkt. Beim Anklicken
          dieses Links verlassen Sie diese Website; für die Datenverarbeitung ist dann der
          jeweilige Anbieter verantwortlich.
        </p>
        <p>
          Schriftarten werden lokal ausgeliefert. Eine Verbindung zu externen
          Schriftarten-Servern findet dabei nicht statt.
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
          Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
          Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht, einer Verarbeitung auf
          Grundlage berechtigter Interessen zu widersprechen (Art. 21 DSGVO). Eine erteilte
          Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Zur Wahrnehmung Ihrer Rechte genügt eine Nachricht an die oben genannten
          Kontaktdaten. Darüber hinaus steht Ihnen ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu, in der Regel bei der{' '}
          {siteConfig.legal.dataProtectionAuthority}.
        </p>
      </LegalBlock>

      <LegalBlock heading="7. Aktualität">
        <p>
          Diese Datenschutzerklärung wird angepasst, wenn sich die Datenverarbeitung auf
          dieser Website ändert – etwa durch die Einbindung weiterer Dienste.
        </p>
      </LegalBlock>
    </LegalLayout>
  )
}
