import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Container centreert de inhoud en zorgt voor consistente
 * horizontale marges op alle schermformaten. De maximale breedte
 * houdt de leesbaarheid en de rust in de layout vast.
 */
function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)}
      {...props}
    />
  );
}

export { Container };
