import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Centro de Seguridad",
  description:
    "Conocé las herramientas, recomendaciones y políticas de seguridad de Wit Ü para conectar personas en eventos y planes reales.",
  path: "/safety",
  keywords: ["seguridad", "seguridad en eventos", "conocer gente seguro", "Wit Ü seguridad"],
});

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
