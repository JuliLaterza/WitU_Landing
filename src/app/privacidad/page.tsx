"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";

const copy = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "Política de Privacidad",
    updated: "Última actualización",
    sections: [
      {
        title: "1. Introducción",
        body: "En Wit Ü respetamos tu privacidad y protegemos tu información personal. Esta política explica cómo recopilamos, usamos, compartimos y resguardamos tu información cuando usás la app.",
      },
      {
        title: "2. Información que recopilamos",
        body: "Podemos recopilar información de perfil, correo electrónico, preferencias, ubicación (con consentimiento), datos técnicos del dispositivo y actividad dentro de la app.",
      },
      {
        title: "3. Cómo usamos tu información",
        body: "Usamos estos datos para operar y mejorar el servicio, mostrar contenido relevante, facilitar conexiones, personalizar experiencia, prevenir fraude y cumplir obligaciones legales.",
      },
      {
        title: "4. Compartir información",
        body: "No vendemos tu información personal. Podemos compartirla con proveedores de servicios, por requerimientos legales o ante procesos corporativos como fusiones o adquisiciones.",
      },
      {
        title: "5. Seguridad de los datos",
        body: "Aplicamos medidas técnicas, administrativas y físicas para proteger tus datos frente a accesos no autorizados, alteraciones o pérdidas.",
      },
      {
        title: "6. Tus derechos",
        body: "Podés acceder, corregir o eliminar tus datos, restringir su procesamiento y retirar tu consentimiento. Contactanos a wituapp@gmail.com.",
      },
      {
        title: "7. Retención de datos",
        body: "Conservamos información solo durante el tiempo necesario para los fines descritos o según lo exija la ley.",
      },
      {
        title: "8. Menores de edad",
        body: "Wit Ü está destinada a mayores de 18 años y no recopilamos intencionalmente información de menores.",
      },
      {
        title: "9. Cambios en esta política",
        body: "Podemos actualizar esta política periódicamente y notificaremos cambios relevantes por la app o por correo.",
      },
      {
        title: "10. Contacto",
        body: "Si tenés dudas sobre esta política, escribinos a wituapp@gmail.com.",
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
    title: "Privacy Policy",
    updated: "Last updated",
    sections: [
      {
        title: "1. Introduction",
        body: "At Wit Ü, we respect your privacy and protect your personal information. This policy explains how we collect, use, share, and safeguard your information when you use the app.",
      },
      {
        title: "2. Information we collect",
        body: "We may collect profile information, email, preferences, location (with consent), technical device data, and in-app activity.",
      },
      {
        title: "3. How we use your information",
        body: "We use this data to operate and improve the service, show relevant content, enable connections, personalize your experience, prevent fraud, and comply with legal obligations.",
      },
      {
        title: "4. Information sharing",
        body: "We do not sell personal information. We may share data with service providers, for legal requirements, or in corporate events such as mergers or acquisitions.",
      },
      {
        title: "5. Data security",
        body: "We apply technical, administrative, and physical safeguards to protect your data from unauthorized access, alteration, or loss.",
      },
      {
        title: "6. Your rights",
        body: "You may access, correct, or delete your data, restrict processing, and withdraw consent. Contact us at wituapp@gmail.com.",
      },
      {
        title: "7. Data retention",
        body: "We retain data only for as long as necessary for the purposes described or as required by law.",
      },
      {
        title: "8. Minors",
        body: "Wit Ü is intended for users 18+ and we do not knowingly collect data from minors.",
      },
      {
        title: "9. Changes to this policy",
        body: "We may update this policy periodically and notify relevant changes through the app or by email.",
      },
      {
        title: "10. Contact",
        body: "If you have questions about this policy, contact us at wituapp@gmail.com.",
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

export default function PrivacidadPage() {
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
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
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
