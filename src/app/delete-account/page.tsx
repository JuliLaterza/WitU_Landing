import Image from "next/image";
import Link from "next/link";

export default function DeleteAccountPage() {
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
            Eliminar Cuenta
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
                ¿Cómo eliminar tu cuenta de Wit Ü?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Entendemos que a veces necesitas tomar un descanso o eliminar tu cuenta. 
                El proceso es simple y directo. Una vez que elimines tu cuenta, toda tu 
                información personal será eliminada permanentemente de nuestros sistemas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Pasos para eliminar tu cuenta
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Abre la aplicación Wit Ü</li>
                  <li>Ve a tu perfil (toca tu foto de perfil en la esquina superior)</li>
                  <li>Selecciona &quot;Configuración&quot; o &quot;Ajustes&quot;</li>
                  <li>Desplázate hasta encontrar la opción &quot;Eliminar cuenta&quot;</li>
                  <li>Confirma que deseas eliminar tu cuenta</li>
                  <li>Escribe &quot;ELIMINAR&quot; para confirmar la acción</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Qué sucede cuando eliminas tu cuenta?
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-800 font-semibold mb-2">
                  ⚠️ Importante: Esta acción es permanente e irreversible
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Tu perfil será eliminado permanentemente</li>
                <li>Todas tus fotos y contenido serán eliminados</li>
                <li>Se eliminarán tus conexiones y conversaciones</li>
                <li>Tu información personal será borrada de nuestros servidores</li>
                <li>No podrás recuperar tu cuenta después de la eliminación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Antes de eliminar tu cuenta
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Antes de proceder con la eliminación, considera estas alternativas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ajustar privacidad:</strong> Puedes cambiar la configuración de privacidad para limitar quién puede ver tu perfil</li>
                <li><strong>Eliminar contenido específico:</strong> Puedes eliminar fotos o información específica sin eliminar toda tu cuenta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Datos que conservamos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Después de eliminar tu cuenta, podemos conservar cierta información 
                por períodos limitados cuando sea requerido por ley o para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cumplir con obligaciones legales o regulatorias</li>
                <li>Resolver disputas o hacer cumplir nuestros acuerdos</li>
                <li>Prevenir fraudes o actividades ilegales</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para más información sobre cómo manejamos tus datos, consulta nuestra 
                <Link href="/privacidad" className="text-yellow-600 hover:text-yellow-700 underline mx-1">
                  Política de Privacidad
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Necesitas ayuda?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre el proceso de eliminación de cuenta o necesitas 
                asistencia, no dudes en contactarnos:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> wituapp@gmail.com
                </p>
                <p className="text-gray-700 mt-2">
                  Estamos aquí para ayudarte con cualquier duda o problema que puedas tener.
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
                <Link href="/privacidad" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Política de privacidad
                </Link>
                <Link href="/terminos" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Términos y condiciones
                </Link>
                <Link href="/delete-account" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Eliminar cuenta
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

