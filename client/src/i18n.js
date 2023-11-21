import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetctor from "i18next-browser-languagedetector";

i18n.use(LanguageDetctor).use(initReactI18next).init({
  debug: true,
  fallbackLang: "swe",
});

export default i18n;
