import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Sumá tu evento a Wit Ü",
  description:
    "Convertí tu evento en una experiencia social desde antes de empezar. Wit Ü ayuda a organizadores a conectar asistentes y potenciar sus resultados.",
  path: "/sumar-evento",
  keywords: ["sumar evento", "eventos", "organizar eventos", "app para eventos", "potenciar eventos"],
});

export default function SumarEventoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
