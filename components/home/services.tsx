import {
  ArrowRightLeft,
  ClipboardCheck,
  Gauge,
  MailCheck,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

/**
 * Services: waar Barou Consulting bij helpt. Elke dienst benoemt het
 * probleem dat het oplost, niet alleen de techniek. Bewust jargonarm.
 */
const services = [
  {
    icon: ArrowRightLeft,
    title: "Microsoft 365 inrichting en migratie",
    description:
      "Een nieuwe omgeving opzetten of overstappen van een oude. Ik verhuis mail en gegevens tussen omgevingen met zo min mogelijk hinder voor uw mensen.",
  },
  {
    icon: ShieldCheck,
    title: "Beveiliging en Zero Trust",
    description:
      "Veilige toegang met meervoudige verificatie (MFA) en duidelijke regels via Microsoft Entra ID. Iedereen komt bij precies wat nodig is, niet bij meer.",
  },
  {
    icon: MailCheck,
    title: "E-mailbeveiliging",
    description:
      "Bescherming tegen phishing en misbruik van uw afzendernaam. Met SPF, DKIM en DMARC controleren ontvangers of een mail echt van u komt.",
  },
  {
    icon: MonitorSmartphone,
    title: "Apparaatbeheer met Intune",
    description:
      "Laptops en telefoons rollen automatisch en veilig uit met Intune en Windows Autopilot. Een nieuw apparaat is meteen werkklaar en goed ingesteld.",
  },
  {
    icon: Gauge,
    title: "Beheer, optimalisatie en advies",
    description:
      "Doorlopend beheer en concrete verbeteringen op basis van een heldere doorlichting van uw omgeving. U weet wat er speelt en wat er beter kan.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance en audits",
    description:
      "Meedenken en inrichten richting AVG, NIS2 en ISO 27001. Met Microsoft Purview houd ik gevoelige gegevens op hun plek en voorkom ik dat ze weglekken.",
  },
];

function Services() {
  return (
    <Section id="diensten" className="bg-secondary/40 scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Diensten"
          title="Waar ik u bij help"
          lead="Van eerste inrichting tot doorlopend beheer. Steeds met hetzelfde doel: een omgeving die veilig, beheersbaar en overzichtelijk is."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
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
      </Container>
    </Section>
  );
}

export { Services };
