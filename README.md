# Barou Consulting

De officiële website van Barou Consulting, een gespecialiseerde Microsoft 365 consultancy.

Domein: [barouconsulting.nl](https://barouconsulting.nl)

## Techniek

| Onderdeel   | Keuze                                        |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 15 (App Router)                      |
| UI-runtime  | React 19                                     |
| Taal        | TypeScript (strict)                          |
| Styling     | Tailwind CSS v4                              |
| Componenten | shadcn/ui (Base UI + Lucide)                 |
| Animatie    | Framer Motion                                |
| Fonts       | Geist (headings), Inter (body) via next/font |
| Linting     | ESLint (flat config)                         |
| Formatting  | Prettier                                     |

## Aan de slag

Vereist: Node.js 20 of hoger.

```bash
npm install
npm run dev
```

De applicatie draait op [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Omschrijving                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start de ontwikkelserver (Turbopack) |
| `npm run build` | Bouwt de productieversie             |
| `npm run start` | Start de productieserver             |
| `npm run lint`  | Draait ESLint                        |

## Projectstructuur

```text
app/            Routes en globale layout (App Router)
components/
  layout/       Structurele componenten (Header, Footer, Container, Section)
  home/         Secties van de homepage
  ui/           Herbruikbare UI-primitieven (shadcn/ui)
  shared/       Gedeelde componenten en providers
content/        Redactionele inhoud (pagina's, diensten, cases)
docs/           Documentatie (architectuur, brand, content, seo)
hooks/          Herbruikbare React-hooks
lib/            Helpers, configuratie en fonts
styles/         Globale stijlen en design tokens
types/          Gedeelde TypeScript-types
public/         Statische assets (logo, afbeeldingen, iconen)
scripts/        Onderhouds- en buildscripts
```

## Conventies

- Component driven development. Iedere sectie is een op zichzelf staand component.
- Aliassen via `@/` verwijzen naar de projectroot.
- Kleuren en typografie lopen via de design tokens in `styles/globals.css`.
- Kleine commits op feature branches. Geen tijdelijke oplossingen.

Zie [CLAUDE.md](./CLAUDE.md) voor de volledige richtlijnen over positionering, design en schrijfstijl.
