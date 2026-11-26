"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage, type Language } from "@/lib/language";
import { CHILD_SAFETY_PATH, LEGAL_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/legal";

const copy = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "Política de Privacidad",
    updated: "Última actualización",
    sections: [
      {
        title: "1. Introducción",
        paragraphs: [
          "La presente Política de Privacidad describe cómo Wit Ü (en adelante, también “el responsable”) recopila, utiliza, almacena, comparte y protege la información personal de los usuarios de la aplicación móvil y/o web Wit Ü.",
          "Wit Ü es una plataforma digital que permite a los usuarios descubrir planes, eventos y actividades, así como conectarse e interactuar con otras personas.",
          "Al registrarte, acceder o utilizar Wit Ü, aceptás esta Política de Privacidad. Si no estás de acuerdo con alguno de sus términos, debés abstenerte de utilizar Wit Ü.",
          "Esta Política se encuentra alineada con la Ley N.° 25.326 de Protección de los Datos Personales de la República Argentina y su normativa complementaria.",
        ],
      },
      {
        title: "2. Datos que Recopilamos",
        subsections: [
          {
            title: "2.1 Datos de registro y perfil",
            paragraphs: ["Para crear y mantener tu cuenta en Wit Ü, podemos recopilar:"],
            items: [
              "Nombre, alias o nombre de usuario",
              "Dirección de correo electrónico",
              "Número de teléfono (para verificar la cuenta)",
              "Fecha de nacimiento o edad (para verificar mayoría de edad)",
              "Género (opcional)",
              "Fotos de perfil y contenido multimedia",
              "Descripción personal o biografía",
              "Intereses, preferencias y actividades seleccionadas",
            ],
            note: "El usuario es responsable por la veracidad de los datos proporcionados.",
          },
          {
            title: "2.2 Datos de interacción social",
            paragraphs: ["En función del uso de Wit Ü, podemos recopilar:"],
            items: [
              "Perfiles visualizados",
              "Conexiones generadas",
              "Interacciones con otros usuarios",
              "Mensajes enviados y recibidos (incluyendo contenido y metadatos como fecha y hora)",
              "Participación en eventos o planes",
              "Acciones dentro de Wit Ü (likes, rechazos, conexiones)",
            ],
            note: "Importante: si bien Wit Ü puede procesar mensajes con fines operativos o de seguridad, no realiza monitoreo activo de conversaciones privadas, salvo en casos de denuncias (incluidas las de seguridad infantil) o requerimientos legales.",
          },
          {
            title: "2.3 Datos de ubicación",
            paragraphs: ["La ubicación es opcional. Si das permiso, Wit Ü la usa únicamente para funciones de la propia app:"],
            items: [
              "Mostrar eventos y planes cercanos.",
              "Filtrar eventos por distancia y mostrar a cuántos kilómetros están.",
            ],
            noteTitle: "Condiciones:",
            noteItems: [
              "La ubicación se utiliza únicamente cuando la app está en uso.",
              "La ubicación exacta se procesa en tu dispositivo.",
              "En tu perfil guardamos solo una zona aproximada (unos 5 km) y la fecha en que se actualizó.",
              "No se mantiene un historial de ubicaciones.",
              "No se usa para otros fines.",
              "Puede ser procesada en tiempo real por proveedores tecnológicos (ej. mapas).",
              "Podés desactivar el permiso en cualquier momento desde el dispositivo.",
            ],
          },
          {
            title: "2.4 Datos técnicos y de uso",
            paragraphs: ["Para garantizar el correcto funcionamiento de Wit Ü, podemos recopilar:"],
            items: [
              "Dirección IP",
              "Tipo de dispositivo y sistema operativo",
              "Identificadores únicos del dispositivo",
              "Datos de sesión",
              "Logs de actividad",
              "Tokens de notificaciones push",
              "Informes de errores y diagnóstico de la app, asociados al identificador de tu cuenta",
            ],
          },
          {
            title: "2.5 Datos de pagos",
            paragraphs: ["En caso de funcionalidades premium:"],
            items: [
              "Wit Ü no almacena datos completos de tarjetas",
              "Los pagos se procesan a través de terceros (ej. RevenueCat)",
              "Podemos recibir información limitada sobre el estado de la transacción",
            ],
          },
          {
            title: "2.6 Datos de seguridad",
            paragraphs: ["Para proteger a la comunidad, podemos recopilar:"],
            items: [
              "Reportes enviados o recibidos, su motivo y el perfil o contenido reportado",
              "Usuarios bloqueados",
              "Nombre y teléfono del contacto de emergencia que el usuario configure",
              "Registro de las activaciones del botón de emergencia (fecha y hora, mensaje, contacto y datos técnicos básicos)",
            ],
          },
          {
            title: "2.7 Datos que NO recopilamos",
            paragraphs: ["Wit Ü no recopila ni almacena:"],
            items: [
              "Datos biométricos",
              "Información de salud",
              "Creencias religiosas o políticas",
              "Documentación personal (DNI, pasaporte)",
            ],
          },
        ],
      },
      {
        title: "3. Finalidad del Tratamiento",
        paragraphs: ["Los datos recopilados se utilizan exclusivamente para:"],
        items: [
          "Crear y administrar cuentas de usuario.",
          "Facilitar conexiones entre usuarios.",
          "Permitir interacciones (conexiones, chat, eventos).",
          "Personalizar la experiencia dentro de Wit Ü.",
          "Detectar y prevenir fraude o conductas indebidas.",
          "Proteger a las personas menores de edad y prevenir, detectar, investigar y denunciar la explotación y el abuso sexual infantil (EASI / CSAE).",
          "Mejorar el servicio y desarrollar nuevas funcionalidades.",
          "Cumplir obligaciones legales.",
        ],
      },
      {
        title: "4. Compartición de Datos con Terceros",
        paragraphs: [
          "Wit Ü no vende, alquila ni comercializa datos personales. La única información que puede estar disponible para los terceros adheridos es de carácter estadístico y agregado, sin ningún dato que permita identificar a un usuario en particular.",
          "Podremos compartir información en los siguientes casos:",
        ],
        subsections: [
          {
            title: "4.1 Proveedores de servicios",
            items: [
              "Hosting y almacenamiento de datos",
              "Servicios de notificaciones push",
              "Herramientas de analítica",
              "Servicios de mapas y geolocalización",
            ],
            note: "Estos proveedores pueden procesar datos en el exterior.",
          },
          {
            title: "4.2 Organizadores de eventos",
            paragraphs: [
              "En el caso de eventos, planes o actividades disponibles en la app, Wit Ü podrá compartir con los organizadores de dichos eventos cierta información limitada de los usuarios que participen o se registren, con el único fin de mejorar la experiencia del evento.",
              "Dicha información podrá incluir:",
            ],
            items: [
              "Preferencias declaradas por el usuario, tales como música favorita",
              "Gustos o intereses relevantes, como bebida o trago favorito",
              "Información general de perfil no sensible (por ejemplo, rango etario, nombre o género)",
            ],
            noteTitle: "Estas preferencias:",
            noteItems: [
              "Se comparten de forma limitada y contextual al evento",
              "No incluyen datos sensibles ni información de contacto directo",
              "Se utilizan exclusivamente para personalizar la experiencia del usuario (ej. ambientación, oferta gastronómica, etc.)",
            ],
            note: "Wit Ü no controla el uso que los organizadores puedan hacer de dicha información una vez compartida.",
          },
          {
            title: "4.3 Cumplimiento legal",
            paragraphs: ["Podremos divulgar información cuando sea requerido por:"],
            items: [
              "Autoridades judiciales o administrativas.",
              "Normativa aplicable.",
            ],
          },
          {
            title: "4.4 Protección de derechos",
            paragraphs: ["Para:"],
            items: [
              "Investigar fraudes.",
              "Prevenir daños.",
              "Proteger la seguridad de usuarios o terceros.",
            ],
          },
          {
            title: "4.5 Protección infantil",
            paragraphs: [
              "Podremos conservar y compartir información, incluidos datos de la cuenta y contenido reportado, con el National Center for Missing & Exploited Children (NCMEC), autoridades judiciales, fuerzas de seguridad u otros organismos competentes, para denunciar casos de explotación y abuso sexual infantil y colaborar en su investigación.",
            ],
          },
        ],
      },
      {
        title: "5. Transferencias Internacionales de Datos",
        paragraphs: [
          "Al utilizar Wit Ü, el usuario acepta que sus datos puedan ser procesados en servidores ubicados fuera de Argentina.",
          "Wit Ü adopta medidas para asegurar un nivel adecuado de protección de datos.",
        ],
      },
      {
        title: "6. Contenido y visibilidad pública",
        paragraphs: ["El usuario reconoce que parte de su información será visible para otros usuarios, incluyendo:"],
        items: [
          "Perfil",
          "Fotos",
          "Intereses",
          "Actividad dentro de la app",
        ],
        closing: "Wit Ü no puede controlar el uso que terceros hagan de esa información una vez compartida.",
      },
      {
        title: "7. Retención de datos",
        paragraphs: ["Los datos personales se conservarán:"],
        items: [
          "Mientras la cuenta esté activa",
          "Durante el tiempo necesario para cumplir obligaciones legales",
          "Durante el tiempo necesario para investigar y denunciar casos de seguridad infantil o fraude, o resolver disputas",
        ],
        closing: `Al eliminar la cuenta se eliminan el perfil, las fotos y los datos asociados. Los mensajes en chats de eventos o grupos y las publicaciones en foros pueden conservarse de forma anonimizada. Los reportes de moderación y la información necesaria para los fines anteriores pueden conservarse después de la eliminación. Para confirmar la eliminación o pedir el borrado de datos restantes, escribinos a ${LEGAL_EMAIL}.`,
      },
      {
        title: "8. Menores de edad",
        paragraphs: [
          "Wit Ü está destinada exclusivamente a mayores de 18 años.",
          "No recopilamos intencionalmente datos de menores. En caso de detectar un incumplimiento, eliminaremos la cuenta.",
          "Wit Ü prohíbe de forma explícita la explotación y el abuso sexual infantil (EASI / CSAE).",
          `Si creés que una persona menor de edad está usando la app o está en riesgo, reportalo desde la app o escribinos a ${LEGAL_EMAIL}.`,
        ],
        link: { label: "Ver los Estándares de seguridad infantil de Wit Ü", href: CHILD_SAFETY_PATH },
      },
      {
        title: "9. Seguridad de la Información",
        paragraphs: ["Wit Ü implementa medidas técnicas y organizativas razonables para proteger la información personal de los usuarios, incluyendo:"],
        items: [
          "Cifrado de datos en tránsito mediante HTTPS/TLS",
          "Controles de acceso a la información",
          "Protección contra accesos no autorizados",
          "Monitoreo y prevención de incidentes de seguridad",
        ],
        closing: "Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de la información. En caso de incidentes de seguridad, notificaremos a los usuarios cuando corresponda.",
      },
      {
        title: "10. Interacciones entre usuarios",
        paragraphs: ["El usuario reconoce que:"],
        items: [
          "Comparte información voluntariamente",
          "Interactúa bajo su propia responsabilidad",
        ],
        closing: "Wit Ü no se responsabiliza por el uso indebido de información por parte de terceros.",
      },
      {
        title: "11. Modificaciones a esta Política",
        paragraphs: [
          "Podremos modificar esta Política de Privacidad en cualquier momento. En caso de hacerlo, actualizaremos la fecha de vigencia al comienzo del documento y, si los cambios son relevantes, te lo informaremos a través de la app o por correo electrónico. Al continuar utilizando Wit Ü, se entenderá que aceptás la versión actualizada de la política.",
        ],
      },
      {
        title: "12. Contacto",
        paragraphs: [
          `Para consultas sobre esta Política o para solicitar el acceso, la rectificación, la actualización o la supresión de tus datos personales, escribinos a ${LEGAL_EMAIL}.`,
        ],
      },
    ],
    footer: {
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      delete: "Eliminar cuenta",
      childSafety: "Seguridad infantil",
      copyright: "© 2026 Wit Ü. Todos los derechos reservados.",
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
        paragraphs: [
          "This Privacy Policy describes how Wit Ü (also referred to as “the controller”) collects, uses, stores, shares and protects the personal information of users of the Wit Ü mobile and/or web application.",
          "Wit Ü is a digital platform that allows users to discover plans, events and activities, as well as connect and interact with other people.",
          "By registering, accessing or using Wit Ü, you accept this Privacy Policy. If you do not agree with any of its terms, you must refrain from using it.",
          "This Policy is aligned with Law No. 25,326 on Personal Data Protection of the Argentine Republic and its complementary regulations.",
        ],
      },
      {
        title: "2. Data We Collect",
        subsections: [
          {
            title: "2.1 Registration and profile data",
            paragraphs: ["To create and maintain your Wit Ü account, we may collect:"],
            items: [
              "Name, alias or username",
              "Email address",
              "Phone number (to verify the account)",
              "Date of birth or age (to verify legal age)",
              "Gender (optional)",
              "Profile photos and multimedia content",
              "Personal description or biography",
              "Selected interests, preferences and activities",
            ],
            note: "The user is responsible for the accuracy of the data provided.",
          },
          {
            title: "2.2 Social interaction data",
            paragraphs: ["Depending on your use of Wit Ü, we may collect:"],
            items: [
              "Viewed profiles",
              "Generated connections",
              "Interactions with other users",
              "Messages sent and received (including content and metadata such as date and time)",
              "Participation in events or plans",
              "Actions within Wit Ü (likes, rejections, connections)",
            ],
            note: "Important: while Wit Ü may process messages for operational or security purposes, it does not actively monitor private conversations except in cases of reports (including child safety reports) or legal requirements.",
          },
          {
            title: "2.3 Location data",
            paragraphs: ["Location is optional. If you grant permission, Wit Ü uses it only for features of the app itself:"],
            items: [
              "Show nearby events and plans.",
              "Filter events by distance and show how many kilometers away they are.",
            ],
            noteTitle: "Conditions:",
            noteItems: [
              "Location is used only while the app is in use.",
              "Your exact location is processed on your device.",
              "Your profile stores only an approximate area (about 5 km) and the date it was updated.",
              "A location history is not maintained.",
              "It is not used for any other purpose.",
              "It may be processed in real time by technology providers (e.g. maps).",
              "You can turn off the permission at any time from your device.",
            ],
          },
          {
            title: "2.4 Technical and usage data",
            paragraphs: ["To ensure the proper functioning of Wit Ü, we may collect:"],
            items: [
              "IP address",
              "Device type and operating system",
              "Unique device identifiers",
              "Session data",
              "Activity logs",
              "Push notification tokens",
              "Crash and diagnostic reports from the app, linked to your account identifier",
            ],
          },
          {
            title: "2.5 Payment data",
            paragraphs: ["For premium features:"],
            items: [
              "Wit Ü does not store complete card data",
              "Payments are processed through third parties (e.g. RevenueCat)",
              "We may receive limited information about transaction status",
            ],
          },
          {
            title: "2.6 Safety data",
            paragraphs: ["To protect the community, we may collect:"],
            items: [
              "Reports sent or received, their reason and the reported profile or content",
              "Blocked users",
              "Name and phone number of the emergency contact configured by the user",
              "A record of emergency button activations (date and time, message, contact and basic technical data)",
            ],
          },
          {
            title: "2.7 Data We Do NOT Collect",
            paragraphs: ["Wit Ü does not collect or store:"],
            items: [
              "Biometric data",
              "Health information",
              "Religious or political beliefs",
              "Personal documentation (ID, passport)",
            ],
          },
        ],
      },
      {
        title: "3. Purpose of Processing",
        paragraphs: ["The collected data is used exclusively to:"],
        items: [
          "Create and manage user accounts.",
          "Facilitate connections between users.",
          "Enable interactions (connections, chat, events).",
          "Personalize the experience within Wit Ü.",
          "Detect and prevent fraud or improper conduct.",
          "Protect minors and prevent, detect, investigate and report Child Sexual Abuse and Exploitation (CSAE).",
          "Improve the service and develop new features.",
          "Comply with legal obligations.",
        ],
      },
      {
        title: "4. Sharing Data with Third Parties",
        paragraphs: [
          "Wit Ü does not sell, rent or commercialize personal data. The only information that may be available to affiliated third parties is statistical and aggregated, without any data that allows identifying a particular user.",
          "We may share information in the following cases:",
        ],
        subsections: [
          {
            title: "4.1 Service providers",
            items: [
              "Hosting and data storage",
              "Push notification services",
              "Analytics tools",
              "Maps and geolocation services",
            ],
            note: "These providers may process data abroad.",
          },
          {
            title: "4.2 Event organizers",
            paragraphs: [
              "For events, plans or activities available in the app, Wit Ü may share limited information about participating or registered users with event organizers solely to improve the event experience.",
              "Such information may include:",
            ],
            items: [
              "Preferences declared by the user, such as favorite music",
              "Relevant tastes or interests, such as favorite drink or cocktail",
              "General non-sensitive profile information (for example, age range, name or gender)",
            ],
            noteTitle: "These preferences:",
            noteItems: [
              "Are shared in a limited way and contextual to the event",
              "Do not include sensitive data or direct contact information",
              "Are used exclusively to personalize the user experience (e.g. atmosphere, food and drink offering, etc.)",
            ],
            note: "Wit Ü does not control how organizers may use such information once shared.",
          },
          {
            title: "4.3 Legal compliance",
            paragraphs: ["We may disclose information when required by:"],
            items: [
              "Judicial or administrative authorities.",
              "Applicable regulations.",
            ],
          },
          {
            title: "4.4 Protection of rights",
            paragraphs: ["To:"],
            items: [
              "Investigate fraud.",
              "Prevent harm.",
              "Protect the safety of users or third parties.",
            ],
          },
          {
            title: "4.5 Child protection",
            paragraphs: [
              "We may preserve and share information, including account data and reported content, with the National Center for Missing & Exploited Children (NCMEC), judicial authorities, law enforcement or other competent bodies, to report cases of child sexual abuse and exploitation and cooperate with their investigation.",
            ],
          },
        ],
      },
      {
        title: "5. International Data Transfers",
        paragraphs: [
          "By using Wit Ü, the user accepts that their data may be processed on servers located outside Argentina.",
          "Wit Ü adopts measures to ensure an adequate level of data protection.",
        ],
      },
      {
        title: "6. Content and Public Visibility",
        paragraphs: ["The user acknowledges that part of their information will be visible to other users, including:"],
        items: [
          "Profile",
          "Photos",
          "Interests",
          "Activity within the app",
        ],
        closing: "Wit Ü cannot control how third parties use that information once shared.",
      },
      {
        title: "7. Data retention",
        paragraphs: ["Personal data will be retained:"],
        items: [
          "While the account is active",
          "For the time necessary to comply with legal obligations",
          "For the time necessary to investigate and report child safety or fraud cases, or to resolve disputes",
        ],
        closing: `When the account is deleted, the profile, photos and associated data are deleted. Messages in event or group chats and forum posts may be kept in anonymized form. Moderation reports and information needed for the purposes above may be retained after deletion. To confirm deletion or request removal of any remaining data, write to ${LEGAL_EMAIL}.`,
      },
      {
        title: "8. Minors",
        paragraphs: [
          "Wit Ü is intended exclusively for users over 18 years of age.",
          "We do not intentionally collect data from minors. If we detect a breach, we will delete the account.",
          "Wit Ü explicitly prohibits Child Sexual Abuse and Exploitation (CSAE).",
          `If you believe a minor is using the app or is at risk, report it in the app or write to ${LEGAL_EMAIL}.`,
        ],
        link: { label: "Read the Wit Ü Child Safety Standards", href: CHILD_SAFETY_PATH },
      },
      {
        title: "9. Information Security",
        paragraphs: ["Wit Ü implements reasonable technical and organizational measures to protect users’ personal information, including:"],
        items: [
          "Encryption of data in transit through HTTPS/TLS",
          "Access controls to information",
          "Protection against unauthorized access",
          "Monitoring and prevention of security incidents",
        ],
        closing: "However, no system is completely secure, so we cannot guarantee the absolute security of information. In the event of security incidents, we will notify users when appropriate.",
      },
      {
        title: "10. User Interactions",
        paragraphs: ["The user acknowledges that:"],
        items: [
          "They share information voluntarily",
          "They interact under their own responsibility",
        ],
        closing: "Wit Ü is not responsible for misuse of information by third parties.",
      },
      {
        title: "11. Changes to this Policy",
        paragraphs: [
          "We may modify this Privacy Policy at any time. If we do so, we will update the effective date at the beginning of the document and, if the changes are relevant, inform you through the app or by email. By continuing to use Wit Ü, you will be deemed to accept the updated version of the policy.",
        ],
      },
      {
        title: "12. Contact",
        paragraphs: [
          `For questions about this Policy, or to request access to, correction, update or deletion of your personal data, write to ${LEGAL_EMAIL}.`,
        ],
      },
    ],
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      delete: "Delete account",
      childSafety: "Child safety",
      copyright: "© 2025 Wit Ü. All rights reserved.",
    },
  },
} as const;

type LegalSection = (typeof copy)[Language]["sections"][number];
type LegalSubsection = Extract<LegalSection, { subsections: readonly unknown[] }>["subsections"][number];
type LegalBlock = LegalSection | LegalSubsection;

const renderLegalBlock = (block: LegalBlock, headingLevel: 2 | 3 = 2) => {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const headingClassName =
    headingLevel === 2
      ? "text-2xl font-semibold text-gray-900 mb-4"
      : "text-xl font-semibold text-gray-900 mt-6 mb-3";

  return (
    <div className={headingLevel === 2 ? "space-y-4" : "space-y-3"}>
      <Heading className={headingClassName}>{block.title}</Heading>
      {"paragraphs" in block
        ? block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))
        : null}
      {"items" in block ? (
        <ul className="list-disc space-y-2 pl-6 text-gray-700 leading-relaxed">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {"noteTitle" in block ? (
        <p className="font-semibold text-gray-800">{block.noteTitle}</p>
      ) : null}
      {"noteItems" in block ? (
        <ul className="list-disc space-y-2 pl-6 text-gray-700 leading-relaxed">
          {block.noteItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {"note" in block ? (
        <p className="text-gray-700 leading-relaxed">{block.note}</p>
      ) : null}
      {"closing" in block ? (
        <p className="text-gray-700 leading-relaxed">{block.closing}</p>
      ) : null}
      {"link" in block ? (
        <p>
          <Link href={block.link.href} className="text-yellow-700 hover:text-yellow-800 underline font-semibold">
            {block.link.label}
          </Link>
        </p>
      ) : null}
      {"subsections" in block ? (
        <div className="space-y-5">
          {block.subsections.map((subsection) => (
            <div key={subsection.title}>{renderLegalBlock(subsection, 3)}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default function PrivacidadPage() {
  const { language, toggleLanguage } = useAppLanguage();
  const t = copy[language];

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
            {t.sections.map((section) => (
              <section key={section.title}>
                {renderLegalBlock(section)}
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
                <Link href={CHILD_SAFETY_PATH} className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.childSafety}</Link>
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
