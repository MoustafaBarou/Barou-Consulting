/**
 * Centrale configuratie voor Barou Consulting.
 *
 * Bedrijfsgegevens, navigatie en metadata staan hier op één plek,
 * zodat componenten en de globale layout dezelfde bron gebruiken.
 */

export const siteConfig = {
  name: "Barou Consulting",
  shortName: "Barou",
  url: "https://barouconsulting.nl",
  description:
    "Gespecialiseerde Microsoft 365 consultancy. Direct contact, korte lijnen en specialistische kennis voor een veilige en overzichtelijke Microsoft 365-omgeving.",
  locale: "nl-NL",
  tagline: "Microsoft 365 Consultancy",
} as const;

/** Hoofdnavigatie. Wordt later per pagina ingevuld. */
export const mainNav: { title: string; href: string }[] = [];

export type SiteConfig = typeof siteConfig;
