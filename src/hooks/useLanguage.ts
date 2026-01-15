import { useTranslation } from "react-i18next";

const LANG_KEY = "language";

export function useLanguage() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt-BR" ? "en" : "pt-BR";

    i18n.changeLanguage(newLang);
    localStorage.setItem(LANG_KEY, newLang);
  };

  return {
    language: i18n.language,
    toggleLanguage,
  };
}
