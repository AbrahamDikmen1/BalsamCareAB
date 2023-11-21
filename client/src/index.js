import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import translation_en from "./translations/english/translation.json";
import translation_se from "./translations/se/translation.json";
import translation_ar from "./translations/arabic/translation.json";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetctor from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next)
  .use(LanguageDetctor)
  .init({
    resources: {
      se: {
        translation: translation_se,
      },
      en: {
        translation: translation_en,
      },
      ar: {
        translation: translation_ar,
      },
    },
    lng: "se",
    fallbackLng: "se",
    interpolation: {
      escapeValue: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
