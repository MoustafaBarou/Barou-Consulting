import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PrimaryCta } from "@/components/shared/cta";
import { LinkedInIcon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site";

/**
 * Afsluitende call-to-action. Maakt de eerste stap klein en zet de
 * directe contactgegevens dichtbij, als klikbare links.
 */
function Cta() {
  const { contact } = siteConfig;
  const linkClass =
    "text-primary-foreground decoration-primary-foreground/40 hover:decoration-primary-foreground focus-visible:ring-ring inline-flex items-center gap-2 rounded-sm font-medium underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

  return (
    <Section id="contact" className="scroll-mt-24">
      <Container>
        <Reveal className="bg-primary text-primary-foreground rounded-2xl px-8 py-12 sm:px-12 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              Zullen we kennismaken?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Vertel me kort waar u tegenaan loopt. In een vrijblijvend gesprek
              kijken we naar uw situatie en de eerste stappen.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <PrimaryCta className="self-start" />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
              <a href={`mailto:${contact.email}`} className={linkClass}>
                <Mail className="size-4" aria-hidden />
                {contact.email}
              </a>
              <a href={contact.phoneHref} className={linkClass}>
                <Phone className="size-4" aria-hidden />
                {contact.phone}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export { Cta };
