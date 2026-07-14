import { Geist, Geist_Mono, Inter } from "next/font/google";

/**
 * Typografie van Barou Consulting.
 *
 * Geist wordt gebruikt voor headings, Inter voor de bodytekst en
 * Geist Mono voor code of technische details. De fonts worden als
 * CSS-variabelen op het html-element gezet en in globals.css gekoppeld
 * aan de Tailwind-tokens `--font-heading`, `--font-sans` en `--font-mono`.
 */

export const fontHeading = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/** Alle font-variabelen samengevoegd voor gebruik op het html-element. */
export const fontVariables = `${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`;
