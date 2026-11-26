"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useAppLanguage } from "@/lib/language";
import { CHILD_SAFETY_PATH, LEGAL_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/legal";

type SafetySection = {
  title: string;
  id?: string;
  body?: string;
  items: readonly string[];
  warning?: string;
};

type StandardsBlock = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  links?: readonly { label: string; href: string }[];
  warning?: string;
};

type SafetyCopy = {
  updated: string;
  standards: {
    title: string;
    summary: string;
    otherLanguage: { lang: "es" | "en"; text: string };
    blocks: readonly StandardsBlock[];
  };
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
    childSafety: string;
    delete: string;
    copyright: string;
  };
};

const copy: Record<"es" | "en", SafetyCopy> = {
  es: {
    updated: "Última actualización",
    standards: {
      title: "Estándares de seguridad infantil de Wit Ü contra la explotación y el abuso sexual infantil (EASI / CSAE)",
      summary:
        "Wit Ü prohíbe de forma explícita la explotación y el abuso sexual infantil (EASI, en inglés Child Sexual Abuse and Exploitation o CSAE). Aplicamos tolerancia cero. Estos estándares rigen en la app Wit Ü, disponible en Google Play y App Store, en todos sus servicios y para todas las personas que los usan.",
      otherLanguage: {
        lang: "en",
        text: "Wit Ü explicitly prohibits Child Sexual Abuse and Exploitation (CSAE) in its app and services.",
      },
      blocks: [
        {
          title: "Qué está estrictamente prohibido",
          paragraphs: ["En perfiles, fotos, mensajes, chats, grupos, foros, eventos o cualquier otra función de Wit Ü, está prohibido:"],
          items: [
            "Crear, subir, publicar, almacenar, enviar, compartir, pedir, vender, enlazar o promocionar material de abuso sexual infantil (MASI / CSAM), incluidos fotos, videos, audios, textos, dibujos y contenido generado o manipulado con inteligencia artificial.",
            "Sexualizar a personas menores de edad de cualquier forma.",
            "Hacer grooming: contactar o ganarse la confianza de una persona menor de edad con fines sexuales, por internet o en persona.",
            "Pedir o intercambiar imágenes sexuales o íntimas de personas menores de edad.",
            "Extorsionar sexualmente (sextorsión) a una persona menor de edad con imágenes íntimas, reales o supuestas.",
            "La trata o la explotación sexual comercial de personas menores de edad, incluido ofrecerlas o solicitarlas con esos fines.",
            "Mantener interacciones inapropiadas con personas menores de edad o ponerlas en peligro.",
            "Promover, justificar, normalizar o dar instrucciones sobre el abuso sexual infantil, o ayudar a otras personas a cometerlo u ocultarlo.",
            "Intentar cualquiera de estas conductas o amenazar con realizarlas.",
          ],
        },
        {
          title: "Cómo actuamos",
          items: [
            "Revisamos los reportes de seguridad infantil con prioridad, en un plazo máximo de 24 horas.",
            "Cuando tomamos conocimiento de material de abuso sexual infantil, lo eliminamos.",
            "Suspendemos de forma inmediata y permanente, sin aviso previo, las cuentas que incumplen estos estándares.",
            "Conservamos la información y las pruebas según lo exija o permita la ley.",
            "Denunciamos el material de abuso sexual infantil confirmado al National Center for Missing & Exploited Children (NCMEC) o a la autoridad competente que corresponda, y colaboramos con las autoridades.",
          ],
        },
        {
          title: "Cómo reportar a Wit Ü",
          items: [
            "Desde la app: entrá al perfil, tocá el ícono del escudo, elegí «Reportar perfil» y seleccioná el motivo (por ejemplo, «Menor de edad» o «Contenido inapropiado»).",
            "Usá también las demás opciones de reporte disponibles dentro de la app y bloqueá a la persona para cortar el contacto.",
            `Por email: escribí a ${LEGAL_EMAIL} con el asunto «Seguridad infantil». No hace falta tener una cuenta.`,
          ],
          warning:
            "Nunca descargues, reenvíes ni adjuntes material de abuso sexual infantil, ni siquiera para denunciarlo. Contanos qué viste, en qué perfil o chat y cuándo.",
        },
        {
          title: "Denunciá también ante las autoridades",
          paragraphs: ["Si una persona menor de edad está en peligro, llamá de inmediato al 911 o al número de emergencias de tu país."],
          items: [
            "Argentina: Línea 137, opción 1 (las 24 horas), o WhatsApp +54 9 11 3133-1000.",
            "Argentina: Línea 102, de orientación sobre derechos de niñas, niños y adolescentes.",
            "Argentina: la fiscalía o comisaría más cercana.",
            "Desde cualquier país: CyberTipline del NCMEC.",
          ],
          links: [{ label: "Denunciar en la CyberTipline (report.cybertip.org)", href: "https://report.cybertip.org" }],
        },
        {
          title: "Cumplimiento legal",
          paragraphs: [
            "Wit Ü cumple las leyes de protección infantil aplicables, incluidas, en la República Argentina, la Ley N.° 26.061 de protección integral de los derechos de niñas, niños y adolescentes y las normas del Código Penal que sancionan el material de abuso sexual infantil (art. 128) y el grooming (art. 131).",
          ],
        },
        {
          title: "Persona de contacto para seguridad infantil",
          paragraphs: [
            `El equipo responsable de seguridad infantil de Wit Ü atiende las notificaciones de Google Play, de las autoridades y de las personas usuarias sobre EASI / CSAE, puede explicar nuestros procedimientos de revisión y aplicación de estas normas, y toma las medidas necesarias. Contacto: ${LEGAL_EMAIL}.`,
          ],
        },
      ],
    },
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
        id: "age-restriction",
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
          "Botón de emergencia que prepara un mensaje de ayuda por WhatsApp para ese contacto.",
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
          `Escribirnos a ${LEGAL_EMAIL}.`,
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
      childSafety: "Seguridad infantil",
      delete: "Eliminar cuenta",
      copyright: "© 2025 Wit Ü. Todos los derechos reservados.",
    },
  },
  en: {
    updated: "Last updated",
    standards: {
      title: "Wit Ü Child Safety Standards against Child Sexual Abuse and Exploitation (CSAE)",
      summary:
        "Wit Ü explicitly prohibits Child Sexual Abuse and Exploitation (CSAE). We have zero tolerance. These standards apply to the Wit Ü app, available on Google Play and the App Store, to all of its services and to everyone who uses them.",
      otherLanguage: {
        lang: "es",
        text: "Wit Ü prohíbe de forma explícita la explotación y el abuso sexual infantil (EASI).",
      },
      blocks: [
        {
          title: "What is strictly prohibited",
          paragraphs: ["On profiles, photos, messages, chats, groups, forums, events or any other Wit Ü feature, it is prohibited to:"],
          items: [
            "Create, upload, post, store, send, share, request, sell, link to or promote child sexual abuse material (CSAM), including photos, videos, audio, text, drawings and AI-generated or manipulated content.",
            "Sexualize minors in any way.",
            "Groom a child: contact or build trust with a minor for sexual purposes, online or in person.",
            "Ask for or exchange sexual or intimate images of minors.",
            "Sexually extort (sextortion) a minor using real or alleged intimate images.",
            "Traffic or commercially sexually exploit minors, including offering or soliciting them for those purposes.",
            "Engage in inappropriate interactions with minors or put them in danger.",
            "Promote, justify, normalize or give instructions about child sexual abuse, or help others commit or hide it.",
            "Attempt or threaten any of the above.",
          ],
        },
        {
          title: "How we enforce these standards",
          items: [
            "We review child safety reports with priority, within a maximum of 24 hours.",
            "When we become aware of child sexual abuse material, we remove it.",
            "We immediately and permanently ban accounts that violate these standards, without prior notice.",
            "We preserve information and evidence as required or permitted by law.",
            "We report confirmed child sexual abuse material to the National Center for Missing & Exploited Children (NCMEC) or the relevant competent authority, and we cooperate with law enforcement.",
          ],
        },
        {
          title: "How to report to Wit Ü",
          items: [
            "In the app: open the profile, tap the shield icon, choose “Report profile” and select the reason (for example, “Underage” or “Inappropriate content”).",
            "You can also use the other reporting options available inside the app, and block the person to stop all contact.",
            `By email: write to ${LEGAL_EMAIL} with the subject “Child safety”. You do not need an account.`,
          ],
          warning:
            "Never download, forward or attach child sexual abuse material, not even to report it. Tell us what you saw, on which profile or chat, and when.",
        },
        {
          title: "Report to the authorities too",
          paragraphs: ["If a child is in danger, call 911 or your local emergency number immediately."],
          items: [
            "Argentina: Línea 137, option 1 (24 hours a day), or WhatsApp +54 9 11 3133-1000.",
            "Argentina: Línea 102, guidance on the rights of children and adolescents.",
            "Argentina: the nearest prosecutor’s office or police station.",
            "From any country: NCMEC CyberTipline.",
          ],
          links: [{ label: "Report to the CyberTipline (report.cybertip.org)", href: "https://report.cybertip.org" }],
        },
        {
          title: "Legal compliance",
          paragraphs: [
            "Wit Ü complies with applicable child protection laws, including, in the Argentine Republic, Law No. 26,061 on the comprehensive protection of the rights of children and adolescents, and the Criminal Code provisions that punish child sexual abuse material (art. 128) and grooming (art. 131).",
          ],
        },
        {
          title: "Child safety point of contact",
          paragraphs: [
            `The Wit Ü team responsible for child safety handles notifications about CSAE from Google Play, authorities and users, can explain our review and enforcement procedures, and takes action when required. Contact: ${LEGAL_EMAIL}.`,
          ],
        },
      ],
    },
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
        id: "age-restriction",
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
          "Emergency button that prepares a WhatsApp help message to that contact.",
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
          `Contact us at ${LEGAL_EMAIL}.`,
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
      childSafety: "Child safety",
      delete: "Delete account",
      copyright: "© 2025 Wit Ü. All rights reserved.",
    },
  },
};

export default function SafetyPage() {
  const { language, toggleLanguage } = useAppLanguage();
  const t = copy[language];

  const childSafetyStandards = (
    <section id="easi-standards" className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.standards.title}</h2>
      <p className="text-sm text-gray-600 mb-4">
        {t.updated}: {LEGAL_LAST_UPDATED[language]}
      </p>
      <p className="text-gray-900 font-semibold leading-relaxed text-lg">{t.standards.summary}</p>
      <p lang={t.standards.otherLanguage.lang} className="text-gray-600 leading-relaxed mt-2">
        {t.standards.otherLanguage.text}
      </p>

      {t.standards.blocks.map((block) => (
        <div key={block.title} className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{block.title}</h3>
          {block.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-gray-700 leading-relaxed mb-3">
              {paragraph}
            </p>
          ))}
          {block.items && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {block.links?.map((link) => (
            <p key={link.href} className="mt-3">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-800 underline font-semibold">
                {link.label}
              </a>
            </p>
          ))}
          {block.warning && (
            <div className="bg-red-50 rounded-lg p-5 border border-red-200 mt-4">
              <p className="text-gray-700 leading-relaxed">{block.warning}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );

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
            {t.sections.map((section, index) => (
              // Clave estable entre idiomas: así no se vuelve a montar al cambiar de idioma.
              <Fragment key={index}>
                <section id={section.id}>
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
                {section.id === "age-restriction" && childSafetyStandards}
              </Fragment>
            ))}

            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t.contactTitle}</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">{t.contactBody}</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <a href={`mailto:${LEGAL_EMAIL}`} className="text-yellow-600 hover:text-yellow-700 font-semibold text-xl">📧 {LEGAL_EMAIL}</a>
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
                <Link href={CHILD_SAFETY_PATH} className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.childSafety}</Link>
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

