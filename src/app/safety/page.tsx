import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Lock, Calendar, MessageSquare, Handshake, AlertCircle } from "lucide-react";

export default function SafetyPage() {
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
          
          {/* Título principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ⭐ Wit Ü – Centro de Seguridad
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Tu bienestar es lo más importante
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
              Wit Ü existe para conectar personas en el mundo real. Por eso, la seguridad es uno de nuestros pilares fundamentales. Este espacio reúne todas las herramientas y medidas que aplicamos para que tu experiencia sea segura y positiva.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Seguridad de la comunidad */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                👥 1. Seguridad de la comunidad
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Creamos un entorno donde podés relacionarte con tranquilidad:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Perfiles creados con fotos reales.</li>
                <li>Información visible solo para personas que asistirán al mismo evento.</li>
                <li>Eliminación de cuentas falsas o sospechosas.</li>
                <li>Tolerancia cero a contenido ofensivo, violento o inapropiado.</li>
              </ul>
            </section>

            {/* 2. Restricción de edad y protección de menores */}
            <section id="easi-standards">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                🔐 2. Restricción de edad y protección de menores
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Wit Ü es exclusivamente para mayores de 18 años.</li>
                <li>No está permitido que personas menores creen una cuenta o utilicen la app bajo ninguna circunstancia.</li>
                <li>Si detectamos que un perfil corresponde a un menor, se bloquea inmediatamente y de forma permanente.</li>
                <li>Si alguien declara una edad falsa o intenta engañar al sistema, aplicamos sanciones inmediatas.</li>
                <li>Esto garantiza que todas las interacciones ocurran únicamente entre adultos.</li>
              </ul>
            </section>

            {/* 3. Comportamientos no permitidos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                🛡️ 3. Comportamientos no permitidos
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Para proteger a toda la comunidad, no permitimos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg mb-6">
                <li>Solicitudes de dinero o favores económicos.</li>
                <li>Acoso, presión, amenazas o lenguaje violento.</li>
                <li>Enlaces sospechosos, spam o intentos comerciales.</li>
                <li>Perfiles fraudulentos o suplantación de identidad.</li>
                <li>Comportamiento inapropiado durante un encuentro.</li>
                <li>Subir fotos de terceros sin permiso.</li>
              </ul>
              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Actuamos con rapidez ante cualquier comportamiento inapropiado y aplicamos sanciones inmediatas, incluyendo el <strong>bloqueo permanente</strong> del perfil.
                </p>
              </div>
            </section>

            {/* 4. Seguridad en eventos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                🎉 4. Seguridad en eventos
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Como Wit Ü ocurre en la vida real, contamos con herramientas y recomendaciones para acompañarte:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Botón de emergencia (con contacto de referencia)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg mb-4">
                  <li>Podés designar dentro de la app a una persona de confianza como contacto de referencia.</li>
                  <li>Si estás en una situación incómoda o sentís que algo no está bien, podés activar el botón de emergencia:</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg ml-4">
                  <li>Wit Ü enviará automáticamente un mensaje de WhatsApp preformateado a tu contacto de referencia.</li>
                  <li>El mensaje incluye tu ubicación actual y una solicitud clara de asistencia inmediata.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Recomendaciones prácticas</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                  <li>Avisá a alguien de confianza dónde vas a estar.</li>
                  <li>Compartí tu ubicación con amigos.</li>
                  <li>Elegí encontrarte en lugares públicos y concurridos.</li>
                  <li>Llegá y volvé por tus propios medios.</li>
                  <li>Respetá tus límites y los de las demás personas.</li>
                  <li>Consumí alcohol con responsabilidad.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Líneas telefónicas útiles (Argentina)</h3>
                <ul className="list-none text-gray-700 space-y-2 text-lg">
                  <li>📞 <strong>144</strong> – Asistencia en situaciones de violencia.</li>
                  <li>📞 <strong>911</strong> – Policía.</li>
                  <li>📞 <strong>107</strong> – Emergencias médicas.</li>
                </ul>
              </div>
            </section>

            {/* 5. Cómo reportar o bloquear */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                🚨 5. Cómo reportar o bloquear
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Si algo no te hace sentir segur@, podés actuar en segundos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg mb-4">
                <li>Reportar un perfil o un mensaje desde la app.</li>
                <li>Bloquear a un usuario de forma inmediata.</li>
                <li>Escribirnos directamente a: <a href="mailto:support@witu.me" className="text-yellow-600 hover:text-yellow-700 font-semibold">📧 support@witu.me</a></li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg">
                Las denuncias sensibles se revisan con prioridad.
              </p>
            </section>

            {/* 6. Seguridad en chats y matches */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                💬 6. Seguridad en chats y matches
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Para conversar con tranquilidad, te ofrecemos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Perfiles reales vinculados a eventos reales.</li>
                <li>Reporte anónimo de mensajes o usuarios.</li>
                <li>Bloqueo instantáneo en cualquier momento.</li>
                <li>Revisión interna en menos de 24h en casos urgentes.</li>
              </ul>
            </section>

            {/* 7. Normas de convivencia */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                🤝 7. Normas de convivencia
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                La comunidad se basa en el respeto mutuo. Por eso pedimos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Trato amable y sin discriminación.</li>
                <li>Honestidad al compartir información.</li>
                <li>Mantener conversaciones dentro de un marco respetuoso.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                El incumplimiento de estas normas puede llevar a sanciones o expulsión permanente.
              </p>
            </section>

            {/* 8. Contacto y soporte */}
            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                ✉️ 8. Contacto y soporte
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Si necesitás ayuda, tenés dudas o querés reportar algo:
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <a href="mailto:support@witu.me" className="text-yellow-600 hover:text-yellow-700 font-semibold text-xl">📧 support@witu.me</a>
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Estamos acá para acompañarte en cada etapa.
              </p>
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
                <Link href="/safety" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
                  Seguridad
                </Link>
                <Link href="/safety#easi-standards" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Restricción de edad
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

