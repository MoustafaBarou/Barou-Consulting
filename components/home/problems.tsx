import {
  MailWarning,
  ScrollText,
  ShieldQuestion,
  UserPlus,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

/**
 * Problems: herkenbare situaties rond Microsoft 365, in gewone taal.
 * Geen angstverhaal, wel herkenning: "dit gaat over ons".
 */
const problems = [
  {
    icon: ShieldQuestion,
    title: "Is onze omgeving eigenlijk wel veilig?",
    description:
      "Instellingen zijn ooit aangezet, maar niemand houdt het geheel in de gaten. U weet niet zeker of Microsoft 365 goed staat.",
  },
  {
    icon: UserPlus,
    title: "Elke nieuwe medewerker kost te veel tijd",
    description:
      "Accounts, rechten en laptops regelt u met de hand. Dat is foutgevoelig en het kost bij elke wijziging opnieuw werk.",
  },
  {
    icon: MailWarning,
    title: "Phishing en toegang houden u bezig",
    description:
      "U maakt zich zorgen over nep-mails uit naam van uw organisatie, en over de vraag wie eigenlijk bij welke gegevens kan.",
  },
  {
    icon: ScrollText,
    title: "Voldoen we aan de regels?",
    description:
      "De AVG is een eis en NIS2 en ISO 27001 komen dichterbij. Het is onduidelijk of uw omgeving daar klaar voor is.",
  },
  {
    icon: Users,
    title: "Geen overzicht, geen vast aanspreekpunt",
    description:
      "Bij een groot bureau schuift het contact steeds door. U mist iemand die uw omgeving echt kent.",
  },
];

function Problems() {
  return (
    <Section>
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Herkenbaar"
          title="Uitdagingen die we vaak tegenkomen"
          lead="Microsoft 365 groeit mee met de organisatie. Zonder vaste hand wordt het al snel onoverzichtelijk. Deze situaties komen vaak terug."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col gap-3">
                <span className="bg-secondary text-primary flex size-10 items-center justify-center rounded-lg">
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
      </Container>
    </Section>
  );
}

export { Problems };
