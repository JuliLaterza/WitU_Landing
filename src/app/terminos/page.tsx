"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";

const copy = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "Términos y Condiciones",
    updated: "Última actualización",
    sections: [
      {
        title: "1. Aceptación de los términos",
        body: "Al acceder y utilizar Wit Ü, aceptás estos términos de uso. Si no estás de acuerdo, no debés utilizar la aplicación.",
      },
      {
        title: "2. Descripción del servicio",
        body: "Wit Ü conecta personas a través de eventos y actividades reales para facilitar conexiones auténticas basadas en intereses compartidos.",
      },
      {
        title: "3. Registro y cuenta",
        body: "Debés proporcionar información precisa y mantener la confidencialidad de tu cuenta. Debés ser mayor de 18 años.",
      },
      {
        title: "4. Uso aceptable",
        body: "Te comprometés a usar la app de forma legal, respetuosa y sin afectar a otros usuarios ni a la plataforma.",
      },
      {
        title: "5. Contenido del usuario",
        body: "Conservás tus derechos sobre tu contenido, pero nos autorizás a usarlo para operar y mejorar la plataforma.",
      },
      {
        title: "6. Privacidad",
        body: "Tu uso también está regido por nuestra Política de Privacidad.",
      },
      {
        title: "7. Modificaciones",
        body: "Podemos modificar estos términos. El uso continuado de la app implica aceptación de los cambios.",
      },
      {
        title: "8. Limitación de responsabilidad",
        body: "Wit Ü se ofrece \"tal cual\" y no asumimos responsabilidad por daños derivados del uso de la app.",
      },
      {
        title: "9. Contacto",
        body: "Si tenés preguntas sobre estos términos, contactanos en wituapp@gmail.com.",
      },
    ],
    footer: {
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      delete: "Eliminar cuenta",
      copyright: "© 2025 Wit Ü. Todos los derechos reservados.",
    },
  },
  en: {
    back: "Back to home",
    switch: "🇪🇸 ES",
    title: "Terms and Conditions",
    updated: "Last updated",
    sections: [
      {
        title: "1. Acceptance of terms",
        body: "By accessing and using Wit Ü, you agree to these terms of use. If you disagree, you should not use the application.",
      },
      {
        title: "2. Service description",
        body: "Wit Ü connects people through real-world events and activities to create authentic connections based on shared interests.",
      },
      {
        title: "3. Registration and account",
        body: "You must provide accurate information and keep your account credentials secure. You must be 18+ to use the app.",
      },
      {
        title: "4. Acceptable use",
        body: "You agree to use the app legally, respectfully, and without harming other users or platform operations.",
      },
      {
        title: "5. User content",
        body: "You retain rights to your content, but grant us permission to use it to operate and improve the platform.",
      },
      {
        title: "6. Privacy",
        body: "Your use is also governed by our Privacy Policy.",
      },
      {
        title: "7. Changes",
        body: "We may update these terms. Continued use of the app means acceptance of those changes.",
      },
      {
        title: "8. Limitation of liability",
        body: "Wit Ü is provided \"as is\" and we are not liable for damages resulting from app usage.",
      },
      {
        title: "9. Contact",
        body: "If you have questions about these terms, contact us at wituapp@gmail.com.",
      },
    ],
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      delete: "Delete account",
      copyright: "© 2025 Wit Ü. All rights reserved.",
    },
  },
} as const;

export default function TerminosPage() {
  const { language, toggleLanguage } = useAppLanguage();
  const t = copy[language];
  const formattedDate = new Date().toLocaleDateString(language === "en" ? "en-US" : "es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/assets/images/logo_witu.png" 
                alt="Wit Ü Logo" 
                width={96}
                height={32}
                className="w-20 sm:w-24 h-6 sm:h-8"
              />
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {t.switch}
              </button>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t.back}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.title}</h1>
          
          <div className="text-sm text-gray-600 mb-8">
            <p>{t.updated}: {formattedDate}</p>
          </div>

          <div className="space-y-8">
            {t.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.body}{" "}
                  {section.title.includes("Privacidad") || section.title.includes("Privacy") ? (
                    <Link href="/privacidad" className="text-yellow-600 hover:text-yellow-700 underline">
                      {t.footer.privacy}
                    </Link>
                  ) : null}
                </p>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <Image 
                  src="/assets/images/logo_witu.png" 
                  alt="Wit Ü Logo" 
                  width={96}
                  height={32}
                  className="w-20 h-6"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
                <Link href="/privacidad" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.privacy}</Link>
                <Link href="/terminos" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.terms}</Link>
                <Link href="/delete-account" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.delete}</Link>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
