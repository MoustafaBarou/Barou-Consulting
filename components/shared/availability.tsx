import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Beschikbaarheidsindicator: een klein statuslampje met een korte tekst.
 *
 * Dit is een signaal, geen knop. Het staat in de hero bij de naam onder het
 * portret, waar het hoort bij "dit ben ik en dit is mijn status". De tekst en
 * de status komen uit lib/site.ts, zodat de status op één plek aanpasbaar is.
 *
 * De korte tekst staat er zichtbaar bij. De volledige status komt via de
 * tooltip en via een verborgen tekst voor schermlezers.
 */
const dotColor = {
  open: "bg-status-open",
  limited: "bg-status-limited",
  closed: "bg-status-closed",
} as const;

function Availability({ className }: { className?: string }) {
  const { status, label, fullLabel } = siteConfig.availability;
  const color = dotColor[status];

  return (
    <span
      title={fullLabel}
      className={cn("text-muted-foreground flex items-center gap-2", className)}
    >
      <span className="relative flex size-2 shrink-0" aria-hidden>
        <span
          className={cn(
            "status-pulse absolute inline-flex size-full rounded-full opacity-50",
            color,
          )}
        />
        <span
          className={cn("relative inline-flex size-2 rounded-full", color)}
        />
      </span>

      {/* Schermlezers krijgen de volledige status, ziende bezoekers de korte. */}
      <span className="sr-only">{fullLabel}</span>
      <span className="text-sm whitespace-nowrap" aria-hidden>
        {label}
      </span>
    </span>
  );
}

export { Availability };
