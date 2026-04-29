"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useAppLanguage } from "@/lib/language";

const copy = {
  es: {
    back: "Volver",
    switch: "🇺🇸 EN",
    heading: "Convertí tu evento en una experiencia que empieza antes.",
    sub1: "Aumentá la asistencia y conocé a tu público como nunca antes.",
    sub2: "Wit Ü conecta personas y potencia tus resultados.",
    sub3: "Unite a nosotros para transformar eventos en oportunidades de conexión real.",
    formTitle: "Dejanos tu mail o tu Whatsapp",
    formSubtitle: "Te contactamos para contarte cómo funciona",
    emailPlaceholder: "Tu email",
    whatsappPlaceholder: "Tu WhatsApp (ej: 1123456789)",
    submit: "¡Quiero sumar mi evento!",
    sending: "Enviando...",
    thanks: "¡Gracias!",
    thanksBody: "Nos ponemos en contacto a la brevedad.",
    networkError: "Error de red",
  },
  en: {
    back: "Back",
    switch: "🇪🇸 ES",
    heading: "Turn your event into an experience that starts before it begins.",
    sub1: "Increase attendance and understand your audience like never before.",
    sub2: "Wit Ü connects people and boosts your results.",
    sub3: "Join us to transform events into real connection opportunities.",
    formTitle: "Leave your email or WhatsApp",
    formSubtitle: "We'll contact you and explain how it works",
    emailPlaceholder: "Your email",
    whatsappPlaceholder: "Your WhatsApp (e.g. 1123456789)",
    submit: "I want to add my event!",
    sending: "Sending...",
    thanks: "Thank you!",
    thanksBody: "We'll get in touch shortly.",
    networkError: "Network error",
  },
} as const;

export default function SumarEvento() {
  const { language, toggleLanguage } = useAppLanguage();
  const t = copy[language];
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://sheetdb.io/api/v1/v931bf4afoyd7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mail: email, telefono: whatsapp }),
        }
      );

      const responseText = await response.text();
      console.log("SheetDB response:", response.status, responseText);

      if (!response.ok) {
        alert(`Error ${response.status}: ${responseText}`);
        return;
      }

      setIsSubmitted(true);
      setEmail("");
      setWhatsapp("");
    } catch (error) {
      console.error("Network error:", error);
      alert(`${t.networkError}: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ backgroundColor: "#231f20" }}
    >
      {/* Trama con transparencia */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/trama.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.12,
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo_witu.png"
            alt="Wit Ü"
            width={96}
            height={32}
            className="w-20 h-7 brightness-0 invert"
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
        <button
          onClick={toggleLanguage}
          className="ml-3 px-3 py-1.5 rounded-full border border-white/25 text-xs font-semibold text-white/85 hover:bg-white/10 transition-colors"
        >
          {t.switch}
        </button>
      </header>

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Heading principal grande */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {t.heading}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-2">
            {t.sub1}
          </p>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
            {t.sub2}
          </p>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mt-1">{t.sub3}</p>
        </motion.div>

        {/* Tarjeta del formulario */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            {t.formTitle}
          </h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            {t.formSubtitle}
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.thanks}</h3>
              <p className="text-gray-500 text-sm">
                {t.thanksBody}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base placeholder:text-gray-400 transition-shadow"
              />
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder={t.whatsappPlaceholder}
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base placeholder:text-gray-400 transition-shadow"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-900 text-white py-4 rounded-2xl font-semibold text-base hover:bg-gray-700 transition-colors cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? t.sending : t.submit}
              </button>
            </form>
          )}
        </motion.div>
      </main>

      {/* Footer mínimo */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-white/40 text-xs">© 2026 Wit Ü</p>
      </footer>
    </div>
  );
}
