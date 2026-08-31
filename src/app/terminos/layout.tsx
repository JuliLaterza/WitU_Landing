import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de Wit Ü para descubrir planes, eventos y conectar con personas en la vida real.",
  path: "/terminos",
  keywords: ["términos y condiciones", "condiciones de uso", "Wit Ü términos"],
});

export default function TerminosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
