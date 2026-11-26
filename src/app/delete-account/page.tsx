"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";
import { LEGAL_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/legal";

const copy = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "Eliminar Cuenta",
    updated: "Última actualización",
    introTitle: "¿Cómo eliminar tu cuenta de Wit Ü?",
    introBody:
      "Podés pedir la eliminación de tu cuenta de Wit Ü y de sus datos desde la app o por correo electrónico, aunque ya no tengas la app instalada.",
    appTitle: "Opción 1: desde la app",
    appSteps: [
      "Abrí la app Wit Ü e iniciá sesión.",
      "Entrá a tu perfil.",
      "En la sección Cuenta, al final de la pantalla, tocá Eliminar cuenta.",
      "Escribí ELIMINAR para confirmar.",
      "Si la app te lo pide, confirmá tu identidad.",
    ],
    emailTitle: "Opción 2: por correo, sin la app",
    emailBody: `Escribí a ${LEGAL_EMAIL} con el asunto «Eliminar cuenta» e incluí el correo o el número de teléfono con el que te registraste. Podemos pedirte que verifiques que la cuenta es tuya. Después la eliminamos y te lo confirmamos por correo.`,
    emailButton: "Pedir la eliminación por correo",
    mailSubject: "Eliminar cuenta",
    deletedTitle: "Qué se elimina",
    warningLabel: "⚠️ Importante: la eliminación es permanente. No vas a poder recuperar la cuenta.",
    deletedItems: [
      "Tu cuenta, tu perfil y el número de teléfono asociado.",
      "Tus fotos.",
      "Tus likes, matches y chats privados.",
      "Tus bloqueos, contactos de emergencia y asistencia a eventos.",
      "Los comentarios y capturas que enviaste a soporte.",
    ],
    deletedNote:
      "Si eliminaste tu cuenta desde una versión anterior de la app, o querés confirmar que no quedaron datos, escribinos y completamos el borrado.",
    keptTitle: "Qué se conserva y por cuánto tiempo",
    keptItems: [
      "Mensajes en chats de eventos o grupos y publicaciones o comentarios en foros: pueden conservarse de forma anonimizada, sin tu nombre ni tu foto. Podés pedirnos que borremos un contenido en particular.",
      "Reportes de moderación hechos por vos o sobre vos: se conservan para revisar y prevenir abusos.",
      "Copias de respaldo de archivos borrados, como las fotos: pueden permanecer hasta 30 días antes de eliminarse definitivamente.",
      "Datos de diagnóstico y uso, como los informes de errores: se conservan según los plazos de retención de nuestros proveedores tecnológicos.",
      "Información que la ley exija conservar, o necesaria para investigar fraudes, resolver disputas o proteger a menores: se conserva durante el tiempo necesario para esos fines.",
    ],
    subscriptionNote:
      "Eliminar la cuenta no cancela las suscripciones activas. Si tenés una, cancelala desde Google Play o App Store.",
    privacyIntro: "Para más información sobre cómo manejamos tus datos, consultá nuestra",
    partialLink: "¿Querés borrar algunos datos sin eliminar tu cuenta?",
    partialTitle: "Borrar algunos datos sin eliminar tu cuenta",
    partialBody: "Podés borrar o pedir que borremos algunos datos y seguir usando Wit Ü.",
    partialItems: [
      "Desde la app: editá tu perfil para cambiar o quitar fotos y modificar tu información.",
      "Ubicación: si desactivás el permiso en tu dispositivo, deja de actualizarse. Para borrar la zona guardada, pedilo por correo.",
      `Por correo: escribí a ${LEGAL_EMAIL} con el asunto «Borrar datos» e indicá qué querés borrar (por ejemplo, la ubicación guardada, fotos o una publicación) y el correo o teléfono de tu cuenta.`,
    ],
    partialNote:
      "Podemos pedirte que verifiques que la cuenta es tuya. Te confirmamos por correo qué borramos y qué tenemos que conservar.",
    partialButton: "Pedir el borrado de datos",
    partialSubject: "Borrar datos",
    helpTitle: "¿Necesitás ayuda?",
    helpBody: "Si tenés dudas sobre la eliminación de tu cuenta o sobre tus datos, escribinos y te ayudamos.",
    footer: {
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      delete: "Eliminar cuenta",
      copyright: "© 2026 Wit Ü. Todos los derechos reservados.",
    },
  },
  en: {
    back: "Back to home",
    switch: "🇪🇸 ES",
    title: "Delete Account",
    updated: "Last updated",
    introTitle: "How to delete your Wit Ü account",
    introBody:
      "You can request the deletion of your Wit Ü account and its data in the app or by email, even if you no longer have the app installed.",
    appTitle: "Option 1: in the app",
    appSteps: [
      "Open the Wit Ü app and sign in.",
      "Go to your profile.",
      "In the Account section, at the bottom of the screen, tap Delete account.",
      "Type ELIMINAR to confirm (use this word even if the app is in English).",
      "If the app asks you to, confirm your identity.",
    ],
    emailTitle: "Option 2: by email, without the app",
    emailBody: `Write to ${LEGAL_EMAIL} with the subject “Delete account” and include the email address or phone number you signed up with. We may ask you to verify that the account is yours. We then delete it and confirm by email.`,
    emailButton: "Request deletion by email",
    mailSubject: "Delete account",
    deletedTitle: "What is deleted",
    warningLabel: "⚠️ Important: deletion is permanent. You will not be able to recover the account.",
    deletedItems: [
      "Your account, your profile and the associated phone number.",
      "Your photos.",
      "Your likes, matches and private chats.",
      "Your blocks, emergency contacts and event attendance.",
      "The feedback and screenshots you sent to support.",
    ],
    deletedNote:
      "If you deleted your account from an earlier version of the app, or you want to confirm that no data remains, write to us and we will complete the deletion.",
    keptTitle: "What is kept and for how long",
    keptItems: [
      "Messages in event or group chats and forum posts or comments: they may be kept in anonymized form, without your name or photo. You can ask us to delete a specific item.",
      "Moderation reports made by you or about you: they are kept to review and prevent abuse.",
      "Backup copies of deleted files, such as photos: they may remain for up to 30 days before being permanently deleted.",
      "Diagnostic and usage data, such as crash reports: they are kept according to the retention periods of our technology providers.",
      "Information we are legally required to keep, or need to investigate fraud, resolve disputes or protect minors: it is kept for as long as needed for those purposes.",
    ],
    subscriptionNote:
      "Deleting your account does not cancel active subscriptions. If you have one, cancel it in Google Play or the App Store.",
    privacyIntro: "For more details on data handling, see our",
    partialLink: "Want to delete some data without deleting your account?",
    partialTitle: "Delete some data without deleting your account",
    partialBody: "You can delete, or ask us to delete, some of your data and keep using Wit Ü.",
    partialItems: [
      "In the app: edit your profile to change or remove photos and update your information.",
      "Location: if you turn off the permission on your device, it stops being updated. To delete the stored area, request it by email.",
      `By email: write to ${LEGAL_EMAIL} with the subject “Delete data” and tell us what you want deleted (for example, the stored location, photos or a post) and the email address or phone number of your account.`,
    ],
    partialNote:
      "We may ask you to verify that the account is yours. We will confirm by email what we deleted and what we have to keep.",
    partialButton: "Request data deletion",
    partialSubject: "Delete data",
    helpTitle: "Need help?",
    helpBody: "If you have questions about deleting your account or about your data, write to us and we will help.",
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      delete: "Delete account",
      copyright: "© 2026 Wit Ü. All rights reserved.",
    },
  },
} as const;

export default function DeleteAccountPage() {
  const { language, toggleLanguage } = useAppLanguage();
  const t = copy[language];
  const mailHref = `mailto:${LEGAL_EMAIL}?subject=${encodeURIComponent(t.mailSubject)}`;
  const dataMailHref = `mailto:${LEGAL_EMAIL}?subject=${encodeURIComponent(t.partialSubject)}`;

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
            <p>{t.updated}: {LEGAL_LAST_UPDATED[language]}</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.introTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.introBody}
              </p>
              <p>
                <a href="#delete-data" className="text-yellow-600 hover:text-yellow-700 underline">
                  {t.partialLink}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.appTitle}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  {t.appSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.emailTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.emailBody}
              </p>
              <a
                href={mailHref}
                className="inline-block px-5 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition-colors"
              >
                {t.emailButton}
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.deletedTitle}
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-800 font-semibold">
                  {t.warningLabel}
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.deletedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t.deletedNote}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.keptTitle}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.keptItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t.subscriptionNote}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t.privacyIntro}
                <Link href="/privacidad" className="text-yellow-600 hover:text-yellow-700 underline mx-1">
                  {t.footer.privacy}
                </Link>.
              </p>
            </section>

            <section id="delete-data" className="scroll-mt-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.partialTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.partialBody}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.partialItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed my-4">
                {t.partialNote}
              </p>
              <a
                href={dataMailHref}
                className="inline-block px-5 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition-colors"
              >
                {t.partialButton}
              </a>
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
                  <strong>Email:</strong>{" "}
                  <a href={mailHref} className="text-yellow-600 hover:text-yellow-700 underline">
                    {LEGAL_EMAIL}
                  </a>
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
