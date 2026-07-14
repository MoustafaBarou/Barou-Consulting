import { Bot, ShieldCheck, Users } from "lucide-react";

import { SectionEyebrow } from "@/components/home/section-eyebrow";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GitHubIcon } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { conditionalAccessBaseline } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Uitgelicht: de openbare Conditional Access baseline op GitHub.
 *
 * Staat direct na de praktijk-sectie, als verifieerbaar bewijs bij de
 * Conditional Access-kaart daar. De herkomst wordt expliciet benoemd: dit is
 * een bewerking en onderhoud van het Zero Trust-framework van Microsoft, geen
 * eigen uitvinding. Die eerlijkheid is voor een security-specialist zelf een
 * kwaliteitssignaal.
 */
const highlightIcons = [Users, ShieldCheck, Bot];

function Baseline() {
  const { name, repoUrl, personas, highlights } = conditionalAccessBaseline;

  return (
    <Section id="baseline" className="scroll-mt-24">
      <Container>
        <Card>
          <CardContent className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-12">
            <div className="space-y-5">
              <SectionEyebrow>Open source</SectionEyebrow>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                {name}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Een praktische Conditional Access baseline voor Microsoft 365,
                die ik onderhoud en openlijk deel op GitHub. Gebaseerd op het
                framework van Microsoft voor Zero Trust, door mij vereenvoudigd,
                toegespitst op de praktijk en actueel gehouden met de nieuwste
                ontwikkelingen.
              </p>

              <div className="flex flex-wrap gap-2">
                {personas.map((persona) => (
                  <span
                    key={persona}
                    className="bg-secondary text-secondary-foreground rounded-md px-2.5 py-1 font-mono text-xs"
                  >
                    {persona}
                  </span>
                ))}
              </div>

              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Bekijk de ${name} op GitHub, opent in een nieuw tabblad`}
                className={cn(
                  buttonVariants({ variant: "accent" }),
                  "h-11 gap-2 rounded-lg px-6 text-sm",
                )}
              >
                <GitHubIcon className="size-4" />
                Bekijk op GitHub
              </a>
            </div>

            <ul className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlightIcons[index] ?? ShieldCheck;

                return (
                  <li key={highlight.title} className="flex gap-4">
                    <span className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-heading text-base leading-snug font-medium">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

export { Baseline };
