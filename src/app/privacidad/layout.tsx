import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Wit Ü: cómo recopilamos, usamos, almacenamos y protegemos los datos de usuarios de la plataforma.",
  path: "/privacidad",
  keywords: ["política de privacidad", "privacidad Wit Ü", "datos personales"],
});

export default function PrivacidadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
