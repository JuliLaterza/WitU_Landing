"use client";

import { useEffect, useState } from "react";

export type Language = "es" | "en";

const EUROPE_COUNTRY_CODES = new Set([
  "AL", "AD", "AM", "AT", "AZ", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK",
  "EE", "FI", "FR", "GE", "DE", "GR", "HU", "IS", "IE", "IT", "XK", "LV", "LI",
  "LT", "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO", "RU",
  "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB", "VA",
]);

const getRegionFromLocale = (locale: string) => {
  const match = locale.match(/[-_]([A-Za-z]{2})$/);
  return match ? match[1].toUpperCase() : null;
};

export const detectDefaultLanguage = (): Language => {
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

export const useAppLanguage = () => {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("witu-language");
    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      return;
    }
    setLanguage(detectDefaultLanguage());
  }, []);

  const setAndPersistLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("witu-language", nextLanguage);
  };

  const toggleLanguage = () => {
    setAndPersistLanguage(language === "es" ? "en" : "es");
  };

  return { language, setLanguage: setAndPersistLanguage, toggleLanguage };
};
