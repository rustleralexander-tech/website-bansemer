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
    firstName: 'Sebastian',
    lastName: 'Bansemer',
    fullName: 'Sebastian Bansemer',
    /** Berufsbezeichnung, wie sie im Impressum geführt wird. */
    role: 'Vorsorge- und Finanzberater',
    /** Kurzer Untertitel für Header, Footer und Intro. */
    tagline: 'Vorsorge- und Finanzberatung · Köln',
    /** Motto im Hero-Trust-Strip. */
    motto: 'Ruhe, Struktur und Transparenz für Ihre Finanzen.',
    /** Leitzitat, das in Story- und Karriereseite erscheint. */
    quote: 'Wann immer eine Reise endet, beginnt eine neue.',
    /** Rotierende Qualifikationen im Hero. */
    credentials: ['Entwicklungsingenieur', 'ETF-Investor seit 2018', 'Finanzberater'],
  },

  /* ------------------------------------------------------------------- Site */
  /** Kanonische Produktions-URL ohne abschließenden Slash. */
  url: 'https://sebastianbansemer.de',
  domain: 'sebastianbansemer.de',
  locale: 'de_DE',
  language: 'de',

  /* -------------------------------------------------------------------- SEO */
  seo: {
    /** Titel der Startseite. */
    title: 'Sebastian Bansemer – Vorsorge- und Finanzberatung in Köln',
    /** Suffix-Vorlage für Unterseiten. */
    titleTemplate: '%s | Sebastian Bansemer',
    description:
      'Sebastian Bansemer berät Familien, Angestellte und Selbstständige in Köln und Umgebung zu Altersvorsorge, Absicherung und Vermögensaufbau mit Aktien und ETFs. Als ehemaliger Entwicklungsingenieur mit ruhiger, strukturierter und transparenter Arbeitsweise.',
    /** Kürzere Fassung für Social-Previews. */
    ogDescription:
      'Ruhe, Struktur und Transparenz: Vorsorge- und Finanzberatung für Familien in Köln und Umgebung.',
    keywords: [
      'Vorsorgeberater Köln',
      'Finanzberatung Köln',
      'Arbeitskraftabsicherung',
      'Altersvorsorge',
      'Vermögensaufbau ETF',
      'Köln Hürth',
      'Sebastian Bansemer',
    ],
    /** Helle Sandfarbe für die Browser-Themeleiste. */
    themeColor: '#f7f4ef',
  },

  /* ----------------------------------------------------------------- Region */
  region: {
    /** Kurzform für Eyebrows und Navigation. */
    short: 'Köln',
    /** Langform für das Beratungsgebiet im Kontaktblock. */
    serviceArea: 'Köln und Umgebung sowie deutschlandweit',
    /** Zusatz für den Hero-Eyebrow. */
    heroSuffix: 'Köln & Umgebung',
  },

  /* ---------------------------------------------------------------- Kontakt */
  contact: {
    phone: '+49 1512 3070007',
    /** Normalisierte Form für tel:-Links. */
    phoneHref: 'tel:+4915123070007',
    /** Nationale Schreibweise für die Erstinformation. */
    phoneNational: '01512 3070007',
    email: 'bansemer@dpc-gruppe.de',
    emailHref: 'mailto:bansemer@dpc-gruppe.de',
    /** Betreff für die Karriere-Anfrage. */
    careerMailHref:
      'mailto:bansemer@dpc-gruppe.de?subject=Interesse%20an%20einer%20Zusammenarbeit',
  },

  /* ---------------------------------------------------------------- Adresse */
  address: {
    /** Firmierung, unter der die Tätigkeit ausgeübt wird (identisch mit dem Namen, da keine eigene Firma angegeben ist). */
    company: 'Sebastian Bansemer',
    street: 'Innungstr. 4',
    postalCode: '50354',
    city: 'Hürth',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  /* ------------------------------------------------------------- Rechtliches */
  legal: {
    /** Gewerberechtlicher Status. */
    status: 'Versicherungsmakler nach § 34d Abs. 1 der Gewerbeordnung (GewO)',
    /** Kurzform für Hinweistexte in den Sektionen. */
    statusShort: 'Versicherungsmakler nach § 34d Abs. 1 GewO',
    registerNumber: 'D-OH48-IQXR0-24',
    /** Zuständige Aufsichts- und Erlaubnisbehörde. */
    supervisoryAuthority: {
      name: 'Industrie- und Handelskammer zu Köln',
      address: 'Unter Sachsenhausen 5-7, 50667 Köln',
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
    /** ProvenExpert-Profil befindet sich laut Onboarding noch im Aufbau. */
    provenExpertUrl: 'https://www.provenexpert.com/sebastian-bansemer/?mode=preview',
    /** Solange kein Bewertungswidget verifiziert ist, bleiben diese Felder leer. */
    provenExpertWidgetSrc: '',
    provenExpertWidgetId: '',
  },

  /* ------------------------------------------------------------------ Bilder */
  images: {
    hero: '/images/portrait-hero.png',
    story: '/images/portrait-story.jpg',
    seal: '/images/provenexpert-seal.png',
    /** Slideshow im persönlichen Abschnitt. */
    personal: [
      { src: '/images/personal-1.png', alt: 'Beim Fotografieren – ein Ausgleich zum analytischen Beratungsalltag' },
      { src: '/images/personal-2.png', alt: 'Gemeinsam mit der Familie unterwegs, mit Blick über das Rheintal' },
    ],
  },

  /* ------------------------------------------------------------------ E-Mail */
  mail: {
    /** Empfänger der Kontaktformular-Nachrichten. */
    recipient: 'bansemer@dpc-gruppe.de',
    /** Verifizierte Absenderadresse in Resend. */
    sender: 'onboarding@resend.dev',
    senderName: 'Website Sebastian Bansemer',
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
