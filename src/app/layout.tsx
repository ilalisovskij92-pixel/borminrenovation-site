import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: siteUrl,
  },
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
        {/* JSON-LD — Schema.org LocalBusiness for SEO + Google Business Profile alignment */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": siteUrl,
              name: "Bormin Rénovation",
              alternateName: "Artem Bormin Construction",
              description: siteDescription,
              url: siteUrl,
              telephone: "+41765314652",
              priceRange: "$$",
              image: `${siteUrl}/og-image.jpg`,
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
                latitude: 46.4630,
                longitude: 6.8401,
              },
              areaServed: [
                { "@type": "City", name: "Vevey" },
                { "@type": "City", name: "Lausanne" },
                { "@type": "City", name: "Morges" },
                { "@type": "City", name: "Montreux" },
                { "@type": "AdministrativeArea", name: "Suisse romande" },
              ],
              founder: {
                "@type": "Person",
                name: "Artem Bormin",
              },
              foundingDate: "2009",
              knowsLanguage: ["fr", "en", "ru", "uk"],
              sameAs: [
                "https://facebook.com/borminrenovation",
                "https://g.page/r/CV-nXy7PSi1UEAI",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
