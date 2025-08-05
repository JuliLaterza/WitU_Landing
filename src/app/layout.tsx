import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wit Ü - Conecta a través de eventos",
  description: "Wit Ü es la app que conecta personas a través de eventos. Únete a nuestra waitlist y sé el primero en experimentar la nueva forma de conectar.",
  keywords: "eventos, conexión, app, waitlist, networking, social",
  authors: [{ name: "Wit Ü Team" }],
  openGraph: {
    title: "Wit Ü - Conecta a través de eventos",
    description: "Únete a nuestra waitlist y sé el primero en experimentar la nueva forma de conectar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
