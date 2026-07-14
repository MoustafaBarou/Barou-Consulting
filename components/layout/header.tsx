import Link from "next/link";

import { Container } from "@/components/layout/container";
import { WhatsAppIcon } from "@/components/shared/icons";
import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { mainNav, whatsappCta } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Globale header met het logo, de hoofdnavigatie en een WhatsApp-knop.
 * Een skip-link brengt toetsenbordgebruikers direct naar de hoofdinhoud.
 *
 * De knop staat in de gewone knopstijl met het WhatsApp-logo in de groene
 * merkkleur ervoor. Een volledig groene knop zou botsen met het merkblauw en
 * de header bont maken. De vorm van het logo doet hier het herkenwerk.
 *
 * "Start een gesprek" blijft de primaire call-to-action in de hero en het
 * contactblok. WhatsApp is hier het laagdrempelige alternatief.
 */
function Header() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
      <a
        href="#hoofdinhoud"
        className="focus:ring-ring focus:bg-background sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2"
      >
        Naar hoofdinhoud
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="focus-visible:ring-ring inline-flex items-center rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Logo height={40} priority />
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappCta.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappCta.ariaLabel}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-9 gap-2 px-4",
          )}
        >
          <WhatsAppIcon className="text-whatsapp size-4" />
          {whatsappCta.label}
        </a>
      </Container>
    </header>
  );
}

export { Header };
