"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Music, 
  Heart, 
  CheckCircle,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X as CloseIcon,
  MapPin,
  Brain,
  Calendar,
  User,
  Users2
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://sheetdb.io/api/v1/yfkufv4o2cp14', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: email,
          Fecha: new Date().toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }) // Formato DD-MM-YYYY
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error('Error al enviar datos');
      }
    } catch (error) {
      console.error('Error:', error);
      // Opcional: mostrar mensaje de error al usuario
      alert('Hubo un error al enviar tu email. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación centrada */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image 
                src="/assets/images/logo_witu.png" 
                alt="Wit Ü Logo" 
                width={96}
                height={32}
                className="w-24 h-8"
              />
              {/*<span className="text-xl font-bold text-gray-900">Wit Ü</span>*/}
            </div>

            {/* Navegación desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#que-es" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                ¿Qué es?
              </a>
              <a 
                href="#como-funciona" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                ¿Cómo funciona?
              </a>
              <a 
                href="#por-que" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                ¿Por qué Wit Ü?
              </a>
              <a 
                href="#waitlist" 
                className="bg-gradient-yellow text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gradient-yellow-reverse transition-all duration-300"
              >
                Unite a la waitlist
              </a>
            </div>

            {/* Botón menú móvil */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>

          {/* Menú móvil */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#que-es" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    ¿Qué es?
                  </a>
                  <a 
                    href="#como-funciona" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    ¿Cómo funciona?
                  </a>
                  <a 
                    href="#por-que" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    ¿Por qué Wit Ü?
                  </a>
                  <a 
                    href="#waitlist" 
                    onClick={closeMobileMenu}
                    className="bg-gradient-yellow text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gradient-yellow-reverse transition-all duration-300 text-center"
                  >
                    Unite a la waitlist
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* 1. Hero Section - Pantalla completa al inicio */}
      <section className="h-screen flex items-center justify-center px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Conectá con personas antes, durante y después del evento.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Wit Ü transforma tu experiencia social: descubrí afinidades reales, en eventos reales.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-yellow text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-yellow-reverse hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Unite a la waitlist
          </motion.button>

          {/* Mockup del app - placeholder visual */}

        </motion.div>
      </section>

      {/* 2. ¿Qué es Wit Ü? */}
      <section id="que-es" className="py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Qué es Wit Ü?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Es el puente entre lo digital y lo real.
            </p>
            
            {/* Imagen de filosofía */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto mb-12"
            >
              <Image 
                src="/assets/images/filosofia.png" 
                alt="Filosofía Wit Ü: You + Happy + People = Bond/Connection" 
                width={400}
                height={200}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "🎉 Eventos y actividades sociales reales",
                description: "Conectá en lugares y momentos específicos"
              },
              {
                icon: Heart,
                title: "💫 Afinidades auténticas",
                description: "Descubrí personas con gustos similares"
              },
              {
                icon: MapPin,
                title: "📍 Conexiones geolocalizadas",
                description: "Encuentros en tu zona y eventos cercanos"
              },
              {
                icon: Brain,
                title: "🧠 Algoritmo social",
                description: "Inteligencia que entiende tus preferencias"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ¿Cómo funciona? */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Cómo funciona?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Completá tu perfil",
                description: "Mostrale al mundo quien sos, tus gustos, tus preferencias, tus actividades favoritas, etc."
              },
              {
                step: "2",
                title: "Elegí tu evento o actividad social",
                description: "Selecciona dentro del catalogo de eventos y actividades sociales que tenemos para vos"
              },
              {
                step: "3",
                title: "Descubrí personas compatibles",
                description: "Recibí matches basados en afinidades reales"
              },
              {
                step: "4",
                title: "¡Conectá antes de que empiece!",
                description: "Chateá y rompe el hielo antes de asistir"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center mb-6 mx-auto text-2xl font-bold text-gray-900">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ¿Por qué Wit Ü? */}
      <section id="por-que" className="py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Por qué Wit Ü?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "🫂 Conexiones genuinas",
                description: "No swipes sin sentido, solo personas con intereses reales"
              },
              {
                icon: Music,
                title: "🥂 Compartís más que una foto",
                description: "Música, gustos, momento - todo cuenta para conectar"
              },
              {
                icon: Users2,
                title: "🧍‍♂️🧍‍♀️ Ideal si vas solo/a",
                description: "Querés conocer nuevas personas? Nosotros te ayudamos a encontrar a quienes te interesan"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonios */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Lo que dicen nuestros usuarios
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Conocí a mi mejor amiga en un evento usando Wit Ü",
                author: "María, 25 años"
              },
              {
                quote: "Fui solo y terminé conociendo gente con gustos similares.",
                author: "Carlos, 28 años"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-yellow-light rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Llamado a la acción final */}
      <section className="py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Sumate a la comunidad que quiere volver a conectar en el mundo real
            </h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    required
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-dark focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-yellow text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gradient-yellow-reverse hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Enviando..." : "Unite a la waitlist"}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  ¡Gracias por unirte!
                </h3>
                <p className="text-green-700">
                  Te mantendremos informado sobre el próximo evento
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Image 
              src="/assets/images/logo_witu.png" 
              alt="Wit Ü Logo" 
              width={96}
              height={32}
              className="w-24 h-8"
            />
            {/*<span className="text-xl font-bold text-gray-900">Wit Ü</span>*/}
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://www.instagram.com/witu.app/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:wituapp@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Términos y condiciones
            </a>
            <a href="mailto:wituapp@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contacto
            </a>
          </div>
          
          <p className="text-gray-600 text-sm">
            © 2025 Wit Ü. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
