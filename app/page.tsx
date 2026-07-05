import { Container } from "@/components/layout/container";

/**
 * Tijdelijke holdingpagina.
 *
 * De echte homepage wordt in een volgende milestone opgebouwd uit
 * losse secties. Deze pagina bevestigt alleen dat de fundering staat.
 */
export default function Page() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <p className="text-muted-foreground font-mono text-sm">
          Barou Consulting
        </p>
        <h1 className="font-heading text-foreground mt-2 text-2xl font-semibold">
          Fundering gereed
        </h1>
      </Container>
    </main>
  );
}
