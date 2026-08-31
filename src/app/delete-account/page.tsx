"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";

const copy = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "Eliminar Cuenta",
    updated: "Última actualización",
    introTitle: "¿Cómo eliminar tu cuenta de Wit Ü?",
    introBody:
      "Entendemos que a veces necesitás tomar un descanso o eliminar tu cuenta. Una vez eliminada, tu información personal se elimina permanentemente de nuestros sistemas.",
    stepsTitle: "Pasos para eliminar tu cuenta",
    steps: [
      "Abrí la app Wit Ü.",
      "Entrá a tu perfil.",
      "Tocá Configuración o Ajustes.",
      "Buscá la opción Eliminar cuenta.",
      "Confirmá que querés eliminarla.",
      "Escribí ELIMINAR para confirmar.",
    ],
    warningTitle: "¿Qué sucede cuando eliminás tu cuenta?",
    warningLabel: "⚠️ Importante: esta acción es permanente e irreversible",
    warningItems: [
      "Tu perfil será eliminado permanentemente.",
      "Tus fotos y contenido serán eliminados.",
      "Tus conexiones y conversaciones se eliminarán.",
      "No podrás recuperar tu cuenta luego de eliminarla.",
    ],
    alternativesTitle: "Antes de eliminar tu cuenta",
    alternativesBody: "Antes de proceder, considerá estas alternativas:",
    alternativesItems: [
      "Ajustar privacidad para limitar quién puede ver tu perfil.",
      "Eliminar contenido específico sin borrar toda la cuenta.",
    ],
    dataTitle: "Datos que conservamos",
    dataBody:
      "Después de eliminar tu cuenta, podemos conservar información limitada cuando sea requerido por ley para cumplir obligaciones regulatorias, prevenir fraude o resolver disputas.",
    helpTitle: "¿Necesitás ayuda?",
    helpBody: "Si tenés dudas sobre el proceso de eliminación, escribinos y te ayudamos.",
    helpNote: "Estamos acá para ayudarte con cualquier problema.",
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
    title: "Delete Account",
    updated: "Last updated",
    introTitle: "How to delete your Wit Ü account",
    introBody:
      "We understand that sometimes you may need a break or want to delete your account. Once deleted, your personal information is permanently removed from our systems.",
    stepsTitle: "Steps to delete your account",
    steps: [
      "Open the Wit Ü app.",
      "Go to your profile.",
      "Open Settings.",
      "Find the Delete account option.",
      "Confirm you want to delete it.",
      "Type DELETE to confirm.",
    ],
    warningTitle: "What happens when you delete your account?",
    warningLabel: "⚠️ Important: this action is permanent and cannot be undone",
    warningItems: [
      "Your profile will be permanently removed.",
      "Your photos and content will be deleted.",
      "Your connections and conversations will be removed.",
      "You won't be able to recover your account after deletion.",
    ],
    alternativesTitle: "Before deleting your account",
    alternativesBody: "Before proceeding, consider these options:",
    alternativesItems: [
      "Adjust privacy settings to limit profile visibility.",
      "Delete specific content without removing your account.",
    ],
    dataTitle: "Data we may retain",
    dataBody:
      "After account deletion, we may keep limited data when required by law to meet legal obligations, prevent fraud, or resolve disputes.",
    helpTitle: "Need help?",
    helpBody: "If you have questions about account deletion, contact us and we'll help.",
    helpNote: "We're here to support you with any issue.",
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      delete: "Delete account",
      copyright: "© 2025 Wit Ü. All rights reserved.",
    },
  },
} as const;

export default function DeleteAccountPage() {
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
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.introTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.introBody}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.stepsTitle}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  {t.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.warningTitle}
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-800 font-semibold mb-2">
                  {t.warningLabel}
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.warningItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.alternativesTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.alternativesBody}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.alternativesItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.dataTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.dataBody}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {language === "en" ? "For more details on data handling, see our" : "Para más información sobre cómo manejamos tus datos, consultá nuestra"}
                <Link href="/privacidad" className="text-yellow-600 hover:text-yellow-700 underline mx-1">
                  {t.footer.privacy}
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.helpTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.helpBody}
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> wituapp@gmail.com
                </p>
                <p className="text-gray-700 mt-2">
                  {t.helpNote}
                </p>
              </div>
            </section>
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

