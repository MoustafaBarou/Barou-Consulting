import { absoluteAsset, brandAssets } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

/**
 * Organization structured data (schema.org) voor Barou Consulting.
 * Het logo verwijst naar de centrale asset-config, zodat een nieuw
 * logobestand hier geen aanpassing vraagt.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteAsset(brandAssets.logo.src),
    image: absoluteAsset(brandAssets.logo.src),
    description: siteConfig.description,
    areaServed: "NL",
    knowsAbout: [
      "Microsoft 365",
      "Microsoft 365-beveiliging",
      "Zero Trust-principes",
      "e-mailbeveiliging",
      "Microsoft Entra ID",
      "Microsoft Intune",
    ],
  } as const;
}
