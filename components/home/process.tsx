import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/section-heading";

/**
 * Process: hoe een samenwerking verloopt. Rustig en laagdrempelig,
 * zodat de eerste stap klein en duidelijk voelt.
 */
const steps = [
  {
    title: "Kennismaking",
    description:
      "Een vrijblijvend gesprek over uw situatie en uw vraag. We kijken of ik de juiste persoon ben voor uw omgeving.",
  },
  {
    title: "Analyse",
    description:
      "Ik breng in kaart hoe uw Microsoft 365 er nu voor staat en benoem de belangrijkste risico's en kansen.",
  },
  {
    title: "Plan",
    description:
      "Een concreet voorstel met prioriteiten, in begrijpelijke taal. U weet wat er gebeurt, waarom en in welke volgorde.",
  },
  {
    title: "Uitvoering",
    description:
      "Inrichten of verbeteren, met heldere communicatie onderweg. Zo min mogelijk hinder voor uw mensen.",
  },
  {
    title: "Beheer en optimalisatie",
    description:
      "Doorlopend meekijken en bijsturen, als u dat wilt. Uw omgeving blijft veilig en actueel. Deze stap is optioneel.",
  },
];

function Process() {
  return (
    <Section id="werkwijze" className="bg-secondary/40 scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Zo werken we samen"
          lead="Een duidelijke route van kennismaking tot beheer. Geen verrassingen, geen onnodige stappen."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ title, description }, index) => (
            <li key={title} className="flex gap-4">
              <span
                className="font-heading text-muted-foreground text-2xl font-semibold tabular-nums"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-1">
                <h3 className="font-heading text-base leading-snug font-medium">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export { Process };
