import { SectionEyebrow } from "@/components/home/section-eyebrow";
import { cn } from "@/lib/utils";

/**
 * Terugkerend kop-patroon voor de homepage secties: een kleine
 * bovenkop, de sectietitel als h2 en een optionele leadzin. Zo houden
 * alle secties dezelfde ritmiek en typografie.
 */
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
