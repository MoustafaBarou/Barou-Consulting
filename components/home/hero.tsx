import { CheckCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PrimaryCta, SecondaryCta } from "@/components/shared/cta";
import { LinkedInIcon } from "@/components/shared/icons";
import { Portrait } from "@/components/shared/portrait";
import { siteConfig } from "@/lib/site";

/**
 * Hero: wie Moustafa is en waarvoor je hem inhuurt, met een gezicht erbij.
 * Gericht op een inhurende partij, niet op een koper van een dienstenpakket.
 * Bevat de enige h1 van de pagina.
 */
function Hero() {
  const { person, contact } = siteConfig;

  return (
    <Section spacing="lg">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-semibold sm:text-5xl">
            Microsoft 365 &amp; Modern Workplace consultant
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Zelfstandig Microsoft 365- en Modern Workplace-consultant. Ik richt
            digitale werkplekken veilig, modern en beheersbaar in, van Intune en
            Entra ID tot Conditional Access en security. Direct inzetbaar, met
            korte lijnen en één vast aanspreekpunt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <SecondaryCta />
          </div>

          {/* items-start houdt het vinkje naast de eerste regel wanneer de
              tekst op smalle schermen over twee regels breekt. */}
          <p className="text-muted-foreground mt-6 flex items-start gap-2 text-sm">
            <CheckCircle
              className="text-success mt-0.5 size-4 shrink-0"
              aria-hidden
            />
            Gecertificeerd consultant, van inrichting tot beheer
          </p>
        </div>

        <div className="mx-auto w-full max-w-xs lg:mx-0 lg:ml-auto">
          {/* Het portret is dankzij max-w-xs op elk breekpunt 320px breed.
              Een exacte sizes-hint laat de browser de juiste variant kiezen,
              zodat de cirkel ook op een 3x-scherm scherp blijft. */}
          <Portrait
            shape="circle"
            priority
            sizes="320px"
            className="ring-border shadow-sm ring-1"
          />
          <div className="mt-5 flex items-center gap-3">
            <div>
              <p className="font-heading font-medium">{person.name}</p>
              <p className="text-muted-foreground text-sm">{person.role}</p>
            </div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn-profiel van ${person.name}`}
              className="text-muted-foreground hover:text-brand-accent focus-visible:ring-ring ml-auto inline-flex rounded-sm p-1 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { Hero };
