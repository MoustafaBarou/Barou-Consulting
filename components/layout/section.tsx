import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Section verzorgt het verticale ritme tussen de blokken op een pagina.
 * De horizontale marges komen van de Container, zodat beide los van
 * elkaar herbruikbaar blijven.
 *
 * De `spacing`-variant regelt de hoeveelheid witruimte boven en onder.
 */
const spacingMap = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
} as const;

type SectionProps = ComponentProps<"section"> & {
  spacing?: keyof typeof spacingMap;
};

function Section({ className, spacing = "md", ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(spacingMap[spacing], className)}
      {...props}
    />
  );
}

export { Section };
