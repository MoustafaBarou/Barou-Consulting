import { siteConfig } from "@/lib/site";

/**
 * Centrale bron voor de branding-assets.
 *
 * Alle verwijzingen naar het logo en het portret lopen via dit bestand.
 * Wordt een asset vervangen door een ander formaat, dan hoeft alleen de
 * waarde hier te worden aangepast en niet elke plek in de codebase.
 *
 * Favicon, icon en apple-touch-icon lopen niet via dit bestand, maar via
 * de Next bestandsconventies in de `app`-map (favicon.ico, icon.svg,
 * apple-icon.png). Die worden automatisch opgepikt. Zie docs/brand/assets.md.
 */
export const brandAssets = {
  logo: {
    src: "/logo/logo.png",
    width: 1147,
    height: 482,
    alt: siteConfig.name,
  },
  portrait: {
    src: "/images/portrait.jpg",
    width: 896,
    height: 1152,
    alt: `Moustafa Barou, Microsoft 365 consultant bij ${siteConfig.name}`,
  },
} as const;

/** Absolute URL naar een asset, voor metadata en structured data. */
export function absoluteAsset(src: string): string {
  return new URL(src, siteConfig.url).toString();
}
