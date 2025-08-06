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
  Users2,
  Star,
  Shield,
  Bell
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
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto w-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Conectá con personas antes, durante y después del evento.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Wit Ü te ayuda a salir de la pantalla y encontrarte en la vida real.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Elegí un plan, mirá quién va y coordiná para compartirlo.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-yellow text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gradient-yellow-reverse hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            Unite a la Waitlist
          </motion.button>
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
              ¿Qué es Wit Ü?
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
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Es una red social para conocer gente nueva, conectar con quienes viven tus mismos planes y comparten tus intereses.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Combina eventos reales con tecnología inteligente para crear conexiones auténticas.
              </p>
              
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
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                      <Users2 className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Conexiones Reales</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Personas con intereses similares</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                      <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Eventos Auténticos</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Experiencias en el mundo real</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">IA Inteligente</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Matches precisos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Afinidades</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Gustos compartidos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Tipos de eventos */}
      <section id="eventos" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
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

          <div className="space-y-8 sm:space-y-12">
            {[
              {
                icon: Music,
                title: "Fiestas y boliches",
                description: "Bailá y divertite con gente que comparte tu música",
                color: "from-yellow-400 to-yellow-600"
              },
              {
                icon: Calendar,
                title: "Recitales",
                description: "Viví la música en vivo con personas que aman los mismos artistas",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: MapPin,
                title: "Deportes y actividades al aire libre",
                description: "Ejercitate y explorá la naturaleza con compañía",
                color: "from-orange-400 to-yellow-500"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-12`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${event.color} rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg mx-auto lg:mx-0`}>
                    <event.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {event.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                <div className="flex-1 w-full lg:w-auto">
                  <div className="bg-gray-100 rounded-2xl sm:rounded-3xl h-48 sm:h-64 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <event.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-20" />
                      <p className="text-xs sm:text-sm">Visualización del evento</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ¿Cómo funciona? */}
      <section id="como-funciona" className="py-20 px-4 bg-yellow-light">
        <div className="container mx-auto max-w-5xl">
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
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Cuatro simples pasos para transformar tu forma de conocer personas y crear conexiones
            </p>
          </motion.div>

          <div className="relative">
            {/* Línea de conexión */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Crea tu perfil",
                  description: "Contanos sobre vos, tus gustos, intereses y qué tipo de conexiones buscas.",
                  icon: User
                },
                {
                  step: "2",
                  title: "Elegí el evento o actividad social",
                  description: "Selecciona dentro del catálogo de eventos y actividades sociales que tenemos para vos",
                  icon: Calendar
                },
                {
                  step: "3",
                  title: "Explora perfiles compatibles",
                  description: "Descubrí los perfiles de las personas que tienen intereses y gustos similares a los tuyos",
                  icon: Users2
                },
                {
                  step: "4",
                  title: "¡Conecta antes de que empiece!",
                  description: "Chatea y rompe el hielo antes de asistir.",
                  icon: Heart
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-yellow rounded-xl flex items-center justify-center text-xl font-bold text-gray-900">
                          {step.step}
                        </div>
                        <step.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 relative z-10">
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
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
              ¿Por qué elegir Wit Ü?
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
                features: ["Verificación de perfiles", "Eventos reales"]
              },
              {
                icon: Star,
                title: "Experiencias únicas",
                description: "Cada evento es una oportunidad de vivir algo nuevo",
                features: ["Eventos exclusivos", "Experiencias memorables", "Comunidad activa"]
              },
              {
                icon: Brain,
                title: "Algoritmo inteligente",
                description: "IA que aprende tus preferencias para sugerir matches perfectos",
                features: ["Matches precisos", "Recomendaciones personalizadas", "Aprendizaje continuo"]
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

      {/* 6. Llamado a la acción final */}
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
              Unite a la Waitlist
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Sé de los primeros en vivir la experiencia Wit Ü. Te notificaremos cuando estemos listos para lanzar la app.
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
                  Te avisaremos cuando lancemos la app 🫶🏼.
                </p>
              </motion.div>
            )}

            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Bell className="w-4 h-4 text-black-500" />
                <span>🚀 Lanzamiento estimado: Próximas semanas</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-black-500" />
                <span>📧 Te enviaremos actualizaciones importantes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-black-500" />
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
