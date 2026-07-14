import Image from "next/image";

import { brandAssets } from "@/lib/assets";
import { cn } from "@/lib/utils";

const aspectRatio = brandAssets.logo.width / brandAssets.logo.height;

type LogoProps = {
  /** Weergavehoogte in pixels. De breedte volgt de beeldverhouding. */
  height?: number;
  className?: string;
  /** Alleen inschakelen wanneer het logo boven de vouw kritisch is. */
  priority?: boolean;
  alt?: string;
};

/**
 * Het logo van Barou Consulting.
 *
 * Gebruikt next/image met een vaste beeldverhouding, zodat er geen
 * layout shift ontstaat. De bron komt uit de centrale asset-config,
 * waardoor een nieuw logobestand geen aanpassing in de componenten vraagt.
 */
function Logo({ height = 32, className, priority = false, alt }: LogoProps) {
  const width = Math.round(height * aspectRatio);

  return (
    <Image
      src={brandAssets.logo.src}
      alt={alt ?? brandAssets.logo.alt}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={cn("block", className)}
    />
  );
}

export { Logo };
