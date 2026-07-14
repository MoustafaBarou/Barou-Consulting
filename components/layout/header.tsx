import Link from "next/link";

import { Availability } from "@/components/shared/availability";
import { Container } from "@/components/layout/container";
import { PrimaryCta } from "@/components/shared/cta";
import { Logo } from "@/components/shared/logo";
import { mainNav } from "@/lib/site";

/**
 * Globale header met het logo, de hoofdnavigatie en de primaire CTA.
 * Een skip-link brengt toetsenbordgebruikers direct naar de hoofdinhoud.
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

        <div className="flex items-center gap-4">
          <Availability />
          <PrimaryCta className="h-9 px-4" />
        </div>
      </Container>
    </header>
  );
}

export { Header };
