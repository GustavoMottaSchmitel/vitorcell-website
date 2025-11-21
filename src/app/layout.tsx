import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vitor Assistência - Assistência Técnica e Venda de Celulares",
    template: "%s | Vitor Assistência"
  },
  description: "Assistência técnica especializada em celulares, venda de smartphones novos e seminovos, troca de aparelhos e acessórios. Conserto rápido com garantia!",
  keywords: [
    "assistência técnica celular",
    "conserto de smartphone",
    "venda de celular",
    "iphone seminovo",
    "troca de celular",
    "acessórios para celular",
    "manutenção de celular",
    "display quebrado",
    "bateria celular",
    "Vitor Cell",
    "Vitor Assistencia"
  ],
  authors: [{ name: "Vitor Assistencia" }],
  creator: "NuvionTECH",
  publisher: "Vitor Assistencia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vitorassistencia.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vitorassistencia.com.br",
    siteName: "Vitor Assistencia",
    title: "Vitor Assistência - Assistência Técnica e Venda de Celulares",
    description: "Assistência técnica especializada em celulares, venda de smartphones novos e seminovos, troca de aparelhos e acessórios.",
    images: [
      {
        url: "/logo-vitorcell.png",
        width: 1200,
        height: 630,
        alt: "Vitor Assistência - Assistência Técnica e Venda de Celulares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitor Assistência - Assistência Técnica e Venda de Celulares",
    description: "Assistência técnica especializada em celulares, venda de smartphones novos e seminovos.",
    images: ["/logo-vitorcell.png"],
    creator: "@vitorassistencia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vitor Cell" />
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vitor Assistencia",
              "description": "Assistência técnica especializada em celulares e venda de smartphones",
              "url": "https://vitorassistencia.com.br",
              "telephone": "+55-27-99614-4142",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Humberto de Campos, 307 - Parque Res. Laranjeiras",
                "addressLocality": "Serra",
                "addressRegion": "ES",
                "postalCode": "29165-310",
                "addressCountry": "BR"
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
              "serviceType": [
                "Cell Phone Repair",
                "Cell Phone Store",
                "Cell Phone Accessories"
              ],
              "areaServed": "Cidade e região",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços e Produtos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Assistência Técnica"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Venda de Celulares"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}