import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { mainNav, siteConfig } from "@/lib/site";

/**
 * Globale footer met het logo, een korte positionering, de navigatie,
 * directe contactgegevens en de bedrijfsgegevens. Alle gegevens komen
 * uit lib/site.ts.
 */
function Footer() {
  const year = new Date().getFullYear();
  const { contact, business, location } = siteConfig;

  const linkClass =
    "text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

  return (
    <footer className="border-border/60 border-t">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <Link
            href="/"
            className="focus-visible:ring-ring inline-flex items-center rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Logo height={26} />
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Gespecialiseerde Microsoft 365 consultancy. Direct contact, korte
            lijnen en specialistische kennis.
          </p>
          <p className="text-muted-foreground text-sm">{location.servedNote}</p>
        </div>

        <nav aria-label="Footernavigatie">
          <h2 className="font-heading mb-4 text-sm font-medium">Navigatie</h2>
          <ul className="space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading mb-4 text-sm font-medium">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${contact.email}`} className={linkClass}>
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className={linkClass}>
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-border/60 border-t">
        <Container className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground">
            © {year} {siteConfig.name}
          </p>
          <p className="text-muted-foreground">
            KvK {business.kvk} · BTW {business.btw}
          </p>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
