import { KeyRound, Laptop, MailCheck, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

/**
 * Aanpak in de praktijk. Bewust geen "cases": dit zijn concrete
 * voorbeelden van werk dat Moustafa als Modern Workplace consultant heeft
 * gedaan, niet betaalde klantopdrachten van Barou Consulting. Geen
 * klantnamen, geen verzonnen cijfers. Wel concreet en verifieerbaar werk.
 */
const examples = [
  {
    icon: Laptop,
    label: "Apparaatbeheer",
    title: "Apparaten volledig geautomatiseerd uitgerold",
    description:
      "Intune ingericht met Entra ID Join en Windows Autopilot. Nieuwe apparaten zijn automatisch en volgens de regels werkklaar, zonder handwerk voor de beheerder.",
  },
  {
    icon: KeyRound,
    label: "Toegang en identiteit",
    title: "Toegang ingericht volgens Zero Trust",
    description:
      "Conditional Access en MFA organisatiebreed opgezet volgens least privilege. Beheerderstoegang geregeld met Privileged Identity Management, zodat rechten alleen gelden wanneer dat nodig is.",
  },
  {
    icon: MailCheck,
    label: "Migratie en e-mail",
    title: "Migraties uitgevoerd en de mailstroom gehard",
    description:
      "Tenant-to-tenant en Exchange Online migraties gedaan. De mailflow opnieuw ingericht en beveiligd met SPF, DKIM en DMARC tegen phishing en misbruik van de afzendernaam.",
  },
  {
    icon: ShieldCheck,
    label: "Beveiliging en compliance",
    title: "Omgeving gehard op basis van assessments",
    description:
      "Microsoft 365 aangescherpt na security assessments. Microsoft Defender ingezet voor het opsporen van dreigingen en Microsoft Purview voor het beschermen van gegevens en de AVG.",
  },
];

function Practice() {
  return (
    <Section id="aanpak" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Uit de praktijk"
          title="Dit soort werk doe ik"
          lead="Voorbeelden van werk dat ik als Modern Workplace consultant heb uitgevoerd. Geen klantnamen, wel concreet. Zo ziet de inhoud van een opdracht eruit."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {examples.map(({ icon: Icon, label, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-lg">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                    {label}
                  </span>
                </div>
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
      </Container>
    </Section>
  );
}

export { Practice };
