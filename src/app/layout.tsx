import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Wit Ü | Planes, eventos y gente nueva en la vida real",
    template: "%s | Wit Ü",
  },
  description: "Encontrá planes, eventos y personas con intereses parecidos. Wit Ü te ayuda a salir, conocer gente nueva y conectar en la vida real.",
  keywords: [
    "planes",
    "donde salir",
    "conocer gente",
    "hacer amigos",
    "eventos",
    "app para conocer gente",
    "planes para hacer",
    "conectar en la vida real",
  ],
  authors: [{ name: "Wit Ü Team" }],
  creator: "Wit Ü",
  publisher: "Wit Ü",
  category: "social networking",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Wit Ü | Planes, eventos y gente nueva en la vida real",
    description: "Encontrá planes, eventos y personas con intereses parecidos para salir y conectar en la vida real.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: defaultOgImage,
        alt: "Wit Ü - planes, eventos y conexiones reales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wit Ü | Planes, eventos y gente nueva en la vida real",
    description: "Encontrá planes, eventos y personas con intereses parecidos para salir y conectar en la vida real.",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/logo_witu.png`,
    sameAs: [
      "https://www.instagram.com/witu.app/",
      "https://www.tiktok.com/@witu.app",
      "https://linkedin.com/company/witu-app",
    ],
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "iOS, Android",
    description: "App para encontrar planes, eventos y personas con intereses parecidos para conectar en la vida real.",
    url: siteUrl,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: "Wit Ü ayuda a encontrar planes, eventos y personas para conocer gente nueva en la vida real.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo puedo conocer gente nueva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wit Ü conecta personas a partir de planes y eventos, para que conocer gente nueva sea más natural que empezar solo desde un chat.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si no sé dónde salir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podés entrar a Wit Ü para descubrir eventos, salidas y actividades según tus intereses, y encontrar personas que también quieran ir.",
        },
      },
      {
        "@type": "Question",
        name: "¿Wit Ü es una app de citas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es una app de citas tradicional. Wit Ü pone primero los planes y eventos para que las conexiones nazcan en contextos reales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo usar Wit Ü aunque vaya sin grupo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La idea es que puedas sumarte a planes y conectar antes con otras personas para no llegar sin conocer a nadie.",
        },
      },
    ],
  };

  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
