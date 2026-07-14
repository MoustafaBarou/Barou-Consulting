"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Globale Theme Provider op basis van next-themes.
 *
 * De thema-klasse wordt op het html-element gezet. Standaard staat het
 * light thema aan, passend bij de rustige merkidentiteit van Barou
 * Consulting. De infrastructuur voor een dark thema is aanwezig en kan
 * later worden ingeschakeld.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
