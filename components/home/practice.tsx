import {
  KeyRound,
  Laptop,
  MailCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/home/section-heading";
import { conditionalAccessBaseline } from "@/lib/site";

/**
 * Aanpak in de praktijk. Bewust geen "cases": dit zijn concrete
 * voorbeelden van werk dat Moustafa als Modern Workplace consultant heeft
 * gedaan, niet betaalde klantopdrachten van Barou Consulting. Geen
 * klantnamen, geen verzonnen cijfers. Wel concreet en verifieerbaar werk.
 */
type Example = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  /** Alleen de Conditional Access-kaart verwijst naar de openbare baseline. */
  link?: { label: string; href: string };
};

const examples: Example[] = [
  {
    icon: Laptop,
    label: "Apparaatbeheer",
    title: "Apparaten volledig geautomatiseerd uitgerold",
    description:
      "Intune ingericht met Entra ID Join en Windows Autopilot. Nieuwe apparaten zijn automatisch en volgens de regels werkklaar, zonder handwerk voor de beheerder.",
  },
  {
    icon: KeyRound,
    label: "Conditional Access",
    title: "Conditional Access ontworpen en ingericht",
    description:
      "Toegangsbeleid volgens Zero Trust, opgezet per gebruikersgroep en met regels op basis van risico. MFA, controle op de staat van het apparaat en het blokkeren van legacy authenticatie. Beheerderstoegang loopt via Privileged Identity Management, zodat rechten alleen gelden wanneer dat nodig is.",
    link: {
      label: "Bekijk mijn baseline op GitHub",
      href: conditionalAccessBaseline.repoUrl,
    },
  },
  {
    icon: MailCheck,
    label: "Migratie en mailverkeer",
    title: "Migraties uitgevoerd en de mailstroom gehard",
    description:
      "Migraties tussen tenants en naar Exchange Online uitgevoerd. De mailstroom opnieuw ingericht en beveiligd met SPF, DKIM en DMARC tegen phishing en misbruik van de afzendernaam.",
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
          {examples.map(({ icon: Icon, label, title, description, link }) => (
            <Card key={title}>
              <CardContent className="flex h-full flex-col gap-3">
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
                {link ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label}, opent in een nieuw tabblad`}
                    className="text-brand-accent focus-visible:ring-ring mt-auto inline-flex items-center gap-2 self-start rounded-sm pt-1 text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <GitHubIcon className="size-4" />
                    {link.label}
                  </a>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { Practice };
