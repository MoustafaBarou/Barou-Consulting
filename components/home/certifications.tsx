import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";
import { certifications } from "@/lib/site";

/**
 * Certifications: het sterkste vertrouwenssignaal in deze markt.
 * De Microsoft-certificeringen staan prominent bovenaan, de
 * Cisco-certificaten compacter daaronder. De lijst komt uit lib/site.ts.
 */
const microsoft = certifications.filter((c) => c.category === "microsoft");
const cisco = certifications.filter((c) => c.category === "cisco");

function Certifications() {
  return (
    <Section id="certificeringen" className="scroll-mt-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Certificeringen"
          title="Aantoonbaar gecertificeerd"
          lead="De Microsoft-certificeringen zijn online te verifiëren bij Microsoft. Ze bevestigen de kennis waarmee ik uw omgeving inricht en beheer."
        />

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {microsoft.map((cert) => (
              <Card key={cert.name}>
                <CardContent className="flex items-center gap-5">
                  <Image
                    src={cert.badge}
                    alt={cert.name}
                    width={2000}
                    height={2000}
                    sizes="112px"
                    className="size-28 shrink-0"
                  />
                  <div className="space-y-1">
                    <p className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                      {cert.issuer}
                    </p>
                    <h3 className="font-heading leading-snug font-medium">
                      {cert.name}
                    </h3>
                    {cert.earned ? (
                      <p className="text-muted-foreground text-sm">
                        Behaald in {cert.earned}
                      </p>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6 border-t pt-8">
          <h3 className="text-muted-foreground text-sm font-medium">
            Aanvullende certificaten
          </h3>
          <ul className="grid gap-6 sm:grid-cols-4">
            {cisco.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Image
                  src={cert.badge}
                  alt={cert.name}
                  width={2000}
                  height={2000}
                  sizes="80px"
                  className="size-20"
                />
                <p className="text-muted-foreground text-sm leading-snug">
                  {cert.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { Certifications };
