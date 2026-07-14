import { buttonVariants } from "@/components/ui/button";
import { primaryCta, secondaryCta } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * De call-to-actions van Barou Consulting, op één plek.
 *
 * De primaire CTA krijgt de accentkleur, conform de richtlijn dat het
 * accent alleen voor call-to-actions, links, focus en actieve states is.
 * Beide zijn eenvoudige links (mailto en anchor), dus een `a` volstaat.
 * De label en href komen uit lib/site.ts, zodat ze overal gelijk blijven.
 */

const ctaSize = "h-11 rounded-lg px-6 text-sm";

function PrimaryCta({ className }: { className?: string }) {
  return (
    <a
      href={primaryCta.href}
      className={cn(buttonVariants({ variant: "accent" }), ctaSize, className)}
    >
      {primaryCta.label}
    </a>
  );
}

function SecondaryCta({ className }: { className?: string }) {
  return (
    <a
      href={secondaryCta.href}
      className={cn(buttonVariants({ variant: "outline" }), ctaSize, className)}
    >
      {secondaryCta.label}
    </a>
  );
}

export { PrimaryCta, SecondaryCta };
