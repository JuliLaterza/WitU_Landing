"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  Calendar,
  Users2,
  Globe,
  Star,
  ChevronLeft,
  ChevronRight
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
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  // Datos de eventos para el carrusel
  const events = [
    {
      icon: Music,
      title: "Fiestas y boliches",
      description: "Bailá y divertite con gente que comparte tu música",
      color: "from-yellow-400 to-yellow-600",
      image: "/assets/images/amigos-boliches.jpg"
    },
    {
      icon: Calendar,
      title: "Recitales",
      description: "Viví la música en vivo con personas que aman los mismos artistas",
      color: "from-yellow-500 to-orange-500",
      image: "/assets/images/recitales.jpg"
    },
    {
      icon: MapPin,
      title: "Planes en plazas",
      description: "Mates, música, naturaleza y correr o entrenar.",
      color: "from-orange-400 to-yellow-500",
      image: "/assets/images/parqueny.jpeg"
    }
  ];

  // Funciones de navegación con scroll
  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Funciones para manejar el swipe y scroll
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextEvent();
    }
    if (isRightSwipe) {
      prevEvent();
    }
  };


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
                href="/safety" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                Seguridad
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

      {/* 1. Hero Section - Pantalla completa al inicio */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 pt-20 pb-8 overflow-hidden relative hero-trama"
      >
        {/* Overlay sutil para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-white/20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto w-full relative z-10"
        >
          {/* Fondo sólido detrás del contenido */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            Conectá con personas que viven lo mismo que vos
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2 drop-shadow-md">
            Desconectá de la pantalla y volvé a conectar en la vida real.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2 drop-shadow-md">
            Porque los mejores planes no pasan online.
          </p>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
                placeholder="Tu email"
                className="flex-1 px-6 py-3 sm:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-dark focus:border-transparent text-base placeholder:text-gray-500 bg-white/95 backdrop-blur-sm shadow-lg"
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-gradient-yellow text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gradient-yellow-reverse shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {isLoading ? "Enviando..." : "Unite a la comunidad"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <ThankYouWidget />
            </motion.div>
          )}
          </div>
        </motion.div>
      </section>

      {/* 2. ¿Qué es Wit Ü? */}
      <section id="que-es" className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              No somos una app de citas.<br />
              Somos la red social que se vive en la vida real.
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left order-2 lg:order-1"
            >
              <div className="text-center">
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  En un mundo donde todos están conectados, pero pocos se conocen de verdad, nació Wit Ü:
                  una app pensada para que vuelvas a hacer planes y conocer gente con tus mismos intereses.
                </p>
              </div>
              
              <div className="bg-yellow-100 rounded-xl p-4 mb-6 sm:mb-8">
                <p className="text-lg font-semibold text-gray-800 text-center">
                  Lo digital te acerca, Wit Ü te encuentra.
                </p>
              </div>
              
              {/* Filosofía Wit Ü recreada con código */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-sm sm:max-w-md"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
                  {/* Fórmula principal */}
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-4 mb-4 sm:mb-6">
                    <div className="text-center flex flex-col items-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">U</div>
                      <div className="text-xs text-gray-600 h-4 flex items-center">You</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 flex items-center h-full">+</div>
                    <div className="text-center flex flex-col items-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-500 mb-1">:)</div>
                      <div className="text-xs text-gray-600 h-4 flex items-center">Alegría</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 flex items-center h-full">+</div>
                    <div className="text-center flex flex-col items-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">i i</div>
                      <div className="text-xs text-gray-600 h-4 flex items-center">Personas</div>
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 flex items-center h-full">=</div>
                    <div className="text-center flex flex-col items-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">Ü</div>
                      <div className="text-xs text-gray-600 h-4 flex items-center">Wit Ü</div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-yellow rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <Users2 className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gray-900" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">Conexiones Reales</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">Personas con intereses similares</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-yellow rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <Calendar className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gray-900" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">Eventos y Actividades</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">Experiencias en el mundo real</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-yellow rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <Heart className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gray-900" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">Afinidades</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">Gustos compartidos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Tipos de eventos */}
      <section id="eventos" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              ¿Qué tipos de eventos podés encontrar?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
              En la app vas a encontrar planes para todos los gustos y momentos:
            </p>
          </motion.div>

          {/* Carrusel con swipe y scroll */}
          <div className="relative max-w-4xl mx-auto">
            {/* Flechitas de navegación para desktop - Posicionadas fuera del carrusel */}
            <button
              onClick={prevEvent}
              className="hidden lg:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100"
              aria-label="Evento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextEvent}
              className="hidden lg:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100"
              aria-label="Siguiente evento"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Contenedor del carrusel */}
            <div 
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${currentEventIndex * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {events.map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 mx-2">
                      {/* Contenido del evento */}
                      <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r ${event.color} rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0`}>
                          {(() => {
                            const EventIcon = event.icon;
                            return <EventIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />;
                          })()}
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                          {event.title}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                          {event.description}
                        </p>
                      </div>
                      
                      {/* Imagen del evento */}
                      <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
                        <div className="bg-gray-100 rounded-xl sm:rounded-2xl h-64 sm:h-80 lg:h-96 overflow-hidden">
                          <Image 
                            src={event.image}
                            alt={event.title}
                            width={500}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Indicadores únicamente */}
            <div className="flex justify-center space-x-2 mt-8">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                    index === currentEventIndex
                      ? 'bg-gradient-yellow scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al evento ${index + 1}`}
                />
              ))}
            </div>

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
                  {index < 2 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-16 sm:top-20 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-yellow-300 to-yellow-500 z-0"></div>
                  )}
                  
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
            © 2025 Wit Ü. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
