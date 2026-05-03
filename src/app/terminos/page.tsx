"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppLanguage } from "@/lib/language";

type LegalSection = {
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
          "Al acceder, registrarse o utilizar la aplicación Wit Ü (en adelante, “la Plataforma”), el usuario declara haber leído, comprendido y aceptado quedar legalmente obligado por los presentes Términos y Condiciones, así como por la Política de Privacidad.",
          "El uso de la Plataforma implica la aceptación plena y sin reservas de estos términos. Si el usuario no estuviera de acuerdo, deberá abstenerse de utilizarla.",
          "Wit Ü podrá actualizar estos Términos en cualquier momento. El uso continuado de la Plataforma luego de dichas modificaciones implicará la aceptación de los cambios.",
        ],
      },
      {
        title: "2. Descripción del servicio",
        paragraphs: ["Wit Ü es una plataforma tecnológica que permite a los usuarios:"],
        items: [
          "Descubrir planes, eventos o actividades",
          "Conectarse con personas con intereses similares",
          "Interactuar mediante funcionalidades como perfiles, conexiones y chat",
        ],
        closing: "Wit Ü actúa exclusivamente como un intermediario digital, facilitando el contacto entre usuarios, sin intervenir en las decisiones, acuerdos o interacciones que estos realicen.",
        noteTitle: "La Plataforma no garantiza:",
        noteItems: [
          "La concreción de encuentros",
          "La compatibilidad entre usuarios",
          "La calidad, seguridad o legalidad de los eventos",
        ],
      },
      {
        title: "3. Requisitos de uso",
        paragraphs: ["Para utilizar la Plataforma, el usuario debe:"],
        items: [
          "Ser mayor de 18 años",
          "Brindar información veraz, completa y actualizada",
          "No haber sido previamente suspendido o expulsado",
        ],
        closing: "El usuario garantiza que cumple con estos requisitos y será responsable por cualquier falsedad en la información proporcionada.",
        note: "Wit Ü se reserva el derecho de verificar la información y de suspender cuentas en caso de detectar inconsistencias.",
      },
      {
        title: "4. Cuenta de usuario",
        paragraphs: ["El usuario es responsable de:"],
        items: [
          "Mantener la confidencialidad de sus credenciales de acceso",
          "Todas las actividades realizadas desde su cuenta",
          "Notificar inmediatamente cualquier uso no autorizado",
        ],
        closing: "Wit Ü no será responsable por accesos indebidos derivados de negligencia del usuario.",
        noteTitle: "La Plataforma podrá suspender, limitar o eliminar cuentas, sin previo aviso, en caso de:",
        noteItems: [
          "Incumplimiento de estos Términos",
          "Conductas sospechosas o fraudulentas",
          "Requerimientos legales o regulatorios",
        ],
      },
      {
        title: "5. Conducta del usuario",
        paragraphs: [
          "El usuario se compromete a utilizar la Plataforma de forma responsable, legal y respetuosa.",
          "Queda estrictamente prohibido:",
        ],
        items: [
          "Acosar, amenazar, intimidar o discriminar",
          "Publicar contenido violento, sexual explícito, ilegal o engañoso",
          "Suplantar identidad o proporcionar información falsa",
          "Utilizar la Plataforma con fines comerciales no autorizados",
          "Promover actividades ilegales o peligrosas",
          "Recopilar datos de otros usuarios sin consentimiento",
        ],
        closing: "Wit Ü se reserva el derecho de remover contenido y tomar acciones sobre cuentas que incumplan estas normas.",
      },
      {
        title: "6. Contenido del usuario",
        paragraphs: [
          "El usuario es el único responsable por el contenido que publica, incluyendo textos, imágenes, videos y cualquier otro material.",
          "Al publicar contenido, el usuario:",
        ],
        items: [
          "Garantiza que tiene los derechos necesarios sobre el mismo",
          "Autoriza a Wit Ü a utilizarlo dentro de la Plataforma de forma no exclusiva, gratuita y global",
          "Acepta que el contenido pueda ser visible por otros usuarios",
        ],
        closing: "Wit Ü no es responsable por el contenido generado por los usuarios, pero podrá eliminarlo si considera que infringe estos Términos o la normativa vigente.",
      },
      {
        title: "7. Interacciones entre usuarios, eventos y limitación de responsabilidad ampliada",
        paragraphs: [
          "Wit Ü actúa exclusivamente como una plataforma tecnológica que facilita la conexión entre usuarios con intereses similares. En ningún caso Wit Ü actúa como organizador, productor, anfitrión ni responsable de los eventos o interacciones.",
          "El usuario reconoce que:",
        ],
        items: [
          "Participa en eventos bajo su propia responsabilidad",
          "Wit Ü no verifica la identidad ni antecedentes de los usuarios",
          "Wit Ü no controla lo que ocurre dentro o fuera de la Plataforma",
        ],
        noteTitle: "Wit Ü no será responsable por:",
        noteItems: [
          "Daños físicos, emocionales o materiales",
          "Robos, pérdidas o conflictos",
          "Conductas inapropiadas o ilegales",
          "Incidentes en eventos o encuentros",
          "Cancelaciones o incumplimientos",
        ],
        closing: "El usuario se compromete a mantener indemne a Wit Ü frente a cualquier reclamo derivado de estas situaciones.",
      },
      {
        title: "8. Pagos y servicios premium",
        paragraphs: [
          "Wit Ü podrá ofrecer funcionalidades pagas o suscripciones.",
          "El usuario acepta que:",
        ],
        items: [
          "Los pagos pueden gestionarse a través de terceros",
          "Las suscripciones se renuevan automáticamente y debe cancelar la suscripción desde el panel “Suscripciones” en su cuenta de App Store o Google Play.",
          "No se realizan reembolsos",
        ],
        noteTitle: "Wit Ü no será responsable por:",
        noteItems: [
          "Fallas en plataformas de pago externas",
          "Cargos incorrectos derivados de terceros",
        ],
      },
      {
        title: "9. Propiedad intelectual",
        paragraphs: [
          "Todos los derechos sobre la Plataforma, incluyendo su diseño, software, marca, contenido y funcionalidades, pertenecen a Wit Ü.",
          "Queda prohibido:",
        ],
        items: [
          "Copiar, modificar o distribuir la Plataforma",
          "Utilizar la marca sin autorización",
          "Realizar ingeniería inversa",
        ],
        closing: "El uso de la Plataforma no implica cesión de derechos al usuario.",
      },
      {
        title: "10. Modificaciones",
        paragraphs: [
          "Wit Ü podrá modificar estos Términos en cualquier momento.",
          "Las modificaciones entrarán en vigencia desde su publicación. Es responsabilidad del usuario revisarlos periódicamente.",
          "El uso continuo de la Plataforma implica la aceptación de las modificaciones.",
        ],
      },
      {
        title: "11. Terminación",
        paragraphs: ["Wit Ü podrá suspender o cancelar el acceso del usuario, de forma temporal o permanente, sin previo aviso, en caso de:"],
        items: [
          "Incumplimiento de los Términos",
          "Uso indebido de la Plataforma",
          "Requerimientos legales",
        ],
        closing: "El usuario podrá dejar de utilizar la Plataforma en cualquier momento.",
      },
      {
        title: "12. Limitación de responsabilidad",
        paragraphs: [
          "La Plataforma se proporciona tal cual y según disponibilidad.",
          "Wit Ü no garantiza:",
        ],
        items: [
          "Funcionamiento ininterrumpido o libre de errores",
          "Seguridad absoluta frente a ataques o accesos no autorizados",
          "Resultados específicos derivados del uso",
        ],
        noteTitle: "En la máxima medida permitida por la ley, Wit Ü no será responsable por:",
        noteItems: [
          "Daños indirectos o consecuentes",
          "Pérdida de datos, ingresos u oportunidades",
          "Fallas técnicas o interrupciones",
        ],
      },
      {
        title: "13. Legislación aplicable",
        paragraphs: [
          "Estos Términos se rigen por las leyes de la República Argentina.",
          "Cualquier controversia será sometida a los tribunales ordinarios competentes, con renuncia a cualquier otro fuero o jurisdicción.",
        ],
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
        paragraphs: [
          "By accessing, registering or using the Wit Ü application (the “Platform”), the user declares that they have read, understood and agreed to be legally bound by these Terms and Conditions, as well as by the Privacy Policy.",
          "Use of the Platform implies full and unconditional acceptance of these terms. If the user does not agree, they must refrain from using it.",
          "Wit Ü may update these Terms at any time. Continued use of the Platform after such modifications will imply acceptance of the changes.",
        ],
      },
      {
        title: "2. Service description",
        paragraphs: ["Wit Ü is a technology platform that allows users to:"],
        items: [
          "Discover plans, events or activities",
          "Connect with people with similar interests",
          "Interact through features such as profiles, connections and chat",
        ],
        closing: "Wit Ü acts exclusively as a digital intermediary, facilitating contact between users without intervening in the decisions, agreements or interactions they make.",
        noteTitle: "The Platform does not guarantee:",
        noteItems: [
          "That meetings will take place",
          "Compatibility between users",
          "The quality, safety or legality of events",
        ],
      },
      {
        title: "3. Usage requirements",
        paragraphs: ["To use the Platform, the user must:"],
        items: [
          "Be over 18 years old",
          "Provide truthful, complete and updated information",
          "Not have been previously suspended or removed",
        ],
        closing: "The user guarantees that they meet these requirements and will be responsible for any false information provided.",
        note: "Wit Ü reserves the right to verify information and suspend accounts if inconsistencies are detected.",
      },
      {
        title: "4. User account",
        paragraphs: ["The user is responsible for:"],
        items: [
          "Maintaining the confidentiality of their access credentials",
          "All activities carried out from their account",
          "Immediately notifying any unauthorized use",
        ],
        closing: "Wit Ü will not be responsible for improper access resulting from user negligence.",
        noteTitle: "The Platform may suspend, limit or delete accounts, without prior notice, in case of:",
        noteItems: [
          "Breach of these Terms",
          "Suspicious or fraudulent conduct",
          "Legal or regulatory requirements",
        ],
      },
      {
        title: "5. User conduct",
        paragraphs: [
          "The user agrees to use the Platform responsibly, legally and respectfully.",
          "It is strictly prohibited to:",
        ],
        items: [
          "Harass, threaten, intimidate or discriminate",
          "Publish violent, sexually explicit, illegal or misleading content",
          "Impersonate someone or provide false information",
          "Use the Platform for unauthorized commercial purposes",
          "Promote illegal or dangerous activities",
          "Collect data from other users without consent",
        ],
        closing: "Wit Ü reserves the right to remove content and take action on accounts that violate these rules.",
      },
      {
        title: "6. User content",
        paragraphs: [
          "The user is solely responsible for the content they publish, including text, images, videos and any other material.",
          "By publishing content, the user:",
        ],
        items: [
          "Guarantees that they have the necessary rights over it",
          "Authorizes Wit Ü to use it within the Platform in a non-exclusive, free and global manner",
          "Accepts that the content may be visible to other users",
        ],
        closing: "Wit Ü is not responsible for user-generated content, but may remove it if it considers that it violates these Terms or applicable regulations.",
      },
      {
        title: "7. User interactions, events and extended limitation of liability",
        paragraphs: [
          "Wit Ü acts exclusively as a technology platform that facilitates connections between users with similar interests. Under no circumstances does Wit Ü act as organizer, producer, host or person responsible for events or interactions.",
          "The user acknowledges that:",
        ],
        items: [
          "They participate in events under their own responsibility",
          "Wit Ü does not verify the identity or background of users",
          "Wit Ü does not control what happens inside or outside the Platform",
        ],
        noteTitle: "Wit Ü will not be responsible for:",
        noteItems: [
          "Physical, emotional or material damages",
          "Theft, loss or conflicts",
          "Inappropriate or illegal conduct",
          "Incidents at events or meetings",
          "Cancellations or breaches",
        ],
        closing: "The user agrees to hold Wit Ü harmless from any claim arising from these situations.",
      },
      {
        title: "8. Payments and premium services",
        paragraphs: [
          "Wit Ü may offer paid features or subscriptions.",
          "The user accepts that:",
        ],
        items: [
          "Payments may be managed through third parties",
          "Subscriptions renew automatically and must be canceled from the “Subscriptions” panel in the user’s App Store or Google Play account.",
          "No refunds are made",
        ],
        noteTitle: "Wit Ü will not be responsible for:",
        noteItems: [
          "Failures in external payment platforms",
          "Incorrect charges caused by third parties",
        ],
      },
      {
        title: "9. Intellectual property",
        paragraphs: [
          "All rights to the Platform, including its design, software, brand, content and features, belong to Wit Ü.",
          "It is prohibited to:",
        ],
        items: [
          "Copy, modify or distribute the Platform",
          "Use the brand without authorization",
          "Perform reverse engineering",
        ],
        closing: "Use of the Platform does not imply any transfer of rights to the user.",
      },
      {
        title: "10. Modifications",
        paragraphs: [
          "Wit Ü may modify these Terms at any time.",
          "Modifications will take effect upon publication. It is the user’s responsibility to review them periodically.",
          "Continued use of the Platform implies acceptance of the modifications.",
        ],
      },
      {
        title: "11. Termination",
        paragraphs: ["Wit Ü may suspend or cancel the user’s access, temporarily or permanently, without prior notice, in case of:"],
        items: [
          "Breach of the Terms",
          "Misuse of the Platform",
          "Legal requirements",
        ],
        closing: "The user may stop using the Platform at any time.",
      },
      {
        title: "12. Limitation of liability",
        paragraphs: [
          "The Platform is provided “as is” and “as available”.",
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
      },
      {
        title: "13. Applicable law",
        paragraphs: [
          "These Terms are governed by the laws of the Argentine Republic.",
          "Any dispute will be submitted to the competent ordinary courts, waiving any other venue or jurisdiction.",
        ],
      },
    ],
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      delete: "Delete account",
      copyright: "© 2025 Wit Ü. All rights reserved.",
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
  </div>
);

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
