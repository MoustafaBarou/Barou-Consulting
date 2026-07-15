import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { brandAssets } from "@/lib/assets";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { organizationSchema } from "@/lib/structured-data";
import "@/styles/globals.css";

const ogImage = {
  url: brandAssets.logo.src,
  width: brandAssets.logo.width,
  height: brandAssets.logo.height,
  alt: siteConfig.name,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Zonder JavaScript animeert niets. Toon de in-fadende blokken dan
            direct, zodat de content altijd zichtbaar is. Zie
            components/shared/reveal.tsx. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* page-decor tekent de dunne contourlijnen boven in de pagina.
              De kleurwas zelf zit vast op de body. Zie styles/globals.css. */}
          <div className="page-decor relative flex min-h-dvh flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </body>
    </html>
  );
}
