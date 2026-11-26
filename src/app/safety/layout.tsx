import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Centro de Seguridad y Estándares de Seguridad Infantil",
  description:
    "Estándares de seguridad infantil de Wit Ü: prohibición explícita de la explotación y el abuso sexual infantil (EASI / CSAE), cómo reportar y herramientas de seguridad.",
  path: "/safety",
  keywords: ["seguridad", "seguridad en eventos", "conocer gente seguro", "Wit Ü seguridad", "seguridad infantil", "CSAE", "EASI"],
});

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
