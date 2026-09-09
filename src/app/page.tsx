"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X as CloseIcon,
  Calendar,
  Users2,
} from "lucide-react";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
  </svg>
);

type Language = "es" | "en";

const EUROPE_COUNTRY_CODES = new Set([
  "AL", "AD", "AM", "AT", "AZ", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK",
  "EE", "FI", "FR", "GE", "DE", "GR", "HU", "IS", "IE", "IT", "KZ", "XK", "LV",
  "LI", "LT", "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO",
  "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB", "VA",
]);

const getRegionFromLocale = (locale: string) => {
  const match = locale.match(/[-_]([A-Za-z]{2})$/);
  return match ? match[1].toUpperCase() : null;
};

const detectDefaultLanguage = (): Language => {
  if (typeof window === "undefined") return "es";

  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const locale of locales) {
    const region = getRegionFromLocale(locale);
    if (!region) continue;
    if (region === "US" || EUROPE_COUNTRY_CODES.has(region)) return "en";
    return "es";
  }

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone?.startsWith("Europe/")) return "en";
  } catch {
    // noop
  }

  return "es";
};

const copy = {
  es: {
    nav: {
      whatIs: "¿Qué es?",
      events: "Eventos",
      howItWorks: "¿Cómo funciona?",
      safety: "Seguridad",
      addEvent: "Quiero sumar mi evento",
      download: "Descargar",
      switchLabel: "Cambiar idioma a inglés",
      switchButton: "🇺🇸 EN",
    },
    thankYou: {
      title: "¡Gracias por sumarte! 🎉",
      badge: "✅ Ya sos parte de Wit Ü",
      description: "Descargá la app y empezá a conectar en la vida real.",
      next: "¿Qué sigue ahora?",
      updates: "Te enviaremos actualizaciones importantes",
      earlyAccess: "Acceso a la app",
    },
    hero: {
      badge: "✨ Planes, eventos y gente nueva",
      titleStart: "Encontrá dónde salir y conocé",
      titleHighlight: "gente como vos",
      subtitle: "Wit Ü es la app para descubrir planes, eventos y actividades, conocer gente nueva y conectar en la vida real.",
      emailPlaceholder: "Tu email principal",
      submit: "Unite a la comunidad",
      support: "Nos apoyan",
      appStoreAria: "Descargar en App Store",
      playStoreAria: "Descargar en Google Play",
      appStoreAlt: "Descargar en App Store",
      playStoreAlt: "Descargar en Google Play",
      downloadLabel: "DESCARGALA EN:",
      sending: "Enviando...",
      socialProof: "personas en la comunidad",
    },
    queEs: {
      titleStart: "La app para hacer planes y conocer gente en la",
      titleHighlight: "vida real",
      cards: [
        {
          title: "Conocer gente",
          description: "Encontrá personas con intereses parecidos para hacer amigos, compartir salidas y romper el hielo antes del plan.",
        },
        {
          title: "Planes y eventos",
          description: "Descubrí fiestas, recitales, juntadas, actividades al aire libre y experiencias para saber dónde salir.",
        },
        {
          title: "Afinidad real",
          description: "La app te acerca a personas compatibles para que compartir una experiencia sea más natural y seguro.",
        },
      ],
    },
    eventos: {
      title: "Planes para salir, eventos y actividades",
      description: "Si te preguntás dónde salir, qué hacer hoy o cómo conocer gente nueva, Wit Ü te muestra experiencias para compartir en la vida real.",
      categories: [
        { category: "Fiestas", title: "Boliches", image: "/assets/images/amigos-boliches.jpg" },
        { category: "Recitales", title: "Festivales y recitales musicales", image: "/assets/images/recitales.jpg" },
        { category: "Plazas", title: "Naturaleza y aire libre", image: "/assets/images/juntadas_parque.jpeg" },
        { category: "Deportes", title: "Clubes de running", image: "/assets/images/running2.jpg" },
      ],
    },
    comoFunciona: {
      title: "Así de simple. Así de real.",
      subtitle: "Tres pasos para pasar de buscar planes a vivirlos con otras personas.",
      steps: [
        { step: "1", title: "Elegí tu plan", description: "Encontrá eventos, salidas o actividades que se ajusten a tus intereses." },
        { step: "2", title: "Conectá con personas", description: "Conocé gente que también quiere ir y compartir la experiencia." },
        { step: "3", title: "Rompé el hielo", description: "Enviá un mensaje antes del evento y llegá con una conexión previa." },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas rápidas para quienes buscan planes, dónde salir o conocer gente nueva.",
      questions: [
        {
          question: "¿Cómo puedo conocer gente nueva sin que sea incómodo?",
          answer: "La app usa planes y eventos como punto de encuentro, así ya tenés una excusa natural para conversar y romper el hielo.",
        },
        {
          question: "¿Qué puedo hacer si no sé dónde salir?",
          answer: "Podés entrar a Wit Ü para descubrir eventos, salidas y actividades según tus intereses, y encontrar personas que también quieran ir.",
        },
        {
          question: "¿Wit Ü es una app de citas?",
          answer: "No es una app de citas tradicional. Wit Ü pone primero los planes y eventos para que las conexiones nazcan en contextos reales.",
        },
        {
          question: "¿Puedo usar Wit Ü aunque vaya sin grupo?",
          answer: "Sí. La idea es que puedas sumarte a planes y conectar antes con otras personas para no llegar sin conocer a nadie.",
        },
      ],
    },
    nosotros: {
      title: "Equipo",
      team: [
        { name: "Catalina Barcic", role: "CMO", image: "/assets/images/cata-foto.png", linkedin: "https://www.linkedin.com/in/catalinabarciczupan/" },
        //{ name: "Alfredo Calvelo", role: "CTO", image: "/assets/images/alf-emprelatam2.png", linkedin: "https://www.linkedin.com/in/alfredo-calvelo/" },
        { name: "Julián Laterza", role: "CEO", image: "/assets/images/juli-foto.png", linkedin: "https://www.linkedin.com/in/jlaterza/" },
      ],
    },
    download: {
      titleStart: "Lo digital te acerca,",
      titleHighlight: "Wit Ü te encuentra.",
      description: "Sumate a los miles de jóvenes que ya están cambiando su forma de socializar. Descargá la app ahora y empezá a conectar en la vida real.",
      launchBadge: "🏙️ Buenos Aires · Ya disponible",
    },
    footer: {
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      safety: "Seguridad",
      deleteAccount: "Eliminar cuenta",
      contact: "Contacto",
      copyright: "© 2026 Wit Ü. Todos los derechos reservados.",
    },
    errors: {
      submitFailed: "Hubo un error al enviar tu email. Por favor, intenta nuevamente.",
    },
  },
  en: {
    nav: {
      whatIs: "What is it?",
      events: "Events",
      howItWorks: "How it works",
      safety: "Safety",
      addEvent: "Add my event",
      download: "Download",
      switchLabel: "Switch language to Spanish",
      switchButton: "🇪🇸 ES",
    },
    thankYou: {
      title: "Thanks for joining! 🎉",
      badge: "✅ You're part of Wit Ü",
      description: "Download the app and start connecting in real life.",
      next: "What's next?",
      updates: "We'll send you important updates",
      earlyAccess: "Access to the app",
    },
    hero: {
      badge: "✨ Plans, events and new people",
      titleStart: "Find where to go out and meet",
      titleHighlight: "people like you",
      subtitle: "Wit Ü is the app to discover plans, events and activities, meet new people and connect in real life.",
      emailPlaceholder: "Your main email",
      submit: "Join the community",
      support: "Supported by",
      appStoreAria: "Download on the App Store",
      playStoreAria: "Download on Google Play",
      appStoreAlt: "Download on the App Store",
      playStoreAlt: "Get it on Google Play",
      downloadLabel: "DOWNLOAD IT ON:",
      sending: "Sending...",
      socialProof: "people in the community",
    },
    queEs: {
      titleStart: "The app to make plans and meet people in",
      titleHighlight: "real life",
      cards: [
        {
          title: "Meet people",
          description: "Find people with similar interests to make friends, share plans and break the ice before going out.",
        },
        {
          title: "Plans and events",
          description: "Discover parties, concerts, meetups, outdoor activities and experiences when you are wondering where to go out.",
        },
        {
          title: "Real affinity",
          description: "The app connects you with compatible people so sharing an experience feels more natural and safe.",
        },
      ],
    },
    eventos: {
      title: "Plans to go out, events and activities",
      description: "If you are wondering where to go out, what to do today or how to meet new people, Wit Ü shows experiences to share in real life.",
      categories: [
        { category: "Parties", title: "Clubs", image: "/assets/images/amigos-boliches.jpg" },
        { category: "Concerts", title: "Festivals and live concerts", image: "/assets/images/recitales.jpg" },
        { category: "Parks", title: "Nature and outdoors", image: "/assets/images/juntadas_parque.jpeg" },
        { category: "Sports", title: "Running clubs", image: "/assets/images/runningclub.jpg" },
      ],
    },
    comoFunciona: {
      title: "Simple. Real.",
      subtitle: "Three steps to go from searching for plans to living them with other people.",
      steps: [
        { step: "1", title: "Choose your plan", description: "Find events, outings or activities that match your interests." },
        { step: "2", title: "Connect with people", description: "Meet people who also want to go and share the experience." },
        { step: "3", title: "Break the ice", description: "Send a message before the event and arrive with a connection already started." },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Quick answers for people looking for plans, where to go out or how to meet new people.",
      questions: [
        {
          question: "How can I meet new people without it feeling awkward?",
          answer: "The app uses plans and events as the meeting point, so you already have a natural reason to talk and break the ice.",
        },
        {
          question: "What can I do if I don't know where to go out?",
          answer: "You can open Wit Ü to discover events, outings and activities based on your interests, and find people who also want to go.",
        },
        {
          question: "Is Wit Ü a dating app?",
          answer: "It is not a traditional dating app. Wit Ü puts plans and events first so connections can start in real-life contexts.",
        },
        {
          question: "Can I use Wit Ü if I don't have a group to go with?",
          answer: "Yes. The idea is that you can join plans and connect with other people beforehand, so you don't arrive without knowing anyone.",
        },
      ],
    },
    nosotros: {
      title: "Team",
      team: [
        { name: "Catalina Barcic", role: "CMO", image: "/assets/images/cata-foto.png", linkedin: "https://www.linkedin.com/in/catalinabarciczupan/" },
        //{ name: "Alfredo Calvelo", role: "CTO", image: "/assets/images/alf-emprelatam2.png", linkedin: "https://www.linkedin.com/in/alfredo-calvelo/" },
        { name: "Julián Laterza", role: "CEO", image: "/assets/images/juli-foto.png", linkedin: "https://www.linkedin.com/in/jlaterza/" },
      ],
    },
    download: {
      titleStart: "Digital brings you closer,",
      titleHighlight: "Wit Ü brings you together.",
      description: "Join thousands of young people already changing how they socialize. Download the app now and start connecting in real life.",
      launchBadge: "🏙️ Buenos Aires · Available now",
    },
    footer: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      safety: "Safety",
      deleteAccount: "Delete account",
      contact: "Contact",
      copyright: "© 2026 Wit Ü. All rights reserved.",
    },
    errors: {
      submitFailed: "There was an error sending your email. Please try again.",
    },
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("witu-language");
    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      return;
    }
    setLanguage(detectDefaultLanguage());
  }, []);

  const toggleLanguage = () => {
    const nextLanguage: Language = language === "es" ? "en" : "es";
    setLanguage(nextLanguage);
    window.localStorage.setItem("witu-language", nextLanguage);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const eventCategories = t.eventos.categories;


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
                {t.nav.whatIs}
              </a>
              <a
                href="#eventos"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {t.nav.events}
              </a>
              <a
                href="#como-funciona"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {t.nav.howItWorks}
              </a>
              <Link
                href="/sumar-evento"
                className="bg-gray-900 text-white px-3 lg:px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
              >
                {t.nav.addEvent}
              </Link>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-yellow text-gray-900 px-3 lg:px-4 py-2 rounded-full font-medium hover:bg-gradient-yellow-reverse transition-all duration-300 cursor-pointer text-sm lg:text-base whitespace-nowrap"
              >
                {t.nav.download}
              </a>
              <button
                onClick={toggleLanguage}
                aria-label={t.nav.switchLabel}
                className="px-3 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {t.nav.switchButton}
              </button>
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
                    {t.nav.whatIs}
                  </a>
                  <a
                    href="#eventos"
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    {t.nav.events}
                  </a>
                  <a
                    href="#como-funciona"
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    {t.nav.howItWorks}
                  </a>
                  <Link
                    href="/safety"
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    {t.nav.safety}
                  </Link>
                  <Link
                    href="/sumar-evento"
                    onClick={closeMobileMenu}
                    className="bg-gray-900 text-white px-4 py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    {t.nav.addEvent}
                  </Link>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMobileMenu();
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-yellow text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gradient-yellow-reverse transition-all duration-300 text-center cursor-pointer"
                  >
                    {t.nav.download}
                  </a>
                  <button
                    onClick={() => {
                      toggleLanguage();
                      closeMobileMenu();
                    }}
                    className="px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 text-center"
                  >
                    {t.nav.switchButton}
                  </button>
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
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-900 px-4 py-1.5 text-sm font-semibold mb-6 border border-yellow-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600" />
                </span>
                {t.hero.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.12] mb-6">
                {t.hero.titleStart}
                <span className="block italic bg-gradient-to-r from-gray-900 via-gray-800 to-yellow-700 bg-clip-text text-transparent pb-1">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-7 max-w-xl">
                {t.hero.subtitle}
              </p>



              <div>
                <p className="mb-3 text-xs sm:text-sm font-black tracking-[0.22em] text-gray-500">
                  {t.hero.downloadLabel}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://apps.apple.com/ar/app/wit-%C3%BC/id6753308292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-[1.02]"
                    aria-label={t.hero.appStoreAria}
                  >
                    <Image
                      src="/assets/images/AppStore.png"
                      alt={t.hero.appStoreAlt}
                      width={500}
                      height={150}
                      className="h-[55px] w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.witu.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-[1.02]"
                    aria-label={t.hero.playStoreAria}
                  >
                    <Image
                      src="/assets/images/playstore.png"
                      alt={t.hero.playStoreAlt}
                      width={500}
                      height={150}
                      className="h-[85px] w-auto"
                    />
                  </a>
                </div>
              </div>

            </div>

            <div className="order-2 lg:order-2">
              <div className="relative max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] mx-auto">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="relative"
                  >
                    <Image
                      src="/assets/images/events-screensinfondo.png"
                      alt="Pantalla de eventos de Wit Ü"
                      width={520}
                      height={980}
                      className="w-[62%] sm:w-[60%] lg:w-[58%] h-auto drop-shadow-2xl mx-auto"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-7 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-4">
              {t.hero.support}
            </p>
            <div className="flex flex-wrap items-center justify-around w-full gap-6 sm:gap-8">
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
                className="h-9 sm:h-10 w-auto opacity-80"
              />
              <Image
                src="/assets/images/sponsors/aws-startups.png"
                alt="AWS Startup Programs"
                width={130}
                height={40}
                className="h-7 sm:h-8 w-auto opacity-80"
              />
              <Image
                src="/assets/images/sponsors/logo.png"
                alt="IAE"
                width={180}
                height={120}
                className="h-13 sm:h-14 w-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ¿Qué es Wit Ü? */}
      <section id="que-es" className="py-14 sm:py-16 md:py-20 px-4 bg-[#231f20]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-14"
          >
            <div className="inline-block bg-[#231f20] rounded-[48px] px-5 py-3 sm:px-7 sm:py-4 mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {t.queEs.titleStart}{" "}
                <span className="italic text-[#fcd517]">{t.queEs.titleHighlight}</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {[Users2, Calendar, Heart].map((FeatureIcon, index) => {
              const feature = t.queEs.cards[index];
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-[20px] sm:rounded-[28px] border border-gray-200/80 bg-white p-4 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#fcd517]/50 transition-all cursor-default"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#fcd517]/30 to-[#fcd517]/10 flex items-center justify-center mb-3 sm:mb-6 border border-[#fcd517]/30">
                    <FeatureIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#231f20]" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Tipos de eventos */}
      <section id="eventos" className="py-14 sm:py-16 md:py-20 px-4 bg-white">
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
                  {t.eventos.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {t.eventos.description}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {eventCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[22px] sm:rounded-[28px] h-[220px] sm:h-[360px] shadow-lg cursor-pointer ${index % 2 === 1 ? "sm:mt-8 lg:mt-10" : ""
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
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                  <p className="text-white/90 text-xs sm:text-sm mb-1">{category.category}</p>
                  <h3 className="text-white text-lg sm:text-3xl font-semibold leading-tight">{category.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ¿Cómo funciona? */}
      <section id="como-funciona" className="py-14 sm:py-16 md:py-20 px-4 bg-[#231f20]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {t.comoFunciona.title}
            </h2>
            <p className="text-lg sm:text-2xl text-white/80">
              {t.comoFunciona.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {[
              "/assets/images/elegis_plan1.png",
              "/assets/images/conectar1.png",
              "/assets/images/mensajes1.png",
            ].map((img, index) => {
              const step = t.comoFunciona.steps[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#fcd517] text-[#231f20] text-2xl font-black flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    {step.step}
                  </div>
                  <div className="mb-6">
                    <Image
                      src={img}
                      alt={step.title}
                      width={400}
                      height={400}
                      className="w-48 sm:w-56 h-auto mx-auto rounded-[45px]"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Nosotros */}
      <section id="nosotros" className="py-14 sm:py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t.nosotros.title}
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            {t.nosotros.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center w-full sm:w-64"
              >
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden mb-5 shadow-lg border-4 border-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{member.name}</h3>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
                <p className="text-gray-600 font-medium sm:text-lg">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Preguntas frecuentes */}
      <section className="py-14 sm:py-16 md:py-20 px-4 bg-[#FFFCF4]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t.faq.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.faq.subtitle}
            </p>
          </motion.div>

          <div className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-[24px] border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg sm:text-xl font-bold text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Llamado a la acción final */}
      <section id="download" className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 bg-[#231f20]"
          >
            <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[#fcd517]/12 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold leading-[1.18] text-white mb-6">
                {t.download.titleStart}
                <span className="block text-[#fcd517] py-3">{t.download.titleHighlight}</span>
              </h2>

              <p className="text-lg sm:text-2xl text-white/75 mb-9">
                {t.download.description}
              </p>

              <div>
                <p className="mb-3 text-xs sm:text-sm font-black tracking-[0.22em] text-[#fcd517]">
                  {t.hero.downloadLabel}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://apps.apple.com/ar/app/wit-%C3%BC/id6753308292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-[1.02]"
                    aria-label={t.hero.appStoreAria}
                  >
                    <Image
                      src="/assets/images/AppStore.png"
                      alt={t.hero.appStoreAlt}
                      width={500}
                      height={150}
                      className="h-[55px] w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.witu.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-[1.02]"
                    aria-label={t.hero.playStoreAria}
                  >
                    <Image
                      src="/assets/images/playstore.png"
                      alt={t.hero.playStoreAlt}
                      width={500}
                      height={150}
                      className="h-[80px] w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-14 px-4 border-t border-gray-100 bg-[#FFFCF4]">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/assets/images/logo_witu.png"
              alt="Wit Ü Logo"
              width={96}
              height={32}
              className="w-24 h-8 mb-2"
            />
            <p className="text-sm text-gray-400 font-medium tracking-wide">
              {language === "es" ? "La vida pasa afuera" : "Life happens outside"}
            </p>
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

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 mb-4 px-2 text-sm text-center">
            <Link href="/privacidad" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terminos" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.footer.terms}
            </Link>
            <Link href="/safety" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.footer.safety}
            </Link>
            <Link href="/delete-account" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.footer.deleteAccount}
            </Link>
            <a href="mailto:wituapp@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.footer.contact}
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
