# Changelog

Alle noemenswaardige wijzigingen aan dit project worden hier vastgelegd.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/)
en het project volgt [Semantic Versioning](https://semver.org/lang/nl/).

## [Unreleased]

### Toegevoegd

- Nieuwe Next.js 15 applicatie met App Router, React 19 en TypeScript strict.
- Tailwind CSS v4 en shadcn/ui (Base UI met Lucide-iconen).
- Fonts via next/font: Geist voor headings, Inter voor bodytekst.
- Framer Motion en next-themes als afhankelijkheden.
- Professionele mappenstructuur op rootniveau.
- Container-component, Theme Provider en de UI-primitieven Button en Card.
- Prettier met de Tailwind-plugin.
- Projectdocumentatie: README, TODO, CHANGELOG, CLAUDE en LICENSE.
- Centrale asset-config (`lib/assets.ts`) als enige bron voor logo en portret.
- Herbruikbare `Logo`- en `Portrait`-componenten op basis van next/image.
- Globale Header en Footer met het logo.
- Open Graph- en Twitter-metadata en Organization structured data met het logo.
- Documentatie over branding-assets in `docs/brand/assets.md`.

### Gewijzigd

- Assets hernoemd naar een vaste conventie: `logo.jfif` en `portrait.jpg`.
