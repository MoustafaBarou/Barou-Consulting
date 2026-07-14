import { Certifications } from "@/components/home/certifications";
import { Cta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { Practice } from "@/components/home/practice";
import { Problems } from "@/components/home/problems";
import { Process } from "@/components/home/process";
import { Services } from "@/components/home/services";
import { WhyBarou } from "@/components/home/why-barou";

/**
 * De homepage van Barou Consulting, samengesteld uit losse secties.
 * De volgorde leidt de bezoeker van herkenning naar vertrouwen naar
 * een concrete eerste stap.
 */
export default function Page() {
  return (
    <main id="hoofdinhoud" className="flex-1">
      <Hero />
      <WhyBarou />
      <Problems />
      <Services />
      <Practice />
      <Process />
      <Certifications />
      <Cta />
    </main>
  );
}
