"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";
import { CHILD_SAFETY_PATH, LEGAL_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/legal";

type LegalSection = {
  id?: string;
  link?: { label: string; href: string };
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  noteTitle?: string;
  noteItems?: readonly string[];
  note?: string;
  closing?: string;
};

type PageCopy = {
  back: string;
  switch: string;
  title: string;
  updated: string;
  sections: readonly LegalSection[];
  footer: {
    privacy: string;
    terms: string;
    delete: string;
    childSafety: string;
    copyright: string;
  };
};

const copy = {
  es: {
    back: "Volver al inicio",
    switch: "🇺🇸 EN",
    title: "Términos y Condiciones",
    updated: "Última actualización",
    sections: [
      {
        title: "1. Aceptación de los términos",
        paragraphs: [
          "Al acceder, registrarse o utilizar la aplicación Wit Ü y sus servicios (en adelante, “Wit Ü”), el usuario declara haber leído, comprendido y aceptado estos Términos y Condiciones y la Política de Privacidad, que los complementa.",
          "Si el usuario no está de acuerdo, debe abstenerse de utilizar Wit Ü.",
        ],
        link: { label: "Ver la Política de Privacidad", href: "/privacidad" },
      },
      {
        title: "2. Descripción del servicio",
        paragraphs: ["Wit Ü es una plataforma tecnológica que permite a los usuarios:"],
        items: [
          "Descubrir planes, eventos o actividades",
          "Conectarse con personas con intereses similares",
          "Interactuar mediante funcionalidades como perfiles, conexiones, chats y, cuando estén disponibles, grupos y foros",
        ],
        closing: "Wit Ü facilita el contacto entre usuarios, sin intervenir en las decisiones o acuerdos que estos realicen.",
        noteTitle: "Wit Ü no garantiza:",
        noteItems: [
          "La concreción de encuentros",
          "La compatibilidad entre usuarios",
          "La calidad, seguridad o legalidad de los eventos organizados por terceros",
        ],
      },
      {
        title: "3. Requisitos de uso",
        paragraphs: ["Para utilizar Wit Ü, el usuario debe:"],
        items: [
          "Tener 18 años o más",
          "Brindar información veraz, completa y actualizada",
          "No haber sido previamente suspendido o expulsado",
        ],
        closing: "El usuario garantiza que cumple con estos requisitos y es responsable por la falsedad de la información que proporcione.",
        note: "Wit Ü se reserva el derecho de verificar la información y de suspender cuentas en caso de detectar inconsistencias.",
      },
      {
        title: "4. Cuenta de usuario",
        paragraphs: ["La cuenta es personal e intransferible. El usuario es responsable de:"],
        items: [
          "Mantener la confidencialidad de sus credenciales de acceso",
          "Las actividades realizadas desde su cuenta",
          "Notificar de inmediato cualquier uso no autorizado",
        ],
        closing: "En la medida permitida por la ley, Wit Ü no es responsable por accesos indebidos derivados de la negligencia del usuario.",
        note: "Las causales de suspensión o eliminación de cuentas se detallan en la sección 14.",
      },
      {
        title: "5. Conducta del usuario",
        paragraphs: [
          "El usuario se compromete a utilizar Wit Ü de forma responsable, legal y respetuosa.",
          "Queda estrictamente prohibido:",
        ],
        items: [
          "Acosar, amenazar, intimidar, discriminar o incitar al odio o a la violencia",
          "Publicar contenido violento, sexual explícito, ofensivo, ilegal o engañoso",
          "Suplantar identidad o proporcionar información falsa",
          "Solicitar dinero o favores económicos a otros usuarios",
          "Enviar spam, enlaces sospechosos o mensajes no solicitados",
          "Utilizar Wit Ü con fines comerciales no autorizados",
          "Promover actividades ilegales o peligrosas",
          "Recopilar datos de otros usuarios sin su consentimiento",
          "Usar bots u otros medios automatizados, o intentar vulnerar la seguridad o el funcionamiento de Wit Ü",
          "Cometer, promover o facilitar cualquier forma de explotación o abuso sexual infantil (ver sección 6)",
        ],
      },
      {
        id: "child-safety",
        title: "6. Seguridad infantil: prohibición de la explotación y el abuso sexual infantil (EASI / CSAE)",
        paragraphs: [
          "Wit Ü tiene tolerancia cero frente a la explotación y el abuso sexual infantil (EASI, en inglés Child Sexual Abuse and Exploitation o CSAE).",
          "Queda estrictamente prohibido:",
        ],
        items: [
          "Crear, subir, almacenar, compartir, solicitar, vender, enlazar o promocionar material de abuso sexual infantil, incluido el generado o manipulado con inteligencia artificial",
          "Sexualizar a personas menores de edad de cualquier forma",
          "Contactar a personas menores de edad con fines sexuales (grooming) o pedirles imágenes íntimas",
          "Extorsionar sexualmente a personas menores de edad, o participar en su trata o explotación sexual",
          "Promover, justificar o facilitar cualquiera de estas conductas, intentar cometerlas o amenazar con hacerlo",
        ],
        closing: "El incumplimiento implica la eliminación del contenido y la suspensión inmediata y permanente de la cuenta, sin previo aviso. Wit Ü denunciará el material de abuso sexual infantil confirmado al National Center for Missing & Exploited Children (NCMEC) o a la autoridad competente, conservará las pruebas según la ley y colaborará con las autoridades.",
        link: { label: "Ver los Estándares de seguridad infantil de Wit Ü", href: CHILD_SAFETY_PATH },
      },
      {
        title: "7. Contenido del usuario",
        paragraphs: [
          "El usuario conserva la titularidad del contenido que publica (textos, imágenes, videos y cualquier otro material) y es el único responsable por él.",
          "Al publicar contenido, el usuario:",
        ],
        items: [
          "Garantiza que tiene los derechos y autorizaciones necesarios, incluidos los de las personas que aparezcan en él",
          "Otorga a Wit Ü una licencia no exclusiva, gratuita y mundial para alojarlo, reproducirlo, adaptarlo y mostrarlo, con el único fin de operar y mejorar el servicio y mientras el contenido permanezca en Wit Ü",
          "Acepta que el contenido puede ser visible para otros usuarios",
        ],
        closing: "En la medida permitida por la ley, Wit Ü no es responsable por el contenido generado por los usuarios, y puede eliminarlo si infringe estos Términos o la normativa vigente.",
      },
      {
        title: "8. Reportes, bloqueo y moderación",
        paragraphs: ["Wit Ü no tolera el contenido ofensivo o ilegal ni las conductas abusivas. El usuario puede:"],
        items: [
          "Reportar perfiles y contenidos mediante las opciones disponibles en la app",
          "Bloquear a otros usuarios para impedir el contacto",
          `Escribir a ${LEGAL_EMAIL} si no puede reportar desde la app`,
        ],
        closing: "Wit Ü revisa los reportes de contenido objetable y actúa en un plazo máximo de 24 horas. Según el caso, puede ocultar o eliminar el contenido y suspender o eliminar de forma permanente la cuenta responsable.",
        link: { label: "Ver el Centro de Seguridad", href: "/safety" },
      },
      {
        title: "9. Interacciones entre usuarios, eventos y emergencias",
        paragraphs: [
          "Salvo cuando se indique expresamente que organiza o coorganiza un evento, Wit Ü no actúa como organizador, productor ni anfitrión de los eventos publicados.",
          "El usuario reconoce que:",
        ],
        items: [
          "Decide con quién interactuar y a qué eventos asistir, y debe hacerlo con prudencia",
          "Wit Ü no verifica antecedentes ni garantiza la identidad de los usuarios",
          "Wit Ü no controla lo que ocurre fuera de sus servicios ni puede revisar de antemano todo lo que se publica en ellos",
          "El botón de emergencia prepara un mensaje de WhatsApp para el contacto configurado, que el usuario debe enviar. No es un servicio de emergencias ni avisa a las autoridades: ante una emergencia, se debe llamar al 911 o al número local",
        ],
        noteTitle: "En la medida permitida por la ley, Wit Ü no será responsable por:",
        noteItems: [
          "Daños físicos, emocionales o materiales derivados de interacciones o encuentros",
          "Robos, pérdidas o conflictos",
          "Conductas inapropiadas o ilegales de usuarios o terceros",
          "Incidentes en eventos organizados por terceros",
          "Cancelaciones o incumplimientos de organizadores o usuarios",
        ],
        note: "El usuario mantendrá indemne a Wit Ü frente a reclamos de terceros originados en su incumplimiento de estos Términos, en su contenido o en su conducta.",
      },
      {
        title: "10. Pagos y suscripciones",
        paragraphs: ["Wit Ü puede ofrecer funcionalidades pagas o suscripciones. El precio, la duración y los beneficios se informan antes de la contratación."],
        items: [
          "Los pagos se procesan a través de Google Play, App Store u otros proveedores externos",
          "Las suscripciones se renuevan automáticamente hasta que el usuario las cancele desde la sección “Suscripciones” de su cuenta de Google Play o App Store",
          "La cancelación evita los cobros futuros y el acceso se mantiene hasta el final del período ya pagado",
          "Eliminar la cuenta o desinstalar la app no cancela una suscripción activa",
        ],
        closing: "Los pagos no son reembolsables, salvo en los casos previstos por las políticas de la tienda correspondiente o por la ley, incluido el derecho de arrepentimiento de diez días corridos que reconoce la normativa argentina de defensa del consumidor, cuando corresponda.",
        noteTitle: "En la medida permitida por la ley, Wit Ü no será responsable por:",
        noteItems: [
          "Fallas en plataformas de pago externas",
          "Cargos incorrectos originados en terceros",
        ],
        note: `Para consultar un cobro, ejercer el derecho de arrepentimiento o pedir ayuda con una baja, el usuario puede escribir a ${LEGAL_EMAIL}.`,
      },
      {
        title: "11. Propiedad intelectual",
        paragraphs: [
          "Los derechos sobre Wit Ü, incluidos su diseño, software, marca y funcionalidades, pertenecen a sus titulares o licenciantes. El contenido de los usuarios se rige por la sección 7.",
          "El usuario recibe una licencia personal, limitada, revocable, no exclusiva e intransferible para usar Wit Ü conforme a estos Términos. Queda prohibido:",
        ],
        items: [
          "Copiar, modificar o distribuir Wit Ü",
          "Utilizar la marca sin autorización",
          "Realizar ingeniería inversa, salvo en la medida en que la ley lo permita",
        ],
        closing: "El uso de Wit Ü no implica cesión de derechos al usuario.",
      },
      {
        title: "12. Servicios de terceros",
        paragraphs: [
          "Wit Ü puede integrar o enlazar servicios de terceros, como mapas, música, mensajería, tiendas de aplicaciones o sitios de organizadores de eventos. Esos servicios se rigen por sus propios términos y políticas de privacidad.",
          "En la medida permitida por la ley, Wit Ü no es responsable por su funcionamiento ni por sus prácticas.",
        ],
      },
      {
        title: "13. Modificaciones",
        paragraphs: [
          "Wit Ü puede modificar estos Términos. Los cambios rigen desde su publicación, con la fecha de actualización indicada al inicio. Los cambios sustanciales se informan mediante un aviso en la app o por correo electrónico.",
          "Si el usuario no está de acuerdo, puede dejar de usar Wit Ü y eliminar su cuenta. Continuar utilizando Wit Ü implica la aceptación de los cambios.",
        ],
      },
      {
        title: "14. Suspensión y terminación",
        paragraphs: ["Wit Ü puede suspender, limitar o eliminar cuentas, de forma temporal o permanente y sin previo aviso, en caso de:"],
        items: [
          "Incumplimiento de estos Términos",
          "Conductas sospechosas, fraudulentas o que pongan en riesgo a otras personas",
          "Uso indebido de Wit Ü",
          "Requerimientos legales o regulatorios",
        ],
        closing: `Quien considere que una medida sobre su cuenta o su contenido fue un error puede pedir su revisión escribiendo a ${LEGAL_EMAIL}.`,
        note: "El usuario puede eliminar su cuenta en cualquier momento desde la sección Perfil de la app. La terminación no extingue las obligaciones ni responsabilidades generadas con anterioridad.",
        link: { label: "Cómo eliminar tu cuenta", href: "/delete-account" },
      },
      {
        title: "15. Limitación de responsabilidad",
        paragraphs: [
          "Wit Ü se proporciona “tal cual” y “según disponibilidad”.",
          "Wit Ü no garantiza:",
        ],
        items: [
          "Un funcionamiento ininterrumpido o libre de errores",
          "Seguridad absoluta frente a ataques o accesos no autorizados",
          "Resultados específicos derivados del uso",
        ],
        noteTitle: "En la máxima medida permitida por la ley, Wit Ü no será responsable por:",
        noteItems: [
          "Daños indirectos o consecuentes",
          "Pérdida de datos, ingresos u oportunidades",
          "Fallas técnicas o interrupciones",
        ],
        note: "Nada de lo establecido en estos Términos limita los derechos irrenunciables que la ley reconoce a las personas consumidoras ni excluye responsabilidades que la ley no permite excluir.",
      },
      {
        title: "16. Legislación aplicable y jurisdicción",
        paragraphs: [
          "Estos Términos se rigen por las leyes de la República Argentina.",
          "Las controversias se someterán a los tribunales competentes de la República Argentina. Cuando el usuario sea consumidor, rigen las reglas de jurisdicción que la ley establece en su favor, y puede además reclamar ante los organismos de defensa del consumidor.",
        ],
      },
      {
        title: "17. Contacto",
        paragraphs: [
          `Para consultas o reclamos sobre estos Términos, o para reportar un problema de seguridad en Wit Ü, el usuario puede escribir a ${LEGAL_EMAIL}.`,
          "Sede administrativa: Buenos Aires, Argentina.",
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
    title: "Terms and Conditions",
    updated: "Last updated",
    sections: [
      {
        title: "1. Acceptance of terms",
        paragraphs: [
          "By accessing, registering or using the Wit Ü application and its services (“Wit Ü”), the user declares that they have read, understood and accepted these Terms and Conditions and the Privacy Policy, which complements them.",
          "If the user does not agree, they must refrain from using Wit Ü.",
        ],
        link: { label: "Read the Privacy Policy", href: "/privacidad" },
      },
      {
        title: "2. Service description",
        paragraphs: ["Wit Ü is a technology platform that allows users to:"],
        items: [
          "Discover plans, events or activities",
          "Connect with people with similar interests",
          "Interact through features such as profiles, connections, chats and, where available, groups and forums",
        ],
        closing: "Wit Ü facilitates contact between users without intervening in the decisions or agreements they make.",
        noteTitle: "Wit Ü does not guarantee:",
        noteItems: [
          "That meetings will take place",
          "Compatibility between users",
          "The quality, safety or legality of events organized by third parties",
        ],
      },
      {
        title: "3. Usage requirements",
        paragraphs: ["To use Wit Ü, the user must:"],
        items: [
          "Be 18 years of age or older",
          "Provide truthful, complete and updated information",
          "Not have been previously suspended or removed",
        ],
        closing: "The user guarantees that they meet these requirements and is responsible for any false information they provide.",
        note: "Wit Ü reserves the right to verify information and suspend accounts if inconsistencies are detected.",
      },
      {
        title: "4. User account",
        paragraphs: ["The account is personal and non-transferable. The user is responsible for:"],
        items: [
          "Maintaining the confidentiality of their access credentials",
          "The activities carried out from their account",
          "Immediately notifying any unauthorized use",
        ],
        closing: "To the extent permitted by law, Wit Ü is not responsible for improper access resulting from the user’s negligence.",
        note: "The grounds for suspending or deleting accounts are set out in section 14.",
      },
      {
        title: "5. User conduct",
        paragraphs: [
          "The user agrees to use Wit Ü responsibly, legally and respectfully.",
          "It is strictly prohibited to:",
        ],
        items: [
          "Harass, threaten, intimidate, discriminate or incite hatred or violence",
          "Publish violent, sexually explicit, offensive, illegal or misleading content",
          "Impersonate someone or provide false information",
          "Ask other users for money or financial favors",
          "Send spam, suspicious links or unsolicited messages",
          "Use Wit Ü for unauthorized commercial purposes",
          "Promote illegal or dangerous activities",
          "Collect data from other users without their consent",
          "Use bots or other automated means, or attempt to compromise the security or operation of Wit Ü",
          "Commit, promote or facilitate any form of child sexual abuse and exploitation (see section 6)",
        ],
      },
      {
        id: "child-safety",
        title: "6. Child safety: prohibition of Child Sexual Abuse and Exploitation (CSAE)",
        paragraphs: [
          "Wit Ü has zero tolerance for Child Sexual Abuse and Exploitation (CSAE).",
          "It is strictly prohibited to:",
        ],
        items: [
          "Create, upload, store, share, request, sell, link to or promote child sexual abuse material, including AI-generated or manipulated material",
          "Sexualize minors in any way",
          "Contact minors for sexual purposes (grooming) or ask them for intimate images",
          "Sexually extort minors, or take part in their trafficking or sexual exploitation",
          "Promote, justify or facilitate any of these behaviors, or attempt or threaten to commit them",
        ],
        closing: "Violations result in removal of the content and immediate, permanent suspension of the account, without prior notice. Wit Ü will report confirmed child sexual abuse material to the National Center for Missing & Exploited Children (NCMEC) or the competent authority, preserve evidence as required by law and cooperate with authorities.",
        link: { label: "Read the Wit Ü Child Safety Standards", href: CHILD_SAFETY_PATH },
      },
      {
        title: "7. User content",
        paragraphs: [
          "The user keeps ownership of the content they publish (text, images, videos and any other material) and is solely responsible for it.",
          "By publishing content, the user:",
        ],
        items: [
          "Guarantees that they have the necessary rights and permissions, including those of the people who appear in it",
          "Grants Wit Ü a non-exclusive, royalty-free, worldwide license to host, reproduce, adapt and display it, solely to operate and improve the service and for as long as the content remains on Wit Ü",
          "Accepts that the content may be visible to other users",
        ],
        closing: "To the extent permitted by law, Wit Ü is not responsible for user-generated content, and may remove it if it violates these Terms or applicable regulations.",
      },
      {
        title: "8. Reporting, blocking and moderation",
        paragraphs: ["Wit Ü does not tolerate offensive or illegal content or abusive behavior. The user can:"],
        items: [
          "Report profiles and content using the options available in the app",
          "Block other users to prevent contact",
          `Write to ${LEGAL_EMAIL} if they cannot report from the app`,
        ],
        closing: "Wit Ü reviews reports of objectionable content and takes action within a maximum of 24 hours. Depending on the case, it may hide or remove the content and suspend or permanently delete the responsible account.",
        link: { label: "Visit the Safety Center", href: "/safety" },
      },
      {
        title: "9. User interactions, events and emergencies",
        paragraphs: [
          "Unless it is expressly stated that it organizes or co-organizes an event, Wit Ü does not act as organizer, producer or host of published events.",
          "The user acknowledges that:",
        ],
        items: [
          "They decide whom to interact with and which events to attend, and must do so with caution",
          "Wit Ü does not run background checks or guarantee the identity of users",
          "Wit Ü does not control what happens outside its services and cannot review in advance everything published on them",
          "The emergency button prepares a WhatsApp message to the configured contact, which the user must send. It is not an emergency service and does not alert the authorities: in an emergency, call 911 or your local number",
        ],
        noteTitle: "To the extent permitted by law, Wit Ü will not be responsible for:",
        noteItems: [
          "Physical, emotional or material damages arising from interactions or meetings",
          "Theft, loss or conflicts",
          "Inappropriate or illegal conduct by users or third parties",
          "Incidents at events organized by third parties",
          "Cancellations or breaches by organizers or users",
        ],
        note: "The user will hold Wit Ü harmless from third-party claims arising from their breach of these Terms, their content or their conduct.",
      },
      {
        title: "10. Payments and subscriptions",
        paragraphs: ["Wit Ü may offer paid features or subscriptions. Price, duration and benefits are shown before purchase."],
        items: [
          "Payments are processed through Google Play, the App Store or other external providers",
          "Subscriptions renew automatically until the user cancels them from the “Subscriptions” section of their Google Play or App Store account",
          "Cancelling prevents future charges, and access continues until the end of the period already paid",
          "Deleting the account or uninstalling the app does not cancel an active subscription",
        ],
        closing: "Payments are non-refundable, except where provided by the policies of the relevant store or by law, including the ten calendar day right of withdrawal under Argentine consumer protection rules, where applicable.",
        noteTitle: "To the extent permitted by law, Wit Ü will not be responsible for:",
        noteItems: [
          "Failures in external payment platforms",
          "Incorrect charges caused by third parties",
        ],
        note: `To ask about a charge, exercise the right of withdrawal or get help with a cancellation, the user can write to ${LEGAL_EMAIL}.`,
      },
      {
        title: "11. Intellectual property",
        paragraphs: [
          "The rights to Wit Ü, including its design, software, brand and features, belong to its owners or licensors. User content is governed by section 7.",
          "The user receives a personal, limited, revocable, non-exclusive and non-transferable license to use Wit Ü in accordance with these Terms. It is prohibited to:",
        ],
        items: [
          "Copy, modify or distribute Wit Ü",
          "Use the brand without authorization",
          "Perform reverse engineering, except to the extent permitted by law",
        ],
        closing: "Use of Wit Ü does not imply any transfer of rights to the user.",
      },
      {
        title: "12. Third-party services",
        paragraphs: [
          "Wit Ü may integrate or link to third-party services, such as maps, music, messaging, app stores or event organizers’ websites. Those services are governed by their own terms and privacy policies.",
          "To the extent permitted by law, Wit Ü is not responsible for how they work or for their practices.",
        ],
      },
      {
        title: "13. Modifications",
        paragraphs: [
          "Wit Ü may modify these Terms. Changes take effect upon publication, with the update date shown at the top. Material changes are communicated through a notice in the app or by email.",
          "If the user does not agree, they can stop using Wit Ü and delete their account. Continued use implies acceptance of the changes.",
        ],
      },
      {
        title: "14. Suspension and termination",
        paragraphs: ["Wit Ü may suspend, limit or delete accounts, temporarily or permanently and without prior notice, in case of:"],
        items: [
          "Breach of these Terms",
          "Suspicious or fraudulent conduct, or conduct that puts other people at risk",
          "Misuse of Wit Ü",
          "Legal or regulatory requirements",
        ],
        closing: `Anyone who believes a measure on their account or content was a mistake can request a review by writing to ${LEGAL_EMAIL}.`,
        note: "The user can delete their account at any time from the Profile section of the app. Termination does not extinguish obligations or liabilities that arose beforehand.",
        link: { label: "How to delete your account", href: "/delete-account" },
      },
      {
        title: "15. Limitation of liability",
        paragraphs: [
          "Wit Ü is provided “as is” and “as available”.",
          "Wit Ü does not guarantee:",
        ],
        items: [
          "Uninterrupted or error-free operation",
          "Absolute security against attacks or unauthorized access",
          "Specific results derived from use",
        ],
        noteTitle: "To the maximum extent permitted by law, Wit Ü will not be responsible for:",
        noteItems: [
          "Indirect or consequential damages",
          "Loss of data, revenue or opportunities",
          "Technical failures or interruptions",
        ],
        note: "Nothing in these Terms limits the non-waivable rights that the law grants to consumers or excludes liability that cannot be excluded by law.",
      },
      {
        title: "16. Applicable law and jurisdiction",
        paragraphs: [
          "These Terms are governed by the laws of the Argentine Republic.",
          "Disputes will be submitted to the competent courts of the Argentine Republic. Where the user is a consumer, the jurisdiction rules established by law in their favor apply, and they may also file complaints with consumer protection agencies.",
        ],
      },
      {
        title: "17. Contact",
        paragraphs: [
          `For questions or complaints about these Terms, or to report a safety issue on Wit Ü, the user can write to ${LEGAL_EMAIL}.`,
          "Administrative headquarters: Buenos Aires, Argentina.",
        ],
      },
    ],
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      delete: "Delete account",
      childSafety: "Child safety",
      copyright: "© 2026 Wit Ü. All rights reserved.",
    },
  },
} as const satisfies Record<"es" | "en", PageCopy>;

const renderLegalSection = (section: LegalSection) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
    {section.paragraphs?.map((paragraph) => (
      <p key={paragraph} className="text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    ))}
    {section.items ? (
      <ul className="list-disc space-y-2 pl-6 text-gray-700 leading-relaxed">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : null}
    {section.closing ? (
      <p className="text-gray-700 leading-relaxed">{section.closing}</p>
    ) : null}
    {section.noteTitle ? (
      <p className="font-semibold text-gray-800">{section.noteTitle}</p>
    ) : null}
    {section.noteItems ? (
      <ul className="list-disc space-y-2 pl-6 text-gray-700 leading-relaxed">
        {section.noteItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : null}
    {section.note ? (
      <p className="text-gray-700 leading-relaxed">{section.note}</p>
    ) : null}
    {section.link ? (
      <p>
        <Link href={section.link.href} className="text-yellow-700 hover:text-yellow-800 underline font-semibold">
          {section.link.label}
        </Link>
      </p>
    ) : null}
  </div>
);

export default function TerminosPage() {
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
            {t.sections.map((section, index) => (
              // Clave estable entre idiomas: así el ancla no se pierde al cambiar de idioma.
              <section key={index} id={"id" in section ? section.id : undefined}>
                {renderLegalSection(section)}
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
