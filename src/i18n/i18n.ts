import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
  },
  fallbackLng: "en",
});

export { i18n };
