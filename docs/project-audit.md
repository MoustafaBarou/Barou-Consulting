# Projectaudit Barou Consulting

Datum: 7 juli 2026
Branch: `chore/project-foundation`
Auteur: geautomatiseerde codebase-audit
Status codebase: funderingsfase (Milestone 1 grotendeels afgerond)

> Samenvatting vooraf: dit is een schone, goed opgezette fundering voor een
> Next.js 15 website. De infrastructuur, tokens, tooling en een paar layout
> componenten staan. De eigenlijke website bestaat nog niet. Er is één
> placeholderpagina, geen homepage secties, geen inhoudelijke pagina's, geen
> sitemap, geen robots, geen favicon en geen deploy-pipeline. Het project is
> dus solide begonnen, maar nog ver van productieklaar.

---

## 1. Projectoverzicht

### Framework en stack

| Onderdeel   | Keuze                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Framework   | Next.js 15.5.20 (App Router)                                             |
| UI-runtime  | React 19.1.0                                                             |
| Taal        | TypeScript 5 (strict)                                                    |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/postcss`)                             |
| Componenten | shadcn/ui, style `base-nova`, op basis van Base UI                       |
| Iconen      | Lucide (`lucide-react`)                                                  |
| Animatie    | Framer Motion (geïnstalleerd, nog niet gebruikt)                         |
| Thema       | next-themes                                                              |
| Fonts       | Geist (headings), Inter (body), Geist Mono (mono) via `next/font/google` |
| Build       | Turbopack (`next dev`/`next build --turbopack`)                          |
| Linting     | ESLint 9 (flat config, `next/core-web-vitals` + `next/typescript`)       |
| Formatting  | Prettier 3 met `prettier-plugin-tailwindcss`                             |
| Git hooks   | Husky 9 + lint-staged 17 (pre-commit)                                    |

### Versies van belangrijke dependencies

Uit `package.json` (semver-ranges, exacte versies staan in de lockfile):

- `next` 15.5.20 (gepind)
- `react` / `react-dom` 19.1.0 (gepind)
- `@base-ui/react` ^1.6.0
- `framer-motion` ^12.42.2
- `lucide-react` ^1.23.0
- `next-themes` ^0.4.6
- `class-variance-authority` ^0.7.1, `clsx` ^2.1.1, `tailwind-merge` ^3.6.0
- `tw-animate-css` ^1.4.0
- Dev: `tailwindcss` ^4, `typescript` ^5, `eslint` ^9, `prettier` ^3.9.4, `shadcn` ^4.13.0, `husky` ^9.1.7, `lint-staged` ^17.0.8

Opmerking: er is geen `.nvmrc` of `engines`-veld. De README noemt Node.js 20 of hoger, maar dat is nergens afgedwongen.

### Architectuur en folderstructuur

App Router met een enkele root-layout en één placeholderpagina. De structuur is component driven opgezet volgens de conventies in `CLAUDE.md` en `README.md`.

```text
app/                layout.tsx, page.tsx
components/
  layout/           container, section, header, footer
  home/             (leeg, alleen .gitkeep)
  shared/           logo, portrait, theme-provider
  ui/               button, card (shadcn/ui)
content/
  cases/            (leeg)
  pages/            (leeg)
  services/         (leeg)
docs/
  architecture/     (leeg)
  brand/            assets.md
  content/          (leeg)
  seo/              (leeg)
hooks/              (leeg)
lib/                assets, fonts, site, structured-data, utils
public/
  logo/             logo.jfif
  images/           portrait.jpg
  cases, certificates, icons, illustrations, og/  (leeg)
scripts/            (leeg)
styles/             globals.css
types/              (leeg)
```

Veel mappen bestaan al vooruitlopend op werk dat nog moet komen. Ze bevatten alleen een `.gitkeep`.

### Deployment platform

Niet geconfigureerd. Er is geen `vercel.json`, geen Dockerfile en geen deploy-instructie. De `.gitignore` sluit `.vercel` uit, wat wijst op een voorgenomen Vercel-deploy, maar er is nog niets ingericht. Milestone 4 in `TODO.md` noemt de deploy-pipeline als openstaand punt.

### Build pipeline

- Lokale scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `format`, `format:check`, `prepare`.
- Pre-commit: Husky draait `npx lint-staged`, dat op `.ts`/`.tsx` `eslint --fix` en Prettier draait, en op overige bestanden Prettier.
- CI/CD: geen. `.github/workflows/` bevat alleen een `.gitkeep`, dus er draait geen enkele GitHub Action. Er is geen geautomatiseerde lint, typecheck, build of test bij een push of pull request.

---

## 2. Functionaliteiten

Het project is een fundering. Er is nog geen enkele bezoekersgerichte functionaliteit af. Hieronder de aanwezige bouwstenen.

| Onderdeel             | Doel                                                                            | Locatie                                                  | Status                                                                     | Afhankelijkheden                                                     |
| --------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Root layout           | Globale HTML-structuur, fonts, thema, header, footer, metadata, structured data | `app/layout.tsx`                                         | Af (voor huidige scope)                                                    | fonts, site, assets, structured-data, theme-provider, header, footer |
| Placeholderpagina     | Bevestigt dat de fundering staat                                                | `app/page.tsx`                                           | Placeholder                                                                | Container                                                            |
| Thema-infrastructuur  | Light/dark via next-themes                                                      | `components/shared/theme-provider.tsx`                   | Gedeeltelijk: dark bestaat in CSS, maar staat uit en is niet omschakelbaar | next-themes                                                          |
| Metadata en SEO-basis | Title-template, description, OpenGraph, Twitter, robots                         | `app/layout.tsx`, `lib/site.ts`                          | Gedeeltelijk (basis staat, per-pagina en OG-afbeelding ontbreken)          | site, assets                                                         |
| Structured data       | Organization schema.org als JSON-LD                                             | `lib/structured-data.ts`, ingespoten in `app/layout.tsx` | Af (basaal, Organization)                                                  | site, assets                                                         |
| Branding-assets       | Centrale bron voor logo en portret                                              | `lib/assets.ts`                                          | Af (config), maar logo is nog een `.jfif` placeholder                      | site                                                                 |
| Logo-component        | Logo tonen via next/image zonder layout shift                                   | `components/shared/logo.tsx`                             | Af                                                                         | assets, utils                                                        |
| Portret-component     | Professioneel portret als vertrouwenselement                                    | `components/shared/portrait.tsx`                         | Af, maar nergens gebruikt                                                  | assets, utils                                                        |
| Header                | Sticky header met logo, ruimte voor navigatie                                   | `components/layout/header.tsx`                           | Gedeeltelijk (geen navigatie)                                              | Container, Logo                                                      |
| Footer                | Logo, korte positionering, copyright                                            | `components/layout/footer.tsx`                           | Gedeeltelijk (geen links, contact, KvK)                                    | Container, Logo, site                                                |
| Container             | Horizontale marges en maximale breedte                                          | `components/layout/container.tsx`                        | Af                                                                         | utils                                                                |
| Section               | Verticaal ritme met spacing-varianten                                           | `components/layout/section.tsx`                          | Af, maar nergens gebruikt                                                  | utils                                                                |
| Button                | UI-primitief (shadcn/ui)                                                        | `components/ui/button.tsx`                               | Af, maar nergens gebruikt                                                  | Base UI, cva, utils                                                  |
| Card                  | UI-primitief (shadcn/ui)                                                        | `components/ui/card.tsx`                                 | Af, maar nergens gebruikt                                                  | utils                                                                |

Nog niet aanwezig: navigatie, contactformulier, homepage secties (Hero, Problems, Services, WhyBarou, Cases, Process, Certifications, CTA), inhoudelijke pagina's, cookiebeleid, analytics, sitemap en robots.

---

## 3. Pagina's

| Route | Component      | Status      | SEO                                                 | Responsive                                               | Opmerkingen                                        |
| ----- | -------------- | ----------- | --------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| `/`   | `app/page.tsx` | Placeholder | Erft globale metadata, geen eigen `metadata`-export | Ja (Container schaalt mee), maar er is nauwelijks inhoud | Toont alleen "Barou Consulting / Fundering gereed" |

Er is precies één route. Alle pagina's uit Milestone 3 (Diensten, Cases, Over, Contact) ontbreken. Er is geen 404-pagina (`not-found.tsx`), geen `loading.tsx`, geen `error.tsx` en geen route groups.

---

## 4. Componenten

### `Container` (`components/layout/container.tsx`)

- Doel: centreren, horizontale marges, maximale breedte `max-w-6xl`.
- Props: alle `div`-props (`ComponentProps<"div">`), `className` wordt gemerged via `cn`.
- Herbruikbaarheid: hoog, generiek.
- Gebruikt in: Header, Footer, placeholderpagina.
- Technische schuld: geen.

### `Section` (`components/layout/section.tsx`)

- Doel: verticaal ritme via `spacing`-variant (`none`/`sm`/`md`/`lg`).
- Props: `ComponentProps<"section">` plus `spacing`.
- Herbruikbaarheid: hoog.
- Gebruikt in: nergens (nog niet ingezet).
- Technische schuld: geen, wel ongebruikt tot de secties komen.

### `Header` (`components/layout/header.tsx`)

- Doel: sticky header met logo als link naar home.
- Props: geen.
- Herbruikbaarheid: single-use (globale header).
- Gebruikt in: `app/layout.tsx`.
- Technische schuld: navigatie ontbreekt. `mainNav` in `lib/site.ts` is leeg. Geen skip-link naar de hoofdinhoud, wat voor toegankelijkheid gewenst is.

### `Footer` (`components/layout/footer.tsx`)

- Doel: logo, korte positioneringstekst, copyright met dynamisch jaartal.
- Props: geen.
- Herbruikbaarheid: single-use.
- Gebruikt in: `app/layout.tsx`.
- Technische schuld: geen contactgegevens, geen KvK/BTW, geen links, geen sitemap-verwijzing. Voor een zakelijke site is dit later nodig.

### `Logo` (`components/shared/logo.tsx`)

- Doel: logo tonen via next/image met vaste beeldverhouding.
- Props: `height`, `className`, `priority`, `alt`.
- Herbruikbaarheid: hoog, netjes losgekoppeld van het bestand via `brandAssets`.
- Gebruikt in: Header, Footer.
- Technische schuld: bron is `logo.jfif`, een ongebruikelijk formaat en volgens de TODO een tijdelijke asset. Aangeleverd zou nog `logo.svg` of `logo.png` moeten worden.

### `Portrait` (`components/shared/portrait.tsx`)

- Doel: professioneel portret als vertrouwenselement, afgeronde rechthoek.
- Props: `className`, `priority`, `sizes`, `alt`.
- Herbruikbaarheid: hoog.
- Gebruikt in: nergens (nog niet ingezet).
- Technische schuld: geen.

### `ThemeProvider` (`components/shared/theme-provider.tsx`)

- Doel: next-themes provider op het html-element.
- Props: doorgereikt aan `NextThemesProvider`.
- Herbruikbaarheid: single-use wrapper.
- Gebruikt in: `app/layout.tsx` met `defaultTheme="light"`, `enableSystem={false}`.
- Technische schuld: er is een volledig dark thema in de CSS, maar het is niet bereikbaar. Zonder toggle en zonder systeemvoorkeur wordt het nooit getoond. Dat is dode UI-capaciteit tot er een keuze wordt gemaakt.

### `Button` (`components/ui/button.tsx`)

- Doel: UI-primitief met varianten (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`) en groottes.
- Props: Base UI Button-props plus `variant`/`size`.
- Herbruikbaarheid: hoog.
- Gebruikt in: nergens.
- Technische schuld: geen, standaard shadcn-implementatie.

### `Card` (`components/ui/card.tsx`)

- Doel: kaartcompositie (Header, Title, Description, Action, Content, Footer).
- Props: `div`-props plus `size` op de root.
- Herbruikbaarheid: hoog.
- Gebruikt in: nergens.
- Technische schuld: geen.

Samengevat: alle componenten zijn schoon geschreven, gebruiken `cn` voor class-merging en volgen een consistente stijl met een `data-slot`-attribuut. Vijf van de tien componenten (Section, Portrait, Button, Card, en de UI-primitieven) zijn nog nergens in gebruik.

---

## 5. Styling

### Tailwind gebruik

- Tailwind CSS v4 via PostCSS-plugin. Geen `tailwind.config.js`; configuratie loopt volledig via `@theme inline` in `styles/globals.css`.
- Utility-first, geen los verspreide inline styles. Class-merging via `cn` (clsx + tailwind-merge).
- `prettier-plugin-tailwindcss` sorteert de classes automatisch.

### Globale CSS

`styles/globals.css` importeert `tailwindcss`, `tw-animate-css` en `shadcn/tailwind.css`. Bevat design tokens, een `dark`-variant en een `@layer base` met basisstijlen (border-kleur, achtergrond, font-smoothing, heading-instellingen).

### Design system

Goed opgezet. De ruwe merkkleuren staan als `--brand-*` tokens vast en worden gekoppeld aan semantische tokens die de componenten gebruiken. Dit past bij `CLAUDE.md`. De merkkleuren komen overeen met de opgegeven waarden:

- Primary `#01153F`, Secondary `#193567`, Accent `#0078D4`, Paper `#FBFAF8`, Ink `#14181F`.

Het accent is als `--ring` en in de charttokens gebruikt. Er is nog geen component dat het accent als CTA of link inzet, dus de regel "accent uitsluitend voor CTA, links, focus, actieve states" is nog niet op de proef gesteld.

### Consistente spacing

Consistent. Verticaal ritme loopt via de `Section`-spacingvarianten, horizontale marges via `Container`. De radius is opgebouwd uit één `--radius`-basis met afgeleide stappen.

### Typografie

Netjes ingericht. Drie fonts via `next/font/google` met `display: swap` en als CSS-variabelen op het html-element. Headings krijgen `font-heading`, `tracking-tight` en `text-balance`. Body gebruikt `font-sans` (Inter).

### Dark mode

Volledig uitgewerkt in tokens, maar uitgeschakeld en niet omschakelbaar. `enableSystem={false}` en `defaultTheme="light"` zonder toggle betekenen dat de dark tokens nu geen effect hebben. Dit is een bewuste keuze volgens de comments, maar levert wel ongebruikte code op.

---

## 6. Performance

Met slechts een placeholderpagina is er nog weinig te meten. Wat opvalt:

- Afbeeldingen: logo en portret lopen via `next/image` met expliciete `width`/`height`, dus geen layout shift. `sizes` is per component ingesteld. Goed.
- Assetformaat: het logo is een 47 KB progressive JPEG met de extensie `.jfif`. Voor een logo is een SVG of geoptimaliseerde PNG passender. Dit staat als openstaand punt in de TODO.
- Lazy loading: next/image doet dit standaard. `priority` is per component instelbaar, maar wordt nu nergens aangezet (in de header zou dat overwogen kunnen worden).
- Caching: geen aangepaste cache- of revalidate-strategie, want er is nog geen datafetching. Prima voor nu.
- Bundle size: klein. Framer Motion is geïnstalleerd maar wordt nog nergens geïmporteerd, dus het belast de bundle nog niet. next-themes voegt een kleine client-component toe.
- Next.js optimalisaties: Turbopack voor dev en build. `next.config.ts` is leeg, dus er zijn geen extra optimalisaties of `images`-instellingen (bijvoorbeeld `formats` voor AVIF/WebP, al levert next/image standaard al WebP).
- Bottlenecks: geen aanwijsbare op dit moment. De echte performancetest volgt zodra de secties, afbeeldingen en animaties er zijn.

---

## 7. SEO

| Onderdeel           | Status                                          | Locatie                                                |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| Title en template   | Aanwezig                                        | `app/layout.tsx` (`title.default` en `title.template`) |
| Description         | Aanwezig                                        | `lib/site.ts`                                          |
| `metadataBase`      | Aanwezig                                        | `app/layout.tsx`                                       |
| OpenGraph           | Aanwezig (basis)                                | `app/layout.tsx`                                       |
| Twitter card        | Aanwezig                                        | `app/layout.tsx`                                       |
| robots (meta)       | Aanwezig (`index`, `follow`)                    | `app/layout.tsx`                                       |
| `robots.txt`        | Ontbreekt                                       | geen `app/robots.ts`                                   |
| Sitemap             | Ontbreekt                                       | geen `app/sitemap.ts`                                  |
| Structured data     | Aanwezig (Organization)                         | `lib/structured-data.ts`                               |
| Canonical URLs      | Ontbreekt                                       | geen `alternates.canonical`                            |
| Per-pagina metadata | Ontbreekt                                       | geen `metadata`-export in `page.tsx`                   |
| `lang` attribuut    | Aanwezig (`nl`)                                 | `app/layout.tsx`                                       |
| Alt-teksten         | Aanwezig voor logo en portret via `brandAssets` | `lib/assets.ts`                                        |

Aandachtspunten:

- De OpenGraph- en Twitter-afbeelding verwijzen naar het logo (1600x954). De aanbevolen OG-verhouding is 1200x630. Een aparte `app/opengraph-image.png` zou dit netter oplossen. Dit staat als optie in `docs/brand/assets.md`.
- Er is geen `app/icon`, `app/favicon.ico` of `app/apple-icon`. Zonder favicon oogt de site in de browsertab onaf. Dit staat expliciet als openstaand punt in de TODO.
- Sitemap, robots en canonical zijn nog niet ingericht. Voor livegang zijn die alle drie nodig.
- Structured data is aanwezig maar basaal. Voor een consultant is `Person` of `ProfessionalService` met NAW, `sameAs` en contactgegevens waardevoller dan alleen `Organization`.

---

## 8. Accessibility

Wat goed staat:

- `lang="nl"` op het html-element.
- Zinvolle alt-teksten voor logo en portret.
- Zichtbare focus-states op de logo-links in header en footer (`focus-visible:ring`).
- Button- en Card-primitieven brengen `aria`-hooks mee (invalid states, focus).
- Semantische landmarks: `header`, `main`, `footer`.

Wat ontbreekt of aandacht vraagt:

- Geen skip-link naar de hoofdinhoud.
- Geen navigatie, dus toetsenbordnavigatie is nog niet echt te beoordelen.
- Headingstructuur is minimaal. De placeholderpagina heeft één `h1`. Zodra secties komen moet de hiërarchie bewaakt worden.
- Contrast: de tokens ogen degelijk (donkerblauwe tekst op paper), maar er is nog geen formele contrastcontrole gedaan. `muted-foreground` (`#55617a`) op paper moet nog geverifieerd worden tegen WCAG AA voor kleine tekst.
- Formulieren: nog niet aanwezig, dus nog niets te controleren. Het contactformulier moet later labels, foutmeldingen en `aria-describedby` krijgen.
- `prefers-reduced-motion`: nog niet relevant omdat er geen animaties zijn, maar `CLAUDE.md` vereist respect hiervoor zodra Framer Motion wordt ingezet.

---

## 9. Security

- Environment variables: geen. Er is geen `.env`, geen `process.env`-gebruik en geen secrets. `.gitignore` sluit `.env*` correct uit.
- Security headers: geen. `next.config.ts` is leeg, dus er zijn geen `headers()` met Content-Security-Policy, HSTS, X-Frame-Options, X-Content-Type-Options of Referrer-Policy. Voor productie zijn die aan te raden.
- Dependencies: modern en actueel. Geen bekende verouderde pakketten in de directe lijst. Er draait geen `npm audit` in CI. Aanbeveling: een audit toevoegen zodra CI wordt ingericht.
- `dangerouslySetInnerHTML`: één keer gebruikt in `app/layout.tsx` voor de JSON-LD. De inhoud komt uit een eigen, statische functie (`organizationSchema`) zonder gebruikersinvoer, dus het risico is verwaarloosbaar. Wel het enige punt om in de gaten te houden als de structured data ooit dynamisch wordt.
- Validatie en input sanitization: nog niet van toepassing, er is geen invoer. Wordt kritisch zodra het contactformulier komt.

---

## 10. Content

- Teksten: alleen fundering. De placeholderpagina toont "Barou Consulting" en "Fundering gereed". De footer heeft één positioneringszin. De metadata-description staat in `lib/site.ts`. Alle inhoudelijke teksten (Hero, diensten, cases, over, contact) ontbreken nog.
- Afbeeldingen: twee assets aanwezig. Het portret (`portrait.jpg`, 896x1152) lijkt definitief. Het logo (`logo.jfif`) is een tijdelijke placeholder; een SVG of PNG moet nog aangeleverd worden.
- Placeholders: `content/`-mappen (`cases`, `pages`, `services`) zijn leeg. De hele `content`-laag is voorbereid maar nog niet gevuld. Onduidelijk is nog of content in code komt of als losse bestanden in `content/`.
- Ontbrekende content: alle homepage secties, alle subpagina's, contactgegevens, KvK- en BTW-nummer, privacyverklaring, cookiebeleid, certificeringen en cases.

Toon: de aanwezige teksten volgen de schrijfstijl uit `CLAUDE.md` netjes. Korte zinnen, geen buzzwords, geen em dashes.

---

## 11. Git status

Huidige branch: `chore/project-foundation`. Twee commits: `e882539` (initial) en `490a27a` (chore: initialize project foundation). De branch loopt voor op `main`.

Werkboom (nog niet gecommit):

- Gewijzigd: `CHANGELOG.md`, `TODO.md`, `app/layout.tsx`, `app/page.tsx`.
- Verwijderd: `docs/brand/.gitkeep`, `public/images/.gitkeep`, `public/logo/.gitkeep` (vervangen door echte inhoud).
- Nieuw (untracked): `components/layout/footer.tsx`, `components/layout/header.tsx`, `components/shared/logo.tsx`, `components/shared/portrait.tsx`, `docs/brand/assets.md`, `lib/assets.ts`, `lib/structured-data.ts`, `public/images/portrait.jpg`, `public/logo/logo.jfif`.

Er staat dus een samenhangende set nieuwe layout- en asset-componenten klaar die nog gecommit moet worden. Dit hoort logisch bij één commit "branding-assets en layout".

Ongebruikte bestanden en dode code:

- Zestien `.gitkeep`-placeholders in lege mappen. Legitiem als structuurhouder, maar het is veel vooruit geplande ruimte die nog niet gevuld is.
- `Section`, `Portrait`, `Button`, `Card` zijn geschreven maar nergens geïmporteerd. Geen echte dode code, wel nog ongebruikte capaciteit.
- Dark thema in CSS is aanwezig maar onbereikbaar.
- `mainNav` in `lib/site.ts` is een lege array die nog nergens wordt gelezen.
- `framer-motion` is geïnstalleerd maar nog niet geïmporteerd.

Geen oude of verlaten componenten aangetroffen. De codebase is jong en schoon.

---

## 12. TODO's

In de broncode (`.ts`, `.tsx`, `.css`, `.mjs`) zijn geen `TODO`, `FIXME`, `HACK` of `XXX` markers aangetroffen. De planning wordt bijgehouden in `TODO.md`, niet als inline comments.

Openstaande punten uit `TODO.md`:

- Milestone 1: alleen nog het aanleveren van `logo.svg`/`logo.png`, `app/favicon.ico`, `app/icon.svg` en `app/apple-icon.png`.
- Milestone 2: alle homepage secties (Hero, Problems, Services, WhyBarou, Cases, Process, Certifications, CTA).
- Milestone 3: homepage samenstellen, plus Diensten, Cases, Over en Contact.
- Milestone 4: per-pagina SEO, OG-afbeeldingen, WCAG-controle, Core Web Vitals, analytics en cookiebeleid, deploy-pipeline.

---

## 13. Technische schuld

De codebase is jong en heeft weinig echte schuld. Onderstaande punten zijn vooral gemis en losse eindjes, geen rot.

Quick wins:

- Favicon, icon en apple-touch-icon toevoegen in `app/` (paar bestanden, meteen zichtbaar effect).
- `app/robots.ts` en `app/sitemap.ts` toevoegen.
- Een aparte OG-afbeelding (1200x630) neerzetten in plaats van het logo hergebruiken.
- Security headers toevoegen in `next.config.ts`.
- Een `engines`-veld of `.nvmrc` toevoegen om de Node-versie vast te leggen.

Refactor- en inrichtingsmogelijkheden:

- Beslissen over dark mode: of een toggle toevoegen, of het dark thema uit de CSS halen tot het echt gebruikt wordt. Nu is het halfbakken.
- CI inrichten (`.github/workflows/`): lint, typecheck, build en `npm audit` bij elke pull request.
- Structured data uitbreiden naar `ProfessionalService`/`Person` met contactgegevens.

Code duplicatie:

- De focus-ring-klassen op de logo-link staan identiek in Header en Footer. Klein, maar bij een derde plek is een gedeelde helper of component de moeite waard.

Complexe componenten:

- Geen. Het meest uitgebreid zijn `button.tsx` en `card.tsx`, maar dat zijn standaard shadcn-implementaties met lange class-strings, geen eigen complexiteit.

---

## 14. Aanbevolen roadmap

### P0 (kritiek, blokkeert livegang)

1. Homepage secties bouwen (Hero, Problems, Services, WhyBarou, Cases, Process, Certifications, CTA) en de homepage samenstellen. Zonder dit is er geen website.
2. Definitieve teksten aanleveren en plaatsen die de drie kernvragen uit `CLAUDE.md` beantwoorden.
3. Definitief logo (SVG of PNG) en favicon-set aanleveren en verwerken.
4. Deploy-pipeline naar Vercel inrichten en een productie-URL koppelen.

### P1 (belangrijk voor een geloofwaardige livegang)

5. Subpagina's: Diensten, Cases, Over, Contact.
6. Contactformulier met validatie, toegankelijke labels en foutafhandeling.
7. `robots.ts`, `sitemap.ts` en canonical URLs; per-pagina metadata.
8. Security headers in `next.config.ts`.
9. WCAG-controle: contrast, skip-link, headinghiërarchie, toetsenbordnavigatie.
10. CI inrichten met lint, typecheck en build.

### P2 (verbetering)

11. OG-afbeelding op maat (1200x630), eventueel dynamisch per pagina.
12. Structured data uitbreiden naar `ProfessionalService`/`Person`.
13. Framer Motion inzetten voor subtiele fade- en reveal-animaties met respect voor `prefers-reduced-motion`.
14. Beslissing en uitvoering rond dark mode (toggle of verwijderen).
15. Analytics en cookiebeleid, plus privacyverklaring.

### P3 (nice to have)

16. Node-versie vastleggen (`.nvmrc` of `engines`).
17. `npm audit` in CI.
18. Content-laag beslissing: in code of losse bestanden in `content/`.
19. Gedeelde helper voor de terugkerende focus-ring-klassen.
20. Lege `.gitkeep`-mappen opschonen die niet binnenkort gevuld worden.

---

## 15. Eindscore

De cijfers wegen de kwaliteit van wat er staat af tegen de eisen aan een productiewebsite. Voor onderdelen die nog niet gebouwd zijn is het cijfer laag, ook al is de fundering goed.

| Onderdeel            | Cijfer | Toelichting                                                                                         |
| -------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Architectuur         | 8/10   | Schone, doordachte structuur en tokens. Trekt pas echt aan bij meer pagina's.                       |
| Codekwaliteit        | 8/10   | Consistent, getypeerd, goed becommentarieerd. Weinig code, maar netjes.                             |
| SEO                  | 4/10   | Metadata-basis staat, maar sitemap, robots, canonical, favicon en per-pagina metadata ontbreken.    |
| Performance          | 6/10   | Goede fundamenten (next/image, Turbopack), nog niet echt te meten. Logo als `.jfif` is suboptimaal. |
| Accessibility        | 5/10   | Goede basis, maar geen skip-link, geen formulieren en geen formele contrastcontrole.                |
| Design               | 6/10   | Tokens en typografie zijn af en op merk, maar er is nog vrijwel niets te zien.                      |
| Onderhoudbaarheid    | 8/10   | Centrale config, duidelijke conventies, hooks en formatting op orde.                                |
| Productie-gereedheid | 2/10   | Eén placeholderpagina, geen deploy, geen content. Nog ver van live.                                 |

---

## Samenvatting in punten

Wat al gebouwd is:

1. Next.js 15 App Router met React 19 en TypeScript strict, gebouwd op Turbopack.
2. Tailwind CSS v4 met een compleet, op merk afgestemd design-token-systeem in `globals.css`.
3. Drie fonts via `next/font` (Geist, Inter, Geist Mono), correct als variabelen gekoppeld.
4. Layoutcomponenten Container, Section, Header en Footer.
5. Gedeelde componenten Logo, Portrait en ThemeProvider met centrale asset-config.
6. UI-primitieven Button en Card (shadcn/ui, style base-nova).
7. Globale metadata, OpenGraph, Twitter-card en Organization structured data.
8. Tooling op orde: ESLint flat config, Prettier met Tailwind-plugin, Husky en lint-staged.
9. Nette projectdocumentatie: README, CLAUDE, CHANGELOG, TODO en `docs/brand/assets.md`.

Wat productieklaar is:

10. De ontwikkel- en tooling-fundering (linting, formatting, pre-commit, tokens, fonts).
11. De layout-schil (header, footer, container) voor de huidige scope.
12. De asset-abstractie via `lib/assets.ts` en de next/image-componenten.

Wat nog ontbreekt:

13. Alle homepage secties en alle inhoudelijke pagina's (Diensten, Cases, Over, Contact).
14. Alle definitieve content en teksten, plus contactgegevens en juridische pagina's.
15. Favicon, iconen, definitief logo en een OG-afbeelding op maat.
16. Sitemap, robots, canonical URLs en per-pagina SEO.
17. Contactformulier, security headers, analytics en cookiebeleid.
18. CI/CD en een werkende deploy naar productie.

Wat eerst aangepakt moet worden:

19. Bouw de homepage (secties en teksten) en lever het definitieve logo plus favicon-set aan; dit is de kern van de website en blokkeert alles.
20. Richt daarna de deploy-pipeline, SEO-basisbestanden (robots, sitemap, canonical) en security headers in, zodat een eerste geloofwaardige livegang mogelijk wordt.
