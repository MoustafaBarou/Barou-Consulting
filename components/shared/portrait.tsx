import Image from "next/image";

import { brandAssets } from "@/lib/assets";
import { cn } from "@/lib/utils";

/**
 * Vorm van het portret.
 *
 * `rounded` toont het volledige staande portret als afgeronde rechthoek.
 * `circle` snijdt het bij tot een cirkel. Omdat de bron staand is
 * (896x1152), wordt er vanaf de bovenkant uitgesneden. Zo houdt het hoofd
 * lucht boven zich en komt het niet tegen de rand van de cirkel aan.
 */
const shapeMap = {
  rounded: "rounded-2xl",
  circle: "aspect-square rounded-full object-top",
} as const;

type PortraitProps = {
  className?: string;
  /** Alleen aanzetten voor het portret in de hero boven de vouw. */
  priority?: boolean;
  /** Responsieve grootte-hint voor de browser. */
  sizes?: string;
  alt?: string;
  shape?: keyof typeof shapeMap;
};

/**
 * Het professionele portret van Barou Consulting.
 *
 * Wordt als vertrouwenselement gebruikt, nooit als decoratie.
 * `object-cover` houdt de uitsnede altijd in verhouding, zodat het beeld
 * niet vervormt.
 */
function Portrait({
  className,
  priority = false,
  sizes = "(min-width: 1024px) 28rem, 80vw",
  alt,
  shape = "rounded",
}: PortraitProps) {
  return (
    <Image
      src={brandAssets.portrait.src}
      alt={alt ?? brandAssets.portrait.alt}
      width={brandAssets.portrait.width}
      height={brandAssets.portrait.height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full object-cover", shapeMap[shape], className)}
    />
  );
}

export { Portrait };
