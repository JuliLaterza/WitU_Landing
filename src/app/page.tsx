"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  CheckCircle,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X as CloseIcon,
  Calendar,
  Users2,
  Globe,
  Star
} from "lucide-react";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Componente widget de agradecimiento reutilizable
  const ThankYouWidget = ({ className = "" }: { className?: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-white border-2 border-green-200 rounded-2xl p-6 sm:p-8 shadow-xl ${className}`}
    >
      <div className="text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          ¡Ya estás en lista! 🎉
        </h3>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6 inline-block">
          ✅ Estás en la waitlist de Wit Ü
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          Serás de los primeros en conocer la app cuando la lancemos.
        </p>
        <div className="bg-green-50 rounded-xl p-4 sm:p-5">
          <p className="text-sm sm:text-base text-green-800 font-medium mb-2">
            ¿Qué sigue ahora?
          </p>
          <ul className="text-sm text-green-700 space-y-1 text-left max-w-sm mx-auto">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              Te enviaremos actualizaciones importantes
            </li>
            <li className="flex items-center">
              <span className="mr-2">🚀</span>
              Acceso temprano a la app
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎁</span>
              Beneficios exclusivos para early users
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!email.trim()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const dataToSend = {
        Customers: email,
        Fecha: new Date().toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }) // Formato DD/MM/YYYY
      };
      
      console.log('Enviando datos:', dataToSend);
      
      const response = await fetch('https://sheetdb.io/api/v1/gcv8c1517k9ow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
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

  const eventCategories = [
    {
      category: "Fiestas",
      title: "Boliches",
      image: "/assets/images/amigos-boliches.jpg",
    },
    {
      category: "Recitales",
      title: "Festivales y recitales musicales",
      image: "/assets/images/recitales.jpg",
    },
    {
      category: "Plazas",
      title: "Naturaleza y aire libre",
      image: "/assets/images/juntadas_parque.jpeg",
    },
    {
      category: "Deportes",
      title: "Clubes de running",
      image: "/assets/images/runningclub.jpg",
    },
  ];


  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Header con navegación centrada */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 py-4 w-full">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Image 
                src="/assets/images/logo_witu.png" 
                alt="Wit Ü Logo" 
                width={96}
                height={32}
                className="w-20 sm:w-24 h-6 sm:h-8"
              />
            </div>

            {/* Navegación desktop */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-shrink-0">
              <a 
                href="#que-es" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                ¿Qué es?
              </a>
              <a 
                href="#eventos" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                Eventos
              </a>
              <a 
                href="#como-funciona" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                ¿Cómo funciona?
              </a>
              <a 
                href="#por-que" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                ¿Por qué Wit Ü?
              </a>
              
              <Link
                href="/sumar-evento"
                className="bg-gray-900 text-white px-3 lg:px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
              >
                Quiero sumar mi evento
              </Link>
              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-yellow text-gray-900 px-3 lg:px-4 py-2 rounded-full font-medium hover:bg-gradient-yellow-reverse transition-all duration-300 cursor-pointer text-sm lg:text-base whitespace-nowrap"
              >
                Unite a la Waitlist
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
                    href="#eventos" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    Eventos
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
                  <Link 
                    href="/safety" 
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    Seguridad
                  </Link>
                  <Link
                    href="/sumar-evento"
                    onClick={closeMobileMenu}
                    className="bg-gray-900 text-white px-4 py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Quiero sumar mi evento
                  </Link>
                  <a
                    href="#waitlist"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMobileMenu();
                      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-yellow text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gradient-yellow-reverse transition-all duration-300 text-center cursor-pointer"
                  >
                    Unite a la Waitlist
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* 1. Hero Section - Rebranding moderno */}
      <section className="relative overflow-hidden px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 bg-gradient-to-b from-white via-[#FFFCF4] to-white">
        <div className="absolute -top-20 -left-14 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-900 px-4 py-1.5 text-sm font-semibold mb-6 border border-yellow-200">
                ✨ La vida pasa afuera
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.03] mb-6">
                Conectá con personas que viven
                <span className="block italic bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-700 bg-clip-text text-transparent">
                  lo mismo que vos
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-2 max-w-xl">
                Volvé a conectar en la vida real. Porque los mejores planes no pasan online.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                
              </p>

              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/85 backdrop-blur-md border border-gray-100 rounded-2xl p-3 sm:p-4 shadow-xl max-w-2xl"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                        }
                      }}
                      placeholder="Tu email principal"
                      className="flex-1 px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-dark focus:border-transparent text-base placeholder:text-gray-400 bg-white"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="bg-gradient-yellow text-gray-900 px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-gradient-yellow-reverse shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isLoading ? "Enviando..." : "Unite a la comunidad"}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 px-1">
                    Acceso anticipado, eventos curados y beneficios para early users.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <ThankYouWidget />
                </motion.div>
              )}

              <div className="mt-7 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-lg max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Nos apoyan
                </p>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  <Image
                    src="/assets/images/sponsors/uade-logo.svg-2.png"
                    alt="UADE"
                    width={120}
                    height={40}
                    className="h-7 sm:h-8 w-auto opacity-80"
                  />
                  <Image
                    src="/assets/images/sponsors/Emprelatam-logo-azul.png"
                    alt="Emprelatam"
                    width={150}
                    height={40}
                    className="h-8 sm:h-9 w-auto opacity-80"
                  />
                  <Image
                    src="/assets/images/sponsors/aws-startups.png"
                    alt="AWS Startup Programs"
                    width={130}
                    height={40}
                    className="h-7 sm:h-8 w-auto opacity-80"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative max-w-[560px] mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border border-white/70"
                  >
                    <Image
                      src="/assets/images/amigos-boliches.jpg"
                      alt="Amigos brindando en una fiesta"
                      width={820}
                      height={520}
                      className="w-full h-52 sm:h-64 object-cover"
                      priority
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/65 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Fiestas
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="relative rounded-3xl overflow-hidden shadow-xl border border-white/70"
                  >
                    <Image
                      src="/assets/images/juntadas_parque.jpeg"
                      alt="Personas en un encuentro al aire libre"
                      width={420}
                      height={420}
                      className="w-full h-44 sm:h-52 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/85 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Juntadas
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="relative rounded-3xl overflow-hidden shadow-xl border border-white/70"
                  >
                    <Image
                      src="/assets/images/recitales.jpg"
                      alt="Personas disfrutando un recital"
                      width={420}
                      height={420}
                      className="w-full h-44 sm:h-52 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/85 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Recitales
                      </span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <p className="text-sm font-semibold text-gray-900">Recital</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">150 personas asistiendo ahora</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ¿Qué es Wit Ü? */}
      <section id="que-es" className="py-14 sm:py-16 md:py-20 px-4 bg-[#F8F8F6]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Somos la red social que se vive en la vida real
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: Users2,
                title: "Conexiones Reales",
                description:
                  "Conocé gente con tus mismos intereses en un entorno seguro y relajado.",
              },
              {
                icon: Calendar,
                title: "Planes",
                description:
                  "Fiestas, recitales, juntadas, etc. Siempre hay algo pasando cerca tuyo.",
              },
              {
                icon: Heart,
                title: "Afinidad Pura",
                description:
                  "Nuestro sistema te muestra personas compatibles para poder compartir la experiencia juntos.",
              },
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-[28px] border border-gray-200/80 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF3D4] flex items-center justify-center mb-6">
                    <FeatureIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Tipos de eventos */}
      <section id="eventos" className="py-14 sm:py-16 md:py-20 px-4 bg-[#F7F2E9]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  ¿Qué tipos de eventos podés encontrar?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Explorá categorías diseñadas para que encuentres tu lugar, sin importar tu mood.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {eventCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[28px] h-[330px] sm:h-[360px] shadow-lg ${
                  index % 2 === 1 ? "sm:mt-8 lg:mt-10" : ""
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={420}
                  height={560}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-white/90 text-sm mb-1">{category.category}</p>
                  <h3 className="text-white text-3xl font-semibold leading-tight">{category.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ¿Cómo funciona? */}
      <section id="como-funciona" className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Así de simple. Así de real.
            </h2>
          </motion.div>

          {/* ALTERNATIVA A: Diseño centrado sin línea */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 sm:gap-12">
              {[
                {
                  step: "1️⃣",
                  title: "Elegí un evento que te interese",
                  description: "Una fiesta, un recital, una salida o un lugar que te guste."
                },
                {
                  step: "2️⃣",
                  title: "Conectá con personas que también van",
                  description: "Descubrí a quienes comparten tus intereses y van al mismo lugar."
                },
                {
                  step: "3️⃣",
                  title: "Viví el encuentro",
                  description: "Después de todo, salir del chat es donde empieza lo bueno."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Línea conectora entre pasos */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-16 sm:top-20 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-yellow-300 to-yellow-500 z-0"></div>
                  
                  <div className="text-center relative z-10">
                    {/* Número de paso grande centrado */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-yellow rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6 shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Contenido del paso */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ALTERNATIVA B: Diseño original con línea lateral (comentado) */}
          {/* 
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 hidden lg:block"></div>
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 lg:hidden"></div>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {[
                {
                  step: "1️⃣",
                  title: "Elegí un plan que te interese",
                  description: "Un evento, una salida, un lugar que te guste."
                },
                {
                  step: "2️⃣",
                  title: "Conectá con personas que también van",
                  description: "Descubrí a quienes comparten tus intereses y van al mismo plan."
                },
                {
                  step: "3️⃣",
                  title: "Viví el encuentro",
                  description: "Después de todo, salir del chat es donde empieza lo bueno."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 relative">
                      <div className="absolute -left-4 lg:relative lg:left-0 -top-4 lg:top-0 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-yellow rounded-lg lg:rounded-xl flex items-center justify-center text-lg lg:text-2xl mb-4 lg:mb-0 lg:flex-shrink-0">
                        {step.step}
                      </div>
                      
                      <div className="lg:flex lg:items-start lg:gap-4 lg:ml-0 ml-6">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-yellow rounded-full items-center justify-center text-2xl font-bold text-gray-900 relative z-10 flex-shrink-0">
                  </div>
                  
                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>

      {/* 5. ¿Por qué elegir Wit Ü? */}
      <section id="por-que" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Todavía no te sumaste a Wit Ü?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Somos la evolución de las conexiones sociales, donde la tecnología se encuentra con experiencias reales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Conexiones auténticas",
                description: "Conexiones genuinas basadas en afinidades reales",
                features: ["Perfiles verificados", "Afinidades reales", "Intereses compartidos"]
              },
              {
                icon: Star,
                title: "Experiencias únicas",
                description: "Cada evento es una oportunidad de vivir algo nuevo",
                features: ["Eventos exclusivos", "Experiencias memorables", "Comunidad activa"]
              },
              {
                icon: Globe,
                title: "Compromiso social",
                description: "Estamos comprometidos con la problemática social: menos scroll, más miradas",
                features: ["Encuentros cara a cara", "Menos tiempo en pantalla", "Más experiencias auténticas"]
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
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Llamado a la acción final */}
      <section id="waitlist" className="py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Lo digital te acerca, Wit Ü te encuentra.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Sumate a la comunidad que está cambiando la forma de conocer gente.<br />
              Los planes te esperan afuera.
            </p>
            
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
                    {isLoading ? "Enviando..." : "Unite a la Waitlist"}
                  </button>
                </div>
              </form>
            ) : (
              <ThankYouWidget className="max-w-2xl mx-auto" />
            )}

            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>🚀 Lanzamiento estimado: Próximas semanas</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>📧 Te enviaremos actualizaciones importantes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>🔒 Tu información está completamente segura</span>
              </div>
            </div>
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
              href="https://www.tiktok.com/@witu.app" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/company/witu-app" 
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
            <Link href="/privacidad" className="text-gray-600 hover:text-gray-900 transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="text-gray-600 hover:text-gray-900 transition-colors">
              Términos y condiciones
            </Link>
            <Link href="/safety" className="text-gray-600 hover:text-gray-900 transition-colors">
              Seguridad
            </Link>
            <Link href="/delete-account" className="text-gray-600 hover:text-gray-900 transition-colors">
              Eliminar cuenta
            </Link>
            <a href="mailto:wituapp@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contacto
            </a>
          </div>
          
          <p className="text-gray-600 text-sm">
            © 2026 Wit Ü. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
