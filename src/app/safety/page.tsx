"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";

type SafetySection = {
  title: string;
  id?: string;
  body?: string;
  items: readonly string[];
  warning?: string;
};

type SafetyCopy = {
  back: string;
  switch: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: readonly SafetySection[];
  contactTitle: string;
  contactBody: string;
  contactNote: string;
  footer: {
    privacy: string;
    terms: string;
    safety: string;
    age: string;
    delete: string;
    copyright: string;
  };
};

const copy: Record<"es" | "en", SafetyCopy> = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "⭐ Wit Ü - Centro de Seguridad",
    subtitle: "Tu bienestar es lo más importante",
    intro:
      "Wit Ü existe para conectar personas en el mundo real. Por eso, la seguridad es uno de nuestros pilares fundamentales. Este espacio reúne las herramientas y medidas que aplicamos para que tu experiencia sea segura y positiva.",
    sections: [
      {
        title: "👥 1. Seguridad de la comunidad",
        body: "Creamos un entorno donde podés relacionarte con tranquilidad:",
        items: [
          "Perfiles creados con fotos reales.",
          "Información visible solo para personas que asistirán al mismo evento.",
          "Eliminación de cuentas falsas o sospechosas.",
          "Tolerancia cero a contenido ofensivo, violento o inapropiado.",
        ],
      },
      {
        title: "🔐 2. Restricción de edad y protección de menores",
        id: "easi-standards",
        items: [
          "Wit Ü es exclusivamente para mayores de 18 años.",
          "No está permitido que personas menores creen una cuenta o utilicen la app.",
          "Si detectamos un perfil de menor, se bloquea de forma inmediata y permanente.",
          "Si alguien declara una edad falsa, aplicamos sanciones inmediatas.",
        ],
      },
      {
        title: "🛡️ 3. Comportamientos no permitidos",
        body: "Para proteger a la comunidad, no permitimos:",
        items: [
          "Solicitudes de dinero o favores económicos.",
          "Acoso, amenazas o lenguaje violento.",
          "Enlaces sospechosos, spam o intentos comerciales.",
          "Suplantación de identidad o perfiles fraudulentos.",
          "Comportamiento inapropiado durante un encuentro.",
        ],
        warning:
          "Actuamos con rapidez ante cualquier comportamiento inapropiado y aplicamos sanciones inmediatas, incluyendo el bloqueo permanente del perfil.",
      },
      {
        title: "🎉 4. Seguridad en eventos",
        body: "Como Wit Ü sucede en la vida real, te acompañamos con herramientas y recomendaciones:",
        items: [
          "Podés elegir un contacto de confianza dentro de la app.",
          "Botón de emergencia para enviar ayuda con ubicación por WhatsApp.",
          "Compartí tu ubicación y elegí lugares públicos para encontrarte.",
          "Respetá tus límites y los de otras personas.",
        ],
      },
      {
        title: "🚨 5. Cómo reportar o bloquear",
        body: "Si algo no te hace sentir segur@, podés actuar en segundos:",
        items: [
          "Reportar perfiles o mensajes desde la app.",
          "Bloquear usuarios de forma inmediata.",
          "Escribirnos a support@witu.me.",
        ],
      },
    ],
    contactTitle: "✉️ Contacto y soporte",
    contactBody: "Si necesitás ayuda, tenés dudas o querés reportar algo:",
    contactNote: "Estamos para acompañarte en cada etapa.",
    footer: {
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      safety: "Seguridad",
      age: "Restricción de edad",
      delete: "Eliminar cuenta",
      copyright: "© 2025 Wit Ü. Todos los derechos reservados.",
    },
  },
  en: {
    back: "Back to home",
    switch: "🇪🇸 ES",
    title: "⭐ Wit Ü - Safety Center",
    subtitle: "Your wellbeing comes first",
    intro:
      "Wit Ü exists to connect people in the real world. Safety is one of our core pillars. This page gathers the tools and policies we use to keep your experience safe and positive.",
    sections: [
      {
        title: "👥 1. Community safety",
        body: "We build an environment where you can connect with confidence:",
        items: [
          "Profiles built with real photos.",
          "Information is visible only to people attending the same event.",
          "Removal of fake or suspicious accounts.",
          "Zero tolerance for offensive, violent, or inappropriate content.",
        ],
      },
      {
        title: "🔐 2. Age restriction and minors protection",
        id: "easi-standards",
        items: [
          "Wit Ü is strictly for users 18+.",
          "Minors are not allowed to create accounts or use the app.",
          "If we detect a minor profile, we permanently block it immediately.",
          "If someone lies about age, we apply immediate sanctions.",
        ],
      },
      {
        title: "🛡️ 3. Prohibited behavior",
        body: "To protect our community, we do not allow:",
        items: [
          "Requests for money or financial favors.",
          "Harassment, threats, or violent language.",
          "Suspicious links, spam, or commercial scams.",
          "Impersonation or fraudulent profiles.",
          "Inappropriate behavior during in-person meetups.",
        ],
        warning:
          "We act quickly on any inappropriate behavior and apply immediate sanctions, including permanent account bans.",
      },
      {
        title: "🎉 4. Event safety",
        body: "Because Wit Ü happens in real life, we provide support tools and best practices:",
        items: [
          "You can set a trusted contact inside the app.",
          "Emergency button that sends a WhatsApp help message with your location.",
          "Share your location and choose public places to meet.",
          "Respect your limits and other people's limits.",
        ],
      },
      {
        title: "🚨 5. Reporting and blocking",
        body: "If something feels wrong, you can act in seconds:",
        items: [
          "Report profiles or messages from the app.",
          "Block users instantly.",
          "Contact us at support@witu.me.",
        ],
      },
    ],
    contactTitle: "✉️ Contact and support",
    contactBody: "If you need help, have questions, or want to report something:",
    contactNote: "We're here to support you at every stage.",
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      safety: "Safety",
      age: "Age restriction",
      delete: "Delete account",
      copyright: "© 2025 Wit Ü. All rights reserved.",
    },
  },
};

export default function SafetyPage() {
  const { language, toggleLanguage } = useAppLanguage();
  const t = copy[language];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/images/logo_witu.png" alt="Wit Ü Logo" width={96} height={32} className="w-20 sm:w-24 h-6 sm:h-8" />
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

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">{t.subtitle}</p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">{t.intro}</p>
          </div>

          <div className="space-y-12">
            {t.sections.map((section) => (
              <section key={section.title} id={section.id}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.title}</h2>
                {section.body && <p className="text-gray-700 leading-relaxed text-lg mb-4">{section.body}</p>}
                <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {section.warning && (
                  <div className="bg-red-50 rounded-lg p-5 border border-red-200 mt-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{section.warning}</p>
                  </div>
                )}
              </section>
            ))}

            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t.contactTitle}</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">{t.contactBody}</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <a href="mailto:support@witu.me" className="text-yellow-600 hover:text-yellow-700 font-semibold text-xl">📧 support@witu.me</a>
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">{t.contactNote}</p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <Image src="/assets/images/logo_witu.png" alt="Wit Ü Logo" width={96} height={32} className="w-20 h-6" />
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
                <Link href="/privacidad" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.privacy}</Link>
                <Link href="/terminos" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.terms}</Link>
                <Link href="/safety" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">{t.footer.safety}</Link>
                <Link href="/safety#easi-standards" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.age}</Link>
                <Link href="/delete-account" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.delete}</Link>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">{t.footer.copyright}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

