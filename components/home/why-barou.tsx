import { BadgeCheck, Building2, Zap } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

/**
 * WhyBarou: waarom je juist deze consultant inhuurt. Staat bewust direct
 * onder de hero, omdat een inhurende partij eerst wil weten wie hij voor
 * zich heeft, voordat hij problemen en diensten leest.
 *
 * De ervaring is Moustafa's eigen track record, opgedaan in verschillende
 * rollen en omgevingen. Het zijn nadrukkelijk geen klantopdrachten van
 * Barou Consulting.
 */
const reasons = [
  {
    icon: BadgeCheck,
    title: "Microsoft-gecertificeerd consultant",
    description:
      "Gecertificeerd op het niveau van Microsoft 365-beheer en de moderne werkplek: Administrator Expert en Endpoint Administrator Associate. Aantoonbare kennis, online te verifiëren bij Microsoft.",
  },
  {
    icon: Zap,
    title: "Direct inzetbaar en zelfstandig",
    description:
      "Ik werk zelfstandig en neem eigenaarschap, van ontwerp tot beheer. Korte lijnen, één vast aanspreekpunt, en snel productief in een bestaande omgeving.",
  },
  {
    icon: Building2,
    title: "Ervaring bij uiteenlopende organisaties",
    description:
      "Brede ervaring opgedaan in verschillende rollen en omgevingen, van MSP's tot interne IT-teams. Microsoft 365, Intune, Entra ID, migraties en security.",
  },
];

function WhyBarou() {
  return (
    <Section>
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Waarom mij"
          title="Waarom mij inhuren"
          lead="U huurt geen bureau in, maar één consultant die het werk zelf doet. U weet altijd met wie u praat en wie de verantwoording draagt."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col gap-3">
                <span className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-lg">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-heading text-base leading-snug font-medium">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <a
          href="#certificeringen"
          className="text-brand-accent focus-visible:ring-ring inline-flex rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Bekijk de certificeringen
        </a>
      </Container>
    </Section>
  );
}

export { WhyBarou };
