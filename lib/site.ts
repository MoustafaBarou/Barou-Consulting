/**
 * Centrale configuratie voor Barou Consulting.
 *
 * Bedrijfsgegevens, contact, navigatie, call-to-actions en de
 * certificeringen staan hier op één plek, zodat componenten en de
 * globale layout dezelfde bron gebruiken. Secties lezen deze gegevens
 * uit; ze worden nergens los in de componenten herhaald.
 */

export const siteConfig = {
  name: "Barou Consulting",
  shortName: "Barou",
  url: "https://barouconsulting.nl",
  description:
    "Gespecialiseerde Microsoft 365 consultancy. Direct contact, korte lijnen en specialistische kennis voor een veilige en overzichtelijke Microsoft 365-omgeving.",
  locale: "nl-NL",
  tagline: "Microsoft 365 Consultancy",

  /** De persoon achter het bedrijf. */
  person: {
    name: "Moustafa Barou",
    role: "Microsoft 365 & Modern Workplace consultant",
  },

  /** Vestiging en werkgebied. */
  location: {
    city: "Rotterdam",
    country: "Nederland",
    servedNote:
      "Gevestigd in Rotterdam, werkzaam voor klanten door heel Nederland.",
  },

  /** Directe contactgegevens. */
  contact: {
    email: "m.barou@barouconsulting.nl",
    phone: "+31 6 44 51 31 40",
    phoneHref: "tel:+31644513140",
    linkedin: "https://www.linkedin.com/in/moustafa-barou-44a88125b",
  },

  /** Bedrijfsgegevens voor de footer. */
  business: {
    kvk: "90895355",
    btw: "NL004849992B48",
  },
} as const;

/**
 * Primaire call-to-action. Overal consistent gebruikt.
 * Voorlopig een mailto, zodat de actie nu al werkt. Zodra er een
 * contactpagina of formulier komt, hoeft alleen deze href te wijzigen.
 */
export const primaryCta = {
  label: "Start een gesprek",
  href: `mailto:${siteConfig.contact.email}?subject=Kennismaking%20Barou%20Consulting`,
} as const;

/** Secundaire, laagdrempelige call-to-action naar de dienstensectie. */
export const secondaryCta = {
  label: "Bekijk de diensten",
  href: "#diensten",
} as const;

/** Hoofdnavigatie: anchors naar de secties op de homepage. */
export const mainNav: { title: string; href: string }[] = [
  { title: "Diensten", href: "#diensten" },
  { title: "Aanpak", href: "#aanpak" },
  { title: "Certificeringen", href: "#certificeringen" },
  { title: "Contact", href: "#contact" },
];

/** Een behaalde certificering met verwijzing naar de badge-afbeelding. */
export type Certification = {
  name: string;
  /** Pad naar de badge in public/. */
  badge: string;
  issuer: "Microsoft" | "Cisco";
  category: "microsoft" | "cisco";
  /** Maand van behalen. Alleen ingevuld voor de Microsoft-certificeringen. */
  earned?: string;
  /**
   * Officiële verificatiepagina op Microsoft Learn. Alleen de
   * Microsoft-certificeringen zijn online te verifiëren. De Cisco-certificaten
   * hebben geen verificatielink en blijven daarom zonder hyperlink.
   */
  verifyUrl?: string;
};

/**
 * De behaalde certificeringen. De Microsoft-certificeringen vormen de
 * kern van het vertrouwenssignaal en staan bovenaan. De Cisco-certificaten
 * zijn aanvullend. Alle badges zijn 2000x2000 en staan in public/certificates/.
 */
export const certifications: Certification[] = [
  {
    name: "Microsoft 365 Certified: Administrator Expert",
    badge: "/certificates/m365-administrator-expert.png",
    issuer: "Microsoft",
    category: "microsoft",
    earned: "juni 2026",
    verifyUrl:
      "https://learn.microsoft.com/en-gb/users/moustafabarou-8435/credentials/3703068d8d542395",
  },
  {
    name: "Microsoft 365 Certified: Endpoint Administrator Associate",
    badge: "/certificates/m365-endpoint-administrator-associate.png",
    issuer: "Microsoft",
    category: "microsoft",
    earned: "april 2026",
    verifyUrl:
      "https://learn.microsoft.com/en-gb/users/moustafabarou-8435/credentials/e27d39c37abe035b",
  },
  {
    name: "Cybersecurity Essentials",
    badge: "/certificates/cybersecurity-essentials-cisco.png",
    issuer: "Cisco",
    category: "cisco",
  },
  {
    name: "NDG Linux Essentials",
    badge: "/certificates/ndg-linux-essentials-cisco.png",
    issuer: "Cisco",
    category: "cisco",
  },
  {
    name: "NDG Linux Unhatched",
    badge: "/certificates/ndg-linux-unhatched-cisco.png",
    issuer: "Cisco",
    category: "cisco",
  },
  {
    name: "PCAP: Programming Essentials in Python",
    badge: "/certificates/pcap-python-cisco.png",
    issuer: "Cisco",
    category: "cisco",
  },
];

export type SiteConfig = typeof siteConfig;
