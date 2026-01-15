import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface text-text text-sm">
      <div className="flex flex-col md:flex-row justify-between px-4 py-2">
        <span>{t("footer.text")}</span>
        <span>© {new Date().getFullYear()}. {t("footer.copyright")}</span>
      </div>
    </footer>
  )
}

export default Footer;