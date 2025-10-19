import Image from "next/image";
import Link from "next/link";

export default function TerminosPage() {
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
            Términos y Condiciones
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
                1. Aceptación de los Términos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Al acceder y utilizar la aplicación Wit Ü, aceptas cumplir con estos términos y condiciones 
                de uso. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestra 
                aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Descripción del Servicio
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wit Ü es una aplicación móvil que conecta a personas a través de eventos y actividades 
                en la vida real. Nuestro objetivo es crear conexiones auténticas basadas en intereses 
                compartidos y experiencias comunes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La aplicación te permite:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>Descubrir eventos y actividades en tu área</li>
                <li>Conectar con personas que comparten tus intereses</li>
                <li>Participar en eventos y actividades reales</li>
                <li>Crear y organizar tus propios eventos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Registro y Cuenta de Usuario
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para utilizar Wit Ü, deberás crear una cuenta proporcionando información precisa y actual. 
                Eres responsable de mantener la confidencialidad de tu cuenta y de todas las actividades 
                que ocurran bajo tu cuenta.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Debes ser mayor de 18 años para utilizar nuestra aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Uso Aceptable
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al utilizar Wit Ü, te comprometes a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Usar la aplicación de manera legal y conforme a estos términos</li>
                <li>No realizar actividades que puedan dañar, deshabilitar o sobrecargar la aplicación</li>
                <li>No usar la aplicación para fines comerciales no autorizados</li>
                <li>Respetar a otros usuarios y mantener un comportamiento apropiado</li>
                <li>No compartir contenido falso, engañoso o que pueda perjudicar a otros</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de suspender o terminar tu cuenta si violas estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Contenido del Usuario
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mantienes todos los derechos sobre el contenido que compartas en Wit Ü. Sin embargo, 
                nos otorgas una licencia no exclusiva para usar, mostrar y distribuir ese contenido 
                en relación con el funcionamiento de la aplicación.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Eres responsable del contenido que compartas y te aseguras de que no infrinja 
                los derechos de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Privacidad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La protección de tu privacidad es importante para nosotros. Por favor, revisa 
                nuestra <Link href="/privacidad" className="text-yellow-600 hover:text-yellow-700 underline">Política de Privacidad</Link> 
                para entender cómo recopilamos, usamos y protegemos tu información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Modificaciones
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación 
                en la aplicación. Su uso continuado de la aplicación constituye su aceptación 
                de los términos modificados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wit Ü se proporciona "tal como está" sin garantías de ningún tipo. No seremos 
                responsables por daños directos, indirectos, incidentales o consecuenciales 
                que resulten del uso de nuestra aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contacto
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en:
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
