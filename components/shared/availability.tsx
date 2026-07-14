import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Beschikbaarheidsindicator: een klein statuslampje met een korte tekst.
 *
 * Dit is een signaal, geen knop. Het staat naast de primaire call-to-action
 * en mag die nooit verdringen. De tekst en de status komen uit lib/site.ts.
 *
 * Op smalle schermen blijft alleen het lampje over, zodat de header niet
 * overvol raakt. De volledige status blijft dan bereikbaar via de tooltip en
 * via een verborgen tekst voor schermlezers.
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

      {/* De volledige status staat er altijd voor schermlezers. De zichtbare
          korte tekst verschijnt pas als er ruimte voor is. */}
      <span className="sr-only">{fullLabel}</span>
      <span className="hidden text-sm whitespace-nowrap lg:inline" aria-hidden>
        {label}
      </span>
    </span>
  );
}

export { Availability };
