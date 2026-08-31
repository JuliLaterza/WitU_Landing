import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Eliminar cuenta",
  description:
    "Información para solicitar la eliminación de una cuenta de Wit Ü y conocer cómo se gestionan los datos asociados.",
  path: "/delete-account",
  keywords: ["eliminar cuenta", "borrar cuenta Wit Ü", "eliminación de datos"],
});

export default function DeleteAccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
