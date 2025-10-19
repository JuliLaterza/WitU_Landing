import Image from "next/image";
import Link from "next/link";

export default function PrivacidadPage() {
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
            <Link 
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Política de Privacidad
          </h1>
          
          <div className="text-sm text-gray-600 mb-8">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introducción
              </h2>
              <p className="text-gray-700 leading-relaxed">
                En Wit Ü, respetamos tu privacidad y nos comprometemos a proteger tu información personal. 
                Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos 
                tu información cuando utilizas nuestra aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Información que Recopilamos
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.1 Información que nos proporcionas
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Información de perfil (nombre, edad, fotos, biografía)</li>
                <li>Dirección de correo electrónico</li>
                <li>Preferencias e intereses personales</li>
                <li>Ubicación (cuando la compartas voluntariamente)</li>
                <li>Comunicaciones que nos envíes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.2 Información que recopilamos automáticamente
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Información del dispositivo (tipo, sistema operativo, identificadores únicos)</li>
                <li>Información de uso de la aplicación</li>
                <li>Datos de ubicación (con tu consentimiento)</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Cómo Usamos tu Información
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Conectarte con personas compatibles con tus intereses</li>
                <li>Mostrarte eventos y actividades relevantes</li>
                <li>Comunicarnos contigo sobre la aplicación y eventos</li>
                <li>Personalizar tu experiencia en la aplicación</li>
                <li>Garantizar la seguridad y prevenir fraudes</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Compartir Información
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos tu información personal. Podemos compartir tu información en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Con otros usuarios de la aplicación (según las configuraciones de tu perfil)</li>
                <li>Con proveedores de servicios que nos ayudan a operar la aplicación</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
                <li>En caso de una fusión, adquisición o venta de activos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Seguridad de los Datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas 
                para proteger tu información personal contra acceso no autorizado, alteración, 
                divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Tus Derechos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tienes varios derechos respecto a tu información personal:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta</li>
                <li>Eliminar tu información personal</li>
                <li>Restringir el procesamiento de tu información</li>
                <li>Portabilidad de datos</li>
                <li>Retirar tu consentimiento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Puedes ejercer estos derechos contactándonos en wituapp@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Retención de Datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos tu información personal durante el tiempo necesario para cumplir 
                con los propósitos descritos en esta política, a menos que la ley requiera 
                un período de retención más largo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Menores de Edad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios están dirigidos a usuarios mayores de 18 años. No recopilamos 
                intencionalmente información personal de menores de edad. Si descubrimos que 
                hemos recopilado información de un menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Cambios a esta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos 
                sobre cambios significativos mediante la aplicación o por correo electrónico. 
                Te recomendamos revisar esta política periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contacto
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos 
                tu información personal, puedes contactarnos:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> wituapp@gmail.com
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
              <div className="flex space-x-6 text-sm">
                <Link href="/privacidad" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Política de privacidad
                </Link>
                <Link href="/terminos" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Términos y condiciones
                </Link>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">
              © 2025 Wit Ü. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
