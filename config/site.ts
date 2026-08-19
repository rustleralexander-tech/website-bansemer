/**
 * Zentrale Konfiguration der Persona-Website.
 *
 * Diese Datei ist die einzige Stelle, an der Name, Kontaktdaten, Adresse,
 * Registerangaben, Bilder und Links gepflegt werden. Um die Seite für eine
 * weitere Person zu klonen, genügt es, diese Datei anzupassen (plus die
 * Bilder in /public/images und die Farbtokens in app/globals.css).
 */

export const siteConfig = {
  /* ---------------------------------------------------------------- Person */
  person: {
    firstName: 'Tobias',
    lastName: 'Harzen',
    fullName: 'Tobias Harzen',
    /** Berufsbezeichnung, wie sie im Impressum geführt wird. */
    role: 'Vorsorgeberater',
    /** Kurzer Untertitel für Header, Footer und Intro. */
    tagline: 'Vorsorgeberater · Köln/Bonn',
    /** Motto im Hero-Trust-Strip. */
    motto: 'Ihre Finanzen verdienen einen Bauplan.',
    /** Leitzitat, das in Story- und Karriereseite erscheint. */
    quote:
      'Arbeiten KÖNNEN, nicht MÜSSEN – für echte finanzielle Freiheit und Selbstbestimmung.',
    /** Rotierende Qualifikationen im Hero. */
    credentials: ['Master-Ingenieur', 'Software-Projektleiter', 'Vorsorgeberater'],
  },

  /* ------------------------------------------------------------------- Site */
  /** Kanonische Produktions-URL ohne abschließenden Slash. */
  url: 'https://tobiasharzen.de',
  domain: 'tobiasharzen.de',
  locale: 'de_DE',
  language: 'de',

  /* -------------------------------------------------------------------- SEO */
  seo: {
    /** Titel der Startseite. */
    title: 'Tobias Harzen – Vorsorgeberater in Köln/Bonn',
    /** Suffix-Vorlage für Unterseiten. */
    titleTemplate: '%s | Tobias Harzen',
    description:
      'Tobias Harzen ist Vorsorgeberater in Sankt Augustin. Als Master-Ingenieur betrachtet er Absicherung, Altersvorsorge und Vermögensaufbau mit analytischer Präzision – für Familien, Selbstständige, Unternehmer und Ingenieure.',
    /** Kürzere Fassung für Social-Previews. */
    ogDescription:
      'Finanzen mit der Präzision eines Ingenieurs: Absicherung, Altersvorsorge und Vermögensaufbau, durchgerechnet statt geschätzt.',
    keywords: [
      'Vorsorgeberater',
      'Arbeitskraftabsicherung',
      'Altersvorsorge',
      'Vermögensaufbau ETF',
      'Sankt Augustin',
      'Köln Bonn',
      'Tobias Harzen',
    ],
    /** Helle Sandfarbe für die Browser-Themeleiste. */
    themeColor: '#f7f4ef',
  },

  /* ----------------------------------------------------------------- Region */
  region: {
    /** Kurzform für Eyebrows und Navigation. */
    short: 'Köln/Bonn',
    /** Langform für das Beratungsgebiet im Kontaktblock. */
    serviceArea: 'Köln/Bonn und Umgebung sowie deutschlandweit',
    /** Zusatz für den Hero-Eyebrow. */
    heroSuffix: 'Köln/Bonn & deutschlandweit',
  },

  /* ---------------------------------------------------------------- Kontakt */
  contact: {
    phone: '+49 1634 557700',
    /** Normalisierte Form für tel:-Links. */
    phoneHref: 'tel:+491634557700',
    /** Nationale Schreibweise für die Erstinformation. */
    phoneNational: '01634 557700',
    email: 'harzen@dpc-gruppe.de',
    emailHref: 'mailto:harzen@dpc-gruppe.de',
    /** Betreff für die Karriere-Anfrage. */
    careerMailHref:
      'mailto:harzen@dpc-gruppe.de?subject=Interesse%20an%20einer%20Zusammenarbeit',
  },

  /* ---------------------------------------------------------------- Adresse */
  address: {
    /** Firmierung, unter der die Tätigkeit ausgeübt wird. */
    company: 'Harzen Consulting',
    street: 'Großenbuschstraße 99',
    postalCode: '53757',
    city: 'Sankt Augustin',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  /* ------------------------------------------------------------- Rechtliches */
  legal: {
    /** Gewerberechtlicher Status. */
    status:
      'gebundener Versicherungsvertreter (Ausschließlichkeitsvermittler) nach § 34d Abs. 7 Satz 1 Nr. 1 der Gewerbeordnung (GewO)',
    /** Kurzform für Hinweistexte in den Sektionen. */
    statusShort: 'gebundener Versicherungsvertreter nach § 34d Abs. 7 GewO',
    registerNumber: 'DE453700414-00001',
    /** Produktgeber, unter dessen Haftung vermittelt wird. */
    insurer: {
      name: 'die Bayerische (Bayerische Beamten Lebensversicherung a.G. / Bayerische Beamten Versicherung AG)',
      shortName: 'die Bayerische',
      address: 'Thomas-Dehler-Straße 25, 81737 München',
    },
    /** Zuständige Aufsichts- und Erlaubnisbehörde. */
    supervisoryAuthority: {
      name: 'Industrie- und Handelskammer (IHK) Bonn/Rhein-Sieg',
      address: 'Bonner Talweg 17, 53113 Bonn',
    },
    /** Gemeinsame Registerstelle. */
    registerOffice: {
      name: 'Deutsche Industrie- und Handelskammer (DIHK) e. V.',
      address: 'Breite Straße 29, 10178 Berlin',
      phone: '0180 6 00 58 50',
      phoneNote:
        'Festnetzpreis 0,20 €/Anruf; Mobilfunkpreise maximal 0,60 €/Anruf',
      url: 'https://www.vermittlerregister.info',
      urlLabel: 'www.vermittlerregister.info',
    },
    /** Schlichtungsstellen für außergerichtliche Streitbeilegung. */
    ombudsmen: [
      {
        name: 'Versicherungsombudsmann e. V.',
        address: 'Postfach 08 06 32, 10006 Berlin',
        url: 'https://www.versicherungsombudsmann.de',
        urlLabel: 'www.versicherungsombudsmann.de',
      },
      {
        name: 'Ombudsmann für die Private Kranken- und Pflegeversicherung',
        address: 'Postfach 06 02 22, 10052 Berlin',
        url: 'https://www.pkv-ombudsmann.de',
        urlLabel: 'www.pkv-ombudsmann.de',
      },
    ],
    /** Zuständige Datenschutz-Aufsichtsbehörde. */
    dataProtectionAuthority:
      'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf',
  },

  /* --------------------------------------------------------------- Bewertungen */
  reviews: {
    provenExpertUrl:
      'https://www.provenexpert.com/tobiasharzen/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget',
    provenExpertWidgetSrc:
      'https://www.provenexpert.com/widget/circlewidget.js?s=150&id=zxfrq&u=24zAhAUZ1HmA2R3Z4LwolRmAjxwZ5LGp&l=de-de',
    provenExpertWidgetId: 'provenexpert_circle_widget_zxfrq',
  },

  /* ------------------------------------------------------------------ Bilder */
  images: {
    hero: '/images/portrait-hero.png',
    story: '/images/portrait-story.jpg',
    seal: '/images/provenexpert-seal.png',
    /** Slideshow im persönlichen Abschnitt. */
    personal: [
      { src: '/images/personal-1.png', alt: 'Tobias Harzen mit seiner Familie am Flugzeug' },
      { src: '/images/personal-2.png', alt: 'Tobias Harzen auf seinem Quad' },
      { src: '/images/personal-3.png', alt: 'Tobias Harzen mit seinem Sohn' },
    ],
  },

  /* ------------------------------------------------------------------ E-Mail */
  mail: {
    /** Empfänger der Kontaktformular-Nachrichten. */
    recipient: 'tobias.harzen@googlemail.com',
    /** Verifizierte Absenderadresse in Resend. */
    sender: 'onboarding@resend.dev',
    senderName: 'Website Harzen Vorsorge',
  },

  /* -------------------------------------------------------------- Navigation */
  nav: [
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Bewertungen', href: '#bewertungen' },
    { label: 'Zusammenarbeit', href: '#zusammenarbeit' },
    { label: 'Karriere', href: '/karriere' },
    { label: 'Kontakt', href: '#kontakt' },
  ],

  footerLinks: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Erstinformation', href: '/erstinformation' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Karriere', href: '/karriere' },
  ],

  /* -------------------------------------------------------- Öffentliche Seiten */
  /** Von Suchmaschinen indexierbare Routen (Basis für die Sitemap). */
  publicRoutes: ['/', '/karriere'],
  /** Nicht indexierte Rechtsseiten. */
  legalRoutes: ['/impressum', '/erstinformation', '/datenschutz'],
} as const

/** Vollständige Anschrift als Array von Zeilen. */
export const addressLines = [
  siteConfig.address.street,
  `${siteConfig.address.postalCode} ${siteConfig.address.city}`,
] as const

/** Absolute URL für einen Pfad der Seite. */
export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}
