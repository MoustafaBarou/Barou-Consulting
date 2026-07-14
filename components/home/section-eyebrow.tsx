import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Het sectielabel boven een sectiekop: een kleine pill in de merkkleuren.
 *
 * Bewust geen kapitalen en geen extra letterspatiëring. Het is een rustig
 * label, geen knop en geen decoratie. Kleuren komen uit de eyebrow-tokens,
 * zodat het contrast op één plek geregeld is. Zie styles/globals.css.
 */
function SectionEyebrow({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="section-eyebrow"
      className={cn(
        "bg-eyebrow text-eyebrow-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { SectionEyebrow };
