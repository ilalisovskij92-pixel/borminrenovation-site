import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://borminrenovation.ch";
const siteName = "Bormin Rénovation";
const siteDescription =
  "Construction & rénovation tous corps de métier en Suisse romande. 17 ans d'expérience. Devis sous 48h, prix fixe.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bormin Rénovation — Construction & Rénovation à Vevey, Suisse romande",
    template: "%s — Bormin Rénovation",
  },
  description: siteDescription,
  keywords: [
    "rénovation Vevey",
    "construction Vaud",
    "rénovation Lausanne",
    "rénovation Morges",
    "Suisse romande rénovation",
    "Artem Bormin",
    "Bormin Rénovation",
    "rénovation appartement",
    "rénovation salle de bain",
    "plomberie Vevey",
    "menuiserie Vaud",
  ],
  authors: [{ name: "Artem Bormin" }],
  creator: siteName,
  openGraph: {
    title: "Bormin Rénovation — Construction & Rénovation, Vevey",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "fr_CH",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bormin Rénovation — Construction & Rénovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bormin Rénovation — Construction & Rénovation, Vevey",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  appleWebApp: {
    capable: true,
    title: "Bormin Rénovation",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false, // we render +41 76 ... ourselves; keep iOS Safari from over-styling
    email: false,
    address: false,
    date: false,
    url: false,
  },
  // Local-business geo (helps Vevey / canton Vaud Maps + local search)
  other: {
    "geo.region": "CH-VD",
    "geo.placename": "Vevey",
    "geo.position": "46.4630;6.8401",
    ICBM: "46.4630, 6.8401",
  },
};

// Viewport + theme-colour (Next.js 15 separate export)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#2E2F38" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Skip-link for keyboard / screen-reader navigation (WCAG 2.4.1) */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-bg focus:px-4 focus:py-2 focus:outline-2 focus:outline-accent"
        >
          Aller au contenu
        </a>

        {/* JSON-LD — LocalBusiness + Person + Service for rich SEO results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteUrl}/#business`,
                  name: "Bormin Rénovation",
                  alternateName: "Artem Bormin Construction",
                  description: siteDescription,
                  url: siteUrl,
                  telephone: "+41765314652",
                  priceRange: "$$",
                  image: `${siteUrl}/og-image.jpg`,
                  logo: `${siteUrl}/logo.svg`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rue du Clos 8",
                    postalCode: "1800",
                    addressLocality: "Vevey",
                    addressRegion: "VD",
                    addressCountry: "CH",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 46.463,
                    longitude: 6.8401,
                  },
                  areaServed: [
                    { "@type": "City", name: "Vevey" },
                    { "@type": "City", name: "Lausanne" },
                    { "@type": "City", name: "Morges" },
                    { "@type": "City", name: "Montreux" },
                    { "@type": "AdministrativeArea", name: "Suisse romande" },
                  ],
                  founder: { "@id": `${siteUrl}/#founder` },
                  foundingDate: "2009",
                  knowsLanguage: ["fr", "en", "ru", "uk"],
                  currenciesAccepted: "CHF",
                  paymentAccepted: "Virement bancaire, TWINT, Espèces",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "08:00",
                      closes: "18:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "09:00",
                      closes: "13:00",
                    },
                  ],
                  sameAs: [
                    "https://facebook.com/borminrenovation",
                    "https://g.page/r/CV-nXy7PSi1UEAI",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services Bormin Rénovation",
                    itemListElement: [
                      {
                        name: "Rénovation clé en main",
                        description:
                          "Rénovation complète d'appartement ou de maison à Vevey, Lausanne, Morges et dans tout le canton de Vaud. Démolition, plomberie, électricité, finitions, coordination des corps de métier.",
                        serviceType: "Rénovation complète",
                      },
                      {
                        name: "Plomberie",
                        description:
                          "Installation, dépannage et raccordements pour salles de bain, cuisines et chauffage. Interventions d'urgence en Suisse romande.",
                        serviceType: "Plomberie",
                      },
                      {
                        name: "Menuiserie & fenêtres",
                        description:
                          "Pose et remplacement de portes, fenêtres, escaliers et agencements sur mesure.",
                        serviceType: "Menuiserie",
                      },
                      {
                        name: "Maçonnerie",
                        description:
                          "Gros œuvre, cloisons, ouvertures, modifications structurelles. Murs porteurs et permis communaux.",
                        serviceType: "Maçonnerie",
                      },
                      {
                        name: "Carrelage & sols",
                        description:
                          "Carrelage pour salles de bain et cuisines, pose de parquet, stratifié et sols coulés.",
                        serviceType: "Carrelage",
                      },
                      {
                        name: "Peinture & finitions",
                        description:
                          "Peinture intérieure et extérieure, plâtrerie, effets décoratifs pour particuliers et commerces.",
                        serviceType: "Peinture",
                      },
                    ].map((s) => ({
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: s.name,
                        description: s.description,
                        serviceType: s.serviceType,
                        provider: { "@id": `${siteUrl}/#business` },
                        areaServed: [
                          { "@type": "City", name: "Vevey" },
                          { "@type": "City", name: "Lausanne" },
                          { "@type": "City", name: "Morges" },
                          { "@type": "City", name: "Montreux" },
                        ],
                      },
                    })),
                  },
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#founder`,
                  name: "Artem Bormin",
                  jobTitle: "Fondateur · Artisan",
                  worksFor: { "@id": `${siteUrl}/#business` },
                  knowsLanguage: ["fr", "en", "ru", "uk"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: siteName,
                  inLanguage: "fr",
                  publisher: { "@id": `${siteUrl}/#business` },
                },
              ],
            }),
          }}
        />
        {children}

        {/* Vercel Analytics + Speed Insights — cookieless, no banner needed */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
