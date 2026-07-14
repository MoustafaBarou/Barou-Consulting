# Branding-assets

Alle branding-assets lopen via één centrale bron: `lib/assets.ts`. Componenten
verwijzen nooit rechtstreeks naar een bestandsnaam. Wordt een asset vervangen,
dan hoeft alleen de waarde in `lib/assets.ts` te worden aangepast.

## Huidige assets

| Asset   | Bestand                      | Afmeting | Gebruikt door                             |
| ------- | ---------------------------- | -------- | ----------------------------------------- |
| Logo    | `public/logo/logo.png`       | 1147x482 | Header, Footer, metadata, structured data |
| Portret | `public/images/portrait.jpg` | 896x1152 | Hero, WhyBarou                            |

Beide worden geladen met `next/image` via de componenten `Logo`
(`components/shared/logo.tsx`) en `Portrait` (`components/shared/portrait.tsx`).

Het logo is een PNG met transparante achtergrond. Het is strak bijgesneden tot
het woordmerk zelf, zodat de `Logo`-component de juiste beeldverhouding (2,38:1)
hanteert en er geen loze ruimte omheen staat. Het onbewerkte bestand zoals
aangeleverd staat als master in `docs/brand/logo-master.png` (2000x2000, met
witruimte). Dat bestand wordt bewust niet vanuit `public/` geserveerd.

## Nieuw logo toevoegen

Lever een `.svg` of `.png` aan en plaats deze in `public/logo/`. Pas daarna
alleen `brandAssets.logo` in `lib/assets.ts` aan (bestandsnaam en afmeting).
De rest van de codebase blijft ongewijzigd.

## Favicon, icon en apple-touch-icon

Deze lopen niet via `lib/assets.ts`, maar via de bestandsconventies van Next in
de `app`-map. Zet het bestand neer met exact deze naam, dan wordt het
automatisch opgepikt zonder codewijziging:

| Bestand              | Doel                                  |
| -------------------- | ------------------------------------- |
| `app/favicon.ico`    | Klassiek favicon                      |
| `app/icon.svg`       | Modern schaalbaar icoon               |
| `app/apple-icon.png` | Apple Touch Icon (180x180 aanbevolen) |

Next genereert de bijbehorende `<link>`-tags automatisch.

## Open Graph-afbeelding

De Open Graph- en Twitter-afbeelding verwijzen nu naar het logo. Voor een
speciale deelafbeelding kan later `app/opengraph-image.png` (1200x630) worden
toegevoegd. Next pikt dat bestand automatisch op.
